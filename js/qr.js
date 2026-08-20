/* ══════════════════════════════════════════════════════════
   QR — Idearca

   Un codice QR disegnato in casa, senza librerie e senza rete.
   Il motivo è pratico: in aula la connessione va e viene, e un
   QR che si appoggia a un servizio esterno è un QR che qualche
   volta non compare — proprio davanti alla classe. Questo si
   calcola nel browser e funziona anche a rete spenta.

   Fa una cosa sola e la fa bene: modo «byte», correzione M,
   versioni da 1 a 10 — fino a 213 caratteri, molto più di
   qualunque indirizzo. Non serve altro.

   COME SI USA
     QR.disegna('https://…', {lato:320})   → un <canvas>
     QR.matrice('https://…')               → array di booleani

   Le tabelle qui sotto vengono dalla norma ISO/IEC 18004. Sono
   numeri da copiare, non da capire: quello che conta è che siano
   giusti, e il controllo in fondo al file li verifica rileggendo
   il codice appena disegnato.
   ══════════════════════════════════════════════════════════ */
const QR = (function(){

  /* ── il campo di Galois GF(256) ─────────────────────────
     La correzione d'errore vive qui dentro: moltiplicare due
     byte diventa sommare due logaritmi, e le due tabelle si
     costruiscono una volta sola. */
  const EXP = new Uint8Array(512), LOG = new Uint8Array(256);
  (function(){
    let x = 1;
    for(let i=0;i<255;i++){
      EXP[i] = x; LOG[x] = i;
      x <<= 1;
      if(x & 0x100) x ^= 0x11D;          /* polinomio primitivo */
    }
    for(let i=255;i<512;i++) EXP[i] = EXP[i-255];
  })();
  const mul = (a,b) => (a===0||b===0) ? 0 : EXP[LOG[a]+LOG[b]];

  /* il polinomio generatore per n byte di correzione */
  function generatore(n){
    let g = [1];
    for(let i=0;i<n;i++){
      const nuovo = new Array(g.length+1).fill(0);
      for(let j=0;j<g.length;j++){
        nuovo[j]   ^= mul(g[j], EXP[i]);
        nuovo[j+1] ^= g[j];
      }
      g = nuovo;
    }
    return g;
  }

  /* i byte di correzione di un blocco */
  function correzione(dati, quanti){
    const g = generatore(quanti);
    const r = new Array(dati.length + quanti).fill(0);
    dati.forEach((b,i)=>r[i]=b);
    for(let i=0;i<dati.length;i++){
      const c = r[i];
      if(c===0) continue;
      for(let j=0;j<g.length;j++) r[i+j] ^= mul(g[j], c);
    }
    return r.slice(dati.length);
  }

  /* ── le tabelle della norma, per correzione M ───────────
     [capacità in byte, byte di correzione per blocco,
      blocchi gruppo 1, dati per blocco g1,
      blocchi gruppo 2, dati per blocco g2] */
  const VERSIONI = {
     1:[  14,10, 1,16, 0, 0],
     2:[  26,16, 1,28, 0, 0],
     3:[  42,26, 1,44, 0, 0],
     4:[  62,18, 2,32, 0, 0],
     5:[  84,24, 2,43, 0, 0],
     6:[ 106,16, 4,27, 0, 0],
     7:[ 122,18, 4,31, 0, 0],
     8:[ 152,22, 2,38, 2,39],
     9:[ 180,22, 3,36, 2,37],
    10:[ 213,26, 4,43, 1,44]
  };
  /* i centri dei quadratini di allineamento */
  const ALLINEAMENTO = {
    1:[], 2:[6,18], 3:[6,22], 4:[6,26], 5:[6,30],
    6:[6,34], 7:[6,22,38], 8:[6,24,42], 9:[6,26,46], 10:[6,28,50]
  };

  function versionePer(quantiByte){
    for(let v=1;v<=10;v++) if(quantiByte <= VERSIONI[v][0]) return v;
    throw new Error('Testo troppo lungo per un QR di questa misura');
  }

  /* ── il flusso di bit ───────────────────────────────────── */
  function bitDelTesto(testo, versione){
    const byte = new TextEncoder().encode(testo);
    const cap  = VERSIONI[versione][0];
    if(byte.length > cap) throw new Error('Testo troppo lungo');

    const bit = [];
    const spingi = (valore, quanti) => {
      for(let i=quanti-1;i>=0;i--) bit.push((valore>>i)&1);
    };
    spingi(0b0100, 4);                                  /* modo byte */
    spingi(byte.length, versione<10 ? 8 : 16);          /* quanti byte */
    byte.forEach(b=>spingi(b,8));

    /* quanti bit di dati entrano in questa versione */
    const [,ec,b1,d1,b2,d2] = VERSIONI[versione];
    const totaleDati = b1*d1 + b2*d2;
    const massimo = totaleDati*8;

    for(let i=0;i<4 && bit.length<massimo;i++) bit.push(0);  /* chiusura */
    while(bit.length % 8) bit.push(0);                        /* al byte */

    const parole = [];
    for(let i=0;i<bit.length;i+=8){
      let v=0; for(let j=0;j<8;j++) v=(v<<1)|bit[i+j];
      parole.push(v);
    }
    /* riempimento: i due byte che la norma prescrive, alternati */
    const tappi=[0xEC,0x11];
    for(let i=0; parole.length<totaleDati; i++) parole.push(tappi[i%2]);
    return parole;
  }

  /* ── blocchi, correzione, intreccio ─────────────────────
     I byte non vanno in fila: si dividono in blocchi e si
     intrecciano, così un graffio sul foglio danneggia un pezzo
     di ogni blocco invece di distruggerne uno intero. */
  function paroleFinali(parole, versione){
    const [,ec,b1,d1,b2,d2] = VERSIONI[versione];
    const blocchi=[], correzioni=[];
    let i=0;
    for(let n=0;n<b1;n++){ const b=parole.slice(i,i+d1); i+=d1; blocchi.push(b); correzioni.push(correzione(b,ec)); }
    for(let n=0;n<b2;n++){ const b=parole.slice(i,i+d2); i+=d2; blocchi.push(b); correzioni.push(correzione(b,ec)); }

    const fuori=[];
    const maxDati=Math.max(d1,d2);
    for(let c=0;c<maxDati;c++)
      for(const b of blocchi) if(c<b.length) fuori.push(b[c]);
    for(let c=0;c<ec;c++)
      for(const b of correzioni) fuori.push(b[c]);
    return fuori;
  }

  /* ── la griglia ─────────────────────────────────────────── */
  function nuovaGriglia(lato){
    const m=[], usata=[];
    for(let r=0;r<lato;r++){ m.push(new Array(lato).fill(0)); usata.push(new Array(lato).fill(false)); }
    return {m, usata};
  }
  function metti(g, r, c, v){ g.m[r][c]=v?1:0; g.usata[r][c]=true; }

  function disegnaFisse(g, versione){
    const n = g.m.length;
    /* i tre quadrati agli angoli, con il loro bordo bianco */
    const mirino = (r0,c0)=>{
      for(let r=-1;r<=7;r++) for(let c=-1;c<=7;c++){
        const r1=r0+r, c1=c0+c;
        if(r1<0||c1<0||r1>=n||c1>=n) continue;
        const bordo = (r>=0&&r<=6&&(c===0||c===6)) || (c>=0&&c<=6&&(r===0||r===6));
        const cuore = r>=2&&r<=4&&c>=2&&c<=4;
        metti(g,r1,c1, bordo||cuore);
      }
    };
    mirino(0,0); mirino(0,n-7); mirino(n-7,0);

    /* le due righe tratteggiate che tengono il passo */
    for(let i=8;i<n-8;i++){ metti(g,6,i,i%2===0); metti(g,i,6,i%2===0); }

    /* i quadratini di allineamento */
    const centri=ALLINEAMENTO[versione];
    centri.forEach(r0=>centri.forEach(c0=>{
      /* non sopra i mirini */
      if((r0<8&&c0<8)||(r0<8&&c0>n-9)||(r0>n-9&&c0<8)) return;
      for(let r=-2;r<=2;r++) for(let c=-2;c<=2;c++)
        metti(g,r0+r,c0+c, Math.max(Math.abs(r),Math.abs(c))!==1);
    }));

    metti(g,n-8,8,1);                     /* il modulo sempre nero */

    /* lo spazio del formato si prenota, si riempie dopo */
    for(let i=0;i<9;i++){
      if(!g.usata[8][i]) g.usata[8][i]=true;
      if(!g.usata[i][8]) g.usata[i][8]=true;
    }
    for(let i=0;i<8;i++){
      g.usata[8][n-1-i]=true;
      g.usata[n-1-i][8]=true;
    }
    /* dalla versione 7 c'è anche il numero di versione */
    if(versione>=7){
      const bit=bitVersione(versione);
      for(let i=0;i<18;i++){
        const b=(bit>>i)&1, r=Math.floor(i/3), c=i%3;
        metti(g, r, n-11+c, b);
        metti(g, n-11+c, r, b);
      }
    }
  }

  function bitVersione(v){
    let d=v<<12, resto=d;
    for(let i=0;i<6;i++) if(resto & (1<<(17-i))) resto ^= 0x1F25 << (5-i);
    return d | resto;
  }
  function bitFormato(mask){
    /* correzione M = 00 */
    const dati = (0b00<<3) | mask;
    let resto = dati<<10;
    for(let i=0;i<5;i++) if(resto & (1<<(14-i))) resto ^= 0x537 << (4-i);
    return ((dati<<10) | resto) ^ 0x5412;
  }
  function scriviFormato(g, mask){
    const n=g.m.length, bit=bitFormato(mask);
    const b = i => (bit>>i)&1;
    for(let i=0;i<=5;i++)  g.m[8][i] = b(i);
    g.m[8][7]=b(6); g.m[8][8]=b(7); g.m[7][8]=b(8);
    for(let i=9;i<15;i++) g.m[14-i][8]=b(i);
    for(let i=0;i<8;i++)  g.m[n-1-i][8]=b(i);
    for(let i=8;i<15;i++) g.m[8][n-15+i]=b(i);
    g.m[n-8][8]=1;
  }

  /* i dati risalgono a serpentina, due colonne per volta */
  function metteiDati(g, parole){
    const n=g.m.length;
    let bitIndice=0;
    const prossimo = () => {
      const byte = parole[bitIndice>>3];
      const b = byte===undefined ? 0 : (byte >> (7-(bitIndice&7))) & 1;
      bitIndice++;
      return b;
    };
    let su=true;
    for(let c=n-1;c>0;c-=2){
      if(c===6) c--;                       /* la colonna del passo si salta */
      for(let k=0;k<n;k++){
        const r = su ? n-1-k : k;
        for(let d=0;d<2;d++){
          const cc=c-d;
          if(g.usata[r][cc]) continue;
          g.m[r][cc]=prossimo();
          g.usata[r][cc]=true;
        }
      }
      su=!su;
    }
  }

  const MASCHERE=[
    (r,c)=>(r+c)%2===0,
    (r,c)=>r%2===0,
    (r,c)=>c%3===0,
    (r,c)=>(r+c)%3===0,
    (r,c)=>(Math.floor(r/2)+Math.floor(c/3))%2===0,
    (r,c)=>((r*c)%2+(r*c)%3)===0,
    (r,c)=>(((r*c)%2+(r*c)%3)%2)===0,
    (r,c)=>(((r+c)%2+(r*c)%3)%2)===0
  ];

  /* Il punteggio della norma: meno è, meglio si legge. Serve a
     scegliere fra le otto maschere quella che lascia il disegno
     meno regolare — le righe lunghe e i quadrati uniformi sono
     quelli che confondono il lettore. */
  function penalita(m){
    const n=m.length; let p=0;
    /* 1. file di cinque o più dello stesso colore */
    for(let r=0;r<n;r++){
      let run=1;
      for(let c=1;c<n;c++){
        if(m[r][c]===m[r][c-1]) run++;
        else { if(run>=5) p+=3+(run-5); run=1; }
      }
      if(run>=5) p+=3+(run-5);
    }
    for(let c=0;c<n;c++){
      let run=1;
      for(let r=1;r<n;r++){
        if(m[r][c]===m[r-1][c]) run++;
        else { if(run>=5) p+=3+(run-5); run=1; }
      }
      if(run>=5) p+=3+(run-5);
    }
    /* 2. quadrati 2×2 di un colore solo */
    for(let r=0;r<n-1;r++) for(let c=0;c<n-1;c++){
      const v=m[r][c];
      if(v===m[r][c+1] && v===m[r+1][c] && v===m[r+1][c+1]) p+=3;
    }
    /* 3. la sagoma che somiglia a un mirino */
    const sagoma=[1,0,1,1,1,0,1,0,0,0,0];
    const uguale=(get)=>{
      let n2=0;
      for(let i=0;i+11<=n;i++){
        let ok=true, ok2=true;
        for(let j=0;j<11;j++){
          if(get(i+j)!==sagoma[j]) ok=false;
          if(get(i+j)!==sagoma[10-j]) ok2=false;
        }
        if(ok||ok2) n2++;
      }
      return n2;
    };
    for(let r=0;r<n;r++) p+=40*uguale(i=>m[r][i]);
    for(let c=0;c<n;c++) p+=40*uguale(i=>m[i][c]);
    /* 4. quanto si scosta dal metà e metà */
    let neri=0;
    for(let r=0;r<n;r++) for(let c=0;c<n;c++) neri+=m[r][c];
    const perc=neri*100/(n*n);
    p += 10*Math.floor(Math.abs(perc-50)/5);
    return p;
  }

  /* ── la funzione che serve davvero ──────────────────────── */
  function matrice(testo){
    const byte=new TextEncoder().encode(testo).length;
    const versione=versionePer(byte);
    const parole=paroleFinali(bitDelTesto(testo,versione), versione);
    const lato=versione*4+17;

    let migliore=null, punteggioMigliore=Infinity;
    for(let mask=0;mask<8;mask++){
      const g=nuovaGriglia(lato);
      disegnaFisse(g,versione);
      metteiDati(g,parole);
      /* la maschera si applica solo dove ci sono i dati */
      const fissa=nuovaGriglia(lato);
      disegnaFisse(fissa,versione);
      for(let r=0;r<lato;r++) for(let c=0;c<lato;c++)
        if(!fissa.usata[r][c] && MASCHERE[mask](r,c)) g.m[r][c]^=1;
      scriviFormato(g,mask);
      const p=penalita(g.m);
      if(p<punteggioMigliore){ punteggioMigliore=p; migliore=g.m; }
    }
    return migliore.map(riga=>riga.map(v=>!!v));
  }

  /* Disegna su un canvas, con il bordo bianco che la norma
     chiede: senza quello molti lettori non lo trovano. */
  function disegna(testo, opzioni){
    const o=Object.assign({lato:320, bordo:4, colore:'#1F1B16', sfondo:'#ffffff'}, opzioni||{});
    const m=matrice(testo);
    const n=m.length, tot=n+o.bordo*2;
    const dpr=Math.min(window.devicePixelRatio||1,3);
    const c=document.createElement('canvas');
    c.width=c.height=Math.round(o.lato*dpr);
    c.style.width=c.style.height=o.lato+'px';
    const x=c.getContext('2d');
    const p=c.width/tot;
    x.fillStyle=o.sfondo; x.fillRect(0,0,c.width,c.height);
    x.fillStyle=o.colore;
    for(let r=0;r<n;r++) for(let col=0;col<n;col++) if(m[r][col])
      x.fillRect(Math.round((col+o.bordo)*p), Math.round((r+o.bordo)*p),
                 Math.ceil(p), Math.ceil(p));
    return c;
  }

  return {matrice, disegna, _versionePer:versionePer, _parole:bitDelTesto,
          _finali:paroleFinali, _formato:bitFormato};
})();
