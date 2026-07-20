/* Costellazione dei filosofi — rete di pensatori (stelle) e influenze (linee).
   Stelle colorate per corrente di pensiero; cielo stellato animato di sfondo.
   SVG generato via JS; hover/tap illumina un filosofo e i suoi legami. */
(function () {
  var svg = document.getElementById('stars-svg');
  var detail = document.getElementById('stars-detail');
  var wrap = document.querySelector('.stars-svg-wrap');
  var legendEl = document.getElementById('stars-legend');
  if (!svg || !detail) return;
  var NS = 'http://www.w3.org/2000/svg';

  // correnti di pensiero -> colore (rgb) + etichetta
  var TRAD = {
    preso:  ['150,178,108', 'Presocratici'],
    class:  ['214,178,84',  'Classici greci'],
    ellen:  ['200,118,76',  'Ellenismo · Roma'],
    mediev: ['158,120,158', 'Medioevo'],
    raz:    ['84,154,142',  'Razionalismo'],
    emp:    ['168,176,104', 'Empirismo'],
    illum:  ['226,184,96',  'Illuminismo'],
    ideal:  ['178,92,88',   'Idealismo'],
    otto:   ['156,104,128', 'Ottocento'],
    nove:   ['122,150,168', 'Novecento']
  };

  // n=nome · y=anno (neg=a.C.) · t=corrente · lane=corsia (0 alto..4 basso)
  // maj=etichetta sempre visibile · from=chi lo ha influenzato
  var P = [
    { id: 'talete', n: 'Talete', y: -624, t: 'preso', lane: 0, maj: 1, note: 'L’acqua come principio (archè) di tutte le cose.' },
    { id: 'anassimandro', n: 'Anassimandro', y: -610, t: 'preso', lane: 1, note: 'L’àpeiron, l’indefinito da cui tutto nasce.', from: ['talete'] },
    { id: 'anassimene', n: 'Anassimene', y: -585, t: 'preso', lane: 0, note: 'L’aria come sostanza originaria.', from: ['anassimandro'] },
    { id: 'pitagora', n: 'Pitagora', y: -570, t: 'preso', lane: 2, note: 'Il numero come essenza del reale; l’anima immortale.', from: ['talete'] },
    { id: 'eraclito', n: 'Eraclito', y: -535, t: 'preso', lane: 1, maj: 1, note: 'Il divenire universale: «tutto scorre»; il lògos.', from: ['anassimene'] },
    { id: 'parmenide', n: 'Parmenide', y: -515, t: 'preso', lane: 3, maj: 1, note: 'L’essere è, il non-essere non è: l’immutabilità dell’essere.' },
    { id: 'democrito', n: 'Democrito', y: -460, t: 'preso', lane: 0, note: 'Atomi e vuoto: la realtà come aggregazione di atomi.', from: ['anassimene'] },
    { id: 'gorgia', n: 'Gorgia', y: -485, t: 'class', lane: 4, note: 'Sofista: nulla esiste, e se esiste è inconoscibile.', from: ['parmenide'] },
    { id: 'protagora', n: 'Protagora', y: -490, t: 'class', lane: 4, note: 'Sofista: «l’uomo è misura di tutte le cose».', from: ['democrito'] },
    { id: 'socrate', n: 'Socrate', y: -470, t: 'class', lane: 2, maj: 1, note: 'Il dialogo e la maieutica; «so di non sapere».', from: ['protagora'] },
    { id: 'platone', n: 'Platone', y: -427, t: 'class', lane: 3, maj: 1, note: 'Il mondo delle idee; la conoscenza come reminiscenza.', from: ['socrate', 'parmenide', 'pitagora'] },
    { id: 'aristotele', n: 'Aristotele', y: -384, t: 'class', lane: 4, maj: 1, note: 'Logica, metafisica della sostanza, etica della virtù.', from: ['platone'] },
    { id: 'epicuro', n: 'Epicuro', y: -341, t: 'ellen', lane: 1, note: 'Il piacere come assenza di turbamento; atomismo.', from: ['democrito'] },
    { id: 'zenone', n: 'Zenone di Cizio', lbl: 'Zenone', y: -334, t: 'ellen', lane: 0, note: 'Stoicismo: vivere secondo natura e ragione.', from: ['socrate'] },
    { id: 'seneca', n: 'Seneca', y: -4, t: 'ellen', lane: 1, note: 'Stoicismo romano: la virtù e il dominio di sé.', from: ['zenone'] },
    { id: 'marcoaurelio', n: 'Marco Aurelio', y: 121, t: 'ellen', lane: 0, note: 'Lo stoico sul trono; i «Colloqui con sé stesso».', from: ['seneca'] },
    { id: 'plotino', n: 'Plotino', y: 204, t: 'ellen', lane: 2, note: 'Neoplatonismo: l’Uno e l’emanazione.', from: ['platone'] },
    { id: 'agostino', n: 'Agostino', y: 354, t: 'mediev', lane: 3, maj: 1, note: 'Fede e ragione; l’interiorità e il tempo.', from: ['plotino', 'platone'] },
    { id: 'boezio', n: 'Boezio', y: 477, t: 'mediev', lane: 4, note: 'Trasmette la logica antica; la consolazione della filosofia.', from: ['aristotele'] },
    { id: 'anselmo', n: 'Anselmo', y: 1033, t: 'mediev', lane: 1, note: 'La prova ontologica dell’esistenza di Dio.', from: ['agostino'] },
    { id: 'averroe', n: 'Averroè', y: 1126, t: 'mediev', lane: 2, note: 'Il Commentatore di Aristotele; ragione e fede.', from: ['aristotele'] },
    { id: 'tommaso', n: 'Tommaso d’Aquino', lbl: 'Tommaso', y: 1225, t: 'mediev', lane: 3, maj: 1, note: 'La sintesi tra fede cristiana e aristotelismo.', from: ['aristotele', 'agostino', 'averroe'] },
    { id: 'ockham', n: 'Ockham', y: 1287, t: 'mediev', lane: 4, note: 'Il rasoio: non moltiplicare gli enti; nominalismo.', from: ['tommaso'] },
    { id: 'bacone', n: 'Bacone', y: 1561, t: 'emp', lane: 0, note: 'Il metodo induttivo; «sapere è potere».', from: ['ockham'] },
    { id: 'hobbes', n: 'Hobbes', y: 1588, t: 'emp', lane: 4, note: 'Il Leviatano; lo Stato dal contratto sociale.', from: ['bacone'] },
    { id: 'cartesio', n: 'Cartesio', y: 1596, t: 'raz', lane: 2, maj: 1, note: '«Cogito ergo sum»; il metodo e il dubbio.' },
    { id: 'spinoza', n: 'Spinoza', y: 1632, t: 'raz', lane: 1, note: 'Deus sive Natura: un’unica sostanza infinita.', from: ['cartesio'] },
    { id: 'locke', n: 'Locke', y: 1632, t: 'emp', lane: 3, note: 'La mente come «tabula rasa»; l’esperienza fonte del sapere.', from: ['bacone'] },
    { id: 'leibniz', n: 'Leibniz', y: 1646, t: 'raz', lane: 1, note: 'Le monadi; l’armonia prestabilita.', from: ['cartesio'] },
    { id: 'berkeley', n: 'Berkeley', y: 1685, t: 'emp', lane: 4, note: '«Esse est percipi»: esistere è essere percepiti.', from: ['locke'] },
    { id: 'hume', n: 'Hume', y: 1711, t: 'emp', lane: 3, maj: 1, note: 'Critica della causalità; il sapere dall’abitudine.', from: ['locke', 'berkeley'] },
    { id: 'rousseau', n: 'Rousseau', y: 1712, t: 'illum', lane: 0, note: 'Il contratto sociale; la volontà generale.', from: ['locke'] },
    { id: 'kant', n: 'Kant', y: 1724, t: 'illum', lane: 2, maj: 1, note: 'La rivoluzione copernicana; l’imperativo categorico.', from: ['hume', 'leibniz', 'rousseau'], q: 'Due cose riempiono l’animo di ammirazione sempre nuova: il cielo stellato sopra di me, e la legge morale in me.' },
    { id: 'fichte', n: 'Fichte', y: 1762, t: 'ideal', lane: 1, note: 'L’Io assoluto come principio di tutto.', from: ['kant'] },
    { id: 'hegel', n: 'Hegel', y: 1770, t: 'ideal', lane: 3, maj: 1, note: 'La dialettica; lo Spirito che si realizza nella storia.', from: ['kant', 'fichte', 'schelling'], q: 'Ciò che è razionale è reale; e ciò che è reale è razionale.' },
    { id: 'schelling', n: 'Schelling', y: 1775, t: 'ideal', lane: 0, note: 'La filosofia della natura e dell’identità.', from: ['fichte', 'kant'] },
    { id: 'schopenhauer', n: 'Schopenhauer', y: 1788, t: 'otto', lane: 1, note: 'Il mondo come volontà e rappresentazione.', from: ['kant'] },
    { id: 'comte', n: 'Comte', y: 1798, t: 'otto', lane: 4, note: 'Il positivismo; la legge dei tre stadi.', from: ['hume'] },
    { id: 'feuerbach', n: 'Feuerbach', y: 1804, t: 'otto', lane: 0, note: 'Dio come proiezione dell’uomo.', from: ['hegel'] },
    { id: 'mill', n: 'Mill', y: 1806, t: 'otto', lane: 3, note: 'Utilitarismo; la libertà dell’individuo.', from: ['hume', 'comte'] },
    { id: 'kierkegaard', n: 'Kierkegaard', y: 1813, t: 'otto', lane: 2, note: 'L’esistenza singola; angoscia, scelta e fede.', from: ['hegel'] },
    { id: 'marx', n: 'Marx', y: 1818, t: 'otto', lane: 4, maj: 1, note: 'Il materialismo storico; la critica dell’economia politica.', from: ['hegel', 'feuerbach'] },
    { id: 'nietzsche', n: 'Nietzsche', y: 1844, t: 'otto', lane: 1, maj: 1, note: 'La morte di Dio; volontà di potenza; oltreuomo.', from: ['schopenhauer'] },
    { id: 'husserl', n: 'Husserl', y: 1859, t: 'nove', lane: 2, note: '«Alle cose stesse»; l’intenzionalità della coscienza.' },
    { id: 'bergson', n: 'Bergson', y: 1859, t: 'nove', lane: 0, note: 'Il tempo come durata; lo slancio vitale.', from: ['schopenhauer'] },
    { id: 'heidegger', n: 'Heidegger', y: 1889, t: 'nove', lane: 2, maj: 1, note: 'Essere e tempo; l’esserci (Dasein).', from: ['husserl', 'nietzsche', 'kierkegaard'] },
    { id: 'wittgenstein', n: 'Wittgenstein', y: 1889, t: 'nove', lane: 4, maj: 1, note: 'I limiti del linguaggio come limiti del mondo.', from: ['schopenhauer'], q: 'La filosofia non è una dottrina, ma un’attività.' },
    { id: 'popper', n: 'Popper', y: 1902, t: 'nove', lane: 0, note: 'La falsificabilità come criterio della scienza.', from: ['hume', 'kant'] },
    { id: 'sartre', n: 'Sartre', y: 1905, t: 'nove', lane: 3, note: '«L’esistenza precede l’essenza»; libertà e responsabilità.', from: ['heidegger', 'husserl', 'bergson'] },
    { id: 'arendt', n: 'Arendt', y: 1906, t: 'nove', lane: 1, note: 'La banalità del male; la vita activa.', from: ['heidegger'] },
    { id: 'gadamer', n: 'Gadamer', y: 1900, t: 'nove', lane: 4, note: 'L’ermeneutica; la fusione degli orizzonti.', from: ['heidegger'] },
    { id: 'foucault', n: 'Foucault', y: 1926, t: 'nove', lane: 2, note: 'Sapere e potere; l’archeologia dei saperi.', from: ['nietzsche', 'heidegger'] }
  ];

  var W = 1000, H = 520, mL = 54, mR = 54, mT = 60, mB = 44;
  var byId = {}; P.forEach(function (p) { byId[p.id] = p; });

  var order = P.slice().sort(function (a, b) { return a.y - b.y; });
  order.forEach(function (p, i) { p.x = mL + i * (W - mL - mR) / (order.length - 1); p.rank = i; });
  var maxLane = 4;
  P.forEach(function (p) {
    p.py = mT + p.lane * (H - mT - mB) / maxLane;
    p.band = p.y < 400 ? 'Antica' : p.y < 1500 ? 'Medievale' : p.y < 1800 ? 'Moderna' : 'Contemporanea';
  });

  var links = [];
  P.forEach(function (p) { (p.from || []).forEach(function (src) { if (byId[src]) links.push([src, p.id]); }); });

  function el(tag, attrs) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); return e; }
  function fmtYear(y) { return y < 0 ? Math.abs(y) + ' a.C.' : (y < 1000 ? y + ' d.C.' : '' + y); }
  function col(p) { return TRAD[p.t] ? TRAD[p.t][0] : '231,220,192'; }

  // ── cielo stellato decorativo di sfondo (stelle fisse che pulsano) ──
  var bg = el('g', { class: 'st-bg' });
  var seed = 7;
  function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
  for (var s = 0; s < 90; s++) {
    var c = el('circle', { cx: (rnd() * W).toFixed(1), cy: (rnd() * H).toFixed(1), r: (rnd() * 1.1 + 0.3).toFixed(2), class: 'st-bgstar' });
    c.style.animationDelay = (rnd() * 4).toFixed(2) + 's';
    bg.appendChild(c);
  }
  svg.appendChild(bg);

  // ── fasce d'epoca: divisori verticali + etichetta ──
  var bands = {};
  P.forEach(function (p) { (bands[p.band] = bands[p.band] || []).push(p.x); });
  var ranges = ['Antica', 'Medievale', 'Moderna', 'Contemporanea'].filter(function (n) { return bands[n]; })
    .map(function (name) { return { name: name, min: Math.min.apply(null, bands[name]), max: Math.max.apply(null, bands[name]) }; });
  ranges.forEach(function (r, i) {
    if (i > 0) {
      var dx = (ranges[i - 1].max + r.min) / 2;
      svg.appendChild(el('line', { x1: dx, y1: mT - 16, x2: dx, y2: H - 28, class: 'st-era-divider' }));
    }
    var t = el('text', { x: (r.min + r.max) / 2, y: H - 12, class: 'st-era-label', 'text-anchor': 'middle' });
    t.textContent = r.name; svg.appendChild(t);
  });

  // ── linee di influenza ──
  var linkEls = {};
  links.forEach(function (l) {
    var a = byId[l[0]], b = byId[l[1]];
    var ln = el('line', { x1: a.x, y1: a.py, x2: b.x, y2: b.py, class: 'st-link' });
    svg.appendChild(ln);
    (linkEls[l[0]] = linkEls[l[0]] || []).push({ ln: ln, other: l[1] });
    (linkEls[l[1]] = linkEls[l[1]] || []).push({ ln: ln, other: l[0] });
  });

  // ── nodi (stella colorata per corrente) ──
  P.forEach(function (p) {
    var g = el('g', { class: 'st-node', tabindex: '0' });
    var star = el('circle', { cx: p.x, cy: p.py, r: p.maj ? 5.5 : 4, class: 'st-star' });
    star.style.setProperty('--c', col(p));
    g.appendChild(star);
    var below = (p.rank % 2 === 1);
    var tx = el('text', { x: p.x, y: p.py + (below ? 20 : -12), class: 'st-name' + (p.maj ? ' st-name-maj' : ''), 'text-anchor': 'middle' });
    tx.textContent = p.lbl || p.n; g.appendChild(tx);
    svg.appendChild(g);
    p.node = g; p.starEl = star; p.txtEl = tx;
    g.addEventListener('mouseenter', function () { activate(p); });
    g.addEventListener('mouseleave', reset);
    g.addEventListener('focus', function () { activate(p); });
    g.addEventListener('blur', reset);
    g.addEventListener('click', function () { activate(p); });
  });

  // ── legenda correnti ──
  if (legendEl) {
    var used = {}; P.forEach(function (p) { used[p.t] = 1; });
    Object.keys(TRAD).forEach(function (k) {
      if (!used[k]) return;
      var s = document.createElement('span'); s.className = 'st-leg';
      var d = document.createElement('i'); d.style.background = 'rgb(' + TRAD[k][0] + ')';
      s.appendChild(d); s.appendChild(document.createTextNode(TRAD[k][1]));
      legendEl.appendChild(s);
    });
  }

  function activate(p) {
    wrap.classList.add('dimmed');
    P.forEach(function (q) { q.node.classList.remove('on'); });
    Object.keys(linkEls).forEach(function (id) { linkEls[id].forEach(function (o) { o.ln.classList.remove('on'); }); });
    p.node.classList.add('on');
    (linkEls[p.id] || []).forEach(function (o) { o.ln.classList.add('on'); byId[o.other].node.classList.add('on'); });
    render(p);
  }
  function reset() {
    wrap.classList.remove('dimmed');
    P.forEach(function (q) { q.node.classList.remove('on'); });
    Object.keys(linkEls).forEach(function (id) { linkEls[id].forEach(function (o) { o.ln.classList.remove('on'); }); });
    detail.classList.remove('active');
    detail.innerHTML = '<div class="sd-hint">Passa il mouse (o tocca) una stella per scoprire il filosofo, la sua corrente e i suoi legami.</div>';
  }
  function render(p) {
    var from = (p.from || []).map(function (id) { return byId[id].n; });
    var into = P.filter(function (q) { return (q.from || []).indexOf(p.id) >= 0; }).map(function (q) { return q.n; });
    var tradName = TRAD[p.t] ? TRAD[p.t][1] : '';
    var html = '<div class="sd-name">' + p.n + '</div>' +
      '<div class="sd-meta"><span class="sd-dot" style="background:rgb(' + col(p) + ')"></span>' + fmtYear(p.y) + ' · ' + tradName + '</div>' +
      '<div class="sd-note">' + p.note + '</div>';
    if (p.q) html += '<div class="sd-quote">«' + p.q + '»</div>';
    var rel = '';
    if (from.length) rel += 'Influenzato da <b>' + from.join(', ') + '</b>. ';
    if (into.length) rel += 'Ha influenzato <b>' + into.join(', ') + '</b>.';
    if (rel) html += '<div class="sd-links">' + rel + '</div>';
    detail.innerHTML = html;
    detail.classList.add('active');
  }
})();
