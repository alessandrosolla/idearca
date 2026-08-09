/* ══════════════════════════════════════════════════════════
   BANCA DI DOMANDE — Idearca
   Ricavate dagli Approfondimenti pubblicati sul sito.

   Due regole tenute per ogni domanda, perché senza si indovina
   senza aver studiato:

   • Le opzioni hanno lunghezza confrontabile. Se la risposta
     giusta è la più lunga e articolata, si riconosce a occhio
     senza sapere nulla dell'argomento.
   • L'ordine viene mescolato al momento del caricamento, quindi
     la posizione non dice niente.

   Il campo "giusta" è l'indice qui nel file; in regia compare
   come testo, così resta corretto anche dopo il mescolamento.
   Non viene mai proiettato né salvato nel database: la
   correzione la fai a voce dopo aver mostrato i risultati.
   ══════════════════════════════════════════════════════════ */

const BANCA = [
{
  titolo: 'Filosofia antica · 1 — Dagli Ionici agli atomisti',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: scrivi una parola che ti viene in mente pensando a «da che cosa è fatto tutto».'},

    {tipo:'scelta', testo:'Perché Anassimandro rifiuta come principio un elemento determinato?',
     opzioni:['Perché prevarrebbe sugli altri elementi',
              'Perché nessun elemento si trasforma mai',
              'Perché i sensi non riescono a percepirlo',
              'Perché sarebbe divisibile all\'infinito'], giusta:0},

    {tipo:'scelta', testo:'Con quale meccanismo Anassimene spiega le trasformazioni della materia?',
     opzioni:['Rarefazione e condensazione dell\'aria',
              'Attrazione e repulsione fra le radici',
              'Movimento impresso dalla mente ordinatrice',
              'Urto e aggregazione delle particelle'], giusta:0},

    {tipo:'scelta', testo:'Per i pitagorici, in che senso «le cose sono numeri»?',
     opzioni:['Il numero è la struttura stessa della realtà',
              'Il numero serve a contare e misurare le cose',
              'Esiste solo ciò che si riesce a misurare',
              'Il numero è una comoda invenzione umana'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il lògos di Eraclito?',
     opzioni:['La legge razionale che governa il divenire',
              'Il discorso capace di persuadere chiunque',
              'Il principio materiale da cui nasce tutto',
              'L\'anima individuale di ciascun uomo'], giusta:0},

    {tipo:'scelta', testo:'Qual è la novità del Nùs di Anassagora rispetto ai principi precedenti?',
     opzioni:['È il primo principio non materiale',
              'È divisibile all\'infinito come i semi',
              'È composto dalle quattro radici unite',
              'Si muove per pura necessità cieca'], giusta:0},

    {tipo:'scelta', testo:'Quale problema risolvono gli atomisti ammettendo che il vuoto esista?',
     opzioni:['Rendono possibile il moto senza negare l\'essere',
              'Spiegano come sono nati gli dèi del mito',
              'Giustificano la piena verità dei nostri sensi',
              'Dimostrano che esiste un solo cosmo eterno'], giusta:0},

    {tipo:'scelta', testo:'Per Democrito colore, sapore e calore che statuto hanno?',
     opzioni:['Sono convenzioni: esistono solo atomi e vuoto',
              'Sono proprietà reali possedute dagli atomi',
              'Sono illusioni prodotte dalla mente ordinatrice',
              'Sono effetti dell\'unità fra i contrari'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: quale di questi principi ti sembra oggi il più convincente? Una parola.'}
  ]
},
{
  titolo: 'Filosofia antica · 2 — Parmenide e la filosofia eleatica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: se ti dico che il movimento non esiste, che parola ti viene da rispondere?'},

    {tipo:'scelta', testo:'Qual è il passaggio decisivo con cui Parmenide nega il movimento?',
     opzioni:['Muoversi richiede il vuoto, e il vuoto non è',
              'I sensi ci ingannano sempre e comunque',
              'Il tempo è una misura puramente umana',
              'Il cosmo ha la forma di una sfera perfetta'], giusta:0},

    {tipo:'scelta', testo:'Che cosa critica Senofane con i buoi e i cavalli che disegnano gli dèi?',
     opzioni:['L\'antropomorfismo della religione tradizionale',
              'L\'esistenza stessa di qualunque divinità',
              'L\'uso dei miti nell\'educazione dei giovani',
              'L\'arte intesa come imitazione del reale'], giusta:0},

    {tipo:'scelta', testo:'Nel poema di Parmenide, che cos\'è la doxa?',
     opzioni:['La via dei sensi, che mostra un mondo apparente',
              'La dimostrazione che parte da un\'ipotesi assurda',
              'La dea che rivela al filosofo la verità',
              'La forma sferica e compiuta dell\'essere'], giusta:0},

    {tipo:'scelta', testo:'A che cosa servivano i paradossi di Zenone?',
     opzioni:['A mostrare che gli avversari cadono nell\'assurdo',
              'A dimostrare che il movimento è ben reale',
              'A insegnare la retorica ai giovani ateniesi',
              'A misurare distanze e intervalli di tempo'], giusta:0},

    {tipo:'scelta', testo:'Come reagiscono gli atomisti al ragionamento di Parmenide?',
     opzioni:['Ne accettano la logica ma ammettono il vuoto',
              'Lo rifiutano in blocco come un puro sofisma',
              'Lo applicano al campo della morale e della polis',
              'Sostengono che i sensi non sbagliano mai'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue la domanda degli eleatici da quella dei Milesi?',
     opzioni:['Chiedono che cosa sia l\'essere, non di che è fatto',
              'Chiedono chi abbia creato il mondo e quando',
              'Studiano l\'anima invece della natura fisica',
              'Cercano le regole della convivenza nella polis'], giusta:0},

    {tipo:'scelta', testo:'Su quale punto Eraclito e Parmenide sono in contrasto più netto?',
     opzioni:['Se sia reale il divenire o l\'essere immobile',
              'Se gli dèi esistano e si occupino di noi',
              'Se la virtù si possa insegnare a chiunque',
              'Se il cosmo sia finito oppure senza limiti'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: chi ha ragione fra Eraclito e Parmenide? Rispondi con una parola.'}
  ]
},
{
  titolo: 'Filosofia antica · 3 — La sofistica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa ti fa venire in mente la parola «sofista»?'},

    {tipo:'scelta', testo:'Che cosa rendeva scandaloso, per Socrate, l\'insegnamento dei sofisti?',
     opzioni:['Che si facessero pagare per la loro sapienza',
              'Che scrivessero in prosa invece che in versi',
              'Che parlassero in pubblico davanti a tutti',
              'Che viaggiassero di città in città'], giusta:0},

    {tipo:'scelta', testo:'Nell\'interpretazione soggettivista, «l\'uomo è misura di tutte le cose» significa che:',
     opzioni:['Se a me pare freddo e a te caldo, vale per due',
              'L\'uomo occupa il centro dell\'universo intero',
              'Solo i sapienti giudicano che cosa sia vero',
              'Le unità di misura sono pure convenzioni'], giusta:0},

    {tipo:'scelta', testo:'In che cosa consiste il criterio dell\'utile di Protagora?',
     opzioni:['Fra opinioni tutte vere si sceglie la più utile alla città',
              'Fra le opinioni si sceglie quella della maggioranza',
              'Fra le opinioni si sceglie quella che giova a chi parla',
              'Fra le opinioni si sceglie la più antica e collaudata'], giusta:0},

    {tipo:'scelta', testo:'Quali sono, nell\'ordine, le tre tesi di Gorgia nel «Sul non-essere»?',
     opzioni:['Nulla è; se fosse non si conoscerebbe; se conosciuto non si direbbe',
              'Tutto scorre; nulla nasce dal nulla; nulla si distrugge davvero',
              'L\'essere è uno; l\'essere è immobile; l\'essere è eterno',
              'Il vero è utile; l\'utile è bello; il bello coincide col giusto'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuole dimostrare Gorgia con l\'Encomio di Elena?',
     opzioni:['Che la retorica può difendere qualunque tesi',
              'Che Elena era davvero innocente dei fatti',
              'Che gli dèi governano le passioni degli uomini',
              'Che il linguaggio descrive fedelmente il reale'], giusta:0},

    {tipo:'scelta', testo:'La distinzione physis / nomos, portata all\'estremo da Callicle, sostiene che:',
     opzioni:['Le leggi le inventano i deboli per frenare i forti',
              'La legge umana e la natura coincidono sempre',
              'Le leggi derivano dagli dèi e sono intoccabili',
              'La natura non è in alcun modo conoscibile'], giusta:0},

    {tipo:'scelta', testo:'In che cosa consiste l\'accusa di autorefutazione mossa da Platone?',
     opzioni:['Se ogni opinione è vera, lo è anche quella di chi lo nega',
              'Che i sofisti si contraddicono continuamente fra loro',
              'Che il relativismo risulta troppo difficile da capire',
              'Che nessuno riesce davvero a metterlo in pratica'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la virtù si può insegnare? Rispondi con una parola.'}
  ]},
{
  titolo: 'Filosofia antica · 4 — Socrate',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa significa per te «essere saggio»? Una parola.'},

    {tipo:'scelta', testo:'In che cosa consiste il «problema socratico»?',
     opzioni:['Non scrisse nulla: lo conosciamo solo da altri',
              'Socrate scrisse molto ma è andato tutto perduto',
              'Le sue opere furono bruciate dopo la condanna',
              'I suoi scritti furono attribuiti ad altri autori'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'elenchos socratico?',
     opzioni:['L\'interrogatorio che smonta le convinzioni altrui',
              'Il discorso lungo che convince l\'assemblea',
              'La preghiera rivolta al dio prima del dialogo',
              'L\'esercizio di memoria praticato dai suoi discepoli'], giusta:0},

    {tipo:'scelta', testo:'Perché la maieutica si chiama così?',
     opzioni:['Aiuta l\'anima a partorire ciò che ha già',
              'Nutre l\'anima con le nozioni che le mancano',
              'Guarisce l\'anima come farebbe un medico',
              'Purifica l\'anima con un rito di iniziazione'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma l\'intellettualismo etico di Socrate?',
     opzioni:['Chi conosce il bene lo fa: sbaglia per ignoranza',
              'Chi conosce il bene può comunque scegliere il male',
              'Il bene si impara con l\'abitudine, non col ragionamento',
              'Il bene cambia secondo la città in cui si vive'], giusta:0},

    {tipo:'scelta', testo:'Qual è la caratteristica del daìmon di Socrate?',
     opzioni:['Non comanda mai: si limita a vietare',
              'Gli detta le risposte da dare agli avversari',
              'Gli appare in sogno la notte prima del processo',
              'Gli impone di occuparsi della vita politica'], giusta:0},

    {tipo:'scelta', testo:'Con quale argomento le Leggi convincono Socrate a non fuggire?',
     opzioni:['Ha goduto settant\'anni di un patto tacito',
              'La fuga sarebbe stata scoperta e punita più duramente',
              'I giudici avrebbero perseguitato la sua famiglia',
              'Un oracolo gli aveva vietato di lasciare la città'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'akrasia, l\'obiezione mossa a Socrate?',
     opzioni:['Si fa il male pur sapendo benissimo che è male',
              'Si fa il bene senza sapere di averlo fatto',
              'Si conosce il bene ma non lo si sa spiegare',
              'Si cambia idea sul bene a seconda dell\'età'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: «una vita senza ricerca non merita di essere vissuta». Sei d\'accordo? Una parola.'}
  ]
},
{
  titolo: 'Filosofia antica · 5 — Platone: le Idee, l\'anima, la città',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: esiste qualcosa di perfetto? Rispondi con una parola.'},

    {tipo:'scelta', testo:'Che rapporto lega le cose sensibili alle Idee?',
     opzioni:['Le cose partecipano dell\'Idea, ne sono copie',
              'Le cose e le Idee sono la medesima realtà',
              'Le Idee derivano per astrazione dalle cose',
              'Le Idee sono i nomi che diamo alle cose'], giusta:0},

    {tipo:'scelta', testo:'Che posto occupa l\'Idea del Bene nella gerarchia?',
     opzioni:['Al vertice: dà essere e verità alle altre',
              'Alla base: è la più semplice fra le Idee',
              'Al centro: fa da tramite fra Idee e cose',
              'Fuori dalla scala: non è una vera Idea'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'anamnesi platonica?',
     opzioni:['Conoscere è ricordare le Idee già viste',
              'Conoscere è raccogliere dati con i cinque sensi',
              'Conoscere è ripetere quanto insegna il maestro',
              'Conoscere è dedurre tutto da pochi principi'], giusta:0},

    {tipo:'scelta', testo:'Nel mito della caverna, che cosa rappresenta il sole?',
     opzioni:['L\'Idea del Bene, che illumina le altre',
              'Il fuoco acceso alle spalle dei prigionieri',
              'La ragione individuale di ciascun uomo',
              'Il maestro che libera dalle catene'], giusta:0},

    {tipo:'scelta', testo:'Perché nel Simposio Eros è un dèmone e non un dio?',
     opzioni:['Figlio di Poros e Penia: desidera ciò che non ha',
              'È nato dopo gli dèi e prima degli uomini',
              'È stato scacciato dall\'Olimpo per via di una colpa',
              'È il più giovane fra gli dèi dell\'amore'], giusta:0},

    {tipo:'scelta', testo:'A quale parte dell\'anima corrisponde la classe dei guerrieri?',
     opzioni:['All\'irascibile: la sua virtù è il coraggio',
              'Alla razionale, la cui virtù è la saggezza',
              'Alla concupiscibile, la cui virtù è la temperanza',
              'A nessuna: i guerrieri stanno fuori dallo schema'], giusta:0},

    {tipo:'scelta', testo:'Che cosa insegna la frase di Lachesi nel mito di Er?',
     opzioni:['La colpa è di chi sceglie, non del dio',
              'Il destino è già scritto e nessuno lo cambia',
              'Gli dèi puniscono chi ha vissuto ingiustamente',
              'L\'anima dimentica tutto prima di rinascere'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: chi dovrebbe governare? Rispondi con una parola.'}
  ]
},
{
  titolo: 'Filosofia antica · 6 — L\'ultimo Platone',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa vuol dire dire il falso? Una parola.'},

    {tipo:'scelta', testo:'Nel Sofista, che cos\'è il non-essere?',
     opzioni:['Il diverso: «non è Y» significa «è altro»',
              'Il nulla assoluto, come sosteneva Parmenide',
              'Un\'illusione prodotta dai sensi ingannevoli',
              'La materia informe che il dio deve plasmare'], giusta:0},

    {tipo:'scelta', testo:'Perché il problema del falso metteva in crisi Platone?',
     opzioni:['Se il non-essere non è, la menzogna non è',
              'Se il falso esiste, allora le Idee non esistono',
              'Se il falso è utile, i sofisti avrebbero ragione',
              'Se tutti mentono, il dialogo diventa inutile'], giusta:0},

    {tipo:'scelta', testo:'In che cosa consiste la diaíresis?',
     opzioni:['Dividere un genere in specie, fino a definire',
              'Confutare l\'avversario mostrandone le contraddizioni',
              'Ricordare le Idee contemplate prima di nascere',
              'Contare quante opinioni diverse esistono su un tema'], giusta:0},

    {tipo:'scelta', testo:'Nel Teeteto, perché «opinione vera» non basta a definire la conoscenza?',
     opzioni:['Si può avere per caso, senza ragionamento',
              'Le opinioni vere in realtà non esistono affatto',
              'Nessuno riesce mai a distinguere il vero dal falso',
              'L\'opinione riguarda le Idee e non le cose'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa il Demiurgo nel Timeo?',
     opzioni:['Plasma la materia caotica sulle Idee',
              'Crea dal nulla il cielo, la terra e gli uomini',
              'Governa il cosmo restando fuori dal tempo',
              'Distrugge il mondo per poi ricostruirlo uguale'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia nelle Leggi rispetto alla Repubblica?',
     opzioni:['Governano le leggi scritte, non i filosofi-re',
              'Governano i più ricchi al posto dei più saggi',
              'Il potere passa interamente all\'assemblea',
              'Lo Stato viene abolito a favore delle famiglie'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'era il «confilosofare» dell\'Accademia?',
     opzioni:['Ricerca in comune, col disaccordo ammesso',
              'Lezione del maestro che i discepoli trascrivevano',
              'Rito di iniziazione riservato a pochi eletti',
              'Gara di eloquenza fra le scuole rivali di Atene'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: è un difetto cambiare idea? Rispondi con una parola.'}
  ]
},
{
  titolo: 'Filosofia antica · 7 — Aristotele: logica e metafisica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: perché una cosa esiste? Una parola.'},

    {tipo:'scelta', testo:'Qual è la critica di Aristotele alle Idee platoniche?',
     opzioni:['Raddoppiano gli enti e non spiegano il moto',
              'Sono troppo poche per spiegare tutte le cose',
              'Non si possono nominare con parole precise',
              'Sono accessibili solo dopo la morte dell\'anima'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il termine medio di un sillogismo?',
     opzioni:['Sta in entrambe le premesse, non in conclusione',
              'È il soggetto che compare nella conclusione',
              'È il predicato che compare nella conclusione',
              'È la premessa considerata più probabile'], giusta:0},

    {tipo:'scelta', testo:'Perché il principio di non contraddizione non si può dimostrare?',
     opzioni:['Chi prova a negarlo lo sta già usando',
              'Perché nessuno finora ci è mai riuscito',
              'Perché vale solo per gli enti materiali',
              'Perché Aristotele lo prese dai matematici'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la sostanza prima per Aristotele?',
     opzioni:['L\'individuo concreto: questo uomo, o cavallo',
              'La specie a cui l\'individuo appartiene',
              'La materia di cui una cosa è composta',
              'L\'Idea eterna di cui la cosa è copia'], giusta:0},

    {tipo:'scelta', testo:'Quale delle quattro cause conta di più per Aristotele?',
     opzioni:['La finale: la natura agisce per uno scopo',
              'La materiale: senza materia non c\'è nulla',
              'L\'efficiente: senza chi agisce non accade nulla',
              'La formale: senza forma la cosa è indeterminata'], giusta:0},

    {tipo:'scelta', testo:'Come spiega Aristotele il movimento, contro Parmenide?',
     opzioni:['È passaggio dalla potenza all\'atto, non dal nulla',
              'È un\'apparenza che la ragione deve smascherare',
              'È l\'urto fra atomi che si muovono nel vuoto',
              'È l\'effetto dell\'attrazione fra i quattro elementi'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'anima secondo l\'ilemorfismo?',
     opzioni:['La forma del corpo, non sostanza separata',
              'Una sostanza immortale imprigionata nel corpo',
              'Un soffio materiale diffuso in tutto il corpo',
              'Il ricordo delle Idee contemplate prima di nascere'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: Platone o Aristotele? Rispondi con una parola.'}
  ]},
{
  titolo: 'Filosofia antica · 8 — Aristotele: etica e politica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cos\'è per te la felicità? Una parola.'},

    {tipo:'scelta', testo:'Come definisce Aristotele l\'eudaimonia?',
     opzioni:['Attività dell\'anima secondo virtù',
              'Somma dei piaceri provati in vita',
              'Assenza completa di ogni turbamento',
              'Riconoscimento ottenuto dagli altri'], giusta:0},

    {tipo:'scelta', testo:'Come si acquistano le virtù etiche?',
     opzioni:['Con l\'abitudine: agendo ripetutamente così',
              'Con l\'insegnamento ricevuto dal maestro',
              'Per dono di natura fin dalla nascita',
              'Per grazia concessa dalla divinità'], giusta:0},

    {tipo:'scelta', testo:'Il giusto mezzo è la mediocrità?',
     opzioni:['No: è eccellenza fra due vizi opposti',
              'Sì: è la via di mezzo più comoda',
              'Sì: sta fra il troppo e il troppo poco',
              'No: è il punto medio fra due numeri'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la frónesis?',
     opzioni:['Trovare il giusto mezzo nel caso concreto',
              'Contemplare i principi eterni e immutabili',
              'Costruire un oggetto seguendo una regola',
              'Ricordare le norme apprese da giovani'], giusta:0},

    {tipo:'scelta', testo:'Quale delle tre amicizie è la vera per Aristotele?',
     opzioni:['Quella per virtù: si ama l\'altro per ciò che è',
              'Quella per utilità: si resta insieme se conviene',
              'Quella per piacere: si sta bene in compagnia',
              'Quella per parentela: il sangue non si sceglie'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire che l\'uomo è zòon politikón?',
     opzioni:['Vive nella polis per natura, non per patto',
              'Vive nella polis per un accordo stipulato',
              'Deve occuparsi per dovere della politica',
              'Sceglie i governanti attraverso il voto'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue le costituzioni rette da quelle deviate?',
     opzioni:['Le rette governano per il bene comune',
              'Le rette hanno un solo capo al vertice',
              'Le rette sono scritte in un documento',
              'Le rette durano più a lungo nel tempo'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: vita contemplativa o vita politica? Una parola.'}
  ]
},
{
  titolo: 'Filosofia antica · 9 — Epicureismo e scetticismo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: di che cosa hai più paura, in una parola?'},

    {tipo:'scelta', testo:'Che cosa cambia nella filosofia con l\'ellenismo?',
     opzioni:['Al centro va il singolo, non più la polis',
              'Al centro va la polis, non più il singolo',
              'Al centro va la natura, non più l\'uomo',
              'Al centro va la logica, non più l\'etica'], giusta:0},

    {tipo:'scelta', testo:'Per Epicuro, da dove nasce l\'errore?',
     opzioni:['Dal giudizio che aggiungiamo alla sensazione',
              'Dalla sensazione, che inganna sempre',
              'Dalla ragione, che va oltre l\'esperienza',
              'Dalla memoria, che deforma il ricordo'], giusta:0},

    {tipo:'scelta', testo:'A che cosa serve il clinamen nella fisica di Epicuro?',
     opzioni:['A spiegare gli incontri fra atomi e la libertà',
              'A spiegare il peso che fa cadere gli atomi',
              'A spiegare perché il vuoto non si riempie',
              'A spiegare la forma sferica degli atomi'], giusta:0},

    {tipo:'scelta', testo:'Quali piaceri preferisce Epicuro?',
     opzioni:['I catastematici: quelli stabili, in quiete',
              'I cinestetici: quelli intensi, in movimento',
              'Quelli del corpo, più immediati e sicuri',
              'Quelli rari, perché più preziosi degli altri'], giusta:0},

    {tipo:'scelta', testo:'Che cosa dice il tetrafarmaco sulla morte?',
     opzioni:['Quando c\'è lei non ci siamo noi',
              'Va accolta come un passaggio necessario',
              'Va temuta perché nessuno sa che cosa segue',
              'Va rimandata il più a lungo possibile'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'epoché degli scettici?',
     opzioni:['Sospendere il giudizio su ogni cosa',
              'Negare con decisione ogni affermazione',
              'Affermare che tutte le opinioni sono vere',
              'Rinviare la decisione a un momento migliore'], giusta:0},

    {tipo:'scelta', testo:'Come risolve Carneade il problema dell\'agire?',
     opzioni:['Si segue il plausibile, senza dirlo vero',
              'Si segue la maggioranza dei sapienti',
              'Si segue l\'abitudine dei propri padri',
              'Si segue ciò che appare più piacevole'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la filosofia serve a vivere meglio? Una parola.'}
  ]
},
{
  titolo: 'Filosofia antica · 10 — Lo stoicismo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa dipende davvero da te? Una parola.'},

    {tipo:'scelta', testo:'Che cos\'è il Logos per gli stoici?',
     opzioni:['Il principio razionale che anima il cosmo',
              'Il discorso con cui si convince l\'assemblea',
              'La legge scritta che regola la città',
              'L\'anima immortale di ciascun uomo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono gli adiaphora?',
     opzioni:['Salute e ricchezza: né beni né mali',
              'Le virtù dell\'anima, uniche cose buone',
              'I vizi che rovinano il carattere',
              'Le leggi che cambiano da città a città'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono le passioni secondo gli stoici?',
     opzioni:['Giudizi falsi, e quindi correggibili',
              'Forze naturali che travolgono la ragione',
              'Movimenti del corpo del tutto involontari',
              'Doni della divinità da assecondare'], giusta:0},

    {tipo:'scelta', testo:'Che cosa significa apatheia?',
     opzioni:['Dominio razionale, non insensibilità',
              'Insensibilità totale verso ogni cosa',
              'Indifferenza morale verso il prossimo',
              'Rinuncia a qualunque forma di azione'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la rappresentazione catalettica?',
     opzioni:['Quella che coglie l\'oggetto com\'è davvero',
              'Quella che inganna e va sempre respinta',
              'Quella che nasce dal solo ragionamento',
              'Quella che il saggio sospende per prudenza'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa si fonda il cosmopolitismo stoico?',
     opzioni:['Tutti partecipano dello stesso Logos',
              'Tutti obbediscono alle stesse leggi scritte',
              'Tutti discendono dagli stessi antenati',
              'Tutti parlano in fondo la stessa lingua'], giusta:0},

    {tipo:'scelta', testo:'Perché per Epitteto lo schiavo può essere libero?',
     opzioni:['Il padrone incatena il corpo, non i giudizi',
              'Il padrone prima o poi lo affrancherà',
              'La legge romana gli riconosce dei diritti',
              'La schiavitù è solo una condizione passeggera'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: si può essere felici in carcere? Una parola.'}
  ]
},
{
  titolo: 'Filosofia antica · 11 — Il neoplatonismo e Plotino',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: da dove viene tutto? Una parola.'},

    {tipo:'scelta', testo:'Perché dell\'Uno non si può dire nulla?',
     opzioni:['Ogni predicato vi introdurrebbe una divisione',
              'Nessuno lo ha mai visto né contemplato',
              'La sua natura è tenuta segreta ai profani',
              'Il linguaggio umano è troppo povero'], giusta:0},

    {tipo:'scelta', testo:'Quali sono le tre ipostasi, nell\'ordine?',
     opzioni:['Uno, Intelletto, Anima',
              'Uno, Anima, Intelletto',
              'Anima, Intelletto, Materia',
              'Intelletto, Uno, Materia'], giusta:0},

    {tipo:'scelta', testo:'Con quale immagine Plotino spiega l\'emanazione?',
     opzioni:['Il sole che irradia senza perdere luce',
              'L\'artigiano che plasma la materia grezza',
              'Il seme che germoglia e diventa pianta',
              'Il fiume che si divide in tanti rami'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il male per Plotino?',
     opzioni:['Privazione di essere, non un principio',
              'Un principio eterno che lotta col bene',
              'Una scelta libera della volontà umana',
              'Una punizione inflitta dalla divinità'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'estasi plotiniana?',
     opzioni:['Contatto con l\'Uno oltre il pensiero',
              'Ragionamento che dimostra l\'esistenza dell\'Uno',
              'Visione concessa soltanto dopo la morte',
              'Rito celebrato dalla comunità dei discepoli'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue l\'emanazione dalla creazione cristiana?',
     opzioni:['È necessaria, non un atto di volontà',
              'È libera, mentre la creazione è necessaria',
              'Parte da una materia già esistente',
              'Riguarda solo le anime, non il mondo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sostiene Giustino sui filosofi greci?',
     opzioni:['Il Logos operava già in loro senza saperlo',
              'Erano tutti nemici della vera religione',
              'Copiarono le loro dottrine dalla Bibbia',
              'Vanno letti solo dopo aver ricevuto il battesimo'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: si può conoscere ciò di cui non si può parlare? Una parola.'}
  ]
},
{
  titolo: 'Filosofia antica · 12 — Agostino d\'Ippona',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cos\'è il tempo? Rispondi con una parola.'},

    {tipo:'scelta', testo:'Che cosa dimostra il «si fallor, sum»?',
     opzioni:['Chi dubita esiste, proprio perché dubita',
              'Chi dubita non potrà mai sapere nulla',
              'Chi si inganna va comunque perdonato',
              'Chi crede non ha bisogno di dimostrare'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'illuminazione agostiniana?',
     opzioni:['Dio illumina la mente come il sole gli occhi',
              'L\'anima ricorda le Idee viste prima di nascere',
              'I sensi raccolgono i dati che la mente ordina',
              'Il maestro trasmette il sapere al discepolo'], giusta:0},

    {tipo:'scelta', testo:'Perché Agostino abbandona il manicheismo?',
     opzioni:['Se Dio è buono, il male non può essere principio',
              'Perché i manichei rifiutavano di battezzarlo',
              'Perché sua madre Monica glielo aveva proibito',
              'Perché ad Ambrogio la dottrina non piaceva'], giusta:0},

    {tipo:'scelta', testo:'Dove esiste il tempo, secondo le Confessioni?',
     opzioni:['Nell\'anima: memoria, attenzione, attesa',
              'Nel cielo: nel moto regolare degli astri',
              'In Dio: che lo scandisce dall\'eternità',
              'Nelle cose: che nascono e poi muoiono'], giusta:0},

    {tipo:'scelta', testo:'Come rispecchia l\'anima la Trinità?',
     opzioni:['Memoria, intelletto e volontà',
              'Ragione, coraggio e desiderio',
              'Nascita, vita e morte del corpo',
              'Fede, speranza e carità cristiane'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue le due città di Agostino?',
     opzioni:['L\'amore di Dio contro l\'amore di sé',
              'La Chiesa contro lo Stato terreno',
              'I ricchi contro i poveri della terra',
              'I cristiani contro i pagani di Roma'], giusta:0},

    {tipo:'scelta', testo:'Che cosa significa «credo ut intelligam»?',
     opzioni:['La fede precede e guida la ragione',
              'La ragione va prima di ogni fede',
              'La fede sostituisce del tutto la ragione',
              'La ragione dimostra i dogmi della fede'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: il male esiste davvero, o è solo un\'assenza? Una parola.'}
  ]},
{
  titolo: 'Storia medievale · 1 — La ripresa dopo l\'anno Mille',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa immagini quando senti «anno Mille»? Una parola.'},

    {tipo:'scelta', testo:'I «terrori dell\'anno Mille» sono un fatto storico?',
     opzioni:['No: è una leggenda inventata nell\'Ottocento',
              'Sì: le cronache del tempo li descrivono',
              'Sì: la Chiesa annunciò la fine del mondo',
              'No: se ne parlò solo qualche decennio dopo'], giusta:0},

    {tipo:'scelta', testo:'Quale innovazione moltiplica per cinque la forza di tiro del cavallo?',
     opzioni:['Il collare rigido appoggiato sulle spalle',
              'La ferratura degli zoccoli con i chiodi',
              'Il versoio che rivolta la zolla arata',
              'La rotazione dei campi su tre anni'], giusta:0},

    {tipo:'scelta', testo:'Qual è il vantaggio della rotazione triennale?',
     opzioni:['Riposa un terzo dei campi invece di metà',
              'Riposa metà dei campi invece di un terzo',
              'Consente di seminare lo stesso cereale',
              'Elimina del tutto il bisogno di riposo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa significa «Stadtluft macht frei»?',
     opzioni:['Un servo in città un anno e un giorno è libero',
              'Chi respira l\'aria di città diventa più sano',
              'In città non si pagano tributi al signore',
              'Il signore non può entrare dentro le mura'], giusta:0},

    {tipo:'scelta', testo:'Quali sono le quattro città marinare italiane?',
     opzioni:['Venezia, Genova, Pisa, Amalfi',
              'Venezia, Genova, Napoli, Bari',
              'Venezia, Ancona, Pisa, Palermo',
              'Genova, Livorno, Amalfi, Messina'], giusta:0},

    {tipo:'scelta', testo:'A che cosa serviva la lettera di cambio?',
     opzioni:['Pagare a distanza senza portare monete',
              'Cambiare le monete di paesi diversi',
              'Registrare i debiti verso la Chiesa',
              'Certificare il peso dell\'oro in un sacco'], giusta:0},

    {tipo:'scelta', testo:'Dove si incontravano il commercio del Nord e quello del Sud?',
     opzioni:['Alle fiere della Champagne, in Francia',
              'Ai mercati di Costantinopoli, in Oriente',
              'Nei porti della Sicilia normanna',
              'Alle fiere di Firenze, in Toscana'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: qual è stata la causa più importante della ripresa? Una parola.'}
  ]
},
{
  titolo: 'Storia medievale · 2 — La lotta per le investiture',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: chi dovrebbe comandare, il potere politico o quello religioso? Una parola.'},

    {tipo:'scelta', testo:'Perché i vescovi stavano al centro dello scontro?',
     opzioni:['Erano signori feudali con terre ed eserciti',
              'Erano gli unici a saper leggere e scrivere',
              'Erano eletti direttamente dai fedeli',
              'Erano parenti stretti dell\'imperatore'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la simonia?',
     opzioni:['La compravendita delle cariche di Chiesa',
              'La convivenza dei preti con le donne',
              'La nomina dei vescovi da parte del re',
              'La vendita delle terre di un monastero'], giusta:0},

    {tipo:'scelta', testo:'Qual è la novità del monastero di Cluny?',
     opzioni:['Dipende dal papa, non dal signore locale',
              'Dipende dal vescovo della sua diocesi',
              'Accoglie soltanto monaci di nobile origine',
              'Rifiuta ogni proprietà anche collettiva'], giusta:0},

    {tipo:'scelta', testo:'Che cosa stabilisce il Decretum del 1059?',
     opzioni:['Il papa lo eleggono i cardinali, non l\'imperatore',
              'Il papa lo elegge il popolo romano riunito',
              'L\'imperatore conferma l\'elezione del papa',
              'Il papa designa da vivo il proprio successore'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma il Dictatus papae del 1075?',
     opzioni:['Il papa può deporre l\'imperatore',
              'L\'imperatore può deporre il papa',
              'Il papa e l\'imperatore sono pari grado',
              'I vescovi li nomina il popolo cristiano'], giusta:0},

    {tipo:'scelta', testo:'Perché Enrico IV va a Canossa?',
     opzioni:['I principi tedeschi stavano per deporlo',
              'Voleva chiedere aiuto militare al papa',
              'Il papa lo aveva convocato per giudizio',
              'Cercava rifugio dopo una sconfitta in guerra'], giusta:0},

    {tipo:'scelta', testo:'Che compromesso trova il Concordato di Worms?',
     opzioni:['All\'imperatore il feudo, al papa il pastorale',
              'All\'imperatore tutto, al papa nulla',
              'Al papa tutto, all\'imperatore nulla',
              'Ai principi tedeschi la scelta dei vescovi'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: chi ha vinto davvero questo scontro? Una parola.'}
  ]
},
{
  titolo: 'Storia medievale · 3 — Le crociate',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa spinge una persona a partire per la guerra? Una parola.'},

    {tipo:'scelta', testo:'Che cosa prometteva Urbano II a chi partiva?',
     opzioni:['L\'assoluzione totale di tutti i peccati',
              'Un feudo da amministrare in Terrasanta',
              'Il pagamento delle spese del viaggio',
              'Il titolo di cavaliere al ritorno'], giusta:0},

    {tipo:'scelta', testo:'Quale causa sociale spingeva i cavalieri a partire?',
     opzioni:['I cadetti restavano esclusi dall\'eredità',
              'I nobili erano perseguitati dai re',
              'I cavalieri non trovavano più guerre',
              'Le famiglie li obbligavano a partire'], giusta:0},

    {tipo:'scelta', testo:'Come finisce la crociata dei pezzenti?',
     opzioni:['Distrutta dai Turchi già in Anatolia',
              'Conquista Gerusalemme prima degli altri',
              'Si ferma in Ungheria e torna indietro',
              'Si unisce all\'esercito regolare a Nicea'], giusta:0},

    {tipo:'scelta', testo:'Che cosa accade a Gerusalemme il 14 luglio 1099?',
     opzioni:['I crociati la prendono e fanno un massacro',
              'I crociati la ottengono trattando col sultano',
              'I bizantini la riconquistano per primi',
              'Saladino la difende e respinge l\'assedio'], giusta:0},

    {tipo:'scelta', testo:'Che cosa succede nel 1187 ai Corni di Hattin?',
     opzioni:['Saladino batte i crociati e riprende Gerusalemme',
              'I crociati sconfiggono Saladino in campo aperto',
              'Federico Barbarossa muore attraversando un fiume',
              'Riccardo Cuor di Leone conquista l\'isola di Cipro'], giusta:0},

    {tipo:'scelta', testo:'Perché la Quarta Crociata finisce a Costantinopoli?',
     opzioni:['I crociati non potevano pagare le navi veneziane',
              'Il papa aveva ordinato di punire i bizantini',
              'La strada per Gerusalemme era stata chiusa',
              'L\'imperatore bizantino li aveva attaccati per primo'], giusta:0},

    {tipo:'scelta', testo:'Come ottiene Gerusalemme Federico II nel 1229?',
     opzioni:['Trattando col sultano, senza combattere',
              'Vincendo una grande battaglia in Egitto',
              'Pagando un riscatto ai Mamelucchi',
              'Sposando la figlia del sultano d\'Egitto'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: le crociate sono state un fallimento? Una parola.'}
  ]},
{
  titolo: 'Storia medievale · 4 — L\'Italia comunale e l\'Impero',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa tiene insieme una città? Una parola.'},

    {tipo:'scelta', testo:'Su che cosa si fonda il Comune?',
     opzioni:['Su un giuramento pubblico fra cittadini',
              'Su una concessione firmata dal vescovo',
              'Su un privilegio rilasciato dall\'imperatore',
              'Su un\'elezione a suffragio fra i nobili'], giusta:0},

    {tipo:'scelta', testo:'Perché il podestà doveva essere forestiero?',
     opzioni:['Per restare imparziale fra le famiglie',
              'Per portare con sé un esercito proprio',
              'Perché lo imponeva la legge imperiale',
              'Perché nessun cittadino accettava l\'incarico'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue guelfi e ghibellini in Italia?',
     opzioni:['Chi sta col papa e chi con l\'imperatore',
              'Chi sta coi nobili e chi coi mercanti',
              'Chi vuole la pace e chi vuole la guerra',
              'Chi abita in città e chi nel contado'], giusta:0},

    {tipo:'scelta', testo:'Che cosa stabilisce la Constitutio de regalibus?',
     opzioni:['Moneta, tasse e giustizia solo all\'imperatore',
              'Moneta, tasse e giustizia restano ai Comuni',
              'Ogni città elegge da sé il proprio podestà',
              'I vescovi tornano a governare le città'], giusta:0},

    {tipo:'scelta', testo:'Che cosa succede a Milano nel 1162?',
     opzioni:['Barbarossa la rade al suolo dopo l\'assedio',
              'Milano sconfigge Barbarossa in campo aperto',
              'Milano accetta il podestà imperiale',
              'Milano fonda la città di Alessandria'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il carroccio?',
     opzioni:['Un carro con le insegne e la campana',
              'Una macchina per abbattere le mura',
              'Il seggio su cui sedeva il podestà',
              'Il carro che portava le tasse al re'], giusta:0},

    {tipo:'scelta', testo:'Che cosa ottengono i Comuni con la Pace di Costanza?',
     opzioni:['Autonomia interna, sovranità formale al re',
              'Indipendenza piena e rottura con l\'Impero',
              'Il diritto di eleggere loro l\'imperatore',
              'L\'esenzione da ogni tributo per cent\'anni'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: perché i fanti hanno battuto i cavalieri a Legnano? Una parola.'}
  ]
},
{
  titolo: 'Storia medievale · 5 — Papato, Impero e monarchie nazionali',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa rende legittimo il potere di un re? Una parola.'},

    {tipo:'scelta', testo:'Con quale immagine Innocenzo III spiega il rapporto papa-imperatore?',
     opzioni:['Il papa è il sole, l\'imperatore la luna',
              'Il papa è la luna, l\'imperatore il sole',
              'Il papa è il pastore, l\'imperatore il gregge',
              'Il papa è la testa, l\'imperatore le braccia'], giusta:0},

    {tipo:'scelta', testo:'Perché Innocenzo III appoggia Federico II?',
     opzioni:['Lo credeva un candidato facile da controllare',
              'Era il legittimo erede per diritto di sangue',
              'Glielo avevano chiesto i principi tedeschi',
              'Aveva promesso di partire per la crociata'], giusta:0},

    {tipo:'scelta', testo:'Che cosa creano le Costituzioni melfitane?',
     opzioni:['Uno Stato con funzionari e giustizia regia',
              'Una monarchia elettiva coi baroni al comando',
              'Una repubblica di città autonome in Sicilia',
              'Un regno diviso in feudi ereditari'], giusta:0},

    {tipo:'scelta', testo:'Perché Federico II fonda l\'Università di Napoli?',
     opzioni:['Per formare i funzionari del proprio Stato',
              'Per fare concorrenza a quella di Bologna',
              'Per ospitare i maestri cacciati da Parigi',
              'Per obbedire a una richiesta del papa'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa Federico II del carroccio di Milano?',
     opzioni:['Lo manda a Roma trainato da un elefante',
              'Lo brucia sul campo davanti ai prigionieri',
              'Lo restituisce in cambio della resa',
              'Lo conserva nel castello di Melfi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono i Vespri Siciliani?',
     opzioni:['La rivolta del 1282 contro gli Angioini',
              'La rivolta dei baroni contro Federico II',
              'La congiura che uccise il figlio di Manfredi',
              'Il patto fra Sicilia e Aragona del 1302'], giusta:0},

    {tipo:'scelta', testo:'Che principio afferma la Magna Carta del 1215?',
     opzioni:['Nessuna tassa senza il consenso dei baroni',
              'Ogni suddito ha diritto di voto in Parlamento',
              'Il re viene eletto dall\'assemblea dei nobili',
              'La Chiesa non paga tributi alla corona'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: Federico II, «stupore del mondo» o sconfitto? Una parola.'}
  ]},
{
  titolo: 'Storia medievale · 6 — Le civiltà extraeuropee',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa rende «avanzata» una civiltà? Una parola.'},

    {tipo:'scelta', testo:'Su che cosa si basava il calendario maya?',
     opzioni:['Sull\'anno solare di trecentosessantacinque giorni',
              'Sulle fasi della luna e sui mesi lunari',
              'Sul ciclo delle piene dei fiumi locali',
              'Sui regni dei sovrani che si succedevano'], giusta:0},

    {tipo:'scelta', testo:'Perché gli Aztechi erano in guerra permanente?',
     opzioni:['Servivano prigionieri da sacrificare agli dèi',
              'Volevano estendere i confini fino al mare',
              'Dovevano difendersi dalle tribù del nord',
              'Cercavano nuove miniere d\'oro e d\'argento'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono i quipu degli Inca?',
     opzioni:['Cordicelle annodate per registrare i dati',
              'Le stazioni di posta lungo le strade andine',
              'I terrazzamenti coltivati sui fianchi dei monti',
              'I sacerdoti che servivano il dio Sole'], giusta:0},

    {tipo:'scelta', testo:'Che cosa mancava a tutte le civiltà precolombiane?',
     opzioni:['La ruota, il cavallo e gli attrezzi di metallo',
              'La scrittura, il calendario e la matematica',
              'Le città fortificate e le strade lastricate',
              'L\'agricoltura irrigua e l\'allevamento'], giusta:0},

    {tipo:'scelta', testo:'Che cosa significa «Sahel» in arabo?',
     opzioni:['Costa: il Sahara è l\'oceano, il Sahel la riva',
              'Deserto: la terra dove non cresce nulla',
              'Fiume: il corso d\'acqua che porta l\'oro',
              'Mercato: il luogo dove finiscono le carovane'], giusta:0},

    {tipo:'scelta', testo:'Quali invenzioni vengono dalla Cina dei Song?',
     opzioni:['Polvere da sparo, stampa, bussola e ghisa',
              'Carta moneta, vetro soffiato e orologio',
              'Aratro pesante, mulino a vento e staffa',
              'Astrolabio, numeri arabi e algebra'], giusta:0},

    {tipo:'scelta', testo:'Perché i Mongoli non arrivarono a Vienna?',
     opzioni:['Morì il khan e tornarono a eleggerne un altro',
              'Furono sconfitti dai principi tedeschi',
              'Le mura della città resistettero all\'assedio',
              'Una pestilenza decimò il loro esercito'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: che cosa avrebbe imparato l\'Europa se avesse ascoltato Marco Polo? Una parola.'}
  ]},
{
  titolo: 'Storia medievale · 7 — La crisi del Trecento',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: la parola «crisi» che cosa ti fa venire in mente? Una parola.'},

    {tipo:'scelta', testo:'Che cosa significa «crisi» nel senso originario greco?',
     opzioni:['Separare e giudicare: una fase di passaggio',
              'Cadere in rovina senza più risollevarsi',
              'Mancare del necessario per sopravvivere',
              'Combattere fra due parti in conflitto'], giusta:0},

    {tipo:'scelta', testo:'Quale effetto ebbe la piccola glaciazione sull\'agricoltura?',
     opzioni:['Distrusse i raccolti di cereali per anni',
              'Rese coltivabili le terre del Nord Europa',
              'Favorì la diffusione della vite in Germania',
              'Allungò la stagione utile per la semina'], giusta:0},

    {tipo:'scelta', testo:'Perché falliscono i Bardi e i Peruzzi di Firenze?',
     opzioni:['I re a cui avevano prestato non restituiscono',
              'Un incendio distrusse i loro depositi d\'oro',
              'I clienti ritirarono tutti i loro depositi',
              'Il Comune di Firenze confiscò i loro beni'], giusta:0},

    {tipo:'scelta', testo:'Come arriva la peste in Europa?',
     opzioni:['Dai mercanti genovesi in fuga da Caffa',
              'Dalle navi arabe che approdano a Venezia',
              'Dai crociati di ritorno dalla Terrasanta',
              'Dai pellegrini reduci da Santiago'], giusta:0},

    {tipo:'scelta', testo:'Quanta popolazione europea muore nell\'epidemia del 1348?',
     opzioni:['Circa un terzo del totale',
              'Circa un decimo del totale',
              'Circa la metà del totale',
              'Circa due terzi del totale'], giusta:0},

    {tipo:'scelta', testo:'Perché dopo la peste i salari dei contadini salgono?',
     opzioni:['I lavoratori sono pochi e possono trattare',
              'I signori diventano più generosi per pietà',
              'Il re impone per legge salari più alti',
              'La terra rende molto di più di prima'], giusta:0},

    {tipo:'scelta', testo:'Che cosa chiedevano i Ciompi nel 1378?',
     opzioni:['Una propria Arte e voce nel governo',
              'La fine della servitù della gleba',
              'L\'abolizione della tassa sul macinato',
              'Il ritorno dei Medici al potere'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: come può un secolo così terribile produrre Giotto e Boccaccio? Una parola.'}
  ]},
{
  titolo: 'Storia medievale · 8 — La crisi dei poteri universali',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa succede quando due autorità pretendono di comandare? Una parola.'},

    {tipo:'scelta', testo:'Che cosa istituisce Bonifacio VIII nel 1300?',
     opzioni:['Il primo Giubileo della storia cristiana',
              'Il primo tribunale contro gli eretici',
              'La prima università fondata da un papa',
              'Il primo concilio ecumenico a Roma'], giusta:0},

    {tipo:'scelta', testo:'Come reagisce Filippo il Bello alla bolla Unam Sanctam?',
     opzioni:['Manda i suoi uomini a schiaffeggiare il papa',
              'Fa incoronare un antipapa a Parigi',
              'Rinuncia a tassare il clero francese',
              'Parte per una crociata contro Roma'], giusta:0},

    {tipo:'scelta', testo:'Perché si parla di «cattività» avignonese?',
     opzioni:['Richiama la prigionia degli ebrei a Babilonia',
              'I papi erano prigionieri del re di Francia',
              'Avignone era circondata da mura invalicabili',
              'I cardinali non potevano lasciare la città'], giusta:0},

    {tipo:'scelta', testo:'A quanti papi contemporanei si arriva con lo Scisma?',
     opzioni:['Tre, dopo il Concilio di Pisa del 1409',
              'Due, e mai più di due in nessun momento',
              'Quattro, uno per ciascun grande regno',
              'Cinque, prima del Concilio di Costanza'], giusta:0},

    {tipo:'scelta', testo:'Che cosa stabilisce la Bolla d\'Oro del 1356?',
     opzioni:['Sette principi eleggono l\'imperatore',
              'L\'imperatore designa il proprio erede',
              'Il papa conferma l\'elezione imperiale',
              'Le città libere votano per l\'imperatore'], giusta:0},

    {tipo:'scelta', testo:'Perché gli Inglesi vincono a Crécy e Poitiers?',
     opzioni:['Gli arcieri col long bow battono la cavalleria',
              'Hanno più cavalieri pesanti dei Francesi',
              'Usano per primi i cannoni da assedio',
              'Il re di Francia tradisce i suoi alleati'], giusta:0},

    {tipo:'scelta', testo:'Che cosa ottiene Giovanna d\'Arco nel 1429?',
     opzioni:['Libera Orléans e fa incoronare Carlo VII',
              'Riconquista Parigi occupata dagli Inglesi',
              'Ottiene la pace firmata a Troyes',
              'Costringe gli Inglesi a lasciare Calais'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: le guerre distruggono le nazioni o le creano? Una parola.'}
  ]},
{
  titolo: 'Storia medievale · 9 — L\'Italia degli Stati regionali',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: perché una città rinuncia a governarsi da sé? Una parola.'},

    {tipo:'scelta', testo:'Come nasce di solito la Signoria?',
     opzioni:['I cittadini stessi prolungano la carica di un uomo',
              'Un esercito straniero occupa la città',
              'L\'imperatore la impone dall\'alto per decreto',
              'Il vescovo cede il potere al signore locale'], giusta:0},

    {tipo:'scelta', testo:'Quando la Signoria diventa Principato?',
     opzioni:['Quando il titolo è ereditario e riconosciuto',
              'Quando il signore conquista una seconda città',
              'Quando il Comune viene abolito per legge',
              'Quando il signore assume il titolo di re'], giusta:0},

    {tipo:'scelta', testo:'Che cosa stabilisce la Serrata veneziana del 1297?',
     opzioni:['Solo le famiglie del Libro d\'Oro governano',
              'Il doge resta in carica soltanto un anno',
              'I mercanti stranieri non entrano in laguna',
              'Il Consiglio dei Dieci elegge il doge'], giusta:0},

    {tipo:'scelta', testo:'Come governa Cosimo de\' Medici a Firenze?',
     opzioni:['Tiene le istituzioni e mette i suoi negli uffici',
              'Abolisce il Comune e si proclama duca',
              'Si fa nominare podestà a vita dall\'arengo',
              'Governa tramite un consiglio di banchieri'], giusta:0},

    {tipo:'scelta', testo:'Come finisce la congiura dei Pazzi del 1478?',
     opzioni:['Giuliano ucciso, Lorenzo salvo e più forte',
              'Entrambi i fratelli Medici vengono uccisi',
              'I Medici sono cacciati da Firenze',
              'Il papa scomunica l\'intera città'], giusta:0},

    {tipo:'scelta', testo:'Su quale principio si regge la Pace di Lodi?',
     opzioni:['Se uno cresce troppo, gli altri si coalizzano',
              'Ogni Stato rinuncia a mantenere un esercito',
              'Il papa arbitra ogni controversia fra Stati',
              'I confini vengono ridisegnati ogni dieci anni'], giusta:0},

    {tipo:'scelta', testo:'Chi invita Carlo VIII a scendere in Italia nel 1494?',
     opzioni:['Ludovico il Moro, per usarlo contro i rivali',
              'Il papa Alessandro VI, per punire Napoli',
              'La Repubblica di Venezia, per fermare Milano',
              'Piero de\' Medici, per riprendere Firenze'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: l\'equilibrio fra Stati è forza o fragilità? Una parola.'}
  ]},
{
  titolo: 'Storia medievale · 10 — La frontiera mediterranea e gli Ottomani',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa succede quando cade un impero millenario? Una parola.'},

    {tipo:'scelta', testo:'Perché l\'Impero bizantino non riesce più a difendersi?',
     opzioni:['Il territorio ridotto non produce tasse a sufficienza',
              'Ha perso ogni contatto con l\'Occidente cristiano',
              'La popolazione si era convertita all\'islam',
              'I suoi eserciti erano fatti solo di mercenari'], giusta:0},

    {tipo:'scelta', testo:'Che cosa prepara Maometto II per prendere Costantinopoli?',
     opzioni:['Cannoni capaci di abbattere le mura millenarie',
              'Una flotta più numerosa di quella veneziana',
              'Un\'alleanza segreta con i mercanti genovesi',
              'Un lungo blocco navale per affamare la città'], giusta:0},

    {tipo:'scelta', testo:'Che cosa accade il 29 maggio 1453?',
     opzioni:['Cade Costantinopoli e muore l\'ultimo imperatore',
              'Gli Ottomani vengono respinti sotto le mura',
              'I Veneziani riconquistano la città ai Turchi',
              'Il patriarca ortodosso fugge a Mosca'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il devsirme ottomano?',
     opzioni:['Il prelievo di bambini cristiani dai Balcani',
              'La tassa pagata dai sudditi non musulmani',
              'Il codice di leggi emanato da Maometto II',
              'Il consiglio che affiancava il sultano'], giusta:0},

    {tipo:'scelta', testo:'Che cosa garantisce il sistema dei millet?',
     opzioni:['Autonomia interna a ogni comunità religiosa',
              'Uguaglianza fiscale fra tutti i sudditi',
              'Libertà di commercio in tutto l\'Impero',
              'Il diritto di eleggere i governatori locali'], giusta:0},

    {tipo:'scelta', testo:'Dove si ferma l\'avanzata di Solimano nel 1529?',
     opzioni:['Sotto le mura di Vienna, che resiste',
              'A Mohács, dove è sconfitto dagli Ungheresi',
              'A Belgrado, che non riesce a espugnare',
              'A Rodi, difesa dai Cavalieri di San Giovanni'], giusta:0},

    {tipo:'scelta', testo:'Che cosa accade in Spagna nel 1492, oltre alla caduta di Granada?',
     opzioni:['Gli ebrei vengono espulsi e Colombo salpa',
              'Nasce l\'Inquisizione affidata a Torquemada',
              'Ferdinando e Isabella si sposano unendo i regni',
              'La Spagna conquista il regno di Napoli'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la tolleranza conviene o indebolisce uno Stato? Una parola.'}
  ]},
{
  titolo: 'Storia medievale · 11 — Il Nuovo Mondo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: «scoperta» o «conquista»? Scrivi la parola che scegli.'},

    {tipo:'scelta', testo:'Perché gli Europei cercano nuove rotte per l\'Oriente?',
     opzioni:['Gli Ottomani controllano le vie di terra',
              'Le spezie asiatiche stavano per esaurirsi',
              'Le navi non reggevano più il Mediterraneo',
              'Il papa aveva vietato i commerci con l\'islam'], giusta:0},

    {tipo:'scelta', testo:'Che cosa apre la circumnavigazione di Bartolomeo Diaz (1487-88)?',
     opzioni:['La rotta africana verso l\'Oceano Indiano',
              'Il primo scalo portoghese in India',
              'La colonizzazione dell\'isola di Madera',
              'Il passaggio dall\'Atlantico al Pacifico'], giusta:0},

    {tipo:'scelta', testo:'Che cosa ottiene Colombo con le Capitolazioni di Santa Fe?',
     opzioni:['Titoli di ammiraglio e viceré, più un decimo',
              'Cinque navi armate a spese della corona',
              'Il monopolio del commercio delle spezie',
              'Il perdono dei debiti verso i Genovesi'], giusta:0},

    {tipo:'scelta', testo:'Perché il continente si chiama America e non Colombia?',
     opzioni:['Vespucci capì per primo che era terra nuova',
              'Vespucci vi sbarcò prima di Colombo',
              'Colombo rifiutò di dare il proprio nome',
              'Waldseemüller ignorava chi fosse Colombo'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa punta Cortés per abbattere l\'Impero azteco?',
     opzioni:['Sull\'odio dei popoli sottomessi dagli Aztechi',
              'Sulla superiorità numerica dei suoi soldati',
              'Sul blocco navale del porto di Tenochtitlán',
              'Sull\'appoggio militare del re di Spagna'], giusta:0},

    {tipo:'scelta', testo:'Che cosa causò il crollo maggiore della popolazione indigena?',
     opzioni:['Le malattie europee, contro cui non c\'era immunità',
              'Le battaglie campali contro i conquistadores',
              'La fuga di massa verso le regioni interne',
              'La carestia seguita alla fine dell\'agricoltura'], giusta:0},

    {tipo:'scelta', testo:'Che cosa denuncia Bartolomé de Las Casas?',
     opzioni:['I massacri e i lavori forzati imposti agli indigeni',
              'La spartizione del mondo fatta a Tordesillas',
              'L\'arrivo degli schiavi africani nelle Americhe',
              'L\'avidità dei mercanti genovesi e veneziani'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: si può giudicare il passato con i valori di oggi? Una parola.'}
  ]},
{
  titolo: 'Filosofia medievale · 1 — La filosofia nel Medioevo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: la fede aiuta la ragione o la ostacola? Una parola.'},

    {tipo:'scelta', testo:'Che cosa significa che la filosofia è «ancilla theologiae»?',
     opzioni:['Serve alla teologia per approfondire la fede',
              'Sostituisce la teologia nelle scuole del tempo',
              'Va tenuta separata dalle questioni religiose',
              'Deve essere insegnata solo dopo la teologia'], giusta:0},

    {tipo:'scelta', testo:'Come risolve Boezio il conflitto fra prescienza divina e libertà?',
     opzioni:['Dio non vede nel tempo: vede tutto nell\'eternità',
              'Dio conosce le scelte ma decide di non guardarle',
              'La libertà umana è solo un\'illusione della mente',
              'Dio prevede gli eventi ma non le nostre intenzioni'], giusta:0},

    {tipo:'scelta', testo:'Che cosa scrive Boezio in carcere, prima di essere giustiziato?',
     opzioni:['La Consolazione della filosofia, in prosa e versi',
              'La traduzione latina dell\'Organon di Aristotele',
              'Un commento all\'Isagoge del filosofo Porfirio',
              'Il Periphyseon, sistema in cinque libri'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa si regge l\'argomento ontologico di Anselmo?',
     opzioni:['Chi esiste davvero è maggiore di chi è solo pensato',
              'L\'ordine del mondo rimanda per forza a un ordinatore',
              'Ogni cosa che si muove è mossa da qualcosa d\'altro',
              'La perfezione del creato dimostra un creatore perfetto'], giusta:0},

    {tipo:'scelta', testo:'Che cosa obietta Gaunilone ad Anselmo?',
     opzioni:['Allora esisterebbe anche l\'isola più perfetta pensabile',
              'Che la fede non ha alcun bisogno di essere dimostrata',
              'Che lo stolto del Salmo non capisce affatto la parola Dio',
              'Che l\'esistenza non è una qualità come le altre'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sostiene il concettualismo di Abelardo sugli universali?',
     opzioni:['Sono concetti mentali con un fondamento nelle cose',
              'Sono sostanze reali che esistono oltre gli individui',
              'Sono soltanto nomi, cioè semplici suoni di voce',
              'Sono idee poste da Dio nella mente di ciascuno'], giusta:0},

    {tipo:'scelta', testo:'Dove sta il peccato, secondo l\'etica di Abelardo?',
     opzioni:['Nel consenso interiore, non nell\'atto compiuto',
              'Nell\'atto esterno, comunque lo si sia compiuto',
              'Nel danno che l\'azione produce agli altri uomini',
              'Nella disobbedienza a un\'autorità riconosciuta'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: conta di più l\'intenzione o il risultato di un\'azione? Una parola.'}
  ]},
{
  titolo: 'Filosofia medievale · 2 — Tommaso d\'Aquino',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: si può dimostrare Dio con la ragione? Una parola.'},

    {tipo:'scelta', testo:'Perché il ritorno di Aristotele nel XIII secolo crea un problema?',
     opzioni:['È un pagano e certe sue tesi urtano la fede',
              'I suoi testi arrivano in arabo e nessuno li traduce',
              'La Chiesa ne aveva vietato la lettura nelle scuole',
              'Contraddice apertamente la filosofia di Platone'], giusta:0},

    {tipo:'scelta', testo:'Che rapporto pone Tommaso fra fede e ragione?',
     opzioni:['Sono autonome, e non possono contraddirsi',
              'La fede guida ogni passo della ricerca razionale',
              'Sono due verità separate, che possono divergere',
              'La ragione va abbandonata dove arriva la fede'], giusta:0},

    {tipo:'scelta', testo:'Perché Tommaso rifiuta l\'argomento ontologico di Anselmo?',
     opzioni:['L\'esistenza va provata partendo dall\'esperienza',
              'Il concetto di Dio è troppo alto per la nostra mente',
              'Dio non ha bisogno di prove per essere creduto',
              'Il ragionamento vale per tutto, non solo per Dio'], giusta:0},

    {tipo:'scelta', testo:'Che cosa hanno in comune tutte e cinque le vie?',
     opzioni:['Negano che la catena delle cause vada all\'infinito',
              'Partono dal concetto di essere perfettissimo',
              'Si fondano sui testi rivelati dell\'Antico Testamento',
              'Dimostrano insieme esistenza e bontà di Dio'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue le creature da Dio, per Tommaso?',
     opzioni:['Nelle creature essenza ed essere restano distinti',
              'Le creature non hanno né una forma né una materia',
              'Le creature sono composte di materia e di forma',
              'Dio possiede tutte le perfezioni delle creature'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la legge naturale?',
     opzioni:['La ragione umana che partecipa alla legge eterna',
              'L\'insieme dei comandamenti rivelati nella Bibbia',
              'Il diritto che ogni popolo si dà per convenzione',
              'L\'ordine con cui Dio governa il mondo materiale'], giusta:0},

    {tipo:'scelta', testo:'Qual è il fine dello Stato, secondo Tommaso?',
     opzioni:['Il bene comune, non l\'interesse di chi governa',
              'La difesa dell\'ordine voluto dalla Chiesa di Roma',
              'La salvezza eterna di tutti i sudditi battezzati',
              'L\'accordo fra i cittadini che lo hanno fondato'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una legge ingiusta va comunque obbedita? Una parola.'}
  ]},
{
  titolo: 'Filosofia medievale · 3 — La filosofia nel Trecento',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa vuol dire spiegare qualcosa nel modo più semplice? Una parola.'},

    {tipo:'scelta', testo:'Che cosa contestano a Tommaso i pensatori del XIV secolo?',
     opzioni:['Di aver legato Dio troppo alla logica di Aristotele',
              'Di aver dato alla fede più peso che alla ragione',
              'Di aver ignorato del tutto le opere di Aristotele',
              'Di aver reso la teologia una scienza dei soli dotti'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sostiene Duns Scoto contro l\'analogia tomista?',
     opzioni:['L\'essere si dice allo stesso modo di Dio e delle cose',
              'Di Dio si può parlare soltanto negando ciò che non è',
              'Nessuna parola umana può riferirsi in qualche modo a Dio',
              'Le parole applicate a Dio hanno un senso del tutto diverso'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma il primato della volontà in Duns Scoto?',
     opzioni:['Dio è libero, non vincolato da alcuna necessità logica',
              'L\'uomo sceglie sempre ciò che il suo intelletto gli mostra',
              'La volontà divina coincide perfettamente con la ragione',
              'Il bene morale si conosce con la sola ragione naturale'], giusta:0},

    {tipo:'scelta', testo:'Che cosa prescrive il rasoio di Ockham?',
     opzioni:['Non moltiplicare gli enti oltre il necessario',
              'Non credere a ciò che i sensi non hanno colto',
              'Non usare la ragione nelle questioni di fede',
              'Non fidarsi dell\'autorità dei filosofi antichi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono gli universali, per Ockham?',
     opzioni:['Segni mentali che stanno per molte cose singole',
              'Concetti dotati di un vero fondamento nelle cose',
              'Forme presenti negli individui che li realizzano',
              'Sostanze reali che esistono fuori della nostra anima'], giusta:0},

    {tipo:'scelta', testo:'Che cosa comporta la «potentia absoluta» divina?',
     opzioni:['Dio avrebbe potuto stabilire una morale diversa',
              'Dio conosce in anticipo ogni scelta delle creature',
              'Dio non può fare nulla contro la propria natura',
              'Dio mantiene per sempre l\'ordine che ha stabilito'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sostiene Ockham sul rapporto fra Chiesa e Stato?',
     opzioni:['Sono poteri separati, ciascuno nella propria sfera',
              'Il potere spirituale sta sopra a quello temporale',
              'L\'imperatore riceve la propria autorità dal papa',
              'Lo Stato deve far rispettare la legge di Dio'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: separare fede e ragione le indebolisce o le libera? Una parola.'}
  ]},
{
  titolo: 'Storia moderna · 1 — Carlo V e la Riforma protestante',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: si può comprare il perdono? Scrivi una parola.'},

    {tipo:'scelta', testo:'Come arriva Carlo V a governare un impero così vasto?',
     opzioni:['Per eredità: quattro nonni, quattro territori diversi',
              'Per conquista militare dei regni vicini alla Spagna',
              'Perché il papa gliene affidò il governo da giovane',
              'Per il matrimonio con l\'erede al trono di Spagna'], giusta:0},

    {tipo:'scelta', testo:'Come ottiene Carlo l\'elezione imperiale del 1519?',
     opzioni:['Compra i voti degli elettori col denaro dei Fugger',
              'Viene designato per testamento dal nonno Massimiliano',
              'Ottiene l\'appoggio decisivo del papa contro la Francia',
              'Vince la guerra contro il rivale Francesco di Francia'], giusta:0},

    {tipo:'scelta', testo:'Perché nel 1527 i lanzichenecchi saccheggiano Roma?',
     opzioni:['Carlo V non era riuscito a pagare i suoi mercenari',
              'L\'imperatore aveva ordinato di punire il papa ribelle',
              'Volevano distruggere le chiese in nome della Riforma',
              'Il papa aveva rifiutato di incoronare l\'imperatore'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma il principio luterano «sola fide»?',
     opzioni:['Salva la fede, non le opere né le indulgenze',
              'Salva la sola Bibbia, non la parola dei pontefici',
              'Salva la grazia divina, e nessun merito dell\'uomo',
              'Salva chi crede e fa opere buone durante la vita'], giusta:0},

    {tipo:'scelta', testo:'Perché la stampa è decisiva per la Riforma?',
     opzioni:['Porta le tesi in tedesco fino ai villaggi in pochi giorni',
              'Permette di stampare la Bibbia in latino a basso prezzo',
              'Consente al papa di rispondere a Lutero con rapidità',
              'Sostituisce la predicazione orale dei frati mendicanti'], giusta:0},

    {tipo:'scelta', testo:'Come reagisce Lutero alla rivolta dei contadini del 1525?',
     opzioni:['La condanna e invita i principi a reprimerla nel sangue',
              'La appoggia, riconoscendovi il suo stesso messaggio',
              'Tace, per non compromettere la protezione dei principi',
              'Cerca di mediare fra i contadini e i principi tedeschi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa stabilisce la Pace di Augusta del 1555?',
     opzioni:['Ogni principe sceglie la religione del suo territorio',
              'Ogni suddito è libero di scegliere la propria fede',
              'Il luteranesimo è vietato in tutto il Sacro Romano Impero',
              'L\'imperatore riconosce il primato religioso del papa'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: dividersi su un\'idea è una sconfitta o una libertà? Una parola.'}
  ]},
{
  titolo: 'Storia moderna · 2 — Riforma e Controriforma',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: chi decide che cosa si può leggere? Una parola.'},

    {tipo:'scelta', testo:'Che cosa afferma la predestinazione di Calvino?',
     opzioni:['Dio ha già scelto chi si salva, e l\'uomo non lo sa',
              'Solo chi lavora e risparmia ottiene la salvezza',
              'Ognuno può guadagnarsi la salvezza con la fede',
              'La salvezza dipende dalle opere fatte in vita'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il Concistoro istituito da Calvino a Ginevra?',
     opzioni:['Una magistratura che sorveglia i costumi dei cittadini',
              'L\'assemblea che elegge i pastori della città',
              'Il tribunale che processò e condannò Michele Serveto',
              'Il consiglio che governa la Repubblica di Ginevra'], giusta:0},

    {tipo:'scelta', testo:'Perché Enrico VIII rompe con Roma?',
     opzioni:['Il papa gli nega il divorzio da Caterina d\'Aragona',
              'Vuole confiscare i beni della Chiesa d\'Inghilterra',
              'Ha aderito alla dottrina luterana della sola fede',
              'Il papa aveva appoggiato la Spagna contro di lui'], giusta:0},

    {tipo:'scelta', testo:'Che cosa stabilisce il Concilio di Trento sulla disciplina?',
     opzioni:['I vescovi risiedano in diocesi; nascono i seminari',
              'La Vulgata latina è l\'unica versione biblica valida',
              'I sacramenti restano sette e il papa ha il primato',
              'La tradizione della Chiesa vale quanto la Scrittura'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue la Compagnia di Gesù dagli altri ordini?',
     opzioni:['Un quarto voto: obbedienza assoluta al pontefice',
              'La povertà totale imposta a ciascun suo membro',
              'Il rifiuto di ogni incarico politico presso le corti',
              'La scelta di predicare soltanto nelle terre lontane'], giusta:0},

    {tipo:'scelta', testo:'Perché la Chiesa proibisce la Bibbia in volgare?',
     opzioni:['Per restare l\'unica interprete autorizzata della Scrittura',
              'Perché le traduzioni protestanti contenevano molti errori',
              'Per impedire la diffusione delle idee di Lutero in Italia',
              'Perché il latino era ritenuto la sola lingua sacra'], giusta:0},

    {tipo:'scelta', testo:'A che cosa serve l\'arte barocca nella Controriforma?',
     opzioni:['A convincere attraverso i sensi, non con la sola parola',
              'A mostrare la ricchezza della Chiesa contro i riformati',
              'A illustrare ai fedeli i passi principali del Vangelo',
              'A sostituire le immagini distrutte dai protestanti'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la censura protegge o impoverisce una società? Una parola.'}
  ]},
{
  titolo: 'Storia moderna · 3 — Economia, guerre e il declino spagnolo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: avere molto oro rende ricco un paese? Una parola.'},

    {tipo:'scelta', testo:'Che cosa provoca la rivoluzione dei prezzi del Cinquecento?',
     opzioni:['L\'argento americano che svaluta la moneta europea',
              'Le carestie che fanno mancare i prodotti agricoli',
              'Le guerre continue che distruggono i raccolti',
              'La crescita della popolazione in tutta l\'Europa'], giusta:0},

    {tipo:'scelta', testo:'Chi ci rimette con l\'aumento dei prezzi?',
     opzioni:['Salariati e signori che vivono di rendite fisse',
              'I mercanti che comprano e rivendono le merci',
              'I contadini che vendono i propri prodotti',
              'Gli imprenditori che investono nelle manifatture'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue l\'economia inglese e olandese da quella spagnola?',
     opzioni:['Reinvestono i guadagni invece di spenderli in lusso',
              'Dispongono di miniere d\'argento più produttive',
              'Non devono sostenere il costo di guerre continue',
              'Hanno colonie più estese nel continente americano'], giusta:0},

    {tipo:'scelta', testo:'Come nascono le Province Unite?',
     opzioni:['Le province protestanti del Nord si staccano dalla Spagna',
              'Guglielmo d\'Orange conquista militarmente le Fiandre',
              'La Spagna cede il territorio dopo la pace di Westfalia',
              'Le province si uniscono contro la minaccia francese'], giusta:0},

    {tipo:'scelta', testo:'Perché il 1588 segna una svolta per la Spagna?',
     opzioni:['L\'Invincibile Armata è perduta e l\'Inghilterra si afferma',
              'La bancarotta costringe Filippo II a sospendere i pagamenti',
              'I Paesi Bassi del Nord proclamano la loro indipendenza',
              'La flotta ottomana torna a minacciare il Mediterraneo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa accade nella notte di San Bartolomeo?',
     opzioni:['I cattolici massacrano gli ugonotti riuniti a Parigi',
              'Enrico di Guisa fa uccidere gli ugonotti a Wassy',
              'Enrico di Borbone abiura per poter salire al trono',
              'Enrico III viene ucciso da un monaco fanatico'], giusta:0},

    {tipo:'scelta', testo:'Che cosa concede l\'Editto di Nantes agli ugonotti?',
     opzioni:['Libertà di culto, pari diritti e piazzeforti sicure',
              'Il diritto di eleggere i propri rappresentanti locali',
              'La restituzione dei beni confiscati durante le guerre',
              'L\'accesso a tutte le cariche pubbliche del regno'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la tolleranza si concede per convinzione o per stanchezza? Una parola.'}
  ]},
{
  titolo: 'Storia moderna · 4 — La crisi del Seicento e la rivoluzione scientifica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: da una crisi può nascere qualcosa di buono? Una parola.'},

    {tipo:'scelta', testo:'Perché si dice che la crisi del Seicento non è uniforme?',
     opzioni:['Colpisce i paesi in modi diversi, e la Francia cresce',
              'Riguarda solo l\'economia e non la vita politica',
              'Dura pochi anni e poi tutto torna come prima',
              'Si limita all\'Europa mediterranea e alla Spagna'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia con la cosiddetta rivoluzione militare?',
     opzioni:['Le armi da fuoco soppiantano la cavalleria corazzata',
              'Gli eserciti mercenari sostituiscono quelli regolari',
              'Le città vengono circondate da mura alte e sottili',
              'Le guerre diventano più brevi e meno costose'], giusta:0},

    {tipo:'scelta', testo:'Che cosa attenua le carestie nella seconda metà del Seicento?',
     opzioni:['Le nuove colture americane: patata, mais e riso',
              'Il ritorno di un clima più caldo su tutta l\'Europa',
              'L\'uso dei concimi e degli attrezzi più moderni',
              'La riduzione delle imposte imposte dai sovrani'], giusta:0},

    {tipo:'scelta', testo:'Che effetto ha la Fronda sulla monarchia francese?',
     opzioni:['Luigi XIV impara a tenere la nobiltà sotto controllo',
              'Il Parlamento di Parigi ottiene nuovi poteri di veto',
              'La nobiltà riconquista i privilegi che aveva perduto',
              'Mazarino è costretto a lasciare il governo del regno'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rovescia il metodo sperimentale?',
     opzioni:['Il principio di autorità: gli antichi vanno verificati',
              'L\'idea che la matematica descriva bene la natura',
              'La convinzione che la Terra stia ferma al centro',
              'L\'uso degli strumenti costruiti dagli artigiani'], giusta:0},

    {tipo:'scelta', testo:'Che cosa unifica la legge di gravitazione di Newton?',
     opzioni:['La fisica del cielo e quella della Terra, sotto una legge',
              'Il calcolo infinitesimale e la geometria di Cartesio',
              'Le orbite dei pianeti e le fasi osservate di Venere',
              'La teoria di Copernico e le osservazioni di Galileo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue Locke da Hobbes?',
     opzioni:['Per Locke la delega al governo è sempre revocabile',
              'Per Locke lo Stato nasce da un patto fra gli uomini',
              'Per Locke il sovrano riceve il potere da Dio stesso',
              'Per Locke lo stato di natura è una guerra continua'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: quando è giusto ribellarsi a chi governa? Una parola.'}
  ]},
{
  titolo: 'Storia moderna · 5 — La guerra dei Trent\'anni e l\'Olanda',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa rende possibile una pace duratura? Una parola.'},

    {tipo:'scelta', testo:'Perché la pace di Augusta non aveva risolto il problema tedesco?',
     opzioni:['Riconosceva luterani e cattolici, ma non i calvinisti',
              'Lasciava ai sudditi la scelta della propria religione',
              'Non era mai stata accettata dai principi protestanti',
              'Attribuiva all\'imperatore il diritto di scegliere la fede'], giusta:0},

    {tipo:'scelta', testo:'Che cosa scatena la defenestrazione di Praga del 1618?',
     opzioni:['Ferdinando II toglie ai boemi la libertà di culto',
              'I nobili boemi si rifiutano di pagare le imposte',
              'L\'imperatore scioglie l\'Unione evangelica dei principi',
              'Federico V rivendica la corona imperiale per sé'], giusta:0},

    {tipo:'scelta', testo:'Perché la Francia cattolica entra in guerra a fianco dei protestanti?',
     opzioni:['Richelieu vuole abbattere la potenza degli Asburgo',
              'Vuole difendere la libertà religiosa in tutta Europa',
              'Deve rispettare i patti stretti con la corona svedese',
              'Cerca di ottenere la corona imperiale per il suo re'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma la pace di Westfalia sugli Stati?',
     opzioni:['Nessuno può interferire nei loro affari interni',
              'Ognuno deve garantire la libertà di culto ai sudditi',
              'Tutti riconoscono l\'autorità superiore dell\'imperatore',
              'I confini stabiliti non potranno più essere mutati'], giusta:0},

    {tipo:'scelta', testo:'Che cosa provoca in Spagna il programma di Olivares?',
     opzioni:['La rivolta della Catalogna e del Portogallo nel 1640',
              'La bancarotta dello Stato e la fine dei pagamenti',
              'L\'espulsione dei moriscos dalle terre della corona',
              'La tregua di dodici anni firmata con gli Olandesi'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'ha di nuovo la VOC fondata nel 1602?',
     opzioni:['È la prima grande società ad azioni acquistabili da tutti',
              'È la prima compagnia autorizzata a commerciare in Asia',
              'È la prima impresa a possedere una flotta di navi veloci',
              'È la prima banca pubblica che garantisce i pagamenti'], giusta:0},

    {tipo:'scelta', testo:'Perché le Province Unite attirano tanti stranieri?',
     opzioni:['Vi si può professare liberamente la propria fede',
              'Vi si pagano imposte più basse che altrove in Europa',
              'Vi si ottiene la cittadinanza dopo pochi anni di lavoro',
              'Vi si trovano le università migliori del continente'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la tolleranza è un valore o una convenienza economica? Una parola.'}
  ]},
{
  titolo: 'Storia moderna · 6 — Rivoluzioni inglesi e assolutismi',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: chi deve avere l\'ultima parola in uno Stato? Una parola.'},

    {tipo:'scelta', testo:'Che cosa chiede al re la Petition of Rights del 1628?',
     opzioni:['Nessuna tassa e nessun arresto senza il Parlamento',
              'La convocazione del Parlamento almeno ogni tre anni',
              'La rinuncia del re a comandare l\'esercito del regno',
              'Il rispetto della fede anglicana in tutto il paese'], giusta:0},

    {tipo:'scelta', testo:'Chi sono i Roundheads della guerra civile inglese?',
     opzioni:['I sostenitori del Parlamento: borghesi e puritani',
              'I nobili anglicani rimasti fedeli alla corona',
              'I soldati irlandesi arruolati dal re Carlo I',
              'I radicali che chiedevano il voto per tutti'], giusta:0},

    {tipo:'scelta', testo:'Perché la decapitazione di Carlo I è un fatto senza precedenti?',
     opzioni:['Un re viene processato e giustiziato dal suo popolo',
              'Un re viene ucciso senza alcun processo pubblico',
              'Un re viene deposto e costretto a fuggire all\'estero',
              'Un re viene scomunicato e privato della corona'], giusta:0},

    {tipo:'scelta', testo:'Perché il 1688 si chiama «Gloriosa Rivoluzione»?',
     opzioni:['Il re cambia senza che si versi una goccia di sangue',
              'Il Parlamento vince dopo anni di guerra contro il re',
              'La monarchia viene abolita e nasce una repubblica',
              'Il popolo insorge e caccia il sovrano cattolico'], giusta:0},

    {tipo:'scelta', testo:'A che cosa serve Versailles nel disegno di Luigi XIV?',
     opzioni:['A tenere i nobili a corte, lontani dai loro feudi',
              'A mostrare la ricchezza della Francia agli stranieri',
              'A spostare la capitale del regno fuori da Parigi',
              'A riunire in un solo luogo i ministri del governo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa comporta la revoca dell\'Editto di Nantes nel 1685?',
     opzioni:['Duecentomila ugonotti lasciano la Francia per sempre',
              'La Chiesa francese si rende autonoma da Roma',
              'Le manifatture reali passano sotto il controllo regio',
              'I protestanti perdono le loro piazzeforti militari'], giusta:0},

    {tipo:'scelta', testo:'Che cosa porta Pietro il Grande dal viaggio in Europa?',
     opzioni:['Tecnici europei per rifare esercito e marina russi',
              'L\'idea di spostare la capitale sul mar Baltico',
              'Il modello di monarchia costituzionale inglese',
              'L\'alfabeto civile e le prime scuole di Stato'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: si modernizza meglio con la forza o col consenso? Una parola.'}
  ]},
{
  titolo: 'Storia moderna · 7 — L\'Europa nel primo Settecento',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa fa crescere la popolazione di un paese? Una parola.'},

    {tipo:'scelta', testo:'Che cosa causa soprattutto il balzo demografico del Settecento?',
     opzioni:['Meno epidemie, più cibo e matrimoni più precoci',
              'La scoperta del vaccino contro il vaiolo umano',
              'La fine delle grandi guerre di religione europee',
              'L\'arrivo di nuove popolazioni dalle colonie'], giusta:0},

    {tipo:'scelta', testo:'In che cosa consiste la rotazione quadriennale inglese?',
     opzioni:['Si alternano cereali e leguminose, senza lasciare a riposo',
              'Si lascia riposare un campo su quattro ogni anno',
              'Si cambia coltura ogni quattro anni sullo stesso campo',
              'Si semina il mais al posto del frumento e della segale'], giusta:0},

    {tipo:'scelta', testo:'Che effetto sociale hanno le enclosures?',
     opzioni:['I contadini senza terra emigrano verso le città',
              'I piccoli proprietari ottengono fondi più compatti',
              'I signori perdono i diritti feudali sulle campagne',
              'Le terre comuni vengono divise fra tutti gli abitanti'], giusta:0},

    {tipo:'scelta', testo:'Perché il mercante-imprenditore ricorre al lavoro a domicilio?',
     opzioni:['Nelle campagne i salari sono bassi e le regole poche',
              'Le famiglie contadine lavorano meglio degli artigiani',
              'Le corporazioni cittadine gli impongono nuove tasse',
              'Nelle città mancano gli operai per filare e tessere'], giusta:0},

    {tipo:'scelta', testo:'Chi paga le imposte nella società di Antico regime?',
     opzioni:['Il Terzo stato, mentre clero e nobiltà ne sono esenti',
              'Tutti gli ordini, ma con aliquote molto diverse',
              'I contadini soltanto, che versano anche le decime',
              'La borghesia, che in cambio ottiene le cariche'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'«economia morale» di cui parla Thompson?',
     opzioni:['Il patto non scritto: il re garantisce il pane a buon prezzo',
              'La condanna morale della speculazione sui cereali',
              'L\'obbligo per i ricchi di soccorrere i poveri affamati',
              'Il divieto di esportare il grano nelle annate scarse'], giusta:0},

    {tipo:'scelta', testo:'Perché la guerra dei Sette anni è il primo conflitto globale?',
     opzioni:['Si combatte in Europa, America, Asia e Africa insieme',
              'Vi partecipano per la prima volta tutte le potenze',
              'Ridisegna gli equilibri fra tutti gli Stati del mondo',
              'Vi si affrontano due schieramenti in ogni continente'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: il progresso di pochi vale il sacrificio di molti? Una parola.'}
  ]},
{
  titolo: 'Storia moderna · 8 — La civiltà dei Lumi',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: pensare con la propria testa costa fatica? Una parola.'},

    {tipo:'scelta', testo:'Che cosa mette al centro l\'Illuminismo?',
     opzioni:['La ragione come unico criterio per giudicare tutto',
              'La scienza sperimentale come sola forma di sapere',
              'La libertà individuale contro il potere dello Stato',
              'La tolleranza fra le diverse confessioni religiose'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rende rivoluzionaria l\'Enciclopedia?',
     opzioni:['Dà pari dignità al sapere dotto e a quello manuale',
              'Raccoglie per la prima volta tutte le scienze note',
              'Viene scritta in francese e non più in lingua latina',
              'È stampata a basso prezzo e la comprano in molti'], giusta:0},

    {tipo:'scelta', testo:'Qual è la garanzia contro l\'assolutismo, secondo Montesquieu?',
     opzioni:['Tenere separati legislativo, esecutivo e giudiziario',
              'Affidare al popolo la scelta di chi deve governare',
              'Sottoporre il sovrano alle leggi che egli stesso emana',
              'Adattare le leggi al clima e ai costumi di ogni paese'], giusta:0},

    {tipo:'scelta', testo:'A chi appartiene la sovranità secondo Rousseau?',
     opzioni:['Al popolo, che la esprime nella volontà generale',
              'Al sovrano, che la riceve col patto degli uomini',
              'Alla legge, superiore a governanti e governati',
              'Alla maggioranza dei cittadini che sanno leggere'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la «minorità» di cui parla Kant?',
     opzioni:['La pigrizia di lasciare che altri pensino per noi',
              'L\'ignoranza in cui la Chiesa tiene i suoi fedeli',
              'La condizione dei sudditi privi di diritti politici',
              'L\'età in cui non si può ancora usare la ragione'], giusta:0},

    {tipo:'scelta', testo:'Che cosa esprime il motto «tutto per il popolo, niente con il popolo»?',
     opzioni:['I sovrani riformano ma non cedono nulla del potere',
              'I filosofi guidano i re senza mai governare loro stessi',
              'Il popolo riceve benefici che non ha mai richiesto',
              'Le riforme servono più alle casse dello Stato che ai sudditi'], giusta:0},

    {tipo:'scelta', testo:'Perché Beccaria giudica inutile la tortura?',
     opzioni:['Chi è torturato confessa qualunque cosa gli si chieda',
              'Non è proporzionata alla gravità del reato commesso',
              'Non riesce a dissuadere nessuno dal commettere reati',
              'Colpisce spesso persone che risulteranno innocenti'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: si possono fare riforme dall\'alto senza il popolo? Una parola.'}
  ]},
{
  titolo: 'Storia moderna · 9 — La prima rivoluzione industriale',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: una macchina che sostituisce l\'uomo è un bene? Una parola.'},

    {tipo:'scelta', testo:'Perché la rivoluzione industriale comincia in Gran Bretagna?',
     opzioni:['Solo lì si trovano insieme carbone, colonie e Parlamento',
              'Solo lì gli inventori ricevevano premi dallo Stato',
              'Solo lì la popolazione era cresciuta tanto rapidamente',
              'Solo lì i contadini avevano lasciato le campagne'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma Adam Smith con la «mano invisibile»?',
     opzioni:['Gli interessi individuali producono il bene di tutti',
              'Lo Stato deve guidare con discrezione l\'economia',
              'La ricchezza nasce dal lavoro e non dal commercio',
              'La divisione del lavoro moltiplica ciò che si produce'], giusta:0},

    {tipo:'scelta', testo:'Perché le invenzioni tessili si susseguono «a botta e risposta»?',
     opzioni:['Ogni miglioramento crea una strozzatura nella fase seguente',
              'Ogni inventore cercava di superare i propri concorrenti',
              'Ogni brevetto scadeva dopo pochi anni dalla concessione',
              'Ogni macchina nuova richiedeva operai più specializzati'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia la macchina a vapore rispetto all\'energia idraulica?',
     opzioni:['Le fabbriche non devono più sorgere lungo i fiumi',
              'Il moto del pistone diventa finalmente rotatorio',
              'Il consumo di carbone si riduce in modo notevole',
              'La forza prodotta può muovere macchine più grandi'], giusta:0},

    {tipo:'scelta', testo:'Perché il coke di Darby è così importante?',
     opzioni:['Sostituisce il carbone di legna, che stava finendo',
              'Permette di scaldare i forni a temperature più alte',
              'Rende la ghisa più resistente e più malleabile',
              'Costa meno del ferro importato dalla Scandinavia'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue l\'operaio di fabbrica dal lavoratore a domicilio?',
     opzioni:['Il ritmo del suo lavoro glielo impone la macchina',
              'Non possiede gli strumenti con cui lavora ogni giorno',
              'Riceve un salario invece di essere pagato a cottimo',
              'Svolge una sola mansione anziché l\'intero ciclo'], giusta:0},

    {tipo:'scelta', testo:'Contro che cosa si rivolgono i luddisti?',
     opzioni:['Contro le macchine, accusate di togliere il lavoro',
              'Contro i padroni che pagavano salari troppo bassi',
              'Contro il governo che vietava i primi sindacati',
              'Contro l\'impiego dei bambini dentro le fabbriche'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: chi paga il prezzo del progresso tecnico? Una parola.'}
  ]},
{
  titolo: 'Storia moderna · 10 — La Rivoluzione americana',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: quando una tassa diventa ingiusta? Una parola.'},

    {tipo:'scelta', testo:'Che cosa impongono i Navigation Acts alle colonie?',
     opzioni:['Di commerciare solo con Londra e su navi inglesi',
              'Di pagare un dazio su tutte le merci esportate',
              'Di rifornire la flotta britannica di legname',
              'Di non produrre manufatti che facciano concorrenza'], giusta:0},

    {tipo:'scelta', testo:'Perché Londra inasprisce le tasse coloniali dopo il 1763?',
     opzioni:['Vuole far pagare alle colonie la guerra dei Sette anni',
              'Vuole punire le colonie che commerciavano di contrabbando',
              'Vuole finanziare l\'esercito che difende i nuovi confini',
              'Vuole ridurre il debito accumulato dalla corona inglese'], giusta:0},

    {tipo:'scelta', testo:'Che cosa significa «no taxation without representation»?',
     opzioni:['Chi non ha deputati a Londra non può essere tassato',
              'Chi paga le tasse deve poter controllare come si spendono',
              'Chi governa una colonia deve essere scelto dai coloni',
              'Chi vive in America non deve nulla al re d\'Inghilterra'], giusta:0},

    {tipo:'scelta', testo:'Che cosa provoca il Boston Tea Party?',
     opzioni:['Le Leggi Intollerabili: Boston chiusa e Massachusetts occupato',
              'L\'immediato invio di truppe britanniche nella città',
              'La revoca del monopolio della Compagnia delle Indie',
              'La convocazione del Primo Congresso continentale'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sostiene Thomas Paine nel Common Sense?',
     opzioni:['Giorgio III ha rotto il patto: ribellarsi è legittimo',
              'Le colonie possono governarsi meglio da sole che da Londra',
              'La monarchia è di per sé una forma di governo assurda',
              'L\'America deve allearsi con la Francia contro l\'Inghilterra'], giusta:0},

    {tipo:'scelta', testo:'Perché Saratoga è una svolta nella guerra?',
     opzioni:['La vittoria convince la Francia a schierarsi con gli americani',
              'L\'esercito britannico perde il controllo delle colonie del Nord',
              'Washington dimostra di saper battere le truppe regolari',
              'Il Congresso può finalmente rientrare a Philadelphia'], giusta:0},

    {tipo:'scelta', testo:'Qual è la contraddizione maggiore della nuova repubblica?',
     opzioni:['Proclama tutti uguali ma non abolisce la schiavitù',
              'Afferma la sovranità popolare ma il voto è censitario',
              'Garantisce i diritti ma toglie le terre ai nativi',
              'Separa i poteri ma dà molta forza al presidente'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: un principio vale anche se chi lo scrive non lo applica? Una parola.'}
  ]},
{
  titolo: 'Storia moderna · 11 — La Rivoluzione francese',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: una rivoluzione può fermarsi al punto giusto? Una parola.'},

    {tipo:'scelta', testo:'Perché la Francia di Luigi XVI è vicina al fallimento?',
     opzioni:['Le guerre costano e i privilegiati non pagano imposte',
              'Il raccolto del 1788 è andato quasi completamente perduto',
              'Il re ha speso troppo per mantenere la corte di Versailles',
              'Il commercio con le colonie si è quasi del tutto fermato'], giusta:0},

    {tipo:'scelta', testo:'Perché il Terzo stato vuole il voto per testa?',
     opzioni:['Per ordine sarebbe sempre battuto da clero e nobiltà',
              'Perché rappresenta il novantasette per cento dei francesi',
              'Per poter approvare da solo la nuova Costituzione',
              'Perché così avevano votato gli Stati Generali del 1614'], giusta:0},

    {tipo:'scelta', testo:'A che cosa si impegnano i deputati nella sala della Pallacorda?',
     opzioni:['A non sciogliersi prima di aver dato una Costituzione',
              'A non riconoscere più l\'autorità del re sull\'Assemblea',
              'A votare per testa qualunque cosa dica il sovrano',
              'A restare uniti finché non cadranno i privilegi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa provoca la Grande paura nelle campagne?',
     opzioni:['I contadini assaltano i castelli e bruciano gli archivi',
              'I contadini smettono di pagare le decime alla Chiesa',
              'I nobili fuggono in massa oltre i confini del regno',
              'Le città restano senza rifornimenti di grano'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia dopo la fuga di Varennes?',
     opzioni:['Il re appare un traditore e si chiede la repubblica',
              'Il re viene subito arrestato e messo sotto processo',
              'L\'Austria dichiara guerra alla Francia rivoluzionaria',
              'La Costituzione del 1791 viene giudicata superata'], giusta:0},

    {tipo:'scelta', testo:'Che cosa consente la legge dei sospetti?',
     opzioni:['Arrestare senza mandato chi non aiuta la rivoluzione',
              'Condannare a morte chiunque abbia servito la monarchia',
              'Processare i deputati che criticano il Comitato',
              'Requisire i beni di chi è fuggito dalla Francia'], giusta:0},

    {tipo:'scelta', testo:'Perché i deputati organizzano il colpo del 9 termidoro?',
     opzioni:['Temono di finire ghigliottinati come i condannati prima di loro',
              'Vogliono restaurare la monarchia costituzionale del 1791',
              'Ritengono che il Terrore non serva più dopo Fleurus',
              'Non condividono più le misure economiche dei giacobini'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la violenza è mai giustificata da un ideale? Una parola.'}
  ]},
{
  titolo: 'Storia moderna · 12 — L\'età napoleonica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: un uomo solo può cambiare la storia? Una parola.'},

    {tipo:'scelta', testo:'Che cosa rende possibile il colpo di Stato del 18 brumaio?',
     opzioni:['Il Direttorio è screditato e la borghesia vuole ordine',
              'L\'esercito francese era rimasto senza un comandante',
              'I giacobini avevano ripreso il controllo di Parigi',
              'La Francia stava perdendo la guerra su tutti i fronti'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma anzitutto il Codice civile del 1804?',
     opzioni:['L\'uguaglianza dei cittadini davanti alla legge dello Stato',
              'Il diritto di ogni francese a partecipare alla vita politica',
              'L\'obbligo per lo Stato di garantire il lavoro a tutti',
              'La supremazia della legge civile su quella religiosa'], giusta:0},

    {tipo:'scelta', testo:'Quale contraddizione contiene il Codice civile?',
     opzioni:['Proclama l\'uguaglianza ma subordina la moglie al marito',
              'Difende la proprietà ma vieta di lasciarla in eredità',
              'Riconosce la libertà di culto ma non quella di stampa',
              'Afferma la laicità ma nasce dal concordato con il papa'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuole dire Napoleone incoronandosi da solo?',
     opzioni:['Che il suo potere non dipende in nulla dal pontefice',
              'Che la Francia non riconosce più l\'autorità di Roma',
              'Che l\'Impero nasce dalla volontà del popolo francese',
              'Che nessun sovrano europeo è pari all\'imperatore'], giusta:0},

    {tipo:'scelta', testo:'Perché il blocco continentale si rivela un boomerang?',
     opzioni:['Danneggia più l\'economia europea di quella britannica',
              'Spinge la Russia a stringere un\'alleanza con Londra',
              'Costringe Napoleone a occupare militarmente la Spagna',
              'Provoca la carestia nei porti francesi dell\'Atlantico'], giusta:0},

    {tipo:'scelta', testo:'Con quale tattica i Russi logorano la Grande Armée?',
     opzioni:['Si ritirano bruciando tutto, senza dare battaglia',
              'Attaccano di continuo le colonne in marcia',
              'Attendono l\'inverno chiusi dentro le fortezze',
              'Tagliano le vie di rifornimento verso occidente'], giusta:0},

    {tipo:'scelta', testo:'Qual è l\'effetto paradossale delle conquiste napoleoniche?',
     opzioni:['Diffondono la Rivoluzione e insieme risvegliano i nazionalismi',
              'Portano il Codice civile in paesi che poi lo rifiutano',
              'Abbattono l\'Antico regime ma creano una nuova nobiltà',
              'Uniscono l\'Europa sotto un solo dominio che non dura'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: si può portare la libertà a un popolo con le armi? Una parola.'}
  ]},
{
  titolo: 'Storia moderna · 13 — La Restaurazione',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: si può cancellare un\'idea con la forza? Una parola.'},

    {tipo:'scelta', testo:'Che cosa afferma il principio di legittimità?',
     opzioni:['Regnano di diritto le dinastie che c\'erano prima del 1789',
              'Nessuno Stato può prevalere sugli altri in Europa',
              'Le grandi potenze possono intervenire contro le rivolte',
              'Un sovrano è legittimo se il suo popolo lo riconosce'], giusta:0},

    {tipo:'scelta', testo:'Come riesce Talleyrand a salvare la Francia sconfitta?',
     opzioni:['Usa a proprio favore il principio di legittimità',
              'Offre allo zar il proprio appoggio in Polonia',
              'Sfrutta i contrasti fra Austria e Prussia a Vienna',
              'Ottiene l\'appoggio della Gran Bretagna sui confini'], giusta:0},

    {tipo:'scelta', testo:'Perché Metternich chiama l\'Italia «un\'espressione geografica»?',
     opzioni:['È solo un nome sulla carta, non uno Stato reale',
              'È divisa fra troppe dinastie che si fanno guerra',
              'È controllata dall\'Austria direttamente o per parentela',
              'Non ha mai avuto una lingua comune a tutti gli abitanti'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue Burke da de Maistre?',
     opzioni:['Burke accetta riforme graduali, purché rispettino il passato',
              'Burke difende la monarchia costituzionale all\'inglese',
              'Burke non attribuisce a Dio l\'origine delle istituzioni',
              'Burke condanna la Rivoluzione solo per i suoi eccessi'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la nazione, per il pensiero dell\'Ottocento?',
     opzioni:['Una comunità unita da lingua, cultura e storia comuni',
              'L\'insieme dei cittadini che vivono sotto le stesse leggi',
              'Il popolo che si è dato liberamente una Costituzione',
              'Il territorio governato da una medesima dinastia'], giusta:0},

    {tipo:'scelta', testo:'Qual è il limite principale della Carboneria?',
     opzioni:['Riunisce solo élite colte, senza programmi per il popolo',
              'Non riesce a diffondersi al di fuori dell\'Italia',
              'Ha obiettivi troppo diversi da un paese all\'altro',
              'Viene subito smantellata dalla polizia austriaca'], giusta:0},

    {tipo:'scelta', testo:'Perché la rivoluzione greca riesce dove falliscono i moti del 1820-21?',
     opzioni:['Le grandi potenze intervengono a favore dei ribelli',
              'I Greci sono più organizzati militarmente dei carbonari',
              'L\'Impero ottomano era ormai troppo debole per resistere',
              'L\'Europa romantica sostiene la causa della Grecia classica'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: che cosa tiene insieme un popolo? Una parola.'}
  ]},
{
  titolo: 'Storia moderna · 14 — L\'età dei popoli e delle nazioni',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: l\'indipendenza basta a rendere liberi? Una parola.'},

    {tipo:'scelta', testo:'Perché i creoli sono scontenti nelle colonie spagnole?',
     opzioni:['Sono ricchi ma esclusi dalle cariche di governo',
              'Sono costretti a pagare imposte più alte degli altri',
              'Non possono possedere terra nelle colonie americane',
              'Sono discriminati perché nati da unioni miste'], giusta:0},

    {tipo:'scelta', testo:'Che cosa innesca l\'indipendenza latinoamericana?',
     opzioni:['Napoleone depone il re di Spagna e crea un vuoto di potere',
              'La Gran Bretagna arma i ribelli per aprirsi i mercati',
              'Le rivoluzioni americana e francese ispirano le colonie',
              'La rivolta di Riego indebolisce la corona spagnola'], giusta:0},

    {tipo:'scelta', testo:'Perché fallisce il progetto panamericano di Bolívar?',
     opzioni:['Le élite locali si dividono per rivalità fra loro',
              'La Spagna riconquista buona parte del continente',
              'I caudillos prendono il potere con colpi di Stato',
              'Gli Stati Uniti si oppongono a una grande federazione'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma la dottrina Monroe?',
     opzioni:['L\'Europa non colonizzi né intervenga nelle Americhe',
              'Gli Stati Uniti guidino tutti i popoli del continente',
              'Ogni Stato americano è libero di darsi le proprie leggi',
              'Gli Stati Uniti non entreranno in nessuna guerra europea'], giusta:0},

    {tipo:'scelta', testo:'Quale contraddizione segna la democrazia jacksoniana?',
     opzioni:['Allarga il voto ai bianchi e deporta i nativi a ovest',
              'Riconosce i sindacati ma vieta di scioperare',
              'Proclama l\'uguaglianza ma il voto resta censitario',
              'Organizza i partiti ma esclude le donne dalla politica'], giusta:0},

    {tipo:'scelta', testo:'Perché la ferrovia crea un circolo economico virtuoso?',
     opzioni:['Fa crescere la domanda di ferro, carbone e macchine',
              'Riduce moltissimo il costo del trasporto delle merci',
              'Attira capitali stranieri verso i paesi che la costruiscono',
              'Permette di raggiungere in poche ore città lontane'], giusta:0},

    {tipo:'scelta', testo:'Che cosa ottiene il Reform Act del 1832?',
     opzioni:['Abolisce i borghi marci e dà deputati alle città industriali',
              'Introduce il suffragio universale per tutti i maschi adulti',
              'Concede il voto segreto e le elezioni annuali richieste',
              'Riconosce agli operai il diritto di eleggere i deputati'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: perché in Inghilterra si riforma e altrove si fa la rivoluzione? Una parola.'}
  ]},
{
  titolo: 'Storia moderna · 15 — Società industriale e socialismo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: la ricchezza di alcuni nasce dal lavoro di altri? Una parola.'},

    {tipo:'scelta', testo:'Che cosa crea la Rivoluzione industriale sul piano sociale?',
     opzioni:['Due classi nuove: chi possiede le macchine e chi vi lavora',
              'Una borghesia di mercanti, banchieri e professionisti',
              'Una massa di contadini costretti a lasciare le campagne',
              'Un ceto medio che investe i risparmi nelle imprese'], giusta:0},

    {tipo:'scelta', testo:'Perché nelle fabbriche si impiegano tanti bambini?',
     opzioni:['Costano poco, entrano ovunque e non si ribellano',
              'Le famiglie non riescono a vivere con un solo salario',
              'Le macchine richiedono mani piccole e movimenti rapidi',
              'Nessuna legge lo vietava prima della metà del secolo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia nella città industriale rispetto a quella di prima?',
     opzioni:['Ricchi e poveri non abitano più negli stessi quartieri',
              'La popolazione cresce senza alcun piano urbanistico',
              'Le case vengono costruite in fretta e senza fognature',
              'I centri storici si svuotano a favore delle periferie'], giusta:0},

    {tipo:'scelta', testo:'Che cosa aggrava la carestia irlandese del 1845?',
     opzioni:['Londra continua a esportare il grano prodotto nell\'isola',
              'La peronospora distrugge il raccolto per quattro anni',
              'Un milione di irlandesi emigra lasciando i campi incolti',
              'I dazi sui cereali tengono alto il prezzo del pane'], giusta:0},

    {tipo:'scelta', testo:'Che cosa dimostra Robert Owen a New Lanark?',
     opzioni:['Trattare bene gli operai fa crescere anche i profitti',
              'Una fabbrica può funzionare senza padrone alcuno',
              'Ridurre l\'orario non danneggia affatto la produzione',
              'L\'istruzione degli operai migliora la loro condizione'], giusta:0},

    {tipo:'scelta', testo:'Che cosa intende Proudhon con «la proprietà è un furto»?',
     opzioni:['Il capitalista si appropria della ricchezza prodotta dagli operai',
              'La proprietà privata va abolita e resa collettiva a tutti',
              'Ogni possesso nasce da una violenza commessa nel passato',
              'Chi non lavora la terra non ha diritto di possederla'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma il materialismo storico di Marx?',
     opzioni:['I rapporti economici, non le idee, muovono la storia',
              'La storia procede per fasi che si succedono sempre uguali',
              'Ogni epoca è segnata dal conflitto fra due classi opposte',
              'La religione e la legge servono a chi detiene il potere'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: si cambia il mondo con l\'esempio o con il conflitto? Una parola.'}
  ]},
{
  titolo: 'Storia moderna · 16 — Il 1848, primavera dei popoli',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: una rivoluzione sconfitta è servita a qualcosa? Una parola.'},

    {tipo:'scelta', testo:'Che cosa prepara l\'esplosione del 1848?',
     opzioni:['Due anni di cattivi raccolti, carestia e disoccupazione',
              'Il Manifesto di Marx ed Engels uscito quel febbraio',
              'Il fallimento dei moti del 1820-21 e del 1831',
              'La debolezza dei governi dopo la morte di Metternich'], giusta:0},

    {tipo:'scelta', testo:'Qual è la vera novità del 1848 rispetto ai moti precedenti?',
     opzioni:['Le masse popolari combattono accanto alla borghesia',
              'La rivoluzione si diffonde in poche settimane ovunque',
              'Per la prima volta partecipano anche le donne',
              'I rivoluzionari chiedono l\'indipendenza nazionale'], giusta:0},

    {tipo:'scelta', testo:'Che cosa spezza il fronte rivoluzionario in Francia?',
     opzioni:['La repressione degli operai nelle giornate di giugno',
              'La vittoria dei conservatori alle elezioni di aprile',
              'La chiusura degli ateliers nationaux decisa dal governo',
              'L\'elezione di Luigi Napoleone alla presidenza'], giusta:0},

    {tipo:'scelta', testo:'Perché fallisce l\'Assemblea di Francoforte?',
     opzioni:['Il re di Prussia rifiuta una corona offerta dai rivoluzionari',
              'I deputati non si accordano sul ruolo da dare all\'Austria',
              'Gli eserciti dei principi sciolgono l\'assemblea con la forza',
              'Le Costituzioni concesse vengono tutte revocate nel 1849'], giusta:0},

    {tipo:'scelta', testo:'Che cosa piega la rivoluzione ungherese di Kossuth?',
     opzioni:['L\'intervento dell\'esercito dello zar Nicola I',
              'Il tradimento dei croati alleati con gli Asburgo',
              'L\'abdicazione di Ferdinando I e l\'arrivo di Francesco Giuseppe',
              'La riconquista austriaca di Praga e poi di Vienna'], giusta:0},

    {tipo:'scelta', testo:'Perché lo Statuto albertino conta più delle altre Costituzioni del 1848?',
     opzioni:['È l\'unica che non viene ritirata dopo la restaurazione',
              'È la prima concessa da un sovrano della penisola italiana',
              'È la sola che prevede due Camere e un suffragio allargato',
              'È quella su cui giura anche il papa Pio IX a Roma'], giusta:0},

    {tipo:'scelta', testo:'Perché la prima guerra d\'indipendenza si perde?',
     opzioni:['Papa e Borboni ritirano le truppe e il Piemonte resta solo',
              'L\'esercito sardo era troppo piccolo per battere l\'Austria',
              'Radetzky si era rinchiuso nelle fortezze del Quadrilatero',
              'Carlo Alberto rinuncia alla guerra dopo le prime sconfitte'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: che cosa lascia una sconfitta a chi verrà dopo? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 1 — La cultura umanistico-rinascimentale',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: siamo noi a scegliere chi diventare? Una parola.'},

    {tipo:'scelta', testo:'Che cosa cambia nel Rinascimento riguardo a chi produce cultura?',
     opzioni:['Passa dalla Chiesa ai laici, protetti dai mecenati',
              'Passa dalle università alle nuove accademie cittadine',
              'Passa dai chierici ai professori stipendiati dai Comuni',
              'Passa dai monasteri alle botteghe degli artisti'], giusta:0},

    {tipo:'scelta', testo:'Perché tornare al latino classico è una scelta progressista?',
     opzioni:['Rimette in circolo la civiltà antica e unisce l\'Europa colta',
              'Permette di leggere i testi greci tradotti dagli umanisti',
              'Rompe con il latino oscuro dei filosofi della scolastica',
              'Rende la cultura accessibile a un pubblico più ampio'], giusta:0},

    {tipo:'scelta', testo:'Che cosa significa «homo faber fortunae suae»?',
     opzioni:['L\'uomo si costruisce da sé il proprio destino nel mondo',
              'L\'uomo può conoscere la natura e piegarla ai suoi fini',
              'L\'uomo è artefice della propria salvezza senza la grazia',
              'L\'uomo vale per quello che fa, non per la sua nascita'], giusta:0},

    {tipo:'scelta', testo:'Perché Pico chiama l\'uomo «microcosmo»?',
     opzioni:['Riassume in sé tutti i gradi dell\'essere, dalla bestia all\'angelo',
              'È il centro attorno a cui ruota l\'intero universo creato',
              'Contiene in piccolo la stessa struttura del mondo fisico',
              'È l\'unica creatura che riflette l\'immagine del suo creatore'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la «prospettiva storica» nata con l\'Umanesimo?',
     opzioni:['Il senso della distanza che separa il passato dal presente',
              'L\'idea che la storia proceda in linea retta verso il meglio',
              'Il metodo che restituisce ai testi la loro forma originaria',
              'La convinzione che ogni epoca vada giudicata da sé'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue la filosofia della natura dalla magia?',
     opzioni:['Cerca princìpi propri della natura, non riti che la piegano',
              'Studia la natura senza attribuirle alcuna forza vitale',
              'Ricorre all\'esperimento invece che alla sola osservazione',
              'Nega che nella natura sia presente la potenza divina'], giusta:0},

    {tipo:'scelta', testo:'Che cosa insegna lo scetticismo di Montaigne?',
     opzioni:['A liberarsi dalla presunzione di sapere con certezza',
              'Ad accettare senza lamenti la condizione che ci è data',
              'A conoscere gli uomini partendo dalla propria esperienza',
              'A considerare la vita come un problema sempre aperto'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: mettere l\'uomo al centro è una conquista o una presunzione? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 2 — Il ritorno a Platone e ad Aristotele',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: sapere di non sapere è una debolezza? Una parola.'},

    {tipo:'scelta', testo:'Perché gli umanisti riscoprono Platone?',
     opzioni:['Lo vedono come l\'opposto della filosofia scolastica',
              'Ne ricevono finalmente tutti i Dialoghi in greco',
              'Lo giudicano il pensiero antico più vicino al cristianesimo',
              'Ritengono che le sue idee derivino da quelle di Mosè'], giusta:0},

    {tipo:'scelta', testo:'Perché si parla di neoplatonismo e non di platonismo?',
     opzioni:['Platone viene letto attraverso Plotino e i suoi seguaci',
              'Le traduzioni disponibili erano ancora molto imprecise',
              'Al pensiero greco si aggiungono elementi cristiani',
              'Si privilegia l\'aspetto mistico rispetto a quello politico'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sostengono gli averroisti sull\'intelletto?',
     opzioni:['Ne esiste uno solo, cui i singoli soltanto partecipano',
              'Quello passivo è mortale, quello attivo coincide con Dio',
              'È una funzione del corpo e muore insieme ad esso',
              'È ciò che rende ogni uomo immortale dopo la morte'], giusta:0},

    {tipo:'scelta', testo:'A che cosa serve, storicamente, la teoria della doppia verità?',
     opzioni:['Permette di sostenere tesi nuove senza finire sotto processo',
              'Separa in modo definitivo la teologia dalla filosofia',
              'Dimostra che la ragione è più affidabile della fede',
              'Consente di credere e ragionare senza contraddirsi'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la «dotta ignoranza» di Cusano?',
     opzioni:['Sapere di non poter raggiungere ciò che non ha proporzione con noi',
              'Rinunciare a conoscere Dio, che resta comunque inconoscibile',
              'Riconoscere che ogni sapere umano è soltanto congettura',
              'Ammettere i propri limiti prima di cominciare a indagare'], giusta:0},

    {tipo:'scelta', testo:'Perché Ficino chiama l\'anima «copula mundi»?',
     opzioni:['Sta al centro fra il mondo spirituale e quello corporeo',
              'Tiene unite le diverse parti del creato con l\'amore',
              'È l\'unica realtà che partecipa insieme di Dio e del corpo',
              'Congiunge il cammino che sale a Dio e quello che ne discende'], giusta:0},

    {tipo:'scelta', testo:'Perché per Pomponazzi l\'immortalità dell\'anima è indimostrabile?',
     opzioni:['L\'anima conosce solo partendo da ciò che i sensi le danno',
              'L\'anima non possiede organi propri con cui pensare',
              'L\'anima umana non può diventare un\'intelligenza angelica',
              'L\'anima è una funzione dell\'organismo, come la vista'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la virtù ha bisogno di un premio per avere senso? Una parola.'}
  ]
}
];

/* Controllo di equilibrio: se una risposta giusta è molto più
   lunga delle sue alternative, si riconosce senza studiare.
   Questa funzione lo segnala in console durante lo sviluppo. */
function bancaSquilibrata(){
  const problemi = [];
  BANCA.forEach(b => b.domande.forEach(d => {
    if(d.tipo !== 'scelta') return;
    const lun = d.opzioni.map(o => o.length);
    const giusta = lun[d.giusta];
    const altre = lun.filter((_,i) => i !== d.giusta);
    const media = altre.reduce((a,b)=>a+b,0) / altre.length;
    if(giusta > media * 1.35) problemi.push([b.titolo.slice(-18), d.testo.slice(0,40), giusta, Math.round(media)]);
  }));
  return problemi;
}
