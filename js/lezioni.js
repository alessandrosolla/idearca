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
'Filosofia antica · 4 — Socrate': {
  mappa: {
    n:'Socrate', d:'Atene, 470-399 a.C.: il filosofo che non ha scritto',
    f:[
      {r:'prima di tutto', n:'La questione socratica', d:'di lui sappiamo solo quello che altri hanno scritto',
       f:[
         {r:'perché', n:'Non ha lasciato una riga', d:'per scelta: il pensiero vive nel dialogo, non sulla pagina',
          f:[{piu:true, r:'come dice', n:'Il Fedro', d:'lo scritto non può rispondere a chi lo interroga'}]},
         {r:'lo racconta', n:'Platone lo mette in scena', d:'ne fa il protagonista di quasi tutti i dialoghi',
          f:[{piu:true, r:'ma', n:'Quanto è Socrate e quanto Platone?', d:'nei dialoghi tardi parla il maestro o l\'allievo?'}]},
         {r:'lo racconta', n:'Senofonte', d:'un Socrate saggio e perbene, quasi banale'},
         {r:'lo deride', n:'Aristofane', d:'nelle Nuvole, appeso a un cesto a studiare le nuvole',
          f:[{piu:true, r:'e lo confonde con', n:'Confuso con i sofisti', d:'insegna a «rendere più forte il discorso più debole»'},
             {piu:true, r:'rappresentata nel', n:'423 a.C.', d:'ventiquattro anni prima del processo'}]},
         {r:'lo giudica', n:'Aristotele', d:'gli attribuisce due cose: i ragionamenti induttivi e le definizioni universali'}
       ]},

      {r:'lavora dentro', n:'Atene in crisi', d:'non l\'Atene di Pericle: quella dopo',
       f:[
         {r:'segnata da', n:'La peste del 430', d:'muore un terzo della popolazione, e Pericle con essa'},
         {r:'e da', n:'La sconfitta del 404', d:'ventisette anni di guerra persi contro Sparta'},
         {r:'poi', n:'I Trenta tiranni', d:'otto mesi di terrore, millecinquecento uccisi',
          f:[{piu:true, r:'guidati da', n:'Crizia', d:'che era stato allievo di Socrate'}]},
         {r:'infine', n:'L\'amnistia del 403', d:'vietato processare chiunque per fatti politici',
          f:[{piu:true, r:'e quindi', n:'Bisogna trovare un\'altra accusa', d:'ed è la chiave del processo del 399'}]}
       ]},

      {r:'usa', n:'Il metodo', d:'non una dottrina: un modo di procedere',
       f:[
         {r:'parte da', n:'L\'ironia', d:'eironeia: fingere di non sapere per far parlare l\'altro',
          f:[{piu:true, r:'alla lettera', n:'Dissimulazione', d:'non è sarcasmo: è una mossa, non un tono'}]},
         {r:'continua con', n:'L\'elenchos', d:'la confutazione: si accetta la definizione dell\'altro e la si porta all\'assurdo',
          f:[{r:'produce', n:'L\'aporia', d:'il vicolo cieco in cui l\'interlocutore scopre di non sapere'},
             {piu:true, r:'e spesso', n:'Fa arrabbiare', d:'Trasimaco, Anito, Callicle: tutti se ne vanno furiosi'}]},
         {r:'finisce in', n:'La maieutica', d:'l\'arte della levatrice: non insegna, fa partorire',
          f:[{r:'presuppone', n:'La verità è già dentro', d:'chi risponde la trova da sé, o non l\'ha capita'},
             {piu:true, r:'la madre', n:'Fenarete era levatrice', d:'e lui dice di fare lo stesso mestiere con le anime'},
             {piu:true, r:'dimostrata nel', n:'Menone', d:'uno schiavo che non ha mai studiato ricava un teorema'}]},
         {r:'si regge su', n:'«So di non sapere»', d:'l\'unico sapere che ha, e che gli altri non hanno',
          f:[{r:'nasce da', n:'L\'oracolo di Delfi', d:'nessuno è più sapiente di Socrate'},
             {r:'che lui verifica', n:'Interrogando i sapienti', d:'politici, poeti, artigiani: nessuno sa quello che crede di sapere'},
             {piu:true, r:'lo racconta', n:'Apologia 21a', d:'e da lì nasce l\'odio di mezza città'}]},
         {r:'lo accompagna', n:'Il daimonion', d:'una voce interiore che non gli dice mai che cosa fare',
          f:[{r:'ma solo', n:'Che cosa non fare', d:'lo trattiene, non lo comanda'},
             {piu:true, r:'diventerà', n:'Capo d\'accusa', d:'«introduce divinità nuove»'}]}
       ]},

      {r:'cerca', n:'La definizione', d:'la domanda «che cos\'è?»',
       f:[
         {r:'non vuole', n:'Esempi', d:'«questa è un\'azione coraggiosa» non dice che cos\'è il coraggio'},
         {r:'vuole', n:'Ciò che vale per tutti i casi', d:'l\'unica cosa che li rende tutti quello che sono',
          f:[{piu:true, r:'Aristotele lo chiama', n:'Universale', d:'e gli riconosce di averlo scoperto'}]},
         {r:'contro', n:'Contro i sofisti', d:'se ogni verità è di qualcuno, non c\'è niente da definire',
          f:[{piu:true, r:'e infatti', n:'Il tema è lo stesso', d:'virtù, giustizia, legge: cambia il modo di trattarlo'}]},
         {r:'quasi sempre', n:'I dialoghi finiscono senza risposta', d:'l\'aporia non è un fallimento: è il risultato'}
       ]},

      {r:'in etica', n:'Virtù è conoscenza', d:'l\'intellettualismo etico',
       f:[
         {r:'quindi', n:'Nessuno fa il male volendo', d:'chi sbaglia ha sbagliato a valutare, non a volere',
          f:[{piu:true, r:'obietterà', n:'L\'obiezione di Aristotele', d:'esiste l\'akrasía: sapere il bene e fare il male lo stesso'}]},
         {r:'quindi', n:'La virtù si può insegnare', d:'se è sapere, si impara'},
         {r:'quindi', n:'Meglio subire ingiustizia che commetterla', d:'chi la commette danneggia la propria anima',
          f:[{piu:true, r:'rovescia', n:'La morale omerica', d:'aiutare gli amici e danneggiare i nemici'}]},
         {r:'lo scopo è', n:'La cura dell\'anima', d:'non il corpo, non i beni, non la reputazione'},
         {r:'e quindi', n:'La felicità è interiore', d:'chi è giusto sta bene anche se perde tutto'}
       ]},

      {r:'finisce nel', n:'Il processo del 399', d:'e non è un incidente',
       f:[
         {r:'accusato da', n:'Meleto, Anito e Licone', d:'un poeta, un politico democratico, un oratore'},
         {r:'di', n:'Non riconoscere gli dèi della città'},
         {r:'di', n:'Introdurre divinità nuove'},
         {r:'di', n:'Corrompere i giovani'},
         {r:'davanti a', n:'Cinquecentouno giudici', d:'condannato con circa trenta voti di scarto',
          f:[{piu:true, r:'e poi', n:'La seconda votazione è più dura', d:'più giudici lo vogliono morto di quanti lo credessero colpevole'}]},
         {r:'e lui', n:'Non si difende', d:'non piange, non porta i figli, non chiede pietà',
          f:[{r:'anzi propone', n:'Il pranzo nel Pritaneo', d:'l\'onore riservato ai vincitori olimpici'},
             {piu:true, r:'poi ripiega su', n:'Una multa', d:'che pagheranno gli amici: trenta mine'}]}
       ]},

      {r:'poteva', n:'Scappare', d:'e sceglie di no',
       f:[
         {r:'glielo propone', n:'Critone', d:'tutto è pronto: guardie corrotte, nave, asilo in Tessaglia'},
         {r:'lui risponde', n:'Parlano le Leggi', d:'le fa parlare in prima persona',
          f:[{r:'dicono', n:'Ti abbiamo fatto nascere e crescere'},
             {r:'dicono', n:'Sei rimasto settant\'anni', d:'potevi andartene e non l\'hai fatto: è un patto'},
             {r:'dicono', n:'Se ognuno viola quella che gli pesa', d:'nessuna legge resta in piedi'}]},
         {r:'e conclude', n:'Non si risponde all\'ingiustizia con l\'ingiustizia', d:'nemmeno quando la subisci tu'},
         {piu:true, r:'muore', n:'Bevendo la cicuta', d:'nel Fedone; le ultime parole sono un debito da pagare ad Asclepio'}
       ]},

      {r:'lascia', n:'Che cosa resta', d:'nessun libro, e mezza filosofia occidentale',
       f:[
         {r:'nascono', n:'Le scuole socratiche minori', d:'ciascuna prende un pezzo e lo esagera',
          f:[{r:'i', n:'Cinici', d:'Antistene, Diogene: la virtù basta, il resto è convenzione'},
             {r:'i', n:'Cirenaici', d:'Aristippo: il bene è il piacere presente'},
             {r:'i', n:'Megarici', d:'Euclide: il bene è l\'Uno di Parmenide',
              f:[{piu:true, r:'e inventano', n:'I paradossi logici', d:'il mentitore, il sorite'}]}]},
         {r:'nasce', n:'Platone', d:'che parte dalla domanda «che cos\'è» e ci mette le Idee'},
         {r:'nasce', n:'Il filosofo che muore per la verità', d:'una figura che l\'Occidente userà per sempre'},
         {piu:true, r:'e resta', n:'Il paragone con la torpedine', d:'Menone: chi lo tocca resta paralizzato'}
       ]}
    ],
    incroci:[
      {da:'Crizia', a:'Corrompere i giovani', r:'è il vero motivo di',
       perche:'Il capo dei Trenta era stato suo allievo, e con lui Alcibiade, che aveva tradito Atene due volte. Nessuno poteva dirlo in aula, ma tutti in tribunale lo sapevano.'},
      {da:'L\'amnistia del 403', a:'Non riconoscere gli dèi della città', r:'obbliga a passare per',
       perche:'Dopo l\'amnistia i fatti politici non si potevano processare. Restava l\'empietà: un\'accusa vaga e comoda, che permetteva di dire tutt\'altro da quello che si voleva punire.'},
      {da:'Il daimonion', a:'Introdurre divinità nuove', r:'diventa l\'accusa di',
       perche:'Una voce interiore che non passa dai templi né dai sacerdoti è, per una città greca, un culto privato. Da qui l\'accusa: non che non creda, ma che creda per conto suo.'},
      {da:'«So di non sapere»', a:'Interrogando i sapienti', r:'si guadagna gli odi con',
       perche:'Per verificare l\'oracolo va a dimostrare a uno per uno che non sanno. Ognuno di loro esce umiliato davanti a testimoni, e ricorda. Trent\'anni dopo, quei ricordi votano.'},
      {da:'La maieutica', a:'La verità è già dentro', r:'presuppone',
       perche:'Se il maestro non trasmette niente ma fa tirare fuori, allora chi risponde possedeva già ciò che dice. Platone ne farà una tesi: conoscere è ricordare.'},
      {da:'Contro i sofisti', a:'Confuso con i sofisti', r:'e però gli ateniesi lo scambiano per uno di loro',
       perche:'Socrate fa l\'esatto contrario dei sofisti: cerca definizioni che valgano per tutti, non discorsi che vincano. Ma pone le stesse domande scomode nello stesso modo, e la città non distingue — Aristofane lo mette in scena come sofista ventiquattro anni prima del processo.'},
      {da:'Nessuno fa il male volendo', a:'La cura dell\'anima', r:'porta a',
       perche:'Se il male nasce dall\'ignoranza, chi lo commette non è un nemico da punire ma un malato da curare. La filosofia diventa terapia, non tribunale.'},
      {da:'Non si risponde all\'ingiustizia con l\'ingiustizia', a:'Meglio subire ingiustizia che commetterla', r:'è il caso estremo di',
       perche:'La tesi che nei dialoghi sembra un paradosso da salotto viene messa alla prova su una condanna a morte ingiusta — e tiene. È l\'unica dimostrazione che conta.'},
      {da:'Parlano le Leggi', a:'La sconfitta del 404', r:'ha senso solo dopo',
       perche:'Atene ha appena visto che cosa succede quando ciascuno si fa la propria regola: due colpi di stato in sette anni. Un uomo che rifiuta di violare la legge che lo uccide sta dicendo qualcosa a quella città.'},
      {da:'Non ha lasciato una riga', a:'Quanto è Socrate e quanto Platone?', r:'genera',
       perche:'Un pensiero che vive solo nel dialogo non lascia un originale con cui confrontare le copie. Ogni ritratto è già un\'interpretazione, e la scelta di non scrivere è la causa del problema.'},
      {da:'Ciò che vale per tutti i casi', a:'Platone', r:'diventerà l\'Idea in',
       perche:'Socrate cerca la definizione e si ferma lì. Platone fa il passo che lui non fa: se esiste una definizione valida sempre, ciò che definisce deve esistere davvero, da qualche parte.'},
      {da:'Il pranzo nel Pritaneo', a:'Non si difende', r:'è il gesto che spiega',
       perche:'Poteva proporre l\'esilio e glielo avrebbero concesso. Chiede invece l\'onore dei campioni olimpici. Non è arroganza: è dire che accettare una pena significherebbe ammettere una colpa.'}
    ]
  },
  provocazione: {
    titolo:'La porta della cella è aperta',
    durata:'55 minuti',
    domandaMadre:'C\'è qualcosa per cui accettereste di subire un torto invece di commetterne uno?',
    perche:'La classe si trova a decidere per sé, non a giudicare un antico: condanna ingiusta, fuga già organizzata, nessuna conseguenza per nessuno. Tutti scappano. Poi arriva l\'argomento delle Leggi, che nessuno riesce a smontare pur volendolo — ed è a quel punto che «meglio subire ingiustizia che commetterla», che sui libri sembra una frase da santino, diventa una posizione che qualcuno in aula si trova a difendere davvero. E il colpo di scena finale — che Socrate poteva salvarsi già in tribunale e ha fatto di tutto per non farlo — sposta la domanda dall\'obbedienza alla coerenza.',
    occorrente:'Niente. Conviene però sapere in anticipo il finale, e non anticiparlo mai.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Siete in carcere. Domani vi uccidono.\n\nSiete innocenti: lo sapete voi e lo sa la città.\n\nStanotte un amico vi dice che è tutto pronto.\nLe guardie sono state pagate. La barca aspetta.\nDove andate vi accoglieranno.\nNessuno verrà punito al posto vostro.\n\nDovete solo alzarvi e uscire.\n\nC\'è una sola ragione per restare?',
       parlato:'Costruisci la scena lentamente e in seconda persona: siete voi, non un personaggio. Togli uno per uno tutti gli alibi — l\'innocenza è certa, il rischio è zero, nessun altro paga. Devono restare senza scappatoie comode.\n\nPoi la domanda, e pretendi una risposta secca. Alzata di mano, senza discussione: chi esce?\n\nEsce quasi tutta la classe. Segna il numero e non commentarlo: ci torni fra quarantacinque minuti.\n\nSe qualcuno chiede di che cosa sei accusato, rispondi soltanto: «di aver fatto domande».',
       seDicono:[
         {loro:'«Certo che scappo, è una condanna ingiusta.»',
          tu:'Quindi la tua regola è: le leggi valgono finché non ti colpiscono ingiustamente. Prova a scriverla per intero, come una legge dello Stato, e dimmi se la firmeresti.'},
         {loro:'«Non scapperei, ma solo per non mettere nei guai gli altri.»',
          tu:'Ti ho tolto anche quello: nessuno paga al posto tuo. Restano solo tu e la legge. Adesso?'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'La porta è aperta.',
       opzioni:['Esco', 'Resto'],
       parlato:'Metti i due numeri alla vista di tutti e chiedi tre motivazioni per parte, una frase ciascuna.\n\nPoi vai a stanare i pochi che restano, perché quasi sempre lo fanno per il motivo sbagliato — «l\'ho promesso», «sarebbe vigliacco». Chiedi loro: se domani la legge ti condannasse per il colore dei tuoi occhi, resteresti lo stesso?\n\nE al gruppo che esce, la domanda vera: state dicendo che una legge ingiusta non obbliga. Chi decide quali sono ingiuste? Tu, caso per caso, mentre la subisci?\n\nDa qui in poi nessuno può più cavarsela con l\'istinto.',
       seDicono:[
         {loro:'«Le leggi ingiuste non vanno rispettate: lo dicevano anche i partigiani.»',
          tu:'Argomento serio, e ci torneremo in quinta. Ma nota la differenza: chi disobbedisce per cambiare la legge lo fa alla luce del sole e ne accetta la pena. Chi scappa di notte non sta cambiando niente: sta facendo un\'eccezione per sé.'},
         {loro:'«È solo una legge, non è la mia vita.»',
          tu:'Allora hai stabilito una gerarchia: la tua vita vale più della regola comune. È una posizione difendibile — ed è esattamente quella che Socrate sta per attaccare. Tienila stretta, ti servirà.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Socrate risponde a Critone, ma non parla lui.\n\nFa parlare le Leggi di Atene:\n\n«Ti abbiamo fatto nascere, ti abbiamo cresciuto, ti abbiamo istruito.\nSei rimasto settant\'anni: potevi andartene quando volevi, e non l\'hai fatto.\nHai avuto un tribunale, e lo hai usato.\n\nE adesso che una sentenza non ti piace,\nvorresti distruggerci?\n\nUna città può reggersi, se ognuno viola la legge che gli pesa?»',
       parlato:'Fai notare la mossa prima del contenuto: Socrate non risponde in prima persona. Mette in scena le Leggi come persone che gli parlano — e chi discute non è più lui contro Critone, ma un uomo contro la città che lo ha fatto.\n\nPoi smonta l\'argomento in tre passaggi e falli valutare uno per uno:\n\n— hai ricevuto tutto da queste leggi: nascita legittima, educazione, protezione;\n— restare è stato un consenso, ripetuto ogni giorno per settant\'anni;\n— l\'eccezione che chiedi per te, se la chiedono tutti, non lascia in piedi nulla.\n\nÈ un ragionamento che quasi nessuno riesce a rompere, e va lasciato lì a fare il suo lavoro. Se qualcuno prova a dire che è ricatto affettivo, dagli ragione sul tono e riportalo sul terzo passaggio, che è quello duro.',
       seDicono:[
         {loro:'«Ma le Leggi non lo hanno condannato: lo hanno condannato dei giudici che hanno sbagliato.»',
          tu:'Ottima distinzione, ed è la migliore obiezione che esista. Socrate la concede: dice che a fargli torto sono gli uomini, non le leggi. Ma allora la domanda diventa: si distrugge lo strumento perché qualcuno lo ha usato male?'},
         {loro:'«Settant\'anni fa non ha firmato niente: che patto è?»',
          tu:'È il problema del contratto sociale, e lo solleverai di nuovo con Hobbes, Locke e Rousseau. Socrate risponde che il consenso è nei fatti — sei rimasto, hai usato i tribunali, hai fatto figli qui. Basta? Deciderai fra due anni.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'«Non bisogna commettere ingiustizia in nessun caso,\nnemmeno quando la si è subita.\n\nNé si deve rendere male per male,\nqualunque cosa si sia patito.\n\nQuesto, o Critone, lo credono in pochi:\ne fra chi lo crede e chi non lo crede\nnon c\'è più discorso possibile.»',
       testo:{fonte:'Platone, Critone 49b-d (IV secolo a.C.)',
              glossa:'Fino a quel momento la morale greca è quella di Omero: fare del bene agli amici e del male ai nemici. Qui, per la prima volta in Occidente, qualcuno sostiene che la vendetta è sempre sbagliata — non imprudente, sbagliata. E aggiunge che chi non lo accetta non ha più niente da dirsi con chi lo accetta.'},
       parlato:'Leggi il passo due volte. Poi fermati sull\'ultima frase, che è la più dura e viene sempre trascurata: Socrate dice che su questo punto non esiste discussione possibile. È il contrario del suo metodo — lui che discute tutto, qui dichiara un limite.\n\nPoi collega all\'etica: perché non si deve mai rispondere al male con il male? Non per bontà, ma per il ragionamento che hanno già visto — commettere ingiustizia rovina l\'anima di chi la commette. Chi si vendica non punisce l\'altro: danneggia sé stesso.\n\nSe qualcuno nomina il porgere l\'altra guancia, la nota giusta è che siamo quattro secoli prima, e che qui non c\'è nessun comandamento: c\'è una deduzione.',
       seDicono:[
         {loro:'«Ma questa è già morale cristiana.»',
          tu:'Ci somiglia, e per secoli qualcuno ci ha visto una profezia. La differenza sta nel motivo: nel Vangelo si perdona perché lo chiede Dio, qui si evita di far male perché farlo danneggia chi lo fa. Uno è un comando, l\'altro un calcolo sull\'anima.'},
         {loro:'«Allora bisogna lasciarsi fare tutto?»',
          tu:'No: Socrate ha combattuto in guerra tre volte e ha rifiutato, rischiando la vita, di eseguire un ordine dei Trenta. Non è passività. È il rifiuto di usare i mezzi dell\'avversario.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Ma c\'è un dettaglio che nessuno vi racconta.\n\nSocrate non doveva morire.\n\nAd Atene, dopo la condanna, l\'imputato proponeva la propria pena.\nSe avesse chiesto l\'esilio, gliel\'avrebbero concesso: molti se lo aspettavano.\n\nLui propose di essere mantenuto a spese dello Stato,\nnel Pritaneo, come i vincitori olimpici.\n\nE alla seconda votazione i giudici che lo vollero morto\nfurono più di quelli che lo avevano creduto colpevole.',
       parlato:'Lascia cadere il dato e aspetta. È il momento in cui la storia cambia forma: non è un innocente travolto, è un uomo che ha fatto di tutto perché lo condannassero.\n\nPoi la domanda: perché? E guidali senza dare la risposta. Accettare l\'esilio avrebbe voluto dire ammettere che c\'era qualcosa da scontare. Proporre una pena è riconoscere una colpa. Lui non ne riconosce nessuna, e quindi propone un premio.\n\nQui puoi aggiungere il retroscena politico, che spiega il processo meglio di qualsiasi accusa formale: Crizia, capo dei Trenta tiranni, era stato suo allievo; Alcibiade, che aveva tradito Atene due volte, pure. Dopo l\'amnistia del 403 nessuno poteva più essere processato per motivi politici — restava l\'empietà. Il processo parla di dèi e parla d\'altro.\n\nEd è per questo che la fuga sarebbe stata perfetta per tutti: gli accusatori volevano toglierselo di torno, non ucciderlo.',
       seDicono:[
         {loro:'«Allora è stato lui a cercarsi la morte.»',
          tu:'Attento alla parola: cercarsela vuol dire volerla. Lui non voleva morire — voleva non mentire. Che poi le due cose fossero incompatibili è una scoperta che fa insieme ai giudici, non un piano.'},
         {loro:'«Se scappava, tutti contenti.»',
          tu:'Esatto, e questo è il punto più scomodo dell\'ora: la scelta comoda era anche quella che accontentava chi lo aveva condannato. Rimanere non serviva a nessuno, tranne che a una cosa.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Torniamo alla cella.\n\nAll\'inizio quasi tutti siete usciti.\n\nAdesso la domanda non è più «scappereste?».\nÈ questa:\n\nc\'è qualcosa per cui accettereste di subire un torto\ninvece di commetterne uno?\n\nSe la risposta è no, avete una regola sola:\nfino a quando mi conviene.',
       parlato:'Rifai la votazione. I numeri si spostano quasi sempre, ma non è quello che conta: chiedi a due o tre che hanno cambiato di dire che cosa li ha fatti cambiare, ed è lì che si sente se l\'ora ha funzionato.\n\nPoi chiudi senza morale. Non dire che Socrate ha ragione: molti filosofi seri pensano che nel Critone abbia torto, e tu non stai facendo apologia. Di\' solo che da qui nasce una figura che l\'Occidente userà per duemilacinquecento anni — l\'uomo che muore per non tradire un ragionamento — e che ogni volta che qualcuno rifiuta di rispondere alla violenza con la violenza sta usando, spesso senza saperlo, un argomento nato in quella cella.\n\nUltima riga, se hai tempo: Socrate non ha scritto niente. Tutto quello che avete sentito oggi lo sappiamo perché altri hanno voluto ricordarlo. Anche questo fa parte del risultato.',
       seDicono:[
         {loro:'«Quindi bisogna sempre obbedire alla legge?»',
          tu:'Il Critone dice di sì, l\'Apologia dice che se gli ordinassero di smettere di filosofare non obbedirebbe. Sono nello stesso Platone, a pochi giorni di distanza. Tenerli insieme è il vero esercizio: obbedire alla pena, non al divieto.'}
       ]}
    ],
    riserve:[
      {titolo:'L\'oracolo che non si può credere',
       corpo:'Un amico va a Delfi e chiede se ci sia qualcuno più sapiente di Socrate. La Pizia risponde di no.\n\nSocrate, che è convinto di non sapere niente, decide che l\'oracolo dev\'essere smentito. Va dai politici, dai poeti, dagli artigiani — e scopre ogni volta la stessa cosa: sanno fare qualcosa, e proprio per questo si credono sapienti anche in tutto il resto.\n\nConclude che il dio aveva ragione per un motivo minimo: gli altri non sanno e credono di sapere, lui non sa e lo sa.',
       chiedi:'Che differenza pratica fa, sapere di non sapere? E soprattutto: quanti nemici si fa uno che gira la città a dimostrare a ciascuno che non sa quello che crede di sapere?'},
      {titolo:'Lo schiavo che sapeva la geometria',
       corpo:'Nel Menone, Socrate chiama uno schiavo che non ha mai studiato e, solo con domande — senza mai dirgli niente — gli fa costruire il quadrato di area doppia rispetto a uno dato.\n\nLo schiavo prima sbaglia (raddoppia il lato), poi si accorge da solo dell\'errore, poi trova la soluzione: il quadrato costruito sulla diagonale.',
       chiedi:'Se nessuno gliel\'ha insegnato, da dove viene quel sapere? Platone risponderà: se l\'anima lo ricorda, vuol dire che c\'era già prima di nascere. Vi convince — o c\'è una spiegazione più semplice che Socrate non ha considerato?'},
      {titolo:'Socrate appeso a un cesto',
       corpo:'Nel 423, ventiquattro anni prima del processo, Aristofane porta in scena le Nuvole. Socrate compare sospeso in un cesto, «per mescolare il mio pensiero sottile con l\'aria che gli somiglia», mentre gestisce una scuola dove si impara a non pagare i debiti rendendo più forte il discorso più debole.\n\nLa commedia arrivò terza su tre.',
       chiedi:'Nell\'Apologia, Socrate dice che i suoi veri accusatori non sono Meleto e Anito, ma quelli che da vent\'anni raccontano di lui una certa storia. Quanto pesa, in un processo, la caricatura che la città si è fatta dell\'imputato? E oggi?'}
    ],
    testi:[
      {fonte:'Platone, Apologia di Socrate 38a',
       corpo:'«Una vita senza ricerca non è degna di essere vissuta per un uomo.»',
       glossa:'La frase più citata e la più fraintesa: non dice che bisogna studiare, dice che una vita non esaminata — presa così com\'è arrivata, con le opinioni che ci si è trovati addosso — non è ancora una vita umana. È la definizione stessa del mestiere che sta per costargli la pena capitale.'},
      {fonte:'Platone, Apologia 30e — il tafano',
       corpo:'«Sono come un tafano attaccato a un cavallo grande e di razza, ma pigro per la sua stessa mole, che ha bisogno di essere pungolato. Se mi ucciderete, dormirete per il resto della vita.»',
       glossa:'Utile per far capire che non si difende: si presenta come un servizio pubblico sgradevole. Chiedi alla classe se conoscono qualcuno che fa questo mestiere oggi, e come viene trattato.'},
      {fonte:'Platone, Fedone 118a — le ultime parole',
       corpo:'«Critone, dobbiamo un gallo ad Asclepio: pagate il debito e non dimenticatevene.»',
       glossa:'Ad Asclepio, dio della medicina, si sacrificava un gallo dopo una guarigione. Si è discusso per secoli su che cosa significhi: che la morte guarisce dalla vita? che è guarito da una malattia dell\'anima? È il posto giusto per mostrare che i testi non si esauriscono, e che l\'ultima frase di un uomo può restare aperta per venticinque secoli.'}
    ],
    compito:'Mezza pagina. Descrivete una situazione in cui avete subito un torto e avreste potuto restituirlo, e non l\'avete fatto — oppure l\'avete fatto. Poi la domanda vera: che cosa vi ha trattenuti, o che cosa vi ha spinti? Non serve che sia una cosa grave.',
    fonti:[
      'Platone, Apologia di Socrate; Critone; Fedone 115a-118a; Menone 80a-86c',
      'Senofonte, Memorabili I 1-2 e Apologia di Socrate',
      'Aristofane, Nuvole (423 a.C.)',
      'Aristotele, Metafisica XIII 4, 1078b — l\'induzione e le definizioni universali',
      'Diogene Laerzio, Vite II 18-47 — gli aneddoti e le scuole socratiche',
      'Sull\'amnistia del 403 e il contesto del processo: Andocide, Sui misteri'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia antica · 5 — Platone: le Idee, l\'anima, la città': {
  mappa: {
    n:'Platone', d:'Atene, 428-347 a.C.: una filosofia nata da una condanna',
    f:[
      {r:'nasce da', n:'La morte di Socrate', d:'il fatto che spiega tutto il resto',
       f:[
         {r:'gli insegna', n:'La città uccide il migliore', d:'e lo fa legalmente, votando'},
         {r:'gli toglie', n:'La fiducia nella politica di allora', d:'né la democrazia né i Trenta valgono qualcosa',
          f:[{piu:true, r:'lo scrive nella', n:'Settima lettera', d:'«le leggi e i costumi si corrompevano in modo straordinario»'}]},
         {r:'gli lascia', n:'La domanda «che cos\'è»', d:'ma senza la risposta di Socrate, che si fermava all\'aporia'},
         {r:'lo porta a fondare', n:'L\'Accademia', d:'nel 387 a.C., alle porte di Atene',
          f:[{piu:true, r:'durerà', n:'Novecento anni', d:'fino alla chiusura per ordine di Giustiniano, 529 d.C.'},
             {piu:true, r:'sull\'ingresso', n:'«Non entri chi non sa la geometria»', d:'la tradizione lo riporta, le fonti sono tarde'}]},
         {r:'e ci prova', n:'Tre viaggi a Siracusa', d:'per fare di un tiranno un filosofo: falliscono tutti',
          f:[{piu:true, r:'nel primo', n:'Venduto come schiavo', d:'riscattato da un amico a Egina'}]}
       ]},

      {r:'risponde con', n:'Le Idee', d:'la mossa che Socrate non aveva fatto',
       f:[
         {r:'perché', n:'La definizione dev\'esistere', d:'se «giusto» vuol dire qualcosa sempre, quel qualcosa è reale'},
         {r:'sono', n:'Eterne e immutabili', d:'non nascono, non cambiano, non finiscono'},
         {r:'sono', n:'Uniche per ogni tipo di cosa', d:'un solo Bello per infinite cose belle'},
         {r:'sono', n:'Intelligibili, non visibili', d:'si colgono col pensiero, mai con gli occhi'},
         {r:'stanno in', n:'Un luogo sopra il cielo', d:'l\'iperuranio: è un\'immagine, non un indirizzo',
          f:[{piu:true, r:'immagine del', n:'Fedro 247c', d:'«la regione sopracelestiale, che nessun poeta ha mai cantato»'}]},
         {r:'in cima', n:'L\'Idea del Bene', d:'come il sole: dà l\'essere alle cose e la luce per vederle'},
         {r:'e le cose sensibili', n:'Ne partecipano', d:'ma il come resta il punto debole',
          f:[{r:'per', n:'Mímesis', d:'imitazione: la copia somiglia al modello'},
             {r:'per', n:'Méthexis', d:'partecipazione: la cosa ha una parte dell\'Idea'},
             {r:'per', n:'Parusía', d:'presenza: l\'Idea è nella cosa'},
             {piu:true, r:'e Aristotele obietterà', n:'Sono metafore poetiche', d:'tre parole per non spiegare'}]}
       ]},

      {r:'per arrivarci', n:'I gradi della conoscenza', d:'non tutti i modi di sapere valgono uguale',
       f:[
         {r:'in basso', n:'Dóxa', d:'opinione: riguarda ciò che diventa',
          f:[{r:'si divide in', n:'Eikasía', d:'immaginazione: ombre e riflessi'},
             {r:'e in', n:'Pístis', d:'credenza: le cose che si toccano'}]},
         {r:'in alto', n:'Epistéme', d:'scienza: riguarda ciò che è',
          f:[{r:'si divide in', n:'Diánoia', d:'la matematica: ragiona da ipotesi e usa figure'},
             {r:'e in', n:'Nóesis', d:'la dialettica: risale ai principi senza appoggi'}]},
         {r:'illustrati dalla', n:'Linea divisa', d:'un segmento tagliato in quattro parti disuguali',
          f:[{piu:true, r:'in', n:'Repubblica VI 509d'}]},
         {r:'e dal', n:'Mito della caverna', d:'prigionieri incatenati che scambiano le ombre per il mondo',
          f:[{r:'chi esce', n:'Deve tornare dentro', d:'ed è per questo che lo uccidono'},
             {piu:true, r:'in', n:'Repubblica VII 514a'}]},
         {r:'e conoscere è', n:'Anamnesi', d:'ricordare ciò che l\'anima ha visto prima di nascere',
          f:[{r:'dimostrata con', n:'Lo schiavo del Menone', d:'ricava un teorema senza averlo mai studiato'},
             {piu:true, r:'risolve', n:'Il paradosso di Menone', d:'non si cerca ciò che si sa né ciò che non si sa'}]}
       ]},

      {r:'presuppone', n:'L\'anima', d:'immortale, e divisa in tre',
       f:[
         {r:'è', n:'Immortale', d:'e il Fedone ne dà quattro prove',
          f:[{r:'perché', n:'I contrari nascono dai contrari', d:'come il sonno dalla veglia, la vita dalla morte'},
             {r:'perché', n:'Conosce le Idee', d:'e deve essere simile a ciò che conosce'},
             {piu:true, r:'perché', n:'È principio di vita', d:'e non può accogliere il proprio contrario'}]},
         {r:'ha', n:'Tre parti', d:'e sono in conflitto fra loro',
          f:[{r:'la', n:'Razionale', d:'logistikón: ha sede nella testa, conosce'},
             {r:'la', n:'Irascibile', d:'thymoeidés: nel petto, coraggio e sdegno'},
             {r:'la', n:'Concupiscibile', d:'epithymetikón: nel ventre, desideri e appetiti'}]},
         {r:'raffigurate dalla', n:'Biga alata', d:'un auriga e due cavalli, uno docile e uno ribelle',
          f:[{piu:true, r:'in', n:'Fedro 246a'}]},
         {r:'e passa per', n:'Metempsicosi', d:'rinasce in corpi diversi secondo come è vissuta',
          f:[{r:'raccontata nel', n:'Mito di Er', d:'il soldato che torna dall\'aldilà e racconta la scelta delle vite'},
             {piu:true, r:'dove', n:'«La colpa è di chi sceglie»', d:'«il dio non è responsabile»: Repubblica X 617e'}]}
       ]},

      {r:'si muove per', n:'Eros', d:'la forza che porta dal sensibile alle Idee',
       f:[
         {r:'non è', n:'Un dio', d:'è un demone, figlio di Poros e Penía: ricchezza e povertà'},
         {r:'è', n:'Mancanza', d:'si desidera solo ciò che non si ha'},
         {r:'sale per', n:'La scala della bellezza', d:'insegnata a Socrate da Diotima',
          f:[{r:'da', n:'Un corpo bello'},
             {r:'a', n:'Tutti i corpi belli'},
             {r:'a', n:'La bellezza delle anime'},
             {r:'a', n:'Leggi e conoscenze'},
             {r:'a', n:'Il Bello in sé'}]},
         {r:'perché il bello', n:'È l\'unica Idea che si vede', d:'l\'unica che ha un\'immagine sensibile',
          f:[{piu:true, r:'in', n:'Fedro 250d'}]},
         {piu:true, r:'e il filosofo è', n:'A metà fra sapienza e ignoranza', d:'come Eros: chi sa non cerca, chi ignora non sa di dover cercare'}
       ]},

      {r:'costruisce', n:'La città giusta', d:'la Repubblica: uno Stato per rispondere a una domanda morale',
       f:[
         {r:'ha', n:'Tre classi', d:'e corrispondono alle tre parti dell\'anima',
          f:[{r:'i', n:'Governanti-filosofi', d:'ragione: la loro virtù è la sapienza'},
             {r:'i', n:'Guerrieri', d:'animo: la loro virtù è il coraggio'},
             {r:'i', n:'Produttori', d:'desiderio: la loro virtù è la temperanza'}]},
         {r:'la giustizia è', n:'Ciascuno al proprio posto', d:'non uguaglianza: armonia fra parti diverse'},
         {r:'per le prime due classi', n:'Nessuna proprietà privata', d:'né case, né oro, né famiglia',
          f:[{r:'perché', n:'Chi possiede difende il suo', d:'e non più la città'},
             {r:'e quindi', n:'Donne e figli in comune', d:'nessuno sa chi è suo figlio, e li tratta tutti così'},
             {piu:true, r:'e le donne', n:'Fanno gli stessi mestieri', d:'la prima volta in Occidente che qualcuno lo scrive'}]},
         {r:'si regge su', n:'L\'educazione', d:'ginnastica per il corpo, musica per l\'anima, poi matematica e dialettica',
          f:[{piu:true, r:'la dialettica', n:'Non prima dei trent\'anni', d:'data prima, insegna solo a contraddire'}]},
         {r:'e su', n:'La nobile menzogna', d:'ai cittadini si racconta che il dio li ha impastati con metalli diversi',
          f:[{piu:true, r:'in', n:'Repubblica III 414b', d:'e il termine greco è pseudos: bugia'}]},
         {r:'degenera in', n:'Quattro forme malate', d:'e ognuna nasce dalla precedente',
          f:[{r:'la', n:'Timocrazia', d:'governo dell\'onore: comandano i guerrieri'},
             {r:'poi l\'', n:'Oligarchia', d:'governo dei ricchi: comanda il censo'},
             {r:'poi la', n:'Democrazia', d:'libertà senza misura: tutti uguali, anche i cavalli per strada'},
             {r:'infine la', n:'Tirannide', d:'nasce proprio dall\'eccesso di libertà'}]}
       ]},

      {r:'condanna', n:'L\'arte', d:'e caccia i poeti dalla città',
       f:[
         {r:'perché è', n:'Copia di una copia', d:'il letto dipinto imita il letto costruito, che imita l\'Idea di letto'},
         {r:'quindi è', n:'Lontana tre gradi dal vero'},
         {r:'e perché', n:'Parla alla parte peggiore dell\'anima', d:'commuove invece di far ragionare'},
         {r:'ma lui stesso', n:'Scrive miti bellissimi', d:'la caverna, Er, la biga: la contraddizione è sotto gli occhi',
          f:[{piu:true, r:'e ammette', n:'Un\'antica discordia', d:'«fra la filosofia e la poesia»: Repubblica X 607b'}]}
       ]},

      {r:'lascia', n:'Che cosa resta', d:'un\'ombra lunga duemilaquattrocento anni',
       f:[
         {r:'introduce', n:'Il dualismo', d:'due mondi, e il nostro è quello di sotto'},
         {r:'diventa', n:'Il pensiero cristiano', d:'Agostino leggerà le Idee come pensieri di Dio'},
         {r:'viene attaccato da', n:'Aristotele', d:'«amico Platone, ma più amica la verità»'},
         {r:'e nel Novecento', n:'Accusato da Popper', d:'primo nemico della società aperta, padre del totalitarismo',
          f:[{piu:true, r:'gli si risponde', n:'La Repubblica non è un programma', d:'è un modello per guardare dentro l\'anima'}]},
         {piu:true, r:'e Whitehead scrive', n:'Note a piè di pagina di Platone', d:'tutta la filosofia europea'}
       ]}
    ],
    incroci:[
      {da:'La città uccide il migliore', a:'Deve tornare dentro', r:'è il destino di chi esce, in',
       perche:'Nella caverna chi si libera e torna a raccontare viene deriso e, dice Platone, ucciso se potessero prenderlo. Non è un\'ipotesi: sta descrivendo quello che ha visto fare al suo maestro.'},
      {da:'La definizione dev\'esistere', a:'La domanda «che cos\'è»', r:'compie il passo mancante in',
       perche:'Socrate cerca la definizione e si ferma quando non la trova. Platone fa la deduzione che lui non fa: se una definizione valida sempre è possibile, allora ciò che definisce deve esistere davvero, e non fra le cose che cambiano.'},
      {da:'Anamnesi', a:'Immortale', r:'richiede che l\'anima sia',
       perche:'Se conoscere è ricordare, l\'anima deve aver visto le Idee prima di entrare nel corpo. La teoria della conoscenza e quella dell\'anima si reggono l\'una sull\'altra: togline una e cade l\'altra.'},
      {da:'Tre parti', a:'Tre classi', r:'sono la stessa struttura in',
       perche:'La città non è un\'analogia decorativa: Platone la costruisce per leggere l\'anima ingrandita. Le stesse tre parti, le stesse virtù, la stessa giustizia — che è ordine fra parti diverse, non uguaglianza.'},
      {da:'La scala della bellezza', a:'Intelligibili, non visibili', r:'è la sola via verso ciò che è',
       perche:'Se le Idee non si vedono, serve qualcosa che tiri lo sguardo verso l\'alto partendo da ciò che si vede. Il bello è l\'unica Idea che ha un\'immagine sensibile, e l\'eros la forza che ci si aggrappa.'},
      {da:'Democrazia', a:'La città uccide il migliore', r:'è il giudizio maturato da',
       perche:'La democrazia ateniese ha condannato Socrate a maggioranza. Nella Repubblica diventa la penultima delle forme malate — e quella da cui, per eccesso di libertà, nasce il tiranno.'},
      {da:'La nobile menzogna', a:'Mito della caverna', r:'costruisce a tavolino le ombre di',
       perche:'Nella caverna le ombre tengono i prigionieri al loro posto, e chi le proietta non si vede. Nella città giusta la favola dei metalli fa lo stesso identico lavoro — solo che a proiettarla sono quelli che erano usciti.'},
      {da:'Copia di una copia', a:'Ne partecipano', r:'applica all\'arte il rapporto di',
       perche:'Se la cosa sensibile è già copia dell\'Idea, il quadro che la ritrae è copia di copia. La condanna dell\'arte non è un capriccio moralistico: è la conseguenza obbligata dell\'ontologia.'},
      {da:'Scrive miti bellissimi', a:'Parla alla parte peggiore dell\'anima', r:'contraddice',
       perche:'Caccia i poeti e poi affida le pagine decisive a immagini che colpiscono prima di convincere. O il mito fa qualcosa che l\'argomento non sa fare, oppure Platone non applica a sé la propria regola.'},
      {da:'Nessuna proprietà privata', a:'Accusato da Popper', r:'è il capo d\'accusa di',
       perche:'Abolire proprietà, famiglia e scelta del mestiere per le classi dirigenti, con una menzogna di Stato a tenere insieme il tutto: nel 1945 Popper ci legge il primo modello di società chiusa.'},
      {da:'L\'Idea del Bene', a:'Nóesis', r:'è il termine di',
       perche:'La dialettica non si ferma alle ipotesi come fa la matematica: risale fino a un principio che non ne ha bisogno. Quel principio è il Bene, e per questo il percorso educativo dura fino ai cinquant\'anni.'},
      {da:'Mancanza', a:'A metà fra sapienza e ignoranza', r:'definisce anche il filosofo come',
       perche:'Eros desidera ciò che non ha: se avesse la sapienza non la cercherebbe. Il filosofo non è il sapiente — è quello che sa di non averla e per questo si muove. È Socrate, descritto come un demone.'}
    ]
  },
  provocazione: {
    titolo:'L\'anello che rende invisibili',
    durata:'55 minuti',
    domandaMadre:'Se nessuno potesse mai saperlo, per quale motivo dovresti restare giusto?',
    perche:'È la domanda con cui Glaucone apre la Repubblica, e ha due qualità rare: si capisce in dieci secondi e non si risolve in un\'ora. La classe risponde d\'istinto che resterebbe onesta, poi scopre — con l\'esperimento del giusto creduto ingiusto — che sta difendendo la reputazione e non la giustizia. E il colpo di scena finale ribalta il giudizio su Platone: per rispondere ha dovuto costruire uno Stato che abolisce proprietà, famiglia e poesia, e che mente ai propri cittadini. Il prezzo della risposta diventa la domanda dell\'ora dopo.',
    occorrente:'Un anello qualsiasi, anche il proprio, da tenere in mano mentre si racconta.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Un pastore trova nella terra spaccata da un terremoto\nun cadavere gigantesco con un anello d\'oro al dito.\n\nLo prende. Scopre che girandolo verso l\'interno\ndiventa invisibile.\n\nEntra a palazzo, seduce la regina,\nuccide il re e prende il potere.\n\nAdesso l\'anello è vostro.\nNessuno potrà mai sapere niente. Mai.\n\nChe cosa fate domani?',
       parlato:'Racconta la storia di Gige con calma, tenendo in mano un anello: è un dettaglio piccolo e funziona.\n\nPoi togli le scappatoie prima che le trovino: nessuna telecamera, nessun dio che guarda, nessun rimorso indotto da altri, e l\'anello non si rompe. L\'unica cosa che resta sei tu.\n\nRichiesta precisa: non «sareste onesti?», ma «che cosa fate domani, in concreto». Fai scrivere una riga su un foglio, anonima. Poi ne leggi qualcuna ad alta voce.\n\nQuasi sempre le risposte scritte sono più oneste delle risposte a voce, ed è la prima lezione dell\'ora.',
       seDicono:[
         {loro:'«Io resterei onesto comunque.»',
          tu:'Può darsi. Ma nota che me lo stai dicendo davanti a ventiquattro persone. Glaucone dice che chi lo afferma in pubblico difende la propria immagine, non la giustizia. Come facciamo a distinguere le due cose?'},
         {loro:'«Userei l\'anello solo per cose piccole.»',
          tu:'Allora la regola non è «sono giusto», è «sono giusto fino a una certa cifra». Dove la metti la cifra? E chi te l\'ha data?'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'Con l\'anello al dito, per sempre:',
       opzioni:['Resterei giusto', 'Non resterei giusto'],
       parlato:'Conta le mani e confronta i numeri con i bigliettini di prima: se non coincidono, mostralo. È il dato più interessante dell\'ora.\n\nPoi chiedi al gruppo del «resterei giusto» il motivo, e ascolta bene: quasi tutte le ragioni che daranno sono in realtà paure travestite — mi sentirei in colpa, poi non riuscirei a guardarmi allo specchio, prima o poi si scoprirebbe.\n\nFai notare che «mi sentirei in colpa» non è una risposta alla domanda: è la descrizione di un\'abitudine. Glaucone chiede perché la giustizia sia un bene in sé, non perché ci faccia sentire meglio.',
       seDicono:[
         {loro:'«Se tutti usassero l\'anello sarebbe il caos.»',
          tu:'È l\'argomento di Kant, e arriverà fra due anni. Ma qui non lo hanno tutti: ce l\'hai solo tu. Perché dovresti comportarti come se lo avessero tutti?'},
         {loro:'«Verrei scoperto, prima o poi nessuno è invisibile davvero.»',
          tu:'Stai rifiutando l\'ipotesi invece di rispondere. È esattamente la mossa che Glaucone si aspetta: rende visibile che la nostra onestà poggia sulla probabilità di essere visti.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Glaucone rilancia, e stringe.\n\nImmaginate due uomini.\n\nIl primo è perfettamente giusto,\nma tutti lo credono un criminale:\nviene deriso, torturato, ucciso.\n\nIl secondo è perfettamente ingiusto,\nma tutti lo credono un santo:\nonori, ricchezze, funerali di Stato.\n\nSceglietene una, per vostro figlio.',
       parlato:'Questo è il cuore dell\'ora e va dato lentamente. L\'esperimento serve a separare due cose che nella vita stanno sempre insieme: essere giusti e sembrarlo. Finché stanno insieme, nessuno sa quale delle due sta scegliendo.\n\nFai votare di nuovo, e questa volta per un figlio, non per sé: la risposta cambia, e vale la pena chiedere perché.\n\nPoi il passaggio decisivo: se scegliete la seconda vita, allora la giustizia non è un bene — è un costo che si paga per avere buona reputazione. E se scegliete la prima, dovete dire che cosa ci guadagna quell\'uomo mentre lo torturano.\n\nÈ a questa domanda che la Repubblica intera, dieci libri, cerca di rispondere.',
       seDicono:[
         {loro:'«Sceglierei la prima, ha la coscienza a posto.»',
          tu:'Bene: allora stai dicendo che c\'è qualcosa che sta dentro e che vale più di tutto quello che sta fuori. Dagli un nome. Platone lo chiamerà ordine dell\'anima, e per spiegarlo dovrà inventare uno Stato intero.'},
         {loro:'«La domanda è truccata: nella realtà non succede.»',
          tu:'Succede eccome, in piccolo, tutti i giorni: chi lavora bene e non viene riconosciuto, chi imbroglia e fa carriera. L\'esperimento non inventa niente, porta all\'estremo qualcosa che avete già visto.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'«Se ci fossero due anelli, e uno lo indossasse l\'uomo giusto\ne l\'altro l\'ingiusto,\n\nnessuno si dimostrerebbe tanto adamantino\nda perseverare nella giustizia\ne da tenere le mani lontane dalle cose altrui,\n\npotendo prendere senza timore quello che vuole dal mercato,\nentrare nelle case e unirsi a chi gli pare,\nuccidere e liberare chiunque a suo piacimento,\n\nfacendo insomma, fra gli uomini, come un dio.»',
       testo:{fonte:'Platone, Repubblica II, 360b-c (IV secolo a.C.)',
              glossa:'Attenzione a chi parla: non è Socrate, è Glaucone, e sta esponendo la tesi che vuole veder confutata. Platone mette l\'argomento più forte in bocca all\'avversario e lo lascia intero — è la sua onestà intellettuale, ed è il motivo per cui questa pagina è più famosa della risposta.'},
       parlato:'Leggi il passo e fermati su «come un dio»: è la formula esatta. L\'invisibilità non toglie i limiti morali, toglie i limiti e basta — e quello che resta è la definizione greca di divinità: poter fare ciò che si vuole senza rendere conto.\n\nPoi dai la risposta di Socrate, che è breve e va capita bene: l\'ingiusto non è un uomo felice che la fa franca, è un uomo in guerra con sé stesso. Le tre parti della sua anima — ragione, animo, desiderio — non sono più d\'accordo, e comanda quella sbagliata. La giustizia è la salute dell\'anima; l\'ingiustizia è una malattia che uno si porta addosso anche mentre vince.\n\nChiedi se convince. In genere metà classe dice di no, ed è un buon segno: significa che hanno capito che cosa è stato promesso.',
       seDicono:[
         {loro:'«È solo un modo elegante per dire che ci si sente in colpa.»',
          tu:'Non proprio: il senso di colpa lo senti, questa malattia puoi non sentirla affatto. Platone dice che il tiranno è l\'uomo più infelice del mondo anche se non se ne accorge. Ti convince che si possa stare male senza saperlo?'},
         {loro:'«Chi decide qual è la parte "giusta" che deve comandare?»',
          tu:'Domanda esatta, ed è il ponte con la seconda metà dell\'ora: per rispondere Platone dice che deve comandare chi conosce. E se lo applichi alla città, ottieni i filosofi al governo — con tutto quello che ne segue.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Per dimostrarvi che conviene essere giusti,\nPlatone costruisce una città intera.\n\nEccola.\n\nChi governa non possiede niente: né casa, né denaro.\nNon ha moglie né marito: donne e figli sono in comune,\ne nessuno sa chi è suo figlio.\nIl mestiere non lo sceglie: glielo assegna lo Stato.\nLa musica è controllata, i poeti sono espulsi.\n\nE ai cittadini si racconta una menzogna:\nche il dio li ha impastati con metalli diversi —\noro, argento, bronzo — e che il posto di ciascuno\nè scritto nella materia di cui è fatto.',
       parlato:'Dai l\'elenco senza commentarlo, una riga per volta. La reazione arriva da sola, di solito alla comunanza dei figli o alla menzogna.\n\nPoi la precisazione che rende la cosa più interessante e non meno: quelle regole valgono per chi comanda, non per i produttori. Platone toglie proprietà e famiglia proprio a chi ha il potere — perché chi possiede difende il suo e non più la città. Non è la fantasia di un tiranno: è un tentativo, radicale, di rendere il potere non conveniente.\n\nE due dettagli che spiazzano nella direzione opposta: nella sua città le donne fanno gli stessi mestieri degli uomini, governo compreso — nel IV secolo a.C., nessuno lo aveva mai scritto. E i governanti sono gli unici a cui è proibito arricchirsi.\n\nInfine la nobile menzogna, che è la crepa: l\'uomo che ha passato la vita a dire che la verità non dipende da chi parla, per tenere in piedi la città giusta ammette una bugia di Stato.',
       seDicono:[
         {loro:'«Ma questo è un regime totalitario.»',
          tu:'È l\'accusa di Popper, nel 1945, e non è banale. La difesa possibile è che la Repubblica non sia un programma di governo ma un modello ingrandito per guardare dentro l\'anima — Platone dice di leggere la città come si legge un testo scritto grande. Decidi tu se è una difesa o una scappatoia.'},
         {loro:'«Perché toglie la famiglia?»',
          tu:'Perché chi ha un figlio proprio comincia a preferirlo. Se nessuno sa chi è suo, li tratta tutti come tali. È un ragionamento coerente e disumano insieme: la coerenza è quello che dovete valutare.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'L\'anello è ancora lì.\n\nPrima domanda, di nuovo: che cosa fate domani?\n\nSeconda domanda, più difficile:\n\nandreste a vivere nella città che Platone ha costruito\nper dimostrarvi che dovete restare giusti?\n\nE se la risposta è no,\nallora dovete trovare voi un altro motivo.',
       parlato:'Rifai la votazione sull\'anello e confronta con i bigliettini iniziali. Poi poni la seconda domanda e lasciala pesare: quasi nessuno vuole vivere lì.\n\nIl punto su cui chiudere è questo, e va detto una volta sola: Platone è il primo che prende la domanda sul serio fino in fondo. Non risponde «perché è giusto e basta», non risponde «perché lo dice dio». Cerca una ragione che tenga anche per chi è invisibile — e per trovarla è disposto a rifare l\'uomo e la città.\n\nSe rifiutate il prezzo, la domanda resta aperta e diventa vostra. E ve la porterete addosso per tutto l\'anno: la ritroverete in Kant, in Mill, in Nietzsche, in ogni discussione sul perché non si dovrebbe barare quando barare conviene.\n\nNon chiudere con una morale. Chiudi con l\'anello in mano, e basta.',
       seDicono:[
         {loro:'«Quindi Platone ha fallito?»',
          tu:'Dipende da che cosa gli chiedi. Non ha convinto la maggioranza dei suoi lettori, e la sua città non è mai esistita. Ma ha stabilito che a quella domanda si deve rispondere con un ragionamento, non con una minaccia. Dopo di lui nessuno può più dire «sii giusto perché altrimenti ti punisco».'}
       ]}
    ],
    riserve:[
      {titolo:'La caverna',
       corpo:'Prigionieri incatenati fin da bambini, di spalle all\'ingresso, vedono sulla parete di fondo solo le ombre di oggetti portati dietro un muretto davanti a un fuoco. Per loro quelle ombre sono il mondo: danno nomi alle ombre e fanno gare a chi le riconosce prima.\n\nUno viene liberato. È costretto a girarsi, e la luce gli fa male. Fuori, all\'inizio non vede niente; poi le ombre, poi i riflessi nell\'acqua, poi le cose, infine il sole.\n\nSe torna dentro a raccontarlo, con gli occhi ormai disabituati al buio, sbaglia a riconoscere le ombre. Gli altri ridono, e dicono che uscire rovina la vista. E se qualcuno tentasse di liberarli, dice Platone, «lo ucciderebbero».',
       chiedi:'Quattro passaggi: le ombre, gli oggetti, la luce riflessa, il sole. E poi l\'obbligo di tornare giù. Perché deve tornare, se stava meglio fuori? E l\'ultima riga — Platone la scrive pochi anni dopo la morte di Socrate: a chi pensa?'},
      {titolo:'La scala di Diotima',
       corpo:'Nel Simposio, Socrate dice di aver imparato l\'amore da una donna, Diotima di Mantinea. La sua lezione è una scala: si comincia dal desiderio per un corpo bello; si capisce poi che la stessa bellezza è in tutti i corpi; si scopre che la bellezza dell\'anima vale più di quella del corpo; da lì si sale alle leggi e alle conoscenze belle; e in cima, all\'improvviso, si vede il Bello in sé — che non nasce e non muore, non è bello da una parte e brutto dall\'altra, e non è il volto di nessuno.',
       chiedi:'A ogni gradino si ama qualcosa di meno individuale. Alla fine si ama un\'idea, non una persona. È un guadagno o è una perdita? E la persona da cui siete partiti, in quella scala, che fine ha fatto?'},
      {titolo:'Il mito di Er',
       corpo:'Er muore in battaglia e torna in vita sul rogo funebre, dodici giorni dopo. Racconta di aver visto le anime scegliere la vita successiva. C\'erano tutte le vite possibili, di uomini e di animali, e la scelta era libera — ma l\'ordine per scegliere era stato sorteggiato.\n\nChi aveva sorteggiato il primo numero scelse subito, senza guardare bene: la tirannide più grande. Solo dopo si accorse che dentro c\'era anche il destino di divorare i propri figli, e si mise a piangere accusando la sorte.\n\nUlisse, che aveva l\'ultimo numero, girò a lungo e trovò in un angolo la vita di un uomo comune, che nessuno aveva voluto. Disse che avrebbe fatto la stessa scelta anche con il primo numero.',
       chiedi:'«La colpa è di chi sceglie, il dio non è responsabile.» Con che criterio si sceglie una vita, se non l\'hai ancora vissuta? E perché Ulisse, il più avventuroso di tutti, sceglie di essere nessuno?'}
    ],
    testi:[
      {fonte:'Platone, Repubblica VII 514a — l\'inizio della caverna',
       corpo:'«Immagina uomini in una dimora sotterranea a forma di caverna, che abbia l\'ingresso aperto alla luce per tutta la larghezza. Vi si trovano fin da bambini, con le gambe e il collo incatenati, così da dover restare fermi e guardare soltanto in avanti.»',
       glossa:'Nota il dettaglio: «fin da bambini». Non sono stati imprigionati, ci sono nati. Non stanno subendo una privazione, stanno vivendo l\'unica vita che conoscono — ed è questo che rende la liberazione dolorosa invece che gradita.'},
      {fonte:'Platone, Repubblica V 473d — i filosofi re',
       corpo:'«Se i filosofi non regneranno nelle città, o quelli che ora chiamiamo re e potenti non filosoferanno davvero e a sufficienza, non ci sarà tregua dai mali per le città né per il genere umano.»',
       glossa:'La frase è nota, ma va letta insieme a ciò che Platone chiede ai filosofi: non possedere niente, non avere famiglia, tornare nella caverna. Il potere, nella Repubblica, è un dovere sgradevole imposto a chi preferirebbe studiare — non un premio.'},
      {fonte:'Platone, Fedro 246a-b — la biga alata',
       corpo:'«Si immagini l\'anima come la forza congiunta di una pariglia alata e di un auriga. I cavalli degli dèi sono tutti buoni; quelli degli altri sono mescolati: uno è bello e buono, l\'altro è il contrario. Perciò guidare, per noi, è necessariamente difficile e faticoso.»',
       glossa:'È l\'immagine che spiega la tripartizione meglio di qualunque schema: l\'anima non è divisa in tre pezzi accostati, è un attacco unico che tira in direzioni diverse. E il conflitto non è un\'anomalia — è la condizione normale di chi non è un dio.'}
    ],
    compito:'Mezza pagina. Descrivete una cosa che non fate soltanto perché qualcuno potrebbe vedervi — una qualunque, anche minima. Poi provate a scrivere il motivo per cui non la fareste comunque, e siate onesti se non lo trovate: il punto in cui vi fermate è quello che ci interessa.',
    fonti:[
      'Platone, Repubblica II 357a-367e (Glaucone e Gige), III 414b, V 449a-473e, VI 509d, VII 514a-521b, VIII-IX, X 595a-608b e 614b-621d (mito di Er)',
      'Platone, Fedone 70c-107b; Menone 80d-86c; Fedro 246a-249d; Simposio 201d-212c',
      'Platone, Settima lettera 324b-326b — la delusione politica e i viaggi a Siracusa',
      'Aristotele, Metafisica I 6 e I 9 — la critica alle Idee',
      'K. Popper, La società aperta e i suoi nemici, vol. I (1945)',
      'A.N. Whitehead, Processo e realtà (1929) — le «note a piè di pagina»'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia antica · 6 — L\'ultimo Platone': {
  mappa: {
    n:'L\'ultimo Platone', d:'il filosofo che a settant\'anni smonta sé stesso',
    f:[
      {r:'si apre con', n:'L\'autocritica', d:'il Parmenide: Platone scrive le obiezioni contro le proprie Idee',
       f:[
         {r:'mette in scena', n:'Un Socrate giovanissimo', d:'che viene messo in difficoltà dal vecchio Parmenide',
          f:[{piu:true, r:'e', n:'Non riesce a rispondere', d:'per la prima volta il maestro perde'}]},
         {r:'obietta', n:'Di che cosa ci sono Idee?', d:'del bello sì, ma del fango, del pelo, dello sporco?',
          f:[{piu:true, r:'e Socrate', n:'Arrossisce', d:'Parmenide 130d: «sei ancora giovane, la filosofia non ti ha ancora preso»'}]},
         {r:'obietta', n:'Il terzo uomo', d:'l\'argomento che manda in pezzi la partecipazione',
          f:[{r:'perché', n:'Serve una terza Idea', d:'se uomo e Idea di uomo si somigliano, occorre un\'Idea che li accomuni'},
             {r:'e poi', n:'Una quarta, e una quinta', d:'all\'infinito: il regresso non si ferma'}]},
         {r:'obietta', n:'Due mondi separati non comunicano', d:'se le Idee sono altrove, non spiegano niente di qui',
          f:[{piu:true, r:'e peggio', n:'Dio non conoscerebbe noi', d:'e noi non conosceremmo le Idee: il chorismòs si ritorce contro'}]}
       ]},

      {r:'poi chiede', n:'Che cos\'è la scienza', d:'il Teeteto: tre risposte, tutte sbagliate',
       f:[
         {r:'prima', n:'Scienza è sensazione', d:'la tesi di Protagora, ripresa e demolita',
          f:[{r:'perché', n:'Si autoconfuta', d:'se ogni opinione è vera, è vera anche quella di chi nega Protagora'},
             {piu:true, r:'e perché', n:'Ricordare non è sentire', d:'chi ricorda sa senza percepire'}]},
         {r:'seconda', n:'Scienza è opinione vera', d:'ma non basta',
          f:[{r:'perché', n:'Si può azzeccare per caso', d:'come un giudice convinto da un buon oratore: crede il vero, non lo sa'}]},
         {r:'terza', n:'Opinione vera più ragione', d:'e neanche questa regge',
          f:[{r:'perché', n:'«Ragione» ha tre sensi', d:'e nessuno dei tre chiude il cerchio'}]},
         {r:'finisce in', n:'Aporia', d:'ma è un\'aporia che ha ripulito il campo'},
         {piu:true, r:'contiene', n:'La digressione sul filosofo', d:'Teeteto 172c: l\'uomo che non sa la strada per la piazza'}
       ]},

      {r:'compie', n:'Il parricidio', d:'il Sofista: per prendere il sofista bisogna uccidere Parmenide',
       f:[
         {r:'il problema è', n:'Il falso sembra impossibile', d:'dire il falso è dire ciò che non è, e il non essere non si dice',
          f:[{r:'e allora', n:'Il sofista è imprendibile', d:'può sempre dire che nessuno lo ha mai visto dire il falso'}]},
         {r:'la soluzione', n:'Il non essere è il diverso', d:'non l\'opposto dell\'essere: l\'altro da esso',
          f:[{r:'esempio', n:'«Non bello» non è il nulla', d:'è qualcosa che è, diverso dal bello'},
             {piu:true, r:'in', n:'Sofista 257b', d:'«quando diciamo non essere, non diciamo un contrario ma un diverso»'}]},
         {r:'poggia sui', n:'Cinque generi sommi', d:'le Idee comunicano fra loro secondo regole',
          f:[{r:'l\'', n:'Essere'},
             {r:'la', n:'Quiete'},
             {r:'il', n:'Movimento'},
             {r:'l\'', n:'Identico'},
             {r:'il', n:'Diverso', d:'ed è quello che risolve tutto'}]},
         {r:'quindi il falso è', n:'Dire di qualcosa qualcos\'altro', d:'non dire nulla: dire diversamente'},
         {r:'e per definire usa', n:'La diairesi', d:'divisione per dicotomie successive fino alla specie ultima',
          f:[{piu:true, r:'con esiti', n:'Comici', d:'il sofista come cacciatore di giovani ricchi; l\'uomo come bipede implume'}]}
       ]},

      {r:'ripensa', n:'La politica possibile', d:'il Politico e le Leggi: dopo il fallimento di Siracusa',
       f:[
         {r:'il re è', n:'Un tessitore', d:'intreccia i caratteri coraggiosi e quelli miti, come trama e ordito'},
         {r:'ma ammette', n:'La legge è il secondo meglio', d:'rigida e uguale per tutti, quando gli uomini sono diversi',
          f:[{r:'perché', n:'Il vero politico non c\'è', d:'e in sua assenza è meglio una regola scritta che un uomo'},
             {piu:true, r:'immagine', n:'Come il medico che parte', d:'lascia una ricetta scritta perché non può restare'}]},
         {r:'costruisce', n:'La città delle Leggi', d:'Magnesia: la seconda città, quella realizzabile',
          f:[{r:'con', n:'Cinquemilaquaranta famiglie', d:'un numero scelto perché divisibile in cinquantanove modi'},
             {r:'con', n:'Proprietà privata limitata', d:'nessuno può avere più del quadruplo del più povero'},
             {r:'e con', n:'I preamboli alle leggi', d:'ogni legge è preceduta da una spiegazione che persuade',
              f:[{piu:true, r:'perché', n:'Il cittadino non è uno schiavo', d:'e a un uomo libero si dà la ragione, non solo l\'ordine'}]}]},
         {r:'ma anche', n:'Il consiglio notturno', d:'un organo segreto che veglia sulla città',
          f:[{piu:true, r:'e prevede', n:'La pena di morte per empietà', d:'dopo cinque anni di rieducazione in carcere'}]}
       ]},

      {r:'ridefinisce', n:'Il bene raggiungibile', d:'il Filebo: né solo piacere né solo intelligenza',
       f:[
         {r:'confronta', n:'Piacere contro sapere', d:'quale delle due rende felice la vita?'},
         {r:'risponde', n:'La vita mista', d:'nessuna delle due da sola: una vita di solo piacere è quella di un mollusco',
          f:[{piu:true, r:'e infatti', n:'Nessuno sceglierebbe il piacere puro', d:'senza memoria di averlo provato né coscienza di provarlo'}]},
         {r:'distingue', n:'Piaceri puri e misti', d:'i puri non nascono da un dolore: i colori, i suoni, il sapere'},
         {r:'e ordina il tutto con', n:'Misura, proporzione, bellezza', d:'il bene non è una cosa: è la giusta mescolanza'}
       ]},

      {r:'racconta', n:'Come è fatto il mondo', d:'il Timeo: l\'unico dialogo cosmologico',
       f:[
         {r:'c\'è', n:'Il Demiurgo', d:'non crea dal nulla: ordina una materia che c\'è già',
          f:[{r:'guardando', n:'Il modello eterno', d:'le Idee: fa il mondo il più simile possibile a quelle'},
             {r:'perché', n:'Era buono e senza invidia', d:'e volle che tutto fosse simile a sé'}]},
         {r:'lavora su', n:'La chora', d:'lo spazio-ricettacolo: né Idea né cosa, la «terza specie»',
          f:[{piu:true, r:'descritta come', n:'Difficile e oscura', d:'Timeo 49a: si coglie «con un ragionamento bastardo»'}]},
         {r:'costruisce', n:'L\'anima del mondo', d:'l\'universo è un vivente dotato di anima e intelligenza'},
         {r:'e gli elementi con', n:'Triangoli', d:'fuoco tetraedro, terra cubo, aria ottaedro, acqua icosaedro',
          f:[{piu:true, r:'è', n:'La prima fisica matematica', d:'e Galileo la citerà'}]},
         {r:'definisce', n:'Il tempo', d:'«immagine mobile dell\'eternità», nato insieme al cielo'},
         {piu:true, r:'e ci mette dentro', n:'Atlantide', d:'nel Crizia, rimasto incompiuto a metà frase'}
       ]},

      {r:'forse insegnava', n:'Le dottrine non scritte', d:'ciò che nell\'Accademia si diceva e non si scriveva',
       f:[
         {r:'i principi sarebbero', n:'L\'Uno e la Diade', d:'il limite e l\'illimitato: da loro derivano le Idee stesse'},
         {r:'lo riferisce', n:'La testimonianza di Aristotele', d:'che era stato vent\'anni nell\'Accademia'},
         {r:'e resta', n:'La conferenza sul Bene', d:'il pubblico venne per l\'etica e si trovò davanti la matematica: se ne andarono tutti',
          f:[{piu:true, r:'lo racconta', n:'Aristosseno', d:'che dice di averlo sentito da Aristotele'}]},
         {r:'perché non scriverle', n:'Lo scritto non si difende', d:'nel Fedro: cade in mano a chiunque e non sa rispondere',
          f:[{piu:true, r:'e nella', n:'Settima lettera', d:'«non esiste né esisterà mai uno scritto mio su queste cose»'}]},
         {piu:true, r:'ne è nata', n:'La scuola di Tubinga', d:'che dagli anni Sessanta rilegge tutto Platone a partire da qui'}
       ]},

      {r:'lascia', n:'Che cosa cambia', d:'e non solo per Platone',
       f:[
         {r:'nasce', n:'La logica dei generi', d:'le Idee non stanno isolate: si mescolano secondo regole'},
         {r:'nasce', n:'Il problema della predicazione', d:'come fa una cosa a essere molte cose insieme?'},
         {r:'si apre la strada ad', n:'Aristotele allievo', d:'che prende la diairesi e ne fa la definizione per genere e differenza'},
         {r:'il Timeo diventa', n:'Il Platone del Medioevo', d:'per mille anni l\'unico dialogo letto in Occidente',
          f:[{piu:true, r:'nella traduzione di', n:'Calcidio', d:'e solo fino a Timeo 53c'}]},
         {r:'e resta', n:'Un pensiero che si corregge', d:'l\'unico filosofo antico di cui vediamo il pensiero cambiare'}
       ]}
    ],
    incroci:[
      {da:'Il terzo uomo', a:'Due mondi separati non comunicano', r:'insieme distruggono',
       perche:'Le due obiezioni colpiscono la stessa giuntura: il rapporto fra Idea e cosa. Se somigliarsi richiede una terza Idea si va all\'infinito; se invece non si somigliano, le Idee non spiegano più niente del mondo. Platone scrive tutte e due contro sé stesso.'},
      {da:'Il non essere è il diverso', a:'Il falso sembra impossibile', r:'scioglie',
       perche:'Finché «non essere» significa nulla, dire il falso è dire nulla e nessuna bugia è possibile. Se invece significa «diverso da», allora dire il falso è dire di una cosa qualcosa d\'altro — e il sofista si può finalmente accusare.'},
      {da:'Diverso', a:'La logica dei generi', r:'fonda',
       perche:'Il quinto genere non serve solo a salvare il falso: è ciò che permette a un\'Idea di essere sé stessa e diversa dalle altre. Da qui nasce l\'idea che i concetti si combinino secondo regole — cioè la logica.'},
      {da:'La diairesi', a:'Aristotele allievo', r:'diventa la definizione in',
       perche:'Dividere per dicotomie fino alla specie ultima è il metodo che Aristotele eredita e corregge: al posto della divisione a coppie mette la definizione per genere prossimo e differenza specifica. Il debito è visibile e non dichiarato.'},
      {da:'La legge è il secondo meglio', a:'La città delle Leggi', r:'giustifica',
       perche:'Nella Repubblica comandava chi sa, senza leggi scritte che gli legassero le mani. Qui Platone ammette che quell\'uomo non si trova, e ripiega su una città di leggi: peggiore in teoria, l\'unica possibile in pratica.'},
      {da:'I preamboli alle leggi', a:'Il consiglio notturno', r:'convive stranamente con',
       perche:'Lo stesso testo che vuole persuadere il cittadino invece di comandargli — perché non è uno schiavo — istituisce un organo segreto e la pena capitale per empietà. Le Leggi sono il libro più liberale e più cupo di Platone insieme.'},
      {da:'Si autoconfuta', a:'Scienza è sensazione', r:'demolisce',
       perche:'Se ogni opinione è vera per chi la ha, è vera anche l\'opinione di chi sostiene che Protagora sbaglia. La tesi si taglia da sola: è la confutazione più elegante dell\'antichità, e vale ancora oggi contro ogni relativismo assoluto.'},
      {da:'Il modello eterno', a:'Di che cosa ci sono Idee?', r:'presuppone risolta',
       perche:'Il Demiurgo guarda le Idee e copia. Ma di che cosa esistono Idee? Il Timeo lavora come se il Parmenide non avesse mai posto la domanda: è uno dei motivi per cui datare i dialoghi tardi è così difficile.'},
      {da:'Lo scritto non si difende', a:'Aporia', r:'spiega perché i dialoghi finiscono in',
       perche:'Se il libro non può rispondere a chi lo interroga, allora il massimo che può fare è lasciare il lettore con la domanda in mano. L\'aporia non è una resa: è la forma che un pensiero prende quando sa di essere scritto.'},
      {da:'La vita mista', a:'Misura, proporzione, bellezza', r:'si regge su',
       perche:'Se il bene non è né il piacere né l\'intelligenza, dev\'essere il modo in cui si mescolano. E allora il bene non è una cosa da avere: è una proporzione da mantenere — la stessa idea che regge l\'anima e la città.'},
      {da:'Un Socrate giovanissimo', a:'Un pensiero che si corregge', r:'è il segno di',
       perche:'Platone poteva far vincere il proprio personaggio, come sempre. Sceglie invece di mostrarlo battuto da un vecchio avversario, e di lasciare l\'obiezione senza risposta. Nessun altro antico ha fatto una cosa simile con il proprio sistema.'},
      {da:'Il tempo', a:'L\'anima del mondo', r:'nasce insieme a',
       perche:'Il tempo non è un contenitore preesistente: comincia con il cielo, come immagine che si muove di un\'eternità che sta ferma. Da qui Agostino prenderà la domanda su che cosa fosse Dio «prima» — e risponderà che il prima non c\'era.'}
    ]
  },
  provocazione: {
    titolo:'Dite una bugia. Adesso spiegatemi come avete fatto',
    durata:'55 minuti',
    domandaMadre:'Se dire il falso è dire ciò che non è, e ciò che non è non si può dire, come fa una bugia a esistere?',
    perche:'Tutti sanno mentire e nessuno sa dire come sia possibile. La classe scopre in dieci minuti che il ragionamento che rende impossibile la menzogna è lo stesso che ha imparato con Parmenide, e che finché regge il sofista è imprendibile: può sempre dire che nessuno lo ha mai colto a dire il falso. Da qui si arriva al parricidio — un filosofo di settant\'anni che uccide il proprio padre per salvare la possibilità di parlare — e al fatto che nello stesso periodo Platone pubblica le obiezioni più forti contro le proprie Idee. È l\'ora in cui si capisce che cambiare idea non è debolezza di un pensiero: è il suo funzionamento.',
    occorrente:'Un foglietto a testa.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Scrivete su un foglietto una frase falsa.\nQualunque cosa: «fuori nevica», «ho tre fratelli».\n\nFatto?\n\nAllora rispondete a questa domanda:\n\nche cosa avete appena scritto?\n\nUna frase falsa dice qualcosa che non è.\nMa ciò che non è, non è niente.\nE chi dice niente, non dice.\n\nQuindi non avete scritto nulla.',
       parlato:'Fai scrivere davvero: il foglietto in mano cambia tutto, perché la conclusione arriva contro un oggetto che stanno toccando.\n\nPoi costruisci il ragionamento riga per riga, senza fretta, e fermati dopo ogni passaggio a chiedere se lo accettano. Quasi tutti accettano i primi due e restano bloccati sul terzo.\n\nLa richiesta finale è precisa e va ripetuta due volte: non vi chiedo se sia vero che avete mentito — lo so anch\'io. Vi chiedo di dirmi in quale punto il ragionamento sbaglia.\n\nSe qualcuno tira fuori Parmenide, complimentati e digli che ha appena capito da dove viene il problema: è lo stesso divieto di due mesi fa. Il non essere non si pensa e non si dice.',
       seDicono:[
         {loro:'«Ho scritto qualcosa: le parole ci sono, si vedono sul foglio.»',
          tu:'Le parole sì. Ma una frase non è un mucchio di parole: è un dire qualcosa di qualcosa. «Fuori nevica» sta al posto di un fatto — e quel fatto non c\'è. Che cosa sta al posto di che cosa?'},
         {loro:'«È falsa, non è vuota: sono due cose diverse.»',
          tu:'Sono d\'accordo con te, e anche Platone. Ma adesso devi dirmi in che cosa consiste la differenza — perché finché non lo sai dire, chi ti contraddice ha in mano un argomento e tu hai un\'intuizione.'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'Una frase falsa:',
       opzioni:['dice qualcosa', 'non dice niente'],
       parlato:'Conta e scrivi i numeri. Poi lavora sul gruppo del «dice qualcosa», che è quasi tutta la classe: chiedigli di completare la frase «una frase falsa dice…». Si fermano quasi sempre a metà.\n\nÈ il momento in cui l\'ora diventa seria: hanno una convinzione fortissima e nessun argomento. Non salvarli, ma nemmeno umiliarli — di\' che è esattamente la posizione in cui Platone si trova a settant\'anni, dopo aver scritto la Repubblica.\n\nPoi introduci il personaggio che rende la cosa urgente: il sofista. Se dire il falso è impossibile, allora nessuno può accusare un sofista di dire il falso, e la sua difesa è perfetta. Per prenderlo bisogna prima dimostrare che la menzogna esiste.',
       seDicono:[
         {loro:'«Dice una cosa che potrebbe essere ma non è.»',
          tu:'Buona, e sei più avanti di quanto credi. Ma attento: «potrebbe essere» dove sta? Se non è da nessuna parte, siamo di nuovo al punto di prima. Ti serve un posto in cui mettere ciò che non è.'},
         {loro:'«Basta dire che è un errore e finisce lì.»',
          tu:'L\'errore però esiste, ed è proprio quello che devi spiegare. Chiamarlo per nome non è spiegarlo: è la mossa che Socrate rifiutava sempre agli interlocutori.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Il problema non è dei sofisti. È di Parmenide.\n\n«Non è possibile né dire né pensare ciò che non è.»\n\nÈ il divieto su cui Platone ha costruito tutto:\nl\'essere immutabile, le Idee, la conoscenza vera.\n\nMa finché quel divieto regge:\n\nnon esiste la menzogna,\nnon esiste l\'errore,\nnon esiste nemmeno l\'opinione falsa —\ne quindi non c\'è niente da confutare, mai.\n\nPer salvare la parola bisogna disobbedire al padre.',
       parlato:'Qui va fatto vedere quanto costa. Non è un problema tecnico: se il falso non esiste, crolla tutto il mestiere. Non si può correggere nessuno, non si può insegnare, non si può nemmeno dire che il sofista sbaglia.\n\nPoi dai il nome che Platone stesso usa, e non addolcirlo: nel Sofista, lo Straniero di Elea chiede a Teeteto il permesso di commettere un parricidio — di uccidere il padre Parmenide. E si scusa in anticipo di dover sembrare un folle.\n\nFai pesare il fatto biografico: Platone ha circa settant\'anni. Ha passato la vita a costruire un sistema su quel divieto. E lo attacca lui, non un nemico.\n\nSe l\'aula regge, aggiungi la seconda notizia: nello stesso periodo pubblica il Parmenide, dove mette in bocca a un avversario le tre obiezioni più forti mai scritte contro le proprie Idee. Nessuna delle tre riceve risposta nel dialogo.',
       seDicono:[
         {loro:'«Se demolisce le sue Idee, allora aveva torto prima.»',
          tu:'Oppure sta facendo la cosa che un sistema serio deve poter subire. Nota che non le abbandona: continua a usarle nel Timeo. Sta cercando di capire come funzionano davvero, e per farlo deve prima ammettere che come le aveva descritte non funzionavano.'},
         {loro:'«Perché non ha semplicemente riscritto la Repubblica?»',
          tu:'Perché non correggeva un dettaglio: stava cambiando la domanda. E soprattutto perché scriveva dialoghi, non trattati — e in un dialogo si può mostrare una difficoltà senza doverla risolvere subito. È il vantaggio della forma che aveva scelto quarant\'anni prima.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'«Quando diciamo il non essere,\nnon diciamo, a quanto pare, qualcosa di contrario all\'essere,\nma soltanto qualcosa di diverso.»\n\nQuindi:\n\n«non bello» non vuol dire il nulla.\nVuol dire: qualcosa che è, e che è diverso dal bello.\n\nE dire il falso non è dire nulla:\nè dire, di qualcosa, qualcosa d\'altro.',
       testo:{fonte:'Platone, Sofista 257b e 241d (IV secolo a.C.)',
              glossa:'La soluzione sta in una sola parola: diverso. Il non essere smette di essere il buco nero in cui non si può entrare e diventa una relazione — essere altro da. Da qui nasce la possibilità della logica: i concetti si distinguono, si escludono, si combinano. Ed è anche il momento in cui la filosofia smette di avere paura del nulla.'},
       parlato:'Leggi il passo, poi fallo verificare su un esempio loro. Prendi una delle bugie scritte all\'inizio — «fuori nevica» — e mostrala come combinazione: c\'è il fuori, c\'è il nevicare, e la frase li lega in un modo diverso da come stanno. Non manca niente: è tutto presente, montato male.\n\nÈ questa la scoperta: il falso non è un vuoto, è un montaggio sbagliato di pezzi che ci sono tutti.\n\nSe c\'è tempo, mostra i cinque generi sommi — essere, quiete, movimento, identico, diverso — e fa\' notare che il quinto non serve solo per la bugia: serve perché ogni Idea possa essere sé stessa e diversa dalle altre. Senza il diverso, non ci sono nemmeno due cose.',
       seDicono:[
         {loro:'«Sembra un giochetto di parole.»',
          tu:'Prova a farne a meno. Senza «diverso» non puoi dire che due cose sono due, che una definizione è sbagliata, che qualcuno ha torto. Un giochetto di parole da cui dipende tutto il resto merita un altro nome.'},
         {loro:'«Ma allora Parmenide aveva torto?»',
          tu:'Solo su un punto, e Platone glielo concede quasi tutto: non si può pensare il nulla assoluto. Quello che nega è che ogni «non» significhi nulla assoluto. È una correzione chirurgica, non una demolizione — ed è per questo che è così difficile da confutare.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Nello stesso periodo, Platone scrive un altro dialogo.\n\nIn scena c\'è Socrate giovanissimo, e davanti a lui\nun vecchio Parmenide che lo interroga.\n\nGli chiede: esistono Idee del fango, del pelo, dello sporco?\nSocrate arrossisce.\n\nPoi gli dimostra che, se l\'uomo somiglia all\'Idea di uomo,\nserve una terza Idea che li accomuni.\nE poi una quarta. E una quinta. Senza fine.\n\nSocrate non sa rispondere.\n\nQueste obiezioni non le ha scritte un nemico:\nle ha scritte l\'autore delle Idee.',
       parlato:'Dai il fatto e aspetta. La domanda che arriva è sempre la stessa: perché? Perché un uomo pubblica le obiezioni migliori contro sé stesso?\n\nRaccogli le loro risposte prima di dare la tua. In genere ne escono tre: era onesto; voleva anticipare gli avversari; non aveva più niente da perdere. Nessuna è sbagliata.\n\nPoi aggiungi quella che conta: perché un pensiero che non regge le obiezioni non vale la pena di essere difeso. Se le Idee sono vere, sopravvivranno; se non lo sono, meglio saperlo — e saperlo da sé, che è l\'unico modo per continuare a lavorarci.\n\nE fai notare la differenza con quasi tutti i suoi contemporanei: Parmenide non ha mai scritto un\'obiezione contro sé stesso; Protagora nemmeno. Platone lo fa a settant\'anni, dopo aver fondato una scuola che porta il suo nome.',
       seDicono:[
         {loro:'«Ma allora la sua filosofia era sbagliata e lo sapeva.»',
          tu:'Sapeva che era incompleta, che è un\'altra cosa. Continua a usare le Idee fino all\'ultimo. Quello che ha capito è che il rapporto fra Idea e cosa non era spiegato — e per il resto della vita ha lavorato su quello, invece di far finta di niente.'},
         {loro:'«Nessuno oggi lo farebbe.»',
          tu:'Poche persone, ed è un ottimo criterio per riconoscerle. Quando qualcuno vi espone la propria posizione, chiedetevi se vi ha mai detto l\'obiezione più forte che gli hanno fatto. È il segno che distingue chi pensa da chi difende.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Riprendete il foglietto.\n\nAdesso sapete che cosa avete scritto:\nnon il nulla, ma qualcosa di diverso —\nun montaggio sbagliato di pezzi che ci sono tutti.\n\nPer arrivarci, un uomo di settant\'anni\nha dovuto uccidere il proprio maestro\ne smontare il proprio sistema.\n\nLa domanda che vi lascio è questa:\n\nvi è mai capitato di trovare l\'obiezione\nche vi avrebbe fatto cambiare idea —\ne di tenerla per voi?',
       parlato:'Fai riprendere in mano il foglietto: chiude il cerchio con l\'oggetto con cui si era aperto.\n\nPoi la domanda finale, che non riguarda Platone. Lasciala cadere e non chiedere risposte a voce: è una di quelle che funzionano nel silenzio. Se qualcuno vuole parlare, lascialo parlare; se non parla nessuno, va bene lo stesso.\n\nUltima cosa da dire, breve: da qui in poi la filosofia ha un nuovo strumento. Se il diverso esiste, i concetti si possono distinguere, escludere, combinare — e nel giro di una generazione un allievo dell\'Accademia scriverà i primi libri di logica della storia. Si chiama Aristotele, e comincia la prossima volta.',
       seDicono:[
         {loro:'«Quindi in filosofia non si arriva mai a una conclusione?»',
          tu:'Si arriva a molte conclusioni: che il falso è dire diverso, per esempio, è una conquista definitiva e la usiamo ancora. Quello che non si fa è smettere di controllarle. La differenza fra una conclusione e un dogma è tutta lì.'}
       ]}
    ],
    riserve:[
      {titolo:'Il terzo uomo',
       corpo:'Prendi molte cose grandi. Hanno qualcosa in comune, e quel qualcosa è l\'Idea di Grande.\n\nOra guarda insieme le cose grandi e l\'Idea di Grande: anche loro hanno qualcosa in comune — sono tutte grandi. Serve dunque una seconda Idea di Grande, che le accomuni.\n\nMa allora quella seconda Idea e tutto il resto avranno a loro volta qualcosa in comune. Serve una terza. E una quarta.\n\nL\'argomento si chiama così perché Aristotele lo formulò con l\'uomo: uomo, Idea di uomo, e il terzo uomo che li accomuna.',
       chiedi:'Il regresso nasce da un\'assunzione precisa: che l\'Idea di Grande sia essa stessa grande. Se l\'Idea di Grande non fosse grande, l\'argomento cadrebbe — ma allora che cosa sarebbe? Provate a togliere quell\'assunzione e vedete che cosa resta in piedi.'},
      {titolo:'Il giudice convinto',
       corpo:'Nel Teeteto, Socrate propone di definire la scienza come opinione vera. Poi porta un caso: un giudice viene convinto da un oratore abilissimo di una cosa che è realmente accaduta, ma di cui non c\'è nessuna prova e a cui il giudice non ha assistito.\n\nIl giudice crede il vero. La sua opinione è vera. Eppure non sa: è stato persuaso, non ha visto né capito.',
       chiedi:'Che cosa manca a quel giudice? Duemilaquattrocento anni dopo, un filosofo americano di nome Gettier ha mostrato che aggiungere «più una ragione» non basta ancora. Provate a costruire voi un caso in cui uno ha un\'opinione vera, ha anche una ragione, e continua a non sapere.'},
      {titolo:'La conferenza sul Bene',
       corpo:'Platone annuncia ad Atene una conferenza pubblica sul Bene. Accorre molta gente: si aspettano di sentir parlare di ricchezza, salute, forza, felicità.\n\nLui parla di matematica, di numeri, di astronomia, e conclude che il Bene è l\'Uno. Il pubblico, racconta Aristosseno, si spazientì e a poco a poco se ne andò quasi tutto.\n\nÈ l\'unica testimonianza diretta di ciò che Platone insegnava a voce e non scrisse mai.',
       chiedi:'Perché non ha scritto la parte più importante? Nel Fedro dice che lo scritto non può difendersi né rispondere a chi lo interroga. Ma allora tutti i suoi dialoghi che cosa sono — e perché ne ha scritti trentacinque?'}
    ],
    testi:[
      {fonte:'Platone, Sofista 241d — il parricidio',
       corpo:'«Sarà necessario, per difenderci, mettere alla prova il discorso del padre Parmenide, e costringere con la forza il non essere a essere in qualche modo, e a sua volta l\'essere a non essere in qualche modo. […] Non considerarmi per questo una specie di parricida.»',
       glossa:'La parola è di Platone, non degli interpreti. Vale la pena di far notare la formula «in qualche modo», ripetuta due volte: non dice che il non essere è, dice che è in un certo senso. Tutta la soluzione sta in quella cautela.'},
      {fonte:'Platone, Timeo 37d — il tempo',
       corpo:'«Il padre generatore pensò di fare una certa immagine mobile dell\'eternità, e ordinando il cielo fece dell\'eternità che permane nell\'unità un\'immagine eterna che procede secondo il numero: ed è quella che abbiamo chiamato tempo.»',
       glossa:'Il tempo non è un contenitore in cui il mondo viene messo: nasce con il mondo, come copia in movimento di qualcosa che sta fermo. È la frase da cui Agostino partirà per rispondere a chi chiede che cosa facesse Dio prima di creare — non c\'era nessun prima.'},
      {fonte:'Platone, Leggi IV 720a-e — i preamboli',
       corpo:'Il medico degli schiavi ordina e se ne va; quello degli uomini liberi «esamina la malattia dall\'inizio, discutendo con il malato stesso e con i suoi amici, e non prescrive nulla prima di averlo persuaso».\n\nCosì il legislatore: ogni legge dev\'essere preceduta da un discorso che convinca, «perché il cittadino non è uno schiavo».',
       glossa:'È la pagina più moderna di Platone, ed è nello stesso libro che istituisce il consiglio notturno e la pena di morte per empietà. Tenere insieme le due cose è l\'esercizio: nessun pensatore serio è tutto d\'un pezzo.'}
    ],
    compito:'Mezza pagina. Scrivete un\'idea a cui tenete e poi l\'obiezione più forte che le si possa fare — quella che vi metterebbe davvero in difficoltà, non una comoda. Non serve rispondere: serve trovarla. Chi non ne trova nessuna scriva questo, ed è un risultato anche quello.',
    fonti:[
      'Platone, Parmenide 130a-135c (le obiezioni alle Idee, il terzo uomo)',
      'Platone, Teeteto 151e-186e (le tre definizioni della scienza) e 172c (la digressione)',
      'Platone, Sofista 216a-268d, in particolare 237a-241d e 254b-259d',
      'Platone, Politico 291a-303d; Leggi IV 719e-723d, V 737e-747e, XII 951d-969d',
      'Platone, Filebo 20b-23b e 63e-67b; Timeo 27d-53c e 37c-38c',
      'Aristotele, Metafisica I 6 e 9; Fisica IV 2, 209b — le dottrine non scritte',
      'Aristosseno, Elementi armonici II 30-31 — la conferenza sul Bene',
      'H.J. Krämer e K. Gaiser (scuola di Tubinga); G. Reale, Per una nuova interpretazione di Platone'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia antica · 7 — Aristotele: logica e metafisica': {
  mappa: {
    n:'Aristotele', d:'Stagira 384 – Calcide 322 a.C.: il sapere diventa un sistema',
    f:[
      {r:'comincia con', n:'Una vita in tre tempi', d:'l\'Accademia, la corte, la scuola',
       f:[
         {r:'entra a', n:'Vent\'anni nell\'Accademia', d:'ci resta fino alla morte di Platone',
          f:[{piu:true, r:'dove lo chiamavano', n:'La mente della scuola', d:'e anche «il lettore», perché studiava sui libri'}]},
         {r:'diventa', n:'Precettore di Alessandro', d:'a Pella, per tre anni: il ragazzo ha tredici anni'},
         {r:'fonda', n:'Il Liceo', d:'nel 335, ad Atene: una scuola con biblioteca e collezioni',
          f:[{r:'i suoi allievi', n:'Peripatetici', d:'dal portico coperto in cui si passeggiava discutendo'},
             {piu:true, r:'raccoglie', n:'Centocinquantotto costituzioni', d:'la prima ricerca comparata della storia'}]},
         {r:'scrive', n:'Due tipi di opere', d:'e ci sono arrivate quelle sbagliate',
          f:[{r:'gli', n:'Essoterici', d:'dialoghi pubblici, elegantissimi: tutti perduti'},
             {r:'gli', n:'Esoterici', d:'appunti per le lezioni interne: sono quelli che leggiamo'},
             {piu:true, r:'ordinati da', n:'Andronico di Rodi', d:'nel I secolo a.C., tre secoli dopo la morte'}]},
         {r:'muore in fuga', n:'Perché Atene non pecchi due volte', d:'accusato di empietà dopo la morte di Alessandro'}
       ]},

      {r:'si stacca da', n:'Il maestro', d:'«amico Platone, ma più amica la verità»',
       f:[
         {r:'obietta', n:'Le Idee sono inutili doppioni', d:'raddoppiano le cose da spiegare invece di spiegarle'},
         {r:'obietta', n:'Non spiegano il movimento', d:'sono immobili: come farebbero a far muovere qualcosa?'},
         {r:'riprende', n:'L\'argomento del terzo uomo', d:'lo stesso che Platone aveva scritto contro sé stesso'},
         {r:'e conclude', n:'L\'universale sta nelle cose', d:'non in un altro mondo: è la forma di questo cavallo qui',
          f:[{piu:true, r:'formula', n:'Non esiste l\'uomo, esistono gli uomini', d:'e l\'uomo è ciò che tutti hanno in comune'}]},
         {r:'ma conserva', n:'La domanda «che cos\'è»', d:'cambia la risposta, non il problema'}
       ]},

      {r:'ordina', n:'Tutto il sapere', d:'per la prima volta le scienze hanno un posto ciascuna',
       f:[
         {r:'le', n:'Teoretiche', d:'cercano il vero per sé stesso: sono le più alte',
          f:[{r:'la', n:'Fisica', d:'l\'essere mobile e separato'},
             {r:'la', n:'Matematica', d:'l\'essere immobile e non separato'},
             {r:'la', n:'Filosofia prima', d:'l\'essere immobile e separato: quella che chiamiamo metafisica'}]},
         {r:'le', n:'Pratiche', d:'cercano il bene dell\'agire: etica, politica'},
         {r:'le', n:'Poietiche', d:'cercano il bello del produrre: poetica, retorica'},
         {piu:true, r:'il nome «metafisica»', n:'Lo fa un bibliotecario', d:'i libri che stanno dopo quelli sulla fisica'}
       ]},

      {r:'costruisce', n:'La logica', d:'l\'Organon: non una scienza, lo strumento di tutte',
       f:[
         {r:'parte dai', n:'Termini', d:'le parole singole: non sono né vere né false'},
         {r:'classificati nelle', n:'Dieci categorie', d:'i modi fondamentali in cui si dice l\'essere',
          f:[{r:'la prima', n:'Sostanza', d:'che cosa è: e regge tutte le altre'},
             {r:'poi', n:'Quantità, qualità, relazione', d:'e luogo, tempo, posizione, avere, agire, subire'}]},
         {r:'unisce i termini in', n:'Proposizioni', d:'qui nasce il vero e il falso: si dice qualcosa di qualcosa'},
         {r:'unisce le proposizioni nel', n:'Sillogismo', d:'da due premesse segue necessariamente una conclusione',
          f:[{r:'esempio', n:'Tutti gli uomini sono mortali', d:'Socrate è un uomo, dunque Socrate è mortale'},
             {r:'organizzato in', n:'Figure e modi', d:'e solo alcuni sono validi: è la prima teoria formale della storia'},
             {piu:true, r:'vale la forma', n:'Non il contenuto', d:'ed è la scoperta: un ragionamento si controlla senza sapere di che parla'}]},
         {r:'ma i principi', n:'Non si dimostrano', d:'o si andrebbe all\'infinito: si colgono per intuizione',
          f:[{r:'il primo è', n:'Il principio di non contraddizione', d:'la stessa cosa non può essere e non essere, nello stesso senso',
              f:[{r:'si difende con', n:'La confutazione', d:'chi lo nega, per negarlo, deve parlare — e parlando lo usa'},
                 {piu:true, r:'in', n:'Metafisica IV 4, 1006a'}]}]},
         {r:'e per definire usa', n:'Genere prossimo e differenza specifica', d:'l\'uomo è animale (genere) razionale (differenza)'}
       ]},

      {r:'apre', n:'L\'essere si dice in molti modi', d:'la frase che rompe Parmenide senza ucciderlo',
       f:[
         {r:'come', n:'Sostanza e accidenti', d:'ciò che sta da sé, e ciò che sta in altro'},
         {r:'come', n:'Vero e falso', d:'l\'essere del giudizio'},
         {r:'come', n:'Potenza e atto', d:'il seme è albero in potenza, la quercia in atto'},
         {r:'come', n:'Le figure delle categorie', d:'tanti sensi quante sono le categorie'},
         {r:'quindi non è', n:'Un genere unico', d:'ma nemmeno un puro nome: i sensi si tengono per analogia',
          f:[{piu:true, r:'si dice', n:'Per riferimento a uno', d:'come «sano» si dice del corpo, del clima, del colorito'}]}
       ]},

      {r:'analizza', n:'La sostanza', d:'che cos\'è che fa di questa cosa questa cosa',
       f:[
         {r:'è', n:'Il sinolo', d:'l\'insieme concreto di materia e forma: questo cavallo, quest\'uomo'},
         {r:'la', n:'Materia', d:'ciò di cui è fatto: pura possibilità, da sola non è niente'},
         {r:'la', n:'Forma', d:'ciò che lo rende quello che è: l\'essenza, e conta più della materia',
          f:[{piu:true, r:'formula difficile', n:'Il che cosa era essere', d:'to ti en einai: la sostanza in senso pieno'}]},
         {r:'e il divenire è', n:'Passaggio dalla potenza all\'atto', d:'niente nasce dal nulla: nasce da ciò che poteva diventarlo',
          f:[{r:'risolve', n:'Il problema di Parmenide', d:'ciò che non è ancora non è nulla: è potenza'},
             {piu:true, r:'e l\'atto', n:'Viene prima della potenza', d:'ci vuole un albero per fare un seme'}]}
       ]},

      {r:'spiega con', n:'Le quattro cause', d:'per sapere una cosa bisogna saperne il perché',
       f:[
         {r:'la', n:'Causa materiale', d:'di che cosa è fatta: il bronzo della statua'},
         {r:'la', n:'Causa formale', d:'che cosa è: la figura che il bronzo prende'},
         {r:'la', n:'Causa efficiente', d:'chi l\'ha fatta: lo scultore'},
         {r:'la', n:'Causa finale', d:'per che cosa: lo scopo, ed è la più importante',
          f:[{r:'perché', n:'La natura non fa nulla invano', d:'ogni essere tende a realizzare la propria forma'},
             {r:'esempio', n:'I denti davanti sono aguzzi', d:'per tagliare: e i molari piatti per macinare'},
             {piu:true, r:'e contro il caso', n:'Empedocle non spiega la regolarità', d:'se fosse caso, non accadrebbe quasi sempre allo stesso modo'}]}
       ]},

      {r:'culmina nel', n:'Motore immobile', d:'la filosofia prima diventa teologia',
       f:[
         {r:'serve perché', n:'Il movimento è eterno', d:'e una catena infinita di motori mossi non spiega niente'},
         {r:'è', n:'Atto puro', d:'nessuna materia, nessuna potenza: non può diventare altro'},
         {r:'muove', n:'Come l\'amato muove l\'amante', d:'senza muoversi: attira, non spinge'},
         {r:'ed è', n:'Pensiero di pensiero', d:'pensa sé stesso, perché non può pensare cose inferiori',
          f:[{piu:true, r:'quindi', n:'Non conosce il mondo', d:'e non lo ha creato: è il punto su cui si romperanno i teologi'}]},
         {piu:true, r:'e ne servono', n:'Cinquantacinque', d:'uno per ogni sfera celeste, secondo l\'astronomia di Eudosso'}
       ]},

      {r:'lascia', n:'Che cosa resta', d:'duemila anni di scienza, e poi una rottura',
       f:[
         {r:'diventa', n:'Il Filosofo', d:'nel Medioevo si dice così, senza aggiungere il nome'},
         {r:'lo riprende', n:'Tommaso d\'Aquino', d:'che lo battezza: atto puro diventa il Dio creatore'},
         {r:'la logica resta', n:'Intatta fino all\'Ottocento', d:'Kant scriverà che dopo di lui non ha fatto un passo'},
         {r:'lo rovescia', n:'Galileo', d:'non confuta il fine: smette di chiederlo',
          f:[{piu:true, r:'e con lui', n:'Il come al posto del perché', d:'si misura ciò che accade, non si cerca a che cosa serva'}]},
         {r:'ma sopravvive in', n:'Biologia', d:'«a che cosa serve il cuore» è ancora la domanda che si fa'}
       ]}
    ],
    incroci:[
      {da:'Passaggio dalla potenza all\'atto', a:'L\'essere si dice in molti modi', r:'è possibile solo perché',
       perche:'Parmenide aveva bloccato il divenire dicendo che l\'essere non può venire dal non essere. Aristotele scioglie il nodo distinguendo i sensi: ciò che non è ancora non è nulla, è potenza — un modo di essere, non un buco.'},
      {da:'L\'universale sta nelle cose', a:'Le Idee sono inutili doppioni', r:'è la conseguenza di',
       perche:'Se la forma dell\'uomo sta in ciascun uomo e non in un cielo separato, non serve più un secondo mondo. Il problema che Platone risolveva con la partecipazione sparisce perché sparisce la distanza.'},
      {da:'Il principio di non contraddizione', a:'Il maestro', r:'compie contro i sofisti ciò che non riuscì a',
       perche:'Platone aveva salvato il falso col diverso, ma non aveva una legge prima. Aristotele la trova e la difende con una mossa nuova: non la dimostra — mostra che chi la nega, per negarla, deve parlare, e parlando la usa.'},
      {da:'Non il contenuto', a:'Genere prossimo e differenza specifica', r:'convive con',
       perche:'La logica separa la validità dal contenuto, ma la definizione ha bisogno di sapere di che cosa parla. Le due cose stanno nello stesso Organon, ed è la ragione per cui Aristotele non è né un formalista né un empirista.'},
      {da:'Causa finale', a:'Galileo', r:'è esattamente ciò che rifiuta',
       perche:'Galileo non dimostra che la natura non ha scopi: smette di chiederlo, e misura. La scienza moderna nasce restringendo le domande ammesse — non trovando risposte migliori alle stesse domande.'},
      {da:'La natura non fa nulla invano', a:'Biologia', r:'sopravvive in',
       perche:'La fisica ha buttato il finalismo, la biologia no: «a che cosa serve il cuore» è una domanda che si fa ancora tutti i giorni. Darwin le darà un meccanismo — la selezione — senza restituirle uno scopo.'},
      {da:'Atto puro', a:'Non conosce il mondo', r:'implica scandalosamente che',
       perche:'Un pensiero che pensa sé stesso non può abbassarsi a pensare le cose che cambiano. Il dio di Aristotele non ha creato nulla e non sa che esistiamo: sarà il punto su cui Tommaso dovrà lavorare di più per battezzarlo.'},
      {da:'Come l\'amato muove l\'amante', a:'Il movimento è eterno', r:'spiega senza toccarlo',
       perche:'Se il primo motore spingesse, sarebbe a sua volta mosso e la catena non finirebbe. Ma ciò che attira muove restando fermo — è l\'unica soluzione che tiene insieme un mondo eterno e un principio immobile.'},
      {da:'Esoterici', a:'Il Filosofo', r:'rende paradossale il titolo di',
       perche:'Il Medioevo lo chiama «il Filosofo» leggendo appunti di lezione mai destinati alla pubblicazione, mentre i dialoghi che aveva scritto per il pubblico — lodati per lo stile — sono andati tutti perduti.'},
      {da:'Sostanza', a:'Il sinolo', r:'trova la sua risposta in',
       perche:'La prima delle categorie chiede «che cosa è». La risposta non è la materia, che da sola non è niente, né la forma astratta: è questo composto concreto qui, questo cavallo. L\'individuo torna al centro dopo Platone.'},
      {da:'Filosofia prima', a:'Motore immobile', r:'si conclude nel',
       perche:'La scienza dell\'essere immobile e separato non poteva restare vuota: se esiste un essere così, la metafisica arriva a parlarne. È il motivo per cui lo stesso libro è insieme ontologia e teologia.'},
      {da:'Il che cosa era essere', a:'Forma', r:'è il nome tecnico di',
       perche:'La formula più oscura di Aristotele — to ti en einai — indica ciò che una cosa era destinata a essere, la sua essenza colta al passato. Non è un vezzo: dice che l\'essenza precede l\'individuo pur stando dentro di lui.'}
    ]
  },
  provocazione: {
    titolo:'Perché piove?',
    durata:'55 minuti',
    domandaMadre:'Quando è lecito chiedere «a che cosa serve», e quando no?',
    perche:'La classe deride il finalismo di Aristotele — la pioggia che cade per far crescere il grano — e dieci minuti dopo scopre di usarlo tutti i giorni, perché «a che cosa serve il cuore» è la domanda che regge la biologia. Il colpo di scena è che Galileo non ha confutato il fine: ha smesso di chiederlo. Da lì l\'ora arriva a una tesi che vale per tutto l\'anno — la scienza moderna nasce restringendo le domande ammesse, non trovando risposte migliori alle stesse domande — e finisce con la domanda che gli studenti si sentono fare di continuo senza mai analizzarla: e tu, a che cosa servi?',
    occorrente:'Niente.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Due domande. Rispondete a tutte e due.\n\n1. Perché cade un sasso?\n\n2. Perché il cuore batte?\n\nAvete usato la stessa parola — «perché» —\ne avete dato due risposte di tipo completamente diverso.\n\nUna dice come funziona.\nL\'altra dice a che cosa serve.\n\nQuale delle due è una risposta scientifica?',
       parlato:'Fai rispondere davvero, a voce, prima di mostrare la seconda parte della schermata. Al primo «perché» rispondono con la gravità; al secondo, quasi tutti, con «per pompare il sangue».\n\nFai notare lo scarto: nessuno ha detto «il cuore batte perché il nodo senoatriale genera un impulso elettrico», che pure sarebbe la risposta esatta nello stesso senso della prima. E nessuno ha detto «il sasso cade per raggiungere il suo posto», che sarebbe la risposta esatta nello stesso senso della seconda.\n\nAvete due «perché» in testa e li usate senza accorgervene, scegliendo di volta in volta. La domanda dell\'ora è con quale criterio scegliete.',
       seDicono:[
         {loro:'«Il secondo perché non è scientifico, è solo un modo di dire.»',
          tu:'Allora riscrivi «il cuore serve a pompare il sangue» senza usare né "serve" né "per": senza dire a che cosa è destinato. Provaci davvero. Chi ci riesce di solito produce una frase che nessun libro di biologia scriverebbe.'},
         {loro:'«Dipende: il cuore l\'ha fatto l\'evoluzione, il sasso no.»',
          tu:'Ottima, e ci arriveremo. Ma nota che l\'evoluzione non ha intenzioni: non ha fatto il cuore "per" qualcosa. Eppure continui a dire "serve a". Da dove viene quel "per", se nessuno lo ha messo lì?'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'Chiedere «a che cosa serve» in natura:',
       opzioni:['non è mai una domanda seria', 'a volte è la domanda giusta'],
       parlato:'Conta e scrivi i numeri. In genere vince nettamente il primo gruppo: sono cresciuti sapendo che la natura non ha scopi, ed è la posizione che considerano moderna.\n\nAllora metti in difficoltà proprio loro, con tre casi in fila, chiedendo ogni volta se la domanda è seria:\n\n— a che cosa serve la pioggia?\n— a che cosa servono le ciglia?\n— a che cosa serve la febbre?\n\nQuasi tutti scartano il primo, accettano il secondo e si dividono sul terzo. Il fatto che ci sia una linea, e che nessuno sappia dire dove passa, è il risultato di questo tempo.',
       seDicono:[
         {loro:'«Le ciglia servono a proteggere l\'occhio: quello è un fatto.»',
          tu:'È un fatto che lo facciano. Ma "servire" aggiunge qualcosa: dice che è quello il motivo per cui ci sono. Chi ha stabilito il motivo? Stai attribuendo un\'intenzione a qualcosa che, per tua stessa ammissione, non ne ha.'},
         {loro:'«È solo un modo comodo di parlare, tutti capiscono.»',
          tu:'Anche a me sembra comodo. Ma un modo di parlare che nessuno riesce a tradurre in un altro modo di parlare non è comodo: è indispensabile. E se è indispensabile, qualcosa vorrà pur dire.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Aristotele dice che per sapere una cosa\nbisogna conoscerne quattro perché.\n\nUna statua di bronzo:\n\nDI CHE COSA è fatta — il bronzo.\nCHE COSA è — la figura.\nCHI l\'ha fatta — lo scultore.\nPER CHE COSA — lo scopo.\n\nE la quarta, dice, è la più importante di tutte.\n\nPerché in natura ogni cosa tende\na diventare pienamente quello che è.\nLa ghianda tende alla quercia.\nL\'occhio è fatto per vedere.\n\n«La natura non fa nulla invano.»',
       parlato:'Presenta le quattro cause con la statua, che è il suo esempio, e falle applicare subito a un oggetto della classe: una sedia, uno zaino. Funziona benissimo sugli artefatti, ed è proprio questo il punto debole che vedranno dopo.\n\nPoi passa alla natura, dove la quarta causa diventa problematica, e dai l\'esempio che li fa ridere: la pioggia cade per far crescere il grano.\n\nLascia che ridano. Poi la contromossa, che è la parte seria dell\'ora: leggi l\'obiezione che Aristotele si fa da solo. Se qualcuno dicesse che la pioggia cade per necessità, e che il grano cresce per caso? Lui risponde: se fosse caso, non accadrebbe quasi sempre. La regolarità è ciò che il caso non spiega.\n\nÈ un ragionamento serio, ed è sbagliato — ma per capire perché è sbagliato bisogna aspettare Darwin, che arriva ventidue secoli dopo. Per tutto quel tempo è la spiegazione migliore disponibile.',
       seDicono:[
         {loro:'«Ma è ovvio che si sbagliava, basta il buon senso.»',
          tu:'Il buon senso di oggi. Prova a spiegare, senza sapere nulla di selezione naturale, perché gli occhi capitano quasi sempre sulla faccia e quasi mai sui gomiti. Se rispondi "per caso", devi spiegare la regolarità; se rispondi "perché servono lì", sei finalista.'},
         {loro:'«Le quattro cause funzionano solo sugli oggetti costruiti.»',
          tu:'Questa è l\'obiezione giusta, ed è quella che ci metterà duemila anni a diventare senso comune. Aristotele estende alla natura uno schema preso dall\'artigianato — e per lui è naturale, perché la natura per un greco è ciò che ha in sé il proprio principio, come l\'artigiano ha in sé il progetto.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'«Perché non dovrebbe essere così anche in natura,\nche i denti nascano per necessità —\nquelli davanti aguzzi, adatti a tagliare,\ni molari larghi e utili a macinare —\nnon perché siano nati per questo,\nma solo per coincidenza?\n\nE lo stesso per tutte le altre parti\nin cui sembra esserci uno scopo?»\n\nAristotele si fa da solo l\'obiezione.\nE risponde:\n\n«Queste cose accadono sempre o per lo più,\nmentre nulla di ciò che è dovuto al caso\naccade sempre o per lo più.»',
       testo:{fonte:'Aristotele, Fisica II 8, 198b-199a (IV secolo a.C.)',
              glossa:'Nota la struttura: espone l\'ipotesi avversaria — quella di Empedocle, che è già una teoria della selezione — e la respinge con un argomento statistico. Ha ragione sul metodo e torto sulla conclusione: mancava solo l\'idea che il caso, filtrato dalla sopravvivenza per milioni di generazioni, produca proprio quella regolarità.'},
       parlato:'Fai vedere che l\'ipotesi rifiutata è, in embrione, il darwinismo: Empedocle immaginava membra sparse che si combinavano a caso, e sopravviveva solo ciò che risultava adatto. Aristotele la conosce, la scrive e la scarta.\n\nPoi la domanda da porre alla classe: che cosa gli mancava? Non l\'intelligenza e non l\'onestà. Gli mancava il tempo profondo — l\'idea che ci siano stati milioni di anni e miliardi di tentativi. Con l\'orizzonte temporale di un greco, il caso davvero non può produrre un occhio.\n\nÈ una lezione sul modo in cui si sbaglia: non per stupidità, ma perché manca un pezzo di mondo che non si può ancora vedere.',
       seDicono:[
         {loro:'«Quindi Empedocle aveva ragione e Aristotele torto?»',
          tu:'Empedocle aveva un\'intuizione senza meccanismo: nessuna eredità, nessuna variazione, nessuna scala di tempo. Avere ragione per caso non è avere ragione. Aristotele aveva torto con un argomento; è una posizione più utile, perché si può confutare.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Galileo, duemila anni dopo, non confuta il finalismo.\n\nFa una cosa diversa: smette di chiederlo.\n\nNon chiede a che cosa serva la caduta dei gravi.\nMisura in quanto tempo cadono.\n\nLa scienza moderna non nasce\nda risposte migliori alle stesse domande.\n\nNasce restringendo le domande ammesse.\n\nE però. Aprite un libro di biologia:\n«il cuore serve a pompare il sangue»,\n«i reni servono a filtrare».\n\nLa domanda che la fisica ha cacciato\nnella scienza della vita non se n\'è mai andata.',
       parlato:'Questo tempo va dato in due movimenti, e il secondo deve arrivare quando pensano che il discorso sia chiuso.\n\nPrimo: la vittoria di Galileo non è una confutazione. È una scelta di campo su che cosa sia lecito domandare, e funziona — in tre secoli produce più conoscenza di duemila anni di cause finali.\n\nSecondo, quando sono già dalla parte di Galileo: la biologia non ha mai smesso. Nessun biologo scrive «il cuore batte e accade che il sangue circoli». Scrive «serve a». E la ragione è che Darwin ha dato al «serve a» un meccanismo — la selezione — senza restituirgli uno scopo: la funzione è ciò per cui quel tratto è stato conservato, non ciò per cui è stato progettato.\n\nÈ il punto più difficile dell\'ora, e vale la pena dirlo lentamente: il finalismo è stato smontato come spiegazione e conservato come descrizione.',
       seDicono:[
         {loro:'«Allora i biologi parlano male.»',
          tu:'Ci hanno provato a parlare diversamente, e le frasi diventano illeggibili. Quando un linguaggio non si lascia eliminare, di solito è perché sta afferrando qualcosa di reale: qui il fatto che certe strutture esistono a causa di ciò che fanno. Che è una forma di causa finale addomesticata.'},
         {loro:'«E in fisica il perché non serve proprio mai?»',
          tu:'Prova con il principio di minima azione: la luce prende il percorso che minimizza il tempo. Detto così sembra che scelga. I fisici lo riformulano per non dirlo — ma la formulazione finalistica funziona, ed è più antica.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Torniamo alle due domande dell\'inizio.\n\nAdesso sapete che «perché» ne contiene due,\ne che una parte della storia della scienza\nè la storia di quando è lecito usare il secondo.\n\nUltima domanda, e non è di fisica:\n\nvi hanno chiesto mille volte a che cosa servite.\nA che cosa serve studiare, a che cosa serve la filosofia,\na che cosa servite voi.\n\nÈ una domanda legittima?\nE se sì — chi ha stabilito il fine?',
       parlato:'Chiudi lasciando la domanda in aria. Non è retorica: è la stessa struttura di tutta l\'ora, applicata a loro.\n\nSe qualcuno prova a rispondere, la mossa utile è chiedergli chi ha fissato quel fine. Se lo ha fissato lui, è un progetto e non una funzione; se lo ha fissato qualcun altro, siamo in una società che tratta le persone come denti e reni.\n\nDi\' che Aristotele una risposta ce l\'ha, e che è la lezione dopo: il fine dell\'uomo è realizzare ciò che l\'uomo è, e siccome l\'uomo è l\'animale che ragiona, la vita riuscita è quella in cui si ragiona bene. Non è un fine assegnato da fuori: è la forma che uno ha dentro.\n\nPoi fermati lì.',
       seDicono:[
         {loro:'«Quindi la filosofia non serve a niente?»',
          tu:'Dipende da quale dei due "perché" stai usando. Se chiedi come funziona, la filosofia ti fa vedere che stavi usando due domande diverse con la stessa parola — e questo ti è servito. Se chiedi a che cosa è destinata, sei tu a doverlo decidere: è l\'unica cosa che nessun libro può stabilire al posto tuo.'}
       ]}
    ],
    riserve:[
      {titolo:'Il sillogismo, e perché è una scoperta',
       corpo:'Tutti gli uomini sono mortali. Socrate è un uomo. Dunque Socrate è mortale.\n\nSembra banale. La scoperta però non sta nella conclusione: sta nel fatto che si può controllare se il ragionamento è valido senza sapere niente di uomini né di Socrate.\n\nTutti gli A sono B. C è un A. Dunque C è un B.\n\nFunziona con qualunque cosa ci si metta dentro — ed è la prima volta nella storia che qualcuno separa la forma di un ragionamento dal suo contenuto.',
       chiedi:'Provate a costruirne uno con premesse false e conclusione vera, e uno con premesse vere e conclusione falsa. Il secondo non riuscirà: perché? E che cosa vi dice, questo, sulla differenza fra «valido» e «vero»?'},
      {titolo:'Chi nega il principio non può parlare',
       corpo:'Il principio di non contraddizione — la stessa cosa non può essere e non essere allo stesso tempo e nello stesso senso — non si può dimostrare: ogni dimostrazione lo userebbe.\n\nAristotele allora inventa un\'altra mossa. Chiede all\'avversario semplicemente di dire qualcosa: qualunque cosa, purché significhi qualcosa per lui e per gli altri.\n\nNel momento in cui l\'altro parla, ha già ammesso che le sue parole significano questo e non il contrario — cioè ha già usato il principio che voleva negare. Se invece non parla, dice Aristotele, «è ridicolo cercare un discorso con chi non ha discorso: costui è simile a una pianta».',
       chiedi:'Non è una dimostrazione: è mostrare che negare il principio è impraticabile. Vale come prova? E si può usare la stessa mossa contro qualunque scettico, o solo contro questo?'},
      {titolo:'Un dio che non sa che esistiamo',
       corpo:'Il motore immobile di Aristotele è atto puro: non ha materia, non ha possibilità di essere altro da ciò che è. Muove tutto senza muoversi, come l\'amato muove l\'amante — attirando, non spingendo.\n\nE poiché il pensiero è tanto nobile quanto il suo oggetto, e nulla è più nobile di lui, può pensare soltanto sé stesso: è «pensiero di pensiero».\n\nQuindi non ha creato il mondo, non lo governa, non lo conosce, non ascolta nessuno.',
       chiedi:'Nel Duecento, Tommaso d\'Aquino farà di questo dio il Dio cristiano. Quali di queste caratteristiche deve cambiargli per riuscirci — e che cosa resta di Aristotele dopo averle cambiate?'}
    ],
    testi:[
      {fonte:'Aristotele, Metafisica IV 4, 1006a — la confutazione',
       corpo:'«Alcuni pretendono che si dimostri anche questo, ma lo fanno per mancanza di cultura: è mancanza di cultura non sapere di quali cose si deve cercare dimostrazione e di quali no. […] Ma si può dimostrare per confutazione, purché l\'avversario dica qualcosa.»',
       glossa:'Due idee in poche righe, e la seconda è la più preziosa: sapere di quali cose si deve cercare dimostrazione fa parte dell\'essere colti. Non tutto si dimostra, e pretenderlo non è rigore — è non aver capito che cos\'è una dimostrazione.'},
      {fonte:'Aristotele, Metafisica XII 7, 1072b — il motore immobile',
       corpo:'«Muove come ciò che è amato; e ciò che è mosso muove tutto il resto. […] Da un tale principio dipendono il cielo e la natura. E la sua vita è come la migliore che a noi tocca per breve tempo.»',
       glossa:'L\'ultima frase è la più umana del libro: la vita del dio è quella che noi conosciamo solo a tratti, nei momenti in cui pensiamo davvero. La teologia di Aristotele non promette un\'altra vita — descrive la nostra, portata al massimo.'},
      {fonte:'Aristotele, Categorie 5, 2a — la sostanza prima',
       corpo:'«Sostanza, detta in senso principale, primo e soprattutto, è ciò che non si dice di un soggetto né è in un soggetto: per esempio, un certo uomo o un certo cavallo.»',
       glossa:'È la frase che rovescia Platone in una riga. Ciò che esiste in senso pieno non è l\'Idea di uomo: è quest\'uomo qui, che si può indicare col dito. L\'universale c\'è, ma è secondo — sta nell\'individuo, non sopra di lui.'}
    ],
    compito:'Mezza pagina. Scegliete un oggetto qualunque che avete in casa e descrivetelo con le quattro cause: di che cosa è fatto, che cosa è, chi l\'ha fatto, per che cosa. Poi fate la stessa cosa con un essere vivente — un albero, un gatto, voi — e segnate esattamente il punto in cui lo schema comincia a scricchiolare.',
    fonti:[
      'Aristotele, Fisica II 3 e II 7-9 (le quattro cause e il finalismo)',
      'Aristotele, Metafisica I 6 e I 9 (critica alle Idee), IV 1-4 (l\'essere e il principio), VII 1-17 (la sostanza), XII 6-9 (il motore immobile)',
      'Aristotele, Categorie 1-5; Analitici primi I 1-7 (il sillogismo); Analitici secondi I 1-3 (i principi)',
      'Aristotele, Etica Nicomachea I 7 — la funzione propria dell\'uomo',
      'Diogene Laerzio, Vite V 1-35 — la vita, il testamento, il catalogo delle opere',
      'W.D. Ross, Aristotele; E. Berti, Profilo di Aristotele'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia antica · 8 — Aristotele: etica e politica': {
  mappa: {
    n:'Etica e politica', d:'Aristotele: che cos\'è una vita riuscita, e dove si può vivere così',
    f:[
      {r:'parte da', n:'Il fine dell\'uomo', d:'ogni azione tende a un bene: qual è quello ultimo?',
       f:[
         {r:'si chiama', n:'Eudaimonía', d:'non «felicità» come stato d\'animo: vita riuscita, ben condotta',
          f:[{piu:true, r:'alla lettera', n:'Avere un buon demone', d:'una sorte buona, ma che dipende da come si vive'}]},
         {r:'è l\'unico bene', n:'Cercato per sé stesso', d:'tutti gli altri si vogliono in vista di questo'},
         {r:'si trova con', n:'La funzione propria', d:'l\'ergon: come l\'occhio è buono se vede, l\'uomo è buono se…',
          f:[{r:'e l\'uomo è', n:'L\'animale che ha lógos', d:'quindi la sua riuscita è l\'attività dell\'anima secondo ragione'}]},
         {r:'esclude', n:'Tre vite sbagliate', d:'esaminate e scartate una per una',
          f:[{r:'la vita del', n:'Piacere', d:'«da bestiame», dice: è la scelta dei più'},
             {r:'la vita', n:'Politica', d:'cerca l\'onore, ma l\'onore sta in chi lo dà, non in te'},
             {r:'la vita del', n:'Guadagno', d:'la ricchezza è un mezzo: nessuno la vuole per sé'}]},
         {r:'ma richiede anche', n:'I beni esterni', d:'salute, amici, un minimo di mezzi: nessuno è felice sotto tortura',
          f:[{piu:true, r:'e serve', n:'Una vita intera', d:'«una rondine non fa primavera»: la felicità non è un momento'}]}
       ]},

      {r:'si costruisce con', n:'La virtù etica', d:'non si nasce virtuosi: lo si diventa facendo',
       f:[
         {r:'è un', n:'Abito', d:'héxis: una disposizione stabile acquisita con la ripetizione',
          f:[{r:'come', n:'Si impara a suonare suonando', d:'e si diventa giusti compiendo atti giusti'},
             {piu:true, r:'contro', n:'La virtù come dono', d:'né natura né caso: educazione e esercizio'}]},
         {r:'consiste nel', n:'Giusto mezzo', d:'fra due estremi, l\'eccesso e il difetto',
          f:[{r:'esempio', n:'Coraggio', d:'fra la viltà e la temerarietà'},
             {r:'esempio', n:'Liberalità', d:'fra l\'avarizia e la prodigalità'},
             {r:'ma', n:'Non è la media aritmetica', d:'è il mezzo «rispetto a noi»: cambia con la persona e la situazione'},
             {piu:true, r:'e alcune cose', n:'Non hanno mezzo', d:'l\'invidia, il furto, l\'omicidio: sono cattive in sé'}]},
         {r:'richiede', n:'La scelta deliberata', d:'proaíresi: non basta fare la cosa giusta, bisogna sceglierla sapendo',
          f:[{r:'si delibera', n:'Sui mezzi, non sui fini', d:'nessuno delibera se essere felice: delibera come'}]},
         {r:'la più completa è', n:'La giustizia', d:'l\'unica virtù che riguarda sempre un altro',
          f:[{r:'si divide in', n:'Distributiva', d:'dà a ciascuno secondo il merito: proporzione geometrica'},
             {r:'e in', n:'Correttiva', d:'ripara il danno senza guardare a chi: proporzione aritmetica'},
             {piu:true, r:'e ammette', n:'L\'equità', d:'correggere la legge dove, per la sua generalità, sbaglia sul caso'}]}
       ]},

      {r:'si compie con', n:'Le virtù dianoetiche', d:'quelle della parte razionale',
       f:[
         {r:'la', n:'Phrónesis', d:'saggezza: sa deliberare bene su ciò che riguarda il vivere',
          f:[{r:'non è', n:'Scienza né arte', d:'riguarda il particolare, e il particolare non si dimostra'},
             {piu:true, r:'esempio', n:'Pericle', d:'l\'uomo che sa vedere ciò che è bene per sé e per la città'}]},
         {r:'la', n:'Sophía', d:'sapienza: intelletto più scienza, sulle cose più alte e immutabili'},
         {r:'poi', n:'Epistéme, téchne, noûs', d:'scienza, arte, intuizione dei principi'},
         {r:'e la saggezza', n:'Non si dà senza virtù etica', d:'chi ha il fine storto calcola bene i mezzi per il male'}
       ]},

      {r:'corregge Socrate su', n:'L\'akrasía', d:'l\'incontinenza: sapere il bene e fare il male',
       f:[
         {r:'Socrate diceva', n:'Nessuno sbaglia volendo', d:'chi conosce il bene lo fa'},
         {r:'ma', n:'L\'esperienza dice il contrario', d:'e una teoria contro i fatti evidenti va corretta'},
         {r:'la spiegazione è', n:'Sapere e avere presente', d:'chi è in preda alla passione ha la scienza ma non la usa',
          f:[{r:'come', n:'L\'ubriaco che recita Empedocle', d:'dice le parole giuste senza sapere che cosa dice'},
             {piu:true, r:'formalmente', n:'Salta la premessa minore', d:'sa che i dolci fanno male, non registra che questo è un dolce'}]}
       ]},

      {r:'ha bisogno di', n:'Amicizia', d:'due libri interi su dieci: nessuno vivrebbe senza amici',
       f:[
         {r:'per', n:'Utilità', d:'ci si ama per il vantaggio: dura quanto il vantaggio'},
         {r:'per', n:'Amicizia di piacere', d:'tipica dei giovani: dura quanto il piacere'},
         {r:'per', n:'Amicizia di virtù', d:'ci si ama per quello che l\'altro è: la sola che dura',
          f:[{r:'perché', n:'L\'amico è un altro sé', d:'e volere il bene dell\'altro per lui, non per sé'},
             {piu:true, r:'e ne servono', n:'Pochi', d:'come non si può essere innamorati di molti insieme'}]},
         {r:'tiene insieme', n:'La città più della giustizia', d:'se sono amici non hanno bisogno di giudici'}
       ]},

      {r:'culmina nella', n:'Vita contemplativa', d:'il libro X, che rimette in discussione tutto',
       f:[
         {r:'è', n:'L\'attività più alta', d:'perché ha per oggetto le cose più alte'},
         {r:'è la più', n:'Autosufficiente', d:'il giusto ha bisogno di qualcuno verso cui essere giusto; chi pensa no'},
         {r:'è', n:'Continua e amata per sé', d:'non produce nulla, e proprio per questo non stanca'},
         {r:'ci fa vivere', n:'Secondo il divino che è in noi', d:'«non seguire i consigli di chi dice: da mortale, pensa da mortale»'},
         {piu:true, r:'ma resta', n:'Una tensione irrisolta', d:'la felicità è l\'attività secondo ragione, o solo quella teoretica?'}
       ]},

      {r:'si realizza nella', n:'Pólis', d:'la politica non è un\'appendice dell\'etica: ne è il luogo',
       f:[
         {r:'perché l\'uomo è', n:'Animale politico', d:'zóon politikón: chi vive fuori dalla città è bestia o dio',
          f:[{r:'perché ha', n:'La parola', d:'gli altri animali hanno la voce, che dice piacere e dolore',
              f:[{r:'e la parola dice', n:'Utile e giusto', d:'ed è su questo che si fa una città'}]}]},
         {r:'e quindi', n:'La città viene prima', d:'prima per natura, non nel tempo: il tutto prima della parte',
          f:[{piu:true, r:'come', n:'La mano staccata dal corpo', d:'si chiama mano solo per omonimia'}]},
         {r:'nasce da', n:'Famiglia e villaggio', d:'per soddisfare i bisogni; ma esiste per vivere bene'},
         {r:'sostiene', n:'La schiavitù per natura', d:'alcuni sarebbero destinati a obbedire, ed è un bene per loro',
          f:[{r:'perché', n:'Chi partecipa della ragione senza averla', d:'la riconosce negli altri ma non la possiede'},
             {r:'ma ammette', n:'La natura sbaglia spesso', d:'i corpi non corrispondono: si vedono liberi con corpo da schiavo'},
             {r:'e registra', n:'L\'obiezione degli avversari', d:'«è contro natura: schiavo e libero lo fa la legge, e si regge sulla forza»'},
             {piu:true, r:'e immagina', n:'Se le spole tessessero da sole', d:'allora non servirebbero servi: Politica I 4'}]},
         {r:'classifica', n:'Sei forme di governo', d:'tre rette e tre deviate, secondo chi comanda e per chi',
          f:[{r:'rette', n:'Monarchia, aristocrazia, politia', d:'governano nell\'interesse di tutti'},
             {r:'deviate', n:'Tirannide, oligarchia, democrazia', d:'governano nell\'interesse di chi comanda'},
             {r:'e la migliore possibile è', n:'La politia', d:'governo dei molti, fondato sul ceto medio',
              f:[{r:'perché', n:'Il ceto medio non trama', d:'né invidia i ricchi né è disprezzato dai poveri: è il più stabile'}]}]},
         {r:'critica', n:'La Repubblica di Platone', d:'ha letto il maestro e non è d\'accordo',
          f:[{r:'perché', n:'Ciò che è di tutti non è di nessuno', d:'si ha cura di ciò che è proprio'},
             {piu:true, r:'e perché', n:'La città non deve essere una', d:'l\'eccesso di unità la distrugge: una città è fatta di diversi'}]}
       ]},

      {r:'lascia anche', n:'Poetica e retorica', d:'le scienze del produrre',
       f:[
         {r:'l\'arte è', n:'Mímesis', d:'imitazione: ma non copia — rappresenta ciò che potrebbe accadere'},
         {r:'perciò', n:'La poesia è più filosofica della storia', d:'la storia dice il particolare, la poesia l\'universale'},
         {r:'la tragedia produce', n:'Catarsi', d:'purificazione di pietà e terrore, per mezzo di pietà e terrore',
          f:[{piu:true, r:'e resta', n:'La parola più discussa', d:'purga medica, purificazione rituale o chiarificazione intellettuale?'}]},
         {r:'la retorica è', n:'La facoltà di vedere il persuasivo', d:'non insegna a mentire: insegna a riconoscere gli argomenti'}
       ]},

      {r:'lascia', n:'Che cosa resta', d:'e che cosa è stato ripreso',
       f:[
         {r:'l\'etica delle', n:'Virtù', d:'tornata in auge nel Novecento contro doveri e conseguenze',
          f:[{piu:true, r:'con', n:'Anscombe e MacIntyre', d:'a partire da «Modern Moral Philosophy», 1958'}]},
         {r:'l\'idea che', n:'La politica sia parte dell\'etica', d:'lo Stato non è neutrale: deve rendere buoni i cittadini'},
         {r:'e il ceto medio', n:'Come garanzia di stabilità', d:'un\'idea che attraversa tutta la storia costituzionale'},
         {r:'ma anche', n:'Una macchia che non si toglie', d:'la giustificazione della schiavitù e l\'inferiorità della donna'}
       ]}
    ],
    incroci:[
      {da:'L\'animale che ha lógos', a:'Animale politico', r:'è la stessa definizione in',
       perche:'La funzione propria dell\'uomo e la sua natura politica non sono due tesi: sono la stessa. Chi ha il lógos può dire utile e giusto, e dirlo insieme ad altri è già fare una città. L\'etica sbocca nella politica perché parte da lì.'},
      {da:'Abito', a:'La città viene prima', r:'ha bisogno che',
       perche:'Se la virtù si acquista ripetendo atti virtuosi, qualcuno deve avere organizzato le occasioni e le leggi che li rendono normali. Per Aristotele nessuno diventa buono da solo: è la città a fabbricare le abitudini.'},
      {da:'L\'esperienza dice il contrario', a:'Nessuno sbaglia volendo', r:'confuta',
       perche:'È il metodo di Aristotele in una riga: quando una teoria elegante contraddice un fatto che tutti osservano, si corregge la teoria. Contro Socrate non porta un argomento migliore — porta l\'evidenza che si può sapere e non fare.'},
      {da:'La schiavitù per natura', a:'L\'obiezione degli avversari', r:'è indebolita dalla stessa',
       perche:'Aristotele scrive lui stesso che alcuni sostengono che la schiavitù sia contro natura e si regga solo sulla forza. Sapeva dell\'obiezione, la riporta con onestà, e sceglie di non lasciarsene convincere: è questo a rendere il caso interessante.'},
      {da:'La natura sbaglia spesso', a:'Chi partecipa della ragione senza averla', r:'toglie il criterio a',
       perche:'Il criterio dovrebbe essere visibile nei corpi e nelle capacità. Ma lui stesso ammette che spesso non corrisponde. Se il segno non è affidabile, non resta nessun modo di riconoscere lo schiavo per natura — e la tesi si svuota da dentro.'},
      {da:'Se le spole tessessero da sole', a:'Una macchia che non si toglie', r:'contiene già la fine di',
       perche:'Nella stessa pagina in cui giustifica la schiavitù, Aristotele scrive che se gli strumenti lavorassero da soli i servi non servirebbero. Ha visto che la schiavitù dipende dalla tecnica, cioè che è storica — e non ne ha tratto la conseguenza.'},
      {da:'Il ceto medio non trama', a:'La Repubblica di Platone', r:'è la risposta concreta a',
       perche:'Platone cerca la città perfetta e la fonda su un\'élite senza proprietà. Aristotele cerca la migliore possibile e la fonda su chi ha abbastanza da non invidiare e poco da non essere invidiato. Uno progetta, l\'altro osserva centocinquantotto costituzioni.'},
      {da:'Autosufficiente', a:'La giustizia', r:'mette in crisi il primato di',
       perche:'La giustizia è la virtù più completa perché riguarda sempre un altro. Ma la vita contemplativa è più alta proprio perché non ha bisogno di nessuno. Il libro X e il libro V tirano in direzioni opposte, e Aristotele non scioglie il nodo.'},
      {da:'La poesia è più filosofica della storia', a:'Mímesis', r:'ribalta il senso di',
       perche:'Per Platone imitare era allontanarsi dal vero di un altro grado. Qui l\'imitazione diventa il modo di cogliere ciò che accade sempre o per lo più — cioè l\'universale. Stessa parola, giudizio rovesciato.'},
      {da:'L\'equità', a:'Non è la media aritmetica', r:'è il giusto mezzo applicato in',
       perche:'La legge è generale e i casi sono singoli: applicarla alla lettera a volte produce ingiustizia. L\'equità corregge, ed è la stessa mossa del giusto mezzo — la misura non si calcola, si vede nella situazione.'},
      {da:'L\'amico è un altro sé', a:'La città più della giustizia', r:'spiega perché tiene',
       perche:'Fra amici non servono tribunali, perché ciascuno vuole il bene dell\'altro come il proprio. La giustizia serve dove l\'amicizia manca: è il minimo, non il massimo, di ciò che tiene insieme una comunità.'},
      {da:'Sapere e avere presente', a:'La scelta deliberata', r:'spiega che cosa manca alla',
       perche:'L\'incontinente non ha scelto: ha la conoscenza ma non la tiene davanti mentre agisce. Da qui la conseguenza pratica di tutta l\'etica — non basta sapere che cosa è bene, bisogna essersi abituati ad averlo presente quando serve.'}
    ]
  },
  provocazione: {
    titolo:'Trovate l\'errore',
    durata:'55 minuti',
    domandaMadre:'Quale delle vostre convinzioni ovvie sembrerà, fra duemila anni, quello che a voi sembra questa?',
    perche:'La classe legge un testo che giustifica la schiavitù senza sapere chi lo ha scritto, e deve smontarlo come argomento — non condannarlo come sentimento. Poi scopre che l\'autore è l\'uomo che ha inventato la logica, che conosceva l\'obiezione contraria e la riporta lui stesso, e che nella stessa pagina scrive la frase che demolisce la propria tesi. L\'ora non serve a dare un voto ad Aristotele: serve a far vedere che un pensiero rigoroso può poggiare su un pregiudizio invisibile a chi lo ha, e a chiedersi quale sia il proprio.',
    occorrente:'Il testo del primo tempo va letto senza dire chi lo ha scritto. Resistere alla tentazione di anticiparlo è tutta la riuscita dell\'ora.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'«Alcuni sono per natura liberi, altri per natura schiavi,\ne per questi ultimi la schiavitù è cosa giusta e utile.\n\nÈ schiavo per natura chi partecipa della ragione\ntanto da riconoscerla negli altri,\nma non tanto da possederla in sé stesso.\n\nCome il corpo deve obbedire all\'anima,\ncosì costoro devono obbedire a chi sa comandare:\ne questo è un bene anche per loro.»\n\nNon vi chiedo se siete d\'accordo.\nVi chiedo di trovare l\'errore nel ragionamento.',
       parlato:'Non dire chi l\'ha scritto. Se qualcuno chiede, rispondi che lo saprà fra venti minuti.\n\nLa richiesta è precisa e va ripetuta: non «che cosa ne pensate», che produce indignazione in tre secondi e nient\'altro. «Dove sbaglia il ragionamento». Devono lavorare sulla struttura: quali sono le premesse, che cosa si dà per scontato, dove il passaggio non tiene.\n\nDai cinque minuti a coppie, con l\'obbligo di scrivere una frase sola: «l\'errore è che…».\n\nPoi raccogli. In genere escono tre tipi di risposta: è falso che esistano persone così; anche se esistessero, non ne seguirebbe che devono obbedire; il criterio non si può applicare, perché non c\'è modo di sapere chi sia. La terza è la più forte, e quasi sempre la dice qualcuno.',
       seDicono:[
         {loro:'«È ovvio che sia sbagliato, la schiavitù è disumana.»',
          tu:'Sono d\'accordo con te, e non serve a niente. Chi ha scritto queste righe pensava di essere umano e ragionevole. Se l\'unica cosa che sai dire è che è mostruoso, non hai ancora capito come si possa arrivare a scriverlo — e allora non sei attrezzato per accorgertene su te stesso.'},
         {loro:'«Era normale a quei tempi, tutti la pensavano così.»',
          tu:'Non tutti: fra poco vedremo che l\'obiezione contraria circolava, e che chi ha scritto questo la conosceva. «Erano altri tempi» è una spiegazione che non spiega — assolve tutti e non insegna niente.'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'Il ragionamento che avete letto:',
       opzioni:['sbaglia perché parte da premesse false', 'sbaglia perché il passaggio non tiene'],
       parlato:'La scelta obbliga a distinguere due cose che si confondono sempre: un ragionamento può essere valido e partire dal falso, oppure partire dal vero e non concludere. È la distinzione che Aristotele stesso ha inventato — e la stai facendo usare contro di lui.\n\nFai argomentare tre per parte. Il primo gruppo dirà che non esistono uomini «che partecipano della ragione senza averla». Il secondo dirà che anche ammettendolo, dall\'essere meno capace non segue il dovere di obbedire, né che ciò sia un bene per te.\n\nPoi la domanda che li mette d\'accordo e li sposta: se il criterio non è applicabile — se nessuno può stabilire chi sia schiavo per natura — che cosa resta della tesi? Resta la schiavitù così com\'è, con una giustificazione che non tocca nessun caso reale.',
       seDicono:[
         {loro:'«Sono valide tutte e due le critiche.»',
          tu:'Sì, ma non valgono uguale. La prima si può negare: chi la sostiene ti dirà che quegli uomini esistono. La seconda no: colpisce la forma, e vale anche concedendo tutto il resto. In una discussione seria conviene sempre attaccare da lì.'},
         {loro:'«Non ha senso analizzare una cosa del genere: va solo condannata.»',
          tu:'Condannarla è facile e dura un secondo. Capire come una mente straordinaria ci sia arrivata dura di più e serve di più — perché è l\'unico esercizio che ti dà qualche possibilità di accorgerti dei tuoi.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Tre cose che rendono il caso peggiore.\n\nPrima: chi ha scritto quelle righe conosceva l\'obiezione.\nLa riporta lui stesso, poche righe prima:\n\n«Ad altri sembra che il comandare da padrone sia contro natura:\nè per legge che uno è schiavo e un altro libero,\nmentre per natura non c\'è nessuna differenza;\ne perciò non è giusto, perché è cosa violenta.»\n\nSeconda: ammette che il suo criterio non funziona.\n«La natura vorrebbe fare i corpi diversi, ma spesso accade il contrario.»\n\nTerza: nella stessa pagina scrive che\nse gli strumenti lavorassero da soli,\nnon ci sarebbe bisogno di servi.',
       parlato:'Dai le tre cose in fila, lentamente, aspettando fra l\'una e l\'altra.\n\nLa prima toglie l\'alibi dell\'epoca: l\'argomento contrario esisteva ed era già formulato bene — schiavo e libero li fa la legge, non la natura, e ciò che si regge sulla forza non è giusto. Lui lo trascrive e va avanti.\n\nLa seconda è quella che i filologi discutono di più: ammette che il segno visibile non c\'è. Se non puoi riconoscere lo schiavo per natura, la categoria è inutilizzabile — e lui lo scrive.\n\nLa terza è quasi profetica: se le spole tessessero da sole, i padroni non avrebbero bisogno di servi. Sta dicendo che la schiavitù dipende dallo stato della tecnica, cioè che è storica e non naturale. Ha in mano la confutazione della propria tesi e non la usa.\n\nA questo punto chiedi: che cosa gli ha impedito di vederla?',
       seDicono:[
         {loro:'«Gli conveniva: viveva in una società schiavista.»',
          tu:'Probabile, ma attento a fermarti lì. Il fatto che una convinzione ti convenga non dimostra che sia falsa, e soprattutto non spiega perché tu non riesca a vederla. Chi ha un pregiudizio non lo vive come interesse: lo vive come evidenza.'},
         {loro:'«Non era così intelligente come dite.»',
          tu:'Adesso vi dico chi era, e poi ridiscutiamo questa frase.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'L\'autore.\n\nÈ l\'uomo che ha inventato la logica:\nil primo che abbia scritto le regole per riconoscere\nse un ragionamento è valido, chiunque lo faccia\ne di qualunque cosa parli.\n\nÈ lo stesso che ha scritto che la virtù non è un dono\nma un\'abitudine, che si impara facendo;\nche l\'amico va amato per quello che è;\nche una città in cui tutti sono uguali per legge\nè più stabile e più giusta di una governata da pochi.\n\nAristotele.',
       testo:{fonte:'Aristotele, Politica I 4-6, 1253b-1255b (IV secolo a.C.)',
              glossa:'Il punto della lezione non è che Aristotele fosse cattivo o stupido: è che non lo era. L\'uomo che ha dato all\'Occidente lo strumento per controllare i ragionamenti non lo ha applicato al proprio mondo — perché ciò che si dà per ovvio non compare mai fra le premesse, e quindi non viene mai controllato.'},
       parlato:'Lascia qualche secondo di silenzio dopo il nome. Poi collega alle cose che hanno studiato nell\'ora precedente: il sillogismo, le categorie, il principio di non contraddizione.\n\nE poi il paradosso più duro, che va detto con calma: gli strumenti con cui oggi condanniamo quel passo li ha costruiti in gran parte lui. L\'idea che si controlli la forma di un argomento; l\'idea che la virtù dipenda dall\'educazione e non dalla nascita; l\'idea che il fine della città sia far vivere bene i cittadini. Sono suoi.\n\nSe c\'è tempo, aggiungi il dettaglio biografico che spiazza: Aristotele visse quasi tutta la vita ad Atene come meteco, straniero residente. Non fu mai cittadino, non poté mai votare né possedere terra. L\'uomo che ha scritto che la vita piena è quella del cittadino è stato escluso, per tutta la vita, da ciò che chiamava il compimento dell\'uomo.',
       seDicono:[
         {loro:'«Allora la sua filosofia non vale niente.»',
          tu:'Prova a togliere dal tuo modo di pensare tutto quello che gli devi e vedi che cosa resta. Il punto non è salvarlo o buttarlo: è imparare a tenere insieme due giudizi veri e opposti sulla stessa persona, che è una delle cose più difficili che ci siano.'},
         {loro:'«Ma allora chiunque può sbagliare così.»',
          tu:'Esatto. E questa è l\'unica conclusione utile dell\'ora.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Come si fa a non vedere una cosa del genere?\n\nGuardate come è costruito l\'argomento.\n\nNon dice mai: «la schiavitù è giusta».\nDice: «poiché alcuni sono per natura destinati a obbedire…»\n\nLa tesi non sta nella conclusione.\nSta nella premessa —\ne le premesse non si discutono: si danno per ovvie.\n\nUn pregiudizio non è un\'opinione sbagliata\nche uno difende.\n\nÈ una cosa che non gli sembra un\'opinione.',
       parlato:'Questo è il concetto che vale l\'ora intera, e va costruito insieme a loro.\n\nRiprendi il testo del primo tempo e fagli indicare dove sta esattamente la tesi contestabile. Scopriranno che non è nella conclusione — che è quasi un\'ovvietà una volta accettato il resto — ma nell\'inciso «per natura», che passa senza essere notato.\n\nPoi la formula: si controllano i passaggi, quasi mai le premesse. E le premesse che nessuno controlla sono quelle che tutti condividono.\n\nSe vuoi renderlo concreto, prendi un esempio che li riguardi. «Poiché è normale che a quindici anni si vada a scuola…»; «poiché è ovvio che chi lavora di più debba guadagnare di più…»; «poiché è naturale che…». Ogni volta che sentite «per natura», «è ovvio», «da sempre», lì c\'è una premessa che non è stata controllata da nessuno.\n\nNon serve dire che quelle premesse siano false. Serve accorgersi che sono premesse.',
       seDicono:[
         {loro:'«Ma allora bisogna dubitare di tutto, non si va avanti.»',
          tu:'Non di tutto e non sempre: sarebbe paralizzante e Aristotele stesso lo dice — non tutto si dimostra. Ma quando una premessa serve a giustificare che qualcuno stia sotto, quella conviene controllarla. È un criterio ristretto e utilizzabile.'},
         {loro:'«E noi come facciamo ad accorgercene?»',
          tu:'Un metodo c\'è, ed è quello che abbiamo usato oggi: ascoltare chi la pensa diversamente e prendere sul serio la sua obiezione, non la sua persona. Aristotele l\'obiezione l\'aveva trascritta. Non l\'ha guardata.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Ultima domanda, e non riguarda Aristotele.\n\nFra duemila anni qualcuno leggerà una pagina\nscritta oggi da una persona intelligente e perbene,\ne dirà: come faceva a non accorgersene?\n\nQuale pagina sarà?\n\nNon vi chiedo di indovinare.\nVi chiedo un\'altra cosa:\n\ncome fareste, oggi, ad accorgervene?',
       parlato:'Non raccogliere risposte a voce sulla prima domanda: diventa una gara a indovinare il tema di moda, e non è quello il punto.\n\nInsisti sulla seconda, che è metodologica e si può discutere davvero. Le risposte utili che escono di solito sono tre: guardare chi ci rimette da una nostra convinzione; ascoltare chi la contesta invece di squalificarlo; controllare le frasi che cominciano con «è naturale che».\n\nPoi chiudi collegando alla parte migliore di Aristotele, perché l\'ora non finisca in un processo: è lui ad aver scritto che la virtù è un abito, cioè che ci si allena a essere giusti. Anche accorgersi delle proprie premesse è un abito, e si costruisce nello stesso modo — facendolo molte volte, su casi che non ci costano niente, così che si sappia fare quando costerà.\n\nUltima riga da lasciare in aria: la prossima volta che scriverete «è ovvio che», mettete un punto interrogativo e guardate che cosa succede.',
       seDicono:[
         {loro:'«Quindi non possiamo fidarci di nessun filosofo.»',
          tu:'Potete fidarvi dei loro argomenti, che sono controllabili — e non delle loro conclusioni, che dipendono anche da quello che il loro tempo gli rendeva invisibile. È esattamente la differenza fra leggere un filosofo e credergli.'}
       ]}
    ],
    riserve:[
      {titolo:'Il giusto mezzo non è la media',
       corpo:'La virtù, dice Aristotele, sta nel mezzo fra due estremi: il coraggio fra viltà e temerarietà, la liberalità fra avarizia e prodigalità.\n\nMa aggiunge subito una precisazione che quasi nessuno ricorda: non è il mezzo «della cosa», è il mezzo «rispetto a noi». Se dieci libbre di cibo sono troppe e due troppo poche, non ne seguirà che il maestro di ginnastica ne ordini sei: dipende da chi deve mangiarle. Per Milone, il lottatore, sei sono poche.\n\nE aggiunge che alcune azioni non hanno mezzo: l\'invidia, il furto, l\'omicidio. Non esiste il modo giusto di commettere un omicidio.',
       chiedi:'Se il mezzo cambia con la persona e la situazione, chi lo stabilisce? Aristotele risponde: l\'uomo saggio, la phrónesis. Ma allora la regola morale non è una formula — è un giudizio. Vi sembra una debolezza della teoria o una descrizione onesta di come funziona davvero?'},
      {titolo:'Chi sa e non fa',
       corpo:'Socrate sosteneva che nessuno sbaglia sapendo: chi conosce il bene lo compie, e chi fa il male ha soltanto valutato male.\n\nAristotele osserva che questo contraddice ciò che tutti vediamo — gente che sa benissimo che cosa dovrebbe fare e fa il contrario — e che una teoria che contraddice i fatti va corretta.\n\nLa sua spiegazione: chi è in preda alla passione ha la scienza ma non la usa. È come un ubriaco che recita i versi di Empedocle: dice le parole giuste senza avere presente ciò che dice. Sa e non sa, allo stesso tempo, in due sensi diversi.',
       chiedi:'Vi convince? Provate a descrivere l\'ultima volta che avete fatto una cosa sapendo che era sbagliata: in quel momento lo sapevate davvero, o lo avete saputo di nuovo un minuto dopo? E se è così, che cosa bisogna allenare — la conoscenza o l\'abitudine?'},
      {titolo:'Il filosofo senza cittadinanza',
       corpo:'Aristotele scrive che l\'uomo è per natura un animale politico, che la città viene prima dell\'individuo come il corpo prima della mano, e che chi vive fuori dalla città o è una bestia o è un dio.\n\nVisse ad Atene per quasi quarant\'anni. Non fu mai cittadino: era un meteco, straniero residente. Non poteva votare, né parlare in assemblea, né possedere una casa a proprio nome. Doveva avere un cittadino che garantisse per lui.\n\nQuando Alessandro morì e ad Atene esplose il sentimento antimacedone, lo accusarono di empietà. Lasciò la città dicendo che non voleva che gli Ateniesi peccassero due volte contro la filosofia. Morì l\'anno dopo, a Calcide.',
       chiedi:'L\'uomo che ha definito la vita piena come quella del cittadino ne è stato escluso per tutta la vita. Cambia qualcosa nel modo in cui leggete la sua politica? E in generale: sapere da dove parla chi scrive aiuta a capirlo, o è un modo per non discutere quello che dice?'}
    ],
    testi:[
      {fonte:'Aristotele, Etica Nicomachea II 1, 1103a-b',
       corpo:'«Nessuna delle virtù etiche nasce in noi per natura: […] le riceviamo essendo capaci di accoglierle, e le portiamo a compimento con l\'abitudine. […] Le cose che dobbiamo imparare a fare, le impariamo facendole: diventiamo costruttori costruendo, e citaristi suonando la cetra. Così pure diventiamo giusti compiendo azioni giuste, temperanti compiendo azioni temperanti, coraggiosi compiendo azioni coraggiose.»',
       glossa:'È la frase che rovescia sia Socrate sia l\'aristocrazia: la virtù non è sapere e non è nascita, è allenamento. E ha una conseguenza politica immediata — se la virtù si acquista con l\'abitudine, il legislatore che organizza le abitudini è il vero educatore morale.'},
      {fonte:'Aristotele, Politica I 2, 1253a',
       corpo:'«L\'uomo è, fra gli animali, l\'unico ad avere la parola. La voce è segno del piacere e del dolore, e per questo appartiene anche agli altri animali; ma la parola serve a manifestare l\'utile e il dannoso, e quindi anche il giusto e l\'ingiusto. […] Ed è la comunanza di queste cose a fare la famiglia e la città.»',
       glossa:'La definizione più citata di Aristotele non dice che l\'uomo è socievole: dice che è l\'unico animale che può discutere di ciò che è giusto. La politica non nasce dal bisogno — quello lo hanno anche le api — nasce dalla possibilità di litigare su che cosa sia bene.'},
      {fonte:'Aristotele, Politica IV 11, 1295b',
       corpo:'«In ogni città ci sono tre parti: i molto ricchi, i molto poveri e, terzi, quelli di mezzo. […] Quelli di mezzo sono i più sicuri: non desiderano le cose altrui come i poveri, né gli altri desiderano le loro come accade ai ricchi. […] Dove il ceto medio è numeroso, meno probabili sono le rivolte e le lotte intestine.»',
       glossa:'È la pagina più moderna della Politica e nasce da un metodo, non da un ideale: Aristotele aveva fatto raccogliere centocinquantotto costituzioni prima di scriverla. Non progetta la città perfetta come Platone — guarda quali reggono e quali cadono.'}
    ],
    compito:'Mezza pagina. Scrivete una frase che nel vostro ambiente comincia con «è ovvio che» o «è naturale che» e che nessuno mette in discussione. Poi provate a chiedervi due cose: chi ci guadagna se resta ovvia, e chi ci rimette. Non serve concludere che sia sbagliata — serve accorgersi che è una premessa.',
    fonti:[
      'Aristotele, Etica Nicomachea I (il fine e l\'ergon), II (l\'abito e il mezzo), III 1-5 (la scelta), V (la giustizia e l\'equità), VI (le virtù dianoetiche), VII 1-10 (l\'akrasía), VIII-IX (l\'amicizia), X 6-8 (la vita contemplativa)',
      'Aristotele, Politica I 1-7 (l\'animale politico e la schiavitù), II 1-5 (critica alla Repubblica), III 6-13 (le forme di governo), IV 11 (il ceto medio)',
      'Aristotele, Poetica 4, 6 e 9 (mimesi, catarsi, poesia e storia); Retorica I 1-2',
      'Diogene Laerzio, Vite V 5-6 — la fuga da Atene e il testamento',
      'G.E.M. Anscombe, Modern Moral Philosophy (1958); A. MacIntyre, Dopo la virtù (1981)',
      'Sulla schiavitù: M.I. Finley, Schiavitù antica e ideologia moderna'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia antica · 9 — Epicureismo e scetticismo': {
  mappa: {
    n:'Epicureismo e scetticismo', d:'l\'età ellenistica: la filosofia diventa una cura',
    f:[
      {r:'nasce da', n:'La fine della pólis', d:'dopo Alessandro il mondo cambia scala',
       f:[
         {r:'muore', n:'Alessandro nel 323 a.C.', d:'e l\'impero si spezza in monarchie enormi'},
         {r:'il cittadino diventa', n:'Suddito', d:'le decisioni si prendono altrove: l\'assemblea non conta più'},
         {r:'quindi la filosofia', n:'Smette di parlare della città', d:'e comincia a parlare dell\'individuo'},
         {r:'e si presenta come', n:'Terapia', d:'«vuota è la parola del filosofo che non cura una sofferenza»',
          f:[{piu:true, r:'la formula è di', n:'Epicuro', d:'e la riprenderanno tutte le scuole ellenistiche'}]},
         {r:'le scuole diventano', n:'Comunità di vita', d:'non si va a lezione: si vive insieme secondo una regola',
          f:[{piu:true, r:'e sono', n:'Quattro', d:'Giardino, Stoà, scetticismo, e l\'Accademia che diventa scettica'}]}
       ]},

      {r:'la prima è', n:'Il Giardino di Epicuro', d:'Atene, 306 a.C.: una scuola dentro un orto',
       f:[
         {r:'accoglie', n:'Donne e schiavi', d:'cosa che nessun\'altra scuola greca faceva',
          f:[{piu:true, r:'fra i nomi', n:'Leonzio e Mî', d:'un\'etera e uno schiavo, citati come membri a pieno titolo'}]},
         {r:'sull\'ingresso', n:'«Ospite, qui starai bene»', d:'«qui il bene è il piacere»: lo riporta Seneca'},
         {r:'insegna', n:'Vivi nascosto', d:'láthe biósas: stare fuori dalla politica è parte della cura'},
         {r:'mette al centro', n:'L\'amicizia', d:'«di tutto ciò che la saggezza procura, il bene maggiore»'},
         {r:'scrive', n:'Trecento rotoli', d:'ne restano tre lettere e due raccolte di massime',
          f:[{piu:true, r:'ritrovati a', n:'Ercolano', d:'la Villa dei Papiri: rotoli carbonizzati, ancora in corso di lettura'}]}
       ]},

      {r:'poggia sulla', n:'Canonica', d:'la regola per distinguere il vero: tre criteri',
       f:[
         {r:'le', n:'Sensazioni', d:'e non sbagliano mai: sono il contatto diretto con le cose',
          f:[{r:'sbaglia', n:'L\'opinione che ci aggiungiamo', d:'la torre lontana appare tonda: l\'errore è dire che è tonda'}]},
         {r:'le', n:'Prolessi', d:'anticipazioni: immagini generali depositate dalle sensazioni ripetute'},
         {r:'le', n:'Affezioni', d:'piacere e dolore: il criterio per la scelta e il rifiuto'},
         {piu:true, r:'esclude', n:'La dialettica', d:'inutile: si conosce guardando, non discutendo'}
       ]},

      {r:'ha una', n:'Fisica atomistica', d:'ripresa da Democrito, con una modifica decisiva',
       f:[
         {r:'restano', n:'Atomi e vuoto', d:'infiniti, eterni, in movimento perpetuo'},
         {r:'aggiunge', n:'Il clinamen', d:'una deviazione minima e senza causa dalla caduta verticale',
          f:[{r:'serve per', n:'Far nascere i mondi', d:'atomi che cadono paralleli non si incontrerebbero mai'},
             {r:'e serve per', n:'Salvare la libertà', d:'se tutto è necessità, non c\'è responsabilità'},
             {piu:true, r:'lo racconta', n:'Lucrezio, II 216-293', d:'in Epicuro non se ne è conservata la formulazione diretta'}]},
         {r:'ci sono', n:'Mondi infiniti', d:'nascono e muoiono, e il nostro non ha niente di speciale'},
         {r:'l\'anima è', n:'Fatta di atomi', d:'sottilissimi: si dissolve con il corpo'},
         {r:'e gli dèi', n:'Esistono e non si occupano di noi', d:'vivono negli intermundia, perfettamente beati',
          f:[{piu:true, r:'perché', n:'Occuparsi del mondo è fatica', d:'e un essere beato non fatica e non si adira'}]}
       ]},

      {r:'definisce', n:'Il piacere', d:'ma non quello che credete',
       f:[
         {r:'non è', n:'Il piacere in movimento', d:'cinetico: quello che si prova mentre si soddisfa un bisogno'},
         {r:'è', n:'Il piacere stabile', d:'catastematico: l\'assenza di dolore, ed è il limite massimo',
          f:[{r:'nel corpo', n:'Aponía', d:'assenza di dolore fisico'},
             {r:'nell\'anima', n:'Atarassia epicurea', d:'assenza di turbamento'},
             {piu:true, r:'quindi', n:'Il piacere non cresce', d:'una volta tolto il dolore, si può solo variare, non aumentare'}]},
         {r:'si governa con', n:'La classificazione dei desideri', d:'e sono solo tre gruppi',
          f:[{r:'naturali e necessari', n:'Fame, sete, riparo', d:'facili da soddisfare: e la loro assenza fa male'},
             {r:'naturali non necessari', n:'Cibi raffinati', d:'si possono avere, ma non se ne sente la mancanza'},
             {r:'né l\'uno né l\'altro', n:'Gloria, ricchezza, potere', d:'vuoti: nascono da opinione, e non hanno limite'}]},
         {r:'richiede', n:'Il calcolo', d:'a volte si sceglie un dolore perché ne segue un piacere maggiore',
          f:[{piu:true, r:'per questo', n:'La saggezza è la virtù prima', d:'«non si vive bene senza vivere saggiamente»'}]}
       ]},

      {r:'si riassume nel', n:'Tetrafarmaco', d:'i quattro rimedi, da imparare a memoria',
       f:[
         {r:'primo', n:'Gli dèi non fanno paura', d:'non intervengono, non puniscono, non premiano'},
         {r:'secondo', n:'La morte non dà preoccupazione', d:'quando ci siamo noi non c\'è lei, quando c\'è lei non ci siamo noi'},
         {r:'terzo', n:'Il bene è facile da procurarsi', d:'pane e acqua tolgono il dolore della fame'},
         {r:'quarto', n:'Il male è facile da sopportare', d:'se è acuto dura poco, se dura è sopportabile'},
         {piu:true, r:'conservato in', n:'Un papiro di Ercolano', d:'nell\'opera di Filodemo di Gadara'}
       ]},

      {r:'l\'altra via è', n:'Lo scetticismo', d:'stessa meta, strada opposta',
       f:[
         {r:'lo fonda', n:'Pirrone di Elide', d:'che aveva seguito Alessandro fino in India',
          f:[{piu:true, r:'dove incontrò', n:'I ginnosofisti', d:'i sapienti nudi indiani: la tradizione ci vede un\'influenza'}]},
         {r:'parte da tre domande', n:'Come sono le cose? come dobbiamo comportarci? che cosa ne ricaviamo?',
          f:[{r:'risposta prima', n:'Non lo possiamo sapere', d:'a ogni ragione se ne oppone una uguale e contraria'},
             {r:'risposta seconda', n:'Sospendere il giudizio', d:'epoché: non affermare e non negare'},
             {r:'risposta terza', n:'Atarassia scettica', d:'la quiete arriva da sola, come l\'ombra segue chi cammina'}]},
         {r:'poggia sull\'', n:'Isostenía', d:'uguale forza delle ragioni opposte'},
         {r:'costruisce', n:'I dieci tropi di Enesidemo', d:'dieci modi per mostrare che le cose appaiono diverse',
          f:[{r:'esempio', n:'Lo stesso miele', d:'dolce alla lingua, sgradevole all\'occhio malato'},
             {piu:true, r:'e il', n:'Diverso secondo l\'animale', d:'la stessa acqua è casa per il pesce e morte per l\'uomo'}]},
         {r:'e poi', n:'I cinque tropi di Agrippa', d:'una macchina che blocca qualunque dimostrazione',
          f:[{r:'il', n:'Disaccordo', d:'su tutto c\'è chi la pensa diversamente'},
             {r:'il', n:'Regresso all\'infinito', d:'ogni prova chiede una prova'},
             {r:'la', n:'Relatività', d:'le cose appaiono in rapporto a chi guarda'},
             {r:'l\'', n:'Ipotesi', d:'fermarsi a un principio non dimostrato è arbitrario'},
             {r:'il', n:'Circolo', d:'oppure ci si prova a vicenda: e non vale'}]},
         {r:'ci arriva attraverso', n:'Sesto Empirico', d:'medico del II secolo d.C.: senza di lui non sapremmo quasi nulla'},
         {r:'ma vive', n:'Secondo i fenomeni', d:'lo scettico non è paralizzato: segue le apparenze, i costumi, le arti'}
       ]},

      {r:'lascia', n:'Che cosa resta', d:'una fortuna strana, fatta di condanne e riscoperte',
       f:[
         {r:'Lucrezio ne fa', n:'Il De rerum natura', d:'l\'epicureismo in esametri latini, per Roma'},
         {r:'il cristianesimo lo', n:'Condanna più di ogni altro', d:'niente provvidenza, niente anima immortale, niente giudizio',
          f:[{piu:true, r:'e Dante', n:'Lo mette fra gli eretici', d:'Inferno X: le tombe infuocate di chi «l\'anima col corpo morta fanno»'}]},
         {r:'torna con', n:'Poggio Bracciolini', d:'nel 1417 ritrova Lucrezio in un monastero tedesco'},
         {r:'lo scetticismo torna con', n:'Montaigne', d:'«que sais-je?»: e da lì arriverà a Cartesio e a Hume'},
         {r:'e il nome resta', n:'Frainteso per sempre', d:'«epicureo» oggi significa il contrario di quello che insegnava'}
       ]}
    ],
    incroci:[
      {da:'Terapia', a:'Tetrafarmaco', r:'prende alla lettera la metafora in',
       perche:'Se la filosofia è medicina, la dottrina va somministrata come un farmaco: quattro formule brevi da mandare a memoria e ripetere. Non è divulgazione — è la conseguenza di aver deciso che un pensiero vale quanto cura.'},
      {da:'Il clinamen', a:'Gli dèi non fanno paura', r:'rende possibile',
       perche:'Un mondo interamente necessario avrebbe bisogno di un ordinatore, o schiaccerebbe l\'uomo sotto il destino. La deviazione senza causa toglie il posto tanto alla provvidenza quanto al fato: nessuno ha progettato nulla, e nessuno ti sta guardando.'},
      {da:'La morte non dà preoccupazione', a:'Fatta di atomi', r:'si regge su',
       perche:'L\'argomento funziona solo se non resta niente dopo: se l\'anima è un aggregato di atomi che si disperde, non c\'è nessun soggetto a cui la morte possa accadere. Tolta la fisica, il rimedio non tiene.'},
      {da:'Gloria, ricchezza, potere', a:'Vivi nascosto', r:'giustifica',
       perche:'I desideri vuoti non hanno limite perché non nascono da un bisogno del corpo ma da un\'opinione sugli altri. Uscire dalla competizione politica non è vigliaccheria: è togliersi dal luogo in cui quei desideri si producono.'},
      {da:'Il piacere stabile', a:'Il bene è facile da procurarsi', r:'rende vero che',
       perche:'Se il piacere è assenza di dolore e non un accumulo, allora pane e acqua bastano davvero: tolta la fame, il resto è variazione. È il passaggio che trasforma una tesi sul piacere in una tesi sulla frugalità.'},
      {da:'Sensazioni', a:'La dialettica', r:'rende superflua',
       perche:'Se i sensi non sbagliano mai e l\'errore sta nell\'opinione aggiunta, il compito non è ragionare meglio ma smettere di aggiungere. Da qui il disprezzo epicureo per la logica, che le altre scuole coltivavano.'},
      {da:'Isostenía', a:'Sospendere il giudizio', r:'produce necessariamente',
       perche:'Se ogni ragione ne incontra una di uguale forza, la bilancia resta ferma: non è una scelta di prudenza, è ciò che accade quando i due piatti pesano uguale. Lo scettico non decide di sospendere — si ritrova sospeso.'},
      {da:'Atarassia scettica', a:'Atarassia epicurea', r:'raggiunge per la via opposta',
       perche:'Stessa meta e strade contrarie: Epicuro toglie il turbamento spiegando tutto — atomi, dèi, morte — lo scettico togliendo ogni pretesa di spiegare. Uno guarisce col sapere, l\'altro rinunciandovi.'},
      {da:'I cinque tropi di Agrippa', a:'Non lo possiamo sapere', r:'dimostra formalmente che',
       perche:'Disaccordo, regresso, relatività, ipotesi e circolo non sono cinque esempi: sono le sole uscite possibili da una richiesta di prova, e sono tutte chiuse. È la prima macchina logica costruita per fermare qualunque dimostrazione.'},
      {da:'Secondo i fenomeni', a:'Non lo possiamo sapere', r:'rende vivibile',
       perche:'L\'obiezione classica è che lo scettico non potrebbe nemmeno mangiare. Sesto risponde che le apparenze bastano a vivere: non affermo che il miele sia dolce, dico che mi appare dolce, e lo mangio. Si sospende il giudizio, non l\'azione.'},
      {da:'Condanna più di ogni altro', a:'Frainteso per sempre', r:'spiega',
       perche:'Una dottrina senza provvidenza né aldilà andava screditata, e il modo più efficace non era confutarla: era raccontare che i suoi seguaci vivessero nel lusso. Il significato attuale della parola «epicureo» è il risultato di quella campagna.'},
      {da:'Comunità di vita', a:'L\'amicizia', r:'ha bisogno di',
       perche:'Una scuola che promette una cura non può essere un\'aula: le abitudini si prendono vivendo insieme. Per questo l\'amicizia non è un tema fra gli altri nel Giardino — è la condizione perché la terapia funzioni.'}
    ]
  },
  provocazione: {
    titolo:'Vi dimostro che avere paura della morte è irrazionale',
    durata:'55 minuti',
    domandaMadre:'Se un ragionamento che non riuscite a confutare non vi cambia di una virgola, a che cosa serve la filosofia?',
    perche:'L\'argomento di Epicuro sulla morte ha una qualità rarissima: si capisce in trenta secondi, quasi nessuno riesce a smontarlo, e non guarisce nessuno. La classe si trova per la prima volta davanti alla distanza fra convincere e cambiare — che è il problema centrale di tutta la filosofia ellenistica, e il motivo per cui in quei secoli le scuole smettono di essere aule e diventano comunità con esercizi e regole. Il colpo di scena mette a confronto le due terapie opposte: Epicuro toglie la paura spiegando tutto, lo scettico togliendo ogni pretesa di spiegare — e ottengono la stessa quiete.',
    occorrente:'Niente. Serve però di tenere il tono leggero: l\'argomento è serio e la classe va lasciata libera di riderci sopra.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Alzi la mano chi ha paura della morte.\n\nBene. Adesso ve la tolgo, in tre righe.\n\nFinché ci siete voi, la morte non c\'è.\nQuando c\'è la morte, non ci siete voi.\n\nNon vi incontrerete mai.\n\nQuindi la morte non è niente per voi:\nnon c\'è nessun momento in cui possa farvi del male.\n\nAvete ancora paura?',
       parlato:'Fai alzare le mani sul serio e conta: serve il numero per la fine.\n\nPoi dai l\'argomento con la massima semplicità, senza commentarlo. È fatto di due premesse che nessuno rifiuta e di una conclusione che segue: la struttura è pulitissima, e questo è il punto.\n\nInfine la domanda, e falla proprio così: «avete ancora paura?». Ridono tutti, e rispondono di sì. Ed è la prima volta nell\'anno che una classe intera ammette che un ragionamento valido non ha alcun effetto su di lei.\n\nSegnati quella reazione: è il vero oggetto dell\'ora.',
       seDicono:[
         {loro:'«Non ho paura della morte, ho paura di morire.»',
          tu:'È esattamente la distinzione di Epicuro, e te la concede: la paura del dolore e della malattia è un\'altra cosa, e si cura in un altro modo. Lui parla dello stato di essere morto. Di quello hai paura?'},
         {loro:'«Ho paura di perdere tutto: le persone, le cose che volevo fare.»',
          tu:'Ma perdere è un verbo che ha bisogno di qualcuno che perda. Se non ci sei più, chi è che sente la mancanza? Non ti sto dicendo che hai torto: ti sto chiedendo di dirmi dove sta il soggetto di quella perdita.'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'L\'argomento di Epicuro:',
       opzioni:['è valido, e non riesco a confutarlo', 'ha un errore, e lo trovo'],
       parlato:'Conta e scrivi. In genere la classe si divide quasi a metà, e il secondo gruppo è convinto che l\'errore ci sia — ma quando gli chiedi di indicarlo, produce quasi sempre paure e non obiezioni.\n\nAiutali a distinguere le due cose, perché è il mestiere: «mi sembra sbagliato» non è «è sbagliato». Chiedi di completare la frase «l\'errore è nel passaggio da… a…».\n\nPoi lancia la simmetria, che è la seconda mossa di Epicuro e li mette in difficoltà davvero:\n\nprima di nascere non c\'eravate, per un tempo infinito. Vi fa paura quell\'eternità? No. Allora perché ve ne fa l\'altra, che è identica?\n\nQui il silenzio dura di più.',
       seDicono:[
         {loro:'«Prima di nascere non ero nessuno, adesso invece esisto: è diverso.»',
          tu:'È l\'obiezione seria, e ha un nome: la chiamano asimmetria. Nascere tardi non ci sembra una perdita, morire presto sì. Se riesci a dire perché, hai trovato una crepa vera — e ci hanno lavorato filosofi contemporanei per anni.'},
         {loro:'«L\'errore è che la morte fa male a chi resta.»',
          tu:'Verissimo, ma stai cambiando domanda. Epicuro parla del male che la morte fa a te. Che faccia male agli altri lo ammette — anzi, l\'amicizia è il centro della sua scuola. La tua paura è per te o per loro?'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Epicuro non sta consolando. Sta curando.\n\nPer lui la filosofia è medicina:\n«vuota è la parola del filosofo\nche non cura nessuna sofferenza umana».\n\nE la ricetta è di quattro righe,\nda imparare a memoria come una formula:\n\n1. Gli dèi non fanno paura.\n2. La morte non dà preoccupazione.\n3. Il bene è facile da procurarsi.\n4. Il male è facile da sopportare.\n\nSi chiamava tetrafarmaco:\nil rimedio in quattro sostanze.',
       parlato:'Qui si spiega perché siamo in un\'epoca nuova. Dopo Alessandro la pólis non decide più niente: il cittadino diventa suddito, e la filosofia smette di chiedersi come si governa una città per chiedersi come si sopravvive a un mondo che non si controlla.\n\nDa qui la parola terapia, che non è una metafora carina: le scuole ellenistiche diventano comunità con regole, esercizi quotidiani, formule da ripetere. Il Giardino è un orto in cui si vive insieme, e accoglie donne e schiavi — cosa che nessun\'altra scuola greca faceva.\n\nPoi fai vedere che i quattro rimedi non sono slogan: ognuno poggia sulla fisica. La morte non è nulla perché l\'anima è fatta di atomi che si disperdono. Gli dèi non fanno paura perché un essere beato non si affatica a governare il mondo. Senza gli atomi, il tetrafarmaco è un poster motivazionale.',
       seDicono:[
         {loro:'«Imparare formule a memoria non è filosofia.»',
          tu:'Dipende da che cosa vuoi che la filosofia faccia. Se deve convincerti, basta l\'argomento. Se deve cambiarti quando sei spaventato alle tre di notte, l\'argomento non ti verrà in mente: ti verrà in mente quello che hai ripetuto cento volte. Epicuro ha scelto la seconda.'},
         {loro:'«Ma allora è una religione.»',
          tu:'Ha alcune caratteristiche di una religione — comunità, regola di vita, formule — e nessuna delle altre: nessun dio che interviene, nessun aldilà, nessun premio. È una cosa terza, e nel mondo antico è la norma: si sceglieva una scuola come oggi si sceglie un modo di vivere.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'«Abìtuati a pensare che la morte non è nulla per noi.\n\nOgni bene e ogni male stanno nella sensazione:\nma la morte è privazione della sensazione.\n\nPerciò il più temuto dei mali, la morte, non è nulla per noi:\nquando noi ci siamo, la morte non c\'è;\nquando c\'è la morte, noi non siamo più.\n\nDunque non è nulla né per i vivi né per i morti:\nper i primi non c\'è, e i secondi non ci sono più.»',
       testo:{fonte:'Epicuro, Lettera a Meneceo 124-125 (III secolo a.C.)',
              glossa:'La prima parola è la più importante, e nessuno la nota: «abìtuati». Non «capisci», non «convinciti». Epicuro sa benissimo che l\'argomento da solo non basta, e prescrive un esercizio ripetuto. Tutta la differenza fra una dimostrazione e una terapia sta in quel verbo.'},
       parlato:'Leggi il passo, poi torna sulla prima parola e falla pesare. Chiedi alla classe di rileggere l\'attacco: «abìtuati a pensare». È un imperativo di allenamento, non di comprensione.\n\nPoi fai notare la premessa che regge tutto: ogni bene e ogni male stanno nella sensazione. Se qualcuno la rifiuta — se sostiene che possa esserci un male che non si sente — l\'intero argomento cade. Chiedi se qualcuno vuole rifiutarla, e vedrai che è più difficile di quanto sembri.\n\nSe c\'è tempo, il rovescio della medaglia: la stessa premessa che toglie la paura della morte toglie anche ogni speranza di un dopo. Epicuro sta chiedendo di rinunciare a due cose insieme, e le presenta come un solo guadagno.',
       seDicono:[
         {loro:'«Può esserci un male che non senti: essere tradito e non saperlo.»',
          tu:'Obiezione ottima, ed è quella giusta: se un danno può esistere senza essere sentito, la premessa di Epicuro è falsa e la morte può essere un male anche per chi non c\'è più. Tienila da parte — è il cuore del dibattito contemporaneo su questo tema.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Nello stesso periodo, un\'altra scuola\narriva alla stessa quiete per la strada opposta.\n\nEpicuro toglie la paura spiegando tutto:\ngli atomi, gli dèi, la morte.\n\nGli scettici dicono che il turbamento nasce proprio\ndal voler stabilire come stanno le cose —\ne che la cura è smettere.\n\nA ogni ragione se ne oppone una di uguale forza.\nAllora si sospende il giudizio.\nE la quiete, dice Sesto Empirico, arriva da sé:\ncome l\'ombra segue chi cammina.\n\nDue terapie opposte. Stesso risultato.',
       parlato:'Presenta lo scetticismo come una scuola pratica, non come una posa: Pirrone aveva seguito Alessandro fino in India, e la tradizione racconta che avesse incontrato i sapienti nudi.\n\nPoi mostra la macchina che rende la cosa seria — i cinque tropi di Agrippa. Chiunque affermi qualcosa può essere fermato in cinque modi: c\'è chi la pensa diversamente; ogni prova ne chiede un\'altra; le cose appaiono in rapporto a chi guarda; fermarsi a un principio indimostrato è arbitrario; provarsi a vicenda è un circolo. Non sono esempi: sono tutte le uscite possibili, e sono chiuse.\n\nInfine l\'obiezione che arriva sempre — «così non si può vivere» — e la risposta di Sesto, che è elegantissima: lo scettico segue le apparenze. Non dice che il miele è dolce; dice che gli appare dolce, e lo mangia. Si sospende il giudizio, non l\'azione.',
       seDicono:[
         {loro:'«Lo scettico non può nemmeno dire che non si può sapere niente: si contraddice.»',
          tu:'Se ne erano accorti. Rispondono che le loro formule sono come i purganti, che si eliminano insieme a ciò che devono eliminare: «non determino nulla» vale anche per sé stesso. Ti sembra una scappatoia o una mossa onesta?'},
         {loro:'«È una filosofia da vigliacchi: non si prende mai posizione.»',
          tu:'Provaci un\'ora: sospendere il giudizio su una cosa a cui tieni è molto più faticoso che difenderla. E nota che entrambe le scuole promettono la stessa cosa — la quiete — e che tu la stai giudicando come se fosse un difetto. Perché?'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'All\'inizio dell\'ora avevate paura della morte in tanti.\n\nAdesso conoscete un argomento valido\nche dimostra che quella paura non ha oggetto,\ne quasi nessuno di voi è riuscito a confutarlo.\n\nAlzi ancora la mano chi ha paura.\n\nÈ lo stesso numero.\n\nAllora l\'ultima domanda dell\'ora:\n\nse un ragionamento che non sapete confutare\nnon vi cambia di una virgola,\na che cosa serve la filosofia?',
       parlato:'Rifai la conta e mostrala. Il numero non si muove quasi mai, e il fatto che non si muova è il risultato dell\'esperimento.\n\nPoi lascia la domanda finale in aria per qualche secondo prima di dare la risposta ellenistica, che è la sola cosa da portare a casa: proprio perché l\'argomento non basta, in quei secoli la filosofia smette di essere una teoria e diventa un esercizio. Formule da ripetere, una comunità in cui vivere, un allenamento quotidiano. «Abìtuati», non «capisci».\n\nE la conseguenza per loro, detta una volta sola e senza retorica: se una convinzione la volete davvero, capirla è il primo dieci per cento. Il resto è ripeterla in situazioni in cui costa.\n\nChiudi qui. La prossima volta, un\'altra scuola con la stessa ambizione e una risposta completamente diversa: gli stoici.',
       seDicono:[
         {loro:'«Quindi la filosofia non serve a niente contro le emozioni?»',
          tu:'Serve, ma non come credevi: non ti toglie la paura dimostrandoti che è infondata. Ti dà una cosa da fare tutti i giorni, che con gli anni la sposta. È più lento e meno soddisfacente di un argomento — ed è l\'unica cosa che nella storia abbia funzionato.'}
       ]}
    ],
    riserve:[
      {titolo:'La deviazione che salva la libertà',
       corpo:'Gli atomi cadono nel vuoto tutti alla stessa velocità e in linea retta. Ma se cadessero perfettamente paralleli non si incontrerebbero mai, e non nascerebbe nessun mondo.\n\nEpicuro allora aggiunge il clinamen: una deviazione minima, «in un tempo indeterminato e in un luogo indeterminato», senza causa. Basta quella perché gli atomi si urtino e tutto cominci.\n\nE serve anche a un\'altra cosa. In un mondo di sola necessità, ogni tua azione sarebbe stabilita dalla prima collisione: nessuna colpa, nessun merito, nessuna scelta. La deviazione senza causa apre uno spiraglio.',
       chiedi:'Un movimento senza causa: è la soluzione o è la resa? E soprattutto — se la vostra libertà dipendesse da un urto casuale fra atomi, sarebbe davvero vostra? Il caso vi rende più liberi della necessità?'},
      {titolo:'Il maiale sulla nave',
       corpo:'Durante una tempesta i compagni di Pirrone erano terrorizzati. Lui indicò un maialino che continuava tranquillamente a mangiare sul ponte, e disse che quella era l\'imperturbabilità a cui il saggio deve arrivare.\n\nDi lui si raccontava anche che non evitasse i carri né i precipizi, e che gli amici dovessero seguirlo per salvarlo. Ma un\'altra tradizione dice che visse novant\'anni, fu fatto sommo sacerdote dalla sua città, e che per riguardo verso di lui gli Elei esentarono tutti i filosofi dalle tasse.',
       chiedi:'Le due tradizioni non possono essere vere insieme: uno che non evita i precipizi non arriva a novant\'anni. Perché sono state raccontate tutte e due? E che cosa vuol dire, che gli aneddoti su un filosofo li scrivono spesso i suoi avversari?'},
      {titolo:'La parola rubata',
       corpo:'Epicuro mangiava pane e formaggio, e scriveva che con un po\' di formaggio poteva permettersi un banchetto. Insegnava che i desideri di ricchezza e gloria sono vuoti, e che il piacere massimo è l\'assenza di dolore.\n\nOggi «epicureo» significa buongustaio, amante dei piaceri raffinati e della bella vita.\n\nIl rovesciamento non è casuale: una dottrina che negava la provvidenza, l\'aldilà e il giudizio andava screditata, e il modo più efficace non era confutarla — era raccontare che i suoi seguaci vivessero nel lusso.',
       chiedi:'Conoscete altre parole a cui è successa la stessa cosa? E come si fa, oggi, ad accorgersi che una parola ci arriva già carica del giudizio di qualcun altro?'}
    ],
    testi:[
      {fonte:'Epicuro, Sentenze Vaticane 23 e Massime capitali 27',
       corpo:'«Di tutti i beni che la saggezza procura per la felicità dell\'intera vita, di gran lunga il più grande è l\'acquisto dell\'amicizia.»\n\n«Ogni amicizia è desiderabile per sé stessa, ma ha preso inizio dall\'utilità.»',
       glossa:'Le due frasi insieme dicono una cosa più interessante di ciascuna da sola: l\'amicizia nasce dal bisogno e poi diventa un fine. È lo stesso schema con cui Epicuro tratta il piacere — si parte da un calcolo e si arriva a qualcosa che non si calcola più.'},
      {fonte:'Sesto Empirico, Schizzi pirroniani I 8 e I 28',
       corpo:'«Lo scetticismo è la capacità di mettere di fronte in ogni modo possibile le cose che appaiono e quelle che si pensano; sicché, per l\'uguale forza delle cose e dei discorsi opposti, giungiamo prima alla sospensione del giudizio e poi all\'imperturbabilità.»\n\n«Allo scettico accadde ciò che si racconta di Apelle: disperando di dipingere la schiuma del cavallo, gettò contro il quadro la spugna con cui puliva i pennelli — e ne uscì l\'immagine della schiuma.»',
       glossa:'La quiete non si ottiene cercandola: arriva quando si smette. L\'aneddoto del pittore è la cosa più bella dello scetticismo antico — ed è anche l\'ammissione che il risultato non è stato progettato, ma trovato.'},
      {fonte:'Lucrezio, De rerum natura II 1-4',
       corpo:'«Dolce è, quando sul vasto mare i venti sconvolgono le acque, guardare da terra il grande travaglio di un altro; non perché sia un piacere che qualcuno soffra, ma perché è dolce vedere da quali mali tu sia libero.»',
       glossa:'Il passo più frainteso della letteratura latina: non è cinismo, è la descrizione dell\'atarassia. Ma vale la pena chiedere alla classe se l\'immagine regga — se la propria pace debba proprio misurarsi guardando la tempesta altrui.'}
    ],
    compito:'Mezza pagina. Scegliete una paura che avete e provate a scriverne l\'argomento contrario nel modo più stringente possibile, come ha fatto Epicuro. Poi rispondete a una sola domanda, onestamente: dopo averlo scritto, avete ancora quella paura? E se sì, che cosa servirebbe — secondo voi — perché cambiasse qualcosa?',
    fonti:[
      'Epicuro, Lettera a Meneceo; Lettera a Erodoto; Massime capitali; Sentenze Vaticane (in Diogene Laerzio, Vite X)',
      'Lucrezio, De rerum natura I 62-79, II 216-293 (il clinamen), III 830-869 (la morte)',
      'Sesto Empirico, Schizzi pirroniani I 1-30 (definizione, isostenia, epoché), I 36-186 (i dieci tropi), I 164-177 (i cinque tropi)',
      'Diogene Laerzio, Vite IX 61-108 (Pirrone e lo scetticismo), X 1-154 (Epicuro)',
      'Cicerone, De finibus I-II — l\'esposizione e la critica dell\'epicureismo',
      'P. Hadot, Che cos\'è la filosofia antica? — la filosofia come esercizio spirituale',
      'M. Nussbaum, Terapia del desiderio'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia antica · 10 — Lo stoicismo': {
  mappa: {
    n:'Lo stoicismo', d:'cinque secoli di scuola: dal portico dipinto al trono imperiale',
    f:[
      {r:'attraversa', n:'Tre fasi', d:'e cambia lingua, pubblico e problemi',
       f:[
         {r:'la', n:'Stoà antica', d:'Atene, dal 301 a.C.: si fonda il sistema',
          f:[{r:'la fonda', n:'Zenone di Cizio', d:'un mercante cipriota naufragato ad Atene',
              f:[{piu:true, r:'insegnava sotto', n:'La Stoà pikìle', d:'il portico dipinto dell\'agorà: da lì il nome'}]},
             {r:'la organizza', n:'Crisippo', d:'«se non ci fosse stato Crisippo, non ci sarebbe la Stoà»',
              f:[{piu:true, r:'scrisse', n:'Settecentocinque libri', d:'e non ce n\'è arrivato uno intero'}]}]},
         {r:'la', n:'Stoà media', d:'Panezio e Posidonio: la dottrina arriva a Roma e si ammorbidisce'},
         {r:'la', n:'Stoà romana', d:'i tre autori che leggiamo, e sono i più diversi che si possano immaginare',
          f:[{r:'uno', n:'Seneca', d:'l\'uomo più ricco di Roma, precettore di Nerone'},
             {r:'uno', n:'Epitteto', d:'nato schiavo, azzoppato dal padrone'},
             {r:'uno', n:'Marco Aurelio', d:'imperatore: scrive per sé, in greco, sotto la tenda'}]}
       ]},

      {r:'divide', n:'La filosofia in tre parti', d:'e non sono separabili',
       f:[
         {r:'la', n:'Logica', d:'come si ragiona e come si distingue il vero'},
         {r:'la', n:'Fisica', d:'com\'è fatto il mondo'},
         {r:'l\'', n:'Etica', d:'come si vive: ed è il fine di tutto il resto'},
         {r:'legate come', n:'Un uovo', d:'guscio la logica, albume la fisica, tuorlo l\'etica',
          f:[{piu:true, r:'oppure', n:'Un campo recintato', d:'la siepe è la logica, la terra la fisica, il frutto l\'etica'}]}
       ]},

      {r:'in logica inventa', n:'Il criterio del vero', d:'e insieme una logica nuova',
       f:[
         {r:'è la', n:'Rappresentazione catalettica', d:'l\'immagine che afferra l\'oggetto e non potrebbe venire da altro',
          f:[{r:'illustrata con', n:'La mano di Zenone', d:'dita aperte, mano chiusa, pugno stretto, l\'altra mano che lo afferra',
              f:[{piu:true, r:'i quattro gradi', n:'Rappresentazione, assenso, comprensione, scienza'}]}]},
         {r:'richiede il nostro', n:'Assenso', d:'la rappresentazione arriva, ma darle credito dipende da noi',
          f:[{r:'ed è qui', n:'La prima libertà', d:'non scegliamo che cosa ci accade: scegliamo se assentire'}]},
         {r:'costruisce', n:'La logica delle proposizioni', d:'non dei termini come Aristotele: dei ragionamenti fra intere frasi',
          f:[{r:'esempio', n:'Se il primo, allora il secondo', d:'ma il primo, dunque il secondo'},
             {piu:true, r:'riconosciuta solo nel', n:'Novecento', d:'da Łukasiewicz: per duemila anni si disse che erano regressi rispetto ad Aristotele'}]}
       ]},

      {r:'in fisica sostiene', n:'Un solo mondo corporeo', d:'materialismo integrale: esiste solo ciò che agisce o subisce',
       f:[
         {r:'con', n:'Due principi', d:'inseparabili, non due mondi',
          f:[{r:'uno', n:'Passivo', d:'la materia, senza qualità'},
             {r:'uno', n:'Attivo', d:'il lógos, che la informa: ed è esso stesso corporeo'}]},
         {r:'il lógos è', n:'Pneuma', d:'soffio igneo che penetra tutto e tiene insieme ogni cosa',
          f:[{r:'chiamato anche', n:'Fuoco artefice', d:'e Dio, e natura, e destino: sono lo stesso'},
             {r:'produce', n:'La simpatia universale', d:'tutte le parti del cosmo si tengono: nulla accade isolato'}]},
         {r:'il tempo è', n:'Ciclico', d:'il mondo brucia e ricomincia identico: apocatastasi',
          f:[{piu:true, r:'e quindi', n:'Tornerete a fare questa lezione', d:'infinite volte, uguale: lo dice Crisippo'}]},
         {r:'e tutto accade per', n:'Destino', d:'catena di cause senza vuoti: nulla è senza ragione'}
       ]},

      {r:'concilia', n:'Destino e libertà', d:'la mossa più fine dello stoicismo',
       f:[
         {r:'con', n:'Il cilindro di Crisippo', d:'la spinta viene da fuori, ma rotola per la sua forma',
          f:[{r:'quindi', n:'La causa esterna avvia', d:'la natura propria determina come'},
             {piu:true, r:'è il primo', n:'Compatibilismo', d:'destino e responsabilità insieme, senza contraddizione'}]},
         {r:'con', n:'Il cane e il carro', d:'legato al carro: se segue, cammina; se resiste, viene trascinato',
          f:[{r:'in ogni caso', n:'Il carro va avanti', d:'la scelta non è la meta: è come ci si arriva'}]},
         {r:'e con', n:'Ciò che dipende da noi', d:'la distinzione che regge tutta l\'etica',
          f:[{r:'dipende', n:'Giudizio, desiderio, impulso', d:'ciò che accade dentro'},
             {r:'non dipende', n:'Corpo, fama, beni, morte', d:'ciò che accade fuori'}]}
       ]},

      {r:'in etica parte da', n:'Oikéiosis', d:'l\'appropriazione: il primo impulso di ogni vivente è conservarsi',
       f:[
         {r:'poi si allarga a', n:'I propri cari', d:'poi ai concittadini, poi a tutti gli uomini',
          f:[{piu:true, r:'immagine di', n:'Ierocle', d:'cerchi concentrici da tirare verso il centro'}]},
         {r:'e diventa', n:'Vivere secondo natura', d:'cioè secondo il lógos, che è la natura dell\'uomo'},
         {r:'da cui', n:'La virtù è l\'unico bene', d:'e il vizio l\'unico male: tutto il resto è indifferente',
          f:[{r:'ma esistono', n:'Indifferenti preferibili', d:'salute, ricchezza, vita: da scegliere, senza essere beni',
              f:[{piu:true, r:'e l\'obiezione', n:'Se sono preferibili, sono beni', d:'la muovono gli accademici, e non si chiude mai'}]},
             {r:'quindi', n:'La virtù basta alla felicità', d:'il saggio è felice anche nel toro di Falaride'}]},
         {r:'e le passioni sono', n:'Giudizi sbagliati', d:'non impulsi da domare: errori di valutazione',
          f:[{r:'quattro', n:'Piacere, dolore, desiderio, paura', d:'due sul presente, due sul futuro'},
             {r:'da cui', n:'Apátheia', d:'non insensibilità: assenza di passioni, che sono malattie del giudizio'},
             {piu:true, r:'restano le', n:'Eupatìe', d:'gioia, cautela, volontà: gli affetti buoni del saggio'}]}
       ]},

      {r:'in politica afferma', n:'Il cosmopolitismo', d:'una sola città, e comprende tutti',
       f:[
         {r:'perché', n:'Tutti gli uomini hanno lógos', d:'e quindi sono concittadini per natura, non per legge'},
         {r:'cade', n:'La distinzione greco-barbaro', d:'e anche quella libero-schiavo, almeno in linea di principio',
          f:[{piu:true, r:'Seneca scrive', n:'«Sono schiavi? No: uomini»', d:'Epistole 47, senza però chiedere l\'abolizione'}]},
         {r:'ognuno ha', n:'Il proprio kathékon', d:'il dovere conveniente al ruolo che gli è toccato'},
         {r:'e resta aperta', n:'L\'uscita ragionevole', d:'il suicidio, quando le circostanze impediscono di vivere secondo virtù',
          f:[{piu:true, r:'immagine', n:'La porta è aperta', d:'«se la stanza fa fumo, esco»: Epitteto'}]}
       ]},

      {r:'lascia', n:'Che cosa resta', d:'la scuola antica più viva oggi',
       f:[
         {r:'fonda', n:'L\'idea di diritto naturale', d:'una legge valida per tutti perché tutti hanno ragione',
          f:[{piu:true, r:'passa per', n:'Cicerone e i giuristi romani', d:'e da lì al diritto moderno'}]},
         {r:'arriva a', n:'Kant', d:'il dovere per il dovere, e l\'uomo come fine'},
         {r:'diventa', n:'La terapia cognitiva', d:'Ellis e Beck citano Epitteto nella prima pagina',
          f:[{r:'perché', n:'Non le cose ci turbano, ma le opinioni', d:'è la premessa clinica del metodo'}]},
         {r:'e torna oggi come', n:'Stoicismo pratico', d:'manuali, applicazioni, esercizi: spesso senza la fisica che lo reggeva'}
       ]}
    ],
    incroci:[
      {da:'Assenso', a:'Giudizio, desiderio, impulso', r:'è la radice di',
       perche:'Ciò che dipende da noi non è un elenco arbitrario: discende dalla logica. La rappresentazione arriva da fuori e non la scegliamo, ma dare o negare l\'assenso è l\'unico atto che nessuno può compiere al posto nostro.'},
      {da:'Destino', a:'Il cilindro di Crisippo', r:'non toglie la responsabilità grazie a',
       perche:'Se tutto è concatenato, come si può essere responsabili? Perché la spinta esterna avvia il movimento, ma è la forma del cilindro a farlo rotolare. Le cause esterne sono la condizione, non il tutto: la tua natura fa il resto.'},
      {da:'Pneuma', a:'Un solo mondo corporeo', r:'salva il materialismo di',
       perche:'Se esiste solo il corpo, anche Dio e l\'anima devono essere corporei — e lo sono: soffio igneo che compenetra la materia. È il modo stoico di avere un mondo divino senza un secondo mondo.'},
      {da:'La virtù è l\'unico bene', a:'Corpo, fama, beni, morte', r:'declassa a indifferenti',
       perche:'Se il bene è solo ciò che dipende interamente da noi, tutto il resto — salute, ricchezza, la vita stessa — esce dalla lista dei beni. Non è disprezzo del mondo: è la conseguenza logica di aver messo il bene dove nessuno può toglierlo.'},
      {da:'Indifferenti preferibili', a:'La virtù basta alla felicità', r:'incrina',
       perche:'Se salute e ricchezza vanno preferite, qualcosa in più della virtù conta davvero. Gli stoici rispondono che si preferiscono senza che siano beni; gli avversari replicano che è una distinzione verbale. È la crepa più discussa del sistema.'},
      {da:'Giudizi sbagliati', a:'Non le cose ci turbano, ma le opinioni', r:'è riassunto in',
       perche:'Se la paura non è un\'onda che ci travolge ma un giudizio — «questo è un male» — allora si può correggere come si corregge un errore. È la tesi che ventitré secoli dopo diventerà una tecnica clinica.'},
      {da:'Tutti gli uomini hanno lógos', a:'L\'idea di diritto naturale', r:'fonda',
       perche:'Se la ragione è la stessa in tutti, allora esiste una legge che non dipende dalle assemblee e vale anche contro di esse. Da Crisippo a Cicerone ai giuristi romani, fino alle dichiarazioni dei diritti: la catena è diretta.'},
      {da:'Ciclico', a:'Tutti gli uomini hanno lógos', r:'convive male con',
       perche:'Se il mondo brucia e ricomincia identico, ogni scelta è già stata fatta infinite volte e si rifarà uguale. Gli stoici sostengono che questo non tolga nulla alla responsabilità — ma è il punto in cui il sistema chiede più fiducia.'},
      {da:'Epitteto', a:'Marco Aurelio', r:'insegna dal fondo a',
       perche:'Un ex schiavo azzoppato e l\'imperatore del mondo scrivono la stessa dottrina. Marco Aurelio lo cita e ringrazia chi gliene fece leggere gli appunti: è la prova più forte che quella filosofia non dipende dalla condizione di chi la vive.'},
      {da:'Apátheia', a:'Eupatìe', r:'non è insensibilità grazie a',
       perche:'Il saggio non è di pietra: prova gioia, cautela, volontà. Ciò che gli manca sono le passioni in senso tecnico, cioè i giudizi sbagliati. La distinzione è l\'unica difesa contro l\'accusa di disumanità, e va detta ogni volta.'},
      {da:'La porta è aperta', a:'Ciò che dipende da noi', r:'è il caso limite di',
       perche:'Se nemmeno la vita è un bene, restare o andarsene rientra fra le cose valutabili. Gli stoici lo dicono senza enfasi: la libertà ultima è che nessuno può obbligarti a restare in una stanza piena di fumo.'},
      {da:'Vivere secondo natura', a:'La simpatia universale', r:'ha senso solo dentro',
       perche:'«Secondo natura» non vuol dire secondo l\'istinto: vuol dire secondo il lógos che tiene insieme il cosmo. Togli la fisica e resta un consiglio generico — ed è esattamente ciò che accade nello stoicismo pratico di oggi.'}
    ]
  },
  provocazione: {
    titolo:'Nessuno può farti del male',
    durata:'55 minuti',
    domandaMadre:'Esiste qualcosa che ti possono togliere e che è davvero tuo?',
    perche:'La tesi stoica — nulla di ciò che non dipende da te è un male — sembra una consolazione da deboli finché non si scopre chi l\'ha scritta: uno schiavo azzoppato dal padrone, l\'uomo più ricco di Roma e l\'imperatore del mondo, con le stesse identiche parole. L\'ora funziona perché la classe passa attraverso tre stati: prima la respinge come rassegnazione, poi la vede reggere a prove estreme, e infine deve fare i conti con il fatto che oggi è la premessa di una terapia clinica. Non si chiede di aderirvi: si chiede di dire dove si è disposti a seguirla e dove no.',
    occorrente:'Niente.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Un padrone romano, per divertirsi, torce la gamba del suo schiavo.\n\nLo schiavo, con calma, gli dice:\n«Così la spezzi.»\n\nL\'uomo continua. La gamba si spezza.\n\nLo schiavo, con la stessa calma:\n«Te l\'avevo detto.»\n\nResterà zoppo per tutta la vita.\nSi chiamava Epitteto, e diventerà un filosofo.\n\nScrive: «Nessuno può farti del male senza il tuo consenso.»\n\nAveva ragione?',
       parlato:'Racconta l\'episodio senza commentarlo — è riportato da Celso e da Origene, e la classe lo riceve come un pugno.\n\nPoi la frase, e la domanda. Non «vi piace», ma «aveva ragione». La differenza conta: si sta chiedendo se una proposizione sia vera, non se sia consolante.\n\nLa reazione tipica è indignazione: è facile dirlo, è una scusa per non ribellarsi, l\'hanno azzoppato e tu mi dici che non gli hanno fatto del male? Lascia che esca tutta, e non difendere Epitteto adesso.\n\nUltima cosa da dire in questo tempo, e serve a tenere aperta la partita: quest\'uomo era uno schiavo vero, non un signore che teorizza la povertà. Quando dice che nessuno può farti del male, non sta parlando di qualcun altro.',
       seDicono:[
         {loro:'«Gli hanno rotto una gamba: quello è un male, punto.»',
          tu:'È un danno al corpo, e nessuno lo nega. Epitteto direbbe: hanno rotto la gamba, non hanno rotto te. La domanda è se fra le due cose ci sia una differenza reale o se sia un gioco di parole — e su questo lavoreremo un\'ora.'},
         {loro:'«È rassegnazione: così i padroni vincono sempre.»',
          tu:'Obiezione seria, e Marx la farà. Ma tienila insieme a un fatto: sotto Nerone e Domiziano gli unici che rifiutarono di obbedire, e ci lasciarono la vita, erano stoici. Se è rassegnazione, produce degli strani rassegnati.'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'«Nessuno può farti del male senza il tuo consenso.»',
       opzioni:['È vero', 'È una consolazione per chi non può reagire'],
       parlato:'Conta e scrivi i numeri. Il secondo gruppo di solito è largamente maggioritario.\n\nAllora dai lo strumento con cui lavoreranno per il resto dell\'ora, e falla scrivere: la dicotomia del controllo. Ci sono cose che dipendono da noi — il giudizio, il desiderio, l\'impulso, cioè quello che accade dentro — e cose che non dipendono da noi: il corpo, la reputazione, i beni, la morte.\n\nPoi fai l\'esercizio: prendi tre situazioni concrete che li riguardano — un\'interrogazione andata male, un tradimento di un amico, una malattia in famiglia — e per ciascuna fai separare le due colonne. Riesce sempre, e riesce bene.\n\nA questo punto arriva la parte dura, e va detta chiaramente: gli stoici non dicono «sopporta bene ciò che non dipende da te». Dicono che non è un male. È una tesi molto più forte, ed è quella da giudicare.',
       seDicono:[
         {loro:'«La salute non dipende da me ma è chiaramente un bene.»',
          tu:'Gli stoici hanno una risposta, ed è la loro parte più contestata: la chiamano un indifferente preferibile. Non è un bene, ma va scelta. Gli avversari rispondono che è un modo elegante per dire «bene» senza dirlo. Chi ha ragione, secondo te?'},
         {loro:'«Allora chi mi picchia non mi fa niente? Assurdo.»',
          tu:'Ti fa qualcosa al corpo. La domanda è se possa raggiungere ciò che decidi, che pensi, che vuoi. Epitteto sostiene di no — e la sua gamba è la prova che non parla per sentito dire.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Provate a spezzare la tesi con i casi peggiori.\n\nSe perdi tutto quello che hai?\nSe ti calunniano e nessuno ti crede?\nSe muore una persona che ami?\nSe ti condannano a morte da innocente?\n\nOgni volta, la stessa risposta:\nquesto non dipende da te.\nDipende da te che cosa ne pensi e che cosa ne fai.\n\nE ogni volta la stessa domanda per voi:\n\nvi sembra falsa —\no vi sembra vera e insopportabile?',
       parlato:'Fai i quattro casi uno per volta, dando ogni volta la risposta stoica e chiedendo se regge. È un esercizio, non una predica: devono provare a rompere una tesi e vedere che non si rompe facilmente.\n\nSul lutto, che è il caso più difficile, non ammorbidire: gli stoici dicono che il dolore per la morte di chi amiamo nasce da un giudizio — «mi è stato tolto qualcosa di mio» — e che nulla era mio. Epitteto dice di non dire mai «l\'ho perduto», ma «l\'ho restituito».\n\nQuasi sempre, a questo punto, l\'aula si divide fra chi trova la cosa disumana e chi comincia a vederci qualcosa. È il momento migliore dell\'ora e va lasciato respirare.\n\nSe qualcuno accusa gli stoici di essere insensibili, correggi con precisione: apátheia non significa non sentire niente. Significa non avere passioni, che per loro sono giudizi sbagliati. Il saggio prova gioia, cautela, volontà — le chiamano eupatìe.',
       seDicono:[
         {loro:'«"L\'ho restituito" è mostruoso: era mia madre.»',
          tu:'È la reazione giusta, e non provo a toglierla. Chiediti però che cosa esattamente ti indigna: che sia falso, o che sia vero e chieda troppo? Sono due obiezioni diverse, e la seconda non confuta la tesi — dice che il prezzo è alto.'},
         {loro:'«Se niente è un male, non c\'è più ragione di cambiare il mondo.»',
          tu:'Non segue: ciò che non dipende da te resta qualcosa su cui agire, e il dovere del ruolo — il kathékon — te lo impone. Cambia il motivo, non l\'azione: non agisci perché ti fa soffrire, agisci perché è la cosa da fare.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'«Delle cose, alcune dipendono da noi, altre no.\n\nDipendono da noi il giudizio, l\'impulso, il desiderio, il rifiuto:\nin una parola, tutto ciò che è opera nostra.\n\nNon dipendono da noi il corpo, gli averi,\nla reputazione, le cariche:\nin una parola, tutto ciò che non è opera nostra.»\n\n«Non sono le cose a turbare gli uomini,\nma le opinioni che essi hanno delle cose.»',
       testo:{fonte:'Epitteto, Manuale 1 e 5 (I-II secolo d.C.)',
              glossa:'Il Manuale non lo ha scritto Epitteto: sono appunti presi da un allievo, Arriano, che precisa di aver messo per iscritto le parole del maestro «come mi riusciva». Un ex schiavo che non scrive nulla e il cui pensiero ci arriva perché qualcuno lo trascriveva: la somiglianza con Socrate non è casuale.'},
       parlato:'Leggi il primo passo e fai notare la struttura: non è un consiglio, è un inventario. Due colonne, e tutto ciò che esiste va in una delle due.\n\nPoi il secondo passo, e fermati sulla parola «opinioni». Non dice che le cose non accadono: dice che fra la cosa e il turbamento c\'è sempre un giudizio, e che il giudizio è nostro. Togli il giudizio e resta l\'evento, che è muto.\n\nA questo punto puoi dare il collegamento che di solito li sorprende più di tutto il resto: questa frase sta nella prima pagina dei manuali di terapia cognitiva. Albert Ellis e Aaron Beck, negli anni Cinquanta e Sessanta, la citano come premessa del metodo. Milioni di persone oggi sono curate con una tecnica che comincia dove comincia questo schiavo zoppo.',
       seDicono:[
         {loro:'«Allora basta pensarla diversamente e si sta bene? Non funziona così.»',
          tu:'Infatti Epitteto non dice «pensala diversamente». Dice di allenarsi ogni giorno su cose piccole — un piatto rotto, un ritardo — per essere capaci quando arriva quella grande. È la stessa cosa che diceva Epicuro con «abìtuati»: sono terapie, non dimostrazioni.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Questa dottrina è stata scritta da tre uomini.\n\nUno era uno schiavo, azzoppato dal padrone.\n\nUno era l\'uomo più ricco di Roma,\nprecettore di Nerone, che gli ordinò di uccidersi.\n\nUno era l\'imperatore del mondo,\ne la scriveva di notte, per sé, sotto una tenda,\nmentre combatteva sul Danubio.\n\nDal fondo e dalla cima della stessa società,\nesattamente le stesse parole.',
       parlato:'Dai i tre ritratti e lascia il tempo di far pesare la simmetria. Poi la domanda: che cosa dimostra?\n\nRaccogli le loro risposte, e poi metti sul tavolo il caso scomodo, che è Seneca. Ha scritto pagine bellissime sul disprezzo della ricchezza mentre possedeva una fortuna immensa; è stato accusato di prestare denaro a interesse in Britannia; è stato precettore di Nerone e non lo ha fermato. Quando Nerone gli ordinò di uccidersi, si aprì le vene con calma e continuò a dettare ai segretari.\n\nChiedi: la sua vita confuta la sua filosofia? È la domanda con cui si impara a distinguere l\'argomento dall\'autore — e vale per tutto l\'anno.\n\nSe hai tempo, il dettaglio su Marco Aurelio: i suoi appunti non erano destinati a nessuno. Il titolo che leggiamo, «A sé stesso», è quello vero. L\'uomo più potente della terra scriveva ogni notte per convincere sé stesso di cose che sapeva già.',
       seDicono:[
         {loro:'«Seneca era un ipocrita, quindi il suo stoicismo non vale.»',
          tu:'Attenzione alla mossa: stai valutando una tesi guardando chi la dice. Se funziona qui, funziona sempre — e allora non potrai più credere a nulla detto da qualcuno che non sia perfetto. Il che vuol dire a nulla.'},
         {loro:'«L\'imperatore poteva permetterselo, lo schiavo no.»',
          tu:'Rovescia la frase e vedi se regge ancora: lo schiavo non aveva niente da perdere, l\'imperatore tutto. Chiunque dei due sceglierebbe di più quella dottrina? Il fatto che l\'abbiano scelta entrambi è precisamente ciò che non si spiega con la convenienza.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Torniamo alla gamba.\n\nGliel\'hanno spezzata. Questo è un fatto.\n\nEpitteto sostiene che non gli hanno tolto niente\ndi ciò che era davvero suo.\n\nUltima domanda dell\'ora, e non riguarda lui:\n\nc\'è qualcosa che vi hanno tolto\ne che state ancora chiamando un danno?\n\nE se sì —\nera vostro?',
       parlato:'Non chiedere risposte a voce: è una domanda che si porta a casa.\n\nPrima di chiudere, due cose vanno dette perché l\'ora non diventi un santino.\n\nLa prima: la dottrina ha un prezzo, e i suoi avversari lo indicano da duemila anni. Se nulla di esterno è un bene, perché la salute andrebbe preferita alla malattia? Gli stoici hanno una risposta — gli indifferenti preferibili — e nessuno l\'ha mai trovata del tutto convincente. Non state guardando una teoria perfetta.\n\nLa seconda: quello che avete visto oggi non è una consolazione ma un allenamento. Epitteto fa esercitare i suoi allievi su un piatto rotto, non sul lutto. Comincia dalle cose piccole proprio perché quelle grandi arrivano senza preavviso.\n\nChiudi qui, e annuncia la prossima: un uomo che partirà dalla stessa domanda — che cosa è davvero mio — e darà una risposta opposta, cercandolo dentro invece che intorno. Si chiama Plotino.',
       seDicono:[
         {loro:'«Ma è possibile vivere davvero così?»',
          tu:'Loro dicevano di no: il saggio perfetto è raro come la fenice, e forse non è mai esistito. Serve come direzione, non come traguardo. Ed è più onesto di quanto sembri — nessuno di loro ha mai sostenuto di esserci arrivato.'}
       ]}
    ],
    riserve:[
      {titolo:'Il cilindro di Crisippo',
       corpo:'Se tutto accade per destino, come si può essere responsabili? Crisippo risponde con un\'immagine.\n\nPrendi un cilindro e spingilo lungo un piano inclinato. La spinta viene da fuori, e senza quella non si muoverebbe. Ma rotola perché è fatto in un certo modo: un cubo, con la stessa spinta, resterebbe fermo.\n\nCosì le impressioni ci arrivano da fuori e non le scegliamo. Ma come reagiamo dipende dalla forma che abbiamo — e quella forma siamo noi.',
       chiedi:'Vi convince come soluzione? Provate a obiettare così: anche la forma del cilindro è stata determinata da cause precedenti, che non ha scelto. Che cosa resta della responsabilità? E come rispondereste, se doveste difendere Crisippo?'},
      {titolo:'Il piatto rotto',
       corpo:'Epitteto non fa esercitare gli allievi sulle disgrazie: comincia dalle cose minime.\n\n«Se ami una tazza, di\' che ami una tazza: così se si rompe non ti turberai.»\n\n«Comincia da piccole cose. Ti si è versato dell\'olio, ti hanno rubato un po\' di vino: di\' a te stesso che questo è il prezzo dell\'imperturbabilità, e nulla si ottiene gratis.»\n\nE quando chiami qualcuno e non risponde subito, dice, esercitati a restare tranquillo: perché è lì che si costruisce ciò che ti servirà quando la cosa sarà grande.',
       chiedi:'Perché cominciare dalle sciocchezze? E siete d\'accordo che la calma davanti a un lutto si costruisca sulla calma davanti a un bicchiere rotto — o sono due cose che non c\'entrano niente l\'una con l\'altra?'},
      {titolo:'L\'imperatore che scriveva per sé',
       corpo:'I Pensieri di Marco Aurelio non erano destinati alla pubblicazione. Il titolo greco è «Tà eis heautón»: a sé stesso. Sono appunti notturni scritti durante le campagne militari sul Danubio, e cominciano con un lungo elenco di persone a cui deve qualcosa.\n\n«Fra poco avrai dimenticato tutto, e fra poco tutti avranno dimenticato te.»\n\n«Non disprezzare la morte, ma accoglila di buon animo, perché anch\'essa è una di quelle cose che la natura vuole.»\n\n«All\'alba, quando ti riesce difficile svegliarti, tieni pronto questo pensiero: mi sveglio per fare l\'opera di un uomo.»',
       chiedi:'L\'uomo più potente del mondo passava le notti a ripetere a sé stesso cose che sapeva già. Perché? E che cosa dice, del rapporto fra sapere una cosa e riuscire a viverla?'}
    ],
    testi:[
      {fonte:'Epitteto, Manuale 8 e 11',
       corpo:'«Non pretendere che le cose accadano come vuoi tu, ma vogli che accadano come accadono: e la tua vita scorrerà serena.»\n\n«Non dire mai di nulla: l\'ho perduto. Ma: l\'ho restituito. È morto tuo figlio? È stato restituito. Ti è stata tolta la terra? Anche questa è stata restituita.»',
       glossa:'Il secondo passo è il più duro dello stoicismo e va letto senza attenuarlo: la classe deve poterlo rifiutare consapevolmente. Il presupposto è che nulla sia nostro in proprietà — siamo usufruttuari di tutto, compresi gli affetti. Se si accetta la premessa, la conclusione segue; ed è la premessa che va discussa.'},
      {fonte:'Seneca, Epistole a Lucilio 47',
       corpo:'«Sono schiavi. No: sono uomini. Sono schiavi. No: compagni di stanza. Sono schiavi. No: umili amici. Sono schiavi. No: conservi, se pensi che alla sorte sia lecito lo stesso su di noi e su di loro.»',
       glossa:'È la pagina più avanzata dell\'antichità sul tema, e insieme la misura del suo limite: Seneca chiede di trattare umanamente gli schiavi, non di liberarli. Vale la pena tenerla accanto al capitolo su Aristotele — in quattro secoli qualcosa si è mosso, ma la premessa non è ancora saltata.'},
      {fonte:'Cleante, Inno a Zeus (frammento), nella versione di Seneca',
       corpo:'«Conducimi, o Zeus, e tu, Destino, dovunque siate destinato che io vada: vi seguirò senza esitare. E se non volessi, malvagio, dovrei seguirvi lo stesso.»\n\nSeneca lo traduce e aggiunge: «Ducunt volentem fata, nolentem trahunt» — i fati conducono chi acconsente, trascinano chi resiste.',
       glossa:'È il cane legato al carro, detto in due versi. Il punto da far notare: la scelta non riguarda la destinazione, che è fissata comunque, ma il modo di arrivarci. Ed è tutto ciò che gli stoici chiamano libertà.'}
    ],
    compito:'Mezza pagina. Prendete una cosa che vi ha fatto arrabbiare o soffrire negli ultimi giorni e dividetela in due colonne: che cosa, lì dentro, dipendeva da voi e che cosa no. Poi la domanda vera: se togliete dalla colonna del dolore tutto ciò che non dipendeva da voi, che cosa resta? Scrivete anche se non resta niente, o se resta tutto.',
    fonti:[
      'Epitteto, Manuale 1, 5, 8, 11, 43; Diatribe I 1, I 29, II 5',
      'Marco Aurelio, Pensieri II 1, IV 3, V 1, VII 59, XII 36',
      'Seneca, Epistole a Lucilio 1, 47, 70, 107; De providentia; De brevitate vitae',
      'Diogene Laerzio, Vite VII 1-160 — la dottrina della Stoà antica',
      'Cicerone, De fato 39-45 (il cilindro di Crisippo); De finibus III (l\'etica stoica)',
      'A.A. Long e D.N. Sedley, I filosofi ellenistici',
      'A. Ellis, Ragione ed emozione in psicoterapia (1962); A.T. Beck, Cognitive Therapy (1976) — le citazioni di Epitteto'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia antica · 11 — Il neoplatonismo e Plotino': {
  mappa: {
    n:'Il neoplatonismo', d:'III secolo d.C.: l\'ultima grande filosofia pagana',
    f:[
      {r:'nasce in', n:'Un mondo che si sfalda', d:'l\'impero in crisi e le anime in cerca di salvezza',
       f:[
         {r:'è il secolo', n:'Dell\'anarchia militare', d:'cinquant\'anni, una ventina di imperatori, quasi tutti assassinati'},
         {r:'si diffondono', n:'I culti orientali', d:'Iside, Mitra, Cibele: promettono salvezza personale, non protezione civica'},
         {r:'circola', n:'Lo gnosticismo', d:'il mondo è opera di un dio cattivo, e la salvezza è fuggirlo'},
         {r:'cresce', n:'Il cristianesimo', d:'ancora perseguitato, già presente ovunque'},
         {r:'e la filosofia', n:'Diventa via di salvezza', d:'non più come si vive bene: come si torna a casa'}
       ]},

      {r:'ha come maestro', n:'Plotino', d:'Licopoli 205 – Campania 270 d.C.',
       f:[
         {r:'studia ad', n:'Alessandria', d:'undici anni con Ammonio Sacca, che non scriveva nulla',
          f:[{piu:true, r:'insieme a', n:'Origene e Erennio', d:'con un patto: non divulgare la dottrina del maestro'}]},
         {r:'segue', n:'La spedizione di Gordiano III', d:'per conoscere la sapienza persiana e indiana: la campagna finisce male e fugge'},
         {r:'insegna a', n:'Roma dal 244', d:'ha fra gli allievi senatori, medici, donne',
          f:[{piu:true, r:'e progetta', n:'Platonopolis', d:'una città governata secondo le Leggi di Platone: l\'imperatore dice di sì e poi si tira indietro'}]},
         {r:'scrive', n:'Le Enneadi', d:'cinquantaquattro trattati raccolti dall\'allievo Porfirio',
          f:[{r:'ordinati in', n:'Sei gruppi di nove', d:'ennea vuol dire nove: l\'ordine è di Porfirio, non l\'ordine di composizione'},
             {piu:true, r:'e scriveva', n:'Senza rileggere', d:'aveva la vista debole e non tornava mai sul testo'}]},
         {r:'di lui si racconta', n:'Che si vergognasse di avere un corpo', d:'e rifiutò di farsi ritrarre: sarebbe l\'immagine di un\'immagine'}
       ]},

      {r:'pone al vertice', n:'L\'Uno', d:'il principio di tutto, e non è una cosa',
       f:[
         {r:'è', n:'Al di là dell\'essere', d:'epékeina tês ousías: non è un ente, nemmeno il primo'},
         {r:'è', n:'Al di là del pensiero', d:'pensare è già due: chi pensa e ciò che è pensato'},
         {r:'quindi', n:'Non pensa e non vuole', d:'non ha progetti, non sceglie, non conosce le cose'},
         {r:'se ne può dire', n:'Solo che cosa non è', d:'teologia negativa: ogni predicato lo limiterebbe',
          f:[{r:'e anche', n:'«Uno» è un nome improprio', d:'lo diciamo per togliere il molteplice, non per descriverlo'},
             {piu:true, r:'da qui', n:'La via apofatica', d:'che passerà allo Pseudo-Dionigi e a tutta la mistica cristiana'}]},
         {r:'ma è', n:'Causa di tutto', d:'«tutte le cose e nessuna di esse»'}
       ]},

      {r:'spiega il molteplice con', n:'L\'emanazione', d:'proodos: non creazione, non fabbricazione',
       f:[
         {r:'immagine', n:'La sorgente', d:'che alimenta i fiumi senza esaurirsi'},
         {r:'immagine', n:'Il sole e la luce', d:'irradia perché è ciò che è, non perché lo decide'},
         {r:'quindi', n:'L\'Uno non diminuisce', d:'dà senza perdere: non c\'è sacrificio nel produrre'},
         {r:'quindi', n:'Non c\'è volontà', d:'niente creazione dal nulla, niente scelta, niente inizio nel tempo',
          f:[{piu:true, r:'ed è la differenza con', n:'La Genesi', d:'dove Dio decide, e prima non c\'era niente'}]},
         {r:'ogni grado è', n:'Meno perfetto del precedente', d:'più ci si allontana dalla fonte, più cresce la molteplicità'},
         {r:'e ogni grado', n:'Si volge indietro', d:'epistrophé: la conversione verso ciò da cui proviene'}
       ]},

      {r:'produce', n:'Tre ipostasi', d:'i tre gradi della realtà, sotto l\'Uno',
       f:[
         {r:'la prima', n:'Nous', d:'l\'Intelletto: pensa, e pensando è già due',
          f:[{r:'in esso stanno', n:'Le Idee di Platone', d:'ma non fuori: sono i pensieri dell\'Intelletto'},
             {r:'ed è', n:'L\'eternità', d:'tutto insieme, senza prima né poi'},
             {piu:true, r:'coincide', n:'Pensiero e pensato', d:'e Aristotele viene inglobato dentro Platone'}]},
         {r:'la seconda', n:'Anima', d:'guarda in alto verso il Nous, in basso verso il corpo',
          f:[{r:'genera', n:'Il tempo', d:'«immagine mobile dell\'eternità»: nasce quando l\'Anima si distende'},
             {r:'si articola in', n:'Anima del mondo', d:'che ordina il cosmo, e anime individuali'},
             {piu:true, r:'e le anime', n:'Non si staccano mai del tutto', d:'una parte di noi resta sempre nell\'intelligibile'}]},
         {r:'la terza è il limite', n:'Il mondo sensibile', d:'l\'ultima eco: bello, ma copia di copia'}
       ]},

      {r:'in fondo c\'è', n:'La materia', d:'e con essa il problema del male',
       f:[
         {r:'è', n:'L\'ultimo grado', d:'dove la luce si spegne: puro ricevere, senza forma'},
         {r:'quindi è', n:'Non essere come mancanza', d:'non il nulla assoluto: privazione, assenza di bene'},
         {r:'e il male è', n:'Privazione', d:'non una forza: un buco, come il buio è assenza di luce',
          f:[{piu:true, r:'lo riprenderà', n:'Agostino', d:'privatio boni: e ci risolverà il proprio tormento'}]},
         {r:'ma contro gli gnostici', n:'Il mondo non è cattivo', d:'è la più bella delle cose generate',
          f:[{r:'perché', n:'Disprezzarlo è disprezzare la fonte', d:'chi insulta la copia insulta il modello'},
             {piu:true, r:'nel trattato', n:'Contro gli gnostici', d:'Enneadi II 9: il testo più polemico che abbia scritto'}]}
       ]},

      {r:'indica la via del', n:'Ritorno', d:'la filosofia come cammino verso l\'origine',
       f:[
         {r:'primo passo', n:'Virtù politiche', d:'mettere ordine nelle passioni'},
         {r:'secondo', n:'Virtù purificatrici', d:'staccarsi dal corpo, non ucciderlo'},
         {r:'terzo', n:'Contemplazione del Nous', d:'pensare le Idee: si è già dentro l\'eternità'},
         {r:'ultimo', n:'Estasi', d:'uscire da sé: e lì non c\'è più chi guarda e ciò che è guardato',
          f:[{r:'descritta come', n:'Fuga del solo verso il Solo', d:'l\'ultima riga delle Enneadi'},
             {r:'accaduta', n:'Quattro volte in sei anni', d:'lo scrive Porfirio, che dice di esserci arrivato una volta a sessantotto anni'},
             {piu:true, r:'e non è', n:'Un premio dopo la morte', d:'accade qui, da vivi, e poi si torna indietro'}]},
         {r:'e vale il principio', n:'Il simile conosce il simile', d:'per vedere il Bene bisogna essere diventati buoni'}
       ]},

      {r:'lascia', n:'Che cosa resta', d:'la filosofia che ha dato le parole a tre religioni',
       f:[
         {r:'lo ordina', n:'Porfirio', d:'e scrive l\'Isagoge, letta per mille anni come prima pagina di logica',
          f:[{piu:true, r:'da cui', n:'La questione degli universali', d:'la domanda che aprirà tutta la Scolastica'}]},
         {r:'lo ritualizza', n:'Giamblico', d:'aggiunge la teurgia: non basta pensare, servono riti'},
         {r:'lo sistema', n:'Proclo', d:'l\'ultima grande costruzione, per triadi'},
         {r:'finisce nel', n:'529', d:'Giustiniano chiude la scuola di Atene: mille anni dopo Platone'},
         {r:'passa a', n:'Agostino e allo Pseudo-Dionigi', d:'e da lì a tutto il pensiero cristiano'},
         {r:'e rinasce con', n:'Ficino', d:'che nel Quattrocento traduce Plotino per i Medici',
          f:[{piu:true, r:'e con', n:'Hegel', d:'che ci vede il primo pensiero dell\'assoluto come processo'}]}
       ]}
    ],
    incroci:[
      {da:'Al di là del pensiero', a:'Nous', r:'obbliga a porre sotto di sé',
       perche:'Se pensare implica una distinzione fra chi pensa e ciò che è pensato, il principio assolutamente semplice non può pensare. Serve allora un secondo grado in cui il pensiero compaia — ed è l\'Intelletto, che è già due.'},
      {da:'Non c\'è volontà', a:'Il mondo non è cattivo', r:'garantisce che',
       perche:'Se l\'Uno non sceglie, il mondo non è il risultato di una decisione che potesse andare diversamente: è ciò che accade necessariamente quando la fonte trabocca. Nessuno lo ha voluto male, e nessuno poteva farlo meglio.'},
      {da:'La sorgente', a:'L\'Uno non diminuisce', r:'serve a dire che',
       perche:'Ogni immagine di produzione umana implica una perdita: chi dà, ha meno. La sorgente e la luce sono scelte proprio perché non funzionano così — e senza questa proprietà il primo principio si consumerebbe generando.'},
      {da:'Le Idee di Platone', a:'Contemplazione del Nous', r:'sono ciò che si guarda nella',
       perche:'Platone aveva lasciato le Idee in un altrove che non riusciva a collegare alle cose. Plotino le mette dentro il pensiero dell\'Intelletto: non un luogo ma un\'attività — e per questo contemplarle non è guardare altrove, è entrare in ciò che si è.'},
      {da:'Il tempo', a:'Anima', r:'nasce dalla distensione di',
       perche:'Il tempo non è un contenitore: è ciò che accade quando l\'Anima, non potendo avere tutto insieme come il Nous, dispiega la propria vita in un prima e un poi. Sarà la definizione che Agostino porterà nelle Confessioni.'},
      {da:'Privazione', a:'Lo gnosticismo', r:'toglie il fondamento a',
       perche:'Se il male non è una cosa ma la mancanza di una cosa, non serve un principio cattivo accanto a quello buono: il dualismo gnostico perde la sua ragione d\'essere. È l\'arma con cui, due secoli dopo, Agostino uscirà dal manicheismo.'},
      {da:'Estasi', a:'Al di là dell\'essere', r:'è l\'unico accesso a',
       perche:'Ciò che sta oltre l\'essere non si raggiunge pensandolo, perché pensare lo farebbe diventare oggetto. Resta un\'esperienza in cui cade la distinzione fra chi guarda e ciò che è guardato — e per definizione non si può raccontare.'},
      {da:'Il simile conosce il simile', a:'Virtù purificatrici', r:'rende necessarie',
       perche:'Non è una gara morale: se si vede solo ciò a cui si somiglia, allora diventare buoni non è la condizione per meritare la visione — è la condizione per averne gli occhi. L\'etica diventa ottica.'},
      {da:'Diventa via di salvezza', a:'Un mondo che si sfalda', r:'è la risposta filosofica a',
       perche:'Quando la città non protegge più e gli imperatori durano pochi mesi, la domanda su come governare bene perde senso e resta quella su come salvarsi. Le religioni orientali e il neoplatonismo rispondono alla stessa domanda in modi diversi.'},
      {da:'Solo che cosa non è', a:'Agostino e allo Pseudo-Dionigi', r:'arriva al cristianesimo attraverso',
       perche:'La teologia negativa nasce pagana e diventa il linguaggio con cui i cristiani parleranno di Dio per mille anni: si dice ciò che Dio non è, perché ogni predicato positivo lo ridurrebbe alla misura di chi lo pronuncia.'},
      {da:'Porfirio', a:'529', r:'ha reso possibile ciò che sopravvive al',
       perche:'La scuola chiude, ma l\'Isagoge di Porfirio resta nei programmi come prima pagina di logica per mille anni. Il neoplatonismo entra nel Medioevo cristiano travestito da manuale elementare.'},
      {da:'Si volge indietro', a:'Ritorno', r:'è la stessa struttura in',
       perche:'Processione e conversione non sono due movimenti diversi: ogni grado esce dal precedente e subito si rivolge verso di esso per costituirsi. Il cammino del filosofo non è un\'eccezione — è ciò che tutta la realtà sta già facendo.'}
    ]
  },
  provocazione: {
    titolo:'Quante cose siete?',
    durata:'55 minuti',
    domandaMadre:'Che cosa vi tiene insieme — e da dove viene?',
    perche:'La classe si trova a non saper dire perché è una cosa sola e non un mucchio di parti, e ci arriva con dati concreti invece che con un\'astrazione. Da lì il passaggio decisivo di Plotino — l\'unità viene prima dell\'essere, perché ciò che non è uno non è niente — diventa una necessità e non una tesi mistica. Il colpo di scena mostra il prezzo: per spiegare l\'unità Plotino deve mettere in cima qualcosa che non pensa, non vuole e non ci conosce, e che produce il mondo senza sceglierlo. L\'ora si chiude su una domanda che riguarda loro e che prepara Agostino: c\'è qualcosa in voi che non sia fatto di parti?',
    occorrente:'Niente. Se l\'aula ha un oggetto composto a portata di mano — una sedia, uno zaino — torna utile smontarlo con le parole.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Siete fatti di circa trentasette mila miliardi di cellule.\nNessuna di loro siete voi.\n\nQuasi tutte verranno sostituite:\nfra dieci anni il materiale sarà quasi tutto nuovo.\n\nI vostri pensieri sono molti, e spesso in disaccordo.\nVoi a cinque anni e voi adesso\nnon avete quasi nulla in comune.\n\nEppure dite «io», e intendete una cosa sola.\n\nChe cosa vi tiene insieme?',
       parlato:'Dai i dati uno per volta, lasciando qualche secondo. Non sono un ornamento: servono perché la domanda arrivi come un problema di fatto e non come un gioco filosofico.\n\nPoi la domanda, e pretendi risposte concrete. Escono quasi sempre tre candidati: il corpo, la memoria, il cervello. Prendine nota: verranno smontati tutti e tre nel prossimo tempo, e conviene che siano stati proposti da loro.\n\nSe la classe è svelta, aggiungi subito la mossa che rende la cosa urgente: non state cercando una curiosità. Se non siete uno, non siete niente — perché un esercito che non è un esercito non è un mucchio di eserciti: è solo un certo numero di uomini.',
       seDicono:[
         {loro:'«Mi tiene insieme il corpo.»',
          tu:'Il corpo è la cosa che cambia di più: materialmente non è lo stesso di dieci anni fa. E poi il corpo è a sua volta molte parti — quindi hai spostato la domanda, non l\'hai risolta. Che cosa tiene insieme il corpo?'},
         {loro:'«La memoria: sono io perché ricordo di esserlo stato.»',
          tu:'È la risposta di Locke, e la incontrerai in quarta. Ma prova a spingerla: ricordi quasi nulla dei tuoi primi tre anni. Quel bambino non eri tu? E chi ha un\'amnesia smette di essere sé stesso?'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'Voi siete:',
       opzioni:['una cosa sola, davvero', 'molte cose che chiamiamo una per comodità'],
       parlato:'Conta e scrivi i numeri. Il secondo gruppo di solito è forte, perché è la risposta che suona scientifica.\n\nAllora attacca proprio quella, con l\'argomento di Plotino applicato a un caso qualunque. Prendi la sedia su cui sono seduti: se le togli l\'unità, che cosa resta? Non tante sedie: pezzi di legno. E se togli l\'unità ai pezzi di legno? Fibre. E poi molecole, atomi. A ogni passo devi trovare qualcosa che sia uno, o non hai più niente di cui parlare.\n\nPoi la formula, e falla scrivere: nulla è qualcosa se non è uno. L\'unità non è una proprietà che le cose hanno in più — è la condizione perché ci sia una cosa.\n\nA questo punto il gruppo del «molte cose per comodità» ha un problema serio: se l\'unità è solo un modo di dire, allora anche «molte cose» lo è, perché ciascuna di quelle cose dovrebbe essere una.',
       seDicono:[
         {loro:'«L\'unità la mettiamo noi guardando: è una comodità del linguaggio.»',
          tu:'Allora chi la mette? Tu. E tu sei uno? Se lo sei, l\'unità esiste almeno in un caso. Se non lo sei, chi è che sta mettendo insieme le cose? La tua obiezione ha bisogno di un\'unità per essere formulata.'},
         {loro:'«È il cervello che unifica tutto.»',
          tu:'Il cervello è ottantasei miliardi di neuroni, nessuno dei quali unifica niente da solo. Stai spiegando l\'unità con qualcosa che è a sua volta moltissimo. È esattamente il passaggio che Plotino dice essere impossibile.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Se ci pensate, è sempre così.\n\nUn esercito che non è un esercito non è niente:\nsono uomini.\nUna casa che non è una casa non è niente:\nsono mattoni.\nUn coro che non è un coro non è niente:\nsono voci.\n\nTogli l\'unità e non resta il molteplice:\nnon resta nulla di cui parlare.\n\nQuindi l\'unità viene prima dell\'essere.\n\nE allora l\'ultima domanda:\nchi ve la dà?',
       parlato:'Fai fare l\'esercizio a loro con tre esempi scelti da loro, non da te: funziona meglio se lo scoprono su casi propri.\n\nPoi il passaggio che è il cuore dell\'ora e va detto lentamente: l\'unità non può venire dalle parti, perché le parti sono molte. Non può venire da un\'altra cosa composta, perché avrebbe lo stesso problema. Quindi, o si va all\'infinito, o in cima c\'è qualcosa che è uno e basta — non uno più qualcos\'altro: solo uno.\n\nÈ la stessa struttura del motore immobile di Aristotele, ma spostata: lì serviva un principio del movimento, qui un principio dell\'unità.\n\nSe qualcuno chiede perché non fermarsi a Dio come lo immaginano di solito, tienilo per il tempo dopo: è esattamente lì che Plotino dice qualcosa di sconcertante.',
       seDicono:[
         {loro:'«Non si potrebbe andare all\'infinito?»',
          tu:'Puoi provarci, ma guarda che cosa ottieni: una catena infinita di cose che ricevono unità da altre, e nessuna che la abbia. È come una fila infinita di persone che si passano un libro che nessuno possiede. Da dove viene il libro?'},
         {loro:'«Forse l\'unità è solo un modo in cui funziona la nostra mente.»',
          tu:'Kant dirà qualcosa di simile, e sarà una rivoluzione. Ma nota il costo: dovresti dire che nel mondo, senza di te che guardi, non c\'è nessuna cosa singola. Nemmeno una. Sei disposto a dirlo?'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'«Tutti gli enti sono enti in virtù dell\'Uno:\nsia quelli che sono enti in senso primo,\nsia quelli che in qualche modo si dicono enti.\n\nChe cosa sarebbe infatti,\nse non fosse uno?\n\nPrivati dell\'uno che si dice di loro, non sono più quelli.\n\nNé un esercito esiste, se non è uno;\nné un coro, né un gregge, se non sono uno.\n\nNé una casa, né una nave hanno l\'essere\nse non hanno l\'uno.»',
       testo:{fonte:'Plotino, Enneadi VI 9, 1 (III secolo d.C.)',
              glossa:'Nota il movimento: parte da cose comunissime — un esercito, un gregge, una casa — e non da concetti astratti. Plotino non sta annunciando una dottrina: sta mostrando che chiunque parli di qualsiasi cosa ha già usato l\'unità senza accorgersene. È la stessa mossa con cui Aristotele difendeva il principio di non contraddizione.'},
       parlato:'Leggi il passo intero: è breve e la sua forza sta nell\'accumulo degli esempi.\n\nPoi introduci la conseguenza che li spiazza. Se l\'Uno dà l\'essere a tutto, non può essere a sua volta un ente — sarebbe uno degli oggetti che deve fondare. Quindi sta al di là dell\'essere.\n\nE c\'è di peggio, o di meglio: non può nemmeno pensare. Perché pensare vuol dire distinguere chi pensa da ciò che è pensato, e sarebbe già due. Il principio primo, dice Plotino, non pensa, non vuole, non sceglie, non ci conosce.\n\nDi lui si può dire solo che cosa non è. Anche il nome «Uno» è improprio: serve a togliere il molteplice, non a descriverlo.',
       seDicono:[
         {loro:'«Un principio che non pensa e non vuole non è Dio: è una cosa.»',
          tu:'Non è nemmeno una cosa, perché le cose sono enti. È il punto in cui il linguaggio si rompe, e Plotino lo sa: dice che di lui parliamo sempre impropriamente. Quando fra qualche secolo i cristiani useranno questa filosofia, dovranno rimettergli la volontà — ed è un cambiamento enorme.'},
         {loro:'«Se non ci conosce, a che serve?»',
          tu:'Non serve: non è lì per servire. Ed è la differenza fra un principio metafisico e un dio religioso. Tienila stretta, perché la prossima volta incontrerai qualcuno che ha bisogno che Dio lo conosca per nome.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Se l\'Uno non sceglie, come nasce tutto il resto?\n\nNon lo crea. Non lo fabbrica. Non lo decide.\n\nTrabocca.\n\nCome la sorgente alimenta i fiumi senza svuotarsi,\ncome il sole illumina senza consumarsi\ne senza aver deciso di farlo.\n\nQuindi: nessun creatore, nessun progetto,\nnessun inizio nel tempo, nessuna alternativa.\n\nIl mondo non poteva non esserci —\ne nessuno lo ha voluto.',
       parlato:'Dai l\'emanazione con le due immagini e poi elenca le conseguenze, una per riga, senza attenuarle. È il momento in cui gli studenti capiscono di essere davanti a qualcosa che non è la religione che conoscono, pur usandone tutte le parole.\n\nPoi il confronto esplicito, che serve moltissimo per il resto dell\'anno: nella Genesi Dio decide, e prima non c\'era niente. Qui non c\'è decisione e non c\'è un prima. Eppure fra due secoli i cristiani leggeranno Plotino e ne prenderanno quasi tutto il vocabolario.\n\nInfine i due dettagli biografici, che vanno insieme e chiudono il tempo: Porfirio racconta che il maestro raggiunse l\'unione con l\'Uno quattro volte in sei anni. E che rifiutò di farsi ritrarre, dicendo che sarebbe stata l\'immagine di un\'immagine — non voleva lasciare un ricordo del proprio corpo.',
       seDicono:[
         {loro:'«Se è tutto necessario, che senso ha la nostra vita?»',
          tu:'Per Plotino un senso c\'è, ed è tornare indietro: ogni grado si volge verso ciò da cui è uscito, e il filosofo fa consapevolmente ciò che tutta la realtà sta già facendo. Non ti chiede di cambiare il mondo — ti chiede di risalire.'},
         {loro:'«Allora anche il male è necessario?»',
          tu:'Plotino risponde che il male non è una cosa: è privazione, come il buio è assenza di luce. Segnati questa risposta: è quella che fra due secoli tirerà fuori dal manicheismo un uomo di nome Agostino, ed è la prossima lezione.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Torniamo alla prima domanda.\n\nQuante cose siete?\n\nAdesso sapete che se la risposta è «molte»,\nnon siete niente.\n\nE allora l\'ultima domanda dell\'ora:\n\nc\'è qualcosa in voi\nche non sia fatto di parti?\n\nPer mille anni, in Occidente,\nla risposta sarà una sola parola.',
       parlato:'Rifai la conta iniziale e mostrala: cambia quasi sempre, e comunque il gruppo che diceva «molte cose per comodità» si è assottigliato.\n\nPoi lascia la domanda finale senza raccogliere risposte. Il rimando è alla prossima lezione: la parola sarà «anima», e chi la userà in un modo nuovo — cercandola dentro invece che sopra — si chiama Agostino.\n\nSe hai ancora un minuto, chiudi con la fine delle Enneadi, che è anche la fine della filosofia greca: l\'ultima riga dell\'ultimo trattato è «fuga del solo verso il Solo». Duecento anni dopo, nel 529, un imperatore chiuderà la scuola di Atene, mille anni esatti dopo Platone. Non è una coincidenza che valga la pena spiegare — è una data che vale la pena ricordare.',
       seDicono:[
         {loro:'«L\'anima però non l\'ha vista nessuno.»',
          tu:'Nemmeno l\'unità, e la stai usando in ogni frase che dici. Non ti sto chiedendo di crederci: ti sto chiedendo di notare che il problema resta anche per chi non ci crede. Se non c\'è niente di semplice, non c\'è niente.'}
       ]}
    ],
    riserve:[
      {titolo:'Fuga del solo verso il Solo',
       corpo:'L\'ultimo grado del cammino non è un pensiero: è l\'estasi, l\'uscire da sé. Plotino la descrive come uno stato in cui cade la distinzione fra chi contempla e ciò che è contemplato — e quindi, per definizione, non può essere raccontato dall\'interno.\n\n«Bisogna credere di averlo visto quando l\'anima riceve improvvisamente luce: questa luce viene da Lui ed è Lui.»\n\nL\'ultima riga delle Enneadi è: «fuga del solo verso il Solo».\n\nPorfirio racconta che al maestro accadde quattro volte nei sei anni in cui gli fu accanto. E aggiunge, con una punta di orgoglio, che a lui stesso capitò una volta sola, a sessantotto anni.',
       chiedi:'Un\'esperienza che non si può raccontare può far parte della filosofia? E se la filosofia è argomentare, che cosa ci sta a fare l\'estasi in fondo a un sistema costruito per deduzioni?'},
      {titolo:'Contro chi disprezza il mondo',
       corpo:'Gli gnostici sostenevano che il mondo fosse opera di un dio inferiore e malvagio, e che la salvezza consistesse nel fuggirlo. Plotino, che pure mette il sensibile all\'ultimo posto, scrive contro di loro il trattato più duro delle Enneadi.\n\nSe questo mondo è brutto — dice — allora è brutto anche il modello di cui è immagine. Chi insulta la copia insulta l\'originale. E chi si crede migliore del sole e delle stelle solo perché è un uomo, non ha capito niente.\n\n«Non bisogna disprezzare questo universo, come se non fosse bello.»',
       chiedi:'Plotino sta difendendo un mondo che ha appena definito l\'ultima e più debole eco dell\'Uno. Come si tengono insieme le due cose? E oggi: si può dire che qualcosa vale poco senza per questo disprezzarlo?'},
      {titolo:'Il tempo nasce da un\'inquietudine',
       corpo:'Nel Nous tutto è insieme: non c\'è prima né poi, non perché duri per sempre, ma perché non c\'è successione. È l\'eternità.\n\nL\'Anima però non riesce a tenere tutto insieme. Deve dispiegare, uno dopo l\'altro, ciò che nell\'Intelletto è simultaneo. E questo dispiegarsi, dice Plotino, è il tempo: non un contenitore in cui le cose accadono, ma la vita dell\'anima che si distende.\n\n«Il tempo è la vita dell\'anima nel movimento con cui passa da un atto della vita a un altro.»',
       chiedi:'Se il tempo è la distensione dell\'anima, allora non esisterebbe senza qualcuno che lo vive. Vi convince? E come rispondereste a chi obietta che il mondo aveva un\'età anche prima che ci fosse qualcuno a contarla?'}
    ],
    testi:[
      {fonte:'Plotino, Enneadi V 2, 1 — la sorgente',
       corpo:'«L\'Uno è tutte le cose e nessuna di esse: principio di tutte, non è tutte le cose, ma è tutte le cose in quel modo. […] Essendo perfetto, e non cercando nulla, e non possedendo nulla, e non avendo bisogno di nulla, per così dire è traboccato, e questa sua sovrabbondanza ha prodotto un\'altra cosa.»',
       glossa:'«Per così dire» è la spia da far notare: Plotino sa che «traboccare» è un\'immagine e che non ne ha di migliori. Tutta la sua metafisica cammina su metafore dichiarate tali — ed è più onesto di molti sistemi che le usano senza ammetterlo.'},
      {fonte:'Porfirio, Vita di Plotino 1 e 23',
       corpo:'«Plotino, il filosofo del nostro tempo, sembrava vergognarsi di essere in un corpo. Per questa disposizione, non sopportava di parlare né della propria origine, né dei genitori, né della patria.»\n\n«Il suo fine e la sua meta era unirsi al Dio che è sopra tutte le cose e avvicinarsi a lui. Quattro volte, mentre gli fui accanto, raggiunse questa meta.»',
       glossa:'La biografia di Porfirio è la prima vita di filosofo scritta da un allievo con questo tono: non aneddoti, ma testimonianza. Vale la pena notare che l\'informazione più intima — quante volte il maestro raggiunse l\'estasi — è anche l\'unica che non si può verificare.'},
      {fonte:'Plotino, Enneadi I 6, 9 — diventare ciò che si vuole vedere',
       corpo:'«Torna in te stesso e guarda: se non ti vedi ancora bello, fa\' come lo scultore di una statua che deve diventare bella — toglie, raschia, liscia, ripulisce, finché non fa apparire un bel volto sulla statua. Così anche tu togli il superfluo e raddrizza ciò che è storto. […] Non smettere di scolpire la tua statua, finché non risplenda in te il divino splendore della virtù.»',
       glossa:'L\'immagine dello scultore che toglie invece di aggiungere è una delle più belle dell\'antichità, e dice in modo concreto il principio che regge tutto: si vede solo ciò a cui si somiglia, quindi diventare buoni non serve a meritare la visione — serve ad averne gli occhi.'}
    ],
    compito:'Mezza pagina. Elencate cinque cose che vi compongono — parti del corpo, ricordi, abitudini, ruoli, relazioni — e poi provate a togliere ciascuna e chiedetevi se restereste voi. Fermatevi al punto in cui togliendo una cosa non restate più voi: quella cosa, secondo voi, è una parte o è ciò che tiene insieme le parti?',
    fonti:[
      'Plotino, Enneadi I 6 (il bello), III 7 (il tempo e l\'eternità), II 9 (contro gli gnostici), V 1-2 (le ipostasi), VI 9 (l\'Uno e l\'estasi)',
      'Porfirio, Vita di Plotino; Isagoge (introduzione alle Categorie di Aristotele)',
      'Proclo, Elementi di teologia; Giamblico, I misteri egiziani',
      'Agostino, Confessioni VII 9-10 — la lettura dei «libri dei platonici»',
      'Pseudo-Dionigi Areopagita, Teologia mistica — la via negativa',
      'P. Hadot, Plotino o la semplicità dello sguardo',
      'G. Reale, Storia della filosofia antica, vol. IV'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia antica · 12 — Agostino d\'Ippona': {
  mappa: {
    n:'Agostino', d:'Tagaste 354 – Ippona 430: la fine dell\'antico e l\'inizio dell\'altro',
    f:[
      {r:'comincia con', n:'Una vita che è un argomento', d:'la sua biografia è parte della sua filosofia',
       f:[
         {r:'nasce a', n:'Tagaste', d:'Numidia, provincia romana d\'Africa: padre pagano, madre cristiana',
          f:[{piu:true, r:'la madre', n:'Monica', d:'lo segue fino a Milano e muore a Ostia mentre tornano insieme'}]},
         {r:'studia e insegna', n:'Retorica', d:'a Cartagine, Roma, Milano: il mestiere di chi vuole fare carriera'},
         {r:'ha', n:'Una compagna per quindici anni', d:'e un figlio, Adeodato, che morirà a diciotto',
          f:[{piu:true, r:'e la lascia', n:'Per un matrimonio conveniente', d:'lo racconta nelle Confessioni come una ferita'}]},
         {r:'è per nove anni', n:'Manicheo', d:'due principi eterni, luce e tenebra: il male è una sostanza',
          f:[{r:'perché risolveva', n:'La domanda «unde malum»', d:'da dove viene il male: e non ne aveva altre'},
             {piu:true, r:'lo lascia dopo', n:'L\'incontro con Fausto', d:'il grande maestro manicheo si rivela ignorante'}]},
         {r:'a Milano incontra', n:'Ambrogio', d:'e scopre che la Bibbia si può leggere in modo non ingenuo'},
         {r:'legge', n:'I libri dei platonici', d:'Plotino e Porfirio: gli danno le categorie che gli mancavano'},
         {r:'si converte nel', n:'Giardino di Milano', d:'386: la voce di un bambino, «tolle lege», e una pagina di Paolo'},
         {r:'muore', n:'Mentre i Vandali assediano Ippona', d:'430: l\'impero d\'Occidente ha quarantasei anni di vita davanti'}
       ]},

      {r:'scrive', n:'Tre libri che restano', d:'e uno che li corregge tutti',
       f:[
         {r:'le', n:'Confessioni', d:'la prima autobiografia interiore della storia',
          f:[{r:'non sono', n:'Un racconto di peccati', d:'confessio vuol dire anche lode e riconoscimento'},
             {piu:true, r:'e sono scritte', n:'Rivolte a Dio', d:'non al lettore: il lettore ascolta una preghiera'}]},
         {r:'la', n:'Città di Dio', d:'ventidue libri, tredici anni di lavoro, dopo il sacco di Roma'},
         {r:'il', n:'De Trinitate', d:'dove cerca l\'immagine di Dio dentro la mente umana'},
         {r:'e le', n:'Ritrattazioni', d:'a settant\'anni rilegge tutte le proprie opere e ne corregge gli errori',
          f:[{piu:true, r:'è', n:'Un caso quasi unico', d:'nessun antico aveva mai pubblicato l\'elenco dei propri sbagli'}]}
       ]},

      {r:'cerca', n:'La verità dentro', d:'e trova il primo punto fermo contro gli scettici',
       f:[
         {r:'contro chi dubita', n:'Si fallor, sum', d:'se mi inganno, esisto: per ingannarmi devo esserci',
          f:[{piu:true, r:'milleduecento anni prima di', n:'Cartesio', d:'che lo ritroverà per un\'altra strada'}]},
         {r:'insegna', n:'Non uscire fuori', d:'«nell\'uomo interiore abita la verità»'},
         {r:'perché la verità è', n:'Superiore alla mente', d:'non la fabbrichiamo: la troviamo e la riconosciamo',
          f:[{r:'esempio', n:'Sette più tre fa dieci', d:'non è vero perché lo penso: lo penso perché è vero'}]},
         {r:'grazie all\'', n:'Illuminazione', d:'la mente vede le verità eterne in una luce che non è sua',
          f:[{piu:true, r:'immagine dal', n:'Sole di Platone', d:'ma qui la luce è personale, ed è Dio'}]},
         {r:'e la mente ha', n:'Memoria, intelligenza, volontà', d:'tre facoltà e una sola anima: immagine della Trinità'}
       ]},

      {r:'risolve', n:'Il problema del male', d:'la domanda che gli ha rovinato la giovinezza',
       f:[
         {r:'il male non è', n:'Una sostanza', d:'se lo fosse, sarebbe stato creato da Dio'},
         {r:'il male è', n:'Privazione di bene', d:'privatio boni: come la malattia è mancanza di salute',
          f:[{r:'preso da', n:'Plotino', d:'ma cambiato: qui non discende dalla materia, discende da una scelta'}]},
         {r:'il male morale nasce da', n:'Cattivo uso del libero arbitrio', d:'non da una forza cattiva: da una volontà che si volta'},
         {r:'perché la volontà', n:'Sceglie beni minori', d:'preferisce la creatura al creatore: è disordine, non sostanza'},
         {r:'quindi Dio', n:'Non è autore del male', d:'ha fatto la libertà, e la libertà è un bene che si può usare male'},
         {piu:true, r:'resta però', n:'Il male innocente', d:'la sofferenza dei bambini: l\'obiezione che nessuna teodicea chiude'}
       ]},

      {r:'apre', n:'Il nodo di grazia e libertà', d:'la polemica che segnerà mille anni di cristianesimo',
       f:[
         {r:'contro', n:'Pelagio', d:'che sosteneva: l\'uomo può salvarsi con le proprie forze',
          f:[{r:'perché altrimenti', n:'Il comando sarebbe assurdo', d:'Dio non comanderebbe l\'impossibile'}]},
         {r:'Agostino risponde', n:'Il peccato originale', d:'la natura umana è ferita, non solo cattiva d\'esempio'},
         {r:'e quindi serve', n:'La grazia', d:'gratuita: non si merita, altrimenti non sarebbe grazia'},
         {r:'da cui', n:'La predestinazione', d:'Dio sa e vuole chi si salverà',
          f:[{r:'ma allora', n:'Che cosa resta della libertà?', d:'la domanda su cui si spaccherà l\'Occidente cristiano'},
             {piu:true, r:'ci torneranno', n:'Lutero, Calvino, Giansenio', d:'e Pascal, e Port-Royal'}]},
         {piu:true, r:'la sua formula', n:'«Ama e fa\' ciò che vuoi»', d:'non è permissiva: se ami davvero, vorrai il bene'}
       ]},

      {r:'analizza', n:'Che cos\'è il tempo', d:'Confessioni XI: venti pagine che nessuno ha superato',
       f:[
         {r:'parte da', n:'Se nessuno me lo chiede, lo so', d:'«se voglio spiegarlo a chi me lo chiede, non lo so»'},
         {r:'osserva che', n:'Il passato non è più', d:'e il futuro non è ancora'},
         {r:'e che', n:'Il presente non ha durata', d:'se durasse, avrebbe una parte già passata e una non ancora',
          f:[{r:'quindi', n:'Il tempo è fatto di ciò che non è', d:'ed è per questo che non si lascia definire'}]},
         {r:'ma noi', n:'Misuriamo il tempo', d:'diciamo lungo e breve: e non si misura ciò che non esiste'},
         {r:'la risposta è', n:'Distensio animi', d:'il tempo è distensione dell\'anima: non delle cose',
          f:[{r:'esistono', n:'Tre presenti', d:'del passato, del presente, del futuro',
              f:[{r:'cioè', n:'Memoria, attenzione, attesa', d:'e stanno tutti e tre adesso, nell\'anima'}]},
             {piu:true, r:'esempio', n:'Il verso che si recita', d:'l\'attesa si accorcia, la memoria si allunga: quello è misurare'}]},
         {r:'e il tempo', n:'Nasce con il mondo', d:'non prima: non c\'era un «prima» in cui Dio non facesse nulla',
          f:[{piu:true, r:'risponde così a', n:'Che faceva Dio prima?', d:'e rifiuta la battuta: «preparava l\'inferno per i curiosi»'}]}
       ]},

      {r:'interpreta la storia con', n:'Le due città', d:'scritte dopo il sacco di Roma del 410',
       f:[
         {r:'nascono da', n:'Due amori', d:'«l\'amore di sé fino al disprezzo di Dio, l\'amore di Dio fino al disprezzo di sé»'},
         {r:'non coincidono con', n:'Chiesa e impero', d:'sono mescolate, e si distingueranno solo alla fine'},
         {r:'risponde all\'accusa', n:'Roma è caduta per i cristiani', d:'perché avrebbero abbandonato gli dèi',
          f:[{piu:true, r:'e replica', n:'Roma cadeva già prima', d:'e la sua grandezza era fondata sulla libidine di dominio'}]},
         {r:'e dà alla storia', n:'Una direzione', d:'non cicli che ritornano: un inizio, un centro, una fine',
          f:[{r:'contro', n:'L\'eterno ritorno', d:'«Cristo è morto una volta sola per i nostri peccati»'},
             {piu:true, r:'da qui', n:'L\'idea occidentale di storia', d:'e, secolarizzata, l\'idea di progresso'}]}
       ]},

      {r:'lascia', n:'Che cosa resta', d:'il ponte fra due mondi',
       f:[
         {r:'fa del cristianesimo', n:'Una filosofia', d:'usando le categorie dei greci per dire qualcosa che i greci non dicevano'},
         {r:'domina', n:'Tutto il primo Medioevo', d:'fino all\'arrivo di Aristotele nel Duecento'},
         {r:'torna con', n:'La Riforma', d:'Lutero era un monaco agostiniano, e ne riprende grazia e peccato'},
         {r:'sul tempo arriva a', n:'Husserl e Heidegger', d:'la coscienza interna del tempo comincia da Confessioni XI'},
         {r:'e sull\'interiorità a', n:'Tutta la modernità', d:'l\'io che si guarda dentro nasce qui, non con Cartesio'}
       ]}
    ],
    incroci:[
      {da:'Privazione di bene', a:'Manicheo', r:'è ciò che gli permette di uscire dal',
       perche:'Per nove anni aveva creduto a due principi eterni perché non sapeva dove mettere il male. Se il male non è una cosa ma la mancanza di una cosa, non serve un secondo dio: la soluzione filosofica scioglie una biografia.'},
      {da:'I libri dei platonici', a:'Privazione di bene', r:'gli danno lo strumento per',
       perche:'Agostino dice di aver trovato in Plotino quasi tutto il prologo di Giovanni, tranne l\'incarnazione. Da lì prende il male come privazione — e la conversione intellettuale precede di anni quella del giardino.'},
      {da:'Cattivo uso del libero arbitrio', a:'Che cosa resta della libertà?', r:'entra in tensione con',
       perche:'Nei primi scritti il male viene dalla libertà, e la libertà è vera. Nella polemica contro Pelagio la natura è ferita e serve la grazia. Le due tesi convivono nello stesso autore e non si compongono: è il nodo che spaccherà l\'Occidente.'},
      {da:'Si fallor, sum', a:'Non uscire fuori', r:'è il primo passo di',
       perche:'La certezza non si trova guardando il mondo ma guardando chi guarda. Il dubbio non tocca l\'esistenza di chi dubita, e da quel punto interno si riparte — mille anni prima che qualcuno ne faccia un metodo.'},
      {da:'Distensio animi', a:'Il tempo è fatto di ciò che non è', r:'è l\'unica uscita da',
       perche:'Se passato e futuro non esistono e il presente non dura, il tempo non può stare nelle cose. Ma noi lo misuriamo: allora è nell\'anima, dove memoria e attesa sono presenti adesso. Il paradosso si scioglie spostando il luogo.'},
      {da:'Nasce con il mondo', a:'Che cos\'è il tempo', r:'toglie senso alla domanda su cosa ci fosse prima di',
       perche:'Chiedere che cosa facesse Dio prima di creare presuppone un tempo in cui non c\'era il mondo. Ma il tempo è stato fatto insieme al mondo: non c\'è nessun prima. È la stessa mossa con cui Platone diceva il tempo immagine mobile dell\'eternità.'},
      {da:'Confessioni', a:'Memoria, intelligenza, volontà', r:'sono l\'esplorazione narrativa di',
       perche:'Se l\'immagine di Dio sta nella struttura della mente, allora raccontare la propria vita interiore non è vanità: è teologia. La prima autobiografia della storia nasce da una tesi metafisica, non da un desiderio di parlare di sé.'},
      {da:'Una direzione', a:'L\'eterno ritorno', r:'si costruisce contro',
       perche:'Se la storia gira in cerchio, nulla è mai definitivo e nulla è mai nuovo. Agostino ha bisogno di un evento unico e irripetibile, e per questo raddrizza il cerchio in una linea: da lì l\'Occidente non è più tornato indietro.'},
      {da:'Due amori', a:'Roma è caduta per i cristiani', r:'è la risposta di fondo a',
       perche:'All\'accusa non risponde negando la catastrofe: sposta il criterio. Le città degli uomini nascono e cadono tutte, e ciò che le distingue non è la fortuna ma l\'amore che le fonda. Roma non è caduta per i cristiani — è caduta perché era una città terrena.'},
      {da:'Superiore alla mente', a:'Illuminazione', r:'richiede',
       perche:'Se le verità eterne non le fabbrico e non le trovo nelle cose che cambiano, devono venirmi da qualcosa che sta sopra la mia mente. L\'illuminazione non è un\'esperienza mistica: è l\'ipotesi che spiega perché non posso decidere che sette più tre faccia undici.'},
      {da:'Una compagna per quindici anni', a:'Un racconto di peccati', r:'costringe a rileggere che',
       perche:'Le pagine più famose delle Confessioni sono lette come confessione di colpe. Ma confessio significa anche riconoscere e lodare: il racconto della propria vita serve a mostrare come la verità lavori dentro qualcuno che non la cercava.'},
      {da:'Il male innocente', a:'Non è autore del male', r:'resta un\'obiezione aperta a',
       perche:'La privazione spiega il male morale: nasce da una volontà che sceglie male. Ma il dolore di chi non ha scelto niente resta fuori — e sarà l\'argomento con cui, quindici secoli dopo, Ivan Karamazov restituirà il biglietto.'}
    ]
  },
  provocazione: {
    titolo:'Che cos\'è il tempo?',
    durata:'55 minuti',
    domandaMadre:'Come fate a misurare una cosa che non esiste?',
    perche:'È la domanda più democratica dell\'anno: la sanno tutti e non la sa nessuno, e non serve conoscere niente per entrarci. In dieci minuti la classe scopre che passato e futuro non esistono e che il presente non ha durata, cioè che sta misurando ogni giorno qualcosa fatto di niente. La soluzione di Agostino — il tempo è distensione dell\'anima — non è una consolazione ma uno spostamento del luogo del problema, ed è l\'occasione per far vedere che cosa significhi risolvere una questione filosofica. Il colpo di scena rivela che quelle pagine le ha scritte un vescovo del IV secolo che ha anche anticipato il cogito e l\'idea che il tempo cominci con l\'universo.',
    occorrente:'Un orologio con la lancetta dei secondi, o un telefono con il cronometro.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Che cos\'è il tempo?\n\nLo sapete tutti. Lo usate ogni minuto.\nAvete guardato l\'orologio due volte da quando siete entrati.\n\nScrivete la definizione in una riga.\n\nRegola: non potete usare le parole\ntempo, quando, prima, dopo, durata, momento,\nné nessun sinonimo.\n\nAvete tre minuti.',
       parlato:'La regola è tutta la riuscita del primo tempo: senza, scrivono «il tempo è ciò che passa» e sono soddisfatti.\n\nFai scrivere davvero, in silenzio, e poi raccogli tre o quattro tentativi a voce. Falli fallire con gentilezza, indicando ogni volta la parola vietata che è rientrata dalla finestra: «scorre» contiene un prima e un poi, «cambiamento» pure, «il ticchettio dell\'orologio» è una cosa che si muove e non è il tempo.\n\nPoi la constatazione, che va detta senza trionfo: siete tutti perfettamente capaci di usarlo e nessuno di voi sa dire che cos\'è. Questa è la situazione da cui parte tutta la filosofia — e stasera scoprirete che qualcuno l\'aveva già descritta esattamente così.',
       seDicono:[
         {loro:'«Il tempo è la quarta dimensione.»',
          tu:'È una descrizione matematica di come lo trattiamo nei calcoli, ed è utilissima. Ma non risponde: dimensione di che cosa? E soprattutto, perché di questa dimensione ne percorriamo una sola direzione, mentre nelle altre tre andiamo avanti e indietro?'},
         {loro:'«È quello che misura l\'orologio.»',
          tu:'L\'orologio misura i propri movimenti. Se domani tutti gli orologi del mondo rallentassero insieme, come faremmo ad accorgercene? Definire il tempo con lo strumento che lo misura è come definire il peso dicendo che è quello che segna la bilancia.'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'Provate a dire dove sta il tempo.\n\nIl passato? Non c\'è più: se ci fosse ancora, non sarebbe passato.\nIl futuro? Non c\'è ancora: se ci fosse già, non sarebbe futuro.\n\nResta il presente.\n\nMa quanto dura il presente?\nUn\'ora? Ha una parte già passata e una non ancora.\nUn minuto? Lo stesso. Un secondo? Lo stesso.\n\nQualunque durata gli diate, si divide in un prima e un poi.\n\nQuindi il presente non dura.',
       opzioni:['Il tempo esiste', 'Il tempo non esiste'],
       parlato:'Costruisci l\'argomento riga per riga, aspettando l\'assenso a ogni passaggio. È l\'argomento di Agostino, ed è pulito: nessuno dei tre pezzi si rifiuta facilmente.\n\nPoi fai schierare. Attenzione: quasi tutti diranno che il tempo esiste, ma nessuno saprà dire dove.\n\nA quel punto tira la conclusione dura: il tempo sarebbe fatto di un pezzo che non c\'è più, uno che non c\'è ancora, e uno che non ha spessore. È fatto interamente di cose che non esistono.\n\nE tienili lì un momento prima di passare oltre: non è un paradosso da salotto. Se non sanno rispondere, non sanno dire che cosa stanno facendo mentre aspettano l\'intervallo.',
       seDicono:[
         {loro:'«Il presente è un istante, un punto: esiste ma è senza durata.»',
          tu:'Perfetto, hai detto esattamente ciò che dice Agostino. Ma allora la tua vita intera è una successione di punti senza spessore. Somma infiniti zeri: quanto fa? Da dove viene la durata di questa lezione?'},
         {loro:'«Il passato esiste: ci sono le prove, le fotografie, i ricordi.»',
          tu:'Le fotografie esistono adesso. I ricordi esistono adesso. Non mi hai mostrato il passato: mi hai mostrato oggetti presenti. Tienila stretta, questa osservazione, perché è la chiave di tutto il resto dell\'ora.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'E però.\n\nDiciamo «un lungo silenzio», «una breve pausa».\nDiciamo che questa lezione dura cinquantacinque minuti.\nUn atleta batte un record per tre centesimi.\n\nMisuriamo il tempo continuamente,\ne lo misuriamo bene.\n\nMa non si può misurare ciò che non esiste.\n\nAllora: che cosa stiamo misurando?',
       parlato:'Questo è il perno dell\'ora e va fatto sentire come un problema tecnico, non come un enigma.\n\nFai l\'esperimento: prendi il cronometro e chiedi a tutti di chiudere gli occhi e alzare la mano quando pensano siano passati trenta secondi. I risultati si sparpagliano fra i venti e i cinquanta. Nessuno ha misurato il tempo: hanno misurato qualcosa dentro di sé.\n\nPoi torna alla domanda e restringi le uscite una per volta. Non stiamo misurando il passato, perché non c\'è più. Non il futuro. Non l\'istante presente, che non ha lunghezza. E allora?\n\nSe qualcuno risponde «misuriamo il movimento», è la risposta di Aristotele e va presa sul serio — ma poi chiedi: e quando sei al buio, immobile, in silenzio, senti passare il tempo? Sì. Che cosa si sta muovendo?',
       seDicono:[
         {loro:'«Misuriamo il movimento delle cose: il sole, le lancette.»',
          tu:'È la risposta di Aristotele. Ma se il sole si fermasse e il vasaio continuasse a girare la ruota, misureremmo il giro della ruota: quindi non è quel movimento particolare. E soprattutto, per dire che un movimento è più lento di un altro, stai già usando il tempo per misurare il movimento, e non viceversa.'},
         {loro:'«Misuriamo l\'intervallo fra due eventi.»',
          tu:'Ma quell\'intervallo, mentre lo misuri, dov\'è? Il primo evento è passato, il secondo non è ancora accaduto — o è già accaduto anche lui. Non hai mai in mano contemporaneamente le due estremità del righello.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'«Che cos\'è dunque il tempo?\nSe nessuno me lo chiede, lo so;\nse voglio spiegarlo a chi me lo chiede, non lo so.»\n\n«Non esistono tre tempi — passato, presente e futuro.\nEsistono tre presenti:\n\nil presente del passato, che è la memoria;\nil presente del presente, che è l\'attenzione;\nil presente del futuro, che è l\'attesa.\n\nÈ in te, anima mia, che misuro il tempo.»',
       testo:{fonte:'Agostino, Confessioni XI, 14 e 20 (397-400 d.C.)',
              glossa:'La prima frase è la più onesta della filosofia occidentale: non finge di sapere. La seconda è la soluzione, e consiste in uno spostamento — se il tempo non può stare nelle cose, sta nell\'anima. Ricordare, prestare attenzione e attendere sono tre atti che accadono tutti adesso: ecco perché si può misurare qualcosa che non c\'è.'},
       parlato:'Leggi il primo passo e fai notare che è esattamente la situazione in cui erano venti minuti fa. Non è una coincidenza: Agostino ha costruito il capitolo perché il lettore ci arrivi in quello stato.\n\nPoi la soluzione, e falla verificare su un esempio concreto. Recita un verso che sanno a memoria e fermati a metà. Prima di cominciare, tutto il verso era attesa; alla fine sarà tutto memoria; a metà, una parte sta di qua e una di là. Ciò che si accorcia e ciò che si allunga sono nella tua testa — e misurare il verso è misurare quel passaggio.\n\nDa qui il nome che dà alla cosa: distensio animi, distensione dell\'anima. Il tempo non è un contenitore in cui siamo dentro: è lo stiramento di una coscienza che tiene insieme ciò che non c\'è più e ciò che non c\'è ancora.',
       seDicono:[
         {loro:'«Allora senza di noi il tempo non esisterebbe?»',
          tu:'È la conseguenza, e Agostino non se ne spaventa. Chiediti però che cosa vorresti salvare: che i dinosauri siano esistiti prima di noi, immagino. Lui risponderebbe che gli eventi ci sono stati, e che il tempo è il modo in cui una mente li ordina. Ti basta?'},
         {loro:'«È solo psicologia, non filosofia: parla di come lo percepiamo.»',
          tu:'Attento: non dice che il tempo ci sembra così. Dice che non può stare da nessun\'altra parte, perché nelle cose non c\'è nulla che duri. È una conclusione, non un\'impressione — e per rifiutarla devi indicargli dove sarebbe il tempo, che è esattamente quello che non riusciamo a fare da mezz\'ora.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Chi ha scritto queste pagine.\n\nUn professore di retorica che aveva fatto carriera mentendo per mestiere.\nUn uomo che aveva avuto una compagna per quindici anni e un figlio,\ne l\'aveva lasciata per un matrimonio conveniente.\nUno che per nove anni era stato in una setta\nche spiegava il male con due dèi in guerra.\n\nHa scritto il primo libro della storia\nin cui qualcuno racconta la propria vita interiore.\n\nE per rispondere a chi chiedeva\n«che cosa faceva Dio prima di creare il mondo?»\nha risposto che non c\'era nessun prima:\nil tempo è cominciato insieme all\'universo.\n\nMillecinquecento anni prima che lo dicesse un fisico.',
       parlato:'Dai il ritratto per pezzi, senza indulgenza e senza compiacimento: serve a far vedere che quelle pagine non le ha scritte uno specialista di metafisica, ma uno che aveva rovistato in sé stesso per necessità.\n\nPoi la risposta sul «prima»: chiedere che cosa ci fosse prima presuppone un tempo vuoto in cui non c\'era ancora niente. Ma il tempo è stato fatto insieme al mondo, e quindi la domanda non ha oggetto. Agostino riporta anche la battuta che circolava — preparava l\'inferno per chi fa domande simili — e la rifiuta, dicendo che alle domande si risponde.\n\nE se hai tempo, il dettaglio che di solito li colpisce di più: lo stesso uomo ha scritto «si fallor, sum» — se mi inganno, esisto. Milleduecento anni prima di Cartesio, e per rispondere agli scettici, esattamente come farà lui.',
       seDicono:[
         {loro:'«Ma allora Cartesio ha copiato.»',
          tu:'Lo conosceva, e quando glielo fecero notare rispose che il suo cogito faceva un altro lavoro: Agostino lo usa per fondare la certezza dell\'anima, lui per fondare un metodo. È un buon esempio di come la stessa frase possa non essere la stessa idea.'},
         {loro:'«Uno con quella vita può parlare di verità?»',
          tu:'Lui direbbe di sì, e che è proprio il punto: le Confessioni servono a mostrare che la verità lavora anche dentro qualcuno che non la sta cercando. Ma la tua è la domanda giusta da farsi sempre — solo che si risponde leggendo gli argomenti, non la biografia.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Riprendete il foglio dell\'inizio.\n\nAdesso avete una definizione:\nil tempo è la distensione dell\'anima.\n\nE una conseguenza, che vale per oggi:\n\nquest\'ora è durata cinquantacinque minuti per l\'orologio.\n\nPer voi quanto è durata?\n\nSe le due risposte non coincidono,\nnon è un difetto della vostra attenzione:\nsecondo Agostino è esattamente ciò che il tempo è.',
       parlato:'Chiedi davvero quanto è durata, a mano alzata: meno, uguale, di più. Le risposte si dividono sempre, e il fatto che si dividano è la verifica finale dell\'argomento.\n\nPoi chiudi con due frasi, non di più.\n\nLa prima: avete visto che cosa vuol dire risolvere un problema in filosofia. Non è trovare la risposta che mancava — è accorgersi che si stava cercando nel posto sbagliato. Il tempo non era nelle cose, e finché lo si cercava lì non si poteva che fallire.\n\nLa seconda: con Agostino finisce la filosofia antica. Ha preso le parole dei greci — sostanza, anima, verità, eternità — e le ha usate per dire cose che nessun greco avrebbe detto. Da qui in avanti, per mille anni, l\'Occidente penserà con il suo vocabolario. E l\'anno prossimo ricomincerete esattamente da lì.',
       seDicono:[
         {loro:'«Quindi il tempo è soggettivo, ognuno ha il suo?»',
          tu:'Attenzione a non semplificare: non dice che ciascuno ha un tempo diverso a piacere. Dice che il tempo è il modo in cui una coscienza tiene insieme memoria, attenzione e attesa. È una struttura, non un\'opinione — e infatti tutti misuriamo, e quasi sempre andiamo d\'accordo.'}
       ]}
    ],
    riserve:[
      {titolo:'Da dove viene il male',
       corpo:'Per nove anni Agostino era stato manicheo, perché quella dottrina rispondeva alla domanda che lo tormentava: da dove viene il male? Risposta: esistono due principi eterni, la luce e la tenebra, e il male è una sostanza che combatte contro Dio.\n\nIl problema è che, se il male è una sostanza, o l\'ha fatta Dio — e allora Dio non è buono — oppure c\'è qualcosa che Dio non ha fatto, e allora non è onnipotente.\n\nLeggendo i platonici trova la via d\'uscita: il male non è una cosa. È una privazione, come la malattia è mancanza di salute e il buio è assenza di luce. Nessuno «fa» il buio. E il male morale nasce da una volontà libera che sceglie un bene minore al posto di uno maggiore.',
       chiedi:'La soluzione funziona per il male che facciamo. Ma il terremoto? La malattia di un bambino? Provate a difendere Agostino su quel caso, e poi ad attaccarlo: dove si ferma la spiegazione?'},
      {titolo:'Il furto delle pere',
       corpo:'Nelle Confessioni, Agostino dedica pagine intere a un furto di pere commesso a sedici anni con una banda di amici. Le pere non erano buone, non aveva fame, e le buttarono ai maiali.\n\nÈ proprio questo a tormentarlo: non ha rubato per il frutto. «Amai la mia rovina, amai il mio difetto: non la cosa per cui commettevo il difetto, ma il difetto stesso.» E aggiunge che da solo non lo avrebbe mai fatto: «non mi sarebbe piaciuto farlo da solo».',
       chiedi:'Un uomo di quarantacinque anni scrive dieci pagine su un furto di frutta. È sproporzione, o ha visto qualcosa che gli esempi più gravi non mostrano? E la frase sul non farlo da solo: che cosa dice del rapporto fra il male e il gruppo?'},
      {titolo:'Roma è caduta',
       corpo:'Nel 410 i Visigoti di Alarico saccheggiano Roma. La città non veniva presa da ottocento anni. Il colpo psicologico è enorme in tutto l\'impero, e molti danno la colpa ai cristiani: da quando abbiamo abbandonato gli dèi, dicono, Roma è caduta.\n\nAgostino risponde con ventidue libri e tredici anni di lavoro. Non nega la catastrofe: cambia il criterio. Tutte le città degli uomini nascono e cadono; ciò che le distingue non è la fortuna ma l\'amore che le fonda. Ci sono due città mescolate in questo mondo, fatte da due amori — «l\'amore di sé fino al disprezzo di Dio, e l\'amore di Dio fino al disprezzo di sé» — e si separeranno solo alla fine.',
       chiedi:'Agostino risponde a una crisi storica spostando il discorso su un piano dove quella crisi conta meno. È una risposta o una fuga? E oggi, quando qualcuno risponde a un problema politico dicendo che il vero problema è un altro, come si distingue la profondità dall\'evasione?'}
    ],
    testi:[
      {fonte:'Agostino, Confessioni X 27, 38',
       corpo:'«Tardi ti ho amato, bellezza tanto antica e tanto nuova, tardi ti ho amato! Ed ecco, tu eri dentro di me e io fuori, e là ti cercavo, e sulle cose belle che hai fatto io, deforme, mi gettavo. Tu eri con me, e io non ero con te.»',
       glossa:'È il passo più celebre delle Confessioni ed è costruito su un\'unica inversione: la ricerca era orientata male, non insufficiente. Vale la pena leggerlo anche a chi non condivide la fede, perché la struttura — cercare fuori ciò che è dentro — è la stessa di tutta la sua teoria della conoscenza.'},
      {fonte:'Agostino, La città di Dio XIV, 28',
       corpo:'«Due amori hanno costruito due città: l\'amore di sé fino al disprezzo di Dio, la città terrena; l\'amore di Dio fino al disprezzo di sé, la città celeste. L\'una si gloria in sé stessa, l\'altra nel Signore. […] Nell\'una i prìncipi e le nazioni sono dominati dalla libidine di dominio, nell\'altra si servono a vicenda nella carità.»',
       glossa:'Da far notare: la distinzione non è fra Chiesa e Stato, né fra credenti e non credenti. Le due città sono mescolate ovunque e in chiunque, e si distinguono solo alla fine. È ciò che rende il libro più interessante e meno utilizzabile come manifesto politico.'},
      {fonte:'Agostino, La città di Dio XI, 26 — si fallor, sum',
       corpo:'«Senza alcuna fantasia di immagini, sono certissimo di essere, e di conoscerlo, e di amarlo. Di fronte a queste verità non temo gli argomenti degli Accademici, che dicono: e se ti inganni? Se infatti mi inganno, sono. Chi non è, non può neppure ingannarsi: dunque, se mi inganno, sono.»',
       glossa:'Milleduecento anni prima di Cartesio, e con lo stesso avversario — lo scetticismo accademico. La differenza sta nell\'uso: Agostino ne ricava la certezza dell\'anima e del suo amore, Cartesio il primo anello di un metodo. Stessa frase, due mestieri diversi.'}
    ],
    compito:'Mezza pagina. Descrivete un momento in cui il tempo vi è sembrato molto più lungo o molto più corto di quanto segnasse l\'orologio. Poi provate a spiegare la differenza usando le tre parole di Agostino — memoria, attenzione, attesa — e dite quale delle tre era cambiata.',
    fonti:[
      'Agostino, Confessioni I 1, II 4-10 (le pere), VII 9-10 (i platonici), VIII 12 (il giardino), X 8-27 (la memoria), XI 10-31 (il tempo)',
      'Agostino, La città di Dio XI 26 (si fallor sum), XII 13-14 (contro i cicli), XIV 28 (i due amori), XIX 13 (la pace)',
      'Agostino, De libero arbitrio I-II; De vera religione 39 (l\'uomo interiore); De Trinitate IX-X',
      'Agostino, Ritrattazioni — prologo',
      'P. Brown, Agostino d\'Ippona',
      'E. Husserl, Per la fenomenologia della coscienza interna del tempo — l\'apertura cita Confessioni XI'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Storia medievale · 1 — La ripresa dopo l\'anno Mille': {
  mappa: {
    n:'La ripresa dopo l\'anno Mille', d:'X-XIII secolo: l\'Europa raddoppia',
    f:[
      {r:'parte da', n:'Un\'Europa svuotata', d:'il punto piu basso, fra IX e X secolo',
       f:[
         {r:'aveva subito', n:'Tre ondate di invasioni', d:'e finiscono quasi insieme',
          f:[{r:'gli', n:'Ungari', d:'fermati a Lechfeld nel 955 da Ottone I'},
             {r:'i', n:'Saraceni', d:'dalle basi in Sicilia e in Provenza'},
             {r:'i', n:'Normanni', d:'che nel 911 ottengono la Normandia e si fermano'}]},
         {r:'conta', n:'Circa 38 milioni di abitanti', d:'in tutta Europa: meno che nell\'impero romano'},
         {r:'si organizza in', n:'Curtis', d:'l\'azienda agraria chiusa: si produce quasi solo per consumare',
          f:[{r:'divisa in', n:'Pars dominica e pars massaricia', d:'la terra del signore e quella data ai coloni'},
             {piu:true, r:'e le corvées', n:'Giornate di lavoro gratuito', d:'sulla terra del signore: e sono il prezzo del podere'}]},
         {r:'si difende con', n:'L\'incastellamento', d:'la popolazione si raccoglie intorno a un castello'},
         {r:'e usa poco', n:'La moneta', d:'gli scambi sono baratti e servizi'}
       ]},

      {r:'cambia grazie a', n:'Poche invenzioni', d:'e sono attrezzi, non idee',
       f:[
         {r:'il', n:'Collare rigido a spalla', d:'sposta il tiro dalla gola alle spalle del cavallo',
          f:[{r:'perché prima', n:'Il giogo strozzava', d:'l\'animale respirava male e tirava una frazione della propria forza'},
             {r:'e ora', n:'Il cavallo tira quattro volte tanto', d:'e cammina piu veloce del bue'},
             {piu:true, r:'arriva', n:'Dall\'Asia centrale', d:'attraverso le steppe, fra IX e X secolo'}]},
         {r:'l\'', n:'Aratro pesante', d:'con vomere, coltro e versoio: non graffia la terra, la rivolta',
          f:[{r:'permette di lavorare', n:'I suoli grassi del Nord', d:'argillosi e pesanti, che l\'aratro romano non scalfiva'},
             {piu:true, r:'ma richiede', n:'Piu animali e piu uomini', d:'e quindi spinge a lavorare insieme'}]},
         {r:'la', n:'Ferratura', d:'lo zoccolo non si consuma: il cavallo dura e lavora su terreni duri'},
         {r:'la', n:'Rotazione triennale', d:'al posto della biennale: un terzo a riposo invece della meta',
          f:[{r:'guadagna', n:'Un sesto di terra in piu ogni anno', d:'dal cinquanta per cento coltivato al sessantasei'},
             {r:'e introduce', n:'I legumi a primavera', d:'fave, piselli, lenticchie: proteine, e fissano l\'azoto'}]},
         {r:'e i', n:'Mulini', d:'ad acqua ovunque, poi a vento dal XII secolo',
          f:[{r:'contati nel', n:'Domesday Book', d:'1086: 5.624 mulini ad acqua nella sola Inghilterra'},
             {r:'liberano', n:'Braccia dalla macina', d:'era un lavoro da ore, quotidiano, quasi sempre femminile'}]}
       ]},

      {r:'ma servono anche', n:'Le condizioni', d:'gli attrezzi da soli non bastano',
       f:[
         {r:'la fine delle', n:'Incursioni', d:'seminare ha senso solo se si e ragionevolmente sicuri di raccogliere'},
         {r:'l\'', n:'Optimum climatico medievale', d:'circa 950-1250: qualche grado in piu, stagioni piu lunghe',
          f:[{piu:true, r:'tanto che', n:'Si coltiva vite in Inghilterra', d:'e i Normanni colonizzano la Groenlandia'}]},
         {r:'e i', n:'Dissodamenti', d:'si abbatte la foresta e si prosciugano le paludi',
          f:[{r:'guidati da', n:'Monaci e signori', d:'che offrono terra e franchigie a chi va a dissodare'},
             {piu:true, r:'nascono', n:'Le villenove', d:'villaggi fondati apposta, con nomi che li tradiscono ancora oggi'}]}
       ]},

      {r:'produce', n:'Il raddoppio', d:'la curva che spiega tutto il resto',
       f:[
         {r:'da 38 a', n:'Circa 75 milioni', d:'fra il 1000 e il 1300: la popolazione quasi raddoppia'},
         {r:'perche calano', n:'Le carestie', d:'non spariscono: diventano meno frequenti'},
         {r:'e cresce', n:'Il surplus', d:'per la prima volta si produce piu di quanto serva a sopravvivere',
          f:[{r:'quindi', n:'Non tutti servono nei campi', d:'e chi avanza puo fare altro'},
             {r:'e quindi', n:'C\'e qualcosa da vendere', d:'senza eccedenza non esiste mercato'}]}
       ]},

      {r:'fa rinascere', n:'Le citta', d:'dopo cinque secoli di svuotamento',
       f:[
         {r:'crescono i', n:'Borghi', d:'fuori dalle mura vecchie: da burgus viene borghesia'},
         {r:'e con essi', n:'Una classe nuova', d:'mercanti e artigiani: non pregano, non combattono, non arano'},
         {r:'si organizzano in', n:'Corporazioni', d:'arti e mestieri: regolano prezzi, qualita, apprendistato'},
         {r:'e conquistano', n:'Franchigie', d:'esenzioni e diritti strappati o comprati dal signore',
          f:[{r:'da cui', n:'Il Comune', d:'i cittadini giurano fra loro e si governano'},
             {r:'e la regola', n:'L\'aria della citta rende liberi', d:'un anno e un giorno dentro le mura, e il servo e libero',
              f:[{piu:true, r:'in tedesco', n:'Stadtluft macht frei', d:'formula attestata nelle citta dell\'Impero'}]}]}
       ]},

      {r:'rimette in moto', n:'Il commercio', d:'e con esso il denaro',
       f:[
         {r:'riapre', n:'Il Mediterraneo', d:'con Venezia, Genova, Pisa, Amalfi'},
         {r:'collega', n:'Nord e Sud', d:'i panni delle Fiandre contro le spezie e la seta d\'Oriente',
          f:[{r:'si incontrano alle', n:'Fiere di Champagne', d:'sei fiere l\'anno, un ciclo continuo, sotto protezione del conte'}]},
         {r:'torna', n:'La moneta d\'oro', d:'dopo cinque secoli di solo argento',
          f:[{r:'il', n:'Fiorino', d:'Firenze 1252: diventa la moneta di riferimento d\'Europa'},
             {piu:true, r:'e il', n:'Genovino', d:'coniato lo stesso anno: Genova e Firenze quasi insieme'}]},
         {r:'nascono', n:'Gli strumenti del credito', d:'perche portare oro sulle strade e pericoloso',
          f:[{r:'la', n:'Lettera di cambio', d:'pago qui, tu incassi altrove in un\'altra moneta'},
             {r:'la', n:'Partita doppia', d:'ogni operazione scritta due volte: si controlla da sola'},
             {r:'e la', n:'Societa in accomandita', d:'chi mette il capitale e chi viaggia, e si dividono il rischio'}]},
         {r:'aggirando', n:'Il divieto dell\'usura', d:'la Chiesa proibisce il prestito a interesse',
          f:[{r:'con il', n:'Cambio', d:'l\'interesse si nasconde nel tasso fra due monete'},
             {piu:true, r:'e con', n:'Il rischio', d:'se c\'e pericolo il guadagno e lecito: non e usura, e assicurazione'}]}
       ]},

      {r:'ridisegna', n:'La societa', d:'lo schema antico non basta piu',
       f:[
         {r:'lo schema era', n:'I tre ordini', d:'chi prega, chi combatte, chi lavora',
          f:[{piu:true, r:'formulato da', n:'Adalberone di Laon', d:'intorno al 1025, come se fosse eterno'}]},
         {r:'ma ora c\'e', n:'Chi non sta in nessuno dei tre', d:'il mercante: e lo schema si incrina'},
         {r:'la servitu', n:'Si attenua', d:'affrancamenti, canoni in denaro al posto delle corvées',
          f:[{r:'perche al signore', n:'Conviene il denaro', d:'con i contanti compra cio che vuole, con le giornate no'}]},
         {r:'e nascono', n:'Ordini religiosi nuovi', d:'che sono anche imprese agrarie',
          f:[{r:'i', n:'Cluniacensi', d:'dal 910: liturgia grandiosa e rete europea di monasteri'},
             {r:'i', n:'Cistercensi', d:'dal 1098: ritorno alla regola, e bonifiche su scala industriale'}]}
       ]},

      {r:'lascia', n:'Un\'Europa nuova', d:'e una fragilita nascosta',
       f:[
         {r:'nascono', n:'Le universita', d:'Bologna 1088, Parigi, Oxford: corporazioni di studenti e maestri'},
         {r:'si costruiscono', n:'Le cattedrali gotiche', d:'possibili solo con surplus, tecnica e citta ricche'},
         {r:'cambia', n:'Il tempo', d:'quello della Chiesa scandito dalle campane, quello del mercante dall\'orologio',
          f:[{piu:true, r:'e nel Trecento', n:'Arrivano gli orologi meccanici', d:'sulle torri civiche: le ore diventano uguali'}]},
         {r:'ma la crescita', n:'Arriva al limite', d:'intorno al 1300 le terre buone sono finite',
          f:[{r:'e prepara', n:'La crisi del Trecento', d:'carestie, peste nera, crollo demografico'}]}
       ]}
    ],
    incroci:[
      {da:'Il cavallo tira quattro volte tanto', a:'Circa 75 milioni', r:'e una delle cause di',
       perche:'Piu forza di trazione significa piu terra arata nello stesso tempo, e quindi piu cibo. La demografia europea non raddoppia per una decisione politica: raddoppia perche cambia il rendimento del lavoro nei campi.'},
      {da:'I legumi a primavera', a:'Le carestie', r:'contribuiscono a ridurre',
       perche:'Il terzo campo seminato in primavera da fave e piselli: proteine vegetali in una dieta che ne aveva pochissime, e piante che restituiscono azoto al terreno. Due effetti in una mossa — nutrizione migliore e terra meno stanca.'},
      {da:'Il surplus', a:'Le citta', r:'e la condizione di',
       perche:'Una citta e un luogo dove si vive senza produrre cibo. Finche ogni contadino nutre a stento se stesso, le citta non possono esistere. La rinascita urbana comincia nei campi, non nelle mura.'},
      {da:'Non tutti servono nei campi', a:'Una classe nuova', r:'rende possibile',
       perche:'Il mercante e l\'artigiano esistono solo se qualcun altro produce il loro cibo. La comparsa di un ceto che non prega, non combatte e non ara e la conseguenza sociale diretta di un raccolto piu abbondante.'},
      {da:'L\'aria della citta rende liberi', a:'Si attenua', r:'accelera il fatto che la servitu',
       perche:'Se il servo che scappa in citta e resta un anno e un giorno diventa libero, il signore ha una ragione concreta per trattenere i propri contadini offrendo condizioni migliori. La concorrenza fra campagna e citta lavora a favore dei servi.'},
      {da:'Conviene il denaro', a:'La moneta d\'oro', r:'ha bisogno che',
       perche:'Trasformare le corvées in canoni in denaro si puo fare solo se il denaro circola davvero e vale. La rinascita monetaria non e uno sfondo: e la condizione tecnica della trasformazione dei rapporti di lavoro.'},
      {da:'Il divieto dell\'usura', a:'Lettera di cambio', r:'e all\'origine di',
       perche:'Proibito il prestito a interesse, l\'interesse si nasconde nella differenza fra due monete e due piazze. Il piu potente strumento finanziario del Medioevo nasce come modo elegante di aggirare un divieto religioso.'},
      {da:'Domesday Book', a:'Braccia dalla macina', r:'misura quante',
       perche:'Cinquemilaseicento mulini in una sola isola dicono che la macinatura a mano e finita in tre generazioni. Erano ore quotidiane di lavoro, quasi sempre femminile: e la piu grande liberazione di tempo prima della rivoluzione industriale.'},
      {da:'Optimum climatico medievale', a:'Poche invenzioni', r:'e la condizione che rende efficaci',
       perche:'Gli stessi attrezzi in un secolo freddo rendono molto meno. Il clima non spiega da solo la ripresa, ma senza di esso il collare e l\'aratro avrebbero prodotto una frazione dei loro effetti. Nessuna causa da sola basta.'},
      {da:'Arriva al limite', a:'Dissodamenti', r:'e il punto in cui si esauriscono i',
       perche:'Intorno al 1300 si e gia disboscato tutto cio che valeva la pena e si coltivano terre marginali che rendono poco. La stessa crescita che aveva funzionato per tre secoli si mangia le proprie riserve, e la popolazione resta esposta.'},
      {da:'Il Comune', a:'Franchigie', r:'nasce dall\'accumularsi di',
       perche:'Non c\'e un giorno in cui il Comune viene fondato: ci sono decenni di esenzioni fiscali, diritti di mercato, tribunali propri, strappati o comprati un pezzo per volta. Quando il pacchetto e completo, la citta si governa da se.'},
      {da:'Il tempo', a:'Chi non sta in nessuno dei tre', r:'cambia insieme alla comparsa di',
       perche:'Per chi prega e chi ara, le ore le scandiscono le campane e le stagioni. Per chi presta denaro il tempo e una misura che produce valore — ed e il motivo per cui saranno le citta mercantili a mettere il primo orologio sulla torre.'}
    ]
  },
  provocazione: {
    titolo:'Chi ha fatto rinascere l\'Europa',
    durata:'55 minuti',
    domandaMadre:'La storia la fanno gli uomini che ricordiamo, o le cose che non ricordiamo?',
    perche:'La classe attribuisce la rinascita dell\'anno Mille a imperatori, papi e crociate — cioe ai nomi che sa — e scopre che le cause principali sono un collare per cavalli, un aratro e un campo diviso in tre. E la prima volta nell\'anno che si trova davanti a una spiegazione storica senza protagonisti, ed e il modo migliore per capire che cosa sia la storia economica e sociale. Il colpo di scena smonta anche il pezzo di mitologia che tutti conoscono — i terrori dell\'anno Mille, inventati nell\'Ottocento — e mostra che la stessa tecnica che libera crea nuove forme di dipendenza. Si chiude su una domanda che li riguarda: quale oggetto di oggi risultera piu importante di qualunque politico?',
    occorrente:'Se si riesce, un\'immagine di un collare a spalla e una di un giogo alla gola: la differenza si capisce a occhio in tre secondi.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Fra il 1000 e il 1300 la popolazione europea\npassa da circa 38 a circa 75 milioni.\n\nQuasi raddoppia, in trecento anni,\nsenza medicine, senza vaccini,\nsenza nessuna scoperta scientifica.\n\nNello stesso periodo rinascono le citta,\ntorna la moneta d\'oro,\nsi costruiscono le cattedrali\ne nascono le universita.\n\nChi lo ha fatto?',
       parlato:'Fai la domanda cosi com\'e e raccogli i nomi a mano alzata, scrivendoli mentalmente in un elenco: usciranno Ottone I, i papi, le crociate, Federico Barbarossa, i Comuni.\n\nNon correggere nessuno. Poi chiedi una cosa sola, e falla pesare: per raddoppiare una popolazione serve piu cibo. Quale di questi nomi ha prodotto piu cibo?\n\nIl silenzio che segue e il vero inizio della lezione.\n\nSe qualcuno dice «le crociate hanno portato ricchezza», annota che la prima parte nel 1096 — cioe quando la crescita e gia cominciata da un secolo. Le crociate sono un effetto della ripresa, non la sua causa.',
       seDicono:[
         {loro:'«L\'ha fatto la Chiesa: i monasteri coltivavano.»',
          tu:'Vero, e i cistercensi bonificano su scala enorme. Ma i monasteri c\'erano anche nel IX secolo, quando non cresceva niente. Che cosa hanno in piu, nel Mille, che prima non avevano?'},
         {loro:'«Sono finite le invasioni, quindi c\'era pace.»',
          tu:'Ottima, ed e una condizione vera: si semina solo se si spera di raccogliere. Tienila da parte pero, perche la pace da sola non produce grano. Serve anche qualcosa che faccia rendere di piu la stessa fatica.'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'Che cosa muove la storia?',
       opzioni:['Le decisioni di chi comanda', 'Le condizioni materiali di tutti'],
       parlato:'Fai schierare e conta. Di solito la prima opzione vince nettamente: e la storia che hanno studiato, fatta di re e di date.\n\nPoi metti sul tavolo tre oggetti, uno per volta, senza dire ancora a che cosa servono. Un collare di cuoio rigido. Un aratro con una lama ricurva. Un campo diviso in tre parti invece che in due.\n\nChiedi: che cosa possono aver cambiato?\n\nLascia che tentino. Poi comincia dal collare, che e il piu sorprendente e il piu semplice: prima si attaccava il carico al collo del cavallo con una cinghia che, appena l\'animale tirava, gli stringeva la gola. Piu tirava, meno respirava. Il collare rigido sposta lo sforzo sulle spalle: lo stesso cavallo, dallo stesso giorno, tira quattro volte tanto.\n\nÈ una cinghia di cuoio spostata di quaranta centimetri, e vale piu di un imperatore.',
       seDicono:[
         {loro:'«Non ci credo che un collare cambi la storia.»',
          tu:'Facciamo il conto. Un cavallo con collare ara in un giorno quello che un bue fa in due, e cammina piu in fretta. Moltiplica per milioni di contadini e per trecento anni. Le grandi conseguenze non hanno bisogno di grandi cause: hanno bisogno di piccole cause ripetute molte volte.'},
         {loro:'«Ma qualcuno queste cose le avra inventate: sono uomini anche loro.»',
          tu:'Giusto, e non ne conosciamo il nome. Nessuna cronaca registra chi ha messo il primo collare a spalla. La storia che ricordiamo e fatta di chi aveva uno scrivano; quella che ci ha cambiato la vita spesso no.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Gli altri due.\n\nL\'ARATRO PESANTE, con il versoio,\nnon graffia la terra: la rivolta.\nCosi si possono coltivare i suoli grassi del Nord,\nche l\'aratro romano non scalfiva.\n\nLA ROTAZIONE TRIENNALE:\ndue campi coltivati e uno a riposo,\nal posto di uno e uno.\nDal 50 al 66 per cento di terra produttiva.\nE nel campo di primavera si seminano legumi:\nproteine, e azoto che torna nel terreno.\n\nE poi i MULINI.\nNel 1086, in Inghilterra, se ne contano 5.624.',
       parlato:'Dai le tre cose con calma e fai fare i conti a loro dove si puo: dal cinquanta al sessantasei per cento e un terzo di terra in piu ogni anno, sempre.\n\nSui mulini insisti, perche il dato del Domesday Book impressiona sempre: cinquemilaseicento mulini ad acqua in una sola isola, censiti uno per uno. E poi chiedi che cosa facevano prima: macinare a mano, ogni giorno, per ore, ed era lavoro quasi sempre femminile. Il mulino restituisce a milioni di persone alcune ore al giorno.\n\nA questo punto pero devi complicare, o la lezione diventa una favola tecnologica. Il collare, l\'aratro e il mulino esistevano gia da tempo in qualche forma: perche si diffondono adesso?\n\nPerche finiscono le invasioni; perche il clima si scalda di qualche grado fra il 950 e il 1250, al punto che si coltiva la vite in Inghilterra; perche i signori offrono terra e franchigie a chi va a dissodare. Nessuna causa, da sola, spiega niente.',
       seDicono:[
         {loro:'«Allora e stato il clima.»',
          tu:'Il clima da solo scalda anche i campi di chi non ha l\'aratro giusto. E gli stessi attrezzi, in un secolo di scorrerie, non servono a niente perche nessuno semina. Le cause storiche funzionano quasi sempre cosi: nessuna basta, tutte insieme spiegano.'},
         {loro:'«Ma la gente stava comunque malissimo.»',
          tu:'Rispetto a noi, si. Rispetto a un secolo prima, no — e la differenza si misura: meno carestie, piu figli che arrivano all\'eta adulta, villaggi nuovi dove c\'era foresta. Il progresso storico non e il benessere: e una curva che cambia direzione.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'La conseguenza, in una catena.\n\nPiu cibo\n→ non tutti servono nei campi\n→ chi avanza va in citta\n→ in citta si fabbrica e si vende\n→ per vendere serve moneta\n→ nel 1252 Firenze conia il fiorino d\'oro\n→ per non portare oro sulle strade si inventa\n   la lettera di cambio\n→ e siccome la Chiesa vieta il prestito a interesse,\n   l\'interesse si nasconde nel cambio fra due monete.\n\nE nelle citta vale una regola:\n\n«L\'aria della citta rende liberi.»\nUn anno e un giorno dentro le mura,\ne il servo fuggito non e piu di nessuno.',
       testo:{fonte:'Formula attestata nelle citta dell\'Impero, XII-XIII secolo; il fiorino e del 1252',
              glossa:'La catena va letta al contrario per capirla: senza il collare non c\'e surplus, senza surplus non ci sono citta, senza citta non c\'e mercato, senza mercato non serve la moneta d\'oro. Ogni anello dipende dal precedente, e il primo e un pezzo di cuoio.'},
       parlato:'Costruisci la catena una freccia per volta, chiedendo a loro il passaggio successivo prima di mostrarlo. Riesce quasi sempre fino alla moneta; sulla lettera di cambio si fermano.\n\nSulla regola dell\'anno e un giorno vale la pena rallentare: e una delle cose che gli studenti ricordano per anni. Un servo che scappa in citta e non viene reclamato entro un anno e un giorno diventa libero. Non e un\'idea di liberta astratta — e una regola pratica che rende costoso al signore trattare male i propri contadini.\n\nE fai notare l\'ironia dell\'usura: il divieto religioso non ferma il prestito, lo rende piu sofisticato. Il piu potente strumento finanziario del Medioevo nasce come modo elegante di aggirare una proibizione.',
       seDicono:[
         {loro:'«Quindi la Chiesa frenava il progresso.»',
          tu:'In parte lo frenava e in parte lo faceva: i cistercensi bonificano mezza Europa. E il divieto dell\'usura ha prodotto strumenti finanziari che senza divieto non sarebbero esistiti. Le istituzioni raramente sono solo un freno o solo un motore.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Due cose che quasi nessuno vi ha detto.\n\nPRIMA. I «terrori dell\'anno Mille» —\nl\'Europa in ginocchio che aspetta la fine del mondo —\nnon esistono nelle fonti dell\'epoca.\nSono un\'invenzione di storici dell\'Ottocento.\nLa maggior parte della gente non sapeva\nnemmeno in che anno vivesse.\n\nSECONDA. Il mulino non era di tutti.\nEra del signore, e i contadini erano obbligati\na macinare li e a pagare.\nSi chiamavano banalita, e valevano anche\nper il forno e per il torchio.\n\nLa stessa tecnica che libera tempo\ncrea un nuovo modo di prendere.',
       parlato:'Dai la prima notizia e lascia che protestino: quasi tutti hanno sentito raccontare dei terrori dell\'anno Mille. Spiega da dove viene — dalla storiografia romantica dell\'Ottocento, che cercava un Medioevo cupo da contrapporre alla modernita — e che i cronisti del tempo non ne parlano. In molti luoghi l\'anno cominciava a Natale, a Pasqua o il 25 marzo: non c\'era nemmeno accordo su quando fosse il Mille.\n\nÈ un\'occasione ottima per far vedere come nasce un fatto storico falso e perche resiste: perche e una bella storia, e perche serve a qualcuno.\n\nPoi la seconda, che e piu importante e meno nota: le banalita. Il mulino, il forno, il torchio sono monopoli signorili. Il contadino risparmia ore di macinatura e le paga in farina. La tecnica che libera e la stessa che crea un nuovo obbligo — e questo schema, dice qualunque storico dell\'economia, si ripetera ogni volta.',
       seDicono:[
         {loro:'«Allora non e stato un progresso, era solo sfruttamento diverso.»',
          tu:'Le due cose stanno insieme, ed e questo il punto. La popolazione raddoppia davvero e la dipendenza cambia forma davvero. Una storia seria non deve scegliere fra le due: deve reggerle tutte e due nella stessa frase.'},
         {loro:'«Come fanno a sapere che i terrori non ci sono stati?»',
          tu:'Domanda giusta, ed e il mestiere: si vanno a guardare le cronache scritte fra il 990 e il 1010, e non ne parlano. Provate voi a chiedervi, ogni volta che vi raccontano un fatto storico spettacolare, chi lo ha scritto e quando.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'All\'inizio avete detto imperatori, papi, crociate.\n\nLe cause principali sono un collare di cuoio,\nun aratro con la lama ricurva,\nun campo diviso in tre\ne un mulino sul fiume.\n\nNessuno sa chi li abbia inventati.\nNessuno ha scritto la loro data.\n\nUltima domanda, e riguarda voi:\n\nquale oggetto della vostra vita quotidiana\nrisultera, fra trecento anni,\npiu importante di qualunque politico di oggi?\n\nE come fate a saperlo adesso?',
       parlato:'Rifai la conta dello schieramento: si sposta quasi sempre, e conviene mostrarlo.\n\nPoi la domanda finale. Raccogli qualche proposta a voce — di solito escono telefono, internet, pannelli solari, antibiotici — e chiedi ogni volta la stessa cosa: e come faresti a saperlo adesso?\n\nLa risposta onesta e che non si sa, e che i contemporanei sbagliano quasi sempre. Nel Mille nessuno scriveva cronache sui collari.\n\nChiudi con la conseguenza per il loro modo di studiare, detta una volta sola: quando in un manuale trovate una data e un nome, chiedetevi anche che cosa mangiava la gente quell\'anno, e con quali attrezzi. Le due storie insieme sono una storia sola.\n\nE annuncia la prossima: la stessa Europa che cresce sta per spaccarsi in due sulla domanda di chi comandi davvero — papa o imperatore.',
       seDicono:[
         {loro:'«Allora le date e i re non servono a niente?»',
          tu:'Servono, e la battaglia di Lechfeld nel 955 e una di quelle cause vere: senza la fine delle incursioni ungare non si semina. Il punto non e buttare i nomi, e smettere di credere che siano tutta la spiegazione.'}
       ]}
    ],
    riserve:[
      {titolo:'Il collare, in dettaglio',
       corpo:'Nel mondo antico il cavallo si attaccava al carico con una cinghia che passava intorno al collo. Quando l\'animale tirava con forza, la cinghia gli comprimeva la trachea e le vene: piu si sforzava, meno respirava. Il risultato e che un cavallo antico poteva trainare una frazione di quello che le sue zampe avrebbero consentito.\n\nIl collare rigido, imbottito e appoggiato sulle spalle, sposta la trazione sulla struttura ossea. Le stime piu prudenti parlano di un aumento di quattro o cinque volte della forza utile.\n\nAggiungi la ferratura, che permette al cavallo di lavorare su terreni duri senza consumarsi gli zoccoli, e il cavallo sostituisce il bue: piu forte, e soprattutto piu veloce.',
       chiedi:'Un oggetto che nessuno ha brevettato, di cui non conosciamo l\'inventore e che non compare in nessuna cronaca. Perche la storia registra le battaglie e non i collari? E che cosa dice, questo, di chi scriveva le cronache?'},
      {titolo:'I terrori che non ci furono',
       corpo:'L\'immagine di un\'Europa terrorizzata dall\'approssimarsi del Mille — folle in preghiera, terre lasciate incolte, attesa dell\'Anticristo — nasce nell\'Ottocento, soprattutto con lo storico francese Jules Michelet.\n\nLe fonti contemporanee non la confermano. Nell\'anno Mille il calendario non era uniforme: in alcune regioni l\'anno cominciava a Natale, in altre il 25 marzo, in altre a Pasqua. La maggior parte della popolazione era analfabeta e non aveva nessun modo di sapere in che anno si trovasse.\n\nCi furono attese apocalittiche, ma sparse nel tempo e legate a carestie o comete, non a una data.',
       chiedi:'La storia falsa e sopravvissuta due secoli. Perche funzionava cosi bene? A chi serviva un Medioevo terrorizzato — e a chi serve, oggi, raccontare che un\'epoca era buia?'},
      {titolo:'Il tempo del mercante',
       corpo:'Per chi lavora la terra il tempo e stagionale e non si misura: si semina quando e ora. Per la Chiesa e scandito dalle campane, e le ore cambiano lunghezza con le stagioni perche si divide in dodici la luce del giorno.\n\nPer il mercante che presta denaro il tempo diventa una quantita: un mese in piu di prestito e un guadagno in piu. Ma la Chiesa insegnava che il tempo appartiene a Dio e non si puo vendere — e questo, non solo il divieto dell\'usura, e il vero scandalo del prestito a interesse.\n\nNel Trecento compaiono sulle torri civiche i primi orologi meccanici. Le ore diventano tutte uguali, e le suona il Comune, non la chiesa.',
       chiedi:'Chi controlla la misura del tempo controlla qualcosa di importante: che cosa, esattamente? E oggi chi decide il ritmo delle vostre giornate — voi, la scuola, o qualcosa che sta in tasca?'}
    ],
    testi:[
      {fonte:'Adalberone di Laon, Carmen ad Robertum regem, circa 1025',
       corpo:'«La societa dei fedeli forma un solo corpo, ma lo Stato ne comprende tre. Gli uni pregano, gli altri combattono, gli altri lavorano. Questi tre ordini vivono insieme e non sopportano di essere separati.»',
       glossa:'Da leggere insieme alla data: mentre il vescovo descrive una societa a tre ordini come se fosse eterna, nelle citta sta gia crescendo un ceto che non prega, non combatte e non ara. Le rappresentazioni della societa sono quasi sempre in ritardo sulla societa.'},
      {fonte:'Domesday Book, 1086 — il censimento normanno d\'Inghilterra',
       corpo:'Il registro voluto da Guglielmo il Conquistatore descrive terre, uomini, animali e impianti di quasi tutta l\'Inghilterra. Vi sono censiti 5.624 mulini ad acqua, distribuiti in circa tremila localita.',
       glossa:'È il documento che permette di trasformare un\'impressione in un numero. Utile anche per un\'altra ragione: un re che vuole sapere esattamente che cosa possiede e gia un\'idea moderna di Stato, e siamo nel 1086.'},
      {fonte:'Carta di franchigia — formula ricorrente nei documenti comunali',
       corpo:'Chi ha abitato la citta per un anno e un giorno senza essere reclamato dal proprio signore e considerato libero, e nessuno puo ricondurlo in servitu.',
       glossa:'La formula esiste in molte varianti locali; la versione tedesca «Stadtluft macht frei» e diventata proverbiale. Fai notare che non e una dichiarazione di principio ma una norma di procedura: la liberta medievale si conquista quasi sempre cosi, come esenzione scritta e non come diritto universale.'}
    ],
    compito:'Mezza pagina. Scegliete un oggetto che usate ogni giorno e provate a ricostruire che cosa succederebbe se sparisse — non a voi soltanto, ma a tutti, per trecento anni. Chi ci guadagnerebbe, chi ci perderebbe, che mestieri sparirebbero e quali nascerebbero. Non serve indovinare: serve accorgersi di quante cose dipendono da un oggetto che non guardate mai.',
    fonti:[
      'G. Duby, L\'economia rurale nell\'Europa medievale; Le tre societa dell\'anno Mille',
      'L. White jr., Tecnica e societa nel Medioevo (1962) — collare, staffa, aratro, mulino',
      'J. Le Goff, Tempo della Chiesa e tempo del mercante; Il basso Medioevo',
      'C. Cipolla, Storia economica dell\'Europa preindustriale — le stime demografiche',
      'Domesday Book (1086); Adalberone di Laon, Carmen ad Robertum regem',
      'Sui terrori dell\'anno Mille: J. Michelet, Histoire de France (1833) e la revisione di G. Duby, L\'anno Mille'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Storia medievale · 2 — La lotta per le investiture': {
  mappa: {
    n:'La lotta per le investiture', d:'1075-1122: chi comanda sui vescovi comanda sull\'Europa',
    f:[
      {r:'parte da', n:'Una Chiesa dentro il potere laico', d:'la situazione che sembrava normale a tutti',
       f:[
         {r:'con la', n:'Simonia', d:'cariche ecclesiastiche comprate e vendute come beni',
          f:[{piu:true, r:'dal nome di', n:'Simon Mago', d:'che negli Atti degli apostoli offre denaro per avere lo Spirito'}]},
         {r:'con il', n:'Nicolaismo', d:'preti sposati o conviventi: e i figli ereditano la parrocchia'},
         {r:'con le', n:'Chiese private', d:'chi costruisce una chiesa sulla propria terra ne nomina il prete'},
         {r:'e con', n:'Il papato in mano alle famiglie romane', d:'Crescenzi, Tuscolani: il soglio come proprieta di clan',
          f:[{piu:true, r:'tocca il fondo con', n:'Benedetto IX', d:'papa tre volte, e una volta vende la carica'}]},
         {r:'tanto che', n:'L\'imperatore nomina i papi', d:'e a Sutri, nel 1046, Enrico III ne depone tre insieme',
          f:[{r:'ed e visto come', n:'Un intervento salutare', d:'il riformatore, all\'inizio, e l\'imperatore stesso'}]}
       ]},

      {r:'incontra', n:'La riforma della Chiesa', d:'un movimento partito dal basso e dai monasteri',
       f:[
         {r:'nasce a', n:'Cluny', d:'abbazia fondata nel 910 e dipendente solo dal papa',
          f:[{r:'perche', n:'Sottratta a ogni signore laico', d:'e il modello: l\'indipendenza produce riforma'}]},
         {r:'si diffonde con', n:'La Pataria', d:'Milano: popolo e clero minore contro i vescovi simoniaci',
          f:[{piu:true, r:'il nome', n:'Forse dai rigattieri', d:'un soprannome spregiativo, poi rivendicato'}]},
         {r:'arriva al papato con', n:'Leone IX', d:'1049: viaggia, convoca sinodi, depone vescovi simoniaci'},
         {r:'e ottiene il', n:'Decretum in nomine Domini', d:'1059: il papa lo eleggono i cardinali, non l\'imperatore e non i romani',
          f:[{r:'e la mossa', n:'Che rende possibile tutto il resto', d:'senza autonomia dell\'elezione non c\'e conflitto'}]}
       ]},

      {r:'esplode con', n:'Gregorio VII', d:'Ildebrando di Soana, papa dal 1073',
       f:[
         {r:'proclama il', n:'Dictatus papae', d:'1075: ventisette proposizioni, brevissime, senza commento',
          f:[{r:'fra cui', n:'Solo il papa e universale', d:'e solo lui puo deporre i vescovi'},
             {r:'fra cui', n:'Puo deporre l\'imperatore', d:'e sciogliere i sudditi dal giuramento di fedelta'},
             {r:'fra cui', n:'La Chiesa romana non ha mai errato', d:'ne mai errera'},
             {piu:true, r:'ed e', n:'Un elenco senza destinatario', d:'forse appunti interni, forse un programma: gli storici discutono'}]},
         {r:'vieta', n:'L\'investitura laica', d:'nessun laico puo consegnare anello e pastorale a un vescovo'},
         {r:'e cosi tocca', n:'Il nervo dell\'Impero', d:'perche i vescovi tedeschi non sono solo preti'}
       ]},

      {r:'perche', n:'I vescovi sono l\'amministrazione', d:'e questo spiega perche la lite diventa una guerra',
       f:[
         {r:'possiedono', n:'Terre, citta, tribunali', d:'contee intere, con diritti di giustizia e di pedaggio'},
         {r:'forniscono', n:'Soldati all\'imperatore', d:'una parte decisiva dell\'esercito imperiale'},
         {r:'e sono', n:'Senza eredi', d:'non trasmettono la carica ai figli: per l\'imperatore sono funzionari ideali',
          f:[{r:'e la si chiama', n:'Chiesa imperiale', d:'Reichskirche: il sistema con cui l\'Impero si governa',
              f:[{piu:true, r:'costruito da', n:'Ottone I', d:'un secolo prima, e funziona benissimo'}]}]},
         {r:'quindi perderli', n:'Vuol dire perdere lo Stato', d:'non e una questione religiosa: e la struttura del potere'}
       ]},

      {r:'porta allo scontro con', n:'Enrico IV', d:'e la crisi precipita in due anni',
       f:[
         {r:'nel gennaio', n:'Dieta di Worms 1076', d:'i vescovi tedeschi dichiarano Gregorio decaduto',
          f:[{r:'con la lettera', n:'«Scendi, scendi»', d:'«Enrico re non per usurpazione ma per pia ordinazione di Dio, a Ildebrando, non piu papa ma falso monaco»'}]},
         {r:'in febbraio', n:'La scomunica', d:'e Gregorio scioglie i sudditi dal giuramento di fedelta'},
         {r:'e in ottobre', n:'I principi tedeschi danno l\'ultimatum', d:'Tribur: se non e assolto entro un anno, viene deposto',
          f:[{r:'perche', n:'La scomunica e un\'occasione', d:'i grandi feudatari volevano da tempo un re piu debole'}]},
         {r:'nel gennaio', n:'Canossa 1077', d:'tre giorni davanti al castello di Matilde, in veste di penitente'}
       ]},

      {r:'ma Canossa', n:'Non e quello che sembra', d:'e la scena piu fraintesa del Medioevo',
       f:[
         {r:'perche Gregorio', n:'Stava andando in Germania', d:'a presiedere l\'assemblea che avrebbe deposto Enrico'},
         {r:'e Enrico', n:'Gli taglia la strada', d:'attraversa le Alpi in pieno inverno con moglie e figlio'},
         {r:'presentandosi come', n:'Penitente', d:'e un sacerdote non puo rifiutare l\'assoluzione a chi si pente',
          f:[{r:'quindi', n:'Il papa e costretto ad assolvere', d:'e lo scrive lui stesso, con evidente fastidio'},
             {piu:true, r:'lo riferisce', n:'Nella lettera ai principi tedeschi', d:'dove si giustifica per aver ceduto'}]},
         {r:'e assolto', n:'Enrico recupera la legittimita', d:'i principi perdono il pretesto e lui torna a combattere'},
         {r:'infatti', n:'La guerra riprende subito', d:'e va tutta a favore di Enrico',
          f:[{r:'nel 1080', n:'Nomina l\'antipapa Clemente III'},
             {r:'nel 1084', n:'Si fa incoronare a Roma', d:'da quell\'antipapa'},
             {r:'nel 1085', n:'Gregorio muore in esilio', d:'a Salerno, protetto dai Normanni che avevano saccheggiato Roma',
              f:[{piu:true, r:'le sue ultime parole', n:'«Ho amato la giustizia e odiato l\'iniquita»', d:'«per questo muoio in esilio»'}]}]}
       ]},

      {r:'si chiude con', n:'Il concordato di Worms', d:'1122: cinquant\'anni dopo, e con un compromesso tecnico',
       f:[
         {r:'divide il vescovo in due', n:'Investitura spirituale', d:'anello e pastorale: li da la Chiesa'},
         {r:'e', n:'Investitura temporale', d:'lo scettro, cioe i feudi: li da l\'imperatore'},
         {r:'con ordini diversi', n:'In Germania e in Italia', d:'in Germania prima lo scettro, in Italia prima anello e pastorale',
          f:[{piu:true, r:'differenza non da poco', n:'Chi va per primo controlla la scelta', d:'in Germania l\'imperatore resta di fatto decisivo'}]},
         {r:'e stabilisce', n:'Elezione da parte del clero', d:'ma alla presenza dell\'imperatore, in Germania'}
       ]},

      {r:'lascia', n:'Che cosa cambia davvero', d:'molto piu di quanto il compromesso lasci pensare',
       f:[
         {r:'nasce l\'idea di', n:'Due poteri distinti', d:'nessuno dei due assorbe l\'altro: e una novita europea'},
         {r:'l\'Impero perde', n:'Il carattere sacro', d:'il re non e piu un unto quasi sacerdote: e un laico fra i laici'},
         {r:'la Chiesa diventa', n:'Una monarchia', d:'centralizzata, con un diritto proprio e una burocrazia',
          f:[{r:'e nasce', n:'Il diritto canonico', d:'con il Decretum di Graziano, circa 1140'}]},
         {r:'in Germania crescono', n:'I principi territoriali', d:'ogni crisi fra papa e imperatore li rende piu forti'},
         {r:'e la scena resta', n:'Un simbolo riusato', d:'«andare a Canossa» diventa proverbio otto secoli dopo',
          f:[{r:'grazie a', n:'Bismarck, 1872', d:'«a Canossa non andremo», nel conflitto con la Chiesa cattolica'}]}
       ]}
    ],
    incroci:[
      {da:'Decretum in nomine Domini', a:'Dictatus papae', r:'e la condizione che rende possibile il',
       perche:'Finche il papa lo sceglie l\'imperatore, nessun papa puo scrivere che il papa depone l\'imperatore. Il decreto del 1059 sull\'elezione da parte dei cardinali sposta il fondamento: sedici anni dopo, quel fondamento regge il documento piu audace del Medioevo.'},
      {da:'Senza eredi', a:'L\'investitura laica', r:'spiega perche l\'imperatore non puo rinunciare a',
       perche:'Un vescovo non trasmette la carica ai figli: alla sua morte tutto torna al sovrano. E il funzionario perfetto in un mondo in cui ogni carica tende a diventare ereditaria — ed e per questo che rinunciare a nominarlo equivale a smontare lo Stato.'},
      {da:'La scomunica e un\'occasione', a:'I principi territoriali', r:'anticipa la crescita dei',
       perche:'I grandi feudatari tedeschi non difendono la Chiesa: usano la scomunica per indebolire il re. Ogni scontro fra i due poteri universali lascia piu spazio ai poteri locali, ed e la ragione per cui la Germania non diventera uno Stato unitario.'},
      {da:'Penitente', a:'Il papa e costretto ad assolvere', r:'e la mossa che produce',
       perche:'Enrico non si presenta come re sconfitto ma come peccatore pentito, e sceglie il solo terreno su cui Gregorio non ha liberta di manovra: un sacerdote non puo negare l\'assoluzione a chi si pente. La debolezza apparente e la posizione piu forte disponibile.'},
      {da:'Stava andando in Germania', a:'Gli taglia la strada', r:'e ribaltato da',
       perche:'Il papa era in viaggio verso l\'assemblea che avrebbe deposto il re. Enrico attraversa le Alpi in inverno per intercettarlo prima: a Canossa non arriva un uomo che si arrende, arriva un uomo che ha fatto una traversata alpina per impedire un processo.'},
      {da:'Enrico recupera la legittimita', a:'La guerra riprende subito', r:'apre',
       perche:'Assolto, non e piu scomunicato e i principi perdono il pretesto giuridico per deporlo. Da quel momento la guerra civile tedesca si sposta a suo favore — e in sette anni entrera a Roma con un papa di sua nomina.'},
      {da:'Investitura spirituale', a:'Due poteri distinti', r:'e la prima formulazione tecnica di',
       perche:'Dividere il vescovo in due — anello e pastorale da una parte, scettro dall\'altra — sembra un cavillo notarile. E invece e la prima volta che si scrive che una stessa persona ha due qualita separabili, e da li nascera la distinzione fra sfera religiosa e sfera civile.'},
      {da:'Il carattere sacro', a:'«Scendi, scendi»', r:'comincia a incrinarsi gia con',
       perche:'Un re che scrive al papa dandogli del falso monaco, e un papa che scioglie i sudditi dal giuramento, si tolgono a vicenda l\'aura. Dopo quello scambio nessuno dei due potra piu presentarsi come intoccabile senza che qualcuno ricordi il 1076.'},
      {da:'Chiesa imperiale', a:'Vuol dire perdere lo Stato', r:'e il sistema il cui crollo',
       perche:'La Reichskirche costruita da Ottone I era l\'ossatura amministrativa dell\'Impero. Toccare la nomina dei vescovi non significava discutere di liturgia: significava chiedere all\'imperatore di rinunciare al proprio apparato di governo.'},
      {da:'Sottratta a ogni signore laico', a:'L\'investitura laica', r:'e il modello che porta a vietare',
       perche:'Cluny dimostra per due secoli che un\'istituzione religiosa indipendente da ogni potere locale funziona meglio. Il divieto del 1075 non e un\'invenzione improvvisa: e l\'estensione a tutta la Chiesa di un esperimento monastico riuscito.'},
      {da:'Bismarck, 1872', a:'Canossa 1077', r:'trasforma in proverbio',
       perche:'La frase «a Canossa non andremo» viene pronunciata al Reichstag durante il Kulturkampf, ottocento anni dopo i fatti. L\'espressione che usiamo per dire umiliazione non nasce nel Medioevo: nasce da un altro conflitto fra Stato e Chiesa che aveva bisogno di un precedente.'},
      {da:'Il diritto canonico', a:'Una monarchia', r:'e lo strumento con cui la Chiesa diventa',
       perche:'Una monarchia ha bisogno di leggi proprie, tribunali e archivi. Il Decretum di Graziano, vent\'anni dopo Worms, mette ordine in secoli di norme sparse: da li in poi la Chiesa non e solo un\'autorita morale, e un\'istituzione giuridica che funziona.'}
    ]
  },
  provocazione: {
    titolo:'Tre giorni nella neve',
    durata:'55 minuti',
    domandaMadre:'Chi ha vinto davvero — e come fate a saperlo?',
    perche:'Canossa e la scena piu conosciuta del Medioevo e viene raccontata al contrario: l\'imperatore in ginocchio nella neve sembra una resa, ed e invece una mossa politica riuscita che salva il trono e prepara sette anni di vittorie. La classe si accorge, con un caso preciso, che le immagini storiche piu forti sono spesso propaganda di chi ha perso — e che per verificarlo bastano tre domande semplici: che cosa succede dopo, chi ha scritto la fonte, e quando e nata l\'espressione che usiamo. L\'ora insegna un metodo, non un aneddoto.',
    occorrente:'Una cartina dell\'Europa dell\'XI secolo, se c\'e; altrimenti niente.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Gennaio 1077. Appennino emiliano, castello di Canossa.\n\nFuori dalla porta c\'e un uomo di ventisei anni,\na piedi nudi nella neve, vestito da penitente.\n\nDentro c\'e il papa, che si rifiuta di riceverlo.\n\nL\'uomo fuori resta li tre giorni.\n\nÈ Enrico IV, re di Germania,\nl\'uomo piu potente d\'Europa.\n\nChi ha vinto?',
       parlato:'Racconta la scena e fermati. Non aggiungere niente: e un\'immagine che si racconta da sola, ed e proprio questo il problema che affronterete.\n\nPoi la domanda, e chiedi la risposta d\'istinto per alzata di mano. Vince il papa quasi all\'unanimita — ed e la risposta che tutti danno da otto secoli.\n\nSegna il numero. Poi di\' una cosa sola, e vai avanti senza spiegarla: fra quaranta minuti rifaremo questa conta.\n\nSe qualcuno conosce gia il seguito e vuole parlare, chiedigli di aspettare: gli darai la parola al quarto tempo.',
       seDicono:[
         {loro:'«Ovvio, il papa: l\'imperatore si e umiliato.»',
          tu:'È quello che si vede. Ma tieni una domanda in tasca per tutta l\'ora: chi ha vinto lo si giudica da come uno sta in quel momento, o da come stanno tutti e due cinque anni dopo?'},
         {loro:'«Ma perche il papa non lo faceva entrare?»',
          tu:'Domanda ottima e ci arriviamo. Anticipo solo questo: perche far entrare Enrico gli costava carissimo, e lui lo sapeva benissimo.'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'La posta in gioco non e la fede.\n\nIn Germania i vescovi non sono solo preti:\npossiedono contee, citta, tribunali,\ne forniscono all\'imperatore una parte del suo esercito.\n\nE non hanno figli:\nquando muoiono, tutto torna al sovrano.\n\nSono i funzionari perfetti\nin un mondo dove ogni carica diventa ereditaria.\n\nNel 1075 il papa vieta all\'imperatore di nominarli.',
       opzioni:['È una questione religiosa', 'È una questione di potere'],
       parlato:'Prima di far schierare, assicurati che abbiano capito il meccanismo, perche tutta l\'ora dipende da questo: il vescovo tedesco e un funzionario dello Stato che si chiama Reichskirche, costruito da Ottone I un secolo prima. Toglierlo all\'imperatore non significa discutere di liturgia — significa smontargli l\'amministrazione.\n\nPoi fai schierare e conta. Di solito prevale nettamente la seconda, e va bene: ma allora chiedi perche il papa usi armi religiose, e perche funzionino.\n\nÈ il punto in cui capiscono che le due cose non si separano: la scomunica e efficace perche i principi tedeschi credono davvero — e insieme perche a loro conviene che il re sia debole.',
       seDicono:[
         {loro:'«Allora la religione era solo una scusa.»',
          tu:'Se fosse solo una scusa, la scomunica non avrebbe fatto effetto su nessuno. Funziona perche la gente ci crede, e viene usata perche conviene. Le due cose stanno insieme quasi sempre, ed e la ragione per cui la storia e piu difficile della polemica.'},
         {loro:'«Perche i principi tedeschi si mettono contro il proprio re?»',
          tu:'Perche un re scomunicato e un re debole, e loro volevano da tempo comandare a casa propria. Segnatelo: e la ragione per cui la Germania non diventera uno Stato unitario per altri ottocento anni.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Che cosa stava succedendo davvero, quel gennaio.\n\nEnrico e scomunicato da un anno.\nI principi tedeschi gli hanno dato un ultimatum:\nse non ottiene l\'assoluzione entro un anno, lo depongono.\n\nE il papa, in quel momento, non e a Roma:\nsta salendo verso la Germania,\ndove presiedera l\'assemblea che deve deporlo.\n\nEnrico attraversa le Alpi in pieno inverno,\ncon la moglie e il figlio piccolo,\nper intercettarlo prima che arrivi.\n\nE si presenta come penitente.',
       parlato:'Costruisci il quadro un pezzo per volta. Quando arrivi alla traversata delle Alpi in gennaio, con la famiglia, fermati: non e il viaggio di un uomo che si arrende.\n\nPoi il passaggio decisivo, e chiedi a loro di trovarlo prima di darlo. Domanda: se ti presenti davanti a un sacerdote come peccatore pentito, quel sacerdote che cosa e obbligato a fare?\n\nQuasi sempre qualcuno lo dice: deve assolverti.\n\nEcco la mossa. Enrico sceglie l\'unico terreno su cui Gregorio non ha liberta: non come re che tratta, ma come cristiano che si pente. Rifiutare l\'assoluzione avrebbe distrutto la credibilita del papa riformatore, che aveva costruito tutta la propria autorita sul dovere sacerdotale.\n\nGregorio assolve. E lo scrive lui stesso ai principi tedeschi, giustificandosi.',
       seDicono:[
         {loro:'«Quindi era tutta una finta? Non si e pentito davvero?»',
          tu:'Non lo sappiamo e forse non conta: nel Medioevo un gesto pubblico vale per quello che produce, non per quello che uno sente. Ma nota il dettaglio: si e presentato con i vestiti giusti, nel posto giusto, nel momento giusto per bloccare un processo. La sincerita non e mai stata cosi tempestiva.'},
         {loro:'«Il papa poteva rifiutare e basta.»',
          tu:'Poteva, e avrebbe perso. Il suo potere si fondava sull\'idea che il sacerdote agisce per conto di Dio e non per interesse. Negare l\'assoluzione a un penitente lo avrebbe trasformato in quello che i suoi nemici dicevano che fosse: un politico travestito da monaco.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'Un anno prima, dalla dieta di Worms.\n\n«Enrico, re non per usurpazione\nma per pia ordinazione di Dio,\na Ildebrando, non piu papa ma falso monaco.\n\n[…] Io, Enrico, re per grazia di Dio,\ninsieme a tutti i nostri vescovi, ti dico:\nscendi, scendi!»\n\nE dal Dictatus papae, dell\'anno prima ancora:\n\n«Al solo papa e lecito deporre gli imperatori.»\n«Puo sciogliere i sudditi dal giuramento di fedelta\nverso gli iniqui.»\n«La Chiesa romana non ha mai errato,\nne mai errera in eterno.»',
       testo:{fonte:'Lettera di Enrico IV, Worms, gennaio 1076; Dictatus papae, marzo 1075',
              glossa:'Metti i due testi uno accanto all\'altro e guarda le date: 1075 e 1076. Non e uno scontro nato per caso — sono due programmi massimalisti scritti a un anno di distanza, ciascuno dei quali rende l\'altro impossibile. Canossa non e l\'inizio della crisi: e la prima manovra dentro una guerra gia dichiarata.'},
       parlato:'Leggi la lettera di Enrico ad alta voce, con il tono che merita: e un documento aggressivo, e sorprende sempre chi immagina un re remissivo. «Scendi, scendi» — in latino descende, descende.\n\nPoi il Dictatus papae. Non leggerlo tutto: tre proposizioni bastano, e sono quelle che nessuno prima aveva osato scrivere. Fai notare la forma — frasi brevissime, senza argomenti, senza destinatario. Gli storici discutono ancora se fossero appunti privati o un manifesto.\n\nInfine la domanda utile: dopo due testi cosi, era possibile una soluzione che non fosse la guerra? E infatti la guerra ci sara, per quarantasette anni.',
       seDicono:[
         {loro:'«Il papa esagera: da dove tira fuori il potere di deporre un imperatore?»',
          tu:'Da un\'idea precisa: se il papa risponde delle anime e l\'imperatore e un\'anima, allora il papa puo giudicarlo. È una deduzione, non un capriccio — ed e il motivo per cui non si poteva liquidare con un\'alzata di spalle.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Che cosa succede dopo Canossa.\n\n1077 — Assolto, Enrico torna in Germania\ne i principi perdono il pretesto per deporlo.\nRicomincia la guerra civile, e la vince.\n\n1080 — Nomina un papa suo: l\'antipapa Clemente III.\n\n1084 — Entra a Roma e si fa incoronare imperatore\nda quel papa. Gregorio e assediato in Castel Sant\'Angelo.\n\n1085 — Gregorio VII muore in esilio a Salerno.\nLe sue ultime parole: «Ho amato la giustizia\ne odiato l\'iniquita: per questo muoio in esilio».\n\nA Canossa non aveva vinto il papa.',
       parlato:'Dai la cronologia una riga per volta e lascia che l\'effetto si costruisca da solo. La reazione tipica e incredulita: nessuno racconta mai il seguito.\n\nPoi la spiegazione, breve: l\'assoluzione toglieva ai principi tedeschi l\'unico appiglio giuridico. Un re scomunicato si puo deporre; un re assolto no. Enrico non aveva chiesto perdono per pentimento politico — aveva comprato la legittimita al prezzo di tre giorni di freddo.\n\nSe hai tempo, aggiungi il rovescio che complica di nuovo: la Chiesa perde la battaglia e vince la guerra lunga. Nel 1122, a Worms, il compromesso divide il vescovo in due — anello e pastorale alla Chiesa, scettro all\'imperatore — e quella divisione tecnica e il primo documento europeo in cui si scrive che due poteri sono distinti.\n\nChi vince, allora, dipende anche da quanto lontano si guarda.',
       seDicono:[
         {loro:'«Ma allora perche ci raccontano Canossa come una vittoria del papa?»',
          tu:'Perche l\'immagine e piu forte del seguito, e perche a molti e servita: alla Chiesa come esempio, e agli avversari della Chiesa come spauracchio. La domanda giusta e sempre la stessa — chi guadagna dal fatto che quella storia venga raccontata cosi?'},
         {loro:'«Allora chi ha vinto?»',
          tu:'Sul momento Enrico. Sui cinquant\'anni, un compromesso. Sui secoli, un\'idea che non aveva progettato nessuno dei due: che il potere religioso e quello politico siano due cose separate. È l\'esito piu importante, e non lo voleva nessuno.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Ultima cosa.\n\nL\'espressione «andare a Canossa»,\nche usiamo per dire umiliarsi,\nnon nasce nel Medioevo.\n\nLa pronuncia Bismarck al Reichstag nel 1872,\nottocento anni dopo,\ndurante il suo conflitto con la Chiesa cattolica:\n«A Canossa non andremo».\n\nLa parola che usate per raccontare quel gennaio\nvi e stata data da qualcuno\nche stava combattendo un\'altra guerra.\n\nRifacciamo la conta: chi ha vinto nel 1077?',
       parlato:'Rifai la votazione e mostra lo spostamento: e sempre netto.\n\nPoi chiudi con il metodo, che e la cosa da portare a casa. Tre domande da fare a qualunque immagine storica forte:\n\nche cosa succede dopo — perche la scena da sola non dice mai chi ha vinto;\nchi ha scritto la fonte — e che interesse aveva;\nquando e nata l\'espressione che usiamo — perche spesso e molto piu recente del fatto, e porta con se il conflitto di chi l\'ha coniata.\n\nUn\'ultima riga da lasciare senza risposta: quante scene che avete in testa — di storia, di cronaca, di politica — le avete ricevute gia raccontate da qualcuno che aveva un interesse a raccontarle cosi?\n\nE annuncia la prossima: fra vent\'anni dalla morte di Gregorio, centomila persone partiranno per Gerusalemme.',
       seDicono:[
         {loro:'«Quindi non ci si puo fidare di niente.»',
          tu:'Al contrario: ci si puo fidare di quello che si verifica. Oggi abbiamo verificato una scena famosa con tre domande semplici e ne abbiamo ricavato una storia piu vera. Il dubbio serve a controllare, non a rinunciare.'}
       ]}
    ],
    riserve:[
      {titolo:'Il Dictatus papae',
       corpo:'Nel marzo 1075 negli archivi papali viene registrato un elenco di ventisette proposizioni brevissime, senza commento e senza destinatario. Fra queste:\n\n«La Chiesa romana e stata fondata dal solo Signore.»\n«Il solo pontefice romano e detto a buon diritto universale.»\n«A lui solo e lecito deporre i vescovi e riammetterli.»\n«Gli e lecito deporre gli imperatori.»\n«Puo sciogliere i sudditi dal giuramento di fedelta verso gli iniqui.»\n«La Chiesa romana non ha mai errato, ne, come attesta la Scrittura, errera mai in eterno.»\n\nNon si sa con certezza se fosse un promemoria interno, un indice di una raccolta canonistica o un programma politico.',
       chiedi:'Ventisette frasi senza una riga di argomentazione. Perche scrivere cosi? E che differenza fa, per capire un documento, sapere se era destinato al pubblico o restava in un archivio?'},
      {titolo:'La Pataria di Milano',
       corpo:'A Milano, dagli anni Cinquanta dell\'XI secolo, un movimento di popolo e clero minore si scaglia contro i preti simoniaci e concubinari, arrivando a impedire fisicamente le loro celebrazioni. I capi — Arialdo, Landolfo, Erlembaldo — vengono uccisi o muoiono in scontri di piazza.\n\nIl nome «patarini» viene forse da pattari, i rigattieri del mercato: un soprannome spregiativo, poi rivendicato con orgoglio.\n\nIl papato riformatore li appoggia, perche gli servono; poi, quando il movimento diventa incontrollabile, prende le distanze.',
       chiedi:'Una riforma decisa in alto che si appoggia su un movimento di piazza, e poi lo abbandona. Riconoscete lo schema in altri momenti della storia? E che cosa succede, di solito, a chi ci ha messo il corpo?'},
      {titolo:'A Canossa non andremo',
       corpo:'Nel 1872 il cancelliere tedesco Otto von Bismarck e in pieno Kulturkampf, la sua battaglia contro l\'influenza della Chiesa cattolica nel nuovo Reich. Al Reichstag pronuncia la frase: «Non andremo a Canossa, ne con il corpo ne con lo spirito».\n\nDa quel discorso l\'espressione entra nelle lingue europee con il significato di umiliarsi davanti a un avversario.\n\nBismarck, va detto, qualche anno dopo tratto con il papa e ammorbidi buona parte delle leggi anticattoliche.',
       chiedi:'Un uomo politico usa un fatto di ottocento anni prima come slogan, e la sua frase diventa il modo in cui tutti ricordiamo quel fatto. Quante volte, secondo voi, capita che il passato ci arrivi cosi — gia confezionato da una polemica del presente?'}
    ],
    testi:[
      {fonte:'Gregorio VII, lettera ai principi tedeschi, 1077',
       corpo:'Il papa racconta ai principi che Enrico si e presentato «deposte le insegne regali, con aspetto miserevole, scalzo e vestito di lana», e che ha implorato per tre giorni. E aggiunge che alla fine, «vinti dalla insistenza della sua contrizione e dalle suppliche di tutti i presenti», ha dovuto sciogliere la scomunica.',
       glossa:'Il passaggio da far notare e «ha dovuto». Gregorio scrive ai principi tedeschi — cioe a chi si aspettava che deponesse Enrico — per giustificarsi di aver assolto. È la fonte principale su Canossa, ed e scritta da chi doveva spiegare perche non aveva vinto.'},
      {fonte:'Concordato di Worms, 23 settembre 1122',
       corpo:'L\'imperatore rinuncia all\'investitura «con l\'anello e il pastorale» e concede libera elezione e consacrazione. Il papa concede che le elezioni in Germania avvengano alla presenza dell\'imperatore, e che l\'eletto riceva da lui, «con lo scettro», i beni e i diritti temporali (le regalie).',
       glossa:'Sembra un cavillo notarile ed e uno dei documenti piu importanti della storia europea: e la prima volta che si mette per iscritto che una stessa persona ha due qualita distinte, una religiosa e una civile, che dipendono da autorita diverse.'},
      {fonte:'Cronaca di Lampert di Hersfeld, 1077',
       corpo:'Il cronista descrive Enrico che «depose le vesti regali, senza nulla di regale, senza alcuna insegna, a piedi nudi, digiuno dal mattino alla sera» davanti alla porta del castello, «e cosi il secondo e il terzo giorno».',
       glossa:'Attenzione alla fonte: Lampert e un monaco tedesco ostile a Enrico e vicino ai principi sassoni. La descrizione piu vivida e dettagliata della scena viene da un avversario del re — ed e quella che ha fatto scuola per otto secoli.'}
    ],
    compito:'Mezza pagina. Prendete un\'immagine storica famosa che conoscete — una qualunque, anche del Novecento — e provate ad applicarle le tre domande di oggi: che cosa e successo dopo, chi ha scritto o scattato quella fonte, quando e nata l\'espressione con cui la raccontiamo. Non serve smontarla: serve vedere se regge.',
    fonti:[
      'Dictatus papae (1075); lettera di Enrico IV da Worms (gennaio 1076); Concordato di Worms (1122)',
      'Lampert di Hersfeld, Annales, anno 1077; Gregorio VII, Registrum IV 12 (lettera ai principi tedeschi)',
      'G. Tabacco, La relazione fra i concetti di potere temporale e di potere spirituale nella tradizione cristiana',
      'O. Capitani, Storia dell\'Italia medievale; La riforma gregoriana e la lotta per le investiture',
      'H. Zimmermann, Der Canossagang von 1077',
      'Sul Kulturkampf: la seduta del Reichstag del 14 maggio 1872'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Storia medievale · 3 — Le crociate': {
  mappa: {
    n:'Le crociate', d:'1095-1291: duecento anni, e non una sola causa',
    f:[
      {r:'nasce da', n:'Molte premesse insieme', d:'nessuna delle quali, da sola, basta',
       f:[
         {r:'in Oriente', n:'Manzikert 1071', d:'i Turchi Selgiuchidi distruggono l\'esercito bizantino e prendono l\'Anatolia',
          f:[{r:'quindi', n:'Alessio I chiede aiuto', d:'l\'imperatore bizantino domanda mercenari, non un\'invasione'},
             {piu:true, r:'e otterra', n:'Molto piu di quanto voleva', d:'e se ne pentira presto'}]},
         {r:'in Occidente', n:'Una cavalleria in eccesso', d:'troppi guerrieri, poche terre da spartire',
          f:[{r:'perche vige', n:'La primogenitura', d:'il feudo va al primo figlio: gli altri restano senza'}]},
         {r:'la Chiesa cercava di', n:'Contenere la violenza', d:'con la Pace e la Tregua di Dio',
          f:[{r:'vietando di combattere', n:'In certi giorni e su certe persone', d:'dal mercoledi sera al lunedi, e mai su chierici e contadini'},
             {r:'ma', n:'Funzionava a meta', d:'e il problema restava: che cosa fare di migliaia di uomini armati'}]},
         {r:'e il papato', n:'Esce dalla lotta per le investiture', d:'con un\'autorita nuova e la voglia di guidare l\'Occidente'},
         {piu:true, r:'c\'era gia', n:'La reconquista spagnola', d:'e nel 1064 la spedizione di Barbastro: il modello esisteva'}
       ]},

      {r:'comincia a', n:'Clermont 1095', d:'27 novembre: il discorso di Urbano II',
       f:[
         {r:'promette', n:'L\'indulgenza', d:'chi parte per devozione, e non per gloria o denaro, e liberato dalla penitenza',
          f:[{r:'ed e la novita', n:'La guerra diventa penitenza', d:'per la prima volta combattere non danna: salva'}]},
         {r:'usa', n:'La croce cucita sulla veste', d:'da cui crux, croce: il nome viene dal gesto'},
         {r:'e la folla risponde', n:'«Deus le volt»', d:'Dio lo vuole'},
         {r:'ma il testo', n:'Non esiste', d:'ci sono cinque versioni del discorso, tutte scritte dopo',
          f:[{r:'e tutte', n:'Dopo la presa di Gerusalemme', d:'chi le scrive sa gia come e finita'},
             {piu:true, r:'la piu bellicosa', n:'È di Roberto il Monaco', d:'che scrive intorno al 1107, a dodici anni di distanza'}]}
       ]},

      {r:'coinvolge', n:'Chi non ci si aspetta', d:'non solo cavalieri',
       f:[
         {r:'parte prima', n:'La crociata dei poveri', d:'primavera 1096, guidata da Pietro l\'Eremita',
          f:[{r:'e viene', n:'Annientata in Anatolia', d:'a Civetot, prima ancora di incontrare un vero esercito'}]},
         {r:'e lascia dietro di se', n:'I massacri della Renania', d:'1096: le comunita ebraiche di Spira, Worms, Magonza, Colonia',
          f:[{r:'guidati da', n:'Emicone di Flonheim', d:'e da bande che a Gerusalemme non arriveranno mai'},
             {r:'mentre', n:'Alcuni vescovi tentano di proteggerle', d:'a Spira e a Colonia, con successo parziale'},
             {piu:true, r:'le fonti', n:'Ebraiche e cristiane concordano', d:'e sono fra i pochi eventi su cui le due tradizioni non divergono'}]},
         {r:'poi partono', n:'I grandi feudatari', d:'Goffredo di Buglione, Boemondo, Raimondo di Tolosa'},
         {r:'e finanziano', n:'Genova, Pisa, Venezia', d:'trasporto e rifornimenti, in cambio di quartieri e franchigie nei porti'}
       ]},

      {r:'costa', n:'Un prezzo enorme', d:'e questo smonta molte spiegazioni facili',
       f:[
         {r:'il viaggio e di', n:'Oltre quattromila chilometri', d:'quasi tutti a piedi, in due o tre anni'},
         {r:'la spesa equivale a', n:'Quattro o cinque anni di rendita', d:'per un cavaliere: si vende o si ipoteca tutto',
          f:[{r:'esempio', n:'Goffredo cede Buglione', d:'impegna il proprio ducato al vescovo di Liegi per finanziarsi'}]},
         {r:'la mortalita e', n:'Altissima', d:'le stime parlano di meta o piu dei partiti',
          f:[{piu:true, r:'e ad Antiochia', n:'Si assedia mentre si e assediati', d:'fame, cannibalismo riferito dalle cronache, diserzioni'}]},
         {r:'e chi torna', n:'Spesso torna piu povero', d:'la spiegazione «partirono per arricchirsi» regge male sui numeri'}
       ]},

      {r:'riesce', n:'Solo la prima volta', d:'ed e un caso quasi unico',
       f:[
         {r:'prende', n:'Nicea e Antiochia', d:'1097 e 1098, dopo assedi lunghissimi'},
         {r:'e conquista', n:'Gerusalemme il 15 luglio 1099', d:'con un massacro che le cronache latine raccontano con orgoglio',
          f:[{piu:true, r:'scrive un cronista', n:'«Si cavalcava nel sangue fino alle ginocchia»', d:'ed e un testimone dalla parte dei vincitori'}]},
         {r:'fonda', n:'Quattro stati latini', d:'Edessa, Antiochia, Tripoli, il regno di Gerusalemme'},
         {r:'perche vince?', n:'La divisione dei musulmani', d:'Selgiuchidi e Fatimidi in guerra fra loro: non c\'e un fronte unico'}
       ]},

      {r:'organizza', n:'Un mondo nuovo in Oriente', d:'e dura due secoli',
       f:[
         {r:'nascono', n:'Gli ordini religioso-militari', d:'monaci e soldati insieme: una figura che prima non esisteva',
          f:[{r:'i', n:'Templari', d:'fondati intorno al 1119: diventeranno anche i primi banchieri d\'Europa'},
             {r:'gli', n:'Ospitalieri', d:'nati per curare i pellegrini, poi militari'},
             {r:'i', n:'Teutonici', d:'che porteranno il modello nel Baltico'}]},
         {r:'si stabilisce', n:'Una convivenza pratica', d:'i coloni imparano la lingua, commerciano, stipulano trattati',
          f:[{piu:true, r:'lo nota', n:'Usama ibn Munqidh', d:'nobile siriano che descrive i Franchi con curiosita e ironia'}]},
         {r:'e cresce', n:'Il commercio con l\'Oriente', d:'zucchero, spezie, cotone, seta: e le repubbliche marinare ci si installano'}
       ]},

      {r:'poi', n:'Perde tutto', d:'e ogni tentativo va peggio del precedente',
       f:[
         {r:'nel 1144', n:'Cade Edessa', d:'e la seconda crociata, guidata da re e imperatori, fallisce'},
         {r:'nel 1187', n:'Hattin', d:'Saladino annienta l\'esercito del regno e riprende Gerusalemme',
          f:[{r:'e concede', n:'Una resa senza massacro', d:'il confronto con il 1099 fara scuola nelle cronache di entrambe le parti'}]},
         {r:'la terza', n:'Riporta solo la costa', d:'Riccardo Cuor di Leone e Saladino: tregua, e i pellegrini possono entrare'},
         {r:'nel 1204', n:'La quarta saccheggia Costantinopoli', d:'la piu grande citta cristiana del mondo, presa da un esercito cristiano',
          f:[{r:'perche', n:'Deviata dai debiti con Venezia', d:'l\'esercito non poteva pagare il trasporto e viene usato come merce di scambio'},
             {r:'e provoca', n:'La frattura definitiva con l\'Oriente', d:'lo scisma del 1054 diventa irreparabile'}]},
         {r:'nel 1291', n:'Cade San Giovanni d\'Acri', d:'e l\'ultima presenza latina in Terrasanta finisce'}
       ]},

      {r:'lascia', n:'Un bilancio complicato', d:'e una parola usata ancora oggi',
       f:[
         {r:'in economia', n:'Vincono le citta marinare', d:'Venezia e Genova escono dalle crociate come potenze mediterranee'},
         {r:'in cultura', n:'Poco passa dalle crociate', d:'il grosso delle traduzioni arriva dalla Spagna e dalla Sicilia, non dalla guerra'},
         {r:'in religione', n:'Nasce la guerra santa cristiana', d:'un\'idea che l\'Occidente non aveva e che non dimentichera'},
         {r:'e il nome', n:'Arriva tardi', d:'«crociata» si diffonde secoli dopo i fatti',
          f:[{r:'e nel mondo arabo', n:'Il concetto unitario e ottocentesco', d:'le fonti medievali parlano di Franchi, non di «crociati»',
              f:[{piu:true, r:'la formula', n:'«Guerre della croce»', d:'al-hurub al-salibiyya, si afferma nel XIX secolo'}]}]},
         {r:'e resta', n:'Una parola politica', d:'usata per secoli da tutte le parti, quasi sempre contro qualcuno'}
       ]}
    ],
    incroci:[
      {da:'La guerra diventa penitenza', a:'Contenere la violenza', r:'rovescia il problema di',
       perche:'Per un secolo la Chiesa aveva detto ai cavalieri che uccidere danna, e aveva provato a limitarli con la Tregua di Dio senza riuscirci. Urbano II fa la mossa opposta: la stessa violenza, orientata altrove, diventa la via della salvezza. Non un divieto in piu — una destinazione.'},
      {da:'La primogenitura', a:'I grandi feudatari', r:'spiega solo in parte la partenza dei',
       perche:'I cadetti senza terra ci sono, ma a partire sono anche i primogeniti ricchissimi, che vendono o impegnano tutto. Se la causa fosse solo la fame di terra, i piu ricchi sarebbero rimasti a casa — e invece Goffredo cede il proprio ducato per finanziarsi.'},
      {da:'Spesso torna piu povero', a:'Molte premesse insieme', r:'obbliga a tenere',
       perche:'Il bilancio economico individuale e quasi sempre in perdita: la spiegazione per interesse non regge da sola. Ma nemmeno quella per pura fede spiega perche proprio allora. Le cause storiche di un fenomeno di massa sono quasi sempre piu di una, e agiscono insieme.'},
      {da:'Alessio I chiede aiuto', a:'La quarta saccheggia Costantinopoli', r:'finisce, un secolo dopo, in',
       perche:'Bisanzio aveva chiesto mercenari per riprendersi l\'Anatolia. Centonove anni dopo, un esercito crociato prende e saccheggia la sua capitale. È il rovesciamento piu completo che si possa immaginare fra una richiesta e il suo esito.'},
      {da:'La divisione dei musulmani', a:'Hattin', r:'finisce quando arriva',
       perche:'La prima crociata riesce perche Selgiuchidi e Fatimidi sono in guerra fra loro. Quando Saladino unifica Egitto e Siria, quel vantaggio sparisce: nel 1187 il regno di Gerusalemme viene distrutto in una sola giornata.'},
      {da:'Deviata dai debiti con Venezia', a:'Genova, Pisa, Venezia', r:'e la conseguenza estrema del ruolo di',
       perche:'Le citta marinare non partecipano per fede: vendono trasporto e credito. Quando nel 1202 l\'esercito non riesce a pagare il nolo, diventa esso stesso lo strumento con cui il creditore riscuote — e finisce a Costantinopoli invece che in Egitto.'},
      {da:'I massacri della Renania', a:'La crociata dei poveri', r:'sono compiuti dalle stesse bande di',
       perche:'Le prime vittime della crociata sono in Europa e sono ebrei, uccisi nella primavera del 1096 da gruppi che a Gerusalemme non arriveranno mai. La violenza non comincia in Terrasanta: comincia sulla strada, contro chi era a portata di mano.'},
      {da:'Una resa senza massacro', a:'Gerusalemme il 15 luglio 1099', r:'viene contrapposta a',
       perche:'Nel 1187 Saladino concede la resa e riscatti; nel 1099 le cronache latine descrivono il massacro con orgoglio. Il paragone circola gia allora nelle fonti delle due parti — ed e uno dei motivi per cui Saladino diventa una figura ammirata anche in Occidente.'},
      {da:'Poco passa dalle crociate', a:'Il commercio con l\'Oriente', r:'contrasta con',
       perche:'Duecento anni di guerra spostano merci, uomini e denaro molto piu che libri: zucchero, cotone e spezie arrivano davvero di qui, mentre Aristotele e la medicina araba passano da Toledo e dalla Sicilia. Lo scambio culturale e avvenuto dove si traduceva in pace, non dove si combatteva.'},
      {da:'Non esiste', a:'«Deus le volt»', r:'rende incerta anche',
       perche:'La frase piu famosa della prima crociata compare in cronache scritte dopo il 1099. Non e detto che sia falsa, ma nessuno l\'ha registrata mentre veniva gridata: e un ricordo costruito da chi conosceva gia il finale.'},
      {da:'Il concetto unitario e ottocentesco', a:'Una parola politica', r:'e la premessa di',
       perche:'Nel Medioevo arabo si parla di Franchi e di singole campagne, non di un evento unico chiamato «le crociate». La cornice unitaria si afferma nell\'Ottocento, in parte importata dall\'Europa — ed e quella che verra usata, dall\'una e dall\'altra parte, nella politica del Novecento.'},
      {da:'Gli ordini religioso-militari', a:'La guerra diventa penitenza', r:'sono l\'istituzionalizzazione dell\'idea che',
       perche:'Se combattere puo essere un atto religioso, allora si puo essere monaci e soldati insieme. I Templari sono la conseguenza logica dell\'indulgenza di Clermont — una figura che nel cristianesimo dei primi mille anni sarebbe stata una contraddizione.'}
    ]
  },
  provocazione: {
    titolo:'Perche sono partiti',
    durata:'55 minuti',
    domandaMadre:'Quando vi dicono che un fatto enorme ha una causa sola, che cosa dovreste chiedere?',
    perche:'La classe spiega le crociate con l\'avidita — e la risposta che tutti danno — e poi si trova davanti ai conti: il viaggio costava quattro o cinque anni di rendita, la mortalita era enorme, e la maggior parte di chi tornava tornava piu povero. Smontata quella spiegazione, non si passa a quella opposta ma si scopre come funzionano davvero le cause storiche: nessuna basta, molte insieme spiegano. Il colpo di scena — i primi massacri avvengono in Europa contro gli ebrei, e la quarta crociata finisce contro la piu grande citta cristiana del mondo — impedisce ogni lettura consolatoria, da qualunque parte la si voglia prendere.',
    occorrente:'Una cartina con il percorso da Clermont a Gerusalemme, se possibile.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'1096. Decine di migliaia di persone\npartono per Gerusalemme.\n\nOltre quattromila chilometri, quasi tutti a piedi.\nDue o tre anni di viaggio.\nStime prudenti: ne muore piu della meta.\n\nPer un cavaliere il costo equivale\na quattro o cinque anni di rendita:\nsi vende la terra, si impegna il castello.\n\nGoffredo di Buglione impegna il proprio ducato\nal vescovo di Liegi per potersi permettere la partenza.\n\nPerche?',
       parlato:'Dai i numeri uno per volta, senza commentarli, e fermati sull\'ultimo: un duca che impegna il ducato per andarsene.\n\nPoi la domanda, secca. Raccogli le risposte a voce e prendine nota: usciranno quasi sempre per le ricchezze, per conquistare terre, per il commercio, per il potere del papa.\n\nNon correggere nessuno. Di\' solo: teniamo queste risposte, fra dieci minuti le mettiamo alla prova con i conti.\n\nSe qualcuno dice «per fede», annota anche quella: servira, ma non nel modo che si aspetta.',
       seDicono:[
         {loro:'«Per rubare: era una scusa per saccheggiare.»',
          tu:'Tienila, e una risposta seria e la verificheremo. Comincia intanto a chiederti una cosa: se il tuo scopo e arricchirti, parti per un viaggio di tremila chilometri con meta probabilita di morire, o vai a saccheggiare il castello del tuo vicino a due giorni di cavallo?'},
         {loro:'«Perche l\'ha detto il papa e la gente ubbidiva.»',
          tu:'Il papa aveva appena passato vent\'anni a litigare con l\'imperatore, e meta dei vescovi tedeschi non lo riconosceva. L\'obbedienza automatica non c\'era. Che cosa ha detto, esattamente, per ottenere una risposta simile?'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'Sono partiti:',
       opzioni:['soprattutto per interesse', 'soprattutto per fede'],
       parlato:'Fai schierare e conta. Di solito vince nettamente il primo gruppo, perche e la spiegazione che suona adulta e disincantata.\n\nAllora metti alla prova proprio quella, con tre fatti.\n\nPrimo: il bilancio individuale. La maggior parte di chi torna, torna piu povero di quando e partito. Chi resta in Oriente e una minoranza.\n\nSecondo: a partire non sono solo i cadetti senza terra. Partono anche primogeniti ricchissimi, che vendono o impegnano tutto. Se fosse fame di terra, i ricchi restavano.\n\nTerzo: esistevano modi molto piu semplici di arricchirsi con la violenza, e a molta minore distanza.\n\nPoi la domanda che riapre tutto: se non conveniva, perche partirono in decine di migliaia?',
       seDicono:[
         {loro:'«Allora era davvero solo fede.»',
          tu:'Aspetta prima di ribaltare tutto. Se fosse solo fede, perche proprio nel 1096 e non cent\'anni prima? La fede c\'era anche allora. Serve qualcosa che spieghi il momento, non solo la disponibilita.'},
         {loro:'«Erano ignoranti, si facevano manovrare.»',
          tu:'È la spiegazione piu comoda e la meno utile: rende inutile capire. Prova a formulare la stessa cosa in modo che si possa verificare — che cosa gli era stato offerto, e perche quell\'offerta funzionava proprio su di loro?'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Che cosa aveva offerto Urbano II.\n\nPer un secolo la Chiesa aveva ripetuto ai cavalieri\nche uccidere e peccato mortale,\ne aveva provato a limitarli con la Tregua di Dio:\nvietato combattere dal mercoledi sera al lunedi,\nvietato colpire chierici, contadini, mercanti.\n\nUn ceto intero addestrato a una cosa sola,\ne quella cosa lo dannava.\n\nA Clermont il papa capovolge il problema:\n\nchi parte per devozione\ne liberato dalla penitenza dei propri peccati.\n\nLa guerra, per la prima volta, non danna: salva.',
       parlato:'Questo e il cuore dell\'ora e va costruito lentamente, perche e controintuitivo.\n\nFai vedere prima il problema dal punto di vista della Chiesa: migliaia di uomini armati, addestrati a combattere, senza guerre ufficiali e senza terre — e ogni loro violenza e un peccato da confessare. La Tregua di Dio e un tentativo di argine, e funziona a meta.\n\nPoi la mossa: invece di vietare, si offre una destinazione. Il mestiere delle armi diventa una via di salvezza.\n\nA questo punto la domanda che unisce i due schieramenti: e interesse o e fede? Nessuna delle due, e tutte e due. Un ceto che aveva un problema pratico — cosa fare della propria vita — riceve una risposta religiosa che risolve anche quello. Le cause non si sommano: si incastrano.\n\nSe c\'e tempo, aggiungi le altre tessere: Manzikert 1071 e la richiesta di aiuto di Bisanzio; un papato appena uscito rafforzato dalla lotta per le investiture; la Spagna dove il modello esisteva gia.',
       seDicono:[
         {loro:'«Quindi la Chiesa se li e tolti di torno.»',
          tu:'È una lettura possibile e la fanno anche degli storici. Ma attenzione a trasformarla in un piano: nessuno a Clermont poteva prevedere quello che sarebbe successo. Le conseguenze utili non dimostrano che fossero l\'obiettivo.'},
         {loro:'«Ma allora era una manipolazione.»',
          tu:'Solo se pensi che chi parlava non credesse a quello che diceva. È molto piu probabile che ci credesse: e proprio per questo funzionava. Le cose piu efficaci raramente sono cinismo puro.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'Il discorso di Clermont, nella versione\ndi Roberto il Monaco:\n\n«Chi qui e triste e povero, la sara ricco;\nchi qui e nemico del Signore,\nla ne diventera amico.\n\n[…] Prendete dunque la via del Santo Sepolcro,\nstrappate quella terra a una gente scellerata\ne sottomettetela a voi.»\n\nE la folla, secondo lui, rispose: «Dio lo vuole».\n\nUn dettaglio: questa versione e scritta\nintorno al 1107.\n\nDodici anni dopo il discorso.\nOtto anni dopo la presa di Gerusalemme.',
       testo:{fonte:'Roberto il Monaco, Historia Iherosolimitana, circa 1107; il concilio e del novembre 1095',
              glossa:'Del discorso di Clermont esistono cinque versioni, tutte scritte dopo il 1099. Nessuno ha preso appunti mentre Urbano parlava. Chi scrive conosce gia il finale — e un discorso raccontato da chi sa come e andata a finire tende ad assomigliare molto a quello che e successo.'},
       parlato:'Leggi il passo e poi fai notare la prima riga, che e sorprendente: chi e povero qui sara ricco la. Il richiamo materiale c\'e, ed e messo per iscritto da un monaco.\n\nPoi la data, e lascia che faccia il suo effetto. Cinque versioni, tutte posteriori, nessun verbale. La piu bellicosa e anche fra le piu tarde.\n\nDomanda utile da fare: se doveste ricostruire che cosa ha detto davvero, come procedereste? Le risposte buone sono confrontare le versioni fra loro, cercare cio che hanno in comune, e diffidare dei dettagli che compaiono in una sola.\n\nÈ il mestiere dello storico spiegato in due minuti su un caso concreto.',
       seDicono:[
         {loro:'«Allora non sappiamo che cosa ha detto.»',
          tu:'Sappiamo abbastanza: tutte le versioni concordano sull\'indulgenza e sull\'appello a partire. Sono i dettagli scenografici a essere incerti. Non sapere tutto non significa non sapere niente — ed e la differenza fra dubbio e scetticismo.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Due fatti che stanno nelle stesse fonti.\n\nPRIMO. I primi massacri non avvengono in Terrasanta.\nAvvengono in Europa, nella primavera del 1096:\nle comunita ebraiche di Spira, Worms, Magonza, Colonia,\nassalite da bande in marcia verso Gerusalemme.\nMigliaia di morti. Alcuni vescovi tentano di proteggerle.\nQuelle bande a Gerusalemme non arriveranno mai.\n\nSECONDO. La quarta crociata, nel 1204,\nnon raggiunge mai la Terrasanta.\nSaccheggia Costantinopoli:\nla piu grande citta cristiana del mondo,\npresa da un esercito cristiano che non poteva\npagare il nolo delle navi veneziane.',
       parlato:'Dai i due fatti senza aggiungere commenti morali: bastano da soli, e la classe li riceve meglio se non vengono accompagnati da un giudizio gia pronto.\n\nSul primo, il dettaglio che conta e che quelle bande non arrivano mai a destinazione: la violenza si scarica su chi e a portata di mano. E aggiungi che le fonti ebraiche e quelle cristiane, che divergono su quasi tutto, su questi fatti concordano.\n\nSul secondo, spiega il meccanismo: l\'esercito aveva ordinato a Venezia una flotta per un numero di uomini molto superiore a quello che si presento, non pote pagare, e per saldare il debito accetto prima di conquistare Zara — citta cristiana — e poi di deviare su Costantinopoli. Il papa scomunico i crociati, e poi si adatto al risultato.\n\nSe c\'e tempo, la terza cosa: nelle fonti arabe medievali non esiste un evento unico chiamato «le crociate». Si parla di Franchi e di singole campagne. La cornice unitaria, e la parola stessa, si affermano nell\'Ottocento — in parte importate dall\'Europa.',
       seDicono:[
         {loro:'«Allora erano ipocriti: dicevano fede e facevano stragi.»',
          tu:'Alcuni si, altri no, e i piu erano tutte e due le cose. Guarda i vescovi di Spira e di Colonia, che rischiano per proteggere gli ebrei mentre altri li uccidono in nome della stessa fede. Un\'epoca non ha un carattere solo, e nemmeno un uomo.'},
         {loro:'«Perche il papa non li ha fermati?»',
          tu:'Ci ha provato piu volte, anche con la scomunica nel 1204, e non e servito. È un dato importante: una volta che un movimento di massa parte, chi lo ha chiamato non lo controlla piu. Vale per il 1096 e vale in generale.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Torniamo alla domanda di partenza.\n\nPerche sono partiti?\n\nPer i cadetti senza terra.\nPer un ceto addestrato a combattere\na cui era stato detto che combattere danna.\nPer un\'indulgenza che capovolgeva quella condanna.\nPer una richiesta di aiuto da Bisanzio.\nPer un papato appena uscito rafforzato da vent\'anni di lotta.\nPer citta marinare che vendevano il trasporto.\nPer fede, davvero.\n\nSette risposte, e nessuna e quella giusta.\n\nUltima domanda, e vale per tutto l\'anno:\n\nquando qualcuno vi spiega un fatto enorme\ncon una causa sola,\nche cosa dovreste chiedergli?',
       parlato:'Rifai la conta iniziale — interesse o fede — e mostra che ormai la domanda e mal posta. È il risultato migliore che l\'ora possa dare.\n\nPoi la conclusione di metodo, che e la cosa da portare a casa e va detta una volta sola: i fatti di massa hanno cause multiple che si incastrano, e una spiegazione con una causa sola e quasi sempre una spiegazione al servizio di qualcuno. Non e detto che sia falsa: e sicuramente insufficiente.\n\nE la domanda da fare: che cosa non spiega, la tua spiegazione? Perche proprio allora e non prima? Chi e rimasto fuori dal quadro?\n\nSe hai un minuto, chiudi con il dato sulla parola: «crociata» e una parola che non usavano loro, e nel mondo arabo la cornice unitaria e ottocentesca. Persino il nome con cui chiamiamo la cosa e stato deciso dopo, da qualcun altro, per un altro motivo.',
       seDicono:[
         {loro:'«Allora non si puo mai dire niente di sicuro sulla storia.»',
          tu:'Si dicono moltissime cose sicure: la data di Clermont, i massacri della Renania, il saccheggio del 1204. Quello che non si puo fare e ridurre duecento anni a un movente. La storia e sicura sui fatti e prudente sulle cause: e una virtu, non un difetto.'}
       ]}
    ],
    riserve:[
      {titolo:'La crociata dei poveri',
       corpo:'Prima che partano gli eserciti dei principi, nella primavera del 1096 si muove una folla disordinata guidata da predicatori popolari, fra cui Pietro l\'Eremita. Non hanno rifornimenti, non hanno comando, non hanno idea della distanza: le cronache raccontano che a ogni citta importante chiedessero se fosse Gerusalemme.\n\nAttraversano l\'Ungheria e i Balcani saccheggiando per mangiare, e a Costantinopoli Alessio I li fa traghettare in fretta in Asia per liberarsene.\n\nA Civetot, nell\'ottobre 1096, vengono annientati dai Turchi prima ancora di incontrare un vero esercito.',
       chiedi:'Che cosa fa partire per tremila chilometri qualcuno che non sa nemmeno dove sta andando? E che differenza c\'e fra questa folla e gli eserciti che partiranno pochi mesi dopo — nelle intenzioni, e negli effetti?'},
      {titolo:'Il nobile che guardava i Franchi',
       corpo:'Usama ibn Munqidh, nobile siriano vissuto nel XII secolo, frequento a lungo i crociati e scrisse un libro di memorie in cui li descrive con curiosita e ironia.\n\nRacconta di medici franchi che curano un ascesso con l\'accetta e una donna con la testa incisa a croce; racconta di essere stato aggredito in preghiera da un franco appena arrivato che voleva girarlo verso oriente, e difeso dai Templari che lo conoscevano; e osserva che i Franchi «da poco stabiliti fra noi» sono molto piu rozzi di quelli nati in Oriente.',
       chiedi:'La testimonianza piu vivida sui crociati la scrive un loro avversario, e non e ne un\'invettiva ne un elogio. Che cosa rende utile una fonte come questa? E che cosa bisogna comunque tenere presente leggendola?'},
      {titolo:'Saladino a Gerusalemme',
       corpo:'Nel luglio 1187 Saladino distrugge l\'esercito del regno di Gerusalemme ai Corni di Hattin, e in ottobre riprende la citta.\n\nNel 1099 i crociati avevano fatto strage della popolazione. Nel 1187 Saladino concede la resa: chi puo pagare un riscatto se ne va libero, molti vengono liberati gratuitamente, i luoghi cristiani non vengono distrutti e i pellegrini potranno tornare.\n\nIl confronto colpi i contemporanei di entrambe le parti, e nei secoli successivi Saladino divento in Europa una figura ammirata: Dante lo colloca nel Limbo, fra gli spiriti magni, insieme ai grandi antichi.',
       chiedi:'Un nemico che entra nella nostra memoria come modello di nobilta. Perche succede, secondo voi? E che cosa dice, del 1099, il fatto che i cristiani stessi abbiano cominciato a raccontare quella differenza?'}
    ],
    testi:[
      {fonte:'Fulcherio di Chartres, Historia Hierosolymitana — l\'indulgenza',
       corpo:'Nella sua versione del discorso di Clermont, Urbano II annuncia che a chi partira «per devozione e non per ottenere onore o denaro» il viaggio stesso sara computato in luogo di ogni penitenza.',
       glossa:'Da far notare: la condizione «non per onore o denaro» e nel testo. Chi scrive sa benissimo che molti partiranno per quei motivi, e mette per iscritto che a loro l\'indulgenza non spetta. Le fonti sono quasi sempre piu complicate dello slogan che ne ricaviamo.'},
      {fonte:'Cronaca ebraica di Salomone bar Simson, XII secolo — la Renania 1096',
       corpo:'Le cronache ebraiche raccontano l\'arrivo delle bande crociate nelle citta renane, la scelta di alcune comunita di darsi la morte piuttosto che essere convertite a forza, e i tentativi di alcuni vescovi di nascondere gli ebrei nei propri palazzi.',
       glossa:'Su questi eventi le fonti ebraiche e quelle cristiane concordano nella sostanza — cosa rara. Vale la pena dirlo alla classe: quando due tradizioni ostili raccontano la stessa cosa allo stesso modo, la probabilita che sia accaduta e altissima.'},
      {fonte:'Niceta Coniata, Storia — il sacco di Costantinopoli, 1204',
       corpo:'Lo storico bizantino, testimone oculare, descrive il saccheggio della citta da parte dei latini, la spoliazione delle chiese e la distruzione di opere antiche, e osserva amaramente che perfino i musulmani si erano comportati meglio con i cristiani di Gerusalemme.',
       glossa:'La frase finale e la piu efficace, ed e di un cristiano su altri cristiani. Utile per far vedere che le linee di frattura della storia non coincidono quasi mai con le etichette con cui la raccontiamo.'}
    ],
    compito:'Mezza pagina. Prendete un fatto di cronaca o di storia recente che vi hanno spiegato con una causa sola — un motivo, un colpevole, un interesse — e provate a elencare almeno tre cause diverse che potrebbero aver agito insieme. Poi indicate quale, secondo voi, spiega meglio perche sia successo proprio in quel momento e non prima.',
    fonti:[
      'Fulcherio di Chartres, Historia Hierosolymitana; Roberto il Monaco, Historia Iherosolimitana; Gesta Francorum',
      'Usama ibn Munqidh, Il libro delle esperienze; Ibn al-Athir, Cronaca',
      'Niceta Coniata, Storia — libri sul 1204; cronache ebraiche di Salomone bar Simson e di Eliezer bar Nathan',
      'S. Runciman, Storia delle crociate; J. Riley-Smith, Le crociate e l\'idea di crociata',
      'A. Maalouf, Le crociate viste dagli arabi',
      'C. Tyerman, God\'s War; sull\'uso ottocentesco del termine: E. Sivan, L\'Islam et la Croisade'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Storia medievale · 4 — L\'Italia comunale e l\'Impero': {
  mappa: {
    n:'L\'Italia dei Comuni', d:'XI-XIV secolo: cento citta contro un impero, e poi contro se stesse',
    f:[
      {r:'nasce da', n:'Un vuoto di potere', d:'perche il Comune nasce in Italia e quasi solo in Italia',
       f:[
         {r:'manca', n:'Un re presente', d:'l\'imperatore e in Germania e scende in Italia ogni tanto'},
         {r:'ha lasciato spazio', n:'La lotta per le investiture', d:'vent\'anni in cui imperatore e papa si indeboliscono a vicenda'},
         {r:'restano', n:'Le citta romane', d:'l\'Italia non ha mai smesso di essere urbana come il resto d\'Europa'},
         {r:'e comandano', n:'I vescovi cittadini', d:'che governano di fatto le citta: e i cittadini gli si affiancano',
          f:[{piu:true, r:'poi', n:'Se ne emancipano', d:'l\'assistenza diventa controllo, e il controllo diventa governo'}]},
         {r:'con', n:'Una ricchezza nuova', d:'mercanti e artigiani che hanno denaro e nessun diritto politico'}
       ]},

      {r:'si costituisce con', n:'Un giuramento', d:'coniuratio: e questa l\'origine, non una concessione',
       f:[
         {r:'i cittadini', n:'Giurano fra loro', d:'di aiutarsi e di obbedire ai propri magistrati'},
         {r:'e scelgono', n:'I consoli', d:'da due a venti, in carica pochi mesi o un anno',
          f:[{r:'perche', n:'Cariche brevi e collegiali', d:'per impedire che qualcuno prenda troppo potere'}]},
         {r:'si riuniscono in', n:'Arengo', d:'l\'assemblea di tutti i cittadini: presto troppo grande per decidere'},
         {r:'e affidano il resto a', n:'Consigli ristretti', d:'dove si concentra il potere reale'},
         {r:'si danno', n:'Statuti', d:'leggi scritte, riviste e rinnovate di continuo',
          f:[{piu:true, r:'e conservate', n:'In archivi cittadini', d:'da cui sappiamo quasi tutto quello che sappiamo'}]}
       ]},

      {r:'e sottomette', n:'Il contado', d:'la prima cosa che un Comune fa e conquistare la campagna',
       f:[
         {r:'costringe', n:'I signori rurali a inurbarsi', d:'a risiedere in citta per parte dell\'anno, sotto controllo'},
         {r:'impone', n:'Tasse e obblighi militari', d:'ai villaggi, che diventano sudditi della citta'},
         {r:'e combatte', n:'Le citta vicine', d:'i Comuni si fanno guerra fra loro molto piu che contro l\'Impero'},
         {piu:true, r:'quindi', n:'Liberta non vuol dire uguaglianza', d:'e la liberta della citta sul territorio, non di tutti'}
       ]},

      {r:'si scontra con', n:'Federico Barbarossa', d:'che vuole riprendersi cio che l\'Impero ha perso',
       f:[
         {r:'nel 1158 convoca', n:'La dieta di Roncaglia', d:'e chiede ai giuristi che cosa spetti all\'imperatore',
          f:[{r:'rispondono', n:'I quattro dottori di Bologna', d:'e gli riconoscono le regalie: pedaggi, moneta, giustizia, nomina dei magistrati'},
             {piu:true, r:'e il diritto romano', n:'Diventa un\'arma politica', d:'riscoperto a Bologna, serve a fondare il potere del principe'}]},
         {r:'nel 1162', n:'Distrugge Milano', d:'mura abbattute, popolazione dispersa in quattro borghi'},
         {r:'e ottiene l\'effetto contrario', n:'La Lega Lombarda', d:'1167: le citta rivali si alleano contro di lui',
          f:[{r:'fondano', n:'Alessandria', d:'citta nuova, chiamata cosi in onore del papa Alessandro III'},
             {piu:true, r:'il giuramento di', n:'Pontida', d:'e nella tradizione, ma le fonti coeve sono deboli'}]},
         {r:'nel 1176', n:'Legnano', d:'la fanteria comunale sconfigge la cavalleria imperiale'},
         {r:'e nel 1183 firma', n:'La pace di Costanza', d:'le citta si governano da se, ma restano dentro l\'Impero',
          f:[{r:'quindi ottengono', n:'Autonomia, non indipendenza', d:'giurano fedelta, pagano, e l\'imperatore conferma i consoli'}]}
       ]},

      {r:'ritenta con', n:'Federico II', d:'stupor mundi: nipote del Barbarossa, re di Sicilia',
       f:[
         {r:'costruisce', n:'Uno Stato accentrato', d:'nel Sud: funzionari, tasse regolari, monopoli, una moneta d\'oro',
          f:[{r:'con le', n:'Costituzioni di Melfi', d:'1231: il primo grande codice di uno Stato moderno in Europa'},
             {piu:true, r:'e fonda', n:'L\'universita di Napoli', d:'1224: la prima voluta da uno Stato per formare i propri funzionari'}]},
         {r:'ma nel Nord trova', n:'La seconda Lega Lombarda', d:'e la guerra ricomincia'},
         {r:'vince a', n:'Cortenuova 1237', d:'e manda a Roma il carroccio milanese come trofeo'},
         {r:'perde a', n:'Parma 1248', d:'l\'assedio si rovescia e il suo campo viene distrutto'},
         {r:'muore nel', n:'1250', d:'e con lui finisce il progetto imperiale in Italia',
          f:[{piu:true, r:'e la sua dinastia', n:'Si estingue in vent\'anni', d:'Manfredi a Benevento nel 1266, Corradino a Tagliacozzo nel 1268'}]}
       ]},

      {r:'si spacca in', n:'Guelfi e ghibellini', d:'e i nomi vengono da una lite tedesca',
       f:[
         {r:'da', n:'Welfen e Waiblingen', d:'due casate rivali per il trono di Germania'},
         {r:'in Italia diventano', n:'Filopapali e filoimperiali', d:'almeno all\'inizio'},
         {r:'ma poi', n:'Contano le rivalita locali', d:'una citta e guelfa perche la vicina e ghibellina',
          f:[{r:'e dentro le citta', n:'Le fazioni si dividono ancora', d:'bianchi e neri a Firenze, e Dante finisce in esilio nel 1302'}]},
         {r:'producono', n:'Esilii e confische', d:'chi perde va via e i suoi beni vengono presi: e la regola, non l\'eccezione'}
       ]},

      {r:'si trasforma in', n:'Signoria', d:'e in un secolo e mezzo quasi ovunque',
       f:[
         {r:'perche il Comune', n:'È in guerra dentro di se', d:'magnati contro popolo, arti maggiori contro minori, famiglia contro famiglia',
          f:[{r:'a Firenze', n:'Ordinamenti di giustizia', d:'1293: i magnati esclusi dalle cariche e puniti piu duramente'},
             {piu:true, r:'e le torri', n:'Sono fortezze private', d:'a Bologna se ne contavano piu di cento'}]},
         {r:'aveva gia inventato', n:'Il podesta forestiero', d:'un magistrato preso da fuori, per un anno, perche imparziale',
          f:[{r:'ed e', n:'Il primo passo verso il signore', d:'affidare il governo a chi non e parte in causa'},
             {piu:true, r:'a fine mandato', n:'Il sindacato', d:'il podesta veniva processato sul proprio operato prima di andarsene'}]},
         {r:'quindi il signore', n:'Spesso viene votato', d:'i consigli gli conferiscono la signoria, a tempo e poi a vita'},
         {r:'e all\'inizio', n:'Funziona', d:'meno omicidi di fazione, opere pubbliche, giustizia piu rapida'},
         {r:'poi diventa', n:'Ereditaria', d:'Visconti a Milano, Scaligeri a Verona, Este a Ferrara',
          f:[{piu:true, r:'e comprano', n:'Un titolo imperiale', d:'per trasformare il potere di fatto in diritto'}]}
       ]},

      {r:'lascia', n:'Un\'Italia diversa', d:'e una assenza che dura fino all\'Ottocento',
       f:[
         {r:'un paese di', n:'Cento citta', d:'nessuna capitale, nessun centro: e ancora oggi cosi'},
         {r:'un', n:'Patrimonio di leggi e archivi', d:'gli statuti comunali sono la base del diritto amministrativo'},
         {r:'una', n:'Cultura urbana', d:'palazzi pubblici, piazze, campanili civici accanto a quelli delle chiese'},
         {r:'ma nessuno', n:'Stato nazionale', d:'mentre Francia e Inghilterra lo costruiscono, l\'Italia resta divisa'},
         {r:'e un mito', n:'Riusato nell\'Ottocento', d:'Legnano diventa il simbolo del Risorgimento',
          f:[{r:'con', n:'La battaglia di Legnano di Verdi', d:'1849, mentre Roma e assediata'}]}
       ]}
    ],
    incroci:[
      {da:'La lotta per le investiture', a:'I vescovi cittadini', r:'indebolisce l\'autorita di',
       perche:'Finche il vescovo e nominato dall\'imperatore e ne rappresenta il potere, governare la citta al suo posto e ribellarsi. Quando papa e imperatore si contendono la sua nomina per vent\'anni, la sua autorita si logora — e i cittadini si prendono lo spazio rimasto vuoto.'},
      {da:'Cariche brevi e collegiali', a:'Il podesta forestiero', r:'non basta e porta a',
       perche:'Consoli numerosi e in carica pochi mesi servivano a impedire che qualcuno diventasse troppo forte. Ma restavano cittadini, quindi di parte. La soluzione successiva e prendere il magistrato da un\'altra citta: non piu limitare il potere, ma affidarlo a chi non ha parenti in piazza.'},
      {da:'Il podesta forestiero', a:'Spesso viene votato', r:'prepara il fatto che il signore',
       perche:'La logica e la stessa: se non ci fidiamo l\'uno dell\'altro, diamo il governo a qualcuno che stia sopra le fazioni. Il signore non arriva contro la tradizione comunale — arriva come ultimo passo di una soluzione che i Comuni avevano gia adottato per un secolo.'},
      {da:'È in guerra dentro di se', a:'Esilii e confische', r:'produce di continuo',
       perche:'Ogni cambio di fazione significa bandire gli avversari e prenderne i beni. Con centinaia di famiglie in esilio pronte a rientrare con le armi, nessun governo dura — ed e questa instabilita, non l\'Impero, a consumare il Comune.'},
      {da:'Distrugge Milano', a:'La Lega Lombarda', r:'provoca',
       perche:'Le citta lombarde si combattevano fra loro da decenni. La distruzione di Milano mostra a tutte che cosa rischiano, e ottiene cio che nessuna diplomazia aveva ottenuto: le mette d\'accordo. La repressione troppo dura crea l\'alleanza che voleva evitare.'},
      {da:'Autonomia, non indipendenza', a:'Riusato nell\'Ottocento', r:'viene semplificato da un mito',
       perche:'A Costanza le citta restano dentro l\'Impero, giurano fedelta e pagano. Nell\'Ottocento la vicenda diventa il racconto di un popolo che caccia lo straniero: serviva un precedente al Risorgimento, e Legnano era perfetto — a patto di non leggere il trattato.'},
      {da:'I quattro dottori di Bologna', a:'Costituzioni di Melfi', r:'forniscono lo strumento poi usato nelle',
       perche:'Il diritto romano riscoperto a Bologna serve prima a dire che cosa spetta all\'imperatore, poi a costruire uno Stato che legifera dall\'alto. Fra Roncaglia e Melfi ci sono settant\'anni e la stessa idea: che il principe sia fonte della legge.'},
      {da:'Le citta vicine', a:'Contano le rivalita locali', r:'spiega meglio di ogni ideologia perche',
       perche:'Guelfo e ghibellino diventano quasi sempre etichette di posizione: se Firenze e guelfa, Pisa e Siena saranno ghibelline. Le fazioni non nascono da convinzioni sul rapporto fra papa e imperatore — nascono dalla mappa.'},
      {da:'I signori rurali a inurbarsi', a:'È in guerra dentro di se', r:'porta dentro le mura il conflitto che rende il Comune',
       perche:'Costringere i nobili di campagna a vivere in citta li mette sotto controllo, ma li trasforma anche in magnati urbani con torri, clientele e abitudini militari. Il Comune si porta in casa il problema che voleva risolvere.'},
      {da:'Funziona', a:'Ereditaria', r:'e cio che permette alla signoria di diventare',
       perche:'Il signore viene accettato perche riduce le violenze e fa funzionare la citta. È il consenso sui risultati a permettergli di trasformare un incarico a tempo in un potere di famiglia — e poi di comprare un titolo che lo renda legittimo.'},
      {da:'Cento citta', a:'Stato nazionale', r:'e la ragione per cui manca uno',
       perche:'Dove nessuna citta e abbastanza forte da imporsi e tutte sono abbastanza forti da resistere, non nasce un centro. La stessa vitalita urbana che rende l\'Italia ricca e colta le impedisce di unificarsi per altri sei secoli.'},
      {da:'Uno Stato accentrato', a:'La seconda Lega Lombarda', r:'e esattamente cio che provoca',
       perche:'Nel Sud Federico II costruisce funzionari, tasse regolari e monopoli, e funziona. Le citta del Nord vedono il modello e capiscono che cosa perderebbero: si coalizzano non contro un tiranno lontano, ma contro uno Stato che sanno che sa governare.'}
    ]
  },
  provocazione: {
    titolo:'Hanno vinto, e hanno regalato la vittoria',
    durata:'55 minuti',
    domandaMadre:'Quanta liberta si e disposti a cedere per essere lasciati in pace?',
    perche:'I Comuni italiani fanno una cosa che non riesce a nessun altro in Europa: sconfiggono un imperatore e si fanno riconoscere il diritto di governarsi. Centocinquant\'anni dopo quasi tutti hanno consegnato il governo a un signore, e spesso con un voto. La classe cerca il colpevole — l\'imperatore, il papa, i ricchi — e non lo trova, perche la causa e interna: una liberta che produce guerra civile permanente. È il modo migliore per far capire che le istituzioni non si giudicano dai principi ma da come reggono nel tempo, e per arrivare a una domanda che non ha una risposta comoda.',
    occorrente:'Se possibile, una cartina dell\'Italia comunale e l\'immagine di una citta con le torri, come San Gimignano o la Bologna ricostruita.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'29 maggio 1176, Legnano.\n\nLa fanteria delle citta lombarde\nsconfigge la cavalleria dell\'imperatore.\n\n1183, pace di Costanza:\nFederico Barbarossa riconosce alle citta\nil diritto di eleggere i propri magistrati\ne di darsi le proprie leggi.\n\nÈ l\'unico caso in Europa\nin cui delle citta battono un impero\ne se lo fanno mettere per iscritto.\n\nCentocinquant\'anni dopo,\nquasi tutte quelle citta\nhanno consegnato il governo a un uomo solo.\n\nPerche?',
       parlato:'Racconta la prima parte con l\'enfasi che merita: e davvero un\'anomalia europea, e vale la pena che se ne rendano conto.\n\nPoi lascia cadere la seconda, e fermati sulla parola «consegnato».\n\nRaccogli le prime risposte. Usciranno quasi sempre: li hanno conquistati, e stato un colpo di Stato, i ricchi hanno comprato il potere, e tornato l\'imperatore.\n\nNon correggere. Di\' soltanto: teniamo queste ipotesi, e fra venti minuti guardiamo se reggono. Poi anticipa il dato che le mette in crisi tutte, e lascialo li: nella maggior parte dei casi il signore fu votato dai consigli cittadini.',
       seDicono:[
         {loro:'«Li avranno conquistati con la forza.»',
          tu:'In alcuni casi si. Ma nella maggioranza il signore riceve il potere da una delibera dei consigli, spesso a larghissima maggioranza, prima a tempo e poi a vita. Come si spiega un popolo che vota per smettere di votare?'},
         {loro:'«Sara stato l\'imperatore a imporli.»',
          tu:'L\'imperatore c\'entra, ma al contrario: molti signori comprano da lui un titolo dopo aver gia preso il potere, per renderlo legittimo. Prima si prende la citta, poi si compra il vicariato. L\'Impero certifica, non decide.'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'La fine dei Comuni:',
       opzioni:['gliel\'hanno imposta', 'l\'hanno scelta'],
       parlato:'Fai schierare e conta. Vince quasi sempre la prima, perche e la piu naturale: nessuno rinuncia alla propria liberta se non viene costretto.\n\nAllora mostra come funzionava davvero un Comune, e lascia che il quadro faccia il lavoro.\n\nDentro le mura ci sono magnati con torri private, clientele armate e abitudine alla guerra — e ci sono perche il Comune stesso li ha obbligati a trasferirsi dalla campagna. Ci sono arti maggiori e minori in conflitto. Ci sono fazioni che quando vincono bandiscono gli avversari e ne confiscano i beni, e quegli esuli tornano armati appena possono.\n\nA Bologna si contavano oltre cento torri. A Firenze, nel 1293, si arriva a scrivere una legge — gli Ordinamenti di giustizia — che esclude i nobili dalle cariche e li punisce piu duramente degli altri, perche non c\'era altro modo di contenerli.\n\nPoi la domanda: quanto dura un governo cosi?',
       seDicono:[
         {loro:'«Se litigavano tanto, la liberta non funzionava.»',
          tu:'Attento a concludere troppo presto: quelle stesse citta in quei decenni diventano le piu ricche d\'Europa, costruiscono cattedrali, fondano universita e producono Dante e Giotto. Il conflitto interno e distruttivo e produttivo insieme. Come si tengono insieme le due cose?'},
         {loro:'«Bastava una polizia, un esercito.»',
          tu:'Di chi? Ogni forza armata dentro la citta apparteneva a una fazione. Il problema non era la mancanza di forza: era che ogni forza era di parte. Tienilo a mente, perche e esattamente il problema che il podesta doveva risolvere.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Il Comune aveva gia trovato una soluzione,\ncento anni prima.\n\nIl PODESTÀ.\n\nUn magistrato preso da un\'altra citta,\ncon i propri giudici e i propri soldati,\nin carica un anno solo,\npagato profumatamente,\ne processato a fine mandato sul proprio operato.\n\nPerche forestiero?\n\nPerche non aveva parenti in piazza,\nne amici da favorire, ne nemici da colpire.\n\nCioe: gia allora avevano deciso\nche per governarsi avevano bisogno\ndi qualcuno che non fosse uno di loro.',
       parlato:'Questo e il perno dell\'ora e va costruito con calma, perche capovolge la domanda iniziale.\n\nFai notare tutti i dettagli dell\'istituto, perche sono ingegnosi: durata breve, provenienza esterna, staff proprio, stipendio alto per renderlo incorruttibile, e il sindacato finale — un vero processo sul suo operato prima di lasciarlo ripartire.\n\nPoi tira la conseguenza, e chiedila a loro: se per un secolo hai affidato la giustizia a uno che viene da fuori perche nessuno dei tuoi e imparziale, che cosa fai quando la crisi si aggrava?\n\nLa risposta arriva quasi sempre da sola: gli dai anche il resto.\n\nIl signore non arriva contro la tradizione comunale. Arriva come ultimo passo di una logica che i Comuni avevano inaugurato loro: se non ci fidiamo gli uni degli altri, mettiamo sopra di noi qualcuno che stia fuori dalle parti.',
       seDicono:[
         {loro:'«Ma il podesta durava un anno, il signore restava per sempre.»',
          tu:'All\'inizio no: quasi sempre la signoria viene conferita a tempo, e poi rinnovata, e poi resa vitalizia, e poi ereditaria. Ogni passaggio e piccolo e ragionevole. È cosi che quasi sempre si perde qualcosa: non con un colpo, ma con una serie di proroghe.'},
         {loro:'«Allora erano gia rassegnati.»',
          tu:'Erano stanchi, che e diverso. Prova a immaginare tre generazioni in cui ogni dieci anni cambia la fazione al potere, i tuoi vicini vengono banditi e i loro beni confiscati, e i loro figli tornano armati. A un certo punto qualcuno che garantisca l\'ordine sembra un affare.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'Dante, esiliato da Firenze nel 1302,\nscrive dell\'Italia:\n\n«Ahi serva Italia, di dolore ostello,\nnave sanza nocchiere in gran tempesta,\nnon donna di province, ma bordello!»\n\nE poi, rivolgendosi alla propria citta:\n\n«Quante volte, del tempo che rimembre,\nlegge, moneta, officio e costume\nhai tu mutato, e rinovate membre!\n\nE se ben ti ricordi e vedi lume,\nvedrai te somigliante a quella inferma\nche non puo trovar posa in su le piume,\nma con dar volta suo dolore scherma.»',
       testo:{fonte:'Dante, Purgatorio VI, 76-78 e 145-151 (composto fra il 1308 e il 1315)',
              glossa:'La seconda immagine e piu precisa di qualunque analisi: Firenze e come un malato che si rigira nel letto continuamente e crede di stare meglio a ogni movimento. Non e la denuncia di un tiranno — e la denuncia dell\'instabilita. Chi scrive e un uomo che ha ricoperto cariche pubbliche ed e stato bandito sotto pena di rogo dai propri concittadini.'},
       parlato:'Leggi il primo passo, che sanno quasi tutti, e poi il secondo, che quasi nessuno conosce ed e molto piu interessante.\n\nFai lavorare sull\'immagine del malato che si rigira: legge, moneta, uffici e costumi cambiati in continuazione, come uno che cambia posizione nel letto e scambia il movimento per sollievo.\n\nPoi il dato biografico, che va detto: Dante era stato priore di Firenze, cioe fra i massimi magistrati, per due mesi nel 1300. Nel 1302 e condannato all\'esilio e, se rientrasse, al rogo. Non scrive da spettatore.\n\nDomanda utile: sta chiedendo piu liberta o piu ordine? Le risposte si dividono, ed e giusto che si dividano — Dante chiede un imperatore forte, e per un fiorentino del Duecento e una posizione sorprendente.',
       seDicono:[
         {loro:'«Dante era di parte: era stato cacciato.»',
          tu:'Certo, e va tenuto presente. Ma nota che non chiede il ritorno della propria fazione: chiede un potere che stia sopra le fazioni. È l\'argomento di chi ha perso, ed e anche l\'argomento che di li a poco convincera molte citta.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Due cose sul 1176.\n\nPRIMA. A Costanza le citta non diventano indipendenti.\nRestano dentro l\'Impero: giurano fedelta,\npagano, e l\'imperatore conferma i consoli che eleggono.\nHanno vinto l\'autonomia, non la sovranita.\n\nSECONDA. Legnano come battaglia di un popolo\ncontro lo straniero e un\'idea dell\'Ottocento.\nNel 1849, mentre Roma e assediata,\nVerdi fa rappresentare a Roma\n«La battaglia di Legnano».\n\nIl Risorgimento aveva bisogno di un precedente,\ne quello era perfetto —\na patto di non leggere il trattato.',
       parlato:'Dai il primo punto guardando il contenuto della pace: giuramento di fedelta, tributi, conferma imperiale dei magistrati eletti. È una vittoria vera, ma e una vittoria dentro il sistema, non contro il sistema.\n\nPoi il secondo, che di solito colpisce di piu. Fai il collegamento con il capitolo precedente: come «andare a Canossa» arriva da Bismarck, cosi Legnano come risveglio nazionale arriva dal Risorgimento. La stessa operazione, in due paesi diversi, nello stesso secolo.\n\nE la conseguenza di metodo, che e la seconda cosa da portare a casa dopo la storia dei Comuni: quando un episodio medievale vi arriva gia carico di significato patriottico o identitario, quasi sempre quel significato e stato aggiunto nell\'Ottocento, quando si costruivano le nazioni e servivano antenati.\n\nSe c\'e tempo, aggiungi il rovescio sulla signoria: all\'inizio funziona. Meno omicidi di fazione, opere pubbliche, giustizia piu rapida, e in molte citta un periodo di splendore artistico. Non e una parentesi buia: e uno scambio, con dei vantaggi reali.',
       seDicono:[
         {loro:'«Allora la vittoria di Legnano non conta niente?»',
          tu:'Conta moltissimo: senza quella guerra l\'Italia comunale non avrebbe avuto il riconoscimento giuridico di governarsi. Quello che non conta e il significato che le abbiamo attaccato sopra settecento anni dopo. Distinguere il fatto dal suo uso e tutto il mestiere.'},
         {loro:'«Ma se la signoria funzionava, allora era meglio?»',
          tu:'Funzionava per l\'ordine e non per la partecipazione. La domanda vera e a che prezzo, e chi lo paga: sotto un signore la vita e piu sicura e la politica scompare. Vale lo scambio? È esattamente la domanda con cui chiudiamo.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Torniamo alla domanda dell\'inizio.\n\nNessuno gliel\'ha tolta.\nSe la sono tolta da soli,\nun passo ragionevole per volta:\n\nprima un magistrato forestiero perche imparziale,\npoi un signore a tempo perche l\'emergenza,\npoi rinnovato perche ha funzionato,\npoi a vita perche cambiarlo sarebbe rischioso,\npoi a suo figlio perche ormai e cosi.\n\nUltima domanda, e non riguarda il Trecento:\n\nquanta liberta si e disposti a cedere\nper essere lasciati in pace?',
       parlato:'Rifai la conta iniziale — imposta o scelta — e mostra lo spostamento.\n\nPoi la scala dei cinque passi: falla leggere lentamente, perche il punto e che ogni singolo passaggio, preso da solo, e sensato. Nessuno di quei consigli cittadini ha votato per la fine della liberta comunale: hanno votato per un anno di tranquillita, molte volte di seguito.\n\nChiudi con la domanda finale senza raccogliere risposte e senza fare paralleli con l\'attualita: se qualcuno li fa, lascialo fare e non aggiungere niente. La forza della domanda sta nel fatto che la storia non da una risposta comoda — perche la signoria, davvero, riduceva le violenze.\n\nUltima riga, se serve: la prossima volta guardiamo che cosa succede quando gli stessi Stati cittadini smettono di combattersi e cominciano a farsi la guerra con i banchieri e i matrimoni.',
       seDicono:[
         {loro:'«Quindi la democrazia non funziona?»',
          tu:'Il Comune non era una democrazia: votava una minoranza di maschi adulti con requisiti di censo o di mestiere, e il contado non contava nulla. Il problema che lo ha ucciso non e la partecipazione — e l\'assenza di regole capaci di far perdere qualcuno senza che debba andarsene in esilio.'}
       ]}
    ],
    riserve:[
      {titolo:'Il mestiere del podesta',
       corpo:'Il podesta era un professionista itinerante. Veniva da un\'altra citta, spesso da lontano, e arrivava con un proprio seguito: giudici, notai, cavalieri, a volte una ventina di persone che pagava di tasca propria con lo stipendio ricevuto.\n\nRestava in carica un anno, talvolta sei mesi. Non poteva imparentarsi in citta, ne accettare inviti a pranzo dai cittadini, ne comprare beni. Alla fine del mandato veniva sottoposto al sindacato: un processo pubblico sul proprio operato, con la possibilita per chiunque di accusarlo. Solo dopo poteva ripartire, e riscuotere l\'ultima parte del compenso.\n\nEsistevano manuali per podesta, veri e propri libri di istruzioni sul mestiere.',
       chiedi:'Un funzionario preso da fuori, pagato molto, sorvegliato, e processato prima di andarsene. Che cosa vi dice questo insieme di regole sul problema che volevano risolvere? E che cosa direbbero oggi, quelle stesse regole, applicate a qualche incarico pubblico che conoscete?'},
      {titolo:'Le torri',
       corpo:'Nelle citta comunali le grandi famiglie costruivano torri: alte, strette, senza finestre in basso, collegate fra loro da passerelle di legno con le case degli alleati. Servivano a controllare la strada, a difendersi durante le lotte di fazione e a mostrare il proprio rango.\n\nA Bologna se ne contarono oltre cento. A Firenze i Comuni cercarono piu volte di imporne l\'abbassamento a una misura massima.\n\nLe torri non sono un ornamento urbanistico: sono la prova materiale che dentro le mura si combatteva.',
       chiedi:'Che cosa significa vivere in una citta in cui le famiglie piu potenti hanno fortezze private in centro? E perche una delle prime cose che fa un signore, quasi ovunque, e far abbassare o abbattere le torri?'},
      {titolo:'Il carroccio',
       corpo:'Il carroccio era un carro trainato da buoi che le citta lombarde portavano in battaglia. Sopra c\'erano l\'insegna del Comune, un altare, una campana e i sacerdoti. Non serviva a combattere: serviva come punto di raccolta e come simbolo — finche il carroccio resisteva, la citta resisteva.\n\nA Legnano, nel 1176, la fanteria milanese si serro intorno al carroccio e resistette alla cavalleria imperiale abbastanza a lungo perche la cavalleria della Lega tornasse.\n\nNel 1237, dopo Cortenuova, Federico II mando il carroccio milanese a Roma come trofeo, esposto in Campidoglio.',
       chiedi:'Un carro con una campana e un altare al centro di una battaglia. A che cosa serve, davvero, un simbolo in guerra? E perche l\'imperatore, vincendo, sceglie di portarsi via quello invece del bottino?'}
    ],
    testi:[
      {fonte:'Ottone di Frisinga, Gesta di Federico, circa 1157 — lo sguardo tedesco sulle citta italiane',
       corpo:'Lo zio del Barbarossa descrive con stupore le citta lombarde: amano tanto la liberta che, «per evitare l\'arroganza del potere», si governano con dei consoli e li cambiano quasi ogni anno. E aggiunge, scandalizzato, che non disdegnano di elevare alla cavalleria e alle cariche pubbliche «giovani di condizione inferiore, e perfino artigiani di mestieri meccanici».',
       glossa:'La fonte piu utile e spesso quella di chi non capisce. Ottone descrive come anomalia quello che per noi e l\'inizio di qualcosa: cariche elettive, ricambio, e persone di mestiere ammesse al governo. Vale la pena chiedersi che cosa, del nostro presente, verra descritto un giorno con lo stesso stupore.'},
      {fonte:'Pace di Costanza, 25 giugno 1183 — i punti principali',
       corpo:'L\'imperatore concede alle citta della Lega le regalie e le consuetudini, il diritto di eleggere i propri consoli, di darsi statuti e di mantenere la Lega. Le citta in cambio giurano fedelta all\'imperatore, gli versano un tributo, e i consoli eletti ricevono da lui l\'investitura.',
       glossa:'Leggere i punti uno per uno e il modo migliore per capire che cosa fu davvero quella vittoria: non l\'uscita dall\'Impero ma un posto migliore dentro l\'Impero. È un compromesso, e i compromessi si raccontano male — ed e per questo che poi si e preferito raccontare la battaglia.'},
      {fonte:'Ordinamenti di giustizia, Firenze 1293',
       corpo:'I magnati — le famiglie di antica nobilta e con parenti cavalieri — vengono esclusi dalle principali cariche del Comune, obbligati a prestare cauzione per il proprio buon comportamento, e puniti piu severamente degli altri cittadini per i reati di violenza. Le loro famiglie rispondono collettivamente dei delitti dei singoli.',
       glossa:'Una legge che punisce piu duramente chi e piu potente, e che rende una famiglia responsabile per i propri membri. Sono misure eccezionali e discutibili — e dicono con precisione quanto fosse fuori controllo la violenza dei potenti dentro le mura.'}
    ],
    compito:'Mezza pagina. Cercate quando la vostra citta, o la piu vicina, e passata da Comune a signoria, e chi fu il primo signore. Poi provate a rispondere a una domanda sola: a chi conveniva, quel passaggio, e chi ci perdeva? Se non trovate la risposta nelle fonti, scrivete che cosa avreste bisogno di sapere per rispondere.',
    fonti:[
      'Ottone di Frisinga, Gesta Friderici II 13; Pace di Costanza (1183); Ordinamenti di giustizia (1293)',
      'Dante, Purgatorio VI 76-151; Convivio IV; Monarchia',
      'G. Tabacco, Egemonie sociali e strutture del potere nel medioevo italiano',
      'P. Grillo, Legnano 1176. Una battaglia per la liberta; Cavalieri e popoli in armi',
      'J.-C. Maire Vigueur, Cavalieri e cittadini; E. Artifoni sul podesta',
      'G. Chittolini, La formazione dello Stato regionale e le istituzioni del contado'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Storia medievale · 5 — Papato, Impero e monarchie nazionali': {
  mappa: {
    n:'Papato, Impero e monarchie', d:'XIII-XIV secolo: due poteri universali cadono, e ne nascono molti locali',
    f:[
      {r:'comincia dal', n:'Papato al culmine', d:'Innocenzo III, 1198-1216: mai cosi in alto',
       f:[
         {r:'si intitola', n:'Vicario di Cristo', d:'non piu solo successore di Pietro: rappresentante di Cristo in terra'},
         {r:'usa l\'immagine del', n:'Sole e della luna', d:'il potere regio riceve luce da quello papale, come la luna dal sole'},
         {r:'ha come vassalli', n:'Regni interi', d:'Inghilterra, Aragona, Portogallo, Sicilia gli prestano omaggio'},
         {r:'convoca il', n:'IV concilio Lateranense', d:'1215: il piu grande dell\'epoca, oltre milleduecento fra vescovi e abati',
          f:[{piu:true, r:'vi si stabilisce', n:'La confessione annuale obbligatoria', d:'una norma che entra nella vita di tutti'}]},
         {r:'approva', n:'Gli ordini mendicanti', d:'francescani e domenicani: canalizza dentro la Chiesa la richiesta di poverta',
          f:[{r:'invece di', n:'Condannarli come eretici', d:'come era accaduto ai valdesi pochi anni prima'}]},
         {r:'e bandisce', n:'La crociata albigese', d:'1209: contro i catari del Midi, guerra dentro la cristianita'}
       ]},

      {r:'assiste al crollo dell\'', n:'Impero universale', d:'che dopo Federico II non si riprende',
       f:[
         {r:'con la fine degli', n:'Svevi', d:'Manfredi a Benevento 1266, Corradino a Tagliacozzo 1268'},
         {r:'segue il', n:'Grande interregno', d:'1250-1273: nessun imperatore riconosciuto, e nessuno se ne accorge troppo'},
         {r:'e si chiude con la', n:'Bolla d\'oro', d:'1356: l\'imperatore lo eleggono sette principi, e il papa non c\'entra piu',
          f:[{r:'quindi l\'Impero', n:'Diventa tedesco', d:'una federazione di principi, non piu un\'autorita universale'},
             {piu:true, r:'i sette sono', n:'Tre arcivescovi e quattro laici', d:'Magonza, Treviri, Colonia; Boemia, Palatinato, Sassonia, Brandeburgo'}]}
       ]},

      {r:'mentre cresce', n:'Il regno di Francia', d:'il modello di monarchia accentrata',
       f:[
         {r:'vince a', n:'Bouvines 1214', d:'Filippo Augusto batte inglesi, tedeschi e fiamminghi insieme'},
         {r:'si dota di', n:'Funzionari stipendiati', d:'balivi e siniscalchi mandati dal centro, revocabili, pagati'},
         {r:'e di', n:'Legisti', d:'giuristi formati sul diritto romano, che lavorano per il re',
          f:[{r:'con la formula', n:'Il re e imperatore nel suo regno', d:'rex in regno suo est imperator: nessuna autorita superiore'}]},
         {r:'con Filippo IV', n:'Tassa il clero', d:'e qui comincia lo scontro'},
         {r:'e convoca gli', n:'Stati generali', d:'1302: nobilta, clero e terzo stato, chiamati a sostenere il re contro il papa',
          f:[{piu:true, r:'ed e', n:'La prima mobilitazione dell\'opinione', d:'contro il papato, e funziona'}]}
       ]},

      {r:'e si scontrano in', n:'Bonifacio VIII contro Filippo il Bello', d:'in sette anni, dal massimo al minimo',
       f:[
         {r:'nel 1296', n:'Clericis laicos', d:'vietato ai laici tassare il clero senza permesso papale',
          f:[{r:'e il re risponde', n:'Bloccando l\'oro verso Roma', d:'senza denaro francese la curia non regge, e Bonifacio cede'}]},
         {r:'nel 1300 proclama', n:'Il primo Giubileo', d:'e Roma si riempie: e un successo enorme'},
         {r:'nel 1302 promulga', n:'Unam Sanctam', d:'la rivendicazione piu alta mai scritta dal papato',
          f:[{r:'con la teoria', n:'Dei due gladii', d:'entrambe le spade sono della Chiesa: una la impugna, l\'altra la fa impugnare'},
             {r:'e conclude', n:'Ogni creatura umana e sottoposta al papa', d:'ed e necessario alla salvezza'}]},
         {r:'nel 1303', n:'Anagni', d:'settembre: Guglielmo di Nogaret e Sciarra Colonna entrano nel palazzo papale',
          f:[{r:'lo tengono', n:'Prigioniero per tre giorni', d:'poi la popolazione lo libera'},
             {r:'e muore', n:'Un mese dopo', d:'a Roma, l\'11 ottobre'},
             {piu:true, r:'lo schiaffo', n:'È tradizione tarda', d:'l\'oltraggio e certo, il gesto materiale meno'}]}
       ]},

      {r:'e il papato finisce', n:'Sotto tutela', d:'per un secolo intero',
       f:[
         {r:'si trasferisce ad', n:'Avignone', d:'1309-1377: sette papi, tutti francesi',
          f:[{r:'chiamata da Petrarca', n:'Cattivita babilonese', d:'e il nome resta'},
             {piu:true, r:'ma e anche', n:'Il periodo piu efficiente', d:'fisco, archivi e burocrazia papale si organizzano proprio li'}]},
         {r:'poi si spacca nel', n:'Grande scisma', d:'1378-1417: due papi, e dal 1409 tre',
          f:[{r:'e ogni Stato', n:'Sceglie il proprio papa', d:'l\'obbedienza religiosa segue le alleanze politiche'}]},
         {r:'e si ricompone col', n:'Concilio di Costanza', d:'1414-1418: depone tutti e tre e ne elegge uno nuovo',
          f:[{r:'affermando il', n:'Conciliarismo', d:'il concilio e superiore al papa'},
             {r:'che e', n:'L\'esatto contrario di Unam Sanctam', d:'dodici anni dopo, un\'assemblea giudica il pontefice'}]}
       ]},

      {r:'intanto in', n:'Inghilterra', d:'un\'altra strada verso lo Stato',
       f:[
         {r:'con', n:'Enrico II', d:'nasce la common law: giudici itineranti e giurie, diritto uguale per il regno'},
         {r:'con Giovanni Senzaterra', n:'Magna Carta', d:'1215: il re accetta limiti scritti al proprio potere',
          f:[{r:'fra cui', n:'Nessun uomo libero sara imprigionato', d:'se non per giudizio dei pari e secondo la legge del paese'},
             {r:'ma e', n:'Un accordo fra baroni e re', d:'non una carta dei diritti: «uomo libero» esclude quasi tutti'},
             {piu:true, r:'e viene', n:'Annullata dal papa dopo pochi mesi', d:'e poi riemessa piu volte'}]},
         {r:'e nel 1265', n:'Il parlamento di Simon de Montfort', d:'per la prima volta convoca anche borghesi e cavalieri delle contee',
          f:[{r:'da cui', n:'Il re nel parlamento', d:'il sovrano legifera insieme all\'assemblea, non contro di essa'}]}
       ]},

      {r:'e nella penisola', n:'Iberica', d:'la reconquista costruisce regni',
       f:[
         {r:'la svolta e', n:'Las Navas de Tolosa 1212', d:'i regni cristiani coalizzati battono gli Almohadi'},
         {r:'nascono', n:'Castiglia, Aragona, Portogallo', d:'e la reconquista da loro un fine comune e un\'ideologia'},
         {r:'con le', n:'Cortes', d:'assemblee di ceti, in Leon gia dal 1188: fra le piu antiche d\'Europa'},
         {piu:true, r:'resta', n:'Granada fino al 1492', d:'l\'ultimo emirato, per altri due secoli e mezzo'}
       ]},

      {r:'lascia', n:'Un\'Europa di Stati', d:'e la fine di due universalismi',
       f:[
         {r:'vince', n:'La sovranita territoriale', d:'ogni re e padrone in casa propria: nessuna autorita sopra'},
         {r:'nasce', n:'Lo Stato come macchina', d:'funzionari, tasse regolari, archivi, ambasciate stabili, eserciti pagati'},
         {r:'le Chiese diventano', n:'Nazionali di fatto', d:'i re nominano i vescovi e controllano i redditi ecclesiastici'},
         {r:'e si preparano', n:'Le premesse della Riforma', d:'uno scisma di quarant\'anni ha insegnato che si puo fare a meno di Roma'},
         {piu:true, r:'e le lingue', n:'Diventano nazionali', d:'i documenti regi passano dal latino al volgare'}
       ]}
    ],
    incroci:[
      {da:'Il re e imperatore nel suo regno', a:'Ogni creatura umana e sottoposta al papa', r:'e la tesi che si scontra con',
       perche:'Due formule scritte negli stessi anni e incompatibili punto per punto: o esiste un\'autorita sopra i re, o ogni re e autorita ultima nel proprio territorio. Anagni non e una lite personale — e il momento in cui due dottrine giuridiche si incontrano fisicamente.'},
      {da:'Bloccando l\'oro verso Roma', a:'Tassa il clero', r:'e l\'arma che rende efficace il',
       perche:'Il papa aveva la scomunica, il re aveva le dogane. Bastava impedire l\'uscita di denaro dalla Francia perche la curia romana, che dal clero francese ricavava una quota decisiva delle proprie entrate, dovesse cedere. La forza spirituale non paga gli stipendi.'},
      {da:'Stati generali', a:'Anagni', r:'rende politicamente possibile',
       perche:'Prima di mandare Nogaret in Italia, Filippo convoca nobilta, clero e terzo stato e ottiene il loro appoggio contro il papa. Aggredire un pontefice diventa praticabile solo quando si ha il paese dietro: e la prima volta che l\'opinione pubblica viene mobilitata su scala nazionale.'},
      {da:'Conciliarismo', a:'Vicario di Cristo', r:'rovescia il principio di',
       perche:'Dal papa che si dice rappresentante di Cristo in terra a un\'assemblea che depone tre papi passano duecento anni. Il Concilio di Costanza non discute la dottrina: si limita a fare una cosa che, secondo Unam Sanctam, non poteva fare nessuno.'},
      {da:'Grande scisma', a:'Le premesse della Riforma', r:'prepara',
       perche:'Per quarant\'anni ogni fedele ha visto due o tre papi scomunicarsi a vicenda, e ogni Stato scegliere il proprio in base alle alleanze. Quando l\'unita torna, l\'idea che l\'obbedienza a Roma sia necessaria alla salvezza ha perso credibilita — e cent\'anni dopo Lutero trovera un terreno gia arato.'},
      {da:'Il primo Giubileo', a:'Anagni', r:'e a tre anni di distanza da',
       perche:'Nel 1300 Roma si riempie di pellegrini e il papato tocca il massimo del prestigio popolare; nel 1303 lo stesso papa e prigioniero nel proprio palazzo. Consenso religioso e potere politico non sono la stessa cosa, e possono muoversi in direzioni opposte nello stesso triennio.'},
      {da:'Gli ordini mendicanti', a:'La crociata albigese', r:'sono l\'alternativa scelta accanto a',
       perche:'Alla stessa domanda — che cosa fare dei movimenti di poverta — Innocenzo III risponde in due modi opposti nello stesso decennio: approva francescani e domenicani, e bandisce una crociata contro i catari. Assorbire o distruggere, secondo che il movimento accetti o no l\'autorita.'},
      {da:'Bolla d\'oro', a:'Sole e della luna', r:'cancella nei fatti l\'immagine del',
       perche:'Se l\'imperatore lo eleggono sette principi tedeschi senza alcun intervento papale, l\'idea che il potere regio riceva luce da quello papale non ha piu nessun aggancio istituzionale. La metafora sopravvive nei testi e non piu nelle procedure.'},
      {da:'Un accordo fra baroni e re', a:'Nessun uomo libero sara imprigionato', r:'ridimensiona la portata di',
       perche:'L\'articolo piu famoso della Magna Carta protegge gli uomini liberi, che nell\'Inghilterra del 1215 sono una minoranza: i villani ne restano fuori. Il testo diventera la base di garanzie universali molto piu tardi, e per un\'estensione che i baroni non avevano in mente.'},
      {da:'Funzionari stipendiati', a:'Lo Stato come macchina', r:'e il primo pezzo di',
       perche:'Un funzionario pagato dal centro e revocabile e l\'opposto del vassallo, che detiene la carica come un bene proprio. Quando il re puo licenziare chi lo rappresenta, comincia ad avere un\'amministrazione invece che una clientela.'},
      {da:'Il re nel parlamento', a:'Il re e imperatore nel suo regno', r:'limita dall\'interno cio che afferma',
       perche:'Francia e Inghilterra costruiscono lo Stato nello stesso periodo e in due modi opposti: la prima concentrando tutto nel sovrano, la seconda vincolandolo a un\'assemblea che vota le imposte. Dalla stessa esigenza — pagare le guerre — escono due tradizioni costituzionali diverse.'},
      {da:'Cattivita babilonese', a:'Il periodo piu efficiente', r:'nasconde che sia anche',
       perche:'Il nome dato da Petrarca ha fissato l\'immagine di una decadenza. Ad Avignone pero il papato costruisce il proprio fisco, i propri archivi e la propria burocrazia: la stessa istituzione perde autorevolezza e guadagna macchina, che e la storia di molti poteri.'}
    ]
  },
  provocazione: {
    titolo:'Tredici mesi',
    durata:'55 minuti',
    domandaMadre:'Come si riconosce, mentre accade, se un potere e al suo culmine o sta per crollare?',
    perche:'Fra il novembre 1302 e il settembre 1303 il papato passa dalla rivendicazione piu alta mai messa per iscritto — ogni creatura umana e sottoposta al pontefice — a un papa tenuto prigioniero nel proprio palazzo da un ministro francese. Tredici mesi. La classe deve spiegare come sia possibile, e nel farlo scopre la differenza fra autorita dichiarata e potere effettivo: chi paga, chi ha uomini armati, chi ha un\'assemblea alle spalle. È la lezione che rende leggibile tutta la storia politica successiva, e finisce su una domanda che non ha risposta comoda nemmeno oggi.',
    occorrente:'Niente. Serve pero leggere ad alta voce i due testi: sono brevi e fanno il lavoro da soli.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'18 novembre 1302. Il papa Bonifacio VIII\nfirma il documento piu ambizioso\nmai scritto dal papato:\n\n«Dichiariamo, diciamo, definiamo e pronunciamo\nche e del tutto necessario alla salvezza\nche ogni creatura umana\nsia sottoposta al romano pontefice.»\n\nOgni creatura umana. Nessuna eccezione.\n\n7 settembre 1303, Anagni.\nUn ministro del re di Francia e un barone romano\nentrano con i mercenari nel palazzo papale\ne tengono il papa prigioniero per tre giorni.\n\nMuore un mese dopo.\n\nFra le due date passano tredici mesi.',
       parlato:'Leggi il testo di Unam Sanctam lentamente: la formula giuridica «dichiariamo, diciamo, definiamo e pronunciamo» va sentita, perche e la forma solenne massima.\n\nPoi dai la seconda data e fermati.\n\nLa domanda: che cosa e cambiato in tredici mesi?\n\nRaccogli le ipotesi. Escono quasi sempre: era pazzo, era isolato, il re era piu forte, la gente non ci credeva piu.\n\nUn dettaglio da tenere per la fine e da non dare adesso: tre anni prima, nel 1300, quello stesso papa aveva indetto il primo Giubileo della storia, e Roma si era riempita di pellegrini.',
       seDicono:[
         {loro:'«Bluffava: se scrivi una cosa cosi vuol dire che non ce l\'hai.»',
          tu:'È un\'ipotesi seria e la verificheremo. Ma nota che meno di un secolo prima Innocenzo III aveva regni interi come vassalli e nessuno lo trovava esagerato. La stessa frase, in due epoche, non pesa allo stesso modo.'},
         {loro:'«Il re di Francia era piu forte, punto.»',
          tu:'Piu forte in che senso? Il papa poteva scomunicarlo e sciogliere i sudditi dal giuramento — l\'arma che nel 1077 aveva messo in ginocchio un imperatore. Perche nel 1303 non funziona piu?'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'Bonifacio VIII, quando scrive Unam Sanctam:',
       opzioni:['era debole e bluffava', 'era forte, ma il mondo era cambiato sotto i piedi'],
       parlato:'Fai schierare e conta.\n\nPoi metti sul tavolo il confronto che decide l\'ora: Canossa, 1077. Un imperatore scomunicato attraversa le Alpi in inverno per farsi assolvere, perche senza assoluzione i suoi principi lo depongono.\n\nA distanza di duecentoventisei anni, la stessa arma non produce niente. Perche?\n\nFai elencare a loro le differenze. Guidale con tre domande:\n\nchi paga il papa? chi paga il re? chi ha uomini armati a disposizione, e dove?\n\nÈ da qui che si arriva alla risposta, e conviene che ci arrivino loro.',
       seDicono:[
         {loro:'«Nel 1077 la gente era piu religiosa.»',
          tu:'Nel 1300 il Giubileo riempie Roma di pellegrini: la religiosita non e diminuita. È cambiato chi ha il denaro e chi ha gli uomini. Attenzione a spiegare i fatti politici con i cambiamenti di mentalita: sono la spiegazione piu comoda e la piu difficile da provare.'},
         {loro:'«Nel 1077 i principi tedeschi volevano deporre il re, qui i francesi stavano col loro.»',
          tu:'Ottima osservazione, ed e esattamente il punto. Nel 1077 la scomunica funziona perche dava un\'arma ai nemici interni del re. Nel 1302 Filippo convoca gli Stati generali e ottiene l\'appoggio del paese: la scomunica non trova nessuno da armare.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Che cosa aveva il re di Francia nel 1303,\nche l\'imperatore non aveva nel 1077.\n\nDENARO. Tasse regolari, e la possibilita\ndi bloccare l\'oro diretto a Roma:\nla curia viveva anche del clero francese.\n\nGIURISTI. Legisti formati sul diritto romano,\ncon una formula: «il re e imperatore nel suo regno».\nCioe: nessuna autorita al di sopra.\n\nUN\'ASSEMBLEA. Nel 1302 convoca gli Stati generali\ne ottiene l\'appoggio di nobilta, clero e terzo stato\ncontro il papa.\n\nFUNZIONARI. Balivi e siniscalchi pagati dal centro,\nrevocabili, che eseguono.\n\nIl papa aveva l\'autorita. Il re aveva la macchina.',
       parlato:'Dai i quattro punti uno per volta, e fermati su ciascuno abbastanza perche si veda che sono tutti pezzi della stessa cosa: uno Stato.\n\nIl passaggio piu istruttivo e il primo. Il papa scomunica, il re smette di far uscire oro dalla Francia — e nel 1296 e Bonifacio a cedere. Fai notare la sproporzione apparente e il risultato reale.\n\nSul terzo punto insisti, perche e la novita assoluta: e la prima volta che un sovrano chiama il proprio paese a schierarsi contro il papato, e ottiene di si. Da quel momento la scomunica non ha piu una leva interna su cui agire.\n\nE il quarto: quando Filippo decide di mandare Nogaret in Italia, ha un funzionario che esegue. Il papa, per difendersi, ha soltanto la popolazione di Anagni — che infatti lo libera, ma dopo tre giorni e senza cambiare nulla.',
       seDicono:[
         {loro:'«Allora la religione non contava piu niente.»',
          tu:'Contava eccome: gli Stati generali sostengono il re anche perche il re li convince di essere il buon cristiano e il papa un usurpatore. La religione non sparisce — cambia padrone. Ed e una differenza enorme.'},
         {loro:'«Perche il papa non aveva un esercito?»',
          tu:'Ne aveva uno piccolo e mercenario, come tutti gli Stati italiani. Il punto e un altro: un esercito costa, e per pagarlo servono tasse regolari su un territorio compatto. Il papato aveva rendite sparse in tutta Europa e nessun territorio da cui prelevare in modo continuo.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'La teoria di Bonifacio, per esteso:\n\n«Nella Chiesa e nella sua potesta ci sono due spade,\nla spirituale e la temporale.\n\nMa l\'una e da usare per la Chiesa,\nl\'altra dalla Chiesa;\nl\'una dalla mano del sacerdote,\nl\'altra dalla mano dei re e dei soldati,\nma secondo l\'ordine e il consenso del sacerdote.\n\nÈ necessario che una spada sia sotto l\'altra,\ne che l\'autorita temporale\nsia sottoposta alla potesta spirituale.»',
       testo:{fonte:'Bonifacio VIII, bolla Unam Sanctam, 18 novembre 1302',
              glossa:'L\'immagine delle due spade viene dal Vangelo di Luca, dove i discepoli dicono a Gesu di avere due spade. Su quel versetto si e costruita per secoli l\'intera teoria dei due poteri: la Chiesa ne ha entrambe, ma la seconda la fa impugnare a qualcun altro. Il re, in questo schema, non e un potere autonomo — e un braccio.'},
       parlato:'Leggi il passo e fai riconoscere la struttura: non si dice che il papa comanda gli eserciti, si dice che la spada temporale e comunque della Chiesa e viene usata «secondo l\'ordine e il consenso» del sacerdote. È una tesi piu sottile e piu totale.\n\nPoi metti accanto la formula dei legisti francesi: rex in regno suo est imperator, il re e imperatore nel proprio regno. Due frasi brevi e perfettamente incompatibili.\n\nDomanda utile alla classe: quando due dottrine sono incompatibili e nessuna delle due puo convincere l\'altra, come si decide? La risposta, in questo caso, e Anagni.\n\nSe c\'e tempo, il dettaglio storiografico: il famoso schiaffo di Sciarra Colonna e tradizione tarda. L\'oltraggio e l\'arresto sono certi, il gesto materiale molto meno. Vale la pena dirlo, perche e un altro esempio di scena celebre aggiunta dopo.',
       seDicono:[
         {loro:'«Quindi lo schiaffo non c\'e stato?»',
          tu:'Non lo sappiamo, e le fonti piu vicine non lo raccontano. Sappiamo che entrarono armati nel palazzo e lo tennero prigioniero tre giorni, il che e piu grave. È interessante che la memoria abbia conservato il gesto piccolo e drammatico invece del fatto grosso.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Che cosa succede dopo Anagni.\n\nNon la fine del papato: la sua cattura.\n\n1309 — La sede si sposta ad Avignone,\nin territorio d\'influenza francese.\nCi resta 68 anni. Sette papi, tutti francesi.\n\n1378 — Il ritorno a Roma produce uno scisma:\ndue papi contemporaneamente, e dal 1409 tre.\nOgni Stato sceglie il proprio\nin base alle alleanze politiche.\nDura 39 anni.\n\n1415 — Il Concilio di Costanza\ndepone tutti e tre e ne elegge un altro,\ne dichiara che il concilio e superiore al papa.\n\nTredici anni dopo Unam Sanctam,\nun\'assemblea giudica il pontefice.',
       parlato:'Dai la cronologia una riga per volta.\n\nIl dato che colpisce di piu e quasi sempre il secondo: trentanove anni con due o tre papi che si scomunicano a vicenda, e ogni regno che sceglie il proprio in base a chi e alleato di chi. Chiedi che cosa doveva pensare, in quegli anni, un contadino a cui si insegnava che fuori dall\'obbedienza a Roma non c\'e salvezza.\n\nPoi il collegamento lungo, che vale per il programma di quinta: quando cent\'anni dopo Lutero dira che si puo fare a meno di Roma, troveranno un\'Europa che lo aveva gia sperimentato per quarant\'anni.\n\nInfine il rovescio, per evitare la lettura della semplice decadenza: proprio ad Avignone il papato costruisce il proprio fisco, i propri archivi e la propria burocrazia. Perde autorevolezza e guadagna macchina. È una cosa che ai poteri capita spesso, e conviene saperla riconoscere.',
       seDicono:[
         {loro:'«Come faceva la gente a sapere qual era il papa vero?»',
          tu:'Non poteva saperlo, e infatti seguiva quello del proprio re. Ci sono santi riconosciuti che stavano da parti opposte. È la dimostrazione pratica che quarant\'anni di scisma hanno fatto piu danni all\'idea di autorita romana di qualsiasi eresia.'},
         {loro:'«Ma allora il papa non contava piu niente?»',
          tu:'Contava molto, e in certi campi piu di prima: nel Quattrocento sara una potenza italiana con un\'amministrazione moderna. Quello che ha perso e la pretesa di stare sopra i re. Nessun potere crolla del tutto: quasi sempre cambia mestiere.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Un\'ultima cosa, che avevo tenuto da parte.\n\nNel 1300, tre anni prima di Anagni,\nlo stesso Bonifacio VIII\naveva proclamato il primo Giubileo della storia.\n\nRoma si riempi di pellegrini da tutta Europa.\nFu un successo senza precedenti.\n\nNel 1300 mai cosi tanto consenso.\nNel 1302 la rivendicazione piu alta di sempre.\nNel 1303 prigioniero in casa propria.\n\nUltima domanda:\n\ncome si riconosce, mentre accade,\nse un potere e al culmine\no sta per crollare?',
       parlato:'Dai il dato del Giubileo alla fine, e non prima: serve a impedire la lettura consolatoria per cui i poteri crollano quando perdono consenso. Qui il consenso c\'era.\n\nPoi la domanda finale. Raccogli qualche risposta e poi da\' quella storica, che e concreta e verificabile: si guarda chi paga, chi ha uomini armati e chi ha un\'assemblea disposta a sostenerlo. Non si guarda che cosa e scritto nei documenti — anzi, le rivendicazioni piu assolute arrivano spesso quando la presa reale si sta allentando, perche si mette per iscritto quello che non si riesce piu a ottenere di fatto.\n\nÈ una regola di lettura che vale per tutto il resto del programma, e vale la pena dirla una volta sola e chiaramente.\n\nPoi chiudi: la prossima volta usciamo dall\'Europa e guardiamo che cosa c\'era intorno mentre succedeva tutto questo.',
       seDicono:[
         {loro:'«Allora chi scrive cose forti e sempre debole?»',
          tu:'Non sempre, e sarebbe una regola comoda e falsa: Innocenzo III scriveva cose fortissime ed era fortissimo. La regola utile e un\'altra: non dedurre il potere dalle dichiarazioni. Vai a vedere le entrate, gli uomini e le alleanze, e poi rileggi il documento.'}
       ]}
    ],
    riserve:[
      {titolo:'Che cos\'e davvero la Magna Carta',
       corpo:'Nel 1215 i baroni inglesi in rivolta impongono a Giovanni Senzaterra un documento di sessantatre articoli. Il piu famoso, il trentanovesimo, stabilisce che nessun uomo libero sara arrestato, imprigionato o privato dei propri beni se non per legittimo giudizio dei suoi pari e secondo la legge del paese.\n\nMa «uomo libero», nell\'Inghilterra del 1215, esclude la maggioranza della popolazione rurale. E il documento e prima di tutto un accordo fra il re e i suoi grandi vassalli su tasse, eredita e diritti feudali.\n\nPapa Innocenzo III la annullo pochi mesi dopo, definendola estorta con la violenza. Fu riemessa piu volte nei decenni successivi.',
       chiedi:'Un patto fra un re e i suoi baroni diventa, secoli dopo, il simbolo dei diritti di tutti. Come succede? E che cosa dice, del modo in cui i testi vivono, il fatto che il suo significato attuale non fosse nelle intenzioni di chi lo scrisse?'},
      {titolo:'Il Giubileo del 1300',
       corpo:'Bonifacio VIII proclama che chi si rechera a Roma e visitera le basiliche di San Pietro e San Paolo per un certo numero di giorni ricevera l\'indulgenza plenaria.\n\nL\'afflusso e enorme: le cronache parlano di duecentomila presenze, cifra probabilmente esagerata ma indicativa. Dante, che secondo alcuni vi partecipo, ricorda nell\'Inferno il senso unico organizzato su Ponte Sant\'Angelo per gestire la folla.\n\nFu anche un\'operazione economica di grande successo per Roma.',
       chiedi:'Un\'iniziativa che unisce devozione popolare, prestigio politico e introiti. Perche tre anni dopo tutto questo non serve a proteggere il papa da un pugno di mercenari? Che cosa non compra, il consenso?'},
      {titolo:'Dante ad Anagni',
       corpo:'Dante detestava Bonifacio VIII, che riteneva responsabile del proprio esilio, e lo colloca all\'inferno fra i simoniaci — anticipandone la dannazione, dato che nel 1300, anno del viaggio, era ancora vivo.\n\nEppure, quando racconta Anagni, scrive:\n\n«Veggio in Alagna intrar lo fiordaliso,\ne nel vicario suo Cristo esser catto.\nVeggiolo un\'altra volta esser deriso;\nveggio rinovellar l\'aceto e \'l fele,\ne tra vivi ladroni esser anciso.»',
       chiedi:'Il piu feroce nemico di quel papa descrive l\'aggressione come una nuova passione di Cristo. Come si spiega? E che cosa distingue l\'odio per una persona dal giudizio su cio che quella persona rappresenta?'}
    ],
    testi:[
      {fonte:'Magna Carta, articolo 39 (1215)',
       corpo:'«Nessun uomo libero sara arrestato, imprigionato, spossessato dei suoi beni, dichiarato fuori legge, esiliato o in qualsiasi modo danneggiato, ne noi procederemo o faremo procedere contro di lui, se non in virtu di un legale giudizio dei suoi pari e secondo la legge del paese.»',
       glossa:'Da leggere due volte: la prima per la solennita, la seconda per contare le parole «uomo libero». Il testo che diventera il fondamento dell\'habeas corpus nasce come garanzia di ceto — e proprio per questo mostra come una norma possa essere piu grande di chi l\'ha scritta.'},
      {fonte:'Bolla d\'oro, 1356 — i sette elettori',
       corpo:'Il documento stabilisce che il re dei Romani sia eletto da sette principi: gli arcivescovi di Magonza, Treviri e Colonia, il re di Boemia, il conte palatino del Reno, il duca di Sassonia e il margravio di Brandeburgo. Le elezioni si tengono a Francoforte e l\'esito non richiede alcuna approvazione papale.',
       glossa:'Un secolo prima il papa incoronava e, all\'occorrenza, deponeva. Qui non compare nemmeno. Non c\'e una polemica: c\'e un silenzio, ed e piu efficace di qualunque dichiarazione — l\'Impero smette di essere universale senza che nessuno lo scriva.'},
      {fonte:'Filippo IV il Bello, risposta attribuita a Clericis laicos, 1296',
       corpo:'Alla bolla che vietava di tassare il clero, il re di Francia rispose vietando l\'esportazione di oro, argento e preziosi dal regno — cioe tagliando i trasferimenti di denaro dal clero francese alla curia romana. Bonifacio VIII, in meno di un anno, ammorbidi la propria posizione.',
       glossa:'Il modo piu rapido per far capire che cosa sia il potere effettivo: a una bolla si risponde con un provvedimento doganale, e vince il provvedimento doganale. Vale la pena chiedere alla classe di trovare esempi contemporanei della stessa asimmetria.'}
    ],
    compito:'Mezza pagina. Cercate una dichiarazione solenne — di uno Stato, di un\'organizzazione, di un\'istituzione qualunque — che affermi un\'autorita molto ampia. Poi provate a rispondere alle tre domande di oggi: chi paga, chi ha uomini a disposizione, chi la sosterrebbe se venisse contestata. Non serve concludere: serve vedere se le risposte coincidono con la dichiarazione.',
    fonti:[
      'Bonifacio VIII, Unam Sanctam (1302) e Clericis laicos (1296)',
      'Magna Carta (1215), articoli 12, 14, 39, 61; Bolla d\'oro (1356)',
      'Dante, Purgatorio XX 85-93 (Anagni); Inferno XVIII 28-33 (il Giubileo); Inferno XIX (i simoniaci)',
      'J. Le Goff, Il basso Medioevo; G. Tabacco, Le ideologie politiche del medioevo',
      'A. Paravicini Bagliani, Bonifacio VIII',
      'J.R. Strayer, Le origini medievali dello Stato moderno'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Storia medievale · 6 — Le civiltà extraeuropee': {
  mappa: {
    n:'Il mondo fuori dall\'Europa', d:'VII-XV secolo: dove stavano davvero i centri',
    f:[
      {r:'il piu vicino e', n:'Il mondo islamico', d:'in un secolo dall\'Atlantico all\'Indo',
       f:[
         {r:'si organizza in', n:'Califfati', d:'e ogni spostamento di capitale e un cambio di civilta',
          f:[{r:'gli', n:'Omayyadi a Damasco', d:'661-750: espansione, e un\'aristocrazia araba al comando'},
             {r:'gli', n:'Abbasidi a Baghdad', d:'dal 762: capitale nuova, costruita apposta, aperta a persiani e non arabi'},
             {piu:true, r:'e in Spagna', n:'Il califfato di Cordova', d:'dal 929: la citta piu grande d\'Europa occidentale'}]},
         {r:'fonda', n:'La Casa della Sapienza', d:'Baghdad, IX secolo: traduzione sistematica di greci, persiani, indiani'},
         {r:'produce', n:'Scienza in tutti i campi', d:'e per secoli e la piu avanzata del mondo',
          f:[{r:'l\'', n:'Algebra', d:'da al-Khwarizmi, il cui nome ci ha dato «algoritmo»'},
             {r:'l\'', n:'Ottica', d:'Alhazen: la luce entra nell\'occhio, non esce — e la fine di una teoria antica'},
             {r:'la', n:'Medicina', d:'il Canone di Avicenna resta manuale nelle universita europee per secoli'},
             {piu:true, r:'e la', n:'Chirurgia di Abulcasis', d:'con il primo repertorio illustrato di strumenti'}]},
         {r:'conserva e commenta', n:'Aristotele', d:'e attraverso Averroe torna in Europa nel Duecento'},
         {r:'e prende dalla Cina', n:'La carta', d:'dopo Talas, 751: e senza carta niente amministrazione e niente libri'}
       ]},

      {r:'accanto c\'e', n:'Bisanzio', d:'l\'impero romano che non e mai caduto',
       f:[
         {r:'si chiama', n:'Impero dei Romani', d:'i suoi abitanti si dicono Romaioi: «bizantino» e un termine moderno'},
         {r:'ha', n:'Un\'amministrazione continua', d:'fisco, diritto, funzionari: nessuna interruzione dall\'antichita',
          f:[{piu:true, r:'e il', n:'Corpus iuris di Giustiniano', d:'la base di tutto il diritto europeo continentale'}]},
         {r:'si divide sull\'', n:'Iconoclastia', d:'VIII-IX secolo: si possono raffigurare le cose sacre?'},
         {r:'si separa da Roma con', n:'Lo scisma del 1054', d:'che diventa irreparabile solo nel 1204'},
         {r:'crolla dopo', n:'Manzikert 1071', d:'e non si riprende mai del tutto'},
         {r:'e finisce nel', n:'1453', d:'Costantinopoli presa dagli Ottomani con le bombarde'}
       ]},

      {r:'il piu grande e', n:'La Cina', d:'Tang e Song: la civilta piu avanzata del mondo',
       f:[
         {r:'inventa', n:'Quattro cose che cambiano tutto', d:'e arrivano in Europa secoli dopo',
          f:[{r:'la', n:'Stampa a caratteri mobili', d:'Bi Sheng, XI secolo: quattrocento anni prima di Gutenberg'},
             {r:'la', n:'Polvere da sparo', d:'usata in armi gia nel XIII secolo'},
             {r:'la', n:'Bussola', d:'per la navigazione dall\'XI secolo'},
             {r:'e la', n:'Carta moneta', d:'emessa dallo Stato: l\'Europa ci arrivera settecento anni dopo'}]},
         {r:'si governa con', n:'Una burocrazia per esame', d:'i funzionari si scelgono con concorsi pubblici sui classici',
          f:[{r:'quindi', n:'Non e una nobilta di sangue', d:'almeno in teoria: e un\'idea che l\'Europa non ha'}]},
         {r:'ha', n:'Citta enormi', d:'Hangzhou e forse la piu popolosa del mondo nel XIII secolo'},
         {r:'e ospita', n:'Marco Polo', d:'o comunque il libro che ne porta il nome, e in Europa non gli credono',
          f:[{piu:true, r:'lo chiamavano', n:'Il Milione', d:'e «milione» divento sinonimo di esagerazione'}]}
       ]},

      {r:'a sud c\'e', n:'L\'India', d:'e da li vengono i numeri che usiamo',
       f:[
         {r:'elabora', n:'Il sistema decimale posizionale', d:'con lo zero come cifra, non solo come assenza',
          f:[{r:'passa agli arabi', n:'E poi a noi', d:'li chiamiamo «numeri arabi» ed erano indiani'},
             {piu:true, r:'lo porta in Italia', n:'Leonardo Fibonacci', d:'nel Liber abaci, 1202, imparandolo a Bugia in Algeria'}]},
         {r:'si frammenta in', n:'Molti regni', d:'e nel Nord si insedia il Sultanato di Delhi dal 1206'},
         {r:'e sta al centro', n:'Dell\'Oceano Indiano', d:'la rete commerciale piu ricca del mondo, mossa dai monsoni'}
       ]},

      {r:'in Africa ci sono', n:'Imperi del Sahel', d:'e nessuno in Europa ne sa quasi nulla',
       f:[
         {r:'si succedono', n:'Ghana, Mali, Songhai', d:'fra VIII e XVI secolo, sul commercio transahariano'},
         {r:'scambiano', n:'Oro contro sale', d:'l\'oro del Sud contro il sale del Sahara, a peso'},
         {r:'con', n:'Mansa Musa', d:'imperatore del Mali, forse l\'uomo piu ricco mai esistito',
          f:[{r:'nel 1324 compie', n:'Il pellegrinaggio alla Mecca', d:'con una carovana enorme, passando dal Cairo'},
             {r:'e distribuisce tanto oro', n:'Da farne crollare il prezzo', d:'in Egitto il valore dell\'oro resta depresso per anni'}]},
         {r:'ha come centro', n:'Timbuctu', d:'mercato, moschee e biblioteche: migliaia di manoscritti'},
         {r:'sulla costa', n:'Le citta swahili', d:'Kilwa, Mombasa, Mogadiscio: commercio con India e Cina'},
         {piu:true, r:'e resiste', n:'L\'Etiopia cristiana', d:'con le chiese scavate nella roccia a Lalibela'}
       ]},

      {r:'dall\'altra parte del mondo', n:'Le Americhe', d:'senza contatti, e con soluzioni diverse',
       f:[
         {r:'i', n:'Maya', d:'matematica, astronomia, scrittura, e uno zero indipendente',
          f:[{r:'con un', n:'Calendario di precisione altissima', d:'e cicli lunghi migliaia di anni'}]},
         {r:'gli', n:'Aztechi', d:'e Tenochtitlan, costruita su un lago',
          f:[{piu:true, r:'con', n:'Chinampe', d:'campi galleggianti: fra le agricolture piu produttive del mondo'}]},
         {r:'gli', n:'Inca', d:'un impero di quattromila chilometri lungo le Ande',
          f:[{r:'tenuto da', n:'Una rete di strade e corrieri', d:'i chasqui: staffette a piedi, piu veloci di un cavallo su quei percorsi'},
             {r:'e amministrato con', n:'I quipu', d:'cordicelle annodate: contabilita senza scrittura alfabetica'},
             {r:'e tutto questo', n:'Senza ruota e senza ferro', d:'e senza animali da tiro adatti'}]}
       ]},

      {r:'tutto e tenuto insieme da', n:'Reti lunghe', d:'e il mondo e gia connesso',
       f:[
         {r:'la', n:'Via della seta', d:'carovane dalla Cina al Mediterraneo, per tappe e intermediari'},
         {r:'l\'', n:'Oceano Indiano', d:'la rete piu ricca: mercanti arabi, indiani, cinesi, swahili'},
         {r:'la', n:'Transahariana', d:'oro, sale, schiavi, libri'},
         {r:'la', n:'Pax mongolica', d:'nel Duecento un solo impero dalla Corea all\'Ungheria rende le strade sicure',
          f:[{r:'ed e allora', n:'Che partono i mercanti europei', d:'i Polo arrivano perche qualcun altro ha unificato il continente'}]},
         {r:'e su queste vie viaggia anche', n:'La peste', d:'nel 1347 arriva in Europa dai porti del Mar Nero'}
       ]},

      {r:'lascia', n:'Una questione di sguardo', d:'e riguarda come lo raccontiamo',
       f:[
         {r:'intorno al 1300', n:'L\'Europa e periferica', d:'per ricchezza, dimensioni urbane e tecnologia'},
         {r:'quasi tutto cio che usa', n:'Viene da fuori', d:'carta, numeri, bussola, polvere, Aristotele'},
         {r:'ma non e passiva', n:'Adotta e combina', d:'e in due secoli trasforma cio che riceve'},
         {r:'e la parola', n:'«Scoperta»', d:'dice il punto di vista di chi arriva, non di chi c\'era gia'},
         {piu:true, r:'e i manuali', n:'Chiamano «medioevo» tutto', d:'una periodizzazione europea applicata a mondi che non l\'hanno vissuta'}
       ]}
    ],
    incroci:[
      {da:'La carta', a:'La Casa della Sapienza', r:'e la condizione materiale di',
       perche:'Tradurre e copiare migliaia di opere greche, persiane e indiane su papiro o pergamena sarebbe costato troppo. La carta, presa dai prigionieri cinesi dopo la battaglia di Talas, rende economicamente possibile un\'impresa culturale di quelle dimensioni.'},
      {da:'Aristotele', a:'Medicina', r:'arriva in Europa insieme alla',
       perche:'Non si riceve un filosofo per volta: i testi arrivano in blocchi, tradotti dagli stessi centri e spesso dagli stessi uomini. Il Duecento europeo scopre insieme la logica di Aristotele, il Canone di Avicenna e l\'algebra — ed e per questo che l\'universita cambia in una generazione.'},
      {da:'Il sistema decimale posizionale', a:'Viene da fuori', r:'e il caso piu quotidiano di cio che',
       perche:'Con i numeri romani non si fanno moltiplicazioni e divisioni in colonna. Fibonacci impara le cifre indiane in un porto nordafricano dove il padre commerciava: le dieci cifre che tutti usano ogni giorno entrano in Europa dalla porta del commercio, e le chiamiamo ancora «arabe» pur essendo indiane.'},
      {da:'Pax mongolica', a:'Marco Polo', r:'e la condizione che permette il viaggio di',
       perche:'Nel Duecento un solo impero controlla le strade dalla Corea all\'Ungheria e le rende percorribili. I mercanti europei non arrivano in Cina perche sono diventati piu intraprendenti: arrivano perche qualcun altro ha unificato il continente.'},
      {da:'La peste', a:'Via della seta', r:'viaggia sulle stesse rotte della',
       perche:'Le reti che portano seta, spezie e idee portano anche i ratti e le pulci. La connessione del mondo non ha solo effetti positivi, e il 1347 e la prova piu dura: la globalizzazione medievale uccide un terzo dell\'Europa.'},
      {da:'Da farne crollare il prezzo', a:'L\'Europa e periferica', r:'e la dimostrazione piu concreta che',
       perche:'Un sovrano africano che attraversa il Cairo distribuendo doni fa scendere il valore dell\'oro in Egitto per anni. Nessun re europeo del Trecento avrebbe potuto muovere un mercato in quel modo: e un dato, non un\'opinione.'},
      {da:'Una burocrazia per esame', a:'Non e una nobilta di sangue', r:'produce',
       perche:'Selezionare i funzionari con concorsi pubblici sui testi classici significa che, almeno in linea di principio, la carica non si eredita. È l\'idea piu lontana dall\'Europa feudale del tempo — e quando gli europei la scopriranno, nel Settecento, la useranno come argomento contro i propri privilegi di nascita.'},
      {da:'Senza ruota e senza ferro', a:'Una rete di strade e corrieri', r:'rende ancora piu notevole',
       perche:'Un impero lungo quattromila chilometri tenuto insieme da staffette a piedi, senza ruota, senza ferro e senza animali da tiro. Misura la distanza fra «tecnologia» e «organizzazione»: gli Inca risolvono con la seconda quello che altrove si risolve con la prima.'},
      {da:'Lo scisma del 1054', a:'1453', r:'contribuisce all\'isolamento che porta al',
       perche:'Quando gli Ottomani stringono l\'assedio, l\'Occidente latino manda pochissimo: due secoli e mezzo prima un esercito crociato aveva saccheggiato quella stessa citta. La frattura religiosa era diventata anche una rottura politica, e Bisanzio muore quasi sola.'},
      {da:'Il califfato di Cordova', a:'Viene da fuori', r:'e una delle porte da cui',
       perche:'Toledo, dopo la riconquista cristiana, resta una citta trilingue dove ebrei, musulmani e cristiani traducono insieme. La maggior parte del sapere greco e arabo entra in Europa da li e dalla Sicilia — cioe da dove si conviveva, non da dove si combatteva.'},
      {da:'«Scoperta»', a:'Una questione di sguardo', r:'e l\'esempio piu chiaro di',
       perche:'Una parola che sembra neutra contiene un punto di vista: scoperto per chi? Chi ci abitava non aveva bisogno di essere trovato. Accorgersi delle parole che usiamo e la parte piu difficile e piu utile dello studio della storia.'},
      {da:'Adotta e combina', a:'Quattro cose che cambiano tutto', r:'e quello che l\'Europa fa con le',
       perche:'Stampa, polvere, bussola e carta sono cinesi, ma in Europa vengono usate in modi che in Cina non avevano avuto: la stampa per un mercato di libri in lingue volgari, la bussola per l\'oceano aperto, la polvere per artiglierie da assedio. Ricevere non e copiare, ed e questo che rende la storia difficile da raccontare con i buoni e i cattivi.'}
    ]
  },
  provocazione: {
    titolo:'Chi era la periferia',
    durata:'55 minuti',
    domandaMadre:'Che cosa rende «centrale» una civilta — e chi decide dove sta il centro?',
    perche:'La classe colloca istintivamente l\'Europa al centro del mondo medievale e scopre, con dati verificabili, che intorno al 1300 era la parte meno ricca, meno urbanizzata e meno avanzata dell\'Eurasia. Ma l\'ora non si limita a ribaltare il mito: mostra che l\'Europa non e stata passiva, e soprattutto — con il caso di Zheng He — che la superiorita tecnica non decide niente da sola, perche a decidere sono le scelte politiche. Si chiude su una domanda di metodo che vale per tutto il programma: come si riconosce, dall\'interno, di stare guardando il mondo da un solo punto di vista.',
    occorrente:'Un planisfero, meglio se non centrato sull\'Europa.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Domanda secca.\n\nIntorno al 1300, quali erano\nle citta piu grandi del mondo?\n\nScrivetene tre.\n\n───\n\nParigi, la piu grande d\'Europa,\nfaceva forse duecentomila abitanti.\n\nHangzhou, in Cina, ne faceva\nprobabilmente diverse volte tanto.\nIl Cairo, Baghdad, Delhi\nerano fuori dalla portata di qualunque citta europea.\n\nNessuna citta europea\nentrava nelle prime dieci del mondo.',
       parlato:'Fai scrivere davvero le tre citta prima di mostrare la seconda parte: quasi tutti scrivono Roma, Parigi, Londra, Costantinopoli.\n\nPoi dai i numeri, precisando che le stime demografiche antiche sono discusse e che l\'ordine di grandezza pero non e in discussione.\n\nLascia il tempo alla sorpresa, e poi la domanda che apre l\'ora: se non era li il centro del mondo, dov\'era? E perche noi lo mettiamo sempre in Europa?\n\nSe qualcuno protesta che le citta grandi non contano molto, va benissimo: chiedigli che cosa conterebbe di piu, e prendi nota della risposta. La useremo.',
       seDicono:[
         {loro:'«Le citta grandi non vogliono dire niente: contano le idee.»',
          tu:'Allora contiamo anche quelle. Nel 1300 l\'algebra, l\'ottica, la medicina e i commenti ad Aristotele arrivano dal mondo islamico; i numeri che usiamo dall\'India; carta, bussola, stampa e polvere dalla Cina. Su quale voce l\'Europa era in vantaggio?'},
         {loro:'«Ma poi ha vinto l\'Europa, quindi era migliore.»',
          tu:'Attento a ragionare dal risultato: e come dire che chi ha vinto la partita era la squadra piu forte all\'inizio del campionato. Nel 1300 nessuno avrebbe scommesso sull\'Europa. Quello che dobbiamo capire e proprio che cosa cambia dopo — e non e la superiorita.'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'Nel Trecento l\'Europa era:',
       opzioni:['gia in vantaggio sul resto del mondo', 'una periferia'],
       parlato:'Fai schierare e conta.\n\nPoi metti sul tavolo un fatto solo, e lascialo lavorare.\n\nNel 1324 l\'imperatore del Mali, Mansa Musa, attraversa il Cairo diretto alla Mecca. Distribuisce e spende talmente tanto oro che in Egitto il prezzo dell\'oro resta depresso per anni. Un solo sovrano, di passaggio, muove il mercato di uno dei paesi piu ricchi del mondo.\n\nChiedi: quale re europeo del Trecento avrebbe potuto fare una cosa simile?\n\nNessuno. E questo non e un giudizio: e un dato registrato dai cronisti egiziani.',
       seDicono:[
         {loro:'«L\'Africa nel Medioevo? Non c\'era niente.»',
          tu:'C\'erano imperi grandi come mezza Europa, un commercio d\'oro che riforniva anche le zecche europee, e a Timbuctu biblioteche con migliaia di manoscritti. Il fatto che a scuola non se ne parli non e un\'informazione sull\'Africa: e un\'informazione sui nostri programmi.'},
         {loro:'«Se erano cosi avanti, perche poi non hanno dominato loro?»',
          tu:'È la domanda giusta e ci arriviamo fra venti minuti, con un caso preciso. Anticipo solo che la risposta non e «perche erano meno bravi».'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Facciamo l\'inventario di quello\nche l\'Europa usa nel Quattrocento.\n\nLA CARTA — dalla Cina, attraverso il mondo islamico.\nI NUMERI, con lo zero — dall\'India, attraverso gli arabi.\nLA BUSSOLA — dalla Cina.\nLA POLVERE DA SPARO — dalla Cina.\nLA STAMPA A CARATTERI MOBILI — in Cina dall\'XI secolo.\nL\'ALGEBRA — da al-Khwarizmi, il cui nome\nci ha dato la parola «algoritmo».\nARISTOTELE — conservato, commentato e restituito\ndagli arabi, tradotto a Toledo e in Sicilia.\nLA MEDICINA — il Canone di Avicenna e manuale\nnelle universita europee per secoli.',
       parlato:'Leggi l\'elenco lentamente: fa piu effetto se ogni voce ha il suo momento.\n\nPoi la precisazione che impedisce di sostituire un mito con un altro, e va fatta con la stessa fermezza. L\'Europa non e stata passiva. Riceve la bussola e la usa per l\'oceano aperto, non per il cabotaggio. Riceve la polvere e ne fa artiglierie da assedio che abbattono le mura. Riceve la stampa e la applica a un mercato di libri in lingue volgari.\n\nRicevere non e copiare. Ma nemmeno inventare.\n\nE il punto di metodo, che e il cuore del tempo: nella storia le cose viaggiano. Le civilta non sono contenitori chiusi con dentro il proprio genio — sono nodi di una rete. Nel Duecento un solo impero, quello mongolo, tiene le strade aperte dalla Corea all\'Ungheria, ed e allora che i mercanti europei arrivano in Cina. Non perche fossero diventati piu coraggiosi: perche qualcun altro aveva unificato il continente.',
       seDicono:[
         {loro:'«Allora l\'Europa non ha inventato niente.»',
          tu:'Non e quello che ho detto, ed e importante non ribaltare il mito. Ha inventato moltissimo — gli occhiali, l\'orologio meccanico, la cambiale, l\'universita come corporazione. Il punto e che nessuno inventa da solo, e che chi si racconta come autosufficiente sta sempre dimenticando qualcosa.'},
         {loro:'«Perche a scuola non ci dicono queste cose?»',
          tu:'Perche i programmi di storia sono nati nell\'Ottocento per costruire le nazioni europee, e raccontavano da dove veniamo, non che cosa succedeva altrove. Sta cambiando, lentamente. Ed e un buon esempio del fatto che anche i programmi scolastici hanno una storia.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'Un funzionario egiziano, al-Umari,\nraccoglie al Cairo le testimonianze\nsul passaggio di Mansa Musa,\ndodici anni dopo i fatti:\n\n«Quest\'uomo inondo il Cairo dei suoi benefici.\nNon vi fu persona, titolare di una carica\no detentore di un ufficio regale,\nche non ricevesse da lui una somma d\'oro.\n\nGli abitanti del Cairo ricavarono guadagni\nincalcolabili da lui e dal suo seguito,\ncomprando e vendendo, dando e prendendo.\n\nEssi cambiarono l\'oro\nfinche ne fecero scendere il valore in Egitto\ne ne deprezzarono il prezzo.»',
       testo:{fonte:'al-Umari, Masalik al-absar, circa 1337 (il pellegrinaggio e del 1324)',
              glossa:'La fonte e egiziana, non africana e non europea: e un funzionario del sultano che raccoglie testimonianze dodici anni dopo. Utile per due ragioni: dice qualcosa di verificabile — un\'oscillazione di mercato — e ricorda che nel Trecento esisteva una rete di cronisti, archivi e informazioni che non passava per l\'Europa.'},
       parlato:'Leggi il passo e fermati sull\'ultima frase, che e l\'unica veramente misurabile: il prezzo dell\'oro scende. Non e un elogio di cortesia, e un effetto economico registrato.\n\nPoi chiedi alla classe di ragionare da storici: che cosa serve per credere a un testo simile? Che ci siano altre fonti, che l\'effetto sia coerente con quello che sappiamo del commercio dell\'oro, che l\'autore non abbia un interesse a esagerare. In questo caso tutte e tre reggono ragionevolmente.\n\nSe c\'e tempo, il collegamento con l\'Europa: buona parte dell\'oro che circolava nelle zecche europee — compreso quello dei fiorini — arrivava dal Sahel attraverso il Sahara. La ricchezza di Firenze e quella del Mali stanno sulla stessa rotta.',
       seDicono:[
         {loro:'«Magari esageravano per fare colpo.»',
          tu:'È il dubbio giusto, e va tenuto. Ma nota che l\'effetto descritto — un crollo del prezzo dell\'oro — e verificabile con altre fonti sul mercato egiziano, e che una carovana enorme che spende per mesi in una citta produce davvero quel risultato. Il dubbio si risolve controllando, non scegliendo che cosa preferiamo credere.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'1405. Ottantasette anni prima di Colombo.\n\nL\'ammiraglio cinese Zheng He salpa\ncon una flotta di centinaia di navi\ne decine di migliaia di uomini.\n\nLe misure riportate dalle fonti sono discusse,\nma le navi erano di gran lunga\npiu grandi di qualunque nave europea del tempo.\n\nIn sette spedizioni raggiunge l\'India,\nil Golfo Persico, le coste dell\'Africa orientale.\n\nPoi, dopo il 1433, la Cina smette.\nLe spedizioni vengono interrotte,\nla costruzione di grandi navi d\'altura limitata,\nla documentazione trascurata.\n\nNon perche non potesse.\nPerche decise di no.',
       parlato:'Dai i dati e poi la domanda, che e la piu importante dell\'ora: perche smette?\n\nRaccogli le ipotesi e poi da\' le ragioni che gli storici indicano: il costo enorme e nessun ritorno economico chiaro, dato che la Cina non aveva bisogno di comprare quasi nulla; la pressione militare sulle frontiere del nord, che assorbiva risorse; e un conflitto interno alla corte fra la burocrazia confuciana e gli eunuchi che promuovevano le spedizioni.\n\nPoi il punto, che vale per tutto il programma di quinta: la superiorita tecnica non decide niente da sola. La Cina aveva le navi e non ando; l\'Europa aveva navi peggiori e ando.\n\nE il rovescio che completa il ragionamento: gli europei si mettono in mare non perche siano superiori, ma perche hanno bisogno. Le rotte terrestri verso l\'Oriente sono controllate da altri, le spezie costano moltissimo, e l\'Atlantico e l\'unica strada che non e in mano a nessuno. La necessita, non l\'eccellenza.',
       seDicono:[
         {loro:'«Che errore hanno fatto i cinesi!»',
          tu:'Con il senno di poi. All\'epoca era una decisione ragionevole: spendere una fortuna per raggiungere paesi che avevano poco da offrirti, mentre al nord premono eserciti veri. Giudicare le scelte del passato sapendo come e finita e il modo piu sicuro per non capirle.'},
         {loro:'«Quindi se la Cina continuava, scopriva lei l\'America?»',
          tu:'Forse, ma attenzione: le loro rotte andavano verso ovest, lungo coste conosciute, con i monsoni. Nessuno aveva ragione di attraversare un oceano vuoto verso est. Colombo ci prova perche sbaglia i calcoli e perche cerca una scorciatoia per le Indie: anche il caso conta.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Torniamo alla prima domanda.\n\nAdesso sapete che intorno al 1300\nl\'Europa era una periferia\nricca di energia e povera di tutto il resto.\n\nE avete visto due parole da guardare bene:\n\n«SCOPERTA» — scoperto per chi?\nChi ci abitava non aveva bisogno di essere trovato.\n\n«MEDIOEVO» — di chi?\nÈ una periodizzazione europea\napplicata a mondi che non l\'hanno vissuta.\n\nUltima domanda:\n\nche cosa rende «centrale» una civilta —\ne chi decide dove sta il centro?',
       parlato:'Rifai la conta iniziale e mostra lo spostamento.\n\nPoi lavora sulle due parole. «Scoperta» e la piu facile da vedere una volta indicata; «medioevo» e piu sottile e vale la pena spiegarla: mezzo fra che cosa? Fra l\'antichita e il rinascimento, che sono categorie della storia europea. Applicarla alla Cina dei Song o al Mali non significa niente — eppure lo facciamo, anche in questo capitolo, perche non abbiamo altre parole.\n\nChiudi con la domanda finale, e non darle una risposta. Se qualcuno prova a rispondere, la contromossa utile e chiedere: e nel 1300, chi lo avrebbe detto?\n\nUltima riga, se serve: fra pochi decenni l\'Europa uscira dai propri confini, e la prima cosa che fara sara chiamare «nuovo» un mondo abitato da millenni.',
       seDicono:[
         {loro:'«Quindi tutto e relativo, ogni punto di vista vale.»',
          tu:'No, e sarebbe la conclusione sbagliata. I dati sulle popolazioni, sulle invenzioni e sul prezzo dell\'oro non sono punti di vista: sono fatti. Quello che cambia e la cornice con cui li ordiniamo — e una cornice si puo criticare, correggere e discutere. Accorgersene non serve a rinunciare a giudicare: serve a giudicare meglio.'}
       ]}
    ],
    riserve:[
      {titolo:'Il Milione, cioe l\'esagerazione',
       corpo:'Il libro dettato da Marco Polo in prigione a Genova descrive citta con milioni di abitanti, ponti di pietra a centinaia, carta usata come moneta, carbone che brucia meglio della legna.\n\nIn Europa non gli credettero. Il soprannome del libro, «Il Milione», divento sinonimo di racconto esagerato, e la parola «milionario» conserva ancora quell\'origine.\n\nQuasi tutto quello che raccontava e stato poi confermato.',
       chiedi:'Che cosa serve, a un\'informazione vera, per essere creduta? E che cosa dice di una societa il fatto che consideri assurdo cio che semplicemente non ha mai visto?'},
      {titolo:'Le biblioteche di Timbuctu',
       corpo:'Timbuctu, sul grande arco del Niger, era un nodo del commercio transahariano e insieme un centro di studio. Nelle sue madrase e nelle biblioteche private si copiavano e conservavano manoscritti di diritto, astronomia, matematica, medicina, poesia.\n\nDecine di migliaia di quei manoscritti sono sopravvissuti fino a oggi, conservati per generazioni dalle famiglie. Nel 2012, durante l\'occupazione jihadista della citta, migliaia di volumi furono messi in salvo e trasportati clandestinamente a Bamako da bibliotecari e cittadini.',
       chiedi:'Un patrimonio scritto che sopravvive per secoli grazie a famiglie private, e che nel 2012 viene salvato di nascosto. Perche, secondo voi, l\'idea di un\'Africa senza scrittura e cosi diffusa? E chi ci ha guadagnato dal fatto che lo fosse?'},
      {titolo:'Contare senza scrivere',
       corpo:'L\'impero inca si estendeva per circa quattromila chilometri lungo le Ande, e non conosceva la scrittura alfabetica, la ruota, il ferro, ne animali da tiro adatti.\n\nEppure funzionava: una rete di strade con magazzini e stazioni, corrieri a staffetta chiamati chasqui che trasmettevano messaggi a grande velocita, e un sistema di registrazione fatto di cordicelle annodate, i quipu, con cui si tenevano censimenti, tributi e magazzini.\n\nGli studiosi discutono ancora se i quipu registrassero solo numeri o anche informazioni non numeriche.',
       chiedi:'Che cosa e piu difficile: inventare una tecnologia o organizzare quattro milioni di persone senza di essa? E quali cose, oggi, funzionano perche c\'e organizzazione e non perche c\'e tecnologia?'}
    ],
    testi:[
      {fonte:'Ibn Battuta, Rihla — il viaggiatore che percorse il mondo, XIV secolo',
       corpo:'Il marocchino Ibn Battuta parti nel 1325 per il pellegrinaggio e torno dopo circa trent\'anni, avendo percorso — secondo i calcoli moderni — molto piu di centomila chilometri: Africa orientale, Arabia, Persia, India, forse la Cina, e poi il Mali.\n\nDappertutto trovo giudici, mercanti e studiosi che parlavano la sua lingua e conoscevano il suo diritto, e in piu di un luogo fu assunto come magistrato.',
       glossa:'È il dato piu efficace per far capire che cosa fosse il mondo islamico: uno spazio in cui un uomo poteva viaggiare per trent\'anni trovando ovunque la stessa lingua colta, le stesse leggi e un lavoro. L\'Europa del Trecento non aveva niente di simile.'},
      {fonte:'al-Khwarizmi, Kitab al-jabr wa-l-muqabala, IX secolo',
       corpo:'Il titolo del trattato — «il libro del ripristino e del bilanciamento» — indica le due operazioni fondamentali per risolvere un\'equazione: spostare i termini da una parte all\'altra e semplificare. Da al-jabr viene «algebra»; dal nome dell\'autore, latinizzato, viene «algoritmo».',
       glossa:'Due parole che gli studenti usano ogni giorno e che portano dentro la loro origine. Vale la pena farle cercare in classe: quante altre parole di uso comune vengono dall\'arabo — zero, cifra, zenit, ammiraglio, dogana, magazzino, tariffa.'},
      {fonte:'Editti Ming sulla navigazione, dopo il 1433',
       corpo:'Dopo l\'ultima spedizione di Zheng He le grandi flotte non vengono piu allestite. Nei decenni successivi la corte limita la costruzione di navi d\'altura e riduce i traffici marittimi ufficiali, concentrando le risorse sulle frontiere settentrionali.',
       glossa:'Non esiste un unico decreto che «chiuda» la Cina, ed e importante dirlo: si tratta di una serie di scelte di bilancio e di priorita, prese da una corte in conflitto interno. Le grandi svolte storiche raramente hanno un documento unico — quasi sempre sono decisioni piccole che, sommate, cambiano la direzione.'}
    ],
    compito:'Mezza pagina. Prendete cinque oggetti o parole che usate ogni giorno e cercate da dove vengono — non chi li ha venduti, ma dove sono nati. Poi rispondete a una domanda: quanti di essi avreste attribuito d\'istinto all\'Europa? Se la risposta e «quasi tutti», provate a spiegare perche.',
    fonti:[
      'al-Umari, Masalik al-absar (sul Mali e Mansa Musa); Ibn Battuta, Rihla',
      'Marco Polo, Il Milione; Ibn Khaldun, Muqaddima',
      'J. Needham, Scienza e civilta in Cina; M. Elvin, The Pattern of the Chinese Past',
      'J.L. Abu-Lughod, Before European Hegemony. The World System A.D. 1250-1350',
      'K.N. Chaudhuri, Il mondo dell\'Oceano Indiano; F. Fernandez-Armesto, 1492',
      'Sulle biblioteche di Timbuctu: J. Hunwick, Arabic Literature of Africa'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Storia medievale · 7 — La crisi del Trecento': {
  mappa: {
    n:'La crisi del Trecento', d:'un secolo di catastrofi, e un\'Europa diversa',
    f:[
      {r:'comincia da', n:'Una crescita al limite', d:'intorno al 1300 il motore dell\'anno Mille si ferma',
       f:[
         {r:'sono finite', n:'Le terre buone', d:'si coltivano suoli marginali che rendono poco e si esauriscono presto'},
         {r:'quindi calano', n:'Le rese per ettaro', d:'piu bocche, meno raccolto per bocca'},
         {r:'e ogni anno ci sono', n:'Carestie locali', d:'gia normali prima del Trecento: manca solo il colpo che le renda generali'},
         {r:'e la popolazione e', n:'Al massimo sostenibile', d:'circa settantacinque milioni: ogni annata cattiva diventa una crisi'},
         {r:'peggiora anche', n:'Il clima', d:'finisce l\'optimum medievale e comincia la Piccola eta glaciale',
          f:[{piu:true, r:'e in Groenlandia', n:'Le colonie normanne scompaiono', d:'nel corso del Quattrocento'}]}
       ]},

      {r:'apre con', n:'La grande carestia', d:'1315-1317: la prima catastrofe, e quasi nessuno la ricorda',
       f:[
         {r:'causata da', n:'Tre anni di pioggia', d:'i raccolti marciscono nei campi, in tutta l\'Europa del Nord'},
         {r:'provoca', n:'Una mortalita del cinque-dieci per cento', d:'in molte regioni settentrionali'},
         {r:'e lascia', n:'Una popolazione indebolita', d:'trent\'anni prima della peste, e conta'},
         {piu:true, r:'colpisce anche', n:'Il bestiame', d:'un\'epizoozia bovina fra 1319 e 1321 uccide fino a metà degli animali da lavoro'}
       ]},

      {r:'esplode con', n:'La peste nera', d:'1347-1351: la piu grande catastrofe demografica d\'Europa',
       f:[
         {r:'arriva da', n:'Caffa', d:'porto genovese in Crimea, poi Messina nell\'ottobre 1347',
          f:[{piu:true, r:'e nel giro di', n:'Tre anni copre tutta l\'Europa', d:'seguendo le rotte commerciali, non i confini'}]},
         {r:'e causata da', n:'Yersinia pestis', d:'un batterio, trasmesso dalle pulci dei roditori',
          f:[{r:'in forma', n:'Bubbonica', d:'i bubboni all\'inguine e alle ascelle: letale in circa due casi su tre'},
             {r:'e in forma', n:'Polmonare', d:'si trasmette con il respiro, e uccide quasi sempre'},
             {piu:true, r:'ma il batterio', n:'Identificato solo nel 1894', d:'da Yersin, durante l\'epidemia di Hong Kong'}]},
         {r:'uccide circa', n:'Un terzo degli europei', d:'e in molte citta la meta o piu: le stime restano discusse'},
         {r:'colpisce molto', n:'Medici e preti', d:'chi per mestiere si avvicina ai malati muore in proporzione maggiore',
          f:[{piu:true, r:'e le parrocchie', n:'Restano senza sacerdoti', d:'sostituiti in fretta e male: e un problema che dura decenni'}]},
         {r:'e non finisce', n:'Torna ogni dieci-quindici anni', d:'per tre secoli: e questo a impedire la ripresa demografica'}
       ]},

      {r:'provoca', n:'Reazioni estreme', d:'perche non si capisce che cosa stia succedendo',
       f:[
         {r:'i', n:'Flagellanti', d:'processioni che si autoflagellano per placare l\'ira divina',
          f:[{r:'e vengono', n:'Condannati dal papa', d:'nel 1349: il movimento sfugge a ogni controllo'}]},
         {r:'i', n:'Pogrom', d:'gli ebrei accusati di avvelenare i pozzi: comunita intere sterminate',
          f:[{r:'nonostante', n:'La bolla di Clemente VI', d:'che li difende, osservando che muoiono come tutti gli altri'},
             {piu:true, r:'a Strasburgo', n:'Febbraio 1349', d:'centinaia di ebrei uccisi prima che la peste arrivasse in citta'}]},
         {r:'i medici', n:'Cercano cause nell\'aria', d:'i miasmi, le congiunzioni astrali: e nessuna terapia funziona'},
         {r:'e chi puo', n:'Fugge', d:'ed e la cornice del Decameron: dieci giovani che lasciano Firenze'}
       ]},

      {r:'rovescia', n:'L\'economia', d:'e questo e l\'effetto che quasi nessuno si aspetta',
       f:[
         {r:'perche resta', n:'La stessa terra per meta persone', d:'campi, attrezzi e case non sono spariti: sono spariti gli uomini'},
         {r:'quindi si coltivano', n:'Solo i terreni migliori', d:'la resa media per lavoratore sale'},
         {r:'e il lavoro diventa', n:'Scarso e caro', d:'chi ha braccia puo contrattare, e cambiare padrone'},
         {r:'i salari reali', n:'Crescono molto', d:'in Inghilterra raddoppiano nel secolo successivo'},
         {r:'e migliora', n:'La dieta', d:'piu carne, piu birra: si passa da un\'alimentazione di soli cereali'},
         {r:'e crollano', n:'I prezzi del grano', d:'meno bocche, stessa terra: il cereale vale meno, e la rendita fondiaria con lui'},
         {piu:true, r:'cambia anche', n:'L\'uso del suolo', d:'molti campi diventano pascoli, che richiedono meno braccia'}
       ]},

      {r:'e i padroni', n:'Provano a bloccarlo per legge', d:'capiscono subito che cosa sta succedendo',
       f:[
         {r:'in Inghilterra', n:'Ordinance of Labourers', d:'1349: salari fissati ai livelli di prima della peste',
          f:[{r:'confermata dallo', n:'Statute of Labourers', d:'1351, con pene per chi paga o chiede di piu'}]},
         {r:'ma', n:'Non funziona', d:'chi rispetta la legge perde i braccianti a favore del vicino che non la rispetta'},
         {r:'e applicarla', n:'Provoca rivolte', d:'la repressione fiscale e salariale accende la miccia'},
         {r:'cosi in Occidente', n:'La servitu della gleba finisce', d:'non per una decisione: perche non si riesce piu a imporla'}
       ]},

      {r:'accende', n:'Le rivolte', d:'e per la prima volta i contadini hanno un programma',
       f:[
         {r:'in Francia', n:'Jacquerie', d:'1358: contadini della regione parigina, repressa in due settimane'},
         {r:'a Firenze', n:'Tumulto dei Ciompi', d:'1378: gli operai della lana chiedono una propria corporazione',
          f:[{r:'ottengono', n:'Un governo di sei settimane', d:'poi tutto viene smontato'}]},
         {r:'nelle Fiandre', n:'Le rivolte tessili', d:'le citta della lana si sollevano piu volte: la crisi non e solo contadina'},
         {r:'in Inghilterra', n:'La rivolta del 1381', d:'innescata dalla poll tax, marcia su Londra',
          f:[{r:'guidata da', n:'Wat Tyler', d:'ucciso durante il colloquio con il re quattordicenne'},
             {r:'con il predicatore', n:'John Ball', d:'«quando Adamo zappava ed Eva filava, chi era allora il gentiluomo?»'},
             {piu:true, r:'il re promette', n:'E poi ritira tutto', d:'le concessioni vengono revocate appena la folla si scioglie'}]}
       ]},

      {r:'e lascia', n:'Un\'Europa diversa', d:'piu piccola e, per chi resta, piu ricca',
       f:[
         {r:'la popolazione', n:'Torna ai livelli del 1300 solo nel Cinquecento', d:'due secoli per recuperare'},
         {r:'il rapporto di forza', n:'Si sposta verso il lavoro', d:'per un secolo e mezzo, in Europa occidentale'},
         {r:'la Chiesa esce', n:'Indebolita', d:'preti morti in massa, scisma, e i primi movimenti di riforma',
          f:[{r:'con', n:'Wyclif e Hus', d:'che contestano gerarchia e ricchezza ecclesiastica'}]},
         {r:'e la guerra', n:'Dei Cent\'anni', d:'1337-1453: si combatte durante tutto questo'},
         {r:'e si diffondono', n:'Tecniche che risparmiano braccia', d:'mulini, aratri migliori, allevamento: si sostituisce lavoro con capitale'},
         {piu:true, r:'nell\'arte compare', n:'Il trionfo della morte', d:'e le danze macabre: la mortalita diventa un tema figurativo'}
       ]}
    ],
    incroci:[
      {da:'Al massimo sostenibile', a:'Una popolazione indebolita', r:'e la ragione per cui la carestia lascia',
       perche:'Una societa che vive gia al limite non ha riserve: tre anni di pioggia bastano a farla crollare. Chi sopravvive alla carestia del 1315 arriva alla peste del 1347 con trent\'anni di malnutrizione alle spalle, e questo pesa sulla mortalita.'},
      {da:'Il clima', a:'Tre anni di pioggia', r:'e la ragione di fondo dei',
       perche:'La fine dell\'optimum medievale non si vede come un evento: si vede come una serie di annate storte. Le piogge del 1315-1317 non sono sfortuna isolata, sono il primo colpo di un raffreddamento che durera secoli — ed e per questo che dopo la carestia la situazione non torna come prima.'},
      {da:'La stessa terra per meta persone', a:'Crescono molto', r:'e la causa per cui i salari',
       perche:'La terra, gli attrezzi e le case restano; a mancare sono gli uomini. Quando il fattore scarso diventa il lavoro invece della terra, il prezzo del lavoro sale — e i braccianti, per la prima volta, possono trattare o andarsene.'},
      {da:'Non funziona', a:'La servitu della gleba finisce', r:'e cio che rende inevitabile che',
       perche:'La legge sui salari fallisce non per pieta ma per concorrenza: il signore che la rispetta perde i braccianti a favore del vicino che paga di piu. La servitu occidentale non viene abolita da nessuno — smette di essere applicabile.'},
      {da:'Provoca rivolte', a:'La rivolta del 1381', r:'porta direttamente a',
       perche:'Tentare di riportare per legge i salari indietro di trent\'anni, mentre si impone una tassa uguale per tutti, produce la piu grande rivolta della storia inglese medievale. La repressione economica e la miccia, non la causa remota.'},
      {da:'Torna ogni dieci-quindici anni', a:'Torna ai livelli del 1300 solo nel Cinquecento', r:'spiega perche la popolazione',
       perche:'Un\'epidemia isolata si recupera in una generazione. Ma la peste torna ciclicamente per tre secoli, colpendo soprattutto i bambini nati dopo l\'ondata precedente: e la ripetizione, non il 1348, a tenere ferma la demografia europea per duecento anni.'},
      {da:'La bolla di Clemente VI', a:'Pogrom', r:'non riesce a fermare i',
       perche:'Il papa scrive che gli ebrei muoiono di peste come tutti gli altri e che accusarli e assurdo. Non serve: a Strasburgo il massacro avviene prima ancora che la malattia arrivi in citta. Quando una societa non riesce a spiegarsi una catastrofe, cerca un colpevole disponibile piu che uno plausibile.'},
      {da:'John Ball', a:'Si sposta verso il lavoro', r:'da voce al fatto che il rapporto di forza',
       perche:'«Chi era allora il gentiluomo?» non e una battuta: e la prima volta che la disuguaglianza sociale viene attaccata come non naturale davanti a migliaia di persone. Quel discorso e possibile perche i braccianti hanno appena scoperto di valere di piu.'},
      {da:'Fugge', a:'Il trionfo della morte', r:'appartiene alla stessa reazione culturale di',
       perche:'Il Decameron comincia con dieci giovani che lasciano Firenze e si raccontano storie: la peste sta sullo sfondo di quasi tutta l\'arte del secondo Trecento, come cornice, come danza macabra o come trionfo. Una societa che non sa curare la malattia la rappresenta.'},
      {da:'Ordinance of Labourers', a:'Scarso e caro', r:'e la reazione politica al fatto che il lavoro sia',
       perche:'Il provvedimento arriva nel 1349, cioe mentre la peste e ancora in corso: i proprietari capiscono l\'effetto economico prima ancora che l\'epidemia sia finita. La rapidita della risposta e la prova che il meccanismo era evidente ai contemporanei.'},
      {da:'Wyclif e Hus', a:'Indebolita', r:'nascono dentro una Chiesa',
       perche:'Fra peste, scisma e clero decimato, l\'autorita ecclesiastica esce dal Trecento senza la forza per assorbire il dissenso come aveva fatto con i francescani. Le contestazioni di Wyclif e Hus trovano spazio dove un secolo prima sarebbero state riassorbite o schiacciate.'},
      {da:'Solo i terreni migliori', a:'Le terre buone', r:'inverte il problema delle',
       perche:'Prima della peste si coltivavano suoli marginali perche c\'erano troppe bocche. Dopo, con meta popolazione, si abbandonano i campi peggiori e restano i migliori: la stessa fatica rende di piu. È lo stesso meccanismo dell\'anno Mille, letto al contrario.'}
    ]
  },
  provocazione: {
    titolo:'La peggiore catastrofe della storia europea',
    durata:'55 minuti',
    domandaMadre:'Le cause economiche producono sempre lo stesso effetto?',
    perche:'La classe si trova davanti a un fatto documentato e moralmente scomodo: nei decenni successivi alla peste nera i salari reali dei braccianti raddoppiano, la dieta migliora e la servitu della gleba scompare in Europa occidentale. Deve spiegarlo senza trasformarlo in un elogio della catastrofe, cioe imparando a distinguere fra spiegare e giustificare. E poi arriva il caso che rende l\'ora davvero istruttiva: a est dell\'Elba la stessa peste produce l\'effetto opposto, un irrigidimento della servitu. Stessa causa, esiti contrari, secondo i rapporti di forza. È la lezione che smonta ogni determinismo economico, e serve per tutto il resto del programma.',
    occorrente:'Niente. Il tono conta: si maneggiano venti milioni di morti, e la classe deve sentire che chi parla lo sa.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Fra il 1347 e il 1351 l\'Europa perde\ncirca un terzo della propria popolazione.\nIn molte citta la meta o piu.\n\nÈ la piu grande catastrofe demografica\ndella storia del continente.\n\nNei cinquant\'anni successivi:\n\nin Inghilterra il salario reale di un bracciante\ncirca raddoppia;\nnella dieta compaiono carne e birra\ndove prima c\'erano solo cereali;\nla servitu della gleba scompare\nin tutta l\'Europa occidentale.\n\nCome puo la peggiore catastrofe della storia\naver migliorato la vita di chi e sopravvissuto?',
       parlato:'La prima parte va detta con il peso che ha: non si comincia una lezione sulla peste con leggerezza. Di\' anche che le stime sono discusse e che l\'ordine di grandezza no.\n\nPoi dai i tre dati del dopo, uno per volta, e lascia il silenzio.\n\nLa domanda finale va posta esattamente cosi, senza addolcirla. E poi aggiungi subito la precisazione che tiene in piedi l\'ora, e va detta una volta sola e chiaramente: non stiamo dicendo che la peste sia stata una buona cosa. Stiamo cercando di capire come funzionano le cause. Spiegare non e giustificare, e chi non tiene separate le due cose non riesce a studiare niente di quello che e successo nel Novecento.\n\nSe la classe e a disagio, va bene: e la reazione giusta, e va nominata invece che ignorata.',
       seDicono:[
         {loro:'«È osceno ragionare cosi: sono morti venti milioni di persone.»',
          tu:'Hai ragione a fermarti su quel numero, e non lo dimentichiamo. Ma nota la differenza fra due frasi: "la peste e stata un bene" e "la peste ha avuto anche questa conseguenza". La prima e un giudizio e lo rifiuto; la seconda e un fatto, e se lo rifiutiamo rinunciamo a capire.'},
         {loro:'«Saranno statistiche sbagliate.»',
          tu:'Sono ricostruite da serie di salari e prezzi conservate negli archivi di grandi proprieta, e concordano con le fonti narrative. Il dubbio va bene, ma va portato sui dati: quali numeri ti servirebbero per convincerti?'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'La frase «dopo la peste i sopravvissuti\nstavano meglio»:',
       opzioni:['e un calcolo cinico, e probabilmente falso', 'e vera, e va spiegata'],
       parlato:'Fai schierare e conta. Il primo gruppo e sempre consistente, e non e un errore: e una reazione morale sana che pero va trasformata in ragionamento.\n\nPoi chiedi a tutti di fare un\'operazione semplicissima. La terra e sparita? No. Gli attrezzi? No. Le case, i mulini, i buoi? No, quelli sono rimasti. Che cosa e sparito?\n\nGli uomini.\n\nAllora: se resta la stessa terra per meta persone, che cosa succede a chi ha due braccia e vuole lavorare?\n\nQuasi sempre ci arrivano da soli: puo scegliere, puo chiedere di piu, puo andarsene dal padrone che paga poco. Per la prima volta nella storia europea, il lavoro e la cosa scarsa.',
       seDicono:[
         {loro:'«Ma saranno morti anche i padroni.»',
          tu:'Certo, e in proporzioni simili. Ma un signore morto lascia la terra a un erede: la proprieta si trasmette. Un bracciante morto non lascia due braccia a nessuno. È per questo che il colpo, a parita di mortalita, colpisce in modo diverso i due fattori.'},
         {loro:'«Con meta persone c\'era meta lavoro da fare.»',
          tu:'Non proprio: i campi da arare, i mulini da far girare e le case da riparare erano gli stessi. La domanda di lavoro cala meno dell\'offerta — e la differenza fra le due e esattamente quello che finisce nel salario.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'I proprietari capirono immediatamente.\n\nIn Inghilterra, nel 1349 —\ncioe mentre la peste era ancora in corso —\nviene emanata l\'Ordinance of Labourers:\n\nsalari fissati ai livelli del 1346,\ndivieto di chiedere di piu,\ndivieto di offrire di piu,\nobbligo di accettare il lavoro proposto.\n\nDue anni dopo viene confermata\ne rafforzata con pene detentive.\n\nE non funziona.',
       parlato:'Il dato che colpisce e la data: 1349, con l\'epidemia in corso. Non ci vollero decenni per capire il meccanismo — bastarono mesi. Fallo notare, perche dimostra che l\'effetto economico era evidente ai contemporanei.\n\nPoi la domanda: perche una legge del genere fallisce?\n\nGuidali fino alla risposta, che e istruttiva. Non fallisce per pieta: fallisce per concorrenza. Il signore che rispetta la legge vede i propri braccianti andarsene dal vicino che paga di piu, e resta con i campi incolti. Ogni singolo proprietario ha un interesse a violarla — e quando tutti hanno interesse a violare una legge, la legge non regge.\n\nE quando si prova ad applicarla con la forza, insieme a una tassa uguale per ricchi e poveri, si arriva alla piu grande rivolta della storia inglese medievale: 1381.',
       seDicono:[
         {loro:'«Bastava metterli tutti d\'accordo, i proprietari.»',
          tu:'Ci hanno provato: e proprio quello che e la legge. Ma un accordo che conviene a tutti insieme e non conviene a ciascuno singolarmente non tiene, se non c\'e qualcuno capace di farlo rispettare davvero. Tienilo a mente: e uno dei meccanismi piu ricorrenti della storia economica.'},
         {loro:'«Allora la fine della servitu e merito dei contadini?»',
          tu:'In parte. Ma nota che nessuno l\'ha abolita: si e semplicemente smesso di riuscire a imporla. Molte cose importanti finiscono cosi, senza un atto che le abolisca — e questo rende difficile trovarne la data.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'Dalla legge, 1349:\n\n«Poiche gran parte del popolo,\ne soprattutto dei lavoratori e dei servi,\ne morta di peste,\nalcuni, vedendo la necessita dei padroni\ne la scarsita di servitori,\nnon vogliono servire se non ricevono\nsalari eccessivi.»\n\nE dal predicatore John Ball, 1381,\ndavanti ai contadini in marcia su Londra:\n\n«Quando Adamo zappava ed Eva filava,\nchi era allora il gentiluomo?»',
       testo:{fonte:'Ordinance of Labourers (1349); il distico di John Ball e riportato dai cronisti della rivolta del 1381',
              glossa:'Il testo di legge e prezioso perche ammette il proprio movente: «vedendo la necessita dei padroni». Non dice che i salari alti danneggiano l\'economia — dice che i lavoratori stanno approfittando della situazione. È raro che una fonte confessi cosi apertamente da che parte sta.'},
       parlato:'Leggi la legge e fermati sulla frase «vedendo la necessita dei padroni». È una confessione: il legislatore descrive la propria posizione senza mascherarla, perche nel 1349 non aveva bisogno di mascherarla.\n\nPoi il distico di John Ball, e lascia che lo capiscano da soli. Se in principio c\'erano solo due persone e lavoravano entrambe, la nobilta non e nell\'ordine della creazione: e stata aggiunta da qualcuno. Non e una lamentela sulle tasse — e la contestazione della disuguaglianza come fatto naturale.\n\nDomanda utile: perche una frase simile viene detta proprio in quegli anni e non un secolo prima?\n\nLa risposta chiude il cerchio: perche i braccianti hanno appena scoperto sul mercato di valere piu di prima. Le idee sull\'uguaglianza arrivano quando qualcuno ha la forza per pronunciarle.',
       seDicono:[
         {loro:'«Ma la rivolta e stata schiacciata, quindi non e servita a niente.»',
          tu:'Sul momento si: Wat Tyler ucciso, promesse ritirate, capi giustiziati. Eppure la servitu in Inghilterra continua a sciogliersi nei decenni successivi. Le rivolte quasi sempre perdono e quasi sempre lasciano un segno: il padrone che ha visto marciare i contadini su Londra tratta diversamente.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'E adesso il caso che rovina la spiegazione\nche vi siete appena costruiti.\n\nA est dell\'Elba — Prussia, Polonia, Ungheria,\nRussia — la peste arriva e uccide.\nLa popolazione crolla allo stesso modo.\n\nMa li i contadini non diventano piu liberi.\n\nDiventano meno liberi:\nvengono legati alla terra piu strettamente di prima,\nle giornate di lavoro obbligatorio aumentano,\nla mobilita viene vietata.\n\nGli storici la chiamano «seconda servitu».\n\nStesso batterio. Stesso crollo demografico.\nEsito opposto.',
       parlato:'Dai il fatto e poi la domanda, che e la piu importante dell\'ora: perche?\n\nRaccogli le ipotesi e poi da\' le ragioni che gli storici indicano.\n\nA ovest c\'erano citta forti, dove un servo che scappava trovava lavoro e, dopo un anno e un giorno, la liberta. A est le citta erano poche e deboli: scappare non portava da nessuna parte.\n\nA ovest il potere dei signori era limitato da monarchie, tribunali e comuni. A est i nobili controllavano direttamente la giustizia locale, quindi potevano imporre le proprie regole.\n\nE c\'era una domanda enorme di grano dall\'Europa occidentale, che rendeva conveniente produrre in grande — cioe legare i contadini invece di pagarli.\n\nPoi la conclusione, che e la lezione da portare a casa: la stessa causa economica produce esiti opposti a seconda dei rapporti di forza. L\'economia non decide da sola: propone, e poi decide chi ha il potere di rispondere.',
       seDicono:[
         {loro:'«Allora la spiegazione economica non vale.»',
          tu:'Vale, ma non basta. La peste crea la stessa opportunita ovunque: la differenza e chi riesce ad afferrarla. Una causa economica e come una porta che si apre — se dall\'altra parte c\'e qualcuno abbastanza forte da richiuderla, non passa nessuno.'},
         {loro:'«Come si fa a sapere che era per le citta e non per altro?»',
          tu:'Confrontando casi: dove ci sono citta forti, la servitu si scioglie; dove non ci sono, si irrigidisce. Il metodo si chiama comparazione, ed e il modo in cui la storia si avvicina a un esperimento — non potendone fare nessuno.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Riassumiamo che cosa abbiamo imparato,\nche non riguarda solo il Trecento.\n\nUn evento enorme cambia le condizioni materiali.\nQuelle condizioni aprono una possibilita.\nMa che cosa succede davvero\ndipende da chi ha la forza di approfittarne\ne da chi ha la forza di impedirlo.\n\nA ovest i contadini avevano dove andare.\nA est no.\n\nUltima domanda:\n\nquando qualcuno vi dice «lo decidera l\'economia»,\no «e il progresso tecnico che cambia le cose»,\nche cosa dovreste chiedergli?',
       parlato:'Rifai la conta iniziale e mostra lo spostamento.\n\nPoi la conclusione di metodo, detta una volta sola: le cause materiali non producono effetti da sole. Aprono possibilita. Chi le raccoglie dipende dai rapporti di forza — cioe da chi puo andarsene, chi puo far rispettare una legge, chi controlla i tribunali.\n\nLa domanda da fare e sempre la stessa: per chi si apre questa possibilita, e chi ha la forza di chiuderla?\n\nUltima cosa, e va detta perche l\'ora si e aperta con venti milioni di morti: nessuna di queste analisi rende la peste meno terribile. Serve a un\'altra cosa — a non trattare le catastrofi come destino. Quello che accade dopo non e scritto nell\'evento: e deciso da come una societa e fatta quando l\'evento arriva.\n\nE la prossima volta vediamo che cosa succede quando anche i due poteri universali che tenevano insieme l\'Europa si sfaldano.',
       seDicono:[
         {loro:'«Quindi non c\'e nessuna legge nella storia?»',
          tu:'Ci sono regolarita forti: quando il lavoro diventa scarso il suo prezzo tende a salire, e questo vale sempre. Quello che non c\'e e l\'automatismo dal fatto economico all\'esito sociale. Le regolarita dicono che cosa spinge; non dicono chi vince.'}
       ]}
    ],
    riserve:[
      {titolo:'Quello che non poteva funzionare',
       corpo:'Contro la peste furono tentate quasi tutte le cose possibili: processioni, digiuni, salassi, fumigazioni con erbe aromatiche, fuga in campagna, chiusura delle porte cittadine, uccisione di cani e gatti sospettati di portare il contagio.\n\nAlcune misure funzionarono senza che si sapesse perche: la quarantena, introdotta a Ragusa nel 1377 e poi a Venezia, isolava per trenta e poi quaranta giorni le navi in arrivo. Non si conosceva il batterio, ma si era osservato che il contagio arrivava con le navi.\n\nAltre peggiorarono le cose: uccidere i gatti favoriva i ratti.',
       chiedi:'La quarantena funziona senza che se ne conosca il motivo; l\'uccisione dei gatti peggiora la situazione partendo dallo stesso ragionamento. Che cosa distingue le due misure? E si puo fare la cosa giusta per la ragione sbagliata?'},
      {titolo:'Il capro espiatorio',
       corpo:'Nel 1348-1349 decine di comunita ebraiche dell\'Europa centrale furono sterminate con l\'accusa di aver avvelenato i pozzi.\n\nPapa Clemente VI emano due bolle in loro difesa, osservando che gli ebrei morivano di peste come tutti gli altri e che l\'epidemia colpiva anche luoghi dove non ne viveva nessuno.\n\nNon servi. A Strasburgo, nel febbraio 1349, centinaia di ebrei furono uccisi prima ancora che la peste raggiungesse la citta — dopo che il consiglio cittadino favorevole a proteggerli era stato rovesciato.',
       chiedi:'L\'argomento razionale c\'era, veniva dalla massima autorita, ed era pubblico. Perche non ha funzionato? Che cosa cerca davvero, chi cerca un colpevole in mezzo a una catastrofe?'},
      {titolo:'La cornice del Decameron',
       corpo:'Boccaccio apre il Decameron con la descrizione della peste a Firenze nel 1348: i corpi lasciati sulla porta di casa, i becchini che seppelliscono a strati «come si mettono le lasagne», i parenti che si abbandonano, «e questo era il male peggiore».\n\nPoi dieci giovani si allontanano dalla citta e cominciano a raccontarsi storie per dieci giorni.\n\nLe novelle che seguono sono quasi tutte vitali, comiche, spesso licenziose.',
       chiedi:'Perche cominciare cento novelle allegre con dieci pagine di morti? Che cosa fa il racconto, secondo Boccaccio, di fronte a una cosa del genere? E oggi, che cosa fanno le storie quando succede qualcosa di insopportabile?'}
    ],
    testi:[
      {fonte:'Boccaccio, Decameron, Introduzione (1349-1351)',
       corpo:'«Era con si fatto spavento questa tribolazione entrata ne\' petti degli uomini e delle donne, che l\'un fratello l\'altro abbandonava e il zio il nipote e la sorella il fratello e spesse volte la donna il suo marito; e, che maggior cosa e e quasi non credibile, li padri e le madri i figliuoli, quasi loro non fossero, di visitare e di servire schifavano.»',
       glossa:'Boccaccio non descrive la malattia ma il suo effetto sui legami, e lo indica lui stesso come il fatto peggiore. È la testimonianza piu utile in classe, perche sposta l\'attenzione da quanti morirono a che cosa si ruppe fra i vivi.'},
      {fonte:'Statute of Labourers, 1351 — le pene',
       corpo:'Il provvedimento stabilisce che chi rifiuti di lavorare alle condizioni fissate possa essere imprigionato, che chi lasci il proprio servizio prima del termine sia punito, e che i datori di lavoro che paghino piu del dovuto siano multati del triplo di quanto hanno versato in eccesso.',
       glossa:'Da far notare: si puniscono anche i padroni che pagano troppo. È il segno che il problema principale, per i legislatori, era la concorrenza fra proprietari — cioe che il mercato del lavoro funzionava esattamente come funziona quando la manodopera scarseggia.'},
      {fonte:'Cronaca di Jean Froissart sulla rivolta del 1381',
       corpo:'Il cronista riferisce le prediche di John Ball, secondo cui «in principio eravamo tutti uguali» e la servitu esiste solo perche uomini ingiusti l\'hanno imposta contro la volonta di Dio; e aggiunge, con evidente disapprovazione, che il popolo lo ascoltava volentieri.',
       glossa:'Froissart scrive per un pubblico aristocratico e considera Ball un pericoloso agitatore. Vale la pena notarlo: le parole piu radicali del Trecento ci sono arrivate perche un cronista ostile le ha trascritte per condannarle.'}
    ],
    compito:'Mezza pagina. Pensate a un evento recente che ha cambiato le condizioni di vita di molte persone insieme — una crisi, una tecnologia, una legge. Poi rispondete a due domande: per chi si e aperta una possibilita, e chi aveva la forza di richiuderla? Se le due risposte coincidono, spiegate perche.',
    fonti:[
      'Boccaccio, Decameron, Introduzione alla prima giornata; Jean Froissart, Cronache, libro II',
      'Ordinance of Labourers (1349); Statute of Labourers (1351)',
      'Clemente VI, bolla Sicut Judaeis (1348)',
      'D. Herlihy, La peste nera e la trasformazione dell\'Occidente; W. Abel, Congiuntura agraria e crisi agrarie',
      'C. Cipolla, Il fiorino e il quattrino; Contro un nemico invisibile',
      'R. Brenner, Agrarian Class Structure and Economic Development — il dibattito su Ovest ed Est'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Storia medievale · 8 — La crisi dei poteri universali': {
  mappa: {
    n:'La crisi dei poteri universali', d:'come papato e impero smettono di comandare su tutti',
    f:[
      {r:'parte da', n:'Che cosa erano', d:'due autorita che pretendevano di valere per l\'intera cristianita',
       f:[
         {r:'il', n:'Papato', d:'guida spirituale di tutti i cristiani d\'Occidente, al di sopra dei regni'},
         {r:'l\'', n:'Impero', d:'erede dichiarato di Roma, protettore della Chiesa, sovrano sopra i sovrani'},
         {r:'legati dalla teoria', n:'Delle due spade', d:'una spirituale e una temporale, entrambe consegnate da Dio',
          f:[{piu:true, r:'ma su chi comandi', n:'Non c\'e accordo', d:'ed e la materia di tre secoli di scontro'}]},
         {r:'e sostenuti da', n:'Un\'unica lingua colta', d:'il latino: chi conta, in Europa, si capisce senza traduttori'},
         {r:'gia logorati da', n:'Due secoli di conflitto', d:'lotta per le investiture, Federico Barbarossa, Federico II'}
       ]},

      {r:'precipita con', n:'Bonifacio VIII e Filippo il Bello', d:'1296-1303: il papato perde lo scontro decisivo',
       f:[
         {r:'nasce da', n:'La tassazione del clero', d:'il re di Francia vuole tassare i beni ecclesiastici per finanziare la guerra'},
         {r:'il papa risponde con', n:'Clericis laicos', d:'1296: vietato tassare il clero senza il consenso della Santa Sede'},
         {r:'e poi con', n:'Unam Sanctam', d:'1302: la formulazione piu estrema della supremazia papale',
          f:[{r:'afferma che', n:'Ogni creatura deve sottostare al papa', d:'per essere salvata: non c\'e piu spazio per il compromesso'}]},
         {piu:true, r:'il re usa anche', n:'La propaganda', d:'fa circolare versioni falsificate delle bolle papali per indignare il regno'},
         {r:'il re reagisce con', n:'Lo schiaffo di Anagni', d:'1303: i suoi uomini catturano il papa, che muore poche settimane dopo',
          f:[{r:'e nessuno', n:'Interviene in suo favore', d:'ed e questo il dato: la minaccia della scomunica non spaventa piu'},
             {piu:true, r:'il re aveva convocato', n:'Gli Stati generali', d:'1302: cerca il consenso del regno prima di sfidare Roma'}]}
       ]},

      {r:'prosegue ad', n:'Avignone', d:'1309-1377: il papato risiede in Francia per settant\'anni',
       f:[
         {r:'con', n:'Sette papi francesi', d:'eletti da collegi cardinalizi a maggioranza francese'},
         {r:'costruisce', n:'Una macchina fiscale', d:'decime, annate, tasse sulle nomine: la Curia diventa un\'amministrazione efficientissima'},
         {r:'e ne esce', n:'Un\'immagine di sottomissione', d:'agli occhi di inglesi, tedeschi e italiani il papa e ormai un cappellano del re di Francia'},
         {r:'i critici la chiamano', n:'Cattivita babilonese', d:'l\'espressione e di Petrarca: il papato in esilio come Israele a Babilonia'},
         {r:'a chiederne il ritorno', n:'Caterina da Siena', d:'e uno dei rari casi in cui una donna parla cosi al papa'},
         {piu:true, r:'il ritorno del 1377', n:'Dura pochi mesi', d:'Gregorio XI muore l\'anno dopo, e comincia il disastro'}
       ]},

      {r:'esplode nel', n:'Grande Scisma', d:'1378-1417: la Chiesa ha due papi, poi tre',
       f:[
         {r:'comincia da', n:'Un conclave sotto pressione', d:'la folla romana chiede un papa italiano; i cardinali eleggono, poi si pentono'},
         {r:'produce', n:'Due papi', d:'uno a Roma e uno ad Avignone, ciascuno con la propria Curia e i propri cardinali',
          f:[{r:'che si', n:'Scomunicano a vicenda', d:'ogni cristiano d\'Europa e scomunicato da uno dei due'}]},
         {r:'e le obbedienze', n:'Seguono la politica', d:'Francia e alleati da una parte, Inghilterra e Impero dall\'altra: la fede segue i confini'},
         {r:'il tentativo di', n:'Pisa, 1409', d:'un concilio depone entrambi e ne elegge un terzo: nessuno dei due se ne va'},
         {r:'e il problema e', n:'Logicamente insolubile', d:'se il papa e l\'autorita suprema e ce ne sono tre, nessuna autorita puo decidere'}
       ]},

      {r:'trova risposta nel', n:'Conciliarismo', d:'l\'idea che l\'assemblea valga piu del capo',
       f:[
         {r:'elaborato dai', n:'Teologi di Parigi', d:'Gerson e d\'Ailly: la Chiesa e la comunita dei fedeli, non il suo vertice'},
         {r:'trionfa a', n:'Costanza', d:'1414-1418: il concilio piu importante del Medioevo'},
         {r:'con il decreto', n:'Haec sancta', d:'1415: il concilio ha il potere da Cristo, e tutti devono obbedirgli, anche il papa'},
         {r:'e lo mette in pratica', n:'Deponendo tre papi', d:'e eleggendone uno nuovo, Martino V: lo scisma finisce'},
         {r:'con il decreto', n:'Frequens', d:'1417: i concili si riuniranno a scadenze fisse, come un parlamento della Chiesa'},
         {r:'ma poi', n:'Il papato riprende il controllo', d:'Basilea si arena, Ferrara-Firenze restituisce prestigio al papa',
          f:[{r:'e nel 1460', n:'Execrabilis', d:'Pio II vieta di appellarsi a un concilio contro il papa: la riforma interna e chiusa'},
             {piu:true, r:'e Haec sancta resta', n:'Un problema teologico irrisolto', d:'discusso ancora nel Novecento'}]}
       ]},

      {r:'e attaccata da', n:'La contestazione dottrinale', d:'chi nega alla radice il potere temporale della Chiesa',
       f:[
         {r:'Marsilio da Padova', n:'Defensor pacis', d:'1324: il potere viene dalla comunita dei cittadini, e la Chiesa non ha giurisdizione'},
         {r:'Guglielmo di Occam', n:'Nega la plenitudo potestatis', d:'e sostiene che il papa puo errare, e che la Chiesa non e il papa'},
         {r:'in Inghilterra', n:'John Wyclif', d:'la vera Chiesa e la comunita dei predestinati; la Scrittura vale piu della gerarchia'},
         {r:'e ovunque circolano', n:'Traduzioni della Bibbia in volgare', d:'chi legge da solo non ha piu bisogno di chi gli spiega',
          f:[{piu:true, r:'ed e per questo che', n:'Vengono proibite', d:'la questione della lingua e una questione di potere, non di filologia'}]},
         {r:'in Boemia', n:'Jan Hus', d:'riprende Wyclif, predica in ceco, attacca la ricchezza del clero',
          f:[{r:'convocato a Costanza con', n:'Un salvacondotto imperiale', d:'viene processato e bruciato nel 1415'},
             {r:'e la Boemia', n:'Insorge', d:'le guerre hussite: cinque crociate imperiali respinte in quindici anni'},
             {piu:true, r:'e un secolo dopo', n:'Lutero rilegge Costanza', d:'e conclude che il concilio ha condannato tesi cristianissime'}]}
       ]},

      {r:'coinvolge anche', n:'L\'Impero', d:'che si trasforma in qualcosa di piu piccolo e piu tedesco',
       f:[
         {r:'dopo', n:'Il grande interregno', d:'1250-1273: vent\'anni senza un imperatore riconosciuto'},
         {r:'lo scontro con', n:'Ludovico il Bavaro', d:'scomunicato dal papa di Avignone, si fa incoronare a Roma dal popolo'},
         {r:'si chiude con la', n:'Bolla d\'oro', d:'1356: sette principi eleggono l\'imperatore, e il papa non c\'entra piu',
          f:[{r:'e l\'Impero diventa', n:'Elettivo e tedesco', d:'un\'unione di principi, non piu un\'autorita universale'},
             {piu:true, r:'e i principi ottengono', n:'Sovranita nei loro territori', d:'zecca, giustizia, miniere: e il seme della frammentazione'}]}
       ]},

      {r:'lascia il posto a', n:'Le monarchie nazionali', d:'il vuoto lasciato dai poteri universali viene riempito',
       f:[
         {r:'che costruiscono', n:'Chiese nazionali', d:'il re nomina i vescovi e controlla le entrate ecclesiastiche',
          f:[{r:'in Francia con la', n:'Prammatica sanzione di Bourges', d:'1438: la Chiesa francese si autogoverna sotto il re'}]},
         {r:'si dotano di', n:'Diplomazia stabile', d:'ambasciatori permanenti: gli Stati trattano fra pari, senza arbitri superiori'},
         {piu:true, r:'e usano', n:'La lingua volgare negli atti', d:'l\'amministrazione parla la lingua del regno, non piu quella universale'},
         {r:'e affermano', n:'La sovranita territoriale', d:'dentro i miei confini non c\'e autorita superiore alla mia'},
         {r:'perche dispongono di', n:'Fisco, esercito e giustizia', d:'strumenti che il papa e l\'imperatore non hanno mai avuto davvero'},
         {r:'cosi l\'universalismo', n:'Sopravvive come linguaggio', d:'i titoli restano, il potere reale e passato altrove'}
       ]}
    ],
    incroci:[
      {da:'Interviene in suo favore', a:'Fisco, esercito e giustizia', r:'nessuno lo fa perche i re hanno ormai',
       perche:'Ad Anagni il papa viene catturato e nessun sovrano si muove. La ragione non e il coraggio di Filippo il Bello ma la struttura: i re dispongono di tasse, soldati e tribunali propri, mentre il papa dispone di scomuniche. Quando l\'arma spirituale non spaventa piu, il potere universale resta senza strumenti.'},
      {da:'Sette papi francesi', a:'Un conclave sotto pressione', r:'sono la causa remota di',
       perche:'Settant\'anni di papi e cardinali francesi rendono esplosivo il ritorno a Roma: la folla pretende un italiano, i cardinali francesi cedono e poi si pentono. Lo scisma non nasce da una questione di fede, nasce da settant\'anni di squilibrio nazionale dentro il collegio cardinalizio.'},
      {da:'Logicamente insolubile', a:'Teologi di Parigi', r:'e il problema che costringe i',
       perche:'Con tre papi, il sistema non ha alcuna procedura interna per decidere: chi giudica il giudice supremo? È il vicolo cieco a far nascere la teoria conciliare — cioe che l\'autorita stia nella comunita e non nel vertice. Le idee costituzionali nascono quasi sempre da un\'impasse pratica, non da una speculazione.'},
      {da:'Haec sancta', a:'La sovranita territoriale', r:'anticipa la logica di',
       perche:'Dire che l\'assemblea ha il potere da Cristo e che il capo deve obbedirle e, in forma teologica, la stessa domanda che la politica moderna porra ai re: dove risiede davvero la sovranita, nella persona o nel corpo? Costanza pone il problema tre secoli prima, dentro la Chiesa.'},
      {da:'Un salvacondotto imperiale', a:'Insorge', r:'e il tradimento che fa',
       perche:'Hus non viene bruciato solo per le sue tesi: viene bruciato dopo essere stato attirato con una garanzia imperiale. La Boemia non reagisce a una controversia teologica, reagisce a una parola data e ritirata — ed e per questo che la rivolta e nazionale prima ancora che religiosa.'},
      {da:'Execrabilis', a:'Lutero rilegge Costanza', r:'chiude la porta che rende possibile',
       perche:'Vietando l\'appello al concilio, il papato si toglie l\'unico organo capace di riformarlo dall\'interno. Sessant\'anni dopo la riforma arriva lo stesso, ma da fuori e senza controllo. Il divieto non elimina il problema: elimina la sede in cui si poteva ancora trattare.'},
      {da:'Defensor pacis', a:'Chiese nazionali', r:'fornisce la giustificazione teorica alle',
       perche:'Marsilio sostiene che il potere nasce dalla comunita dei cittadini e che la Chiesa non ha giurisdizione temporale. È esattamente la dottrina di cui i re hanno bisogno per nominare vescovi e incassare decime: la teoria piu radicale del Trecento finisce al servizio delle monarchie.'},
      {da:'Bolla d\'oro', a:'Delle due spade', r:'chiude definitivamente la teoria',
       perche:'Stabilire che sette principi eleggono l\'imperatore senza alcun intervento papale significa sciogliere il legame che fondava le due spade. Da quel momento l\'Impero e un\'istituzione tedesca fra le altre, e il titolo universale sopravvive alla cosa.'},
      {da:'Seguono la politica', a:'Ogni creatura deve sottostare al papa', r:'rende ridicola la pretesa che',
       perche:'Unam Sanctam dichiara che la salvezza passa dall\'obbedienza al pontefice. Ottant\'anni dopo, l\'obbedienza dipende da quale alleanza politica ha scelto il proprio re. Non serve confutare la dottrina: la pratica la svuota da sola, e i contemporanei se ne accorgono.'},
      {da:'Una macchina fiscale', a:'John Wyclif', r:'e il bersaglio principale di',
       perche:'Le contestazioni del Trecento non partono dalla teologia ma dal denaro: decime, annate e tasse sulle nomine rendono visibile una Chiesa ricca che predica la poverta. Wyclif e Hus attaccano prima la ricchezza e poi la dottrina, ed e per questo che trovano ascolto anche fra chi di teologia non capisce nulla.'},
      {da:'Frequens', a:'Il papato riprende il controllo', r:'viene svuotato quando',
       perche:'Frequens istituiva concili a scadenza fissa: in pratica un organo permanente accanto al papa. Nel giro di trent\'anni le convocazioni si diradano e poi cessano. Una regola che dipende da chi dovrebbe esserne limitato non sopravvive alla prima occasione favorevole.'},
      {da:'Un\'unica lingua colta', a:'La lingua volgare negli atti', r:'viene sostituita dalla',
       perche:'Finche l\'Europa che conta parla latino, un\'autorita universale ha un senso pratico: puo essere capita ovunque. Quando le cancellerie passano al volgare e la Bibbia comincia a circolare tradotta, ogni regno costruisce un proprio circuito chiuso — e l\'universalismo perde perfino lo strumento con cui si esprimeva.'},
      {da:'Gli Stati generali', a:'Fisco, esercito e giustizia', r:'servono a costruire',
       perche:'Prima di sfidare il papa, Filippo il Bello convoca il regno e ne ottiene l\'appoggio. È il meccanismo che rende le monarchie piu forti dei poteri universali: chiedere il consenso per poter chiedere il denaro, e con il denaro pagare l\'esercito e i giudici.'}
    ]
  },
  provocazione: {
    titolo:'Costanza, 1415',
    durata:'55 minuti',
    domandaMadre:'Un potere in crisi conviene che cambi le proprie regole o che elimini chi le contesta?',
    perche:'Nella stessa citta, nello stesso anno, la stessa assemblea fa due cose opposte: proclama che il concilio sta sopra il papa — la tesi piu rivoluzionaria del Medioevo, in pratica una costituzione — e brucia vivo un uomo arrivato con un salvacondotto imperiale. La classe deve tenere insieme le due cose senza sceglierne una sola, perche l\'intreccio e il punto: le istituzioni in crisi provano contemporaneamente a riformarsi e a reprimere, e quale delle due prevalga decide il secolo successivo. Il colpo di scena — Lutero che nel 1519 rilegge gli atti di Costanza e conclude che un concilio puo sbagliare — mostra che la repressione del 1415 ha costruito il problema del 1517.',
    occorrente:'Niente.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Costanza, sul lago, 1415.\nÈ riunita la piu grande assemblea\nche l\'Europa medievale abbia mai visto.\n\nNello stesso anno, la stessa assemblea:\n\ndichiara che il concilio riceve il potere\ndirettamente da Cristo\ne che tutti — «anche il papa» —\nsono tenuti a obbedirgli;\n\ndepone tre papi\ne ne elegge uno nuovo;\n\nbrucia vivo un professore di Praga\nche era arrivato\ncon un salvacondotto dell\'imperatore.\n\nÈ un\'assemblea rivoluzionaria\no un\'assemblea che difende il potere?',
       parlato:'Dai i tre fatti lentamente, senza commentarli, e poi la domanda.\n\nSe qualcuno chiede chi fossero i tre papi, rispondi subito: dal 1378 la Chiesa ne aveva due, uno a Roma e uno ad Avignone; dal 1409 tre. Non un\'eresia, non uno scandalo morale: tre uomini che si dichiaravano ciascuno l\'unico vero papa, ognuno con la propria corte e i propri cardinali, ognuno che scomunicava gli altri due.\n\nFai notare la conseguenza, che di solito diverte e inquieta insieme: ogni cristiano d\'Europa era scomunicato da qualcuno, e nessuno poteva sapere da chi giustamente.\n\nLa domanda va tenuta aperta: il punto dell\'ora e che le due risposte sono entrambe vere.',
       seDicono:[
         {loro:'«Come si fa a non sapere chi e il papa?»',
          tu:'Non c\'era nessun ufficio che potesse accertarlo. Se il papa e l\'autorita suprema, chi giudica una lite fra tre papi? Nessuno, perche sopra non c\'e niente. Non e un\'ignoranza: e un buco nelle regole.'},
         {loro:'«Bastava guardare chi era stato eletto prima.»',
          tu:'Ci hanno provato, e la disputa era proprio su quello: il primo conclave si era svolto con la folla romana che urlava sotto le finestre, e i cardinali dissero poi di aver votato sotto minaccia. Chi doveva stabilire se quella pressione invalidava l\'elezione?'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'Un concilio che depone tre papi\ne ne elegge uno nuovo:',
       opzioni:['sta salvando la Chiesa da un guasto tecnico', 'sta cambiando la costituzione della Chiesa'],
       parlato:'Fai schierare e conta prima di discutere.\n\nPoi porta tutti sulla frase del decreto, perche decide la questione. Haec sancta non dice «in questo caso eccezionale interveniamo». Dice che il concilio ha il potere immediatamente da Cristo e che chiunque, di qualunque dignita, «anche papale», e tenuto a obbedirgli.\n\nChiedi: e una regola per l\'emergenza o una regola per sempre? La formula e generale — e questo la rende enorme.\n\nPoi la traduzione politica, che li interessa: e la stessa domanda che tre secoli dopo verra posta ai re. Il potere sta nella persona che sta in cima, o nel corpo che quella persona rappresenta? A Costanza, per un momento, l\'Europa risponde: nel corpo.',
       seDicono:[
         {loro:'«Ma allora la Chiesa era una democrazia.»',
          tu:'No: l\'assemblea era di vescovi e teologi, non di fedeli. Ma la struttura del ragionamento e quella — l\'autorita del vertice deriva dal corpo, non viceversa. È un principio, e i principi hanno la brutta abitudine di essere applicati oltre le intenzioni di chi li formula.'},
         {loro:'«Se funzionava, perche non e rimasta cosi?»',
          tu:'Tieni la domanda: ci torniamo fra venti minuti, ed e la parte piu istruttiva dell\'ora.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Nella stessa assemblea, luglio 1415.\n\nJan Hus, professore a Praga,\naveva predicato in ceco,\nattaccato la ricchezza del clero,\nsostenuto che la Scrittura conta\npiu della gerarchia.\n\nViene convocato a Costanza\nper discutere le proprie tesi.\n\nL\'imperatore Sigismondo gli concede\nun salvacondotto scritto.\n\nHus arriva. Viene arrestato,\nprocessato e bruciato vivo\nil 6 luglio 1415.\n\nAlla protesta sul salvacondotto,\nil concilio risponde che una promessa\nfatta a un eretico non obbliga.',
       parlato:'Lascia cadere l\'ultima frase e aspetta.\n\nPoi la domanda, che va posta bene: il concilio ha mentito?\n\nGuidali a vedere il meccanismo, perche e piu inquietante della semplice slealta. Il ragionamento e questo: la promessa vale fra persone che appartengono alla stessa comunita; l\'eretico si e messo fuori; quindi non c\'e nessun obbligo verso di lui. Non e una bugia — e la costruzione di una categoria di persone verso cui le regole non valgono.\n\nQui vale la pena fermarsi un momento e dirlo esplicitamente: questa mossa non appartiene solo al Quattrocento. Ogni volta che qualcuno sostiene che con una certa categoria di persone non valgono le regole normali, sta usando la stessa struttura. Riconoscerla e piu utile che indignarsi.\n\nPoi torna alla contraddizione: la stessa assemblea che dice «il potere viene dal corpo dei fedeli» brucia chi diceva che la Chiesa e la comunita dei fedeli e non la gerarchia. Come sta insieme?\n\nLa risposta, se non ci arrivano: un\'assemblea che si prende il potere del papa ha un bisogno disperato di dimostrare di non essere eretica.',
       seDicono:[
         {loro:'«Sigismondo poteva impedirlo.»',
          tu:'Poteva, e non lo fece: gli serviva il concilio per chiudere lo scisma, e sacrifico la propria parola. Nota il costo: quindici anni di guerre hussite e cinque crociate imperiali respinte. La slealta gli e costata piu del salvacondotto.'},
         {loro:'«Quindi il concilio era ipocrita.»',
          tu:'Piu che ipocrita, sotto assedio. Stava facendo una cosa enorme e contestabile: deporre dei papi. Bruciare un eretico era il modo piu rapido per mostrare di essere ortodosso. La repressione serviva a coprire la rivoluzione — e questo capita spesso.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'Dal decreto Haec sancta, aprile 1415:\n\n«Questo santo sinodo di Costanza,\nlegittimamente riunito nello Spirito Santo,\nrappresentante la Chiesa cattolica,\nriceve il potere immediatamente da Cristo:\ne chiunque, di qualunque stato o dignita,\nanche papale,\ne tenuto a obbedirgli\nin cio che riguarda la fede,\nl\'estirpazione dello scisma\ne la riforma della Chiesa\nnel capo e nelle membra.»\n\n«Nel capo e nelle membra.»\nIn capite et in membris.',
       testo:{fonte:'Concilio di Costanza, decreto Haec sancta synodus, 6 aprile 1415',
              glossa:'Tre parole vanno pesate. «Rappresentante»: l\'assemblea non e la Chiesa, ne fa le veci — ed e la prima volta che il concetto compare in questa forma. «Immediatamente da Cristo»: il potere non passa dal papa, quindi non dipende da lui. «Anche papale»: non c\'e eccezione al vertice. Messe insieme, sono la struttura di una costituzione.'},
       parlato:'Leggi il decreto due volte, la seconda fermandoti sulle tre espressioni della glossa.\n\nPoi la domanda utile: che differenza fa dire «rappresenta la Chiesa» invece di «e la Chiesa»?\n\nÈ una distinzione che vale per tutto il pensiero politico moderno: chi rappresenta agisce per conto di qualcun altro, quindi puo essere giudicato in base a quel mandato. Il papa, nella dottrina precedente, non rappresentava nessuno — era il vicario di Cristo e basta.\n\nSe la classe regge, aggiungi la formula finale: riforma «nel capo e nelle membra». Ammette pubblicamente che il guasto e in cima, non solo alla base. È una diagnosi che nessuna istituzione fa volentieri di se stessa.',
       seDicono:[
         {loro:'«Se l\'hanno scritto, allora vale ancora?»',
          tu:'Domanda ottima, e la risposta e che se ne discute da seicento anni. Il papato successivo ha sostenuto che Haec sancta valeva solo per l\'emergenza dello scisma; i conciliaristi che valeva sempre. Il testo, per come e formulato, non aiuta chi lo vuole limitare.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Lipsia, luglio 1519.\nCentoquattro anni dopo.\n\nMartin Lutero sta discutendo\ncon il teologo Johann Eck.\n\nEck lo incalza con l\'accusa\npiu grave che si possa muovere:\n«Le tue tesi sono quelle di Hus,\ne Hus e stato condannato a Costanza.»\n\nÈ una trappola: basta rispondere\n«io non sono hussita» e la discussione finisce.\n\nLutero chiede una pausa.\nVa a leggere gli atti del concilio.\n\nTorna e risponde che fra le proposizioni\ncondannate a Costanza\nalcune sono «cristianissime ed evangeliche»,\ne che dunque anche un concilio puo sbagliare.\n\nIn quel momento perde\nl\'ultima autorita a cui potersi appellare.',
       parlato:'Racconta la scena come una scena: l\'accusa, la trappola, la pausa, il ritorno.\n\nPoi fai capire che cosa significa quella risposta. Fino a quel momento Lutero poteva dire: il papa sbaglia, ma un concilio metterebbe le cose a posto. Dopo Lipsia non puo piu — se anche i concili sbagliano, non resta nessuna autorita umana. Resta solo la Scrittura, e la rottura diventa inevitabile.\n\nOra chiudi il cerchio, ed e il punto dell\'ora. Costanza aveva bruciato Hus per chiudere il problema. Cosa e successo? Il rogo ha reso Hus un martire nazionale ceco, ha prodotto quindici anni di guerra, e ha lasciato agli atti una condanna che un secolo dopo un altro professore va a leggersi — e che gli serve da leva per rompere con Roma.\n\nE aggiungi il secondo tempo: nel 1460 il papa Pio II vieta formalmente di appellarsi a un concilio contro il papa. La strada della riforma interna viene chiusa. Cinquantasette anni dopo arriva la riforma, ma da fuori, e nessuno la controlla.',
       seDicono:[
         {loro:'«Quindi se avessero ascoltato Hus non ci sarebbe stata la Riforma?»',
          tu:'Non possiamo saperlo e diffida di chi te lo dice con sicurezza. Quello che possiamo dire e piu preciso: le cause del malcontento erano ancora tutte li nel 1517, e i canali per affrontarle erano stati chiusi uno per uno. Non e una previsione, e una constatazione su quali strade restavano aperte.'},
         {loro:'«Bruciare Hus e stato un errore di calcolo, allora.»',
          tu:'Nel breve periodo no: il concilio ottenne quello che voleva, apparire ortodosso mentre deponeva tre papi. Gli errori di questo tipo funzionano quasi sempre subito. Il conto arriva dopo, quando chi ha deciso non c\'e piu — ed e per questo che si continuano a fare.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Un\'istituzione in crisi\nha davanti due strade.\n\nCambiare le proprie regole:\nammettere che il guasto e in cima,\ncostruire un organo che possa correggere il vertice,\naccettare di essere limitata.\n\nOppure eliminare chi la contesta:\npiu rapido, piu sicuro,\ne non richiede di ammettere niente.\n\nCostanza ha imboccato entrambe\nnello stesso anno.\n\nHa mantenuto la seconda\ne abbandonato la prima.\n\nUltima domanda:\nperche e quasi sempre questa\nla combinazione che vince?',
       parlato:'Rifai la conta iniziale e mostra lo spostamento.\n\nPoi il bilancio, tenendolo stretto. Nel giro di un secolo il papato riprende tutto il potere che il concilio gli aveva tolto e cancella l\'organo che avrebbe potuto riformarlo. Vince. E proprio per questo, quando arriva la contestazione seria, non ha nessun luogo dove trattarla, e mezza Europa se ne va.\n\nLa risposta alla domanda finale, se non ci arrivano: reprimere da risultati subito e a chi decide; riformarsi costa subito e rende dopo, spesso a qualcun altro. Chi comanda in questo momento fa quasi sempre il conto sul proprio orizzonte, non su quello dell\'istituzione.\n\nUltima cosa da dire, perche lega tutto il programma: i poteri universali non finiscono per una sconfitta militare. Finiscono perche perdono la capacita di risolvere i propri conflitti interni, e chi ha il fisco e i giudici — i re — occupa lo spazio rimasto vuoto. Da qui in avanti la storia europea si fa dentro gli Stati.',
       seDicono:[
         {loro:'«Ma il papato esiste ancora e il conciliarismo no.»',
          tu:'Vero, e va tenuto presente: il criterio della sopravvivenza dice qualcosa. Ma nota che cosa e sopravvissuto — un papato senza potere temporale su nessun re, in una Europa dove il principio dell\'assemblea sopra il capo ha vinto ovunque, in politica. Le due cose non si escludono come sembra.'}
       ]}
    ],
    riserve:[
      {titolo:'Lo schiaffo di Anagni',
       corpo:'Settembre 1303. Guglielmo di Nogaret, consigliere di Filippo il Bello, arriva ad Anagni con uomini armati e i Colonna, nemici del papa. Bonifacio VIII viene catturato nel proprio palazzo e tenuto prigioniero per tre giorni.\n\nLa tradizione vuole che uno degli assalitori lo abbia schiaffeggiato; le fonti non concordano. La popolazione di Anagni lo libera, ma il papa muore poche settimane dopo a Roma.\n\nNessun sovrano europeo intervenne in suo favore. Un secolo prima, Innocenzo III aveva messo in ginocchio il re d\'Inghilterra con un interdetto.',
       chiedi:'Che cosa e cambiato in cento anni, se la stessa arma — la scomunica — funziona nel 1210 e non nel 1303? Le armi perdono efficacia perche si logorano o perche cambia chi le subisce?'},
      {titolo:'La Bolla d\'oro',
       corpo:'Nel 1356 Carlo IV emana una costituzione che stabilisce chi elegge l\'imperatore: sette principi, tre arcivescovi tedeschi e quattro laici. Fissa le procedure, le maggioranze, le precedenze.\n\nDel papa non si parla. Non lo si esclude polemicamente: semplicemente non compare, e la sua approvazione non e richiesta.\n\nAi sette elettori vengono riconosciuti diritti sovrani nei loro territori: battere moneta, giudicare senza appello, sfruttare le miniere.',
       chiedi:'Che cosa e piu efficace, escludere qualcuno con una dichiarazione o scrivere una regola in cui semplicemente non compare? E quale delle due e piu difficile da contestare?'},
      {titolo:'Marsilio da Padova',
       corpo:'Nel Defensor pacis (1324) Marsilio sostiene che ogni potere legittimo nasce dal «legislatore umano», cioe dall\'insieme dei cittadini o dalla loro parte prevalente; che la Chiesa non ha alcuna giurisdizione coercitiva; che i sacerdoti sono funzionari senza potere di comando; e che spetta all\'assemblea dei fedeli, non al papa, interpretare la Scrittura.\n\nFu condannato come eretico e si rifugio presso Ludovico il Bavaro.',
       chiedi:'Questa teoria nasce per difendere un imperatore contro un papa. Due secoli dopo servira ai re contro entrambi. Che cosa succede a un\'idea quando viene usata da chi non l\'ha pensata?'}
    ],
    testi:[
      {fonte:'Bonifacio VIII, bolla Unam Sanctam, 1302',
       corpo:'«Dichiariamo, affermiamo e definiamo che e assolutamente necessario alla salvezza, per ogni creatura umana, essere sottoposti al romano pontefice.»',
       glossa:'È la formulazione piu alta mai raggiunta dalla teoria papale — e arriva un anno prima di Anagni. Le dottrine estreme compaiono di solito quando il potere reale sta gia scivolando via: si scrive con la massima solennita cio che non si riesce piu a ottenere di fatto.'},
      {fonte:'Concilio di Costanza, sessione XV, luglio 1415 — sulla questione del salvacondotto',
       corpo:'Il concilio stabilisce che nessun salvacondotto concesso da imperatore, re o principe puo impedire il giudizio della Chiesa su un sospetto di eresia, e che chi lo ha concesso non e vincolato dalla promessa fatta.',
       glossa:'Da leggere insieme a Haec sancta, perche sono dello stesso anno e della stessa assemblea. Il decreto sul potere conciliare fonda un\'autorita sulla rappresentanza; questo stabilisce che verso una certa categoria di persone la parola data non obbliga. Fare notare in classe che le due cose convivono e piu formativo che sceglierne una.'},
      {fonte:'Petrarca, lettere «Sine nomine», meta del Trecento, su Avignone',
       corpo:'Il poeta descrive la corte papale come una nuova Babilonia, dedita al denaro e al lusso, e chiama l\'assenza da Roma un esilio che dura da troppo tempo.',
       glossa:'L\'espressione «cattivita babilonese» nasce qui, e vale la pena dire che e propaganda letteraria di un italiano che voleva il papa a Roma. È utile per mostrare come una formula polemica di parte possa diventare, secoli dopo, il nome che tutti usano — titoli dei manuali compresi.'}
    ],
    compito:'Mezza pagina. Scegliete un\'organizzazione di cui fate parte o che conoscete bene — una scuola, una squadra, un\'associazione, un partito. Immaginate che il suo vertice sia in crisi. Descrivete l\'organo che dovrebbe poterlo correggere: chi lo compone, chi lo convoca, chi decide quando si riunisce. Poi rispondete alla domanda difficile: se quell\'organo puo essere convocato solo dal vertice, serve a qualcosa?',
    fonti:[
      'Bonifacio VIII, Unam Sanctam (1302); decreti conciliari Haec sancta (1415) e Frequens (1417)',
      'Marsilio da Padova, Defensor pacis (1324); Guglielmo di Occam, scritti politici',
      'Pio II, bolla Execrabilis (1460); Prammatica sanzione di Bourges (1438); Bolla d\'oro (1356)',
      'Atti della disputa di Lipsia fra Lutero ed Eck (1519)',
      'G. Alberigo, Chiesa conciliare; B. Tierney, Foundations of the Conciliar Theory',
      'F. Oakley, The Conciliarist Tradition — sulla lunga durata di Haec sancta'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Storia medievale · 9 — L\'Italia degli Stati regionali': {
  mappa: {
    n:'L\'Italia degli Stati regionali', d:'cinque potenze, un equilibrio, e quarant\'anni di pace',
    f:[
      {r:'nasce da', n:'Il passaggio dal comune alla signoria', d:'le citta rinunciano a governarsi da sole',
       f:[
         {r:'perche i comuni sono paralizzati da', n:'Le fazioni', d:'lotte fra famiglie che rendono impossibile ogni decisione'},
         {r:'si era gia provato con', n:'Il podesta forestiero', d:'un magistrato di un\'altra citta, perche non abbia parenti da favorire'},
         {r:'poi con', n:'Il capitano del popolo', d:'a difesa delle arti contro i magnati: e un rimedio che diventa un trampolino'},
         {r:'infine un uomo ottiene', n:'La signoria a vita', d:'concessa dalle assemblee stesse, per stanchezza piu che per colpo di stato',
          f:[{r:'e poi', n:'Ereditaria', d:'il passaggio decisivo: il potere smette di essere una carica e diventa una famiglia'},
             {piu:true, r:'e infine', n:'Un titolo comprato', d:'i Visconti diventano duchi nel 1395 pagando l\'imperatore centomila fiorini'}]},
         {r:'e resta', n:'La finzione delle vecchie magistrature', d:'i consigli continuano a riunirsi e a votare cio che e gia deciso'}
       ]},

      {r:'produce', n:'Cinque potenze', d:'l\'Italia si semplifica: da centinaia di comuni a pochi Stati',
       f:[
         {r:'il ducato di', n:'Milano', d:'il piu aggressivo, controlla la pianura padana e le vie per il Nord'},
         {r:'la repubblica di', n:'Venezia', d:'impero marittimo che a un certo punto decide di conquistare anche la terra'},
         {r:'la repubblica di', n:'Firenze', d:'ricchissima di manifattura e banche, governata da un\'oligarchia'},
         {r:'lo', n:'Stato della Chiesa', d:'ricostruito con le armi dopo il ritorno da Avignone'},
         {r:'il regno di', n:'Napoli', d:'il piu grande per territorio, conteso fra angioini e aragonesi'},
         {r:'e attorno', n:'Gli Stati minori', d:'Savoia, Ferrara, Mantova, Urbino: sopravvivono vendendo eserciti e alleanze'}
       ]},

      {r:'ha il suo momento critico con', n:'L\'espansione milanese', d:'l\'unico tentativo serio di unificare il Nord',
       f:[
         {r:'guidata da', n:'Gian Galeazzo Visconti', d:'conquista Verona, Padova, Pisa, Siena, Bologna: Firenze e accerchiata',
          f:[{r:'e si ferma solo perche', n:'Muore di peste nel 1402', d:'a un passo dall\'obiettivo, e lo Stato si sfalda in pochi mesi'},
             {piu:true, r:'e Firenze trasforma la resistenza in', n:'Un mito repubblicano', d:'la liberta contro il tiranno: nasce cosi l\'umanesimo civile'}]},
         {r:'riprende con', n:'Filippo Maria Visconti', d:'l\'ultimo dei Visconti, sospettoso e chiuso nel castello'},
         {r:'alla sua morte', n:'La repubblica ambrosiana', d:'1447: Milano prova a tornare comune, e dura tre anni'},
         {r:'e finisce con', n:'Francesco Sforza', d:'1450: un condottiero diventa duca sposando la figlia del suo signore'}
       ]},

      {r:'trova un modello nel', n:'Caso veneziano', d:'la Serenissima: l\'unico Stato che sembra non avere crisi',
       f:[
         {r:'perche ha chiuso', n:'La serrata del Maggior Consiglio', d:'1297: le famiglie che governano sono fissate una volta per tutte'},
         {r:'e sorveglia', n:'Il doge', d:'eletto con una procedura lunghissima, e circondato da controlli continui',
          f:[{piu:true, r:'e alla sua morte', n:'Viene processato', d:'una commissione esamina il suo operato e la famiglia paga le multe'}]},
         {r:'con il', n:'Consiglio dei Dieci', d:'organo di sicurezza rapido e segreto: efficienza pagata in liberta'},
         {r:'e dal 1404 sceglie', n:'La Terraferma', d:'conquista Verona, Vicenza, Padova, Brescia, Bergamo',
          f:[{r:'per assicurarsi', n:'Grano, strade e legname', d:'un impero di mare non si nutre da solo'}]}
       ]},

      {r:'e un\'invenzione nel', n:'Caso fiorentino', d:'dove il potere si esercita senza occupare le cariche',
       f:[
         {r:'formalmente e', n:'Una repubblica', d:'priori estratti a sorte, mandati brevissimi, nessun capo'},
         {r:'in realta governa', n:'Cosimo de\' Medici', d:'dal 1434, come banchiere e non come magistrato',
          f:[{r:'controllando', n:'Le liste degli eleggibili', d:'chi decide chi puo essere estratto ha gia deciso tutto'},
             {piu:true, r:'ed e', n:'Il banchiere del papa', d:'la gestione delle finanze pontificie e il vero fondamento del potere mediceo'}]},
         {r:'e poi', n:'Lorenzo il Magnifico', d:'arbitro della politica italiana pur non avendo alcun titolo'},
         {piu:true, r:'e la cultura serve a', n:'Legittimare', d:'una famiglia senza titoli si fa riconoscere finanziando cupole, biblioteche e filosofi'},
         {r:'la ricchezza viene da', n:'Lana, seta e banche', d:'filiali in tutta Europa, e il fiorino come moneta di riferimento'}
       ]},

      {r:'si completa con', n:'Il Sud e la Chiesa', d:'i due Stati piu grandi e piu difficili da governare',
       f:[
         {r:'a Napoli si scontrano', n:'Angioini e aragonesi', d:'due dinastie straniere e due pretese ereditarie'},
         {r:'vince', n:'Alfonso il Magnanimo', d:'1442: unisce Napoli alla corona d\'Aragona e apre una corte umanistica'},
         {r:'ma il regno resta', n:'Nelle mani dei baroni', d:'il re non riesce a spezzare il potere feudale nelle province'},
         {r:'lo Stato della Chiesa viene', n:'Riconquistato con le armi', d:'dal cardinale Albornoz, che sottomette i signori locali'},
         {r:'e il papa diventa', n:'Un principe italiano', d:'con un esercito, una diplomazia e una politica dinastica come gli altri',
          f:[{piu:true, r:'fino al', n:'Nepotismo di sistema', d:'i nipoti come strumento di governo: e la contraddizione che pesera sulla Riforma'}]}
       ]},

      {r:'si regge su', n:'Un sistema di equilibrio', d:'e questa e la vera invenzione italiana del Quattrocento',
       f:[
         {r:'sancito dalla', n:'Pace di Lodi', d:'1454: dopo decenni di guerre, i cinque Stati si riconoscono a vicenda'},
         {r:'organizzato nella', n:'Lega italica', d:'1455: patto venticinquennale di non aggressione e difesa comune'},
         {r:'funziona cosi', n:'Chi cresce troppo trova gli altri contro', d:'nessuno puo vincere, quindi nessuno prova a vincere sul serio'},
         {r:'richiede', n:'Informazione continua', d:'sapere in tempo reale che cosa fanno gli altri quattro'},
         {r:'e per questo nasce', n:'L\'ambasciata permanente', d:'un rappresentante che risiede stabilmente presso un\'altra corte',
          f:[{r:'con l\'obbligo di', n:'Relazioni scritte regolari', d:'il primo servizio informazioni moderno d\'Europa'},
             {piu:true, r:'copiata poi da', n:'Tutta l\'Europa', d:'la diplomazia degli Stati moderni e un\'esportazione italiana'}]},
         {r:'e si combatte con', n:'Le compagnie di ventura', d:'eserciti professionali affittati, guidati da condottieri che trattano con tutti',
          f:[{piu:true, r:'e Machiavelli sostiene che', n:'Facciano finta di combattere', d:'un\'accusa efficace ma esagerata: le battaglie avevano morti veri'}]}
       ]},

      {r:'crolla nel', n:'1494', d:'e in pochi mesi l\'Italia smette di decidere di se stessa',
       f:[
         {r:'perche a chiamare i francesi e', n:'Ludovico il Moro', d:'duca di Milano: vuole neutralizzare Napoli, e apre la porta'},
         {r:'scende', n:'Carlo VIII', d:'attraversa la penisola da Nord a Sud quasi senza combattere'},
         {r:'con un\'arma nuova', n:'L\'artiglieria mobile', d:'cannoni di bronzo trainati da cavalli, che abbattono le mura in ore'},
         {r:'e l\'equilibrio si rivela', n:'Valido solo fra cinque', d:'nessuno aveva previsto un sesto giocatore, molto piu grande'},
         {r:'comincia cosi', n:'Il lungo dominio straniero', d:'guerre d\'Italia fino al 1559, e poi tre secoli di sovranita altrui'},
         {piu:true, r:'e gli italiani restano bravi in', n:'Tutto tranne che nella forza', d:'banche, arte e diplomazia continuano a primeggiare mentre la politica passa ad altri'},
         {r:'e da questa sconfitta nasce', n:'Il pensiero politico moderno', d:'Machiavelli e Guicciardini sono due funzionari di uno Stato che ha perso'}
       ]}
    ],
    incroci:[
      {da:'Le fazioni', a:'La signoria a vita', r:'sono la ragione per cui si accetta',
       perche:'Le signorie non nascono quasi mai da un colpo di mano: nascono da assemblee esauste che consegnano il potere a un uomo perche mettano fine agli scontri fra famiglie. È una rinuncia volontaria alla liberta politica in cambio di sicurezza, e vale la pena notare quanto spesso questo scambio si ripresenti.'},
      {da:'Muore di peste nel 1402', a:'Chi cresce troppo trova gli altri contro', r:'salva il principio che',
       perche:'Gian Galeazzo era arrivato a un passo dall\'unificazione del Nord: se non fosse morto, l\'equilibrio italiano non sarebbe mai esistito. Il sistema che ammiriamo come costruzione politica poggia, alla base, su una morte per malattia — utile da ricordare quando si spiegano gli esiti storici con le sole cause profonde.'},
      {da:'Un mito repubblicano', a:'Il pensiero politico moderno', r:'e il precedente diretto del',
       perche:'La resistenza fiorentina a Milano produce una letteratura sulla liberta cittadina che forma i cancellieri della repubblica. Machiavelli lavora in quella cancelleria un secolo dopo: la riflessione politica italiana nasce due volte da una minaccia mortale, nel 1402 e nel 1494.'},
      {da:'Informazione continua', a:'Valido solo fra cinque', r:'e organizzata bene ma resta',
       perche:'Le ambasciate permanenti danno agli Stati italiani un vantaggio informativo enorme — su se stessi. Nessuno tiene un residente stabile a Parigi come a Napoli. Un sistema di sorveglianza reciproca perfezionato all\'interno puo restare cieco esattamente dove arrivera il colpo.'},
      {da:'Ludovico il Moro', a:'Chi cresce troppo trova gli altri contro', r:'usa la logica di',
       perche:'Il Moro non tradisce l\'Italia: applica alla lettera la regola del sistema, cercando un contrappeso contro Napoli. Il guaio e che il contrappeso che sceglie non appartiene al sistema. Ogni giocatore fa la mossa razionale dal proprio punto di vista, e insieme producono la catastrofe.'},
      {da:'Le liste degli eleggibili', a:'La finzione delle vecchie magistrature', r:'e la versione fiorentina della',
       perche:'A Milano restano i consigli comunali che approvano cio che il duca ha deciso; a Firenze restano le estrazioni a sorte, ma qualcuno decide chi puo essere estratto. In entrambi i casi la forma repubblicana sopravvive intatta e serve a rendere invisibile il potere reale.'},
      {da:'Grano, strade e legname', a:'La Terraferma', r:'sono la ragione economica della conquista della',
       perche:'Venezia non passa alla terraferma per ambizione territoriale ma per sicurezza: le serve il grano padano, il legname per l\'Arsenale e il controllo delle strade verso il Nord. È il momento in cui una potenza marittima scopre di non poter restare solo marittima.'},
      {da:'Un titolo comprato', a:'Un principe italiano', r:'e la stessa logica per cui il papa diventa',
       perche:'Il duca compra la legittimita dall\'imperatore, il papa si costruisce un esercito e una politica dinastica. In entrambi i casi le autorita universali non sono piu il quadro dentro cui si sta: sono risorse da usare. Il Quattrocento italiano tratta papato e impero come strumenti.'},
      {da:'Nelle mani dei baroni', a:'Carlo VIII', r:'spiega la rapidita della discesa di',
       perche:'Napoli non cade per una battaglia: cade perche i baroni non hanno alcun motivo di difendere una dinastia che ha cercato di limitarli. Uno Stato grande ma non integrato si consegna senza combattere, e questa e la differenza fra estensione e forza.'},
      {da:'L\'artiglieria mobile', a:'Facciano finta di combattere', r:'rende definitivamente obsoleta l\'idea che',
       perche:'La guerra dei condottieri era cauta perche gli eserciti erano un capitale da conservare e le mura erano quasi imprendibili. L\'artiglieria francese cambia il calcolo: le fortezze cadono in ore, la cautela diventa suicidio. Non e che gli italiani non sapessero combattere — combattevano secondo regole appena diventate obsolete.'},
      {da:'Pace di Lodi', a:'Il lungo dominio straniero', r:'e il presupposto del',
       perche:'Quarant\'anni di equilibrio interno hanno una conseguenza rovesciata: nessuno degli Stati italiani sviluppa l\'esercito permanente e la fiscalita di guerra che nel frattempo Francia e Spagna costruiscono. La pace non prepara alla guerra, e questo il conto presentato nel 1494.'},
      {da:'Lana, seta e banche', a:'Carlo VIII', r:'sono anche cio che attira',
       perche:'L\'Italia e la regione piu ricca d\'Europa e la meno capace di difendersi. La ricchezza non e solo il premio della vittoria, e il movente dell\'invasione: le spedizioni francesi e spagnole si finanziano con cio che trovano, e questo le rende sostenibili a lungo.'},
      {da:'Gli Stati minori', a:'Le compagnie di ventura', r:'sopravvivono grazie alle',
       perche:'Mantova, Ferrara e Urbino restano indipendenti perche vendono ai grandi la cosa di cui i grandi hanno bisogno: comandanti e soldati. È un modello di sopravvivenza per specializzazione — e finisce nel momento in cui i grandi Stati si dotano di eserciti propri.'}
    ]
  },
  provocazione: {
    titolo:'Quarant\'anni di pace',
    durata:'55 minuti',
    domandaMadre:'Un sistema che funziona da decenni e per questo solido?',
    perche:'L\'Italia del Quattrocento e la parte piu ricca, colta e politicamente sofisticata d\'Europa: inventa l\'equilibrio di potenza, la diplomazia permanente, la contabilita, e produce il Rinascimento. Nel 1494 viene attraversata da un esercito straniero in pochi mesi, e per tre secoli non decidera piu di se stessa. La classe deve capire che le due cose non sono in contraddizione ma collegate: la frammentazione che rende possibile la fioritura e la stessa che rende impossibile la difesa. E deve arrivare al punto piu difficile, che vale per ogni sistema — quarant\'anni senza crisi non dimostrano solidita, dimostrano solo che lo shock non e ancora arrivato.',
    occorrente:'Utile una carta dell\'Italia del 1454 se ce l\'hai a portata di mano, ma non indispensabile.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Settembre 1494.\n\nUn esercito francese entra in Italia\ne la attraversa tutta,\nda Torino a Napoli,\nin poco piu di cinque mesi.\n\nQuasi senza combattere.\n\nUn contemporaneo scrisse che\nle conquiste furono fatte\n«col gesso in mano»:\nil gesso con cui gli ufficiali\nsegnavano le porte delle case\nda requisire per la notte.\n\nL\'Italia era, in quel momento,\nla regione piu ricca d\'Europa.\nAveva le banche piu grandi,\nle citta piu popolose,\nle corti piu colte,\nla diplomazia piu avanzata.\n\nE quarant\'anni di pace alle spalle.',
       parlato:'Dai i fatti in quest\'ordine, tenendo l\'ultima riga per il silenzio.\n\nPoi aggiungi il dato che ribalta tutto e apre la lezione: chi aveva chiamato i francesi in Italia non era un francese. Era Ludovico il Moro, duca di Milano.\n\nAspetta la reazione. È sempre di sconcerto.\n\nNon spiegare ancora perche lo ha fatto: quello e il lavoro dell\'ora. Limitati a dire che il Moro non era un pazzo ne un traditore per denaro: era considerato il politico piu abile d\'Italia.',
       seDicono:[
         {loro:'«Perche nessuno li ha fermati?»',
          tu:'Alcuni ci hanno provato, tardi e separatamente. Ma tieni la domanda cosi: perche cinque Stati che avevano un patto di difesa comune firmato non lo hanno applicato? La risposta ci portera al cuore della faccenda.'},
         {loro:'«Erano deboli militarmente.»',
          tu:'Erano ricchissimi e potevano permettersi eserciti. Il problema non era il denaro: era che nessuno di loro aveva un esercito proprio e permanente. Perche, in quarant\'anni di pace, non serviva.'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'Ludovico il Moro, duca di Milano,\nchiama in Italia il re di Francia\nper togliersi di mezzo Napoli:',
       opzioni:['e un tradimento, e lui e il responsabile del disastro', 'e la mossa che chiunque, al suo posto, avrebbe considerato'],
       parlato:'Fai schierare e conta. La prima opzione vince quasi sempre, ed e la lettura dei manuali ottocenteschi.\n\nPoi chiedi di guardare la situazione dai suoi occhi. Napoli rivendica Milano attraverso una parentela dinastica e lo minaccia apertamente. La regola non scritta del sistema italiano dice: quando qualcuno diventa pericoloso, ti cerchi un contrappeso. Il Moro applica la regola.\n\nL\'errore non e nel principio ma in dove va a cercare il contrappeso: fuori dal sistema, e molto piu grande del sistema.\n\nQui vale la pena nominare il meccanismo, perche lo avete gia incontrato con la legge inglese sui salari: ogni giocatore fa la mossa sensata dal proprio punto di vista, e la somma di mosse sensate produce un disastro che nessuno voleva. Non serve un traditore perche un sistema crolli. Bastano cinque persone ragionevoli.',
       seDicono:[
         {loro:'«Poteva immaginare che sarebbe finita cosi.»',
          tu:'Poteva immaginare che i francesi arrivassero: era previsto e concordato. Non poteva immaginare che restassero. E infatti pochi anni dopo la Francia rivendica Milano — e il Moro finisce prigioniero in Francia, dove muore. Le conseguenze delle sue mosse le paga per primo.'},
         {loro:'«Allora la colpa e del sistema, non sua.»',
          tu:'Attento a questa scorciatoia: i sistemi non decidono, decidono le persone dentro di essi. Diciamo cosi: il sistema rendeva quella mossa ragionevole, e questo spiega perche fu fatta. Spiegare non toglie la responsabilita, la colloca.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Come era nato quel sistema.\n\n1454, pace di Lodi.\nDopo decenni di guerre,\ncinque Stati si riconoscono a vicenda:\n\nMilano, Venezia, Firenze,\nlo Stato della Chiesa, Napoli.\n\n1455, Lega italica:\npatto di venticinque anni,\nnon aggressione e difesa comune.\n\nLa regola implicita:\nchi cresce troppo si ritrova\ngli altri quattro contro.\n\nÈ il primo sistema di equilibrio\ndella storia europea.\n\nPer farlo funzionare serve sapere\nin ogni momento che cosa fanno gli altri.\n\nE cosi nasce, in Italia,\nl\'ambasciatore che risiede stabilmente\npresso una corte straniera\ne scrive relazioni regolari.',
       parlato:'Ricostruisci il sistema con calma: e una costruzione che merita ammirazione prima della critica.\n\nFai capire la novita dell\'ambasciata permanente. Prima si mandavano ambasciatori per un\'occasione: una trattativa, un matrimonio, una guerra. Qui invece uno resta li per anni, con l\'unico compito di osservare e riferire. Tutta l\'Europa copiera questo modello: la diplomazia moderna e un\'esportazione italiana.\n\nPoi la domanda che apre la seconda meta dell\'ora: guardate questo sistema e ditemi che cosa non prevede.\n\nSe non ci arrivano, guidali con una domanda piu stretta: quanti giocatori ci sono? Cinque. E se ne arriva un sesto?\n\nQuesto e il punto. Un equilibrio a cinque presuppone che i giocatori siano cinque. Tutta l\'intelligenza del sistema era rivolta all\'interno — e l\'informazione, per quanto raffinata, riguardava solo gli altri quattro.',
       seDicono:[
         {loro:'«Ma avevano ambasciatori anche in Francia.»',
          tu:'Occasionali, e sottovalutati. Il punto non e l\'assenza totale di informazione: e dove era puntata l\'attenzione. Un sistema di sorveglianza reciproca perfezionato all\'interno puo restare cieco esattamente dove arrivera il colpo.'},
         {loro:'«Quarant\'anni di pace sono comunque un successo.»',
          tu:'Assolutamente si, e non va tolto. La domanda e un\'altra: quei quarant\'anni hanno reso l\'Italia piu forte o piu fragile? Ci arriviamo, ed e la parte scomoda.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'Guicciardini apre la sua storia\ndescrivendo l\'Italia del 1490:\n\nmai, dice, era stata\nin condizioni cosi prospere:\n\npace ovunque,\ncampi coltivati fin sulle montagne,\nricchezza di commerci,\ncitta splendide,\nuomini eccellenti\nin ogni disciplina.\n\nScrive questo\nnelle prime pagine\ndi un libro che racconta\ncome tutto questo\nfu distrutto.',
       testo:{fonte:'Francesco Guicciardini, Storia d\'Italia, libro I (scritta fra il 1537 e il 1540)',
              glossa:'Guicciardini era stato ambasciatore, governatore pontificio e consigliere: scrive da funzionario, non da letterato. Mette la descrizione della prosperita in apertura di un\'opera sulla rovina perche vuole che il lettore senta il contrasto — e perche la sua tesi e che proprio quella prosperita, non difesa da nessuna forza reale, sia stata il movente dell\'invasione.'},
       parlato:'Leggi il passo e poi fai la domanda tecnica: perche uno storico comincia un libro sulla catastrofe descrivendo la felicita?\n\nRisposta: perche il contrasto e la sua tesi. Guicciardini non pensa che l\'Italia sia caduta nonostante fosse ricca. Pensa che sia caduta anche perche era ricca — cioe perche era un premio, e un premio indifeso.\n\nPoi aggiungi il dato che rende la cosa fredda e chiara. La Francia aveva circa quindici milioni di abitanti sotto un solo re, con un\'imposta permanente e un esercito stabile. L\'Italia ne aveva circa dieci, divisi in cinque Stati che non si fidavano l\'uno dell\'altro.\n\nMentre gli italiani perfezionavano l\'equilibrio interno, le monarchie europee stavano superando una soglia di dimensione. E la dimensione, in guerra, e quasi tutto.',
       seDicono:[
         {loro:'«Bastava che si unissero.»',
          tu:'È la conclusione che trarra Machiavelli, e va detto che era irrealistica: unirsi significava che uno vincesse sugli altri quattro, e ogni volta che qualcuno ci ha provato — Gian Galeazzo — gli altri si sono coalizzati. La regola che garantiva la pace impediva l\'unificazione. Non e un difetto del sistema: e il sistema.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Adesso la domanda difficile.\n\nPerche l\'Italia era divisa?\n\nPerche nessuno era riuscito a vincere.\nCioe perche erano tutti\nabbastanza forti.\n\nE che cosa ha prodotto quella divisione?\n\nCinque corti in competizione.\nCinque committenze artistiche.\nCinque cancellerie che assumono umanisti.\nDecine di citta che vogliono\nessere piu belle delle rivali.\n\nBrunelleschi, Piero della Francesca,\nMantegna, Leonardo, Bramante\nlavorano in questo:\nnon in un grande Stato unitario,\nma in un mercato di committenti\nche si fanno concorrenza.\n\nLa stessa frammentazione\nche produce il Rinascimento\ne quella che rende l\'Italia indifendibile.',
       parlato:'Costruisci questo passaggio lentamente, perche e il centro dell\'ora.\n\nFai notare che nessuno degli artisti che studiano in storia dell\'arte avrebbe avuto quella carriera in uno Stato unificato: si spostavano da una corte all\'altra proprio perche le corti erano tante e in competizione. Leonardo lavora per Firenze, Milano, Venezia, Roma e infine per il re di Francia.\n\nPoi la formulazione che devono portarsi via: la stessa causa produce il capolavoro e la catastrofe. Non due cause diverse, una buona e una cattiva — una sola.\n\nDomanda per farli lavorare: allora la divisione e stata un bene o un male?\n\nLa risposta giusta e che la domanda e mal posta, ed e utile che lo scoprano da soli. Le cause storiche non hanno un segno. Hanno effetti, in direzioni diverse, e valutarli dipende da che cosa si sta misurando e su quale periodo.',
       seDicono:[
         {loro:'«Quindi il Rinascimento e valso l\'invasione?»',
          tu:'Non e un baratto e non si puo fare quel conto: nessuno ha scelto fra le due cose. Quello che possiamo dire e che avevano la stessa radice. Chi ammira il Quattrocento italiano e chi ne compiange la fine stanno guardando due facce dello stesso assetto.'},
         {loro:'«Anche la Germania era divisa e non e stata invasa cosi.»',
          tu:'Osservazione ottima, e la differenza e istruttiva: la Germania era divisa, povera e periferica; l\'Italia era divisa, ricchissima e sulla strada di tutti. La frammentazione diventa pericolosa in proporzione a quanto sei appetibile.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Torniamo alla domanda di partenza.\n\nPer quarant\'anni il sistema italiano\nha funzionato:\nnessuna guerra generale,\nnessuno Stato distrutto,\nricchezza crescente.\n\nQuei quarant\'anni erano la prova\nche il sistema era solido?\n\nO erano solo il tempo\nin cui non era ancora arrivato\ncio che poteva romperlo?\n\nE la domanda che vale per tutto:\n\nquando una cosa funziona da molto tempo,\nche cosa state osservando davvero —\nla sua forza,\no l\'assenza della prova?',
       parlato:'Rifai la conta e commenta lo spostamento, che di solito e netto.\n\nPoi il bilancio. Quarant\'anni di pace hanno prodotto ricchezza e arte, e hanno prodotto anche il fatto che nessuno Stato italiano avesse un esercito permanente o una fiscalita di guerra, mentre Francia e Spagna se li stavano costruendo. Il sistema non si era rafforzato: si era specializzato in cio che gli serviva, e cio che gli serviva era la trattativa.\n\nLa domanda finale va lasciata aperta, ma da\' loro il criterio: per sapere se un sistema e solido non basta guardare quanto e durato. Bisogna chiedersi quali prove ha superato — e se ne ha superata nessuna, la durata non dice niente.\n\nUltima cosa, che apre il resto dell\'anno. Da questa sconfitta nascono i due libri piu importanti del pensiero politico italiano. Machiavelli e Guicciardini erano funzionari di uno Stato che aveva perso, e scrivono per capire come si era arrivati li. La riflessione politica moderna comincia con una disfatta — e questo dice qualcosa su quando si pensa davvero.',
       seDicono:[
         {loro:'«Allora non ci si puo mai fidare di niente.»',
          tu:'Non e questo: e che la fiducia va appoggiata su prove, non sull\'abitudine. Un ponte che regge da vent\'anni ti dice qualcosa se in vent\'anni ci sono passati camion pesanti; non ti dice niente se ci sono passate solo biciclette. La domanda giusta e sempre: che cosa ha attraversato questa cosa finora?'}
       ]}
    ],
    riserve:[
      {titolo:'La serrata di Venezia',
       corpo:'Nel 1297 il Maggior Consiglio veneziano stabilisce che possono farne parte solo i discendenti di chi vi aveva gia seduto. L\'accesso al governo viene chiuso ereditariamente.\n\nDa quel momento Venezia non conosce piu ne lotte di fazione ne colpi di Stato: e la repubblica piu stabile d\'Europa, e durera cinque secoli.\n\nIl doge viene eletto con una procedura di dieci passaggi fra sorteggi e votazioni, congegnata perche nessuna famiglia possa pilotarla; alla sua morte una commissione esamina il suo operato e la famiglia paga le eventuali multe.',
       chiedi:'Venezia ottiene una stabilita straordinaria escludendo per sempre la maggioranza dei cittadini dal governo. È un prezzo accettabile? E chi lo ha pagato non aveva voce per dire di no: cambia qualcosa nel giudizio?'},
      {titolo:'Guerre senza morti?',
       corpo:'Machiavelli sostiene che le guerre dei condottieri fossero finte: eserciti affittati che evitavano il combattimento per non perdere il capitale, battaglie che si risolvevano con pochi caduti e molti prigionieri da riscattare.\n\nL\'accusa e efficace e in parte ingiusta: alcune battaglie del Quattrocento ebbero migliaia di morti. Ma il meccanismo che descrive esisteva davvero — i condottieri cambiavano padrone, trattavano con il nemico e avevano interesse a che la guerra durasse.',
       chiedi:'Un esercito di professionisti pagati ha interesse a vincere in fretta? E che cosa cambia, in una guerra, se chi la combatte non appartiene al paese per cui combatte?'},
      {titolo:'Il potere senza la carica',
       corpo:'Cosimo de\' Medici governo Firenze per trent\'anni senza mai ricoprire una carica di rilievo. Il sistema fiorentino estraeva a sorte i magistrati fra i cittadini abilitati: bastava controllare chi finiva nelle liste degli abilitati.\n\nFormalmente la repubblica restava intatta. Le assemblee si riunivano, i priori venivano estratti, i mandati duravano pochi mesi. Nessuno poteva indicare l\'atto con cui la liberta era stata soppressa, perche non c\'era.',
       chiedi:'Un potere che lascia in piedi tutte le istituzioni e piu o meno pericoloso di uno che le abolisce? E come si fa a contestare qualcosa che formalmente non esiste?'}
    ],
    testi:[
      {fonte:'Machiavelli, Il Principe, capitolo XII (1513)',
       corpo:'Le milizie mercenarie, scrive, sono inutili e pericolose: senza disciplina, ambiziose, sleali, «gagliarde fra gli amici» e vili davanti al nemico; e chi fonda il proprio Stato su di esse non stara mai fermo ne sicuro.',
       glossa:'Machiavelli scrive dopo il crollo, e la sua tesi e una diagnosi: l\'Italia e caduta perche ha delegato la propria difesa. Da usare in classe come esempio di come si giudica il passato — la sua analisi e lucida e insieme di parte, perche lui aveva personalmente creato la milizia cittadina fiorentina, che poi fu battuta a Prato nel 1512.'},
      {fonte:'Guicciardini, Storia d\'Italia, sulla discesa di Carlo VIII',
       corpo:'Lo storico osserva che quella spedizione porto in Italia guerre nuove e piu crudeli, e apri la via a interventi stranieri che sarebbero durati per generazioni; e nota che tutto era cominciato da un calcolo di un solo principe italiano.',
       glossa:'Guicciardini e il primo a scrivere una storia d\'Italia come storia di un sistema di Stati e non di una citta sola. Per questo il suo libro e considerato l\'inizio della storiografia moderna: non racconta le imprese di un principe, analizza come si comportano insieme piu attori.'},
      {fonte:'Dalle relazioni degli ambasciatori veneziani, XV-XVI secolo',
       corpo:'Alla fine del mandato ogni ambasciatore veneziano era tenuto a leggere in Senato una relazione scritta sul paese in cui era stato: forze militari, entrate, carattere del sovrano, fazioni di corte, stato dell\'agricoltura.',
       glossa:'Sono la prima raccolta sistematica di informazioni politiche sull\'estero esistente in Europa, e restano una fonte di prim\'ordine per gli storici. Fanno vedere concretamente che cosa significa la nascita della diplomazia: non la cortesia fra Stati, ma la raccolta organizzata di dati sugli altri.'}
    ],
    compito:'Mezza pagina. Scegliete qualcosa che nella vostra esperienza «funziona da sempre»: una regola di casa, un\'abitudine di classe, un accordo fra amici. Poi rispondete a due domande: quali prove ha superato davvero finora, e quale evento — anche improbabile — la farebbe saltare in un giorno. Se non riuscite a immaginare nessun evento del genere, chiedetevi se e perche non puo accadere o perche non ci avete pensato.',
    fonti:[
      'Guicciardini, Storia d\'Italia, libri I-II; Machiavelli, Il Principe, capitoli XII-XIV',
      'Pace di Lodi (1454) e atti della Lega italica (1455)',
      'Relazioni degli ambasciatori veneziani al Senato, edizione Albèri',
      'G. Galasso, L\'Italia come problema storiografico; E. Fasano Guarini, Lo Stato regionale',
      'G. Mattingly, Renaissance Diplomacy — sulla nascita dell\'ambasciata permanente',
      'M. Mallett, Signori e mercenari: la guerra nell\'Italia del Rinascimento'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Storia medievale · 10 — La frontiera mediterranea e gli Ottomani': {
  mappa: {
    n:'La frontiera mediterranea', d:'gli Ottomani, l\'Europa e un mare che divide meno di quanto sembri',
    f:[
      {r:'parte da', n:'Che cos\'era il Mediterraneo', d:'non un confine, ma uno spazio continuo di traffici',
       f:[
         {r:'unisce', n:'Tre sponde', d:'europea, asiatica e africana: e piu facile andare da Genova a Tunisi che a Milano'},
         {r:'e attraversato da', n:'Merci, tecniche e parole', d:'zucchero, carta, numeri, vele latine: passano tutti dalla frontiera'},
         {r:'dove le guerre', n:'Non fermano i commerci', d:'si combatte e si compra dallo stesso avversario, spesso nello stesso mese'},
         {piu:true, r:'e le carte nautiche', n:'Ignorano le religioni', d:'i portolani segnano porti e fondali, non chi li governa'}
       ]},

      {r:'si trasforma con', n:'La fine di Bisanzio', d:'un impero che muore lentamente e poi di colpo',
       f:[
         {r:'colpito a morte dalla', n:'Quarta crociata', d:'1204: sono i crociati cristiani a saccheggiare Costantinopoli',
          f:[{r:'da cui l\'impero', n:'Non si riprende piu', d:'territori perduti, tesoro disperso, e un rancore che dura secoli'}]},
         {r:'ridotto a', n:'Una citta e poco altro', d:'nel Quattrocento l\'impero romano d\'Oriente e poco piu di Costantinopoli'},
         {r:'chiede aiuto con', n:'L\'unione delle Chiese', d:'Ferrara-Firenze 1439: accettata dall\'imperatore, rifiutata dal popolo',
          f:[{piu:true, r:'e a Costantinopoli si dice', n:'Meglio il turbante che la mitra', d:'la sottomissione a Roma pesa piu della conquista'}]},
         {r:'cade nel', n:'1453', d:'assedio di cinquantatre giorni, poi la citta viene presa d\'assalto',
          f:[{r:'guidato da', n:'Mehmet II', d:'ventun anni, deciso a fare della citta la propria capitale'},
             {r:'grazie a', n:'I cannoni di Urban', d:'un ingegnere ungherese che aveva prima offerto i suoi servizi ai bizantini'},
             {r:'e muore combattendo', n:'Costantino XI', d:'ultimo imperatore romano, dopo millecinquecento anni di serie'}]}
       ]},

      {r:'poggia su', n:'La macchina ottomana', d:'un modo di costruire lo Stato diverso da quello europeo',
       f:[
         {r:'nasce da', n:'Un principato di frontiera', d:'i ghazi dell\'Anatolia, guerrieri di confine, in un secolo diventano impero'},
         {r:'si regge sui', n:'Giannizzeri', d:'fanteria permanente, addestrata, pagata e disciplinata: non esiste nulla di simile in Europa'},
         {r:'reclutati con la', n:'Devshirme', d:'il prelievo periodico di ragazzi cristiani nei villaggi balcanici',
          f:[{r:'che vengono', n:'Convertiti e istruiti', d:'e i migliori entrano nella scuola del palazzo, non nell\'esercito'},
             {r:'e restano giuridicamente', n:'Schiavi del sultano', d:'anche il gran visir puo essere giustiziato con un ordine'},
             {piu:true, r:'eppure alcune famiglie', n:'Cercano di farci entrare i figli', d:'e altre nascondono i ragazzi nei boschi: entrambe le cose sono vere'}]},
         {r:'distribuisce terre col', n:'Timar', d:'concessione temporanea in cambio di servizio militare, non ereditaria',
          f:[{r:'cosi non nasce', n:'Una nobilta feudale', d:'nessuna famiglia accumula terre e clientele da trasmettere ai figli'}]},
         {piu:true, r:'e si amministra con', n:'Registri catastali', d:'ogni villaggio censito casa per casa: lo Stato piu documentato del Cinquecento'},
         {r:'e al vertice sta', n:'Il sultano', d:'senza corpi intermedi che possano trattare con lui da pari'}
       ]},

      {r:'si estende con', n:'L\'espansione', d:'due secoli in cui la frontiera si sposta verso ovest',
       f:[
         {r:'prima nei', n:'Balcani', d:'Kosovo 1389, poi Serbia, Bosnia, Albania: l\'Europa sudorientale diventa ottomana'},
         {r:'arriva a', n:'Otranto', d:'1480: una testa di ponte in Italia, abbandonata alla morte di Mehmet'},
         {r:'con Solimano prende', n:'Belgrado e Rodi', d:'1521 e 1522: cadono le due chiavi difensive della cristianita'},
         {r:'travolge l\'Ungheria a', n:'Mohacs', d:'1526: il re muore in battaglia, il regno si dissolve in poche ore'},
         {r:'e domina', n:'Il Mar Nero', d:'che diventa un lago ottomano: si chiude la via che i genovesi tenevano da due secoli'},
         {r:'e si ferma a', n:'Vienna', d:'1529: assedio fallito per la stagione e le distanze, non per una sconfitta',
          f:[{piu:true, r:'ed e il', n:'Limite logistico', d:'un esercito che parte da Costantinopoli in primavera non puo restare oltre l\'autunno'}]}
       ]},

      {r:'organizza i sudditi con', n:'Il sistema dei millet', d:'convivenza regolata, non tolleranza nel senso moderno',
       f:[
         {r:'riconosce', n:'Le comunita religiose', d:'ortodossi, armeni, ebrei: ciascuna con i propri tribunali e capi'},
         {r:'in cambio della', n:'Jizya', d:'un\'imposta sui non musulmani, che pagano per essere lasciati in pace'},
         {r:'con una', n:'Gerarchia stabile', d:'i cristiani non sono perseguitati ma non sono uguali: e il patto'},
         {r:'e accoglie', n:'Gli ebrei espulsi dalla Spagna', d:'1492: a Salonicco nasce la piu grande comunita sefardita d\'Europa',
          f:[{piu:true, r:'e il sultano commenta che', n:'La Spagna si impoverisce', d:'cacciando i suoi mercanti e i suoi medici'}]},
         {r:'e il patriarca ortodosso diventa', n:'Un funzionario del sultano', d:'con piu autorita sui greci di quanta ne avesse sotto l\'imperatore'}
       ]},

      {r:'combatte sul mare con', n:'La guerra di corsa', d:'un conflitto permanente a bassa intensita, in entrambe le direzioni',
       f:[
         {r:'i', n:'Corsari barbareschi', d:'Algeri, Tunisi, Tripoli: razzie sulle coste italiane e spagnole'},
         {r:'e i', n:'Corsari cristiani', d:'i cavalieri di Malta e i toscani fanno esattamente la stessa cosa'},
         {r:'entrambi producono', n:'Schiavitu mediterranea', d:'centinaia di migliaia di prigionieri da entrambe le parti, e un mercato dei riscatti',
          f:[{piu:true, r:'con ordini religiosi specializzati nel', n:'Riscatto dei captivi', d:'trinitari e mercedari: una diplomazia umanitaria che dura secoli'}]},
         {r:'culmina a', n:'Lepanto', d:'1571: la piu grande battaglia navale a remi della storia, vinta dai cristiani'},
         {r:'ma cambia poco perche', n:'La flotta viene ricostruita', d:'in un anno: la vittoria e enorme nel simbolo e modesta negli effetti'}
       ]},

      {r:'e nonostante tutto', n:'Si fanno affari col nemico', d:'la politica reale non segue le divisioni religiose',
       f:[
         {r:'Venezia mantiene', n:'Il bailo a Costantinopoli', d:'un ambasciatore permanente presso il sultano, anche durante le guerre'},
         {r:'gli ottomani concedono', n:'Le capitolazioni', d:'privilegi commerciali ai mercanti europei nei propri porti'},
         {r:'e la Francia stringe', n:'L\'alleanza con Solimano', d:'1536: il re cristianissimo si allea col sultano contro Carlo V',
          f:[{r:'accettando', n:'Lo scandalo europeo', d:'l\'accusa di tradire la cristianita vale meno del contenimento asburgico'},
             {piu:true, r:'e nel 1543 la flotta ottomana', n:'Sverna a Tolone', d:'ospitata da una citta francese, con la cattedrale trasformata in moschea'}]}
       ]},

      {r:'finisce per contare meno per', n:'Lo spostamento del baricentro', d:'il Mediterraneo smette di essere il centro del mondo',
       f:[
         {r:'a causa delle', n:'Rotte atlantiche', d:'il Capo di Buona Speranza e l\'America spostano i traffici verso ovest'},
         {r:'cosi la frontiera diventa', n:'Un fronte secondario', d:'per entrambi gli imperi, che guardano altrove'},
         {r:'in Europa resta', n:'L\'immagine del turco', d:'il nemico per eccellenza nella predicazione, nei libri e nelle stampe',
          f:[{r:'usata soprattutto per', n:'Chiedere tasse e unita', d:'la minaccia esterna e lo strumento politico piu antico che esista'}]},
         {piu:true, r:'e circolano', n:'I rinnegati', d:'europei che passano all\'islam e fanno carriera: alcuni comandano flotte ottomane'},
         {r:'mentre nella realta', n:'La frontiera resta porosa', d:'rinnegati, mercanti, interpreti e schiavi la attraversano in continuazione'}
       ]}
    ],
    incroci:[
      {da:'Quarta crociata', a:'1453', r:'e la premessa remota del',
       perche:'Costantinopoli viene saccheggiata nel 1204 non dai turchi ma dai crociati veneziani e francesi. L\'impero non recupera mai territori, tesoro e credibilita: quando gli ottomani arrivano, trovano un guscio. La caduta piu simbolica della storia europea era stata preparata due secoli e mezzo prima dagli europei.'},
      {da:'I cannoni di Urban', a:'Non fermano i commerci', r:'sono l\'esempio piu duro del fatto che le guerre',
       perche:'L\'ingegnere che fonde i cannoni con cui cadono le mura di Costantinopoli aveva prima offerto i propri servizi all\'imperatore bizantino, che non poteva pagarlo. Tecnici, armi e denaro attraversano la frontiera come le merci: la divisione fra i due mondi e molto piu netta nei manuali che nella pratica.'},
      {da:'Schiavi del sultano', a:'Una nobilta feudale', r:'e la ragione per cui non nasce',
       perche:'Uomini prelevati da bambini, convertiti, senza famiglia, senza terre e senza clan non possono costruire dinastie rivali: la loro carriera dipende interamente dal sultano. È l\'esatto contrario del re di Francia, che deve trattare con nobili proprietari di terre ed eserciti propri.'},
      {da:'Cercano di farci entrare i figli', a:'Gerarchia stabile', r:'si spiega solo dentro una',
       perche:'La devshirme e una violenza — bambini strappati alle famiglie — ed e anche l\'unica scala sociale reale disponibile a un contadino balcanico. Le due cose convivono perche il sistema garantiva una gerarchia prevedibile: sotto restavi al tuo posto in sicurezza, dentro potevi arrivare al vertice.'},
      {da:'Limite logistico', a:'Un fronte secondario', r:'e la causa strutturale per cui la frontiera diventa',
       perche:'Vienna e alla distanza massima raggiungibile da un esercito che parte da Costantinopoli dopo lo scioglimento delle nevi e deve rientrare prima dell\'autunno. Non e il coraggio dei difensori a fermare l\'espansione: e il calendario. Le frontiere si stabilizzano dove finisce la logistica.'},
      {da:'La Spagna si impoverisce', a:'Gli ebrei espulsi dalla Spagna', r:'e il commento sul destino de',
       perche:'Bayezid II accoglie a Salonicco chi la Spagna caccia, e ne ricava mercanti, medici e stampatori. Nel giro di un secolo Salonicco diventa a maggioranza ebraica. La domanda per la classe e diretta: chi ha fatto il calcolo migliore, e con quale criterio.'},
      {da:'Il bailo a Costantinopoli', a:'Corsari barbareschi', r:'tratta ogni giorno i danni fatti dai',
       perche:'Il rappresentante veneziano presso il sultano passava gran parte del tempo a reclamare navi predate e a trattare il rilascio di prigionieri. È la prova che la diplomazia nasce come tecnica di sorveglianza e negoziato fra avversari, non come cortesia fra amici: si tiene un uomo stabilmente in casa del nemico proprio perche il conflitto non finisce mai.'},
      {da:'L\'alleanza con Solimano', a:'L\'immagine del turco', r:'contraddice apertamente',
       perche:'Mentre le prediche descrivono il turco come nemico assoluto della cristianita, il re cristianissimo di Francia ne ospita la flotta a Tolone. Il divario fra il linguaggio pubblico e la pratica politica e enorme — e riconoscerlo e piu utile che scandalizzarsene.'},
      {da:'La flotta viene ricostruita', a:'Rotte atlantiche', r:'conta meno delle',
       perche:'Lepanto e una vittoria colossale che non sposta la frontiera di un chilometro, perche la flotta ottomana torna operativa in un anno. A togliere davvero centralita al Mediterraneo non e una battaglia ma il fatto che l\'argento e le spezie comincino a viaggiare per l\'Atlantico.'},
      {da:'Chiedere tasse e unita', a:'Lo scandalo europeo', r:'e cio che rende utilizzabile',
       perche:'Il turco serve in Europa soprattutto come argomento interno: per ottenere sussidi, giustificare eserciti e chiedere concordia. Per questo l\'alleanza francese fa cosi scandalo — non tanto perche sia immorale, ma perche smonta pubblicamente lo strumento retorico su cui gli altri contano.'},
      {da:'Un funzionario del sultano', a:'Meglio il turbante che la mitra', r:'da\' un senso concreto alla frase',
       perche:'Sotto gli ottomani il patriarca ortodosso ottiene autorita giudiziaria e fiscale sui greci, maggiore di quella che aveva sotto l\'imperatore. La frase attribuita ai bizantini non e cinismo disperato: e un calcolo su chi lascerebbe piu autonomia alla Chiesa greca.'},
      {da:'Corsari cristiani', a:'Riscatto dei captivi', r:'rendono necessario il',
       perche:'La schiavitu mediterranea funziona in entrambe le direzioni, e questo genera un\'economia dei riscatti con ordini religiosi specializzati, tariffe e intermediari. È il caso piu chiaro di una frontiera che, mentre produce violenza, produce anche istituzioni per gestirla.'},
      {da:'La frontiera resta porosa', a:'Merci, tecniche e parole', r:'e cio che continua a far passare',
       perche:'Rinnegati che cambiano fede e mestiere, interpreti, mercanti, schiavi riscattati: il traffico umano attraverso la frontiera non si interrompe mai. È per questo che tecniche, parole e abitudini continuano a circolare in un\'epoca che si racconta come scontro fra due mondi separati.'}
    ]
  },
  provocazione: {
    titolo:'Il figlio del contadino',
    durata:'55 minuti',
    domandaMadre:'Un potere e piu forte se i suoi uomini sono liberi o se gli devono tutto?',
    perche:'Per due secoli la seconda persona dell\'impero ottomano — il gran visir — fu quasi sempre un cristiano nato in un villaggio balcanico, prelevato da bambino, convertito e cresciuto nella scuola del palazzo. Nell\'Europa dello stesso tempo, il figlio di un contadino restava contadino. La classe deve reggere una tensione che non si scioglie: la devshirme era una violenza — bambini strappati alle famiglie — ed era anche la scala sociale piu aperta del Mediterraneo, tanto che alcune famiglie corrompevano per entrarci. Il colpo di scena e che quando il sistema viene addolcito e le cariche diventano ereditarie, l\'impero comincia a irrigidirsi: cio che sembrava barbaro era il motore.',
    occorrente:'Niente.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Sokollu Mehmet Pascia\ngoverno di fatto l\'impero ottomano\nper quattordici anni,\nsotto tre sultani.\n\nEra nato in un villaggio della Bosnia,\nin una famiglia cristiana ortodossa.\n\nDa ragazzo fu prelevato\nda funzionari imperiali,\nportato a Costantinopoli,\nconvertito all\'islam,\ne istruito nella scuola del palazzo.\n\nNon e un\'eccezione:\nper due secoli i gran visir\nvengono quasi tutti da li.\n\nNella stessa epoca, in Francia,\nil figlio di un contadino\nresta contadino.\n\nDove aveva piu possibilita di arrivare in alto,\nun ragazzo nato in un villaggio bosniaco\no uno nato in un villaggio francese?',
       parlato:'Racconta la biografia prima di nominare il sistema: l\'effetto dipende dall\'ordine.\n\nQuando arriva la domanda, aspetta. Qualcuno protestera subito che il paragone e truccato, ed e giusto — ma lascia che siano loro a dirlo.\n\nSe serve, aggiungi un dato per rendere concreto il confronto: nell\'Europa del Quattrocento le cariche di governo erano riservate a chi apparteneva a poche famiglie, per nascita. Non c\'era nessuna procedura, nessun esame, nessuna strada per un figlio di contadini. Non era difficile: era escluso.',
       seDicono:[
         {loro:'«Ma quello era rapito, non e una carriera.»',
          tu:'Esatto, ed e il nodo dell\'ora. Tieni ferma la tua obiezione, perche e sacrosanta. Poi provo a mostrarti un fatto che la complica, e vediamo se resiste.'},
         {loro:'«In Europa c\'era la Chiesa: un povero poteva diventare vescovo.»',
          tu:'Osservazione ottima e vera: la Chiesa era l\'unico canale di mobilita in Occidente, e infatti alcuni papi vennero dal basso. Ma era un canale stretto e sempre piu occupato da figli cadetti di nobili. Teniamola presente: e il vero termine di paragone.'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'La devshirme —\nil prelievo periodico di ragazzi cristiani\nnei villaggi dei Balcani:',
       opzioni:['e schiavitu, e non c\'e altro da dire', 'e anche la scala sociale piu aperta del Mediterraneo'],
       parlato:'Fai schierare e conta. Il primo gruppo vince, e va bene cosi.\n\nPoi dai i dati che complicano, uno per volta, senza commentarli.\n\nIl prelievo avveniva ogni tre-sette anni, riguardava una quota di ragazzi fra gli otto e i diciotto anni, quasi solo cristiani dei Balcani rurali. Conversione obbligatoria. Legami con la famiglia recisi.\n\nMa: alcune famiglie corrompevano i funzionari per farci entrare i figli. Altre li nascondevano nei boschi. Le due cose sono documentate entrambe, spesso nello stesso villaggio.\n\nE ancora: chi arrivava in alto faceva costruire moschee, ponti e fontane nella regione da cui era stato prelevato. Sokollu fece costruire il ponte sulla Drina, in Bosnia.\n\nDomanda: come si spiega che una famiglia paghi per far portare via il proprio figlio?',
       seDicono:[
         {loro:'«Erano famiglie disperate.»',
          tu:'In parte si, e non basta: alcune erano benestanti. Prova a pensarci cosi — che cosa stavano comprando, esattamente? Non la liberta del figlio, quella la perdeva. Stavano comprando l\'unica possibilita che il figlio contasse qualcosa.'},
         {loro:'«Il ponte non ripaga il rapimento.»',
          tu:'No, e non sto dicendo questo. Sto dicendo che quel ponte ci dice qualcosa: chi era stato preso non considerava il proprio villaggio un luogo da dimenticare. La storia vera e piu ingarbugliata delle due caselle in cui vorremmo metterla.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Perche il sultano faceva cosi?\n\nProviamo a ragionare\ndal suo punto di vista.\n\nUn ministro nato nobile\nha terre, parenti, clienti,\nun nome che vale da solo.\nSe lo licenzi, resta potente.\nPuo allearsi con altri come lui.\nSuo figlio erediterà tutto.\n\nUn uomo prelevato da bambino\nnon ha famiglia,\nnon ha terra,\nnon ha un nome,\nnon ha nessuno a cui rivolgersi.\n\nTutto quello che è,\nlo deve a te.\n\nE anche il gran visir,\ngiuridicamente,\nresta uno schiavo del sultano:\npuo essere giustiziato\ncon un ordine, senza processo.',
       parlato:'Costruisci il ragionamento come un problema di governo, non come un giudizio morale: chiedi loro che cosa faresti se dovessi tenere insieme un impero enorme.\n\nPoi il confronto che chiarisce tutto. Il re di Francia deve chiedere ai nobili soldati e denaro, e i nobili possono dire di no; il sultano no. Il re non puo toccare un duca senza aprire una guerra civile; il sultano puo far giustiziare il proprio primo ministro la mattina e nominarne un altro il pomeriggio.\n\nAggiungi la stessa logica applicata alla terra: il timar, la concessione ottomana, non e ereditaria. Nessuna famiglia accumula proprieta da trasmettere. In Europa il feudo ereditario aveva prodotto in due secoli una nobilta che il re non riusciva a controllare.\n\nPoi la domanda seria: dove preferireste vivere, in un sistema in cui potete salire ma il sovrano puo uccidervi, o in uno in cui non potete salire ma la legge vi protegge?\n\nNon c\'e una risposta giusta. Fatela diventare la domanda.',
       seDicono:[
         {loro:'«Nessuno accetterebbe di poter essere ucciso senza processo.»',
          tu:'Molti lo accettarono, in cambio di una possibilita che altrove non esisteva. E aggiungo un dato scomodo: nell\'Europa dello stesso secolo si giustiziava senza troppe formalita anche di piu — chiedi a Tommaso Moro o alle mogli di Enrico VIII. La differenza non e la sicurezza, e chi puo salire.'},
         {loro:'«Ma non erano liberi di andarsene.»',
          tu:'Giusto, e questa e la differenza che regge davvero. Tienila stretta, perche fra poco vediamo che cosa succede quando il sistema si "addolcisce" — e la risposta e sorprendente.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'Ogier Ghiselin de Busbecq,\nambasciatore asburgico a Costantinopoli\nintorno al 1560,\nscrive a un amico in Europa.\n\nDice, in sostanza:\n\nnel campo del sultano non ho visto\nnessuno che debba la propria posizione\na qualcosa di diverso\ndal proprio valore dimostrato;\n\nogni uomo ha l\'incarico\nche corrisponde a cio che sa fare;\n\nda noi, invece, non si guarda\nse non alla nascita,\ne le cariche vanno\na chi porta un certo nome.\n\nÈ una lettera scritta\nda un nemico,\nper mettere in guardia i propri.',
       testo:{fonte:'Ogier Ghiselin de Busbecq, Lettere turche, scritte fra il 1555 e il 1562',
              glossa:'Busbecq e l\'ambasciatore di Ferdinando d\'Asburgo, cioe rappresenta la potenza direttamente minacciata dagli ottomani. Il suo elogio non e simpatia: e allarme. Vuole convincere i principi europei che il vantaggio militare turco nasce da un modo di selezionare gli uomini, e che finche in Europa le cariche andranno per nascita, si continuera a perdere.'},
       parlato:'Leggi il testo e poi fai la domanda di metodo, che vale piu del contenuto: quanto vale la testimonianza di un nemico?\n\nGuidali a vedere che vale molto, ma non perche sia neutrale — anzi. Vale perche Busbecq non ha nessun interesse a lodare i turchi: se lo fa, e perche ha visto qualcosa che lo spaventa. Le lodi rivolte a un avversario sono fra le fonti piu affidabili che esistano, e le accuse a un avversario fra le meno.\n\nPoi fai notare che Busbecq idealizza: gli ottomani avevano corruzione, favoritismi e clientele come tutti. Ma il nucleo e vero — l\'accesso al vertice non passava dalla nascita.\n\nSe la classe regge, aggiungi la domanda difficile: perche in Europa nessuno copio quel sistema, visto che tutti sapevano che funzionava?',
       seDicono:[
         {loro:'«Perche era disumano.»',
          tu:'È una ragione onesta, ma guarda chi avrebbe dovuto decidere: i nobili. Copiare quel sistema significava per loro perdere tutto. Le riforme che tolgono potere a chi deve approvarle non passano quasi mai, e questa e una regola di cui vi accorgerete spesso.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'E adesso guardate\nche cosa succede dopo.\n\nDal tardo Cinquecento\nla devshirme si dirada,\npoi cessa del tutto.\n\nI giannizzeri ottengono\ndi poter far entrare i propri figli.\n\nLe cariche cominciano\na passare di padre in figlio.\n\nIl corpo diventa una corporazione\nche difende i propri privilegi,\nsi ribella, depone i sultani.\n\nIl timar diventa di fatto ereditario\ne si formano grandi proprieta familiari.\n\nCioe: l\'impero diventa\npiu simile all\'Europa.\n\nE da quel momento\ncomincia a perdere terreno.',
       parlato:'Dai la sequenza lentamente, perche il rovesciamento vale solo se lo vedono arrivare da soli.\n\nPoi la formulazione: quello che ci sembrava il tratto piu barbaro del sistema — bambini prelevati, uomini senza famiglia, schiavi al vertice — era esattamente il meccanismo che teneva aperto l\'accesso e impediva la formazione di caste. Quando quel meccanismo viene addolcito, e la vita dei singoli migliora, la macchina si inceppa.\n\nQui bisogna essere precisi, e vale la pena dirlo apertamente: non sto sostenendo che la devshirme fosse una buona cosa e neppure che l\'impero sia decaduto solo per questo — pesarono l\'Atlantico, l\'inflazione dell\'argento, le nuove tecniche militari europee. Sto dicendo che un sistema puo avere il proprio punto di forza esattamente dove ha il proprio orrore, e che questo rende impossibile giudicarlo con una parola sola.\n\nDomanda finale del blocco: si puo migliorare un\'istituzione un pezzo per volta, senza sapere quale pezzo la teneva in piedi?',
       seDicono:[
         {loro:'«Allora l\'ereditarieta rovina tutto.»',
          tu:'Tendenzialmente si, e nota che l\'Europa fece la stessa cosa: in Francia le cariche divennero acquistabili e poi trasmissibili ai figli. La differenza fu che l\'Europa aveva molti Stati in concorrenza, quindi chi si irrigidiva veniva battuto da un vicino. L\'impero ottomano non aveva un vicino che gli facesse da controllo.'},
         {loro:'«Quindi stavano meglio prima, da schiavi?»',
          tu:'I singoli no, quasi certamente: chi ottenne di far entrare il proprio figlio migliorò la propria vita. È l\'istituzione a peggiorare. Questa distanza fra il bene dei singoli e la tenuta dell\'insieme e uno dei problemi piu duri della politica, e non ha una soluzione elegante.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Torniamo alla domanda.\n\nUn potere e piu forte\nse i suoi uomini sono liberi\no se gli devono tutto?\n\nGli ottomani scelsero la seconda,\ne per due secoli\nfurono la macchina militare\npiu efficiente del Mediterraneo.\n\nPoi lasciarono che\nle posizioni si ereditassero,\ne divennero un impero come gli altri.\n\nUltima domanda,\ne riguarda voi:\n\nquando un\'organizzazione sceglie\nchi mettere in cima,\nquali strade tiene aperte\ne quali ha gia chiuso\nsenza dirlo?',
       parlato:'Rifai la conta iniziale. Lo spostamento di solito e parziale, e va bene: non si tratta di convincerli che la devshirme fosse accettabile.\n\nRiassumi che cosa hanno imparato, e tieni le due cose insieme senza sciogliere il nodo: era una violenza; era la scala sociale piu aperta del suo mondo; e fu la sua abolizione, non la sua esistenza, a coincidere con il declino.\n\nPoi il passaggio all\'oggi, e falli lavorare invece di rispondere tu. Chiedi come si arriva in alto nelle organizzazioni che conoscono: una squadra, una scuola, un\'azienda, la politica. Quali strade sono aperte a tutti davvero, e quali sono formalmente aperte ma di fatto chiuse — perche richiedono tempo, contatti, denaro o un cognome.\n\nUltima cosa, che chiude il capitolo: il Mediterraneo che studiamo come frontiera fra due mondi era attraversato di continuo — da mercanti, tecnici, schiavi, rinnegati e ambasciatori. Quando qualcuno vi presenta due mondi come separati per natura, la domanda da fare e sempre la stessa: chi li attraversa, e perche non ce lo raccontano.',
       seDicono:[
         {loro:'«Oggi almeno c\'e la scuola per tutti.»',
          tu:'È il canale piu aperto mai esistito, e non e poco. Ma provate a verificarlo invece di darlo per buono: quanti anni di studio servono per le posizioni che contano, chi puo permetterseli, e quanto pesa ancora la famiglia da cui uno viene. La domanda vale la pena, qualunque risposta troviate.'}
       ]}
    ],
    riserve:[
      {titolo:'Chi ha distrutto Costantinopoli',
       corpo:'Nel 1204 la quarta crociata, partita per l\'Egitto, si dirige su Costantinopoli e la saccheggia per tre giorni. I crociati e i veneziani spogliano le chiese, fondono reliquiari, portano via i cavalli di bronzo che finiranno su San Marco.\n\nL\'impero bizantino viene smembrato e ricostituito solo nel 1261, ridotto a un\'ombra.\n\nNel 1453, quando arrivano gli ottomani, Costantinopoli ha forse cinquantamila abitanti — era stata la citta piu grande d\'Europa con mezzo milione.',
       chiedi:'La caduta del 1453 e raccontata come lo scontro fra cristianita e islam. Che cosa cambia sapere che il colpo decisivo era stato inferto due secoli e mezzo prima da altri cristiani? E perche questo dettaglio compare cosi di rado nel racconto comune?'},
      {titolo:'Lepanto',
       corpo:'Il 7 ottobre 1571 la flotta della Lega Santa distrugge la flotta ottomana: circa duecento galere affondate o catturate, decine di migliaia di morti, migliaia di schiavi cristiani liberati. In Europa si celebra come la vittoria decisiva contro il turco.\n\nEntro l\'estate successiva gli ottomani hanno ricostruito una flotta di dimensioni comparabili. Cipro, che era il motivo della guerra, resta ottomana. Nel 1573 Venezia firma la pace e riconosce la perdita.\n\nUn ministro ottomano avrebbe detto ai veneziani: voi ci avete bruciato la barba, noi vi abbiamo tagliato un braccio.',
       chiedi:'Che cosa rende una vittoria decisiva? E perche una battaglia che non sposta nulla puo restare nella memoria per secoli, mentre trattati che spostano confini non li ricorda nessuno?'},
      {titolo:'Il re cristianissimo e il sultano',
       corpo:'Nel 1536 la Francia di Francesco I stringe un\'intesa con Solimano il Magnifico contro Carlo V. Nel 1543 la flotta ottomana di Barbarossa sverna nel porto di Tolone, ospitata dalla Francia; la cattedrale viene adibita a moschea e la popolazione cristiana della citta viene in parte allontanata.\n\nLo scandalo in Europa e enorme. L\'alleanza dura, con interruzioni, per oltre due secoli.',
       chiedi:'Che cosa conta di piu nella condotta di uno Stato, l\'appartenenza dichiarata o l\'interesse del momento? E quando un governo fa il contrario di cio che predica, si deve concludere che non credeva a cio che predicava?'}
    ],
    testi:[
      {fonte:'Busbecq, Lettere turche, sulla disciplina dell\'accampamento ottomano',
       corpo:'L\'ambasciatore descrive un campo militare silenzioso e ordinato, senza ubriachezza ne risse, con i soldati che dormono sotto tende basse e mangiano poco; e osserva che eserciti simili si mantengono con una frazione di quanto costano quelli europei.',
       glossa:'Il confronto e implicito ma trasparente: gli eserciti europei del Cinquecento erano bande armate che si nutrivano saccheggiando. Busbecq scrive per far vergognare i propri, e il suo giudizio va preso come tale — non una descrizione neutra, ma una fonte preziosa proprio perche di parte contraria.'},
      {fonte:'Sul sistema dei millet — pratica amministrativa ottomana',
       corpo:'Le comunita religiose non musulmane conservano i propri tribunali, le proprie scuole e i propri capi, che rispondono al sultano della fedelta e delle imposte del gruppo. In cambio pagano la jizya e accettano limitazioni: divieto di portare armi, restrizioni nell\'edificare luoghi di culto, subordinazione nei tribunali misti.',
       glossa:'Da non confondere con la tolleranza moderna, che presuppone l\'uguaglianza. Qui la convivenza si regge sulla disuguaglianza dichiarata e stabile: sai esattamente qual e il tuo posto e che non lo perderai. Vale la pena chiedere in classe quale delle due cose spaventi di piu — essere discriminati per legge o esserlo di fatto.'},
      {fonte:'Tradizione ottomana su Bayezid II e gli ebrei espulsi dalla Spagna, 1492',
       corpo:'Al sultano viene attribuita l\'osservazione che il re di Spagna, cacciando gli ebrei, impoverisce il proprio regno e arricchisce il suo.',
       glossa:'La frase e probabilmente costruita a posteriori, e va detto in classe. Resta utile perche il fatto e certo: le comunita accolte a Salonicco, Costantinopoli e Smirne portarono capitali, medicina e la stampa. Una frase inventata puo riassumere bene un fenomeno vero, purche si sappia che e inventata.'}
    ],
    compito:'Mezza pagina. Prendete un\'organizzazione che conoscete bene e descrivete come ci si arriva in cima: quali passaggi sono obbligatori, quanto durano, che cosa richiedono. Poi rispondete alla domanda che abbiamo usato per gli ottomani: chi e escluso da quel percorso, e l\'esclusione e scritta da qualche parte o funziona senza bisogno di essere dichiarata?',
    fonti:[
      'Busbecq, Legationis Turcicae epistolae quattuor (Lettere turche), 1555-1562',
      'Relazioni dei baili veneziani da Costantinopoli, edizione Albèri',
      'H. Inalcik, L\'impero ottomano: l\'età classica; S. Faroqhi, L\'impero ottomano',
      'F. Braudel, Civiltà e imperi del Mediterraneo nell\'età di Filippo II',
      'S. Runciman, La caduta di Costantinopoli; G. Ricci, Ossessione turca',
      'M. Fusaro, Reti commerciali nel Mediterraneo — sui traffici attraverso la frontiera'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Storia medievale · 11 — Il Nuovo Mondo': {
  mappa: {
    n:'Il Nuovo Mondo', d:'come due mondi separati da dodicimila anni si incontrano in un decennio',
    f:[
      {r:'comincia da', n:'Perche si parte', d:'e quasi mai per il motivo che si racconta',
       f:[
         {r:'servono le', n:'Spezie', d:'conservano il cibo e valgono piu dell\'oro a parita di peso'},
         {r:'ma le rotte sono', n:'In mano ad altri', d:'ottomani, arabi e veneziani controllano ogni passaggio verso l\'Oriente'},
         {r:'e in Africa si cerca', n:'L\'oro del Sudan', d:'che arriva in Europa attraverso il Sahara, e costa tre passaggi di intermediari'},
         {r:'la spinta viene dalla', n:'Penisola iberica', d:'due regni appena usciti dalla reconquista, con nobili guerrieri senza piu guerre'},
         {r:'lo permette la', n:'Caravella', d:'scafo leggero, vela latina: risale il vento, quindi puo tornare indietro',
          f:[{r:'insieme a', n:'Bussola e astrolabio', d:'strumenti arabi e cinesi arrivati in Europa attraverso il Mediterraneo'},
             {piu:true, r:'e alle', n:'Carte nautiche portoghesi', d:'tenute segrete come oggi si tengono i brevetti'}]},
         {piu:true, r:'e un errore aiuta', n:'La circonferenza sbagliata', d:'Colombo crede la Terra un quarto piu piccola: se avesse avuto ragione, sarebbe morto in mare'}
       ]},

      {r:'e aperto dai', n:'Portoghesi', d:'che ci lavorano ottant\'anni prima di Colombo',
       f:[
         {r:'organizzati da', n:'Enrico il Navigatore', d:'finanzia spedizioni sistematiche lungo la costa africana'},
         {r:'superano', n:'Capo Bojador', d:'1434: il limite psicologico oltre il quale si credeva impossibile tornare'},
         {r:'doppiano il', n:'Capo di Buona Speranza', d:'1488, con Bartolomeu Dias'},
         {r:'e arrivano in India con', n:'Vasco da Gama', d:'1498: la rotta delle spezie e aperta e non passa piu dal Mediterraneo'},
         {r:'costruiscono', n:'Un impero di basi', d:'fortezze e scali sulle coste, non conquista dell\'interno',
          f:[{piu:true, r:'perche il fine e', n:'Controllare i passaggi', d:'con pochi uomini si tassa un traffico che altri continuano a produrre'}]}
       ]},

      {r:'si apre con', n:'Colombo', d:'che cerca una cosa e ne trova un\'altra senza accorgersene',
       f:[
         {r:'nel', n:'1492', d:'tre navi, trentatre giorni di traversata, l\'approdo alle Bahamas'},
         {r:'convinto fino alla fine di essere', n:'In Asia', d:'in quattro viaggi non ammettera mai di aver trovato un continente nuovo'},
         {r:'la spartizione avviene con', n:'Tordesillas', d:'1494: una riga sull\'oceano divide il mondo fra Spagna e Portogallo',
          f:[{r:'legittimata da', n:'Una bolla papale', d:'ed e l\'ultima volta che il papa dispone del pianeta come di una proprieta'}]},
         {r:'e il continente prende il nome da', n:'Vespucci', d:'che per primo scrive che si tratta di terre sconosciute agli antichi'}
       ]},

      {r:'prosegue con', n:'La conquista', d:'pochi uomini abbattono due imperi in dieci anni',
       f:[
         {r:'Cortes prende', n:'Tenochtitlan', d:'1521: una citta di oltre duecentomila abitanti, piu grande di ogni citta europea'},
         {r:'Pizarro cattura', n:'Atahualpa', d:'1532 a Cajamarca: l\'imperatore inca preso durante un incontro diplomatico'},
         {r:'non vincono per superiorita ma per', n:'Alleanze indigene', d:'decine di migliaia di guerrieri locali in rivolta contro il dominio azteco'},
         {r:'aiutati da', n:'Cavalli, acciaio e archibugi', d:'un vantaggio reale ma limitato: contano piu nella prima ora che nella guerra'},
         {r:'e soprattutto da', n:'Le epidemie', d:'vaiolo, morbillo e tifo arrivano prima degli eserciti e svuotano le citta',
          f:[{r:'perche i due mondi erano', n:'Separati da dodicimila anni', d:'nessuna immunita, nessuna esposizione precedente'},
             {piu:true, r:'e il contagio', n:'Corre piu veloce dei conquistatori', d:'gli Inca erano gia in guerra civile per una peste arrivata prima degli spagnoli'}]}
       ]},

      {r:'produce', n:'Il crollo demografico', d:'la piu grande catastrofe di popolazione documentata',
       f:[
         {r:'nelle isole caraibiche', n:'La popolazione scompare', d:'in una generazione: e il primo segnale, e nessuno lo legge'},
         {r:'in Messico e Perù cala', n:'Di oltre l\'ottanta per cento', d:'in un secolo; le stime assolute sono discusse, l\'ordine di grandezza no'},
         {r:'la causa principale sono', n:'Le malattie', d:'non le armi: ma le malattie arrivano dentro un\'occupazione, non da sole'},
         {r:'aggravate da', n:'Lavoro forzato e fame', d:'campi abbandonati, comunita spostate, famiglie divise: un corpo denutrito muore di piu'},
         {piu:true, r:'e l\'abbandono dei campi', n:'Cambia il clima', d:'la foresta ricresce, la CO2 cala: alcuni studiosi lo legano alla Piccola eta glaciale'}
       ]},

      {r:'si organizza in', n:'Un sistema coloniale', d:'costruito per estrarre e spedire',
       f:[
         {r:'con l\'', n:'Encomienda', d:'gruppi di indios affidati a un colono, che in cambio dovrebbe istruirli nella fede'},
         {r:'e la', n:'Mita', d:'turni di lavoro obbligatorio nelle miniere, ripresi da un istituto inca e resi molto peggiori'},
         {r:'ruota attorno a', n:'Potosi', d:'1545: la montagna d\'argento, e per un secolo la citta piu popolosa delle Americhe'},
         {r:'e quando gli indios muoiono si ricorre alla', n:'Tratta atlantica', d:'la deportazione di africani sostituisce la manodopera che e stata distrutta',
          f:[{r:'per alimentare', n:'Le piantagioni', d:'zucchero, poi tabacco e cotone: un\'agricoltura industriale basata sulla schiavitu'},
             {piu:true, r:'per un totale di', n:'Circa dodici milioni di deportati', d:'in tre secoli e mezzo, di cui piu di un milione morti durante la traversata'}]}
       ]},

      {r:'apre', n:'Il dibattito sulla legittimita', d:'ed e la cosa piu inattesa di tutta la vicenda',
       f:[
         {r:'comincia con', n:'Il sermone di Montesinos', d:'1511, a Santo Domingo: «con che diritto tenete questi uomini in servitu?»'},
         {r:'continua con', n:'Bartolomé de Las Casas', d:'ex encomendero che passa la vita a denunciare cio che ha praticato'},
         {r:'la corona emana le', n:'Leggi Nuove', d:'1542: vietata la schiavitu degli indios, l\'encomienda non e piu ereditaria',
          f:[{r:'ma i coloni', n:'Si ribellano', d:'e nel 1546 il vicere del Peru viene ucciso in battaglia dai coloni stessi'},
             {r:'e le leggi vengono', n:'In gran parte ritirate', d:'la legge e a Madrid, il potere di applicarla e a ottomila chilometri'}]},
         {r:'culmina nella', n:'Disputa di Valladolid', d:'1550-51: Carlo V sospende le conquiste in attesa di una risposta',
          f:[{r:'con', n:'Sepulveda', d:'che sostiene la guerra giusta contro chi pratica sacrifici umani ed e inferiore per natura'},
             {r:'contro', n:'Las Casas', d:'che nega ogni titolo alla conquista e afferma la piena umanita degli indios'},
             {piu:true, r:'e finisce', n:'Senza un verdetto', d:'nessuno dei due viene proclamato vincitore, e la conquista riprende'}]},
         {r:'e produce a Salamanca', n:'La scuola di Vitoria', d:'gli indios sono veri proprietari, il papa non puo donare terre che non ha',
          f:[{r:'da cui nasce', n:'Il diritto internazionale', d:'l\'idea che esistano norme valide fra popoli diversi, anche non cristiani'}]}
       ]},

      {r:'cambia il mondo con', n:'Lo scambio colombiano', d:'piante, animali, malattie e denaro che attraversano l\'oceano',
       f:[
         {r:'dall\'America arrivano', n:'Mais, patata e pomodoro', d:'e in due secoli riscrivono l\'alimentazione europea e cinese',
          f:[{piu:true, r:'e la patata', n:'Fa crescere la popolazione', d:'piu calorie per ettaro di qualunque cereale: e alla base del boom demografico'}]},
         {r:'in America arrivano', n:'Grano, cavalli e bovini', d:'e trasformano le praterie e le societa che ci vivono'},
         {r:'l\'argento americano', n:'Finisce in Cina', d:'passando per l\'Europa e per Manila: e la prima catena di pagamenti planetaria'},
         {r:'e in Europa provoca', n:'La rivoluzione dei prezzi', d:'un secolo di inflazione che impoverisce chi vive di rendite fisse'},
         {r:'cosi nasce', n:'Un\'economia mondiale', d:'per la prima volta un fatto locale ha effetti su tutti i continenti'}
       ]}
    ],
    incroci:[
      {da:'La circonferenza sbagliata', a:'1492', r:'e la condizione perche avvenga il',
       perche:'Colombo calcola una Terra molto piu piccola del vero; i geografi che lo respinsero avevano ragione. Se avesse avuto le misure esatte non sarebbe partito, e se fra la Spagna e l\'Asia non ci fosse stato un continente sarebbe morto in mare. La scoperta nasce da un errore corretto da un caso.'},
      {da:'In mano ad altri', a:'Vasco da Gama', r:'e il problema che risolve',
       perche:'Ottomani, mercanti arabi e veneziani prelevano un margine a ogni passaggio delle spezie. La rotta del Capo non e una curiosita geografica: e il modo di togliere di mezzo tutti gli intermediari in una volta. Le grandi navigazioni nascono da un problema commerciale preciso.'},
      {da:'Le epidemie', a:'La popolazione scompare', r:'sono la causa principale del fatto che',
       perche:'Le armi da fuoco del Cinquecento erano lente e poche; il vaiolo no. Ma va detto con precisione: le malattie non arrivano da sole, arrivano dentro un\'occupazione che sposta le comunita, impone lavoro forzato e disperde i raccolti. Non e un genocidio pianificato ed e comunque una catastrofe con responsabilita.'},
      {da:'Alleanze indigene', a:'Tenochtitlan', r:'sono cio che rende possibile la presa di',
       perche:'Cortes non ha cinquecento uomini contro un impero: ha cinquecento uomini piu decine di migliaia di guerrieri tlaxcaltechi che odiano gli aztechi. La conquista e anche una guerra civile mesoamericana, e questo cambia la domanda: non come pochi vinsero molti, ma chi decise di allearsi con chi e perche.'},
      {da:'La popolazione scompare', a:'Tratta atlantica', r:'e la ragione economica che avvia la',
       perche:'Distrutta la manodopera locale, il sistema coloniale non si ferma: la sostituisce. La deportazione degli africani non e un fenomeno parallelo alla catastrofe americana, ne e la conseguenza diretta — una catastrofe che ne genera un\'altra per non interrompere una produzione.'},
      {da:'In gran parte ritirate', a:'Senza un verdetto', r:'anticipa la sorte della disputa che finisce',
       perche:'Nel 1542 la corona emana leggi giuste e nel 1546 i coloni uccidono un vicere; nel 1551 i teologi discutono e nessuno vince. Due volte la ragione sta a Madrid e il potere sta nelle Americhe. Avere ragione senza gli strumenti per applicarla e la condizione ricorrente di questa vicenda.'},
      {da:'Il diritto internazionale', a:'Una bolla papale', r:'nasce demolendo',
       perche:'Vitoria sostiene che il papa non puo donare terre che non gli appartengono e che gli indios sono veri proprietari. Per fondare il diritto fra i popoli bisogna prima togliere di mezzo l\'idea che qualcuno possa disporre del mondo: la prima norma internazionale nasce come limite a un\'autorita, non come concessione.'},
      {da:'Potosi', a:'Finisce in Cina', r:'produce l\'argento che',
       perche:'La montagna di Potosi alimenta una catena che passa da Siviglia, attraversa l\'Europa e arriva in Cina, dove l\'argento e la moneta fiscale. È il primo circuito di pagamenti che fa il giro del pianeta: da quel momento un fatto locale ha conseguenze su tre continenti.'},
      {da:'La rivoluzione dei prezzi', a:'Penisola iberica', r:'colpisce piu duramente la',
       perche:'Il paese che riceve l\'argento e quello che ne esce peggio: i prezzi salgono, le manifatture spagnole diventano care e si compra all\'estero. La ricchezza che arriva senza essere prodotta non costruisce capacita produttiva — e uno dei casi piu studiati di risorsa che impoverisce.'},
      {da:'Un impero di basi', a:'Encomienda', r:'e l\'opposto del sistema fondato sull\'',
       perche:'I portoghesi occupano scali e tassano traffici altrui; gli spagnoli occupano terre e uomini. Le due formule dipendono da cio che trovano: in Asia sistemi statali forti da cui conviene farsi pagare un pedaggio, in America popolazioni decimate su territori enormi da sfruttare direttamente.'},
      {da:'Fa crescere la popolazione', a:'Circa dodici milioni di deportati', r:'e sostenuta dallo stesso sistema che produce',
       perche:'Lo scambio colombiano non ha un segno unico: la patata nutre l\'Europa e lo zucchero delle piantagioni si produce con lavoro schiavistico. La stessa rete che moltiplica le calorie disponibili in un continente deporta uomini in un altro, e giudicare l\'insieme con una parola sola e impossibile.'},
      {da:'Separati da dodicimila anni', a:'Grano, cavalli e bovini', r:'e la ragione per cui arrivano insieme a',
       perche:'La lunga separazione spiega insieme il disastro e la fecondita dello scambio: nessuna immunita condivisa, ma anche nessuna pianta e nessun animale in comune. Lo stesso isolamento che rende letali i microbi rende rivoluzionarie le colture — un unico fatto biologico con due effetti opposti.'},
      {da:'Si ribellano', a:'Lavoro forzato e fame', r:'i coloni lo fanno per continuare a imporre',
       perche:'La rivolta contro le Leggi Nuove non e una protesta astratta: i coloni difendono il diritto di disporre del lavoro indigeno e di trasmetterlo ai figli. Ogni volta che una norma tocca un interesse concreto e chi deve applicarla e chi ci guadagna, la norma perde.'}
    ]
  },
  provocazione: {
    titolo:'Chi non stiamo vedendo',
    durata:'55 minuti',
    domandaMadre:'Chi difende una vittima vede tutte le vittime?',
    perche:'La conquista dell\'America produce insieme la piu grande catastrofe demografica documentata e la prima teoria dei diritti validi per tutti gli uomini: due cose nate nello stesso impero, negli stessi anni, spesso nelle stesse stanze. La classe deve capire perche la seconda non ferma la prima — la ragione sta a Madrid, il potere sta a ottomila chilometri. E deve arrivare al punto piu duro, che riguarda chiunque prenda posizione su qualcosa: Las Casas, il piu coraggioso difensore degli indios, propose di importare africani per alleggerirli, e se ne accorse troppo tardi. Non per malvagita: perche il suo campo visivo era definito dal problema che stava combattendo.',
    occorrente:'Niente. Ma prepara mentalmente il passaggio su Las Casas: va detto senza compiacimento e senza sconti.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Valladolid, 1550.\n\nCarlo V, il sovrano piu potente del mondo,\nordina la sospensione\ndi tutte le nuove spedizioni\ndi conquista in America.\n\nMotivo:\ndeve prima essere stabilito\nse siano lecite.\n\nConvoca due uomini a discuterne\ndavanti a una giuria di teologi.\n\nNon risulta che nessun altro impero\ndella storia si sia mai fermato\nper chiedersi\nse avesse il diritto\ndi fare quello che stava facendo.\n\nNello stesso momento,\nnelle isole caraibiche,\nla popolazione originaria\ne praticamente scomparsa.',
       parlato:'Dai i due blocchi separati da una pausa netta: prima la disputa, poi il dato demografico.\n\nQuando arrivi al secondo, sii preciso: nelle Antille la popolazione crolla quasi a zero in poco piu di una generazione; in Messico e in Perù cala di oltre l\'ottanta per cento in un secolo. Le stime assolute sono discusse fra gli storici e l\'ordine di grandezza no.\n\nPoi la domanda che apre l\'ora: come stanno insieme queste due cose?\n\nNon accettare la scorciatoia dell\'ipocrisia, non ancora. Dilla tu, anzi, come possibilita: forse era teatro. E poi aggiungi che la disputa costo anni, denaro e prestigio, e che chi la vinse moralmente perse politicamente. Vale la pena guardarci dentro prima di decidere.',
       seDicono:[
         {loro:'«Se ne discutevano, sapevano che era sbagliato.»',
          tu:'Alcuni si, e lo scrissero. Ma tieni presente che la posizione opposta era sostenuta con argomenti che allora sembravano solidi, non con cinismo dichiarato. Capire come si costruisce una giustificazione e piu utile che dare per scontato che nessuno ci credesse.'},
         {loro:'«Tanto poi hanno continuato lo stesso.»',
          tu:'Esatto, e sara la parte centrale dell\'ora: perche una cosa riconosciuta ingiusta continui comunque. La risposta non e che erano tutti in malafede.'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'La disputa di Valladolid:',
       opzioni:['e una messinscena per mettersi la coscienza a posto', 'e un fatto senza precedenti, e conta'],
       parlato:'Fai schierare e conta. Il primo gruppo di solito prevale.\n\nPoi dai gli elementi, senza schierarti.\n\nA favore della prima lettura: la conquista riprese, la disputa non ebbe un verdetto ufficiale, e le Leggi Nuove del 1542 — che vietavano di ridurre in schiavitu gli indios — erano gia state in gran parte ritirate dopo che i coloni si erano ribellati e avevano ucciso in battaglia il vicere del Perù.\n\nA favore della seconda: quelle leggi erano state emanate; la corona sospese davvero le spedizioni; e dalla stessa discussione, a Salamanca, nacque la tesi che gli indios fossero veri proprietari delle loro terre e che il papa non potesse donare cio che non gli apparteneva.\n\nPoi la domanda che li fara lavorare: se una legge giusta viene ritirata, e come se non fosse mai esistita?',
       seDicono:[
         {loro:'«Una legge che non si applica non serve a niente.»',
          tu:'Sul momento, quasi. Ma nota una cosa: quelle formulazioni restano scritte e vengono riprese, contro gli stessi imperi, per secoli. Una norma inapplicata e un\'arma appoggiata a terra: non ferisce nessuno, e qualcuno puo raccoglierla dopo.'},
         {loro:'«Bastava che il re li obbligasse.»',
          tu:'Ci provo. Ma il re era a Madrid e i coloni erano in America, con le armi, e senza di loro non arrivava argento. Tieni questa asimmetria, perche e la chiave dell\'intera vicenda.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Le due posizioni, in sintesi.\n\nSepulveda:\ngli indios praticano sacrifici umani\ne cannibalismo;\nsono per natura inadatti a governarsi;\nla guerra e lecita\nper impedire il male\ne per il loro stesso bene.\n\nLas Casas:\nhanno citta, leggi, agricoltura, arti;\nsono uomini pienamente razionali;\ni sacrifici umani sono un errore\nda combattere con la predicazione,\nnon con l\'invasione;\nnessuna conquista ha titolo.\n\nUna delle due tesi\nservirà, con altri nomi,\nper i quattro secoli successivi.',
       parlato:'Presenta le due posizioni con onesta, anche quella di Sepulveda: se la rendi ridicola, la classe non impara a riconoscerla.\n\nPoi fai notare la struttura del suo argomento, perche e questo che devono portarsi via. Non dice «ci conviene». Dice tre cose: quelli fanno cose atroci; sono incapaci di governarsi; interveniamo per il loro bene. È la forma classica della giustificazione di un dominio, e la ritroveranno nel colonialismo ottocentesco quasi identica.\n\nDomanda utile: il primo punto era vero? Si, i sacrifici umani esistevano. Allora chiedi: da un fatto vero segue la conclusione? E fai vedere che no — perche la stessa Europa bruciava eretici e streghe, e nessuno pensava che questo autorizzasse un altro popolo a invaderla.\n\nPoi la parte fredda: chi vinse? Nessuno, ufficialmente. Ma le encomiendas restarono, l\'argento continuo ad arrivare e la conquista prosegui. La discussione fu seria e il suo esito lo decisero i rapporti di forza.',
       seDicono:[
         {loro:'«Sepulveda non era mai stato in America.»',
          tu:'Verissimo, e Las Casas ci aveva vissuto trent\'anni. È un\'osservazione buona, ma attento a usarla come argomento decisivo: l\'esperienza diretta rende una testimonianza preziosa e non rende automaticamente giusta una tesi. Serve per pesare i fatti, non per stabilire i principi.'},
         {loro:'«Quindi vinse chi era sul posto.»',
          tu:'Sostanzialmente si. E questa e la regola piu dura di tutta la storia coloniale: la distanza fra chi decide e chi esegue e la vera misura di quanto una legge varra.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'Trentanove anni prima di Valladolid.\n\nSanto Domingo, Avvento 1511.\nIl domenicano Antonio de Montesinos\npredica davanti ai coloni,\ne al figlio di Colombo.\n\nChiede, in sostanza:\n\ncon che diritto tenete questi uomini\nin una servitu cosi crudele?\n\nchi vi ha autorizzato\na fare guerre a gente\nche viveva in pace nella propria terra?\n\nnon sono uomini anche loro?\nnon avete l\'obbligo\ndi amarli come voi stessi?\n\nE conclude dicendo\nche in quello stato\nnon possono salvarsi\npiu di quanto possano salvarsi\ni turchi.',
       testo:{fonte:'Sermone di Antonio de Montesinos, Santo Domingo, quarta domenica di Avvento 1511, riferito da Las Casas nella Historia de las Indias',
              glossa:'Va detto che il testo ci arriva attraverso Las Casas, che era presente e non era neutrale. La circostanza pero e verificata: i coloni protestarono presso la corona e i domenicani furono richiamati. E il paragone finale e studiato per colpire — dire a uno spagnolo del 1511 che si sta salvando quanto un turco era l\'insulto piu grave disponibile.'},
       parlato:'Leggi il sermone e lascia il silenzio.\n\nPoi il dato che serve: nel 1511 la conquista e appena cominciata, e la denuncia arriva subito, dall\'interno, da uomini della stessa Chiesa che benediceva le spedizioni. Non e un giudizio a posteriori nostro: e contemporaneo ai fatti.\n\nQuesto smonta l\'obiezione che sentirete per tutto l\'anno — «erano altri tempi, non potevano saperlo». Qualcuno lo sapeva e lo disse ad alta voce, davanti ai responsabili, mentre stava accadendo.\n\nPoi la domanda: che cosa successe a Montesinos e ai suoi? I coloni si lamentarono con il re, e i domenicani vennero richiamati. Chiedi loro se questo rende il sermone inutile.',
       seDicono:[
         {loro:'«Erano preti, dovevano dirlo.»',
          tu:'Gli altri preti presenti non lo dissero, e alcuni possedevano indios. Fare la cosa che il tuo ruolo prescriverebbe, quando tutti quelli con il tuo stesso ruolo non la fanno, non e scontato: e esattamente la definizione di scelta.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Bartolomé de Las Casas\ne il difensore piu tenace\nche gli indios abbiano avuto.\n\nCinquant\'anni di denunce,\nviaggi, memoriali al re,\nun libro che accusa\nil proprio paese\ndavanti a tutta l\'Europa.\n\nNei primi anni,\nper alleggerire il lavoro\nimposto agli indios,\navanzo una proposta:\nsostituirli con schiavi africani,\nritenuti piu resistenti\ne — cosi si diceva —\ngia legittimamente ridotti in schiavitu.\n\nAnni dopo scrisse\ndi essersene amaramente pentito:\nnon aveva considerato\nche quella schiavitu\nfosse ingiusta per le stesse ragioni.\n\nIl commercio, intanto,\nera avviato.\nDurera tre secoli e mezzo.',
       parlato:'Questo passaggio va detto piano e senza compiacimento. Non serve a demolire Las Casas: serve a capire una cosa che riguarda chiunque prenda posizione.\n\nSii preciso storicamente, perche la questione e discussa: Las Casas non invento la tratta atlantica, che era gia cominciata, e la sua proposta fu una fra molte spinte. Ma la fece, e poi la ritratto per iscritto, ed e uno dei pochi casi in cui possiamo leggere un uomo che si accorge di aver sbagliato bersaglio.\n\nPoi la domanda vera: perche non lo aveva visto?\n\nGuidali alla risposta, che non e la malvagita. Aveva passato la vita dentro un problema, e quel problema gli disegnava il campo visivo. Gli indios erano davanti a lui ogni giorno; gli africani erano un\'astrazione lontana, dentro una pratica gia esistente che nessuno intorno a lui discuteva.\n\nE qui arriva la domanda che devono portarsi via: quando difendete qualcuno con tutte le vostre forze, chi state non vedendo?\n\nNon per colpevolizzarli. Perche e una domanda che va tenuta accesa mentre si agisce, non dopo.',
       seDicono:[
         {loro:'«Allora era un ipocrita.»',
          tu:'Un ipocrita nasconde. Lui scrisse il proprio errore, in un libro, sapendo che sarebbe rimasto. È qualcosa di diverso, e piu raro: un uomo che allarga il proprio campo visivo in pubblico e paga il prezzo di averlo avuto stretto.'},
         {loro:'«Noi oggi non faremmo questo errore.»',
          tu:'È la frase che ogni epoca ha detto di quella precedente. Prova a rovesciarla in una domanda utile: quale sofferenza, oggi, e cosi normale e cosi lontana dai nostri occhi che nessuno intorno a noi la discute? Non e detto che troviate la risposta. È l\'esercizio che conta.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Due cose da tenere insieme,\ne non si sciolgono.\n\nLo stesso impero, negli stessi anni,\nha prodotto la piu grande catastrofe\ndi popolazione documentata\ne la prima teoria dei diritti\nvalidi per tutti gli uomini.\n\nLa ragione stava a Madrid.\nIl potere stava a ottomila chilometri.\n\nDue domande, per finire.\n\nA che cosa serve avere ragione,\nse non si ha il modo di applicarlo?\n\nE quando difendete qualcuno,\nchi non state vedendo?',
       parlato:'Rifai la conta sulla disputa e commenta lo spostamento, che di solito e ampio.\n\nPoi il bilancio, che va tenuto stretto e senza morale finale. Le Leggi Nuove erano giuste e furono ritirate. Vitoria aveva ragione e la conquista prosegui. Las Casas vinse la discussione e perse la partita. Nessuno di questi fatti annulla gli altri.\n\nSulla prima domanda dai un criterio invece di una risposta: le idee giuste senza potere non cambiano il presente, ma restano disponibili. Le tesi di Salamanca vengono riprese secoli dopo, contro gli imperi coloniali, dalle stesse popolazioni che ne subivano il dominio. Serve tempo, e serve che qualcuno le raccolga.\n\nSulla seconda non dare risposta: e il compito.\n\nUltima cosa, che apre il resto dell\'anno. Da questo momento la storia che studieremo e mondiale: l\'argento di Potosi arriva in Cina, la patata cambia la demografia europea, e cio che accade in un continente ha effetti su tutti gli altri. Non e piu possibile raccontare l\'Europa da sola.',
       seDicono:[
         {loro:'«Allora non serve a niente denunciare le ingiustizie.»',
          tu:'Serve, ma non nel modo in cui speriamo. Non ferma quasi mai la cosa che denuncia. Lascia una formulazione che qualcuno usera quando avra la forza che a voi mancava. È poco e non e niente — e in molti casi e tutto quello che si puo fare.'}
       ]}
    ],
    riserve:[
      {titolo:'Perche vinsero in cosi pochi',
       corpo:'Cortés arriva in Messico con poco piu di cinquecento uomini; Pizarro in Perù con meno di duecento. Sconfiggono due imperi con milioni di sudditi.\n\nLa spiegazione tradizionale — cavalli, acciaio, armi da fuoco — spiega una parte. Contano di piu due fatti: decine di migliaia di guerrieri indigeni si allearono con gli spagnoli contro il dominio azteco, e le epidemie arrivarono prima degli eserciti. Quando Pizarro sbarca, l\'impero inca e gia dilaniato da una guerra civile fra due fratelli, aperta dalla morte improvvisa del padre — probabilmente per una malattia arrivata dal nord prima degli europei.',
       chiedi:'Se togliamo le epidemie e gli alleati locali, che cosa resta della superiorita europea? E perche il racconto scolastico ha preferito per secoli la versione delle armi?'},
      {titolo:'La montagna che divorava uomini',
       corpo:'Nel 1545 viene scoperta a Potosi, a oltre quattromila metri, una montagna d\'argento. Nel giro di pochi decenni la citta ha oltre centomila abitanti: piu di Londra.\n\nIl lavoro nelle miniere viene organizzato con la mita, un turno obbligatorio ripreso da un istituto inca e reso incomparabilmente piu duro: villaggi interi tenuti a fornire ogni anno una quota di uomini, per mesi, in gallerie senza aria, con il mercurio usato per separare il metallo.\n\nDa quella montagna esce buona parte dell\'argento che circola nel mondo per un secolo e mezzo.',
       chiedi:'Gli spagnoli riprendono una istituzione che esisteva gia e la trasformano in qualcosa di diverso. Che cosa cambia, esattamente, fra il turno di lavoro inca e la mita coloniale? E quando si puo dire che una continuita formale nasconde una rottura sostanziale?'},
      {titolo:'La leggenda nera',
       corpo:'Il libro di Las Casas sulla distruzione delle Indie fu tradotto in inglese, olandese e francese e usato per due secoli come prova della crudelta spagnola — dagli stessi paesi che stavano costruendo i propri imperi coloniali e la propria tratta di schiavi.\n\nGli storici chiamano «leggenda nera» questo uso propagandistico. Ma la denuncia originale era spagnola, veniva dall\'interno, e i fatti che riporta sono in larga parte confermati da altre fonti.',
       chiedi:'Una denuncia vera puo essere usata in malafede da chi fa le stesse cose. Questo la rende meno vera? E chi la ripubblica per convenienza sta comunque facendo qualcosa di utile?'}
    ],
    testi:[
      {fonte:'Francisco de Vitoria, Relectio de Indis, Salamanca 1539',
       corpo:'Il teologo sostiene che gli indios erano veri proprietari delle proprie terre prima dell\'arrivo degli spagnoli, che il fatto di essere pagani o peccatori non fa perdere il dominio sui propri beni, e che nessuna donazione papale puo trasferire cio che appartiene ad altri.',
       glossa:'Vitoria insegna in una universita spagnola durante il regno di Carlo V, e smonta uno per uno i titoli su cui il proprio re fondava la conquista. Da qui nasce l\'idea che esistano norme valide fra popoli diversi, indipendenti dalla religione: e per questo che lo si considera all\'origine del diritto internazionale.'},
      {fonte:'Leggi Nuove delle Indie, 1542',
       corpo:'Le disposizioni vietano di ridurre in schiavitu gli indios, stabiliscono che le encomiendas non passino agli eredi e ordinano che siano tolte a chi abbia commesso abusi o ricopra cariche pubbliche.',
       glossa:'Sono, sulla carta, la legislazione piu avanzata del secolo. La reazione dice tutto: in Perù i coloni si sollevano e nel 1546 uccidono in battaglia il vicere inviato ad applicarle. Utile in classe come caso limite del rapporto fra norma e potere di farla rispettare.'},
      {fonte:'Las Casas, Historia de las Indias, sul proprio errore riguardo agli schiavi africani',
       corpo:'Scrivendo di se stesso in terza persona, il domenicano riferisce di aver consigliato di ricorrere a schiavi africani per alleviare la condizione degli indios, e dichiara di essersene poi pentito, avendo compreso che la loro riduzione in schiavitu era ingiusta esattamente come quella degli indios.',
       glossa:'È una delle poche autocritiche esplicite che ci abbia lasciato un protagonista del Cinquecento. Da usare per mostrare che riconoscere un errore non lo cancella: la tratta era gia avviata e prosegui per tre secoli. Il pentimento sistema la coscienza di chi lo scrive, non le conseguenze.'}
    ],
    compito:'Mezza pagina, in due parti. Prima: scegliete una causa in cui credete e descrivetela in tre righe. Seconda: provate a individuare qualcuno che quella causa, se vincesse domani, lascerebbe fuori o danneggerebbe — e se non riuscite a trovarlo, scrivete perche pensate che non esista. Non e un esercizio per farvi cambiare idea: e per verificare quanto e largo il vostro campo visivo.',
    fonti:[
      'Antonio de Montesinos, sermone del 1511, in Las Casas, Historia de las Indias',
      'Francisco de Vitoria, Relectio de Indis (1539); Leggi Nuove delle Indie (1542)',
      'Las Casas, Brevísima relación de la destrucción de las Indias (1552); Sepúlveda, Democrates alter',
      'A. Crosby, Lo scambio colombiano; C. Mann, 1491 e 1493',
      'M. Livi Bacci, Conquista: la distruzione degli indios americani',
      'S. Gruzinski, La colonizzazione dell\'immaginario; T. Todorov, La conquista dell\'America'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia medievale · 1 — La filosofia nel Medioevo': {
  mappa: {
    n:'La filosofia nel Medioevo', d:'mille anni di pensiero dentro un libro che non si puo contraddire',
    f:[
      {r:'nasce da', n:'Una situazione nuova', d:'per la prima volta si filosofa avendo gia le risposte',
       f:[
         {r:'esiste una', n:'Rivelazione', d:'un testo ritenuto vero perche viene da Dio, non perche e stato dimostrato'},
         {r:'quindi il compito non e', n:'Cercare la verita', d:'ma capire una verita gia consegnata, e mostrarne la coerenza'},
         {r:'si apre il problema di', n:'Fede e ragione', d:'due strade verso lo stesso vero: e se portassero in luoghi diversi?',
          f:[{r:'con la formula', n:'Credo ut intelligam', d:'credo per capire: la fede viene prima e la ragione la illumina'},
             {piu:true, r:'e la domanda inevitabile', n:'A che serve dimostrare cio che gia si crede', d:'e la risposta cambia tutto il Medioevo'}]},
         {r:'e convivono due eredita', n:'Atene e Gerusalemme', d:'la ragione greca e la Scrittura ebraica: mai del tutto conciliate'}
       ]},

      {r:'dipende da', n:'Condizioni materiali', d:'si pensa con i libri che si hanno, e se ne hanno pochissimi',
       f:[
         {r:'i testi si conservano nei', n:'Monasteri', d:'copiati a mano, uno per volta, da monaci che spesso non li capiscono'},
         {r:'del greco resta', n:'Quasi nulla', d:'per secoli in Occidente si legge solo cio che qualcuno ha tradotto in latino'},
         {r:'il ponte e', n:'Boezio', d:'traduce parte della logica aristotelica e la trasmette a tutto l\'Occidente',
          f:[{piu:true, r:'e scrive in carcere', n:'La consolazione della filosofia', d:'il libro piu letto del Medioevo dopo la Bibbia'}]},
         {r:'si insegna nelle', n:'Scuole cattedrali', d:'poi, dal Duecento, nelle universita: e un cambiamento di scala'},
         {piu:true, r:'e si legge', n:'Ad alta voce', d:'la lettura silenziosa si diffonde tardi: il testo si ascolta prima di discuterlo'},
         {r:'con un programma fisso', n:'Le arti liberali', d:'grammatica, retorica e logica, poi le quattro discipline matematiche'}
       ]},

      {r:'si organizza come', n:'Scolastica', d:'non una dottrina, ma un metodo di lavoro',
       f:[
         {r:'parte dalla', n:'Quaestio', d:'ogni problema viene formulato come domanda a cui si puo rispondere si o no'},
         {r:'si sviluppa nella', n:'Disputatio', d:'esercizio pubblico: uno sostiene, uno attacca, il maestro determina'},
         {r:'e ha una forma rigida', n:'La struttura dell\'articolo', d:'e la parte che sorprende chi la vede per la prima volta',
          f:[{r:'si comincia con', n:'Le obiezioni contrarie', d:'gli argomenti contro la propria tesi, esposti nella forma piu forte'},
             {r:'poi il', n:'Sed contra', d:'un\'autorita in senso opposto, che fa da contrappeso'},
             {r:'poi il', n:'Respondeo', d:'la posizione del maestro, argomentata'},
             {r:'e infine', n:'La risposta a ciascuna obiezione', d:'nessuna puo essere lasciata cadere senza replica'}]},
         {r:'si insegna con il', n:'Commento al testo', d:'non si scrive un libro proprio: si commenta riga per riga un\'autorita'},
         {piu:true, r:'e si prende nota con', n:'Le reportationes', d:'appunti degli studenti: molte opere che leggiamo sono verbali di lezione'},
         {r:'la forma estrema e', n:'La quodlibetale', d:'due volte l\'anno chiunque puo chiedere qualunque cosa, e il maestro risponde li'}
       ]},

      {r:'ha un problema fondativo', n:'Gli universali', d:'la disputa piu lunga del Medioevo, e non e un gioco di parole',
       f:[
         {r:'nasce da una domanda di', n:'Porfirio', d:'i generi e le specie esistono nella realta o solo nel pensiero?'},
         {r:'i realisti dicono che', n:'Gli universali esistono', d:'l\'umanita e una cosa reale, di cui i singoli uomini partecipano'},
         {r:'i nominalisti che', n:'Sono solo nomi', d:'esistono Pietro e Paolo; «uomo» e un suono che usiamo per comodita'},
         {r:'Abelardo propone che', n:'Siano concetti', d:'non cose e non flatus vocis: significati costruiti dalla mente sulla somiglianza'},
         {r:'e la posta in gioco e enorme perche riguarda', n:'La Chiesa, il peccato, la scienza', d:'se le specie non esistono, che cos\'e il corpo mistico? e di che cosa parla la fisica?',
          f:[{piu:true, r:'ed e la stessa domanda di oggi su', n:'Le categorie sociali', d:'classi, popoli, generi: sono cose reali o etichette utili?'}]}
       ]},

      {r:'si misura con', n:'Le prove dell\'esistenza di Dio', d:'il banco di prova di che cosa la ragione possa fare da sola',
       f:[
         {r:'Anselmo propone', n:'L\'argomento ontologico', d:'Dio e cio di cui non si puo pensare il maggiore; dunque non puo non esistere'},
         {r:'obietta subito', n:'Gaunilone', d:'con lo stesso ragionamento esisterebbe l\'isola perfetta: e non esiste',
          f:[{r:'e Anselmo replica che', n:'Vale solo per Dio', d:'perche solo di Dio l\'esistenza appartiene alla definizione'},
             {piu:true, r:'e il dibattito arriva fino a', n:'Kant e oltre', d:'l\'esistenza non e una proprieta: e forse la confutazione decisiva'}]},
         {r:'altri preferiscono', n:'Le vie a posteriori', d:'partire dal mondo — movimento, cause, ordine — invece che dal concetto'},
         {r:'e il vero risultato e', n:'Un allenamento della ragione', d:'anche chi non e convinto impara a distinguere un argomento valido da uno persuasivo'}
       ]},

      {r:'e trasformata da', n:'Il ritorno di Aristotele', d:'nel Duecento arriva in Occidente un pensatore che nessuno aveva letto per intero',
       f:[
         {r:'attraverso', n:'Le traduzioni di Toledo', d:'dall\'arabo al latino, spesso passando per l\'ebraico: tre lingue e tre culture'},
         {r:'commentato dai', n:'Filosofi arabi', d:'Avicenna e soprattutto Averroe, che in Occidente si chiama semplicemente «il Commentatore»'},
         {r:'e porta tesi', n:'Incompatibili con la fede', d:'eternita del mondo, necessita degli eventi, un solo intelletto per tutti gli uomini'},
         {r:'la reazione sono i', n:'Divieti di Parigi', d:'1210 e 1215: proibito insegnare la fisica aristotelica; in cinquant\'anni diventa il programma'},
         {r:'e nasce l\'', n:'Averroismo latino', d:'maestri che espongono Aristotele fino in fondo, anche dove contraddice la fede',
          f:[{r:'accusati di sostenere', n:'La doppia verita', d:'vero in filosofia e falso in teologia: accusa piu che tesi, nessuno la sostenne cosi'},
             {piu:true, r:'con', n:'Sigieri di Brabante', d:'condannato, e collocato da Dante in paradiso accanto a Tommaso'}]}
       ]},

      {r:'si scontra con', n:'La censura', d:'il perimetro entro cui il metodo puo funzionare',
       f:[
         {r:'Abelardo viene', n:'Condannato due volte', d:'a Soissons nel 1121 e a Sens nel 1140, per iniziativa di Bernardo di Chiaravalle'},
         {r:'nel 1277 il vescovo di Parigi', n:'Condanna 219 proposizioni', d:'in blocco, senza indicare chi le sostenga',
          f:[{r:'e fra queste ce ne sono', n:'Alcune di Tommaso', d:'morto tre anni prima, e canonizzato cinquant\'anni dopo'},
             {r:'ma l\'effetto e imprevisto', n:'Si apre lo spazio del possibile', d:'per non limitare Dio si ammette che possano esistere vuoto, altri mondi, altri moti'},
             {piu:true, r:'e alcuni storici vi hanno visto', n:'Una premessa della scienza moderna', d:'tesi discussa, ma il nesso con Buridano e Oresme e reale'}]},
         {r:'perche il metodo vale', n:'Dentro la disputa, non sul perimetro', d:'si puo argomentare tutto, purche la conclusione sia gia nota'}
       ]},

      {r:'lascia in eredita', n:'Strumenti che usiamo ancora', d:'piu il metodo che le dottrine',
       f:[
         {r:'l\'', n:'Universita', d:'corporazione autonoma di maestri e studenti: e un\'invenzione medievale, non antica'},
         {r:'l\'obbligo di', n:'Esporre l\'obiezione piu forte', d:'prima di rispondere, e nella forma migliore possibile'},
         {r:'un', n:'Lessico tecnico', d:'sostanza, essenza, esistenza, intenzione, formale, virtuale: parole nate li'},
         {r:'e la regola del', n:'Rasoio di Occam', d:'non moltiplicare gli enti senza necessita: un criterio di economia ancora in uso'},
         {r:'e la lenta', n:'Separazione dei campi', d:'distinguere cio che si dimostra da cio che si crede: e la condizione della scienza',
          f:[{r:'che porta a', n:'Occam e al Trecento', d:'dove teologia e filosofia si dichiarano metodi diversi e prendono strade separate'}]}
       ]}
    ],
    incroci:[
      {da:'Quasi nulla', a:'Le traduzioni di Toledo', r:'e la ragione per cui contano tanto',
       perche:'Per secoli l\'Occidente conosce Platone da un dialogo e mezzo e Aristotele da due operette logiche. Il Duecento cambia perche arrivano i testi, non perche arrivano le idee: la storia del pensiero dipende in modo imbarazzante da quali libri qualcuno si e preso la briga di tradurre.'},
      {da:'Le obiezioni contrarie', a:'Esporre l\'obiezione piu forte', r:'sono l\'origine dell\'obbligo di',
       perche:'La struttura dell\'articolo scolastico impone di aprire con gli argomenti contro la propria tesi, e di renderli forti: un\'obiezione debole rende debole anche la risposta. È la regola di discussione piu utile mai codificata, ed e nata come esercizio scolastico obbligatorio.'},
      {da:'Sono solo nomi', a:'Le categorie sociali', r:'e la stessa domanda che si pone oggi sulle',
       perche:'Chiedersi se «uomo» sia una cosa reale o un nome comodo sembra un gioco. Ma la stessa domanda ritorna ogni volta che si discute se una classe, un popolo o un gruppo esistano davvero o siano etichette: chi risponde in un modo o nell\'altro trae conseguenze politiche molto diverse.'},
      {da:'A che serve dimostrare cio che gia si crede', a:'Un allenamento della ragione', r:'trova risposta in',
       perche:'Le prove dell\'esistenza di Dio non convertono nessuno e non nascono per quello. Servono a mostrare che la fede non e contro la ragione e, di fatto, producono un addestramento logico: e in quelle dispute che l\'Occidente impara a distinguere un argomento valido da uno solo persuasivo.'},
      {da:'Incompatibili con la fede', a:'Condanna 219 proposizioni', r:'sono cio che provoca la',
       perche:'Finche Aristotele era due manuali di logica non dava problemi; quando arriva tutto, con l\'eternita del mondo e la necessita degli eventi, diventa una bomba. La censura del 1277 e la misura di quanto quel corpus fosse difficile da assorbire — non un capriccio del vescovo.'},
      {da:'Si apre lo spazio del possibile', a:'Una premessa della scienza moderna', r:'e la ragione per cui si e parlato di',
       perche:'Per affermare che Dio puo fare qualunque cosa, i teologi devono negare che l\'universo debba per forza essere quello di Aristotele: dunque il vuoto e pensabile, altri mondi sono pensabili, il moto della Terra e pensabile. Una censura teologica finisce per allargare il campo delle ipotesi immaginabili.'},
      {da:'Dentro la disputa, non sul perimetro', a:'Condannato due volte', r:'e cio che spiega perche Abelardo sia',
       perche:'Abelardo non viene colpito per aver argomentato male ma per aver applicato il metodo a cio che il metodo non doveva toccare. La liberta scolastica e reale e ha un confine preciso: tutto si puo discutere, purche la conclusione sia quella attesa.'},
      {da:'Siano concetti', a:'Occam e al Trecento', r:'prepara la strada di',
       perche:'La soluzione di Abelardo — gli universali sono significati costruiti dalla mente — toglie realta alle essenze senza ridurle a suoni. Da qui parte la linea che arriva a Occam, e con Occam la teologia smette di pretendere di essere dimostrativa: due secoli dopo, e la separazione dei campi.'},
      {da:'La quodlibetale', a:'Universita', r:'e l\'istituzione piu spericolata dell\'',
       perche:'Due volte l\'anno il maestro si esponeva a qualunque domanda da chiunque, senza preparazione, in pubblico. Nessuna istituzione moderna espone cosi i propri docenti. È il segno che l\'universita medievale considerava la capacita di rispondere a freddo il vero titolo del sapere.'},
      {da:'Boezio', a:'Gli universali', r:'e chi consegna al Medioevo il problema de',
       perche:'La domanda di Porfirio arriva all\'Occidente dentro una traduzione di Boezio, che la lascia aperta. Sette secoli di dispute nascono da una questione posta di sfuggita in un\'introduzione — e questo dice quanto conti, nella storia delle idee, quale testo capita fra le mani di chi.'},
      {da:'Vale solo per Dio', a:'Kant e oltre', r:'e la mossa che tiene in piedi l\'argomento fino a',
       perche:'Anselmo risponde a Gaunilone che l\'isola perfetta non ha l\'esistenza nella propria definizione, mentre Dio si. La replica regge per settecento anni, finche Kant non sposta il colpo: l\'esistenza non e una proprieta che si aggiunge a un concetto. Le confutazioni migliori non negano la conclusione, cambiano il terreno.'},
      {da:'Credo ut intelligam', a:'Separazione dei campi', r:'viene alla fine rovesciato dalla',
       perche:'Si parte dalla fede che cerca comprensione, con la ragione al servizio di una verita gia data. Alla fine del Medioevo i due campi si dichiarano metodi diversi con oggetti diversi. È il rovesciamento piu importante di mille anni, e nessuno lo ha deciso: emerge dalle difficolta accumulate.'},
      {da:'Filosofi arabi', a:'Atene e Gerusalemme', r:'aggiungono una terza voce ad',
       perche:'Aristotele torna in Occidente attraverso Avicenna e Averroe, cioe letto e ripensato per due secoli dentro la cultura islamica, e in parte attraverso traduttori ebrei. La filosofia medievale cristiana e figlia di un lavoro fatto altrove: la formula «Atene e Gerusalemme» dimentica la terza citta.'}
    ]
  },
  provocazione: {
    titolo:'L\'obiezione piu forte',
    durata:'55 minuti',
    domandaMadre:'Sapete dire la cosa piu forte contro quello che pensate?',
    perche:'Il metodo scolastico impone di aprire ogni questione con gli argomenti contrari alla propria tesi, esposti nella forma piu potente possibile: chi vuole dimostrare che Dio esiste comincia scrivendo la migliore obiezione contro l\'esistenza di Dio. È la regola di discussione piu utile mai codificata, e la classe la sperimenta di persona — scoprendo che quasi nessuno sa formulare un\'obiezione seria alla propria posizione. Il colpo di scena e che lo stesso mondo che ha inventato questo metodo condannava le conclusioni sbagliate, e che proprio una di quelle condanne, quella del 1277, ha finito per allargare il campo del pensabile fino alla fisica moderna.',
    occorrente:'Un foglio a testa per l\'esercizio dei minuti 8-17. Serve davvero: la lezione senza l\'esercizio scritto non funziona.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Nel Medioevo, un testo di filosofia\nera costruito sempre allo stesso modo.\n\nPrima: le obiezioni\ncontro la tesi che stai per sostenere.\nEsposte nella forma piu forte possibile.\n\nPoi: un\'autorita in senso contrario.\nPoi: la tua risposta.\nInfine: una replica a ciascuna obiezione,\nuna per una, senza saltarne nessuna.\n\nNell\'articolo intitolato\n«Se Dio esista»,\nla prima obiezione scritta\ndal piu grande teologo del Medioevo\nsuona cosi:\n\nse esistesse un bene infinito\nnon ci sarebbe alcun male;\nma nel mondo c\'e il male;\ndunque Dio non esiste.\n\nL\'ha scritta lui.',
       parlato:'Mostra prima la struttura, poi l\'esempio: l\'effetto e nell\'ordine.\n\nFai notare che quell\'obiezione e ancora oggi la piu seria che si possa muovere contro l\'esistenza di Dio, e che si trova in apertura del testo scritto per dimostrarla. Non in nota, non alla fine: in apertura.\n\nPoi la domanda: perche uno che vuole convincerti comincia dandoti l\'arma migliore contro di se?\n\nRaccogli le risposte senza correggerle. Di solito arrivano due letture: onesta oppure astuzia. Entrambe hanno del vero, e sono le due opzioni dello schieramento.',
       seDicono:[
         {loro:'«Lo fa per smontarla meglio dopo.»',
          tu:'Puo darsi. Ma nota il rischio: se scrivi l\'obiezione forte e poi non riesci a rispondere in modo altrettanto forte, hai fatto un regalo al tuo avversario e lo hai messo per iscritto. Molti lettori atei hanno usato quelle obiezioni per secoli, e sono rimaste li.'},
         {loro:'«Tanto la risposta ce l\'aveva gia.»',
          tu:'Vero, e ci torniamo, perche e il punto piu scomodo dell\'ora. Ma intanto tieni distinta una cosa: sapere gia dove vuoi arrivare non ti obbliga a scrivere l\'argomento contrario nella sua versione migliore. Quello e un passo in piu, e nessuno te lo impone.'}
       ]},

      {minuti:'8–17', et:'L\'esercizio',
       schermo:'Adesso tocca a voi.\n\nScrivete su un foglio,\nin cima:\n\nuna cosa in cui credete davvero.\nPuo essere politica, morale,\nsportiva, qualunque —\npurche ci teniate.\n\nPoi, sotto,\nscrivete l\'obiezione piu forte\ncontro quella cosa.\n\nNon la piu stupida.\nNon quella che sapete demolire.\n\nLa migliore che esista.\nQuella che vi farebbe piu fatica.\n\nSette minuti.',
       parlato:'Dai il tempo davvero e non riempirlo parlando: l\'esercizio funziona solo se si annoiano un po\' e devono pensare.\n\nMentre scrivono, gira e leggi qualche foglio senza commentare.\n\nQuando finiscono, non far leggere le tesi: fai leggere solo le obiezioni, a chi vuole. Poi chiedi alla classe, per ciascuna: e davvero la piu forte, o e una versione facile?\n\nQuasi sempre emergono tre cose, e vanno nominate. Alcuni scrivono un\'obiezione debole, cioe un fantoccio. Alcuni scrivono un\'obiezione che in realta e un\'accusa a chi la pensa diversamente. E alcuni scoprono di non conoscere nessun argomento serio contro cio che sostengono da anni.\n\nQuest\'ultima e la scoperta importante, e va detta senza umiliare nessuno: si puo essere convinti di una cosa senza aver mai incontrato la ragione migliore per dubitarne. È normale. È anche il motivo per cui certe convinzioni non reggono al primo urto.',
       opzioni:['ho scritto un\'obiezione che mi mette davvero in difficolta', 'me ne sono accorto: la mia era una versione facile'],
       seDicono:[
         {loro:'«Se conosco l\'obiezione forte, rischio di cambiare idea.»',
          tu:'Si, e questo e esattamente il punto. Ma chiediti: preferisci cambiare idea qui, con un foglio in mano, o scoprire fra dieci anni che la tua posizione non reggeva? Chi conosce l\'obiezione forte e l\'unico che puo tenere la propria posizione per una ragione e non per abitudine.'},
         {loro:'«Alcune cose non hanno obiezioni serie.»',
          tu:'Poche, e vale la pena verificarlo invece di deciderlo. Prova cosi: cerca qualcuno intelligente che la pensa diversamente e chiediti perche. Se la risposta e che e stupido o in malafede, non hai ancora cercato.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Perche il Medioevo\nsi era dato questa regola?\n\nPerche aveva un problema pratico.\n\nLa verita e una:\nla Scrittura, i Padri, i concili.\nMa le autorita\nsi contraddicono fra loro.\n\nAgostino dice una cosa,\nGirolamo il contrario.\nDue concili non concordano.\n\nNon puoi buttarne via nessuna:\nsono tutte autorevoli.\n\nDevi trovare un modo\ndi tenerle insieme.\n\nE il modo\ne mettere le contraddizioni\nper iscritto,\nuna accanto all\'altra,\ne lavorarci sopra.',
       parlato:'Fai capire che la regola non nasce da nobilta d\'animo ma da una necessita tecnica. È piu istruttivo cosi, e piu vero.\n\nPoi racconta il libro che porta questo metodo all\'estremo. Intorno al 1120 Abelardo scrive un\'opera intitolata «Si e no»: centocinquantotto questioni, e per ciascuna raccoglie i testi delle autorita che dicono di si e quelli che dicono di no. Affiancati.\n\nE non da\' la soluzione. Il libro finisce cosi.\n\nLascia che reagiscano, poi da\' il prologo: dice che dubitando si arriva a cercare, e cercando si percepisce il vero. Non e scetticismo — e un programma di lavoro.\n\nInfine descrivi la disputatio come funzionava all\'universita: uno sostiene, uno attacca, il maestro determina. E due volte l\'anno la quodlibetale, dove chiunque poteva alzarsi e chiedere qualunque cosa, e il maestro doveva rispondere sul momento, in pubblico.\n\nDomanda per la classe: quale professore, oggi, accetterebbe una cosa del genere?',
       seDicono:[
         {loro:'«Se le autorita si contraddicono, forse sbagliano.»',
          tu:'È la conclusione che noi troviamo ovvia e che a loro era vietata. Ma guarda cosa producono lavorando dentro il vincolo: siccome non possono scartare nessun testo, devono distinguere i sensi delle parole, i contesti, le intenzioni. Il vincolo li costringe a inventare tecniche di interpretazione che usiamo ancora.'},
         {loro:'«Allora era tutto finto: la conclusione era decisa.»',
          tu:'Su alcune questioni si, e fra dieci minuti vediamo che cosa succedeva quando qualcuno arrivava a una conclusione non prevista. Ma su moltissime altre non era decisa affatto: se lo era, non si spiegano secoli di dispute vere fra scuole rivali.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'Dal prologo di Abelardo\nal suo libro delle contraddizioni,\nintorno al 1120:\n\n«Il dubitare ci porta a ricercare,\ne ricercando\npercepiamo il vero.»\n\nE poco prima:\n\nnon si legge con profitto\nse non si mettono in discussione\nanche le parole\ndi chi ha piu autorita di noi.\n\nAbelardo fu condannato\ndue volte,\na trent\'anni di distanza.\n\nIl suo metodo\ndiventò il metodo\ndi tutte le universita d\'Europa.',
       testo:{fonte:'Pietro Abelardo, prologo del Sic et non, intorno al 1120',
              glossa:'La frase e piu radicale di quanto sembri: colloca il dubbio all\'inizio del percorso conoscitivo, non come malattia da curare. Cinque secoli prima di Cartesio, e in un contesto in cui la verita era considerata gia consegnata. Il fatto che l\'autore sia stato condannato e che il suo metodo sia stato adottato ovunque va tenuto insieme: si prende la tecnica e si sorveglia l\'uomo.'},
       parlato:'Leggi le due frasi e poi fai notare la data: 1120. Cartesio arrivera nel 1637 con un\'idea di dubbio molto piu radicale, ma l\'idea che il dubbio sia l\'inizio del sapere e gia scritta qui.\n\nPoi la domanda seria: se il metodo era questo, perche Abelardo fu condannato?\n\nLascia le ipotesi, poi da\' la risposta storica: perche applico il metodo alla Trinita, cioe la dove la conclusione non era negoziabile. Bernardo di Chiaravalle non lo accusa di ragionare male: lo accusa di ragionare li.\n\nÈ la distinzione da portarsi via: il metodo valeva dentro la disputa, non sul perimetro. Si puo argomentare tutto, purche la conclusione sia gia nota.\n\nE poi la domanda che li riguarda: conoscete discussioni contemporanee che funzionano cosi? Discussioni molto vivaci, in cui pero certe conclusioni non sono ammesse?',
       seDicono:[
         {loro:'«Allora non era vera liberta di pensiero.»',
          tu:'No, e non lo pretendeva. Ma attento a liquidarla: dentro quel perimetro si costruirono strumenti logici che noi usiamo per pensare fuori da ogni perimetro. Un metodo puo essere piu libero di chi lo ha inventato.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Parigi, 7 marzo 1277.\n\nIl vescovo condanna in blocco\nduecentodiciannove proposizioni\ninsegnate nella sua universita.\n\nNon dice chi le sostiene.\n\nFra queste ce ne sono alcune\ndi Tommaso d\'Aquino,\nmorto tre anni prima\ne proclamato santo\ncinquant\'anni dopo.\n\nÈ una censura, e pesante.\n\nMa guardate\nche cosa i teologi\nfurono costretti a dire\nper condannarla:\n\nche Dio non e vincolato\nalla fisica di Aristotele.\n\nDunque il vuoto e possibile.\nDunque altri mondi sono possibili.\nDunque anche che la Terra si muova\ne possibile.\n\nNon vero: possibile.\nE tanto basta per cominciare a pensarci.',
       parlato:'Costruisci il rovesciamento lentamente. Prima la censura, con il dettaglio che colpisce sempre: fra i condannati c\'e un futuro santo.\n\nPoi il meccanismo, che va spiegato bene perche e sottile. Le proposizioni condannate dicevano, in sostanza, che certe cose sono impossibili perche contrarie alla natura secondo Aristotele. Per i teologi questo era inaccettabile: significava mettere un limite alla potenza di Dio. Quindi dovettero affermare il contrario — che Dio potrebbe fare un vuoto, altri mondi, muovere la Terra.\n\nRisultato: per difendere l\'onnipotenza divina si allarga il catalogo di cio che e pensabile. E nel secolo successivo Buridano e Oresme, a Parigi, discutono seriamente del moto della Terra e dell\'inerzia.\n\nSii onesto sul punto storiografico: alcuni storici hanno fatto del 1277 la data di nascita della scienza moderna, ed e una tesi discussa e probabilmente eccessiva. Il nesso con la fisica parigina del Trecento, pero, e documentato.\n\nPoi la formulazione da portare a casa: un atto pensato per chiudere puo aprire, se costringe a dire qualcosa che nessuno aveva mai avuto bisogno di dire.',
       seDicono:[
         {loro:'«Quindi la censura fa bene?»',
          tu:'No, e non e questo. La censura fece esattamente cio per cui era stata fatta: colpi dei maestri, blocco delle carriere, spavento. L\'effetto collaterale non la riscatta. Ci interessa un\'altra cosa: che le conseguenze di un atto vanno oltre le intenzioni di chi lo compie, in bene e in male.'},
         {loro:'«Ma allora chi aveva ragione, il vescovo o Tommaso?»',
          tu:'Sulla questione di fondo la Chiesa dette poi ragione a Tommaso, canonizzandolo e adottandolo come maestro. Il che ci dice qualcosa: le condanne durano meno delle opere. Ma nel 1277 chi aveva ragione perse, e chi perse per qualche decennio non ha carriera.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Riprendete il vostro foglio.\n\nGuardate l\'obiezione che avete scritto\nun\'ora fa.\n\nAdesso la domanda\ncon cui vi mando via:\n\nse doveste sostenere\nla posizione contraria alla vostra\ndavanti a qualcuno,\nsapreste farlo\nmeglio di chi la sostiene davvero?\n\nSe la risposta e no,\nnon avete ancora capito\nla vostra posizione.\n\nAvete solo capito\nche vi piace.',
       parlato:'Fai riprendere i fogli in mano, fisicamente: cambia il modo in cui ascoltano.\n\nPoi da\' la regola in forma pulita, ed e l\'unica cosa che devono ricordarsi di questa lezione: non hai capito una posizione finche non sai sostenerla meglio di chi la sostiene. Vale per la tua e per quella degli altri.\n\nPoi il confronto con oggi, e falli parlare invece di predicare. Chiedi come funziona una discussione su un social, in un talk show, in un gruppo di amici: si cita la versione migliore dell\'avversario o la peggiore? Si cerca chi la pensa diversamente e ragiona bene, o chi la pensa diversamente e dice sciocchezze?\n\nLa risposta la sanno. Il punto e che sappiano anche che esiste un\'alternativa, ed e stata la norma per quattro secoli in tutte le universita d\'Europa.\n\nChiudi cosi: la filosofia medievale ha prodotto dottrine che quasi nessuno di voi seguira. Ha prodotto anche una regola di discussione che vi conviene tenere per tutta la vita, e che potete cominciare a usare domani.',
       seDicono:[
         {loro:'«Nella pratica funziona il contrario: chi urla vince.»',
          tu:'Nel breve, spesso si. Ma osserva chi ti convince davvero, non chi fa piu rumore: quasi sempre e qualcuno che ha mostrato di conoscere la tua posizione meglio di te. È una tecnica lenta, e l\'unica che sposta qualcosa.'}
       ]}
    ],
    riserve:[
      {titolo:'L\'isola perfetta',
       corpo:'Anselmo d\'Aosta sostiene che Dio e cio di cui non si puo pensare nulla di maggiore; che una cosa che esiste anche nella realta e maggiore di una che esiste solo nel pensiero; e che dunque quel cio-di-cui-non-si-puo-pensare-il-maggiore deve esistere nella realta, altrimenti non sarebbe tale.\n\nUn monaco di nome Gaunilone risponde subito: con lo stesso ragionamento posso dimostrare che esiste l\'isola piu perfetta di ogni altra. E non esiste.\n\nAnselmo replica che l\'argomento vale solo per Dio, perche solo di Dio l\'esistenza appartiene alla definizione.',
       chiedi:'La replica di Anselmo vi convince? E prima ancora: che cosa dovremmo dimostrare per stabilire se un ragionamento vale solo in un caso speciale, oppure e sbagliato e basta?'},
      {titolo:'Se «uomo» sia una cosa',
       corpo:'La disputa sugli universali si puo riassumere in una domanda: esiste l\'umanita, o esistono solo i singoli esseri umani?\n\nSembra una questione di parole. Ma da come si risponde dipendono conseguenze pesanti. Se le specie sono reali, la scienza puo studiarle e le classificazioni dicono qualcosa del mondo. Se sono solo nomi, ogni classificazione e una nostra decisione pratica.\n\nLo stesso vale fuori dalla scienza. Se una comunita e una cosa reale, ha interessi propri; se e solo un nome per un insieme di individui, ha interessi propri soltanto ciascuno di loro.',
       chiedi:'Prendete un gruppo a cui appartenete — una classe, una squadra, un popolo. Esiste come cosa, o e solo un nome comodo per molte persone? E che cosa cambia, concretamente, secondo come rispondete?'},
      {titolo:'Il commentatore',
       corpo:'Nel Duecento Aristotele arriva in Europa tradotto dall\'arabo, spesso attraverso l\'ebraico, accompagnato dai commenti di Averroe, filosofo di Cordoba. Nelle universita cristiane lo si cita semplicemente come «il Commentatore», senza bisogno di aggiungere il nome.\n\nAlcune tesi che ne derivano — che il mondo sia eterno, che esista un solo intelletto comune a tutti gli uomini — sono incompatibili con la fede cristiana, e vengono condannate. Ma il testo su cui si formano generazioni di maestri cristiani resta quello, in quelle traduzioni.',
       chiedi:'Che cosa significa che il pensiero cristiano medievale si e formato su libri tradotti e commentati da musulmani ed ebrei? E perche questo passaggio compare cosi poco nel modo in cui di solito si racconta la storia della filosofia?'}
    ],
    testi:[
      {fonte:'Tommaso d\'Aquino, Summa theologiae, I, q. 2, a. 3 — la prima obiezione',
       corpo:'L\'obiezione sostiene che se uno dei contrari fosse infinito, l\'altro sarebbe totalmente distrutto; che il nome «Dio» significa un bene infinito; e che dunque, se Dio esistesse, non si troverebbe alcun male: ma il male nel mondo si trova, quindi Dio non esiste.',
       glossa:'È la formulazione classica del problema del male, ed e scritta dall\'autore che sta per sostenere la tesi opposta, in apertura dell\'articolo. Da usare come esempio del metodo prima ancora che del contenuto: mostra concretamente che cosa significa esporre l\'obiezione nella sua forma piu forte.'},
      {fonte:'Anselmo d\'Aosta, Proslogion, capitolo II (1078)',
       corpo:'Il ragionamento muove dal fatto che anche chi nega Dio comprende l\'espressione «cio di cui non si puo pensare il maggiore»; ne conclude che tale realta esiste almeno nell\'intelletto, e che non puo esistere solo li, perche allora se ne potrebbe pensare una maggiore.',
       glossa:'Utile in classe non per la conclusione ma per la struttura: e un argomento che pretende di ricavare l\'esistenza di qualcosa dall\'analisi di un concetto. Chiedere agli studenti dove sta il passaggio sospetto e uno degli esercizi logici migliori che si possano fare al triennio.'},
      {fonte:'Condanna parigina del 1277 — alcune proposizioni proibite',
       corpo:'Fra le tesi condannate figurano l\'affermazione che Dio non potrebbe muovere il cielo di moto rettilineo perche resterebbe un vuoto, e quella secondo cui non potrebbero esistere piu mondi.',
       glossa:'Sono condanne di tesi che negavano possibilita, e per questo il loro effetto e rovesciato: dichiarare che Dio potrebbe fare il vuoto e altri mondi significa ammettere che il vuoto e altri mondi sono concepibili. Da qui la fisica parigina del Trecento comincia a discutere ipotesi che Aristotele escludeva in partenza.'}
    ],
    compito:'Una pagina, e va fatta sul serio. Prendete la tesi che avete scritto in classe. Cercate qualcuno — un articolo, un libro, un video di qualcuno competente — che sostenga la posizione contraria in modo serio. Poi scrivete la sua posizione nel modo piu forte che sapete, senza ironia e senza commenti. Solo alla fine, in tre righe, dite se continuate a pensarla come prima e perche.',
    fonti:[
      'Abelardo, Sic et non, prologo; Historia calamitatum',
      'Anselmo, Proslogion II-IV; Gaunilone, Liber pro insipiente',
      'Tommaso, Summa theologiae, I, q. 2 — per la struttura dell\'articolo',
      'La condanna parigina del 1277 (testo in R. Hissette, Enquête sur les 219 articles)',
      'É. Gilson, La filosofia nel Medioevo; A. de Libera, Il pensiero del Medioevo',
      'M. Grabmann, Storia del metodo scolastico; E. Grant, Le origini medievali della scienza moderna'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia medievale · 2 — Tommaso d\'Aquino': {
  mappa: {
    n:'Tommaso d\'Aquino', d:'il tentativo piu ambizioso di tenere insieme Aristotele e il Vangelo',
    f:[
      {r:'parte da', n:'Un problema di generazione', d:'nel Duecento arriva un filosofo che spiega tutto senza bisogno di Dio',
       f:[
         {r:'la sfida e', n:'Aristotele integrale', d:'non piu due manuali di logica: fisica, metafisica, etica, politica'},
         {r:'che porta tesi', n:'Difficili da assorbire', d:'mondo eterno, catene di cause necessarie, nessuna provvidenza personale'},
         {r:'davanti a cui si puo', n:'Rifiutarlo, subirlo o riscriverlo', d:'e Tommaso sceglie la terza, che e la piu faticosa'},
         {r:'lui stesso e', n:'Un domenicano contro la famiglia', d:'i fratelli lo sequestrano per un anno pur di non vederlo frate mendicante',
          f:[{piu:true, r:'e insegna a', n:'Parigi e Napoli', d:'nell\'universita, non in monastero: e un professore, non un contemplativo'}]}
       ]},

      {r:'imposta cosi', n:'Fede e ragione', d:'due vie di conoscenza distinte, che non possono contraddirsi',
       f:[
         {r:'perche vengono', n:'Dalla stessa fonte', d:'se entrambe vengono da Dio, un conflitto reale e impossibile',
          f:[{r:'quindi ogni contrasto e', n:'Un errore di uno dei due', d:'o si e ragionato male o si e interpretato male la Scrittura'}]},
         {r:'alcune verita sono', n:'Preambula fidei', d:'l\'esistenza di Dio, l\'immortalita: dimostrabili con la sola ragione'},
         {r:'altre sono', n:'Solo credibili', d:'Trinita, incarnazione: non contro la ragione, ma oltre la sua portata'},
         {r:'e vale il principio', n:'La grazia non distrugge la natura', d:'la perfeziona: quindi lo studio del mondo non e un pericolo per la fede',
          f:[{piu:true, r:'e ne segue che', n:'La filosofia ha valore proprio', d:'non e solo ancella: ha un campo in cui decide da sola'}]}
       ]},

      {r:'dimostra con', n:'Le cinque vie', d:'tutte partono dall\'esperienza, nessuna dal concetto',
       f:[
         {r:'prima via', n:'Il movimento', d:'tutto cio che si muove e mosso da altro: serve un primo motore'},
         {r:'seconda via', n:'Le cause efficienti', d:'nessuna cosa e causa di se stessa: serve una causa prima'},
         {r:'terza via', n:'Il possibile e il necessario', d:'se tutto potesse non essere, un tempo non ci sarebbe stato nulla'},
         {r:'quarta via', n:'I gradi di perfezione', d:'il piu e il meno presuppongono un massimo'},
         {r:'quinta via', n:'L\'ordine del mondo', d:'cio che e privo di intelligenza tende a un fine: qualcuno lo dirige'},
         {r:'e rifiuta', n:'L\'argomento di Anselmo', d:'dal concetto di Dio non si ricava l\'esistenza: noi non conosciamo la sua essenza',
          f:[{piu:true, r:'perche per lui', n:'Si parte sempre dai sensi', d:'anche per arrivare a cio che i sensi non raggiungono'}]}
       ]},

      {r:'si fonda su', n:'Una metafisica dell\'essere', d:'la parte piu difficile, e quella che regge tutto il resto',
       f:[
         {r:'distingue', n:'Essenza ed esistenza', d:'sapere che cos\'e una cosa non dice che quella cosa ci sia'},
         {r:'in ogni creatura', n:'Sono realmente distinte', d:'nulla di finito esiste per forza propria: riceve l\'essere'},
         {r:'in Dio invece', n:'Coincidono', d:'la sua essenza e esistere: e per questo che non puo non essere'},
         {r:'di Dio si parla per', n:'Analogia', d:'ne allo stesso modo che delle cose, ne in modo del tutto diverso',
          f:[{r:'perche altrimenti', n:'O lo si riduce o non se ne dice nulla', d:'e la via stretta fra antropomorfismo e silenzio'}]},
         {piu:true, r:'e tutto cio che e', n:'Partecipa dell\'essere', d:'ripresa platonica dentro un impianto aristotelico: l\'operazione piu spericolata'}
       ]},

      {r:'descrive l\'uomo con', n:'L\'anima forma del corpo', d:'e qui rompe sia con Platone sia con Averroe',
       f:[
         {r:'contro Platone', n:'Non e un pilota nella nave', d:'l\'uomo non e un\'anima che usa un corpo: e un\'unita sostanziale'},
         {r:'contro Averroe', n:'L\'intelletto e individuale', d:'se ce ne fosse uno solo per tutti, non saresti tu a pensare'},
         {r:'la conoscenza comincia', n:'Dai sensi', d:'nulla e nell\'intelletto che prima non sia stato nei sensi'},
         {r:'e procede per', n:'Astrazione', d:'dall\'immagine sensibile la mente ricava la forma intelligibile',
          f:[{piu:true, r:'per questo serve sempre', n:'Un\'immagine', d:'anche il pensiero piu astratto si appoggia a qualcosa di sensibile'}]},
         {r:'e le passioni non sono', n:'Da estirpare', d:'sono materia della virtu: vanno ordinate dalla ragione, non spente'},
         {r:'ne segue che il corpo', n:'Non e una prigione', d:'e la condizione di ogni conoscenza umana: valorizzarlo e coerente, non devoto'}
       ]},

      {r:'costruisce', n:'Un\'etica della legge', d:'quattro livelli, e il secondo e quello che cambiera la storia',
       f:[
         {r:'al vertice', n:'La legge eterna', d:'l\'ordine con cui Dio governa tutte le cose'},
         {r:'poi', n:'La legge naturale', d:'la partecipazione della creatura razionale alla legge eterna',
          f:[{r:'il cui primo precetto e', n:'Fare il bene, evitare il male', d:'da cui derivano conservarsi, vivere in societa, conoscere la verita'},
             {r:'ed e conoscibile', n:'Con la sola ragione', d:'anche da chi non ha fede: e questo la rende un criterio pubblico'}]},
         {r:'poi', n:'La legge umana', d:'le norme concrete che le comunita si danno, e che dalla naturale derivano'},
         {r:'e la coscienza', n:'Obbliga anche quando sbaglia', d:'chi agisce contro il proprio giudizio pecca, pure se quel giudizio e errato'},
         {r:'e la', n:'Legge divina positiva', d:'la rivelazione, che aggiunge cio che la ragione non raggiunge'},
         {r:'con la tesi decisiva', n:'La legge ingiusta non e legge', d:'se contraddice la legge naturale e corruzione di legge, non legge',
          f:[{r:'ma con due freni', n:'Scandalo e disordine', d:'va tollerata se disobbedire produce un male maggiore'},
             {piu:true, r:'e resta comunque', n:'Il dovere di non fare il male', d:'nessuna legge puo obbligare a compiere un\'ingiustizia'}]}
       ]},

      {r:'e una politica', n:'Della naturalita', d:'lo Stato non nasce dal peccato ma dalla natura umana',
       f:[
         {r:'perche l\'uomo e', n:'Animale sociale e politico', d:'ripresa di Aristotele contro chi vedeva il potere solo come rimedio al male'},
         {r:'il fine dell\'autorita e', n:'Il bene comune', d:'non l\'utile di chi comanda: e il criterio per giudicare ogni governo'},
         {r:'quindi il tiranno', n:'Perde legittimita', d:'chi governa per se stesso non e piu un\'autorita ma un usurpatore',
          f:[{piu:true, r:'e la resistenza va', n:'Fatta da un\'autorita pubblica', d:'non dal singolo: Tommaso teme la vendetta privata piu della tirannide'}]},
         {r:'e la proprieta privata e', n:'Legittima ma non assoluta', d:'nel bisogno grave i beni tornano comuni: chi ha fame che prende non ruba'},
         {r:'la forma migliore e', n:'Un governo misto', d:'un capo, un gruppo di ottimi, e la partecipazione di tutti alla scelta'}
       ]},

      {r:'ha una storia postuma', n:'Piu movimentata dell\'opera', d:'condannato, canonizzato, e infine reso ufficiale',
       f:[
         {r:'nel 1277 alcune tesi sono', n:'Condannate a Parigi', d:'tre anni dopo la morte, insieme a quelle degli averroisti'},
         {r:'nel 1323 e', n:'Fatto santo', d:'e quarantasei anni dopo la condanna la censura viene revocata'},
         {r:'nel 1879', n:'Diventa dottrina ufficiale', d:'con Leone XIII il tomismo e imposto come filosofia della Chiesa',
          f:[{r:'e ne nasce il', n:'Neotomismo', d:'una scuola potente, e per alcuni una gabbia: Tommaso usato contro il pensiero moderno'}]},
         {r:'la legge naturale alimenta', n:'Il diritto naturale moderno', d:'da Vitoria a Grozio fino alle dichiarazioni dei diritti'},
         {piu:true, r:'e nel 1965 la Chiesa', n:'Sposta il fondamento sulla persona', d:'la liberta religiosa non nasce dalla verita ma dalla dignita di chi puo sbagliare'},
         {r:'e la tesi sulla legge ingiusta', n:'Arriva alla disobbedienza civile', d:'citata nel Novecento da chi rivendica diritti negati per legge'}
       ]}
    ],
    incroci:[
      {da:'Rifiutarlo, subirlo o riscriverlo', a:'La grazia non distrugge la natura', r:'e risolto dal principio che',
       perche:'Il problema pratico e cosa fare di un filosofo pagano che spiega il mondo senza Dio. La formula sulla grazia che perfeziona la natura e la mossa che rende possibile assorbirlo: se la natura e buona, studiarla non minaccia la fede. Una frase teologica risolve un problema di politica culturale.'},
      {da:'Si parte sempre dai sensi', a:'L\'argomento di Anselmo', r:'e la ragione per cui viene rifiutato',
       perche:'Tommaso non dice che la prova di Anselmo sia falsa: dice che non e disponibile per noi, perche presuppone di conoscere l\'essenza di Dio, e noi conosciamo solo a partire dai sensi. È un rifiuto per ragioni di antropologia della conoscenza, non di teologia — ed e per questo che le cinque vie partono tutte dal mondo.'},
      {da:'Con la sola ragione', a:'Arriva alla disobbedienza civile', r:'e cio che permette alla legge naturale di arrivare fino alla',
       perche:'Se il criterio per giudicare una legge fosse la rivelazione, varrebbe solo per i credenti. Poiche e la ragione naturale, e accessibile a chiunque e diventa un criterio pubblico. È esattamente per questo che sette secoli dopo puo essere citato in un tribunale o in una lettera dal carcere.'},
      {da:'Scandalo e disordine', a:'La legge ingiusta non e legge', r:'sono i freni che impediscono di leggere come rivolta la tesi che',
       perche:'Tommaso aggiunge subito che una legge ingiusta va tollerata se disobbedire produce un male maggiore. Senza questo freno la tesi autorizzerebbe chiunque a violare qualunque norma sgradita. Con il freno diventa un criterio da applicare, non uno slogan — ed e la parte che chi la cita dimentica piu spesso.'},
      {da:'L\'intelletto e individuale', a:'Non e un pilota nella nave', r:'e coerente con il rifiuto dell\'idea che l\'anima sia',
       perche:'Le due polemiche vanno insieme: contro Platone, che separa troppo anima e corpo; contro Averroe, che unifica troppo gli intelletti. In mezzo c\'e la tesi che questo corpo e questa mente siano una cosa sola — cioe che a pensare sia una persona, non l\'umanita in generale.'},
      {da:'Il bene comune', a:'Perde legittimita', r:'e il criterio per cui il tiranno',
       perche:'Definire il fine dell\'autorita come bene comune produce automaticamente un metro di giudizio: chi governa per se stesso non e piu autorita. È il modo in cui una definizione apparentemente innocua diventa la base per contestare un potere.'},
      {da:'Coincidono', a:'Il movimento', r:'e la conclusione a cui puntano prove come quella dal',
       perche:'Le cinque vie non si fermano a un primo motore generico: servono a identificare un essere in cui essenza ed esistenza coincidono, cioe che non riceve l\'essere da altro. Senza la metafisica dell\'atto d\'essere le prove sarebbero soltanto la ricerca di un primo anello, e l\'obiezione «e chi ha fatto Dio?» sarebbe decisiva.'},
      {da:'Un\'immagine', a:'Non e una prigione', r:'e la ragione per cui il corpo',
       perche:'Se ogni pensiero, anche il piu astratto, ha bisogno di appoggiarsi a un\'immagine sensibile, allora il corpo non e un ostacolo alla conoscenza ma il suo strumento. La rivalutazione tomista del corpo non nasce da devozione: nasce da una teoria della conoscenza.'},
      {da:'Condannate a Parigi', a:'Diventa dottrina ufficiale', r:'sono rovesciate sei secoli dopo, quando',
       perche:'Le stesse tesi censurate nel 1277 vengono imposte come filosofia della Chiesa nel 1879. Il caso e utile per capire che cosa valga una condanna: non stabilisce la verita, stabilisce chi comanda in quel momento. E chi comanda cambia.'},
      {da:'Animale sociale e politico', a:'Il diritto naturale moderno', r:'e la premessa da cui parte',
       perche:'Se la societa politica e naturale e non conseguenza del peccato, allora ha regole proprie conoscibili con la ragione, valide anche fra popoli che non condividono la fede. Da qui Vitoria ricava i diritti degli indios e Grozio un diritto valido anche se Dio non esistesse.'},
      {da:'Un errore di uno dei due', a:'Solo credibili', r:'obbliga a distinguere cio che e',
       perche:'Se fede e ragione non possono contraddirsi, ogni conflitto apparente va sciolto: o il ragionamento e sbagliato, o l\'interpretazione del testo lo e. La conseguenza pratica e enorme — obbliga a rileggere la Scrittura quando la ragione mostra qualcosa con certezza, ed e la posizione che Galileo invochera.'},
      {da:'Fatta da un\'autorita pubblica', a:'Il dovere di non fare il male', r:'lascia comunque al singolo',
       perche:'Tommaso teme la vendetta privata e affida la resistenza a un\'autorita pubblica; ma non toglie mai al singolo l\'obbligo di rifiutarsi di compiere un\'ingiustizia. Sono due cose diverse: rovesciare un governo e non eseguire un ordine. Confonderle e l\'errore piu frequente quando si cita questa dottrina.'},
      {da:'Neotomismo', a:'La filosofia ha valore proprio', r:'ha spesso dimenticato che',
       perche:'Imporre una filosofia come ufficiale contraddice la tesi di quella stessa filosofia, secondo cui la ragione ha un campo in cui decide da sola. È il paradosso di ogni ortodossia costruita su un autore che rivendicava autonomia al pensiero.'}
    ]
  },
  provocazione: {
    titolo:'La legge ingiusta',
    durata:'55 minuti',
    domandaMadre:'Il diritto di disobbedire vale anche per chi ha torto?',
    perche:'Tommaso d\'Aquino sostiene che una legge in contrasto con la legge naturale non e legge ma corruzione di legge, e non obbliga in coscienza: e la formulazione classica del diritto di disobbedire, citata nel Novecento da chi rivendicava diritti negati per legge. Lo stesso autore, nella stessa opera, sostiene che l\'eretico pertinace possa essere consegnato al potere secolare. La classe deve capire perche le due cose stanno insieme senza contraddizione — per Tommaso il fondamento non e la liberta della coscienza ma la verita — e vedere dove sta l\'altra tesi, presente nello stesso libro, secondo cui si deve seguire la propria coscienza anche quando sbaglia. È da quel secondo filo, non dal primo, che nasce la liberta moderna.',
    occorrente:'Niente.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Birmingham, Alabama, aprile 1963.\n\nMartin Luther King e in carcere\nper aver guidato una manifestazione\nsenza permesso.\n\nOtto pastori bianchi\ngli scrivono pubblicamente\nche le sue cause sono giuste\nma che deve aspettare\ne rispettare la legge.\n\nLui risponde su fogli di giornale\ne carta igienica.\n\nSpiega che esistono leggi giuste\ne leggi ingiuste,\nche una legge ingiusta\nnon e affatto una legge,\ne che chi la viola apertamente,\naccettando la pena,\nsta mostrando il massimo rispetto\nper il diritto.\n\nPer sostenerlo, cita un frate domenicano\nmorto nel 1274.',
       parlato:'Racconta la scena e tieni per ultimo il nome. L\'effetto e nel fatto che nessuno se lo aspetta.\n\nPoi da\' la tesi nella forma originale, che e piu forte di come la ricordiamo: una legge umana che si discosta dalla legge naturale non e legge, ma corruzione di legge.\n\nNon «e una cattiva legge». Non «andrebbe cambiata». Non e legge.\n\nDomanda: se non e legge, che cosa siete tenuti a fare?\n\nRaccogli le risposte. Poi aggiungi il dato che rende la faccenda seria: Tommaso e il teologo piu ortodosso del Medioevo, fatto santo, e dal 1879 filosofo ufficiale della Chiesa cattolica. Non e un ribelle. Ed e la fonte del diritto di disobbedire.',
       seDicono:[
         {loro:'«Chi decide quali leggi sono ingiuste?»',
          tu:'È la domanda giusta e la teniamo per tutta l\'ora. Anticipo solo la risposta di Tommaso, che e meno comoda di quanto sembri: non lo decide chi si sente offeso, e non lo decide la fede. Lo decide la ragione, che e la stessa in tutti — quindi un criterio che devi poter esporre a chi non la pensa come te.'},
         {loro:'«Allora ognuno viola le leggi che non gli piacciono.»',
          tu:'È il rischio, e Tommaso lo aveva visto. Fra dieci minuti vediamo i due freni che ci mette, e sono la parte che chi lo cita dimentica quasi sempre.'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'Una legge che ritenete\ngravemente ingiusta:',
       opzioni:['va comunque rispettata finche non viene cambiata', 'non obbliga, e si puo violare'],
       parlato:'Fai schierare e conta. Di solito la classe si divide quasi a meta, ed e una delle poche volte in cui succede davvero.\n\nPoi chiedi a entrambi i gruppi di difendersi dall\'obiezione piu ovvia.\n\nAl primo: se una legge ordina di consegnare una persona a chi la uccidera, la rispettate finche non la cambiano?\n\nAl secondo: se ognuno decide da solo quali leggi valgono, che cosa resta della convivenza? E come rispondete a chi ritiene ingiuste, in buona fede, leggi che voi ritenete sacrosante?\n\nQuesta seconda domanda va posta con precisione, perche e il cuore dell\'ora e ci torneremo alla fine. Non chiedere se hanno ragione: chiedi che criterio userebbero per distinguere il proprio caso da quello dell\'altro.',
       seDicono:[
         {loro:'«C\'e differenza fra violare una legge per il bene di tutti e per il proprio comodo.»',
          tu:'Ottimo, e sei arrivato dove voleva arrivare Tommaso: il criterio e il bene comune, non il tuo. Ma tieni presente la difficolta — chi viola una legge per il proprio comodo raramente lo dice, e quasi sempre si convince di agire per il bene di tutti.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Come funziona l\'argomento.\n\nQuattro livelli di legge.\n\nLa legge eterna:\nl\'ordine con cui Dio governa il mondo.\n\nLa legge naturale:\nla parte di quell\'ordine\nche una creatura razionale\npuo conoscere con la sola ragione.\nPrimo precetto: fare il bene, evitare il male.\n\nLa legge umana:\nle norme concrete,\nche valgono in quanto derivano\ndalla legge naturale.\n\nSe una norma la contraddice,\nnon ha piu la forza che la fa legge.\n\nDue freni, pero:\n\nva tollerata se disobbedire\nprovoca un disordine peggiore;\n\ne resta sempre e comunque\nil divieto di compiere un\'ingiustizia.',
       parlato:'Ricostruisci la scala e insisti sul secondo gradino, perche e li che sta tutto.\n\nFai capire perche conta che la legge naturale sia conoscibile con la sola ragione: significa che il criterio non e religioso. Un ateo puo usarlo, un musulmano puo usarlo, un tribunale puo usarlo. Se il metro fosse la rivelazione, varrebbe solo per i credenti, e non sarebbe mai arrivato a Birmingham.\n\nPoi i due freni, che vanno spiegati bene.\n\nIl primo dice che la tesi non e un\'autorizzazione generale: se violare una norma ingiusta produce un male maggiore di quello che evita, va tollerata. È un calcolo, non un principio assoluto.\n\nIl secondo e piu importante e va tenuto separato: nessuna legge puo obbligarti a compiere un\'ingiustizia. Rovesciare un governo e una cosa; rifiutarsi di eseguire un ordine e un\'altra. Tommaso e cauto sulla prima e durissimo sulla seconda.\n\nDomanda: quale delle due cose ha fatto King a Birmingham?',
       seDicono:[
         {loro:'«Il primo freno serve a non fare mai niente.»',
          tu:'Puo essere usato cosi, e nella storia lo e stato spesso: aspetta, non e il momento, faresti danni. È esattamente cio che i pastori bianchi scrivevano a King. La risposta seria non e buttare via il freno, e chiedere chi calcola quel disordine e chi ne paga il prezzo mentre si aspetta.'},
         {loro:'«Ma la legge naturale chi l\'ha scritta?»',
          tu:'Nessuno: per Tommaso e cio che la ragione riconosce come bene per un essere come noi — conservarsi, vivere in societa, conoscere. Puoi contestare che esista qualcosa del genere, ed e una posizione seria. Ma nota che anche chi la nega, quando dice che una legge e disumana, sta usando un metro fuori dalla legge.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'Dalla Summa theologiae,\nsulla legge umana:\n\nogni legge posta dagli uomini\nha forza di legge\nnella misura in cui deriva\ndalla legge naturale;\n\nse in qualcosa\nse ne discosta,\nnon e piu legge,\nma corruzione di legge.\n\nE poco piu avanti,\nsu chi comanda ingiustamente:\n\nleggi di quel genere\nsono violenza\npiuttosto che leggi.',
       testo:{fonte:'Tommaso d\'Aquino, Summa theologiae, I-II, q. 95, a. 2 e q. 96, a. 4',
              glossa:'La parola latina e corruptio legis: non «legge cattiva», ma corruzione della legge, cioe qualcosa che ne ha la forma e non la sostanza. E il termine usato poco dopo e violentia. Vale la pena farlo notare in classe: sono le parole di un teologo del Duecento, e sono piu dure di quelle che si userebbero oggi in un discorso pubblico.'},
       parlato:'Leggi il passo due volte, la seconda fermandoti sulle due parole latine.\n\nPoi torna a King e fai vedere l\'uso preciso che ne fa: non dice che le leggi segregazioniste siano ingiuste in generale, dice che degradano la personalita umana, cioe che colpiscono cio che rende una persona tale. E aggiunge una cosa che vale la pena discutere: chi viola una legge ingiusta deve farlo apertamente e accettare la pena, perche cosi mostra rispetto per il diritto in quanto tale.\n\nDomanda per la classe: perche accettare la pena? Se la legge non e legge, la pena non dovrebbe valere niente.\n\nLa risposta migliore che possono trovare da soli e questa: perche altrimenti sarebbe indistinguibile da chi viola le leggi per convenienza. Accettare la pena e il modo di dimostrare che non stai facendo i tuoi interessi.',
       seDicono:[
         {loro:'«Se accetti la pena, la legge ha comunque vinto.»',
          tu:'Sul momento si, e King resto in carcere. Ma nota che cosa ottiene: rende visibile a tutti che quella legge, per essere applicata, deve mettere in prigione qualcuno che sta chiedendo qualcosa di ovvio. La disobbedienza aperta serve a costringere gli altri a guardare.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Stesso autore.\nStessa opera.\nPoche centinaia di pagine dopo.\n\nAlla questione se gli eretici\nvadano tollerati,\nTommaso risponde\nche dopo due ammonizioni\nchi persiste puo essere\nconsegnato al potere secolare —\ncioe messo a morte.\n\nCome sta insieme\ncon il diritto di disobbedire\na una legge ingiusta?\n\nSta insieme benissimo,\ne questo e il punto.\n\nPer Tommaso il fondamento\nnon e la liberta della coscienza.\n\nÈ la verita.\n\nChi ha ragione puo disobbedire.\nChi ha torto va fermato.',
       parlato:'Dai il fatto senza attenuarlo e senza indignazione: la classe deve sentire il peso, non il tuo giudizio.\n\nPoi ricostruisci la logica, perche e coerente e va capita prima di essere respinta. Se cio che conta e la verita, allora chi la possiede ha il diritto di resistere alla legge sbagliata, e chi diffonde l\'errore fa un danno che va impedito. Da questa impostazione nasce una formula che avra fortuna fino al Novecento: l\'errore non ha diritti.\n\nAdesso il rovesciamento, che e la parte piu bella. Nello stesso libro, in un\'altra questione, Tommaso sostiene un\'altra cosa: chi agisce contro la propria coscienza pecca — anche se la sua coscienza e in errore. Cioe la coscienza obbliga anche quando sbaglia.\n\nLe due tesi convivono nello stesso autore. La prima fonda l\'intolleranza; la seconda contiene il germe della liberta di coscienza moderna.\n\nE la storia sceglie: nel 1965, con la dichiarazione sulla liberta religiosa, la Chiesa cattolica sposta il fondamento dalla verita alla persona — la persona ha diritti anche quando sbaglia. Sette secoli per far crescere il secondo filo invece del primo.\n\nPoi la domanda dell\'ora: il diritto di disobbedire vale anche per chi ha torto?',
       seDicono:[
         {loro:'«Se vale anche per chi ha torto, allora vale per chiunque.»',
          tu:'Si, ed e esattamente il prezzo della liberta moderna. Fondarla sulla verita e piu solido finche sei tu ad avere ragione; il giorno in cui a decidere che cosa sia vero e qualcun altro, quella fondazione si rivolta contro di te. Fondarla sulla persona e piu debole e non ha questo difetto.'},
         {loro:'«Allora Tommaso era intollerante.»',
          tu:'Su questo si, come quasi tutti nel suo tempo, e non serve difenderlo. Quello che conta di piu e che nella stessa opera ci sia anche l\'altro filo, e che sia stato scritto da lui. Gli autori grandi contengono spesso gli argomenti che serviranno a smentirli.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Riprendiamo la domanda\nrimasta aperta all\'inizio.\n\nChi decide quando una legge\ne ingiusta?\n\nTre risposte possibili:\n\nchi ha la verita —\ne allora chi sbaglia\nnon ha nessun diritto;\n\nchiunque si senta offeso —\ne allora non resta niente in piedi;\n\noppure:\nchiunque sappia esporre\nla propria ragione in pubblico,\ndavanti a chi non la pensa come lui,\ne accettarne le conseguenze.\n\nLa terza e la piu faticosa.\n\nCi abbiamo messo\nsettecento anni\nper arrivarci.',
       parlato:'Rifai la conta iniziale e commenta.\n\nPoi tira le fila senza semplificare. Tommaso ci lascia due cose in mano, e non sono coerenti fra loro: un criterio potente per giudicare le leggi, e una fondazione — la verita — che rende quel criterio pericoloso in mano a chi comanda. La liberta moderna nasce tenendo il primo e cambiando la seconda.\n\nDa\' loro il criterio pratico, che e l\'unica cosa che devono ricordare: quando pensate che una regola sia ingiusta, provate a esporre la ragione a qualcuno che non e d\'accordo, in termini che possa capire e valutare. Se non ci riuscite, forse quella regola non vi piace e basta. E se ci riuscite, siete tenuti ad accettare che qualcun altro faccia lo stesso contro di voi.\n\nUltima cosa: notate che sia stato un teologo del Duecento a fornire l\'argomento a un pastore nero in una prigione dell\'Alabama. Le idee non appartengono a chi le formula, e non restano dove sono nate. Questo e uno dei pochi motivi per studiare autori vecchi di ottocento anni.',
       seDicono:[
         {loro:'«Quindi non si sa mai chi ha ragione.»',
          tu:'Si puo sapere, e spesso si sa. Quello che non si puo e stabilirlo da soli e poi imporlo perche si e certi. La differenza non e fra chi ha ragione e chi no: e fra chi accetta di doverlo mostrare e chi ritiene di esserne dispensato.'}
       ]}
    ],
    riserve:[
      {titolo:'Le cinque vie, e la loro obiezione classica',
       corpo:'Tommaso propone cinque dimostrazioni dell\'esistenza di Dio, tutte a partire dall\'esperienza: il movimento, le cause, la contingenza, i gradi di perfezione, l\'ordine finalistico.\n\nL\'obiezione che viene in mente a tutti e la stessa: e allora chi ha fatto Dio? Se ogni cosa ha una causa, anche Dio dovrebbe averne una.\n\nLa risposta tomista e che la premessa non e «ogni cosa ha una causa», ma «ogni cosa che riceve l\'essere da altro ha una causa». Dio, per definizione, e cio la cui essenza e esistere.',
       chiedi:'La risposta vi sembra una soluzione o una scappatoia? E come si distingue una definizione legittima da una costruita apposta per evitare un\'obiezione?'},
      {titolo:'Il corpo non e una prigione',
       corpo:'Per Platone l\'anima e nel corpo come un prigioniero o come un pilota nella nave. Per Tommaso l\'anima e forma del corpo: insieme fanno una sola sostanza, e l\'uomo non e l\'anima ma il composto.\n\nLa conseguenza e conoscitiva prima che morale: se ogni pensiero comincia dai sensi e ha bisogno di appoggiarsi a un\'immagine, il corpo non e un ostacolo da superare ma lo strumento con cui conosciamo.\n\nQuesto crea pero un problema serio alla dottrina dell\'immortalita: se l\'anima e forma di questo corpo, che cosa e un\'anima senza il proprio corpo?',
       chiedi:'Tommaso paga un prezzo teologico per una tesi filosofica piu solida. Vi sembra una scelta coerente? E in generale: quanto si e disposti a complicarsi la vita pur di non dire una cosa che si ritiene falsa?'},
      {titolo:'Il Filosofo',
       corpo:'Nelle opere di Tommaso, «il Filosofo» senza altra indicazione significa sempre Aristotele; «il Commentatore» significa Averroe, filosofo musulmano di Cordoba.\n\nAristotele era pagano, non conosceva la creazione, riteneva il mondo eterno e non prevedeva nessuna provvidenza personale. Averroe era musulmano, e alcune sue tesi erano state condannate.\n\nSu questi due autori Tommaso costruisce la sintesi filosofica del cristianesimo occidentale.',
       chiedi:'Che cosa significa fondare il proprio pensiero su autori che non condividono la propria fede? È un segno di forza o di debolezza di una tradizione? E oggi, da chi accettiamo di imparare cose che ci obbligano a cambiare?'}
    ],
    testi:[
      {fonte:'Tommaso d\'Aquino, Summa theologiae, I-II, q. 19, a. 5 — sulla coscienza erronea',
       corpo:'La questione chiede se la volonta che si discosta da una ragione errata sia cattiva; e la risposta e che chi agisce contro la propria coscienza, anche quando questa e in errore, pecca.',
       glossa:'È il passo che va letto accanto a quello sugli eretici, perche mostra che nello stesso autore convivono due impostazioni: la verita come fondamento, e la coscienza che obbliga comunque. La liberta religiosa moderna nasce sviluppando questo secondo filo — e per questo la dichiarazione conciliare del 1965 poté presentarsi come sviluppo e non come rottura.'},
      {fonte:'Tommaso d\'Aquino, Summa theologiae, I, q. 1, a. 8 — la teologia e le altre scienze',
       corpo:'Alla domanda se la sacra dottrina debba servirsi di argomenti razionali, la risposta e che essa non prova i propri principi ma li usa per chiarire, e che la ragione naturale deve servirla e non contraddirla, perche la grazia non toglie la natura ma la porta a compimento.',
       glossa:'La formula finale — la grazia non distrugge la natura ma la perfeziona — e la chiave di tutto il sistema, e la ragione per cui Tommaso poté leggere Aristotele senza doverlo respingere. Da usare per mostrare come una singola tesi teologica renda possibile un intero programma culturale.'},
      {fonte:'Aristotele nella lettura tomista, Politica I — sull\'uomo animale politico',
       corpo:'Tommaso riprende la tesi secondo cui l\'uomo e per natura un essere sociale e politico, e ne trae che l\'esistenza dell\'autorita non e conseguenza del peccato ma della natura umana, poiche anche in uno stato di innocenza sarebbe stato necessario che qualcuno dirigesse verso il bene comune.',
       glossa:'È una rottura netta con la linea agostiniana, per cui il potere e rimedio al peccato. Se lo Stato e naturale, ha regole proprie conoscibili con la ragione e un fine proprio: e da qui che parte la strada verso un\'autonomia della politica, molto prima di Machiavelli e per vie del tutto diverse.'}
    ],
    compito:'Mezza pagina. Individuate una regola in vigore — una legge, un regolamento scolastico, una norma sportiva — che ritenete ingiusta. Poi fate tre cose: spiegate perche e ingiusta in termini che convincerebbero qualcuno che non la pensa come voi; dite se violarla produrrebbe un disordine peggiore del male che evita; e infine indicate quale altra regola, che a voi sembra giusta, qualcun altro potrebbe contestare con lo stesso metodo.',
    fonti:[
      'Tommaso d\'Aquino, Summa theologiae, I-II, qq. 90-97 (il trattato sulla legge); q. 19, a. 5',
      'Tommaso d\'Aquino, De regno; Commento alla Politica di Aristotele',
      'M. L. King, Lettera dal carcere di Birmingham (1963)',
      'Concilio Vaticano II, Dignitatis humanae (1965)',
      'É. Gilson, Il tomismo; J.-P. Torrell, Tommaso d\'Aquino. L\'uomo e il teologo',
      'A. MacIntyre, Giustizia e razionalità — sull\'attualita della legge naturale'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Filosofia medievale · 3 — La filosofia nel Trecento': {
  mappa: {
    n:'La filosofia nel Trecento', d:'come si smonta una sintesi, e che cosa ne esce',
    f:[
      {r:'comincia con', n:'La sintesi che non regge', d:'l\'equilibrio fra fede e ragione dura meno di una generazione',
       f:[
         {r:'perche la', n:'Condanna del 1277', d:'colpisce anche tesi tomiste: l\'accordo fra Aristotele e la fede diventa sospetto'},
         {r:'e perche cambia', n:'Il contesto', d:'peste, scisma, guerra: e difficile credere in un ordine razionale del mondo'},
         {r:'e i maestri non sono piu', n:'Solo frati', d:'crescono i secolari e i laici: cambia chi fa filosofia, non solo che cosa si dice'},
         {r:'si formano due', n:'Vie contrapposte', d:'la via antica e la via moderna: le universita si dividono per due secoli'},
         {piu:true, r:'e la parola', n:'Nominales', d:'nasce come insulto dei rivali e finisce come nome di una scuola'}
       ]},

      {r:'si apre con', n:'Duns Scoto', d:'il dottore sottile: smonta Tommaso restando dentro il suo campo',
       f:[
         {r:'contro l\'analogia sostiene', n:'L\'univocita dell\'essere', d:'«essere» significa la stessa cosa per Dio e per le creature, o non ne parliamo affatto'},
         {r:'introduce la', n:'Distinzione formale', d:'una distinzione che sta fra quella reale e quella solo mentale'},
         {r:'e afferma il primato della', n:'Volonta sull\'intelletto', d:'Dio non vuole una cosa perche e buona: e buona perche la vuole',
          f:[{r:'da cui segue che l\'ordine morale e', n:'Voluto, non dedotto', d:'e la strada che porta dritta a Occam'}]},
         {r:'e sull\'immacolata concezione', n:'Vince contro Tommaso', d:'e uno dei rari casi in cui la Chiesa segue Scoto e non l\'Aquinate'},
         {r:'e per il singolo introduce', n:'L\'ecceita', d:'cio che fa di questo uomo proprio questo e non un altro esemplare della specie',
          f:[{piu:true, r:'perche la specie', n:'Non basta a individuare', d:'e la prima volta che l\'individuo riceve una dignita metafisica propria'}]}
       ]},

      {r:'prosegue con', n:'Occam e il rasoio', d:'un principio di economia che svuota mezza metafisica',
       f:[
         {r:'dice che', n:'Non si moltiplicano gli enti', d:'se una spiegazione basta, non se ne aggiungono altre'},
         {r:'quindi esistono', n:'Solo individui', d:'nessuna umanita, nessuna specie reale: Pietro, Paolo, e basta'},
         {r:'e gli universali sono', n:'Segni mentali', d:'concetti che stanno per molti individui, non cose che stanno fuori'},
         {r:'la conoscenza parte da', n:'L\'intuizione del singolare', d:'un contatto diretto con questa cosa qui, prima di ogni astrazione'},
         {r:'la logica diventa', n:'Studio dei termini', d:'che cosa fa un segno quando sta al posto di una cosa: la teoria della suppositio'},
         {piu:true, r:'con un\'attenzione nuova al', n:'Linguaggio come strumento', d:'molti problemi metafisici si rivelano confusioni su come si usano le parole'},
         {r:'e cadono', n:'Specie, forme e qualita reali', d:'l\'apparato con cui la scolastica spiegava il mondo si assottiglia',
          f:[{piu:true, r:'e cade anche', n:'Gran parte della teologia razionale', d:'le prove dell\'esistenza di Dio diventano probabili, non dimostrative'}]}
       ]},

      {r:'si fonda su', n:'La potenza assoluta di Dio', d:'la tesi teologica piu esplosiva del Medioevo',
       f:[
         {r:'distingue', n:'Potenza assoluta e ordinata', d:'cio che Dio potrebbe fare e cio che ha di fatto stabilito'},
         {r:'da cui segue che il mondo e', n:'Contingente fino in fondo', d:'nulla di cio che esiste doveva esistere in questo modo'},
         {r:'e persino che Dio potrebbe', n:'Darti l\'esperienza di cio che non c\'e', d:'l\'intuizione di una stella assente: e un esempio da manuale scolastico',
          f:[{r:'formulato non per dubitare ma per', n:'Non limitare l\'onnipotenza', d:'negarlo significherebbe dire che Dio non puo qualcosa'},
             {piu:true, r:'e tre secoli dopo diventa', n:'Il genio maligno di Cartesio', d:'lo stesso argomento, con un altro scopo'}]},
         {r:'e vale anche in morale', n:'Nulla e buono per necessita', d:'se Dio comandasse altro, altro sarebbe il bene: tesi che spaventa i contemporanei'},
         {r:'e ne segue la conseguenza decisiva', n:'Il mondo non si deduce', d:'se poteva essere diverso, per sapere com\'e bisogna andare a guardare'}
       ]},

      {r:'separa', n:'Teologia e filosofia', d:'non piu due strade verso lo stesso vero, ma due mestieri diversi',
       f:[
         {r:'la teologia non e piu', n:'Una scienza dimostrativa', d:'parte da premesse credute, quindi conclude solo per chi crede'},
         {r:'la filosofia diventa', n:'Analisi del linguaggio e dell\'esperienza', d:'la logica e il centro, non piu la metafisica'},
         {r:'la fede resta', n:'Un atto, non una conclusione', d:'si crede perche si sceglie di credere, non perche si e dimostrato'},
         {r:'accanto a loro cresce', n:'La mistica renana', d:'Eckhart e Taulero: se la ragione non arriva a Dio, ci si arriva per un\'altra strada'},
         {piu:true, r:'e si diffonde la', n:'Devotio moderna', d:'una religiosita interiore e pratica, che fara da ponte verso l\'Umanesimo'},
         {r:'e questo indebolisce', n:'La pretesa di dedurre l\'ordine', d:'morale, politico e naturale non discendono piu da un unico schema'}
       ]},

      {r:'produce', n:'La fisica di Parigi', d:'la conseguenza pratica piu inattesa, ed e enorme',
       f:[
         {r:'Buridano spiega il moto con', n:'L\'impetus', d:'una forza impressa che resta nel corpo, invece dell\'aria che lo spinge da dietro',
          f:[{r:'che anticipa', n:'L\'inerzia', d:'non e ancora Galileo, ed e il primo passo fuori da Aristotele'},
             {piu:true, r:'e applica l\'idea anche ai', n:'Corpi celesti', d:'ipotizzando che Dio abbia dato loro un impetus iniziale che non si consuma'}]},
         {r:'Oresme discute seriamente', n:'La rotazione della Terra', d:'e smonta uno per uno tutti gli argomenti contrari',
          f:[{r:'ma poi conclude che', n:'La Terra sta ferma', d:'per fede nella Scrittura, non per un argomento che non aveva trovato'}]},
         {r:'e a Oxford lavorano', n:'I calculatores', d:'il Merton College applica la matematica al moto prima che qualcuno guardi il cielo'},
         {r:'e si comincia a', n:'Misurare le qualita', d:'rappresentare con figure geometriche l\'intensita che cresce nel tempo',
          f:[{r:'da cui il', n:'Teorema della velocita media', d:'formulato a Oxford, e sara usato da Galileo per la caduta dei gravi'}]}
       ]},

      {r:'entra in politica con', n:'Lo scontro con il papa', d:'e stavolta il filosofo ci mette la vita',
       f:[
         {r:'nasce dalla questione della', n:'Poverta di Cristo', d:'i francescani sostengono che Cristo non possiede nulla; il papa lo dichiara eretico'},
         {r:'Occam conclude che', n:'Il papa puo errare', d:'e lo scrive, dopo aver esaminato le costituzioni di Giovanni XXII'},
         {r:'e fugge presso', n:'Ludovico il Bavaro', d:'la protezione dell\'imperatore scomunicato: difendimi con la spada, ti difendero con la penna'},
         {r:'e sostiene che il concilio', n:'Puo giudicare il papa', d:'l\'argomento che a Costanza, ottant\'anni dopo, servira a deporne tre'},
         {r:'accanto a lui c\'e', n:'Marsilio da Padova', d:'con la tesi che il potere venga dalla comunita dei cittadini'},
         {piu:true, r:'e la disputa produce', n:'Una teoria dei diritti soggettivi', d:'per discutere di poverta bisogna definire che cosa sia un diritto: nasce li'}
       ]},

      {r:'lascia', n:'Un terreno diverso', d:'quasi nulla delle dottrine, quasi tutto dei presupposti',
       f:[
         {r:'un mondo di', n:'Fatti singolari da osservare', d:'invece di essenze da contemplare: e la premessa dell\'empirismo'},
         {r:'una teologia che', n:'Non chiede piu prove alla ragione', d:'e da qui parte la strada che Lutero percorrera'},
         {r:'una fisica', n:'Che ammette ipotesi impossibili per Aristotele', d:'vuoto, altri mondi, Terra in movimento: pensabili, quindi discutibili'},
         {r:'una filosofia che si occupa di', n:'Come parliamo delle cose', d:'e non solo di come le cose sono: e un\'eredita che arriva al Novecento'},
         {r:'e una regola di metodo', n:'Ancora in uso', d:'a parita di spiegazione, si sceglie quella che assume meno',
          f:[{piu:true, r:'con il nome improprio di', n:'Rasoio di Occam', d:'la formula precisa non si trova nei suoi testi, il principio si'}]}
       ]}
    ],
    incroci:[
      {da:'Voluto, non dedotto', a:'Contingente fino in fondo', r:'apre la strada all\'idea che il mondo sia',
       perche:'Se le cose sono buone perche Dio le vuole, e non volute perche buone, allora nessun ordine e necessario: poteva essere un altro. Scoto sposta il baricentro dall\'intelletto alla volonta, e Occam ne trae la conseguenza che il mondo intero e una scelta, non una deduzione.'},
      {da:'Il mondo non si deduce', a:'Fatti singolari da osservare', r:'e la ragione per cui restano solo',
       perche:'Finche l\'universo e necessario, si puo ricavarne la struttura ragionando su principi: Aristotele deduce che il vuoto e impossibile e che gli elementi sono quattro. Se invece poteva essere diverso, l\'unico modo di sapere com\'e fatto e guardarlo. La teologia dell\'onnipotenza produce l\'obbligo dell\'osservazione.'},
      {da:'Darti l\'esperienza di cio che non c\'e', a:'Il genio maligno di Cartesio', r:'e lo stesso argomento che diventa',
       perche:'L\'esempio scolastico dell\'intuizione di una stella assente nasce per non porre limiti a Dio, cioe da devozione. Tre secoli dopo lo stesso schema serve a Cartesio per mettere in dubbio tutto il conoscibile. Nessuno controlla che cosa faranno le proprie idee: la stessa mossa logica cambia mestiere.'},
      {da:'Solo individui', a:'L\'ecceita', r:'porta a compimento l\'intuizione dell\'',
       perche:'Scoto aveva introdotto cio che rende questo individuo proprio questo; Occam elimina anche la specie di cui sarebbe l\'esemplare. Il percorso e lineare: prima l\'individuo acquista dignita accanto all\'universale, poi resta solo lui. È la strada per cui in Occidente l\'individuo diventa la realta di base.'},
      {da:'Non si moltiplicano gli enti', a:'Gran parte della teologia razionale', r:'e il principio che fa cadere',
       perche:'Il rasoio non e un consiglio di eleganza: e una lama. Applicato con rigore elimina specie intelligibili, qualita reali e buona parte degli argomenti con cui si dimostrava Dio. Occam non e uno scettico, ma il suo strumento fa fuori piu di quanto probabilmente volesse.'},
      {da:'La Terra sta ferma', a:'Che ammette ipotesi impossibili per Aristotele', r:'e una conclusione che non toglie nulla al fatto che ora esista una fisica',
       perche:'Oresme costruisce tutta l\'argomentazione a favore della rotazione terrestre, confuta ogni obiezione, e poi conclude per la fede che la Terra sta ferma. Il valore non sta nella conclusione ma nel fatto che l\'ipotesi sia diventata discutibile: due secoli dopo, chi la sostiene trova gli argomenti gia pronti.'},
      {da:'Il papa puo errare', a:'Una scienza dimostrativa', r:'e possibile solo perche la teologia non e piu',
       perche:'Se la teologia fosse dimostrativa, l\'autorita che la custodisce sarebbe garantita dal metodo. Divenuta un sapere che parte da premesse credute, resta esposta all\'errore come ogni impresa umana — e un frate puo esaminare le costituzioni di un papa e concludere che sono sbagliate.'},
      {da:'L\'impetus', a:'Teorema della velocita media', r:'appartiene allo stesso cantiere del',
       perche:'La fisica trecentesca fra Parigi e Oxford produce due strumenti che Galileo trovera pronti: una causa del moto interna al corpo e una tecnica per trattare matematicamente una velocita che cambia. La rivoluzione scientifica eredita piu Medioevo di quanto ami ammettere.'},
      {da:'Una teoria dei diritti soggettivi', a:'Segni mentali', r:'e coerente con l\'idea che gli universali siano',
       perche:'Se non esistono essenze comuni ma solo individui, allora anche i diritti non appartengono a un ordine oggettivo delle cose: sono facolta di singoli soggetti. La disputa sulla poverta francescana costringe a definirlo, e il nominalismo fornisce la struttura concettuale.'},
      {da:'Vie contrapposte', a:'Un terreno diverso', r:'sono il modo in cui le universita trasmettono',
       perche:'La divisione fra via antica e via moderna non e un dettaglio accademico: significa che per due secoli generazioni di studenti europei imparano due modi opposti di intendere realta e linguaggio. Lutero si forma nella via moderna, e questo pesa su come porra la questione della salvezza.'},
      {da:'Non chiede piu prove alla ragione', a:'Un atto, non una conclusione', r:'e coerente con una fede che diventa',
       perche:'Tolto alla ragione il compito di fondare la fede, credere diventa una decisione e non l\'esito di un ragionamento. È una perdita per la teologia scolastica e una liberazione per chi cerchera nella sola Scrittura il fondamento: il Trecento prepara il terreno su cui il Cinquecento costruira.'},
      {da:'Il contesto', a:'La pretesa di dedurre l\'ordine', r:'rende poco credibile',
       perche:'Peste, scisma e guerra dei Cent\'anni si accumulano proprio mentre i filosofi smontano l\'idea di un ordine necessario. Non e una relazione di causa diretta, ma le due cose si sostengono: e piu facile pensare un mondo contingente quando quello che hai sotto gli occhi non somiglia a un disegno.'},
      {da:'Rasoio di Occam', a:'Distinzione formale', r:'sarebbe la prima vittima della',
       perche:'Scoto aveva introdotto un tipo di distinzione intermedia per salvare alcune tesi teologiche; Occam la elimina perche moltiplica gli enti senza necessita. È l\'esempio piu limpido di come funziona il rasoio — e del fatto che a essere tagliate sono soprattutto le finezze dei predecessori.'}
    ]
  },
  provocazione: {
    titolo:'Un mondo che poteva essere diverso',
    durata:'55 minuti',
    domandaMadre:'Come si conosce un mondo che poteva essere fatto in un altro modo?',
    perche:'Nel Trecento i teologi sostengono, per non porre limiti all\'onnipotenza divina, che Dio avrebbe potuto fare il mondo in modo completamente diverso e che potrebbe darci l\'esperienza vivissima di una cosa che non esiste. È devozione, non scetticismo — ed e esattamente il dubbio iperbolico che Cartesio userà tre secoli dopo. La classe deve seguire la conseguenza vera, che non e lo scetticismo: se il mondo poteva essere diverso, non lo si deduce da principi, bisogna andare a guardarlo. Il colpo di scena e Oresme che costruisce l\'intera argomentazione a favore della rotazione terrestre, confuta ogni obiezione e poi conclude che la Terra sta ferma: due secoli prima di Copernico, con tutte le carte in mano.',
    occorrente:'Niente.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Una tesi discussa nelle universita\neuropee del Trecento.\n\nDio e onnipotente.\n\nDunque potrebbe far si\nche voi abbiate\nl\'esperienza chiarissima\ndi una stella\nche non c\'e.\n\nNon un sogno, non un\'illusione confusa:\nla stessa identica evidenza\nche avete adesso\nguardando questa stanza.\n\nSostenere il contrario\nsignificherebbe dire\nche c\'e qualcosa\nche Dio non puo fare.\n\nQuesto argomento\nnon fu inventato per dubitare.\n\nFu inventato per lodare.',
       parlato:'Dai la tesi e lascia che ci pensino: quasi sempre qualcuno reagisce dicendo che e assurdo.\n\nPoi il colpo: tre secoli dopo, un filosofo francese scrivera che potrebbe esistere un genio maligno potentissimo che gli fa credere di vedere un cielo, una terra e un corpo che non ci sono. È l\'inizio della filosofia moderna, e lo studierete come il dubbio piu radicale mai formulato.\n\nÈ lo stesso argomento. Cambiano lo scopo e il nome di chi inganna.\n\nDomanda: come e possibile che il dubbio piu distruttivo della storia della filosofia sia stato costruito da teologi per esaltare Dio?',
       seDicono:[
         {loro:'«Allora non erano credenti sul serio.»',
          tu:'Erano frati, professori di teologia, alcuni finiti in guai seri per difendere la propria fede. Il punto e un altro: si puo essere sinceramente devoti e produrre uno strumento che poi funziona benissimo contro cio che si voleva difendere. Succede spesso, e non richiede malafede.'},
         {loro:'«È un gioco di parole senza conseguenze.»',
          tu:'Tienila come ipotesi, perche e la posizione dello schieramento fra poco. Ma prova a chiederti come mai lo stesso gioco di parole, tre secoli dopo, apre il libro considerato l\'inizio del pensiero moderno.'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'L\'idea che Dio\navrebbe potuto fare\nun mondo completamente diverso:',
       opzioni:['e una sottigliezza da scuola, senza effetti', 'e una bomba, e chi la formulava lo sapeva'],
       parlato:'Fai schierare e conta. Il primo gruppo di solito vince, e vale la pena farlo lavorare.\n\nPoi porta tutti su un esempio concreto, perche l\'astratto qui non basta.\n\nAristotele sosteneva che il vuoto e impossibile, e lo dimostrava: in un vuoto un corpo si muoverebbe istantaneamente, il che e assurdo. Non era un\'opinione, era una deduzione da principi. Allo stesso modo dimostrava che gli elementi sono quattro e che i cieli sono incorruttibili.\n\nAdesso applicate la tesi del Trecento. Se Dio poteva fare il mondo in un altro modo, quelle dimostrazioni valgono ancora?\n\nGuidali fino alla risposta: no. Restano al massimo descrizioni di come le cose sembrano andare qui. Se il vuoto esista o no non si decide piu ragionando: si decide guardando.\n\nQuesto e il punto dell\'ora. Da una tesi teologica segue un obbligo sperimentale.',
       seDicono:[
         {loro:'«Ma guardare non basta: potrebbe ingannarci.»',
          tu:'Osservazione giusta, e infatti nessuno di loro pensava che l\'esperienza dia certezze assolute. Ma nota il cambiamento: prima si poteva sapere con certezza senza guardare; ora si puo solo sapere con qualche probabilita guardando. È una perdita di grado e un guadagno di metodo.'},
         {loro:'«Se Dio puo tutto, non ha senso studiare niente.»',
          tu:'Sarebbe la conclusione scettica, e loro non la traggono. Distinguono: Dio potrebbe fare altrimenti, ma di fatto ha stabilito quest\'ordine e lo mantiene. Quindi vale la pena studiarlo — solo che si studia come si studia una decisione, non come si studia una necessita.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'La distinzione che regge tutto:\n\npotenza assoluta\ne potenza ordinata.\n\nAssoluta:\ntutto cio che Dio potrebbe fare,\nsenza contraddizione.\n\nOrdinata:\ncio che ha di fatto stabilito\ne che mantiene.\n\nIl mondo che avete davanti\nsta nella seconda.\nQuindi e affidabile.\nQuindi non e necessario.\n\nE arriva la seconda mossa,\nche taglia ancora piu a fondo:\n\nnon si devono moltiplicare\nle cose che si suppongono esistere\noltre il necessario.\n\nSe una spiegazione basta,\nnon se ne aggiunge un\'altra.',
       parlato:'Spiega la distinzione con calma e con un esempio: le regole di un gioco. Chi le ha scritte poteva scriverle diverse; ora che ci sono, valgono e si possono studiare. Ma non le ricavi ragionando: le leggi.\n\nPoi passa al rasoio e mostra che cosa taglia davvero, perche in genere lo si conosce come un consiglio innocuo.\n\nLa scolastica spiegava che gli oggetti bruciano perche hanno una qualita reale, il calore; che Pietro e uomo perche partecipa dell\'umanita; che conosciamo grazie a specie intelligibili che dagli oggetti entrano nella mente. Applicate il rasoio a tutto questo: se posso spiegare senza postulare quelle entita, spariscono.\n\nCosa resta? Individui, e i segni con cui li pensiamo. Nient\'altro.\n\nDomanda per farli lavorare: se non esiste l\'umanita ma solo singoli uomini, che cosa significa dire che due persone sono uguali?',
       seDicono:[
         {loro:'«Se restano solo individui, la scienza di che cosa parla?»',
          tu:'Domanda giusta, ed e il problema che il nominalismo si porta dietro per secoli. La risposta abbozzata e: parla di regolarita osservate fra individui, non di essenze. È piu debole e piu onesto. E per inciso, e piu vicino a come la scienza descrive se stessa oggi.'},
         {loro:'«Il rasoio dice solo di essere semplici, che c\'e di male?»',
          tu:'Che applicato sul serio non e affatto innocuo. Fa cadere le specie, le qualita reali e buona parte degli argomenti che dimostravano l\'esistenza di Dio. Occam era un frate: il suo strumento ha eliminato piu di quanto probabilmente volesse.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'Il principio, nella forma\nin cui circolava:\n\n«Non si deve porre\nuna pluralita\nsenza necessita.»\n\nE, in un\'altra formulazione:\n\ncio che si puo fare\ncon meno\ne inutile farlo\ncon di piu.\n\nQuattro secoli piu tardi,\nNewton apre i propri principi\ndi filosofia naturale\ncon una regola quasi identica:\n\nnon ammettere piu cause\ndi quante bastino\na spiegare i fenomeni.',
       testo:{fonte:'Guglielmo di Occam, formulazioni ricorrenti nei commenti alle Sentenze; Newton, Principia, regulae philosophandi I',
              glossa:'La frase «rasoio di Occam», nella forma che tutti citano, non compare nei suoi testi: e una etichetta successiva. Il principio pero e suo, ed e usato costantemente. Vale la pena farlo notare in classe come esempio di come funzionano le formule celebri: quasi mai le ha scritte chi le ha pensate.'},
       parlato:'Leggi le due formulazioni e poi Newton, e lascia che vedano la continuita.\n\nPoi la domanda utile: perche una regola di economia dovrebbe portarci al vero? Chi ha detto che il mondo sia semplice?\n\nÈ una domanda seria e non ha una risposta definitiva. Da\' loro le due migliori. La prima: non e una regola sul mondo, e una regola su di noi — fra due spiegazioni che rendono conto degli stessi fatti, quella che assume meno e piu facile da controllare e da smentire. La seconda: assumere entita che non servono significa non poterle mai verificare, e quindi uscire dal terreno del sapere.\n\nSe la classe regge, fai notare la differenza fra semplicita e comodita: il rasoio non dice di scegliere la spiegazione piu facile da capire, dice di scegliere quella che presuppone meno cose esistenti. Sono due criteri diversissimi e vengono confusi di continuo.',
       seDicono:[
         {loro:'«A volte la spiegazione complicata e quella giusta.»',
          tu:'Certo, e il rasoio non dice il contrario: dice che devi avere una ragione per aggiungere. Se i fatti richiedono un\'entita in piu, la aggiungi. Quello che non puoi fare e aggiungerla perche ti torna comodo o perche ci sei affezionato.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'Parigi, intorno al 1377.\n\nNicola Oresme,\nmatematico, vescovo,\nconsigliere del re,\nsi pone la domanda:\n\nsi puo sostenere che sia la Terra\na girare, e non il cielo?\n\nEsamina tutte le obiezioni.\n\nLa freccia lanciata in aria\ndovrebbe cadere lontano: risponde\nche l\'aria e la freccia\ngirano insieme alla Terra.\n\nDovremmo sentire un vento continuo:\nrisponde allo stesso modo.\n\nLa Scrittura dice che il sole si ferma:\nrisponde che la Scrittura\nparla come parla la gente.\n\nMostra che tutti i fenomeni\nsi spiegano ugualmente bene\nnei due modi.\n\nE poi conclude\nche la Terra sta ferma.',
       parlato:'Racconta la sequenza come un\'indagine, e tieni l\'ultima riga per il silenzio.\n\nLa reazione della classe e sempre di irritazione. Lasciala venire, poi lavora su di essa.\n\nPrima cosa da chiarire: non e che gli mancasse un argomento. Li aveva tutti, e li aveva trovati lui. Conclude per la fede — dice esplicitamente che nessuna delle ragioni addotte contro il moto della Terra e concludente, e che tuttavia egli crede che la Terra stia ferma.\n\nSeconda cosa, ed e la piu importante: che cosa ha fatto, allora?\n\nHa reso l\'ipotesi discutibile. Ha smontato tutte le obiezioni che due secoli dopo verranno rivolte a Copernico — e quando arriveranno, le risposte saranno gia scritte. Le sue argomentazioni girano nelle universita per generazioni.\n\nPoi la domanda vera: chi ha costruito tutti gli argomenti e non ha tirato la conclusione ha fallito?\n\nNon dare la risposta. Ma da\' l\'elemento per pensarci: la scienza avanza anche cosi, per accumulo di argomenti disponibili. Chi conclude per primo di solito e in piedi su un lavoro fatto da altri che non hanno concluso.',
       seDicono:[
         {loro:'«Aveva paura.»',
          tu:'Possibile, e nel Trecento non c\'era ancora un caso Galileo: Oresme era vescovo e consigliere del re, non un uomo in pericolo. La lettura piu probabile e piu scomoda e che credesse davvero. Aveva ragionato benissimo e poi ha scelto un\'altra autorita — cosa che, in forme diverse, capita a tutti.'},
         {loro:'«Allora Copernico non ha inventato niente.»',
          tu:'No, questo no: Copernico costruisce un sistema matematico completo, che Oresme non aveva. La differenza fra dire "e possibile" e dire "ecco come funziona, con i numeri" e enorme. Ma il terreno su cui poggia era stato dissodato, ed e giusto saperlo.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Mettiamo in fila\ncio che e successo.\n\nPer non porre limiti a Dio,\ndei teologi affermano\nche il mondo poteva essere diverso.\n\nSe poteva essere diverso,\nnon lo si deduce:\nbisogna guardarlo.\n\nSe non si moltiplicano gli enti,\nrestano cose singole\ne regolarita da osservare.\n\nE a quel punto diventa pensabile\nche sia la Terra a girare.\n\nNessuno di loro\nvoleva questo.\n\nUltima domanda:\n\nsi puo prevedere\nche cosa fara un\'idea\ndopo di noi?',
       parlato:'Ricostruisci la catena in cinque passaggi, lentamente, facendo dire a loro ogni anello: se hanno seguito, ci arrivano.\n\nPoi la formulazione da portare a casa: la teologia dell\'onnipotenza ha prodotto l\'obbligo dell\'osservazione. Non per un rovesciamento ironico della storia, ma per una conseguenza logica stretta — un mondo contingente e un mondo che si conosce solo empiricamente.\n\nSull\'ultima domanda non dare risposte consolatorie. Le idee non appartengono a chi le formula e non fanno cio per cui sono state pensate: la potenza assoluta di Dio diventa il genio maligno di Cartesio, la disputa sulla poverta francescana produce la teoria dei diritti soggettivi, il rasoio inventato da un frate finisce in apertura dei Principia di Newton.\n\nChiudi con la cosa che serve per il resto dell\'anno: quando vi diranno che la scienza moderna nasce contro il Medioevo, ricordatevi di Buridano, di Oresme e del teorema che Galileo usera per la caduta dei gravi. Le rotture nette esistono nei manuali. Nei documenti si trovano quasi sempre delle continuita.',
       seDicono:[
         {loro:'«Allora non serve preoccuparsi delle conseguenze di quello che si dice.»',
          tu:'Al contrario: serve, e serve sapere che non basta. Puoi rispondere di cio che prevedi; non puoi rispondere di tutto. La conclusione utile non e disinteressarsene, e essere piu prudenti nel dichiarare a che cosa serve una propria idea.'}
       ]}
    ],
    riserve:[
      {titolo:'L\'asino che non era di Buridano',
       corpo:'Si racconta di un asino posto esattamente a meta strada fra due mucchi di fieno identici, che muore di fame non riuscendo a scegliere. L\'esempio e attribuito a Giovanni Buridano, ma nei suoi testi non si trova.\n\nBuridano sosteneva che la volonta segue il giudizio dell\'intelletto su quale sia il bene maggiore; i suoi avversari costruirono l\'esempio dell\'asino per mostrare che, davanti a due opzioni equivalenti, quella teoria porta alla paralisi.\n\nLa storia si e attaccata al suo nome ed e diventata il modo in cui viene ricordato.',
       chiedi:'Un pensatore viene ricordato per un esempio inventato dai suoi avversari per confutarlo. Come si difende un\'idea da come viene riassunta? E quanto di cio che sapete di un autore viene da chi lo contestava?'},
      {titolo:'Se «essere» significhi la stessa cosa',
       corpo:'Tommaso sostiene che di Dio si parla per analogia: quando diciamo che Dio e buono e che un uomo e buono non usiamo la parola nello stesso senso, ne in sensi del tutto diversi.\n\nDuns Scoto obietta che l\'analogia non tiene: o «essere» significa la stessa cosa quando lo diciamo di Dio e delle creature, oppure quando parliamo di Dio non stiamo dicendo nulla di determinato.\n\nÈ una delle dispute piu tecniche del Medioevo, e riguarda una questione semplice: si puo parlare in modo sensato di cio che supera del tutto la nostra esperienza?',
       chiedi:'Provate a trasferirla: quando usiamo una parola ordinaria per qualcosa di enormemente diverso — «intelligenza» per una macchina, «vita» per un virus — la stiamo usando nello stesso senso, in un senso diverso o in nessun senso preciso?'},
      {titolo:'Difendimi con la spada',
       corpo:'Occam viene convocato ad Avignone perche alcune sue tesi sono sospette. Li si occupa della disputa sulla poverta di Cristo, esamina i documenti pontifici e conclude che il papa Giovanni XXII ha sostenuto tesi eretiche.\n\nFugge, viene scomunicato, e si rifugia presso Ludovico il Bavaro, imperatore a sua volta scomunicato. La tradizione gli attribuisce una frase rivolta all\'imperatore: difendimi con la spada, io ti difendero con la penna.\n\nPassa il resto della vita a scrivere di politica ecclesiastica, e muore probabilmente di peste nel 1347.',
       chiedi:'Un filosofo che si mette sotto la protezione di un potente per poterlo difendere: quanto resta libero il suo pensiero? E si puo distinguere chi scrive cio che pensa da chi pensa cio che gli conviene scrivere?'}
    ],
    testi:[
      {fonte:'Nicola Oresme, Le livre du ciel et du monde, libro II (1377)',
       corpo:'Dopo aver esaminato le ragioni contro il moto quotidiano della Terra, Oresme dichiara che nessuna di esse e concludente, che i fenomeni si salvano ugualmente in entrambe le ipotesi, e che tuttavia egli ritiene che sia il cielo a muoversi e non la Terra.',
       glossa:'Il valore del testo sta nella distanza fra l\'argomentazione e la conclusione. Da usare in classe per mostrare che cosa significhi rendere un\'ipotesi discutibile: le obiezioni che Oresme smonta sono le stesse che verranno rivolte a Copernico e a Galileo, e le risposte sono gia li, scritte due secoli prima.'},
      {fonte:'Giovanni Buridano, Questioni sulla Fisica — l\'impetus',
       corpo:'Buridano sostiene che chi lancia un corpo gli imprime una certa forza che resta nel corpo stesso e ne continua il moto, e che tale impeto diminuisce per la resistenza dell\'aria e per la gravita; e osserva che in assenza di resistenze non ci sarebbe ragione perche diminuisca.',
       glossa:'L\'ultima osservazione e a un passo dal principio d\'inerzia, e viene formulata duecentocinquant\'anni prima di Galileo. Utile per correggere l\'idea che il Medioevo ripetesse Aristotele: qui lo si contesta sul terreno che gli era piu proprio, la spiegazione del moto.'},
      {fonte:'Guglielmo di Occam, sulla conoscenza intuitiva',
       corpo:'Occam sostiene che Dio potrebbe causare nell\'intelletto una conoscenza intuitiva di una cosa che non esiste, e che tale conoscenza sarebbe indistinguibile, quanto a evidenza, da quella di una cosa esistente.',
       glossa:'È il testo che va messo accanto alla prima Meditazione di Cartesio. Occam non ne trae scetticismo: mantiene che di fatto Dio non inganna e che l\'ordine stabilito e affidabile. Ma lo strumento e costruito, e resta a disposizione di chi lo usera per altro.'}
    ],
    compito:'Mezza pagina. Prendete un\'idea o un\'invenzione recente pensata per uno scopo preciso — una tecnologia, una regola, una parola nuova. Descrivete lo scopo per cui e nata, poi un uso che ha preso e che chi l\'ha pensata non aveva previsto. Infine dite se, secondo voi, quell\'uso si poteva prevedere: se la risposta e sì, spiegate perche nessuno lo ha fatto.',
    fonti:[
      'Guglielmo di Occam, Summa logicae; Ordinatio, prologo — sulla conoscenza intuitiva',
      'Duns Scoto, Ordinatio I, d. 3 — sull\'univocita dell\'essere',
      'Nicola Oresme, Le livre du ciel et du monde, II, 25; Giovanni Buridano, Quaestiones super libris Physicorum',
      'A. de Libera, Il pensiero del Medioevo; F. Alessio, Introduzione a Occam',
      'P. Duhem, Le système du monde (per la fisica parigina); E. Grant, La scienza nel Medioevo',
      'M. Villey e B. Tierney, sul dibattito riguardo all\'origine dei diritti soggettivi'
    ]
  }
},

/* ────────────────────────────────────────────────────────── */
'Storia moderna · 1 — Carlo V e la Riforma protestante': {
  mappa: {
    n:'Carlo V e la Riforma', d:'l\'ultimo impero universale e la rottura che lo rende impossibile',
    f:[
      {r:'comincia da', n:'Un\'eredita accumulata per matrimoni', d:'nessuna conquista: quattro nonni e una serie di morti opportune',
       f:[
         {r:'dal padre', n:'I Paesi Bassi e la Borgogna', d:'la regione piu ricca e urbanizzata d\'Europa'},
         {r:'dalla madre', n:'Spagna e America', d:'con l\'argento che comincia ad arrivare dalle Indie'},
         {r:'dal nonno', n:'I domini asburgici', d:'Austria e diritti sull\'Impero'},
         {r:'e nel 1519 compra', n:'La corona imperiale', d:'gli elettori si fanno pagare, e i Fugger anticipano la somma',
          f:[{r:'battendo', n:'Francesco I', d:'che aveva fatto la stessa cosa, offrendo di meno'},
             {piu:true, r:'con un debito che', n:'Condizionera tutto il regno', d:'l\'argento americano servira in gran parte a pagare banchieri tedeschi e genovesi'}]},
         {r:'e coltiva un progetto', n:'Fuori tempo', d:'la monarchia universale cristiana, mentre l\'Europa si sta dividendo in Stati'}
       ]},

      {r:'trova una Chiesa', n:'Esposta', d:'non piu corrotta di prima, ma piu visibile e meno difendibile',
       f:[
         {r:'che vende', n:'Indulgenze', d:'remissione della pena in cambio di un\'offerta: un condono con tariffario'},
         {r:'per finanziare', n:'La nuova San Pietro', d:'il cantiere piu costoso d\'Europa'},
         {r:'con affari come quello di', n:'Alberto di Magonza', d:'compra tre diocesi indebitandosi con i Fugger e ripaga con le indulgenze',
          f:[{piu:true, r:'e un banchiere', n:'Siede accanto al predicatore', d:'per incassare la meta dovuta: la cosa era pubblica'}]},
         {piu:true, r:'e circolano gia', n:'Richieste di riforma', d:'concili, umanisti e ordini religiosi le formulano da un secolo, senza esito'},
         {r:'e ha un clero spesso', n:'Impreparato', d:'parroci che non sanno il latino, vescovi che non risiedono'},
         {r:'mentre esiste ormai', n:'La stampa', d:'un\'accusa scritta non si spegne piu convocando chi l\'ha pronunciata'}
       ]},

      {r:'esplode con', n:'Lutero', d:'un monaco agostiniano con un problema personale, non un progetto di riforma',
       f:[
         {r:'parte da', n:'L\'angoscia della salvezza', d:'per quanto si confessi, non si sente mai a posto davanti a Dio'},
         {r:'trova la risposta nella', n:'Giustificazione per fede', d:'l\'uomo e salvato per grazia, non per le opere che accumula'},
         {r:'e ne trae tre principi', n:'Sola fide, sola gratia, sola Scriptura', d:'niente merito, niente mediazione, niente tradizione oltre il testo',
          f:[{r:'da cui il', n:'Sacerdozio universale', d:'ogni battezzato e sacerdote: la gerarchia non ha un potere sacro proprio'},
             {piu:true, r:'e la conseguenza pratica', n:'Bisogna saper leggere', d:'se la Scrittura decide da sola, il fedele deve poterla leggere'}]},
         {r:'nel 1517 affigge', n:'Le novantacinque tesi', d:'contro le indulgenze: sono tesi da disputa accademica, in latino'},
         {r:'ma vengono', n:'Tradotte e stampate', d:'e in due settimane circolano in tutta la Germania: e questo a cambiare tutto'}
       ]},

      {r:'diventa rottura con', n:'Lo scontro con Roma', d:'quattro anni, e nessuno riesce piu a fermarlo',
       f:[
         {r:'a Lipsia', n:'Ammette di essere hussita', d:'1519: se un concilio ha condannato tesi vere, anche i concili sbagliano'},
         {r:'Roma risponde con', n:'Exsurge Domine', d:'1520: sessanta giorni per ritrattare'},
         {r:'e lui', n:'Brucia la bolla in pubblico', d:'davanti a studenti e professori: il gesto e piu importante del testo'},
         {r:'a Worms davanti all\'imperatore', n:'Rifiuta di ritrattare', d:'1521: la coscienza vincolata alla Scrittura contro papa e impero'},
         {r:'poi viene', n:'Nascosto alla Wartburg', d:'da Federico il Savio, che finge di averlo fatto rapire',
          f:[{r:'dove traduce', n:'Il Nuovo Testamento in tedesco', d:'e nel farlo fonda la lingua letteraria tedesca moderna'}]}
       ]},

      {r:'si salda con', n:'I principi tedeschi', d:'ed e questo, non la teologia, a decidere che la Riforma sopravviva',
       f:[
         {r:'che ci guadagnano', n:'I beni della Chiesa', d:'monasteri, terre e decime passano ai principi che aderiscono'},
         {r:'e insieme', n:'L\'indipendenza dall\'imperatore', d:'una fede diversa e un\'ottima ragione per non obbedire'},
         {r:'il momento decisivo e', n:'La guerra dei contadini', d:'1524-25: i contadini prendono alla lettera la liberta del cristiano',
          f:[{r:'chiedono nei', n:'Dodici articoli', d:'fine della servitu, elezione dei parroci, uso comune dei boschi: tutto motivato col Vangelo'},
             {r:'e Lutero scrive', n:'Contro le orde assassine', d:'invitando i principi a colpirli senza pieta, come si uccide un cane rabbioso'},
             {r:'con circa', n:'Centomila morti', d:'e la Riforma resta legata ai principi, non ai contadini'}]},
         {piu:true, r:'e si organizzano nella', n:'Lega di Smalcalda', d:'un\'alleanza militare fra principi luterani: la fede diventa un fronte'},
         {r:'e nasce il nome', n:'Protestanti', d:'dalla protesta di alcuni principi contro una dieta imperiale, nel 1529'}
       ]},

      {r:'si moltiplica in', n:'Altre riforme', d:'una volta rotta l\'unita, nessuno controlla piu la direzione',
       f:[
         {r:'a Zurigo', n:'Zwingli', d:'piu radicale sui sacramenti, muore in battaglia contro i cantoni cattolici'},
         {r:'a Ginevra', n:'Calvino', d:'costruisce una citta-chiesa disciplinata, con un consistoro che sorveglia i costumi',
          f:[{r:'con la dottrina della', n:'Predestinazione', d:'Dio ha gia scelto: non si sa chi sia salvo, e nessuna opera lo cambia'},
             {piu:true, r:'e Ginevra diventa', n:'La centrale d\'Europa', d:'stampa clandestina e pastori formati per Francia, Scozia e Paesi Bassi'}]},
         {r:'ai margini gli', n:'Anabattisti', d:'battesimo da adulti, rifiuto delle armi e del giuramento: perseguitati da tutti',
          f:[{r:'con il caso estremo di', n:'Munster', d:'1534-35: una citta occupata e trasformata in regno dei santi, poi massacrata'}]},
         {piu:true, r:'e ovunque cambiano', n:'Le chiese per dentro', d:'via le immagini e gli altari laterali, al centro il pulpito: si viene per ascoltare'},
         {r:'e in Inghilterra', n:'Enrico VIII', d:'rompe con Roma per una questione dinastica, non teologica'}
       ]},

      {r:'travolge', n:'Il progetto di Carlo V', d:'che combatte su tre fronti e non ne chiude nessuno',
       f:[
         {r:'contro', n:'La Francia', d:'sei guerre in trent\'anni per il controllo dell\'Italia e dei confini'},
         {r:'contro', n:'Gli Ottomani', d:'che assediano Vienna nel 1529 e sono alleati del re di Francia'},
         {r:'contro', n:'I principi luterani', d:'riuniti nella lega di Smalcalda'},
         {r:'vince a', n:'Muhlberg', d:'1547: una vittoria militare piena, che non risolve nulla'},
         {r:'ed e costretto alla', n:'Pace di Augusta', d:'1555: in ogni territorio vale la religione del principe',
          f:[{r:'con il solo diritto di', n:'Emigrare', d:'per il suddito che non concorda: vendere i beni e andarsene'},
             {piu:true, r:'e i calvinisti', n:'Ne restano fuori', d:'saranno riconosciuti solo nel 1648, dopo un\'altra guerra di trent\'anni'}]},
         {r:'poi', n:'Abdica', d:'1556: divide i domini fra il figlio e il fratello, e si ritira in un monastero'}
       ]},

      {r:'lascia', n:'Un\'Europa divisa per sempre', d:'e alcune conseguenze che nessuno aveva cercato',
       f:[
         {r:'la Chiesa reagisce con', n:'Il concilio di Trento', d:'chiarisce la dottrina, forma il clero, e chiude ogni possibilita di ricomposizione'},
         {r:'seguono', n:'Le guerre di religione', d:'in Francia, nei Paesi Bassi, e infine in Germania fino al 1648'},
         {r:'cresce', n:'L\'alfabetizzazione', d:'dove si deve leggere la Bibbia si aprono scuole: e un effetto misurabile'},
         {r:'cambia il valore del', n:'Lavoro quotidiano', d:'nessun mestiere e piu sacro di un altro: anche la vita comune e vocazione'},
         {piu:true, r:'e nasce una', n:'Confessionalizzazione', d:'lo Stato usa la disciplina religiosa per controllare i sudditi: vale per entrambe le parti'},
         {r:'e la Germania resta', n:'Frammentata', d:'la sovranita religiosa dei principi rafforza la divisione territoriale'}
       ]}
    ],
    incroci:[
      {da:'La stampa', a:'Tradotte e stampate', r:'e cio che rende irreversibile il fatto che le tesi siano',
       perche:'Hus fu convocato e bruciato, e la questione si chiuse per un secolo. Lutero scrive nel momento in cui esiste un torchio: in due settimane le tesi sono ovunque, in tedesco, e non c\'e nessun luogo dove convocarle. La differenza fra i due casi non e nella teologia, e nella tecnologia della diffusione.'},
      {da:'Condizionera tutto il regno', a:'Alberto di Magonza', r:'nasce dallo stesso circuito bancario dell\'affare di',
       perche:'I Fugger anticipano il denaro per comprare la corona imperiale e finanziano il vescovo che rivende indulgenze per ripagarli. Lo stesso banchiere sta dietro l\'elezione di Carlo V e dietro la campagna che fa esplodere Lutero: la crisi religiosa e la politica imperiale poggiano sullo stesso debito.'},
      {da:'Ammette di essere hussita', a:'Sola fide, sola gratia, sola Scriptura', r:'e cio che rende necessario il principio',
       perche:'A Lipsia Lutero e messo alle strette con l\'accusa di essere hussita, rilegge gli atti di Costanza e conclude che anche un concilio puo sbagliare. Tolta l\'ultima autorita umana a cui appellarsi, non resta che il testo: il «sola Scriptura» non e il punto di partenza della sua teologia, e cio che rimane quando tutto il resto e caduto.'},
      {da:'Bisogna saper leggere', a:'L\'alfabetizzazione', r:'produce la crescita del',
       perche:'Se la Scrittura decide da sola, il fedele deve poterla leggere: da qui scuole, catechismi e traduzioni. È l\'effetto sociale piu misurabile della Riforma, e nessuno lo aveva progettato — deriva da una tesi teologica sul rapporto fra il credente e il testo.'},
      {da:'Dodici articoli', a:'Contro le orde assassine', r:'ricevono come risposta l\'opuscolo',
       perche:'I contadini fondano ogni richiesta sul Vangelo, cioe applicano il metodo che Lutero aveva insegnato: la Scrittura come unico criterio. Lui risponde che la liberta del cristiano e interiore e non riguarda i rapporti sociali, e invita i principi a reprimere. È il punto in cui la Riforma sceglie da che parte stare.'},
      {da:'Centomila morti', a:'I beni della Chiesa', r:'saldano definitivamente la Riforma a chi incamera',
       perche:'Dopo il 1525 il movimento non ha piu una base popolare autonoma: dipende dai principi, che lo proteggono e ne ricavano monasteri e decime. Un movimento che ha bisogno di protezione finisce per assumere la forma di chi lo protegge, e la forma qui e il principato territoriale.'},
      {da:'Emigrare', a:'Rifiuta di ritrattare', r:'e l\'esito paradossale del gesto di chi',
       perche:'Si comincia con un uomo che davanti all\'imperatore dice di non poter agire contro coscienza, e si finisce con una pace che assegna al principe la scelta della fede dei sudditi, lasciando al dissenziente solo la valigia. La coscienza individuale apre la crisi e non compare nella soluzione.'},
      {da:'Gli Ottomani', a:'Pace di Augusta', r:'sono una delle ragioni per cui si arriva alla',
       perche:'Carlo V vince a Muhlberg ma non puo consolidare: gli servono i principi tedeschi, anche luterani, per finanziare la difesa contro i turchi e la guerra con la Francia. La tolleranza di Augusta non nasce da un\'idea, nasce dal fatto che l\'imperatore ha bisogno di truppe su altri due fronti.'},
      {da:'Predestinazione', a:'Lavoro quotidiano', r:'si lega alla rivalutazione del',
       perche:'Se nessuna opera cambia una scelta gia fatta da Dio, resta la domanda di come si viva nell\'incertezza. La risposta calvinista valorizza la disciplina e il mestiere come luogo della vocazione — ed e su questo nesso che Weber costruira la tesi piu discussa della sociologia moderna.'},
      {da:'Fuori tempo', a:'Frammentata', r:'e il progetto imperiale che finisce nell\'esito opposto della Germania',
       perche:'Carlo V insegue una monarchia universale cristiana mentre l\'Europa si organizza in Stati territoriali. Il risultato del suo regno e l\'opposto: la Germania esce dalla crisi con principi sovrani anche in materia di fede. Un progetto in ritardo di due secoli accelera cio che voleva impedire.'},
      {da:'Le novantacinque tesi', a:'Il concilio di Trento', r:'ottengono quasi trent\'anni dopo una risposta nel',
       perche:'Le tesi del 1517 chiedevano un chiarimento sulle indulgenze; la risposta istituzionale arriva solo nel 1545 e non e piu un chiarimento ma una ridefinizione completa della dottrina. Quando un\'istituzione risponde con quasi trent\'anni di ritardo, non risponde piu alla domanda iniziale ma alla frattura che si e prodotta nel frattempo.'},
      {da:'Munster', a:'Anabattisti', r:'segna per sempre l\'immagine degli',
       perche:'La citta trasformata in regno dei santi, con poligamia e requisizioni, e un caso estremo e breve; ma diventa l\'argomento con cui per due secoli si giustifica la persecuzione di tutti gli anabattisti, compresi i gruppi pacifisti. Un episodio limite serve a definire un intero movimento — e conviene sempre a chi lo reprime.'},
      {da:'Il Nuovo Testamento in tedesco', a:'Sacerdozio universale', r:'e lo strumento che rende praticabile il',
       perche:'Dire che ogni battezzato e sacerdote resta un principio astratto finche il testo e in latino e in mano ai chierici. La traduzione lo rende operativo, e per questo la Chiesa aveva sempre diffidato delle versioni in volgare: la questione della lingua e sempre stata una questione di chi detiene l\'accesso.'}
    ]
  },
  provocazione: {
    titolo:'Cuius regio',
    durata:'55 minuti',
    domandaMadre:'Perche una rivolta della coscienza finisce con la fede decisa dal principe?',
    perche:'Nel 1521 un monaco dice all\'imperatore che non puo agire contro la propria coscienza; nel 1555 la pace che chiude quella crisi stabilisce che in ogni territorio si professa la religione del sovrano e che il suddito dissenziente puo soltanto emigrare. La classe deve ricostruire come si arriva dall\'una all\'altra cosa, e la risposta non e il tradimento di qualcuno: e che un movimento che ha bisogno di protezione assume la forma di chi lo protegge. Il momento decisivo e il 1525, quando i contadini applicano al proprio mondo il principio della sola Scrittura e Lutero invita i principi a reprimerli. Il colpo di scena e che la pace di Augusta, ricordata come la prima tolleranza europea, tollera i principi e non le persone.',
    occorrente:'Niente.',
    tempi:[
      {minuti:'0–8', et:'L\'aggancio',
       schermo:'Worms, aprile 1521.\n\nDavanti all\'imperatore,\nai principi, ai vescovi,\nun monaco di trentasette anni\nrifiuta di ritrattare i propri libri.\n\nDice che la sua coscienza\ne vincolata alla parola di Dio,\ne che andare contro coscienza\nnon e sicuro ne onesto.\n\nTrentaquattro anni dopo,\nla pace che chiude\nquella crisi stabilisce:\n\nin ogni territorio\nsi professa la religione\ndel principe che lo governa.\n\nIl suddito che non e d\'accordo\nha un solo diritto:\nvendere i propri beni\ne andarsene.',
       parlato:'Dai le due date e lascia il contrasto in piedi senza commentarlo.\n\nPoi la domanda: come si arriva da qui a li?\n\nRaccogli le prime risposte. Di solito arriva subito l\'ipotesi del tradimento — qualcuno si e venduto. Non correggerla ancora: e una delle due opzioni dello schieramento, e conviene che sia difesa.\n\nSe serve un dato in piu per far pesare il contrasto: nel 1520 Lutero aveva scritto un opuscolo intitolato «La liberta del cristiano», che circolo in decine di migliaia di copie. La parola liberta e nel titolo del testo piu diffuso della Riforma, e trentacinque anni dopo la liberta riconosciuta e quella del principe di scegliere la fede altrui.',
       seDicono:[
         {loro:'«Perche allora Lutero non fa la fine di Hus?»',
          tu:'Domanda perfetta, e ci lavoriamo fra dieci minuti. Anticipo solo che la risposta non e teologica: le tesi di Hus e quelle di Lutero si somigliano molto, e lo ammise Lutero stesso. Cambia tutto il resto.'},
         {loro:'«Almeno potevano andarsene: e gia qualcosa.»',
          tu:'Per l\'epoca lo era, e non va sottovalutato. Ma tieni presente che cosa significava: lasciare la casa, la terra, il mestiere e i parenti, spesso in poche settimane. Un diritto che si esercita solo perdendo tutto e un diritto strano, e vale la pena chiedersi per chi funzionava davvero.'}
       ]},

      {minuti:'8–17', et:'Lo schieramento',
       schermo:'La pace del 1555,\nche assegna al principe\nla scelta della religione:',
       opzioni:['tradisce il punto di partenza della Riforma', 'era l\'unico esito possibile, fin dall\'inizio'],
       parlato:'Fai schierare e conta.\n\nPoi chiedi ai due gruppi di rispondere a una domanda ciascuno.\n\nAl primo: chi avrebbe dovuto proteggere Lutero, se non i principi? Un uomo scomunicato e messo al bando dall\'impero puo essere ucciso da chiunque senza conseguenze. Chi lo teneva in vita?\n\nAl secondo: se era l\'unico esito possibile, allora il contenuto della predicazione non conta nulla? Basta la politica a spiegare tutto?\n\nLa seconda domanda serve a impedire la scorciatoia opposta, quella per cui tutto si riduce a interessi. Nella Riforma ci sono entrambe le cose, e distinguerle e il lavoro dell\'ora.\n\nPoi passa alla ricostruzione: perche Lutero sopravvive dove Hus era stato bruciato?',
       seDicono:[
         {loro:'«I principi lo hanno usato.»',
          tu:'Certamente, e vale anche il contrario: lui ha usato loro, consapevolmente. Nel 1520 scrive un appello alla nobilta tedesca chiedendo che siano i principi a riformare la Chiesa, visto che i vescovi non lo fanno. Non e stato ingenuo: ha scelto un alleato.'}
       ]},

      {minuti:'17–28', et:'La complicazione',
       schermo:'Perche Lutero non fa la fine di Hus.\n\nPrimo: la stampa.\nIn pochi anni i suoi scritti\ncircolano in centinaia di migliaia\ndi copie, in tedesco.\nNon c\'e nessun luogo\nin cui convocare un\'idea.\n\nSecondo: l\'imperatore ha altro da fare.\nSei guerre con la Francia.\nI turchi che assediano Vienna nel 1529.\nL\'Italia. Le Americhe.\n\nTerzo, e decisivo: i principi.\nFederico il Savio lo fa rapire\ndai propri uomini\ne lo nasconde in un castello.\n\nPerche lo proteggono?\n\nMonasteri, terre e decime\npassano a chi aderisce.\nE una fede diversa\ne un\'ottima ragione\nper non obbedire all\'imperatore.',
       parlato:'Dai i tre motivi in ordine, e insisti sul terzo.\n\nPoi arriva al punto in cui la partita si decide davvero, che e il 1525.\n\nI contadini tedeschi si sollevano. Non sono una jacquerie: hanno un programma scritto, i dodici articoli, e ogni richiesta e fondata su un passo del Vangelo. Chiedono la fine della servitu, il diritto di eleggere il proprio parroco, l\'uso comune dei boschi e delle acque. Il ragionamento e esattamente quello che avevano imparato: la Scrittura e l\'unico criterio, quindi verifichiamo con la Scrittura anche i rapporti fra signori e contadini.\n\nLutero risponde con un opuscolo in cui invita i principi a colpirli senza pieta, a pugnalare e uccidere come si abbatte un cane rabbioso, promettendo che chi muore combattendo i rivoltosi e un martire.\n\nLa repressione fa circa centomila morti.\n\nDomanda per la classe: perche? Non e una domanda retorica — c\'e una ragione teologica, e va capita.',
       seDicono:[
         {loro:'«Perche aveva paura di perdere i principi.»',
          tu:'C\'e anche questo, ed e la lettura piu diffusa. Ma c\'e una ragione interna alla sua teologia, e va conosciuta: per lui la liberta del cristiano e interiore, riguarda il rapporto con Dio, e non dice nulla sui rapporti sociali. I contadini secondo lui confondevano i due piani. Puoi giudicare la risposta e devi sapere che non era solo opportunismo.'},
         {loro:'«Ma erano loro ad aver capito bene.»',
          tu:'È una posizione che si puo sostenere, e alcuni contemporanei la sostennero. Il punto storico e un altro: dopo il 1525 la Riforma non ha piu una base popolare autonoma. Dipende dai principi. E chi dipende da qualcuno finisce per assomigliargli.'}
       ]},

      {minuti:'28–38', et:'Il testo',
       schermo:'Dai Dodici articoli\ndei contadini svevi, 1525:\n\nchiedono di poter eleggere\nil proprio parroco;\n\nchiedono che la servitu personale\nsia abolita,\nperche Cristo ha redento tutti\ncon il proprio sangue,\nil pastore come l\'imperatore;\n\nchiedono di poter pescare e cacciare,\ne di riavere i boschi comuni.\n\nE aggiungono una clausola:\nse anche una sola\ndi queste richieste\nsara mostrata contraria\nalla Scrittura,\nvi rinunceranno.',
       testo:{fonte:'I Dodici articoli dei contadini della Svevia, febbraio-marzo 1525',
              glossa:'L\'ultima clausola e la piu importante: i contadini accettano in anticipo di essere confutati con la Bibbia. Hanno imparato la regola nuova — la Scrittura come unico criterio — e la applicano al proprio mondo, offrendosi al controllo. È il documento che rende impossibile liquidarli come una folla inferocita, ed e per questo che va letto in classe prima della risposta di Lutero.'},
       parlato:'Leggi gli articoli e poi soffermati sulla clausola finale: si sottopongono al giudizio della Scrittura. Non chiedono di essere creduti, chiedono di essere verificati.\n\nPoi leggi la risposta, senza attenuarla. Lutero scrive che chiunque puo colpirli, in segreto o in pubblico, come si uccide un cane rabbioso; che nulla puo essere piu velenoso di un rivoltoso; e che chi muore combattendoli e un martire davanti a Dio.\n\nLascia il silenzio.\n\nPoi la domanda: che cosa vi colpisce di piu, il contenuto o il fatto che sia lo stesso uomo?\n\nE quella successiva, che e piu utile: chi risponde delle conseguenze di cio che dice? Lutero non aveva chiesto ai contadini di sollevarsi, e loro citavano lui. Quanto pesa questo, secondo voi?\n\nNon chiudere la questione. Falli parlare: e uno dei pochi problemi morali su cui una classe discute davvero.',
       seDicono:[
         {loro:'«Non e colpa sua se l\'hanno frainteso.»',
          tu:'Non lo avevano frainteso del tutto: avevano applicato il suo metodo a un altro campo. E quando qualcuno ti prende sul serio piu di quanto volessi, hai due strade — spiegare perche il campo e diverso, oppure chiedere che venga ucciso. Lui scelse la seconda, e questo resta suo.'}
       ]},

      {minuti:'38–47', et:'Il colpo di scena',
       schermo:'La pace di Augusta, 1555,\nviene ricordata\ncome il primo atto di tolleranza\nreligiosa in Europa.\n\nLeggiamola davvero.\n\nOgni principe sceglie\nfra cattolicesimo e luteranesimo.\n\nI sudditi professano\nla religione del principe.\n\nChi non e d\'accordo\npuo vendere i beni ed emigrare.\n\nI calvinisti non sono compresi:\nnon esistono, giuridicamente.\nSaranno riconosciuti nel 1648,\ndopo un\'altra guerra\ndurata trent\'anni.\n\nQuindi:\nla prima liberta religiosa d\'Europa\ne la liberta del sovrano\ndi scegliere la fede degli altri.',
       parlato:'Dai il contenuto della pace punto per punto, e fai emergere da loro la conclusione.\n\nPoi la domanda importante: perche a nessuno viene in mente la soluzione ovvia, cioe che in uno stesso territorio convivano due religioni?\n\nGuidali alla risposta, che e la chiave per capire i due secoli successivi. Perche nessuno, in quel momento, credeva che una societa potesse reggersi senza unita di fede. Il giuramento, i tribunali, il matrimonio, la fiducia fra vicini: tutto poggiava su una religione condivisa. Due fedi in un territorio sembravano l\'anticamera della guerra civile — e, per un secolo, lo furono davvero.\n\nQuindi la tolleranza di Augusta non e un principio ma un armistizio: si separano i contendenti mettendo un confine fra loro.\n\nE aggiungi come si arriva all\'altra tolleranza, quella fra persone: non per una scoperta morale, ma per esaurimento. Dopo le guerre di religione francesi, dopo i Paesi Bassi, dopo la guerra dei Trent\'anni, si scopre sperimentalmente che una societa mista non crolla. Le idee di Locke sulla tolleranza arrivano dopo, e mettono in forma quello che era gia successo.',
       seDicono:[
         {loro:'«Allora la tolleranza nasce dalla stanchezza, non dalla ragione.»',
          tu:'In gran parte si, ed e un fatto che vale la pena tenere. Le grandi conquiste morali arrivano spesso quando l\'alternativa e diventata insostenibile, e vengono giustificate dopo con buoni argomenti. Questo non le rende meno vere: le rende piu fragili, perche chi dimentica il costo puo pensare che siano gratuite.'},
         {loro:'«Perche i calvinisti restano fuori?»',
          tu:'Perche nel 1555 sono pochi e nessuno li considera un interlocutore. Cinquant\'anni dopo saranno la forza religiosa piu organizzata d\'Europa. Le paci che escludono qualcuno perche in quel momento e debole tendono a durare quanto quella debolezza.'}
       ]},

      {minuti:'47–55', et:'Il ritorno',
       schermo:'Il percorso, in quattro passi.\n\nUn uomo dice che la coscienza\nnon puo essere costretta.\n\nPer sopravvivere\nha bisogno di protezione armata.\n\nChi lo protegge\nchiede in cambio\nche il movimento non tocchi\nl\'ordine sociale —\ne ottiene i beni della Chiesa.\n\nQuando arriva la pace,\nchi ha protetto\ndetta le condizioni.\n\nUltima domanda:\n\nun movimento puo scegliere\nchi lo protegge\nsenza scegliere\nche cosa diventera?',
       parlato:'Rifai la conta iniziale e commenta lo spostamento.\n\nPoi da\' il meccanismo in forma pulita, ed e la cosa da portare a casa: un movimento che ha bisogno di protezione finisce per assumere la forma di chi lo protegge. Non perche i suoi uomini siano vili, ma perche la protezione ha un prezzo che si paga in contenuti.\n\nAggiungi il bilancio onesto, senza ridurre tutto alla politica. La Riforma ha prodotto anche cose che nessuno aveva progettato e che sono durate piu delle guerre: l\'alfabetizzazione dove si doveva leggere la Bibbia, una lingua tedesca letteraria nata da una traduzione, e l\'idea che il lavoro quotidiano di chiunque abbia dignita religiosa.\n\nE chiudi con la cosa che serve per il prossimo capitolo: da qui in avanti l\'Europa non ha piu un\'autorita religiosa comune. Ogni conflitto politico avra anche una faccia confessionale, per un secolo e mezzo. E quando le guerre di religione finiranno, finiranno perche i contendenti si saranno accorti di non poter vincere — che e il modo in cui, quasi sempre, finiscono.',
       seDicono:[
         {loro:'«Quindi meglio non farsi proteggere da nessuno.»',
          tu:'Chi non ha protezione, in quel secolo, viene bruciato: Hus non aveva un principe, Lutero si. La conclusione utile non e rifiutare gli alleati, e sapere che ogni alleanza modifica cio che si e. La domanda giusta da farsi prima non e se convenga, ma che cosa dovremo smettere di dire.'}
       ]}
    ],
    riserve:[
      {titolo:'Il conto delle indulgenze',
       corpo:'Alberto di Hohenzollern voleva cumulare tre diocesi, cosa vietata. Ottenne la dispensa pagando a Roma una somma enorme, presa a prestito dai banchieri Fugger. Per rimborsarli, ottenne di predicare nei propri territori un\'indulgenza per la costruzione di San Pietro: meta del ricavato a Roma, meta ai Fugger.\n\nAccanto al predicatore sedeva un agente della banca che teneva la contabilita.\n\nLutero, quando scrive le tesi, non sa nulla di questo accordo. Lo scoprira dopo.',
       chiedi:'La macchina era legale, pubblica e nota a molti. Perche allora fu proprio quel testo, di un professore sconosciuto, a farla saltare? Che cosa serve perche una cosa che tutti sanno diventi improvvisamente uno scandalo?'},
      {titolo:'Il sacco di Roma',
       corpo:'Nel maggio 1527 le truppe imperiali, in gran parte lanzichenecchi tedeschi di fede luterana e da mesi senza paga, entrano a Roma e la saccheggiano per settimane. Chiese devastate, reliquie disperse, migliaia di morti, il papa assediato in Castel Sant\'Angelo.\n\nL\'esercito era formalmente al servizio di Carlo V, sovrano cattolicissimo, che non ne aveva ordinato l\'assalto e non era in grado di pagarlo.\n\nIn Europa l\'episodio fu letto da molti come un castigo divino sulla corruzione romana.',
       chiedi:'Un imperatore cattolico non riesce a impedire che i propri soldati saccheggino la sede del papa. Che cosa ci dice questo su quanto un sovrano del Cinquecento controllasse davvero i propri eserciti? E quanto conta, nella storia, il fatto banale che le truppe non fossero pagate?'},
      {titolo:'La citta dei santi',
       corpo:'Nel 1534 un gruppo di anabattisti prende il controllo di Munster e vi instaura un regime che si proclama regno di Dio in terra: beni in comune, poligamia, distruzione dei libri tranne la Bibbia, esecuzione dei dissenzienti. La citta e assediata per oltre un anno da un esercito cattolico e protestante insieme, e alla fine espugnata; i capi sono torturati a morte e i corpi esposti in gabbie sul campanile.\n\nLe gabbie sono ancora li.\n\nDa allora, per due secoli, «anabattista» divenne sinonimo di sovversivo, e furono perseguitati anche i gruppi pacifisti che rifiutavano ogni violenza.',
       chiedi:'Un episodio estremo definisce l\'immagine di un intero movimento, compresa la parte che gli era opposta. A chi conviene questa operazione? E riuscite a pensare a un caso recente in cui funziona allo stesso modo?'}
    ],
    testi:[
      {fonte:'Lutero, Novantacinque tesi, 1517 — la tesi 86',
       corpo:'La tesi chiede perche il papa, le cui ricchezze sono oggi piu ingenti di quelle dei piu ricchi fra i ricchi, non costruisca la basilica di San Pietro con il proprio denaro piuttosto che con quello dei poveri fedeli.',
       glossa:'Non e una tesi teologica: e una domanda di buon senso economico, ed e la piu citata delle novantacinque. Fa capire perche il testo abbia funzionato fuori dall\'universita — chiunque poteva capirla, mentre le tesi sul purgatorio richiedevano un teologo.'},
      {fonte:'Lutero, Contro le orde assassine e rapinatrici dei contadini, maggio 1525',
       corpo:'L\'opuscolo invita chiunque possa a colpire, strangolare e pugnalare i rivoltosi, in segreto o in pubblico, sostenendo che nulla puo essere piu velenoso e diabolico di un uomo in rivolta, e che chi cade combattendoli muore da martire.',
       glossa:'Fu stampato mentre la repressione era gia in corso e contribui alla sua durezza. Va letto in classe accanto alla Liberta del cristiano del 1520: non per condannare l\'autore con parole nostre, ma perche il confronto fra i due testi pone da solo la domanda sulla responsabilita di chi parla.'},
      {fonte:'Pace di Augusta, 25 settembre 1555',
       corpo:'L\'accordo riconosce accanto alla confessione cattolica quella luterana, stabilisce che a ciascun principe spetti determinare la religione del proprio territorio, e concede ai sudditi di fede diversa la facolta di vendere i beni ed emigrare senza subire danno.',
       glossa:'La formula «cuius regio, eius religio» non compare nel testo: fu coniata da un giurista alla fine del secolo. Il principio pero e quello. Da usare per mostrare che le prime forme di tolleranza in Europa furono accordi fra poteri per evitare la guerra, non riconoscimenti di diritti individuali.'}
    ],
    compito:'Mezza pagina. Pensate a un gruppo o a un\'iniziativa che per esistere ha avuto bisogno dell\'appoggio di qualcuno piu forte — puo essere storico o attuale, anche piccolo. Descrivete che cosa ha ottenuto grazie a quell\'appoggio e che cosa ha dovuto smettere di dire o di fare per ottenerlo. Poi rispondete: quel prezzo era prevedibile all\'inizio?',
    fonti:[
      'Lutero, Novantacinque tesi (1517); Alla nobiltà cristiana della nazione tedesca e La libertà del cristiano (1520)',
      'I Dodici articoli dei contadini svevi (1525); Lutero, Contro le orde assassine dei contadini (1525)',
      'Dieta di Worms, editto del 1521; Pace di Augusta (1555)',
      'H. Schilling, Martin Lutero. Ribelle in un\'epoca di cambiamenti radicali',
      'A. Prosperi, Lutero. Gli anni della fede e della libertà; L. Febvre, Martin Lutero',
      'P. Blickle, La rivoluzione dell\'uomo comune — sulla guerra dei contadini'
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
