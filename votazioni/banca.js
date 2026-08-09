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
