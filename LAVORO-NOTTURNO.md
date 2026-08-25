# Lavoro notturno — mappe e provocazioni

Questo file esiste perche' il lavoro possa continuare anche in una
sessione nuova, senza contesto. Chi lo legge ha tutto quello che
serve: che cosa fare, in che forma, e come controllare di averlo
fatto bene.

## Che cosa si sta facendo

Per ognuno dei 120 capitoli del programma servono **due cose**, che
vivono entrambe in `js/lezioni.js` e si vedono in `prove/lezione.html`:

1. una **mappa concettuale** esaustiva del capitolo;
2. una **provocazione**, cioe' un'ora di lezione costruita a tempi.

I capitoli sono gli stessi della banca domande (`votazioni/banca.js`
e `banca2.js`): il titolo dev'essere **identico**, carattere per
carattere, o i due strumenti non si allineano.

## Regola prima

**Un capitolo per volta, fino in fondo, poi commit e push.**
Mai iniziarne un altro prima di aver committato quello finito. Cosi'
qualunque cosa succeda — limiti d'uso, sessione chiusa, errore — il
lavoro fatto e' salvo e gia' online.

## La forma della mappa

```js
'Titolo esatto del capitolo': {
  mappa: {
    n:'Titolo della mappa', d:'sottotitolo breve',
    f:[
      {r:'relazione', n:'Area principale', d:'chiarimento',
       f:[
         {r:'relazione', n:'Concetto', d:'chiarimento',
          f:[{piu:true, r:'relazione', n:'Dettaglio', d:'…'}]}
       ]}
    ],
    incroci:[
      {da:'Nome esatto di un nodo', a:'Nome esatto di un altro',
       r:'relazione breve', perche:'due righe che spiegano il legame'}
    ]
  },
  provocazione: { … }
}
```

Misure a cui attenersi (sono quelle dei capitoli 1-3, gia' approvati):

- **otto aree principali** circa, mai meno di sei;
- **da 60 a 130 concetti** in tutto;
- **ogni arco ha `r`**, la frase che si legge sulla freccia: due o
  tre parole, mai una riga intera, o non ci sta nel disegno;
- **da 20 a 45 nodi `piu:true`**: sono il secondo strato, quello che
  si apre col bottone «Piu' a fondo» — date, numeri dei frammenti,
  nomi delle fonti antiche, dettagli tecnici;
- **da 10 a 14 `incroci`**, e **ognuno deve avere `perche`**: sono i
  ponti fra aree diverse, e sono la parte in cui si vede se il
  capitolo e' stato capito o solo imparato;
- **negli `incroci`, `da` e `a` vanno copiati e incollati** dal nodo,
  non riscritti a memoria: e' l'errore che ricorre piu spesso —
  «Le sensazioni» per «Sensazioni», «Il tempo» per «Che cos'e il
  tempo». La pagina lo segnala in console, ma costa un giro in piu;
- i nomi dei nodi devono essere **unici dentro la mappa**: se due
  nodi si chiamano uguale, un incrocio si aggancia al primo che
  trova e la freccia finisce da tutt'altra parte. La pagina avvisa
  in console, ma conviene non sbagliare.

## La forma della provocazione

```js
provocazione: {
  titolo:'…', durata:'55 minuti',
  domandaMadre:'la domanda in una riga',
  perche:'a che cosa serve quest'ora, e perche' funziona',
  occorrente:'che cosa serve materialmente',
  tempi:[
    {minuti:'0–8', et:'L\'aggancio',
     schermo:'quello che si proietta, poche righe, grandi',
     opzioni:['…','…'],                 // solo nel tempo dello schieramento
     testo:{fonte:'…', glossa:'…'},     // solo nel tempo del testo
     parlato:'che cosa dici tu: dove rallentare, dove tacere',
     seDicono:[{loro:'la risposta che ti daranno', tu:'la controreplica'}]}
  ],
  riserve:[{titolo:'…', corpo:'…', chiedi:'…'}],
  testi:[{fonte:'…', corpo:'…', glossa:'…'}],
  compito:'…',
  fonti:['…']
}
```

Regole di contenuto:

- **sei tempi**, con il minutaggio che arriva a 55;
- lo schema e' sempre lo stesso: **aggancio → schieramento →
  complicazione → il testo → il colpo di scena → il ritorno**;
- **fra 1700 e 2000 parole** in tutto (schermo + parlato + repliche
  + riserve + testi). Sotto le 1500 non regge un'ora;
- **niente lavagna**: e' stato tolto apposta. Non scrivere «scrivi
  alla lavagna», «disegna», «prendi il gesso»;
- il campo `schermo` e' l'unica cosa che vede la classe. `parlato`,
  `seDicono` e le glosse non finiscono mai sul proiettore;
- **tre riserve** e **due o tre testi** con la fonte precisa;
- l'aggancio dev'essere una domanda a cui **non si puo' rispondere
  con quello che si sa**, non una curiosita';
- si puo' e si deve cercare materiale in rete: aneddoti veri,
  citazioni con la fonte, numeri, casi concreti. Meglio un fatto
  verificabile che un'astrazione.

## Come si controlla (obbligatorio, prima del commit)

Aprire in un browser vero `prove/lezione.html` e verificare, per il
capitolo appena scritto:

1. i dati si caricano (`typeof LEZIONI` non e' undefined): se c'e' un
   errore di sintassi, **tutti** i capitoli spariscono;
2. `console.warn` non dice niente — la pagina avvisa da sola su nomi
   ripetuti, incroci senza bersaglio e rimandi senza spiegazione;
3. nessuno stato della mappa e' vuoto (`#dentro-int` con larghezza
   zero) e il testo piu' piccolo resta **sopra i 15 px**;
4. accendendo i rimandi compaiono tutti i riquadri viola, ognuno con
   la sua spiegazione, e le sovrapposizioni fra riquadri sono zero;
5. nella provocazione, `parlato` e `seDicono` non compaiono nella
   proiezione.

Poi: alzare `versione.json`, `const VERSIONE` in `js/app.js`, il
`?v=` di `js/app.js` in `index.html` e quello di `js/lezioni.js` in
`prove/lezione.html` — tutti allo stesso valore. Senza questo il
browser continua a servire la copia vecchia.

Infine `git add -A && git commit && git push origin main`, con un
messaggio che dica che cosa c'e' dentro il capitolo, non «aggiunto
capitolo N».

## L'ordine

Si va in ordine di programma. Restano:

- [x] Filosofia antica · 4 — Socrate
- [x] Filosofia antica · 5 — Platone: le Idee, l'anima, la città
- [x] Filosofia antica · 6 — L'ultimo Platone
- [x] Filosofia antica · 7 — Aristotele: logica e metafisica
- [x] Filosofia antica · 8 — Aristotele: etica e politica
- [x] Filosofia antica · 9 — Epicureismo e scetticismo
- [x] Filosofia antica · 10 — Lo stoicismo
- [x] Filosofia antica · 11 — Il neoplatonismo e Plotino
- [x] Filosofia antica · 12 — Agostino d'Ippona
- [x] Storia medievale · 1 — La ripresa dopo l'anno Mille
- [x] Storia medievale · 2 — La lotta per le investiture
- [x] Storia medievale · 3 — Le crociate
- [x] Storia medievale · 4 — L'Italia comunale e l'Impero
- [x] Storia medievale · 5 — Papato, Impero e monarchie nazionali
- [x] Storia medievale · 6 — Le civiltà extraeuropee
- [x] Storia medievale · 7 — La crisi del Trecento
- [x] Storia medievale · 8 — La crisi dei poteri universali
- [x] Storia medievale · 9 — L'Italia degli Stati regionali
- [x] Storia medievale · 10 — La frontiera mediterranea e gli Ottomani
- [x] Storia medievale · 11 — Il Nuovo Mondo
- [x] Filosofia medievale · 1 — La filosofia nel Medioevo
- [x] Filosofia medievale · 2 — Tommaso d'Aquino
- [x] Filosofia medievale · 3 — La filosofia nel Trecento
- [x] Storia moderna · 1 — Carlo V e la Riforma protestante
- [x] Storia moderna · 2 — Riforma e Controriforma
- [x] Storia moderna · 3 — Economia, guerre e il declino spagnolo
- [x] Storia moderna · 4 — La crisi del Seicento e la rivoluzione scientifica
- [x] Storia moderna · 5 — La guerra dei Trent'anni e l'Olanda
- [x] Storia moderna · 6 — Rivoluzioni inglesi e assolutismi
- [x] Storia moderna · 7 — L'Europa nel primo Settecento
- [x] Storia moderna · 8 — La civiltà dei Lumi
- [x] Storia moderna · 9 — La prima rivoluzione industriale
- [x] Storia moderna · 10 — La Rivoluzione americana
- [x] Storia moderna · 11 — La Rivoluzione francese
- [x] Storia moderna · 12 — L'età napoleonica
- [x] Storia moderna · 13 — La Restaurazione
- [x] Storia moderna · 14 — L'età dei popoli e delle nazioni
- [x] Storia moderna · 15 — Società industriale e socialismo
- [x] Storia moderna · 16 — Il 1848, primavera dei popoli
- [x] Filosofia moderna · 1 — La cultura umanistico-rinascimentale
- [x] Filosofia moderna · 2 — Il ritorno a Platone e ad Aristotele
- [x] Filosofia moderna · 3 — Rinascimento e religione
- [x] Filosofia moderna · 4 — Rinascimento e politica
- [x] Filosofia moderna · 5 — Telesio, Bruno, Campanella
- [x] Filosofia moderna · 6 — La rivoluzione scientifica
- [x] Filosofia moderna · 7 — Francesco Bacone
- [x] Filosofia moderna · 8 — Galileo Galilei
- [x] Filosofia moderna · 16 — Vico
- [x] Filosofia moderna · 17 — I caratteri dell'Illuminismo
- [x] Filosofia moderna · 18 — Rousseau
- [x] Filosofia moderna · 19 — Kant: il progetto filosofico
- [x] Filosofia moderna · 20 — Kant: la Critica della ragion pura
- [x] Filosofia moderna · 21 — Kant: la Critica della ragion pratica
- [x] Filosofia moderna · 22 — Kant: la Critica del Giudizio
- [x] Filosofia moderna · 23 — Kant: religione, diritto e storia
- [x] Filosofia moderna · 24 — Il Romanticismo
- [x] Filosofia moderna · 25 — Fichte
- [x] Filosofia moderna · 26 — Schelling
- [x] Filosofia moderna · 27 — Hegel: i fondamenti del sistema
- [x] Filosofia moderna · 28 — Hegel: la Fenomenologia dello spirito
- [x] Filosofia moderna · 29 — Hegel: l'Enciclopedia
- [x] Storia contemporanea · 1 — Il Risorgimento e la prima guerra d'indipendenza
- [ ] Storia contemporanea · 2 — L'Europa fra il 1850 e il 1870
- [ ] Storia contemporanea · 3 — Guerra civile americana, Giappone e Cina
- [ ] Storia contemporanea · 4 — L'Unità d'Italia e la Destra storica
- [ ] Storia contemporanea · 5 — L'Europa nell'età di Bismarck
- [ ] Storia contemporanea · 6 — La seconda rivoluzione industriale
- [ ] Storia contemporanea · 7 — La Sinistra storica e la crisi di fine secolo
- [ ] Storia contemporanea · 8 — L'età dell'imperialismo
- [ ] Storia contemporanea · 9 — La belle époque
- [x] Storia contemporanea · 10 — Guglielmo II e i blocchi contrapposti
- [x] Storia contemporanea · 11 — L'Italia giolittiana
- [x] Storia contemporanea · 12 — La Grande Guerra
- [x] Storia contemporanea · 13 — La Rivoluzione russa
- [x] Storia contemporanea · 14 — Il dopoguerra in Europa
- [x] Storia contemporanea · 15 — Dal dopoguerra al fascismo
- [x] Storia contemporanea · 16 — La crisi del 1929
- [x] Storia contemporanea · 17 — L'Unione Sovietica di Stalin
- [x] Storia contemporanea · 18 — Il nazismo
- [x] Storia contemporanea · 19 — La guerra di Spagna e l'espansionismo
- [ ] Storia contemporanea · 20 — L'Italia fascista
- [ ] Storia contemporanea · 21 — La Seconda guerra mondiale
- [ ] Storia contemporanea · 22 — La guerra fredda
- [ ] Storia contemporanea · 23 — La coesistenza pacifica
- [ ] Storia contemporanea · 24 — Il Sessantotto, la distensione e le crisi
- [ ] Storia contemporanea · 25 — La fine della guerra fredda
- [ ] Storia contemporanea · 26 — L'Italia repubblicana
- [ ] Storia contemporanea · 27 — Globalizzazione e nuove crisi
- [ ] Storia contemporanea · 28 — L'Italia della Seconda Repubblica
- [ ] Filosofia contemporanea · 1 — Schopenhauer
- [ ] Filosofia contemporanea · 2 — Kierkegaard
- [ ] Filosofia contemporanea · 3 — La Sinistra hegeliana e Feuerbach
- [ ] Filosofia contemporanea · 4 — Karl Marx
- [ ] Filosofia contemporanea · 5 — Il Positivismo: Comte e Mill
- [ ] Filosofia contemporanea · 6 — Darwin, Spencer e l'evoluzionismo
- [ ] Filosofia contemporanea · 7 — Bergson e Weber: la reazione al positivismo
- [ ] Filosofia contemporanea · 8 — Nietzsche: la demistificazione
- [ ] Filosofia contemporanea · 9 — Nietzsche: Zarathustra e l'eterno ritorno
- [ ] Filosofia contemporanea · 10 — Freud e la psicoanalisi
- [ ] Filosofia contemporanea · 11 — Husserl e la fenomenologia
- [ ] Filosofia contemporanea · 12 — Heidegger e l'ermeneutica
- [ ] Filosofia contemporanea · 13 — Jaspers e Sartre: la filosofia dell'esistenza
- [ ] Filosofia contemporanea · 14 — L'Esistenzialismo: caratteri generali
- [ ] Filosofia contemporanea · 15 — La crisi delle certezze nelle scienze
- [ ] Filosofia contemporanea · 16 — Wittgenstein e l'analisi del linguaggio
- [ ] Filosofia contemporanea · 17 — Il pragmatismo: Peirce, James, Dewey
- [ ] Filosofia contemporanea · 18 — Croce e Gentile: il neoidealismo italiano
- [ ] Filosofia contemporanea · 19 — La Scuola di Francoforte e la critica al capitalismo
- [ ] Filosofia contemporanea · 20 — Strutturalismo, Foucault e decostruzione
- [ ] Filosofia contemporanea · 21 — Hannah Arendt

DA RIFARE (forma vecchia):
- [ ] Filosofia moderna · 9 — Cartesio
- [ ] Filosofia moderna · 10 — Spinoza
- [ ] Filosofia moderna · 11 — Leibniz
- [ ] Filosofia moderna · 12 — Hobbes
- [ ] Filosofia moderna · 13 — Locke
- [ ] Filosofia moderna · 14 — Berkeley
- [ ] Filosofia moderna · 15 — Hume

## Nota sui sette da rifare

Cartesio, Spinoza, Leibniz, Hobbes, Locke, Berkeley e Hume hanno la
provocazione nella **forma breve** (cinque schermate e una nota, ~250
parole) e la mappa senza `piu` e senza `incroci`. Vanno rifatti da
zero nella forma nuova, ma **per ultimi**: prima i 110 che non
esistono.

## Storia: niente schieramento (deciso il 24 agosto 2026)

Nelle provocazioni di **storia** il blocco 8–17 NON è più lo schieramento
con due opzioni. Lo schieramento è un dispositivo filosofico: chiedere di
prendere posizione ha senso su un problema morale o teorico, non su un
fatto storico, dove la domanda giusta è come è andata e come lo sappiamo.

Struttura dei sei tempi per storia:

    0–8    L'aggancio          — il fatto che non torna
    8–17   La fonte            — un documento, e tre domande:
                                 chi l'ha scritto e per risolvere quale problema?
                                 che cosa ammette senza volerlo?
                                 che cosa non dice?
    17–28  La complicazione    — il meccanismo
    28–38  La seconda fonte    — un documento che dice altro; si tengono insieme
    38–47  Il colpo di scena
    47–55  Il ritorno

Niente campo `opzioni` nei capitoli di storia. In **filosofia** lo
schieramento resta: lì serve.

Gli arretrati di storia si rifanno **solo dove lo schieramento pesa di più**,
non tutti.

### Otto aree, non nove (misurato il 25 agosto 2026)

Il capitolo su società industriale e socialismo era uscito con nove aree, e
la schermata «titolo + teste d'area» scendeva a 13,7 px: sotto la soglia dei
15. Accorpando a otto risale a 15,3. Il limite non è estetico — è quella
schermata a fissarlo, perché mostra tutte le teste insieme.

Se un capitolo non ci sta in otto aree, si accorpa (due aree corte in una,
con la seconda che diventa un ramo), non si aggiunge la nona.

### Sovrapposizione segnalata: il 1848

Il programma ha «Storia moderna · 14 — L'età dei popoli e delle nazioni» e
«Storia moderna · 16 — Il 1848, primavera dei popoli». Nel 14 il 1848 è la
prima area (sei nodi) e serve da premessa al nazionalismo; nel 16 è tutto il
capitolo. Per non ripetere, il 16 è stato scritto con un taglio diverso: la
prima rivoluzione europea simultanea, e la prima in cui i rivoluzionari si
combattono fra loro per confini contesi. Le due provocazioni non hanno
niente in comune.

Da chiedere ad Alessandro: se preferisce accorpare i due capitoli, o
lasciarli separati come sono ora.
