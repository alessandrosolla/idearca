/* ══════════════════════════════════════════════════════════
   I DUE GLOSSARI
   Stessa struttura, due materie. La regola che li tiene in
   piedi è una sola: nessuna definizione può spiegare una
   parola usandone una che il glossario non abbia. Ogni
   {rimando} fra graffe è una chiave di questa stessa tabella,
   e all avvio la pagina controlla che esista davvero.

   {chiave} mostra il lemma minuscolo; {chiave|testo} mostra il
   testo dato, e serve per i plurali e le forme flesse.
   ══════════════════════════════════════════════════════════ */

const FILOSOFIA={
'arche':{l:'Archè', o:'ἀρχή', lt:'principio, inizio, comando',
 alt:'arche archè', area:'Presocratici',
 d:'Il {principio} da cui tutto viene e in cui tutto torna. La domanda dei primi filosofi non è «chi ha fatto il mondo» ma «di che cosa è fatto»: cercano un elemento che resti mentre tutto il resto cambia. Che sia acqua, aria o {apeiron}, la mossa è la stessa — spiegare il molteplice con l\'uno, senza chiamare in causa gli dèi.',
 luoghi:[
  {chi:'Talete', op:'in Aristotele, Metafisica A 3', q:'Il principio di tutte le cose è l\'acqua',
   c:'La prima proposizione filosofica che ci sia stata tramandata. Non importa che sia sbagliata: importa che sia una risposta che si può discutere.'},
  {chi:'Anassimandro', op:'fr. 1 DK', q:'Donde le cose hanno origine, là hanno anche la dissoluzione',
   c:'L\'unico frammento che ci resta, ed è già una legge di compensazione: le cose si pagano l\'un l\'altra la pena dell\'ingiustizia.'},
  {chi:'Eraclito', op:'fr. 30 DK', q:'Questo mondo nessuno degli dèi né degli uomini lo fece',
   c:'Il principio non è una cosa ma una misura: fuoco che si accende e si spegne secondo {logos}.'}],
 vicini:['apeiron','logos','physis','principio']},

'apeiron':{l:'Àpeiron', o:'ἄπειρον', lt:'senza limite, indeterminato',
 alt:'apeiron', area:'Presocratici',
 d:'L\'{arche} secondo Anassimandro: non uno degli elementi, ma qualcosa di indeterminato da cui gli elementi si separano. Il ragionamento è fine — se il principio fosse acqua, il fuoco non potrebbe esistere, perché l\'acqua lo spegnerebbe. Dunque il principio non può essere nessuna delle cose che genera.',
 luoghi:[
  {chi:'Anassimandro', op:'in Simplicio, Fisica 24, 13', q:'Principio degli esseri è l\'infinito',
   c:'Il primo concetto filosofico che non abbia un corrispettivo visibile: si arriva all\'apeiron solo per argomento, non guardando.'}],
 vicini:['arche','physis','principio']},

'logos':{l:'Logos', o:'λόγος', lt:'parola, discorso, ragione, rapporto',
 alt:'logos', area:'Presocratici · Stoicismo',
 d:'Una parola che tiene insieme il dire e il calcolare: è insieme il discorso, la ragione che vi si esprime e la proporzione fra le cose. In Eraclito è la legge secondo cui gli opposti si tengono; negli stoici è la ragione che percorre il mondo; nel Vangelo di Giovanni diventa il Verbo. Non è {doxa}: il logos è comune, l\'opinione è privata.',
 luoghi:[
  {chi:'Eraclito', op:'fr. 2 DK', q:'Il logos è comune, ma i più vivono come se avessero un pensiero proprio',
   c:'La legge è pubblica, e chi dorme si costruisce un mondo suo. Il rimprovero non è all\'ignoranza ma alla distrazione.'},
  {chi:'Eraclito', op:'fr. 50 DK', q:'Non me, ma il logos avendo ascoltato, è saggio convenire che tutto è uno',
   c:'Il filosofo si toglie di mezzo: non chiede di essere creduto, chiede che si ascolti la cosa.'},
  {chi:'Marco Aurelio', op:'Colloqui con se stesso, IV 4', q:'',
   c:'Se l\'intelligenza è comune, comune è anche la ragione: e allora siamo cittadini di una stessa città.'}],
 vicini:['arche','doxa','dialettica','physis']},

'physis':{l:'Physis', o:'φύσις', lt:'natura, ciò che cresce da sé',
 alt:'physis fisis nomos', area:'Presocratici · Sofisti',
 d:'La natura intesa non come paesaggio ma come <em>modo di venire alla luce</em>: physis è ciò che ha in sé il principio del proprio movimento. I sofisti la oppongono al <em>nomos</em>, la legge posta dagli uomini, e da quella coppia nasce la domanda politica: le nostre regole sono naturali o convenzionali? Se sono convenzionali, si possono cambiare.',
 luoghi:[
  {chi:'Eraclito', op:'fr. 123 DK', q:'La natura ama nascondersi',
   c:'Non si dà da vedere: va cercata sotto ciò che appare.'},
  {chi:'Antifonte', op:'Sulla verità', q:'',
   c:'Le prescrizioni delle leggi sono aggiunte, quelle della natura necessarie: violando le prime si sfugge alla pena se nessuno vede, violando le seconde no.'},
  {chi:'Aristotele', op:'Fisica II 1, 192b', q:'La natura è principio e causa del muoversi e dello stare fermo',
   c:'Definizione che dura duemila anni: naturale è ciò che si muove da sé, artificiale ciò che è mosso.'}],
 vicini:['arche','logos','sostanza','forma']},

'doxa':{l:'Doxa', o:'δόξα', lt:'opinione, apparenza, ciò che pare',
 alt:'doxa', area:'Parmenide · Platone',
 d:'L\'opinione: quello che pare a ciascuno. Per Parmenide è la via sbagliata, opposta alla verità. Per Platone è più interessante — sta <em>in mezzo</em> fra sapere e ignoranza, e può anche essere vera senza per questo essere {episteme}: le manca il discorso che la giustifica. Un\'opinione vera è come una statua di Dedalo, che se non la si lega scappa via.',
 luoghi:[
  {chi:'Parmenide', op:'fr. 1 DK', q:'Le opinioni dei mortali, in cui non c\'è vera certezza',
   c:'La dea presenta due vie e ne raccomanda una sola.'},
  {chi:'Platone', op:'Menone, 97e-98a', q:'',
   c:'Le opinioni vere finché restano al loro posto sono una bella cosa; ma non vogliono restarci a lungo, e scappano dall\'anima dell\'uomo, sicché non valgono molto finché non le si leghi con un ragionamento.'},
  {chi:'Platone', op:'Repubblica V, 478d', q:'',
   c:'Chi ama gli spettacoli ha opinione, non conoscenza: si diletta delle molte cose belle e non sopporta chi gli dica che il bello è uno.'}],
 vicini:['episteme','idea','dialettica']},

'episteme':{l:'Epistème', o:'ἐπιστήμη', lt:'scienza, sapere fondato',
 alt:'episteme epistème', area:'Platone · Aristotele',
 d:'Il sapere che sa anche <em>perché</em>. Si distingue dalla {doxa} non perché sia più sicuro di fatto, ma perché sa rendere ragione di sé. Per Aristotele si ha scienza di una cosa quando se ne conosce la causa e si sa che non può essere altrimenti: da qui l\'idea che la scienza riguardi l\'{universale}, mai il singolo caso.',
 luoghi:[
  {chi:'Platone', op:'Teeteto, 201c-210b', q:'',
   c:'Tre definizioni provate e tre fallite: opinione vera accompagnata da discorso resta la più promettente, e il dialogo si chiude senza conclusione.'},
  {chi:'Aristotele', op:'Analitici secondi I 2, 71b', q:'Crediamo di conoscere quando conosciamo la causa per cui la cosa è',
   c:'Sapere che è non basta: bisogna sapere perché, e che non poteva andare diversamente.'}],
 vicini:['doxa','universale','aporia','dialettica']},

'idea':{l:'Idea', o:'ἰδέα / εἶδος', lt:'aspetto, figura, ciò che si vede',
 alt:'idea eidos', area:'Platone',
 d:'La parola greca vuol dire <em>aspetto visibile</em>, ed è ironico: l\'idea platonica è precisamente ciò che gli occhi non vedono. È il modello unico ed eterno di cui le cose sensibili sono copie imperfette. Non sta nella mente — sta fuori, e la mente la raggiunge. Aristotele la contesterà proprio qui: separarla non spiega nulla, {sostanza} è questo cavallo, non la cavallinità.',
 luoghi:[
  {chi:'Platone', op:'Fedone, 100c', q:'',
   c:'Se qualcosa è bello oltre al bello in sé, non è bello per altra ragione se non perché partecipa di quel bello.'},
  {chi:'Platone', op:'Repubblica VII, 514a-517a', q:'',
   c:'La caverna: i prigionieri prendono le ombre per le cose. Chi esce resta accecato, e tornando dentro fa ridere — o lo uccidono.'},
  {chi:'Aristotele', op:'Metafisica A 9, 990b', q:'',
   c:'Le idee raddoppiano il numero delle cose da spiegare: è come se uno, dovendo contare pochi oggetti, credesse di riuscirci meglio dopo averli moltiplicati.'}],
 vicini:['doxa','sostanza','universale','forma']},

'maieutica':{l:'Maieutica', o:'μαιευτική', lt:'arte della levatrice',
 alt:'maieutica', area:'Socrate',
 d:'Il metodo di Socrate: non insegnare, ma far partorire. Chi interroga non mette dentro niente — tira fuori quello che l\'altro già portava senza saperlo, e insieme lo aiuta a riconoscere quando ciò che ha partorito è aria. Precede l\'{aporia}: prima si demolisce la falsa sicurezza, poi si cerca.',
 luoghi:[
  {chi:'Platone', op:'Teeteto, 149a-151d', q:'',
   c:'Socrate figlio di levatrice: assiste anime invece che corpi, e la sua arte più grande è distinguere il parto vero dal fantasma.'},
  {chi:'Platone', op:'Menone, 82b-85b', q:'',
   c:'Lo schiavo che non ha mai studiato geometria arriva da solo a raddoppiare il quadrato: guidato da domande, mai da risposte.'}],
 vicini:['aporia','dialettica','doxa']},

'aporia':{l:'Aporìa', o:'ἀπορία', lt:'senza via d\'uscita, strada che non passa',
 alt:'aporia aporìa', area:'Socrate · Aristotele',
 d:'Il vicolo cieco in cui finiscono molti dialoghi socratici: si scopre di non sapere quello che si credeva di sapere. Non è un fallimento — è il risultato. Chi crede di sapere non cerca; chi si accorge di non sapere comincia. In Aristotele diventa metodo: si espongono prima le difficoltà, poi si scioglie.',
 luoghi:[
  {chi:'Platone', op:'Menone, 80a-b', q:'',
   c:'Menone paragona Socrate alla torpedine marina, che intorpidisce chi la tocca: «mi hai stregato, e ora non so più che cosa sia la virtù, io che ne ho parlato mille volte».'},
  {chi:'Aristotele', op:'Metafisica B 1, 995a', q:'',
   c:'Chi vuole sciogliere deve prima aver ben stretto il nodo: chi cerca senza aver percorso le difficoltà non sa nemmeno dove andare.'}],
 vicini:['maieutica','dialettica','doxa']},

'dialettica':{l:'Dialettica', o:'διαλεκτική', lt:'arte del discutere',
 alt:'dialettica dialektike', area:'Platone · Aristotele · Hegel',
 d:'La parola cambia mestiere tre volte. In Platone è la scienza suprema, che sale dalle ipotesi al principio e divide i generi secondo le loro giunture naturali. In Aristotele scende di grado: ragionare da premesse probabili, non necessarie — utile ma non {episteme}. In Hegel diventa il movimento delle cose stesse, per cui ogni posizione genera il proprio contrario e si risolve in un terzo che li conserva entrambi.',
 luoghi:[
  {chi:'Platone', op:'Repubblica VII, 533c', q:'',
   c:'Solo il metodo dialettico procede eliminando le ipotesi fino al principio stesso, per rendere sicuro il risultato.'},
  {chi:'Aristotele', op:'Topici I 1, 100a', q:'',
   c:'Dialettico è il ragionamento che parte da premesse fondate sull\'opinione: da ciò che appare a tutti, o ai più, o ai sapienti.'},
  {chi:'Hegel', op:'Enciclopedia, § 81', q:'',
   c:'La dialettica è il trapassare di ogni determinazione finita nel proprio opposto: non un procedimento che si applica alle cose, ma il modo in cui le cose vanno.'}],
 vicini:['aporia','maieutica','episteme','aufhebung']},

'sostanza':{l:'Sostanza', o:'οὐσία / substantia', lt:'ciò che sta sotto',
 alt:'sostanza ousia usia substantia', area:'Aristotele · Cartesio · Spinoza',
 d:'Ciò che sta per sé, mentre tutto il resto sta in altro. Per Aristotele sostanza prima è l\'individuo concreto — questo uomo, questo cavallo — {sinolo} di {forma} e materia. Cartesio la ridefinisce come ciò che per esistere non ha bisogno d\'altro, e ne ricava due sostanze incomunicanti; Spinoza applica la stessa definizione fino in fondo e ne ricava una sola. Hume dirà che non c\'è affatto, e Kant che è una {categoria}.',
 luoghi:[
  {chi:'Aristotele', op:'Categorie 5, 2a', q:'',
   c:'Sostanza in senso proprio e primo è ciò che non si dice di un soggetto né è in un soggetto: per esempio, questo uomo determinato.'},
  {chi:'Cartesio', op:'Principi I 51', q:'',
   c:'Per sostanza non possiamo intendere altro che una cosa che esiste in modo da non aver bisogno di nessun\'altra per esistere.'},
  {chi:'Spinoza', op:'Etica I, prop. 14', q:'',
   c:'Oltre Dio non può darsi né concepirsi alcuna sostanza. La coerenza con la definizione cartesiana porta dove Cartesio non voleva.'},
  {chi:'Hegel', op:'Fenomenologia, Prefazione', q:'',
   c:'Il vero va inteso non come sostanza ma altrettanto come soggetto: la parola finisce a significare il contrario di ciò da cui era partita.'}],
 vicini:['sinolo','forma','essenza','categoria','universale']},

'sinolo':{l:'Sìnolo', o:'σύνολον', lt:'il tutto insieme',
 alt:'sinolo synolon', area:'Aristotele',
 d:'L\'individuo concreto come unione inseparabile di {forma} e materia. Non è un pezzo più un altro pezzo: la forma non è aggiunta alla materia, è il suo essere così. Chiedere se siano una cosa sola, dice Aristotele, è come chiedere se lo siano la cera e la sua impronta.',
 luoghi:[
  {chi:'Aristotele', op:'Metafisica Z 10-11', q:'',
   c:'Il sinolo si genera e si corrompe; la forma no, perché non viene prodotta ma è ciò che si trasmette alla materia.'},
  {chi:'Aristotele', op:'De anima II 1, 412b', q:'',
   c:'Non si deve cercare se anima e corpo siano una cosa sola, come non lo si cerca per la cera e l\'impronta.'}],
 vicini:['sostanza','forma','anima','potenza']},

'forma':{l:'Forma e materia', o:'μορφή / ὕλη', lt:'figura / legname, materiale',
 alt:'forma materia morphe hyle ile', area:'Aristotele',
 d:'La coppia con cui Aristotele spiega ogni cosa senza doverla separare dal mondo, come faceva l\'{idea} platonica. La materia è ciò di cui una cosa è fatta, la forma è ciò che la fa essere quella cosa. La statua non è il bronzo, e non è nemmeno una figura che stia da un\'altra parte: è bronzo <em>informato</em>. Materia sta alla forma come {potenza} sta ad atto.',
 luoghi:[
  {chi:'Aristotele', op:'Fisica II 3, 194b', q:'',
   c:'In un senso si dice causa ciò di cui una cosa è fatta e che permane: il bronzo della statua. In un altro senso, la forma e il modello.'},
  {chi:'Aristotele', op:'Metafisica H 6, 1045b', q:'',
   c:'La materia prossima e la forma sono la stessa cosa: l\'una in potenza, l\'altra in atto. Non serve nulla che le leghi.'}],
 vicini:['sinolo','sostanza','potenza','idea','anima']},

'potenza':{l:'Potenza e atto', o:'δύναμις / ἐνέργεια', lt:'capacità / essere all\'opera',
 alt:'potenza atto dynamis energeia dinamis', area:'Aristotele',
 d:'La soluzione di Aristotele al problema che aveva bloccato Parmenide: come può il non essere diventare essere? Distinguendo. Il seme non è la quercia in atto, ma non è nemmeno il nulla: è quercia in potenza. Il divenire smette di essere una contraddizione e diventa il passaggio ordinato dall\'una all\'altra. L\'atto è prima della potenza per {sostanza}, anche se la potenza viene prima nel tempo.',
 luoghi:[
  {chi:'Aristotele', op:'Metafisica Θ 8, 1049b', q:'',
   c:'L\'atto è anteriore alla potenza: perché il seme diventi uomo occorre già un uomo.'},
  {chi:'Aristotele', op:'De anima II 1, 412a', q:'',
   c:'L\'anima è atto primo di un corpo naturale che ha la vita in potenza: primo, come la scienza in chi dorme.'}],
 vicini:['forma','sinolo','anima','sostanza']},

'anima':{l:'Anima', o:'ψυχή / anima', lt:'soffio, respiro',
 alt:'anima psyche psiche', area:'Platone · Aristotele · Cartesio',
 d:'Ciò per cui un corpo è vivo. Per Platone è una {sostanza} a sé, immortale, che nel corpo sta come in un carcere; per Aristotele è la {forma} del corpo vivente, e come tale non sopravvive. Il cristianesimo deve tenere insieme le due esigenze; Cartesio la rifà sostanza separata e resta con il problema di come possa muovere un braccio.',
 luoghi:[
  {chi:'Platone', op:'Fedone, 64a', q:'',
   c:'Chi filosofa davvero non si occupa d\'altro che di morire ed essere morto: la filosofia è esercizio di separazione.'},
  {chi:'Aristotele', op:'De anima II 1, 412a', q:'L\'anima è atto primo di un corpo naturale che ha la vita in potenza',
   c:'Non una cosa dentro un\'altra cosa: la vista sta all\'occhio come l\'anima sta al corpo.'},
  {chi:'Cartesio', op:'Meditazioni, VI', q:'',
   c:'Io non sono presente nel mio corpo come un pilota nella sua nave: sono strettissimamente congiunto — ma come, non lo dice.'}],
 vicini:['sinolo','forma','potenza','sostanza','cogito']},

'virtu':{l:'Virtù', o:'ἀρετή / virtus', lt:'eccellenza, il fare bene la propria funzione',
 alt:'virtu virtù arete aretè areté', area:'Socrate · Aristotele',
 d:'Non la bontà morale in senso moderno: l\'<em>eccellenza</em> di qualcosa nel fare ciò per cui è fatto. C\'è una virtù del coltello (tagliare) e una del cavallo. La virtù dell\'uomo sarà l\'eccellenza in ciò che gli è proprio — per Aristotele l\'attività secondo ragione, e la si acquista per abitudine, non per lezione. Sta in mezzo fra due eccessi.',
 luoghi:[
  {chi:'Aristotele', op:'Etica Nicomachea II 1, 1103a', q:'',
   c:'Nessuna virtù etica nasce in noi per natura: le acquistiamo esercitandole prima, come per le arti. Suonando la cetra si diventa citaredi.'},
  {chi:'Aristotele', op:'Etica Nicomachea II 6, 1106b', q:'',
   c:'La virtù è medietà fra due vizi, l\'uno per eccesso l\'altro per difetto — ma secondo la sostanza è un culmine.'},
  {chi:'Platone', op:'Protagora, 352b-c', q:'',
   c:'Socrate: nessuno sbaglia volendo. Se sapesse davvero che è male, non lo farebbe — tesi che Aristotele contesterà.'}],
 vicini:['eudaimonia','episteme','maieutica']},

'eudaimonia':{l:'Eudaimonìa', o:'εὐδαιμονία', lt:'avere un buon demone; felicità, riuscita',
 alt:'eudaimonia eudemonia felicita', area:'Aristotele',
 d:'Il fine a cui tutto tende e che non si vuole mai per altro. Si traduce «felicità», ma non è uno stato d\'animo: è una <em>vita</em> riuscita, giudicabile solo per intero. Non basta sentirsi bene — servono {virtù}, tempo, e una quota di fortuna che non dipende da noi. Per questo, dice Aristotele, nessuno chiama felice un uomo finché è vivo.',
 luoghi:[
  {chi:'Aristotele', op:'Etica Nicomachea I 7, 1098a', q:'',
   c:'Il bene dell\'uomo è l\'attività dell\'anima secondo virtù, e in una vita compiuta: una rondine non fa primavera.'},
  {chi:'Aristotele', op:'Etica Nicomachea I 10, 1100a', q:'',
   c:'Le vicende umane cambiano molte volte: chi è felice oggi può finire come Priamo. Bisogna aspettare la fine.'}],
 vicini:['virtu','sostanza']},

'universale':{l:'Universale', o:'καθόλου / universale', lt:'detto di molti',
 alt:'universale katholou', area:'Aristotele · Scolastica',
 d:'Ciò che si predica di molti individui: «uomo» rispetto a Socrate e Callia. Esiste davvero, o è solo un nome? La domanda apre la disputa che attraversa tutto il Medioevo: realisti (esiste, ed è {idea} o {forma}), nominalisti (esistono solo gli individui, l\'universale è un flatus vocis), concettualisti (esiste nella mente). La posta non è astratta: se gli universali non esistono, non esiste nemmeno la {episteme}, che è sempre del generale.',
 luoghi:[
  {chi:'Porfirio', op:'Isagoge, proemio', q:'',
   c:'Se i generi e le specie sussistano o stiano solo nei pensieri, e se sussistendo siano corporei o incorporei: pone la domanda e dichiara di non volerla affrontare. Ci penseranno per otto secoli.'},
  {chi:'Guglielmo di Ockham', op:'Summa logicae I 15', q:'',
   c:'Nessun universale è qualcosa che esista fuori dell\'anima: è un segno che sta per molti. Il rasoio applicato all\'inventario del mondo.'},
  {chi:'Tommaso d\'Aquino', op:'De ente et essentia', q:'',
   c:'La soluzione di mezzo: l\'universale è nella cosa come natura, nella mente come concetto, in Dio come idea. Tre modi, un solo contenuto.'}],
 vicini:['idea','forma','episteme','essenza']},

'essenza':{l:'Essenza ed esistenza', o:'essentia / esse', lt:'ciò che una cosa è / che essa è',
 alt:'essenza esistenza essentia esse', area:'Scolastica',
 d:'Si può sapere perfettamente <em>che cosa</em> sia una fenice senza sapere <em>se</em> ce ne sia una. Da questa osservazione Tommaso ricava la distinzione: nelle creature l\'essenza non include l\'esistenza, che è ricevuta; solo in Dio le due coincidono, e per questo Dio non è una {sostanza} fra le altre ma l\'atto stesso dell\'essere.',
 luoghi:[
  {chi:'Avicenna', op:'Metafisica I 5', q:'',
   c:'L\'esistenza è un accidente che sopravviene all\'essenza: la formula che Tommaso correggerà, ma da cui parte.'},
  {chi:'Tommaso d\'Aquino', op:'De ente et essentia, IV', q:'',
   c:'Posso sapere che cosa sia un uomo o una fenice e ignorare se abbia essere nella realtà delle cose.'}],
 vicini:['sostanza','universale','idea']},

'cogito':{l:'Cogito', o:'cogito, ergo sum', lt:'penso, dunque sono',
 alt:'cogito sum', area:'Cartesio',
 d:'Il punto che resiste al dubbio più radicale: posso dubitare dei sensi, della matematica, dell\'esistenza del mondo — ma non del fatto che sto dubitando, e dubitare è pensare. Non è un sillogismo, è un\'evidenza colta ogni volta che la si pensa. Da qui Cartesio ricava anche il criterio: se questo è certo, è certo perché chiaro e distinto.',
 luoghi:[
  {chi:'Cartesio', op:'Discorso sul metodo, IV', q:'Penso, dunque sono',
   c:'Verità così ferma e sicura che le più stravaganti supposizioni degli scettici non erano capaci di scuoterla.'},
  {chi:'Cartesio', op:'Meditazioni, II', q:'',
   c:'Io sono, io esisto: è certo, ogni volta che lo pronuncio o lo concepisco nella mente. La certezza dura quanto l\'atto.'},
  {chi:'Hume', op:'Trattato I, IV, 6', q:'',
   c:'La replica, un secolo dopo: entro in me stesso e inciampo sempre in qualche percezione particolare, mai in me stesso.'}],
 vicini:['anima','sostanza','apriori','fenomeno']},

'apriori':{l:'A priori e a posteriori', o:'', lt:'prima / dopo l\'esperienza',
 alt:'apriori a priori a posteriori', area:'Kant',
 d:'A posteriori è ciò che si sa solo avendo guardato; a priori ciò che vale prima e indipendentemente da ogni esperienza, e si riconosce da due segni: necessità e universalità. La domanda di Kant non è se esistano giudizi a priori, ma se ne esistano di <em>sintetici</em> — che aggiungano qualcosa invece di limitarsi a esplicitare il soggetto. La sua risposta è sì, e cambia tutto.',
 luoghi:[
  {chi:'Kant', op:'Critica della ragion pura, Introduzione', q:'',
   c:'Che ogni nostra conoscenza cominci con l\'esperienza non significa che derivi tutta dall\'esperienza. Distinzione su cui si regge l\'intero edificio.'},
  {chi:'Kant', op:'Critica della ragion pura, B 19', q:'Come sono possibili giudizi sintetici a priori?',
   c:'La domanda in una riga. Risposta: perché le forme dell\'esperienza le mettiamo noi, e possiamo conoscerle senza consultarla.'}],
 vicini:['fenomeno','categoria','cogito','episteme']},

'categoria':{l:'Categoria', o:'κατηγορία', lt:'accusa, predicazione, ciò che si dice di',
 alt:'categoria kategoria', area:'Aristotele · Kant',
 d:'In Aristotele sono i modi fondamentali in cui si dice l\'essere: {sostanza}, quantità, qualità, relazione e altri sei. Sono divisioni della realtà, ricavate dal linguaggio. In Kant cambiano lato: restano dodici, ma diventano funzioni dell\'intelletto — non come il mondo è fatto, ma come noi siamo fatti per pensarlo. Valgono necessariamente per i {fenomeno|fenomeni} e per nient\'altro.',
 luoghi:[
  {chi:'Aristotele', op:'Categorie 4, 1b', q:'',
   c:'Delle espressioni dette senza connessione, ciascuna significa o sostanza, o quantità, o qualità, o relazione, o dove, o quando…'},
  {chi:'Kant', op:'Critica della ragion pura, B 105', q:'',
   c:'Le categorie sono concetti puri dell\'intelletto che si riferiscono a priori a oggetti dell\'intuizione in generale.'}],
 vicini:['sostanza','apriori','fenomeno','universale']},

'fenomeno':{l:'Fenomeno e noumeno', o:'φαινόμενον / νοούμενον', lt:'ciò che appare / ciò che è pensato',
 alt:'fenomeno noumeno phainomenon nooumenon', area:'Kant',
 d:'Il fenomeno non è l\'apparenza ingannevole: è l\'oggetto come ci si dà, l\'unico che possiamo conoscere, ed è pienamente reale. Il noumeno è la cosa come sarebbe indipendentemente da noi: pensabile, mai conoscibile. Non è un mondo dietro il mondo — è un <em>concetto limite</em>, che serve a segnare il confine e a impedire che si scambino le {categoria|categorie} per proprietà delle cose.',
 luoghi:[
  {chi:'Kant', op:'Critica della ragion pura, B XXVI', q:'',
   c:'Non possiamo conoscere gli oggetti come cose in sé, ma solo come fenomeni: e tuttavia dobbiamo poterli almeno pensare come cose in sé.'},
  {chi:'Kant', op:'Critica della ragion pura, B 310', q:'',
   c:'Il concetto di noumeno è puramente limitativo: non un oggetto in più, un cartello che dice fin qui.'}],
 vicini:['apriori','categoria','doxa','idea']},

'imperativo':{l:'Imperativo categorico', o:'', lt:'comando incondizionato',
 alt:'imperativo categorico', area:'Kant',
 d:'Un comando che non dipende da ciò che si vuole ottenere. Gli imperativi ipotetici dicono «se vuoi X, fai Y»; quello categorico dice «fai Y», e basta. Non prescrive contenuti ma una <em>forma</em>: che la regola del tuo agire possa valere per chiunque senza contraddirsi. Da qui la seconda formula: l\'uomo va trattato sempre anche come fine, mai soltanto come mezzo.',
 luoghi:[
  {chi:'Kant', op:'Fondazione della metafisica dei costumi, II', q:'Agisci solo secondo quella massima che tu possa insieme volere che divenga legge universale',
   c:'La prova non è delle conseguenze: è se la regola, generalizzata, si distrugga da sé. La promessa falsa generalizzata abolisce la promessa.'},
  {chi:'Kant', op:'Fondazione, II', q:'',
   c:'Agisci in modo da trattare l\'umanità, nella tua persona come in quella di ogni altro, sempre anche come fine e mai semplicemente come mezzo.'},
  {chi:'Hegel', op:'Lineamenti, § 135', q:'',
   c:'L\'obiezione: il criterio è vuoto. Da esso non esce nessun dovere determinato finché non si dia già per buono un contenuto.'}],
 vicini:['apriori','virtu','aufhebung']},

'aufhebung':{l:'Aufhebung', o:'', lt:'togliere, conservare e innalzare, tutto insieme',
 alt:'aufhebung aufheben superamento', area:'Hegel',
 d:'Il verbo tedesco <em>aufheben</em> significa insieme abolire e conservare, e Hegel ci costruisce sopra: nella {dialettica} il momento superato non viene cancellato ma tolto <em>come pretesa di bastare a sé</em>, e conservato come parte di un intero più ampio. Si traduce «superamento», ma il doppio senso si perde. È il motivo per cui in Hegel l\'errore non è uno scarto: è un momento necessario.',
 luoghi:[
  {chi:'Hegel', op:'Scienza della logica, I', q:'',
   c:'Aufheben ha nella lingua il doppio senso di conservare e di far cessare: e il termine tolto è insieme conservato, avendo perduto solo la sua immediatezza.'},
  {chi:'Hegel', op:'Fenomenologia, Prefazione', q:'Il vero è l\'intero',
   c:'L\'intero però è solo l\'essenza che si compie mediante il proprio sviluppo: l\'assoluto è essenzialmente risultato.'}],
 vicini:['dialettica','sostanza','alienazione']},

'alienazione':{l:'Alienazione', o:'Entfremdung', lt:'farsi estraneo',
 alt:'alienazione entfremdung estraniazione', area:'Hegel · Marx',
 d:'Il processo per cui qualcosa che è mio mi diventa estraneo e mi si rivolta contro. In Hegel è un momento necessario dello spirito, che deve uscire da sé per tornarvi arricchito. In Marx smette di essere logico e diventa storico e rimediabile: l\'operaio è estraniato dal prodotto, dal proprio lavoro, dagli altri e da sé — e più produce, più povero diventa il suo mondo interiore.',
 luoghi:[
  {chi:'Hegel', op:'Fenomenologia, VI B', q:'',
   c:'Lo spirito si estrania da sé nella cultura, e in quell\'estraneità acquista la propria effettualità.'},
  {chi:'Marx', op:'Manoscritti del 1844', q:'',
   c:'L\'operaio diventa tanto più povero quanta più ricchezza produce: il prodotto del suo lavoro gli sta di fronte come un essere estraneo.'}],
 vicini:['aufhebung','dialettica','nichilismo']},

'nichilismo':{l:'Nichilismo', o:'', lt:'dal latino nihil, nulla',
 alt:'nichilismo nihil', area:'Nietzsche',
 d:'Non l\'idea che nulla esista, ma che i valori supremi si siano svalutati: manca la risposta al «perché». Nietzsche lo chiama il più inquietante degli ospiti perché non arriva da fuori — è l\'esito della nostra stessa onestà, che ha applicato alla morale e alla religione la richiesta di verità che quelle avevano insegnato. Distingue un nichilismo passivo, che si arrende, da uno attivo, che sgombra il terreno.',
 luoghi:[
  {chi:'Nietzsche', op:'Frammenti postumi 1885-87', q:'Che cosa significa nichilismo? Che i valori supremi si svalutano. Manca lo scopo, manca la risposta al perché',
   c:'La definizione più netta che ne abbia dato, in due righe di appunti mai pubblicati.'},
  {chi:'Nietzsche', op:'La gaia scienza, § 125', q:'',
   c:'L\'uomo folle con la lanterna in pieno mattino: «Dio è morto, e noi lo abbiamo ucciso» — e nessuno al mercato capisce di che parli. È arrivato troppo presto.'},
  {chi:'Nietzsche', op:'Genealogia della morale, III', q:'',
   c:'L\'uomo preferisce volere il nulla piuttosto che non volere: l\'ascetismo come ultima risorsa di una volontà che non sopporta il vuoto.'}],
 vicini:['alienazione','doxa','virtu']},

'principio':{l:'Principio', o:'ἀρχή / principium', lt:'ciò da cui una cosa comincia o dipende',
 alt:'principio principium', area:'Trasversale',
 d:'Parola che porta due sensi da tenere distinti: principio come <em>inizio</em> nel tempo (da dove è cominciato) e principio come <em>fondamento</em> (da che cosa dipende). L\'{arche} dei presocratici li tiene insieme; la filosofia successiva li separa, e quasi tutte le confusioni sulle prove dell\'esistenza di Dio nascono dal non averlo fatto.',
 luoghi:[
  {chi:'Aristotele', op:'Metafisica Δ 1', q:'',
   c:'Elenca sei sensi di «principio»: comune a tutti è essere ciò da cui una cosa è, o si genera, o si conosce.'},
  {chi:'Tommaso d\'Aquino', op:'Summa theologiae I, q. 46', q:'',
   c:'Che il mondo abbia avuto un inizio non è dimostrabile: si crede. Che dipenda da Dio si dimostra. I due principî non coincidono.'}],
 vicini:['arche','apeiron','essenza']}
,

'aporia':{l:`Aporìa`, o:`ἀπορία`, lt:`mancanza di via d uscita`,
 alt:`aporia aporie`, area:`Socrate`,
 d:`Il punto in cui un ragionamento si blocca perché tutte le strade portano a una contraddizione. Nei dialoghi socratici è il risultato voluto: l interlocutore scopre di non sapere quello che credeva di sapere. Non è un fallimento del {metodo}, è il suo primo effetto — e senza di essa non comincia nessuna ricerca.`,
 luoghi:[
  {chi:`Platone`, op:`Menone 80a`, q:`Mi hai stregato e ammaliato, e ora sono pieno di dubbi`,
   c:`Menone paragona Socrate alla torpedine marina, che intorpidisce chi la tocca. La lode e l accusa sono la stessa frase.`}],
 vicini:[`metodo`,`ironia`,`dialettica`]},

'ironia':{l:`Ironia`, o:`εἰρωνεία`, lt:`dissimulazione, il far finta di non sapere`,
 alt:`ironia socratica eironeia`, area:`Socrate`,
 d:`Il fingersi ignoranti per far parlare l altro. Non è una battuta: è una mossa di metodo, perché finché uno crede di sapere non cerca. Chi la subiva la trovava insopportabile, e in parte è per questo che Socrate finì a processo.`,
 luoghi:[
  {chi:`Platone`, op:`Repubblica 337a`, q:`Ecco la solita ironia di Socrate`,
   c:`Lo dice Trasimaco, esasperato. La parola in greco ha un senso negativo: vuol dire prendere in giro.`}],
 vicini:[`aporia`,`metodo`,`maieutica`]},

'maieutica':{l:`Maieutica`, o:`μαιευτική`, lt:`arte della levatrice`,
 alt:`maieutica maieutico`, area:`Socrate`,
 d:`L arte di far partorire ad altri i pensieri che hanno già dentro. Socrate dice di essere sterile lui stesso: non insegna nulla, fa nascere. La levatrice era il mestiere di sua madre, e la metafora comprende anche la parte scomoda — che il parto fa male e che alcuni figli si scoprono non vitali.`,
 luoghi:[
  {chi:`Platone`, op:`Teeteto 150b-c`, q:`La mia arte ostetrica ha tutte le funzioni di quella delle levatrici`,
   c:`Con una differenza: assiste le anime, non i corpi, e sa distinguere il pensiero vero dal parto illusorio.`}],
 vicini:[`ironia`,`aporia`,`metodo`]},

'atomo':{l:`Atomo`, o:`ἄτομος`, lt:`che non si può tagliare`,
 alt:`atomo atomi atomismo`, area:`Presocratici`,
 d:`Le particelle piene e indivisibili di cui, per Democrito, è fatto tutto. Si muovono nel vuoto e le cose sono i loro incontri. La mossa filosofica sta nel salvare insieme Parmenide ed Eraclito: immobile e ingenerato in basso, mutevole in superficie. Dolce e amaro esistono per convenzione — per verità, atomi e vuoto.`,
 luoghi:[
  {chi:`Democrito`, op:`fr. 9 DK`, q:`Per convenzione dolce, per convenzione amaro; in verità atomi e vuoto`,
   c:`La distinzione fra le qualità che stanno nelle cose e quelle che stanno in noi nasce qui, duemila anni prima di Galileo.`},
  {chi:`Lucrezio`, op:`De rerum natura I, 265`, q:`Nulla si genera dal nulla per volere divino`,
   c:`Il poema latino che ha trasmesso l atomismo al mondo moderno: ritrovato nel 1417, cambierà il Rinascimento.`}],
 vicini:[`arche`,`physis`,`materia`]},

'materia':{l:`Materia`, o:`ὕλη / materia`, lt:`legname da costruzione`,
 alt:`materia hyle ilemorfismo`, area:`Aristotele`,
 d:`Ciò di cui una cosa è fatta, in coppia con la {forma}. Da sola non è nulla di determinato: è pura possibilità di essere qualcosa. La parola greca vuol dire legname, e conserva l idea di un materiale che aspetta di ricevere un profilo. Nel materialismo moderno cambierà mestiere e diventerà l unica realtà.`,
 luoghi:[
  {chi:`Aristotele`, op:`Metafisica Z 3`, q:``,
   c:`Tolta ogni determinazione a un corpo, resta qualcosa che non è né quantità né qualità: la materia prima, che non esiste mai da sola.`}],
 vicini:[`forma`,`sostanza`,`atomo`,`potenza`]},

'dialettica':{l:`Dialettica`, o:`διαλεκτική`, lt:`arte del discutere`,
 alt:`dialettica dialettico`, area:`Platone · Aristotele · Hegel`,
 d:`Tre mestieri con lo stesso nome. In Platone è la scienza suprema, che sale dalle cose alle {idea|idee} e le divide correttamente. In Aristotele è il ragionare a partire da premesse probabili, non dimostrate. In Hegel è il movimento stesso della realtà, che avanza per contraddizioni superate. Chi confonde i tre sensi non capisce nessuno dei tre.`,
 luoghi:[
  {chi:`Platone`, op:`Repubblica 533c`, q:`La dialettica è come la cornice che corona le altre scienze`,
   c:`Sta sopra la matematica perché non parte da ipotesi date per buone: le mette in questione.`},
  {chi:`Hegel`, op:`Enciclopedia § 81`, q:``,
   c:`Il momento dialettico è il togliersi da sé delle determinazioni finite: non un metodo applicato dall esterno, ma quello che le cose fanno.`}],
 vicini:[`aporia`,`metodo`,`aufhebung`,`idea`]},

'aufhebung':{l:`Aufhebung`, o:`Aufhebung`, lt:`togliere, conservare, sollevare`,
 alt:`aufhebung superamento toglimento`, area:`Hegel`,
 d:`La parola tedesca che Hegel usa perché vuol dire tre cose insieme: eliminare, conservare e portare più in alto. Ciò che viene superato non sparisce — resta dentro il risultato come momento. Si traduce «superamento», ma la traduzione perde due sensi su tre, e sono proprio quelli che servono.`,
 luoghi:[
  {chi:`Hegel`, op:`Scienza della logica, I`, q:`Aufheben ha nella lingua il doppio senso di conservare e di far cessare`,
   c:`Lo dice esplicitamente: la lingua tedesca gli offre un vocabolo speculativo, e lui lo prende come prova che il pensiero è già nel linguaggio.`}],
 vicini:[`dialettica`,`spirito`]},

'alienazione':{l:`Alienazione`, o:`Entfremdung`, lt:`rendere estraneo`,
 alt:`alienazione estraniazione entfremdung`, area:`Hegel · Marx`,
 d:`Il diventare estraneo a se stessi attraverso ciò che si è prodotto. In Hegel è un passaggio necessario dello {spirito}, che si riconosce solo dopo essersi fatto altro. In Marx è un fatto storico da abolire: l operaio produce oggetti che appartengono a un altro e lo dominano, e più produce meno è se stesso.`,
 luoghi:[
  {chi:`Marx`, op:`Manoscritti del 1844`, q:`L operaio diventa tanto più povero quanta più ricchezza produce`,
   c:`Quattro forme: estraneità dal prodotto, dall attività, dalla propria essenza, dagli altri uomini.`},
  {chi:`Feuerbach`, op:`L essenza del cristianesimo`, q:``,
   c:`Il modello viene da qui: l uomo proietta in Dio le proprie qualità migliori e poi si sente povero davanti a esse.`}],
 vicini:[`spirito`,`aufhebung`,`prassi`]},

'prassi':{l:`Prassi`, o:`πρᾶξις`, lt:`azione, il fare`,
 alt:`prassi praxis`, area:`Aristotele · Hegel · Marx`,
 d:`In Aristotele l agire che ha il fine in se stesso, distinto dal produrre che ha il fine nell oggetto. In Marx la parola cambia peso: diventa l attività con cui gli uomini trasformano insieme il mondo e, trasformandolo, trasformano se stessi. Da qui la frase sulle undici tesi: i filosofi hanno interpretato il mondo, si tratta di cambiarlo.`,
 luoghi:[
  {chi:`Aristotele`, op:`Etica Nicomachea VI, 4`, q:``,
   c:`La produzione ha un fine diverso da sé, l azione no: agire bene è già il fine dell agire.`},
  {chi:`Marx`, op:`Tesi su Feuerbach, XI`, q:`I filosofi hanno solo interpretato il mondo in modi diversi`,
   c:`Non è un invito ad abbandonare la teoria: è l affermazione che la verità di una teoria si decide nella pratica.`}],
 vicini:[`alienazione`,`virtu`]},

'nichilismo':{l:`Nichilismo`, o:`nihil`, lt:`niente`,
 alt:`nichilismo nichilista`, area:`Nietzsche`,
 d:`La condizione in cui i valori supremi si svalutano: non che non ci sia più nulla, ma che le risposte che tenevano in piedi la vita non tengono più e nessuno le ha ancora sostituite. Nietzsche lo diagnostica come ospite inquietante già alla porta, e distingue un nichilismo passivo — la stanchezza — da uno attivo, che demolisce per liberare il posto.`,
 luoghi:[
  {chi:`Nietzsche`, op:`Frammenti postumi 1887`, q:`Che cosa significa nichilismo? Che i valori supremi si svalutano`,
   c:`Manca la risposta alla domanda «perché». La diagnosi è che manchi la domanda, non che manchi la risposta.`},
  {chi:`Nietzsche`, op:`La gaia scienza 125`, q:`Dio è morto, e noi lo abbiamo ucciso`,
   c:`L uomo folle arriva troppo presto: l evento è accaduto ma non è ancora arrivato alle orecchie di nessuno.`}],
 vicini:[`volonta`,`genealogia`]},

'genealogia':{l:`Genealogia`, o:`γενεαλογία`, lt:`ricerca della discendenza`,
 alt:`genealogia genealogico`, area:`Nietzsche`,
 d:`Il metodo che invece di chiedere «questo valore è vero» chiede «da dove viene, chi lo ha imposto, a chi giova». Non è storia delle idee: è ricostruzione dei rapporti di forza che hanno prodotto un modo di valutare. Applicato alla morale, mostra che buono ha significato due cose opposte a seconda di chi lo diceva.`,
 luoghi:[
  {chi:`Nietzsche`, op:`Genealogia della morale, I`, q:``,
   c:`Buono nella bocca dei signori vuol dire nobile; nella bocca dei dominati vuol dire innocuo. Il secondo senso ha vinto.`}],
 vicini:[`nichilismo`,`volonta`]},

'epoche':{l:`Epochè`, o:`ἐποχή`, lt:`sospensione, arresto`,
 alt:`epoche epoché sospensione del giudizio`, area:`Trasversale`,
 d:`Sospendere il giudizio: non affermare né negare. Per gli scettici antichi è la conseguenza del trovare argomenti di uguale forza da entrambe le parti, e ne segue inaspettatamente la tranquillità. Husserl riprende la parola nel Novecento per un uso diverso: mettere fra parentesi la tesi che il mondo esista, per guardare come appare.`,
 luoghi:[
  {chi:`Sesto Empirico`, op:`Schizzi pirroniani I, 8`, q:`A ogni discorso se ne oppone uno di uguale forza`,
   c:`Lo scettico non nega la verità: dichiara di non aver trovato modo di decidere, e smette di affannarsi.`}],
 vicini:[`dubbio`,`doxa`]},

'contingenza':{l:`Contingenza`, o:`contingentia`, lt:`ciò che può accadere o non accadere`,
 alt:`contingente contingenza`, area:`Scolastica`,
 d:`La proprietà di ciò che esiste ma potrebbe non esistere: il contrario del {necessario}. Serve alla terza via di Tommaso — se tutto fosse contingente, ci sarebbe stato un momento in cui non c era nulla, e allora non ci sarebbe nulla adesso. Ockham la radicalizza: se Dio è davvero onnipotente, nessun ordine del mondo è necessario, e allora il mondo va guardato, non dedotto.`,
 luoghi:[
  {chi:`Tommaso d Aquino`, op:`Summa theologiae I, q. 2, a. 3`, q:``,
   c:`Troviamo cose che possono essere e non essere: se tutte fossero così, in qualche tempo non ci sarebbe stato nulla.`}],
 vicini:[`necessario`,`essenza`,`sostanza`]},

'necessario':{l:`Necessario`, o:`ἀναγκαῖον / necessarium`, lt:`che non può essere altrimenti`,
 alt:`necessario necessita necessità`, area:`Trasversale`,
 d:`Ciò che non può non essere, o non può essere diverso da com è. Da tenere distinto in tre sensi che si confondono di continuo: logicamente necessario (negarlo è contraddirsi), fisicamente necessario (dato come è fatto il mondo), moralmente necessario (dato ciò che si deve). Molte discussioni sul libero arbitrio nascono da questa confusione.`,
 luoghi:[
  {chi:`Aristotele`, op:`De interpretatione 9`, q:``,
   c:`La battaglia navale di domani: è necessario che avvenga o che non avvenga, ma non è necessario che avvenga, né che non avvenga.`},
  {chi:`Leibniz`, op:`Discorso di metafisica 13`, q:``,
   c:`Distingue il necessario, il cui contrario è impossibile, dal certo, il cui contrario resta pensabile: Cesare passò il Rubicone certamente, non necessariamente.`}],
 vicini:[`contingenza`,`causa`]},
'metodo':{l:`Metodo`, o:`μέθοδος`, lt:`via che si percorre per arrivare`,
 alt:`metodo metodico`, area:`Trasversale`,
 d:`La strada regolata che porta a un risultato e che, essendo regolata, si può insegnare e ripetere. È l idea che rende una ricerca controllabile da altri: senza metodo resta l intuizione, che può anche avere ragione ma non lo può dimostrare a nessuno. Ogni epoca ne ha proposto uno diverso, e la scelta del metodo decide che cosa si potrà trovare.`,
 luoghi:[
  {chi:`Platone`, op:`Fedro 265d-266b`, q:``,
   c:`Raccogliere sotto un unica idea ciò che è disperso e dividere per specie secondo le articolazioni naturali, come farebbe un buon macellaio.`},
  {chi:`Cartesio`, op:`Discorso sul metodo, 1637`, q:``,
   c:`Quattro regole sole: evidenza, analisi, sintesi, revisione. La brevità è una posizione polemica contro la logica scolastica.`}],
 vicini:[`aporia`,`ironia`,`maieutica`,`dubbio`,`dialettica`]},

'dubbio':{l:`Dubbio`, o:`dubium`, lt:`fra due`,
 alt:`dubbio dubitare dubbio metodico iperbolico`, area:`Cartesio`,
 d:`Sospendere l assenso finché non si trova una ragione per darlo. In Cartesio è metodico — si dubita apposta, non per scetticismo, per trovare ciò che resiste — e diventa iperbolico quando arriva a supporre un genio maligno che inganni su tutto. Non va confuso con l {epoche} scettica, che dal dubbio non esce e non vuole uscirne.`,
 luoghi:[
  {chi:`Cartesio`, op:`Meditazioni I-II, 1641`, q:`Sono, esisto: questo è certo, ogni volta che lo pronuncio`,
   c:`Il punto in cui il dubbio si arresta è il primo punto fermo. Il dubbio serve a trovare il fondo, non a restare a galla.`}],
 vicini:[`cogito`,`metodo`,`epoche`,`episteme`]},

'causa':{l:`Causa`, o:`αἰτία / causa`, lt:`responsabile di, imputabile`,
 alt:`causa cause causalita causalità`, area:`Aristotele · Kant`,
 d:`Ciò che rende ragione del fatto che una cosa sia così. Aristotele ne distingue quattro — materiale, formale, efficiente, finale — e la scienza moderna terrà solo la terza. Hume osserva che la connessione fra causa ed effetto non si vede mai; Kant risponde che è una {categoria}, cioè una regola con cui ordiniamo l esperienza.`,
 luoghi:[
  {chi:`Aristotele`, op:`Fisica II, 3`, q:``,
   c:`La statua: il bronzo è la causa materiale, la figura la formale, lo scultore l efficiente, il motivo per cui è stata commissionata la finale.`},
  {chi:`Hume`, op:`Ricerca sull intelletto umano, VII`, q:``,
   c:`Vediamo una palla colpirne un altra e la seconda partire: mai il legame. La necessità la mette l abitudine.`}],
 vicini:[`categoria`,`necessario`,`contingenza`,`principio`]},

'spirito':{l:`Spirito`, o:`Geist`, lt:`soffio; mente; ciò che è comune a più menti`,
 alt:`spirito geist spirito oggettivo assoluto`, area:`Hegel`,
 d:`In Hegel non è l anima individuale: è il pensiero in quanto si realizza fuori di sé, nelle istituzioni, nel diritto, nell arte, nella storia. Soggettivo quando riguarda il singolo, oggettivo quando ha preso corpo in leggi e costumi, assoluto quando si comprende come tale. La parola tedesca vuol dire insieme spirito e mente, e nessuna traduzione tiene i due sensi.`,
 luoghi:[
  {chi:`Hegel`, op:`Fenomenologia dello spirito, 1807`, q:`L io che è noi e il noi che è io`,
   c:`Lo spirito compare quando l autocoscienza scopre di esistere solo attraverso il riconoscimento di un altra.`}],
 vicini:[`aufhebung`,`alienazione`,`dialettica`,`anima`]},

'volonta':{l:`Volontà di potenza`, o:`Wille zur Macht`, lt:`volere che vuole crescere`,
 alt:`volonta volontà di potenza wille zur macht`, area:`Nietzsche`,
 d:`Non il desiderio di comandare sugli altri, ma la spinta di ogni vivente a crescere, a espandere la propria forma, a interpretare il mondo dal proprio punto di vista. Le interpretazioni non sono descrizioni neutre: sono modi in cui una forza si afferma. Da qui la {genealogia}, che chiede di ogni valore quale forza lo ha imposto.`,
 luoghi:[
  {chi:`Nietzsche`, op:`Al di là del bene e del male, 13`, q:`Un essere vivente vuole anzitutto sfogare la propria forza`,
   c:`L autoconservazione è solo una delle conseguenze, non il fine: contro Darwin, quanto meno contro il darwinismo dei suoi anni.`}],
 vicini:[`genealogia`,`nichilismo`]}

};

const STORIA={

'fonte':{l:`Fonte`, o:`fons`, lt:`sorgente`,
 alt:`fonte fonti`, area:`Mestiere dello storico`,
 d:`Tutto ciò che, essendo stato prodotto nel passato, permette di sapere qualcosa di quel passato: un documento, una lettera, un registro di tasse, un osso, una fotografia, una canzone. Si distinguono le fonti volontarie, scritte per essere lette dai posteri, dalle involontarie — un elenco di prezzi, una lista della spesa — che spesso dicono di più proprio perché non volevano dire niente.`,
 luoghi:[
  {chi:`Marc Bloch`, op:`Apologia della storia, 1949`, q:`I testi non parlano se non li si interroga`,
   c:`Prima viene la domanda, poi le carte: una fonte non risponde a chi non le chiede nulla.`},
  {chi:`Tavolette di Vindolanda`, op:`forte romano in Britannia, I secolo`, q:`Ti ho mandato paia di calzini, due paia di sandali`,
   c:`Nessuno le scrisse per la storia. Sono la migliore fonte che abbiamo sulla vita quotidiana di una guarnigione.`}],
 vicini:[`critica`,`archivio`,`periodizzazione`]},

'critica':{l:`Critica delle fonti`, o:`κρίνω`, lt:`separare, giudicare`,
 alt:`critica delle fonti autenticita`, area:`Mestiere dello storico`,
 d:`Il lavoro che precede l uso: stabilire se un documento è autentico, quando è stato scritto, da chi, per convincere chi. Una {fonte} falsa resta interessante — dice qualcosa di chi l ha falsificata e di che cosa gli conveniva far credere. La domanda non è mai solo «dice il vero», è «perché dice questo».`,
 luoghi:[
  {chi:`Lorenzo Valla`, op:`Sulla donazione di Costantino, 1440`, q:``,
   c:`Dimostra che il documento con cui il papato rivendicava il potere temporale è un falso: contiene parole latine che nel IV secolo non esistevano. È l atto di nascita della filologia storica.`}],
 vicini:[`fonte`,`archivio`,`propaganda`]},

'archivio':{l:`Archivio`, o:`ἀρχεῖον`, lt:`sede del magistrato`,
 alt:`archivio archivi`, area:`Mestiere dello storico`,
 d:`Il luogo dove i documenti sono stati conservati — e già la conservazione è una selezione. Si conserva ciò che serviva all amministrazione: tasse, processi, proprietà. Chi non aveva beni né cause quasi non lascia tracce, ed è per questo che la storia dei poveri si scrive per vie indirette.`,
 luoghi:[
  {chi:`Archivio diaristico nazionale`, op:`Pieve Santo Stefano, dal 1984`, q:``,
   c:`Raccoglie diari e lettere di persone comuni: un archivio nato apposta per correggere lo squilibrio degli altri archivi.`}],
 vicini:[`fonte`,`critica`]},

'periodizzazione':{l:`Periodizzazione`, o:`περίοδος`, lt:`giro, percorso`,
 alt:`periodizzazione periodo eta`, area:`Mestiere dello storico`,
 d:`Il taglio del tempo in epoche. Non è un fatto ma uno strumento: nessuno si è mai svegliato sapendo di essere entrato nel {medioevo}. Le date di confine sono decisioni, prese in genere molto dopo e da un punto di vista preciso — quasi sempre europeo, e questo si vede appena si prova ad applicarle alla Cina o all Africa.`,
 luoghi:[
  {chi:`Cristoforo Cellario`, op:`Historia universalis, 1685`, q:``,
   c:`Il primo a dividere la storia in antica, media e nuova. La divisione che ancora si insegna è nata come polemica umanistica contro i secoli di mezzo.`}],
 vicini:[`medioevo`,`umanesimo`,`fonte`]},

'medioevo':{l:`Medioevo`, o:`medium aevum`, lt:`età di mezzo`,
 alt:`medioevo medievale eta di mezzo`, area:`Medioevo`,
 d:`Mille anni definiti da ciò che stanno in mezzo, cioè dal disprezzo di chi ha inventato il nome. Gli umanisti volevano dire: fra l antichità e noi che la facciamo rinascere c è un buco. Chi ci viveva si considerava semplicemente moderno. È il caso più chiaro di una {periodizzazione} che porta dentro un giudizio.`,
 luoghi:[
  {chi:`Petrarca`, op:`Africa, IX`, q:``,
   c:`Parla di un tempo di tenebre che finirà, e si colloca alla vigilia della luce: la periodizzazione nasce come autoritratto.`},
  {chi:`Marc Bloch`, op:`La società feudale, 1939`, q:``,
   c:`Mostra che «medioevo» copre almeno due epoche diversissime, e che chiamarle con un nome solo impedisce di vederle.`}],
 vicini:[`periodizzazione`,`feudalesimo`,`umanesimo`]},

'feudalesimo':{l:`Feudalesimo`, o:`feudum`, lt:`bene concesso in cambio di servizio`,
 alt:`feudalesimo feudale feudo`, area:`Medioevo`,
 d:`L insieme di rapporti in cui un potente concede terra e protezione a un altro uomo libero, che in cambio gli deve fedeltà e servizio armato. Non è uno Stato: è una rete di legami personali che sostituisce lo Stato dove è crollato. Va tenuto distinto dal {manso}, che riguarda il lavoro dei contadini e non i patti fra guerrieri.`,
 luoghi:[
  {chi:`Capitolare di Quierzy`, op:`877`, q:``,
   c:`Carlo il Calvo ammette che i figli possano succedere ai padri nei benefici: il feudo comincia a diventare ereditario, cioè a sfuggire a chi lo concede.`},
  {chi:`Galbert de Bruges`, op:`cronaca, 1127`, q:`Diventerò tuo uomo`,
   c:`La descrizione più precisa di un omaggio vassallatico: le mani nelle mani, il bacio, il giuramento sui vangeli.`}],
 vicini:[`manso`,`signoria`,`medioevo`,`comune`]},

'manso':{l:`Manso e curtis`, o:`mansus, curtis`, lt:`podere; corte`,
 alt:`manso curtis curtense economia curtense`, area:`Medioevo`,
 d:`L organizzazione della grande proprietà altomedievale: una parte lavorata direttamente per il signore, l altra divisa in poderi affidati a famiglie contadine che in cambio devono giornate di lavoro e parte del raccolto. È il piano sotto il {feudalesimo}: quello riguarda i guerrieri, questo riguarda chi produce il cibo.`,
 luoghi:[
  {chi:`Polittico di Irminone`, op:`abbazia di Saint-Germain-des-Prés, IX secolo`, q:``,
   c:`Un inventario che elenca poderi, famiglie, nomi dei figli e obblighi dovuti: una delle rare fonti che permetta di contare i contadini invece di immaginarli.`}],
 vicini:[`feudalesimo`,`signoria`]},

'signoria':{l:`Signoria`, o:`senior`, lt:`il più anziano, il signore`,
 alt:`signoria signorile bannale`, area:`Medioevo`,
 d:`Il potere che un signore esercita su tutti gli abitanti di un territorio, non solo sui suoi dipendenti: giudicare, riscuotere pedaggi, obbligare a usare il suo mulino. Nasce dove l autorità pubblica si è sbriciolata, ed è il motivo per cui i {comune|comuni} nasceranno rivendicando di comprare o strappare proprio quei diritti.`,
 luoghi:[
  {chi:`Consuetudini di Lorris`, op:`1155`, q:``,
   c:`Un signore mette per iscritto quanto può esigere. Che si scriva vuol dire che qualcuno ha smesso di accettarlo come ovvio.`}],
 vicini:[`feudalesimo`,`manso`,`comune`]},

'comune':{l:`Comune`, o:`communia`, lt:`ciò che è di tutti`,
 alt:`comune comuni comunale`, area:`Medioevo`,
 d:`L associazione giurata di cittadini che si dà da sé leggi e magistrati, contro la {signoria} del vescovo o del feudatario. Nasce in Italia settentrionale dopo il Mille, dove le città non erano mai sparite del tutto. È la prima esperienza europea di potere che si giustifica col patto fra uguali invece che con l investitura dall alto.`,
 luoghi:[
  {chi:`Pace di Costanza`, op:`1183`, q:``,
   c:`L imperatore riconosce ai comuni lombardi i diritti che esercitavano di fatto. Una vittoria militare trasformata in diritto.`},
  {chi:`Otto di Frisinga`, op:`Gesta Friderici, 1157`, q:``,
   c:`Un vescovo tedesco osserva stupito che in Italia comandano gli artigiani, e lo giudica una degenerazione: la stessa cosa vista da un altro mondo.`}],
 vicini:[`signoria`,`borghesia`,`repubblica`]},

'borghesia':{l:`Borghesia`, o:`burgus`, lt:`abitante del borgo`,
 alt:`borghesia borghese borghesi`, area:`Trasversale`,
 d:`All origine è una parola giuridica: chi abita in città e ha lo statuto cittadino, contro chi sta nel contado. Diventa poi il nome di un ceto definito dal denaro e dal mestiere invece che dalla nascita, e con Marx il nome di una classe definita dal possesso dei mezzi di produzione. Tre significati che convivono ancora e che vanno tenuti separati.`,
 luoghi:[
  {chi:`Sieyès`, op:`Che cos è il terzo stato?, 1789`, q:`Che cos è il terzo stato? Tutto. Che cosa è stato finora? Niente`,
   c:`Il ceto che produce tutto e non conta nulla rivendica di essere la nazione: il testo che accende la rivoluzione.`},
  {chi:`Marx ed Engels`, op:`Manifesto, 1848`, q:`La borghesia ha avuto nella storia una parte sommamente rivoluzionaria`,
   c:`L elogio precede l attacco, e non è ironico: è la premessa dell analisi.`}],
 vicini:[`comune`,`capitalismo`,`classe`]},

'classe':{l:`Classe sociale`, o:`classis`, lt:`gruppo di cittadini secondo il censo`,
 alt:`classe classi sociale`, area:`Ottocento`,
 d:`Un insieme di persone definito dalla stessa posizione nella produzione — chi possiede i mezzi e chi vende il proprio lavoro. Si distingue dal ceto, che dipende dalla nascita e dallo statuto giuridico: si nasce nobili, si diventa proletari. La parola viene dal censimento romano, dove serviva a stabilire chi si pagava quali armi.`,
 luoghi:[
  {chi:`Marx`, op:`Il capitale, III`, q:``,
   c:`Il capitolo sulle classi si interrompe a metà pagina: Marx muore prima di definirle. Il concetto più usato del suo sistema è quello che ha lasciato aperto.`},
  {chi:`Edward P. Thompson`, op:`Rivoluzione industriale e classe operaia, 1963`, q:`La classe è una relazione, non una cosa`,
   c:`Non esiste prima delle lotte in cui si riconosce: si forma facendo, non si trova.`}],
 vicini:[`borghesia`,`capitalismo`,`socialismo`,`sindacato`]},

'capitalismo':{l:`Capitalismo`, o:`caput`, lt:`testa, capo di bestiame`,
 alt:`capitalismo capitale capitalista`, area:`Trasversale`,
 d:`Un sistema in cui i mezzi di produzione sono di proprietà privata, il lavoro si compra sul mercato e il fine dell attività economica è il reinvestimento del profitto, non il consumo. La parola nasce nell Ottocento; la cosa comincia prima, e su quando esattamente gli storici discutono da un secolo.`,
 luoghi:[
  {chi:`Max Weber`, op:`L etica protestante, 1905`, q:``,
   c:`Cerca l origine non nell avidità — che c è sempre stata — ma in una disciplina religiosa che rende il lavoro una vocazione e il consumo un peccato.`},
  {chi:`Fernand Braudel`, op:`Civiltà materiale, 1979`, q:``,
   c:`Distingue il mercato, antichissimo e trasparente, dal capitalismo, che vive dove il mercato non è libero: nei monopoli e nelle distanze.`}],
 vicini:[`borghesia`,`mercantilismo`,`rivoluzioneindustriale`,`classe`]},

'mercantilismo':{l:`Mercantilismo`, o:`mercator`, lt:`mercante`,
 alt:`mercantilismo mercantilista colbertismo`, area:`Età moderna`,
 d:`La politica economica degli Stati europei fra Cinque e Settecento: la ricchezza di un paese si misura in metallo prezioso, quindi bisogna esportare più di quanto si importi, proteggere le manifatture e tenersi le colonie come mercato riservato. È la ragione economica del {colonialismo} prima della rivoluzione industriale.`,
 luoghi:[
  {chi:`Jean-Baptiste Colbert`, op:`memoriali a Luigi XIV, 1664`, q:``,
   c:`Fonda manifatture di Stato e alza dazi: l economia diventa uno strumento della potenza, non un ordine naturale.`},
  {chi:`Adam Smith`, op:`La ricchezza delle nazioni, 1776`, q:``,
   c:`Attacca l intero sistema: la ricchezza non è l oro, è ciò che una nazione produce. Il libro è scritto contro il mercantilismo, non a favore del mercato in astratto.`}],
 vicini:[`capitalismo`,`colonialismo`,`assolutismo`]},

'statomoderno':{l:`Stato moderno`, o:`status`, lt:`condizione, assetto stabile`,
 alt:`stato moderno statale burocrazia`, area:`Età moderna`,
 d:`La forma di potere che fra Quattro e Settecento accentra ciò che il {feudalesimo} aveva disperso: un esercito permanente, un fisco stabile, una burocrazia stipendiata, un diritto valido su tutto il territorio. Non nasce da un progetto: nasce dal bisogno di pagare guerre sempre più care, e la macchina fiscale precede quasi sempre quella amministrativa.`,
 luoghi:[
  {chi:`Machiavelli`, op:`Il Principe, 1513`, q:`Tutti gli stati sono o repubbliche o principati`,
   c:`Una delle prime volte in cui la parola stato indica l organizzazione politica in sé, non la condizione di qualcuno.`},
  {chi:`Max Weber`, op:`La politica come professione, 1919`, q:`Il monopolio della violenza legittima su un territorio`,
   c:`La definizione che si usa ancora: descrive come si riconosce uno Stato, non se sia giusto.`}],
 vicini:[`sovranita`,`assolutismo`,`nazione`,`feudalesimo`]},

'sovranita':{l:`Sovranità`, o:`superanus`, lt:`che sta al di sopra`,
 alt:`sovranita sovrano sovrana`, area:`Età moderna`,
 d:`Il potere che non riconosce nessun potere superiore né uguale sul proprio territorio. Bodin la definisce come perpetua e assoluta; la pace di Vestfalia del 1648 la trasforma in regola dei rapporti fra Stati, chiudendo un secolo di guerre di religione. Da lì nasce anche il principio di non ingerenza, che protegge i popoli e insieme i loro governi.`,
 luoghi:[
  {chi:`Jean Bodin`, op:`I sei libri della repubblica, 1576`, q:`La sovranità è il potere assoluto e perpetuo di una repubblica`,
   c:`Scritto durante le guerre di religione francesi: un potere indiscutibile appare come l unica alternativa al massacro reciproco.`},
  {chi:`Trattati di Vestfalia`, op:`1648`, q:``,
   c:`Ogni principe decide la religione del suo territorio e nessuno interviene: la convivenza si compra rinunciando a convertire il vicino.`}],
 vicini:[`statomoderno`,`assolutismo`,`nazione`]},

'assolutismo':{l:`Assolutismo`, o:`absolutus`, lt:`sciolto da vincoli`,
 alt:`assolutismo assoluto assolutista`, area:`Età moderna`,
 d:`Il regime in cui il sovrano è sciolto dall obbligo di rispettare le leggi che emana — legibus solutus. Non vuol dire potere illimitato: restava vincolato alle leggi fondamentali del regno, alla religione, ai privilegi dei corpi. Gli storici oggi discutono se sia mai esistito come lo descrivono i manuali, o se sia soprattutto un programma dichiarato.`,
 luoghi:[
  {chi:`Bossuet`, op:`Politica tratta dalle Sacre Scritture, 1709`, q:``,
   c:`Il potere del re viene da Dio e non risponde agli uomini: la teoria del diritto divino nella sua forma più esplicita.`},
  {chi:`Luigi XIV`, op:`Memorie per il Delfino`, q:``,
   c:`La celebre frase «lo Stato sono io» non è documentata. È vera la sostanza e falsa la citazione: un ottimo esercizio di {critica}.`}],
 vicini:[`sovranita`,`statomoderno`,`rivoluzione`,`illuminismo`]},

'umanesimo':{l:`Umanesimo`, o:`studia humanitatis`, lt:`studi dell uomo`,
 alt:`umanesimo umanista rinascimento`, area:`Età moderna`,
 d:`Il movimento che fra Tre e Cinquecento rimette al centro dello studio i testi antichi letti negli originali, e con essi la grammatica, la retorica, la storia, la poesia, la filosofia morale. Non è un ritorno al passato: è un modo nuovo di leggerlo, che inventa la filologia e con essa la {critica} dei documenti.`,
 luoghi:[
  {chi:`Poggio Bracciolini`, op:`1417`, q:``,
   c:`Ritrova in un monastero tedesco il poema di Lucrezio, perduto da un millennio: un caso in cui un ritrovamento d archivio cambia la storia delle idee.`},
  {chi:`Pico della Mirandola`, op:`Discorso sulla dignità dell uomo, 1486`, q:`Non ti ho dato né volto né posto: te li darai tu`,
   c:`Il testo più citato del Rinascimento italiano, e un manifesto dell idea che l uomo non abbia una natura fissa.`}],
 vicini:[`periodizzazione`,`medioevo`,`riforma`,`critica`]},

'riforma':{l:`Riforma protestante`, o:`reformatio`, lt:`rimettere in forma`,
 alt:`riforma protestante luterana calvinista`, area:`Età moderna`,
 d:`La rottura dell unità religiosa dell Occidente latino, avviata nel 1517 dalle tesi di Lutero contro le indulgenze. Non sarebbe andata così lontano senza la stampa: in due settimane le tesi erano in tutta la Germania. E senza i principi tedeschi, che vi trovarono l argomento per sottrarsi all imperatore e incamerare i beni della Chiesa.`,
 luoghi:[
  {chi:`Martin Lutero`, op:`95 tesi, 1517`, q:``,
   c:`Scritte in latino per una disputa accademica. Qualcun altro le tradusse in tedesco e le stampò: l autore non aveva previsto il proprio successo.`},
  {chi:`Pace di Augusta`, op:`1555`, q:`Cuius regio, eius religio`,
   c:`La religione del principe è quella dei sudditi. La tolleranza comincia come accordo fra sovrani, non come diritto delle persone.`}],
 vicini:[`umanesimo`,`controriforma`,`sovranita`,`propaganda`]},

'controriforma':{l:`Controriforma`, o:``, lt:`reazione alla Riforma`,
 alt:`controriforma riforma cattolica trento`, area:`Età moderna`,
 d:`Il riassetto della Chiesa cattolica fra il concilio di Trento e il Seicento: definizione dei dogmi contestati, seminari per formare il clero, indice dei libri proibiti, inquisizione romana. Il nome stesso è discusso — chi parla di riforma cattolica sostiene che il movimento era cominciato prima di Lutero, e non solo contro di lui.`,
 luoghi:[
  {chi:`Concilio di Trento`, op:`1545-1563`, q:``,
   c:`Diciotto anni e tre fasi. Chiude ogni possibilità di riconciliazione e insieme corregge molti abusi che i protestanti denunciavano.`},
  {chi:`Indice dei libri proibiti`, op:`dal 1559`, q:``,
   c:`Vi finiranno Machiavelli, Erasmo, Galileo e Cartesio. Sarà abolito solo nel 1966.`}],
 vicini:[`riforma`,`propaganda`,`umanesimo`]},

'colonialismo':{l:`Colonialismo`, o:`colonia`, lt:`insediamento di coloni`,
 alt:`colonialismo coloniale colonie`, area:`Trasversale`,
 d:`Il dominio stabile di uno Stato su territori esterni ai propri confini, con insediamento, amministrazione e sfruttamento delle risorse. Va distinto dall {imperialismo}, che può fare a meno dell insediamento e agire per controllo economico e militare. Il colonialismo europeo moderno comincia nel 1492 e finisce, in larga parte, fra il 1945 e il 1975.`,
 luoghi:[
  {chi:`Bartolomé de las Casas`, op:`Brevísima relación, 1552`, q:``,
   c:`La denuncia arriva dall interno del sistema, da un ex proprietario di schiavi. Sarà usata anche dai nemici della Spagna: una fonte vera può servire a fini che non sono i suoi.`},
  {chi:`Conferenza di Berlino`, op:`1884-85`, q:``,
   c:`Quattordici Stati si spartiscono l Africa senza che vi partecipi un solo africano. I confini tracciati allora sono quasi tutti ancora lì.`}],
 vicini:[`imperialismo`,`mercantilismo`,`decolonizzazione`,`tratta`]},

'tratta':{l:`Tratta atlantica`, o:``, lt:`commercio di persone deportate`,
 alt:`tratta schiavi schiavitu commercio triangolare`, area:`Età moderna`,
 d:`La deportazione forzata di circa dodici milioni di africani verso le Americhe fra Cinquecento e Ottocento, di cui quasi due milioni morti durante la traversata. Non è un episodio del {colonialismo}: ne è il motore economico, perché le piantagioni di zucchero, cotone e tabacco reggevano su quel lavoro.`,
 luoghi:[
  {chi:`Olaudah Equiano`, op:`The Interesting Narrative, 1789`, q:`Ricevetti nelle narici un tale odore come non ne avevo mai sentito`,
   c:`Una delle rarissime testimonianze scritte da chi stava nella stiva, pubblicata perché serviva alla campagna abolizionista.`},
  {chi:`Slave Voyages`, op:`banca dati, dal 1999`, q:``,
   c:`Trentaseimila viaggi ricostruiti dai registri delle compagnie. La contabilità dei negrieri è diventata la fonte principale per contare le vittime.`}],
 vicini:[`colonialismo`,`capitalismo`,`imperialismo`]},

'rivoluzione':{l:`Rivoluzione`, o:`revolutio`, lt:`giro, ritorno al punto di partenza`,
 alt:`rivoluzione rivoluzionario`, area:`Trasversale`,
 d:`La parola nasce in astronomia e significa il ritorno di un astro al punto di partenza: in origine indicava un ripristino, non una novità. Solo dopo il 1789 assume il senso di rottura che apre qualcosa di mai visto. Chi la usa per il passato — rivoluzione industriale, rivoluzione scientifica — la applica a processi lunghi che nessun contemporaneo visse come un evento.`,
 luoghi:[
  {chi:`Luigi XVI e La Rochefoucauld`, op:`14 luglio 1789`, q:`È una rivolta? — No, sire, è una rivoluzione`,
   c:`Aneddoto probabilmente costruito dopo, ma resta il documento perfetto del momento in cui la parola cambia senso.`},
  {chi:`Hannah Arendt`, op:`Sulla rivoluzione, 1963`, q:``,
   c:`Distingue la rivoluzione americana, che voleva fondare la libertà, da quella francese, travolta dalla questione sociale.`}],
 vicini:[`assolutismo`,`costituzione`,`restaurazione`,`rivoluzioneindustriale`]},

'rivoluzioneindustriale':{l:`Rivoluzione industriale`, o:``, lt:``,
 alt:`rivoluzione industriale industrializzazione fabbrica`, area:`Ottocento`,
 d:`Il passaggio, cominciato in Inghilterra intorno al 1760, da un economia agricola e artigiana a una fondata su macchine, energia fossile e fabbrica. Cambia più della tecnica: cambia il tempo — l orologio della fabbrica sostituisce le stagioni — e crea insieme la {classe} operaia e la città industriale.`,
 luoghi:[
  {chi:`Friedrich Engels`, op:`La situazione della classe operaia in Inghilterra, 1845`, q:``,
   c:`Un giovane figlio di industriali descrive Manchester quartiere per quartiere. La fonte più usata sulle condizioni operaie è scritta da chi viveva del loro lavoro.`},
  {chi:`Inchieste parlamentari inglesi`, op:`dal 1832`, q:``,
   c:`Bambini di otto anni interrogati sotto giuramento sugli orari in filanda. Lo Stato produce, per legiferare, la prova di ciò che permetteva.`}],
 vicini:[`capitalismo`,`classe`,`sindacato`,`imperialismo`]},

'sindacato':{l:`Sindacato`, o:`syndicus`, lt:`chi rappresenta un gruppo`,
 alt:`sindacato sindacale trade union`, area:`Ottocento`,
 d:`L associazione di lavoratori che contratta collettivamente le condizioni di lavoro. Nasce illegale quasi ovunque — in Francia la legge Le Chapelier del 1791 vietava le coalizioni in nome della libertà individuale — e conquista il riconoscimento nell arco di un secolo, insieme allo {sciopero}.`,
 luoghi:[
  {chi:`Combination Acts`, op:`Inghilterra, 1799-1800`, q:``,
   c:`Vietano le associazioni operaie. Verranno abrogati nel 1824, dopo che si erano dimostrati inapplicabili.`}],
 vicini:[`sciopero`,`classe`,`socialismo`,`rivoluzioneindustriale`]},

'sciopero':{l:`Sciopero`, o:`ex operari`, lt:`smettere di lavorare`,
 alt:`sciopero scioperi`, area:`Ottocento`,
 d:`L astensione collettiva dal lavoro come strumento di pressione. Per un secolo è stato un reato, poi una libertà tollerata, infine in molti paesi un diritto costituzionale: la stessa azione, tre statuti giuridici in tre generazioni. In Italia l articolo 40 della Costituzione lo riconosce nel 1948.`,
 luoghi:[
  {chi:`Costituzione italiana`, op:`art. 40, 1948`, q:`Il diritto di sciopero si esercita nell ambito delle leggi che lo regolano`,
   c:`Una riga che chiude un secolo di processi. La legge attuativa arriverà solo nel 1990.`}],
 vicini:[`sindacato`,`classe`,`suffragio`]},

'liberalismo':{l:`Liberalismo`, o:`liber`, lt:`libero`,
 alt:`liberalismo liberale liberali`, area:`Ottocento`,
 d:`La dottrina politica che pone al centro i diritti individuali, i limiti al potere e la separazione dei poteri. Nell Ottocento è quasi sempre censitario: chiede libertà e {costituzione}, non {suffragio} universale, perché il voto lo riserva a chi ha proprietà. Da non confondere col liberismo, che riguarda l economia.`,
 luoghi:[
  {chi:`Benjamin Constant`, op:`La libertà degli antichi e dei moderni, 1819`, q:``,
   c:`Gli antichi erano liberi nel partecipare, i moderni nel non essere disturbati. Chi confonde le due libertà, avverte, finisce nel Terrore.`},
  {chi:`Statuto Albertino`, op:`1848`, q:``,
   c:`Concesso dal re, non votato: una costituzione ottriata. Nel 1861 votava circa il due per cento degli italiani.`}],
 vicini:[`costituzione`,`suffragio`,`socialismo`,`nazione`]},

'socialismo':{l:`Socialismo`, o:`socius`, lt:`compagno, socio`,
 alt:`socialismo socialista socialisti`, area:`Ottocento`,
 d:`L insieme delle dottrine che subordinano la proprietà privata dei mezzi di produzione all interesse collettivo. Prima del 1848 è soprattutto progettuale — comunità modello, cooperative; dopo, con Marx, si vuole scientifico e punta sul conflitto di {classe}. Dalla fine dell Ottocento si divide fra chi vuole la rivoluzione e chi le riforme.`,
 luoghi:[
  {chi:`Robert Owen`, op:`New Lanark, dal 1800`, q:``,
   c:`Un industriale riduce l orario, vieta il lavoro sotto i dieci anni e apre una scuola: l esperimento riesce e non viene imitato.`},
  {chi:`Eduard Bernstein`, op:`I presupposti del socialismo, 1899`, q:`Il movimento è tutto, il fine ultimo non è nulla`,
   c:`La frase che apre la scissione fra riformisti e rivoluzionari, e che i secondi useranno come capo d accusa.`}],
 vicini:[`classe`,`sindacato`,`liberalismo`,`totalitarismo`]},

'nazione':{l:`Nazione`, o:`natio`, lt:`nascita, stirpe`,
 alt:`nazione nazionale nazionalita`, area:`Ottocento`,
 d:`Una comunità che si pensa unita da lingua, storia e destino, e che rivendica per questo uno Stato proprio. Gli storici oggi la considerano una costruzione recente: le scuole, la leva e i giornali hanno fabbricato i francesi e gli italiani più di quanto li abbiano trovati. Non toglie nulla alla forza del sentimento — spiega da dove viene.`,
 luoghi:[
  {chi:`Ernest Renan`, op:`Che cos è una nazione?, 1882`, q:`L oblio, e direi anche l errore storico, sono un fattore essenziale`,
   c:`Ogni nazione deve dimenticare le violenze da cui è nata. La definizione più onesta mai data.`},
  {chi:`Massimo d Azeglio`, op:`attribuito, 1861`, q:`Fatta l Italia, bisogna fare gli italiani`,
   c:`Nel 1861 parlava italiano forse un decimo degli abitanti del regno. La nazione è un programma, non un punto di partenza.`}],
 vicini:[`nazionalismo`,`risorgimento`,`statomoderno`,`sovranita`]},

'risorgimento':{l:`Risorgimento`, o:``, lt:`il tornare a sorgere`,
 alt:`risorgimento risorgimentale unita d italia`, area:`Ottocento`,
 d:`Il processo che fra il 1815 e il 1870 porta all unificazione italiana. Il nome stesso è un programma: suggerisce che l Italia esistesse già e stia solo risorgendo. Fu opera di minoranze — moderati, democratici, l esercito piemontese, la diplomazia — e il consenso popolare arrivò dopo, quando arrivò.`,
 luoghi:[
  {chi:`Plebisciti del 1860`, op:`Sud e Sicilia`, q:``,
   c:`Votazioni a voce alta, con schede sì e no di colore diverso: il risultato quasi unanime non misura il consenso, misura le condizioni del voto.`},
  {chi:`Brigantaggio`, op:`1861-1865`, q:``,
   c:`La repressione nel Mezzogiorno impegna più soldati di tutte le guerre d indipendenza. Per decenni fu raccontata come questione di ordine pubblico.`}],
 vicini:[`nazione`,`liberalismo`,`restaurazione`]},

'restaurazione':{l:`Restaurazione`, o:`restaurare`, lt:`rimettere in piedi`,
 alt:`restaurazione congresso di vienna legittimismo`, area:`Ottocento`,
 d:`Il tentativo, dopo il 1815, di riportare l Europa alla situazione anteriore alla Rivoluzione: sovrani legittimi, equilibrio fra potenze, repressione dei moti. Riuscì nelle forme e fallì nella sostanza — nessun congresso poteva cancellare il codice civile, la leva di massa e l idea che il potere debba giustificarsi.`,
 luoghi:[
  {chi:`Congresso di Vienna`, op:`1814-1815`, q:``,
   c:`Ridisegna la carta d Europa senza consultare nessun popolo. Il principio di legittimità è esplicitamente contrapposto a quello di nazionalità.`}],
 vicini:[`rivoluzione`,`nazione`,`risorgimento`]},

'imperialismo':{l:`Imperialismo`, o:`imperium`, lt:`comando`,
 alt:`imperialismo imperialista`, area:`Novecento`,
 d:`La fase, fra il 1870 e il 1914, in cui le potenze industriali si spartiscono quasi tutto il pianeta cercando mercati, materie prime e prestigio. Si distingue dal {colonialismo} per l intensità e per le giustificazioni: qui la conquista viene presentata come missione civilizzatrice, e la scienza dell epoca fornisce la teoria delle razze che serve.`,
 luoghi:[
  {chi:`Rudyard Kipling`, op:`Il fardello dell uomo bianco, 1899`, q:``,
   c:`Scritto per invitare gli Stati Uniti a tenersi le Filippine. La dominazione si racconta come sacrificio.`},
  {chi:`John A. Hobson`, op:`Imperialism, 1902`, q:``,
   c:`Un economista liberale sostiene che l impero non conviene alla nazione ma a pochi gruppi finanziari. Lenin ne riprenderà l analisi.`}],
 vicini:[`colonialismo`,`nazionalismo`,`decolonizzazione`,`rivoluzioneindustriale`]},

'nazionalismo':{l:`Nazionalismo`, o:``, lt:``,
 alt:`nazionalismo nazionalista`, area:`Novecento`,
 d:`La dottrina che fa della propria {nazione} il valore supremo e la misura di ogni altra cosa. Da tenere distinto dal principio di nazionalità ottocentesco, che rivendicava per ogni popolo uno Stato: quello chiedeva un diritto per tutti, questo afferma un primato del proprio. Il passaggio avviene fra la fine dell Ottocento e il 1914.`,
 luoghi:[
  {chi:`Agosto 1914`, op:``, q:``,
   c:`I partiti socialisti europei, che avevano promesso lo sciopero generale contro la guerra, votano quasi ovunque i crediti militari. La nazione batte la classe.`}],
 vicini:[`nazione`,`imperialismo`,`totalitarismo`,`propaganda`]},

'suffragio':{l:`Suffragio`, o:`suffragium`, lt:`voto, appoggio`,
 alt:`suffragio voto universale censitario`, area:`Novecento`,
 d:`Il diritto di voto. Censitario quando dipende dal reddito o dalla proprietà, universale quando spetta a tutti gli adulti. La parola universale è stata usata a lungo per sistemi che escludevano metà della popolazione: in Italia il voto è universale maschile dal 1912 e femminile dal 1946.`,
 luoghi:[
  {chi:`Referendum e Costituente`, op:`2 giugno 1946`, q:``,
   c:`Prima volta in cui le italiane votano. Affluenza dell ottantanove per cento: la partecipazione più alta della storia repubblicana.`},
  {chi:`Emmeline Pankhurst`, op:`Gran Bretagna, dal 1903`, q:``,
   c:`Le suffragette passano dalle petizioni all azione diretta e allo sciopero della fame. Il voto pieno arriverà nel 1928.`}],
 vicini:[`democrazia`,`liberalismo`,`costituzione`]},

'democrazia':{l:`Democrazia`, o:`δημοκρατία`, lt:`potere del popolo`,
 alt:`democrazia democratico`, area:`Trasversale`,
 d:`Un regime in cui il potere appartiene ai cittadini. La democrazia ateniese era diretta, sorteggiava molte cariche ed escludeva donne, schiavi e stranieri; quella moderna è rappresentativa, elettiva e universale. Chiamarle con lo stesso nome è comodo e rischioso: condividono il principio e quasi nessun meccanismo.`,
 luoghi:[
  {chi:`Tucidide`, op:`epitaffio di Pericle, II, 37`, q:`Il nostro governo si chiama democrazia perché è in mano ai molti e non ai pochi`,
   c:`Un discorso ricostruito dallo storico. La più celebre lode della democrazia è, tecnicamente, una fonte indiretta.`},
  {chi:`Tocqueville`, op:`La democrazia in America, 1835`, q:``,
   c:`Il rischio non è il despota ma la maggioranza: quando l opinione comune pesa tanto, la censura diventa superflua.`}],
 vicini:[`suffragio`,`costituzione`,`repubblica`,`totalitarismo`]},

'repubblica':{l:`Repubblica`, o:`res publica`, lt:`cosa di tutti`,
 alt:`repubblica repubblicano`, area:`Trasversale`,
 d:`Forma di Stato in cui la carica più alta è elettiva e temporanea, non ereditaria. Per secoli non ha significato {democrazia}: la repubblica di Venezia era oligarchica, e i padri fondatori americani usavano repubblica proprio per distinguersi dal governo diretto del popolo, che temevano.`,
 luoghi:[
  {chi:`Cicerone`, op:`De re publica I, 25`, q:`La repubblica è cosa del popolo`,
   c:`Ma popolo non è un raduno qualsiasi: è un unione tenuta dal consenso sul diritto e dall interesse comune.`},
  {chi:`Referendum istituzionale`, op:`Italia, 2 giugno 1946`, q:``,
   c:`Dodici milioni e mezzo di voti contro dieci e settecentomila. La monarchia perde di poco, e il paese si divide anche geograficamente.`}],
 vicini:[`democrazia`,`costituzione`,`comune`]},

'costituzione':{l:`Costituzione`, o:`constituere`, lt:`stabilire, fondare`,
 alt:`costituzione costituzionale carta`, area:`Novecento`,
 d:`La legge fondamentale che stabilisce come si esercita il potere e quali diritti nessuna maggioranza può togliere. Flessibile se una legge ordinaria la può cambiare, rigida se serve una procedura aggravata: lo Statuto Albertino era flessibile, e questo rese giuridicamente possibile il fascismo senza mai violarlo formalmente.`,
 luoghi:[
  {chi:`Costituzione italiana`, op:`art. 1, 1948`, q:`L Italia è una Repubblica democratica, fondata sul lavoro`,
   c:`La formula fu un compromesso fra tre culture politiche. Ogni parola della prima riga è il risultato di una trattativa.`},
  {chi:`Dichiarazione dei diritti dell uomo`, op:`1789, art. 16`, q:`Una società in cui i poteri non sono separati non ha costituzione`,
   c:`Non basta avere un testo: se manca la separazione dei poteri, quel testo non è una costituzione.`}],
 vicini:[`democrazia`,`repubblica`,`totalitarismo`,`liberalismo`]},

'totalitarismo':{l:`Totalitarismo`, o:`totalitario`, lt:`che investe la totalità`,
 alt:`totalitarismo totalitario`, area:`Novecento`,
 d:`Un regime che non si accontenta dell obbedienza ma pretende l adesione, occupa ogni spazio della vita associata, si regge su un partito unico, un ideologia, il terrore e la {propaganda}. La parola nasce in Italia come accusa degli antifascisti e viene poi rivendicata da Mussolini: un insulto trasformato in bandiera.`,
 luoghi:[
  {chi:`Giovanni Amendola`, op:`1923`, q:``,
   c:`Usa per primo l aggettivo totalitario per descrivere il fascismo. Morirà nel 1926 per le conseguenze di un aggressione squadrista.`},
  {chi:`Hannah Arendt`, op:`Le origini del totalitarismo, 1951`, q:``,
   c:`Sostiene che non è una tirannide più grande ma un tipo nuovo: il suo scopo non è il potere, è la trasformazione della natura umana.`}],
 vicini:[`propaganda`,`nazionalismo`,`genocidio`,`costituzione`]},

'propaganda':{l:`Propaganda`, o:`propaganda fide`, lt:`cose da propagare`,
 alt:`propaganda propagandistico`, area:`Novecento`,
 d:`La diffusione organizzata di messaggi per orientare opinioni e comportamenti. La parola viene dalla congregazione vaticana per la diffusione della fede, fondata nel 1622, e per tre secoli non ha avuto senso negativo. Lo prende nel Novecento, quando radio, cinema e stampa di massa la rendono capillare.`,
 luoghi:[
  {chi:`Istituto Luce`, op:`Italia, dal 1924`, q:``,
   c:`Cinegiornali proiettati obbligatoriamente prima di ogni film. Oggi sono la principale fonte per immagini di quel ventennio: la fonte è il messaggio del regime su se stesso.`},
  {chi:`Edward Bernays`, op:`Propaganda, 1928`, q:``,
   c:`Nipote di Freud, applica la psicologia alla pubblicità e alla politica, e ne scrive senza imbarazzo: il libro spiega come si fabbrica il consenso.`}],
 vicini:[`totalitarismo`,`critica`,`nazionalismo`]},

'genocidio':{l:`Genocidio`, o:`γένος + caedere`, lt:`uccisione di una stirpe`,
 alt:`genocidio genocidi shoah`, area:`Novecento`,
 d:`La distruzione intenzionale, totale o parziale, di un gruppo nazionale, etnico, razziale o religioso in quanto tale. Il termine è coniato nel 1944 dal giurista Raphael Lemkin, che aveva perso quasi tutta la famiglia nella Shoah: prima di allora il crimine non aveva nome, e senza nome non era perseguibile.`,
 luoghi:[
  {chi:`Raphael Lemkin`, op:`Axis Rule in Occupied Europe, 1944`, q:``,
   c:`Costruisce la parola unendo greco e latino. Nel 1948 le Nazioni Unite adottano la Convenzione che la rende un crimine internazionale.`},
  {chi:`Processo di Norimberga`, op:`1945-46`, q:``,
   c:`Per la prima volta si giudicano capi di Stato per crimini contro l umanità. L obiezione — che è giustizia dei vincitori — accompagna il diritto internazionale da allora.`}],
 vicini:[`totalitarismo`,`fonte`,`costituzione`]},

'guerrafredda':{l:`Guerra fredda`, o:``, lt:``,
 alt:`guerra fredda bipolarismo cortina di ferro`, area:`Novecento`,
 d:`Il confronto fra Stati Uniti e Unione Sovietica dal 1947 al 1991: mai una guerra diretta fra i due, ma una tensione permanente combattuta per procura in Corea, Vietnam, Afghanistan e altrove. La deterrenza nucleare rende la guerra totale impossibile e la guerra periferica continua.`,
 luoghi:[
  {chi:`Winston Churchill`, op:`Fulton, 1946`, q:`Una cortina di ferro è scesa attraverso il continente`,
   c:`L espressione fissa l immagine di un Europa divisa in due prima ancora che la divisione sia completata.`},
  {chi:`Crisi di Cuba`, op:`ottobre 1962`, q:``,
   c:`Tredici giorni in cui il mondo sfiora la guerra nucleare. Dopo, si installa una linea telefonica diretta fra Washington e Mosca.`}],
 vicini:[`decolonizzazione`,`totalitarismo`,`globalizzazione`]},

'decolonizzazione':{l:`Decolonizzazione`, o:``, lt:``,
 alt:`decolonizzazione indipendenza terzo mondo`, area:`Novecento`,
 d:`Il processo con cui, fra il 1945 e il 1975, quasi tutte le colonie diventano Stati indipendenti. Avviene per vie diversissime — trattativa in India, guerra lunga in Algeria e Vietnam — e lascia quasi ovunque i confini tracciati dai colonizzatori, che oggi sono confini nazionali.`,
 luoghi:[
  {chi:`Conferenza di Bandung`, op:`1955`, q:``,
   c:`Ventinove paesi africani e asiatici si incontrano senza europei né americani. Nasce l idea di un terzo campo fra i due blocchi.`},
  {chi:`Frantz Fanon`, op:`I dannati della terra, 1961`, q:``,
   c:`Psichiatra martinicano in Algeria, analizza gli effetti psichici della dominazione: la decolonizzazione, sostiene, riguarda anche le teste.`}],
 vicini:[`colonialismo`,`imperialismo`,`guerrafredda`,`globalizzazione`]},

'globalizzazione':{l:`Globalizzazione`, o:``, lt:``,
 alt:`globalizzazione globale mondializzazione`, area:`Novecento`,
 d:`L intensificazione degli scambi di merci, capitali, persone e informazioni su scala mondiale. Il termine si diffonde dagli anni Ottanta, ma gli storici discutono se il fenomeno cominci allora, nel 1870 con i piroscafi e il telegrafo, o addirittura nel 1492: dipende da che cosa si sceglie di misurare.`,
 luoghi:[
  {chi:`Scambio colombiano`, op:`dal 1492`, q:``,
   c:`Mais, patate e pomodori vanno in Europa; vaiolo e morbillo nelle Americhe. La cucina italiana senza pomodoro esiste fino a poco prima.`},
  {chi:`Container`, op:`dal 1956`, q:``,
   c:`La scatola metallica standardizzata abbatte il costo del trasporto marittimo di oltre il novanta per cento. Poche invenzioni hanno cambiato tanto e si vedono così poco.`}],
 vicini:[`capitalismo`,`decolonizzazione`,`guerrafredda`]},

'illuminismo':{l:`Illuminismo`, o:`Aufklärung, Lumières`, lt:`rischiaramento`,
 alt:`illuminismo illuminista lumi`, area:`Età moderna`,
 d:`Il movimento settecentesco che pone la ragione critica come giudice di ogni autorità: tradizione, religione, potere. Non è un sistema filosofico ma un atteggiamento, e il suo strumento tipico è l enciclopedia — sapere ordinato, laico e accessibile. Prepara le riforme dei sovrani e insieme la {rivoluzione} che li travolgerà.`,
 luoghi:[
  {chi:`Kant`, op:`Risposta alla domanda: che cos è l illuminismo?, 1784`, q:`Sapere aude! Abbi il coraggio di servirti della tua propria intelligenza`,
   c:`La minorità di cui parla non è mancanza di intelletto ma di coraggio: è colpevole, e per questo si può uscirne.`},
  {chi:`Cesare Beccaria`, op:`Dei delitti e delle pene, 1764`, q:``,
   c:`Contro tortura e pena di morte, con argomenti di utilità e non di pietà. In vent anni cambia il diritto penale di mezza Europa.`}],
 vicini:[`rivoluzione`,`liberalismo`,`assolutismo`,`umanesimo`]}
};

/* L ordine in cui compaiono i gruppi nell indice. Chi non è in
   elenco finisce in fondo, invece di sparire. */
const GLOSSARI={
 filosofia:{nome:`Filosofia`, T:FILOSOFIA, ordine:[
   `Presocratici`,`Presocratici · Stoicismo`,`Presocratici · Sofisti`,`Parmenide · Platone`,
   `Socrate`,`Socrate · Aristotele`,`Platone`,`Platone · Aristotele`,`Platone · Aristotele · Hegel`,
   `Aristotele`,`Aristotele · Cartesio · Spinoza`,`Aristotele · Scolastica`,`Aristotele · Kant`,
   `Platone · Aristotele · Cartesio`,`Aristotele · Hegel · Marx`,`Scolastica`,`Cartesio`,`Kant`,
   `Hegel`,`Hegel · Marx`,`Nietzsche`,`Trasversale`]},
 storia:{nome:`Storia`, T:STORIA, ordine:[
   `Mestiere dello storico`,`Medioevo`,`Età moderna`,`Ottocento`,`Novecento`,`Trasversale`]}
};
