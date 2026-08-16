/* ══════════════════════════════════════════════════════════
   LE DUE VISTE — studente e docente
   Ogni attività è scritta una volta sola e si legge in due modi.
   Lo studente vede la scena, i nodi, le fonti, gli argomenti da
   cui partire, i tempi e la lista di controllo. Il docente vede
   in più: dove il dibattito si decide davvero, la griglia dei
   punti, e gli esempi di attualità da tirare fuori lui.

   CHE COSA VUOL DIRE «NASCOSTO», DETTO PER INTERO
   Fino a ieri l'interruttore fra le due viste compariva a
   chiunque: uno studente poteva premere «Vista docente» e
   leggere tutto senza nemmeno aprire il codice. Adesso
   l'interruttore compare solo a chi è entrato come docente, e a
   chi non lo è i riquadri riservati vengono tolti dal documento
   invece che soltanto nascosti dal CSS.

   Resta un limite che va detto: queste pagine sono file statici
   pubblici, quindi chi conosce l'indirizzo e guarda il sorgente
   grezzo li legge lo stesso. Per una difesa vera i testi del
   docente devono stare nel database, dietro le stesse regole
   che già proteggono le consegne. È una migrazione, e finché
   non si fa questa resta una tenda robusta, non una porta.
   ══════════════════════════════════════════════════════════ */
(function(){
  const CHIAVE='idearca-vista-metodologia';

  /* Il ruolo lo scrive l'ingresso alla libreria, nella stessa
     origine: la pagina sta in un riquadro dentro index.html e
     legge la stessa sessione. */
  function eDocente(){
    try{
      const s=JSON.parse(sessionStorage.getItem('ix')||'{}');
      return s.ruolo==='docente' || s.ruolo==='osservatore';
    }catch(e){ return false; }
  }

  /* Le attività che la classe può aprire. Le altre sono in
     revisione: allo studente compaiono chiuse, con il motivo
     scritto, invece di sparire senza spiegazione. */
  const APERTE=['debate-ingiustizia'];
  /* Pagine che sono materiale del docente e basta: le slide da
     proiettare contengono le domande da girare alla classe, che
     perdono senso se la classe le ha già lette. */
  const SOLO_DOCENTE=['slide-ingiustizia'];
  /* l'indice non è un'attività: non va mai serrato, perché è la
     pagina da cui si vede che cosa esiste */
  const SEMPRE=['index',''];
  function nomePagina(){
    return (location.pathname.split('/').pop()||'').replace(/\.html.*$/,'');
  }
  function eAperta(n){
    const p = n || nomePagina();
    return SEMPRE.indexOf(p)>=0 || APERTE.indexOf(p)>=0;
  }
  window.metodologiaAperta = eAperta;
  window.metodologieDocente = eDocente;

  function togliRiservati(){
    document.querySelectorAll('.solo-docente').forEach(n=>n.remove());
  }

  function applica(v){
    document.documentElement.setAttribute('data-vista', v);
    try{ localStorage.setItem(CHIAVE, v); }catch(e){}
    document.querySelectorAll('.vista-b').forEach(b=>
      b.classList.toggle('on', b.dataset.vista===v));
    const n = document.querySelectorAll('.solo-docente').length;
    const nota = document.getElementById('vista-nota');
    if(nota) nota.textContent = v==='docente'
      ? n+' riquadr'+(n===1?'o':'i')+' in più, che gli studenti non vedono'
      : 'Stai vedendo la pagina come la vede la classe';
  }

  function barra(){
    const b=document.createElement('div');
    b.className='vista-barra';
    b.innerHTML =
      '<div class="vista-int">'
      + '<button class="vista-b" data-vista="studente">Vista studente</button>'
      + '<button class="vista-b" data-vista="docente">Vista docente</button>'
      + '<span id="vista-nota"></span></div>';
    document.body.insertBefore(b, document.body.firstChild);
    b.querySelectorAll('.vista-b').forEach(x=>
      x.addEventListener('click',()=>applica(x.dataset.vista)));
  }

  /* La pagina chiusa: non un errore, una spiegazione. */
  function serranda(diLezione){
    document.documentElement.removeAttribute('style');
    document.body.removeAttribute('class');
    document.body.style.cssText='background:#faf8f3;color:#1c2b1a;overflow:auto;height:auto';
    document.body.innerHTML = diLezione
      ? '<div class="wrap"><div class="chiusa">'
        + '<div class="chiusa-et">Materiale della lezione</div>'
        + '<h1>Questa è la parte che proietta il professore</h1>'
        + '<p>Sono le slide che accompagnano la spiegazione, e contengono le domande che '
        + 'verranno fatte in classe: leggerle prima toglierebbe il senso all\'esercizio.</p>'
        + '<p class="chiusa-min">La pagina da studiare è '
        + '<a href="debate-ingiustizia.html">Meglio subirla o commetterla?</a>.</p>'
        + '</div></div>'
      : '<div class="wrap"><div class="chiusa">'
        + '<div class="chiusa-et">Attività in revisione</div>'
        + '<h1>Questa scheda non è ancora aperta alla classe</h1>'
        + '<p>Il professore la sta ancora rivedendo. Quella pronta è '
        + '<a href="debate-ingiustizia.html">Meglio subirla o commetterla?</a>, '
        + 'il debate sul <em>Gorgia</em> di Platone.</p>'
        + '<p class="chiusa-min">Se stai preparando il debate, è quella la pagina da studiare.</p>'
        + '</div></div>';
  }

  function avvia(){
    const docente = eDocente();

    if(!docente && SOLO_DOCENTE.indexOf(nomePagina())>=0){ serranda(true); return; }
    if(!docente && !eAperta()){ serranda(); return; }

    if(!docente){
      /* niente interruttore e niente riquadri riservati: non
         basta nasconderli, vanno tolti dal documento */
      togliRiservati();
      applica('studente');
      return;
    }

    barra();
    let v='studente';
    try{ v = localStorage.getItem(CHIAVE) || 'studente'; }catch(e){}
    applica(v);
  }

  if(document.readyState==='loading')
    document.addEventListener('DOMContentLoaded', avvia);
  else avvia();
})();
