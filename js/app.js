const SB_URL='https://mqjceddrbhpwqjomhohm.supabase.co';
const SB_KEY='sb_publishable_D7vDsaervKNJNgdJwknDpQ_Vuuf9CeJ';

/* ── QUALE PAGINA È APERTA ──────────────────────────────────
   Serve a una cosa sola, ma visibile: il colore che il browser
   mostra quando si tira lo scroll oltre il bordo. Sull'home
   dev'essere il verde notte dell'hero, altrove la crema.
   ──────────────────────────────────────────────────────────── */
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
      sessionStorage.setItem('ix',JSON.stringify({code,nome:r.nome,ruolo:r.ruolo,materie:r.materie}));
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
  document.getElementById('lib-avatar').textContent=initials;
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
      const n=perMateria[el.dataset.count];
      if(n) el.textContent=n;
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
   il meandro dei Greci, l'arco a sesto acuto dei medievali, la
   rosa dei venti di chi attraversa gli oceani.
   Restano al 7% di opacità: si vedono senza farsi leggere.
   ──────────────────────────────────────────────────────────── */
const SIGILLI={
  'fil-antica':
    '<path d="M14 78h72M22 78V34M78 78V34M18 34h66l-8-8H26z"/><path d="M30 34v44M42 34v44M58 34v44M70 34v44"/><path d="M50 26V12M40 18h20"/>',
  'fil-medievale':
    '<path d="M50 12C34 30 28 46 28 62v24h44V62c0-16-6-32-22-50z"/><path d="M50 34c-8 10-11 20-11 28v24M50 34c8 10 11 20 11 28v24"/><path d="M28 86h44"/>',
  'fil-moderna':
    '<circle cx="50" cy="50" r="30"/><ellipse cx="50" cy="50" rx="30" ry="11"/><ellipse cx="50" cy="50" rx="11" ry="30"/><circle cx="50" cy="50" r="4"/><path d="M50 8v6M50 86v6M8 50h6M86 50h6"/>',
  'fil-contemporanea':
    '<path d="M12 62c8-20 16-20 24 0s16 20 24 0 16-20 24 0"/><path d="M12 38c8-20 16-20 24 0s16 20 24 0 16-20 24 0"/><circle cx="50" cy="50" r="5"/>',
  'sto-preistoria':
    '<path d="M50 14L18 34v44h64V34z"/><path d="M18 34h64"/><path d="M30 78V50h12v28M58 78V50h12v28"/><path d="M50 14v-6"/><path d="M12 86h76"/>',
  'sto-medievale':
    '<path d="M20 86V38h60v48z"/><path d="M20 38V24h10v8h10v-8h10v8h10v-8h10v14"/><path d="M42 86V62a8 8 0 0116 0v24"/><path d="M32 50h8M60 50h8"/>',
  'sto-moderna':
    '<circle cx="50" cy="50" r="32"/><path d="M50 18l7 25 25 7-25 7-7 25-7-25-25-7 25-7z"/><circle cx="50" cy="50" r="5"/>',
  'sto-contemporanea':
    '<circle cx="38" cy="58" r="16"/><circle cx="38" cy="58" r="5"/><path d="M38 42v-6M38 80v-6M22 58h-6M60 58h-6M27 47l-4-4M53 73l4 4M27 69l-4 4M53 43l4-4"/><path d="M62 34h24M62 44h24M62 54h16"/>',
  'civ-costituzione':
    '<path d="M20 34h60M50 20v14M26 34l-10 26h20zM74 34l-10 26h20z"/><path d="M16 60a10 10 0 0020 0M64 60a10 10 0 0020 0"/><path d="M50 34v46M34 86h32"/>',
  'civ-istituzioni':
    '<path d="M50 14L16 32h68z"/><path d="M22 32v42M38 32v42M62 32v42M78 32v42"/><path d="M14 74h72M10 86h80"/>'
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
     Lavagna, metodologie e inbox erano visibili anche agli studenti,
     che poi ci sbattevano contro un «non sei entrato come docente». */
  return [
    {g:'Didattica',k:'__metodo__',  l:'Metodologie didattiche', p:'Debate, jigsaw, attività', chi:'docente'},
    {g:'Didattica',k:'__consegna__',l:'Consegna un compito',    p:'Per gli studenti',         chi:'tutti'},
    {g:'Didattica',k:'__inbox__',   l:'Inbox',                  p:'Consegne degli studenti',  chi:'docente'},
    {g:'Didattica',k:'__voti__',    l:'Votazioni',              p:'120 capitoli pronti',      chi:'tutti'},
    {g:'Strumenti',k:'__tempo__',   l:'Linea del tempo',        p:'Storia e filosofia a confronto', chi:'tutti'},
    {g:'Strumenti',k:'__lavagna__', l:'Lavagna',                p:'Da proiettare in aula',    chi:'docente'},
    {g:'Strumenti',k:'__map__',     l:'Mappa storica',          p:'Atlante interattivo',      chi:'tutti'},
    {g:'Prove',    k:'__prove__',   l:'Banco di lavoro',        p:'Strumenti in costruzione', chi:'docente'}
  ];
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
      html+=`<button class="lib-item${attiva?' active':''}" data-key="${k}" onclick="navClick(this,'${k}')">
        <span class="lib-dot"></span>
        <span class="lib-item-txt"><b>${info.l}</b><small>${info.p||''}</small></span>
        <span class="lib-count" data-count="${k}"></span>
      </button>`;
    });
    html+='</div></div>';
  });
  document.getElementById('lib-nav').innerHTML=html;
  /* un gruppo senza voci (Didattica per uno studente, se tutto
     e' riservato) sparisce invece di restare come titolo vuoto */
  document.querySelectorAll('.lib-group').forEach(g=>{
    if(!g.querySelector('.lib-item')) g.remove();
  });
}
function buildMobSelect(keys){
  const sel=document.getElementById('mob-select');
  sel.innerHTML='<option value="">— Scegli una materia —</option>';
  keys.forEach((k,i)=>{
    const opt=document.createElement('option');
    opt.value=k;opt.textContent=MATERIE[k].l;
    if(i===0) opt.selected=true;
    sel.appendChild(opt);
  });
  const metOpt=document.createElement('option');
  metOpt.value='__metodo__';metOpt.textContent='🎓 Metodologie didattiche';
  sel.appendChild(metOpt);
  const votOpt=document.createElement('option');
  votOpt.value='__voti__';votOpt.textContent='📊 Votazioni';
  sel.appendChild(votOpt);
  const inbOpt=document.createElement('option');
  inbOpt.value='__inbox__';inbOpt.textContent='📥 Inbox';
  sel.appendChild(inbOpt);
  const lavOpt=document.createElement('option');
  lavOpt.value='__lavagna__';lavOpt.textContent='🖊 Lavagna';
  sel.appendChild(lavOpt);
  const mapOpt=document.createElement('option');
  mapOpt.value='__map__';mapOpt.textContent='🗺️ Mappa Storica';
  sel.appendChild(mapOpt);
}
function mobChange(key){
  if(!key) return;
  document.querySelectorAll('.lib-item').forEach(n=>{n.classList.toggle('active',n.dataset.key===key);});
  if(key==='__map__'){showMapView();return;}
  if(key==='__metodo__'){showMetodoView();return;}
  if(key==='__tempo__'){showTempoView();return;}
  if(key==='__prove__'){showProveView();return;}
  if(key==='__consegna__'){showConsegnaView();return;}
  if(key==='__lavagna__'){showLavagnaView();return;}
  if(key==='__inbox__'){showInboxView();return;}
  if(key==='__voti__'){showVotiView();return;}
  hideMapView();
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
  if(key==='__map__'){showMapView();return;}
  if(key==='__metodo__'){showMetodoView();return;}
  if(key==='__tempo__'){showTempoView();return;}
  if(key==='__prove__'){showProveView();return;}
  if(key==='__consegna__'){showConsegnaView();return;}
  if(key==='__lavagna__'){showLavagnaView();return;}
  if(key==='__inbox__'){showInboxView();return;}
  if(key==='__voti__'){showVotiView();return;}
  hideMapView();
  renderSubject(key);
}
function showMapView(){
  document.getElementById('lib-head').style.display='none';
  document.getElementById('lib-modules').style.display='none';
  document.getElementById('lib-metodo-view').style.display='none';
  document.getElementById('lib-lavagna-view').style.display='none';
  document.getElementById('lib-map-view').style.display='block';
  document.getElementById('lib-inbox-view').style.display='none';
  document.getElementById('lib-voti-view').style.display='none';
  document.getElementById('lib-tempo-view').style.display='none';
  document.getElementById('lib-consegna-view').style.display='none';
  document.getElementById('lib-prove-view').style.display='none';
}
function showMetodoView(){
  document.getElementById('lib-head').style.display='none';
  document.getElementById('lib-modules').style.display='none';
  document.getElementById('lib-map-view').style.display='none';
  document.getElementById('lib-lavagna-view').style.display='none';
  document.getElementById('lib-metodo-view').style.display='block';
  document.getElementById('lib-inbox-view').style.display='none';
  document.getElementById('lib-voti-view').style.display='none';
  document.getElementById('lib-tempo-view').style.display='none';
  document.getElementById('lib-consegna-view').style.display='none';
  document.getElementById('lib-prove-view').style.display='none';
}
/* La lavagna si carica solo la prima volta che la si apre: cosi'
   non tiene aperta una sessione di scrittura per chi non la usa,
   e una volta caricata conserva quello che c'e' scritto sopra
   anche se si passa ad altre sezioni e si torna indietro. */
/* La linea del tempo e' una pagina statica: si carica una volta
   sola, la prima che la si apre. */
/* La pagina di consegna: si ricarica ogni volta, perche' quali
   finestre siano aperte cambia di ora in ora. */
function showConsegnaView(){
  document.getElementById('lib-head').style.display='none';
  document.getElementById('lib-modules').style.display='none';
  document.getElementById('lib-map-view').style.display='none';
  document.getElementById('lib-metodo-view').style.display='none';
  document.getElementById('lib-tempo-view').style.display='none';
  document.getElementById('lib-lavagna-view').style.display='none';
  document.getElementById('lib-inbox-view').style.display='none';
  document.getElementById('lib-voti-view').style.display='none';
  const f=document.getElementById('lib-consegna-frame');
  f.src='consegna/index.html?'+Date.now();
  document.getElementById('lib-consegna-view').style.display='block';
  document.getElementById('lib-prove-view').style.display='none';
}
/* Il banco di lavoro: gli strumenti mentre li costruiamo.
   Lo vede solo chi insegna. */
function showProveView(){
  document.getElementById('lib-head').style.display='none';
  document.getElementById('lib-modules').style.display='none';
  document.getElementById('lib-map-view').style.display='none';
  document.getElementById('lib-metodo-view').style.display='none';
  document.getElementById('lib-tempo-view').style.display='none';
  document.getElementById('lib-lavagna-view').style.display='none';
  document.getElementById('lib-inbox-view').style.display='none';
  document.getElementById('lib-voti-view').style.display='none';
  document.getElementById('lib-consegna-view').style.display='none';
  const f=document.getElementById('lib-prove-frame');
  if(!f.getAttribute('src')) f.src='prove/index.html';
  document.getElementById('lib-prove-view').style.display='block';
}
function showTempoView(){
  document.getElementById('lib-head').style.display='none';
  document.getElementById('lib-modules').style.display='none';
  document.getElementById('lib-map-view').style.display='none';
  document.getElementById('lib-metodo-view').style.display='none';
  document.getElementById('lib-lavagna-view').style.display='none';
  document.getElementById('lib-inbox-view').style.display='none';
  document.getElementById('lib-voti-view').style.display='none';
  const f=document.getElementById('lib-tempo-frame');
  if(!f.getAttribute('src')) f.src='tempo/index.html';
  document.getElementById('lib-tempo-view').style.display='block';
  document.getElementById('lib-consegna-view').style.display='none';
  document.getElementById('lib-prove-view').style.display='none';
}
function showVotiView(){
  document.getElementById('lib-head').style.display='none';
  document.getElementById('lib-modules').style.display='none';
  document.getElementById('lib-map-view').style.display='none';
  document.getElementById('lib-metodo-view').style.display='none';
  document.getElementById('lib-lavagna-view').style.display='none';
  document.getElementById('lib-inbox-view').style.display='none';
  const f=document.getElementById('lib-voti-frame');
  f.src='votazioni/index.html?'+Date.now();
  document.getElementById('lib-voti-view').style.display='block';
  document.getElementById('lib-tempo-view').style.display='none';
  document.getElementById('lib-consegna-view').style.display='none';
  document.getElementById('lib-prove-view').style.display='none';
}
function showInboxView(){
  document.getElementById('lib-head').style.display='none';
  document.getElementById('lib-modules').style.display='none';
  document.getElementById('lib-map-view').style.display='none';
  document.getElementById('lib-metodo-view').style.display='none';
  document.getElementById('lib-lavagna-view').style.display='none';
  const f=document.getElementById('lib-inbox-frame');
  /* si ricarica a ogni apertura, cosi' mostra sempre l'archivio aggiornato */
  f.src='inbox/index.html?'+Date.now();
  document.getElementById('lib-inbox-view').style.display='block';
  document.getElementById('lib-voti-view').style.display='none';
  document.getElementById('lib-tempo-view').style.display='none';
  document.getElementById('lib-consegna-view').style.display='none';
  document.getElementById('lib-prove-view').style.display='none';
}
function showLavagnaView(){
  document.getElementById('lib-head').style.display='none';
  document.getElementById('lib-modules').style.display='none';
  document.getElementById('lib-map-view').style.display='none';
  document.getElementById('lib-metodo-view').style.display='none';
  const f=document.getElementById('lib-lavagna-frame');
  if(!f.src) f.src='lavagna/index.html';
  document.getElementById('lib-lavagna-view').style.display='block';
  document.getElementById('lib-inbox-view').style.display='none';
  document.getElementById('lib-voti-view').style.display='none';
  document.getElementById('lib-tempo-view').style.display='none';
  document.getElementById('lib-consegna-view').style.display='none';
  document.getElementById('lib-prove-view').style.display='none';
}
/* Nasconde tutte le viste a pieno schermo e riporta a galla la
   libreria: la chiamano sia navClick sia mobChange. */
function hideMapView(){
  document.getElementById('lib-head').style.display='';
  document.getElementById('lib-modules').style.display='';
  document.getElementById('lib-map-view').style.display='none';
  document.getElementById('lib-metodo-view').style.display='none';
  document.getElementById('lib-lavagna-view').style.display='none';
  document.getElementById('lib-inbox-view').style.display='none';
  document.getElementById('lib-voti-view').style.display='none';
  document.getElementById('lib-tempo-view').style.display='none';
  document.getElementById('lib-consegna-view').style.display='none';
  document.getElementById('lib-prove-view').style.display='none';
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
    const materie=new Set(righe.map(r=>r.materia)).size;

    const slide=conta('materiali'), fonti=conta('fonti'),
          appro=conta('esercizi'), risorse=conta('interdisciplinare'),
          compiti=righe.filter(r=>r.tab==='compiti'||r.tab==='compito').length;

    /* qualche documento vero, aperto a tutti: il primo di ogni scaffale.
       Scelta stabile — chi torna ritrova gli stessi. */
    const primo=(materia,tab)=>righe
      .filter(r=>r.materia===materia&&r.tab===tab&&r.link&&r.link!=='#')
      .sort((a,b)=>(a.posizione||0)-(b.posizione||0))[0];
    const ORO='#9a7c2e', VERDE='#2d5a27';
    const campioni=[
      {tipo:'Slide di lezione', materia:'Filosofia antica',    col:ORO,   r:primo('fil-antica','materiali')},
      {tipo:'Slide di lezione', materia:'Storia contemporanea',col:VERDE, r:primo('sto-contemporanea','materiali')},
      {tipo:'Fonte',            materia:'Storia medievale',    col:VERDE, r:primo('sto-medievale','fonti')},
      {tipo:'Approfondimento',  materia:'Filosofia antica',    col:ORO,   r:primo('fil-antica','esercizi')}
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
        ${num('120','capitoli con domande','#a1542f')}
        ${num('1080','domande pronte','#3f6d8c')}
      </div>

      <section class="peek-sec">
        <div class="peek-sec-title">Di che cosa è fatta</div>
        <div class="peek-grid">
          ${card(slide,'Slide di lezione','Un capitolo per volta, con la tavola delle date, il glossario e le domande per l\'orale.','#2d5a27')}
          ${card(fonti,'Fonti','Documenti veri da leggere in classe: editti, lettere, trattati, pagine di filosofi.','#9a7c2e')}
          ${card(appro,'Approfondimenti','Una scheda di ripasso per ogni capitolo: tavola sinottica, glossario, domande.','#a1542f')}
          ${card(compiti+risorse,'Compiti e risorse','Consegne assegnate agli studenti e collegamenti scelti: video, mappe, archivi.','#3f6d8c')}
        </div>
      </section>

      <section class="peek-sec">
        <div class="peek-sec-title">Gli strumenti per l'aula</div>
        <div class="peek-tools">
          ${tool('voto','Votazioni in classe','Gli studenti rispondono dal telefono con un QR, i risultati compaiono alla LIM. 120 capitoli già pronti.')}
          ${tool('attivita','Attività strutturate','Debate e jigsaw con tempi, regole e fonti: si aprono e si portano in classe così come sono.')}
          ${tool('mappa','Mappa storica','Un atlante interattivo per vedere come cambiano i confini, anno per anno.')}
          ${tool('consegne','Consegne','Gli studenti caricano il compito dal telefono; solo il docente legge, nessuno vede quello degli altri.')}
        </div>
      </section>

      ${campioni.length?`<section class="peek-sec">
        <div class="peek-sec-title">Guarda dentro un documento</div>
        <p class="peek-sec-nota">Questi quattro sono aperti a tutti: si aprono adesso, senza codice.
        Sono materiale di lezione vero, non esempi preparati per la vetrina.</p>
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
    `;
    vetrinaFatta=true;
  }catch(e){
    body.innerHTML='<p style="text-align:center;color:var(--stone);font-size:.85rem;padding:2.5rem">Non è stato possibile caricare l\'anteprima. Riprova fra poco.</p>';
  }
}
