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
