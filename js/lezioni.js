/* ══════════════════════════════════════════════════════════
   SCHEMI E PROVOCAZIONI — Idearca

   Due cose per ogni capitolo, e servono a due momenti opposti
   dell'ora.

   LO SCHEMA è la struttura dell'argomento come la scriveresti
   tu, ma già fatta e leggibile dal fondo dell'aula.
   Non è un riassunto: è la forma del ragionamento — che cosa
   dipende da che cosa. Si apre un ramo per volta, perché uno
   schema che compare tutto insieme è una figura, mentre uno
   schema che cresce è un discorso.

   LA PROVOCAZIONE è cinque tempi, e dura un'ora intera. Non è
   la domanda a effetto che si spegne in un minuto: è il modo di
   entrare nel contenuto passando dallo spiazzamento.

     1. L'AGGANCIO      una domanda a cui non si può rispondere
                        con quello che si sa. Deve mettere in
                        difficoltà, non incuriosire.
     2. LO SCHIERAMENTO la classe si divide e si espone. Da qui
                        in poi hanno qualcosa da difendere, ed è
                        questo che li tiene per un'ora.
     3. LA COMPLICAZIONE il fatto che rompe la risposta facile.
                        Entrambi gli schieramenti scoprono di
                        avere un problema.
     4. IL TESTO        adesso — e solo adesso — il filosofo.
                        Arrivano al testo volendo sapere come se
                        la cava, che è l'unico modo per cui un
                        testo del Seicento venga letto davvero.
     5. IL RITORNO      la domanda di partenza, che non è più la
                        stessa. Non si chiude: si consegna.

   Il campo `nota` di ogni tempo non va mai proiettato: è come
   condurlo, e lo vedi solo tu in preparazione.

   I titoli dei capitoli sono gli stessi della banca delle
   domande: chi carica un capitolo nelle votazioni trova qui lo
   schema e la provocazione dello stesso argomento.
   ══════════════════════════════════════════════════════════ */

const LEZIONI = {

/* ══════════════════════════════════════════════════════════
   FILOSOFIA ANTICA · 1
   Prima provocazione scritta nella forma distesa: ogni tempo
   ha che cosa si proietta, che cosa dici, che cosa scrivi alla
   lavagna e che cosa rispondono — con la controreplica pronta.
   ══════════════════════════════════════════════════════════ */
'Filosofia antica · 1 — Dagli Ionici agli atomisti': {
  /* La mappa e' un'altra cosa dalla provocazione: non serve a
     condurre un'ora, serve a tenere insieme il capitolo. Deve
     starci tutto — anche quello che a lezione si dice di sfuggita
     — perche' e' anche la pagina su cui si ripassa. Le frasi
     sopra le frecce sono la parte che conta: senza, due concetti
     vicini non dicono niente.

     I nodi segnati `piu` sono il secondo strato: date, frammenti,
     nomi delle fonti, dettagli tecnici. Restano nascosti finche'
     non si preme «Piu' a fondo». Una mappa deve poter essere
     letta a colpo d'occhio e insieme scavata fino in fondo, e
     sono due cose che non stanno nella stessa schermata. */
  mappa: {
    n:'La nascita della filosofia', d:'Ionia, VI–V secolo a.C.',
    f:[
      {r:'nasce dentro', n:'Il contesto di Mileto', d:'perché proprio lì, e proprio allora',
       f:[
         {r:'è', n:'Colonia ionica sull\'Egeo', d:'porto ricchissimo, dodici città della lega',
          f:[{piu:true, r:'con', n:'Quattro porti e ottanta colonie', d:'fino al Mar Nero e al delta del Nilo'}]},
         {r:'porta', n:'Contatti con Egitto e Babilonia', d:'merci, ma anche saperi',
          f:[{r:'da cui', n:'Astronomia babilonese', d:'registri di eclissi lunghi secoli',
              f:[{piu:true, r:'in particolare', n:'Il ciclo di saros', d:'223 lunazioni: le eclissi si ripetono'}]},
             {r:'da cui', n:'Geometria egizia', d:'misure di campi dopo le piene',
              f:[{piu:true, r:'come', n:'La corda a dodici nodi', d:'il triangolo rettangolo, prima di ogni teorema'}]}]},
         {r:'non ha', n:'Nessuna casta sacerdotale', d:'nessun testo sacro da difendere',
          f:[{piu:true, r:'perché', n:'Il sacerdote greco non insegna', d:'compie riti, non custodisce dottrine'}]},
         {r:'usa', n:'Moneta e legge scritta', d:'valore astratto, norma uguale per tutti',
          f:[{piu:true, r:'nata in', n:'Lidia, VII secolo a.C.', d:'la moneta arriva a Mileto dai vicini'}]},
         {r:'vive nella', n:'Pólis', d:'le decisioni si prendono discutendo in pubblico',
          f:[{r:'quindi', n:'Il ragionamento diventa pubblico', d:'chi parla deve dare ragioni, non oracoli'},
             {piu:true, r:'regolata da', n:'Isonomía', d:'uguale legge per tutti, nessuno al centro'},
             {piu:true, r:'e Vernant osserva', n:'Il cosmo copia la città', d:'la Terra al centro senza padroni è una pólis'}]}
       ]},

      {r:'consiste in', n:'La domanda nuova', d:'dal mito al lógos',
       f:[
         {r:'sostituisce', n:'Non «chi», ma «di che cosa»', d:'niente più genealogie di dèi',
          f:[{piu:true, r:'contro', n:'La Teogonia di Esiodo', d:'lì il mondo nasce da accoppiamenti divini'}]},
         {r:'cerca', n:'L\'archè', d:'principio',
          f:[{r:'cioè', n:'Origine di tutto', d:'da dove viene'},
             {r:'e', n:'Sostanza permanente', d:'che cosa resta sotto i cambiamenti'},
             {r:'e', n:'Legge del divenire', d:'secondo quale regola cambia'},
             {piu:true, r:'la parola', n:'La introduce Anassimandro', d:'lo riferisce Teofrasto'}]},
         {r:'presuppone', n:'Unità sotto il molteplice', d:'le mille cose sono modi di una sola'},
         {r:'studia la', n:'Phýsis', d:'la natura come ciò che cresce da sé',
          f:[{piu:true, r:'non', n:'Natura come oggetto', d:'phýein è un verbo: è un processo, non una cosa'}]},
         {r:'produce il', n:'Naturalismo', d:'la spiegazione non chiama in causa gli dèi',
          f:[{piu:true, r:'ma non è', n:'Ateismo', d:'gli dèi restano: smettono di spiegare'}]},
         {r:'resta', n:'Ilozoismo', d:'la materia è viva: non c\'è ancora spirito contro materia',
          f:[{piu:true, r:'esempio', n:'La calamita ha un\'anima', d:'lo dice Talete, secondo Aristotele'}]}
       ]},

      {r:'comincia con', n:'Talete di Mileto', d:'circa 624–546 a.C.',
       f:[
         {r:'pone come archè', n:'L\'acqua',
          f:[{r:'perché', n:'Ogni nutrimento è umido', d:'semi, sperma, linfa: la vita è bagnata'},
             {r:'perché', n:'L\'acqua ha tutti gli stati', d:'ghiaccio, liquido, vapore'},
             {piu:true, r:'forse', n:'Un\'eco di Oceano', d:'lo sospetta Aristotele: il mito riscritto in prosa'}]},
         {r:'ne deduce', n:'La Terra galleggia sull\'acqua', d:'e i terremoti sono onde'},
         {r:'prevede', n:'L\'eclissi del 585 a.C.', d:'calcolata, non profetizzata',
          f:[{r:'prova che', n:'La natura ha regole prevedibili'},
             {piu:true, r:'il 28 maggio', n:'Ferma una battaglia', d:'Medi e Lidi al fiume Halys: Erodoto I 74'}]},
         {r:'misura', n:'L\'altezza delle piramidi', d:'con l\'ombra e la proporzione',
          f:[{piu:true, r:'come', n:'Quando l\'ombra è lunga quanto l\'uomo', d:'allora lo è anche quella della piramide'}]},
         {r:'afferma', n:'«Tutto è pieno di dèi»', d:'divino non è una persona: è la vita della materia'},
         {r:'su di lui', n:'Due aneddoti opposti', d:'e dicono il contrario',
          f:[{r:'uno', n:'I frantoi', d:'si arricchisce per dimostrare che potrebbe',
              f:[{piu:true, r:'in', n:'Aristotele, Politica I 11'}]},
             {r:'l\'altro', n:'Il pozzo', d:'cade guardando il cielo, la serva tracia ride',
              f:[{piu:true, r:'in', n:'Platone, Teeteto 174a'}]}]},
         {piu:true, r:'e però', n:'Forse non scrisse mai nulla', d:'di lui restano solo testimonianze'}
       ]},

      {r:'si radicalizza in', n:'Anassimandro', d:'circa 610–546 a.C.',
       f:[
         {r:'pone come archè', n:'L\'ápeiron', d:'l\'illimitato-indeterminato',
          f:[{r:'perché', n:'Un elemento determinato prevarrebbe', d:'l\'acqua asciugherebbe il fuoco'},
             {r:'quindi è', n:'Senza qualità e senza confini', d:'per poter generare tutti gli opposti'},
             {r:'ed è', n:'Immortale e ingenerato'},
             {piu:true, r:'alla lettera', n:'A-peras: senza limite', d:'né spaziale né qualitativo'}]},
         {r:'da esso', n:'Si separano i contrari', d:'caldo-freddo, secco-umido'},
         {r:'regolati da', n:'Ingiustizia e pena', d:'ogni eccesso viene pagato secondo l\'ordine del tempo',
          f:[{r:'usa', n:'Il linguaggio del diritto', d:'la prima «legge di natura» è presa dal tribunale'},
             {piu:true, r:'conservato da', n:'Simplicio', d:'nel commento alla Fisica, mille anni dopo'}]},
         {r:'sostiene', n:'La Terra sta ferma senza appoggi',
          f:[{r:'perché', n:'È equidistante da tutto', d:'non ha ragione di andare in una direzione'},
             {r:'è già', n:'Principio di ragion sufficiente', d:'in embrione, duemila anni prima'},
             {piu:true, r:'riferito da', n:'Aristotele, Sul cielo 295b'},
             {piu:true, r:'per Popper', n:'L\'idea più audace mai avuta', d:'in Congetture e confutazioni'}]},
         {r:'la descrive come', n:'Cilindro di pietra', d:'alto un terzo della larghezza; viviamo su una faccia'},
         {r:'ipotizza', n:'Gli uomini nati dentro i pesci',
          f:[{r:'perché', n:'Un neonato non sopravvive solo', d:'quindi i primi uomini furono allevati da altro'},
             {piu:true, r:'riferito da', n:'Censorino e Plutarco', d:'De die natali IV; Quaestiones convivales VIII 8'}]},
         {r:'disegna', n:'La prima carta della Terra', d:'e introduce la meridiana in Grecia',
          f:[{piu:true, r:'con lo', n:'Gnomone', d:'l\'asta che proietta l\'ombra, presa dai Babilonesi'}]},
         {piu:true, r:'immagina anche', n:'Mondi innumerevoli', d:'che nascono e periscono, uno dopo l\'altro'}
       ]},

      {r:'corregge con', n:'Anassimene', d:'circa 586–528 a.C.',
       f:[
         {r:'pone come archè', n:'L\'aria', d:'torna a un elemento determinato — ma con un guadagno',
          f:[{piu:true, r:'perché', n:'Invisibile eppure c\'è', d:'la senti quando si muove: è il modello del principio'}]},
         {r:'spiega il come con', n:'Rarefazione e condensazione', d:'la prima legge quantitativa della storia',
          f:[{r:'rarefatta dà', n:'Fuoco'},
             {r:'condensata dà', n:'Vento, nube, acqua, terra, pietra', d:'una scala continua'},
             {piu:true, r:'lo prova col', n:'Fiato', d:'a bocca stretta esce freddo, a bocca larga caldo'}]},
         {r:'ne ricava', n:'La differenza è di quantità', d:'non ci sono sostanze diverse: c\'è più o meno densità'},
         {r:'applica all\'uomo', n:'L\'anima è soffio', d:'pneuma: ci tiene insieme come l\'aria tiene il mondo',
          f:[{r:'stabilisce', n:'Microcosmo e macrocosmo', d:'l\'uomo è fatto con la stessa legge del cosmo'},
             {piu:true, r:'nel', n:'Frammento 2', d:'di autenticità discussa, ma citatissimo'}]}
       ]},

      {r:'si rovescia in', n:'Eraclito di Efeso', d:'circa 535–475 a.C.',
       f:[
         {r:'afferma', n:'Pánta rhêi', d:'tutto scorre',
          f:[{r:'immagine', n:'Il fiume', d:'non ci si bagna due volte nella stessa acqua'},
             {r:'estremizzato da', n:'Cratilo', d:'nemmeno una volta: e smise di parlare'},
             {piu:true, r:'però', n:'La formula è di Platone', d:'Eraclito non la scrive mai così'}]},
         {r:'sceglie come archè', n:'Il fuoco', d:'l\'unico elemento che è solo trasformazione',
          f:[{piu:true, r:'nel', n:'Frammento 30', d:'«questo cosmo… fuoco sempre vivente, che si accende e si spegne con misura»'}]},
         {r:'sostiene', n:'Pólemos padre di tutte le cose', d:'il conflitto genera, non distrugge',
          f:[{r:'produce', n:'Armonia dei contrari', d:'come l\'arco e la lira: tensioni opposte che tengono'},
             {r:'implica', n:'L\'unità degli opposti', d:'la via in su e la via in giù sono la stessa'},
             {piu:true, r:'nel', n:'Frammento 53', d:'«di tutte le cose è padre, di tutte re»'}]},
         {r:'sotto tutto c\'è', n:'Il lógos', d:'la legge comune che governa il divenire',
          f:[{r:'ma', n:'I più vivono come dormendo', d:'ciascuno chiuso nel proprio mondo privato'},
             {piu:true, r:'nel', n:'Frammento 1', d:'«di questo lógos che è sempre, gli uomini non hanno intendimento»'}]},
         {piu:true, r:'lo chiamavano', n:'L\'oscuro', d:'e depose il suo libro nel tempio di Artemide'}
       ]},

      {r:'culmina in', n:'Gli atomisti', d:'Leucippo e Democrito, V secolo a.C.',
       f:[
         {r:'rispondono a', n:'Il problema di Parmenide', d:'come salvare il movimento senza negare l\'essere'},
         {r:'ammettono', n:'Gli atomi', d:'pieni, indivisibili, ingenerati, eterni, invisibili',
          f:[{r:'differiscono per', n:'Forma, ordine, posizione', d:'come le lettere dell\'alfabeto'},
             {r:'sono', n:'Infiniti di numero'},
             {piu:true, r:'alla lettera', n:'Á-tomos: che non si taglia'},
             {piu:true, r:'l\'esempio è', n:'A e N, AN e NA, Z e N', d:'forma, ordine, posizione: tre modi di differire'}]},
         {r:'ammettono anche', n:'Il vuoto', d:'cioè: il non-essere esiste',
          f:[{r:'serve per', n:'Rendere possibile il moto', d:'senza spazio vuoto niente si sposta'},
             {piu:true, r:'formula', n:'«Il nulla non è meno dell\'essere»'}]},
         {r:'governati da', n:'Necessità meccanica', d:'anánke: solo urti, nessun fine',
          f:[{r:'niente', n:'Nessuna causa finale', d:'la natura non vuole niente'},
             {r:'formano', n:'Il vortice', d:'dínos: gli atomi simili si aggregano'},
             {r:'producono', n:'Mondi infiniti', d:'nascono e muoiono, senza centro né progetto'}]},
         {r:'spiegano così', n:'L\'anima', d:'atomi lisci e sferici, i più mobili: si disperde con la morte',
          f:[{piu:true, r:'come', n:'Gli stessi del fuoco', d:'e per questo il caldo è vita'}]},
         {r:'spiegano così', n:'La percezione', d:'eídola: pellicole di atomi che si staccano dalle cose',
          f:[{piu:true, r:'spiega anche', n:'Sogni e visioni', d:'eídola che arrivano di notte'}]},
         {r:'concludono', n:'Le qualità sono convenzione', d:'«per convenzione dolce, in verità atomi e vuoto»',
          f:[{r:'distinguono', n:'Conoscenza oscura e genuina', d:'i sensi ingannano, la ragione vede l\'invisibile'},
             {piu:true, r:'nel', n:'Frammento 9'}]},
         {r:'in etica', n:'Euthymía', d:'il buon umore: misura e distacco, non piacere',
          f:[{piu:true, r:'da cui', n:'«Il filosofo che ride»', d:'contrapposto a Eraclito che piange'}]},
         {piu:true, r:'di Leucippo', n:'Si dubitò perfino che esistesse', d:'lo negava Epicuro'}
       ]},

      {r:'lascia in eredità', n:'Che cosa resta', d:'non le risposte: le mosse',
       f:[
         {r:'prima di tutto', n:'Spiegare, non raccontare', d:'una spiegazione vale se si può discutere'},
         {r:'poi', n:'Il riduzionismo materialista', d:'il complesso si spiega col semplice',
          f:[{piu:true, r:'arriverà a Roma con', n:'Lucrezio', d:'il De rerum natura è atomismo in versi'}]},
         {r:'poi', n:'La regolarità della natura', d:'leggi al posto di volontà divine'},
         {r:'e', n:'Il dubbio sui sensi', d:'il vero può non somigliare all\'apparenza',
          f:[{piu:true, r:'diventerà', n:'Qualità primarie e secondarie', d:'in Galileo, poi in Locke'}]}
       ]}
    ],
    incroci:[
      {da:'L\'ápeiron', a:'L\'acqua', r:'supera',
       perche:'L\'acqua di Talete è già una delle cose che dovrebbe spiegare: se il principio fosse acqua, l\'umido avrebbe vinto su tutto da tempo. Anassimandro toglie al principio ogni qualità proprio per non doverlo scegliere fra le cose.'},
      {da:'Rarefazione e condensazione', a:'L\'ápeiron', r:'risponde al problema lasciato aperto',
       perche:'Anassimandro aveva detto da che cosa vengono le cose, non come. Anassimene rinuncia all\'indeterminato e ci guadagna un meccanismo: un solo elemento, più o meno denso, spiega tutti i passaggi.'},
      {da:'Il vuoto', a:'Il problema di Parmenide', r:'è la mossa decisiva contro',
       perche:'Parmenide aveva dimostrato che il non essere non si pensa, e quindi che il moto è impossibile. Gli atomisti accettano la logica e rifiutano una premessa: il vuoto è non essere, e c\'è.'},
      {da:'Le qualità sono convenzione', a:'Il dubbio sui sensi', r:'fonda',
       perche:'Se dolce e amaro sono nomi dati a certi urti di atomi, i sensi non ci mostrano le cose ma i nostri effetti. Da qui il sospetto che accompagnerà tutta la scienza.'},
      {da:'Ingiustizia e pena', a:'Pólemos padre di tutte le cose', r:'stesso ordine per conflitto',
       perche:'Due immagini per la stessa intuizione: l\'ordine non è quiete, è equilibrio fra forze contrarie che si contendono il campo. In Anassimandro l\'eccesso viene pagato, in Eraclito il conflitto è la vita stessa.'},
      {da:'È equidistante da tutto', a:'Principio di ragion sufficiente', r:'diventerà',
       perche:'«Non c\'è ragione di andare in una direzione piuttosto che in un\'altra»: è la prima volta che un fatto fisico si spiega con l\'assenza di un motivo. Leibniz ne farà un principio universale.'},
      {da:'L\'eclissi del 585 a.C.', a:'La regolarità della natura', r:'prima prova di',
       perche:'Prevedere è più che spiegare: una previsione che si avvera mostra che la natura ripete sé stessa. Da quel giorno il cielo smette di essere un messaggio e diventa un meccanismo.'},
      {da:'L\'anima è soffio', a:'L\'anima', r:'sarà smontata da',
       perche:'Anassimene fa dell\'anima un soffio che tiene insieme; gli atomisti la fanno di particelle lisce che si disperdono alla morte. Stessa domanda, due risposte — e la seconda toglie l\'immortalità.'},
      {da:'Necessità meccanica', a:'Il riduzionismo materialista', r:'apre la strada a',
       perche:'Se bastano urti e non serve nessun fine, allora spiegare vuol dire scomporre. È il programma che la scienza moderna riprenderà pari pari.'},
      {da:'Nessuna casta sacerdotale', a:'Naturalismo', r:'rende possibile',
       perche:'Dove c\'è un clero che custodisce le risposte, contraddirle costa. A Mileto non c\'è nessuno a cui chiedere il permesso: la spiegazione naturale non è un\'eresia, è un\'altra proposta.'},
      {da:'Il ragionamento diventa pubblico', a:'Spiegare, non raccontare', r:'è la radice di',
       perche:'In assemblea non basta affermare: bisogna dare ragioni che gli altri possano attaccare. La filosofia nasce come quel modo di parlare, portato dalle cose della città alle cose del mondo.'},
      {da:'Il fuoco', a:'Pánta rhêi', r:'è il simbolo di',
       perche:'La fiamma sembra una cosa e invece è un processo: resta la stessa proprio perché cambia in continuazione. È il divenire reso visibile a occhio nudo.'},
      {da:'Isonomía', a:'È equidistante da tutto', r:'la stessa forma nel cosmo',
       perche:'Nella pólis nessuno sta al centro e tutti sono a uguale distanza dalla legge. Anassimandro descrive un universo fatto così, e Vernant ha mostrato che non è una coincidenza.'},
      {da:'La calamita ha un\'anima', a:'L\'anima è soffio', r:'stesso ilozoismo in',
       perche:'Per gli Ionici la materia non è inerte: se una pietra muove il ferro, è viva. La stessa idea, in Anassimene, diventa il soffio che tiene insieme l\'uomo e il mondo.'}
    ]
  },

  provocazione: {
    titolo:'Che cosa tiene su la Terra?',
    durata:'55 minuti',
    domandaMadre:'Perché la Terra non cade?',
    perche:'È la domanda che fa vedere in atto la nascita della filosofia, invece di raccontarla. La classe scopre da sola il regresso all\'infinito (che cosa regge la tartaruga?), poi scopre che «cade» non vuol dire niente se non c\'è un sotto, e a quel punto la risposta di Anassimandro non è una curiosità antica: è l\'unica uscita che loro stessi stavano cercando. E si porta dietro l\'idea che regge tutto il capitolo — che il mondo si spieghi da sé.',
    occorrente:'Un sasso o una gomma da lanciare.',
    tempi:[
      {minuti:'0–6', et:'L\'aggancio',
       schermo:'Sotto il pavimento c\'è il cemento.\nSotto il cemento, la terra.\nSotto la terra, la roccia.\nSotto la roccia — dopo seimila chilometri — si esce dall\'altra parte.\n\nE poi non c\'è più niente.\nPer miliardi di chilometri.\n\nPerché non state cadendo?',
       parlato:'Falla lenta, scendendo un piano per volta, e battendo il piede a ogni passaggio. Quando arrivi a «non c\'è più niente», fermati per qualche secondo prima di fare la domanda.\n\nPoi la regola, e va detta con durezza: per quest\'ora è vietata la parola «gravità». Vietata anche «attrazione», «massa», «Newton». Chi la usa perde il turno.\n\nSe protestano — e protesteranno — la giustificazione è questa: per duemilacinquecento anni quella parola non ce l\'ha avuta nessuno, e la domanda se la sono posta lo stesso. Voglio vedere se sapete fare quello che hanno fatto loro.',
       seDicono:[
         {loro:'«Per la gravità.»',
          tu:'Hai perso il turno. E comunque: la gravità è una parola. Che cosa dice, esattamente? Che i corpi si attraggono. Va bene: e allora la Terra dovrebbe cadere verso il Sole, che è centomila volte più massiccio. Perché non ci cade dentro?'},
         {loro:'«Perché gira.»',
          tu:'Buona — tienila da parte, ci arriviamo alla fine. Ma per ora: girare intorno a che cosa? E chi glielo ha detto di girare?'},
         {loro:'«La domanda non ha senso, nello spazio non c\'è sopra e sotto.»',
          tu:'Questa è la risposta migliore che potessi ricevere, ed è arrivata troppo presto. Non dirlo. Rispondi: «segnatela, la usiamo fra venti minuti» — e fattela ripetere alla fine da chi l\'ha detta.'}
       ]},

      {minuti:'6–16', et:'Le risposte di tutti gli altri',
       schermo:'Egitto — la Terra galleggia sull\'oceano primordiale, il Nun.\nIndia — poggia su quattro elefanti, che stanno su una tartaruga.\nBibbia — «Egli scuote la terra dal suo luogo e le sue colonne tremano.» (Giobbe 9,6)\nGrecia — Atlante la regge sulle spalle.\nTalete di Mileto — galleggia sull\'acqua, come un pezzo di legno.\n\nTutti, per tremila anni, hanno risposto mettendoci qualcosa sotto.',
       parlato:'Leggili uno per uno, senza commentarli, lasciando qualche secondo fra l\'uno e l\'altro: l\'oceano, gli elefanti, le colonne, Atlante, il legno che galleggia. Devono sentire l\'elenco crescere.\n\nPoi fai notare che Talete — il primo filosofo, quello che sta sui libri come l\'inizio di tutto — dà la stessa identica risposta degli altri: qualcosa sotto. Solo che al posto degli elefanti mette l\'acqua.\n\nE adesso la domanda che rompe l\'elenco, ripetuta riga per riga:\ne l\'oceano su che cosa sta? e la tartaruga? e le colonne? e Atlante, i piedi dove li appoggia?\n\nAspetta che qualcuno dica «un\'altra tartaruga». Ride sempre qualcuno. E allora la domanda diventa: e quella?',
       seDicono:[
         {loro:'«Alla fine c\'è Dio, e Dio non ha bisogno di appoggi.»',
          tu:'Ottima obiezione, e onesta. Ma allora hai fermato la catena con una cosa che per definizione non si spiega. È esattamente quello che gli Ionici hanno smesso di fare. Non perché fossero atei: perché volevano una spiegazione che si potesse discutere.'},
         {loro:'«Le tartarughe sono infinite, e va bene così.»',
          tu:'Allora prova a dirmi che cosa hai spiegato. Se ogni risposta ne chiede un\'altra all\'infinito, la prima domanda è ancora lì, intatta.'}
       ]},

      {minuti:'16–24', et:'Lo schieramento',
       schermo:'C\'è qualcosa che tiene su la Terra?',
       opzioni:['Sì: sotto c\'è qualcosa', 'No: sotto non c\'è niente'],
       parlato:'Conta le mani e tieni a mente i due numeri: alla fine dell\'ora ci torni. Chiedi a due per parte una frase sola di motivazione.\n\nPoi vai a colpire il gruppo del «no», che si sente al sicuro perché sa come è fatto il sistema solare:\n\n«Voi dite che sotto non c\'è niente. Benissimo. Allora perché non cade?»\n\nSe rispondono «perché non c\'è un sotto», sei arrivato dove volevi — ma falli lavorare ancora un minuto prima di concederglielo.',
       seDicono:[
         {loro:'«Non cade perché non c\'è niente verso cui cadere.»',
          tu:'Fermali tutti. Fai ripetere la frase. Poi: indicate il basso. Indicano il pavimento. E adesso — uno in Australia, in questo momento, dove sta indicando? Nella direzione opposta alla vostra. Quindi il basso non è un posto: è una direzione che dipende da dove sei.'},
         {loro:'«Cade, ma cade verso il Sole, e per questo gira.»',
          tu:'È la risposta di Newton e non è vietata, è solo fuori tempo massimo di duemila anni. Chiedi: e il Sole, verso che cosa cade? Il regresso torna, solo travestito.'}
       ]},

      {minuti:'24–34', et:'Il testo',
       schermo:'Anassimandro di Mileto, circa 2600 anni fa.\n\n«Ciò che è collocato al centro e si trova in relazione uguale rispetto agli estremi non ha alcun motivo di muoversi in alto piuttosto che in basso o lateralmente;\n\ned essendo impossibile che si muova in direzioni opposte nello stesso tempo, resta necessariamente fermo.»',
       testo:{fonte:'Aristotele, Sul cielo, II 13, 295b (che riporta Anassimandro)',
              glossa:'Non è una descrizione: è una dimostrazione. Il ragionamento non dice «l\'ho visto», dice «non può essere altrimenti, perché non c\'è ragione».'},
       parlato:'Leggilo due volte, la seconda lentissima.\n\nPoi smonta l\'argomento davanti a loro, pezzo per pezzo:\nla Terra è al centro;\nal centro, tutte le direzioni sono uguali;\nper muoversi in una direzione ci vuole un motivo per preferirla;\nnon c\'è nessun motivo;\nquindi sta ferma.\n\nNon c\'è nessun elefante, nessun oceano, nessun dio. C\'è un ragionamento. È la prima volta nella storia che qualcuno risponde a una domanda fisica senza guardare il cielo e senza raccontare una storia — e ha ragione, per il motivo giusto, con gli strumenti sbagliati.\n\nQui puoi dire la frase di Popper, che fa sempre effetto perché viene da un filosofo del Novecento: «una delle idee più coraggiose, più rivoluzionarie e più portentose di tutta la storia del pensiero umano».',
       seDicono:[
         {loro:'«Ma la Terra non è al centro dell\'universo.»',
          tu:'Verissimo. E allora l\'argomento cade? No: cade la premessa, non il ragionamento. Se qualcosa è in equilibrio simmetrico, non ha ragione di muoversi. Questo principio è ancora oggi in fisica, si chiama principio di ragion sufficiente ed è vivo e vegeto.'},
         {loro:'«Ci ha azzeccato per caso.»',
          tu:'Tienila. È l\'obiezione di cui hai bisogno fra dieci minuti, quando scopriranno il cilindro.'}
       ]},

      {minuti:'34–44', et:'Il colpo di scena',
       schermo:'Lo stesso uomo sosteneva anche:\n\nche la Terra è un cilindro di pietra, alto un terzo della sua larghezza, e che noi viviamo su una delle due facce piatte;\n\nche i primi uomini si sono formati dentro dei pesci, e ne sono usciti quando sono stati capaci di nutrirsi da soli.',
       testo:{fonte:'Censorino e Plutarco, che riportano Anassimandro (VI secolo a.C.)',
              glossa:'La seconda tesi nasce da un\'osservazione precisa: un neonato umano non sopravvive da solo, e quindi i primi uomini non possono essere nati come nascono adesso. Serve qualcuno che li abbia allevati. Se non ci sono altri uomini, dev\'essere un animale.'},
       parlato:'Dai prima il cilindro, e lascia che ridano. Poi la domanda seria: essere ridicolo sul risultato lo rende meno scienziato del metodo?\n\nPoi dai i pesci, e questa volta non lasciare che ridano: fai vedere l\'argomento. Un neonato non sta in piedi da solo, non mangia da solo, non sopravvive una settimana. Quindi il primo uomo non può essere venuto al mondo come venite al mondo voi. Qualcuno deve averlo allevato. E se ancora non c\'erano uomini?\n\nDuemilaquattrocento anni prima di Darwin, senza fossili, senza microscopio, per pura deduzione, uno scrive che veniamo dall\'acqua e da un altro animale.\n\nSbagliato nei dettagli. Giusto nella forma della domanda.',
       seDicono:[
         {loro:'«Allora aveva ragione, sapeva dell\'evoluzione!»',
          tu:'No, e questo è importante: non sapeva niente dell\'evoluzione. Non c\'è selezione, non c\'è variazione, non ci sono specie che cambiano. C\'è un ragionamento su come possa essere cominciata la specie umana. Attribuirgli Darwin è il modo più veloce per non capire né lui né Darwin.'},
         {loro:'«Se ha sbagliato tutto, perché lo studiamo?»',
          tu:'Perché in filosofia e in scienza non si eredita il risultato: si eredita la mossa. La mossa di Anassimandro — rispondere con una ragione invece che con un racconto — la state usando anche voi da mezz\'ora.'}
       ]},

      {minuti:'44–55', et:'Il ritorno',
       schermo:'Torniamo all\'inizio.\n\nVoi avete risposto: «la gravità».\n\nNewton scoprì la legge che la descrive, e poi scrisse che non aveva la minima idea di che cosa la gravità fosse — e che non intendeva inventarsi ipotesi.\n\nAllora la domanda vera è questa:\n\nsiete sicuri di aver spiegato qualcosa,\no avete solo una parola più bella per dire\n«non c\'è ragione perché si muova»?',
       parlato:'Torna ai due numeri di prima e rileggili ad alta voce: quanti dicevano una cosa e quanti l\'altra.\n\nPoi chiudi così: la filosofia non nasce quando qualcuno trova la risposta giusta. Nasce quando qualcuno smette di rispondere «chi» e comincia a rispondere «perché». Talete sbaglia, Anassimandro sbaglia, Anassimene sbaglia, gli atomisti azzeccano quasi tutto per motivi sbagliati.\n\nQuello che hanno inventato non è nessuna delle loro risposte. È la regola: una spiegazione vale solo se si può discutere.\n\nNon dare la conclusione come una morale. Falla cadere e lascia il silenzio.',
       seDicono:[
         {loro:'«Quindi la scienza non spiega niente?»',
          tu:'Non è questo. Spiega moltissimo: prevede le eclissi, manda le sonde su Marte. Ma spiegare vuol dire ricondurre una cosa a un\'altra, e a un certo punto la catena finisce. Il punto non è che la scienza sia vuota: è che sapere dove finisce la spiegazione è già filosofia.'}
       ]}
    ],
    riserve:[
      {titolo:'Il filosofo ricco e il filosofo nel pozzo',
       corpo:'Aristotele racconta che Talete, stanco di sentirsi dire che la filosofia non serve a niente, previde con l\'astronomia un raccolto di olive abbondante, affittò d\'inverno a poco prezzo tutti i frantoi di Mileto e di Chio, e alla vendemmia li subaffittò al prezzo che volle. Diventò ricco in una stagione, per dimostrare che avrebbe potuto farlo quando voleva.\n\nPlatone racconta che lo stesso Talete, mentre camminava guardando le stelle, cadde in un pozzo, e una serva della Tracia gli rise dietro dicendo che voleva sapere le cose del cielo e non vedeva quelle che aveva sotto i piedi.',
       chiedi:'Due storie sullo stesso uomo, e dicono il contrario. A quale credete? E soprattutto: chi ha interesse a raccontare l\'una e chi l\'altra?'},
      {titolo:'Democrito: il colore non esiste',
       corpo:'«Per convenzione dolce, per convenzione amaro, per convenzione caldo, per convenzione freddo, per convenzione colore: in verità atomi e vuoto.» (Democrito, fr. 9)\n\nSe esistono solo atomi e vuoto, il rosso non è nella mela: la mela ha atomi di una certa forma, che colpiscono l\'occhio in un certo modo.',
       chiedi:'Se il colore non è nella mela e non è nell\'occhio da solo, dov\'è? E se stanotte sparissero tutti gli occhi del mondo, il rosso dove andrebbe?'},
      {titolo:'Eraclito e il fiume',
       corpo:'«Non si può scendere due volte nello stesso fiume»: l\'acqua che tocchi adesso è già a valle.\n\nIl suo allievo Cratilo portò la cosa fino in fondo e disse che non ci si può scendere nemmeno una volta — e che, siccome tutto cambia mentre parli, smise di parlare e si limitava a muovere un dito.',
       chiedi:'Cratilo ha esagerato o ha solo avuto il coraggio di dire la conseguenza? E se ha ragione, come facciamo a chiamarvi ancora con il vostro nome dell\'anno scorso?'}
    ],
    testi:[
      {fonte:'Anassimandro, unico frammento conservato (DK 12 B1, in Simplicio)',
       corpo:'«Principio degli esseri è l\'infinito… Da dove gli esseri hanno origine, là hanno anche la loro distruzione secondo necessità: poiché essi pagano l\'uno all\'altro la pena e l\'espiazione dell\'ingiustizia secondo l\'ordine del tempo.»',
       glossa:'Nove parole di fisica e una di tribunale. Il mondo è descritto come un processo in cui ogni eccesso viene pagato: l\'estate paga all\'inverno, il caldo al freddo. È il primo modo che l\'Occidente trova per dire «legge di natura», e lo prende dal diritto.'},
      {fonte:'Democrito, fr. 125',
       corpo:'«Misera mente, prendi da noi le prove e credi di batterci? La tua vittoria è la tua sconfitta.»',
       glossa:'È la ragione che parla ai sensi. Se neghi i sensi in nome della ragione, ricordati che i dati con cui ragioni te li hanno dati i sensi.'}
    ],
    compito:'Mezza pagina: trovate una cosa che vi sembra di saper spiegare e provate a spiegarla senza usare la parola con cui la chiamate. (Esempi: la febbre, il vento, la noia, l\'abitudine.) Portate il punto in cui vi siete bloccati — è quello che ci interessa.',
    fonti:[
      'Aristotele, Sul cielo II 13, 295b — la Terra immobile per equidistanza',
      'Aristotele, Politica I 11 — i frantoi di Talete',
      'Platone, Teeteto 174a — il pozzo e la serva tracia',
      'Censorino, De die natali IV; Plutarco, Quaestiones convivales VIII 8 — gli uomini nati nei pesci',
      'K. Popper, Congetture e confutazioni — il giudizio su Anassimandro',
      'Diels-Kranz 12 B1 (Anassimandro), 68 B9 e B125 (Democrito)'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia antica · 2 — Parmenide e la filosofia eleatica': {
  mappa: {
    n:'La scuola di Elea', d:'quando il pensiero contraddice i sensi',
    f:[
      {r:'preparata da', n:'Senofane di Colofone', d:'circa 570–475 a.C., poeta girovago',
       f:[
         {r:'attacca', n:'L\'antropomorfismo religioso',
          f:[{r:'con', n:'I buoi e i cavalli', d:'se avessero mani, disegnerebbero dèi a forma di bue'},
             {r:'con', n:'Etiopi e Traci', d:'neri e camusi gli uni, biondi e con gli occhi azzurri gli altri'},
             {r:'contro', n:'Omero ed Esiodo', d:'attribuiscono agli dèi furti, adultèri, inganni'}]},
         {r:'propone', n:'Un dio solo', d:'non simile ai mortali né nel corpo né nel pensiero',
          f:[{r:'che', n:'Tutto intero vede e pensa e ode'},
             {r:'e', n:'Resta sempre nello stesso luogo', d:'muove tutto col pensiero, senza muoversi'}]},
         {r:'ammette', n:'Il sapere umano è congettura', d:'nessuno ha visto e nessuno vedrà il vero con certezza'},
         {r:'osserva', n:'I fossili marini sui monti', d:'conchiglie a Siracusa e a Malta: qui c\'era il mare'}
       ]},

      {r:'si annuncia nel', n:'Poema di Parmenide', d:'Elea, prima metà del V secolo a.C.',
       f:[
         {r:'si apre col', n:'Proemio', d:'il viaggio del giovane verso la dea',
          f:[{r:'su', n:'Un carro tirato da cavalle'},
             {r:'guidato dalle', n:'Figlie del Sole', d:'che lasciano le case della Notte'},
             {r:'oltre le', n:'Porte del Giorno e della Notte', d:'aperte da Dike, la Giustizia'}]},
         {r:'dove parla', n:'La dea', d:'la verità è rivelata, ma poi va dimostrata'},
         {r:'scritto in', n:'Esametri', d:'la forma dell\'oracolo per un contenuto che è una prova',
          f:[{r:'segna', n:'Uno strappo di stile', d:'il linguaggio è antico, il modo di argomentare no'}]}
       ]},

      {r:'espone', n:'Le tre vie', d:'e solo una si può percorrere',
       f:[
         {r:'la prima', n:'La via dell\'essere', d:'«è, e non è possibile che non sia»',
          f:[{r:'perché', n:'È la sola pensabile', d:'e la sola dicibile'}]},
         {r:'la seconda', n:'La via del non essere', d:'«non è, ed è necessario che non sia»',
          f:[{r:'è', n:'Sentiero del tutto inconoscibile', d:'il nulla non si pensa e non si dice'}]},
         {r:'la terza', n:'La via dei mortali', d:'«è e non è»: la via in cui vivono tutti',
          f:[{r:'popolata da', n:'Uomini bicipiti', d:'sordi e ciechi, che vanno avanti e indietro'}]},
         {r:'poggia su', n:'Pensare ed essere sono lo stesso', d:'non si può pensare ciò che non è'},
         {r:'anticipa', n:'La non contraddizione, in nuce', d:'ottant\'anni prima di Aristotele'}
       ]},

      {r:'deduce', n:'Gli attributi dell\'essere', d:'frammento 8: non descritti, dimostrati',
       f:[
         {r:'è', n:'Ingenerato', d:'da che cosa nascerebbe? solo dal non essere, che non c\'è'},
         {r:'è', n:'Imperituro', d:'in che cosa finirebbe?'},
         {r:'è', n:'Immobile', d:'per muoversi servirebbe uno spazio vuoto, cioè non essere'},
         {r:'è', n:'Uno e continuo', d:'per dividerlo servirebbe qualcosa che non è essere'},
         {r:'è', n:'Tutto insieme adesso', d:'né era né sarà: il tempo è un\'illusione dei mortali'},
         {r:'è', n:'Simile a una sfera ben rotonda', d:'uguale a sé da ogni parte, compiuto'},
         {r:'quindi è', n:'Immutabile', d:'nascita e morte sono nomi che i mortali hanno posto'}
       ]},

      {r:'poi concede', n:'La via dell\'opinione', d:'la doxa',
       f:[
         {r:'descrive', n:'Il mondo dei sensi', d:'dove le cose nascono, cambiano, muoiono'},
         {r:'fondato su', n:'Luce e Notte', d:'le due forme che i mortali hanno deciso di nominare'},
         {r:'ma', n:'Sbagliano nel porne due', d:'bastava una: da qui nasce tutto l\'errore'},
         {r:'perché la dea la espone', n:'Per non farti ingannare', d:'conoscere l\'errore fa parte del sapere'},
         {r:'apre', n:'La frattura verità-apparenza', d:'il primo dualismo dell\'Occidente'}
       ]},

      {r:'difeso da', n:'Zenone di Elea', d:'circa 489–431 a.C., allievo di Parmenide',
       f:[
         {r:'usa', n:'La riduzione all\'assurdo', d:'non prova la tesi: distrugge quella contraria',
          f:[{r:'per questo', n:'«Inventore della dialettica»', d:'lo dice Aristotele'},
             {r:'quindi non dice', n:'Il movimento non esiste', d:'dice: se credete ai sensi, cadete nell\'assurdo'}]},
         {r:'contro il moto', n:'La dicotomia', d:'per arrivare devi prima fare metà, e prima metà di quella'},
         {r:'contro il moto', n:'Achille e la tartaruga', d:'il più veloce non raggiunge il più lento a cui ha dato un vantaggio'},
         {r:'contro il moto', n:'La freccia', d:'in ogni istante occupa uno spazio uguale a sé, cioè è ferma'},
         {r:'contro il moto', n:'Lo stadio', d:'la stessa durata risulta doppia di sé stessa'},
         {r:'contro il molteplice', n:'Grandezza e numero', d:'se le cose sono molte, sono insieme infinite e finite'},
         {r:'il nodo vero', n:'Infinito in atto o in potenza', d:'e sarà la risposta di Aristotele'}
       ]},

      {r:'corretto da', n:'Melisso di Samo', d:'ammiraglio, batté la flotta ateniese nel 441 a.C.',
       f:[
         {r:'sostiene', n:'L\'essere è infinito', d:'e qui contraddice il maestro',
          f:[{r:'perché', n:'Se fosse finito confinerebbe col vuoto', d:'e il vuoto è non essere'}]},
         {r:'e quindi', n:'Incorporeo', d:'un corpo avrebbe spessore e parti'},
         {r:'aggiunge', n:'Se fosse molteplice', d:'ogni cosa dovrebbe essere come l\'uno: e allora è una sola'}
       ]},

      {r:'costringe a rispondere', n:'Che cosa cambia dopo', d:'nessuno potrà più ignorarlo',
       f:[
         {r:'nascono', n:'I fisici pluralisti', d:'Empedocle e Anassagora: elementi eterni che si mescolano'},
         {r:'la mossa decisiva', n:'Gli atomisti: il vuoto esiste', d:'ammettere il non essere per salvare il moto'},
         {r:'Platone compie', n:'Il parricidio', d:'nel Sofista: il non essere è diversità, non nulla'},
         {r:'Aristotele formula', n:'Il principio di non contraddizione', d:'come legge prima di ogni discorso'},
         {r:'e soprattutto', n:'La logica diventa autonoma', d:'un ragionamento vale anche contro l\'evidenza'}
       ]}
    ],
    incroci:[
      {da:'La dicotomia', a:'Immobile', r:'difende',
       perche:'Zenone non aggiunge niente alla tesi del maestro: mostra che chi la nega finisce nell\'assurdo. Se il moto genera contraddizioni, resta in piedi l\'essere immobile.'},
      {da:'Gli atomisti: il vuoto esiste', a:'La via del non essere', r:'la riapre',
       perche:'Parmenide l\'aveva sbarrata: il non essere non si pensa né si dice. Gli atomisti lo chiamano vuoto e gli danno cittadinanza — è l\'unico modo per far tornare il movimento.'},
      {da:'L\'essere è infinito', a:'Simile a una sfera ben rotonda', r:'contraddice',
       perche:'Per Parmenide l\'essere è compiuto, e compiuto vuol dire finito. Melisso obietta che un confine richiede qualcosa oltre — e oltre l\'essere ci sarebbe solo il nulla.'},
      {da:'La via dei mortali', a:'Il mondo dei sensi', r:'è la via in cui sta',
       perche:'«È e non è» non è l\'errore di pochi: è il modo in cui parliamo tutti, ogni volta che diciamo che una cosa nasce o finisce.'},
      {da:'La riduzione all\'assurdo', a:'La logica diventa autonoma', r:'inaugura',
       perche:'Per la prima volta si vince una discussione senza affermare niente di proprio: basta mostrare che l\'avversario si contraddice. Il ragionamento diventa uno strumento che funziona da solo.'},
      {da:'Il sapere umano è congettura', a:'La frattura verità-apparenza', r:'prepara',
       perche:'Senofane dice che nessuno vedrà mai il vero con certezza; Parmenide risponde che il vero c\'è ed è l\'apparenza a ingannare. Due reazioni opposte alla stessa scoperta.'},
      {da:'La freccia', a:'Tutto insieme adesso', r:'nega il tempo come',
       perche:'Se in ogni istante la freccia è ferma, il tempo non è fatto di istanti che scorrono. È lo stesso tempo che Parmenide toglie all\'essere: né era né sarà.'},
      {da:'La non contraddizione, in nuce', a:'Il principio di non contraddizione', r:'diventera\'',
       perche:'In Parmenide è un divieto sulla via da percorrere: non dire che una cosa è e non è. In Aristotele diventa la legge prima di ogni discorso possibile.'},
      {da:'Pensare ed essere sono lo stesso', a:'Un dio solo', r:'radicalizza',
       perche:'Senofane aveva già tolto a dio il corpo e il movimento. Parmenide toglie il resto: ciò che è non ha più bisogno del nome di dio, gli basta essere pensabile.'},
      {da:'Ingenerato', a:'La via del non essere', r:'dipende da',
       perche:'L\'essere non può nascere perché dovrebbe venire dal non essere, che non c\'è. Ogni attributo dell\'essere si regge su quel divieto.'},
      {da:'Il parricidio', a:'Uno e continuo', r:'smonta',
       perche:'Platone salva la molteplicità concedendo che il non essere sia diversità e non nulla. Così le cose possono essere molte senza che l\'essere si spezzi.'}
    ]
  },
  provocazione: {
    titolo:'Alzati e vieni a quella porta',
    durata:'55 minuti',
    domandaMadre:'Perché non riuscite a dire dov\'è l\'errore?',
    perche:'È la lezione in cui la classe scopre, addosso, che si può essere costretti da un ragionamento a negare una cosa che si vede. Nessuno dubita che alla porta ci si arrivi; nessuno riesce a dire dove il ragionamento si rompe. Quella distanza fra «lo so» e «so dimostrarlo» è esattamente ciò che Parmenide apre nella storia del pensiero, ed è il motivo per cui la logica nasce come strumento capace di andare contro l\'evidenza.',
    occorrente:'Nient\'altro che la porta dell\'aula e uno studente disposto ad alzarsi.',
    tempi:[
      {minuti:'0–7', et:'L\'aggancio',
       schermo:'Per arrivare alla porta devi prima farne metà.\n\nMa per fare metà, prima devi farne un quarto.\nE per fare un quarto, prima un ottavo.\nE prima ancora un sedicesimo.\n\nPrima di ogni primo passo ce n\'è uno più piccolo.\n\nQuindi non sei mai partito.',
       parlato:'Non anticipare niente. Chiedi a qualcuno di alzarsi e di andare alla porta. Lo fa, ci arriva, e a quel punto tu dici: «non ci sei arrivato».\n\nLascia che protesti. Poi metti giù il ragionamento un passo per volta, lentamente, aspettando dopo ogni riga.\n\nIl colpo non è il paradosso: è che il paradosso lo capiscono tutti. Non c\'è una parola difficile. Ognuno di loro può ricostruirlo da solo, ed è per questo che fa effetto — non possono liquidarlo come una stranezza da specialisti.\n\nChiudi con la richiesta, che è quella su cui si lavorerà per un\'ora: non vi chiedo se è vero. Vi chiedo di dirmi in quale punto preciso il ragionamento sbaglia.',
       seDicono:[
         {loro:'«Ma è ovvio che ci sono arrivato, l\'avete visto tutti.»',
          tu:'Certo. Nessuno lo mette in dubbio, nemmeno Zenone. La domanda non è se ci sei arrivato: è dove sbaglia il ragionamento che dice di no. Se non lo trovi, hai due cose vere che si contraddicono — ed è il problema, non io.'},
         {loro:'«I passi diventano sempre più piccoli, quindi si fanno in fretta.»',
          tu:'Più piccoli quanto vuoi, ma quanti sono? Infiniti. E la domanda è se si possa finire di fare una cosa che è infinita. Non se si faccia in fretta: se si finisca.'}
       ]},

      {minuti:'7–16', et:'Lo schieramento',
       schermo:'Il ragionamento che avete appena sentito:',
       opzioni:['Ha un errore, e lo troveremo', 'Non ha errori, ma la conclusione è falsa'],
       parlato:'Fai schierare tutti, senza astenuti: chi non sceglie, sceglie per sorteggio.\n\nPoi chiedi al primo gruppo di indicare la riga sbagliata — la riga, non l\'impressione. E al secondo gruppo la domanda scomoda: se un ragionamento non ha errori, come fa la conclusione a essere falsa? O accetti la conclusione, o trovi l\'errore. Una terza uscita non c\'è.\n\nÈ il momento in cui si accorgono che «lo so per esperienza» non è una risposta a un argomento. Non salvarli.',
       seDicono:[
         {loro:'«L\'errore è che lo spazio non si divide all\'infinito: a un certo punto ci sono gli atomi.»',
          tu:'Ottima, ed è storicamente la risposta giusta — la daranno gli atomisti, e la stiamo per incontrare. Ma allora accetti che lo spazio abbia una grana minima, sotto la quale non c\'è nulla. Sei pronto a dire che esiste una distanza che non si può dimezzare?'},
         {loro:'«Il ragionamento è un gioco di parole.»',
          tu:'Allora mostrami la parola con cui gioca. Ogni termine qui è elementare: metà, prima, passo. Chiamare gioco di parole ciò che non si riesce a confutare è il modo più elegante per non rispondere.'}
       ]},

      {minuti:'16–26', et:'La complicazione',
       schermo:'Zenone non stava scherzando, e non voleva stupirvi.\n\nEra allievo di Parmenide, e lo stava difendendo.\n\nIl suo ragionamento non dice «il movimento non esiste».\nDice una cosa più dura:\n\nse credete ai vostri sensi — se il mondo è fatto di molte cose che si muovono —\nallora finite nell\'assurdo.\n\nE allora ai sensi non si può credere.',
       parlato:'Qui cambia tutto, e va detto con calma perché è il concetto tecnico dell\'ora: la riduzione all\'assurdo. Zenone non prova la tesi del maestro, distrugge quella degli avversari. Aristotele per questo lo chiamerà l\'inventore della dialettica.\n\nFai vedere la forma: assumo per un momento quello che dite voi — spazio divisibile, cose molte, movimento reale — e ne ricavo una contraddizione. Quindi una delle vostre premesse è falsa.\n\nÈ la stessa mossa che useranno tutti, da Euclide in poi. Un ragionamento che vince senza mai affermare niente di proprio.\n\nSe ti chiedono quanti paradossi ha scritto: quaranta, dice Platone. Ne restano una manciata, e bastano.',
       seDicono:[
         {loro:'«Ma oggi la matematica ha risolto tutto: le serie infinite convergono.»',
          tu:'Vero, e sono passati duemilatrecento anni. Ma guarda che cosa ha fatto la matematica: ha mostrato che la somma delle distanze è finita. Zenone non chiedeva quanto misura la somma: chiedeva se si possa completare un numero infinito di atti. Sono due domande diverse, e la seconda si discute ancora.'},
         {loro:'«Allora Zenone credeva davvero di stare fermo?»',
          tu:'No, e non gli interessava. Camminava come tutti. Quello che sostiene è che il movimento non si può pensare senza contraddizione — e per un greco, ciò che non si può pensare non può essere vero.'}
       ]},

      {minuti:'26–36', et:'Il testo',
       schermo:'«È, e non è possibile che non sia.»\n\n«Il non essere non è: non lo puoi né pensare né dire.»\n\n«Lo stesso è pensare ed essere.»',
       testo:{fonte:'Parmenide, Sulla natura, frammenti 2 e 3 (V secolo a.C.)',
              glossa:'Tre righe da cui si deduce tutto il resto. Se il nulla non è pensabile, allora l\'essere non può nascere (verrebbe dal nulla), non può finire, non può muoversi (servirebbe un vuoto), non può dividersi (servirebbe un intervallo di non essere).'},
       parlato:'Leggi le tre righe. Poi costruisci la catena alla lavagna a voce, chiedendo a loro il passaggio successivo ogni volta:\n\nl\'essere non può essere nato — perché? da che cosa sarebbe nato?\nnon può finire — in che cosa?\nnon può muoversi — dove andrebbe? per muoversi serve uno spazio vuoto, e il vuoto è non essere.\nnon può essere diviso — che cosa ci sarebbe fra un pezzo e l\'altro?\n\nAlla fine hai un essere unico, immobile, eterno, tutto insieme, «simile a una sfera ben rotonda».\n\nE nessuno dei passaggi si può rifiutare senza rifiutare il primo.',
       seDicono:[
         {loro:'«Ma il vuoto esiste, lo sappiamo.»',
          tu:'Bene. Allora stai dicendo che il non essere, in qualche senso, c\'è. È esattamente la mossa che faranno gli atomisti, ed è una bestemmia logica per un greco del V secolo. Tienila da parte: fra due lezioni è la loro risposta.'},
         {loro:'«È un gioco sulla parola "essere".»',
          tu:'Può darsi, e sarà l\'accusa di tutta la filosofia successiva. Ma prova a rifarlo senza quella parola e vedrai che il problema resta: da dove viene ciò che comincia a esistere?'}
       ]},

      {minuti:'36–46', et:'Il colpo di scena',
       schermo:'Se il ragionamento regge, allora:\n\nnessuno di voi è nato.\nnessuno di voi cambierà.\nnessuno di voi morirà.\nnon siete molti: siete uno.\nquesta stanza non esiste come la vedete.\n\nNascita, morte, mutamento, colore, luogo:\n«nomi che i mortali hanno posto, convinti che fossero veri».',
       parlato:'Non addolcirlo. Questo è il punto in cui la classe capisce che la filosofia non è un modo elegante di dire cose ragionevoli.\n\nPoi la seconda parte del colpo: Parmenide non è un pazzo isolato. Platone gli dedica un dialogo intero e gli fa dire le cose più difficili che abbia mai scritto; nel Sofista, per potersene liberare, dovrà commettere quello che lui stesso chiama un parricidio — uccidere il padre Parmenide, ammettendo che il non essere in qualche modo è.\n\nE una terza, se hai tempo: in duemilacinquecento anni nessuno ha mostrato dove il ragionamento sbaglia restando dentro le sue regole. Ci si è liberati cambiando le regole.',
       seDicono:[
         {loro:'«Ma è assurdo, basta guardarsi intorno.»',
          tu:'Guardarsi intorno è precisamente ciò che Parmenide vieta. Ti sta chiedendo di scegliere fra quello che vedi e quello che riesci a dimostrare. Fino a oggi non avevi mai dovuto scegliere: è questo che è cambiato.'},
         {loro:'«Se tutto è uno e immobile, che senso ha studiare la natura?»',
          tu:'Domanda esatta, e infatti la fisica greca dopo di lui non è più la stessa: Empedocle, Anassagora e gli atomisti scrivono per rispondergli. Parmenide non ha fermato la scienza: le ha imposto di dimostrare, non di raccontare.'}
       ]},

      {minuti:'46–55', et:'Il ritorno',
       schermo:'Sapete dall\'età di tre anni che alla porta ci si arriva.\n\nDopo un\'ora, non sapete ancora dire dove il ragionamento sbaglia.\n\nAllora scegliete:\n\nvi fidate di quello che vedete,\no di quello che riuscite a dimostrare?\n\nDa oggi, in filosofia, sono due cose diverse.\nE la distanza fra le due è ciò che Parmenide ha davvero inventato.',
       parlato:'Torna al ragazzo che si era alzato all\'inizio e chiedigli se, adesso, saprebbe rispondere a Zenone. Quasi sempre dice di no, ed è la risposta migliore possibile.\n\nChiudi senza consolare. Non dire «poi la scienza ha risolto tutto»: non è vero, e comunque non è il punto. Il punto è che da questa lezione in avanti sapranno che «lo vedo» e «lo posso dimostrare» sono due cose che possono staccarsi — e che quando si staccano bisogna decidere.\n\nSe qualcuno resta a fine ora a discutere, la lezione è riuscita.',
       seDicono:[
         {loro:'«Quindi la ragione è più affidabile dei sensi?»',
          tu:'Per Parmenide sì, e senza esitazioni. Ma tienila come domanda aperta: fra qualche mese incontrerai chi dice il contrario, e alla fine dell\'anno dovrai avere una tua risposta. Oggi basta sapere che è una domanda.'}
       ]}
    ],
    riserve:[
      {titolo:'Achille e la tartaruga',
       corpo:'Achille corre dieci volte più veloce della tartaruga e le concede cento metri.\n\nQuando Achille arriva ai cento metri, la tartaruga ha fatto dieci metri. Quando Achille fa quei dieci, lei ne ha fatto uno. Quando lui fa quell\'uno, lei ne ha fatto un decimo.\n\nOgni volta che Achille arriva dove lei era, lei non è più lì.',
       chiedi:'Sappiamo tutti che Achille la supera. In quale metro esatto la supera? E soprattutto: che cosa c\'è di sbagliato nel modo in cui abbiamo contato?'},
      {titolo:'La freccia',
       corpo:'Prendi una freccia in volo e fermala col pensiero in un singolo istante. In quell\'istante occupa uno spazio esattamente uguale a sé stessa: non si sta muovendo, perché per muoversi dovrebbe occupare due posti.\n\nMa il volo è fatto di istanti. E una somma di istanti in cui la freccia è ferma non può dare un movimento.',
       chiedi:'Allora il movimento dove sta? Non è in nessun istante — sta fra gli istanti? E che cosa vuol dire «fra» due istanti?'},
      {titolo:'Se i cavalli disegnassero gli dèi',
       corpo:'«Ma se i buoi e i cavalli e i leoni avessero mani e potessero disegnare, i cavalli disegnerebbero figure di dèi simili ai cavalli, e i buoi simili ai buoi.» (Senofane, fr. 15)\n\n«Gli Etiopi dicono che i loro dèi sono neri e camusi, i Traci che hanno gli occhi azzurri e i capelli rossi.» (fr. 16)',
       chiedi:'Senofane scrive queste righe nel VI secolo a.C., non nell\'Ottocento. Quale parte di ciò in cui credete è fatta a vostra immagine — e come fareste ad accorgervene?'}
    ],
    testi:[
      {fonte:'Parmenide, Sulla natura, fr. 8 (gli attributi dell\'essere)',
       corpo:'«Ingenerato è e imperituro, tutto intero, unico, immobile e senza fine. Né mai era né sarà, poiché è ora, tutto insieme, uno, continuo.»',
       glossa:'Nessuno di questi aggettivi è una descrizione: ognuno è la conclusione di un passaggio. Falli ricostruire a ritroso — «perché immobile?» — ed è la verifica migliore che si possa fare a fine ora.'},
      {fonte:'Zenone, riferito da Aristotele, Fisica VI 9',
       corpo:'«Non si può percorrere una distanza infinita in un tempo finito: e chi si muove deve percorrere infiniti punti.»',
       glossa:'Aristotele risponde distinguendo infinito in atto e in potenza: la linea è divisibile all\'infinito, ma non è composta da infinite parti già divise. È la prima grande risposta a Zenone, e ci mette un secolo ad arrivare.'},
      {fonte:'Senofane, fr. 34',
       corpo:'«Nessun uomo vide mai il vero, né mai vi sarà chi lo sappia intorno agli dèi e a tutte le cose: perché anche se per caso dicesse la cosa perfetta, egli stesso non lo sa: su tutto c\'è opinione.»',
       glossa:'Utile per mostrare il contrasto: Senofane rinuncia alla certezza, Parmenide la pretende assoluta. Due modi opposti di reagire alla stessa crisi.'}
    ],
    compito:'Scrivete mezza pagina su una cosa che sapete per certo e che non sapreste dimostrare a chi la negasse. Non serve che sia filosofica: va benissimo «mia madre mi vuole bene» o «domani mi sveglio». Portate il punto in cui la dimostrazione vi si ferma.',
    fonti:[
      'Parmenide, Sulla natura, frr. 1, 2, 3, 6, 8 (Diels-Kranz 28)',
      'Senofane di Colofone, frr. 11, 14, 15, 16, 23, 34 (Diels-Kranz 21)',
      'Zenone di Elea, frr. 1-4 (Diels-Kranz 29); Aristotele, Fisica VI 9, 239b',
      'Aristotele, Metafisica I 5 e Fisica I 3 — la lettura critica di Parmenide',
      'Platone, Parmenide 127a-128e (l\'incontro con Socrate); Sofista 241d (il «parricidio»)',
      'Melisso di Samo, frr. 1-9 (Diels-Kranz 30)'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia antica · 3 — La sofistica': {
  mappa: {
    n:'La sofistica', d:'Atene, V secolo a.C.: l\'uomo al posto della natura',
    f:[
      {r:'nasce da', n:'L\'Atene di Pericle', d:'perché proprio lì, e proprio allora',
       f:[
         {r:'ha', n:'La democrazia diretta', d:'l\'assemblea decide, e decide chi convince',
          f:[{piu:true, r:'in cui', n:'Seimila cittadini sulla Pnice', d:'e chi non sa parlare non conta'},
             {piu:true, r:'e', n:'I tribunali popolari', d:'giurie di centinaia: si vince persuadendo'}]},
         {r:'quindi', n:'La parola diventa potere', d:'saper parlare non è ornamento: è carriera'},
         {r:'e', n:'Sposta l\'attenzione', d:'dalla phýsis all\'uomo e alla città',
          f:[{piu:true, r:'per questo', n:'Cicerone dirà di Socrate', d:'«ha fatto scendere la filosofia dal cielo»'}]},
         {r:'poi arriva', n:'La guerra del Peloponneso', d:'431-404: la crisi che rende tutto discutibile'},
         {r:'incontra', n:'Popoli con leggi diverse', d:'e nessuna sembra più naturale delle altre'}
       ]},

      {r:'chi sono', n:'I sofisti', d:'maestri di sapere, a pagamento',
       f:[
         {r:'insegnano', n:'L\'aretè politica', d:'l\'eccellenza nel governare e nel convincere',
          f:[{piu:true, r:'non più', n:'Virtù come nascita', d:'l\'aretè si impara: è la rottura con l\'aristocrazia'}]},
         {r:'sono', n:'Itineranti e stranieri', d:'Abdera, Leontini, Ceo, Elide: nessuno è ateniese'},
         {r:'si fanno', n:'Pagare', d:'ed è lo scandalo: il sapere diventa un servizio',
          f:[{piu:true, r:'Protagora', n:'Chiedeva diecimila dracme', d:'quanto una casa: lo riferisce Diogene Laerzio'}]},
         {r:'sono i primi', n:'Professionisti dell\'insegnamento', d:'prima di loro non esiste il mestiere'},
         {r:'il nome', n:'Sophistés', d:'«esperto, sapiente»: diventa insulto solo dopo Platone'}
       ]},

      {r:'il maggiore', n:'Protagora di Abdera', d:'circa 490-420 a.C.',
       f:[
         {r:'afferma', n:'L\'uomo è misura di tutte le cose', d:'di quelle che sono e di quelle che non sono',
          f:[{r:'quindi', n:'Niente è vero in sé', d:'il vento è freddo per chi ha freddo'},
             {r:'ma non', n:'Tutto vale uguale', d:'resta il criterio dell\'utile: certe opinioni fanno vivere meglio'},
             {piu:true, r:'nel', n:'Frammento 1', d:'in Sesto Empirico e in Platone, Teeteto 152a'}]},
         {r:'sostiene', n:'Due discorsi su ogni cosa', d:'dissoì lógoi: e sono opposti fra loro',
          f:[{r:'da cui', n:'L\'antilogia', d:'l\'arte di sostenere il contrario di ciò che si è appena detto'},
             {piu:true, r:'e', n:'«Rendere più forte il discorso più debole»', d:'l\'accusa che Aristofane gli muove nelle Nuvole'}]},
         {r:'sugli dèi', n:'Non posso sapere se ci siano', d:'l\'oscurità della cosa e la brevità della vita',
          f:[{piu:true, r:'gli costò', n:'L\'esilio e i libri bruciati', d:'secondo la tradizione, ad Atene'}]},
         {r:'racconta', n:'Il mito di Prometeo', d:'nel dialogo di Platone che porta il suo nome',
          f:[{r:'dove', n:'La virtù politica è di tutti', d:'Zeus la distribuisce a ciascuno, o la città non regge'},
             {piu:true, r:'perciò', n:'La democrazia si giustifica', d:'se tutti ne hanno parte, tutti possono decidere'}]}
       ]},

      {r:'il più radicale', n:'Gorgia di Leontini', d:'circa 485-380 a.C., visse oltre cent\'anni',
       f:[
         {r:'scrive', n:'Sul non essere', d:'tre tesi, una più dura dell\'altra',
          f:[{r:'prima', n:'Nulla esiste'},
             {r:'seconda', n:'Se anche esistesse, non sarebbe conoscibile'},
             {r:'terza', n:'Se anche fosse conoscibile, non sarebbe comunicabile',
              f:[{piu:true, r:'perché', n:'La parola non è la cosa', d:'con un suono non si consegna un colore'}]},
             {piu:true, r:'è', n:'Il rovescio di Parmenide', d:'stessa forma di dimostrazione, conclusione capovolta'}]},
         {r:'compone', n:'L\'Encomio di Elena', d:'difende la donna più colpevole del mito',
          f:[{r:'sostiene', n:'Il lógos è un gran signore', d:'con un corpo piccolissimo compie opere divine',
              f:[{piu:true, r:'può', n:'Fermare la paura, togliere il dolore', d:'agisce sull\'anima come il farmaco sul corpo'}]},
             {r:'quindi', n:'Elena fu costretta', d:'dalla forza, dagli dèi, dall\'amore o dalla parola: mai colpevole'},
             {piu:true, r:'lo chiama', n:'Un gioco', d:'«ho voluto scrivere un divertimento»: e lo dice alla fine'}]},
         {r:'sulla tragedia', n:'L\'inganno che è giusto', d:'chi inganna è più onesto di chi non inganna',
          f:[{piu:true, r:'perché', n:'Chi si lascia ingannare è più saggio', d:'ha capito che cos\'è il teatro'}]}
       ]},

      {r:'gli altri', n:'La seconda fila', d:'meno noti, non meno importanti',
       f:[
         {r:'Prodico studia', n:'I sinonimi', d:'la prima analisi del linguaggio: due parole non dicono la stessa cosa',
          f:[{piu:true, r:'e narra', n:'Ercole al bivio', d:'la Virtù e il Vizio, in forma di due donne'}]},
         {r:'Ippia sa', n:'Tutto', d:'polymathía: matematica, astronomia, mnemotecnica, e si cuce i vestiti',
          f:[{r:'sostiene', n:'Per natura siamo parenti', d:'è il nómos, tiranno, a dividerci'}]},
         {r:'Antifonte oppone', n:'Phýsis contro nómos', d:'la natura contro la legge',
          f:[{r:'perché', n:'Le leggi sono catene', d:'aggiunte, e si possono violare se nessuno vede'},
             {r:'mentre', n:'La natura punisce sempre', d:'chi la viola ne paga il prezzo comunque'},
             {piu:true, r:'e nega', n:'La differenza fra greci e barbari', d:'«tutti respiriamo dalla bocca e dal naso»'}]},
         {r:'Trasimaco definisce', n:'La giustizia è l\'utile del più forte', d:'chi comanda fa le leggi a proprio vantaggio',
          f:[{piu:true, r:'in', n:'Platone, Repubblica I 338c'}]},
         {r:'Crizia sostiene', n:'Gli dèi li ha inventati un uomo astuto', d:'per far rispettare le leggi anche di nascosto',
          f:[{piu:true, r:'nel', n:'Sisifo', d:'e Crizia sarà uno dei Trenta tiranni'}]},
         {piu:true, r:'Callicle grida', n:'La legge di natura è del più forte', d:'nel Gorgia: il nómos è l\'invenzione dei deboli'}
       ]},

      {r:'come si insegna', n:'La tecnica', d:'gli strumenti veri del mestiere',
       f:[
         {r:'la', n:'Retorica', d:'l\'arte di persuadere, insegnabile e vendibile'},
         {r:'il', n:'Kairós', d:'il momento giusto: non esiste il discorso adatto sempre'},
         {r:'il', n:'Verosimile', d:'eikós: in tribunale non conta il vero, conta ciò che appare probabile',
          f:[{piu:true, r:'esempio', n:'Il debole e il forte', d:'chi picchierebbe uno più grosso? e allora chi è più credibile?'}]},
         {r:'l\'', n:'Eristica', d:'l\'arte di vincere la discussione, non di trovare il vero',
          f:[{piu:true, r:'derisa in', n:'Eutidemo', d:'il dialogo in cui Platone la mette in ridicolo'}]}
       ]},

      {r:'come li giudicano', n:'La condanna e il riscatto',
       f:[
         {r:'Platone li chiama', n:'Mercanti di sapere', d:'commercianti all\'ingrosso e al minuto di nutrimento per l\'anima'},
         {r:'Aristotele li dice', n:'Sapienza apparente', d:'guadagnano da una saggezza che non c\'è'},
         {r:'Socrate li combatte', n:'Ma gli somiglia', d:'tanto che gli ateniesi lo condannano scambiandolo per uno di loro'},
         {r:'poi', n:'Hegel li rivaluta', d:'sono i maestri della Grecia: portano il pensiero sull\'uomo'},
         {r:'e', n:'Il Novecento li riprende', d:'come i primi illuministi e democratici',
          f:[{piu:true, r:'con', n:'Grote, Untersteiner, Popper', d:'contro il ritratto lasciato da Platone'}]}
       ]},

      {r:'che cosa apre', n:'Il problema che resta', d:'e non si chiude più',
       f:[
         {r:'se', n:'Ogni verità è di qualcuno', d:'allora su che cosa si decide insieme?'},
         {r:'la giustizia', n:'È natura o convenzione?', d:'la domanda che attraverserà tutta la filosofia politica'},
         {r:'nasce', n:'Il relativismo', d:'e con esso il sospetto che accompagna la democrazia'},
         {r:'e nasce', n:'La reazione di Socrate', d:'cercare una definizione che valga per tutti'}
       ]}
    ],
    incroci:[
      {da:'L\'uomo è misura di tutte le cose', a:'Ogni verità è di qualcuno', r:'apre',
       perche:'Tolto il metro dalle cose e messo nell\'uomo, ogni giudizio ha un proprietario. Resta da capire come si decida insieme, quando non c\'è più un arbitro fuori di noi.'},
      {da:'Due discorsi su ogni cosa', a:'Eristica', r:'degenera in',
       perche:'Scoprire che ogni tesi ha un contrario difendibile è una scoperta; usarla per vincere sempre è un mestiere. Il confine è sottile, e Platone farà finta che non esista.'},
      {da:'Sul non essere', a:'Il lógos è un gran signore', r:'giustifica',
       perche:'Se nulla si può conoscere e comunicare, la parola non trasmette il vero. Ma allora che cosa fa? Agisce — come un farmaco sul corpo, così il discorso sull\'anima.'},
      {da:'La giustizia è l\'utile del più forte', a:'È natura o convenzione?', r:'risponde brutalmente a',
       perche:'Trasimaco non dice che la giustizia non esiste: dice che è una convenzione scritta da chi comanda. La Repubblica intera nasce per confutare questa frase.'},
      {da:'Phýsis contro nómos', a:'Per natura siamo parenti', r:'stessa mossa in',
       perche:'La stessa distinzione porta a esiti opposti: in Antifonte serve a liberare l\'individuo dalle leggi, in Ippia a dire che greci e barbari sono uguali.'},
      {da:'La parola diventa potere', a:'Retorica', r:'crea il mercato per',
       perche:'Dove si decide votando, chi parla meglio ottiene di più. I sofisti non hanno inventato questo: hanno visto che si poteva insegnare, e l\'hanno fatto pagare.'},
      {da:'Il mito di Prometeo', a:'La democrazia diretta', r:'fonda',
       perche:'Se Zeus ha dato a tutti il senso della giustizia, allora tutti possono deliberare. È la giustificazione filosofica del fatto che ad Atene voti anche il calzolaio.'},
      {da:'Gli dèi li ha inventati un uomo astuto', a:'Non posso sapere se ci siano', r:'porta all\'estremo',
       perche:'Protagora sospende il giudizio; Crizia spiega a che cosa serve la religione. Fra il dubbio e la denuncia passano una generazione e una guerra perduta.'},
      {da:'La reazione di Socrate', a:'Ma gli somiglia', r:'e infatti',
       perche:'Socrate cerca definizioni che valgano per tutti, cioè l\'opposto dei sofisti. Ma fa le stesse domande scomode nello stesso modo, e gli ateniesi non li distinguono.'},
      {da:'Verosimile', a:'I tribunali popolari', r:'nasce dentro',
       perche:'Davanti a giurie di centinaia di persone non ci sono perizie: c\'è quello che sembra probabile. La tecnica nasce dentro il luogo in cui serve.'},
      {da:'Popoli con leggi diverse', a:'Le leggi sono catene', r:'suggerisce che',
       perche:'Chi ha visto che ogni popolo chiama giusto qualcosa di diverso fatica a credere che le leggi vengano dalla natura. Da lì a considerarle un\'imposizione il passo è breve.'}
    ]
  },
  provocazione: {
    titolo:'La causa che non si può decidere',
    durata:'55 minuti',
    domandaMadre:'Se due ragionamenti perfetti danno risposte opposte, chi decide?',
    perche:'La classe si trova davanti a due argomenti impeccabili che si contraddicono, e deve giudicare. Nessuno riesce a farlo. È l\'esperienza diretta dei dissoì lógoi di Protagora — su ogni cosa ci sono due discorsi opposti — e da lì si arriva senza forzature al problema vero: se non c\'è un criterio fuori di noi, la giustizia è convenzione. È lo stesso terreno su cui nasceranno Socrate e Platone, e su cui litighiamo ancora oggi ogni volta che qualcuno dice «ognuno ha la sua verità».',
    occorrente:'Niente. Serve solo che la classe sia disposta a fare da tribunale.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Protagora insegna retorica a Euatlo.\n\nPatto: paghi la seconda metà del compenso\nquando vincerai la tua prima causa.\n\nEuatlo si diploma e non prende nessuna causa. Mai.\n\nProtagora lo porta in tribunale.\n\nOra siete voi i giudici.',
       parlato:'Racconta il caso senza aggiungere niente: si regge da solo. Poi lascia un minuto di silenzio e chiedi la sentenza a mano alzata, prima ancora di dare gli argomenti. Prendi nota dei numeri.\n\nPoi dai gli argomenti delle due parti, uno per volta, con calma. Prima Protagora, che parla per primo perché è l\'accusatore:\n\n«Se vinco questa causa, Euatlo deve pagarmi perché lo dice la sentenza. Se la perdo, Euatlo ha vinto la sua prima causa: e allora deve pagarmi per il patto. In tutti e due i casi, pago.»\n\nAspetta che sembri chiuso. Poi:\n\n«Se perdo questa causa, non devo pagare perché lo dice la sentenza. Se la vinco, non ho ancora vinto una causa da avvocato: il patto non è scattato. In tutti e due i casi, non pago.»\n\nI due discorsi hanno la stessa identica forma. Falli notare: non c\'è un trucco da una parte sola.',
       seDicono:[
         {loro:'«C\'è un cavillo: la causa che fa Protagora non è una causa "sua".»',
          tu:'Sei già dentro il mestiere: stai cercando di far pendere la definizione dalla tua parte. Ed è esattamente ciò che i sofisti insegnavano a fare. Ma nota: anche la definizione opposta si può difendere altrettanto bene. Chi decide quale definizione vale?'},
         {loro:'«Decide il giudice, punto.»',
          tu:'Sì, e il giudice decide con la maggioranza dei voti. Quindi la risposta giusta è quella che convince più gente. Ti va bene come definizione di giustizia? Perché è esattamente quella che sta per proporti Trasimaco.'}
       ]},

      {minuti:'8–18', et:'Lo schieramento',
       schermo:'Sentenza.',
       opzioni:['Euatlo deve pagare', 'Euatlo non deve pagare'],
       parlato:'Fai schierare tutti e chiedi a tre per parte di argomentare, uno alla volta. Poi il colpo: chiedi a chi ha argomentato meglio da una parte di sostenere adesso la posizione opposta, per un minuto.\n\nQuasi sempre ci riescono. E quando ci riescono, fermali e chiediglielo:\n\n«Hai appena difeso bene una cosa e il suo contrario. Che cosa vuol dire, di te? E che cosa vuol dire, della cosa?»\n\nÈ il momento in cui l\'esercizio smette di essere un gioco.',
       seDicono:[
         {loro:'«Ho solo fatto finta, non ci credevo.»',
          tu:'Però chi ti ascoltava non poteva accorgersene. Se la differenza fra credere e fingere non si vede da fuori, che uso ne fa chi deve decidere? È la domanda che gli ateniesi si porranno su ogni oratore per un secolo.'},
         {loro:'«Allora vince chi parla meglio.»',
          tu:'Esatto, e in un\'assemblea di seimila persone è letteralmente così. I sofisti non hanno inventato questo: lo hanno visto e hanno cominciato a insegnarlo. La domanda è se sia un male.'}
       ]},

      {minuti:'18–28', et:'La complicazione',
       schermo:'Non è un caso limite. È la regola.\n\nProtagora sostiene che su ogni cosa\nesistono due discorsi opposti,\ne che si possono difendere tutti e due.\n\nE se è così, allora la domanda\n«qual è la verità?»\nnon ha una risposta: ne ha due.',
       parlato:'Qui si spiega il concetto tecnico dell\'ora, i dissoì lógoi, e si mostra che non è furbizia ma una scoperta: in una città che decide votando, ogni questione ha per forza due discorsi, o non ci sarebbe niente da votare.\n\nPoi allarga con esempi presi da loro. Chiedi una questione su cui sono sicuri — qualunque — e fai costruire in due minuti, a coppie, il discorso contrario. Riesce quasi sempre, e questo li scuote più di qualunque spiegazione.\n\nInfine il punto storico: questa gente non insegna per far ridere. Insegna a giovani che domani parleranno all\'assemblea e in tribunale, dove non esiste un esperto che stabilisca il vero: esistono seimila persone da convincere.',
       seDicono:[
         {loro:'«Ma su alcune cose la verità c\'è: la Terra gira intorno al Sole.»',
          tu:'Giusto, e infatti Protagora non parla di astronomia: parla di giusto e ingiusto, di bello e brutto, di che cosa conviene alla città. Prova a distinguere: dove il contrario si può difendere e dove no? Quella linea è una delle cose più difficili da tracciare in filosofia.'},
         {loro:'«Allora sono dei cinici.»',
          tu:'Attento: Protagora aggiunge un criterio. Non tutte le opinioni valgono uguale — valgono di più quelle utili, quelle che fanno stare meglio la città. Non è «tutto uguale»: è «non c\'è un vero fuori di noi, quindi decidiamo secondo ciò che ci fa vivere meglio».'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'«L\'uomo è misura di tutte le cose:\ndi quelle che sono, per come sono;\ndi quelle che non sono, per come non sono.»\n\n«Il lógos è un signore potentissimo:\ncon un corpo piccolissimo e invisibile\ncompie opere divine.»',
       testo:{fonte:'Protagora, fr. 1; Gorgia, Encomio di Elena, § 8 (V secolo a.C.)',
              glossa:'La prima frase toglie il metro da fuori e lo mette dentro l\'uomo. La seconda spiega perché la cosa è pericolosa: se non c\'è un metro esterno, chi ha la parola ha tutto. Gorgia paragona il discorso al farmaco — guarisce e uccide con la stessa sostanza.'},
       parlato:'Leggi le due frasi e fermati sulla prima. «Misura» in greco è métron: lo strumento con cui si stabilisce quanto. Toglierlo dal mondo e metterlo nell\'uomo è una rivoluzione paragonabile solo a quella di Anassimandro, ma va nella direzione opposta: là il mondo si spiegava da sé, qui il mondo si misura su di noi.\n\nSulla seconda: fai notare l\'immagine del farmaco. Gorgia non dice che la parola inganna; dice che agisce, come una sostanza. È la prima teoria della persuasione della storia, e non è moralistica.\n\nSe hai tempo, il paradosso di Gorgia: nulla esiste; se esistesse non lo conosceremmo; se lo conoscessimo non potremmo dirlo. Chiedi che cosa resta da fare a uno che pensa così. Resta la parola — che non trasmette il vero, ma agisce.',
       seDicono:[
         {loro:'«"L\'uomo" vuol dire l\'umanità o il singolo?»',
          tu:'Domanda giusta e antichissima: se ne discute da duemilacinquecento anni. Platone lo legge come «ogni singolo», e così è facile confutarlo. Ma si può leggere come «l\'uomo in quanto uomo» — e allora diventa Kant. Tienila in mente: la ritroverai in quinta.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Se la misura è l\'uomo, allora anche la legge lo è.\n\nAntifonte: le leggi sono catene aggiunte,\nsi possono violare se nessuno vede.\nLa natura no: quella punisce comunque.\n\nTrasimaco: la giustizia è l\'utile del più forte.\n\nCrizia: gli dèi li ha inventati un uomo astuto,\nper far rispettare le leggi anche di nascosto.',
       parlato:'Questi tre passaggi vanno dati in fila e senza attenuarli. La classe deve sentire la discesa: dal «non c\'è un vero fuori di noi» si arriva, in tre mosse, a «la giustizia è il nome che il potere dà al proprio interesse».\n\nPoi il dato storico che li fa gelare: Crizia scrive quel testo nel V secolo avanti Cristo, e sarà uno dei Trenta tiranni che governano Atene con il terrore. Non è un esercizio di scuola.\n\nE il rovescio, che va detto subito dopo: gli stessi principi producono anche Ippia — per natura siamo tutti parenti, è la legge a dividerci in greci e barbari — cioè la prima idea di uguaglianza universale. Le stesse premesse, due esiti opposti.',
       seDicono:[
         {loro:'«Quindi i sofisti sono i cattivi.»',
          tu:'È il ritratto che ne ha lasciato Platone, e ha funzionato per duemila anni: «sofista» oggi è un insulto. Ma guarda che cosa hanno fatto: hanno detto che la virtù si impara, che le leggi le facciamo noi, che greci e barbari sono uguali. Chi difende la democrazia usa i loro argomenti anche quando li insulta.'},
         {loro:'«E Socrate? Anche lui faceva domande così.»',
          tu:'Perfetto, ed è il punto della prossima lezione. Gli ateniesi non riuscirono a distinguerli — Aristofane mette Socrate fra i sofisti nelle Nuvole, e alla fine lo condannano a morte per le accuse che si facevano a loro.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Volevate un giudice che decidesse.\n\nProtagora risponde che un giudice fuori di noi non c\'è:\nla misura è l\'uomo.\n\nE allora scegliete che cosa ne fate.\n\nÈ la fine della giustizia — o è l\'inizio della democrazia?',
       parlato:'Torna alla causa e chiedi la sentenza una seconda volta, a mano alzata. I numeri quasi sempre si spostano, e il fatto che si spostino è la lezione.\n\nPoi porta la cosa a oggi, con una domanda sola e senza fare la predica: «ognuno ha la sua verità» — l\'avete sentito dire mille volte. È Protagora. Chi lo dice, oggi, di solito lo dice per chiudere una discussione. Protagora lo diceva per aprirla.\n\nChiudi lì. La risposta la cercherà Socrate, e comincia la volta prossima.',
       seDicono:[
         {loro:'«Ma allora non si può giudicare niente?»',
          tu:'Si giudica eccome — si fa tutti i giorni. La domanda è su che cosa si appoggia il giudizio: su una verità che sta fuori di noi, o su un accordo fra noi? Se scegli il secondo, devi accettare che l\'accordo possa cambiare. Se scegli il primo, devi dire dove sta quella verità e come si vede.'}
       ]}
    ],
    riserve:[
      {titolo:'Il mito di Prometeo',
       corpo:'Epimeteo distribuisce le qualità agli animali e finisce le doti prima di arrivare all\'uomo: nudo, scalzo, indifeso. Prometeo ruba allora il fuoco e le arti tecniche.\n\nMa gli uomini continuano a distruggersi, perché non sanno vivere insieme. Allora Zeus manda Ermes a portare loro aidós e díke — il rispetto e la giustizia — con un ordine preciso: non a pochi, come le arti, ma a tutti. E chi non ne è capace, va ucciso come una malattia della città.',
       chiedi:'Protagora usa un mito per giustificare la democrazia: se la capacità politica ce l\'hanno tutti, tutti possono decidere. Regge? E oggi, chi sostiene che a decidere debbano essere gli esperti, che cosa sta negando esattamente?'},
      {titolo:'Il verosimile in tribunale',
       corpo:'Un uomo piccolo è accusato di aver picchiato un uomo grosso. La difesa: «guardatemi — chi mai crederebbe che uno come me abbia aggredito uno come lui?»\n\nL\'accusa, addestrata dallo stesso maestro, ribatte: «proprio per questo lo ha fatto: contava che nessuno gli credesse».',
       chiedi:'Non c\'è nessuna prova, in nessuna delle due arringhe: c\'è solo ciò che sembra probabile. Nei nostri tribunali quanta parte ha ancora il verosimile? E nelle cose che credete leggendo una notizia?'},
      {titolo:'L\'Encomio di Elena',
       corpo:'Elena, per i greci, è la causa di diecimila morti sotto Troia. Gorgia si propone di dimostrare che non ha colpa: o l\'hanno voluta gli dèi, o è stata rapita con la forza, o è stata persuasa dalla parola, o vinta dall\'amore. In nessuno dei quattro casi è colpevole.\n\nAlla fine del discorso Gorgia scrive che ha voluto comporre «un divertimento».',
       chiedi:'Perché aggiunge quella riga? Sta ammettendo che era un gioco — o sta dicendo che ogni discorso, anche il più serio, funziona esattamente così?'}
    ],
    testi:[
      {fonte:'Protagora, fr. 4 (sugli dèi)',
       corpo:'«Sugli dèi non posso sapere né se sono né se non sono, né quale sia il loro aspetto: molte cose lo impediscono, l\'oscurità della cosa e la brevità della vita umana.»',
       glossa:'Non è ateismo: è la prima dichiarazione di agnosticismo della storia. Nota il secondo motivo — la vita è corta: è un argomento pratico, non metafisico. Ed è per questa frase che, secondo la tradizione, fu esiliato.'},
      {fonte:'Antifonte, Sulla verità (papiro di Ossirinco)',
       corpo:'«Le prescrizioni delle leggi sono aggiunte, quelle della natura sono necessarie. Chi viola le leggi, se sfugge a chi le ha stabilite, evita vergogna e castigo; ma chi violenta la natura, anche se sfugge a tutti gli uomini, il male non è minore.»',
       glossa:'Serve per far vedere che physis-nomos non è un\'astrazione: è un manuale di comportamento. Chiedi che cosa consiglia esattamente questo testo a un giovane ambizioso, e lascia che se ne accorgano da soli.'},
      {fonte:'Trasimaco, in Platone, Repubblica I 338c',
       corpo:'«Affermo che il giusto non è altro che l\'utile del più forte.»',
       glossa:'Sei parole che attraverseranno tutta la filosofia politica: le ritroverai in Machiavelli, in Hobbes, in Marx. La Repubblica intera nasce come risposta a questa frase.'}
    ],
    compito:'Prendete una posizione a cui tenete davvero — politica, morale, personale — e scrivete mezza pagina per sostenere quella opposta, nel modo più convincente che riuscite. Poi una riga sola: che cosa avete provato mentre la scrivevate.',
    fonti:[
      'Aulo Gellio, Notti attiche V 10 — la causa fra Protagora ed Euatlo',
      'Protagora, frr. 1 e 4 (Diels-Kranz 80); Platone, Teeteto 152a e Protagora 320c-323a',
      'Gorgia, Encomio di Elena; Sul non essere (in Sesto Empirico, Adv. math. VII 65-87)',
      'Antifonte, Sulla verità, POxy 1364; Ippia in Platone, Protagora 337c',
      'Trasimaco in Platone, Repubblica I 336b-354c; Callicle in Gorgia 482c-486d',
      'Crizia, Sisifo (Diels-Kranz 88 B25); Aristofane, Nuvole',
      'M. Untersteiner, I sofisti; G. Grote, History of Greece; K. Popper, La società aperta'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia moderna · 9 — Cartesio': {
  albero: {
    n:'Cartesio', d:'rifare le fondamenta del sapere',
    f:[
      {n:'Il problema', d:'ha studiato tutto e non sa che cosa è vero',
       f:[{n:'Non mancano le nozioni'}, {n:'Manca il modo di riconoscerle'},
          {n:'Il modello: la matematica', d:'l\'unico sapere su cui nessuno litiga'}]},
      {n:'Le quattro regole',
       f:[{n:'Evidenza', d:'solo ciò che è chiaro e distinto'},
          {n:'Analisi', d:'dividere fino al semplice'},
          {n:'Sintesi', d:'risalire per gradi ordinati'},
          {n:'Enumerazione', d:'rivedere tutto, senza salti'}]},
      {n:'Il dubbio metodico', d:'si dubita apposta, per trovare ciò che resiste',
       f:[{n:'I sensi ingannano'},
          {n:'E se stessi sognando?'},
          {n:'Il genio maligno', d:'cade anche 2+2=4'}]},
      {n:'Il cogito', d:'l\'unico punto che il dubbio conferma',
       f:[{n:'Dubitare è pensare, pensare è essere'},
          {n:'Sono una cosa che pensa', d:'e Hobbes obietta: perché uno spirito?'},
          {n:'Il criterio', d:'è vero ciò che è chiaro e distinto'}]},
      {n:'Dio garante', d:'senza di lui si resta chiusi nella propria mente',
       f:[{n:'L\'idea di perfetto non può venire da me'},
          {n:'Un Dio buono non inganna'},
          {n:'Torna il mondo esterno'},
          {n:'L\'errore è nostro', d:'la volontà giudica oltre l\'intelletto'}]},
      {n:'Le due sostanze',
       f:[{n:'Res cogitans', d:'pensa, non occupa spazio'},
          {n:'Res extensa', d:'occupa spazio, non pensa'},
          {n:'Il problema aperto', d:'come si toccano in un uomo vivo?'}]}
    ]
  },
  provocazione: {
    titolo:'Dimostratemi che non state sognando',
    durata:'un\'ora',
    atti:[
      {et:'L\'aggancio',
       testo:'In questo momento, seduti qui: dimostratemi che non state sognando.\n\nAvete tre minuti. Non vale rispondere «perché mi sento sveglio»: anche nel sogno ti senti sveglio.',
       nota:'Non spiegare niente prima. Lasciali provare davvero, in silenzio, e prendi nota delle prove che propongono: serviranno fra due tempi. Le più comuni sono «mi pizzico», «i sogni sono incoerenti», «ricordo come sono arrivato qui».'},
      {et:'Lo schieramento',
       testo:'Si può dimostrare di essere svegli?',
       opzioni:['Sì, si può', 'No, non si può'],
       nota:'Conta le mani e tieni a mente i due numeri. Chiedi a due di ciascuna parte di dire il perché in una frase sola. Da qui in poi hanno qualcosa da difendere.'},
      {et:'La complicazione',
       testo:'Ognuna delle vostre prove è già dentro il sogno.\n\nTi pizzichi — e nel sogno senti.\nI sogni sono incoerenti — ci sono sogni ordinatissimi.\nRicordi come sei arrivato — nel sogno ricordi cose mai accadute.\n\nE ora la domanda vera: e se qualcuno vi stesse ingannando anche quando contate? Se ogni volta che fate 2 + 2 vi facesse dire 4, e fosse 5?',
       nota:'Qui cade anche lo schieramento del «sì». È il momento di massimo disagio: reggilo, non salvarli. Il genio maligno non è un gioco, è la prova più dura che Cartesio riesce a immaginare — e serve proprio perché deve arrivare dove il dubbio sui sensi non arriva.'},
      {et:'Il testo', fonte:'Cartesio, Meditazioni metafisiche, II (1641)',
       testo:'«Io sono, io esisto: questo è certo; ma per quanto tempo? Per tutto il tempo in cui penso.»\n\nSe mi inganna, dev\'esserci qualcuno da ingannare.',
       nota:'Fai notare la struttura: non è una dimostrazione, è l\'unico punto in cui dubitare conferma invece di distruggere. Più il genio maligno mi imbroglia, più conferma che ci sono. Chiedi: che cosa esattamente ho dimostrato di essere? Solo «una cosa che pensa» — non un corpo, non Alessandro, non uno studente.'},
      {et:'Il ritorno',
       testo:'Non avete dimostrato di non star sognando.\n\nNemmeno Cartesio ci riesce. Trova l\'unica cosa che regge anche se state sognando: che qualcuno sta sognando.\n\nSu quel punto solo — largo come una capocchia di spillo — vuole ricostruire il mondo intero. La domanda per la prossima ora è: ci riesce?',
       nota:'Chiudi qui, senza rispondere. La ricostruzione (Dio garante, le due sostanze) è la lezione dopo, e adesso hanno motivo di volerla sentire.'}
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia moderna · 10 — Spinoza': {
  albero: {
    n:'Spinoza', d:'Deus sive Natura',
    f:[
      {n:'Una sola sostanza',
       f:[{n:'Sostanza = ciò che è in sé', d:'la definizione di Cartesio, presa sul serio'},
          {n:'Ciò che dipende non è sostanza', d:'quindi il mondo creato non lo è'},
          {n:'Causa sui', d:'increata: la sua essenza implica l\'esistenza'},
          {n:'Infinita', d:'se fosse limitata, ci sarebbe altro accanto'}]},
      {n:'Attributi e modi',
       f:[{n:'Infiniti attributi', d:'noi ne conosciamo due'},
          {n:'Pensiero ed estensione'},
          {n:'I modi', d:'le cose singole: onde, non oceani'},
          {n:'Naturante e naturata', d:'la stessa cosa, come causa e come effetto'}]},
      {n:'Il parallelismo',
       f:[{n:'Stesso ordine, due attributi'},
          {n:'Nessuna interazione', d:'e quindi nessun problema cartesiano'},
          {n:'La mente è idea del corpo'}]},
      {n:'L\'uomo',
       f:[{n:'Non un dominio dentro un dominio', d:'nessuna eccezione alla natura'},
          {n:'Conatus', d:'perseverare nel proprio essere'},
          {n:'Bene e male', d:'non qualità delle cose: utile o dannoso al conatus'},
          {n:'Tre affetti', d:'desiderio, gioia, tristezza'}]},
      {n:'La libertà',
       f:[{n:'Il libero arbitrio non esiste', d:'conosciamo le voglie, non le cause'},
          {n:'Liberi capendo', d:'la passione compresa diventa idea adeguata'},
          {n:'Tre generi di conoscenza', d:'immaginazione, ragione, intuizione'},
          {n:'Amor Dei intellectualis', d:'il vertice dell\'Etica'}]}
    ]
  },
  provocazione: {
    titolo:'La pietra che si crede libera',
    durata:'un\'ora',
    atti:[
      {et:'L\'aggancio',
       testo:'Lancio una pietra in aria.\n\nSe quella pietra, mentre vola, avesse un pensiero — uno solo — sarebbe questo: «sto volando perché voglio volare».\n\nIn che cosa siete diversi dalla pietra?',
       nota:'Falla proprio, la mossa: lancia qualcosa e riprendilo. La domanda non è retorica — pretendi una differenza precisa, non «perché noi pensiamo». Anche la pietra, nell\'esempio, pensa.'},
      {et:'Lo schieramento',
       testo:'Le vostre scelte sono davvero vostre?',
       opzioni:['Sì: potevo fare altrimenti', 'No: mi sembra soltanto'],
       nota:'Chiedi al gruppo del «sì» un esempio concreto di scelta fatta stamattina. Poi chiedi, per quell\'esempio, di elencare tutte le cause che ci hanno portato: fame, sonno, abitudine, chi c\'era. Non concludere tu.'},
      {et:'La complicazione',
       testo:'Nessuno di voi ha scelto:\n\ndi nascere qui — la lingua in cui pensa — la famiglia che gli ha insegnato che cosa è giusto — il carattere che si ritrova — di trovare bella una faccia e non un\'altra.\n\nDi quello che vi fa scegliere, quanto avete scelto?',
       nota:'È il punto in cui il gruppo del «sì» si assottiglia. Non lasciare che diventi fatalismo: la domanda non è «allora è tutto inutile», è «dove sta allora la libertà». Tienila in sospeso fino al quinto tempo.'},
      {et:'Il testo', fonte:'Spinoza, Lettera 58 a Schuller (1674)',
       testo:'«Immaginate che una pietra, mentre continua a muoversi, pensi e sappia di sforzarsi di continuare a muoversi. Questa pietra crederà di essere liberissima.»\n\nGli uomini si credono liberi «solo perché sono consapevoli delle proprie voglie e ignorano le cause da cui sono determinati».',
       nota:'Fai pesare la seconda frase: non dice che ci illudiamo perché siamo stupidi, dice che l\'illusione nasce da un\'asimmetria — le voglie le sentiamo, le cause no. È una spiegazione, non un\'accusa.'},
      {et:'Il ritorno',
       testo:'Spinoza non dice che la libertà non esiste.\n\nDice che non è dove la cercavate.\n\nUna pietra che sapesse perché sta volando sarebbe più libera di voi che non lo sapete. Non perché possa deviare: perché capisce.\n\nAllora: che cosa vuol dire essere liberi?',
       nota:'Qui si apre l\'Etica: la passione che comprendo smette di subirmi. Se resta tempo, chiedi un esempio personale — una rabbia di cui hanno capito la causa e che si è sciolta. Funziona quasi sempre.'}
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia moderna · 11 — Leibniz': {
  albero: {
    n:'Leibniz', d:'infiniti punti di vista sullo stesso mondo',
    f:[
      {n:'Due tipi di verità',
       f:[{n:'Di ragione', d:'il contrario è impossibile: identità e non contraddizione'},
          {n:'Di fatto', d:'il contrario resta pensabile'},
          {n:'Ragion sufficiente', d:'nulla è senza perché'},
          {n:'Inclina senza necessitare', d:'la formula che salva la libertà'}]},
      {n:'La monade',
       f:[{n:'Semplice, inestesa, indivisibile', d:'un atomo di forza, non di materia'},
          {n:'«Senza finestre»', d:'nulla entra, nulla esce'},
          {n:'Percezione', d:'rappresenta l\'universo da un punto di vista'},
          {n:'Appetizione', d:'la spinta che la fa cambiare'}]},
      {n:'La scala degli esseri',
       f:[{n:'Monadi nude', d:'percezioni confuse'},
          {n:'Anime', d:'memoria e sensazione'},
          {n:'Spiriti', d:'appercezione: coscienza di percepire'},
          {n:'Piccole percezioni', d:'il rumore del mare è fatto di gocce che non sentiamo'},
          {n:'Indiscernibili', d:'non esistono due monadi uguali'}]},
      {n:'Armonia prestabilita',
       f:[{n:'Due orologi regolati all\'origine'},
          {n:'Corpo e anima non si toccano', d:'corrispondono'},
          {n:'Risolve il problema di Cartesio'}]},
      {n:'Dio e il male',
       f:[{n:'Infiniti mondi possibili'},
          {n:'Dio sceglie il migliore', d:'non il più comodo: il più ricco di essere'},
          {n:'I beni non stanno tutti insieme'},
          {n:'Teodicea', d:'e poi arriva il Candide di Voltaire'}]}
    ]
  },
  provocazione: {
    titolo:'Difendete il terremoto',
    durata:'un\'ora',
    atti:[
      {et:'L\'aggancio',
       testo:'1º novembre 1755, giorno di Ognissanti. Lisbona crolla in sei minuti mentre le chiese sono piene. Trentamila morti, forse novantamila.\n\nUn filosofo sostiene che questo è il migliore dei mondi possibili.\n\nIl vostro compito, per quest\'ora, è difenderlo.',
       nota:'Assegna il compito come un incarico, non come una domanda: devono difendere una tesi che quasi tutti trovano oscena. Il fastidio è il motore dell\'ora. Se qualcuno rifiuta, tanto meglio: è già il Candide.'},
      {et:'Lo schieramento',
       testo:'Un mondo con Lisbona può essere il migliore possibile?',
       opzioni:['Si può difendere', 'Non si può difendere'],
       nota:'Fai parlare prima chi dice di no — è la posizione facile. Poi chiedi a chi dice di sì di provarci sul serio. Tieni gli argomenti dei due gruppi: serviranno.'},
      {et:'La complicazione',
       testo:'Provate a costruire un mondo migliore. Regola sola: niente contraddizioni.\n\nTogliete il male fisico → togliete le leggi fisiche costanti → niente scienza, niente previsione.\nTogliete il male morale → togliete la scelta → niente uomini, solo automi.\n\nUn mondo senza terremoti e un mondo con uomini liberi: siete sicuri che stiano insieme?',
       nota:'Falli lavorare davvero: due minuti a coppie per progettare il mondo migliore, poi raccogli e mostra il costo nascosto di ogni miglioria. È qui che si capisce la mossa di Leibniz: i beni sono incompatibili fra loro.'},
      {et:'Il testo', fonte:'Leibniz, Saggi di teodicea (1710)',
       testo:'Dio sceglie fra infiniti mondi possibili quello che ottiene «il massimo di essere con il minimo di mezzi».\n\nNon il mondo senza mali: il mondo in cui la somma è più alta.',
       nota:'Chiarisci che «migliore» qui è un conto, non un elogio. E che il conto lo fa qualcuno che vede tutti i mondi insieme — cioè nessuno di noi.'},
      {et:'Il ritorno',
       testo:'Voltaire non ha risposto con un argomento. Ha scritto un romanzo, e ha messo il terremoto di Lisbona in mezzo a un ragazzo che continua a ripetere che tutto va per il meglio.\n\nChi ha ragione dipende da una domanda sola:\n\nsi può giudicare un tutto vedendone un pezzo?',
       nota:'È la domanda che porterai dentro Kant. Non risolverla. Se avanza tempo, leggi tre righe del Candide: la risata fa più danno di una confutazione, e loro lo sentono.'}
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia moderna · 12 — Hobbes': {
  albero: {
    n:'Hobbes', d:'l\'uomo è un corpo, lo Stato è una macchina',
    f:[
      {n:'Materialismo',
       f:[{n:'Tutto è corpo in movimento'},
          {n:'Ragionare è calcolare', d:'si sommano e si sottraggono nomi'},
          {n:'Contro il cogito', d:'ciò che pensa potrebbe essere il corpo'},
          {n:'Determinismo', d:'libertà = assenza di ostacoli esterni'}]},
      {n:'Che cosa possiamo sapere',
       f:[{n:'Certezza solo di ciò che costruiamo'},
          {n:'Filosofia naturale', d:'corpi naturali: ipotesi'},
          {n:'Filosofia civile', d:'corpi artificiali: dimostrazione'},
          {n:'Nessun sommo bene', d:'il desiderio non si ferma mai'}]},
      {n:'Stato di natura', d:'non un\'epoca: un esperimento mentale',
       f:[{n:'Uguaglianza', d:'il più debole uccide il più forte nel sonno'},
          {n:'Scarsità e diffidenza'},
          {n:'Bellum omnium contra omnes'},
          {n:'Né giusto né ingiusto', d:'manca la legge, non la bontà'},
          {n:'«Solitaria, misera, brutale e breve»'}]},
      {n:'Il patto',
       f:[{n:'Diritto naturale', d:'libertà illimitata: è il problema'},
          {n:'Legge naturale', d:'calcolo di prudenza: cercare la pace'},
          {n:'Trasferimento del diritto', d:'tutti insieme, o nessuno'},
          {n:'Il sovrano non è parte del patto', d:'quindi non può violarlo'}]},
      {n:'Il Leviatano',
       f:[{n:'Potere indivisibile', d:'dividerlo è preparare la guerra civile'},
          {n:'Giuspositivismo', d:'è giusto ciò che la legge comanda'},
          {n:'Un limite solo', d:'nessuno è obbligato a lasciarsi uccidere'}]}
    ]
  },
  provocazione: {
    titolo:'Da domattina non c\'è più nessuna legge',
    durata:'un\'ora',
    atti:[
      {et:'L\'aggancio',
       testo:'Da domani mattina alle otto: niente polizia, niente giudici, niente tribunali, niente multe. Nessuno vi punirà per nulla, mai più.\n\nNon è una fantasia buonista: è esattamente la situazione.\n\nQuanto tempo passa prima che chiudiate la porta di casa a chiave e non usciate più?',
       nota:'Non chiedere «che cosa fareste voi»: risponderanno tutti che si comporterebbero bene. Chiedi che cosa farebbero gli altri. La differenza fra le due risposte è già mezza lezione.'},
      {et:'Lo schieramento',
       testo:'Senza Stato la gente resterebbe civile?',
       opzioni:['Sì, la maggioranza sì', 'No, finirebbe male'],
       nota:'Segna i numeri. Poi la domanda che scompiglia entrambi: «chi di voi, stanotte, lascerebbe la porta aperta?». Quasi nessuno alza la mano, anche fra quelli del sì.'},
      {et:'La complicazione',
       testo:'Hobbes non sta dicendo che siete cattivi.\n\nSta dicendo tre cose che sono vere anche di gente perbene:\n\nsiete più o meno ugualmente forti — quindi nessuno è al sicuro;\nle cose che volete non bastano per tutti;\nognuno sa che gli altri stanno facendo lo stesso calcolo.\n\nBasta questo. Anche se foste tutti buoni, dovreste colpire per primi.',
       nota:'È il passaggio decisivo e va fatto lentamente: la guerra non nasce dalla malvagità ma dalla paura reciproca fra uguali. Chi ha risposto «resteremmo civili» deve spiegare perché comunque chiuderebbe a chiave.'},
      {et:'Il testo', fonte:'Hobbes, Leviatano, XIII (1651)',
       testo:'Nello stato di natura non c\'è industria, né agricoltura, né arti, né lettere, né società;\n\ne, quel che è peggio, «continua paura e pericolo di morte violenta: e la vita dell\'uomo solitaria, misera, sgradevole, brutale e breve».',
       nota:'Fai contare quante cose spariscono nell\'elenco prima di arrivare alla paura. Hobbes non elenca crimini: elenca civiltà. È l\'assenza di futuro che rende la vita brutale, non la violenza.'},
      {et:'Il ritorno',
       testo:'Ora il conto.\n\nSe avete detto che resteremmo civili, dovete spiegare la porta chiusa a chiave.\n\nSe avete detto di no, dovete accettare il prezzo che Hobbes vi chiede: consegnare tutto — tutto — a un potere che poi non potrete più revocare. Perché un potere revocabile non fa paura, e un potere che non fa paura non serve a niente.\n\nQuale dei due prezzi è più alto?',
       nota:'Non chiudere. È la domanda che apre Locke la volta dopo: si può avere protezione senza consegnare tutto? Se qualcuno lo dice da solo, hai già la lezione seguente.'}
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia moderna · 13 — Locke': {
  albero: {
    n:'Locke', d:'l\'esperienza, e i limiti che ha',
    f:[
      {n:'Contro le idee innate',
       f:[{n:'Tabula rasa', d:'un foglio bianco'},
          {n:'Bambini e popoli lontani', d:'non le pensano affatto'},
          {n:'Se tutto viene dai sensi', d:'allora contano educazione e ambiente'}]},
      {n:'Le idee',
       f:[{n:'Semplici', d:'la mente le riceve: non può inventarle'},
          {n:'Complesse', d:'la mente le costruisce'},
          {n:'Sensazione e riflessione', d:'le due porte dell\'esperienza'},
          {n:'Modi, sostanze, relazioni'},
          {n:'Primarie e secondarie', d:'estensione sì, colore no'},
          {n:'La sostanza', d:'«un non so che»: il limite onesto'}]},
      {n:'Linguaggio e generale',
       f:[{n:'Esistono solo cose singole'},
          {n:'Le idee generali sono segni', d:'il generale sta nella lingua'}]},
      {n:'L\'identità personale',
       f:[{n:'Non il corpo', d:'cambia'},
          {n:'Non l\'anima-sostanza', d:'non la percepiamo'},
          {n:'Coscienza e memoria'}]},
      {n:'La politica',
       f:[{n:'Stato di natura già razionale', d:'non guerra: legge di natura'},
          {n:'Vita, libertà, proprietà', d:'diritti che il patto trova, non crea'},
          {n:'La proprietà nasce dal lavoro'},
          {n:'Potere fiduciario', d:'un mandato, e quindi revocabile'},
          {n:'Diritto di resistenza'},
          {n:'Tolleranza', d:'lo Stato non può salvarti l\'anima'}]}
    ]
  },
  provocazione: {
    titolo:'Nessuno ha creato la terra. Perché quel campo è tuo?',
    durata:'un\'ora',
    atti:[
      {et:'L\'aggancio',
       testo:'Nessuno di noi ha fatto la terra.\n\nEppure quel campo è di qualcuno, e se ci entro chiama i carabinieri.\n\nGiustificatelo. Regola: non vale dire «l\'ha comprato» — sposta soltanto la domanda a chi gliel\'ha venduto. Risalite fino al primo.',
       nota:'La regola è tutto: senza di essa la discussione muore in dieci secondi. Insisti sul «primo proprietario»: da dove viene il diritto del primo?'},
      {et:'Lo schieramento',
       testo:'La proprietà privata della terra si può giustificare?',
       opzioni:['Sì, si giustifica', 'No, è solo un fatto di forza'],
       nota:'Il gruppo del «no» va preso sul serio: è la posizione di Rousseau, che arriverà fra qualche lezione. Annotatela: la riprenderai.'},
      {et:'La complicazione',
       testo:'Locke ha la risposta più forte mai data: il lavoro. La terra è comune, ma il mio corpo è mio, e quindi lo è la mia fatica. Chi dissoda un campo ci mette dentro qualcosa di sé.\n\nMa lui stesso pone due limiti:\n\nprendi solo quanto non si guasta;\nlascia agli altri «abbastanza, e altrettanto buono».\n\nCon il denaro, che non marcisce, il primo limite salta. E il secondo?\n\nLocke scrive tutto questo mentre è azionista della Royal African Company, che commercia schiavi.',
       nota:'L\'ultima riga è vera e va detta senza commentarla: lasciala cadere e aspetta. Non serve trasformarla in processo — serve che vedano che un argomento può essere potente e avere un buco, e che i due fatti convivono nella stessa persona.'},
      {et:'Il testo', fonte:'Locke, Secondo trattato sul governo, § 27 (1690)',
       testo:'«Ogni uomo ha una proprietà nella propria persona: su questa nessuno ha diritto se non lui stesso. Il lavoro del suo corpo e l\'opera delle sue mani sono propriamente suoi.»\n\nCiò che toglie dallo stato comune e vi mescola il proprio lavoro, «diventa suo».',
       nota:'Fai notare la catena: mio corpo → mio lavoro → mia la cosa lavorata. È la fondazione di tutto il liberalismo, e sta in tre passaggi.'},
      {et:'Il ritorno',
       testo:'Torniamo al campo.\n\nSe la proprietà nasce dal lavoro, allora chi non ha lavorato quel campo — l\'erede, il compratore, l\'azionista — su che cosa fonda il suo diritto?\n\nE se la risposta è «sul consenso di tutti gli altri», allora la proprietà non è un diritto naturale:\n\nè un patto che possiamo cambiare.',
       nota:'Qui si apre la strada a Rousseau e poi a Marx. Non anticiparli: basta che rimanga aperta la crepa fra «diritto naturale» e «patto revocabile».'}
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia moderna · 14 — Berkeley': {
  albero: {
    n:'Berkeley', d:'esse est percipi',
    f:[
      {n:'Perché lo fa', d:'è un vescovo: vuole togliere il fondamento all\'ateismo',
       f:[{n:'La materia è la radice del materialismo'},
          {n:'Tolta quella, resta Dio'}]},
      {n:'Nominalismo radicale',
       f:[{n:'Nessuna idea astratta', d:'prova a pensare «un triangolo» e basta'},
          {n:'Un particolare usato come segno'},
          {n:'Contro l\'astrazione di Locke'}]},
      {n:'Immaterialismo',
       f:[{n:'Cade primarie/secondarie', d:'non c\'è estensione senza colore'},
          {n:'La materia', d:'un sostrato mai percepito: parola vuota'},
          {n:'L\'oggetto è un fascio di idee', d:'la mela è rosso, tondo, dolce, sodo'}]},
      {n:'E allora il reale?',
       f:[{n:'Sensazioni', d:'vivaci, ordinate, non dipendono da noi'},
          {n:'Fantasie', d:'deboli, disordinate, nostre'},
          {n:'Reale non vuol dire materiale', d:'vuol dire regolare'},
          {n:'Le leggi di natura', d:'la grammatica con cui Dio ci parla'}]},
      {n:'Dio',
       f:[{n:'Qualcuno percepisce sempre'},
          {n:'Il mondo non si spegne quando chiudo gli occhi'},
          {n:'Da teoria della conoscenza a prova di Dio'}]}
    ]
  },
  provocazione: {
    titolo:'Quando uscite, quest\'aula continua a esistere?',
    durata:'un\'ora',
    atti:[
      {et:'L\'aggancio',
       testo:'Fra un\'ora uscite tutti da qui e chiudo la porta.\n\nQuest\'aula continua a esistere?\n\nDimostratelo. Non vale «se torno domani la ritrovo»: quello lo saprete solo tornando, cioè guardando di nuovo.',
       nota:'La regola vieta l\'unica risposta che daranno tutti. Tienila ferma: ogni volta che qualcuno dice «basta rientrare», ricordagli che sta di nuovo percependo. È così che si arriva al punto senza spiegarlo.'},
      {et:'Lo schieramento',
       testo:'Si può dimostrare che le cose esistono quando nessuno le guarda?',
       opzioni:['Sì, ovvio che esistono', 'No, non si può dimostrare'],
       nota:'Il gruppo del «sì» sarà quasi tutta la classe. Perfetto: chiedigli la dimostrazione, non l\'opinione. Segnati ogni prova che propongono — servono tutte al tempo dopo.'},
      {et:'La complicazione',
       testo:'Guardate l\'elenco delle vostre prove.\n\n«C\'è la telecamera» — un\'immagine, cioè una percezione.\n«Ci sono i muri» — visti, toccati: percezioni.\n«Lo dice la fisica» — letto, sentito: percezioni.\n\nOgni prova che l\'aula esiste non percepita è, essa stessa, una percezione.\n\nAdesso togliete dall\'aula il colore, la durezza, la forma, il freddo, il rumore. Che cosa resta?',
       nota:'L\'ultimo passaggio va fatto togliendo una qualità per volta, ad alta voce, guardando la stanza. Quando non resta niente, aspetta in silenzio. La materia, dice Berkeley, è esattamente quel niente.'},
      {et:'Il testo', fonte:'Berkeley, Trattato sui principi della conoscenza umana, § 3 (1710)',
       testo:'«Il loro essere consiste nell\'essere percepite: è del tutto impossibile che abbiano una qualsiasi esistenza fuori dalle menti che le percepiscono.»',
       nota:'Difendilo dall\'accusa di follia, che arriverà. Berkeley non nega la stanza: nega che sotto le sue qualità ci sia una sostanza che nessuno ha mai incontrato. È più empirista di Locke, non meno.'},
      {et:'Il ritorno',
       testo:'Resta un problema, e lo sente anche lui.\n\nSe l\'aula esiste solo mentre è percepita, quando usciamo tutti dovrebbe spegnersi. Ma domani la ritroviamo uguale.\n\nQuindi qualcuno l\'ha guardata tutta la notte.\n\nBerkeley è partito dall\'esperienza, la più sobria delle filosofie, ed è arrivato a Dio in dieci pagine. La domanda è: dove ha barato?',
       nota:'Non rispondere. Chi risponderà è Hume, la lezione dopo, applicando lo stesso metodo anche all\'io e alla causa — e senza fermarsi davanti a Dio.'}
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia moderna · 15 — Hume': {
  albero: {
    n:'Hume', d:'l\'abitudine al posto della necessità',
    f:[
      {n:'Le percezioni',
       f:[{n:'Impressioni', d:'forza e vivacità'},
          {n:'Idee', d:'copie più deboli'},
          {n:'Il criterio', d:'da quale impressione viene? se da nessuna, è parola vuota'},
          {n:'Associazione', d:'somiglianza, contiguità, causa-effetto'}]},
      {n:'Le due classi di proposizioni',
       f:[{n:'Relazioni fra idee', d:'certe, ma non dicono nulla del mondo'},
          {n:'Dati di fatto', d:'dicono del mondo, ma non sono necessari'},
          {n:'Non esiste una terza', d:'ed è la fine della metafisica'}]},
      {n:'La causalità',
       f:[{n:'Non è conoscibile a priori', d:'ogni effetto è ugualmente pensabile'},
          {n:'Congiunzione costante', d:'vediamo il dopo, non il perciò'},
          {n:'Abitudine', d:'la necessità è nell\'occhio, non nell\'oggetto'},
          {n:'Credenza', d:'e su questa sta tutta la scienza'},
          {n:'Il circolo dell\'induzione', d:'per fondarla servirebbe l\'induzione'}]},
      {n:'L\'io',
       f:[{n:'Cerco l\'io e trovo percezioni'},
          {n:'Fascio di percezioni'},
          {n:'L\'unità la fa l\'immaginazione'}]},
      {n:'La morale',
       f:[{n:'La ragione non muove ad agire'},
          {n:'«Schiava delle passioni»'},
          {n:'Da «è» non segue «deve»', d:'la legge di Hume'},
          {n:'Simpatia', d:'il fondamento dei giudizi morali'}]}
    ]
  },
  provocazione: {
    titolo:'Scommettete che domani sorge il sole',
    durata:'un\'ora',
    atti:[
      {et:'L\'aggancio',
       testo:'Scommettete tutto quello che avete che domani mattina il sole sorge?\n\nBene: alzate tutti la mano.\n\nAdesso dimostratelo. Non vale «è sempre successo»: quello dice che cosa è stato, e io vi ho chiesto che cosa sarà.',
       nota:'La prima parte deve essere veloce e allegra — scommettono tutti. Il colpo è la seconda. Da lì in poi non concedere mai il passaggio dal passato al futuro, per quante volte lo ritentino.'},
      {et:'Lo schieramento',
       testo:'Che domani sorga il sole è una cosa che sappiamo o in cui crediamo?',
       opzioni:['Lo sappiamo', 'Ci crediamo soltanto'],
       nota:'Molti sceglieranno «lo sappiamo» e diranno «per le leggi della fisica». Chiedi allora come sappiamo che le leggi valgono anche domani. La risposta sarà: perché finora hanno sempre valso. È esattamente il circolo.'},
      {et:'La complicazione',
       testo:'Il tacchino di Russell.\n\nOgni mattina alle nove l\'uomo gli porta da mangiare. Estate, inverno, pioggia, sole: mille mattine.\n\nDa buon scienziato, il tacchino formula la sua legge: «alle nove arriva il cibo».\n\nLa vigilia di Natale, alle nove, l\'uomo arriva e gli tira il collo.\n\nDove ha sbagliato il tacchino? In che cosa il vostro ragionamento sul sole è diverso dal suo?',
       nota:'Non permettere «il tacchino aveva pochi dati»: mille mattine sono tante quanto vuoi, e il problema non è il numero. È il salto. Se un gruppo insiste sulla fisica, chiedi che cosa garantisce che le leggi non cambino stanotte.'},
      {et:'Il testo', fonte:'Hume, Ricerca sull\'intelletto umano, IV-V (1748)',
       testo:'Che il pane nutra lo sappiamo per esperienza. Ma «che debba nutrire anche in futuro» non segue da nessun ragionamento.\n\nCiò che ci fa passare dall\'uno all\'altro non è la ragione: è «l\'abitudine, grande guida della vita umana».',
       nota:'Insisti sull\'ultima formula: guida, non illusione. Hume non ci invita a smettere di aspettarci il sole — sarebbe impossibile e stupido. Dice che quella non è conoscenza dimostrativa.'},
      {et:'Il ritorno',
       testo:'Su questa abitudine — non su una dimostrazione — stanno: la fisica, la medicina, il ponte su cui siete passati stamattina, la fiducia che il pane non vi avveleni.\n\nHume non lo dice per demolirle. Lo dice per sapere che cosa sono.\n\nSe questo vi sembra poco, la domanda è: che cosa volevate di più?\n\nUn tedesco leggerà queste pagine e dirà che lo hanno svegliato da un sonno dogmatico.',
       nota:'L\'ultima riga è l\'aggancio a Kant, e conviene lasciarla lì senza spiegarla. Se resta tempo, chiedi loro di scrivere una riga: «che cosa cambia, nella mia giornata di domani, se questo è vero?».'}
    ]
  }
}

};

if (typeof window !== 'undefined') window.LEZIONI = LEZIONI;
