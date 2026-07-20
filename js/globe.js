/* Globo storico Idearca — proiezione ortografica su canvas (d3-geo).
   Confini nitidi/sfocati secondo il campo BORDERPRECISION del dataset.
   Si anima solo quando la sezione è in vista. */
(function () {
  var YEARS = [
    { y: 'bc323', f: 'data/world_bc323.json', label: '323 a.C.', cap: 'Impero di Alessandro', rot: [-40, -25] },
    { y: '100',   f: 'data/world_100.json',   label: '100 d.C.', cap: 'Impero Romano',        rot: [-15, -30] },
    { y: '1000',  f: 'data/world_1000.json',  label: '1000',     cap: 'Alto Medioevo',        rot: [-15, -30] },
    { y: '1492',  f: 'data/world_1492.json',  label: '1492',     cap: 'Scoperta dell’America', rot: [30, -20] },
    { y: '1815',  f: 'data/world_1815.json',  label: '1815',     cap: 'Congresso di Vienna',  rot: [-12, -38] },
    { y: '1914',  f: 'data/world_1914.json',  label: '1914',     cap: 'Prima guerra mondiale',rot: [-12, -38] },
    { y: '1945',  f: 'data/world_1945.json',  label: '1945',     cap: 'Secondo dopoguerra',   rot: [-12, -30] },
    { y: '2000',  f: 'data/world_2000.json',  label: '2000',     cap: 'Il mondo di oggi',     rot: [-12, -25] }
  ];
  var DEFAULT = 4; // 1815

  var canvas = document.getElementById('globe-canvas');
  if (!canvas || !window.d3 || !d3.geoOrthographic) return;
  var ctx = canvas.getContext('2d');
  var stage = document.getElementById('globe-stage');
  var hoverEl = document.getElementById('globe-hover');
  var tagEl = document.getElementById('globe-year-tag');
  var yearsWrap = document.getElementById('globe-years');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var W = 0, DPR = window.devicePixelRatio || 1;
  var projection = d3.geoOrthographic().clipAngle(90);
  var path = d3.geoPath(projection, ctx);
  var graticule = d3.geoGraticule10();
  var cache = {};
  var land = null, rotation = YEARS[DEFAULT].rot.concat([0]);
  var autov = 0.16, dragging = false, hoverFeat = null, mouse = null, running = false, current = -1;
  var userMoved = false; // l'autorotazione si ferma dopo la prima interazione

  // palette "d'epoca": tinte terrose diverse per distinguere gli stati
  var PAL = ['150,175,110', '173,158,80', '208,170,86', '200,120,78', '176,95,70',
             '96,152,138', '210,186,120', '120,150,88', '156,112,120', '182,120,70',
             '128,158,142', '196,150,92'];
  function colorFor(f, i) {
    var s = (f.properties.n || '') + i, h = 0;
    for (var k = 0; k < s.length; k++) h = (h * 31 + s.charCodeAt(k)) & 0x7fffffff;
    return PAL[h % PAL.length];
  }

  // ── FIX alla radice: alcuni poligoni del dataset hanno winding invertito -> d3 li
  // interpreta come "tutto il resto del globo" (riempiono l'emisfero, nomi errati).
  // Misuro l'area SFERICA reale: se copre più di mezza sfera è invertito -> giro gli anelli.
  function reverseGeom(g) {
    var polys = g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates];
    polys.forEach(function (rings) { rings.forEach(function (r) { r.reverse(); }); });
  }
  function fixWinding(d) {
    var HALF = 2 * Math.PI;
    d.features = d.features.filter(function (f) {
      if (!f.geometry) return true;
      if (d3.geoArea(f) > HALF) reverseGeom(f.geometry);   // prova a correggere il winding
      if (d3.geoArea(f) > HALF) return false;              // ancora degenere (geometria rotta) -> scarta
      return true;
    });
  }

  function size() {
    var w = Math.max(260, Math.min(stage.clientWidth, 520));
    W = w;
    canvas.style.width = w + 'px'; canvas.style.height = w + 'px';
    canvas.width = w * DPR; canvas.height = w * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    projection.scale(w / 2 - 8).translate([w / 2, w / 2]);
    draw();
  }

  function draw() {
    if (!W) return;
    projection.rotate(rotation);
    ctx.clearRect(0, 0, W, W);
    ctx.beginPath(); path({ type: 'Sphere' });
    var g = ctx.createRadialGradient(W * 0.38, W * 0.34, W * 0.1, W * 0.5, W * 0.5, W * 0.55);
    g.addColorStop(0, '#10361b'); g.addColorStop(1, '#04120a');
    ctx.fillStyle = g; ctx.fill();
    ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(196,164,78,.35)'; ctx.stroke();
    ctx.beginPath(); path(graticule);
    ctx.lineWidth = 0.5; ctx.strokeStyle = 'rgba(184,212,179,.12)'; ctx.stroke();
    if (!land) return;
    var i, f;
    // riempimenti: stati con nome = tinta distinta e interattivi;
    // regioni senza nome ("terra incognita" del dataset) = sfondo neutro, non evidenziato
    for (i = 0; i < land.features.length; i++) {
      f = land.features[i];
      ctx.beginPath(); path(f);
      if (f === hoverFeat) ctx.fillStyle = 'rgba(230,200,110,.92)';
      else if (f.properties.n) ctx.fillStyle = 'rgba(' + colorFor(f, i) + ',.78)'; // stati noti: vividi, spiccano
      else ctx.fillStyle = 'rgba(104,116,80,.26)'; // terra "ignota": scura e discreta, vicina all'oceano
      ctx.fill();
    }
    // confini: linea scura per separare, tratteggiata se approssimativa
    for (i = 0; i < land.features.length; i++) {
      f = land.features[i];
      var b = f.properties.b, fuzzy = (b != null && b < 3);
      ctx.beginPath(); path(f);
      if (fuzzy) { ctx.setLineDash([2, 3]); ctx.lineWidth = 0.7; ctx.strokeStyle = 'rgba(28,44,20,.55)'; }
      else { ctx.setLineDash([]); ctx.lineWidth = 0.8; ctx.strokeStyle = 'rgba(28,44,20,.8)'; }
      ctx.stroke();
    }
    ctx.setLineDash([]);
    // paese sotto il mouse: bordo oro evidenziato
    if (hoverFeat) {
      ctx.beginPath(); path(hoverFeat);
      ctx.setLineDash([]); ctx.lineWidth = 1.4; ctx.strokeStyle = 'rgba(224,196,112,.95)'; ctx.stroke();
    }
  }

  function tick() {
    if (!running) return;
    if (!dragging && !userMoved && !reduce) { rotation[0] += autov; draw(); }
    requestAnimationFrame(tick);
  }

  function loadYear(idx) {
    if (idx === current) return;
    current = idx;
    var yr = YEARS[idx];
    tagEl.textContent = yr.label + ' · ' + yr.cap;
    rotation = yr.rot.concat([0]);
    Array.prototype.forEach.call(yearsWrap.children, function (b, i) {
      b.classList.toggle('on', i === idx);
    });
    if (cache[yr.y]) { land = cache[yr.y]; draw(); return; }
    land = null; draw();
    fetch(yr.f).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function (d) {
      fixWinding(d);
      cache[yr.y] = d;
      if (current === idx) { land = d; draw(); }
    }).catch(function () {
      if (location.protocol === 'file:') {
        tagEl.textContent = 'Apri il sito da un server (http) per vedere la mappa';
      } else {
        tagEl.textContent = 'Mappa non disponibile al momento';
      }
    });
  }

  // bottoni anni
  YEARS.forEach(function (yr, i) {
    var b = document.createElement('button');
    b.className = 'gy'; b.type = 'button'; b.textContent = yr.label;
    b.addEventListener('click', function () { loadYear(i); });
    yearsWrap.appendChild(b);
  });

  // interazione
  var last = null;
  canvas.addEventListener('pointerdown', function (e) { dragging = true; userMoved = true; last = [e.clientX, e.clientY]; try { canvas.setPointerCapture(e.pointerId); } catch (x) {} });
  canvas.addEventListener('pointermove', function (e) {
    var rect = canvas.getBoundingClientRect(); mouse = [e.clientX - rect.left, e.clientY - rect.top];
    if (dragging && last) {
      rotation[0] += (e.clientX - last[0]) * 0.4;
      rotation[1] = Math.max(-90, Math.min(90, rotation[1] - (e.clientY - last[1]) * 0.4));
      last = [e.clientX, e.clientY]; draw();
    } else { hover(); }
  });
  canvas.addEventListener('pointerleave', function () { mouse = null; if (hoverFeat) { hoverFeat = null; draw(); } hoverEl.style.opacity = 0; });
  window.addEventListener('pointerup', function () { dragging = false; last = null; });

  function hover() {
    if (!land || !mouse) return;
    var geo = projection.invert(mouse), found = null;
    // solo stati con nome sono interattivi (le regioni vaghe non si evidenziano);
    // dati ordinati per area decrescente -> scorro dal fondo per prendere il più specifico.
    if (geo) for (var i = land.features.length - 1; i >= 0; i--) {
      var ff = land.features[i];
      if (ff.properties.n && d3.geoContains(ff, geo)) { found = ff; break; }
    }
    if (found !== hoverFeat) { hoverFeat = found; draw(); }
    if (found && found.properties.n) {
      hoverEl.textContent = found.properties.n;
      hoverEl.style.left = mouse[0] + 'px'; hoverEl.style.top = mouse[1] + 'px'; hoverEl.style.opacity = 1;
    } else hoverEl.style.opacity = 0;
  }

  window.addEventListener('resize', size);

  // avvia solo quando visibile
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        if (!W) size();
        if (current < 0) loadYear(DEFAULT);
        if (!running) { running = true; requestAnimationFrame(tick); }
      } else { running = false; }
    });
  }, { threshold: 0.15 });
  io.observe(document.getElementById('globo-section'));
})();
