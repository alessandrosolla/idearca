/* ══════════════════════════════════════════════════════════
   BANCA DI DOMANDE — Idearca
   Ricavate dagli Approfondimenti pubblicati sul sito. I
   distrattori delle domande a scelta sono presi da altri
   pensatori dello stesso capitolo: sono sbagliati ma plausibili,
   quindi la domanda distingue chi ha studiato da chi tira a
   indovinare.

   Ogni capitolo apre con una nuvola di parole da usare PRIMA di
   spiegare: serve a far emergere cosa hanno già in testa, non a
   verificare. Le domande a scelta vanno invece dopo.

   Il campo "giusta" è l'indice della risposta attesa: compare
   solo qui nella regia, non viene proiettato e non finisce nel
   database. La correzione la fai a voce.
   ══════════════════════════════════════════════════════════ */

const BANCA = [
{
  titolo: 'Filosofia antica · 1 — Dagli Ionici agli atomisti',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: scrivi una parola che ti viene in mente pensando a «da che cosa è fatto tutto».'},
    {tipo:'scelta', testo:'Perché Anassimandro rifiuta di indicare come principio un elemento determinato come l\'acqua?',
     opzioni:['Perché un elemento determinato prevarrebbe sugli altri','Perché l\'acqua non si trasforma','Perché i sensi non la percepiscono','Perché non è divisibile'], giusta:0},
    {tipo:'scelta', testo:'Anassimene spiega le trasformazioni della materia con:',
     opzioni:['Rarefazione e condensazione dell\'aria','Amore e Odio','Il movimento del Nùs','Gli urti tra atomi'], giusta:0},
    {tipo:'scelta', testo:'Per i pitagorici «le cose sono numeri» significa che:',
     opzioni:['Il numero è la struttura stessa della realtà','I numeri servono a contare le cose','Solo ciò che si misura esiste','Il numero è un\'invenzione utile'], giusta:0},
    {tipo:'scelta', testo:'Che cos\'è il lògos di Eraclito?',
     opzioni:['La legge razionale che governa il divenire','Il discorso persuasivo','Il principio materiale del cosmo','L\'anima individuale'], giusta:0},
    {tipo:'scelta', testo:'Qual è la novità del Nùs di Anassagora rispetto ai principi precedenti?',
     opzioni:['È il primo principio non materiale','È infinitamente divisibile','È composto di quattro radici','Si muove per necessità cieca'], giusta:0},
    {tipo:'scelta', testo:'Quale problema risolvono gli atomisti ammettendo che il vuoto esista?',
     opzioni:['Rendono possibile il movimento senza negare l\'essere','Spiegano l\'origine degli dèi','Giustificano la conoscenza sensibile','Dimostrano che il cosmo è unico'], giusta:0},
    {tipo:'scelta', testo:'Per Democrito colore, sapore e calore sono:',
     opzioni:['Convenzioni: nella realtà ci sono solo atomi e vuoto','Proprietà reali degli atomi','Illusioni prodotte dal Nùs','Effetti dell\'unità dei contrari'], giusta:0},
    {tipo:'nuvola', testo:'Alla fine: quale di questi principi ti sembra oggi il più convincente, e perché in una parola?'}
  ]
},
{
  titolo: 'Filosofia antica · 2 — Parmenide e la filosofia eleatica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: se ti dico che il movimento non esiste, quale parola ti viene da rispondere?'},
    {tipo:'scelta', testo:'Qual è il passaggio decisivo del ragionamento di Parmenide contro il movimento?',
     opzioni:['Muoversi richiede il vuoto, e il vuoto sarebbe non-essere','I sensi si sbagliano sempre','Il tempo non esiste','Il cosmo è una sfera'], giusta:0},
    {tipo:'scelta', testo:'Che cosa critica Senofane con l\'esempio dei buoi e dei cavalli che disegnano gli dèi?',
     opzioni:['L\'antropomorfismo della religione tradizionale','L\'esistenza degli dèi','L\'uso dei miti nell\'educazione','L\'arte come imitazione'], giusta:0},
    {tipo:'scelta', testo:'Nel poema di Parmenide, che cos\'è la doxa?',
     opzioni:['La via dei sensi, che mostra un mondo apparente','La dimostrazione per assurdo','Il nome della dea che rivela la verità','La sfera dell\'essere'], giusta:0},
    {tipo:'scelta', testo:'A che cosa servivano i paradossi di Zenone?',
     opzioni:['A difendere Parmenide mostrando che i suoi avversari cadono nell\'assurdo','A dimostrare che il movimento è reale','A insegnare la retorica','A misurare le distanze'], giusta:0},
    {tipo:'scelta', testo:'Come reagiscono gli atomisti al ragionamento di Parmenide?',
     opzioni:['Ne accettano la logica ma ammettono che il vuoto esista','Lo rifiutano in blocco','Lo applicano alla morale','Sostengono che i sensi non sbagliano mai'], giusta:0},
    {tipo:'scelta', testo:'Che cosa distingue la domanda degli eleatici da quella dei Milesi?',
     opzioni:['Chiedono che cosa sia l\'essere, non di che cosa sia fatto il cosmo','Chiedono chi ha creato il mondo','Studiano l\'anima invece della natura','Cercano regole politiche'], giusta:0},
    {tipo:'scelta', testo:'Su quale punto Eraclito e Parmenide sono in contrasto più netto?',
     opzioni:['Se la realtà fondamentale sia il divenire o l\'essere immobile','Se gli dèi esistano','Se la virtù sia insegnabile','Se il cosmo sia infinito'], giusta:0},
    {tipo:'nuvola', testo:'Alla fine: chi ha ragione fra Eraclito e Parmenide? Rispondi con una parola sola.'}
  ]
},
{
  titolo: 'Filosofia antica · 3 — La sofistica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa ti fa venire in mente la parola «sofista»?'},
    {tipo:'scelta', testo:'Che cosa rese scandaloso, per Socrate, l\'insegnamento dei sofisti?',
     opzioni:['Che si facessero pagare','Che scrivessero in prosa','Che parlassero in pubblico','Che viaggiassero'], giusta:0},
    {tipo:'scelta', testo:'Nell\'interpretazione soggettivista, «l\'uomo è misura di tutte le cose» significa che:',
     opzioni:['Se il vento a me pare freddo e a te caldo, entrambe le percezioni sono vere','L\'uomo è al centro del cosmo','Solo i sapienti giudicano il vero','Le misure sono convenzioni'], giusta:0},
    {tipo:'scelta', testo:'In che cosa consiste il criterio dell\'utile di Protagora?',
     opzioni:['Fra opinioni tutte ugualmente vere si sceglie la più utile alla città','Si sceglie l\'opinione della maggioranza','Si sceglie ciò che conviene a chi parla','Si sceglie l\'opinione più antica'], giusta:0},
    {tipo:'scelta', testo:'Quali sono, nell\'ordine, le tre tesi di Gorgia nel «Sul non-essere»?',
     opzioni:['Nulla esiste; se esistesse non sarebbe conoscibile; se conoscibile non sarebbe comunicabile','Tutto scorre; nulla nasce; nulla muore','L\'essere è uno; è immobile; è eterno','Il vero è utile; l\'utile è bello; il bello è giusto'], giusta:0},
    {tipo:'scelta', testo:'Che cosa vuole dimostrare Gorgia con l\'Encomio di Elena?',
     opzioni:['Che la retorica può difendere qualunque tesi','Che Elena era innocente davvero','Che gli dèi governano le passioni','Che il linguaggio descrive la realtà'], giusta:0},
    {tipo:'scelta', testo:'La distinzione physis / nomos, portata all\'estremo da Callicle, sostiene che:',
     opzioni:['Le leggi sono convenzioni inventate dai deboli per frenare i forti','La natura e la legge coincidono','Le leggi derivano dagli dèi','La natura non si può conoscere'], giusta:0},
    {tipo:'scelta', testo:'In che cosa consiste l\'accusa di autorefutazione che Platone muove al relativismo?',
     opzioni:['Se ogni opinione è vera, è vera anche quella di chi nega il relativismo','Che i sofisti si contraddicono a vicenda','Che il relativismo è troppo difficile','Che nessuno lo mette in pratica'], giusta:0},
    {tipo:'nuvola', testo:'Alla fine: la virtù si può insegnare? Rispondi con una parola.'}
  ]
}
];
