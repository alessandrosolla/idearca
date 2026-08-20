/* ══════════════════════════════════════════════════════════
   I NUMERI DI IDEARCA — una sola fonte per tutto il sito
   ------------------------------------------------------------
   Prima i numeri erano scritti a mano in tre posti diversi:
   l'hero, la vetrina, la pagina «Cosa è Idearca». Bastava
   caricare dieci materiali per averne tre versioni discordi.
   Adesso li conta il sito, da solo, a ogni apertura.

   COME SI USA: metti l'attributo data-numero su un elemento e
   ci si scrive dentro il valore.

     <b data-numero="materiali"></b>
     <b data-numero="materie"></b>
     <b data-numero="capitoli"></b>
     <b data-numero="domande"></b>

   Materiali e materie arrivano dal database. Capitoli e domande
   si contano dentro la banca delle domande: quel file pesa, e
   viene chiesto solo se in pagina c'è davvero qualcuno che lo
   aspetta; poi resta in memoria per il resto della visita.
   ══════════════════════════════════════════════════════════ */
(function(){
  const SB='https://mqjceddrbhpwqjomhohm.supabase.co';
  const KEY='sb_publishable_D7vDsaervKNJNgdJwknDpQ_Vuuf9CeJ';
  const BASE=(document.currentScript&&document.currentScript.dataset.base)||'';

  function scrivi(nome,valore){
    document.querySelectorAll('[data-numero="'+nome+'"]').forEach(el=>{
      el.textContent = typeof valore==='number' ? valore.toLocaleString('it-IT') : valore;
    });
  }
  const serve = nome => document.querySelector('[data-numero="'+nome+'"]')!==null;

  /* ── materiali e materie: dal database ── */
  async function daDatabase(){
    if(!serve('materiali') && !serve('materie')) return;
    try{
      const r=await fetch(SB+'/rest/v1/materiali?attivo=is.true&select=materia&limit=3000',
        {headers:{apikey:KEY,Authorization:'Bearer '+KEY}});
      const righe=await r.json();
      if(!Array.isArray(righe)) return;
      /* i percorsi internazionali stanno in un ramo a parte:
         qui contiamo il programma italiano, quello che si vede */
      const it=righe.filter(x=>!String(x.materia||'').startsWith('ib:'));
      scrivi('materiali', it.length);
      scrivi('materie', new Set(it.map(x=>x.materia)).size);
    }catch(e){/* restano i valori scritti nella pagina */}
  }

  /* ── capitoli e domande: dalla banca ── */
  async function daBanca(){
    if(!serve('capitoli') && !serve('domande')) return;
    try{
      let dati=sessionStorage.getItem('idearca-numeri-banca');
      if(dati){ dati=JSON.parse(dati); }
      else{
        /* Le banche sono due: banca.js dagli Approfondimenti del
           sito, banca2.js dalle slide. Contarne una sola faceva
           dire «1080 domande» quando erano il doppio, e il numero
           restava indietro a ogni blocco aggiunto. I capitoli non
           si sommano: le due banche coprono gli stessi capitoli e
           si uniscono per titolo, quindi si contano i titoli
           distinti. */
        const [r1,r2]=await Promise.all([
          fetch(BASE+'votazioni/banca.js').then(x=>x.text()),
          fetch(BASE+'votazioni/banca2.js').then(x=>x.text()).catch(()=>'')
        ]);
        const titoli=new Set();
        [r1,r2].forEach(t=>{
          (t.match(/titolo:\s*'((?:[^'\\]|\\.)*)'/g)||[])
            .forEach(x=>titoli.add(x));
        });
        dati={
          capitoli: titoli.size,
          domande: (r1.match(/tipo:/g)||[]).length + (r2.match(/tipo:/g)||[]).length
        };
        sessionStorage.setItem('idearca-numeri-banca',JSON.stringify(dati));
      }
      scrivi('capitoli',dati.capitoli);
      scrivi('domande',dati.domande);
    }catch(e){/* restano i valori scritti nella pagina */}
  }

  const parti=()=>{ daDatabase(); daBanca(); };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',parti);
  else parti();
})();
