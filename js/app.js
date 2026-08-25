/* ══════════════════════════════════════════════════════════
   LA VERSIONE, E PERCHE' SERVE CONTROLLARLA

   GitHub Pages serve index.html con «cache-control: max-age=600»:
   per dieci minuti il browser tiene la pagina vecchia, e siccome
   e la pagina a dire quale app.js caricare, con la pagina vecchia
   arriva anche il codice vecchio. Da fuori sembra che una cosa
   nuova «non funzioni», mentre semplicemente non e ancora
   arrivata — ed e successo cosi tante volte, in questo progetto,
   da valere una riga di codice.

   Qui accanto c'e un file minuscolo, versione.json, che si chiede
   sempre alla rete e mai alla cache. Se dice una versione diversa
   da quella scritta qui dentro, vuol dire che la pagina in mano
   e vecchia: si ricarica una volta sola e si va avanti.

   Il controllo del ricaricamento e in sessionStorage: senza, una
   versione.json sbagliata manderebbe il browser in un giro
   infinito di ricariche.
   ══════════════════════════════════════════════════════════ */
const VERSIONE = '20260827y';
(async function controllaVersione(){
  try{
    const r=await fetch('versione.json?'+Date.now(), {cache:'no-store'});
    if(!r.ok) return;
    const d=await r.json();
    if(!d.versione || d.versione===VERSIONE) return;
    if(sessionStorage.getItem('idearca-ricaricato')===d.versione) return;
    sessionStorage.setItem('idearca-ricaricato', d.versione);
    location.reload();
  }catch(e){/* senza rete si tiene quello che c'e */}
})();

const SB_URL='https://mqjceddrbhpwqjomhohm.supabase.co';
const SB_KEY='sb_publishable_D7vDsaervKNJNgdJwknDpQ_Vuuf9CeJ';

/* ── QUALE PAGINA È APERTA ──────────────────────────────────
   Serve a una cosa sola, ma visibile: il colore che il browser
   mostra quando si tira lo scroll oltre il bordo. Sull'home
   dev'essere il verde notte dell'hero, altrove la crema.
   ──────────────────────────────────────────────────────────── */
/* ── CONTARE, NON SEGUIRE ───────────────────────────────────
   Registriamo tre cose: chi entra, quali materie si aprono,
   quali strumenti si accendono. Nessun indirizzo, nessun
   identificatore del dispositivo, nessuna cronologia: solo
   conteggi, e li legge il docente soltanto.
   La scrittura non blocca mai la pagina: se fallisce, pazienza.
   ──────────────────────────────────────────────────────────── */
function registraUso(tipo, dettaglio){
  try{
    const s=JSON.parse(sessionStorage.getItem('ix')||'{}');
    if(!s.code) return;
    fetch(SB_URL+'/rest/v1/usi',{
      method:'POST',
      headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,
               'Content-Type':'application/json','Prefer':'return=minimal'},
      body:JSON.stringify({tipo, dettaglio:dettaglio||null,
                           codice:s.code, nome:s.nome||null, ruolo:s.ruolo||null}),
      keepalive:true
    }).catch(()=>{});
  }catch(e){}
}

function segnaPagina(nome){
  document.documentElement.setAttribute('data-page',nome);
}
/* ── LOGIN DOCENTE ──────────────────────────────────────────
   Il docente entra con un vero login verificato dai server di
   Supabase (Supabase Auth). L'email qui sotto NON è un segreto
   (le email non lo sono); la password è controllata dal server
   e non compare da nessuna parte nel codice.
   IMPORTANTE: crea su Supabase un utente con ESATTAMENTE questa
   email. Se preferisci un'altra email, cambiala qui e usala anche
   quando crei l'utente su Supabase.
   ──────────────────────────────────────────────────────────── */
const ADMIN_EMAIL='alessandro.solla.00@gmail.com';
let ATK=sessionStorage.getItem('atk')||''; // token temporaneo del docente autenticato
/* Intestazioni per le operazioni di SCRITTURA: usano il token del
   docente autenticato. Senza login docente valido, il server rifiuta. */
function wHead(extra){return Object.assign({'apikey':SB_KEY,'Authorization':'Bearer '+(ATK||SB_KEY)},extra||{});}
const MATERIE={
  'fil-antica':{g:'Filosofia',l:'Filosofia Antica',p:'VIII – III sec. a.C.'},
  'fil-medievale':{g:'Filosofia',l:'Filosofia Medievale',p:'I – XIV sec. d.C.'},
  'fil-moderna':{g:'Filosofia',l:'Filosofia Moderna',p:'XV – XVIII sec.'},
  'fil-contemporanea':{g:'Filosofia',l:'Filosofia Contemporanea',p:'XIX – XX sec.'},
  'sto-preistoria':{g:'Storia',l:'Preistoria e Storia Antica',p:'Dalle origini al V sec.'},
  'sto-medievale':{g:'Storia',l:'Storia Medievale',p:'V – XV sec.'},
  'sto-moderna':{g:'Storia',l:'Storia Moderna',p:'XV – XVIII sec.'},
  'sto-contemporanea':{g:'Storia',l:'Storia Contemporanea',p:'XIX – XX sec.'},
  'civ-costituzione':{g:'Educazione Civica',l:'La Costituzione',p:'Principi fondamentali'},
  'civ-istituzioni':{g:'Educazione Civica',l:'Istituzioni e Cittadinanza',p:'Italia ed Europa'},
};
const BADGE={pdf:{c:'t-pdf',l:'PDF'},quiz:{c:'t-quiz',l:'Quiz'},video:{c:'t-video',l:'Video'}};

/* ══════════════════════════════════════════════════════════
   PERCORSI INTERNAZIONALI — IB Diploma Programme (History)
   Struttura ufficiale: Subject Brief, first assessment 2028.
   Questo oggetto contiene SOLO la forma del curriculum (aree,
   ore, opzioni) — è metadato fisso, non contenuto. Il contenuto
   vero (casi, guide, fonti) vive in Supabase, tabella `materiali`,
   con programma='ib' e materia="ib:<area>" o "ib:<area>:<opzione>".
   ══════════════════════════════════════════════════════════ */
const IB_STRUCTURE={
  guide:{label:'Course guide',noOptions:true,isGuide:true},
  focused:{label:'Focused study',hours:50,options:{
    'protest-change':{label:'Protest and change'},
    'independence-identity':{label:'Independence and identity'},
    'political-economic':{label:'Political and economic transitions'},
    'conflict-displacement':{label:'Conflict and displacement'},
    'climate-innovation':{label:'Climate and innovation'}
  }},
  thematic:{label:'Thematic study',hours:80,options:{
    'conflict':{label:'Conflict',note:'from 750 CE'},
    'innovation-transformation':{label:'Innovation and transformation',note:'from 750 CE'},
    'authoritarian-rule':{label:'Authoritarian rule',note:'from 1750 CE'},
    'popular-movements':{label:'Popular movements',note:'from 1750 CE'}
  }},
  regional:{label:'Regional study',hours:90,hlOnly:true,options:{
    'africa-me':{label:'Africa and the Middle East'},
    'americas':{label:'The Americas'},
    'asia-oceania':{label:'Asia and Oceania'},
    'europe':{label:'Europe'}
  }},
  investigation:{label:'Historical investigation',hours:20,noOptions:true,isIA:true,
    desc:'A 2,200-word independent inquiry (the IA). Students formulate a historical question, identify and evaluate sources, and synthesize evidence into an argument. Internally assessed by the teacher, externally moderated by the IB.'}
};
let ibArea='guide',ibOption=null,ibCasesCache=[];
const IB_BADGE={materiale:{c:'t-pdf',l:'Lezione'},fonte:{c:'t-fonte',l:'Fonte'},esercizio:{c:'t-esercizio',l:'Saggio'},interdisciplinare:{c:'t-interdisciplinare',l:'Skills'}};

function openTracks(){
  const s=JSON.parse(sessionStorage.getItem('ix')||'{}');
  if(s.ruolo!=='docente')return; // accessibile solo in modalità docente
  document.getElementById('page-home').style.display='none';
  document.getElementById('page-library').classList.remove('aperta');
  document.getElementById('page-tracks').style.display='block';
  document.documentElement.setAttribute('data-mode','intl');
  segnaPagina('tracks');
  window.scrollTo(0,0);
}
function exitIntlToLibrary(){
  document.getElementById('page-tracks').style.display='none';
  document.getElementById('page-ib').style.display='none';
  document.getElementById('page-library').classList.add('aperta');
  document.documentElement.removeAttribute('data-mode');
  segnaPagina('library');
  window.scrollTo(0,0);
}
function openIBPage(){
  document.getElementById('page-tracks').style.display='none';
  document.getElementById('page-ib').style.display='block';
  ibArea='guide';ibOption=null;
  renderIBAreaTabs();
  renderIBOptions();
  window.scrollTo(0,0);
}
function backToTracks(){
  document.getElementById('page-ib').style.display='none';
  document.getElementById('page-tracks').style.display='block';
  window.scrollTo(0,0);
}
function renderIBAreaTabs(){
  const wrap=document.getElementById('ib-area-tabs');
  wrap.innerHTML=Object.entries(IB_STRUCTURE).map(([key,a])=>
    `<button class="lib-tab${ibArea===key?' active':''}${a.isGuide?' ib-guide-tab':''}" onclick="selectIBArea('${key}')">${a.isGuide?'★ ':''}${a.label}${a.hlOnly?' <span class="ib-hl-note">(HL)</span>':''}</button>`
  ).join('');
}
function selectIBArea(key){
  ibArea=key;ibOption=null;
  renderIBAreaTabs();
  renderIBOptions();
}
function renderIBOptions(){
  const area=IB_STRUCTURE[ibArea];
  const row=document.getElementById('ib-options-row');
  if(area.noOptions){row.innerHTML='';renderIBCases();return;}
  const keys=Object.keys(area.options);
  if(!ibOption||!area.options[ibOption])ibOption=keys[0];
  row.innerHTML=keys.map(key=>{
    const o=area.options[key];
    const active=ibOption===key;
    return `<span class="tag ib-opt${active?' active':''}" onclick="selectIBOption('${key}')">${o.label}${o.note?' · '+o.note:''}</span>`;
  }).join('');
  renderIBCases();
}
function selectIBOption(key){
  ibOption=key;
  renderIBOptions();
}
function ibKeyFor(area,option){return option?`ib:${area}:${option}`:`ib:${area}`;}
async function renderIBCases(){
  const wrap=document.getElementById('ib-cases-wrap');
  const area=IB_STRUCTURE[ibArea];
  wrap.innerHTML='<div class="lib-spinner"></div>';
  const key=ibKeyFor(ibArea,area.noOptions?null:ibOption);
  let rows=[];
  try{
    const res=await fetch(`${SB_URL}/rest/v1/materiali?programma=eq.ib&materia=eq.${encodeURIComponent(key)}&attivo=eq.true&order=posizione.asc`,{headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY}});
    rows=await res.json();
  }catch(e){rows=[];}
  ibCasesCache=Array.isArray(rows)?rows:[];
  const label=area.noOptions?area.label:area.options[ibOption].label;
  const breadcrumb=area.noOptions?area.label:`${area.label} · ${area.options[ibOption].label}`;
  const optArg=area.noOptions?'':ibOption;
  let html=`<div style="display:flex;gap:1.4rem;flex-wrap:wrap;margin-bottom:1.3rem">
    <a class="lib-add-link" onclick="openIBUpload('${ibArea}','${optArg}')">+ Aggiungi contenuto</a>
    <a class="lib-add-link" onclick="openBulkImport('${ibArea}','${optArg}')">+ Importa più righe</a>
    <a class="lib-add-link" style="color:#c0392b" onclick="clearIBPlaceholders('${ibArea}','${optArg}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" width="15" height="15"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9M18.16 5.79L16.5 21a2.25 2.25 0 01-2.244 2H9.744A2.25 2.25 0 017.5 21L5.84 5.79m12.32 0a48 48 0 00-12.32 0"></path></svg> Elimina i placeholder vuoti</a>
  </div>`;
  if(area.isIA) html+=`<div class="lib-empty" style="border-style:solid;margin-bottom:1.2rem">${area.desc}</div>`;
  if(!ibCasesCache.length){
    html+=`<div class="lib-empty">Nessun contenuto ancora per «${label}».</div>`;
  }else{
    const groups=[]; const idx={};
    ibCasesCache.forEach(r=>{
      const gk = (r.blocco && r.blocco.trim()) ? r.blocco.trim() : '__none__';
      if(!(gk in idx)){idx[gk]=groups.length; groups.push({blocco:gk,items:[]});}
      groups[idx[gk]].items.push(r);
    });
    let counter=0;
    html+=groups.map(g=>{
      const itemsHtml=g.items.map(r=>{
        counter++;
        const i=counter;
        const b=IB_BADGE[r.tipo]||{c:'t-pdf',l:'Extra'};
        const hasTimeline=r.anno_inizio&&r.anno_fine;
        const titEsc=(r.titolo||'').replace(/'/g,"\\'");
        const hasSlide=r.link && r.link!=='#' && r.link.trim()!=='';
        const hasHw=r.link_compito && r.link_compito.trim()!=='';
        const slideEsc=(r.link||'').replace(/'/g,"\\'");
        const hwEsc=(r.link_compito||'').replace(/'/g,"\\'");
        const slideBtn=hasSlide
          ?`<button class="ib-open-btn" onclick="openViewer('${slideEsc}','${titEsc} \u2014 Slide')">\uD83D\uDCCA Slide</button>`
          :`<span class="ib-open-btn prep">\uD83D\uDCCA Slide \u2014 in preparazione</span>`;
        const hwBtn=hasHw
          ?`<button class="ib-open-btn" onclick="openViewer('${hwEsc}','${titEsc} \u2014 Homework')">\uD83D\uDCDD Homework</button>`
          :`<span class="ib-open-btn prep">\uD83D\uDCDD Homework \u2014 in preparazione</span>`;
        return `<div class="mod-item" style="cursor:default;flex-direction:column;align-items:stretch;gap:.6rem;animation-delay:${Math.min(i*.03,.6)}s">
          <div style="display:flex;align-items:center;gap:1.6rem">
            <div class="mod-num">${String(i).padStart(2,'0')}</div>
            <div class="mod-body">
              <div class="lib-breadcrumb" style="margin-bottom:.2rem">${breadcrumb}</div>
              <div class="mod-title">${r.titolo}</div>
              <div class="mod-desc">${r.descrizione||''}</div>
            </div>
            <span class="mod-type ${b.c}">${b.l}</span>
            <div class="mod-acts">
              <button class="m-btn" onclick="editIBMod(${r.id})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" width="15" height="15"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"></path></svg></button>
              <button class="m-btn del" onclick="delIBMod(${r.id})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" width="15" height="15"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9M18.16 5.79L16.5 21a2.25 2.25 0 01-2.244 2H9.744A2.25 2.25 0 017.5 21L5.84 5.79m12.32 0a48 48 0 00-12.32 0"></path></svg></button>
            </div>
          </div>
          <div class="ib-open-row">${slideBtn}${hwBtn}</div>
          ${hasTimeline?`<div class="ib-timeline" style="padding-left:4.2rem"><span class="ib-timeline-year start">${r.anno_inizio}</span><div class="ib-timeline-bar"><span class="ib-timeline-dot start"></span><span class="ib-timeline-dot end"></span></div><span class="ib-timeline-year end">${r.anno_fine}</span></div>`:''}
        </div>`;
      }).join('');
      const groupTitle=g.blocco==='__none__'?'':`<div class="lib-group-title">${g.blocco}</div>`;
      return `<div class="ib-block">${groupTitle}<div class="mod-list">${itemsHtml}</div></div>`;
    }).join('');
  }
  wrap.innerHTML=html;
}
function toEmbedUrl(link){
  if(!link) return link;
  let m = link.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/);
  if(m) return `https://www.youtube.com/embed/${m[1]}`;
  m = link.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  if(m) return `https://drive.google.com/file/d/${m[1]}/preview`;
  return link;
}
function openViewer(link,title){
  if(!link||link==='#')return;
  document.getElementById('doc-viewer-title').textContent=title||'';
  document.getElementById('doc-viewer-open').href=link;
  document.getElementById('doc-viewer-frame').src=toEmbedUrl(link);
  document.getElementById('doc-viewer-overlay').classList.add('on');
  document.body.style.overflow='hidden';
}
function closeViewer(){
  document.getElementById('doc-viewer-overlay').classList.remove('on');
  document.getElementById('doc-viewer-frame').src='';
  document.body.style.overflow='';
}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&document.getElementById('doc-viewer-overlay')?.classList.contains('on'))closeViewer();
});
function openIBUpload(area,option){
  document.getElementById('ib-up-title').textContent='Aggiungi contenuto IB';
  document.getElementById('ib-up-btn').textContent='Salva';
  document.getElementById('ib-up-id').value='';
  document.getElementById('ib-up-area').value=area||'guide';
  populateIBOptSelect();
  if(option)document.getElementById('ib-up-opt').value=option;
  document.getElementById('ib-up-blocco').value='';
  document.getElementById('ib-up-tipo').value='materiale';
  document.getElementById('ib-up-tit').value='';
  document.getElementById('ib-up-desc').value='';
  document.getElementById('ib-up-link').value='';
  document.getElementById('ib-up-link-compito').value='';
  document.getElementById('ib-up-start').value='';
  document.getElementById('ib-up-end').value='';
  document.getElementById('ib-up-fb').textContent='';
  document.getElementById('ib-up-overlay').classList.add('on');
}
function onIBUpAreaChange(){populateIBOptSelect();}
function populateIBOptSelect(){
  const area=document.getElementById('ib-up-area').value;
  const wrap=document.getElementById('ib-up-opt-wrap');
  const sel=document.getElementById('ib-up-opt');
  const a=IB_STRUCTURE[area];
  if(a.noOptions){wrap.style.display='none';sel.innerHTML='';return;}
  wrap.style.display='flex';
  sel.innerHTML=Object.entries(a.options).map(([k,o])=>`<option value="${k}">${o.label}</option>`).join('');
}
function closeIBUpload(){document.getElementById('ib-up-overlay').classList.remove('on');}
function editIBMod(id){
  const r=ibCasesCache.find(x=>x.id===id);
  if(!r)return;
  const parts=r.materia.split(':'); // ['ib', area, option?]
  const area=parts[1],option=parts[2]||'';
  document.getElementById('ib-up-title').textContent='Modifica contenuto IB';
  document.getElementById('ib-up-btn').textContent='Aggiorna';
  document.getElementById('ib-up-id').value=r.id;
  document.getElementById('ib-up-area').value=area;
  populateIBOptSelect();
  if(option)document.getElementById('ib-up-opt').value=option;
  document.getElementById('ib-up-blocco').value=r.blocco||'';
  document.getElementById('ib-up-tipo').value=r.tipo||'materiale';
  document.getElementById('ib-up-tit').value=r.titolo;
  document.getElementById('ib-up-desc').value=r.descrizione||'';
  document.getElementById('ib-up-link').value=r.link||'';
  document.getElementById('ib-up-link-compito').value=r.link_compito||'';
  document.getElementById('ib-up-start').value=r.anno_inizio||'';
  document.getElementById('ib-up-end').value=r.anno_fine||'';
  document.getElementById('ib-up-fb').textContent='';
  document.getElementById('ib-up-overlay').classList.add('on');
}
async function saveIBModule(){
  const id=document.getElementById('ib-up-id').value;
  const area=document.getElementById('ib-up-area').value;
  const a=IB_STRUCTURE[area];
  const option=a.noOptions?'':document.getElementById('ib-up-opt').value;
  const materia=ibKeyFor(area,option||null);
  const blocco=document.getElementById('ib-up-blocco').value.trim();
  const tipo=document.getElementById('ib-up-tipo').value;
  const tit=document.getElementById('ib-up-tit').value.trim();
  const desc=document.getElementById('ib-up-desc').value.trim();
  const link=document.getElementById('ib-up-link').value.trim();
  const link_compito=document.getElementById('ib-up-link-compito').value.trim();
  const startV=document.getElementById('ib-up-start').value;
  const endV=document.getElementById('ib-up-end').value;
  const anno_inizio=startV?parseInt(startV):null;
  const anno_fine=endV?parseInt(endV):null;
  const fb=document.getElementById('ib-up-fb');
  if(!tit){fb.textContent='Inserisci il titolo.';fb.style.color='#c0392b';return;}
  fb.textContent='Salvataggio...';fb.style.color='var(--stone)';
  document.getElementById('ib-up-btn').disabled=true;
  const payload={materia,titolo:tit,descrizione:desc,tipo,link,link_compito,programma:'ib',blocco,anno_inizio,anno_fine};
  try{
    let res;
    if(id){
      res=await fetch(`${SB_URL}/rest/v1/materiali?id=eq.${id}`,{method:'PATCH',headers:wHead({'Content-Type':'application/json','Prefer':'return=minimal'}),body:JSON.stringify(payload)});
    }else{
      const pr=await fetch(`${SB_URL}/rest/v1/materiali?materia=eq.${encodeURIComponent(materia)}&select=posizione&order=posizione.desc&limit=1`,{headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY}});
      const prr=await pr.json();const pos=(prr&&prr.length>0?(prr[0].posizione||0):0)+1;
      res=await fetch(`${SB_URL}/rest/v1/materiali`,{method:'POST',headers:wHead({'Content-Type':'application/json','Prefer':'return=minimal'}),body:JSON.stringify({...payload,posizione:pos})});
    }
    if(res.ok||res.status===201||res.status===204){fb.textContent='✓ Salvato!';fb.style.color='var(--forest)';setTimeout(()=>{closeIBUpload();renderIBCases();},900);}
    else throw new Error(res.status);
  }catch(e){fb.textContent='Errore: '+e.message;fb.style.color='#c0392b';}
  document.getElementById('ib-up-btn').disabled=false;
}
function openBulkImport(area,option){
  document.getElementById('ib-bulk-area').value=area||'guide';
  populateBulkOptSelect();
  if(option)document.getElementById('ib-bulk-opt').value=option;
  document.getElementById('ib-bulk-text').value='';
  document.getElementById('ib-bulk-fb').textContent='';
  document.getElementById('ib-bulk-overlay').classList.add('on');
}
function populateBulkOptSelect(){
  const area=document.getElementById('ib-bulk-area').value;
  const wrap=document.getElementById('ib-bulk-opt-wrap');
  const sel=document.getElementById('ib-bulk-opt');
  const a=IB_STRUCTURE[area];
  if(a.noOptions){wrap.style.display='none';sel.innerHTML='';return;}
  wrap.style.display='flex';
  sel.innerHTML=Object.entries(a.options).map(([k,o])=>`<option value="${k}">${o.label}</option>`).join('');
}
function closeBulkImport(){document.getElementById('ib-bulk-overlay').classList.remove('on');}
async function clearIBPlaceholders(area, option){
  const ok = confirm('Questo elimina tutte le righe SENZA slide né homework caricati, per questa opzione. Le righe con contenuti reali non vengono toccate. Continuare?');
  if(!ok) return;
  const a = IB_STRUCTURE[area];
  const key = ibKeyFor(area, a.noOptions?null:option);
  try{
    const res = await fetch(`${SB_URL}/rest/v1/materiali?programma=eq.ib&materia=eq.${encodeURIComponent(key)}&select=id,link,link_compito`,{headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY}});
    const rows = await res.json();
    const emptyIds = rows.filter(r => (!r.link || r.link==='#' || r.link.trim()==='') && (!r.link_compito || r.link_compito.trim()==='')).map(r=>r.id);
    if(!emptyIds.length){ alert('Nessun placeholder vuoto trovato — tutte le righe hanno già un contenuto.'); return; }
    const idList = emptyIds.join(',');
    const delRes = await fetch(`${SB_URL}/rest/v1/materiali?id=in.(${idList})`,{method:'DELETE',headers:wHead()});
    if(delRes.ok || delRes.status===204){
      alert(`Eliminate ${emptyIds.length} righe senza contenuti. Le righe con slide/homework reali sono rimaste intatte.`);
      renderIBCases();
    } else throw new Error(delRes.status);
  }catch(e){ alert('Errore: '+e.message); }
}
async function bulkImportIB(){
  const area=document.getElementById('ib-bulk-area').value;
  const a=IB_STRUCTURE[area];
  const option=a.noOptions?'':document.getElementById('ib-bulk-opt').value;
  const materia=ibKeyFor(area,option||null);
  const raw=document.getElementById('ib-bulk-text').value;
  const lines=raw.split('\n').map(l=>l.replace(/\r$/,'')).filter(l=>l.trim());
  const fb=document.getElementById('ib-bulk-fb');
  if(!lines.length){fb.textContent='Incolla almeno una riga.';fb.style.color='#c0392b';return;}
  const parsed=[];
  for(const line of lines){
    const parts=line.split('\t');
    if(parts.length<2)continue;
    const blocco=parts[0].trim(),titolo=parts[1].trim();
    const link=(parts[2]||'').trim(),link_compito=(parts[3]||'').trim();
    if(!titolo)continue;
    if(/^blocco$/i.test(blocco)&&/^argomento/i.test(titolo))continue;
    parsed.push({blocco,titolo,link,link_compito});
  }
  if(!parsed.length){fb.textContent='Nessuna riga valida (serve almeno Blocco [TAB] Argomento per riga).';fb.style.color='#c0392b';return;}
  fb.textContent=`Importazione di ${parsed.length} righe...`;fb.style.color='var(--stone)';
  document.getElementById('ib-bulk-btn').disabled=true;
  try{
    const pr=await fetch(`${SB_URL}/rest/v1/materiali?materia=eq.${encodeURIComponent(materia)}&select=posizione&order=posizione.desc&limit=1`,{headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY}});
    const prr=await pr.json();
    let pos=(prr&&prr.length>0?(prr[0].posizione||0):0);
    const payloadRows=parsed.map(p=>{
      pos+=1;
      return {materia,titolo:p.titolo,descrizione:'',tipo:'materiale',link:p.link,link_compito:p.link_compito,programma:'ib',blocco:p.blocco,posizione:pos};
    });
    const res=await fetch(`${SB_URL}/rest/v1/materiali`,{method:'POST',headers:wHead({'Content-Type':'application/json','Prefer':'return=minimal'}),body:JSON.stringify(payloadRows)});
    if(res.ok||res.status===201||res.status===204){
      fb.textContent=`✓ Importate ${parsed.length} lezioni!`;fb.style.color='var(--forest)';
      setTimeout(()=>{closeBulkImport();renderIBCases();},1000);
    }else throw new Error(res.status);
  }catch(e){fb.textContent='Errore: '+e.message;fb.style.color='#c0392b';}
  document.getElementById('ib-bulk-btn').disabled=false;
}
async function delIBMod(id){
  if(!confirm('Eliminare questo contenuto?'))return;
  try{const r=await fetch(`${SB_URL}/rest/v1/materiali?id=eq.${id}`,{method:'DELETE',headers:wHead({'Prefer':'return=minimal'})});if(r.ok||r.status===204)renderIBCases();}catch(e){alert('Errore di connessione.');}
}

const go=id=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
function initReveal(){const obs=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');obs.unobserve(x.target)}}),{threshold:.1});document.querySelectorAll('.rev,.rev-l,.rev-r').forEach(el=>obs.observe(el));}
function initParticles(){const c=document.getElementById('particles');if(!c)return;for(let i=0;i<20;i++){const p=document.createElement('div');p.className='particle';const s=Math.random()*5+2;p.style.cssText=`width:${s}px;height:${s}px;left:${Math.random()*100}%;animation-duration:${Math.random()*18+14}s;animation-delay:${Math.random()*16}s`;c.appendChild(p);}}
window.addEventListener('scroll',()=>{
  document.getElementById('main-nav')?.classList.toggle('scrolled',window.scrollY>50);
  const bar=document.getElementById('scroll-progress');
  if(bar){const h=document.documentElement.scrollHeight-window.innerHeight;bar.style.width=(h>0?(window.scrollY/h)*100:0)+'%';}
},{passive:true});
/* Il cassetto del menu sul telefono. */
function apriMenu(){
  document.getElementById('menu-mobile').classList.add('on');
  document.getElementById('hamburger').setAttribute('aria-expanded','true');
  document.body.style.overflow='hidden';
}
function chiudiMenu(){
  document.getElementById('menu-mobile').classList.remove('on');
  document.getElementById('hamburger').setAttribute('aria-expanded','false');
  document.body.style.overflow='';
}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&document.getElementById('menu-mobile')?.classList.contains('on')) chiudiMenu();
});

function scrollToLogin(){document.getElementById('login-section').scrollIntoView({behavior:'smooth',block:'center'});}
function resetMsg(){document.getElementById('codice').classList.remove('err','ok');const m=document.getElementById('msg');m.textContent='';m.className='msg';}
/* ── CHIAVE: getKeys gestisce TUTTI i formati ── */
function getKeys(materie){
  if(!materie) return Object.keys(MATERIE);
  if(typeof materie==='string'){
    const clean=materie.trim().replace(/^"|"$/g,'').toLowerCase();
    if(clean==='all') return Object.keys(MATERIE);
  }
  try{
    let a=materie;
    if(typeof a==='string') a=JSON.parse(a);
    if(Array.isArray(a)){
      if(a.some(x=>String(x).toLowerCase()==='all')) return Object.keys(MATERIE);
      return a.filter(k=>MATERIE[k]);
    }
  }catch(e){}
  return Object.keys(MATERIE);
}
async function login(){
  const btn=document.getElementById('login-btn'),input=document.getElementById('codice'),msg=document.getElementById('msg');
  const raw=input.value.trim();
  const code=raw.toUpperCase().replace(/\s+/g,'');
  if(!code){msg.textContent='Inserisci il codice.';msg.className='msg err';input.classList.add('err');return;}
  btn.disabled=true;btn.textContent='Verifica in corso...';
  try{
    // 1) Prova come STUDENTE: la verifica avviene tramite una funzione
    //    sicura lato server (verify_code), senza mai esporre l'elenco dei codici.
    const res=await fetch(`${SB_URL}/rest/v1/rpc/verify_code`,{method:'POST',headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Content-Type':'application/json'},body:JSON.stringify({p_code:code})});
    const rows=await res.json();
    if(Array.isArray(rows)&&rows.length){
      const r=rows[0];
      if(r.attivo===false) throw {m:'Codice disabilitato. Contatta il docente.'};
      if(r.scadenza&&new Date(r.scadenza)<new Date()) throw {m:'Codice scaduto. Contatta il docente.'};
      ATK='';sessionStorage.removeItem('atk');sessionStorage.removeItem('rtk');
      scordaRuoloFuoriSessione();
      sessionStorage.setItem('ix',JSON.stringify({code,nome:r.nome,ruolo:r.ruolo,materie:r.materie}));
      segnaRuoloFuoriSessione(r.ruolo);
      /* ── QUI, NON ALTROVE ────────────────────────────────
         L'accesso si registra quando qualcuno entra davvero col
         proprio codice. Prima l'unica chiamata stava in
         exitIntlToLibrary, cioe' nel ritorno dai percorsi
         internazionali: veniva contato un accesso solo se si
         passava di lì, e il contatore restava a zero anche dopo
         venti ingressi. ──────────────────────────────────── */
      registraUso('accesso');
      input.classList.add('ok');msg.textContent='Accesso confermato: '+r.nome;msg.className='msg ok';
      setTimeout(()=>{document.getElementById('form-state').style.display='none';document.getElementById('welcome-name').textContent=r.nome;document.getElementById('success-state').classList.add('on');},600);
      btn.disabled=false;btn.textContent='Entra nella piattaforma';return;
    }
    // 2) Prova come DOCENTE: login vero verificato dai server Supabase
    //    (email fissa + password digitata nel campo). La password non è nel codice.
    const auth=await fetch(`${SB_URL}/auth/v1/token?grant_type=password`,{method:'POST',headers:{'apikey':SB_KEY,'Content-Type':'application/json'},body:JSON.stringify({email:ADMIN_EMAIL,password:raw})});
    if(auth.ok){
      const data=await auth.json();
      ATK=data.access_token;sessionStorage.setItem('atk',ATK);
      /* Si conserva anche il token di rinnovo: quello d'accesso
         scade dopo un'ora, e senza rinnovo ogni funzione da
         docente smetteva di colpo di funzionare. */
      if(data.refresh_token) sessionStorage.setItem('rtk', data.refresh_token);
      sessionStorage.setItem('ix',JSON.stringify({nome:'Alessandro Solla',ruolo:'docente',materie:'all'}));
      segnaRuoloFuoriSessione('docente');
      input.classList.add('ok');msg.textContent='Accesso docente confermato.';msg.className='msg ok';
      setTimeout(()=>{document.getElementById('form-state').style.display='none';document.getElementById('welcome-name').textContent='Alessandro Solla';document.getElementById('success-state').classList.add('on');},600);
      btn.disabled=false;btn.textContent='Entra nella piattaforma';return;
    }
    throw {m:'Codice non riconosciuto. Contatta il docente.'};
  }catch(e){input.classList.add('err');msg.textContent=e.m||'Errore di connessione.';msg.className='msg err';input.value='';setTimeout(()=>input.focus(),100);}
  btn.disabled=false;btn.textContent='Entra nella piattaforma';
}
function showLibrary(){
  document.getElementById('page-home').style.display='none';
  document.getElementById('page-library').classList.add('aperta');
  segnaPagina('library');
  window.scrollTo(0,0);
  const s=JSON.parse(sessionStorage.getItem('ix')||'{}');
  const initials=(s.nome||'U').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  const bollino=document.getElementById('lib-avatar');
  bollino.textContent=initials;
  /* Per il docente il bollino apre il calendario: è la cosa che si
     guarda ogni mattina, e cercarla ogni volta nella colonna è un
     gesto in più ripetuto duecento volte l'anno. */
  const suo = s.ruolo==='docente' || s.ruolo==='osservatore';
  bollino.classList.toggle('apribile', suo);
  bollino.title = suo ? 'Apri il calendario' : '';
  document.getElementById('lib-uname').textContent=s.nome||'Utente';
  const docente = s.ruolo==='docente';
  const osservatore = s.ruolo==='osservatore';
  document.documentElement.setAttribute('data-ruolo', s.ruolo||'studente');
  if(docente||osservatore){
    document.getElementById('admin-bar').style.display='flex';
    /* all'osservatore mostro la barra ma tolgo tutto cio' che scrive:
       deve poter guardare dappertutto senza poter cambiare niente */
    document.getElementById('admin-bar').classList.toggle('sola-lettura', osservatore);
    document.querySelector('.admin-label').textContent =
      osservatore ? 'Sola lettura' : 'Modalità docente';
  }
  /* la barra del docente ruba 52px in alto: le viste a pieno schermo
     devono saperlo per non sbordare */
  document.getElementById('page-library').classList.toggle('con-admin', docente||osservatore);
  const keys=getKeys(s.materie);
  buildNav(keys);
  buildMobSelect(keys);
  loadLibStats(keys);
  if(keys.length) renderSubject(keys[0]);
  else document.getElementById('lib-modules').innerHTML='<div class="lib-empty">Nessuna materia disponibile.</div>';
}
async function loadLibStats(keys){
  const elDesk=document.getElementById('lib-stats'),elMob=document.getElementById('lib-stats-mob');
  if(!elDesk&&!elMob) return;
  try{
    const inList=keys.join(',');
    const url=`${SB_URL}/rest/v1/materiali?materia=in.(${inList})&attivo=eq.true&select=materia`;
    const res=await fetch(url,{headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY}});
    const rows=await res.json();
    const totale=rows.length;
    const materieCoperte=new Set(rows.map(r=>r.materia)).size;
    const testo=`${totale} document${totale===1?'o':'i'} · ${materieCoperte} materi${materieCoperte===1?'a':'e'} cop${materieCoperte===1?'erta':'erte'}`;
    if(elDesk)elDesk.textContent=testo;
    if(elMob)elMob.textContent=testo;
    /* quante schede ha ciascuna materia: si vede accanto al nome,
       così si capisce a colpo d'occhio dove c'è più roba */
    const perMateria={};
    rows.forEach(r=>{perMateria[r.materia]=(perMateria[r.materia]||0)+1;});
    document.querySelectorAll('.lib-count[data-count]').forEach(el=>{
      const k=el.dataset.count;
      const n=perMateria[k];
      if(n){ el.textContent=n; el.classList.remove('vuota'); return; }
      /* Una materia senza un solo documento prima non mostrava niente,
         e nella colonna sembrava identica alle altre: ci si entrava e
         si trovava il vuoto. Ora lo dice prima di entrarci. Vale solo
         per le materie vere: gli strumenti non hanno documenti da
         contare, e un «in lavorazione» accanto alla Lavagna sarebbe
         una bugia. */
      if(MATERIE[k]){ el.textContent='in lavorazione'; el.classList.add('vuota'); }
    });
  }catch(e){
    if(elDesk)elDesk.textContent='';
    if(elMob)elMob.textContent='';
  }
}
/* ── LE AREE ────────────────────────────────────────────────
   Prima le materie erano dieci voci grigie tutte uguali: per
   capire dove ci si trovava bisognava leggere. Ora ogni area ha
   il suo colore e ogni materia porta scritto il secolo che copre.
   ──────────────────────────────────────────────────────────── */

/* ── I SIGILLI ──────────────────────────────────────────────
   Ogni materia porta il proprio segno, disegnato a mano in SVG e
   stampato in filigrana dietro l'intestazione. Non è decorazione
   a caso: sono i simboli con cui quella materia si riconosce —
   il tempio dorico, l'arco a sesto acuto, la sfera armillare, la
   rosa dei venti di chi attraversa gli oceani.

   Ognuno sta in un riquadro di 100×100 e conta fra i venti e i
   quaranta tratti: le proporzioni sono quelle vere, non lo schizzo
   di prima. Il disegno viene mostrato a 215px sul monitor e a 145
   sul telefono, al 20% di opacità: da lì viene la regola che si
   sono dati questi tratti — nessun dettaglio più sottile di due
   unità, o a quella dimensione impasta e sporca soltanto.
   ──────────────────────────────────────────────────────────── */
const SIGILLI={

  /* Tempio dorico. Tre gradini di stilobate, sei colonne scanalate
     con capitello a echino, architrave, fregio a triglifi, timpano
     con acroteri. */
  'fil-antica':`
    <path d="M12 32L50 14l38 18"/><path d="M16 31L50 16l34 15"/>
    <path d="M50 14v-3M12 32v-2M88 32v-2"/>
    <circle cx="50" cy="25" r="3"/>
    <path d="M12 32h76M12 35h76M12 32v3M88 32v3"/>
    <path d="M14 35h72M14 41h72M14 35v6M86 35v6"/>
    <path d="M20 40v-4M26 40v-4M32 40v-4M38 40v-4M44 40v-4M50 40v-4M56 40v-4M62 40v-4M68 40v-4M74 40v-4M80 40v-4"/>
    <path d="M14 44h72M14 41v3M86 41v3"/>
    <path d="M17 48L15.5 44h9L23 48M29 48L27.5 44h9L35 48M41 48L39.5 44h9L47 48"/>
    <path d="M53 48L51.5 44h9L59 48M65 48L63.5 44h9L71 48M77 48L75.5 44h9L83 48"/>
    <path d="M17 80V48M23 80V48M29 80V48M35 80V48M41 80V48M47 80V48"/>
    <path d="M53 80V48M59 80V48M65 80V48M71 80V48M77 80V48M83 80V48"/>
    <path d="M20 78V50M32 78V50M44 78V50M56 78V50M68 78V50M80 78V50"/>
    <path d="M16 80h68M13 84h74M10 88h80"/>
    <path d="M16 80v4M84 80v4M13 84v4M87 84v4"/>`,

  /* Arco a sesto acuto. Ghimberga, due archivolti, colonnine con
     capitello e base, e dentro il traforo: due lancette con il loro
     trifoglio e un quadrilobo nel timpano. Gli archi sono a due
     centri, come si costruivano col compasso. */
  'fil-medievale':`
    <path d="M19 52A46.7 46.7 0 0 1 50 8"/><path d="M81 52A46.7 46.7 0 0 0 50 8"/>
    <path d="M24 52A40.8 40.8 0 0 1 50 14"/><path d="M76 52A40.8 40.8 0 0 0 50 14"/>
    <path d="M29 52A34.9 34.9 0 0 1 50 20"/><path d="M71 52A34.9 34.9 0 0 0 50 20"/>
    <path d="M16 52h6M78 52h6"/>
    <path d="M22 52h9v4h-9zM69 52h9v4h-9z"/>
    <path d="M25 84V56M30 84V56M70 84V56M75 84V56"/>
    <path d="M21 84h13M66 84h13M19 87h17M64 87h17"/>
    <path d="M50 84V44"/>
    <path d="M33 58A26.6 26.6 0 0 1 40 40"/><path d="M47 58A26.6 26.6 0 0 0 40 40"/>
    <path d="M53 58A26.6 26.6 0 0 1 60 40"/><path d="M67 58A26.6 26.6 0 0 0 60 40"/>
    <path d="M33 84V58M47 84V58M53 84V58M67 84V58"/>
    <circle cx="40" cy="47" r="2.6"/><circle cx="60" cy="47" r="2.6"/>
    <circle cx="50" cy="30" r="7.5"/>
    <circle cx="50" cy="25.6" r="3.2"/><circle cx="54.4" cy="30" r="3.2"/>
    <circle cx="50" cy="34.4" r="3.2"/><circle cx="45.6" cy="30" r="3.2"/>`,

  /* Sfera armillare. Cerchio meridiano graduato con otto tacche,
     orizzonte, coluro, eclittica inclinata di 23,5°, i due tropici,
     la Terra al centro e l'asse polare che esce dai poli. */
  'fil-moderna':`
    <circle cx="50" cy="50" r="34"/><circle cx="50" cy="50" r="31"/>
    <ellipse cx="50" cy="50" rx="34" ry="12"/><ellipse cx="50" cy="50" rx="31" ry="10"/>
    <ellipse cx="50" cy="50" rx="12" ry="34"/><ellipse cx="50" cy="50" rx="10" ry="31"/>
    <ellipse cx="50" cy="50" rx="31" ry="11" transform="rotate(-23.5 50 50)"/>
    <ellipse cx="50" cy="38" rx="26" ry="8"/><ellipse cx="50" cy="62" rx="26" ry="8"/>
    <path d="M81 50h3M50 81v3M19 50h-3M50 19v-3"/>
    <path d="M71.9 71.9L74 74M28.1 71.9L26 74M28.1 28.1L26 26M71.9 28.1L74 26"/>
    <circle cx="50" cy="50" r="5"/>
    <path d="M50 16V8M50 84v8"/>
    <path d="M38 92h24M42 92l-4 6M58 92l4 6"/>`,

  /* Il cerchio non chiude più e il centro non c'è: al suo posto una
     rete di nodi, dove ogni punto ne regge altri e nessuno regge
     tutto. Il pensiero contemporaneo disegnato come sta: per
     collegamenti, non per gerarchia. */
  'fil-contemporanea':`
    <path d="M55.9 16.5A34 34 0 0 1 83.5 44.1"/>
    <path d="M83.5 55.9A34 34 0 0 1 55.9 83.5"/>
    <path d="M44.1 83.5A34 34 0 0 1 16.5 55.9"/>
    <path d="M16.5 44.1A34 34 0 0 1 44.1 16.5"/>
    <path d="M50 26L30 36M50 26L70 36M50 26V48"/>
    <path d="M30 36L22 54M30 36L50 48M70 36L50 48M70 36L78 54"/>
    <path d="M22 54L50 48M22 54L34 70M50 48L78 54"/>
    <path d="M50 48L34 70M50 48L66 70M78 54L66 70"/>
    <path d="M34 70L50 78M66 70L50 78M34 70h32"/>
    <circle cx="50" cy="26" r="2.6"/><circle cx="30" cy="36" r="2.6"/>
    <circle cx="70" cy="36" r="2.6"/><circle cx="22" cy="54" r="2.6"/>
    <circle cx="78" cy="54" r="2.6"/><circle cx="34" cy="70" r="2.6"/>
    <circle cx="66" cy="70" r="2.6"/><circle cx="50" cy="78" r="2.6"/>
    <circle cx="50" cy="48" r="4"/>`,

  /* Trilite: due ritti sbozzati a mano e l'architrave che li lega,
     con due pietre più basse dietro, le coppelle incise sopra e il
     sole che ci passa attraverso. Le pietre non sono squadrate —
     nessun lato è parallelo all'altro. */
  'sto-preistoria':`
    <path d="M23 84L21 42l12-2 2 44z"/>
    <path d="M65 84L63 40l12 2-2 42z"/>
    <path d="M16 42l68-2-1-9-66 2z"/>
    <path d="M40 84V54l6-1v31M54 84V53l6 1v30"/>
    <path d="M26 52v10M28 66v8M67 50v11M70 65v9"/>
    <circle cx="28" cy="37" r="1.8"/><circle cx="42" cy="36.5" r="1.8"/>
    <circle cx="58" cy="36" r="1.8"/><circle cx="72" cy="35.5" r="1.8"/>
    <circle cx="50" cy="18" r="7"/>
    <path d="M59 18h3M50 27v3M41 18h-3M50 9V6"/>
    <path d="M56.4 24.4l2.1 2.1M43.6 24.4l-2.1 2.1M43.6 11.6l-2.1-2.1M56.4 11.6l2.1-2.1"/>
    <path d="M8 84h84M13 88h74"/>`,

  /* Castello. Mastio e due torri merlate, corsi di pietra, feritoie
     a croce, saracinesca sotto l'arco della porta e lo stendardo in
     cima. I merli sono contati, non accennati. */
  'sto-medievale':`
    <path d="M34 34V28h5v4h4v-4h5v4h4v-4h5v4h4v-4h5v6"/>
    <path d="M16 44V38h5v4h4v-4h5v4h4v2"/>
    <path d="M84 44V38h-5v4h-4v-4h-5v4h-4v2"/>
    <path d="M34 34V84M66 34V84M16 44V84M84 44V84"/>
    <path d="M34 46h32M34 58h32M34 70h32"/>
    <path d="M16 54h18M16 66h18M16 78h18M66 54h18M66 66h18M66 78h18"/>
    <path d="M24 56v9M22 60h4M76 56v9M74 60h4"/>
    <path d="M40 44v9M38 48h4M60 44v9M58 48h4"/>
    <path d="M42 84V66A8 8 0 0 1 58 66V84"/>
    <path d="M46 84V64M50 84V62M54 84V64M42 78h16M42 72h16"/>
    <path d="M50 28V16M50 16l13 3.5-13 3.5"/>
    <path d="M12 84h76M8 88h84"/>`,

  /* Rosa dei venti. Quattro punte maggiori e quattro minori, ognuna
     piegata a metà come sulle carte nautiche, dentro un cerchio
     graduato ogni trenta gradi. */
  'sto-moderna':`
    <circle cx="50" cy="50" r="38"/><circle cx="50" cy="50" r="34"/>
    <path d="M65.6 34.4L47.9 47.9L52.1 52.1z"/><path d="M34.4 34.4L47.9 52.1L52.1 47.9z"/>
    <path d="M65.6 65.6L47.9 52.1L52.1 47.9z"/><path d="M34.4 65.6L47.9 47.9L52.1 52.1z"/>
    <path d="M50 20L46 50h8z"/><path d="M50 80L46 50h8z"/>
    <path d="M80 50L50 46v8z"/><path d="M20 50L50 46v8z"/>
    <path d="M50 20V50M50 80V50M80 50H50M20 50H50"/>
    <path d="M84 50h4M50 84v4M16 50h-4M50 16v-4"/>
    <path d="M79.4 67L82.9 69M67 79.4L69 82.9M33 79.4L31 82.9M20.6 67L17.1 69"/>
    <path d="M20.6 33L17.1 31M33 20.6L31 17.1M67 20.6L69 17.1M79.4 33L82.9 31"/>
    <circle cx="50" cy="50" r="5"/>`,

  /* L'età della macchina: una ruota dentata a otto denti, con mozzo,
     razze e ribattini, e due ciminiere che fumano dietro. */
  'sto-contemporanea':`
    <path d="M71.7 40.2L77.6 39.1L77.6 48.9L71.7 47.8"/>
    <path d="M68 56.6L72.9 60.1L66.1 66.9L62.6 62"/>
    <path d="M53.8 65.7L54.9 71.6L45.1 71.6L46.2 65.7"/>
    <path d="M37.4 62L33.9 66.9L27.1 60.1L32 56.6"/>
    <path d="M28.3 47.8L22.4 48.9L22.4 39.1L28.3 40.2"/>
    <path d="M32 31.4L27.1 27.9L33.9 21.1L37.4 26"/>
    <path d="M46.2 22.3L45.1 16.4L54.9 16.4L53.8 22.3"/>
    <path d="M62.6 26L66.1 21.1L72.9 27.9L68 31.4"/>
    <circle cx="50" cy="44" r="22"/><circle cx="50" cy="44" r="7"/><circle cx="50" cy="44" r="3"/>
    <path d="M55 49L65.6 59.6M45 49L34.4 59.6M45 39L34.4 28.4M55 39L65.6 28.4"/>
    <circle cx="64" cy="44" r="1.3"/><circle cx="57" cy="56.1" r="1.3"/>
    <circle cx="43" cy="56.1" r="1.3"/><circle cx="36" cy="44" r="1.3"/>
    <circle cx="43" cy="31.9" r="1.3"/><circle cx="57" cy="31.9" r="1.3"/>
    <path d="M11 86V54h7v32M82 86V58h7v28"/>
    <path d="M11 54c-3-6 3-9 0-15M82 58c-3-6 3-9 0-15"/>
    <path d="M6 86h88M10 90h80"/>`,

  /* La bilancia posata sulla carta. Il giogo, l'indice, tre catene
     per piatto e i due piatti che pendono uguali: la legge sta in
     equilibrio finché qualcuno non la muove. */
  'civ-costituzione':`
    <circle cx="50" cy="20" r="3"/><path d="M50 23v3"/>
    <path d="M18 30h64"/><path d="M44 30h12"/>
    <path d="M50 26v52"/>
    <path d="M50 30l-4 7h8z"/>
    <path d="M18 30L11 46M18 30v16M18 30l7 16"/>
    <path d="M82 30L75 46M82 30v16M82 30l7 16"/>
    <path d="M8 46h20M28 46A11 11 0 0 1 8 46"/>
    <path d="M72 46h20M92 46A11 11 0 0 1 72 46"/>
    <path d="M42 78h16M38 82h24"/>
    <path d="M20 80c10-5 22-5 30 1c8-6 20-6 30-1"/>
    <path d="M20 80v7c10-5 22-5 30 1c8-6 20-6 30-1v-7"/>
    <path d="M50 81v7"/>`,

  /* Palazzo delle istituzioni: cupola con lanterna, tamburo a
     colonne, timpano, sei colonne di portico su tre gradini e due
     ali basse ai lati. */
  'civ-istituzioni':`
    <circle cx="50" cy="18" r="2"/><path d="M50 20v4"/>
    <path d="M47 32h6M48 32v-5h4v5"/>
    <path d="M36 46A14 14 0 0 1 64 46"/><path d="M40 46A10 10 0 0 1 60 46"/>
    <path d="M34 46h32M36 46v8M64 46v8M34 54h32"/>
    <path d="M40 54v-8M46 54v-8M54 54v-8M60 54v-8"/>
    <path d="M26 64L50 52l24 12"/><path d="M30 63L50 53.5l20 9.5"/>
    <path d="M24 64h52M24 68h52M24 64v4M76 64v4"/>
    <path d="M25.5 84V68M30.5 84V68M34.5 84V68M39.5 84V68M43.5 84V68M48.5 84V68"/>
    <path d="M52.5 84V68M57.5 84V68M61.5 84V68M66.5 84V68M70.5 84V68M75.5 84V68"/>
    <path d="M25 84h6M34 84h6M43 84h6M52 84h6M61 84h6M70 84h6"/>
    <path d="M14 84V72h10v12M76 84V72h10v12"/>
    <path d="M17 80h4M79 80h4"/>
    <path d="M20 84h60M17 88h66M14 92h72"/>`
};
function sigilloDi(key){
  const d=SIGILLI[key];
  if(!d) return '';
  return '<svg class="lib-sigillo" viewBox="0 0 100 100" fill="none" stroke="currentColor" '
       + 'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+d+'</svg>';
}

const AREE={
  'Filosofia':        {col:'#9a7c2e'},
  'Storia':           {col:'#2d5a27'},
  'Educazione Civica':{col:'#a1542f'},
  'Didattica':        {col:'#3f6d8c'},
  'Strumenti':        {col:'#6b6459'},
  'Prove':            {col:'#7a4b8c'}
};
function coloreArea(g){return (AREE[g]||{col:'var(--stone)'}).col;}

/* ── I TRE MODI DI ENTRARE ──────────────────────────────────
   docente     → vede tutto e modifica
   osservatore → vede tutto ma non tocca niente (per chi valuta
                 il lavoro: un recruiter, un dirigente, un collega)
   studente    → vede i materiali e gli strumenti che lo riguardano
   ──────────────────────────────────────────────────────────── */
/* ── IL RUOLO IN UNA SCHEDA NUOVA ───────────────────────────
   `sessionStorage` vale per una scheda sola. Aprendo le slide da
   proiettare con «apri in una nuova scheda», quella scheda non
   sapeva più chi fosse entrato e mostrava allo stesso docente la
   pagina riservata agli studenti.

   Il ruolo va quindi ricordato anche fuori dalla sessione. Si usa
   `localStorage`, che le schede condividono, e lo si cancella
   all'uscita: la protezione resta quella di prima — una tenda —
   ma smette di chiudersi in faccia a chi ha la chiave. */
const CHIAVE_RUOLO='idearca-ruolo';
function segnaRuoloFuoriSessione(r){
  try{ if(r) localStorage.setItem(CHIAVE_RUOLO,r); }catch(e){}
}
function scordaRuoloFuoriSessione(){
  try{ localStorage.removeItem(CHIAVE_RUOLO); }catch(e){}
}

function ruoloCorrente(){
  const s=JSON.parse(sessionStorage.getItem('ix')||'{}');
  return s.ruolo||'studente';
}
function eDocente(){ return ruoloCorrente()==='docente'; }
function eOsservatore(){ return ruoloCorrente()==='osservatore'; }
/* l'osservatore vede le stesse cose del docente, ma in sola lettura */
function vedeRoba(){ return eDocente()||eOsservatore(); }

function vociExtra(){
  /* `chi` dice a chi la voce è destinata:
       tutti   → chiunque abbia un codice
       docente → solo chi insegna (e chi guarda in sola lettura)
     Questo elenco è l'unica fonte: da qui nascono sia la colonna
     di sinistra sia il menu a tendina del telefono. Prima erano
     due elenchi scritti a mano, e infatti avevano divergito —
     sul telefono lo studente non trovava «Consegna un compito»
     mentre gli comparivano Inbox e Lavagna, che non sono sue. */
  return [
    {g:'Didattica',k:'__consegna__',l:'Consegna un compito',    p:'Per gli studenti',         chi:'tutti',   ic:'📤'},
    {g:'Didattica',k:'__guarda__',  l:'Guarda la lavagna',      p:'Quello che scrivo, in diretta', chi:'tutti', ic:'◉'},
    {g:'Didattica',k:'__calendario__',l:'Calendario',           p:'Le lezioni, classe per classe', chi:'docente', ic:'📅'},
    {g:'Didattica',k:'__inbox__',   l:'Inbox',                  p:'Consegne degli studenti',  chi:'docente', ic:'📥'},
    {g:'Didattica',k:'__voti__',    l:'Votazioni',              p:'120 capitoli pronti',      chi:'tutti',   ic:'📊'},
    {g:'Strumenti',k:'__metodo__',  l:'Metodologie didattiche', p:'Debate e jigsaw pronti',   chi:'tutti',   ic:'🎓'},
    {g:'Strumenti',k:'__glossario__',l:'Glossario ipertestuale',p:'Filosofia e storia',       chi:'tutti',   ic:'📖'},
    {g:'Strumenti',k:'__confronto__',l:'Confrontatore di filosofi',p:'Dodici domande, cinquantun autori', chi:'tutti', ic:'⚖️'},
    {g:'Strumenti',k:'__contesto__',l:'Macchina del contesto',  p:'Un anno, la vita di allora', chi:'tutti', ic:'🕰'},
    {g:'Strumenti',k:'__grafici__', l:'Grafici animati',         p:'Quattordici serie storiche', chi:'tutti', ic:'📈'},
    {g:'Strumenti',k:'__map__',     l:'Mappa storica',          p:'Atlante interattivo',      chi:'tutti',   ic:'🗺'},
    {g:'Strumenti',k:'__mappe__',  l:'Mappe concettuali',     p:'Il capitolo intero, area per area', chi:'docente', ic:'🗺'},
    {g:'Strumenti',k:'__provoca__',l:'Provocazioni',          p:'Un\'ora di lezione, a tempi', chi:'docente', ic:'💥'},
    {g:'Strumenti',k:'__verifiche__',l:'Generatore di verifiche',p:'Compiti pronti da stampare',chi:'docente',ic:'📝'},
    {g:'Strumenti',k:'__aula__',    l:'Timer e sorteggio',      p:'Da proiettare in aula',    chi:'docente', ic:'⏱'},
    {g:'Strumenti',k:'__lavagna__', l:'Lavagna',                p:'Da proiettare in aula',    chi:'docente', ic:'🖊'},
    {g:'Prove',    k:'__prove__',   l:'Banco di lavoro',        p:'Strumenti in costruzione', chi:'docente', ic:'🧪'}
  ];
}

/* ── LE VISTE A PIENO SCHERMO ───────────────────────────────
   Ogni strumento è un riquadro che copre la libreria. `quando`
   dice se ricaricarlo: «ogni volta» per ciò che cambia di ora in
   ora (consegne, votazioni, inbox), «una volta» per le pagine
   statiche — così la lavagna non perde quello che ci si è
   scritto sopra passando ad altro e tornando indietro.
   ──────────────────────────────────────────────────────────── */
/* ── PERCHE' GLI STRUMENTI RESTAVANO VECCHI ───────────────
   Le cornici caricavano il loro indirizzo cosi' com'era. Per
   quelle da ricaricare ogni volta si attaccava «?»+orario — ma se
   l'indirizzo aveva gia' un «?» (come prove/lezione.html?solo=…)
   ne usciva un secondo punto interrogativo e il parametro si
   perdeva. Per le altre non si attaccava niente: il browser
   teneva la copia vecchia finche' non si svuotava la cache a mano,
   e il sito si aggiornava senza che lo strumento dentro cambiasse.
   Adesso il separatore e' quello giusto e ogni pagina porta il
   numero di versione del sito.
   ───────────────────────────────────────────────────────── */
function conVersione(indirizzo, semprenuovo){
  const sep = indirizzo.includes('?') ? '&' : '?';
  return indirizzo + sep + 'v=' + (semprenuovo ? Date.now() : VERSIONE);
}

const VISTE={
  __map__:      {vista:'lib-map-view',      uso:'map'},
  __metodo__:   {vista:'lib-metodo-view',   uso:'metodo'},
  __glossario__:{vista:'lib-glossario-view',uso:'glossario',frame:'lib-glossario-frame',src:'prove/glossario.html',  quando:'una volta'},
  __confronto__:{vista:'lib-confronto-view',uso:'confronto',frame:'lib-confronto-frame',src:'prove/confronto.html',  quando:'una volta'},
  __contesto__: {vista:'lib-contesto-view', uso:'contesto', frame:'lib-contesto-frame', src:'prove/contesto.html',   quando:'una volta'},
  __grafici__:  {vista:'lib-grafici-view',  uso:'grafici',  frame:'lib-grafici-frame',  src:'prove/grafici.html',    quando:'una volta'},
  __mappe__:    {vista:'lib-mappe-view',    uso:'mappe',    frame:'lib-mappe-frame',    src:'prove/lezione.html?solo=mappa',        quando:'una volta'},
  __provoca__:  {vista:'lib-provoca-view',  uso:'provoca',  frame:'lib-provoca-frame',  src:'prove/lezione.html?solo=provocazione', quando:'una volta'},
  __verifiche__:{vista:'lib-verifiche-view',uso:'verifiche',frame:'lib-verifiche-frame',src:'prove/verifiche.html',  quando:'una volta'},
  __aula__:     {vista:'lib-aula-view',     uso:'aula',     frame:'lib-aula-frame',     src:'prove/aula.html',       quando:'una volta'},
  /* La lavagna non ha un riquadro: si apre in una scheda sua.
     Dentro la cornice lo schermo intero la lasciava prigioniera
     del riquadro e si scriveva fuori dalla tela. */
  __lavagna__:  {fuori:'lavagna/index.html', uso:'lavagna'},
  __consegna__: {vista:'lib-consegna-view', uso:'consegna', frame:'lib-consegna-frame', src:'consegna/index.html',   quando:'ogni volta'},
  __voti__:     {vista:'lib-voti-view',     uso:'voti',     frame:'lib-voti-frame',     src:'votazioni/index.html',  quando:'ogni volta'},
  __guarda__:   {vista:'lib-guarda-view',   uso:'guarda',   frame:'lib-guarda-frame',   src:'lavagna/guarda.html',   quando:'ogni volta'},
  __calendario__:{vista:'lib-calendario-view',uso:'calendario',frame:'lib-calendario-frame',src:'calendario/index.html',quando:'ogni volta'},
  __inbox__:    {vista:'lib-inbox-view',    uso:'inbox',    frame:'lib-inbox-frame',    src:'inbox/index.html',      quando:'ogni volta'},
  __prove__:    {vista:'lib-prove-view',    uso:'prove',    frame:'lib-prove-frame',    src:'prove/index.html',      quando:'ogni volta'}
};

/* Chiude tutto e riporta a galla la libreria. */
function nascondiViste(){
  document.getElementById('lib-head').style.display='';
  document.getElementById('lib-modules').style.display='';
  Object.values(VISTE).forEach(v=>{
    const n=document.getElementById(v.vista); if(n) n.style.display='none';
  });
}

/* Apre una vista. Torna true se la chiave era di uno strumento,
   false se è una materia — così chi chiama sa se proseguire. */
function mostraVista(k){
  const v=VISTE[k]; if(!v) return false;
  /* alcune cose non vivono in un riquadro: escono in una scheda
     loro e la libreria resta dov'era */
  if(v.fuori){
    window.open(conVersione(v.fuori), 'idearca-'+v.uso);
    registraUso('strumento', v.uso);
    return true;
  }
  nascondiViste();
  document.getElementById('lib-head').style.display='none';
  document.getElementById('lib-modules').style.display='none';
  if(v.frame){
    const f=document.getElementById(v.frame);
    if(f && (v.quando==='ogni volta' || !f.getAttribute('src')))
      f.src = conVersione(v.src, v.quando==='ogni volta');
  }
  const n=document.getElementById(v.vista); if(n) n.style.display='block';
  registraUso('strumento', v.uso);
  if(k==='__inbox__') segnaConsegneLette();
  return true;
}

function buildNav(keys){
  const groups={};
  keys.forEach(k=>{const g=MATERIE[k].g;if(!groups[g])groups[g]=[];groups[g].push(k);});
  vociExtra().forEach(v=>{if(!groups[v.g])groups[v.g]=[];groups[v.g].push(v.k);});

  const extraMap={};vociExtra().forEach(v=>extraMap[v.k]=v);
  let html='';let first=true;

  /* I gruppi si richiudono. Con dieci materie piu' sette strumenti
     la colonna diventava un elenco lungo e indistinto: adesso resta
     aperto quello in cui si sta lavorando, gli altri stanno buoni. */
  Object.entries(groups).forEach(([g,ks],i)=>{
    const col=coloreArea(g);
    const chiuso = i>0 ? ' chiuso' : '';
    html+=`<div class="lib-group${chiuso}" style="--area:${col}" data-gruppo="${g}">
      <button class="lib-group-title" onclick="apriGruppo(this)" aria-expanded="${i===0}">
        <i class="lib-group-chip"></i><span>${g}</span>
        <i class="lib-group-freccia" aria-hidden="true"></i>
      </button>
      <div class="lib-group-voci">`;
    ks.forEach(k=>{
      const info=MATERIE[k]||extraMap[k];
      if(!info)return;
      if(info.chi==='docente' && !vedeRoba()) return;
      const attiva=first&&!!MATERIE[k];
      if(MATERIE[k])first=false;
      /* Il docente vede più voci dello studente, ma finora non c'era
         modo di sapere quali: la colonna sembrava uguale per tutti, e
         il rischio era proiettare in aula una cosa che gli studenti
         non dovrebbero vedere. Il bollino compare solo a chi insegna:
         allo studente quelle voci non arrivano proprio, e un'etichetta
         «solo il docente» sopra le cose che invece vede sarebbe solo
         confusione. */
      const soloMio = info.chi==='docente' && vedeRoba()
        ? '<span class="lib-solo" title="Questa voce la vedi solo tu: gli studenti non ce l\'hanno">solo tu</span>' : '';
      html+=`<button class="lib-item${attiva?' active':''}${soloMio?' e-mia':''}" data-key="${k}" onclick="navClick(this,'${k}')">
        <span class="lib-dot"></span>
        <span class="lib-item-txt"><b>${info.l}${soloMio}</b><small>${info.p||''}</small></span>
        <span class="lib-count" data-count="${k}"></span>
      </button>`;
    });
    html+='</div></div>';
  });
  document.getElementById('lib-nav').innerHTML=html;
  legendaSoloTu();
  segnalaConsegneAperte();
  contaConsegneNuove();
  avviaGiroConsegne();
  /* un gruppo senza voci (Didattica per uno studente, se tutto
     e' riservato) sparisce invece di restare come titolo vuoto */
  document.querySelectorAll('.lib-group').forEach(g=>{
    if(!g.querySelector('.lib-item')) g.remove();
  });
}

/* ── LA LEGENDA DEL BOLLINO ─────────────────────────────────
   Un bollino che nessuno ha spiegato è un rebus. Sotto il titolo
   della colonna compare una riga che dice che cosa vuol dire, e
   quante voci sono riservate: il numero serve più della parola,
   perché fa capire subito quanta parte della colonna gli studenti
   non vede. Allo studente questa riga non arriva: non avrebbe
   niente da spiegare.
   ─────────────────────────────────────────────────────────── */
function legendaSoloTu(){
  const testa=document.querySelector('.lib-sidebar-head');
  if(!testa) return;
  const vecchia=testa.querySelector('.lib-legenda');
  if(vecchia) vecchia.remove();
  if(!vedeRoba()) return;
  const quante=document.querySelectorAll('.lib-item.e-mia').length;
  if(!quante) return;
  const d=document.createElement('div');
  d.className='lib-legenda';
  const b=document.createElement('span');
  b.className='lib-solo'; b.textContent='solo tu';
  d.append(b, document.createTextNode(
    ` ${quante} voc${quante===1?'e':'i'} che gli studenti non vedono`));
  testa.append(d);
}
/* ── IL PALLINO SULLE CONSEGNE ──────────────────────────────
   «Consegna un compito» c'è sempre, anche quando non c'è nulla
   da consegnare: toglierla e rimetterla farebbe sparire una voce
   che gli studenti devono imparare a trovare. Ma allora, quando
   una finestra è davvero aperta, bisogna che si veda — altrimenti
   il professore apre la consegna e nessuno se ne accorge.
   Il conteggio arriva dalla stessa funzione che usa la pagina di
   consegna, che risponde anche a chi non ha fatto l'accesso.
   ──────────────────────────────────────────────────────────── */
async function segnalaConsegneAperte(){
  const voce=document.querySelector('.lib-item[data-key="__consegna__"]');
  if(!voce) return;
  let quante=0;
  try{
    const res=await fetch(SB_URL+'/rest/v1/rpc/finestre_aperte',{
      method:'POST',
      headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Content-Type':'application/json'},
      body:'{}'});
    if(res.ok) quante=(await res.json()).length;
  }catch(_){ return; }          /* offline: si lascia la voce com'è */
  if(!quante) return;
  voce.classList.add('ha-novita');
  const c=voce.querySelector('.lib-count');
  if(c){ c.textContent=quante; c.classList.add('lib-count-aperto'); }
  voce.querySelector('small').textContent =
    quante===1 ? 'Una consegna aperta adesso' : quante+' consegne aperte adesso';
  /* e anche nel menu del telefono, dove il pallino non si vede */
  const opt=document.querySelector('#mob-select option[value="__consegna__"]');
  if(opt && !opt.textContent.includes('•')) opt.textContent+='  • '+quante;
}

/* ── LE CONSEGNE APPENA ARRIVATE ────────────────────────────
   La tabella `consegne` ha già una colonna `letto`, e le regole
   del database permettono di leggerla solo a chi insegna: basta
   contare quelle non lette. Nessuna migrazione.

   Il conteggio si aggiorna da solo ogni due minuti mentre la
   pagina è aperta, e quando ne arriva una nuova compare un
   avviso in basso che si può chiudere o cliccare per andare
   all'Inbox. Non si ripete: si avvisa solo dei numeri nuovi
   rispetto all'ultimo giro. */
let consegneNonLette = null;      /* null = non ancora chiesto */

async function contaConsegneNuove(){
  if(!eDocente()) return;
  let quante=0;
  try{
    const res=await fetch(SB_URL+'/rest/v1/consegne?select=id&letto=is.false',
      {headers:wHead()});
    if(!res.ok) return;
    quante=(await res.json()).length;
  }catch(_){ return; }

  const prima=consegneNonLette;
  consegneNonLette=quante;
  segnaInbox(quante);
  /* si avvisa solo se il numero è cresciuto, e non al primo giro:
     all'apertura della pagina il pallino basta */
  if(prima!==null && quante>prima) avvisoConsegna(quante-prima, quante);
}

function segnaInbox(quante){
  const voce=document.querySelector('.lib-item[data-key="__inbox__"]');
  if(!voce) return;
  const c=voce.querySelector('.lib-count');
  voce.classList.toggle('ha-novita', quante>0);
  if(c){
    c.textContent = quante>0 ? quante : '';
    c.classList.toggle('lib-count-aperto', quante>0);
  }
  const p=voce.querySelector('small');
  if(p) p.textContent = quante>0
    ? (quante===1 ? 'Una consegna da leggere' : quante+' consegne da leggere')
    : 'Consegne degli studenti';
  const opt=document.querySelector('#mob-select option[value="__inbox__"]');
  if(opt) opt.textContent='📥 Inbox'+(quante>0 ? '  • '+quante : '');
  /* e nel titolo della scheda, che si vede anche da un'altra scheda */
  document.title = (quante>0 ? '('+quante+') ' : '')
    + document.title.replace(/^\(\d+\)\s*/,'');
}

function avvisoConsegna(nuove, totale){
  document.getElementById('avviso-consegna')?.remove();
  const d=document.createElement('div');
  d.id='avviso-consegna';
  d.className='avviso-consegna';
  d.innerHTML=
    '<span class="ac-punto"></span>'
    +'<div class="ac-testo"><b>'+(nuove===1?'È arrivata una consegna':'Sono arrivate '+nuove+' consegne')+'</b>'
    +'<span>'+(totale===1?'Una da leggere in tutto':totale+' da leggere in tutto')+'</span></div>'
    +'<button class="ac-vai">Apri l\'Inbox</button>'
    +'<button class="ac-x" aria-label="Chiudi">✕</button>';
  document.body.appendChild(d);
  d.querySelector('.ac-vai').onclick=()=>{
    d.remove();
    const voce=document.querySelector('.lib-item[data-key="__inbox__"]');
    if(voce) navClick(voce,'__inbox__'); else mostraVista('__inbox__');
  };
  d.querySelector('.ac-x').onclick=()=>d.remove();
  requestAnimationFrame(()=>d.classList.add('su'));
  /* dopo mezzo minuto se ne va da sola: il pallino nella colonna
     resta, quindi l'informazione non si perde */
  setTimeout(()=>{ d.classList.remove('su'); setTimeout(()=>d.remove(),400); }, 30000);
}

/* L'Inbox, quando la si apre, segna per letto quello che mostra:
   così il conteggio torna a zero senza doverci pensare. */
async function segnaConsegneLette(){
  if(!eDocente() || !consegneNonLette) return;
  try{
    await fetch(SB_URL+'/rest/v1/consegne?letto=is.false',{
      method:'PATCH',
      headers:wHead({'Content-Type':'application/json','Prefer':'return=minimal'}),
      body:JSON.stringify({letto:true})});
  }catch(_){}
  consegneNonLette=0; segnaInbox(0);
}

/* ══════════════════════════════════════════════════════════
   LA LIBRERIA SUL TELEFONO

   Sul telefono la colonna di sinistra non c'è, e finora al suo
   posto stava un menu a tendina con dentro tutto: dieci materie
   e nove strumenti in fila, con le emoji, e nessuna scelta di
   partenza. Si entrava con il codice e ci si trovava davanti una
   tendina chiusa sopra una pagina vuota.

   Adesso sono due schermate, come su qualunque telefono: prima
   l'elenco, poi la cosa scelta, con la freccia per tornare. Le
   materie stanno in alto raggruppate per area e con il numero di
   documenti; gli strumenti in fondo, perché quelli si cercano di
   proposito mentre le materie si guardano.

   Le due schermate si alternano con una classe sul contenitore:
   nessun secondo elenco da tenere allineato, gli stessi dati e
   lo stesso filtro di ruolo di tutto il resto.
   ══════════════════════════════════════════════════════════ */
const ICONE_AREA={Filosofia:'✦', Storia:'❋', 'Educazione Civica':'§'};

function costruisciTelefono(keys){
  const casa=document.getElementById('tel-home');
  if(!casa) return;

  const gruppi={};
  keys.forEach(k=>{ const g=MATERIE[k].g; (gruppi[g]=gruppi[g]||[]).push(k); });
  const extra={};
  vociExtra().forEach(v=>{
    if(v.chi==='docente' && !vedeRoba()) return;
    (extra[v.g]=extra[v.g]||[]).push(v);
  });

  let html=`<div class="tel-testa"><h3>La tua libreria</h3>
    <p id="tel-stats">${document.getElementById('lib-stats')?.textContent||''}</p></div>`;

  const voce=(k, info, icona, conta)=>`
    <button class="tel-voce" data-key="${k}" onclick="telApri('${k}')">
      <span class="tv-ic" aria-hidden="true">${icona}</span>
      <span class="tv-txt"><b>${escHtml(info.l)}</b><small>${escHtml(info.p||'')}</small></span>
      ${conta}
      <svg class="tv-freccia" viewBox="0 0 24 24" width="16" height="16" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
    </button>`;

  Object.entries(gruppi).forEach(([g,ks])=>{
    const col=coloreArea(g);
    html+=`<div class="tel-gruppo" style="--area:${col}"><h4>${escHtml(g)}</h4>`;
    ks.forEach(k=>{
      html+=voce(k, MATERIE[k], ICONE_AREA[g]||'•',
        `<span class="tv-n" data-count-tel="${k}"></span>`);
    });
    html+='</div>';
  });

  Object.entries(extra).forEach(([g,vs])=>{
    const col=coloreArea(g);
    html+=`<div class="tel-gruppo" style="--area:${col}"><h4>${escHtml(g)}</h4>`;
    vs.forEach(v=>{
      const solo = v.chi==='docente' && vedeRoba()
        ? '<span class="lib-solo">solo tu</span>' : '';
      html+=voce(v.k, {l:v.l+solo, p:v.p}, v.ic||'•', '');
    });
    html+='</div>';
  });

  casa.innerHTML=html;
  /* i nomi con dentro il bollino passano da innerHTML: l'unica
     cosa non sfuggita è quella, e la scrivo io */
  casa.querySelectorAll('.tv-txt b').forEach(b=>{
    if(b.textContent.includes('<span')) b.innerHTML=b.textContent;
  });
}

/* Aprire una voce dal telefono: si passa alla seconda schermata
   e si riusa mobChange, che è già il punto in cui la libreria
   decide che cosa mostrare. */
function telApri(k){
  const p=document.getElementById('page-library');
  if(p) p.classList.add('tel-dentro');
  const info=MATERIE[k] || vociExtra().find(v=>v.k===k);
  const t=document.getElementById('tel-torna-txt');
  if(t) t.textContent='Le materie';
  mobChange(k);
  window.scrollTo({top:0, behavior:'instant'});
}
/* ── IL BOLLINO CON LE INIZIALI ──────────────────────────
   Per il docente è la scorciatoia alle due cose che apre ogni
   giorno: il calendario, per sapere che ora è; la lavagna, per
   farci lezione. Sono anche le due che si cercano di fretta —
   la lavagna spesso con la classe già seduta — e passare per la
   colonna è un gesto in più ripetuto duecento volte l'anno.
   Per gli altri il bollino non fa niente.
   ──────────────────────────────────────────────────────── */
function avatarClic(){
  if(!vedeRoba()) return;
  const g=document.getElementById('menu-avatar');
  if(g){ g.classList.toggle('on'); return; }
  const m=document.createElement('div');
  m.id='menu-avatar'; m.className='menu-avatar on';
  m.innerHTML=`
    <button onclick="apriDalBollino('calendario')">
      <span class="mv-ic">📅</span>
      <span><b>Calendario</b><i>Le lezioni, classe per classe</i></span></button>
    <button onclick="apriDalBollino('lavagna')">
      <span class="mv-ic">🖊</span>
      <span><b>Lavagna</b><i>Si apre a tutto schermo, in una scheda sua</i></span></button>
    <button onclick="apriDalBollino('qr')">
      <span class="mv-ic">▣</span>
      <span><b>Codice da inquadrare</b><i>Da proiettare: la classe entra col telefono</i></span></button>`;
  document.querySelector('.lib-user').appendChild(m);
  /* un clic fuori la chiude: un menu che resta aperto e' un menu
     che si preme per sbaglio */
  setTimeout(()=>document.addEventListener('click', chiudiMenuAvatar), 0);
}
function chiudiMenuAvatar(e){
  const m=document.getElementById('menu-avatar');
  if(!m) return;
  if(e && (e.target.closest('#menu-avatar') || e.target.closest('#lib-avatar'))) return;
  m.classList.remove('on');
  document.removeEventListener('click', chiudiMenuAvatar);
}
/* ══════════════════════════════════════════════════════════
   IL CODICE DA INQUADRARE

   Dettare un indirizzo a venticinque persone non funziona: tre
   lo scrivono male, due chiedono di ripetere, e intanto la
   lezione è ferma. Un quadrato sul proiettore lo inquadrano
   tutti in dieci secondi.

   Il codice si calcola qui dentro, senza rete: in aula la
   connessione va e viene, e un codice che dipende da un servizio
   esterno è un codice che qualche volta non compare — proprio
   davanti alla classe.
   ══════════════════════════════════════════════════════════ */
function mostraQR(){
  const indirizzo = location.origin + location.pathname.replace(/[^/]*$/,'');
  let v=document.getElementById('velo-qr');
  if(!v){
    v=document.createElement('div');
    v.id='velo-qr'; v.className='velo-qr';
    v.onclick = e => { if(e.target===v) v.classList.remove('on'); };
    document.body.appendChild(v);
  }
  v.innerHTML=`
    <div class="qr-scheda">
      <button class="qr-chiudi" onclick="document.getElementById('velo-qr').classList.remove('on')"
        aria-label="Chiudi">×</button>
      <div class="qr-tela" id="qr-tela"></div>
      <div class="qr-indirizzo">${escHtml(indirizzo)}</div>
      <p class="qr-nota">Inquadratelo con la fotocamera del telefono.
        Poi serve il codice della classe per entrare.</p>
    </div>`;
  v.classList.add('on');
  try{
    const lato=Math.min(520, Math.round(Math.min(window.innerWidth, window.innerHeight)*0.62));
    document.getElementById('qr-tela').appendChild(QR.disegna(indirizzo,{lato}));
  }catch(e){
    document.getElementById('qr-tela').textContent='Non riesco a disegnare il codice.';
  }
}
document.addEventListener('keydown', e=>{
  if(e.key==='Escape') document.getElementById('velo-qr')?.classList.remove('on');
});

function apriDalBollino(cosa){
  chiudiMenuAvatar();
  if(cosa==='qr'){ mostraQR(); return; }
  if(cosa==='lavagna'){
    /* ── PERCHE' LA LAVAGNA ESCE DAL SITO ─────────────────
       Dentro la cornice non funzionava: a schermo intero da un
       iframe la lavagna resta prigioniera del suo riquadro, e
       quello che si scrive fuori dal rettangolo non compare. In
       una scheda sua lo schermo intero e' quello vero del
       browser, e non c'e' niente intorno che possa rubarle un
       tocco. È lo strumento che finisce sul proiettore: deve
       partire al primo colpo. */
    window.open('lavagna/index.html', 'idearca-lavagna');
    registraUso('strumento','lavagna');
    return;
  }
  const p=document.getElementById('page-library');
  if(p) p.classList.add('tel-dentro');
  mostraVista('__calendario__');
  document.querySelectorAll('.lib-item').forEach(n=>
    n.classList.toggle('active', n.dataset.key==='__calendario__'));
  window.scrollTo({top:0, behavior:'instant'});
}

function telTornaAlle(){
  const p=document.getElementById('page-library');
  if(p) p.classList.remove('tel-dentro');
  nascondiViste();
  window.scrollTo({top:0, behavior:'instant'});
}

function buildMobSelect(keys){
  costruisciTelefono(keys);
  const sel=document.getElementById('mob-select');
  sel.innerHTML='<option value="">— Scegli una materia —</option>';
  keys.forEach((k,i)=>{
    const opt=document.createElement('option');
    opt.value=k;opt.textContent=MATERIE[k].l;
    if(i===0) opt.selected=true;
    sel.appendChild(opt);
  });
  /* le stesse voci della colonna, con lo stesso filtro di ruolo:
     se una voce non spetta a chi guarda, non compare da nessuna
     delle due parti */
  vociExtra().forEach(v=>{
    if(v.chi==='docente' && !vedeRoba()) return;
    const o=document.createElement('option');
    /* nel menu a tendina non si possono mettere bollini: il «solo tu»
       si scrive in coda al nome, che è l'unica cosa che una option
       sa mostrare */
    const solo = v.chi==='docente' && vedeRoba() ? ' · solo tu' : '';
    o.value=v.k; o.textContent=(v.ic?v.ic+' ':'')+v.l+solo;
    sel.appendChild(o);
  });
}
function mobChange(key){
  if(!key) return;
  document.querySelectorAll('.lib-item').forEach(n=>{n.classList.toggle('active',n.dataset.key===key);});
  if(mostraVista(key)) return;
  nascondiViste();
  registraUso('materia', key);
  renderSubject(key);
}
function apriGruppo(bottone){
  const g=bottone.closest('.lib-group');
  const eraChiuso=g.classList.contains('chiuso');
  g.classList.toggle('chiuso',!eraChiuso);
  bottone.setAttribute('aria-expanded', String(eraChiuso));
}

function navClick(el,key){
  /* se si arriva qui da una ricerca o dal menu del telefono, il
     gruppo giusto deve aprirsi da solo */
  el.closest('.lib-group')?.classList.remove('chiuso');
  document.querySelectorAll('.lib-item').forEach(n=>n.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('mob-select').value=key;
  if(mostraVista(key)) return;
  nascondiViste();
  /* mancava: dalla colonna del computer la materia aperta non
     veniva contata, e «le materie più aperte» restava vuoto per
     chiunque non usasse il telefono */
  registraUso('materia', key);
  renderSubject(key);
}
/* La lavagna si carica solo la prima volta che la si apre: cosi'
   non tiene aperta una sessione di scrittura per chi non la usa,
   e una volta caricata conserva quello che c'e' scritto sopra
   anche se si passa ad altre sezioni e si torna indietro. */
/* La linea del tempo e' una pagina statica: si carica una volta
   sola, la prima che la si apre. */
/* La pagina di consegna: si ricarica ogni volta, perche' quali
   finestre siano aperte cambia di ora in ora. */
/* Il banco di lavoro: gli strumenti mentre li costruiamo.
   Lo vede solo chi insegna. */
/* Nasconde tutte le viste a pieno schermo e riporta a galla la
   libreria: la chiamano sia navClick sia mobChange. */

/* Il giro periodico. Si ferma quando la scheda non è in primo
   piano: chiedere il conteggio a una scheda che nessuno guarda è
   traffico buttato, e al ritorno si chiede subito. */
let giroConsegne=null;
function avviaGiroConsegne(){
  clearInterval(giroConsegne);
  giroConsegne=setInterval(()=>{ if(!document.hidden) contaConsegneNuove(); }, 120000);
  document.addEventListener('visibilitychange', ()=>{
    if(!document.hidden) contaConsegneNuove();
  });
}

let searchDebounce=null;
function escHtml(s){return (s||'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));}
function onSearchInput(val){
  clearTimeout(searchDebounce);
  const q=val.trim();
  const box=document.getElementById('lib-search-results');
  if(q.length<2){box.classList.remove('on');box.innerHTML='';return;}
  searchDebounce=setTimeout(()=>doSearch(q),300);
}
async function doSearch(q){
  const box=document.getElementById('lib-search-results');
  box.classList.add('on');
  box.innerHTML='<div class="lib-spinner"></div>';
  try{
    const term=q.replace(/[%,()*]/g,' ').trim();
    const url=`${SB_URL}/rest/v1/materiali?attivo=eq.true&or=(titolo.ilike.*${encodeURIComponent(term)}*,descrizione.ilike.*${encodeURIComponent(term)}*)&select=*&limit=20`;
    const res=await fetch(url,{headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY}});
    const rows=await res.json();
    if(!rows||!rows.length){box.innerHTML=`<div class="search-empty">Nessun risultato per &laquo;${escHtml(q)}&raquo;.</div>`;return;}
    const TAB_LABEL={materiali:'Slide',fonti:'Fonte',esercizi:'Approfondimento',interdisciplinare:'Risorsa',compiti:'Compito'};
    box.innerHTML=rows.map(r=>{
      const m=MATERIE[r.materia]||{l:r.materia,g:''};
      return `<div class="search-result-item" onclick="goToSearchResult('${r.materia}','${r.tab}')">
        <div class="search-result-title">${escHtml(r.titolo)}</div>
        <div class="search-result-meta">${m.g?escHtml(m.g)+' · ':''}${escHtml(m.l||r.materia)} · ${TAB_LABEL[r.tab]||r.tab}</div>
      </div>`;
    }).join('');
  }catch(e){
    box.innerHTML='<div class="search-empty">Errore nella ricerca. Riprova.</div>';
  }
}
function goToSearchResult(materia,tab){
  document.getElementById('lib-search-results').classList.remove('on');
  document.getElementById('lib-search-input').value='';
  document.querySelectorAll('.lib-item').forEach(n=>n.classList.toggle('active',n.dataset.key===materia));
  const mobSel=document.getElementById('mob-select');if(mobSel)mobSel.value=materia;
  document.querySelectorAll('.lib-tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===tab));
  renderSubject(materia,tab);
  document.getElementById('lib-head')?.scrollIntoView({behavior:'smooth',block:'start'});
}
document.addEventListener('click',e=>{
  const wrap=document.querySelector('.lib-search-wrap');
  if(wrap&&!wrap.contains(e.target)) document.getElementById('lib-search-results')?.classList.remove('on');
});

function toggleTheme(){
  const html=document.documentElement;
  const next=html.getAttribute('data-theme')==='dark'?'light':'dark';
  html.setAttribute('data-theme',next);
  try{localStorage.setItem('idearca-theme',next);}catch(e){}
}

let currentKey=null,currentTab='materiali';
const TAB_TYPES={materiali:['pdf','quiz','video','materiale'],fonti:['fonte','source'],esercizi:['esercizio','exercise'],interdisciplinare:['interdisciplinare','link'],compiti:['compito','homework']};
function switchTab(tab){
  currentTab=tab;
  document.querySelectorAll('.lib-tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===tab));
  if(currentKey) renderSubject(currentKey,tab);
}
function openMatModal(key){document.getElementById('mat-'+key).classList.add('on');document.body.style.overflow='hidden';}
function closeMatModal(key){document.getElementById('mat-'+key).classList.remove('on');document.body.style.overflow='';}
function openLightbox(src){document.getElementById('lightbox-img').src=src;document.getElementById('lightbox').classList.add('on');}

/* ── L'AFFRESCO DI RAFFAELLO ────────────────────────────────
   L'immagine grande (quasi un megabyte) non viene scaricata
   all'apertura del sito: parte solo la prima volta che qualcuno
   clicca sulla didascalia. Chi non la apre non la paga.
   ──────────────────────────────────────────────────────────── */
const OPERA_SRC='https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1920px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg&w=1800&q=82&output=webp';
function apriOpera(){
  const img=document.getElementById('opera-img');
  if(!img.getAttribute('src')) img.src=OPERA_SRC;
  document.getElementById('opera-overlay').classList.add('on');
  document.body.style.overflow='hidden';
}
function chiudiOpera(){
  document.getElementById('opera-overlay').classList.remove('on');
  document.body.style.overflow='';
}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&document.getElementById('opera-overlay')?.classList.contains('on')) chiudiOpera();
});

function initTabsScrollHint(){
  const el=document.querySelector('#lib-head .lib-tabs');
  const hint=document.querySelector('#lib-head .lib-tabs-hint');
  if(!el||!hint) return;
  const update=()=>{
    const atEnd=el.scrollLeft+el.clientWidth>=el.scrollWidth-4;
    const noOverflow=el.scrollWidth<=el.clientWidth+1;
    hint.classList.toggle('hide',atEnd||noOverflow);
  };
  update();
  el.addEventListener('scroll',update);
  window.addEventListener('resize',update);
}

async function renderSubject(key,tab){
  currentKey=key;
  if(tab) currentTab=tab;
  if(!currentTab) currentTab='materiali';
  const ct=currentTab;
  const s=JSON.parse(sessionStorage.getItem('ix')||'{}');
  const m=MATERIE[key];if(!m)return;
  const isAdmin=s.ruolo==='docente';
  const areaCol=coloreArea(m.g);
  document.getElementById('lib-head').innerHTML=`
    <div class="lib-head-inner" style="--area:${areaCol}">
      ${sigilloDi(key)}
      <div class="lib-breadcrumb"><i class="lib-area-chip"></i>${m.g}</div>
      <h2 class="lib-content-title">${m.l}</h2>
      <div class="lib-period">${m.p}</div>
    </div>
    <div class="lib-tabs-wrap" style="--area:${areaCol}">
    <div class="lib-tabs">
      <button class="lib-tab${ct==='materiali'?' active':''}" data-tab="materiali" onclick="switchTab('materiali')">Slide</button>
      <button class="lib-tab${ct==='fonti'?' active':''}" data-tab="fonti" onclick="switchTab('fonti')">Fonti</button>
      <button class="lib-tab${ct==='esercizi'?' active':''}" data-tab="esercizi" onclick="switchTab('esercizi')">Approfondimenti</button>
      <button class="lib-tab${ct==='interdisciplinare'?' active':''}" data-tab="interdisciplinare" onclick="switchTab('interdisciplinare')">Risorse</button>
      <button class="lib-tab${ct==='compiti'?' active':''}" data-tab="compiti" onclick="switchTab('compiti')">Compiti</button>
      ${isAdmin?`<a class="lib-add-link" style="margin-left:auto;font-size:.72rem;color:var(--forest);cursor:pointer;text-decoration:none;display:flex;align-items:center;padding:.6rem 0" onclick="openUploadFor('${key}')">+ Aggiungi</a>`:''}
    </div>
    <span class="lib-tabs-hint" aria-hidden="true">›</span>
    </div>`;
  document.getElementById('lib-modules').innerHTML=Array(4).fill('<div class="skel-item"><div class="skel-bar skel-num"></div><div class="skel-bar skel-title"></div><div class="skel-bar skel-badge"></div></div>').join('');
  initTabsScrollHint();
  try{
    // Per le risorse: usa risorse condivise (fil-contemporanea per filosofia, sto-medievale per storia)
    let fetchKey=key;
    let materiaFilter=`materia=eq.${fetchKey}`;
    if(ct==='interdisciplinare' && MATERIE[key]?.g==='Filosofia'){
      fetchKey='fil-contemporanea'; materiaFilter=`materia=eq.${fetchKey}`;
    } else if(ct==='compiti'){
      const g=MATERIE[key]?.g;
      const groupKeys=Object.keys(MATERIE).filter(k=>MATERIE[k].g===g);
      materiaFilter=`materia=in.(${groupKeys.join(',')})`;
    }
    const url=`${SB_URL}/rest/v1/materiali?${materiaFilter}&tab=eq.${ct}&attivo=eq.true&order=posizione.asc,creato_il.asc&select=*`;
    const res=await fetch(url,{headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY}});
    const rows=await res.json();
    if(!rows||!rows.length){
      document.getElementById('lib-modules').innerHTML=`<div class="lib-empty">${isAdmin?'Nessun contenuto in questa sezione. Usa &ldquo;+ Aggiungi&rdquo; e scegli il tipo corretto.':'Nessun contenuto ancora disponibile in questa sezione.'}</div>`;
      return;
    }
    const BADGE={pdf:{c:'t-pdf',l:'PDF'},quiz:{c:'t-quiz',l:'Quiz'},video:{c:'t-video',l:'Video'},fonte:{c:'t-fonte',l:'Fonte'},esercizio:{c:'t-esercizio',l:'Esercizio'},interdisciplinare:{c:'t-interdisciplinare',l:'Risorsa'}};
    const mods=rows.map((r,i)=>{
      const b=BADGE[r.tipo]||{c:'t-pdf',l:'Extra'};
      const href=r.link&&r.link!=='#'?r.link:'javascript:void(0)';
      const tgt=r.link&&r.link!=='#'?'target="_blank" rel="noopener"':'';
      const titEsc=(r.titolo||'').replace(/'/g,"\\'");
      const linkEsc=(r.link||'').replace(/'/g,"\\'");
      return `<a class="mod-item" href="${href}" ${tgt} onclick="event.preventDefault();openViewer('${linkEsc}','${titEsc}')" style="animation-delay:${i*.06}s">
        <div class="mod-num">${String(i+1).padStart(2,'0')}</div>
        <div class="mod-body"><div class="mod-title">${r.titolo}</div><div class="mod-desc">${r.descrizione||''}</div></div>
        <span class="mod-type ${b.c}">${b.l}</span>
        ${isAdmin?`<div class="mod-acts" onclick="event.preventDefault();event.stopPropagation()">
          <button class="m-btn" onclick="editMod(${r.id},'${key}','${r.titolo.replace(/'/g,"\'")}','${(r.descrizione||'').replace(/'/g,"\'")}','${r.tipo}','${r.link}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" width="15" height="15"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"></path></svg></button>
          <button class="m-btn del" onclick="delMod(${r.id},'${key}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" width="15" height="15"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9M18.16 5.79L16.5 21a2.25 2.25 0 01-2.244 2H9.744A2.25 2.25 0 017.5 21L5.84 5.79m12.32 0a48 48 0 00-12.32 0"></path></svg></button>
        </div>`:''}
      </a>`;
    }).join('');
    document.getElementById('lib-modules').innerHTML=`<div class="mod-list">${mods}</div>`;
  }catch(e){
    console.error('renderSubject error:',e);
    document.getElementById('lib-modules').innerHTML='<div class="lib-empty">Errore nel caricamento. Riprova.</div>';
  }
}

function logout(){
  ATK='';sessionStorage.removeItem('atk');sessionStorage.removeItem('rtk');
  sessionStorage.removeItem('ix');
  document.getElementById('page-library').classList.remove('aperta');
  document.getElementById('page-home').style.display='block';
  segnaPagina('home');
  document.getElementById('admin-bar').style.display='none';
  document.getElementById('form-state').style.display='block';
  document.getElementById('success-state').classList.remove('on');
  document.getElementById('codice').value='';resetMsg();window.scrollTo(0,0);
}
function openUpload(){
  const key=document.querySelector('.lib-item.active')?.dataset.key||'fil-antica';
  document.getElementById('up-title').textContent='Aggiungi materiale';
  document.getElementById('up-btn').textContent='Salva';
  document.getElementById('up-id').value='';
  document.getElementById('up-mat').value=key;
  if(document.getElementById('up-tab')) document.getElementById('up-tab').value=currentTab||'materiali';
  document.getElementById('up-tit').value='';
  document.getElementById('up-desc').value='';
  document.getElementById('up-link').value='';
  document.getElementById('up-fb').textContent='';
  document.getElementById('up-overlay').classList.add('on');
}
function openUploadFor(key){openUpload();document.getElementById('up-mat').value=key;}
function closeUpload(){document.getElementById('up-overlay').classList.remove('on');}
function editMod(id,key,tit,desc,tipo,link){
  const tabMap={pdf:'materiali',quiz:'materiali',video:'materiali',fonte:'fonti',esercizio:'esercizi',interdisciplinare:'interdisciplinare',compito:'compiti',homework:'compiti'};
  document.getElementById('up-title').textContent='Modifica materiale';
  document.getElementById('up-btn').textContent='Aggiorna';
  document.getElementById('up-id').value=id;
  document.getElementById('up-mat').value=key;
  if(document.getElementById('up-tab')) document.getElementById('up-tab').value=tabMap[tipo]||'materiali';
  document.getElementById('up-tit').value=tit;
  document.getElementById('up-desc').value=desc;
  document.getElementById('up-link').value=link;
  document.getElementById('up-fb').textContent='';
  document.getElementById('up-overlay').classList.add('on');
}
async function saveModule(){
  const id=document.getElementById('up-id').value,mat=document.getElementById('up-mat').value;
  const tit=document.getElementById('up-tit').value.trim(),desc=document.getElementById('up-desc').value.trim();
  const tabVal=document.getElementById('up-tab')?.value||'materiali';
  const typeMap={materiali:'pdf',fonti:'fonte',esercizi:'esercizio',interdisciplinare:'interdisciplinare',compiti:'compito'};
  const tipo=typeMap[tabVal]||'pdf';
  const link=document.getElementById('up-link').value.trim();
  const fb=document.getElementById('up-fb');
  if(!tit){fb.textContent='Inserisci il titolo.';fb.style.color='#c0392b';return;}
  if(!link){fb.textContent='Inserisci il link.';fb.style.color='#c0392b';return;}
  fb.textContent='Salvataggio...';fb.style.color='var(--stone)';
  document.getElementById('up-btn').disabled=true;
  try{
    let res;
    if(id){res=await fetch(`${SB_URL}/rest/v1/materiali?id=eq.${id}`,{method:'PATCH',headers:wHead({'Content-Type':'application/json','Prefer':'return=minimal'}),body:JSON.stringify({materia:mat,titolo:tit,descrizione:desc,tipo,link,tab:tabVal})});}
    else{
      const pr=await fetch(`${SB_URL}/rest/v1/materiali?materia=eq.${mat}&select=posizione&order=posizione.desc&limit=1`,{headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY}});
      const prr=await pr.json();const pos=(prr&&prr.length>0?(prr[0].posizione||0):0)+1;
      res=await fetch(`${SB_URL}/rest/v1/materiali`,{method:'POST',headers:wHead({'Content-Type':'application/json','Prefer':'return=minimal'}),body:JSON.stringify({materia:mat,titolo:tit,descrizione:desc,tipo,link,posizione:pos,tab:tabVal})});
    }
    if(res.ok||res.status===201||res.status===204){fb.textContent='✓ Salvato!';fb.style.color='var(--forest)';setTimeout(()=>{closeUpload();renderSubject(mat);},900);}
    else throw new Error(res.status);
  }catch(e){fb.textContent='Errore: '+e.message;fb.style.color='#c0392b';}
  document.getElementById('up-btn').disabled=false;
}
async function delMod(id,key){
  if(!confirm('Eliminare questo materiale?')) return;
  try{const r=await fetch(`${SB_URL}/rest/v1/materiali?id=eq.${id}`,{method:'DELETE',headers:wHead({'Prefer':'return=minimal'})});if(r.ok||r.status===204)renderSubject(key);}catch(e){alert('Errore di connessione.');}
}
function showCodesGuide(){document.getElementById('codes-overlay').classList.add('on');loadCodes();}
function closeCodesModal(){document.getElementById('codes-overlay').classList.remove('on');}
async function loadCodes(){
  const body=document.getElementById('codes-body');
  body.innerHTML='<div class="lib-spinner"></div>';
  try{
    const res=await fetch(SB_URL+'/rest/v1/codici?select=*&order=creato_il.desc',{headers:wHead()});
    const rows=await res.json();
    if(!rows||!rows.length){body.innerHTML='<p style="text-align:center;color:var(--stone);padding:2rem">Nessun codice ancora creato.</p>';return;}
    let html='<div class="codes-list">';
    rows.forEach(r=>{
      const mat=r.materie==='all'?'Tutte le materie':r.materie;
      const stato=r.attivo===false?'<span class="code-badge disabled">Disabilitato</span>':'<span class="code-badge active">Attivo</span>';
      html+=`<div class="code-row">
        <div class="code-main">
          <span class="code-val">${r.codice}</span>
          <span class="code-name">${r.nome}</span>
          ${stato}
        </div>
        <div class="code-meta">${mat} · ${r.ruolo||'studente'}</div>
        <div class="code-acts">
          <button class="c-btn" onclick="toggleCode(${r.id},${r.attivo!==false})">${r.attivo===false?'Riattiva':'Disabilita'}</button>
          <button class="c-btn del" onclick="deleteCode(${r.id})">Elimina</button>
        </div>
      </div>`;
    });
    html+='</div>';
    body.innerHTML=html;
  }catch(e){body.innerHTML='<p style="text-align:center;color:var(--stone);padding:2rem">Errore caricamento.</p>';}
}
async function toggleCode(id,isActive){
  try{
    await fetch(SB_URL+'/rest/v1/codici?id=eq.'+id,{method:'PATCH',headers:wHead({'Content-Type':'application/json','Prefer':'return=minimal'}),body:JSON.stringify({attivo:!isActive})});
    loadCodes();
  }catch(e){alert('Errore.');}
}
async function deleteCode(id){
  if(!confirm('Eliminare questo codice?')) return;
  try{
    await fetch(SB_URL+'/rest/v1/codici?id=eq.'+id,{method:'DELETE',headers:wHead({'Prefer':'return=minimal'})});
    loadCodes();
  }catch(e){alert('Errore.');}
}
async function createCode(){
  const codice=document.getElementById('new-code').value.trim().toUpperCase();
  const nome=document.getElementById('new-name').value.trim();
  const ruolo=document.getElementById('new-role').value;
  const materie=document.getElementById('new-mat').value;
  const fb=document.getElementById('code-fb');
  if(!codice||!nome){fb.textContent='Compila codice e nome.';fb.style.color='#c0392b';return;}
  fb.textContent='Creazione...';fb.style.color='var(--stone)';
  try{
    const res=await fetch(SB_URL+'/rest/v1/codici',{method:'POST',headers:wHead({'Content-Type':'application/json','Prefer':'return=minimal'}),body:JSON.stringify({codice,nome,ruolo,materie,attivo:true})});
    if(res.ok||res.status===201){
      fb.textContent='✓ Codice creato!';fb.style.color='var(--forest)';
      document.getElementById('new-code').value='';
      document.getElementById('new-name').value='';
      setTimeout(()=>{fb.textContent='';loadCodes();},1000);
    } else throw new Error(res.status);
  }catch(e){fb.textContent='Errore: '+e.message;fb.style.color='#c0392b';}
}
function openPricing(){document.getElementById('pricing-overlay').classList.add('on');}
function closePricing(){document.getElementById('pricing-overlay').classList.remove('on');}
function sendContact(){
  const name=document.getElementById('cf-name').value.trim();
  const email=document.getElementById('cf-email').value.trim();
  const msg=document.getElementById('cf-msg').value.trim();
  const fb=document.getElementById('cf-fb');
  if(!name||!email||!msg){fb.textContent='Compila tutti i campi.';fb.style.color='#c0392b';return;}
  window.location.href=`mailto:alessandro.solla.00@gmail.com?subject=Messaggio da ${name} - Idearca&body=${encodeURIComponent(msg+'\n\nRispondi a: '+email)}`;
  fb.textContent='✓ Apertura client email...';fb.style.color='var(--forest)';
}
document.addEventListener('DOMContentLoaded',()=>{
  initReveal();initParticles();
  const s=sessionStorage.getItem('ix');
  if(s){try{showLibrary();}catch(e){}}
});

function togglePwd(){
  const inp=document.getElementById('codice');
  const ico=document.getElementById('eye-icon');
  if(inp.type==='password'){
    inp.type='text';
    ico.innerHTML='<path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path>';
  } else {
    inp.type='password';
    ico.innerHTML='<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>';
  }
}
/* ── LA VETRINA ─────────────────────────────────────────────
   Chi arriva senza codice — uno studente curioso, un collega, o
   qualcuno che sta valutando il mio lavoro — deve capire in venti
   secondi che cos'è questa piattaforma e quanto è grande.
   Prima l'elenco crudo delle righe del database: illeggibile.
   Adesso: i numeri, di che cosa è fatta, che strumenti offre, e
   qualche documento vero da aprire subito.
   ──────────────────────────────────────────────────────────── */
function openPeekModal(){
  document.getElementById('peek-overlay').classList.add('on');
  document.body.style.overflow='hidden';
  caricaVetrina();
}
function closePeekModal(){
  document.getElementById('peek-overlay').classList.remove('on');
  document.body.style.overflow='';
}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&document.getElementById('peek-overlay')?.classList.contains('on')) closePeekModal();
});

let vetrinaFatta=false;
/* Legge le due banche e conta capitoli e domande. Il risultato
   resta in sessione: sono due file grossi e non cambiano durante
   una visita. */
async function contaBanca(){
  try{
    const salvato=sessionStorage.getItem('idearca-numeri-banca');
    if(salvato) return JSON.parse(salvato);
    const [t1,t2]=await Promise.all([
      fetch('votazioni/banca.js').then(r=>r.text()),
      fetch('votazioni/banca2.js').then(r=>r.text()).catch(()=>'')
    ]);
    const titoli=new Set();
    [t1,t2].forEach(t=>(t.match(/titolo:\s*'((?:[^'\\]|\\.)*)'/g)||[]).forEach(x=>titoli.add(x)));
    const d={capitoli:titoli.size,
             domande:(t1.match(/tipo:/g)||[]).length+(t2.match(/tipo:/g)||[]).length};
    sessionStorage.setItem('idearca-numeri-banca',JSON.stringify(d));
    return d;
  }catch(e){ return {capitoli:120, domande:1080}; }
}

async function caricaVetrina(){
  if(vetrinaFatta) return;
  const body=document.getElementById('peek-body');
  try{
    const res=await fetch(SB_URL+'/rest/v1/materiali?attivo=is.true&select=titolo,materia,tipo,tab,link,posizione&limit=2000',
      {headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY}});
    const tutte=await res.json();
    if(!Array.isArray(tutte)||!tutte.length) throw new Error('vuoto');

    /* i percorsi internazionali stanno in un ramo a parte: qui contiamo
       il programma italiano, quello che si vede entrando */
    const righe=tutte.filter(r=>!String(r.materia||'').startsWith('ib:'));
    const conta=t=>righe.filter(r=>r.tab===t).length;

    /* ── I NUMERI DELLA BANCA, CONTATI ────────────────────
       Erano scritti a mano dentro la pagina: «120 capitoli,
       1080 domande». Ogni volta che la banca cresce quel numero
       resta indietro e la vetrina racconta una cosa vecchia.
       Adesso si leggono i due file e si contano. */
    const banca = await contaBanca(); 
    const materie=new Set(righe.map(r=>r.materia)).size;

    const slide=conta('materiali'), fonti=conta('fonti'),
          appro=conta('esercizi'), risorse=conta('interdisciplinare'),
          compiti=righe.filter(r=>r.tab==='compiti'||r.tab==='compito').length;

    /* qualche documento vero, aperto a tutti: il primo di ogni scaffale.
       Scelta stabile — chi torna ritrova gli stessi. */
    const primo=(materia,tab)=>righe
      .filter(r=>r.materia===materia&&r.tab===tab&&r.link&&r.link!=='#')
      .sort((a,b)=>(a.posizione||0)-(b.posizione||0))[0];
    const ORO='#9a7c2e', VERDE='#2d5a27', TERRA='#a1542f', BLU='#3f6d8c';
    /* Un esempio per ogni scaffale: chi valuta il lavoro deve poter
       aprire almeno una cosa di ogni tipo, non quattro slide uguali. */
    const campioni=[
      {tipo:'Slide di lezione', materia:'Filosofia antica',     col:ORO,   r:primo('fil-antica','materiali')},
      {tipo:'Slide di lezione', materia:'Storia contemporanea', col:VERDE, r:primo('sto-contemporanea','materiali')},
      {tipo:'Fonte',            materia:'Storia medievale',     col:VERDE, r:primo('sto-medievale','fonti')},
      {tipo:'Fonte',            materia:'Filosofia antica',     col:ORO,   r:primo('fil-antica','fonti')},
      {tipo:'Approfondimento',  materia:'Filosofia antica',     col:ORO,   r:primo('fil-antica','esercizi')},
      {tipo:'Approfondimento',  materia:'Storia medievale',     col:VERDE, r:primo('sto-medievale','esercizi')},
      {tipo:'Compito',          materia:'Filosofia antica',     col:TERRA, r:primo('fil-antica','compiti')},
      {tipo:'Risorsa',          materia:'Storia contemporanea', col:BLU,   r:primo('sto-contemporanea','interdisciplinare')}
    ].filter(c=>c.r);

    const num=(n,l,c)=>`<div class="peek-num" style="--a:${c}"><b>${n}</b><span>${l}</span></div>`;
    const card=(n,h,p,c)=>`<div class="peek-card" style="--a:${c}"><div class="peek-card-top">
        <span class="peek-card-n">${n}</span><span class="peek-card-h">${h}</span></div><p>${p}</p></div>`;
    /* icone disegnate, non emoji: le emoji cambiano forma da un
       sistema all'altro e su Windows sembrano adesivi */
    const ICONE={
      voto:'<path d="M5 20V10M12 20V4M19 20v-7"/><path d="M3 20h18"/>',
      attivita:'<path d="M12 4v16"/><path d="M4 8h16"/><circle cx="7" cy="14" r="3"/><circle cx="17" cy="14" r="3"/>',
      mappa:'<path d="M9 4 3 7v13l6-3 6 3 6-3V4l-6 3z"/><path d="M9 4v13M15 7v13"/>',
      consegne:'<path d="M4 13v6a1 1 0 001 1h14a1 1 0 001-1v-6"/><path d="M12 4v10M8 10l4 4 4-4"/>'
    };
    const tool=(k,t,d)=>`<div class="peek-tool">
        <span class="peek-tool-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${ICONE[k]}</svg></span>
        <div><b>${t}</b><span>${d}</span></div></div>`;
    const esc=s=>String(s||'').replace(/[<>&"]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]));

    body.innerHTML=`
      <div class="peek-nums">
        ${num(righe.length,'materiali','#2d5a27')}
        ${num(materie,'materie','#9a7c2e')}
        ${num(banca.capitoli,'capitoli con domande','#7a4b8c')}
        ${num(banca.domande,'domande pronte','#7a4b8c')}
      </div>

      <section class="peek-sec">
        <div class="peek-sec-title">Quello che ho raccolto</div>
        <p class="peek-sec-nota">L'archivio dei materiali, diviso per scaffale.
        I numeri sono sempre aggiornati.</p>
        <div class="peek-grid peek-grid-4">
          ${card(slide,'Slide di lezione','Un capitolo per volta, con la tavola delle date, il glossario e le domande per l\'orale.','#2d5a27')}
          ${card(fonti,'Fonti','Documenti veri da leggere in classe: editti, lettere, trattati, pagine di filosofi.','#2d5a27')}
          ${card(appro,'Approfondimenti','Una scheda di ripasso per ogni capitolo: tavola sinottica, glossario, domande.','#2d5a27')}
          ${card(compiti+risorse,'Compiti e risorse','Consegne assegnate agli studenti e collegamenti scelti: video, mappe, archivi.','#2d5a27')}
        </div>
      </section>

      <section class="peek-sec">
        <div class="peek-sec-title">Costruito per Idearca</div>
        <p class="peek-sec-nota">Materiale che non esiste altrove: preparato apposta per queste lezioni.</p>
        <div class="peek-grid">
          ${card(banca.domande,'Domande per le votazioni','Scritte una per una, con i distrattori costruiti sugli errori che gli studenti fanno davvero. Due banche: la stessa classe puo rifare un capitolo senza ritrovare le stesse domande.','#7a4b8c')}
          ${card('312','Eventi in linea del tempo','Storia e filosofia affiancate sullo stesso asse, dal 3500 a.C. a oggi.','#2f7a6a')}
        </div>
      </section>

      <section class="peek-sec">
        <div class="peek-sec-title">Che cosa si può fare in classe</div>
        <p class="peek-sec-nota">Oltre all'archivio, Idearca è quello che accende il
        proiettore: strumenti costruiti per l'ora di lezione.</p>
        <div class="peek-tools">
          ${tool('voto','Votazioni in classe','Gli studenti rispondono dal telefono con un QR, i risultati compaiono alla LIM. 120 capitoli già pronti.')}
          ${tool('attivita','Attività strutturate','Debate e jigsaw con tempi, regole e fonti: si aprono e si portano in classe così come sono.')}
          ${tool('mappa','Mappa storica','Un atlante interattivo per vedere come cambiano i confini, anno per anno.')}
          ${tool('consegne','Consegne','Gli studenti caricano il compito dal telefono; solo il docente legge, nessuno vede quello degli altri.')}
        </div>
      </section>

      ${campioni.length?`<section class="peek-sec">
        <div class="peek-sec-title">Guarda dentro: un esempio di ogni tipo</div>
        <p class="peek-sec-nota">Uno per ogni scaffale &mdash; slide, fonti, approfondimenti,
        compiti, risorse. Si aprono adesso, senza codice: e' il materiale che uso in classe.</p>
        <div class="peek-open">
          ${campioni.map(c=>`<a class="peek-open-card" style="--a:${c.col}"
              href="${esc(c.r.link)}" target="_blank" rel="noopener">
            <span class="peek-open-tipo">${c.tipo}</span>
            <span class="peek-open-tit">${esc(c.r.titolo)}</span>
            <span class="peek-open-mat">${c.materia}</span>
            <span class="peek-open-apri">Apri il documento <b>↗</b></span>
          </a>`).join('')}
        </div>
      </section>`:''}

      <section class="peek-sec">
        <div class="peek-sec-title">Provalo adesso</div>
        <p class="peek-sec-nota">Uno strumento vero, funzionante, senza registrarsi.</p>
        <div class="peek-open">
          <a class="peek-open-card" style="--a:#6b6459" href="https://geacron.com/map/atlas/mapal.html?lang=it" target="_blank" rel="noopener">
            <span class="peek-open-tipo">Strumento</span>
            <span class="peek-open-tit">Mappa storica</span>
            <span class="peek-open-mat">I confini del mondo che cambiano, anno per anno</span>
            <span class="peek-open-apri">Aprila <b>&#8599;</b></span></a>
          <a class="peek-open-card" style="--a:#3f6d8c" href="tempo/index.html" target="_blank" rel="noopener">
            <span class="peek-open-tipo">Strumento</span>
            <span class="peek-open-tit">Linea del tempo</span>
            <span class="peek-open-mat">312 eventi, storia e filosofia a confronto</span>
            <span class="peek-open-apri">Aprila <b>&#8599;</b></span></a>
          
        </div>
      </section>
    `;
    vetrinaFatta=true;
  }catch(e){
    body.innerHTML='<p style="text-align:center;color:var(--stone);font-size:.85rem;padding:2.5rem">Non è stato possibile caricare l\'anteprima. Riprova fra poco.</p>';
  }
}


/* ══════════════════════════════════════════════════════════
   LE STATISTICHE D'USO
   Il conto lo fa il database e restituisce un oggetto solo: qui
   si disegna e basta. Serve il token del docente — le regole non
   mostrano nulla a nessun altro.
   ══════════════════════════════════════════════════════════ */
const NOMI_STRUMENTO={map:'Mappa storica',metodo:'Metodologie',tempo:'Linea del tempo',
  lavagna:'Lavagna',inbox:'Inbox',voti:'Votazioni',consegna:'Consegna un compito',prove:'Prove',
  glossario:'Glossario ipertestuale',aula:'Timer e sorteggio',
  confronto:'Confrontatore di filosofi',contesto:'Macchina del contesto',
  grafici:'Grafici animati'};

function apriStatistiche(){
  document.getElementById('stat-overlay').classList.add('on');
  document.body.style.overflow='hidden';
  aggiornaStatistiche();
}
function chiudiStatistiche(){
  document.getElementById('stat-overlay').classList.remove('on');
  document.body.style.overflow='';
}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&document.getElementById('stat-overlay')?.classList.contains('on')) chiudiStatistiche();
});

async function aggiornaStatistiche(){
  const box=document.getElementById('stat-corpo');
  box.innerHTML='<div class="lib-spinner"></div>';
  try{
    const res=await fetch(SB_URL+'/rest/v1/rpc/statistiche_uso',{
      method:'POST', headers:wHead({'Content-Type':'application/json'}), body:'{}'});
    if(!res.ok) throw new Error(await res.text());
    const d=await res.json();
    if(!d){ box.innerHTML=avvisoStat(); return; }
    box.innerHTML=disegnaStatistiche(d);
  }catch(e){ box.innerHTML=avvisoStat(e.message); }
}

function avvisoStat(msg){
  return '<div class="lib-empty" style="text-align:left;line-height:1.75">'
    + '<strong>Non riesco a leggere le statistiche.</strong><br>'
    + 'Di solito significa una cosa sola: la migrazione <code>sql/05-statistiche.sql</code> '
    + 'non è ancora stata eseguita su Supabase, oppure la sessione da docente è scaduta.'
    + (msg?'<br><span style="font-size:.78rem;opacity:.7">'+escHtml(msg).slice(0,180)+'</span>':'')
    + '</div>';
}

function disegnaStatistiche(d){
  const n=x=>Number(x||0).toLocaleString('it-IT');
  const dataIt=s=>s? new Date(s).toLocaleDateString('it-IT',{day:'numeric',month:'long',year:'numeric'}) : '—';

  const num=(v,l,c)=>`<div class="peek-num" style="--a:${c}"><b>${n(v)}</b><span>${l}</span></div>`;

  /* la colonnina dei giorni: la più alta fa da riferimento */
  const giorni=d.per_giorno||[];
  const max=Math.max(1,...giorni.map(g=>g.quante));
  const barre=giorni.length
    ? `<div class="stat-giorni">${giorni.map(g=>{
        const h=Math.round(g.quante/max*100);
        const gg=new Date(g.giorno).toLocaleDateString('it-IT',{day:'numeric',month:'numeric'});
        return `<div class="stat-giorno" title="${gg}: ${g.quante}">
                  <i style="height:${Math.max(6,h)}%"></i><span>${gg}</span></div>`;}).join('')}</div>`
    : '<p class="peek-sec-nota">Ancora nessun accesso negli ultimi quattordici giorni.</p>';

  const classifica=(righe,etichetta,trasforma)=>{
    if(!righe||!righe.length) return '<p class="peek-sec-nota">Ancora niente.</p>';
    const massimo=Math.max(...righe.map(r=>r.quante));
    return '<div class="stat-lista">'+righe.map(r=>`
      <div class="stat-riga">
        <span class="stat-et">${escHtml(trasforma?trasforma(r):(r.dettaglio||r.codice))}</span>
        <span class="stat-barra"><i style="width:${Math.round(r.quante/massimo*100)}%"></i></span>
        <span class="stat-n">${n(r.quante)}</span>
      </div>`).join('')+'</div>';
  };

  return `
    <div class="peek-nums">
      ${num(d.accessi_totali,'accessi in tutto','#2d5a27')}
      ${num(d.accessi_7giorni,'ultimi 7 giorni','#7a4b8c')}
      ${num(d.accessi_oggi,'oggi','#9a7c2e')}
      ${num(d.persone,'codici diversi','#2f7a6a')}
    </div>

    <section class="peek-sec">
      <div class="peek-sec-title">Gli ultimi quattordici giorni</div>
      ${barre}
      <p class="peek-sec-nota" style="margin-top:.8rem">Si conta dal ${dataIt(d.primo_giorno)}.
        Le tue visite non compaiono: qui si contano solo gli accessi fatti con un codice,
        e il tuo è un accesso con password. Per provare, entra con un codice studente
        da una finestra in incognito.</p>
    </section>

    <section class="peek-sec">
      <div class="peek-sec-title">Chi entra di più</div>
      ${classifica(d.per_codice,'codice', r=> (r.nome? r.nome+' · ' : '')+r.codice)}
    </section>

    <section class="peek-sec">
      <div class="peek-sec-title">Le materie più aperte</div>
      ${classifica(d.per_materia,'materia', r=> (MATERIE[r.dettaglio]?.l)||r.dettaglio)}
    </section>

    <section class="peek-sec">
      <div class="peek-sec-title">Gli strumenti più usati</div>
      ${classifica(d.per_strumento,'strumento', r=> NOMI_STRUMENTO[r.dettaglio]||r.dettaglio)}
    </section>`;
}

async function azzeraStatistiche(){
  if(!confirm('Azzero tutte le statistiche? I conteggi ripartono da zero e non si possono recuperare.')) return;
  try{
    const res=await fetch(SB_URL+'/rest/v1/rpc/azzera_statistiche',{
      method:'POST', headers:wHead({'Content-Type':'application/json'}), body:'{}'});
    if(!res.ok) throw new Error(await res.text());
    const quante=await res.json();
    alert('Azzerate: '+quante+' righe cancellate.');
    aggiornaStatistiche();
  }catch(e){ alert('Non è stato possibile azzerare. '+e.message.slice(0,140)); }
}
