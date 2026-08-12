/* ══════════════════════════════════════════════════════════
   LE DUE VISTE — studente e docente
   Ogni attività è scritta una volta sola e si legge in due modi.
   Lo studente vede la mozione, i nodi, le fonti, gli argomenti da
   cui partire, i tempi e la lista di controllo. Il docente vede
   in più: dove il dibattito si decide davvero, la griglia dei
   punti, i consigli di conduzione e gli errori che si ripetono
   ogni anno.

   ONESTÀ SU COSA VUOL DIRE «NASCOSTO»: la vista docente sta
   dentro la stessa pagina, quindi uno studente che apra il
   codice sorgente la può leggere. È una tenda, non una porta
   chiusa. Serve a non stampare la soluzione sotto gli occhi di
   chi deve trovarla, non a difenderla da chi la va a cercare.
   Per una difesa vera i testi del docente dovrebbero stare nel
   database, dietro le stesse regole del resto del sito.
   ══════════════════════════════════════════════════════════ */
(function(){
  const CHIAVE='idearca-vista-metodologia';
  let vista = 'studente';
  try{ vista = localStorage.getItem(CHIAVE) || 'studente'; }catch(e){}

  function applica(v){
    vista = v;
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

  if(document.readyState==='loading')
    document.addEventListener('DOMContentLoaded',()=>{ barra(); applica(vista); });
  else { barra(); applica(vista); }
})();
