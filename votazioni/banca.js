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
  ]},
{
  titolo: 'Filosofia moderna · 3 — Rinascimento e religione',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: siamo liberi di scegliere il nostro destino? Una parola.'},

    {tipo:'scelta', testo:'Perché il platonismo rinascimentale non diventa una vera riforma religiosa?',
     opzioni:['Resta una sapienza per dotti, non parla alla vita di tutti',
              'Torna ai teologi antichi invece che alla parola di Cristo',
              'Non mette mai in discussione l\'autorità della Chiesa',
              'Riguarda la dottrina e non i costumi dei credenti'], giusta:0},

    {tipo:'scelta', testo:'Che cosa denuncia Erasmo nell\'Elogio della pazzia?',
     opzioni:['La distanza fra la fede autentica e le sue forme corrotte',
              'L\'ignoranza di chi non sa leggere il Vangelo in greco',
              'La vendita delle indulgenze e la ricchezza dei prelati',
              'L\'inutilità della teologia insegnata nelle università'], giusta:0},

    {tipo:'scelta', testo:'Qual è la posizione di Erasmo sulla guerra?',
     opzioni:['La rifiuta sempre, anche quando è detta giusta',
              'La ammette solo per difendere la fede cristiana',
              'La considera un male necessario fra gli Stati',
              'La condanna perché rovina i commerci e la cultura'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sostiene Erasmo nel «De libero arbitrio»?',
     opzioni:['La salvezza nasce dalla collaborazione fra l\'uomo e Dio',
              'L\'uomo è libero di scegliere fra il bene e il male',
              'Senza libertà la dignità umana non ha più alcun senso',
              'La grazia divina non basta da sola a salvare nessuno'], giusta:0},

    {tipo:'scelta', testo:'Perché Lutero considera la ragione nemica della fede?',
     opzioni:['Ragionare è iniziativa dell\'uomo, la fede è abbandono a Dio',
              'La ragione non può dimostrare nessuna verità rivelata',
              'La scolastica aveva tradito il messaggio del Vangelo',
              'La ragione porta a fidarsi delle opere invece che di Dio'], giusta:0},

    {tipo:'scelta', testo:'Che cosa risponde Lutero a chi lo accusa di fare di Dio l\'autore del male?',
     opzioni:['Dio non deve nulla a nessuno: giusto è ciò che vuole',
              'Il male serve alla compiutezza complessiva del creato',
              'Dio permette il male ma non lo vuole direttamente',
              'L\'uomo pecca per propria colpa, non per volere divino'], giusta:0},

    {tipo:'scelta', testo:'Perché in Calvino la predestinazione non porta all\'inerzia?',
     opzioni:['Il successo nel lavoro può essere segno del favore divino',
              'Il lavoro è comunque un dovere imposto da Dio all\'uomo',
              'Nessuno sa se è salvo, quindi conviene comportarsi bene',
              'La fede nei meriti di Cristo spinge ad agire nel mondo'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: chi deve interpretare un testo sacro? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 4 — Rinascimento e politica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: chi governa deve essere una brava persona? Una parola.'},

    {tipo:'scelta', testo:'Che cosa intende Machiavelli con «verità effettuale»?',
     opzioni:['La politica com\'è davvero, non come dovrebbe essere',
              'Il giudizio che la storia dà delle azioni dei governanti',
              'L\'efficacia con cui un principe raggiunge i propri scopi',
              'La realtà che si nasconde dietro le apparenze del potere'], giusta:0},

    {tipo:'scelta', testo:'Perché Machiavelli guarda alla Roma repubblicana?',
     opzioni:['Vi trova il momento di massima unità e libertà italiana',
              'Vi vede il modello di uno Stato retto dalla sola virtù',
              'Ritiene che ogni comunità debba tornare alle proprie origini',
              'Considera i suoi ordinamenti i migliori mai realizzati'], giusta:0},

    {tipo:'scelta', testo:'Che cosa significa che il principe deve «poter esser non buono»?',
     opzioni:['Deve saper usare il male quando la necessità lo impone',
              'Non deve lasciarsi frenare da nessuno scrupolo morale',
              'Deve apparire virtuoso anche quando non lo è affatto',
              'Deve considerare tutti gli uomini malvagi e ingiusti'], giusta:0},

    {tipo:'scelta', testo:'Che rapporto c\'è fra fortuna e virtù in Machiavelli?',
     opzioni:['La fortuna decide metà delle cose, la virtù può arginarla',
              'La virtù serve a prevedere i colpi che la fortuna prepara',
              'La fortuna colpisce dove non trova un ordine che le resista',
              'La virtù rende l\'uomo indipendente dai casi della sorte'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa fonda Grozio il diritto naturale?',
     opzioni:['Sulla razionalità che costituisce la natura dell\'uomo',
              'Sulla volontà con cui Dio ha ordinato il mondo umano',
              'Sul consenso che tutti i popoli danno a certe norme',
              'Sull\'istinto di socievolezza presente in ogni persona'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia il contrattualismo di Grozio?',
     opzioni:['Il potere del sovrano viene dai cittadini, non da Dio',
              'Il sovrano resta comunque vincolato al diritto naturale',
              'Le leggi dello Stato valgono solo se sono ragionevoli',
              'I sudditi possono revocare il potere che hanno concesso'], giusta:0},

    {tipo:'scelta', testo:'Da quale osservazione nasce l\'Utopia di Moro?',
     opzioni:['I contadini inglesi, cacciati dai pascoli, finiscono a rubare',
              'La proprietà privata genera per sua natura disuguaglianza',
              'Le leggi puniscono i poveri invece di rimuoverne le cause',
              'L\'aristocrazia terriera si arricchisce a spese del popolo'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: immaginare una società perfetta serve a qualcosa? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 5 — Telesio, Bruno, Campanella',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: la natura è una macchina o un essere vivo? Una parola.'},

    {tipo:'scelta', testo:'Che cosa distingue la filosofia della natura dalla magia?',
     opzioni:['Non pretende di forzare i segreti naturali con i riti',
              'Non ammette che la natura sia animata da forze vitali',
              'Studia la natura con l\'osservazione e con l\'esperienza',
              'Rinuncia a ogni pretesa di dominare le forze naturali'], giusta:0},

    {tipo:'scelta', testo:'Quali sono i tre princìpi della natura secondo Telesio?',
     opzioni:['Il caldo, il freddo e la materia su cui essi agiscono',
              'Il fuoco, la terra e l\'anima che li tiene insieme',
              'Il Sole, la Terra e il movimento che li congiunge',
              'La forma, la materia e il moto che le unisce'], giusta:0},

    {tipo:'scelta', testo:'Qual è il bene supremo nella morale di Telesio?',
     opzioni:['Conservare il proprio spirito vitale, come ogni essere',
              'Provare piacere ed evitare per quanto possibile il dolore',
              'Tenere le passioni entro la misura che la virtù impone',
              'Vivere secondo la natura, cioè secondo la ragione'], giusta:0},

    {tipo:'scelta', testo:'Che cosa significa in Bruno «mens insita omnibus»?',
     opzioni:['Dio è l\'anima presente dentro a tutte le cose del mondo',
              'Dio resta al di sopra del cosmo e non si può conoscere',
              'Dio si manifesta nelle forme che plasmano la materia',
              'Dio coincide senza residui con la natura nel suo insieme'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rappresenta il mito di Atteone per Bruno?',
     opzioni:['L\'anima che, cercando la natura, diventa natura essa stessa',
              'Il filosofo punito da chi difende le credenze tradizionali',
              'Il desiderio infinito che consuma chi cerca l\'assoluto',
              'La ragione che si perde quando pretende di vedere Dio'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la «conoscenza innata» in Campanella?',
     opzioni:['Il sapere originario che l\'anima ha di se stessa',
              'L\'insieme delle verità che Dio ha posto in ogni mente',
              'La sensibilità di cui è dotato ogni ente della natura',
              'La religione naturale presente in tutti gli uomini'], giusta:0},

    {tipo:'scelta', testo:'Quali sono le tre primalità dell\'essere per Campanella?',
     opzioni:['Potenza, sapienza e amore, illimitate soltanto in Dio',
              'Necessità, fato e armonia con cui Dio governa il mondo',
              'Potenza, sapienza e amore, cui si oppone il non essere',
              'Impotenza, insipienza e odio, propri delle cose finite'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la scienza nasce contro la magia o da essa? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 6 — La rivoluzione scientifica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa ci fa abbandonare un\'idea in cui credevamo? Una parola.'},

    {tipo:'scelta', testo:'Che cosa diventa la natura per la nuova scienza?',
     opzioni:['Un ordine oggettivo di leggi esprimibili in matematica',
              'Un insieme di forze vive che l\'uomo può dominare',
              'Una macchina che funziona senza alcun fine interno',
              'Un libro che Dio ha scritto perché l\'uomo lo legga'], giusta:0},

    {tipo:'scelta', testo:'Perché il sistema geocentrico era rimasto saldo per secoli?',
     opzioni:['Senso comune, Aristotele, metafisica e teologia lo confermavano',
              'Nessuno disponeva di strumenti capaci di smentirlo',
              'La Chiesa puniva chi osava metterlo in discussione',
              'I calcoli astronomici che ne derivavano funzionavano bene'], giusta:0},

    {tipo:'scelta', testo:'Che cosa resta conservatore nel sistema di Copernico?',
     opzioni:['L\'universo chiuso, le sfere reali e i moti circolari',
              'L\'idea che la Terra occupi una posizione privilegiata',
              'La convinzione che il modello sia solo un calcolo utile',
              'Il rifiuto di attribuire alla Terra un moto su se stessa'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa Osiander alla prima edizione di Copernico?',
     opzioni:['Vi premette che il sistema è solo un\'ipotesi di calcolo',
              'Ne cambia il titolo per attenuarne la portata dirompente',
              'Ne firma la prefazione senza il consenso dell\'autore',
              'Vi aggiunge una difesa contro le obiezioni dei teologi'], giusta:0},

    {tipo:'scelta', testo:'Qual è il contributo decisivo di Tycho Brahe?',
     opzioni:['Nega che le sfere celesti siano corpi solidi e reali',
              'Colloca i pianeti attorno al Sole e il Sole attorno alla Terra',
              'Raccoglie le osservazioni su cui lavorerà poi Keplero',
              'Sostituisce alle orbite circolari il concetto matematico di orbita'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma la seconda legge di Keplero?',
     opzioni:['Il raggio che unisce pianeta e Sole copre aree uguali in tempi uguali',
              'Le orbite dei pianeti sono ellissi con il Sole in uno dei fuochi',
              'I pianeti vicini al Sole compiono la rivoluzione più in fretta',
              'Il quadrato del periodo è proporzionale al cubo della distanza'], giusta:0},

    {tipo:'scelta', testo:'Che cosa aggiunge Bruno alla rivoluzione astronomica?',
     opzioni:['Abbatte i confini del cosmo: l\'universo è infinito e senza centro',
              'Sostiene che esistano infiniti mondi abitati da esseri razionali',
              'Nega ogni differenza di sostanza fra il cielo e la Terra',
              'Ricava l\'infinità del mondo dall\'infinita potenza di Dio'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: sapere di non essere al centro ci diminuisce? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 7 — Francesco Bacone',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa ci impedisce di vedere le cose come sono? Una parola.'},

    {tipo:'scelta', testo:'Che cosa significa la formula «sapere è potere»?',
     opzioni:['Conoscendo le leggi della natura l\'uomo estende il suo dominio',
              'La scienza serve a produrre invenzioni utili alla comunità',
              'Chi possiede il sapere finisce per comandare sugli altri',
              'Si vince la natura soltanto obbedendo alle sue regole'], giusta:0},

    {tipo:'scelta', testo:'Perché per Bacone l\'esperimento vale più della semplice osservazione?',
     opzioni:['Nell\'esperimento è lo scienziato a interrogare la natura',
              'I sensi da soli registrano i fatti in modo passivo',
              'Solo l\'esperimento permette di misurare i fenomeni',
              'L\'osservazione non riesce a cogliere le forze nascoste'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono gli «idoli della spelonca»?',
     opzioni:['I pregiudizi che ciascuno si forma per carattere ed educazione',
              'Gli errori comuni a tutti gli uomini per la loro stessa natura',
              'Le distorsioni che il linguaggio comune impone al pensiero',
              'Le dottrine filosofiche che presentano mondi immaginari'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono gli «idoli del teatro»?',
     opzioni:['I sistemi filosofici che costruiscono mondi di finzione',
              'Le parole che designano cose che non esistono affatto',
              'Le dimostrazioni che sembrano valide ma non lo sono',
              'Le opinioni che la folla accetta senza mai verificarle'], giusta:0},

    {tipo:'scelta', testo:'Perché la verità è «figlia del tempo»?',
     opzioni:['Il mondo di oggi è più vecchio, quindi sa più degli antichi',
              'Ogni epoca corregge gli errori di quella che l\'ha preceduta',
              'Le conoscenze si accumulano grazie a nuovi esperimenti',
              'Nessuna autorità può stabilire ciò che è vero e ciò che è falso'], giusta:0},

    {tipo:'scelta', testo:'A che cosa serve l\'«istanza cruciale»?',
     opzioni:['A decidere fra due ipotesi che sembrano ugualmente probabili',
              'A verificare se l\'ipotesi formulata regge alla prova dei fatti',
              'A escludere tutte le cause incompatibili con il fenomeno',
              'A confermare in via definitiva la legge che si è trovata'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rappresentano le api nella metafora di Bacone?',
     opzioni:['Il metodo che raccoglie dati e poi li elabora con la ragione',
              'Gli scienziati che lavorano insieme per un fine comune',
              'Chi accumula esperienze senza saperle mai ordinare',
              'Chi costruisce sistemi ricavandoli dalla propria mente'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la scienza deve servire a qualcosa o basta a se stessa? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 8 — Galileo Galilei',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa conta di più, un\'autorità o un\'osservazione? Una parola.'},

    {tipo:'scelta', testo:'Come Galilei tiene insieme Bibbia e scienza?',
     opzioni:['Sono due libri di Dio: uno insegna la salvezza, l\'altro le leggi',
              'La scienza va corretta ogni volta che contraddice le Scritture',
              'La Bibbia parla in modo adatto a chi non sa di astronomia',
              'Fra i due non può esserci contrasto, perché entrambi vengono da Dio'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rimprovera Galilei agli aristotelici del suo tempo?',
     opzioni:['Consultano i libri invece di guardare la natura reale',
              'Difendono un maestro che non hanno mai davvero capito',
              'Rifiutano di usare la matematica per studiare i fenomeni',
              'Confondono l\'autorità di Aristotele con quella della Bibbia'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma il principio d\'inerzia?',
     opzioni:['Un corpo conserva quiete o moto uniforme senza forze esterne',
              'Il moto continua anche quando la forza che lo causa è cessata',
              'La quiete non è più lo stato naturale dei corpi terrestri',
              'Ogni corpo tende a raggiungere il proprio luogo naturale'], giusta:0},

    {tipo:'scelta', testo:'Che cosa dimostrano i satelliti di Giove?',
     opzioni:['Un corpo in moto può avere altri corpi che gli orbitano attorno',
              'La Terra non è l\'unico centro di rotazione dell\'universo',
              'Il sistema di Copernico spiega meglio i moti osservati',
              'Il cielo contiene molti più corpi di quanti se ne vedano'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la «sensata esperienza» galileiana?',
     opzioni:['L\'osservazione ordinata dei fatti, guidata da un\'ipotesi',
              'L\'esperienza quotidiana che i sensi ci offrono ogni giorno',
              'La verifica sperimentale di ciò che il calcolo ha previsto',
              'La misura esatta dei fenomeni compiuta con strumenti'], giusta:0},

    {tipo:'scelta', testo:'Perché Galilei rifiuta il finalismo nella scienza?',
     opzioni:['Della natura possiamo sapere come opera, non perché',
              'Le cause finali sono utili solo a lodare la grandezza di Dio',
              'Nessun fine naturale si può misurare o dimostrare',
              'Attribuire fini alla natura significa giudicarla da uomini'], giusta:0},

    {tipo:'scelta', testo:'Quali proprietà dei corpi sono oggettive per Galilei?',
     opzioni:['Figura, grandezza, luogo, tempo e movimento del corpo',
              'Quelle che restano identiche per chiunque le osservi',
              'Quelle che si possono esprimere in termini matematici',
              'Colori, sapori e suoni, che i sensi colgono direttamente'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: uno scienziato deve abiurare per salvarsi? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 9 — Cartesio',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: di che cosa sei assolutamente certo? Una parola.'},

    {tipo:'scelta', testo:'Che cosa cerca Cartesio quando esce dal collegio di La Flèche?',
     opzioni:['Un metodo per distinguere il vero dal falso, non altre nozioni',
              'Una scienza capace di unificare tutti i saperi conosciuti',
              'La certezza che i suoi maestri non erano riusciti a dargli',
              'Un sapere utile alla vita e non soltanto speculativo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa prescrive la regola dell\'analisi?',
     opzioni:['Dividere ogni difficoltà in quante più parti è possibile',
              'Accettare solo ciò che si presenta chiaro e distinto',
              'Procedere per gradi dalle cose semplici a quelle complesse',
              'Rivedere tutto il percorso per non tralasciare nulla'], giusta:0},

    {tipo:'scelta', testo:'A che cosa serve l\'ipotesi del genio maligno?',
     opzioni:['A rendere dubbie anche le verità della matematica',
              'A spingere il dubbio fino al suo limite estremo',
              'A mostrare che i sensi possono sempre ingannarci',
              'A mettere in dubbio l\'esistenza del mondo esterno'], giusta:0},

    {tipo:'scelta', testo:'Perché il cogito resiste a ogni dubbio?',
     opzioni:['Per dubitare bisogna pensare, e per pensare bisogna esistere',
              'Chi afferma di non esistere si contraddice nel dirlo',
              'Il pensiero è l\'unica cosa che nessuno può togliermi',
              'Anche se tutto fosse falso, resterebbe vero che penso'], giusta:0},

    {tipo:'scelta', testo:'Che cosa obietta Hobbes al cogito?',
     opzioni:['Dal fatto che penso non segue che io sia uno spirito',
              'Il cogito è la conclusione di un sillogismo nascosto',
              'La regola dell\'evidenza viene prima del cogito stesso',
              'La sostanza che pensa potrebbe essere il cervello'], giusta:0},

    {tipo:'scelta', testo:'Perché Cartesio ha bisogno di dimostrare che Dio esiste?',
     opzioni:['Solo un Dio che non inganna garantisce il mondo esterno',
              'Senza Dio non si spiega da dove venga l\'idea di infinito',
              'La certezza dell\'io da sola non basta a fondare la scienza',
              'Occorre un principio che sia superiore al genio maligno'], giusta:0},

    {tipo:'scelta', testo:'Da che cosa nasce l\'errore, secondo Cartesio?',
     opzioni:['La volontà giudica là dove l\'intelletto non vede chiaro',
              'L\'intelletto umano è limitato e non coglie ogni cosa',
              'I sensi trasmettono alla mente informazioni ingannevoli',
              'Le passioni deviano il giudizio dalla via della ragione'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: siamo la nostra mente o anche il nostro corpo? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 10 — Spinoza',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: siamo davvero liberi di volere quello che vogliamo? Una parola.'},

    {tipo:'scelta', testo:'Perché Spinoza conclude che esiste una sola sostanza?',
     opzioni:['Ciò che dipende da altro per esistere non è sostanza',
              'Due sostanze si limiterebbero l\'una con l\'altra',
              'La sostanza è causa di sé e non ha bisogno di nulla',
              'Ogni sostanza dovrebbe avere attributi tutti suoi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa significa la formula «Deus sive Natura»?',
     opzioni:['Dio e la natura sono la stessa identica sostanza',
              'Dio non sta fuori dal mondo che ha prodotto',
              'La natura è l\'insieme di tutto ciò che esiste',
              'Dio si manifesta nell\'ordine geometrico del cosmo'], giusta:0},

    {tipo:'scelta', testo:'Che rapporto c\'è fra natura naturante e natura naturata?',
     opzioni:['La seconda è nella prima: la causa non è fuori dall\'effetto',
              'La prima produce la seconda come Dio produce il creato',
              'Sono la sostanza vista come causa e come effetto',
              'La prima è Dio con i suoi attributi, la seconda sono i modi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma il parallelismo psico-fisico?',
     opzioni:['A ogni moto del corpo corrisponde un\'idea nella mente',
              'Mente e corpo non possono agire l\'una sull\'altro',
              'Il corpo è il volto esterno di ciò che la mente è dentro',
              'La causa di un\'idea è sempre e soltanto un\'altra idea'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il conatus?',
     opzioni:['Lo sforzo con cui ogni cosa tende a conservare il proprio essere',
              'Il desiderio consapevole che muove ogni azione umana',
              'La forza che spinge l\'uomo verso ciò che gli giova',
              'L\'appetito che riguarda insieme la mente e il corpo'], giusta:0},

    {tipo:'scelta', testo:'In che cosa consiste la libertà per Spinoza?',
     opzioni:['Nel comprendere le cause necessarie che ci determinano',
              'Nel sottrarsi al dominio delle passioni con la ragione',
              'Nel riconoscere di essere una parte finita dell\'infinito',
              'Nell\'agire secondo le sole leggi della propria natura'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il terzo genere di conoscenza?',
     opzioni:['Vedere le cose singole alla luce dell\'unica sostanza',
              'Collegare i fenomeni secondo rapporti di causa ed effetto',
              'Cogliere il mondo dal punto di vista dell\'eternità',
              'Comprendere l\'ordine necessario di tutto ciò che esiste'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: capire perché soffriamo ci fa soffrire di meno? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 11 — Leibniz',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: perché esiste il male, se il mondo ha un ordine? Una parola.'},

    {tipo:'scelta', testo:'Che cosa distingue l\'ordine di Leibniz da quello di Spinoza?',
     opzioni:['È contingente, frutto di una scelta e non di necessità',
              'Ammette accanto alle cause anche i fini della natura',
              'Lascia spazio alla libertà di Dio e a quella dell\'uomo',
              'Non coincide con Dio ma è stato da lui prodotto'], giusta:0},

    {tipo:'scelta', testo:'Che cosa caratterizza le verità di fatto?',
     opzioni:['Il loro contrario resta sempre logicamente possibile',
              'Riguardano ciò che accade realmente nel mondo',
              'Si fondano sul principio di ragion sufficiente',
              'Non si possono ricavare senza ricorrere all\'esperienza'], giusta:0},

    {tipo:'scelta', testo:'Che cosa significa che la ragion sufficiente «inclina senza necessitare»?',
     opzioni:['Spiega con certezza perché accade, ma il contrario resta possibile',
              'Rende un evento probabile senza però renderlo inevitabile',
              'Determina la scelta ma non toglie la libertà a chi sceglie',
              'Vale per le verità di fatto e non per quelle di ragione'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è una monade?',
     opzioni:['Una sostanza semplice, inestesa e indivisibile: un atomo spirituale',
              'Il punto di vista da cui una parte rispecchia tutto l\'universo',
              'L\'elemento ultimo di cui sono fatti i corpi e le anime',
              'Una forza che non riceve nulla dall\'esterno di se stessa'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono le «piccole percezioni»?',
     opzioni:['Rappresentazioni confuse di cui non siamo consapevoli',
              'Le percezioni proprie delle monadi meno elevate',
              'I gradi minimi attraverso cui la natura non fa salti',
              'Gli stati che precedono la vera e propria appercezione'], giusta:0},

    {tipo:'scelta', testo:'Che problema risolve l\'armonia prestabilita?',
     opzioni:['L\'accordo fra anima e corpo, che non possono agire l\'uno sull\'altra',
              'La comunicazione fra monadi che non hanno alcuna finestra',
              'L\'intervento continuo di Dio richiesto dagli occasionalisti',
              'La coincidenza fra le leggi meccaniche e quelle spirituali'], giusta:0},

    {tipo:'scelta', testo:'Perché questo è il migliore dei mondi possibili?',
     opzioni:['Non tutti i beni stanno insieme: Dio sceglie il male minore',
              'Contiene la minor quantità di male fra i mondi pensabili',
              'Dio, essendo perfetto, non poteva sceglierne uno peggiore',
              'La libertà umana vale più del male che essa produce'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la libertà vale il prezzo che ci fa pagare? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 12 — Hobbes',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: senza leggi, come ci comporteremmo? Una parola.'},

    {tipo:'scelta', testo:'Che cos\'è il ragionamento per Hobbes?',
     opzioni:['Un calcolo: si addizionano e si sottraggono concetti',
              'L\'uso dei segni con cui il linguaggio nomina le cose',
              'La ricerca delle cause che generano i fenomeni',
              'Una deduzione che va dalle premesse alle conclusioni'], giusta:0},

    {tipo:'scelta', testo:'Di che cosa possiamo avere conoscenza certa?',
     opzioni:['Solo di ciò che l\'uomo stesso costruisce: matematica e politica',
              'Solo delle cause che siamo capaci di risalire dagli effetti',
              'Solo dei corpi, perché sono le uniche cose che esistono',
              'Solo di ciò che si può dedurre come in geometria'], giusta:0},

    {tipo:'scelta', testo:'Che cosa risponde Hobbes al cogito di Cartesio?',
     opzioni:['La cosa che pensa potrebbe benissimo essere il corpo',
              'Nulla di ciò che esiste può essere detto incorporeo',
              'Anche l\'anima è fatta di particelle sottilissime',
              'Il pensiero è movimento prodotto da corpi esterni'], giusta:0},

    {tipo:'scelta', testo:'Perché nello stato di natura scoppia la guerra di tutti contro tutti?',
     opzioni:['Gli uomini sono ugualmente vulnerabili e i beni non bastano',
              'Ciascuno vanta un diritto illimitato su qualunque cosa',
              'Manca un potere capace di far rispettare i patti stretti',
              'Nessuno riconosce ciò che è giusto e ciò che è ingiusto'], giusta:0},

    {tipo:'scelta', testo:'Che differenza c\'è fra diritto naturale e legge naturale?',
     opzioni:['Il primo è l\'istinto illimitato, la seconda una regola di prudenza',
              'Il primo va superato, la seconda indica come farlo',
              'Il primo appartiene a ciascuno, la seconda vale per tutti',
              'Il primo viene dalla natura, la seconda dalla ragione umana'], giusta:0},

    {tipo:'scelta', testo:'Perché per Hobbes il potere sovrano non può essere diviso?',
     opzioni:['Dividerlo porta all\'oligarchia oppure alla guerra civile',
              'Ogni limite renderebbe il sovrano parte del contratto',
              'Un potere diviso non riuscirebbe a garantire la pace',
              'Il Leviatano dev\'essere irresistibile per essere obbedito'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma il giuspositivismo di Hobbes?',
     opzioni:['È giusto ciò che la legge comanda, non il contrario',
              'La morale non esiste prima che nasca lo Stato civile',
              'Non ha senso cercare una giustizia oltre il diritto vigente',
              'Il sovrano stabilisce che cosa sia il bene e che cosa il male'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: quanta libertà vale la sicurezza? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 13 — Locke',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: nasciamo con qualche idea già dentro di noi? Una parola.'},

    {tipo:'scelta', testo:'Con quale argomento Locke nega le idee innate?',
     opzioni:['Bambini e uomini incolti non le pensano affatto',
              'Ogni idea deriva dall\'esperienza dei nostri sensi',
              'Un\'idea che nessuno pensa non esiste in quella mente',
              'Anche le idee innate arriverebbero con l\'età della ragione'], giusta:0},

    {tipo:'scelta', testo:'Che differenza c\'è fra idee semplici e complesse?',
     opzioni:['Le prime la mente le riceve, le seconde le costruisce',
              'Le prime vengono dai sensi, le seconde dalla riflessione',
              'Le prime sono chiare, le seconde spesso oscure e confuse',
              'Le prime non si possono inventare, le seconde sì'], giusta:0},

    {tipo:'scelta', testo:'Quali sono le qualità secondarie dei corpi?',
     opzioni:['Colori, suoni e sapori: esistono solo per chi percepisce',
              'Estensione e figura, che restano anche senza osservatore',
              'Quelle che svaniscono appena cessa la nostra sensazione',
              'Quelle che dipendono dal moto delle particelle dei corpi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono le idee generali per Locke?',
     opzioni:['Segni che stanno per gruppi di cose particolari simili',
              'Concetti che la mente forma astraendo dalle differenze',
              'Nomi comodi per non dover nominare ogni individuo',
              'Costruzioni utili al linguaggio ma prive di realtà'], giusta:0},

    {tipo:'scelta', testo:'In che cosa lo stato di natura di Locke differisce da quello di Hobbes?',
     opzioni:['Gli uomini sono uguali nei diritti e guidati dalla ragione',
              'Non è una guerra, ma una convivenza pacifica e fragile',
              'È già regolato da una legge naturale che tutti conoscono',
              'Vi esistono già la proprietà e il diritto di difenderla'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fonda il diritto di proprietà?',
     opzioni:['Il lavoro: chi lavora una cosa vi mette qualcosa di sé',
              'Il fatto che ognuno è padrone della propria persona',
              'La legge dello Stato, che riconosce ciò che è di ciascuno',
              'L\'occupazione di ciò che Dio ha dato in comune a tutti'], giusta:0},

    {tipo:'scelta', testo:'Perché i cittadini di Locke conservano il diritto di resistenza?',
     opzioni:['Hanno dato al sovrano un mandato che resta revocabile',
              'La sovranità appartiene sempre e comunque al popolo',
              'Il contratto è bilaterale e vincola anche chi governa',
              'Esiste una legge naturale superiore a quelle dello Stato'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: si può tollerare chi non tollera? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 14 — Berkeley',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: le cose esistono anche quando nessuno le guarda? Una parola.'},

    {tipo:'scelta', testo:'A quale scopo Berkeley usa l\'empirismo di Locke?',
     opzioni:['A demolire il materialismo e a difendere la religione',
              'A dimostrare che tutto ciò che esiste è idea o spirito',
              'A togliere all\'ateismo la base su cui si era fondato',
              'A rendere evidente l\'esistenza di Dio a chiunque'], giusta:0},

    {tipo:'scelta', testo:'Perché Berkeley nega che esistano idee astratte?',
     opzioni:['Nessuno riesce a pensare un uomo che non sia un uomo preciso',
              'La mente non possiede il potere di separare ciò che è unito',
              'Ogni idea che si presenta alla mente è sempre particolare',
              'Credere nelle idee astratte è la radice di molti errori'], giusta:0},

    {tipo:'scelta', testo:'Come funzionano allora le idee generali?',
     opzioni:['Un\'idea particolare fa da segno per tutte quelle affini',
              'L\'universalità sta nell\'uso del segno, non nell\'idea',
              'Il geometra usa un triangolo qualsiasi per dimostrare',
              'Il nome comune sostituisce l\'elenco dei casi singoli'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma la formula «esse est percipi»?',
     opzioni:['L\'essere di una cosa consiste nell\'essere percepita',
              'Le cose non sono altro che collezioni di nostre idee',
              'Un oggetto non percepito sarebbe un pensato non pensato',
              'Non ha senso parlare di esistenza fuori da una mente'], giusta:0},

    {tipo:'scelta', testo:'Perché Berkeley respinge la distinzione fra qualità primarie e secondarie?',
     opzioni:['Non si dà estensione senza colore né figura senza grandezza',
              'Anche figura e movimento sono idee presenti nella mente',
              'Nessuna qualità è più oggettiva delle altre qualità',
              'Le qualità primarie non rappresentano nulla di reale'], giusta:0},

    {tipo:'scelta', testo:'Come distingue Berkeley le sensazioni dalle fantasie?',
     opzioni:['Le sensazioni sono più vive, ordinate e non dipendono da noi',
              'Le sensazioni ci vengono impresse da uno Spirito superiore',
              'Sulle fantasie il nostro spirito può agire liberamente',
              'Le sensazioni seguono regole fisse che possiamo prevedere'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono le leggi naturali, per Berkeley?',
     opzioni:['Le regole con cui Dio produce in noi le sensazioni',
              'Il linguaggio attraverso cui Dio parla agli uomini',
              'La grammatica che la scienza studia nei fenomeni',
              'L\'ordine che permette di orientarsi nella vita'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: che cosa resta del mondo se togliamo la materia? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 15 — Hume',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: perché siamo sicuri che domani sorgerà il sole? Una parola.'},

    {tipo:'scelta', testo:'Che differenza c\'è fra impressioni e idee?',
     opzioni:['Le impressioni hanno forza e vivacità che le idee non hanno',
              'Le idee sono copie sbiadite di impressioni già avute',
              'Le impressioni sono attuali, le idee soltanto ricordate',
              'Ogni idea deriva sempre da un\'impressione corrispondente'], giusta:0},

    {tipo:'scelta', testo:'Come spiega Hume le idee generali?',
     opzioni:['Un\'idea particolare fa da segno per abitudine acquisita',
              'La mente astrae ciò che più oggetti hanno in comune',
              'L\'immaginazione collega fra loro le idee che si somigliano',
              'Il nome comune richiama un gruppo di idee affini'], giusta:0},

    {tipo:'scelta', testo:'Perché il legame causale non si può conoscere a priori?',
     opzioni:['Prima di provarlo, ogni effetto è ugualmente pensabile',
              'Nessun ragionamento ricava l\'effetto dalla sola causa',
              'Solo l\'esperienza ci dice che cosa segue a che cosa',
              'La ragione da sola non arriva a nessuna previsione'], giusta:0},

    {tipo:'scelta', testo:'Perché il «congiungimento costante» non basta a fondare la causalità?',
     opzioni:['Dal fatto che è sempre accaduto non segue che debba accadere',
              'L\'esperienza riguarda il passato e non dice nulla del futuro',
              'Occorrerebbe supporre che la natura non cambi mai',
              'La ripetizione dei casi non produce nessuna necessità'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è allora il principio di causalità?',
     opzioni:['Una credenza che nasce in noi dall\'abitudine',
              'Un sentimento naturale che la ragione non giustifica',
              'Un\'aspettativa utile per orientarsi nella vita pratica',
              'Un\'associazione che l\'immaginazione compie da sé'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'io, secondo Hume?',
     opzioni:['Un fascio di percezioni che si susseguono senza sostegno',
              'Un\'abitudine a considerare uniti i nostri stati di coscienza',
              'Una successione di stati come attori su un palcoscenico',
              'Nulla di cui si possa avere un\'impressione unitaria'], giusta:0},

    {tipo:'scelta', testo:'Che rapporto c\'è fra ragione e passione nella morale di Hume?',
     opzioni:['La ragione non muove ad agire: lo fa solo la passione',
              'La ragione può soltanto constatare ciò che sentiamo',
              'Solo un impulso contrario può fermare una passione',
              'La ragione mostra quando un desiderio è irragionevole'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la morale nasce dalla ragione o dal sentire? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 16 — Vico',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: si conosce meglio ciò che si è fatto o ciò che si osserva? Una parola.'},

    {tipo:'scelta', testo:'Che cosa afferma il principio «verum ipsum factum»?',
     opzioni:['Si conosce davvero soltanto ciò che si è capaci di fare',
              'Chi produce una cosa ne conosce gli elementi costitutivi',
              'Il vero e il fatto sono per gli antichi la stessa parola',
              'La conoscenza piena appartiene a chi è causa di qualcosa'], giusta:0},

    {tipo:'scelta', testo:'Che cosa può conoscere pienamente l\'uomo, per Vico?',
     opzioni:['La matematica e la storia, che sono sue creazioni',
              'La natura, che Dio ha creato e l\'uomo può indagare',
              'La propria essenza, di cui ha coscienza immediata',
              'Le leggi che regolano il mondo delle nazioni civili'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rimprovera Vico a Cartesio?',
     opzioni:['Il cogito dà coscienza di esistere, non scienza dell\'essere',
              'Avere creduto che l\'uomo possa conoscere la propria essenza',
              'Avere confuso la coscienza, che hanno tutti, con la scienza',
              'Avere fondato tutto il sapere su un\'evidenza soggettiva'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la «boria dei dotti»?',
     opzioni:['Misurare il passato con le categorie mentali del presente',
              'La presunzione dei filosofi di spiegare ogni cosa',
              'Il disprezzo dei razionalisti verso il senso comune',
              'Proiettare le proprie astrazioni sui popoli primitivi'], giusta:0},

    {tipo:'scelta', testo:'Come collaborano filologia e filosofia nella Scienza nuova?',
     opzioni:['La prima accerta i fatti, la seconda ne trova le leggi',
              'La prima dà la coscienza del certo, la seconda la scienza del vero',
              'Insieme «inverano il certo» e «accertano il vero»',
              'Senza la seconda i fatti restano dettagli senza ordine'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue Vico dai giusnaturalisti?',
     opzioni:['Per lui il diritto naturale cambia con le età della storia',
              'Per lui il diritto non si fonda sulla ragione ma sulla forza',
              'Per lui ogni epoca possiede il proprio diritto naturale',
              'Per lui il diritto è una conquista e non un dato eterno'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma l\'eterogenesi dei fini?',
     opzioni:['I fini che gli uomini cercano servono a fini più alti',
              'Dagli impulsi individuali nascono le istituzioni civili',
              'La storia usa i propositi dei singoli per i propri scopi',
              'Nessuno ottiene esattamente ciò che si era proposto'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la storia si ripete o non torna mai indietro? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 17 — I caratteri dell\'Illuminismo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: perché è più comodo farsi dire cosa pensare? Una parola.'},

    {tipo:'scelta', testo:'Che cos\'è anzitutto l\'Illuminismo?',
     opzioni:['Un modo di usare la ragione, non un insieme di teorie',
              'L\'impegno a servirsi del proprio intelletto in pubblico',
              'Un movimento che vuole riformare il modo di vivere',
              'La fiducia che la ragione possa migliorare la società'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue il «filosofo» illuminista dal sapiente di prima?',
     opzioni:['Vive fra gli uomini e vuole riformare la realtà, non contemplarla',
              'Porta davanti alla ragione politica, religione e costumi',
              'Unisce la riflessione all\'attività pratica ed economica',
              'Non si occupa più delle questioni ultime della metafisica'], giusta:0},

    {tipo:'scelta', testo:'In che senso l\'Illuminismo va oltre il Rinascimento?',
     opzioni:['Toglie all\'umanesimo ogni residuo di carattere religioso',
              'Rende l\'uomo l\'unico artefice del proprio destino',
              'Colloca Dio in una sfera lontana dalle vicende del mondo',
              'Accelera in modo decisivo la laicizzazione della cultura'], giusta:0},

    {tipo:'scelta', testo:'Che cosa oppongono gli illuministi allo «spirito di sistema»?',
     opzioni:['L\'esigenza di connettere i saperi senza chiuderli in un sistema',
              'Il metodo analitico di Newton, che parte dai casi particolari',
              'Il rifiuto dei problemi che la ragione non può risolvere',
              'La convinzione che le questioni ultime siano irrilevanti'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma il deismo?',
     opzioni:['Dio ordina il mondo ma resta estraneo alle vicende umane',
              'Dio si conosce con la sola ragione, senza rivelazione',
              'Dio è l\'orologiaio che ha dato al mondo le sue leggi',
              'Dio esiste, ma non è quello delle religioni storiche'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il «bifrontismo» storico dell\'Illuminismo?',
     opzioni:['Guarda al passato con pessimismo e al futuro con fiducia',
              'Distrugge le vecchie credenze e insieme costruisce il nuovo',
              'Vede nella storia sia superstizione sia cammino di civiltà',
              'Condanna la tradizione ma crede nel progresso della ragione'], giusta:0},

    {tipo:'scelta', testo:'Che cosa caratterizza lo Stato di diritto?',
     opzioni:['Governano le leggi impersonali e non la volontà degli uomini',
              'Nessuna religione riceve un trattamento privilegiato',
              'I diritti dei cittadini sono garantiti contro ogni tirannia',
              'Il potere è limitato da norme che valgono per tutti'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la ragione basta a rendere migliori gli uomini? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 18 — Rousseau',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: il progresso ci ha resi migliori? Una parola.'},

    {tipo:'scelta', testo:'Che cosa sostiene Rousseau nel primo Discorso?',
     opzioni:['Le arti e le scienze hanno corrotto i costumi degli uomini',
              'La causa vera della corruzione è la disuguaglianza fra gli uomini',
              'Le scienze nascono dai vizi e non certo dalle virtù umane',
              'Le buone maniere insegnano ad apparire invece che a essere'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è lo stato di natura per Rousseau?',
     opzioni:['Un\'ipotesi razionale che serve a giudicare il presente',
              'Una condizione che forse non è mai esistita davvero',
              'Il momento in cui i bisogni erano pari alle risorse',
              'Uno stato di innocenza, né buono né cattivo in sé'], giusta:0},

    {tipo:'scelta', testo:'Che differenza c\'è fra amore di sé e amor proprio?',
     opzioni:['Il primo è naturale conservazione, il secondo culto della propria immagine',
              'Il primo appartiene all\'uomo naturale, il secondo a quello sociale',
              'Il primo non fa male a nessuno, il secondo genera conflitti',
              'Il primo è istinto, il secondo è un prodotto della vita in comune'], giusta:0},

    {tipo:'scelta', testo:'Che cosa segna la «grande rivoluzione» nella storia umana?',
     opzioni:['La proprietà privata, nata con l\'agricoltura e la metallurgia',
              'La divisione delle terre fra chi le lavora e chi le possiede',
              'La comparsa della prima distinzione fra i ricchi e i poveri',
              'La fine dell\'indipendenza di ciascuno dagli altri uomini'], giusta:0},

    {tipo:'scelta', testo:'Perché lo Stato nasce, secondo Rousseau, da un patto ingiusto?',
     opzioni:['I ricchi lo propongono per mettere al sicuro ciò che possiedono',
              'I poveri accettano credendo di guadagnarci la propria libertà',
              'Serve a rendere legale un sopruso già avvenuto di fatto',
              'Nasce dalla guerra dello stato civile e non da quello naturale'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue la volontà generale dalla volontà di tutti?',
     opzioni:['La prima mira al bene comune, la seconda somma gli interessi privati',
              'La prima appartiene al corpo politico, la seconda ai singoli',
              'La prima è sempre giusta, la seconda può creare privilegi',
              'Fra le due c\'è una differenza di qualità, non di quantità'], giusta:0},

    {tipo:'scelta', testo:'In che consiste l\'«educazione negativa» dell\'Emilio?',
     opzioni:['Non insegnare la virtù, ma proteggere dal vizio e dall\'errore',
              'Lasciare che tutto si sviluppi in modo spontaneo dall\'interno',
              'Fare in modo che ogni acquisizione sia una scoperta personale',
              'Evitare che la società corrompa la natura originaria del bambino'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la libertà si perde o si guadagna vivendo insieme? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 19 — Kant: il progetto filosofico',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: conoscere i propri limiti è una perdita o un guadagno? Una parola.'},

    {tipo:'scelta', testo:'Che cosa significa «criticare», in senso kantiano?',
     opzioni:['Interrogarsi sul fondamento, la validità e i limiti di un\'esperienza',
              'Giudicare una dottrina prima di accettarla come vera',
              'Chiedersi che cosa rende possibile una certa conoscenza',
              'Stabilire fin dove la ragione umana può spingersi'], giusta:0},

    {tipo:'scelta', testo:'Perché il criticismo è una «filosofia del limite»?',
     opzioni:['Tracciare il confine di un\'esperienza ne garantisce la validità dentro',
              'Riconosce che ogni possibilità umana è finita e condizionata',
              'Segna le colonne d\'Ercole oltre cui la ragione non può andare',
              'Mostra che non si può conoscere nulla al di là dell\'esperienza'], giusta:0},

    {tipo:'scelta', testo:'In che consiste il dogmatismo che Kant combatte?',
     opzioni:['Accettare dottrine senza chiedersi se la ragione possa fondarle',
              'Pretendere di dimostrare verità sul mondo che sta oltre i sensi',
              'Costruire sistemi metafisici che nessuna esperienza conferma',
              'Fidarsi dell\'autorità invece che del proprio intelletto'], giusta:0},

    {tipo:'scelta', testo:'Che cosa accetta e che cosa rifiuta Kant di Hume?',
     opzioni:['Accetta la sveglia dal sonno dogmatico, rifiuta l\'esito scettico',
              'Accetta i limiti della ragione, rifiuta che la scienza sia infondata',
              'Accetta la critica alla metafisica, rifiuta la rinuncia alla certezza',
              'Accetta il ruolo dell\'esperienza, rifiuta l\'abitudine come fondamento'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono spazio e tempo nella dissertazione del 1770?',
     opzioni:['Intuizioni pure: forme con cui la mente ordina i dati dei sensi',
              'Condizioni soggettive che precedono ogni esperienza possibile',
              'Le forme della conoscenza sensibile, distinte dalla materia',
              'Leggi indipendenti dalla sensazione ma necessarie a riceverla'], giusta:0},

    {tipo:'scelta', testo:'Che differenza c\'è fra fenomeno e noumeno?',
     opzioni:['Il primo è la cosa come appare, il secondo come è in sé',
              'Il primo lo coglie la sensibilità, il secondo l\'intelletto',
              'Il primo dipende dal soggetto, il secondo no',
              'Il primo si può conoscere, il secondo resta problematico'], giusta:0},

    {tipo:'scelta', testo:'A quale domanda risponde la Critica della ragion pratica?',
     opzioni:['Che cosa devo fare: le condizioni e i limiti della morale',
              'Che cosa posso sperare, oltre a ciò che posso sapere',
              'Che cosa posso sapere della realtà attraverso la scienza',
              'Che cos\'è l\'uomo, come essere che agisce nel mondo'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la ragione può giudicare se stessa? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 20 — Kant: la Critica della ragion pura',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: vediamo il mondo com\'è o come possiamo vederlo? Una parola.'},

    {tipo:'scelta', testo:'Che cosa sono i giudizi sintetici a priori?',
     opzioni:['Proposizioni insieme feconde e valide in modo necessario',
              'Giudizi che dicono qualcosa di nuovo senza venire dai sensi',
              'I princìpi su cui si reggono la matematica e la fisica',
              'Enunciati universali che l\'esperienza non può smentire'], giusta:0},

    {tipo:'scelta', testo:'Perché i giudizi analitici non bastano alla scienza?',
     opzioni:['Sono certi ma non aggiungono nulla a ciò che già sappiamo',
              'Il predicato è già contenuto nel concetto del soggetto',
              'Valgono sempre, ma non ci fanno conoscere il mondo',
              'Si ottengono per semplice analisi di un\'idea data'], giusta:0},

    {tipo:'scelta', testo:'In che consiste la «rivoluzione copernicana» di Kant?',
     opzioni:['È la realtà a modellarsi sulle forme della nostra mente',
              'Il soggetto non riceve passivamente ciò che conosce',
              'Conosciamo delle cose quello che noi stessi vi mettiamo',
              'Il rapporto fra chi conosce e l\'oggetto viene rovesciato'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il noumeno nel suo senso legittimo?',
     opzioni:['Un concetto-limite che circoscrive le pretese del conoscere',
              'La realtà pensata a prescindere dalle nostre forme a priori',
              'Il correlato necessario di ogni fenomeno che ci appare',
              'Ciò che solo un intelletto divino potrebbe intuire'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono le categorie?',
     opzioni:['Concetti puri con cui l\'intelletto unifica ciò che i sensi danno',
              'Le dodici funzioni supreme presenti in ogni giudizio',
              'Forme del pensiero e non forme dell\'essere delle cose',
              'Strutture innate che rendono pensabile ogni oggetto'], giusta:0},

    {tipo:'scelta', testo:'Che cosa dimostrano le antinomie della ragione?',
     opzioni:['Che la totalità del mondo non è mai oggetto di esperienza',
              'Che tesi opposte si possono sostenere con eguale forza',
              'Che l\'idea di mondo non ha alcuna validità conoscitiva',
              'Che la ragione entra in conflitto con se stessa'], giusta:0},

    {tipo:'scelta', testo:'Perché Kant respinge la prova ontologica di Dio?',
     opzioni:['L\'esistenza non è un predicato che si aggiunga a un concetto',
              'Da ciò che è pensato non si passa a ciò che è reale',
              'Cento talleri pensati e reali hanno lo stesso contenuto',
              'Il concetto di Dio non contiene la sua realtà effettiva'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: che cosa resta della metafisica dopo Kant? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 21 — Kant: la Critica della ragion pratica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: fare la cosa giusta per interesse vale lo stesso? Una parola.'},

    {tipo:'scelta', testo:'Che cosa vuol dire che la legge morale è un «fatto della ragione»?',
     opzioni:['Non si dimostra: la coscienza la trova già in sé',
              'Ogni uomo sa che certe cose vanno fatte e altre no',
              'È un dato immediato, non il risultato di un ragionamento',
              'La Critica non la fonda, ne analizza solo le condizioni'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue l\'imperativo categorico da quello ipotetico?',
     opzioni:['Comanda senza condizioni, non in vista di uno scopo',
              'Vale per chiunque e in qualunque circostanza si agisca',
              'Non dipende dal fatto che si voglia un certo risultato',
              'Ha la forma del «devi», non quella del «se vuoi»'], giusta:0},

    {tipo:'scelta', testo:'Che cosa chiede la prima formula dell\'imperativo categorico?',
     opzioni:['Che la massima della tua azione possa valere per tutti',
              'Che ciò che fai resti valido se lo facessero tutti',
              'Che il tuo criterio possa diventare una legge universale',
              'Che nessuna eccezione venga fatta a proprio vantaggio'], giusta:0},

    {tipo:'scelta', testo:'Perché la legge morale deve essere formale?',
     opzioni:['Un contenuto preciso la legherebbe a casi particolari',
              'Solo così può valere sempre e per chiunque agisca',
              'Prescrivere cose concrete toglierebbe libertà a chi agisce',
              'Non dice che cosa fare, ma come si deve volere'], giusta:0},

    {tipo:'scelta', testo:'Che differenza c\'è fra legalità e moralità?',
     opzioni:['La prima guarda l\'atto, la seconda l\'intenzione con cui è fatto',
              'La prima si accontenta che l\'azione sia conforme al dovere',
              'Solo la seconda richiede di agire per puro rispetto della legge',
              'Chi paga le tasse per paura è legale ma non morale'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'autonomia morale?',
     opzioni:['La volontà razionale si dà da sé la propria legge',
              'Nessuna forza esterna può fondare il dovere dell\'uomo',
              'Non il bene fonda la legge, ma la legge fonda il bene',
              'L\'uomo è insieme legislatore e suddito di se stesso'], giusta:0},

    {tipo:'scelta', testo:'Perché Kant postula l\'esistenza di Dio?',
     opzioni:['Serve che qualcuno faccia corrispondere felicità e virtù',
              'In questo mondo il merito e la felicità non coincidono',
              'Senza di lui il sommo bene non sarebbe nemmeno pensabile',
              'La ragione pratica ammette ciò che la teorica non prova'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la morale ha bisogno della religione? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 22 — Kant: la Critica del Giudizio',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: la bellezza sta nelle cose o in chi guarda? Una parola.'},

    {tipo:'scelta', testo:'Quale problema affronta la terza Critica?',
     opzioni:['L\'abisso fra la natura necessaria e la libertà morale',
              'Il rapporto fra il mondo che conosciamo e quello in cui agiamo',
              'La possibilità che la natura venga incontro ai fini dell\'uomo',
              'La mancanza di un ponte fra le prime due Critiche'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue il giudizio riflettente da quello determinante?',
     opzioni:['Nel primo l\'universale va cercato, nel secondo è già dato',
              'Il primo interpreta la natura, il secondo la determina',
              'Il primo esprime un bisogno umano, il secondo conosce',
              'Il primo non ha alcun valore scientifico, il secondo sì'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire che il bello piace «senza interesse»?',
     opzioni:['Non ci importa che l\'oggetto esista o sia nostro',
              'Il piacere estetico è puramente contemplativo',
              'Non desideriamo possedere ciò che troviamo bello',
              'Ci basta l\'immagine, non la cosa in se stessa'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la «finalità senza scopo»?',
     opzioni:['La forma appare ordinata senza rimandare a nessun fine',
              'Il bello sembra fatto apposta, ma non serve a nulla',
              'Un gioco di armonie che non rinvia ad alcun concetto',
              'L\'oggetto piace per come è fatto, non per ciò che fa'], giusta:0},

    {tipo:'scelta', testo:'Perché il giudizio di gusto può pretendere di valere per tutti?',
     opzioni:['Il gioco fra immaginazione e intelletto è uguale in ogni uomo',
              'Esiste un senso comune estetico condiviso da chiunque',
              'La stessa struttura mentale produce lo stesso accordo',
              'La forma dell\'oggetto colpisce tutti allo stesso modo'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il genio, secondo Kant?',
     opzioni:['Il talento per cui la natura stessa dà la regola all\'arte',
              'Chi crea opere originali che diventano modello per altri',
              'Chi produce il bello senza saper spiegare come lo fa',
              'Una capacità che, a differenza della scienza, non si insegna'], giusta:0},

    {tipo:'scelta', testo:'Che cosa ci rivela il sublime dinamico?',
     opzioni:['Che la nostra dignità morale non si piega alle forze naturali',
              'Che siamo materialmente piccoli ma spiritualmente grandi',
              'Che la vera sublimità sta nell\'animo di chi giudica',
              'Che la legge morale è il sublime per eccellenza'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la natura ha uno scopo o siamo noi a cercarglielo? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 23 — Kant: religione, diritto e storia',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: la pace fra i popoli è un sogno o un compito? Una parola.'},

    {tipo:'scelta', testo:'Che rapporto pone Kant fra morale e religione?',
     opzioni:['È la morale a fondare la fede, non il contrario',
              'La religione razionale è il nucleo di ogni fede autentica',
              'Anche la rivelazione va passata al vaglio della ragione',
              'La fede completa la morale senza mai precederla'], giusta:0},

    {tipo:'scelta', testo:'Perché il male radicale non toglie all\'uomo la responsabilità?',
     opzioni:['Nasce da una scelta libera, non da una necessità di natura',
              'Accanto ad esso resta una disposizione originaria al bene',
              'L\'uomo conosce la legge morale e sceglie di eluderla',
              'Non dipende da come siamo fatti fisicamente'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il diritto per Kant?',
     opzioni:['Le condizioni per cui la libertà di ognuno sta con quella altrui',
              'Il corrispettivo giuridico dell\'imperativo categorico morale',
              'Il limite reciproco che rende possibile la libertà di tutti',
              'L\'ordine che regola la coesistenza fra soggetti liberi'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il contratto originario?',
     opzioni:['Un\'idea a priori della ragione, non un fatto accaduto',
              'Il modello ideale cui ogni politica reale deve tendere',
              'Ciò che rende concettualmente possibile lo Stato',
              'Una necessità della ragione, non una data della storia'], giusta:0},

    {tipo:'scelta', testo:'Perché lo Stato di Kant è detto «formale»?',
     opzioni:['Non dice che cosa fare, ma come farlo senza ledere gli altri',
              'Non si occupa della felicità, che è cosa personale',
              'Garantisce le condizioni, non i fini di chi vi vive',
              'Lascia a ciascuno la scelta dei propri scopi di vita'], giusta:0},

    {tipo:'scelta', testo:'Perché una costituzione repubblicana favorisce la pace?',
     opzioni:['Chi deve subire la guerra è anche chi la deve approvare',
              'I cittadini ci pensano due volte prima di dichiararla',
              'Il sovrano assoluto invece non ne paga mai il prezzo',
              'Libertà e uguaglianza giuridica frenano ogni avventura'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'«insocievole socievolezza»?',
     opzioni:['La spinta a unirsi che convive con quella a contrastarsi',
              'Il conflitto che fa progredire l\'umanità nella storia',
              'La tendenza opposta che impedisce all\'uomo di adagiarsi',
              'Ciò che distingue gli uomini da un gregge di pecore'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: il conflitto ci fa crescere o ci distrugge? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 24 — Il Romanticismo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: si capisce di più con la ragione o con il sentimento? Una parola.'},

    {tipo:'scelta', testo:'Che cosa rifiutano davvero i romantici?',
     opzioni:['La ragione degli illuministi, non la ragione in quanto tale',
              'Una ragione che chiude le porte all\'infinito e alla metafisica',
              'Il modo scientifico di guardare la realtà umana profonda',
              'L\'idea che tutto si possa spiegare con l\'esperienza'], giusta:0},

    {tipo:'scelta', testo:'Perché l\'arte è così importante per i romantici?',
     opzioni:['È una via all\'assoluto che precede e completa la filosofia',
              'L\'artista intuisce ciò che il ragionamento non raggiunge',
              'La musica fa vivere direttamente l\'esperienza dell\'infinito',
              'La creazione non imita modelli ma nasce dalla libertà'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la Sehnsucht?',
     opzioni:['Il desiderio struggente di un assoluto che sempre sfugge',
              'La brama di ciò che non si potrà mai raggiungere',
              'Un desiderio che ha per oggetto il desiderio stesso',
              'L\'inquietudine che può rovesciarsi nel senso di vuoto'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'ironia romantica?',
     opzioni:['La coscienza che ogni cosa finita è nulla di fronte all\'infinito',
              'Il non prendere sul serio ciò che è soltanto provvisorio',
              'La superiorità di chi sa relativizzare tutto l\'esistente',
              'Il distacco da ogni manifestazione particolare dell\'assoluto'], giusta:0},

    {tipo:'scelta', testo:'Che cosa esprime il titanismo?',
     opzioni:['La sfida di chi combatte pur sapendo che perderà',
              'La ribellione contro forze più grandi dell\'uomo',
              'L\'atteggiamento di Prometeo che ruba il fuoco agli dèi',
              'L\'orgoglio che convive con il sentirsi schiacciati'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue la nazione romantica dal popolo illuminista?',
     opzioni:['Non nasce da un patto ma da lingua, storia e costumi comuni',
              'Non si sceglie: ci si trova a farne parte dalla nascita',
              'Ha un\'anima collettiva che precede le scelte dei singoli',
              'Si fonda su ciò che unisce di fatto, non su ciò che si decide'], giusta:0},

    {tipo:'scelta', testo:'Come concepiscono la natura i romantici?',
     opzioni:['Come un tutto vivente e animato, non come una macchina',
              'Come un organismo in cui le parti valgono per il tutto',
              'Come una forza spirituale retta da opposizioni interne',
              'Come una realtà che ha in sé dei fini e non solo cause'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: desiderare ciò che non si può avere è una condanna? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 25 — Fichte',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: la libertà è un dato di fatto o una conquista? Una parola.'},

    {tipo:'scelta', testo:'Perché i post-kantiani rifiutano la cosa in sé?',
     opzioni:['Sarebbe qualcosa di non pensato, e quindi impensabile',
              'Ogni oggetto esiste solo in rapporto a chi lo rappresenta',
              'Non si può ammettere ciò di cui non si ha coscienza',
              'Kant stesso l\'aveva definita una x del tutto sconosciuta'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa Fichte, tolta di mezzo la cosa in sé?',
     opzioni:['Fa dell\'Io un principio creatore e infinito di tutto',
              'Sposta il discorso dalla conoscenza alla metafisica',
              'Sostiene che fuori dello spirito non esiste nulla',
              'Attribuisce all\'Io non solo il pensiero ma la realtà'], giusta:0},

    {tipo:'scelta', testo:'Che cosa significa «Tathandlung»?',
     opzioni:['L\'Io è insieme l\'attività che agisce e il suo prodotto',
              'L\'essere dell\'Io deriva dal suo stesso agire',
              'L\'Io si crea da sé ponendo se stesso',
              'In principio non c\'è l\'essere ma l\'azione'], giusta:0},

    {tipo:'scelta', testo:'Perché l\'Io deve porre il non-io?',
     opzioni:['Senza un ostacolo da vincere non ci sarebbe sforzo né libertà',
              'Un soggetto senza oggetto non avrebbe alcun senso',
              'Serve un limite perché l\'Io possa realizzarsi come morale',
              'Il mondo esiste come teatro dell\'azione dell\'uomo'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è lo Streben?',
     opzioni:['Lo sforzo infinito con cui l\'io finito tende all\'Io assoluto',
              'La tensione che non raggiunge mai il proprio traguardo',
              'La perfezione intesa come cammino e non come risultato',
              'Il divenire liberi, che vale più dell\'essere liberi'], giusta:0},

    {tipo:'scelta', testo:'Da che cosa dipende la scelta fra idealismo e dogmatismo?',
     opzioni:['Da quel che si è come uomo: dal senso della propria libertà',
              'Dal partire dal soggetto oppure dall\'oggetto per spiegare',
              'Dall\'ammettere o negare che la libertà sia reale',
              'Dal considerarsi liberi o determinati dalle cose'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa fonda Fichte il primato della Germania nei Discorsi?',
     opzioni:['Sulla lingua originaria rimasta intatta, non sulle armi',
              'Su un primato culturale e spirituale, non politico',
              'Sull\'aver dato all\'Europa la Riforma, Leibniz e Kant',
              'Sull\'essere il popolo che si è conservato integro'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la filosofia che scegliamo dice chi siamo? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 26 — Schelling',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: la natura è viva o è soltanto materia? Una parola.'},

    {tipo:'scelta', testo:'Che cos\'è l\'Assoluto per Schelling?',
     opzioni:['L\'identità indistinta di spirito e natura, prima di ogni differenza',
              'Il fondamento comune del soggetto e dell\'oggetto',
              'Ciò che non si riduce né all\'Io di Fichte né alla sostanza',
              'L\'unità in cui conscio e inconscio non sono ancora separati'], giusta:0},

    {tipo:'scelta', testo:'Perché Schelling rifiuta il finalismo teologico?',
     opzioni:['Un Dio-architetto esterno toglie autonomia alla natura',
              'La finalità dev\'essere interna e non imposta da fuori',
              'La natura si organizza da sé, non è un\'opera d\'arte',
              'Il progetto non può stare nella mente di un artefice'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'anima del mondo?',
     opzioni:['Lo spirito inconscio che dall\'interno organizza la natura',
              'Il principio che tiene unito l\'organico e l\'inorganico',
              'La forza vivificatrice presente in tutto l\'universo',
              'Ciò che rende la natura un solo grande organismo'], giusta:0},

    {tipo:'scelta', testo:'In che senso la natura è «preistoria dello spirito»?',
     opzioni:['È spirito addormentato che si sveglia solo nell\'uomo',
              'È il passato trascendentale di ogni coscienza',
              'Con l\'uomo la natura ritorna finalmente a se stessa',
              'I suoi prodotti sono tentativi falliti di riflettere sé'], giusta:0},

    {tipo:'scelta', testo:'Perché l\'arte rivela l\'Assoluto meglio della filosofia?',
     opzioni:['Vi si uniscono subito ispirazione inconscia ed esecuzione consapevole',
              'Il genio produce forme finite cariche di senso infinito',
              'Solo lì spirito e natura si armonizzano senza attendere',
              'È il luogo dove ciò che è separato arde in un\'unica fiamma'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia con l\'idea del «Dio che diviene»?',
     opzioni:['L\'Assoluto non è più identità ferma ma realtà in movimento',
              'In Dio convivono un fondo oscuro e la ragione che lo vince',
              'La storia diventa il modo in cui Dio si rivela a se stesso',
              'Il male trova posto dentro il divino invece che fuori'], giusta:0},

    {tipo:'scelta', testo:'Che cosa contesta Schelling a Hegel nella filosofia positiva?',
     opzioni:['Che l\'esistenza delle cose non si può dedurre dalla ragione',
              'Che il reale non coincide senza residui con il razionale',
              'Che davanti alla nuda realtà la ragione resta attonita',
              'Che pensare l\'essenza è diverso dal constatare l\'esistenza'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: esiste qualcosa che la ragione non potrà mai spiegare? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 27 — Hegel: i fondamenti del sistema',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: tutto ciò che accade ha una sua ragione? Una parola.'},

    {tipo:'scelta', testo:'Che cosa rimprovera il giovane Hegel al mondo ebraico?',
     opzioni:['Di aver posto Dio lontano, rompendo l\'unità con la natura',
              'Di aver costruito una religione fatta di comandi esterni',
              'Di essersi chiuso in ostilità verso gli altri popoli',
              'Di aver scelto un Dio geloso che esige fedeltà esclusiva'], giusta:0},

    {tipo:'scelta', testo:'In che senso il finito non esiste, per Hegel?',
     opzioni:['Esiste solo come momento e parte dell\'infinito',
              'È un\'espressione parziale dell\'unico organismo reale',
              'Non ha una realtà autonoma separata dal tutto',
              'Vale come la parte vale rispetto all\'intero'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue l\'Assoluto di Hegel da quello di Spinoza?',
     opzioni:['È soggetto spirituale in divenire, non sostanza immobile',
              'È un risultato, non un punto di partenza già dato',
              'Si completa attraverso il proprio stesso sviluppo',
              'Non è statico ma dialettico nella sua struttura'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma la seconda parte del celebre aforisma?',
     opzioni:['La realtà non è caos: è il dispiegarsi di una struttura razionale',
              'Ciò che esiste non poteva essere diverso da com\'è',
              'Nel mondo si realizza un ordine necessario e non casuale',
              'Ogni momento della realtà nasce da quelli che lo precedono'], giusta:0},

    {tipo:'scelta', testo:'Che cosa significa la metafora della nòttola di Minerva?',
     opzioni:['La filosofia comprende una realtà solo quando è già compiuta',
              'Il pensiero arriva sempre dopo che i fatti sono accaduti',
              'La filosofia non guida il mondo: ne prende atto',
              'Capire ciò che è viene prima di dire ciò che dovrebbe essere'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire «Aufhebung»?',
     opzioni:['Un superamento che insieme toglie e conserva ciò che supera',
              'La sintesi mantiene il vero della tesi e dell\'antitesi',
              'Il positivo che nasce dalla negazione del negativo',
              'Un progresso che porta più in alto ciò che c\'era prima'], giusta:0},

    {tipo:'scelta', testo:'Che cosa contesta Hegel all\'Assoluto di Schelling?',
     opzioni:['È un\'unità indistinta in cui ogni differenza si perde',
              'È una notte in cui tutte le vacche appaiono nere',
              'Manca di vita e di movimento dialettico interno',
              'Non è soggetto ma soltanto identità immobile'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: capire il mondo basta, o bisogna cambiarlo? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 28 — Hegel: la Fenomenologia dello spirito',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: abbiamo bisogno degli altri per sapere chi siamo? Una parola.'},

    {tipo:'scelta', testo:'Che cosa descrive la Fenomenologia?',
     opzioni:['Il cammino con cui la coscienza scopre di essere spirito',
              'La storia dello spirito che appare via via a se stesso',
              'Il percorso che porta la coscienza al sapere assoluto',
              'Le tappe attraverso cui l\'uomo conquista la verità'], giusta:0},

    {tipo:'scelta', testo:'Perché la certezza sensibile è la conoscenza più povera?',
     opzioni:['Sa solo che c\'è un «questo», e non riesce nemmeno a dirlo',
              'Non può esprimere il suo oggetto senza usare un concetto',
              'La sua pretesa di concretezza finisce nell\'indeterminato',
              'Coglie il qui e ora ma nient\'altro di ciò che vede'], giusta:0},

    {tipo:'scelta', testo:'Perché l\'appetito non basta all\'autocoscienza?',
     opzioni:['Per sapersi tale ha bisogno di un\'altra autocoscienza',
              'Consumare le cose non dà nessun riconoscimento',
              'Gli oggetti non possono confermarci che siamo liberi',
              'Solo un altro uomo può riconoscerci come persone'], giusta:0},

    {tipo:'scelta', testo:'Come si rovescia il rapporto fra servo e signore?',
     opzioni:['Il signore gode del lavoro altrui e finisce per dipenderne',
              'Il servo, trasformando le cose, conquista l\'indipendenza',
              'Chi comanda si scopre più legato di chi obbedisce',
              'La servitù, nel suo compimento, diventa vera libertà'], giusta:0},

    {tipo:'scelta', testo:'Perché il lavoro ha un valore formativo?',
     opzioni:['Dando forma alle cose il servo dà forma anche a se stesso',
              'Nell\'opera prodotta il servo intuisce la propria indipendenza',
              'Il prodotto permane e riflette chi lo ha realizzato',
              'È un desiderio trattenuto che invece di consumare costruisce'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la coscienza infelice?',
     opzioni:['La coscienza lacerata fra la propria finitezza e l\'infinito',
              'Chi cerca l\'Assoluto e lo sente irraggiungibile',
              'La coscienza che non sa ancora di essere tutta la realtà',
              'La scissione fra ciò che muta e ciò che non muta mai'], giusta:0},

    {tipo:'scelta', testo:'Perché il singolo non raggiunge da solo l\'universalità?',
     opzioni:['L\'universale sta nelle istituzioni in cui un popolo si realizza',
              'Ogni legge che trova in sé finisce per valere solo per lui',
              'Chi giudica le leggi si mette al di sopra di esse',
              'Ciò che chiama dovere è quasi sempre il proprio interesse'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: chi lavora è più libero o meno libero di chi comanda? Una parola.'}
  ]},
{
  titolo: 'Filosofia moderna · 29 — Hegel: l\'Enciclopedia',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: lo Stato serve i cittadini o li precede? Una parola.'},

    {tipo:'scelta', testo:'Perché per Hegel logica e metafisica coincidono?',
     opzioni:['Le categorie non sono pensieri nostri ma strutture del reale',
              'La logica studia l\'ossatura razionale del mondo stesso',
              'I concetti puri sono insieme determinazioni dell\'essere',
              'Studiare il pensiero significa studiare ciò che esiste'], giusta:0},

    {tipo:'scelta', testo:'Perché il pensiero comincia dal divenire?',
     opzioni:['Essere e nulla si dileguano subito l\'uno nell\'altro',
              'Un essere senza determinazioni coincide con il nulla',
              'Il divenire è l\'unità dialettica di essere e nulla',
              'Solo il movimento mette in relazione i due concetti'], giusta:0},

    {tipo:'scelta', testo:'Perché la natura è il momento «negativo» del sistema?',
     opzioni:['È l\'Idea che esiste fuori di sé e non corrisponde al proprio concetto',
              'Raccoglie tutto ciò che è contingente e accidentale',
              'Nel suo modo di esistere resta una contraddizione irrisolta',
              'È l\'Idea decaduta dalla propria forma originaria'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue l\'eticità dalla moralità?',
     opzioni:['Il bene non resta interiore ma si realizza nelle istituzioni',
              'La moralità è volere privato, l\'eticità è costume condiviso',
              'L\'eticità supera il dover essere astratto della coscienza',
              'Nell\'eticità il bene è concreto e non più solo voluto'], giusta:0},

    {tipo:'scelta', testo:'Perché Hegel chiama la società civile un «campo di battaglia»?',
     opzioni:['Vi si scontrano gli interessi particolari di tutti contro tutti',
              'È il momento in cui l\'unità familiare si disperde',
              'Ciascuno vi persegue il proprio bisogno senza guardare gli altri',
              'Vi domina il particolare, che solo lo Stato saprà orientare'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'«astuzia della ragione»?',
     opzioni:['La storia usa le passioni dei singoli per fini che li superano',
              'Gli eroi credono di seguire se stessi e servono il tutto',
              'Chi ha compiuto il suo compito storico viene poi scartato',
              'I fini universali si realizzano attraverso interessi privati'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue arte, religione e filosofia?',
     opzioni:['Hanno lo stesso contenuto ma forme diverse di coglierlo',
              'La prima intuisce, la seconda rappresenta, la terza concepisce',
              'Solo la filosofia raggiunge l\'Assoluto nel puro concetto',
              'Le prime due restano legate al sensibile, la terza no'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: può esistere un sistema che spiega tutto? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 1 — Il Risorgimento e la prima guerra d\'indipendenza',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa rende un popolo una nazione? Una parola.'},

    {tipo:'scelta', testo:'Su che cosa fondano i patrioti l\'identità italiana?',
     opzioni:['Su lingua, cultura e religione comuni, non su uno Stato',
              'Sull\'eredità di Roma, dei Comuni e del Rinascimento',
              'Sui grandi scrittori che hanno dato una lingua all\'Italia',
              'Su un passato condiviso che nessuno Stato ha mai unito'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuole la Giovine Italia di Mazzini?',
     opzioni:['Una repubblica unitaria, non un\'alleanza fra sovrani',
              'Un\'Italia una, indipendente, libera e sovrana',
              'Un\'insurrezione preceduta dall\'educazione del popolo',
              'Uno Stato unico fondato sui princìpi democratici'], giusta:0},

    {tipo:'scelta', testo:'Quale lezione trae Mazzini dai suoi fallimenti?',
     opzioni:['Non aveva mai affrontato la questione agraria e i contadini',
              'Il popolo delle campagne non risponde all\'appello patriottico',
              'Le insurrezioni per bande vengono scoperte dalla polizia',
              'Senza un esercito regolare non si caccia l\'Austria'], giusta:0},

    {tipo:'scelta', testo:'Che cosa propone il neoguelfismo di Gioberti?',
     opzioni:['Una confederazione di Stati sotto la guida morale del papa',
              'Che ogni sovrano resti al suo posto ma conceda riforme',
              'Di conciliare l\'idea di nazione con la fede cattolica',
              'Che il pontefice rifondi eticamente la politica italiana'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa punta invece Cesare Balbo?',
     opzioni:['Sulla diplomazia dei Savoia: compensare l\'Austria nei Balcani',
              'Su una trattativa invece che su un\'insurrezione popolare',
              'Sull\'unica dinastia italiana libera da vincoli europei',
              'Sull\'idea che l\'Austria possa espandersi altrove'], giusta:0},

    {tipo:'scelta', testo:'Perché Pio IX ritira le truppe dalla guerra del 1848?',
     opzioni:['Non può muovere guerra a una potenza cattolica come l\'Austria',
              'Teme di perdere l\'appoggio dei cattolici di tutta Europa',
              'Capisce che la guerra porterebbe all\'unità della penisola',
              'Non vuole compromettere il proprio ruolo di padre comune'], giusta:0},

    {tipo:'scelta', testo:'Che cosa resta al Piemonte dopo la sconfitta di Novara?',
     opzioni:['Lo Statuto albertino, che Vittorio Emanuele II non ritira',
              'L\'unica Costituzione sopravvissuta ai moti del 1848',
              'Il ruolo di punto di riferimento per tutti i patrioti',
              'Una base costituzionale su cui costruire lo Stato futuro'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: si costruisce una nazione col sogno o con la diplomazia? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 2 — L\'Europa fra il 1850 e il 1870',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: in politica contano i princìpi o gli interessi? Una parola.'},

    {tipo:'scelta', testo:'Che cosa cambia nel nazionalismo dopo il 1848?',
     opzioni:['Non è più liberale: serve a imporsi sulle altre nazioni',
              'Diventa uno strumento di potenza invece che di libertà',
              'Si stacca dagli ideali con cui era nato nel 1848',
              'Viene usato dai governi invece che dai rivoluzionari'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa poggia il consenso di Napoleone III?',
     opzioni:['Sui contadini e la piccola borghesia che venerano il nome',
              'Su plebisciti in cui il popolo approva ma non decide',
              'Sul suffragio universale unito al controllo della stampa',
              'Sulla leggenda dello zio più che su un programma'], giusta:0},

    {tipo:'scelta', testo:'Che cosa ottiene il Piemonte dalla guerra di Crimea?',
     opzioni:['Porta la questione italiana al tavolo delle grandi potenze',
              'Un posto al Congresso di Parigi accanto ai vincitori',
              'L\'amicizia della Francia in vista della guerra all\'Austria',
              'Il riconoscimento del suo ruolo nella politica europea'], giusta:0},

    {tipo:'scelta', testo:'Che cosa nasce dopo la sconfitta di Sedan?',
     opzioni:['La Terza Repubblica, e a Parigi l\'insurrezione della Comune',
              'Un armistizio che costa alla Francia l\'Alsazia-Lorena',
              'La fine del Secondo Impero e la cattura dell\'imperatore',
              'Un governo rivoluzionario che dura poche settimane'], giusta:0},

    {tipo:'scelta', testo:'Perché la Gran Bretagna evita le rivoluzioni?',
     opzioni:['Riforma prima che il malcontento arrivi a esplodere',
              'Estende il voto e riduce l\'orario di lavoro per tempo',
              'La sua classe politica concede prima di essere costretta',
              'Dimostra che si può modernizzare senza rovesciare nulla'], giusta:0},

    {tipo:'scelta', testo:'Che cosa intende Bismarck con «ferro e sangue»?',
     opzioni:['Le grandi questioni si risolvono con la forza, non coi voti',
              'L\'errore del 1848 fu credere nei discorsi parlamentari',
              'L\'unità tedesca si farà con l\'esercito e non col consenso',
              'La guerra è uno strumento legittimo della politica'], giusta:0},

    {tipo:'scelta', testo:'Che cosa stabilisce il Compromesso del 1867?',
     opzioni:['L\'Impero si divide in Austria e Ungheria, con un solo sovrano',
              'Francesco Giuseppe è imperatore d\'Austria e re d\'Ungheria',
              'Gli ungheresi ottengono uno Stato proprio dentro l\'Impero',
              'Nasce la duplice monarchia che durerà fino al 1918'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: unire un popolo con la guerra lascia cicatrici? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 3 — Guerra civile americana, Giappone e Cina',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: un paese può reggersi su due economie opposte? Una parola.'},

    {tipo:'scelta', testo:'Perché Nord e Sud degli Stati Uniti hanno interessi opposti?',
     opzioni:['L\'industria del Nord vuole dazi, le piantagioni il libero scambio',
              'Il Nord chiede un potere federale forte, il Sud l\'autonomia',
              'Uno vive di lavoro salariato, l\'altro di lavoro schiavo',
              'I due modelli economici non possono convivere a lungo'], giusta:0},

    {tipo:'scelta', testo:'Perché l\'elezione di Lincoln scatena la secessione?',
     opzioni:['Vuole vietare la schiavitù nei territori dell\'Ovest',
              'Il Sud legge la vittoria repubblicana come una minaccia',
              'I sudisti temono che la schiavitù sia messa in discussione',
              'Cambia gli equilibri politici a favore degli Stati del Nord'], giusta:0},

    {tipo:'scelta', testo:'Che effetto ha il Proclama di emancipazione del 1863?',
     opzioni:['Centinaia di migliaia di neri si arruolano coi nordisti',
              'Gli schiavi degli Stati confederati vengono dichiarati liberi',
              'Cambia il senso della guerra e rafforza l\'esercito dell\'Unione',
              'Toglie al Sud la manodopera su cui reggeva l\'economia'], giusta:0},

    {tipo:'scelta', testo:'Perché la Ricostruzione non mantiene le sue promesse?',
     opzioni:['Gli ex schiavi restano senza terra e senza vera libertà',
              'Nasce il Ku Klux Klan e il terrore razzista si diffonde',
              'Nel 1877 le truppe federali lasciano gli Stati del Sud',
              'La segregazione riprende nonostante i nuovi emendamenti'], giusta:0},

    {tipo:'scelta', testo:'Come finisce l\'isolamento del Giappone?',
     opzioni:['Navi da guerra americane impongono l\'apertura dei porti',
              'Il commodoro Perry si presenta nella baia di Tokyo',
              'I trattati ineguali del 1858 aprono il paese agli stranieri',
              'Due secoli di chiusura cadono sotto la minaccia dei cannoni'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rende straordinaria l\'era Meiji?',
     opzioni:['In trent\'anni si passa dal feudalesimo alla potenza industriale',
              'Lo Stato finanzia direttamente le industrie strategiche',
              'Il Giappone diventa il primo paese industriale dell\'Asia',
              'Si adottano leva, scuola obbligatoria e uguaglianza giuridica'], giusta:0},

    {tipo:'scelta', testo:'Per che cosa la Gran Bretagna muove guerra alla Cina?',
     opzioni:['Per poter continuare a vendervi l\'oppio prodotto in India',
              'Perché Pechino aveva vietato quel commercio nei suoi porti',
              'Per riequilibrare i conti del commercio con l\'Oriente',
              'Per costringere l\'impero ad aprirsi alle merci straniere'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: il progresso di un paese può nascere da un\'umiliazione? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 4 — L\'Unità d\'Italia e la Destra storica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: uno Stato nuovo nasce già unito? Una parola.'},

    {tipo:'scelta', testo:'In che cosa la strategia di Cavour si oppone a quella di Mazzini?',
     opzioni:['Punta sulla diplomazia e sull\'alleanza con una potenza',
              'Non crede che il popolo italiano insorgerà da solo',
              'Vuole cacciare l\'Austria con l\'aiuto della Francia',
              'Preferisce trattare invece che organizzare rivolte'], giusta:0},

    {tipo:'scelta', testo:'Che cosa ottiene Cavour dalla guerra di Crimea?',
     opzioni:['Fa entrare la questione italiana nell\'agenda europea',
              'Un posto al Congresso di Parigi accanto alle potenze',
              'La simpatia di Napoleone III per la causa italiana',
              'Credito internazionale per il piccolo regno sabaudo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa prevedono gli accordi di Plombières?',
     opzioni:['La Francia interviene se l\'Austria attacca il Piemonte',
              'In cambio dell\'aiuto francese si cedono Nizza e Savoia',
              'Si punta a un regno dell\'Alta Italia, non a uno Stato unico',
              'Cavour dovrà provocare l\'Austria perché dichiari guerra'], giusta:0},

    {tipo:'scelta', testo:'Perché Cavour si dimette dopo Villafranca?',
     opzioni:['Napoleone III tratta con l\'Austria senza consultarlo',
              'L\'armistizio lascia il Veneto in mano agli austriaci',
              'La guerra si ferma prima di aver raggiunto lo scopo',
              'La Francia abbandona il Piemonte a metà dell\'opera'], giusta:0},

    {tipo:'scelta', testo:'Che cosa chiede Garibaldi per sé dopo Teano?',
     opzioni:['Nulla: consegna i territori al re e si ritira a Caprera',
              'Solo che i suoi volontari entrino nell\'esercito regolare',
              'Nessuna carica, nessun titolo e nessuna ricompensa',
              'Il riconoscimento dei suoi uomini, che gli viene negato'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il brigantaggio meridionale?',
     opzioni:['Un misto di criminalità, protesta contadina e nostalgia borbonica',
              'La reazione del Sud a tasse, leva obbligatoria e nuovo Stato',
              'Una rivolta armata contro un governo sentito come straniero',
              'Un fenomeno represso con lo stato d\'assedio e le fucilazioni'], giusta:0},

    {tipo:'scelta', testo:'Che cosa stabilisce il «Non expedit» di Pio IX?',
     opzioni:['I cattolici non devono essere né eletti né elettori',
              'Il papa non riconosce l\'annessione di Roma all\'Italia',
              'I fedeli devono astenersi dalle elezioni del nuovo Stato',
              'La Chiesa rifiuta ogni collaborazione col Regno d\'Italia'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: che cosa serve per «fare gli italiani»? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 5 — L\'Europa nell\'età di Bismarck',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: si può togliere consenso a un avversario dandogli ragione? Una parola.'},

    {tipo:'scelta', testo:'Perché il Secondo Reich è federale solo in apparenza?',
     opzioni:['Il Bundesrat è controllato dalla Prussia e blocca le leggi',
              'Il cancelliere risponde all\'imperatore e non al Parlamento',
              'La Prussia guida di fatto tutti e venticinque gli Stati',
              'Il suffragio è universale ma la democrazia resta limitata'], giusta:0},

    {tipo:'scelta', testo:'Come finisce il Kulturkampf contro i cattolici?',
     opzioni:['Il partito cattolico raddoppia quasi i propri consensi',
              'Bismarck ammorbidisce le leggi e cerca un\'intesa',
              'La repressione ottiene l\'effetto opposto a quello voluto',
              'Lo scontro si chiude con una sconfitta del cancelliere'], giusta:0},

    {tipo:'scelta', testo:'Qual è la logica delle leggi sociali di Bismarck?',
     opzioni:['Concedere dall\'alto per togliere seguito ai socialisti',
              'Riconoscere alcuni bisogni senza legittimare i partiti operai',
              'Ammansire le masse invece di limitarsi a reprimerle',
              'Dare ai lavoratori ciò che non hanno dovuto conquistare'], giusta:0},

    {tipo:'scelta', testo:'Qual è l\'obiettivo del sistema di alleanze di Bismarck?',
     opzioni:['Impedire che la Francia trovi alleati per la rivincita',
              'Tenere isolata Parigi dopo la sconfitta di Sedan',
              'Fare della Germania l\'arbitro degli equilibri europei',
              'Evitare che una guerra torni a coinvolgere il Reich'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia con la Weltpolitik di Guglielmo II?',
     opzioni:['Si abbandona l\'equilibrio per un\'espansione aggressiva',
              'Il Reich punta su colonie e flotta invece che su intese',
              'Non si rinnova l\'accordo con la Russia, che va con la Francia',
              'La Germania smette di fare da ago della bilancia'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rivela l\'affare Dreyfus?',
     opzioni:['La Francia è spaccata fra un\'anima progressista e una reazionaria',
              'L\'esercito preferisce coprire un errore piuttosto che ammetterlo',
              'L\'antisemitismo è radicato in larga parte della società',
              'La società civile può avere ragione delle istituzioni'], giusta:0},

    {tipo:'scelta', testo:'Perché il Congresso di Berlino non pacifica i Balcani?',
     opzioni:['Umilia la Russia e lascia intatta la rivalità con l\'Austria',
              'Ridimensiona le conquiste russe senza risolvere le cause',
              'Assegna la Bosnia all\'Austria, che la Russia rivendicava',
              'Lascia irrisolta la questione dei popoli slavi'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la pace costruita sugli equilibri quanto può durare? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 6 — La seconda rivoluzione industriale',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: quale invenzione ha cambiato di più la vita quotidiana? Una parola.'},

    {tipo:'scelta', testo:'Che cosa provoca la Grande Depressione del 1873?',
     opzioni:['Si produce più di quanto il mercato riesca ad assorbire',
              'I cereali americani a basso costo invadono l\'Europa',
              'Il crollo della Borsa di Vienna si estende alle altre',
              'I prezzi calano e le fabbriche cominciano a chiudere'], giusta:0},

    {tipo:'scelta', testo:'Come reagiscono gli Stati alla crisi?',
     opzioni:['Con dazi sulle importazioni, tranne la Gran Bretagna',
              'Abbandonando il libero scambio per il protezionismo',
              'Ancorando le valute all\'oro per dare stabilità',
              'Difendendo le produzioni nazionali dalla concorrenza'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue la seconda rivoluzione industriale dalla prima?',
     opzioni:['Le scoperte nascono da ricerca scientifica organizzata',
              'Non più inventori solitari ma laboratori d\'impresa',
              'Servono ingegneri e chimici formati nei politecnici',
              'La scienza precede e guida l\'applicazione industriale'], giusta:0},

    {tipo:'scelta', testo:'Perché l\'acciaio diventa il materiale simbolo dell\'epoca?',
     opzioni:['È più resistente del ferro e più flessibile della ghisa',
              'Un nuovo processo lo rende economico e producibile in serie',
              'Serve per ponti, navi, binari, macchine e grattacieli',
              'Sostituisce i materiali usati nella prima rivoluzione'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è un trust?',
     opzioni:['La fusione di più società sotto un\'unica direzione',
              'Una concentrazione che tende a diventare monopolio',
              'Ciò che la Standard Oil realizzò nel settore petrolifero',
              'La forma che lo Sherman Act del 1890 volle colpire'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il capitalismo finanziario?',
     opzioni:['Le banche finanziano l\'industria e ne entrano nel capitale',
              'Un intreccio in cui industriali e banchieri si siedono insieme',
              'Il modo di reperire i capitali enormi delle nuove industrie',
              'Un sistema in cui il risparmio dei clienti finisce in azioni'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa si basa il «sistema americano di fabbrica»?',
     opzioni:['Su componenti standardizzate e fra loro intercambiabili',
              'Sull\'assemblaggio rapido di pezzi tutti uguali fra loro',
              'Sulla riduzione degli sprechi e sull\'uniformità del prodotto',
              'Su nastri che portano il pezzo davanti a ciascun operaio'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: il progresso tecnico rende gli uomini più liberi? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 7 — La Sinistra storica e la crisi di fine secolo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: un governo può stare in piedi senza un programma? Una parola.'},

    {tipo:'scelta', testo:'Perché il 1876 è detto «rivoluzione parlamentare»?',
     opzioni:['Il governo cambia per un voto in aula, non per elezioni',
              'La Sinistra arriva al potere senza che il paese voti',
              'Quindici anni di governo della Destra finiscono in un giorno',
              'Il Parlamento rovescia il governo sulla questione ferroviaria'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia con la riforma elettorale del 1882?',
     opzioni:['Gli elettori passano da seicentomila a circa due milioni',
              'Vota chi sa leggere e scrivere, non solo chi ha un reddito',
              'La base elettorale sale dal due al sette per cento',
              'Si adotta il collegio che favorisce i partiti organizzati'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il trasformismo?',
     opzioni:['Maggioranze costruite su accordi personali, non su programmi',
              'La scomparsa dei confini fra Destra e Sinistra moderate',
              'Un sistema in cui si vota in cambio di favori al collegio',
              'La pratica per cui le decisioni si prendono fuori dall\'aula'], giusta:0},

    {tipo:'scelta', testo:'Perché il protezionismo del 1887 danneggia il Sud?',
     opzioni:['La Francia risponde coi dazi e il Sud perde il suo mercato',
              'Il Mezzogiorno è agricolo e non trae vantaggio dall\'industria',
              'I prodotti industriali costano di più anche a chi non li produce',
              'Il divario fra le due parti del paese si allarga ancora'], giusta:0},

    {tipo:'scelta', testo:'Che cosa significa la disfatta di Adua del 1896?',
     opzioni:['Un grande esercito europeo è battuto per la prima volta in Africa',
              'L\'Italia rinuncia al sogno di conquistare l\'Etiopia',
              'Seimila caduti costringono Crispi a lasciare il governo',
              'Il Negus Menelik II annienta le truppe italiane'], giusta:0},

    {tipo:'scelta', testo:'Che cosa hanno di nuovo i Fasci siciliani?',
     opzioni:['Sono organizzazioni di massa con un programma politico',
              'Contadini e operai si uniscono in leghe con centomila iscritti',
              'Le rivendicazioni si legano per la prima volta al socialismo',
              'Non è una rivolta improvvisa ma una struttura stabile'], giusta:0},

    {tipo:'scelta', testo:'Che cosa scandalizza dopo i fatti di Milano del 1898?',
     opzioni:['Il re decora il generale che aveva fatto sparare sulla folla',
              'Si arrestano deputati socialisti insieme ai manifestanti',
              'Una protesta per il pane viene scambiata per una rivoluzione',
              'L\'esercito apre il fuoco su una folla priva di armi'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: si risponde alla fame con le riforme o con l\'esercito? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 8 — L\'età dell\'imperialismo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: con quali parole si giustifica un dominio? Una parola.'},

    {tipo:'scelta', testo:'Che cosa distingue l\'imperialismo dal vecchio colonialismo?',
     opzioni:['Si conquista l\'entroterra, non solo i porti e le rotte',
              'Sono gli Stati a governare, non più le compagnie private',
              'Le colonie vengono amministrate e presidiate militarmente',
              'La conquista diventa sistematica invece che commerciale'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma il darwinismo sociale?',
     opzioni:['Le razze «superiori» avrebbero il diritto di dominare le altre',
              'La selezione naturale varrebbe anche fra i popoli umani',
              'Il più forte prevale per legge di natura anche nella storia',
              'La teoria di Darwin si applicherebbe alle società umane'], giusta:0},

    {tipo:'scelta', testo:'Che cosa stabilisce la Conferenza di Berlino?',
     opzioni:['Per rivendicare un territorio occorre occuparlo militarmente',
              'Non bastano le esplorazioni: serve una presenza effettiva',
              'I grandi fiumi africani restano aperti alla navigazione',
              'Il Congo diventa proprietà personale di Leopoldo II'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa si regge il regime di Leopoldo II in Congo?',
     opzioni:['Quote obbligatorie di caucciù imposte a ogni villaggio',
              'Mutilazioni e fucilazioni per chi non consegna abbastanza',
              'Uno sfruttamento che costa dieci milioni di vite',
              'La violenza sistematica come metodo di produzione'], giusta:0},

    {tipo:'scelta', testo:'Che cosa introducono i britannici nella seconda guerra boera?',
     opzioni:['I campi di concentramento in cui muoiono ventiseimila civili',
              'Una risposta durissima alla guerriglia dei coloni olandesi',
              'L\'internamento di donne e bambini per fiaccare i combattenti',
              'Una pratica che darà il nome a un\'istituzione del Novecento'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vogliono i Boxer?',
     opzioni:['Cacciare tutti gli stranieri e colpire i cristiani in Cina',
              'Liberare il paese dalle potenze che se lo sono spartito',
              'Restaurare l\'autonomia dell\'impero contro l\'Occidente',
              'Reagire alle umiliazioni subite dopo le guerre dell\'oppio'], giusta:0},

    {tipo:'scelta', testo:'Perché i confini tracciati a tavolino lasciano un\'eredità pesante?',
     opzioni:['Chiudono nello stesso Stato etnie rivali e ne separano di affini',
              'Ignorano lingue, culture e antichi confini dei regni africani',
              'Producono conflitti che durano fino ai nostri giorni',
              'Sono disegnati con la squadra senza guardare chi ci vive'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: scuole e ferrovie compensano una conquista? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 9 — La belle époque',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: si può chiamare «bella» un\'epoca che finisce in guerra? Una parola.'},

    {tipo:'scelta', testo:'Perché l\'espressione «belle époque» nasce solo dopo?',
     opzioni:['Fu coniata dopo la guerra, per contrasto con l\'angoscia del conflitto',
              'Solo guardando indietro quegli anni parvero felici',
              'Chi la visse non poteva sapere che cosa stesse per accadere',
              'Il nome esprime il rimpianto di un mondo perduto'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la transizione demografica?',
     opzioni:['Il passaggio da molte nascite e molte morti a poche di entrambe',
              'Il calo della mortalità grazie a vaccini, igiene e medicina',
              'La crescita della popolazione europea nel corso dell\'Ottocento',
              'Lo spostamento degli abitanti dalle campagne verso le città'], giusta:0},

    {tipo:'scelta', testo:'Da dove parte la maggior parte degli emigranti italiani?',
     opzioni:['Dal Sud e dalle isole, che danno più della metà del totale',
              'Da un paese in cui manca lavoro e la terra non basta',
              'Dalle regioni meridionali colpite dalla crisi agricola',
              'Da quelle zone dove l\'industria non è mai arrivata'], giusta:0},

    {tipo:'scelta', testo:'Che cosa introduce la catena di montaggio di Ford?',
     opzioni:['Ogni operaio ripete un solo gesto e il costo del prodotto crolla',
              'Una produzione in serie che rende l\'auto accessibile a molti',
              'L\'organizzazione scientifica del lavoro applicata alla fabbrica',
              'Un metodo che aumenta la resa ma svuota di senso il lavoro'], giusta:0},

    {tipo:'scelta', testo:'Che cosa mettono in crisi Planck, Einstein e Freud?',
     opzioni:['La fiducia positivista che la scienza spieghi tutto il reale',
              'L\'idea che spazio, tempo ed energia siano come sembrano',
              'La convinzione che l\'uomo sia padrone dei propri comportamenti',
              'Le certezze su cui si reggeva la scienza dell\'Ottocento'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è un partito di massa?',
     opzioni:['Un\'organizzazione con iscritti, sezioni, programma e giornale',
              'Una struttura stabile che non dipende più da poche élite',
              'Il modo in cui le masse entrano nella vita politica',
              'La forma assunta dai socialdemocratici in tutta Europa'], giusta:0},

    {tipo:'scelta', testo:'Quali ombre attraversano la belle époque?',
     opzioni:['Nazionalismo aggressivo, razzismo «scientifico» e antisemitismo',
              'Una corsa agli armamenti che nessuno riesce a fermare',
              'Teorie che giustificano il dominio di un popolo sugli altri',
              'Tensioni fra le nazioni che il progresso non attenua'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: il benessere basta a garantire la pace? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 10 — Guglielmo II e i blocchi contrapposti',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: le alleanze difendono o preparano la guerra? Una parola.'},

    {tipo:'scelta', testo:'Perché Guglielmo II si libera di Bismarck?',
     opzioni:['Vuole una Germania protagonista, non un cauto equilibrio',
              'Ha un temperamento e una visione opposti a quelli del cancelliere',
              'Ritiene finita la stagione della diplomazia prudente',
              'Intende guidare personalmente la politica del Reich'], giusta:0},

    {tipo:'scelta', testo:'In che cosa consiste la Weltpolitik?',
     opzioni:['Flotta, colonie e appoggio a Vienna per contare nel mondo',
              'Una politica estera aggressiva su scala planetaria',
              'La sfida navale lanciata direttamente alla Gran Bretagna',
              'L\'abbandono dell\'equilibrio a favore dell\'espansione'], giusta:0},

    {tipo:'scelta', testo:'Qual è l\'effetto della Weltpolitik sugli altri Stati?',
     opzioni:['Gran Bretagna, Francia e Russia si avvicinano fra loro',
              'Nasce per reazione un secondo blocco contrapposto',
              'Londra abbandona la sua politica di isolamento',
              'Le potenze mettono da parte le vecchie rivalità coloniali'], giusta:0},

    {tipo:'scelta', testo:'Perché l\'adesione italiana alla Triplice è ambigua?',
     opzioni:['Trento e Trieste restano austriache e l\'Italia le rivendica',
              'Roma è alleata di chi occupa terre che considera proprie',
              'L\'Italia si riserva di intervenire solo se le conviene',
              'Il patto lega a Vienna un paese che vi è rivale'], giusta:0},

    {tipo:'scelta', testo:'Che cosa ottiene la rivoluzione russa del 1905?',
     opzioni:['Nicola II è costretto a concedere un parlamento, la Duma',
              'Lo zar cede dopo la sconfitta contro il Giappone',
              'Le proteste ottengono una prima apertura costituzionale',
              'Si apre la stagione delle riforme agrarie di Stolypin'], giusta:0},

    {tipo:'scelta', testo:'Che cosa provoca l\'annessione austriaca della Bosnia nel 1908?',
     opzioni:['Rottura con la Russia e rabbia dei nazionalisti serbi',
              'Una crisi che allontana definitivamente Vienna da Pietroburgo',
              'Il risentimento di chi voleva unire tutti i serbi',
              'Un\'ulteriore tensione nella regione già più instabile d\'Europa'], giusta:0},

    {tipo:'scelta', testo:'Che effetto hanno le guerre balcaniche del 1912-13?',
     opzioni:['La Serbia si ingrandisce molto e l\'Austria si allarma',
              'L\'Impero ottomano perde quasi tutti i territori europei',
              'Cresce lo Stato che l\'Austria considera il proprio nemico',
              'La regione resta pronta a esplodere alla prima scintilla'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: bastava un attentato o la guerra era già decisa? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 11 — L\'Italia giolittiana',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: governare bene significa scegliere o mediare? Una parola.'},

    {tipo:'scelta', testo:'In che consiste il pragmatismo di Giolitti?',
     opzioni:['Adattare le scelte alla realtà invece che a princìpi astratti',
              'Costruire maggioranze diverse a seconda del provvedimento',
              'Coinvolgere socialisti o cattolici secondo l\'opportunità',
              'Governare senza legarsi a una linea politica definita'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia Giolitti negli scioperi rispetto a Crispi?',
     opzioni:['Lo Stato resta neutrale e non manda l\'esercito',
              'I conflitti sindacali non vengono più repressi con le armi',
              'Si lascia che una protesta si esaurisca da sola',
              'Il governo non prende le parti degli industriali'], giusta:0},

    {tipo:'scelta', testo:'Che cosa prevede il patto Gentiloni del 1913?',
     opzioni:['I cattolici votano i liberali in cambio di alcune garanzie',
              'Per la prima volta liberali e cattolici vanno insieme al voto',
              'Il mondo cattolico entra nella politica del Regno d\'Italia',
              'Si supera di fatto il divieto imposto da Pio IX'], giusta:0},

    {tipo:'scelta', testo:'Che cosa comporta il suffragio del 1912?',
     opzioni:['Gli elettori passano da tre a quasi nove milioni',
              'Votano anche gli analfabeti che abbiano superato i trent\'anni',
              'La base elettorale sale dal nove al ventiquattro per cento',
              'Le elezioni del 1913 diventano le prime di massa'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rende possibile il decollo industriale italiano?',
     opzioni:['Lo Stato committente e le banche che finanziano le imprese',
              'Le commesse pubbliche per ferrovie e flotta militare',
              'I dazi che proteggono i settori industriali nascenti',
              'Un sistema bancario che investe nelle grandi aziende'], giusta:0},

    {tipo:'scelta', testo:'Perché Salvemini chiama Giolitti «ministro della malavita»?',
     opzioni:['Per governare si appoggia ai notabili e talvolta alla mafia',
              'Non riforma il Sud perché ne ha bisogno per le maggioranze',
              'I metodi elettorali usati nel Mezzogiorno sono inaccettabili',
              'Lascia intatto il potere dei latifondisti meridionali'], giusta:0},

    {tipo:'scelta', testo:'Quale conseguenza politica ha la guerra di Libia?',
     opzioni:['Il partito socialista si radicalizza e Mussolini emerge',
              'Cresce il nazionalismo come forza politica organizzata',
              'Il sistema di Giolitti perde consensi a destra e a sinistra',
              'La linea del dialogo con i socialisti diventa impraticabile'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: modernizzare metà del paese è un successo? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 12 — La Grande Guerra',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: come può un attentato trascinare un continente in guerra? Una parola.'},

    {tipo:'scelta', testo:'Perché l\'Austria dichiara guerra alla Serbia?',
     opzioni:['Coglie l\'occasione per eliminare uno Stato che teme',
              'L\'ultimatum era scritto perché non potesse essere accettato',
              'Vuole fermare l\'unione dei popoli slavi del sud',
              'L\'attentato è il pretesto di una decisione già presa'], giusta:0},

    {tipo:'scelta', testo:'Che cosa prevedeva il piano Schlieffen?',
     opzioni:['Battere la Francia in sei settimane passando dal Belgio',
              'Evitare di combattere su due fronti contemporaneamente',
              'Colpire Parigi prima che la Russia potesse mobilitarsi',
              'Aggirare le difese francesi attraverso un paese neutrale'], giusta:0},

    {tipo:'scelta', testo:'Che cosa comporta la «guerra totale»?',
     opzioni:['L\'intera società viene coinvolta, non solo gli eserciti',
              'Le fabbriche lavorano giorno e notte per il fronte',
              'Le donne sostituiscono gli uomini nei posti di lavoro',
              'Lo Stato razione i viveri e controlla l\'informazione'], giusta:0},

    {tipo:'scelta', testo:'Come entra in guerra l\'Italia?',
     opzioni:['Con un patto segreto firmato senza consultare il Parlamento',
              'Dopo aver contrattato che cosa avrebbe ottenuto in cambio',
              'Per volontà di una minoranza contro un paese neutralista',
              'Passando dalla Triplice all\'Intesa in cambio di promesse'], giusta:0},

    {tipo:'scelta', testo:'Che cosa insegnano Verdun e la Somme?',
     opzioni:['La guerra di logoramento uccide senza spostare i confini',
              'Dieci mesi di battaglia non fanno guadagnare nulla a nessuno',
              'Il costo umano è enorme e il risultato militare è nullo',
              'Gli assalti frontali sono inutili contro le mitragliatrici'], giusta:0},

    {tipo:'scelta', testo:'Perché il 1917 è l\'anno della svolta?',
     opzioni:['Gli Stati Uniti entrano in guerra mentre la Russia ne esce',
              'Arrivano milioni di soldati freschi e un\'economia enorme',
              'Un fronte si chiude e un altro riceve nuove forze',
              'La bilancia si sposta a favore dell\'Intesa'], giusta:0},

    {tipo:'scelta', testo:'Che cosa lascia in eredità il Trattato di Versailles?',
     opzioni:['Una Germania umiliata, disarmata e schiacciata dai debiti',
              'La clausola che le addossa tutta la colpa della guerra',
              'Centotrentadue miliardi di marchi d\'oro da pagare',
              'Un risentimento che il nazismo saprà sfruttare'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una pace punitiva prepara la pace o la guerra? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 13 — La Rivoluzione russa',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa spinge un popolo a rovesciare chi lo governa? Una parola.'},

    {tipo:'scelta', testo:'Che cosa fa cadere lo zar nel febbraio 1917?',
     opzioni:['Una rivolta spontanea per il pane a cui i soldati non sparano',
              'Le proteste degli operai di Pietrogrado dilagate ovunque',
              'Il rifiuto dei militari di reprimere la folla in piazza',
              'Tre anni di guerra, fame e sfiducia generale nel regime'], giusta:0},

    {tipo:'scelta', testo:'In che consiste la «doppia autorità» dopo febbraio?',
     opzioni:['Governo provvisorio e Soviet convivono con obiettivi opposti',
              'Uno vuole continuare la guerra, l\'altro chiede la pace',
              'Accanto al governo esiste chi controlla davvero l\'esercito',
              'Due poteri paralleli si contendono la guida del paese'], giusta:0},

    {tipo:'scelta', testo:'Che cosa chiede Lenin nelle tesi di aprile?',
     opzioni:['Pace subito, terra ai contadini, tutto il potere ai Soviet',
              'Nessun appoggio al governo provvisorio in carica',
              'La nazionalizzazione delle banche e la fine della guerra',
              'Che i Soviet, e non il governo, guidino la rivoluzione'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il «partito di avanguardia» di Lenin?',
     opzioni:['Un gruppo ristretto di rivoluzionari di professione e disciplinati',
              'Non un partito di massa ma un\'organizzazione selezionata',
              'Chi guida il proletariato invece di limitarsi a rappresentarlo',
              'Una struttura compatta capace di decidere e agire in fretta'], giusta:0},

    {tipo:'scelta', testo:'Perché Lenin accetta la durissima pace di Brest-Litovsk?',
     opzioni:['La Russia deve sopravvivere per poter fare la rivoluzione',
              'Uscire dalla guerra vale più dei territori che si perdono',
              'Senza pace il nuovo potere non avrebbe retto un altro anno',
              'È un prezzo enorme ma inevitabile per consolidarsi'], giusta:0},

    {tipo:'scelta', testo:'Perché i bolscevichi vincono la guerra civile?',
     opzioni:['Hanno il centro del paese, un esercito saldo e i contadini',
              'L\'Armata rossa organizzata da Trockij è più disciplinata',
              'Chi ha ricevuto la terra non vuole il ritorno dei vecchi padroni',
              'Controllano Mosca, Pietrogrado e le comunicazioni'], giusta:0},

    {tipo:'scelta', testo:'Perché Lenin introduce la NEP nel 1921?',
     opzioni:['Le requisizioni forzate hanno prodotto fame e rivolte',
              'Persino i marinai di Kronstadt si erano ribellati',
              'Il comunismo di guerra aveva bloccato la produzione',
              'Serve un passo indietro perché l\'economia riparta'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una rivoluzione può mantenere le promesse che ha fatto? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 14 — Il dopoguerra in Europa',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa resta di un continente dopo quattro anni di guerra? Una parola.'},

    {tipo:'scelta', testo:'Quale problema creano i nuovi confini disegnati a Parigi?',
     opzioni:['Milioni di persone finiscono in Stati che non sentono propri',
              'I confini politici non coincidono con quelli etnici',
              'Ogni nuovo Stato si ritrova dentro minoranze scontente',
              'Nascono risentimenti destinati a durare nel tempo'], giusta:0},

    {tipo:'scelta', testo:'Qual è il punto debole della Costituzione di Weimar?',
     opzioni:['L\'articolo che permette al presidente di governare per decreto',
              'Una norma d\'emergenza che potrà essere usata contro di essa',
              'Un sistema ibrido fra presidenziale e parlamentare',
              'La possibilità di sospendere il Parlamento in caso di crisi'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la leggenda della «pugnalata alle spalle»?',
     opzioni:['L\'idea che la Germania non fu battuta ma tradita dai politici',
              'Una versione diffusa dai militari per scaricare le colpe',
              'La convinzione che l\'esercito fosse ancora imbattuto nel 1918',
              'Un racconto falso che avvelena la giovane repubblica'], giusta:0},

    {tipo:'scelta', testo:'Chi paga di più l\'iperinflazione del 1923?',
     opzioni:['La classe media, che vede azzerati i risparmi di una vita',
              'Chi aveva messo da parte denaro invece di beni',
              'Le famiglie che vivevano di rendita e di stipendio fisso',
              'Chi si fidava della moneta più che della proprietà'], giusta:0},

    {tipo:'scelta', testo:'Perché in Europa occidentale il biennio rosso non diventa rivoluzione?',
     opzioni:['La classe media teme i rivoluzionari più dei padroni',
              'I partiti socialisti sono divisi fra riformisti e rivoluzionari',
              'I governi rispondono con la forza alle agitazioni',
              'Manca l\'alleanza fra ceto medio e proletariato'], giusta:0},

    {tipo:'scelta', testo:'Come funziona il piano Dawes?',
     opzioni:['Gli USA prestano alla Germania che paga Francia e Gran Bretagna',
              'Si crea un circolo in cui il denaro americano torna in America',
              'I capitali stranieri permettono di versare le riparazioni',
              'La Germania riceve prestiti per poter onorare i debiti'], giusta:0},

    {tipo:'scelta', testo:'Quale strategia adotta Gandhi in India?',
     opzioni:['La non violenza e la disobbedienza civile contro il dominio',
              'Il boicottaggio dei prodotti inglesi come arma politica',
              'Una resistenza passiva che coinvolge milioni di persone',
              'La lotta senza armi contro chi possiede tutte le armi'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: bastano cinque anni di calma a guarire un continente? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 15 — Dal dopoguerra al fascismo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: una democrazia può cadere senza colpo di Stato? Una parola.'},

    {tipo:'scelta', testo:'Che cosa sperimenta D\'Annunzio a Fiume?',
     opzioni:['Riti, discorsi dal balcone e camicie nere: un laboratorio',
              'Uno stile politico che il fascismo farà proprio',
              'Un\'occupazione durata quindici mesi contro il governo',
              'La forza del gesto contro le decisioni della diplomazia'], giusta:0},

    {tipo:'scelta', testo:'Perché il biennio rosso favorisce il fascismo?',
     opzioni:['I proprietari, spaventati, cercano chi li protegga',
              'Le occupazioni di fabbriche e terre allarmano la borghesia',
              'Lo Stato appare incapace di garantire l\'ordine',
              'Chi teme la rivoluzione preferisce le squadre alla legge'], giusta:0},

    {tipo:'scelta', testo:'Contro chi si dirige la violenza squadrista?',
     opzioni:['Sindacati, cooperative e sedi socialiste e popolari',
              'Le organizzazioni in cui i lavoratori si erano riuniti',
              'Tutto ciò che rappresentava il movimento operaio',
              'Le Case del Popolo e le leghe contadine'], giusta:0},

    {tipo:'scelta', testo:'Perché la marcia su Roma non è un vero colpo di Stato?',
     opzioni:['È il re a conferire l\'incarico, rifiutando lo stato d\'assedio',
              'Mussolini arriva in treno dopo essere stato chiamato',
              'Il potere viene consegnato, non conquistato con le armi',
              'La monarchia avalla il passaggio invece di opporsi'], giusta:0},

    {tipo:'scelta', testo:'A che cosa serve la legge Acerbo?',
     opzioni:['Chi supera il venticinque per cento prende due terzi dei seggi',
              'Garantire ai fascisti la maggioranza assoluta in Parlamento',
              'Trasformare una minoranza di voti in un dominio dell\'aula',
              'Vincere le elezioni del 1924 senza doverle davvero vincere'], giusta:0},

    {tipo:'scelta', testo:'Perché la secessione aventiniana fallisce?',
     opzioni:['Le opposizioni lasciano l\'aula senza avere un piano alternativo',
              'Protestare abbandonando il Parlamento lo lascia ai fascisti',
              'Manca una proposta politica capace di sostituire il governo',
              'Il gesto morale non si traduce in nessuna azione concreta'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia con le leggi fascistissime?',
     opzioni:['Si aboliscono stampa libera e partiti: nasce la dittatura',
              'Nascono polizia segreta e tribunale per i reati politici',
              'Lo Stato liberale viene smantellato pezzo per pezzo',
              'Ogni forma di opposizione diventa fuori legge'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: di chi è la responsabilità quando una libertà si perde? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 16 — La crisi del 1929',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: il mercato si corregge da solo? Una parola.'},

    {tipo:'scelta', testo:'Quali squilibri si nascondono dietro la prosperità degli anni Venti?',
     opzioni:['Si produce più di quanto i salari permettano di comprare',
              'Le azioni si comprano a credito facendo salire i prezzi',
              'Una bolla finanziaria cresce senza che nessuno la fermi',
              'La produzione corre più veloce della domanda reale'], giusta:0},

    {tipo:'scelta', testo:'Come si trasmette al mondo la crisi americana?',
     opzioni:['Le banche USA richiamano i prestiti e fermano le importazioni',
              'L\'Europa si prosciuga di capitali e perde i suoi mercati',
              'Il credito internazionale si blocca e il commercio crolla',
              'Chi dipendeva dai finanziamenti americani resta senza'], giusta:0},

    {tipo:'scelta', testo:'Perché la deflazione peggiora la crisi?',
     opzioni:['Chi ha debiti deve restituirli con moneta diventata più cara',
              'Il calo dei prezzi scoraggia chiunque voglia investire',
              'La spirale dei prezzi in discesa non si ferma da sola',
              'Sembra un vantaggio ma strangola le imprese indebitate'], giusta:0},

    {tipo:'scelta', testo:'Perché falliscono le misure di Hoover?',
     opzioni:['Confida che il mercato si aggiusti e alza i dazi doganali',
              'Il protezionismo del 1930 aggrava la crisi mondiale',
              'La ricetta liberista non affronta il calo della domanda',
              'Si aspetta una ripresa spontanea che non arriva mai'], giusta:0},

    {tipo:'scelta', testo:'Che cosa prevede il New Deal di Roosevelt?',
     opzioni:['Lavori pubblici, salario minimo e garanzia sui depositi',
              'Un intervento diretto dello Stato nell\'economia',
              'Dighe, strade e opere per dare lavoro ai disoccupati',
              'Regole nuove per banche, agricoltura e sindacati'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sostiene Keynes contro il liberismo?',
     opzioni:['In recessione lo Stato deve spendere per sostenere la domanda',
              'Il mercato lasciato a se stesso non esce dalla crisi',
              'Il problema non è la produzione ma la domanda aggregata',
              'Si può spendere anche in deficit per far ripartire l\'economia'], giusta:0},

    {tipo:'scelta', testo:'Quale legame c\'è fra la crisi e l\'ascesa di Hitler?',
     opzioni:['La disoccupazione decuplica i consensi del partito nazista',
              'Sei milioni di senza lavoro cercano una risposta radicale',
              'Weimar non sa rispondere e chi promette tutto guadagna voti',
              'Dal due al trentasette per cento in quattro anni'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la disperazione economica quanto pesa sulle scelte politiche? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 17 — L\'Unione Sovietica di Stalin',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: quanto può costare la modernizzazione di un paese? Una parola.'},

    {tipo:'scelta', testo:'Come Stalin batte Trockij nella lotta per la successione?',
     opzioni:['Da segretario controlla le nomine e piega il partito a sé',
              'Si allea con altri contro Trockij e poi elimina anche loro',
              'Usa la macchina organizzativa invece delle idee',
              'Ha in mano lo strumento che decide le carriere di tutti'], giusta:0},

    {tipo:'scelta', testo:'Che cosa propone Stalin col «socialismo in un solo paese»?',
     opzioni:['Costruire prima il socialismo in URSS e poi pensare al mondo',
              'Rinunciare per ora a esportare la rivoluzione altrove',
              'Una linea più pragmatica di quella di Trockij',
              'Concentrare le forze all\'interno invece che all\'estero'], giusta:0},

    {tipo:'scelta', testo:'A che cosa servono i piani quinquennali?',
     opzioni:['A pianificare dallo Stato l\'intera economia per cinque anni',
              'A recuperare in dieci anni il ritardo industriale accumulato',
              'A fissare gli obiettivi di produzione di ogni settore',
              'A trasformare un paese agricolo in potenza industriale'], giusta:0},

    {tipo:'scelta', testo:'Perché Stalin impone la collettivizzazione?',
     opzioni:['Serve cibo a basso prezzo per finanziare l\'industria',
              'Le campagne devono pagare il costo delle fabbriche',
              'Lo Stato vuole fissare quote e prezzi dei raccolti',
              'La produzione agricola va razionalizzata dall\'alto'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'Holodomor?',
     opzioni:['La carestia ucraina causata dalle requisizioni di grano',
              'Milioni di morti di fame mentre il regime nega tutto',
              'Il prezzo pagato dall\'Ucraina per l\'industrializzazione',
              'Una fame provocata da decisioni politiche, non dal clima'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue il Gulag dai lager nazisti?',
     opzioni:['Punisce oppositori politici, non stermina per appartenenza',
              'Serve a sfruttare il lavoro forzato dei condannati',
              'Colpisce chi è dichiarato nemico del popolo, non una razza',
              'Non nasce con lo scopo dichiarato di uccidere'], giusta:0},

    {tipo:'scelta', testo:'Perché i vecchi bolscevichi confessano ai processi di Mosca?',
     opzioni:['Sono torturati e minacciati nei loro stessi familiari',
              'Cedono davanti alla pressione e alle promesse di clemenza',
              'Ammettono complotti che non sono mai esistiti',
              'Il regime ottiene con la forza le parole che gli servono'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: si può giustificare un fine con qualsiasi mezzo? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 18 — Il nazismo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: come si difende una democrazia da chi la vuole distruggere? Una parola.'},

    {tipo:'scelta', testo:'Che cosa significa «Lebensraum» nell\'ideologia nazista?',
     opzioni:['La Germania avrebbe bisogno di espandersi verso oriente',
              'Uno «spazio vitale» da prendere ai popoli slavi',
              'La giustificazione ideologica della futura aggressione',
              'La pretesa che al Reich servano nuovi territori per vivere'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma il Führerprinzip?',
     opzioni:['Il capo incarna la volontà del popolo e non risponde a nessuno',
              'La democrazia è corruzione e il comando dev\'essere unico',
              'Nessun limite può essere posto a chi guida la nazione',
              'Il Führer decide senza dover rendere conto a un Parlamento'], giusta:0},

    {tipo:'scelta', testo:'Perché Hindenburg nomina Hitler cancelliere?',
     opzioni:['Nessun governo regge e conservatori e industriali premono',
              'Si illude, come altri, di poter controllare il nuovo cancelliere',
              'Il partito nazista è ormai la prima forza del Parlamento',
              'La situazione politica è bloccata e non si vedono alternative'], giusta:0},

    {tipo:'scelta', testo:'A che cosa serve l\'incendio del Reichstag?',
     opzioni:['A giustificare un decreto che sopprime le libertà civili',
              'A dare la colpa ai comunisti e metterli fuori legge',
              'A creare l\'emergenza che permette i pieni poteri di polizia',
              'A fornire il pretesto per la stretta autoritaria'], giusta:0},

    {tipo:'scelta', testo:'Che cosa stabilisce la legge dei pieni poteri?',
     opzioni:['Il potere di fare le leggi passa dal Parlamento al governo',
              'Hitler può governare per decreto per quattro anni',
              'Il Reichstag rinuncia da sé alla propria funzione',
              'La Repubblica di Weimar viene di fatto abolita per legge'], giusta:0},

    {tipo:'scelta', testo:'Perché Hitler elimina i capi delle SA?',
     opzioni:['Chiedono una «seconda rivoluzione» che esercito e industriali temono',
              'Sono indisciplinati e la loro base popolare è scomoda',
              'Servono le SS, un corpo fedele soltanto al Führer',
              'Il sostegno dei generali vale più di quello delle squadre'], giusta:0},

    {tipo:'scelta', testo:'Che cosa stabiliscono le leggi di Norimberga?',
     opzioni:['Gli ebrei cessano di essere cittadini del Reich tedesco',
              'Sono vietati i matrimoni e i rapporti fra ebrei e «ariani»',
              'Mezzo milione di persone perde ogni diritto civile',
              'La discriminazione razziale diventa legge dello Stato'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: perché tanti scelsero di non opporsi finché erano in tempo? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 19 — La guerra di Spagna e l\'espansionismo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: cedere a chi minaccia evita la guerra? Una parola.'},

    {tipo:'scelta', testo:'Che cosa scatena la guerra civile spagnola?',
     opzioni:['Un colpo di Stato militare contro il governo del Fronte popolare',
              'La sollevazione guidata da Franco a partire dal Marocco',
              'Metà dell\'esercito insorge, l\'altra metà resta fedele',
              'Il rifiuto dei militari di accettare il risultato del voto'], giusta:0},

    {tipo:'scelta', testo:'Perché la guerra di Spagna diventa un affare internazionale?',
     opzioni:['Germania e Italia armano Franco, l\'URSS aiuta la Repubblica',
              'Trentacinquemila volontari da tutto il mondo vanno a combattere',
              'Le dittature vi sperimentano armi e tattiche nuove',
              'Diventa lo scontro fra fascismo e antifascismo in miniatura'], giusta:0},

    {tipo:'scelta', testo:'Perché Guernica segna una svolta?',
     opzioni:['È la prima distruzione sistematica di una città dall\'aria',
              'Una popolazione civile viene colpita di proposito',
              'Il bombardamento avviene nel giorno di mercato',
              'Anticipa il modo in cui si combatterà la guerra totale'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'appeasement?',
     opzioni:['Cedere alle richieste di Hitler sperando di evitare la guerra',
              'La linea seguita da Londra e Parigi fino al 1939',
              'La rinuncia a reagire a ogni violazione dei trattati',
              'La politica che Churchill definì disonore senza pace'], giusta:0},

    {tipo:'scelta', testo:'Che cosa si decide alla Conferenza di Monaco?',
     opzioni:['I Sudeti passano alla Germania senza consultare Praga',
              'Quattro potenze dispongono del territorio di un quinto paese',
              'Chamberlain crede di aver comprato la pace cedendo una regione',
              'Si sacrifica la Cecoslovacchia per evitare il conflitto'], giusta:0},

    {tipo:'scelta', testo:'Perché il patto Ribbentrop-Molotov sorprende il mondo?',
     opzioni:['Nazisti e comunisti, nemici dichiarati, si accordano fra loro',
              'Contiene una clausola segreta che spartisce la Polonia',
              'Toglie a Hitler il timore di combattere su due fronti',
              'Due regimi che si combattevano per ideologia firmano insieme'], giusta:0},

    {tipo:'scelta', testo:'Perché il marzo 1939 segna la fine dell\'appeasement?',
     opzioni:['Hitler prende la Cecoslovacchia: non ci sono più tedeschi da «liberare»',
              'L\'aggressione non ha più nemmeno una scusa nazionale',
              'Londra e Parigi capiscono di essere state ingannate',
              'Si garantisce la Polonia perché la prossima non passi'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: chi tace davanti a un sopruso ne diventa complice? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 20 — L\'Italia fascista',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: si può ottenere consenso senza convincere? Una parola.'},

    {tipo:'scelta', testo:'Su che cosa si regge il consenso al fascismo, oltre alla repressione?',
     opzioni:['Ordine, opere pubbliche, orgoglio nazionale e pace con la Chiesa',
              'La promessa di stabilità dopo anni di disordini sociali',
              'Il mito dell\'efficienza e della modernizzazione del paese',
              'Un culto del capo che entra in ogni casa attraverso la radio'], giusta:0},

    {tipo:'scelta', testo:'A che cosa serve l\'Opera Nazionale Balilla?',
     opzioni:['A inquadrare i giovani dai sei anni con formazione anche ideologica',
              'A dividere i ragazzi per età in organizzazioni del regime',
              'A far crescere una generazione secondo i valori fascisti',
              'A rendere quasi obbligatoria l\'adesione fin dall\'infanzia'], giusta:0},

    {tipo:'scelta', testo:'Che cosa risolvono i Patti Lateranensi?',
     opzioni:['La questione romana aperta dal 1870 fra Stato e Chiesa',
              'Il mancato riconoscimento reciproco fra Italia e Santa Sede',
              'Una frattura che il liberalismo non aveva saputo sanare',
              'Il conflitto che teneva i cattolici lontani dallo Stato'], giusta:0},

    {tipo:'scelta', testo:'Che cosa comporta in pratica il corporativismo?',
     opzioni:['I lavoratori perdono il diritto di sciopero e ogni potere reale',
              'Le corporazioni restano organismi soprattutto burocratici',
              'Chi ci guadagna davvero sono i grandi industriali',
              'La collaborazione annunciata nasconde una sconfitta operaia'], giusta:0},

    {tipo:'scelta', testo:'Quale prezzo ha la «quota 90»?',
     opzioni:['Prezzi più alti, esportazioni colpite e salari compressi',
              'La lira forte penalizza chi vende all\'estero',
              'La stabilità monetaria si paga con meno lavoro e meno reddito',
              'Rivalutare la moneta soffoca l\'economia che esporta'], giusta:0},

    {tipo:'scelta', testo:'Che conseguenza ha la guerra d\'Etiopia?',
     opzioni:['Le sanzioni isolano l\'Italia e la spingono verso la Germania',
              'La Società delle Nazioni condanna ma non colpisce davvero',
              'Mussolini raggiunge il massimo consenso e perde gli alleati',
              'Il fronte con Francia e Gran Bretagna si rompe'], giusta:0},

    {tipo:'scelta', testo:'Che cosa colpisce delle leggi razziali del 1938?',
     opzioni:['Nessuno si oppone: il re firma e la Chiesa non protesta',
              'Il fascismo importa un razzismo che prima non aveva',
              'Quarantasettemila italiani perdono lavoro, scuola, diritti',
              'Una società intera accetta senza reagire l\'esclusione di altri'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: che cosa avresti fatto tu nel 1938? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 21 — La Seconda guerra mondiale',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa resta del mondo dopo settanta milioni di morti? Una parola.'},

    {tipo:'scelta', testo:'Su che cosa si basa la guerra lampo tedesca?',
     opzioni:['Velocità e concentrazione: si sfonda in pochi punti e si aggira',
              'Carri armati e aviazione che agiscono insieme',
              'Una tattica opposta a quella delle trincee del 1914',
              'Il movimento rapido invece del logoramento del nemico'], giusta:0},

    {tipo:'scelta', testo:'Perché Hitler non riesce a invadere la Gran Bretagna?',
     opzioni:['La RAF non viene distrutta e il cielo resta britannico',
              'Radar e caccia migliori vanificano gli attacchi tedeschi',
              'Senza il dominio dell\'aria lo sbarco è impossibile',
              'È il primo fallimento militare del Reich'], giusta:0},

    {tipo:'scelta', testo:'Che cosa ferma l\'operazione Barbarossa?',
     opzioni:['L\'inverno russo coglie i tedeschi senza equipaggiamento',
              'L\'avanzata si blocca alle porte di Mosca',
              'Le distanze e il clima vanificano la superiorità iniziale',
              'La resistenza sovietica regge oltre le previsioni'], giusta:0},

    {tipo:'scelta', testo:'Che cosa viene deciso alla Conferenza di Wannsee?',
     opzioni:['Lo sterminio sistematico di tutti gli ebrei d\'Europa',
              'Si passa dalla persecuzione al genocidio pianificato',
              'La cosiddetta «soluzione finale» diventa un programma',
              'Le SS organizzano l\'uccisione su scala industriale'], giusta:0},

    {tipo:'scelta', testo:'Perché Stalingrado è la svolta della guerra?',
     opzioni:['È la prima grande sconfitta dell\'esercito tedesco',
              'Novantamila soldati si arrendono con il loro comandante',
              'Da quel momento l\'iniziativa passa agli Alleati',
              'L\'URSS dimostra di poter fermare e respingere l\'invasore'], giusta:0},

    {tipo:'scelta', testo:'Perché l\'8 settembre 1943 è una tragedia per l\'Italia?',
     opzioni:['Il re fugge senza ordini e l\'esercito si dissolve',
              'I soldati restano soli davanti all\'ex alleato tedesco',
              'Il paese si spacca e comincia una guerra civile',
              'L\'armistizio arriva senza che nulla sia stato preparato'], giusta:0},

    {tipo:'scelta', testo:'Quale eredità lascia la Resistenza all\'Italia?',
     opzioni:['Il fondamento morale su cui nascerà la Repubblica',
              'Una Costituzione scritta da chi aveva combattuto il fascismo',
              'La dignità riconquistata da un paese che si era arreso nel 1922',
              'Trecentomila partigiani e trentacinquemila caduti'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: «mai più» è una promessa che si può mantenere? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 22 — La guerra fredda',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: può esistere una guerra senza combattimenti? Una parola.'},

    {tipo:'scelta', testo:'Che cosa caratterizza la guerra fredda?',
     opzioni:['Le due superpotenze si combattono ovunque tranne che fra loro',
              'Corsa agli armamenti, propaganda e guerre per procura',
              'Uno scontro permanente che non diventa mai conflitto diretto',
              'Un confronto che dura quasi mezzo secolo senza dichiarazioni'], giusta:0},

    {tipo:'scelta', testo:'Che cosa si decide a Yalta nel 1945?',
     opzioni:['L\'Europa viene divisa in sfere d\'influenza fra i vincitori',
              'La Germania sarà occupata e suddivisa in quattro zone',
              'All\'URSS spetta di fatto il controllo dell\'Europa orientale',
              'Si promettono elezioni libere che a est non si terranno mai'], giusta:0},

    {tipo:'scelta', testo:'In che cosa consiste la dottrina del containment?',
     opzioni:['Impedire nuove conquiste comuniste senza liberare i paesi già presi',
              'Sostenere chi resiste alla pressione sovietica nel mondo',
              'Bloccare l\'espansione dell\'URSS invece di attaccarla',
              'Una strategia che guiderà la politica americana per decenni'], giusta:0},

    {tipo:'scelta', testo:'Qual è lo scopo reale del piano Marshall?',
     opzioni:['Stabilizzare le democrazie per fermare l\'avanzata comunista',
              'Legare l\'Europa occidentale agli Stati Uniti',
              'Far ripartire l\'economia dei paesi a rischio di crisi politica',
              'Usare gli aiuti come strumento di influenza politica'], giusta:0},

    {tipo:'scelta', testo:'Come rispondono gli occidentali al blocco di Berlino?',
     opzioni:['Con un ponte aereo che rifornisce la città per quasi un anno',
              'Portando due milioni di tonnellate di merci per via aerea',
              'Senza usare la forza ma senza cedere di un passo',
              'Con aerei che atterrano ogni pochi minuti giorno e notte'], giusta:0},

    {tipo:'scelta', testo:'Che cosa stabilisce l\'articolo 5 della NATO?',
     opzioni:['Un attacco a un membro è considerato attacco a tutti',
              'La difesa collettiva è il fondamento dell\'alleanza',
              'Nessun paese aderente potrà essere lasciato solo',
              'L\'aggressione a uno solo chiama in causa l\'intero patto'], giusta:0},

    {tipo:'scelta', testo:'Che effetto ha la destalinizzazione di Kruscev?',
     opzioni:['I paesi satelliti si agitano e l\'Ungheria viene repressa',
              'Denunciare i crimini di Stalin apre speranze che poi si spengono',
              'Le aperture del 1956 fanno esplodere le tensioni a est',
              'Chi crede in un cambiamento reale scopre che i limiti restano'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: un mondo diviso in due è più stabile o più pericoloso? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 23 — La coesistenza pacifica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: la paura di distruggersi basta a garantire la pace? Una parola.'},

    {tipo:'scelta', testo:'Su che cosa si fonda la coesistenza pacifica?',
     opzioni:['Entrambe le potenze hanno la bomba: la guerra distruggerebbe tutti',
              'La certezza della distruzione reciproca funziona da deterrente',
              'Si può competere in economia e ideologia senza spararsi',
              'Nessuno dei due blocchi può permettersi lo scontro diretto'], giusta:0},

    {tipo:'scelta', testo:'Perché viene costruito il muro di Berlino?',
     opzioni:['Per fermare la fuga di chi lascia la Germania orientale',
              'Ogni anno decine di migliaia passavano a Berlino Ovest',
              'Il regime dell\'Est perdeva la propria popolazione',
              'Occorreva chiudere l\'unico varco rimasto aperto'], giusta:0},

    {tipo:'scelta', testo:'Come si risolve la crisi dei missili di Cuba?',
     opzioni:['Mosca ritira i missili, Washington rinuncia a invadere l\'isola',
              'Un accordo che comprende anche i missili americani in Turchia',
              'Entrambe le parti cedono qualcosa per evitare la catastrofe',
              'Dopo tredici giorni si trova un compromesso in parte segreto'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rende possibili i «trenta gloriosi»?',
     opzioni:['Ricostruzione, aiuti americani, tecnologia e materie prime a basso costo',
              'Una domanda repressa dalla guerra che si libera tutta insieme',
              'Trent\'anni di crescita senza precedenti nella storia europea',
              'Petrolio a buon mercato e innovazione che si sommano'], giusta:0},

    {tipo:'scelta', testo:'Qual è il lato oscuro del miracolo economico italiano?',
     opzioni:['Quattro milioni di persone lasciano il Sud e il divario si allarga',
              'Le città crescono in modo caotico e senza regole',
              'Interi paesi del Mezzogiorno si svuotano di abitanti',
              'La ricchezza si concentra dove c\'era già industria'], giusta:0},

    {tipo:'scelta', testo:'Che cosa garantisce il Welfare State?',
     opzioni:['Sanità, istruzione, pensioni e sussidi come diritti di tutti',
              'Una protezione pubblica che accompagna il cittadino tutta la vita',
              'Servizi universali finanziati dallo Stato e non dal singolo',
              'Un modello nato in Europa e portato al massimo in Scandinavia'], giusta:0},

    {tipo:'scelta', testo:'Che cosa decide il Concilio Vaticano II?',
     opzioni:['La messa si celebra nelle lingue nazionali e non più in latino',
              'La Chiesa apre al dialogo con le altre confessioni e religioni',
              'Si riconosce la libertà religiosa e ci si rivolge ai poveri',
              'Un aggiornamento che avvicina la Chiesa al mondo moderno'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: il benessere ci ha resi più liberi o più conformisti? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 24 — Il Sessantotto, la distensione e le crisi',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: perché una generazione decide di contestare tutto? Una parola.'},

    {tipo:'scelta', testo:'Che cosa contesta il movimento del Sessantotto?',
     opzioni:['Autorità, guerra in Vietnam, consumismo e razzismo insieme',
              'Un modello che produce benessere ma svuota di senso la vita',
              'Università rigide e una società chiusa al dialogo',
              'Tutto ciò che i giovani non hanno scelto e subiscono'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rende unico il maggio francese?',
     opzioni:['Studenti e operai insieme paralizzano il paese con dieci milioni di scioperanti',
              'La protesta arriva a mettere in crisi il generale De Gaulle',
              'Gli accordi salariali dividono i sindacati dagli studenti',
              'La rivolta esce dalle università e diventa sciopero generale'], giusta:0},

    {tipo:'scelta', testo:'Che cosa ottiene il movimento per i diritti civili americano?',
     opzioni:['Leggi che vietano la discriminazione e garantiscono il voto',
              'La fine legale della segregazione razziale negli Stati Uniti',
              'Il riconoscimento dei diritti conquistato senza violenza',
              'Due leggi fondamentali approvate a metà degli anni Sessanta'], giusta:0},

    {tipo:'scelta', testo:'Perché Nixon apre alla Cina di Mao?',
     opzioni:['Vuole usarla come contrappeso contro l\'Unione Sovietica',
              'Il realismo suggerisce di trattare anche col nemico ideologico',
              'La guerra in Vietnam ha mostrato i limiti dell\'intervento diretto',
              'Conviene dividere i due grandi paesi comunisti'], giusta:0},

    {tipo:'scelta', testo:'Che cosa dimostra la vicenda del Watergate?',
     opzioni:['Anche un presidente deve cedere davanti a giudici e stampa libera',
              'Il controllo del potere funziona se esiste chi può indagare',
              'La democrazia americana regge alla prova di uno scandalo',
              'Nessuna carica mette al riparo da chi cerca la verità'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la stagflazione?',
     opzioni:['Economia ferma e prezzi che salgono nello stesso momento',
              'Una combinazione che le ricette keynesiane non sanno curare',
              'Disoccupazione e inflazione che crescono insieme',
              'Il fenomeno che chiude la stagione dei trenta gloriosi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa propone il neoliberismo?',
     opzioni:['Lo Stato si ritiri: il mercato sa regolarsi da solo',
              'Tagliare tasse e spesa pubblica per far ripartire l\'economia',
              'Privatizzazioni e riduzione della protezione sociale',
              'Meno intervento pubblico e più libertà economica'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: quanto Stato serve in economia? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 25 — La fine della guerra fredda',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: si può riformare un sistema senza farlo crollare? Una parola.'},

    {tipo:'scelta', testo:'Perché il sistema sovietico entra in crisi negli anni Ottanta?',
     opzioni:['Senza mercato non c\'è competizione, e quindi non c\'è innovazione',
              'L\'economia ristagna mentre l\'Occidente corre con l\'informatica',
              'La guerra in Afghanistan divora risorse enormi',
              'Le spese militari superano ogni possibilità del bilancio'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuole ottenere Gorbačëv con le sue riforme?',
     opzioni:['Salvare il sistema comunista rendendolo efficiente e umano',
              'Riformare per sopravvivere, non per abbattere il socialismo',
              'Correggere ciò che non funziona senza cambiare il modello',
              'Rendere l\'Unione Sovietica capace di reggere il confronto'], giusta:0},

    {tipo:'scelta', testo:'Perché la glasnost sfugge di mano?',
     opzioni:['Libera critiche e nazionalismi che nessuno riesce più a fermare',
              'Chi può parlare comincia a chiedere molto più del previsto',
              'Le repubbliche sovietiche iniziano a rivendicare l\'indipendenza',
              'La trasparenza mette a nudo tutto ciò che non funzionava'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia con l\'abbandono della dottrina Brežnev?',
     opzioni:['I paesi satelliti sanno che nessun carro armato verrà a salvarli',
              'Mosca rinuncia a intervenire militarmente nell\'Europa dell\'Est',
              'Ogni paese è libero di scegliere la propria strada politica',
              'I regimi comunisti dell\'Est restano soli davanti ai loro popoli'], giusta:0},

    {tipo:'scelta', testo:'Come cade materialmente il muro di Berlino?',
     opzioni:['Un annuncio confuso in TV spinge la folla ai valichi',
              'Le guardie, senza ordini precisi, lasciano passare tutti',
              'Un errore su una data manda in strada migliaia di persone',
              'Nessuno decide di aprirlo: viene aperto dai berlinesi stessi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue Tienanmen dalle rivoluzioni europee del 1989?',
     opzioni:['In Cina il partito non cede e reprime con l\'esercito',
              'Il regime sceglie il capitalismo ma non la democrazia',
              'Dove l\'Europa cambia senza sangue, Pechino usa i carri armati',
              'La protesta viene schiacciata invece di essere accolta'], giusta:0},

    {tipo:'scelta', testo:'Come finisce l\'Unione Sovietica?',
     opzioni:['Gorbačëv si dimette e la bandiera scende dal Cremlino',
              'Un golpe fallito indebolisce il centro e rafforza Eltsin',
              'Le repubbliche si dichiarano sovrane una dopo l\'altra',
              'Undici ex repubbliche danno vita a una nuova comunità'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: un impero può finire senza una guerra? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 26 — L\'Italia repubblicana',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa tiene insieme un paese appena uscito da una guerra? Una parola.'},

    {tipo:'scelta', testo:'Perché il referendum del 2 giugno 1946 è una data storica?',
     opzioni:['Per la prima volta votano anche le donne italiane',
              'Il popolo sceglie fra monarchia e repubblica',
              'La Repubblica vince e Umberto II parte per l\'esilio',
              'Si elegge insieme l\'Assemblea che scriverà la Costituzione'], giusta:0},

    {tipo:'scelta', testo:'Su quali principi si regge la Costituzione del 1948?',
     opzioni:['Uguaglianza, lavoro, pluralismo, ripudio della guerra',
              'I poteri sono divisi perché nessuno possa più prendersi tutto',
              'Non basta essere uguali per legge: bisogna esserlo davvero',
              'La Repubblica è fondata sul lavoro, non sulla nascita'], giusta:0},

    {tipo:'scelta', testo:'Che scelta compie l\'Italia con De Gasperi dopo il 1948?',
     opzioni:['Si colloca stabilmente nel campo occidentale',
              'Accetta il Piano Marshall ed entra nella NATO',
              'Governa al centro tenendo fuori le due estreme',
              'Partecipa fin dall\'inizio alla costruzione europea'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia il miracolo economico (1958-1963)?',
     opzioni:['Un paese agricolo diventa potenza industriale in dieci anni',
              'Milioni di persone lasciano il Sud per le fabbriche del Nord',
              'La televisione insegna l\'italiano a chi parlava solo dialetto',
              'Automobile ed elettrodomestici entrano nelle case comuni'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la strategia della tensione?',
     opzioni:['Stragi per creare caos e giustificare una svolta autoritaria',
              'Attentati neofascisti coperti da settori deviati dello Stato',
              'La violenza usata come strumento politico contro la democrazia',
              'Piazza Fontana apre un decennio di bombe e di paura'], giusta:0},

    {tipo:'scelta', testo:'Perché le Brigate Rosse rapiscono Aldo Moro?',
     opzioni:['Per colpire l\'accordo fra DC e PCI che stava nascendo',
              'Vogliono spezzare il compromesso storico sul nascere',
              'Moro è l\'uomo che sta avvicinando i comunisti al governo',
              'Il bersaglio non è un uomo ma un\'intesa politica'], giusta:0},

    {tipo:'scelta', testo:'Che cosa travolge Tangentopoli fra il 1992 e il 1994?',
     opzioni:['Il sistema dei partiti nato nel 1948 si dissolve',
              'DC e PSI scompaiono sotto il peso delle inchieste',
              'Emerge un finanziamento illegale che riguarda tutti',
              'Finisce la Prima Repubblica e se ne apre un\'altra'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la corruzione è un difetto delle persone o del sistema? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 27 — Globalizzazione e nuove crisi',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: il mondo più connesso è anche più giusto? Una parola.'},

    {tipo:'scelta', testo:'Che cosa significa globalizzazione?',
     opzioni:['Merci, capitali, notizie e persone circolano quasi senza confini',
              'Le economie del mondo diventano un unico sistema collegato',
              'Ciò che accade in una borsa si sente ovunque in poche ore',
              'Le distanze contano meno di quanto siano mai contate prima'], giusta:0},

    {tipo:'scelta', testo:'Qual è il paradosso della globalizzazione?',
     opzioni:['Riduce le distanze fra paesi ma le aumenta dentro i paesi',
              'Milioni escono dalla povertà mentre altri perdono il lavoro',
              'Le fabbriche si spostano dove il lavoro costa di meno',
              'Chi guadagna e chi perde non vivono negli stessi luoghi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia l\'11 settembre 2001?',
     opzioni:['La minaccia non è più uno Stato ma una rete senza territorio',
              'Gli Stati Uniti si scoprono vulnerabili in casa propria',
              'Comincia una guerra al terrorismo senza confini né fine',
              'Da un attentato nascono due guerre lunghe vent\'anni'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rende singolare il modello cinese?',
     opzioni:['Apre l\'economia al mercato ma non apre la politica',
              'Cresce a ritmi enormi restando guidata da un partito unico',
              'Il gatto conta se prende i topi, non di che colore sia',
              'Diventa la fabbrica del mondo senza diventare una democrazia'], giusta:0},

    {tipo:'scelta', testo:'Come nasce la crisi finanziaria del 2008?',
     opzioni:['Da prestiti concessi a chi non poteva restituirli',
              'Le banche rivendono ad altre banche un rischio nascosto',
              'Una bolla immobiliare gonfiata scoppia e travolge tutto',
              'Il fallimento di una grande banca americana blocca il credito'], giusta:0},

    {tipo:'scelta', testo:'Perché cresce il populismo dopo il 2008?',
     opzioni:['Molti si sentono abbandonati e cercano un colpevole semplice',
              'Alla complessità dei problemi si risponde promettendo chiarezza',
              'Il popolo autentico viene contrapposto alle élite corrotte',
              'La rabbia per la crisi trova finalmente una voce politica'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rivela l\'invasione dell\'Ucraina del 2022?',
     opzioni:['In Europa la guerra fra Stati non era affatto finita',
              'L\'ordine nato dopo il 1991 non regge più le tensioni',
              'I confini possono ancora essere cambiati con la forza',
              'La più grande guerra sul continente dal 1945 è realtà'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: quali problemi nessuno Stato può risolvere da solo? Una parola.'}
  ]},
{
  titolo: 'Storia contemporanea · 28 — L\'Italia della Seconda Repubblica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: perché in Italia i governi durano così poco? Una parola.'},

    {tipo:'scelta', testo:'Che cosa dovrebbe garantire il bipolarismo della Seconda Repubblica?',
     opzioni:['Due schieramenti che si alternano, così l\'elettore sceglie chi governa',
              'Il vincitore delle elezioni è noto già la sera del voto',
              'Non servono accordi fra i partiti dopo che si è votato',
              'Chi governa ha una maggioranza uscita dalle urne'], giusta:0},

    {tipo:'scelta', testo:'Qual è il nodo irrisolto del berlusconismo?',
     opzioni:['Chi governa il paese possiede anche le televisioni che lo informano',
              'Il conflitto di interessi non viene mai davvero affrontato',
              'Un partito personale nasce dall\'azienda del suo fondatore',
              'Potere politico e potere mediatico stanno nelle stesse mani'], giusta:0},

    {tipo:'scelta', testo:'Che cosa misura lo spread salito oltre 550 punti nel 2011?',
     opzioni:['Quanta fiducia i mercati hanno nel debito pubblico italiano',
              'La differenza fra i titoli italiani e quelli tedeschi',
              'Quanto interesse l\'Italia deve pagare per farsi prestare denaro',
              'Il giudizio degli investitori sui conti dello Stato'], giusta:0},

    {tipo:'scelta', testo:'Perché il governo Monti è impopolare nonostante i risultati?',
     opzioni:['Riduce lo spread ma chiede sacrifici pesanti a molte famiglie',
              'La riforma delle pensioni allunga l\'età del ritiro dal lavoro',
              'L\'austerità rassicura i mercati e deprime l\'economia reale',
              'Alle elezioni successive ottiene appena il dieci per cento'], giusta:0},

    {tipo:'scelta', testo:'Da che cosa nasce il Movimento 5 Stelle?',
     opzioni:['Dalla sfiducia verso i partiti e dalla rete come luogo politico',
              'Da un blog che diventa prima movimento e poi partito',
              'Dall\'idea che i cittadini possano decidere direttamente',
              'Dalla protesta contro la corruzione della classe dirigente'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia Salvini nella Lega dal 2013?',
     opzioni:['Da partito del Nord diventa partito sovranista nazionale',
              'Il nemico non è più Roma ma Bruxelles e l\'immigrazione',
              'Cerca voti anche al Sud, che prima attaccava duramente',
              'Sposta il conflitto dal territorio ai confini dello Stato'], giusta:0},

    {tipo:'scelta', testo:'Quali sono oggi le sfide strutturali dell\'Italia?',
     opzioni:['Debito altissimo, poche nascite, divario Nord-Sud, crescita lenta',
              'Una popolazione che invecchia e non viene rimpiazzata',
              'Un debito enorme che limita ogni scelta di bilancio',
              'Il Mezzogiorno resta indietro da più di un secolo'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: che cosa serve davvero all\'Italia per crescere? Una parola.'}
  ]},
{
  titolo: 'Filosofia contemporanea · 1 — Schopenhauer',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa vuole davvero chi desidera qualcosa? Una parola.'},

    {tipo:'scelta', testo:'Che cosa significa il «velo di Maya»?',
     opzioni:['Il mondo che vediamo è una parvenza, non la realtà vera',
              'Ciò che chiamiamo realtà somiglia più a un sogno',
              'Fra noi e le cose c\'è sempre uno schermo che deforma',
              'Il fenomeno nasconde invece di rivelare ciò che è'], giusta:0},

    {tipo:'scelta', testo:'Come Schopenhauer rovescia Kant?',
     opzioni:['Il fenomeno non è la realtà conoscibile ma un\'illusione',
              'Dove Kant vedeva un limite invalicabile lui trova un passaggio',
              'La cosa in sé smette di essere un semplice concetto-limite',
              'Restano tre forme a priori al posto delle dodici categorie'], giusta:0},

    {tipo:'scelta', testo:'Attraverso che cosa arriviamo alla cosa in sé?',
     opzioni:['Attraverso il corpo, che viviamo dall\'interno e non solo osserviamo',
              'Perché di noi stessi non abbiamo soltanto una rappresentazione',
              'Sentiamo dentro di noi l\'impulso che muove ogni cosa',
              'Il corpo è la porta che nessun altro oggetto ci apre'], giusta:0},

    {tipo:'scelta', testo:'Quali sono i caratteri della volontà di vivere?',
     opzioni:['Cieca, unica, eterna, senza causa e senza alcuno scopo',
              'Non è volontà cosciente ma impulso che non sa perché',
              'Sta fuori dallo spazio e dal tempo, quindi non si divide',
              'Vuole soltanto se stessa: la vita che vuole la vita'], giusta:0},

    {tipo:'scelta', testo:'Perché per Schopenhauer volere è soffrire?',
     opzioni:['Desiderare significa mancare di qualcosa, e mancare è dolore',
              'Il piacere è solo la fine momentanea di una sofferenza',
              'Ogni desiderio appagato ne lascia dieci insoddisfatti',
              'Quando il desiderio tace non arriva la pace ma la noia'], giusta:0},

    {tipo:'scelta', testo:'Che cosa permette l\'esperienza dell\'arte?',
     opzioni:['Contemplare le idee eterne dimenticando per un attimo il volere',
              'Guardare la vita invece di viverla e di soffrirla',
              'Diventare puro occhio del mondo, senza più brame personali',
              'Una liberazione autentica, ma provvisoria e destinata a finire'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa si fonda la morale secondo Schopenhauer?',
     opzioni:['Sulla pietà, che ci fa sentire l\'unità di tutti i viventi',
              'Non su un comando della ragione ma su un sentimento',
              'Sul riconoscere che chi soffre davanti a me sono io stesso',
              'Su un\'esperienza vissuta, non su un imperativo astratto'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: si può essere felici o solo meno infelici? Una parola.'}
  ]},
{
  titolo: 'Filosofia contemporanea · 2 — Kierkegaard',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa provi davanti a una scelta che non puoi rimandare? Una parola.'},

    {tipo:'scelta', testo:'Che cosa rimprovera Kierkegaard alla filosofia di Hegel?',
     opzioni:['Costruisce un sistema perfetto ma dimentica l\'uomo concreto',
              'Le alternative della vita non si conciliano in una sintesi',
              'L\'individuo non si lascia ridurre a un momento dello Spirito',
              'Chi si costruisce un castello poi vive dentro un fienile'], giusta:0},

    {tipo:'scelta', testo:'Perché la possibilità, per Kierkegaard, paralizza?',
     opzioni:['Ogni possibilità è anche la possibilità che non accada',
              'Chi può tutto rischia di non decidere mai nulla',
              'Nel possibile è possibile il bene quanto il terribile',
              'Aprirsi al futuro significa aprirsi anche al nulla'], giusta:0},

    {tipo:'scelta', testo:'Perché fallisce lo stadio estetico?',
     opzioni:['Chi sceglie di non scegliere non arriva ad avere un\'identità',
              'Il piacere ripetuto finisce per diventare noia',
              'Vivere nell\'attimo disperde la vita in mille frammenti',
              'Dietro la vita brillante di don Giovanni c\'è il vuoto'], giusta:0},

    {tipo:'scelta', testo:'Che cosa caratterizza lo stadio etico?',
     opzioni:['L\'uomo si costruisce impegnandosi in una scelta stabile',
              'Il matrimonio ne è il simbolo: una fedeltà rinnovata ogni giorno',
              'Non si è ciò che si è, ma ciò che si sceglie di diventare',
              'Ci si sottopone a una regola valida per tutti gli uomini'], giusta:0},

    {tipo:'scelta', testo:'Che cosa mostra la figura di Abramo?',
     opzioni:['La fede può chiedere di sospendere perfino la legge morale',
              'Davanti a Dio il singolo si trova in una solitudine totale',
              'Ciò che gli è chiesto non si può spiegare a nessun altro',
              'Credere significa accettare uno scandalo per la ragione'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue l\'angoscia dalla paura?',
     opzioni:['La paura ha un oggetto preciso, l\'angoscia nessuno',
              'L\'angoscia è la vertigine di essere liberi di sbagliare',
              'Non temiamo una cosa, ma tutto ciò che potrebbe accadere',
              'La conosce solo l\'uomo, non l\'animale né l\'angelo'], giusta:0},

    {tipo:'scelta', testo:'Perché la disperazione è la «malattia mortale»?',
     opzioni:['Non uccide l\'io: lo costringe a vivere la propria morte',
              'L\'io non riesce né a essere sé stesso né a rinunciarci',
              'È un rapporto con sé che non si può sciogliere né evitare',
              'Ne è malato ogni uomo, anche chi non se ne accorge'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: la libertà è un dono o un peso? Una parola.'}
  ]},
{
  titolo: 'Filosofia contemporanea · 3 — La Sinistra hegeliana e Feuerbach',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: chi ha inventato chi, Dio l\'uomo o l\'uomo Dio? Una parola.'},

    {tipo:'scelta', testo:'Perché la scuola di Hegel si spacca dopo il 1831?',
     opzioni:['Lo stesso sistema si può leggere come difesa o come critica',
              'Se il reale è razionale, si conserva o si trasforma?',
              'Alcuni vedono nella filosofia il salvataggio della religione, altri la sua fine',
              'La Destra guarda al contenuto, la Sinistra alla forma'], giusta:0},

    {tipo:'scelta', testo:'In che cosa consiste il «rovesciamento» di Feuerbach?',
     opzioni:['Ciò che è concreto torna a essere soggetto e non predicato',
              'La filosofia non parte dall\'Assoluto ma dal finito reale',
              'L\'idealismo aveva scambiato il pensiero con l\'essere',
              'Non è l\'astratto a produrre il reale, ma il contrario'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è Dio secondo Feuerbach?',
     opzioni:['La proiezione delle qualità umane portate all\'infinito',
              'Lo specchio in cui l\'uomo vede il proprio cuore',
              'Il desiderio umano trasformato in realtà esistente',
              'Un altro essere in cui l\'uomo riconosce se stesso'], giusta:0},

    {tipo:'scelta', testo:'Perché la religione è un\'«antropologia capovolta»?',
     opzioni:['Presenta come divino ciò che in realtà è umano',
              'L\'uomo si conosce in Dio prima di conoscersi in sé',
              'Ogni dogma nasconde una verità sull\'uomo, non su Dio',
              'Scambia il soggetto con il predicato del discorso'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'alienazione religiosa?',
     opzioni:['L\'uomo si sottomette a una potenza che ha creato lui stesso',
              'Quanto più mette in Dio, tanto più toglie a se stesso',
              'Dio diventa il polo positivo e l\'uomo quello negativo',
              'La proiezione smette di essere innocente e fa male'], giusta:0},

    {tipo:'scelta', testo:'Perché l\'ateismo di Feuerbach è «positivo»?',
     opzioni:['Non toglie soltanto Dio: restituisce all\'uomo ciò che è suo',
              'Al posto di Dio mette l\'Uomo come nuovo valore assoluto',
              'Vuole trasformare i teologi in antropologi e in filantropi',
              'Sostituisce l\'amore per Dio con l\'amore per gli uomini'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire «l\'uomo è ciò che mangia»?',
     opzioni:['Lo spirito non migliora se non migliorano le condizioni materiali',
              'Non siamo pura coscienza ma corpi con bisogni concreti',
              'La filosofia deve tenere conto anche di come si vive',
              'Chi ha fame non può essere educato con le sole idee'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: che cosa perde l\'uomo quando adora qualcosa? Una parola.'}
  ]},
{
  titolo: 'Filosofia contemporanea · 4 — Karl Marx',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: basta capire il mondo o bisogna cambiarlo? Una parola.'},

    {tipo:'scelta', testo:'Che cosa distingue il marxismo dalle altre filosofie?',
     opzioni:['Non vuole solo interpretare la realtà ma trasformarla',
              'Tiene insieme filosofia, economia, storia e politica',
              'La teoria nasce per diventare azione, non per restare libro',
              'Non si lascia chiudere in nessuna disciplina particolare'], giusta:0},

    {tipo:'scelta', testo:'Perché per Marx lo Stato liberale è una falsa universalità?',
     opzioni:['Dichiara tutti uguali per legge lasciandoli disuguali di fatto',
              'Il cittadino è libero in cielo e sfruttato sulla terra',
              'Difende gli interessi di una classe fingendo di servire tutti',
              'L\'uguaglianza formale copre e conferma quella sostanziale'], giusta:0},

    {tipo:'scelta', testo:'Da che cosa nasce l\'alienazione del lavoro?',
     opzioni:['Dalla proprietà privata dei mezzi con cui si produce',
              'Chi lavora non possiede né gli strumenti né il risultato',
              'Il prodotto torna contro l\'operaio come potenza estranea',
              'L\'uomo diventa mezzo per il profitto di qualcun altro'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rimprovera Marx a Feuerbach?',
     opzioni:['Ha pensato l\'uomo come natura e non come storia e società',
              'L\'uomo non è un\'essenza fissa ma l\'insieme dei suoi rapporti',
              'La critica alla religione resta parola se non cambia la società',
              'Ha capovolto l\'idealismo ma si è fermato a metà strada'], giusta:0},

    {tipo:'scelta', testo:'Che rapporto c\'è fra struttura e sovrastruttura?',
     opzioni:['Il modo di produrre condiziona diritto, politica e cultura',
              'Le idee dominanti sono le idee di chi domina l\'economia',
              'Ciò che una società pensa dipende da come essa vive',
              'La base materiale non riflette la cultura: la produce'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il plusvalore?',
     opzioni:['Il valore prodotto dall\'operaio e non pagato dal salario',
              'La differenza fra ciò che si produce e ciò che si riceve',
              'Il lavoro svolto oltre quello necessario a mantenersi',
              'Ciò che il capitalista trattiene e chiama profitto'], giusta:0},

    {tipo:'scelta', testo:'Quali contraddizioni portano il capitalismo alla crisi?',
     opzioni:['Produce più di quanto si possa vendere e concentra la ricchezza',
              'Le crisi di sovrapproduzione tornano ciclicamente',
              'Le macchine crescono e il saggio di profitto tende a calare',
              'Pochi accumulano mentre la massa dei proletari cresce'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: il lavoro rende liberi o rende strumenti? Una parola.'}
  ]},
{
  titolo: 'Filosofia contemporanea · 5 — Il Positivismo: Comte e Mill',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: la scienza può rispondere a tutte le domande? Una parola.'},

    {tipo:'scelta', testo:'Che cosa significa «positivo» nel positivismo?',
     opzioni:['Ciò che è reale e sperimentabile, e insieme utile alla vita',
              'Non le astrazioni della metafisica ma i fatti osservabili',
              'Un sapere che serve a fare, non soltanto a discutere',
              'Ciò che si può verificare invece di ciò che si immagina'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma la legge dei tre stadi di Comte?',
     opzioni:['La conoscenza passa da spiegazioni divine ad astratte a scientifiche',
              'Ogni sapere attraversa le stesse tre tappe nello stesso ordine',
              'Prima si cercano cause ultime, poi essenze, poi solo leggi',
              'Ciascuno le ripercorre nella propria vita, da bambino a adulto'], giusta:0},

    {tipo:'scelta', testo:'A che cosa rinuncia la mente nello stadio positivo?',
     opzioni:['A chiedersi il perché ultimo delle cose e la loro origine',
              'Cerca come i fenomeni si succedono, non da dove vengano',
              'Smette di indagare l\'essenza intima della realtà',
              'Si accontenta di leggi costanti invece che di cause prime'], giusta:0},

    {tipo:'scelta', testo:'Perché la sociologia sta al vertice delle scienze?',
     opzioni:['Il suo oggetto è il più complesso e arriva per ultimo alla scienza',
              'Studia i fenomeni che dipendono da tutti gli altri',
              'Deve rimettere ordine in una società che rischia di dissolversi',
              'Le scienze si ordinano dal semplice al complicato'], giusta:0},

    {tipo:'scelta', testo:'Che cosa esprime la formula «scienza, previsione, azione»?',
     opzioni:['Conoscere le leggi permette di prevedere e quindi di agire',
              'Il sapere serve a dare all\'uomo un potere sulla natura',
              'Senza previsione la conoscenza resterebbe inutile',
              'Ogni legge scoperta si trasforma prima o poi in tecnica'], giusta:0},

    {tipo:'scelta', testo:'Come Mill corregge l\'utilitarismo di Bentham?',
     opzioni:['Non conta solo quanto piacere si prova ma di quale specie',
              'Meglio Socrate scontento che uno sciocco soddisfatto',
              'I piaceri dell\'intelligenza valgono più di quelli del corpo',
              'La felicità non si misura soltanto con una somma'], giusta:0},

    {tipo:'scelta', testo:'Che cosa stabilisce il principio del danno di Mill?',
     opzioni:['Si può limitare la libertà di uno solo per proteggere gli altri',
              'Su se stesso ciascun individuo è sovrano assoluto',
              'Lo Stato non deve entrare nella vita privata delle persone',
              'Nessuno può essere costretto per il suo presunto bene'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: fin dove arriva la mia libertà? Una parola.'}
  ]},
{
  titolo: 'Filosofia contemporanea · 6 — Darwin, Spencer e l\'evoluzionismo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: la natura ha un progetto o procede per tentativi? Una parola.'},

    {tipo:'scelta', testo:'Su quali due fatti si regge la teoria di Darwin?',
     opzioni:['Gli individui variano fra loro e le risorse non bastano per tutti',
              'Nascono più esseri di quanti l\'ambiente possa mantenerne',
              'Piccole differenze casuali rendono alcuni più capaci di vivere',
              'Chi nasce con un vantaggio ha più probabilità di sopravvivere'], giusta:0},

    {tipo:'scelta', testo:'Come funziona la selezione naturale?',
     opzioni:['Le variazioni utili si accumulano perché vengono ereditate',
              'Sopravvive chi si adatta meglio, non chi è più forte',
              'La natura fa in grande ciò che l\'allevatore fa in piccolo',
              'Nel tempo lunghissimo le differenze diventano nuove specie'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sostiene Darwin su uomo e animali?',
     opzioni:['Fra le loro facoltà mentali c\'è differenza di grado, non di natura',
              'Anche l\'uomo rientra nella stessa storia degli altri viventi',
              'Nulla lo separa in modo radicale dai mammiferi superiori',
              'Le sue capacità si spiegano con gli stessi meccanismi'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il darwinismo sociale?',
     opzioni:['Applicare la lotta per la vita ai rapporti fra gli uomini',
              'Dividere la società fra adatti e non adatti alla sopravvivenza',
              'Usare la biologia per giustificare disuguaglianze e razzismi',
              'Una deriva ideologica che Darwin stesso non condivideva'], giusta:0},

    {tipo:'scelta', testo:'Che funzione ha l\'Inconoscibile in Spencer?',
     opzioni:['Assegna un territorio alla religione e uno diverso alla scienza',
              'La realtà ultima resta un mistero che nessuno può conoscere',
              'Impedisce a fede e ricerca di invadere il campo dell\'altra',
              'La nostra conoscenza resta chiusa dentro il relativo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa dice la legge dell\'evoluzione di Spencer?',
     opzioni:['Ogni realtà va dal semplice omogeneo al complesso differenziato',
              'La stessa legge vale per gli astri, i viventi e le società',
              'Il progresso consiste nel differenziarsi progressivo delle parti',
              'Ciò che era indistinto si articola in organi specializzati'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue società militare e società industriale?',
     opzioni:['Nella prima lo Stato comanda l\'individuo, nella seconda accade il contrario',
              'Si passa dalla cooperazione imposta a quella volontaria',
              'Alla centralizzazione forzata subentra la libertà dei singoli',
              'Una appartiene al passato, l\'altra è la tendenza del futuro'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: evoluzione e progresso sono la stessa cosa? Una parola.'}
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
