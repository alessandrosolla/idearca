const SB_URL='https://mqjceddrbhpwqjomhohm.supabase.co';
const SB_KEY='sb_publishable_D7vDsaervKNJNgdJwknDpQ_Vuuf9CeJ';
const ADMIN='PALETTA123!';
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
  document.getElementById('page-library').style.display='none';
  document.getElementById('page-tracks').style.display='block';
  document.documentElement.setAttribute('data-mode','intl');
  window.scrollTo(0,0);
}
function exitIntlToLibrary(){
  document.getElementById('page-tracks').style.display='none';
  document.getElementById('page-ib').style.display='none';
  document.getElementById('page-library').style.display='block';
  document.documentElement.removeAttribute('data-mode');
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
  let html=`<a class="lib-add-link" style="margin-bottom:1.3rem;display:inline-flex" onclick="openIBUpload('${ibArea}','${area.noOptions?'':ibOption}')">+ Aggiungi contenuto</a>`;
  if(area.isIA) html+=`<div class="lib-empty" style="border-style:solid;margin-bottom:1.2rem">${area.desc}</div>`;
  if(!ibCasesCache.length){
    html+=`<div class="lib-empty">Nessun contenuto ancora per «${label}».</div>`;
  }else{
    html+='<div class="mod-list">'+ibCasesCache.map((r,i)=>{
      const b=IB_BADGE[r.tipo]||{c:'t-pdf',l:'Extra'};
      const hasTimeline=r.anno_inizio&&r.anno_fine;
      const href=r.link&&r.link!=='#'?r.link:'javascript:void(0)';
      const titEsc=(r.titolo||'').replace(/'/g,"\\'");
      return `<a class="mod-item" href="${href}" target="_blank" rel="noopener" onclick="event.preventDefault();openViewer('${(r.link||'').replace(/'/g,"\\'")}','${titEsc}')" style="flex-direction:column;align-items:stretch;gap:.6rem;animation-delay:${i*.06}s">
        <div style="display:flex;align-items:center;gap:1.6rem">
          <div class="mod-num">${String(i+1).padStart(2,'0')}</div>
          <div class="mod-body">
            <div class="lib-breadcrumb" style="margin-bottom:.2rem">${breadcrumb}</div>
            <div class="mod-title">${r.titolo}</div>
            <div class="mod-desc">${r.descrizione||''}</div>
          </div>
          <span class="mod-type ${b.c}">${b.l}</span>
          <div class="mod-acts" onclick="event.preventDefault();event.stopPropagation()">
            <button class="m-btn" onclick="editIBMod(${r.id})">✏️</button>
            <button class="m-btn del" onclick="delIBMod(${r.id})">🗑</button>
          </div>
        </div>
        ${hasTimeline?`<div class="ib-timeline" style="padding-left:4.2rem"><span class="ib-timeline-year start">${r.anno_inizio}</span><div class="ib-timeline-bar"><span class="ib-timeline-dot start"></span><span class="ib-timeline-dot end"></span></div><span class="ib-timeline-year end">${r.anno_fine}</span></div>`:''}
      </a>`;
    }).join('')+'</div>';
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
  document.getElementById('ib-up-tipo').value='materiale';
  document.getElementById('ib-up-tit').value='';
  document.getElementById('ib-up-desc').value='';
  document.getElementById('ib-up-link').value='';
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
  document.getElementById('ib-up-tipo').value=r.tipo||'materiale';
  document.getElementById('ib-up-tit').value=r.titolo;
  document.getElementById('ib-up-desc').value=r.descrizione||'';
  document.getElementById('ib-up-link').value=r.link||'';
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
  const tipo=document.getElementById('ib-up-tipo').value;
  const tit=document.getElementById('ib-up-tit').value.trim();
  const desc=document.getElementById('ib-up-desc').value.trim();
  const link=document.getElementById('ib-up-link').value.trim();
  const startV=document.getElementById('ib-up-start').value;
  const endV=document.getElementById('ib-up-end').value;
  const anno_inizio=startV?parseInt(startV):null;
  const anno_fine=endV?parseInt(endV):null;
  const fb=document.getElementById('ib-up-fb');
  if(!tit){fb.textContent='Inserisci il titolo.';fb.style.color='#c0392b';return;}
  if(!link){fb.textContent='Inserisci il link.';fb.style.color='#c0392b';return;}
  fb.textContent='Salvataggio...';fb.style.color='var(--stone)';
  document.getElementById('ib-up-btn').disabled=true;
  const payload={materia,titolo:tit,descrizione:desc,tipo,link,programma:'ib',anno_inizio,anno_fine};
  try{
    let res;
    if(id){
      res=await fetch(`${SB_URL}/rest/v1/materiali?id=eq.${id}`,{method:'PATCH',headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Content-Type':'application/json','Prefer':'return=minimal'},body:JSON.stringify(payload)});
    }else{
      const pr=await fetch(`${SB_URL}/rest/v1/materiali?materia=eq.${encodeURIComponent(materia)}&select=posizione&order=posizione.desc&limit=1`,{headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY}});
      const prr=await pr.json();const pos=(prr&&prr.length>0?(prr[0].posizione||0):0)+1;
      res=await fetch(`${SB_URL}/rest/v1/materiali`,{method:'POST',headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Content-Type':'application/json','Prefer':'return=minimal'},body:JSON.stringify({...payload,posizione:pos})});
    }
    if(res.ok||res.status===201||res.status===204){fb.textContent='✓ Salvato!';fb.style.color='var(--forest)';setTimeout(()=>{closeIBUpload();renderIBCases();},900);}
    else throw new Error(res.status);
  }catch(e){fb.textContent='Errore: '+e.message;fb.style.color='#c0392b';}
  document.getElementById('ib-up-btn').disabled=false;
}
async function delIBMod(id){
  if(!confirm('Eliminare questo contenuto?'))return;
  try{const r=await fetch(`${SB_URL}/rest/v1/materiali?id=eq.${id}`,{method:'DELETE',headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Prefer':'return=minimal'}});if(r.ok||r.status===204)renderIBCases();}catch(e){alert('Errore di connessione.');}
}

const go=id=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
function initReveal(){const obs=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');obs.unobserve(x.target)}}),{threshold:.1});document.querySelectorAll('.rev,.rev-l,.rev-r').forEach(el=>obs.observe(el));}
function initParticles(){const c=document.getElementById('particles');if(!c)return;for(let i=0;i<20;i++){const p=document.createElement('div');p.className='particle';const s=Math.random()*5+2;p.style.cssText=`width:${s}px;height:${s}px;left:${Math.random()*100}%;animation-duration:${Math.random()*18+14}s;animation-delay:${Math.random()*16}s`;c.appendChild(p);}}
window.addEventListener('scroll',()=>document.getElementById('main-nav')?.classList.toggle('scrolled',window.scrollY>50));
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
  const code=input.value.trim().toUpperCase().replace(/\s+/g,'');
  if(!code){msg.textContent='Inserisci il codice.';msg.className='msg err';input.classList.add('err');return;}
  btn.disabled=true;btn.textContent='Verifica in corso...';
  if(code===ADMIN.toUpperCase()){
    sessionStorage.setItem('ix',JSON.stringify({code,nome:'Alessandro Solla',ruolo:'docente',materie:'all'}));
    input.classList.add('ok');msg.textContent='Accesso docente confermato.';msg.className='msg ok';
    setTimeout(()=>{document.getElementById('form-state').style.display='none';document.getElementById('welcome-name').textContent='Alessandro Solla';document.getElementById('success-state').classList.add('on');},600);
    btn.disabled=false;btn.textContent='Entra nella piattaforma';return;
  }
  try{
    const res=await fetch(`${SB_URL}/rest/v1/codici?codice=eq.${encodeURIComponent(code)}&select=*`,{headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY}});
    const rows=await res.json();
    if(!rows||!rows.length) throw {m:'Codice non riconosciuto. Contatta il docente.'};
    const r=rows[0];
    if(r.attivo===false) throw {m:'Codice disabilitato. Contatta il docente.'};
    if(r.scadenza&&new Date(r.scadenza)<new Date()) throw {m:'Codice scaduto. Contatta il docente.'};
    sessionStorage.setItem('ix',JSON.stringify({code,nome:r.nome,ruolo:r.ruolo,materie:r.materie}));
    input.classList.add('ok');msg.textContent='Accesso confermato: '+r.nome;msg.className='msg ok';
    setTimeout(()=>{document.getElementById('form-state').style.display='none';document.getElementById('welcome-name').textContent=r.nome;document.getElementById('success-state').classList.add('on');},600);
  }catch(e){input.classList.add('err');msg.textContent=e.m||'Errore di connessione.';msg.className='msg err';input.value='';setTimeout(()=>input.focus(),100);}
  btn.disabled=false;btn.textContent='Entra nella piattaforma';
}
function showLibrary(){
  document.getElementById('page-home').style.display='none';
  document.getElementById('page-library').style.display='block';
  window.scrollTo(0,0);
  const s=JSON.parse(sessionStorage.getItem('ix')||'{}');
  const initials=(s.nome||'U').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  document.getElementById('lib-avatar').textContent=initials;
  document.getElementById('lib-uname').textContent=s.nome||'Utente';
  if(s.ruolo==='docente') document.getElementById('admin-bar').style.display='flex';
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
  }catch(e){
    if(elDesk)elDesk.textContent='';
    if(elMob)elMob.textContent='';
  }
}
function buildNav(keys){
  const groups={};
  keys.forEach(k=>{const g=MATERIE[k].g;if(!groups[g])groups[g]=[];groups[g].push(k);});
  let html='';let first=true;
  Object.entries(groups).forEach(([g,ks])=>{
    html+=`<div class="lib-group"><div class="lib-group-title">${g}</div>`;
    ks.forEach(k=>{html+=`<div class="lib-item${first?' active':''}" data-key="${k}" onclick="navClick(this,'${k}')"><span class="lib-dot"></span>${MATERIE[k].l}</div>`;first=false;});
    html+='</div>';
  });
  html+=`<div class="lib-group"><div class="lib-group-title">Strumenti</div><div class="lib-item" data-key="__map__" onclick="navClick(this,'__map__')"><span class="lib-dot"></span>Mappa Storica</div></div>`;
  document.getElementById('lib-nav').innerHTML=html;
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
  const mapOpt=document.createElement('option');
  mapOpt.value='__map__';mapOpt.textContent='🗺️ Mappa Storica';
  sel.appendChild(mapOpt);
}
function mobChange(key){
  if(!key) return;
  document.querySelectorAll('.lib-item').forEach(n=>{n.classList.toggle('active',n.dataset.key===key);});
  if(key==='__map__'){showMapView();return;}
  hideMapView();
  renderSubject(key);
}
function navClick(el,key){
  document.querySelectorAll('.lib-item').forEach(n=>n.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('mob-select').value=key;
  if(key==='__map__'){showMapView();return;}
  hideMapView();
  renderSubject(key);
}
function showMapView(){
  document.getElementById('lib-head').style.display='none';
  document.getElementById('lib-modules').style.display='none';
  document.getElementById('lib-map-view').style.display='block';
}
function hideMapView(){
  document.getElementById('lib-head').style.display='';
  document.getElementById('lib-modules').style.display='';
  document.getElementById('lib-map-view').style.display='none';
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
    const TAB_LABEL={materiali:'Slide',fonti:'Fonte',esercizi:'Slide Approfondita',interdisciplinare:'Risorsa',compiti:'Compito'};
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
  document.getElementById('lib-head').innerHTML=`
    <div class="lib-breadcrumb">${m.g} · ${m.p}</div>
    <h2 class="lib-content-title">${m.l}</h2>
    <div class="lib-tabs-wrap">
    <div class="lib-tabs">
      <button class="lib-tab${ct==='materiali'?' active':''}" data-tab="materiali" onclick="switchTab('materiali')">Slide</button>
      <button class="lib-tab${ct==='fonti'?' active':''}" data-tab="fonti" onclick="switchTab('fonti')">Fonti</button>
      <button class="lib-tab${ct==='esercizi'?' active':''}" data-tab="esercizi" onclick="switchTab('esercizi')">Slide Approfondite</button>
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
    if(ct==='interdisciplinare'){
      const g=MATERIE[key]?.g;
      if(g==='Filosofia') fetchKey='fil-contemporanea';
      else if(g==='Storia') fetchKey='sto-medievale';
      materiaFilter=`materia=eq.${fetchKey}`;
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
          <button class="m-btn" onclick="editMod(${r.id},'${key}','${r.titolo.replace(/'/g,"\'")}','${(r.descrizione||'').replace(/'/g,"\'")}','${r.tipo}','${r.link}')">✏️</button>
          <button class="m-btn del" onclick="delMod(${r.id},'${key}')">🗑</button>
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
  sessionStorage.removeItem('ix');
  document.getElementById('page-library').style.display='none';
  document.getElementById('page-home').style.display='block';
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
    if(id){res=await fetch(`${SB_URL}/rest/v1/materiali?id=eq.${id}`,{method:'PATCH',headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Content-Type':'application/json','Prefer':'return=minimal'},body:JSON.stringify({materia:mat,titolo:tit,descrizione:desc,tipo,link,tab:tabVal})});}
    else{
      const pr=await fetch(`${SB_URL}/rest/v1/materiali?materia=eq.${mat}&select=posizione&order=posizione.desc&limit=1`,{headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY}});
      const prr=await pr.json();const pos=(prr&&prr.length>0?(prr[0].posizione||0):0)+1;
      res=await fetch(`${SB_URL}/rest/v1/materiali`,{method:'POST',headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Content-Type':'application/json','Prefer':'return=minimal'},body:JSON.stringify({materia:mat,titolo:tit,descrizione:desc,tipo,link,posizione:pos,tab:tabVal})});
    }
    if(res.ok||res.status===201||res.status===204){fb.textContent='✓ Salvato!';fb.style.color='var(--forest)';setTimeout(()=>{closeUpload();renderSubject(mat);},900);}
    else throw new Error(res.status);
  }catch(e){fb.textContent='Errore: '+e.message;fb.style.color='#c0392b';}
  document.getElementById('up-btn').disabled=false;
}
async function delMod(id,key){
  if(!confirm('Eliminare questo materiale?')) return;
  try{const r=await fetch(`${SB_URL}/rest/v1/materiali?id=eq.${id}`,{method:'DELETE',headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Prefer':'return=minimal'}});if(r.ok||r.status===204)renderSubject(key);}catch(e){alert('Errore di connessione.');}
}
function showCodesGuide(){document.getElementById('codes-overlay').classList.add('on');loadCodes();}
function closeCodesModal(){document.getElementById('codes-overlay').classList.remove('on');}
async function loadCodes(){
  const body=document.getElementById('codes-body');
  body.innerHTML='<div class="lib-spinner"></div>';
  try{
    const res=await fetch(SB_URL+'/rest/v1/codici?select=*&order=creato_il.desc',{headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY}});
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
    await fetch(SB_URL+'/rest/v1/codici?id=eq.'+id,{method:'PATCH',headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Content-Type':'application/json','Prefer':'return=minimal'},body:JSON.stringify({attivo:!isActive})});
    loadCodes();
  }catch(e){alert('Errore.');}
}
async function deleteCode(id){
  if(!confirm('Eliminare questo codice?')) return;
  try{
    await fetch(SB_URL+'/rest/v1/codici?id=eq.'+id,{method:'DELETE',headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Prefer':'return=minimal'}});
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
    const res=await fetch(SB_URL+'/rest/v1/codici',{method:'POST',headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Content-Type':'application/json','Prefer':'return=minimal'},body:JSON.stringify({codice,nome,ruolo,materie,attivo:true})});
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
let peekTab='slide';
function openPeekModal(){
  document.getElementById('peek-overlay').classList.add('on');
  peekTab='slide';
  loadPeekContent('slide');
}
function closePeekModal(){document.getElementById('peek-overlay').classList.remove('on');}
function switchPeekTab(tab){
  peekTab=tab;
  document.querySelectorAll('.peek-tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===tab));
  loadPeekContent(tab);
}
async function loadPeekContent(tab){
  if(!tab) tab=peekTab||'slide';
  const body=document.getElementById('peek-body');
  body.innerHTML='<div class="lib-spinner"></div>';
  try{
    const res=await fetch(SB_URL+'/rest/v1/materiali?attivo=eq.true&order=materia.asc,posizione.asc&select=titolo,materia,tipo,tab,link',{headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY}});
    const rows=await res.json();
    if(!rows||!rows.length){body.innerHTML='<p style="text-align:center;color:var(--stone);font-size:.85rem;padding:2rem">Nessun contenuto ancora disponibile.</p>';return;}

    // ── Risorse condivise per gruppo ──
    const SHARED_RISORSE={
      'Filosofia': rows.filter(r=>r.materia==='fil-contemporanea'&&(r.tab==='interdisciplinare'||r.tipo==='interdisciplinare'||r.tipo==='link')),
      'Storia': rows.filter(r=>r.materia==='sto-medievale'&&(r.tab==='interdisciplinare'||r.tipo==='interdisciplinare'||r.tipo==='link')),
    };

    const compiti=rows.filter(r=>r.tab==='compiti'||r.tipo==='compito'||r.tipo==='homework');
    const fonti=rows.filter(r=>r.tab==='fonti'||r.tipo==='fonte'||r.tipo==='source');
    const risorse=rows.filter(r=>r.tab==='interdisciplinare'||r.tipo==='interdisciplinare'||r.tipo==='link');
    const approfondite=rows.filter(r=>r.tab==='esercizi'||r.tipo==='esercizio');
    const materiali=rows.filter(r=>r.tab==='materiali'||['pdf','quiz','video','materiale'].includes(r.tipo));

    const mkItem=(item,i)=>{
      const isFeat=i===0;
      const isOpen=isFeat&&item.link&&item.link!=='#';
      return `<div class="peek-item${isFeat?' featured':''}">
        <div class="peek-item-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="${isFeat?'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z':'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'}"></path></svg></div>
        <div class="peek-item-title">${item.titolo}</div>
        ${isOpen?`<a href="${item.link}" target="_blank" rel="noopener" class="peek-item-badge" onclick="event.stopPropagation()">Apri ↗</a>`:'<span class="peek-locked">🔒 riservato</span>'}
      </div>`;
    };

    let html='';

    if(tab==='slide'){
      const groups={};
      materiali.forEach(r=>{if(!groups[r.materia])groups[r.materia]=[];groups[r.materia].push(r);});
      Object.entries(groups).forEach(([mat,items])=>{
        const m=MATERIE[mat];if(!m)return;
        html+=`<div class="peek-subject"><div class="peek-subject-title">${m.l} <span>${m.g}</span></div>`;
        items.slice(0,3).forEach((item,i)=>{html+=mkItem(item,i);});
        if(items.length>3)html+=`<div class="peek-more">+ altri ${items.length-3} contenuti...</div>`;
        html+='</div>';
      });
      if(!html)html='<p style="text-align:center;color:var(--stone);font-size:.85rem;padding:2rem">Nessuna slide disponibile.</p>';
    } else if(tab==='fonti'){
      if(fonti.length){
        const fgroups={};
        fonti.forEach(r=>{if(!fgroups[r.materia])fgroups[r.materia]=[];fgroups[r.materia].push(r);});
        Object.entries(fgroups).forEach(([mat,items])=>{
          const m=MATERIE[mat];if(!m)return;
          html+=`<div class="peek-subject"><div class="peek-subject-title">${m.l} <span>${m.g}</span></div>`;
          items.slice(0,3).forEach((item,i)=>{html+=mkItem(item,i);});
          if(items.length>3)html+=`<div class="peek-more">+ altre ${items.length-3} fonti...</div>`;
          html+='</div>';
        });
      } else html='<p style="text-align:center;color:var(--stone);font-size:.85rem;padding:2rem">Nessuna fonte disponibile.</p>';
    } else if(tab==='approfondite'){
      if(approfondite.length){
        const agroups={};
        approfondite.forEach(r=>{if(!agroups[r.materia])agroups[r.materia]=[];agroups[r.materia].push(r);});
        Object.entries(agroups).forEach(([mat,items])=>{
          const m=MATERIE[mat];if(!m)return;
          html+=`<div class="peek-subject"><div class="peek-subject-title">${m.l} <span>${m.g}</span></div>`;
          items.slice(0,3).forEach((item,i)=>{html+=mkItem(item,i);});
          if(items.length>3)html+=`<div class="peek-more">+ altre ${items.length-3} slide...</div>`;
          html+='</div>';
        });
      } else html='<p style="text-align:center;color:var(--stone);font-size:.85rem;padding:2rem">Nessuna slide approfondita disponibile.</p>';
    } else if(tab==='risorse'){
      // Mostra risorse per gruppo condiviso
      ['Filosofia','Storia'].forEach(gruppo=>{
        const items=SHARED_RISORSE[gruppo]||[];
        if(items.length){
          html+=`<div class="peek-subject"><div class="peek-subject-title">Risorse ${gruppo} <span>${gruppo}</span></div>`;
          items.forEach((item,i)=>{html+=mkItem(item,i);});
          html+='</div>';
        }
      });
      // Risorse non in gruppi condivisi
      const sharedIds=new Set([...SHARED_RISORSE['Filosofia'],...SHARED_RISORSE['Storia']].map(r=>r.titolo));
      const altreRisorse=risorse.filter(r=>!sharedIds.has(r.titolo)&&r.materia!=='fil-contemporanea'&&r.materia!=='sto-medievale');
      if(altreRisorse.length){
        html+=`<div class="peek-subject"><div class="peek-subject-title">Altre Risorse <span>Educazione Civica</span></div>`;
        altreRisorse.slice(0,4).forEach((item,i)=>{html+=mkItem(item,i);});
        html+='</div>';
      }
      if(!html)html='<p style="text-align:center;color:var(--stone);font-size:.85rem;padding:2rem">Nessuna risorsa disponibile.</p>';
    } else if(tab==='compiti'){
      if(compiti.length){
        const cgroups={};
        compiti.forEach(r=>{if(!cgroups[r.materia])cgroups[r.materia]=[];cgroups[r.materia].push(r);});
        Object.entries(cgroups).forEach(([mat,items])=>{
          const m=MATERIE[mat];if(!m)return;
          html+=`<div class="peek-subject"><div class="peek-subject-title">${m.l} <span>${m.g}</span></div>`;
          items.forEach((item,i)=>{html+=mkItem(item,i);});
          html+='</div>';
        });
      } else html='<div style="text-align:center;padding:2.5rem"><div style="font-size:2rem;margin-bottom:1rem">📝</div><p style="color:var(--stone);font-size:.85rem">Nessun compito assegnato al momento.</p></div>';
    }

    body.innerHTML=html;
  }catch(e){body.innerHTML='<p style="text-align:center;color:var(--stone);font-size:.85rem;padding:2rem">Impossibile caricare i contenuti.</p>';}
}
