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
     opzioni:['Se a me pare freddo e a te caldo, valgono entrambe',
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
