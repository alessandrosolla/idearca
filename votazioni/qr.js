/* ══════════════════════════════════════════════════════════
   QR — Idearca
   Generatore di codici QR, scritto qui dentro invece di
   chiamare un servizio esterno: funziona anche se la rete della
   scuola blocca i siti di terzi, e l'indirizzo non viene mandato
   a nessuno.

   Modalità byte, correzione livello M (recupera circa il 15% del
   codice: regge una LIM sporca o un riflesso). Versioni da 1 a
   10, scelta automaticamente la più piccola che contiene il testo.
   ══════════════════════════════════════════════════════════ */

const QR = (function(){

  /* dati per versione, livello M:
     [ codeword totali, codeword di dati, EC per blocco,
       blocchi gruppo1, dati per blocco g1, blocchi g2, dati per blocco g2 ] */
  const V = {
     1:[ 26, 16,10, 1,16, 0, 0],
     2:[ 44, 28,16, 1,28, 0, 0],
     3:[ 70, 44,26, 1,44, 0, 0],
     4:[100, 64,18, 2,32, 0, 0],
     5:[134, 86,24, 2,43, 0, 0],
     6:[172,108,16, 4,27, 0, 0],
     7:[196,124,18, 4,31, 0, 0],
     8:[242,154,22, 2,38, 2,39],
     9:[292,182,22, 3,36, 2,37],
    10:[346,216,26, 4,43, 1,44]
  };
  const ALLINEAMENTI = {
    1:[], 2:[6,18], 3:[6,22], 4:[6,26], 5:[6,30], 6:[6,34],
    7:[6,22,38], 8:[6,24,42], 9:[6,26,46], 10:[6,28,50]
  };

  /* ---------- aritmetica del campo di Galois (256) ---------- */
  const EXP = new Uint8Array(512), LOG = new Uint8Array(256);
  (function(){
    let x = 1;
    for(let i=0;i<255;i++){
      EXP[i] = x; LOG[x] = i;
      x <<= 1; if(x & 0x100) x ^= 0x11D;
    }
    for(let i=255;i<512;i++) EXP[i] = EXP[i-255];
  })();
  const mul = (a,b)=> (a===0||b===0) ? 0 : EXP[LOG[a]+LOG[b]];

  function polinomioGeneratore(grado){
    let g = [1];
    for(let i=0;i<grado;i++){
      const n = new Array(g.length+1).fill(0);
      for(let j=0;j<g.length;j++){
        n[j]   ^= g[j];
        n[j+1] ^= mul(g[j], EXP[i]);
      }
      g = n;
    }
    return g;
  }

  function correzione(dati, quanti){
    const g = polinomioGeneratore(quanti);
    const r = new Array(dati.length + quanti).fill(0);
    for(let i=0;i<dati.length;i++) r[i] = dati[i];
    for(let i=0;i<dati.length;i++){
      const c = r[i];
      if(c === 0) continue;
      for(let j=0;j<g.length;j++) r[i+j] ^= mul(g[j], c);
    }
    return r.slice(dati.length);
  }

  /* ---------- codifica del testo ---------- */
  function inByte(testo){
    const b = [];
    for(const ch of unescape(encodeURIComponent(testo))) b.push(ch.charCodeAt(0));
    return b;
  }

  function versioneAdatta(n){
    for(let v=1; v<=10; v++){
      const conta = v < 10 ? 8 : 16;
      const bit = 4 + conta + n*8;
      if(bit <= V[v][1]*8) return v;
    }
    return 0;   // testo troppo lungo
  }

  function codewordDati(byte, v){
    const conta = v < 10 ? 8 : 16;
    const bit = [];
    const spingi = (val, quanti)=>{ for(let i=quanti-1;i>=0;i--) bit.push((val>>i)&1); };
    spingi(4, 4);                    // modalità byte
    spingi(byte.length, conta);
    for(const x of byte) spingi(x, 8);

    const capienza = V[v][1]*8;
    for(let i=0; i<4 && bit.length<capienza; i++) bit.push(0);   // terminatore
    while(bit.length % 8) bit.push(0);

    const cw = [];
    for(let i=0;i<bit.length;i+=8){
      let x=0; for(let j=0;j<8;j++) x = (x<<1) | bit[i+j];
      cw.push(x);
    }
    const riempi = [0xEC, 0x11];
    let k = 0;
    while(cw.length < V[v][1]) cw.push(riempi[k++ % 2]);
    return cw;
  }

  /* I blocchi vanno intrecciati: un danno localizzato colpisce
     pochi byte di ciascun blocco invece di distruggerne uno. */
  function intreccia(cw, v){
    const [,, ecPer, n1, d1, n2, d2] = V[v];
    const blocchi = [], ec = [];
    let p = 0;
    for(let i=0;i<n1;i++){ const b = cw.slice(p, p+d1); p += d1; blocchi.push(b); ec.push(correzione(b, ecPer)); }
    for(let i=0;i<n2;i++){ const b = cw.slice(p, p+d2); p += d2; blocchi.push(b); ec.push(correzione(b, ecPer)); }

    const fuori = [];
    const maxD = Math.max(d1, d2 || 0);
    for(let i=0;i<maxD;i++) for(const b of blocchi) if(i < b.length) fuori.push(b[i]);
    for(let i=0;i<ecPer;i++) for(const b of ec) fuori.push(b[i]);
    return fuori;
  }

  /* ---------- costruzione della matrice ---------- */
  function nuovaMatrice(dim){
    const m = [], r = [];
    for(let i=0;i<dim;i++){ m.push(new Array(dim).fill(null)); r.push(new Array(dim).fill(false)); }
    return {m, r};
  }

  function mettiFinder(m, r, x, y){
    for(let dy=-1; dy<=7; dy++) for(let dx=-1; dx<=7; dx++){
      const px = x+dx, py = y+dy;
      if(px<0||py<0||px>=m.length||py>=m.length) continue;
      const bordo = (dx>=0&&dx<=6&&(dy===0||dy===6)) || (dy>=0&&dy<=6&&(dx===0||dx===6));
      const centro = dx>=2&&dx<=4&&dy>=2&&dy<=4;
      m[py][px] = bordo || centro ? 1 : 0;
      r[py][px] = true;
    }
  }

  function mettiAllineamento(m, r, v){
    const pos = ALLINEAMENTI[v];
    for(const cy of pos) for(const cx of pos){
      if(r[cy][cx]) continue;                  // si sovrappone a un finder
      for(let dy=-2; dy<=2; dy++) for(let dx=-2; dx<=2; dx++){
        const acceso = Math.max(Math.abs(dx), Math.abs(dy)) !== 1;
        m[cy+dy][cx+dx] = acceso ? 1 : 0;
        r[cy+dy][cx+dx] = true;
      }
    }
  }

  function bitFormato(mask){
    // livello M = 00
    let d = (0 << 3) | mask;
    let v = d << 10;
    for(let i=4;i>=0;i--) if(v & (1 << (i+10))) v ^= 0x537 << i;
    return ((d << 10) | v) ^ 0x5412;
  }

  function bitVersione(v){
    let x = v << 12;
    for(let i=5;i>=0;i--) if(x & (1 << (i+12))) x ^= 0x1F25 << i;
    return (v << 12) | x;
  }

  function maschera(k, x, y){
    switch(k){
      case 0: return (x+y) % 2 === 0;
      case 1: return y % 2 === 0;
      case 2: return x % 3 === 0;
      case 3: return (x+y) % 3 === 0;
      case 4: return (Math.floor(y/2) + Math.floor(x/3)) % 2 === 0;
      case 5: return ((x*y) % 2) + ((x*y) % 3) === 0;
      case 6: return (((x*y) % 2) + ((x*y) % 3)) % 2 === 0;
      case 7: return (((x+y) % 2) + ((x*y) % 3)) % 2 === 0;
    }
  }

  function penalita(m){
    const n = m.length; let p = 0;
    // 1: serie di cinque o più dello stesso colore
    for(let i=0;i<n;i++){
      for(const orizz of [true,false]){
        let conta = 1, prec = orizz ? m[i][0] : m[0][i];
        for(let j=1;j<n;j++){
          const c = orizz ? m[i][j] : m[j][i];
          if(c === prec) conta++;
          else{ if(conta >= 5) p += 3 + (conta-5); conta = 1; prec = c; }
        }
        if(conta >= 5) p += 3 + (conta-5);
      }
    }
    // 2: blocchi 2x2 dello stesso colore
    for(let y=0;y<n-1;y++) for(let x=0;x<n-1;x++){
      const c = m[y][x];
      if(c === m[y][x+1] && c === m[y+1][x] && c === m[y+1][x+1]) p += 3;
    }
    // 3: sequenze simili al finder
    const A = [1,0,1,1,1,0,1,0,0,0,0], B = [0,0,0,0,1,0,1,1,1,0,1];
    for(let i=0;i<n;i++) for(let j=0;j<=n-11;j++){
      let a1=true,b1=true,a2=true,b2=true;
      for(let k=0;k<11;k++){
        if(m[i][j+k] !== A[k]) a1=false;
        if(m[i][j+k] !== B[k]) b1=false;
        if(m[j+k][i] !== A[k]) a2=false;
        if(m[j+k][i] !== B[k]) b2=false;
      }
      if(a1) p+=40; if(b1) p+=40; if(a2) p+=40; if(b2) p+=40;
    }
    // 4: sbilanciamento fra chiaro e scuro
    let scuri = 0;
    for(let y=0;y<n;y++) for(let x=0;x<n;x++) if(m[y][x]) scuri++;
    const perc = scuri*100/(n*n);
    p += Math.floor(Math.abs(perc-50)/5)*10;
    return p;
  }

  function costruisci(cw, v, mask){
    const dim = 17 + v*4;
    const {m, r} = nuovaMatrice(dim);
    mettiFinder(m, r, 0, 0);
    mettiFinder(m, r, dim-7, 0);
    mettiFinder(m, r, 0, dim-7);
    mettiAllineamento(m, r, v);

    for(let i=8;i<dim-8;i++){                 // linee di sincronismo
      const c = i % 2 === 0 ? 1 : 0;
      m[6][i] = c; r[6][i] = true;
      m[i][6] = c; r[i][6] = true;
    }
    m[dim-8][8] = 1; r[dim-8][8] = true;      // modulo sempre scuro

    for(let i=0;i<9;i++){                     // spazio del formato
      if(!r[8][i]){ r[8][i] = true; m[8][i] = 0; }
      if(!r[i][8]){ r[i][8] = true; m[i][8] = 0; }
    }
    for(let i=0;i<8;i++){
      if(!r[8][dim-1-i]){ r[8][dim-1-i] = true; m[8][dim-1-i] = 0; }
      if(!r[dim-1-i][8]){ r[dim-1-i][8] = true; m[dim-1-i][8] = 0; }
    }
    if(v >= 7){                               // spazio della versione
      for(let i=0;i<6;i++) for(let j=0;j<3;j++){
        r[dim-11+j][i] = true; m[dim-11+j][i] = 0;
        r[i][dim-11+j] = true; m[i][dim-11+j] = 0;
      }
    }

    /* i dati salgono e scendono a serpentina, due colonne per volta */
    let bit = [];
    for(const x of cw) for(let i=7;i>=0;i--) bit.push((x>>i)&1);
    let p = 0, su = true;
    for(let cx = dim-1; cx > 0; cx -= 2){
      if(cx === 6) cx--;                      // si salta la colonna di sincronismo
      for(let k=0;k<dim;k++){
        const y = su ? dim-1-k : k;
        for(const dx of [0,1]){
          const x = cx - dx;
          if(r[y][x]) continue;
          let b = p < bit.length ? bit[p++] : 0;
          if(maschera(mask, x, y)) b ^= 1;
          m[y][x] = b;
        }
      }
      su = !su;
    }

    const f = bitFormato(mask);
    for(let i=0;i<15;i++){
      const b = (f >> i) & 1;
      if(i < 6)       m[i][8] = b;
      else if(i < 8)  m[i+1][8] = b;
      else if(i === 8) m[8][7] = b;
      else            m[8][14-i] = b;

      if(i < 8)       m[8][dim-1-i] = b;
      else            m[dim-15+i][8] = b;
    }
    if(v >= 7){
      const vb = bitVersione(v);
      for(let i=0;i<18;i++){
        const b = (vb >> i) & 1;
        const a = Math.floor(i/3), c = i % 3;
        m[dim-11+c][a] = b;
        m[a][dim-11+c] = b;
      }
    }
    return m;
  }

  /* ---------- interfaccia ---------- */
  function matrice(testo){
    const byte = inByte(testo);
    const v = versioneAdatta(byte.length);
    if(!v) throw new Error('testo troppo lungo per un QR di questa dimensione');
    const cw = intreccia(codewordDati(byte, v), v);
    let migliore = null, minimo = Infinity;
    for(let k=0;k<8;k++){
      const m = costruisci(cw, v, k);
      const p = penalita(m);
      if(p < minimo){ minimo = p; migliore = m; }
    }
    return migliore;
  }

  /* Disegna sul canvas. Il bordo chiaro di quattro moduli non è
     decorativo: senza, molti lettori non riconoscono il codice. */
  function disegna(canvas, testo, lato){
    const m = matrice(testo);
    const n = m.length, bordo = 4, tot = n + bordo*2;
    const scala = Math.max(1, Math.floor((lato || 320) / tot));
    const px = tot * scala;
    canvas.width = px; canvas.height = px;
    canvas.style.width = px + 'px'; canvas.style.height = px + 'px';
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff'; ctx.fillRect(0,0,px,px);
    ctx.fillStyle = '#000';
    for(let y=0;y<n;y++) for(let x=0;x<n;x++)
      if(m[y][x]) ctx.fillRect((x+bordo)*scala, (y+bordo)*scala, scala, scala);
    return {versione: (n-17)/4, moduli: n};
  }

  return {matrice, disegna};
})();
