/* ══════════════════════════════════════════════════════════
   SECONDA BANCA DI DOMANDE — Idearca

   La prima banca (banca.js) è ricavata dagli Approfondimenti
   pubblicati sul sito. Questa è ricavata dalle SLIDE: sono state
   scaricate dal Drive, rese immagini — non hanno strato di testo,
   quindi l'unico modo di leggerle è guardarle — e le domande
   nascono da quello che c'è scritto sopra, schema per schema.

   A che cosa serve averne due. Dopo una votazione in aula le
   domande sono bruciate: la classe le ha viste e le ricorda.
   Con due banche si può rifare lo stesso capitolo qualche
   settimana dopo senza che sia un esercizio di memoria.

   Le due regole della prima banca valgono anche qui:
   • le opzioni hanno lunghezza confrontabile, o la più lunga si
     riconosce a occhio senza sapere nulla;
   • l'ordine viene mescolato al caricamento, quindi la posizione
     non dice niente.

   Il campo `giusta` è l'indice in questo file.
   ══════════════════════════════════════════════════════════ */

const BANCA2 = [
{
  titolo: 'Filosofia antica · 1 — Dagli Ionici agli atomisti',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: perché secondo te la filosofia nasce in una colonia e non nella madrepatria greca?'},

    {tipo:'scelta', testo:'Perché la filosofia nasce a Mileto e non ad Atene o a Sparta?',
     opzioni:['Nelle colonie ioniche il commercio e il confronto con altre civiltà avevano indebolito le certezze del mito',
              'Ad Atene la religione tradizionale vietava per legge ogni discussione sugli dèi',
              'A Mileto era stata fondata la prima scuola pubblica finanziata dalla città',
              'Le città della madrepatria non conoscevano ancora la scrittura alfabetica'], giusta:0},

    {tipo:'scelta', testo:'Su quale osservazione Talete fonda la scelta dell\'acqua come principio?',
     opzioni:['Il seme e il nutrimento di ogni essere vivente hanno natura umida',
              'L\'acqua è l\'unico elemento che si trova in tutti e tre gli stati',
              'Il mare circonda ogni terra emersa conosciuta dai greci',
              'L\'acqua non può essere generata né distrutta da nessuna forza'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rende la spiegazione di Talete diversa da un racconto mitico?',
     opzioni:['Spiega il mondo con l\'osservazione della natura, senza ricorrere a divinità',
              'Attribuisce l\'origine del mondo a un dio unico invece che a molti',
              'Racconta l\'origine del mondo in forma di poema anziché di preghiera',
              'Descrive fatti verificabili invece di episodi accaduti una sola volta'], giusta:0},

    {tipo:'scelta', testo:'A quale processo Anassimene affida il passaggio da un elemento all\'altro?',
     opzioni:['Rarefazione e condensazione dell\'aria',
              'Attrazione e repulsione fra particelle cariche',
              'Separazione progressiva dall\'indeterminato originario',
              'Alternanza di aggregazione e dissoluzione per opera dell\'amore'], giusta:0},

    {tipo:'scelta', testo:'Perché Anassimandro rifiuta di indicare come principio un elemento determinato?',
     opzioni:['Un elemento determinato prevarrebbe sugli altri e li distruggerebbe',
              'Nessun elemento determinato può essere osservato allo stato puro',
              'Gli elementi determinati sono quattro e nessuno ha la precedenza',
              'Un elemento determinato sarebbe divisibile e quindi non originario'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma Democrito distinguendo ciò che è «per convenzione» da ciò che è «per verità»?',
     opzioni:['Dolce, amaro e colori dipendono da noi; nella realtà ci sono solo atomi e vuoto',
              'Le leggi delle città sono convenzionali mentre quelle della natura sono eterne',
              'I nomi delle cose sono arbitrari ma le cose stesse restano immutabili',
              'Le opinioni dei più sono false mentre quelle dei sapienti sono vere'], giusta:0},

    {tipo:'scelta', testo:'Quale conseguenza cosmologica ricava Democrito dall\'infinità di atomi e vuoto?',
     opzioni:['Esistono infiniti mondi, alcuni senza sole né luna, che nascono e si corrompono',
              'Il cosmo è unico ed eterno perché gli atomi non possono disperdersi',
              'La terra è al centro di un universo finito racchiuso da sfere di atomi',
              'Gli atomi si dispongono secondo un disegno prestabilito dalla mente'], giusta:0},

    {tipo:'scelta', testo:'In che senso l\'atomo di Democrito raccoglie l\'eredità di Parmenide?',
     opzioni:['È pieno, ingenerato e indivisibile: è l\'essere parmenideo ridotto e moltiplicato',
              'È mutevole e in continuo divenire come il fuoco di Eraclito',
              'È percepibile dai sensi e quindi conferma la via dell\'opinione',
              'È determinato da un principio razionale esterno che lo ordina'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: in una parola, che cosa cercavano davvero i primi filosofi?'}
  ]
},
{
  titolo: 'Filosofia antica · 1 — Dagli Ionici agli atomisti',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: se dovessi dire di che cosa è fatta la realtà, diresti una cosa o un movimento?'},

    {tipo:'scelta', testo:'In che senso per i pitagorici «le cose sono numeri»?',
     opzioni:['Il numero è la struttura che rende la realtà ordinata e misurabile',
              'Il numero serve a contare e misurare gli oggetti già esistenti',
              'Ogni cosa è composta di unità materiali minime dette monadi',
              'Il numero è un simbolo divino che i sacerdoti custodiscono'], giusta:0},

    {tipo:'scelta', testo:'Che cosa esprime la tetraktys nella dottrina pitagorica?',
     opzioni:['La struttura geometrica e limitante della realtà, riassunta nei primi quattro numeri',
              'La successione delle quattro stagioni che regola l\'anno agricolo',
              'I quattro elementi da cui sono composti tutti i corpi',
              'Le quattro virtù che l\'iniziato deve acquisire in ordine'], giusta:0},

    {tipo:'scelta', testo:'Che cosa comporta il dualismo orfico accolto dai pitagorici?',
     opzioni:['Il corpo è una prigione e l\'anima si purifica attraverso rinascite successive',
              'Il mondo è governato da due divinità in perpetuo conflitto',
              'La conoscenza si divide in una parte rivelata e una dimostrabile',
              'Ogni numero ha un opposto che lo annulla nel calcolo'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il lògos per Eraclito?',
     opzioni:['La legge razionale comune secondo cui gli opposti si tengono insieme',
              'Il discorso persuasivo con cui il sapiente convince la città',
              'La parola divina che un oracolo rivela a pochi eletti',
              'Il calcolo con cui si misurano le proporzioni fra le cose'], giusta:0},

    {tipo:'scelta', testo:'Perché Eraclito chiama «dormienti» la maggior parte degli uomini?',
     opzioni:['Vivono come se avessero un pensiero privato, mentre il lògos è comune',
              'Trascorrono la vita senza mai interrogare gli oracoli della città',
              'Si affidano al ragionamento invece che all\'esperienza dei sensi',
              'Rifiutano di riconoscere l\'esistenza degli dèi tradizionali'], giusta:0},

    {tipo:'scelta', testo:'Che funzione ha il pòlemos, il conflitto, nella dottrina di Eraclito?',
     opzioni:['È il principio che genera e regola l\'unità dei contrari',
              'È il male da cui la filosofia deve liberare la città',
              'È il disordine che la legge divina interviene a correggere',
              'È la fase iniziale del cosmo, superata dall\'armonia'], giusta:0},

    {tipo:'scelta', testo:'Qual è la differenza di fondo fra il principio pitagorico e quello eracliteo?',
     opzioni:['Il numero è astratto e quantitativo, il fuoco-lògos è dinamico e perpetuo',
              'Il numero riguarda l\'anima, il fuoco riguarda soltanto il corpo',
              'Il numero è conoscibile dai sensi, il fuoco solo dalla ragione',
              'Il numero appartiene al mito, il fuoco alla scienza della natura'], giusta:0},

    {tipo:'scelta', testo:'Che cosa hanno in comune la visione pitagorica e quella eraclitea dell\'uomo?',
     opzioni:['Entrambe distinguono nettamente chi ha accesso alla verità dalla massa',
              'Entrambe considerano l\'anima mortale e legata al corpo',
              'Entrambe affidano la salvezza al rispetto delle leggi cittadine',
              'Entrambe negano che l\'uomo possa conoscere il principio'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa resta uguale mentre tutto scorre.'}
  ]
},
{
  titolo: 'Filosofia antica · 2 — Parmenide e la filosofia eleatica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: se i sensi e la ragione dicono cose opposte, a chi credi?'},

    {tipo:'scelta', testo:'Quali sono le due vie fra cui la dea impone a Parmenide di scegliere?',
     opzioni:['La via della verità, fondata sulla coerenza logica, e la via dell\'opinione, fondata sui sensi',
              'La via della scienza, riservata ai pochi, e la via della fede, aperta a tutti',
              'La via dell\'esperienza diretta e la via della testimonianza altrui',
              'La via della natura e la via della convenzione stabilita dagli uomini'], giusta:0},

    {tipo:'scelta', testo:'Perché Parmenide chiama i mortali «gente dalla doppia testa»?',
     opzioni:['Perché mescolano assurdamente l\'essere e il non essere',
              'Perché seguono due maestri che insegnano dottrine opposte',
              'Perché cambiano opinione a seconda di chi li ascolta',
              'Perché usano due lingue diverse per la scienza e per la vita'], giusta:0},

    {tipo:'scelta', testo:'Perché, secondo Parmenide, l\'essere non può nascere?',
     opzioni:['Dovrebbe venire dal nulla, e dal nulla non nasce nulla',
              'Dovrebbe essere generato da un essere più antico, all\'infinito',
              'Nascere significa mutare, e il mutamento è percepibile dai sensi',
              'Nessuno ha mai osservato l\'atto in cui una cosa comincia a esistere'], giusta:0},

    {tipo:'scelta', testo:'Con quale argomento Parmenide nega che l\'essere abbia un passato e un futuro?',
     opzioni:['Il passato sarebbe un «non è più» e il futuro un «non è ancora»: entrambi non essere',
              'Il tempo è una misura del movimento, e il movimento è illusorio',
              'Solo ciò che è composto può durare, e l\'essere è semplice',
              'Passato e futuro sono nomi che gli uomini hanno stabilito per convenzione'], giusta:0},

    {tipo:'scelta', testo:'Perché l\'essere parmenideo deve essere unico?',
     opzioni:['Ammettere più esseri richiederebbe un non essere per separarli',
              'Un essere molteplice sarebbe divisibile e quindi corruttibile',
              'Solo l\'unità può essere pensata senza contraddizione dai sensi',
              'La dea lo rivela come primo dei segni, senza dimostrarlo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vogliono dimostrare i paradossi di Zenone?',
     opzioni:['Che ammettere movimento e molteplicità porta a conseguenze contraddittorie',
              'Che i sensi ci ingannano soltanto sulle distanze molto grandi',
              'Che il movimento esiste ma non può essere misurato con esattezza',
              'Che lo spazio è infinitamente divisibile e il tempo no'], giusta:0},

    {tipo:'scelta', testo:'Che cosa hanno in comune Parmenide ed Eraclito, al di là dell\'antitesi tradizionale?',
     opzioni:['Entrambi sdoppiano la realtà in apparenza sensibile e verità profonda, e svalutano i sensi',
              'Entrambi identificano il principio con un elemento materiale determinato',
              'Entrambi affermano che la realtà è immobile e che il divenire è illusione',
              'Entrambi ritengono che la verità sia accessibile a chiunque osservi bene'], giusta:0},

    {tipo:'scelta', testo:'In che cosa consiste allora il vero disaccordo fra Parmenide ed Eraclito?',
     opzioni:['Nella natura del principio: immobile per Parmenide, dinamico per Eraclito',
              'Nel numero dei principi: uno per Parmenide, quattro per Eraclito',
              'Nel valore da attribuire alle leggi della città e ai suoi riti',
              'Nel metodo: dimostrativo per Eraclito, poetico per Parmenide'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: scrivi una cosa che i tuoi sensi ti dicono e che secondo Parmenide è falsa.'}
  ]
},
{
  titolo: 'Filosofia antica · 3 — La sofistica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: convincere qualcuno e avere ragione sono la stessa cosa?'},

    {tipo:'scelta', testo:'Che cosa afferma Protagora dicendo che «l\'uomo è misura di tutte le cose»?',
     opzioni:['Non esiste un punto di vista esterno da cui stabilire chi ha ragione',
              'L\'uomo è la creatura più perfetta e giudica tutte le altre',
              'Ogni misura fisica dipende dagli strumenti che l\'uomo costruisce',
              'Solo il sapiente può stabilire il metro del vero e del falso'], giusta:0},

    {tipo:'scelta', testo:'Che cosa resta possibile, per Protagora, una volta negata la verità assoluta?',
     opzioni:['Distinguere i discorsi più utili da quelli meno utili, e insegnare i primi',
              'Affidarsi agli oracoli, che restano l\'unica fonte sicura',
              'Rinunciare a ogni discussione e attenersi alle leggi scritte',
              'Cercare la verità nella matematica, che non dipende dai punti di vista'], giusta:0},

    {tipo:'scelta', testo:'Quale immagine usa Gorgia per descrivere il potere del linguaggio?',
     opzioni:['Un dominatore potentissimo dal corpo minuscolo e invisibile',
              'Uno specchio che riflette fedelmente la realtà a chi ascolta',
              'Una moneta il cui valore dipende da chi la accetta',
              'Un ponte che unisce due rive altrimenti separate'], giusta:0},

    {tipo:'scelta', testo:'A che cosa Gorgia paragona il potere della retorica nell\'Encomio di Elena?',
     opzioni:['Alla magia: può far cessare il timore, eliminare il dolore, suscitare gioia',
              'Alla medicina: cura le malattie dell\'anima come il medico quelle del corpo',
              'Alla guerra: sottomette l\'avversario e ne occupa il territorio',
              'Alla navigazione: conduce l\'ascoltatore dove il nocchiero vuole'], giusta:0},

    {tipo:'scelta', testo:'Secondo Gorgia, a che cosa serve il linguaggio se non a dire il vero?',
     opzioni:['A suggestionare l\'animo umano, potendo affermare una tesi e il suo contrario',
              'A conservare la memoria degli avvenimenti per le generazioni future',
              'A stabilire per convenzione i nomi corretti delle cose',
              'A permettere agli uomini di accordarsi sulle leggi della città'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sostiene la distinzione sofistica fra nòmos e physis?',
     opzioni:['Le leggi sono convenzioni umane, non ordini scritti nella natura',
              'La natura impone leggi che gli uomini si limitano a trascrivere',
              'Le leggi naturali valgono per i corpi, quelle umane per le anime',
              'Solo le leggi non scritte hanno valore, perché vengono dagli dèi'], giusta:0},

    {tipo:'scelta', testo:'Perché i sofisti si fanno pagare, e perché la cosa scandalizza?',
     opzioni:['Vendono un sapere che secondo i critici dovrebbe essere disinteressato',
              'Chiedono compensi superiori a quelli di qualunque altro mestiere',
              'Accettano solo allievi che appartengano alle famiglie aristocratiche',
              'Insegnano dottrine segrete che è vietato divulgare a pagamento'], giusta:0},

    {tipo:'scelta', testo:'Quale novità porta la sofistica rispetto ai filosofi della natura?',
     opzioni:['Sposta l\'indagine dal cosmo all\'uomo, al linguaggio e alla società',
              'Introduce per la prima volta la dimostrazione matematica',
              'Abbandona la prosa e torna alla forma poetica dei poemi',
              'Nega l\'esistenza degli dèi in modo esplicito e sistematico'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa hai imparato sul potere delle parole.'}
  ]
},
{
  titolo: 'Filosofia antica · 4 — Socrate',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: si può sapere una cosa e fare lo stesso il contrario?'},

    {tipo:'scelta', testo:'Che cosa significa che Socrate sa di non sapere?',
     opzioni:['Riconosce i limiti del proprio sapere, mentre gli altri credono di sapere ciò che ignorano',
              'Sostiene che nessuna conoscenza sia possibile in nessun campo',
              'Ammette di non aver studiato presso nessun maestro riconosciuto',
              'Nega di possedere il sapere tecnico degli artigiani e dei medici'], giusta:0},

    {tipo:'scelta', testo:'Qual è lo scopo dell\'ironia socratica?',
     opzioni:['Far crollare le false certezze dell\'interlocutore, perché chi crede di sapere non cerca',
              'Umiliare l\'avversario davanti al pubblico per vincere la discussione',
              'Nascondere le proprie opinioni per non essere accusato di empietà',
              'Rendere piacevole il dialogo alternando serietà e scherzo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa produce l\'aporia nel dialogo socratico?',
     opzioni:['Il riconoscimento di non sapere, da cui soltanto può cominciare la ricerca',
              'La confutazione definitiva della tesi avversaria',
              'L\'accordo fra i partecipanti su una definizione condivisa',
              'L\'ammissione che la questione non ha alcuna importanza'], giusta:0},

    {tipo:'scelta', testo:'Perché Socrate paragona il proprio metodo all\'arte della levatrice?',
     opzioni:['Non insegna nulla di suo: fa partorire agli altri i pensieri che già hanno',
              'Assiste i giovani nel momento più doloroso della loro formazione',
              'Esercita un mestiere umile che la città non riconosce',
              'Sa distinguere chi è pronto a imparare da chi non lo è ancora'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il dàimon socratico e come agisce?',
     opzioni:['Una voce interiore che non gli dice mai che cosa fare, ma lo trattiene dal fare il male',
              'Un dio personale che gli detta le risposte da dare agli interlocutori',
              'La coscienza collettiva della città, che parla attraverso di lui',
              'Un presagio che gli annuncia in anticipo gli avvenimenti futuri'], giusta:0},

    {tipo:'scelta', testo:'Come viene interpretato il dàimon dagli accusatori e da Senofonte?',
     opzioni:['Per gli accusatori è prova di empietà, per Senofonte di profonda devozione',
              'Entrambi lo considerano una finzione letteraria di Platone',
              'Per gli accusatori è un segno di follia, per Senofonte di ironia',
              'Entrambi lo interpretano come una metafora della ragione'], giusta:0},

    {tipo:'scelta', testo:'Che rapporto ha Socrate con la religione della città?',
     opzioni:['Partecipa ai riti e riconosce gli dèi di Atene, ma ha un rapporto personale col divino',
              'Rifiuta pubblicamente ogni culto e per questo viene processato',
              'Sostituisce gli dèi tradizionali con un principio filosofico impersonale',
              'Si dichiara indifferente alla questione religiosa in ogni suo aspetto'], giusta:0},

    {tipo:'scelta', testo:'Che cosa comporta l\'intellettualismo etico socratico?',
     opzioni:['Chi conosce veramente il bene lo compie: il male nasce da ignoranza',
              'La virtù si acquista con l\'esercizio e non con lo studio',
              'Il sapere teorico e la condotta pratica sono ambiti separati',
              'La conoscenza del bene è possibile solo dopo una vita virtuosa'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: scrivi una cosa che credevi di sapere e che adesso non sei più sicuro di sapere.'}
  ]
},
{
  titolo: 'Filosofia antica · 9 — Epicureismo e scetticismo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa ti toglierebbe più paura, sapere tutto o non voler sapere niente?'},

    {tipo:'scelta', testo:'Che cosa intende Epicuro per piacere?',
     opzioni:['Assenza di dolore nel corpo e di turbamento nell\'anima',
              'Soddisfazione continua e crescente di ogni desiderio',
              'Godimento intenso e breve, da cercare senza misura',
              'Contemplazione disinteressata della bellezza del cosmo'], giusta:0},

    {tipo:'scelta', testo:'Come Epicuro classifica i desideri?',
     opzioni:['Naturali e necessari, naturali non necessari, né naturali né necessari',
              'Corporei e spirituali, secondo la parte dell\'uomo che li prova',
              'Legittimi e illegittimi, secondo le leggi della città',
              'Momentanei e duraturi, secondo il tempo che occupano'], giusta:0},

    {tipo:'scelta', testo:'Con quale argomento Epicuro toglie la paura della morte?',
     opzioni:['Quando ci siamo noi la morte non c\'è, quando c\'è lei non ci siamo noi',
              'L\'anima sopravvive al corpo e continua in una condizione migliore',
              'La morte è un passaggio necessario nel ciclo eterno del cosmo',
              'Il ricordo lasciato negli amici rende la morte meno definitiva'], giusta:0},

    {tipo:'scelta', testo:'Perché la fisica atomistica è necessaria all\'etica epicurea?',
     opzioni:['Mostra che l\'anima si dissolve e che gli dèi non si occupano di noi: toglie due paure',
              'Fornisce la base matematica per calcolare la quantità di piacere',
              'Dimostra che il destino è già scritto e va accettato serenamente',
              'Spiega perché alcuni piaceri siano più intensi di altri'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il clinamen e a che cosa serve nel sistema epicureo?',
     opzioni:['La deviazione casuale degli atomi, che apre uno spazio alla libertà',
              'La velocità costante con cui gli atomi cadono nel vuoto',
              'La forza che tiene uniti gli atomi nei corpi composti',
              'Il momento in cui il mondo si dissolve per ricominciare'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa lo scettico di fronte a due argomenti contrari?',
     opzioni:['Sospende il giudizio, perché li trova di uguale forza',
              'Sceglie quello sostenuto dal maggior numero di sapienti',
              'Dichiara falsi entrambi e ne cerca un terzo',
              'Accetta provvisoriamente quello più utile alla vita pratica'], giusta:0},

    {tipo:'scelta', testo:'Quale risultato inatteso, secondo gli scettici, produce la sospensione del giudizio?',
     opzioni:['L\'atarassia, cioè la tranquillità che segue al non affannarsi più',
              'La certezza negativa che nulla può essere conosciuto',
              'L\'obbligo di conformarsi in tutto alle opinioni comuni',
              'La necessità di ritirarsi dalla vita pubblica e dai commerci'], giusta:0},

    {tipo:'scelta', testo:'In che cosa epicureismo e scetticismo si somigliano, pur partendo da premesse opposte?',
     opzioni:['Entrambi propongono una filosofia come terapia, il cui fine è togliere il turbamento',
              'Entrambi negano l\'esistenza degli dèi in modo esplicito',
              'Entrambi fondano la conoscenza sulla sola ragione, escludendo i sensi',
              'Entrambi affidano alla città il compito di rendere felici i cittadini'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire di che cosa avresti bisogno per stare tranquillo.'}
  ]
},
{
  titolo: 'Filosofia antica · 10 — Lo stoicismo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: quante delle cose che ti preoccupano dipendono davvero da te?'},

    {tipo:'scelta', testo:'Qual è la distinzione fondamentale con cui Epitteto apre il Manuale?',
     opzioni:['Fra ciò che dipende da noi e ciò che non dipende da noi',
              'Fra ciò che giova al corpo e ciò che gli è dannoso',
              'Fra le leggi della città e quelle della natura',
              'Fra i beni materiali e i beni dell\'anima'], giusta:0},

    {tipo:'scelta', testo:'Che cosa comporta, per gli stoici, vivere secondo natura?',
     opzioni:['Accordare la propria ragione con la ragione che governa il cosmo',
              'Rinunciare alla vita cittadina e ritirarsi in campagna',
              'Seguire gli istinti del corpo senza reprimerli',
              'Imitare il comportamento degli animali, che non conoscono angoscia'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono gli «indifferenti» nell\'etica stoica?',
     opzioni:['Ciò che non è né bene né male in sé, come ricchezza, salute e reputazione',
              'Le azioni che non hanno conseguenze su nessuno',
              'Le persone che non partecipano alla vita politica',
              'Le opinioni su cui i filosofi non sono riusciti ad accordarsi'], giusta:0},

    {tipo:'scelta', testo:'In che senso, per Seneca, il «dentro» è il luogo della libertà?',
     opzioni:['Perché ciò che è fuori appartiene al regno della necessità e non ci appartiene',
              'Perché solo in privato si può parlare liberamente senza rischi',
              'Perché la libertà consiste nel ritirarsi dagli affari pubblici',
              'Perché l\'interiorità è l\'unica parte dell\'uomo che gli dèi non vedono'], giusta:0},

    {tipo:'scelta', testo:'Perché Seneca sostiene che la vera schiavitù è quella del vizio?',
     opzioni:['La condizione servile riguarda il corpo, mentre il vizio soggioga l\'anima',
              'Gli schiavi sono tali per natura e non possono essere liberati',
              'La schiavitù giuridica era già stata abolita ai suoi tempi',
              'Il vizio è punito dalla legge più severamente della fuga'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue Marco Aurelio dagli altri stoici romani?',
     opzioni:['Scrive appunti per sé stesso, non destinati alla pubblicazione, ed è imperatore',
              'Rifiuta la dottrina degli indifferenti e valorizza i beni esterni',
              'Fonda una scuola pubblica dove insegna gratuitamente',
              'Abbandona la filosofia stoica per avvicinarsi all\'epicureismo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa hanno in comune Seneca, Epitteto e Marco Aurelio?',
     opzioni:['Trasformano la filosofia in una terapia quotidiana, fatta di esercizi',
              'Elaborano una nuova fisica che corregge quella di Zenone',
              'Scrivono in greco per rivolgersi al pubblico più colto',
              'Sostengono che il saggio debba governare la città'], giusta:0},

    {tipo:'scelta', testo:'Perché per gli stoici tutti gli uomini appartengono a una sola città?',
     opzioni:['Tutti gli uomini partecipano della stessa ragione, quindi appartengono a una sola città',
              'L\'impero romano ha unificato di fatto il mondo conosciuto',
              'Le differenze fra i popoli sono state cancellate dal commercio',
              'Nessuna città può pretendere l\'obbedienza dei propri cittadini'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: scrivi una cosa che non dipende da te e che smetterai di prendertela.'}
  ]
}
,
{
  titolo: 'Filosofia medievale · 1 — La filosofia nel Medioevo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: una parola che ti viene in mente pensando alla filosofia del Medioevo.'},

    {tipo:'scelta', testo:'Qual è la domanda al centro del problema degli universali?',
     opzioni:['Ai termini generali come «uomo» corrisponde qualcosa di reale nelle cose?',
              'Le parole del linguaggio comune sono adatte a parlare di Dio?',
              'La ragione può dimostrare le verità rivelate dalla fede?',
              'Gli antichi filosofi pagani potevano salvarsi senza il battesimo?'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rispondono i realisti al problema degli universali?',
     opzioni:['Esiste una realtà comune agli individui, indipendente dalla nostra mente',
              'Gli universali sono soltanto suoni emessi dalla voce umana',
              'Gli universali esistono solo nella mente di Dio e non altrove',
              'La questione non si può decidere e va lasciata alla fede'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rispondono i nominalisti?',
     opzioni:['Alla natura reale sostituiscono concetti mentali, spostando il problema sul linguaggio',
              'Gli universali sono le idee eterne che Platone poneva in un mondo separato',
              'Ogni termine generale corrisponde a una sostanza presente nelle cose',
              'Solo la rivelazione può dire quali termini generali siano veri'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuole dimostrare Anselmo con la prova ontologica?',
     opzioni:['Che Dio esiste, partendo soltanto dal concetto di Dio',
              'Che il mondo ha avuto un inizio nel tempo',
              'Che la fede precede necessariamente la ragione',
              'Che le creature sono meno perfette del loro creatore'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma il rasoio di Ockham?',
     opzioni:['Non bisogna moltiplicare gli enti senza necessità',
              'Ogni conoscenza deve partire dalla rivelazione divina',
              'Le cause naturali di un fatto sono sempre quattro',
              'Il vero si riconosce dalla chiarezza dell\'idea'], giusta:0},

    {tipo:'scelta', testo:'Che cosa comporta, per Ockham, l\'onnipotenza divina?',
     opzioni:['Il mondo è come è perché Dio lo ha voluto così, ma poteva essere diverso',
              'Dio è tenuto a seguire le leggi della logica in ogni sua azione',
              'Il mondo è necessariamente il migliore dei mondi possibili',
              'Le leggi di natura sono eterne quanto Dio stesso'], giusta:0},

    {tipo:'scelta', testo:'Che conseguenza ha la posizione di Ockham sul modo di studiare la natura?',
     opzioni:['Se poteva essere diverso, il mondo va osservato e non dedotto',
              'La natura si conosce meglio leggendo i testi degli antichi',
              'Lo studio della natura è inutile perché tutto dipende da Dio',
              'La matematica diventa l\'unico strumento davvero affidabile'], giusta:0},

    {tipo:'scelta', testo:'Che cosa separa Ockham rispetto alla scolastica precedente?',
     opzioni:['Ritiene che fede e ragione abbiano campi distinti e non si dimostrino a vicenda',
              'Nega che la fede possa avere un contenuto razionale qualsiasi',
              'Sostiene che la teologia debba assorbire tutte le altre scienze',
              'Afferma che la filosofia antica sia superiore alla rivelazione'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: in una parola, che cosa vuol dire «universale».'}
  ]
},
{
  titolo: 'Filosofia antica · 11 — Il neoplatonismo e Plotino',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: può esistere qualcosa che è al di là dell\'essere?'},

    {tipo:'scelta', testo:'Che cos\'è l\'Uno per Plotino?',
     opzioni:['Il principio che sta al di là dell\'essere e del pensiero',
              'Il primo dei quattro elementi da cui deriva il cosmo',
              'La mente divina che contiene tutte le idee',
              'L\'anima del mondo che muove i corpi celesti'], giusta:0},

    {tipo:'scelta', testo:'Come nascono le cose dall\'Uno, secondo Plotino?',
     opzioni:['Per emanazione, come la luce da una sorgente, senza che l\'Uno si consumi',
              'Per creazione volontaria, come un artigiano che fabbrica un oggetto',
              'Per caduta accidentale di una parte dell\'Uno nella materia',
              'Per generazione sessuale fra due principi opposti'], giusta:0},

    {tipo:'scelta', testo:'Qual è l\'ordine dei gradi nella processione plotiniana?',
     opzioni:['Uno, Intelletto, Anima, mondo sensibile',
              'Materia, Anima, Intelletto, Uno',
              'Uno, Anima, Materia, Intelletto',
              'Intelletto, Uno, mondo sensibile, Anima'], giusta:0},

    {tipo:'scelta', testo:'Perché dell\'Uno si può dire soltanto ciò che non è?',
     opzioni:['Ogni predicato lo limiterebbe, e l\'Uno è al di là di ogni determinazione',
              'Il linguaggio umano è stato corrotto dal peccato originale',
              'Solo gli iniziati ai misteri possono nominarlo apertamente',
              'L\'Uno cambia continuamente e nessun nome resterebbe valido'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la materia per Plotino?',
     opzioni:['L\'ultimo grado della processione, dove la luce dell\'Uno si spegne',
              'Il principio opposto all\'Uno, eterno e altrettanto potente',
              'La sostanza di cui sono fatte le idee dell\'Intelletto',
              'Una creazione diretta dell\'Uno, buona quanto le altre'], giusta:0},

    {tipo:'scelta', testo:'Qual è il fine della vita per Plotino?',
     opzioni:['Il ritorno dell\'anima all\'Uno, fino all\'unione estatica',
              'La costruzione di una città giusta secondo ragione',
              'La conoscenza completa delle cause naturali',
              'La soddisfazione moderata dei desideri necessari'], giusta:0},

    {tipo:'scelta', testo:'Che rapporto ha Plotino con Platone?',
     opzioni:['Si considera un interprete di Platone e ne prolunga la dottrina in senso religioso',
              'Rifiuta la teoria delle idee e torna alla fisica dei presocratici',
              'Corregge Platone accogliendo la critica di Aristotele',
              'Ne prende soltanto la dottrina politica e ne scarta il resto'], giusta:0},

    {tipo:'scelta', testo:'Che influenza ha avuto il neoplatonismo sul pensiero successivo?',
     opzioni:['Ha dato alla teologia cristiana il suo linguaggio filosofico',
              'È rimasto una dottrina di scuola, senza seguito dopo il III secolo',
              'Ha ispirato l\'atomismo moderno di Gassendi e di Newton',
              'Ha determinato la nascita della logica formale medievale'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire da dove viene tutto.'}
  ]
}
,
{
  titolo: 'Filosofia moderna · 6 — La rivoluzione scientifica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa rende una spiegazione «scientifica»?'},

    {tipo:'scelta', testo:'Che cosa afferma la teoria eliocentrica di Copernico?',
     opzioni:['La Terra gira intorno al Sole e ruota su sé stessa',
              'Il Sole e i pianeti girano intorno alla Terra ferma',
              'L\'universo è infinito e non ha nessun centro',
              'I pianeti si muovono su orbite ellittiche e non circolari'], giusta:0},

    {tipo:'scelta', testo:'Quale correzione introduce Keplero rispetto a Copernico?',
     opzioni:['Le orbite dei pianeti sono ellittiche, non circolari',
              'Il centro dell\'universo è la Terra e non il Sole',
              'I pianeti si muovono a velocità sempre costante',
              'Le stelle fisse ruotano insieme ai pianeti'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia nel modo di guardare la natura con la rivoluzione scientifica?',
     opzioni:['La natura si studia misurando e sperimentando, non citando gli antichi',
              'La natura viene considerata sacra e quindi non indagabile',
              'Si torna al metodo di Aristotele dopo secoli di abbandono',
              'Si rinuncia a cercare leggi generali e si descrivono i casi singoli'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la matematizzazione della natura?',
     opzioni:['L\'idea che i fenomeni si possano descrivere con dei numeri',
              'L\'uso della matematica per calcolare le date del calendario',
              'La convinzione che i numeri siano il principio di ogni cosa',
              'La riduzione della geometria a una parte dell\'aritmetica'], giusta:0},

    {tipo:'scelta', testo:'Quale strumento rende possibili le scoperte astronomiche del Seicento?',
     opzioni:['Il cannocchiale',
              'Il microscopio composto',
              'Il barometro a mercurio',
              'La macchina calcolatrice'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue una legge scientifica moderna da una spiegazione aristotelica?',
     opzioni:['Descrive come avviene un fenomeno, non a quale fine tenda',
              'Si applica solo ai corpi celesti e non a quelli terrestri',
              'Viene stabilita da un\'autorità e non discussa',
              'Riguarda le qualità delle cose e non le loro quantità'], giusta:0},

    {tipo:'scelta', testo:'Perché la rivoluzione scientifica entra in conflitto con la Chiesa?',
     opzioni:['Mette in discussione un\'immagine del cosmo legata al testo sacro',
              'Nega apertamente l\'esistenza di Dio e dell\'anima',
              'Sostiene che la Bibbia sia stata scritta molto tardi',
              'Vieta ai religiosi di occuparsi di questioni naturali'], giusta:0},

    {tipo:'scelta', testo:'Che ruolo hanno le accademie scientifiche del Seicento?',
     opzioni:['Rendono la ricerca un lavoro collettivo e pubblicano i risultati',
              'Sostituiscono le università come luogo di insegnamento',
              'Custodiscono i risultati come segreti riservati ai soci',
              'Si occupano soltanto della traduzione dei testi antichi'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa è cambiato nel modo di conoscere.'}
  ]
},
{
  titolo: 'Filosofia moderna · 9 — Cartesio',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: di quale cosa sei assolutamente sicuro?'},

    {tipo:'scelta', testo:'Qual è l\'obiettivo di Cartesio nel Discorso sul metodo?',
     opzioni:['Ricostruire il sapere su un fondamento di certezze assolute',
              'Raccogliere in ordine alfabetico tutte le conoscenze del suo tempo',
              'Dimostrare che la conoscenza certa è impossibile',
              'Difendere la filosofia degli antichi dalle critiche moderne'], giusta:0},

    {tipo:'scelta', testo:'Quale modello di sapere prende Cartesio come riferimento?',
     opzioni:['La matematica, per il suo rigore',
              'La medicina, per la sua utilità pratica',
              'La teologia, per la sua certezza rivelata',
              'La storia, per la ricchezza dei suoi esempi'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il dubbio metodico?',
     opzioni:['Un dubbio volontario, usato per trovare ciò che gli resiste',
              'La convinzione che nulla possa essere conosciuto con certezza',
              'L\'abitudine di sospendere il giudizio su ogni questione',
              'Il rifiuto di ogni conoscenza che non venga dai sensi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa mette in dubbio l\'ipotesi del genio maligno?',
     opzioni:['Anche le verità logiche e matematiche',
              'Soltanto le informazioni che vengono dai sensi',
              'L\'esistenza degli altri uomini ma non la propria',
              'La possibilità di distinguere il sonno dalla veglia'], giusta:0},

    {tipo:'scelta', testo:'Perché il cogito resiste anche al genio maligno?',
     opzioni:['Anche se fossi ingannato su tutto, dovrei esistere per essere ingannato',
              'Perché il pensiero è la sola cosa che gli angeli non possono toccare',
              'Perché la matematica lo dimostra con evidenza geometrica',
              'Perché i sensi lo confermano in ogni istante della veglia'], giusta:0},

    {tipo:'scelta', testo:'Qual è il criterio di verità che Cartesio ricava dal cogito?',
     opzioni:['È vero ciò che si concepisce in modo chiaro e distinto',
              'È vero ciò su cui concordano tutti gli uomini di scienza',
              'È vero ciò che si può verificare con un esperimento',
              'È vero ciò che è stato rivelato e poi confermato dalla ragione'], giusta:0},

    {tipo:'scelta', testo:'Che funzione ha Dio nel sistema di Cartesio?',
     opzioni:['Garantisce che ciò che concepiamo chiaramente sia vero',
              'Interviene di volta in volta a muovere i corpi',
              'Serve solo come oggetto della fede, non della filosofia',
              'Rappresenta il fine ultimo verso cui la natura tende'], giusta:0},

    {tipo:'scelta', testo:'In quali due sostanze Cartesio divide la realtà creata?',
     opzioni:['Res cogitans, che pensa, e res extensa, che occupa spazio',
              'Materia e forma, come nella tradizione aristotelica',
              'Atomi e vuoto, come negli antichi atomisti',
              'Natura naturante e natura naturata'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: scrivi che cosa resta dopo aver dubitato di tutto.'}
  ]
},
{
  titolo: 'Filosofia moderna · 15 — Hume',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: come fai a sapere che domani il sole sorgerà?'},

    {tipo:'scelta', testo:'Come Hume distingue le impressioni dalle idee?',
     opzioni:['Le impressioni sono vivaci, le idee ne sono copie più deboli',
              'Le impressioni riguardano il corpo, le idee riguardano l\'anima',
              'Le impressioni sono innate, le idee nascono dall\'esperienza',
              'Le impressioni sono sempre vere, le idee possono ingannarci'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cerchiamo, secondo Hume, quando osserviamo una causa e un effetto?',
     opzioni:['Non la connessione necessaria, ma solo una successione ripetuta',
              'Una forza che passa visibilmente dalla causa fino all\'effetto',
              'La potenza che produce l\'effetto, osservata direttamente',
              'Una legge matematica che lega saldamente l\'una all\'altro'], giusta:0},

    {tipo:'scelta', testo:'Da dove nasce allora l\'idea di causalità?',
     opzioni:['Dall\'abitudine prodotta dalla ripetizione dei casi',
              'Da un principio innato inscritto nella ragione',
              'Da una rivelazione confermata dall\'esperienza',
              'Da una dimostrazione simile a quelle geometriche'], giusta:0},

    {tipo:'scelta', testo:'In che consiste il circolo vizioso dell\'induzione?',
     opzioni:['Per giustificare l\'induzione bisognerebbe usare l\'induzione stessa',
              'Ogni esperimento richiede un altro esperimento che lo confermi',
              'Ogni causa presuppone una causa precedente, all\'infinito',
              'La matematica dimostra le sue premesse con le proprie conclusioni'], giusta:0},

    {tipo:'scelta', testo:'Che conclusione trae Hume sul metodo scientifico?',
     opzioni:['Si fonda su una credenza pratica, non su una certezza assoluta',
              'È l\'unica forma di conoscenza davvero certa che abbiamo',
              'Va sostituita dalla sola matematica, che dimostra davvero',
              'Va abbandonata, perché in fondo non dimostra proprio nulla'], giusta:0},

    {tipo:'scelta', testo:'Che cosa trova Hume quando cerca dentro di sé il proprio io?',
     opzioni:['Solo una percezione dopo l\'altra, mai l\'io che le avrebbe',
              'Una sostanza semplice e permanente, come voleva Cartesio',
              'Un\'idea innata che la ragione riconosce subito',
              'Una successione di corpi ma nessuna successione di pensieri'], giusta:0},

    {tipo:'scelta', testo:'Che cosa produce allora l\'unità dell\'io, secondo Hume?',
     opzioni:['L\'immaginazione, che lega le percezioni come se fossero una cosa sola',
              'La memoria dei corpi che abbiamo occupato nel tempo',
              'Il linguaggio, che ci obbliga a usare la parola «io»',
              'Un atto della volontà che decide di essere sempre lo stesso'], giusta:0},

    {tipo:'scelta', testo:'Come Hume divide tutte le proposizioni?',
     opzioni:['Relazioni fra idee, certe ma vuote, e dati di fatto, utili ma non necessari',
              'Proposizioni vere e proposizioni false, senza vie di mezzo',
              'Proposizioni scientifiche e proposizioni religiose',
              'Proposizioni generali e proposizioni particolari'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire su che cosa si regge la scienza.'}
  ]
},
{
  titolo: 'Filosofia moderna · 20 — Kant: la Critica della ragion pura',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: la mente riceve il mondo così com\'è, o ci mette qualcosa di suo?'},

    {tipo:'scelta', testo:'In che cosa consiste la rivoluzione copernicana di Kant?',
     opzioni:['Non è il pensiero a girare attorno all\'oggetto, ma l\'oggetto attorno al pensiero',
              'È la Terra a girare attorno al Sole e non viceversa',
              'La conoscenza deriva interamente dai sensi e non dalla ragione',
              'Le idee sono innate e non hanno bisogno dell\'esperienza'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono spazio e tempo per Kant?',
     opzioni:['Forme della sensibilità: il modo in cui riceviamo i dati',
              'Proprietà reali delle cose, indipendenti da chi osserva',
              'Concetti dell\'intelletto ricavati dall\'esperienza',
              'Idee della ragione a cui nessun oggetto corrisponde'], giusta:0},

    {tipo:'scelta', testo:'Che lavoro fanno le categorie sui dati dei sensi?',
     opzioni:['Li ordinano, trasformandoli in un\'esperienza organizzata',
              'Li registrano così come arrivano, senza modificarli',
              'Li selezionano, scartando quelli che non servono',
              'Li conservano nella memoria per poterli richiamare'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire «trascendentale» in Kant?',
     opzioni:['Che riguarda le condizioni che rendono possibile l\'esperienza',
              'Che riguarda ciò che sta oltre il mondo, come Dio e l\'anima',
              'Che riguarda ciò che si impara vivendo e facendo pratica',
              'Che riguarda i sentimenti più alti dell\'animo umano'], giusta:0},

    {tipo:'scelta', testo:'Perché la cosa in sé resta inconoscibile?',
     opzioni:['Conosciamo solo ciò che passa per le nostre forme e categorie',
              'Nessuno ha ancora costruito strumenti abbastanza precisi',
              'Dio ha vietato all\'uomo di conoscerla direttamente',
              'La cosa in sé cambia continuamente e sfugge alla misura'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire che un giudizio è «sintetico a priori»?',
     opzioni:['Aggiunge qualcosa al soggetto e vale prima dell\'esperienza',
              'Si limita a spiegare ciò che era già dentro il soggetto',
              'Deriva interamente dall\'osservazione ripetuta dei casi',
              'Vale soltanto per chi accetta le premesse da cui parte'], giusta:0},

    {tipo:'scelta', testo:'Come risponde Kant al problema della causalità posto da Hume?',
     opzioni:['La causalità è una categoria: non la troviamo nel mondo, la mettiamo noi',
              'La causalità si dimostra con un esperimento decisivo',
              'La causalità è un\'idea innata che Dio ha inscritto in noi',
              'La causalità è un\'illusione che la scienza deve abbandonare'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono le idee della ragione — anima, mondo, Dio?',
     opzioni:['Concetti a cui non corrisponde nessuna esperienza',
              'Le tre categorie fondamentali dell\'intelletto umano',
              'Oggetti che i sensi percepiscono in modo confuso',
              'Verità dimostrabili col rigore della matematica'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa la mente mette del suo.'}
  ]
},
{
  titolo: 'Filosofia moderna · 21 — Kant: la Critica della ragion pratica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: un\'azione è buona per quello che ottiene o per come è stata scelta?'},

    {tipo:'scelta', testo:'Che differenza c\'è fra imperativo ipotetico e categorico?',
     opzioni:['L\'ipotetico vale se vuoi un certo fine, il categorico vale sempre',
              'L\'ipotetico riguarda gli altri, il categorico riguarda te stesso',
              'L\'ipotetico è scritto nelle leggi, il categorico nella coscienza',
              'L\'ipotetico si applica ai casi rari, il categorico ai casi comuni'], giusta:0},

    {tipo:'scelta', testo:'Come suona la prima formula dell\'imperativo categorico?',
     opzioni:['Agisci come se la tua massima dovesse diventare legge universale',
              'Fa\' agli altri ciò che vorresti fosse fatto a te',
              'Cerca sempre la maggiore felicità per il maggior numero',
              'Agisci secondo la virtù, che sta nel giusto mezzo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma la formula dell\'umanità come fine?',
     opzioni:['Tratta le persone sempre anche come fine, mai soltanto come mezzo',
              'Considera l\'umanità come un unico organismo vivente',
              'Poni il bene dell\'umanità al di sopra del bene individuale',
              'Riconosci che ogni uomo tende naturalmente alla felicità'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'autonomia della volontà per Kant?',
     opzioni:['La volontà si dà da sé la legge, invece di riceverla',
              'La volontà è libera di scegliere qualunque cosa voglia',
              'La volontà segue la legge dello Stato senza discuterla',
              'La volontà obbedisce alle inclinazioni naturali'], giusta:0},

    {tipo:'scelta', testo:'Perché la felicità non può fondare la morale, secondo Kant?',
     opzioni:['È indeterminata: nessuno sa dire che cosa vuole davvero',
              'È un fine irraggiungibile, e quindi inutile proporselo',
              'Riguarda il corpo e non la parte razionale dell\'uomo',
              'Dipende dalla fortuna e non dal merito di chi agisce'], giusta:0},

    {tipo:'scelta', testo:'Che cosa significa che la legge morale è formale?',
     opzioni:['Non dice quale contenuto scegliere, ma quale forma deve avere la regola',
              'Va rispettata soltanto nella forma esteriore delle azioni',
              'È stata formulata per iscritto e depositata nelle costituzioni',
              'Vale solo nei rapporti formali e non nella vita privata'], giusta:0},

    {tipo:'scelta', testo:'Quali sono i postulati della ragion pratica?',
     opzioni:['Libertà, immortalità dell\'anima ed esistenza di Dio',
              'Spazio, tempo e causalità',
              'Anima, mondo e Dio come oggetti conoscibili',
              'Dovere, virtù e felicità come fini dell\'azione'], giusta:0},

    {tipo:'scelta', testo:'Che rapporto c\'è fra virtù e felicità nel sommo bene kantiano?',
     opzioni:['La virtù rende degni della felicità, ma non la produce da sé',
              'La virtù coincide con la felicità già in questa vita',
              'La felicità precede la virtù e ne è la condizione',
              'Virtù e felicità sono in contrasto insanabile'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire quando un\'azione è davvero morale.'}
  ]
},
{
  titolo: 'Filosofia moderna · 28 — Hegel: la Fenomenologia dello spirito',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: si può imparare qualcosa senza prima sbagliare?'},

    {tipo:'scelta', testo:'Che cosa racconta la Fenomenologia dello Spirito?',
     opzioni:['Il cammino della coscienza fino al sapere assoluto',
              'La storia dell\'Europa dalla Rivoluzione a Napoleone',
              'La successione dei sistemi filosofici fino a oggi',
              'Le leggi che regolano la mente del singolo individuo'], giusta:0},

    {tipo:'scelta', testo:'Quali sono i tre momenti della dialettica hegeliana?',
     opzioni:['Tesi, antitesi e sintesi',
              'Dubbio, evidenza e dimostrazione',
              'Percezione, memoria e immaginazione',
              'Analisi, sintesi e revisione'], giusta:0},

    {tipo:'scelta', testo:'Che cosa significa il termine Aufhebung?',
     opzioni:['Insieme togliere, conservare e portare a un livello più alto',
              'Cancellare completamente ciò che precede',
              'Ripetere in forma nuova ciò che era già noto',
              'Mettere da parte una questione senza risolverla'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma Hegel dicendo che «il vero è l\'intero»?',
     opzioni:['Nessuna proposizione isolata è vera: lo diventa nel posto che occupa nel tutto',
              'Solo le proposizioni universali possono essere vere',
              'La verità si raggiunge sommando tutte le opinioni degli uomini',
              'Un\'affermazione è vera se corrisponde a un fatto osservabile'], giusta:0},

    {tipo:'scelta', testo:'Che cosa mostra la dialettica servo-padrone?',
     opzioni:['Il servo, lavorando, acquista autonomia mentre il padrone dipende da lui',
              'Il padrone conserva sempre la superiorità sul servo',
              'Servo e padrone si scambiano i ruoli per accordo reciproco',
              'La schiavitù è un rapporto naturale e non storico'], giusta:0},

    {tipo:'scelta', testo:'Che ruolo ha l\'errore nel percorso della coscienza?',
     opzioni:['È un momento necessario, superato e conservato nel risultato',
              'Va evitato fin dall\'inizio, o il percorso si interrompe',
              'È indifferente, perché il risultato non dipende dal cammino',
              'Riguarda solo la coscienza comune, non quella filosofica'], giusta:0},

    {tipo:'scelta', testo:'Che cosa intende Hegel per «coscienza infelice»?',
     opzioni:['La coscienza che pone l\'assoluto fuori di sé e si sente separata da esso',
              'La coscienza di chi non ha ancora imparato a leggere il mondo',
              'La condizione di chi vive in una società ingiusta',
              'Il momento in cui la coscienza rinuncia a conoscere'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire che la sostanza è soggetto?',
     opzioni:['L\'assoluto non è un fondamento immobile ma un processo che diventa sé stesso',
              'Ogni sostanza appartiene a un soggetto che la possiede',
              'Il soggetto conoscente crea la sostanza che conosce',
              'Le sostanze sono infinite come i soggetti che le pensano'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire a che cosa serve un errore.'}
  ]
}
,
{
  titolo: 'Filosofia contemporanea · 1 — Schopenhauer',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: quando ottieni una cosa che desideravi molto, che cosa provi il giorno dopo?'},

    {tipo:'scelta', testo:'Che cosa vede l\'uomo, secondo Schopenhauer, finché resta nella rappresentazione?',
     opzioni:['Un mondo ordinato dalle sue forme mentali, non il mondo vero',
              'Il mondo esattamente come è fatto in sé stesso',
              'Un mondo privo di ordine, disordinato e caotico',
              'Solo le proprie idee, senza nessun oggetto esterno'], giusta:0},

    {tipo:'scelta', testo:'Perché il corpo è per Schopenhauer un caso speciale?',
     opzioni:['Lo conosciamo da fuori come oggetto e da dentro come volontà',
              'È l\'unico oggetto che non occupa spazio né tempo',
              'È l\'unica cosa che non cambia mai nel corso della vita',
              'È l\'unico oggetto che i sensi colgono senza errore'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire che la volontà è «unica»?',
     opzioni:['È la stessa in una quercia e in un milione di querce',
              'Ogni individuo ne possiede una porzione diversa',
              'Esiste una sola persona che la possiede davvero',
              'Si manifesta una volta sola nella storia del mondo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa significa che la volontà è «senza scopo»?',
     opzioni:['Non ha nessuna meta oltre sé stessa: la vita vuole solo la vita',
              'Non riesce a raggiungere gli scopi che si propone',
              'Cambia scopo continuamente, senza mai fermarsi',
              'Ha uno scopo che noi non riusciamo a conoscere'], giusta:0},

    {tipo:'scelta', testo:'Come descrive Schopenhauer l\'oscillazione della vita umana?',
     opzioni:['Fra il dolore del desiderio e la noia di averlo soddisfatto',
              'Fra il piacere dei sensi e quello dell\'intelligenza',
              'Fra la fatica del lavoro e il riposo che la ripaga',
              'Fra la speranza del futuro e il ricordo del passato'], giusta:0},

    {tipo:'scelta', testo:'Qual è la prima delle tre vie di liberazione dal dolore?',
     opzioni:['L\'arte, che sospende per un momento il volere',
              'La politica, che riordina la vita in comune',
              'La scienza, che spiega le cause della sofferenza',
              'Il lavoro, che distrae dalla propria condizione'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa l\'asceta, nell\'ultima via indicata da Schopenhauer?',
     opzioni:['Smette di volere, spegnendo in sé la volontà di vivere',
              'Cerca il piacere più intenso possibile fino alla fine',
              'Si dedica al bene degli altri restando nel mondo',
              'Contempla la natura per capirne le leggi nascoste'], giusta:0},

    {tipo:'scelta', testo:'Perché Schopenhauer chiama l\'intelletto una manifestazione «secondaria»?',
     opzioni:['Perché nasce al servizio della volontà, che viene prima',
              'Perché appare tardi nella storia dell\'evoluzione',
              'Perché è meno affidabile dei sensi nel conoscere',
              'Perché si sviluppa solo in alcuni uomini e non in tutti'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa c\'è dietro il velo.'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 2 — Kierkegaard',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: hai mai avuto paura non di una cosa, ma di quello che potresti fare?'},

    {tipo:'scelta', testo:'Che cosa vuol dire che per Kierkegaard l\'esistenza è possibilità?',
     opzioni:['L\'uomo non ha un destino già scritto: è ciò che sceglie',
              'L\'uomo può realizzare tutto quello che desidera',
              'L\'uomo conosce in anticipo le proprie possibilità',
              'L\'uomo è determinato dalla società in cui nasce'], giusta:0},

    {tipo:'scelta', testo:'Perché ogni scelta, per Kierkegaard, è dolorosa?',
     opzioni:['Perché ogni «sì» porta con sé infiniti «no»',
              'Perché non abbiamo mai abbastanza informazioni',
              'Perché gli altri giudicheranno quello che decidiamo',
              'Perché una scelta si può sempre annullare'], giusta:0},

    {tipo:'scelta', testo:'Qual è l\'oggetto dell\'angoscia?',
     opzioni:['Il nulla, cioè la possibilità come tale',
              'Un pericolo reale e ben individuato',
              'Il ricordo di un male già subito',
              'Il giudizio degli altri sulla nostra vita'], giusta:0},

    {tipo:'scelta', testo:'Perché Kierkegaard dice che chi non prova angoscia «è angelo o bestia»?',
     opzioni:['Perché l\'angoscia è il sentimento proprio dell\'uomo',
              'Perché solo i santi e gli animali sono davvero liberi',
              'Perché l\'angoscia è un difetto da curare',
              'Perché gli uomini semplici non pensano al futuro'], giusta:0},

    {tipo:'scelta', testo:'Davanti a che cosa si trova l\'uomo nell\'angoscia, e davanti a che cosa nella disperazione?',
     opzioni:['Nell\'angoscia davanti al mondo, nella disperazione davanti a sé',
              'Nell\'angoscia davanti a sé, nella disperazione davanti a Dio',
              'Nell\'angoscia davanti alla morte, nella disperazione al dolore',
              'Nell\'angoscia davanti agli altri, nella disperazione al futuro'], giusta:0},

    {tipo:'scelta', testo:'Perché dalla disperazione non si può fuggire?',
     opzioni:['Sarebbe come cercare di sfuggire alla propria ombra',
              'Perché nessuno ci aiuta quando siamo disperati',
              'Perché la società non permette di cambiare vita',
              'Perché non dura mai abbastanza per essere capita'], giusta:0},

    {tipo:'scelta', testo:'Che cosa richiede il passaggio allo stadio religioso?',
     opzioni:['Un salto, non una dimostrazione: si crede senza garanzie',
              'Un ragionamento che dimostri l\'esistenza di Dio',
              'L\'appartenenza a una comunità che ne certifichi la fede',
              'Il rispetto scrupoloso di tutte le regole morali'], giusta:0},

    {tipo:'scelta', testo:'Che cosa difende Kierkegaard contro il sistema di Hegel?',
     opzioni:['Il singolo, che nessuna totalità può contenere',
              'Lo Stato, che dà forma alla vita degli individui',
              'La storia, che spiega ogni destino individuale',
              'La ragione, che riconcilia tutte le contraddizioni'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa si prova davanti a una scelta vera.'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 4 — Karl Marx',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: chi lavora otto ore al giorno, di chi è il prodotto che esce dalle sue mani?'},

    {tipo:'scelta', testo:'Che cosa vuol dire che il lavoratore è alienato dal prodotto?',
     opzioni:['Ciò che produce non gli appartiene e gli sta di fronte come estraneo',
              'Non riesce a capire come funziona la macchina che usa',
              'Non prova nessun interesse per il proprio mestiere',
              'Non conosce i compagni con cui divide il lavoro'], giusta:0},

    {tipo:'scelta', testo:'Perché per Marx la religione è «l\'oppio dei popoli»?',
     opzioni:['Consola della sofferenza invece di toglierne le cause',
              'È stata inventata dai potenti per divertire il popolo',
              'Impedisce agli uomini di conoscere la natura',
              'Rende gli uomini violenti gli uni contro gli altri'], giusta:0},

    {tipo:'scelta', testo:'Che cosa intende Marx per «struttura» di una società?',
     opzioni:['I rapporti di produzione, cioè come si produce e chi possiede',
              'Le leggi e le istituzioni che la governano',
              'Le idee e i valori condivisi dai suoi membri',
              'Il modo in cui le città sono costruite e organizzate'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il valore di una merce, nell\'analisi di Marx?',
     opzioni:['Il lavoro socialmente necessario per produrla',
              'Il prezzo che il compratore è disposto a pagare',
              'L\'utilità che quella merce ha per chi la usa',
              'La rarità della materia prima con cui è fatta'], giusta:0},

    {tipo:'scelta', testo:'Da dove nasce il profitto del capitalista?',
     opzioni:['Dal lavoro non pagato che resta dopo il salario',
              'Dalla vendita della merce a un prezzo superiore al valore',
              'Dal risparmio ottenuto comprando materie prime a poco',
              'Dall\'interesse che le banche gli riconoscono'], giusta:0},

    {tipo:'scelta', testo:'Che cosa succede al saggio di profitto quando cresce la meccanizzazione?',
     opzioni:['Tende a calare, perché il profitto nasce dal lavoro vivo',
              'Cresce, perché le macchine producono di più',
              'Resta identico, perché i prezzi si adeguano da soli',
              'Diventa impossibile da calcolare per il capitalista'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è per Marx la coscienza di classe?',
     opzioni:['Il momento in cui gli sfruttati si riconoscono come gruppo',
              'La consapevolezza che ogni operaio ha del proprio mestiere',
              'Il senso di appartenenza a una nazione',
              'La cultura che il capitalista trasmette ai suoi dipendenti'], giusta:0},

    {tipo:'scelta', testo:'Perché per Marx la storia non è la storia delle idee?',
     opzioni:['Perché le idee nascono dai rapporti materiali fra gli uomini',
              'Perché gli uomini non hanno mai avuto idee originali',
              'Perché le idee cambiano troppo in fretta per essere studiate',
              'Perché solo pochi uomini colti hanno lasciato scritti'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa perde chi lavora in una catena di montaggio.'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 8 — Nietzsche: la demistificazione',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: la storia serve a vivere meglio o può anche schiacciarci?'},

    {tipo:'scelta', testo:'Perché Nietzsche scrive per aforismi invece che per sistemi?',
     opzioni:['Perché il sistema è un\'illusione di controllo sulla realtà',
              'Perché non aveva tempo di scrivere opere lunghe',
              'Perché voleva rivolgersi a lettori senza istruzione',
              'Perché l\'aforisma è la forma usata dai greci antichi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa scopre Nietzsche dietro la «serena armonia» della Grecia classica?',
     opzioni:['Un campo di battaglia fra due impulsi opposti',
              'Una società pacifica basata sul commercio',
              'Una religione severa che vietava le arti',
              'Un popolo poco interessato alla bellezza'], giusta:0},

    {tipo:'scelta', testo:'Quali arti Nietzsche associa al dionisiaco?',
     opzioni:['La musica, la danza e la lirica',
              'La scultura, l\'architettura e la poesia epica',
              'La pittura, il mosaico e il ritratto',
              'Il teatro comico e la commedia popolare'], giusta:0},

    {tipo:'scelta', testo:'Secondo Nietzsche, di che cosa muore la tragedia greca?',
     opzioni:['Di suicidio: la uccide il razionalismo che nasce dentro di essa',
              'Di assassinio: la sopprimono i tiranni al potere',
              'Di vecchiaia: il pubblico si stanca di andarci',
              'Di povertà: le città non riescono più a finanziarla'], giusta:0},

    {tipo:'scelta', testo:'Che cosa introduce Socrate, per Nietzsche, nella cultura greca?',
     opzioni:['L\'uomo teoretico, convinto che la vita vada capita per essere vissuta',
              'L\'uomo religioso, che si affida agli oracoli della città',
              'L\'uomo politico, che discute le leggi in assemblea',
              'L\'uomo tragico, che accetta il proprio destino'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa la storia «monumentale», e qual è il suo pericolo?',
     opzioni:['Cerca modelli nel passato, e rischia il fanatismo del mito',
              'Conserva le radici, e rischia di mummificare il presente',
              'Giudica il passato, e rischia di dimenticare da dove veniamo',
              'Racconta i fatti in ordine, e rischia di annoiare chi legge'], giusta:0},

    {tipo:'scelta', testo:'Qual è il pericolo della storia «antiquaria»?',
     opzioni:['Venerare le radici fino a non riuscire più a creare nulla',
              'Cercare eroi nel passato fino a idolatrarli',
              'Condannare il passato dimenticando che ne siamo figli',
              'Ridurre la storia a una raccolta di date da imparare'], giusta:0},

    {tipo:'scelta', testo:'Perché Nietzsche non è il filosofo del nazismo, come si è a lungo creduto?',
     opzioni:['La sorella manipolò i suoi scritti inediti dopo la sua morte',
              'Non scrisse mai nulla sulla politica del suo tempo',
              'Le sue opere furono pubblicate solo nel dopoguerra',
              'Il regime lo mise all\'indice fra gli autori proibiti'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire quando la storia diventa un peso.'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 9 — Nietzsche: Zarathustra e l\'eterno ritorno',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: se un demone ti dicesse che rivivrai questa giornata infinite volte, che faccia faresti?'},

    {tipo:'scelta', testo:'Che differenza c\'è fra il tempo lineare e il tempo ciclico di Nietzsche?',
     opzioni:['Nel primo il presente vale come mezzo, nel secondo vale per sé',
              'Nel primo il tempo scorre, nel secondo resta fermo',
              'Nel primo il tempo è misurabile, nel secondo no',
              'Nel primo esiste il futuro, nel secondo solo il passato'], giusta:0},

    {tipo:'scelta', testo:'Come reagisce l\'uomo debole davanti all\'eterno ritorno?',
     opzioni:['Con terrore: dovrebbe rivivere tutto, anche il dolore',
              'Con indifferenza: non gli interessa il proprio passato',
              'Con speranza: pensa che la prossima volta andrà meglio',
              'Con curiosità: vuole sapere come finirà la storia'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma la «favola del mondo vero» smascherata da Nietzsche?',
     opzioni:['Che esiste un mondo perfetto altrove, per cui questo vale meno',
              'Che il mondo che vediamo è l\'unico esistente',
              'Che il mondo è nato da un caso senza ordine',
              'Che il mondo si ripete identico all\'infinito'], giusta:0},

    {tipo:'scelta', testo:'Che cosa succede all\'idea di «mondo apparente» quando cade quella di «mondo vero»?',
     opzioni:['Cade anch\'essa: resta solo la terra, con piena dignità',
              'Diventa l\'unico mondo vero al posto dell\'altro',
              'Resta in piedi, ma senza più nessun valore',
              'Si trasforma in un terzo mondo, intermedio'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue la morale dei signori da quella degli schiavi?',
     opzioni:['La prima afferma la forza, la seconda fa virtù della debolezza',
              'La prima obbedisce alle leggi, la seconda le infrange',
              'La prima riguarda i ricchi, la seconda i poveri',
              'La prima è antica, la seconda è nata nell\'Ottocento'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la volontà di potenza, se non è dominio sugli altri?',
     opzioni:['L\'energia con cui la vita supera sé stessa e si crea',
              'L\'istinto di conservare la propria forma e sopravvivere',
              'Il desiderio di comandare gli uomini più deboli',
              'La forza con cui la ragione tiene a freno gli istinti'], giusta:0},

    {tipo:'scelta', testo:'In che senso il nichilismo può essere «attivo»?',
     opzioni:['Accelera il crollo delle vecchie credenze per fare spazio',
              'Rinuncia a ogni valore e si ritira dal mondo',
              'Sostituisce i vecchi idoli con idoli nuovi',
              'Nega che i valori siano mai esistiti davvero'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma il prospettivismo di Nietzsche?',
     opzioni:['Non esistono fatti, ma solo interpretazioni',
              'Ogni interpretazione vale quanto le altre, quindi nessuna conta',
              'Solo la scienza offre un punto di vista affidabile',
              'La verità esiste ma è riservata a pochi'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa vuol dire dire di sì alla propria vita.'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 10 — Freud e la psicoanalisi',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: ti è mai sfuggita una parola che non volevi dire?'},

    {tipo:'scelta', testo:'Quali sono i tre livelli della prima topica freudiana?',
     opzioni:['Conscio, preconscio e inconscio',
              'Es, Io e Super-io',
              'Sensazione, memoria e ragione',
              'Piacere, realtà e dovere'], giusta:0},

    {tipo:'scelta', testo:'Che differenza c\'è fra preconscio e inconscio?',
     opzioni:['Il preconscio si richiama con attenzione, l\'inconscio è sbarrato',
              'Il preconscio riguarda i sogni, l\'inconscio la veglia',
              'Il preconscio è personale, l\'inconscio è collettivo',
              'Il preconscio nasce da adulti, l\'inconscio da bambini'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la rimozione?',
     opzioni:['La forza che tiene fuori dalla coscienza ciò che è intollerabile',
              'La cancellazione definitiva di un ricordo doloroso',
              'La sostituzione di un desiderio con un altro più accettabile',
              'Il ritorno improvviso di un ricordo dimenticato'], giusta:0},

    {tipo:'scelta', testo:'Come funziona il metodo delle libere associazioni?',
     opzioni:['Il paziente segue il corso dei pensieri senza controllarli',
              'L\'analista suggerisce parole e il paziente risponde',
              'Il paziente racconta la propria vita in ordine cronologico',
              'L\'analista interpreta i gesti invece delle parole'], giusta:0},

    {tipo:'scelta', testo:'Che rapporto c\'è fra contenuto latente e contenuto manifesto di un sogno?',
     opzioni:['Il latente è il desiderio, il manifesto la scena che ricordiamo',
              'Il latente è ciò che ricordiamo, il manifesto ciò che dimentichiamo',
              'Il latente riguarda il passato, il manifesto il futuro',
              'Il latente è comune a tutti, il manifesto è personale'], giusta:0},

    {tipo:'scelta', testo:'Quali sono, in ordine, le fasi della libido infantile?',
     opzioni:['Orale, anale, fallica, latenza, genitale',
              'Anale, orale, genitale, fallica, latenza',
              'Orale, fallica, anale, genitale, latenza',
              'Latenza, orale, anale, fallica, genitale'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la sublimazione?',
     opzioni:['L\'energia sessuale deviata verso mete come l\'arte o il lavoro',
              'La rinuncia definitiva a ogni forma di desiderio',
              'Il ritorno a una fase precedente dello sviluppo',
              'Il passaggio di un ricordo dall\'inconscio al conscio'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa Adler si stacca da Freud?',
     opzioni:['Mette al centro la volontà di potenza, non la libido',
              'Nega che esista un inconscio nella mente umana',
              'Ritiene che i sogni non abbiano alcun significato',
              'Sostiene che le nevrosi siano di origine ereditaria'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa scopre chi si mette ad ascoltare i propri sogni.'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 12 — Heidegger e l\'ermeneutica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: quante cose fai in un giorno perché «si fa così»?'},

    {tipo:'scelta', testo:'Qual è la domanda da cui parte Heidegger?',
     opzioni:['Che cosa significa «essere»',
              'Che cosa possiamo conoscere con certezza',
              'Come si deve vivere per essere felici',
              'Se Dio esista o non esista'], giusta:0},

    {tipo:'scelta', testo:'Perché Heidegger sceglie l\'uomo come punto di partenza?',
     opzioni:['È l\'unico ente che si pone la domanda sul proprio essere',
              'È l\'ente più complesso che esista in natura',
              'È l\'unico ente capace di parlare una lingua',
              'È l\'ente che si trova al centro del creato'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire che l\'essenza dell\'Esserci è la sua esistenza?',
     opzioni:['Non è una cosa data, ma un continuo stare fuori nel possibile',
              'L\'uomo esiste prima di avere una natura biologica',
              'L\'esistenza si dimostra prima di ogni altra cosa',
              'L\'uomo è definito dal luogo e dal tempo in cui vive'], giusta:0},

    {tipo:'scelta', testo:'Quali sono i tre sintomi della vita inautentica?',
     opzioni:['Chiacchiera, curiosità, equivoco',
              'Angoscia, noia, disperazione',
              'Paura, fuga, dimenticanza',
              'Abitudine, pigrizia, indifferenza'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la «deiezione»?',
     opzioni:['La caduta dell\'uomo nell\'assorbimento superficiale delle cose',
              'Il rifiuto della società e il ritiro in solitudine',
              'La perdita della memoria del proprio passato',
              'La condanna morale che gli altri pronunciano su di noi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire «essere-per-la-morte»?',
     opzioni:['Assumere la morte come possibilità propria e insuperabile',
              'Vivere ossessionati dal pensiero di dover morire',
              'Rinunciare a ogni progetto perché tanto si muore',
              'Cercare di ritardare la morte con ogni mezzo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa apre la «decisione anticipatrice»?',
     opzioni:['Una libertà appassionata, che nasce dall\'accettare la finitudine',
              'La certezza di quanto tempo ci resta da vivere',
              'La possibilità di scegliere il momento della propria fine',
              'Il distacco da ogni cosa e da ogni persona'], giusta:0},

    {tipo:'scelta', testo:'Che cosa mette al centro Heidegger analizzando la temporalità?',
     opzioni:['Il futuro: l\'uomo è anzitutto progetto',
              'Il passato: l\'uomo è anzitutto memoria',
              'Il presente: l\'uomo è anzitutto percezione',
              'L\'eternità: l\'uomo è anzitutto desiderio di durare'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa rende una vita «tua».'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 13 — Jaspers e Sartre: la filosofia dell\'esistenza',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: c\'è qualcosa che nessuna scienza potrà mai spiegarti di te?'},

    {tipo:'scelta', testo:'Che cosa può e che cosa non può fare la scienza, secondo Jaspers?',
     opzioni:['Orienta nel mondo, ma non coglie l\'essere di chi esiste',
              'Spiega la natura, ma non riesce a prevederne i fenomeni',
              'Descrive i fatti, ma non sa metterli in ordine',
              'Studia il passato, ma non può dire nulla del futuro'], giusta:0},

    {tipo:'scelta', testo:'Perché le situazioni-limite si chiamano così?',
     opzioni:['Sono muri che non si possono né evitare né superare',
              'Sono situazioni rare che capitano a pochissimi',
              'Sono i limiti che la legge impone alla libertà',
              'Sono i confini oltre i quali la scienza non indaga'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rivela il naufragio, per Jaspers?',
     opzioni:['Il fallimento di ogni pretesa di dominare l\'essere',
              'Che l\'uomo non ha mai avuto alcuna libertà',
              'Che la scienza è l\'unica via che resta',
              'Che ogni scelta si equivale, quindi tanto vale non scegliere'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'essere in-sé per Sartre?',
     opzioni:['L\'essere pieno e opaco delle cose, che è semplicemente quello che è',
              'L\'essere della coscienza, che sfugge a ogni definizione',
              'L\'essere di Dio, che fonda tutti gli altri',
              'L\'essere che l\'uomo raggiunge quando si realizza'], giusta:0},

    {tipo:'scelta', testo:'Perché Sartre dice che nell\'uomo c\'è un «nulla»?',
     opzioni:['Perché la coscienza è mancanza, e per questo è libera',
              'Perché l\'uomo non conta nulla nell\'universo',
              'Perché dopo la morte non resta nulla di noi',
              'Perché senza Dio la vita non ha nessun valore'], giusta:0},

    {tipo:'scelta', testo:'Che cosa segue, per Sartre, dal fatto che non esiste una natura umana?',
     opzioni:['L\'uomo è condannato a inventarsi, senza scuse e senza alibi',
              'L\'uomo può comportarsi come vuole senza conseguenze',
              'Ogni uomo è determinato dall\'ambiente in cui cresce',
              'Nessuno può essere giudicato per ciò che fa'], giusta:0},

    {tipo:'scelta', testo:'Perché Sartre dice che scegliendo per sé si sceglie per tutti?',
     opzioni:['Ogni scelta propone un\'immagine di come dovrebbe essere l\'uomo',
              'Perché le nostre azioni influenzano chi ci sta vicino',
              'Perché la legge nasce dal comportamento della maggioranza',
              'Perché siamo tutti membri di una stessa società'], giusta:0},

    {tipo:'scelta', testo:'Perché per Sartre il conflitto con gli altri non si risolve?',
     opzioni:['Ognuno vorrebbe la solidità dell\'in-sé senza perdere la libertà',
              'Perché gli uomini vogliono tutti le stesse cose materiali',
              'Perché nessuno riesce davvero a comunicare con nessuno',
              'Perché le società sono organizzate in modo ingiusto'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa vuol dire essere responsabili di sé.'}
  ]
}
,
{
  titolo: 'Filosofia moderna · 7 — Francesco Bacone',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: quando dici «lo so», da dove viene quello che sai?'},

    {tipo:'scelta', testo:'Quali sono i due movimenti che «sapere è potere» tiene insieme?',
     opzioni:['Conoscere le leggi della natura e servirsene a vantaggio dell\'uomo',
              'Studiare i testi antichi e insegnarli alle nuove generazioni',
              'Osservare i fatti e classificarli in ordine alfabetico',
              'Scoprire le cause e tenerle segrete ai concorrenti'], giusta:0},

    {tipo:'scelta', testo:'A che cosa serve la pars destruens del metodo baconiano?',
     opzioni:['A sgombrare la mente dai pregiudizi prima di costruire',
              'A demolire le opere degli scienziati rivali',
              'A separare le scienze utili da quelle inutili',
              'A distruggere gli strumenti di misura imprecisi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono gli idoli, in generale?',
     opzioni:['Falsi pregiudizi che alterano la nostra percezione della realtà',
              'Immagini sacre che la scienza deve rispettare',
              'Modelli di ragionamento che ogni ricerca deve seguire',
              'Le cause ultime che stanno dietro ai fenomeni'], giusta:0},

    {tipo:'scelta', testo:'Da dove nascono gli «idoli del foro»?',
     opzioni:['Dal linguaggio e dai suoi usi ingannevoli fra le persone',
              'Dal carattere e dall\'educazione del singolo studioso',
              'Dai sistemi filosofici tramandati come dogmi',
              'Dalla struttura stessa della mente umana'], giusta:0},

    {tipo:'scelta', testo:'Che cosa registra la tavola della presenza?',
     opzioni:['Tutti i casi in cui il fenomeno studiato si manifesta',
              'I casi in cui il fenomeno non si presenta',
              'I casi in cui il fenomeno varia di intensità',
              'Gli esperimenti riusciti e quelli falliti'], giusta:0},

    {tipo:'scelta', testo:'Che cosa registra la tavola dell\'assenza?',
     opzioni:['I casi simili a quelli di presenza in cui però il fenomeno manca',
              'Gli errori commessi durante gli esperimenti',
              'I fenomeni che non si riescono a osservare',
              'Le teorie del passato che sono state abbandonate'], giusta:0},

    {tipo:'scelta', testo:'Che cosa aggiunge la tavola dei gradi?',
     opzioni:['I casi in cui il fenomeno cresce o diminuisce di intensità',
              'La classificazione dei fenomeni dal più al meno importante',
              'La misura esatta di ogni singolo esperimento',
              'L\'ordine in cui gli esperimenti vanno eseguiti'], giusta:0},

    {tipo:'scelta', testo:'Perché per Bacone l\'esperienza va organizzata e non solo raccolta?',
     opzioni:['Perché solo così rivela gli schemi che collegano i fenomeni',
              'Perché altrimenti si perdono i dati raccolti nel tempo',
              'Perché il metodo antico prescriveva già questo ordine',
              'Perché gli esperimenti costano e vanno programmati'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire quale pregiudizio ti sembra il più difficile da togliersi.'}
  ]
},
{
  titolo: 'Filosofia moderna · 8 — Galileo Galilei',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa faresti se un tuo esperimento smentisse quello che tutti danno per certo?'},

    {tipo:'scelta', testo:'Perché il cannocchiale non è solo uno strumento in più?',
     opzioni:['Diventa un prolungamento dell\'intelletto: cambia che cosa si può sapere',
              'Permette di vedere più lontano risparmiando fatica',
              'Serve a controllare i calcoli fatti con la matematica',
              'Consente di misurare le distanze con esattezza'], giusta:0},

    {tipo:'scelta', testo:'Che cosa mostrano le montagne lunari osservate col cannocchiale?',
     opzioni:['Che i cieli non sono incorruttibili e perfetti come si credeva',
              'Che la Luna gira intorno alla Terra e non intorno al Sole',
              'Che la Luna è abitata da esseri viventi',
              'Che la Luna è più piccola di quanto si pensasse'], giusta:0},

    {tipo:'scelta', testo:'Quali sono i due pilastri del metodo galileiano?',
     opzioni:['Sensate esperienze e necessarie dimostrazioni',
              'Osservazione e classificazione dei fenomeni',
              'Autorità degli antichi e verifica sperimentale',
              'Induzione dai casi e deduzione dalle cause'], giusta:0},

    {tipo:'scelta', testo:'Che funzione hanno le «necessarie dimostrazioni»?',
     opzioni:['Permettono di dedurre il comportamento dei fenomeni da pochi dati',
              'Servono a convincere gli avversari con l\'eloquenza',
              'Forniscono i dati di partenza della ricerca',
              'Dimostrano che l\'esperienza dei sensi è inaffidabile'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rivendica Galilei per il ricercatore?',
     opzioni:['La piena autonomia rispetto ai dogmi che vengono da fuori',
              'Il diritto di essere pagato dallo Stato per la sua ricerca',
              'Il potere di decidere che cosa la Chiesa debba insegnare',
              'La libertà di pubblicare senza mai citare le fonti'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire che la legge di natura è «una formula matematica validata dall\'esperimento»?',
     opzioni:['Va scritta in linguaggio matematico e poi messa alla prova',
              'Va ricavata dai testi degli antichi e poi calcolata',
              'Vale solo se tutti gli studiosi la accettano',
              'Deve valere per il cielo ma non per la Terra'], giusta:0},

    {tipo:'scelta', testo:'Come finisce lo scontro fra l\'evidenza di Galilei e i dogmi consolidati?',
     opzioni:['Con la condanna e il ritiro forzato',
              'Con l\'accettazione immediata delle sue tesi',
              'Con l\'esilio volontario in un altro paese',
              'Con un accordo che gli permette di insegnare'], giusta:0},

    {tipo:'scelta', testo:'Che cosa lascia in eredità Galilei, secondo le sue stesse conquiste?',
     opzioni:['Una scienza che nasce dall\'incontro fra esperienza e matematica',
              'Un elenco completo di tutti i corpi celesti conosciuti',
              'Un metodo valido soltanto per l\'astronomia',
              'La prova definitiva che la Bibbia è in errore'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa serve per cambiare idea a qualcuno.'}
  ]
},
{
  titolo: 'Filosofia moderna · 10 — Spinoza',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: quando ti arrabbi, sai davvero perché?'},

    {tipo:'scelta', testo:'Che cosa vuol dire che Spinoza è monista?',
     opzioni:['Esiste una sola sostanza: non c\'è un creatore separato dal creato',
              'Esiste un solo mondo, ma creato da un Dio esterno',
              'Esiste una sola verità, che la ragione può raggiungere',
              'Esiste un solo metodo valido per ogni scienza'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire che la sostanza è «increata»?',
     opzioni:['Non è stata prodotta da nulla: è causa di sé stessa',
              'Non ha ancora ricevuto una forma definita',
              'Non può essere conosciuta dall\'intelletto umano',
              'Non produce nulla al di fuori di sé'], giusta:0},

    {tipo:'scelta', testo:'In che senso l\'uomo obbedisce «alle stesse leggi della geometria»?',
     opzioni:['Passioni e comportamenti seguono regole necessarie come le figure',
              'Il corpo umano ha proporzioni geometriche perfette',
              'L\'uomo può essere descritto solo con formule matematiche',
              'La geometria è la disciplina che l\'uomo apprende per prima'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il conatus, nella formula di Spinoza?',
     opzioni:['Lo sforzo di ogni individuo a perseverare nel proprio essere',
              'Il desiderio di superare gli altri e imporsi su di loro',
              'La tensione verso un fine posto fuori di noi',
              'Lo sforzo dell\'intelletto per liberarsi dal corpo'], giusta:0},

    {tipo:'scelta', testo:'Perché Spinoza dice che l\'uomo non è «un dominio dentro un altro dominio»?',
     opzioni:['Perché non fa eccezione: è dentro l\'ordine naturale come tutto il resto',
              'Perché non può governare uno Stato indipendente',
              'Perché il suo corpo non gli appartiene davvero',
              'Perché dipende sempre dalla volontà di altri uomini'], giusta:0},

    {tipo:'scelta', testo:'Che rapporto ha la libertà con la necessità, in Spinoza?',
     opzioni:['Si è liberi capendo la necessità, non sottraendosi ad essa',
              'Si è liberi solo quando si sfugge a ogni necessità',
              'Libertà e necessità sono due nomi della stessa cosa',
              'La libertà appartiene a Dio, la necessità agli uomini'], giusta:0},

    {tipo:'scelta', testo:'Che cosa succede a una passione quando la comprendiamo?',
     opzioni:['Smette di subirci e diventa un\'idea adeguata',
              'Scompare del tutto dalla nostra vita',
              'Si trasforma nel suo contrario',
              'Diventa più forte, perché le prestiamo attenzione'], giusta:0},

    {tipo:'scelta', testo:'Perché la formula «Deus sive Natura» era scandalosa?',
     opzioni:['Toglieva a Dio la figura di persona che crea e giudica',
              'Negava che la natura seguisse leggi regolari',
              'Affermava che Dio fosse nato insieme al mondo',
              'Sosteneva che la natura fosse governata dal caso'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa cambia quando capisci il perché di un\'emozione.'}
  ]
},
{
  titolo: 'Filosofia moderna · 11 — Leibniz',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: due cose possono essere identiche in tutto e restare due?'},

    {tipo:'scelta', testo:'Che cosa oppone Leibniz all\'unità monistica di Spinoza?',
     opzioni:['Una pluralità infinita di sostanze individuali',
              'Un\'unica sostanza divisa in parti uguali',
              'Due sostanze, il pensiero e l\'estensione',
              'Un numero finito di sostanze materiali'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma il principio degli indiscernibili?',
     opzioni:['Non esistono in natura due sostanze perfettamente identiche',
              'Non possiamo distinguere due cose senza osservarle',
              'Le differenze fra le cose sono solo apparenti',
              'Due cose identiche occupano lo stesso luogo'], giusta:0},

    {tipo:'scelta', testo:'Qual è l\'attività di base comune a tutte le monadi?',
     opzioni:['La percezione: rappresentare l\'universo dal proprio punto di vista',
              'Il movimento nello spazio secondo le leggi della meccanica',
              'Il pensiero cosciente, riflesso e consapevole di sé',
              'La capacità di unirsi ad altre monadi per formare corpi'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'appetizione?',
     opzioni:['La spinta interna che porta la monade da una percezione all\'altra',
              'Il desiderio di unirsi al corpo che la ospita',
              'L\'attrazione che una monade esercita su un\'altra',
              'La tendenza a tornare nello stato originario'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue le monadi superiori?',
     opzioni:['L\'appercezione, cioè la consapevolezza di percepire',
              'La capacità di muovere i corpi materiali',
              'La possibilità di comunicare fra loro',
              'Il fatto di essere state create per prime'], giusta:0},

    {tipo:'scelta', testo:'Se le monadi non comunicano, come si spiega l\'accordo fra mente e corpo?',
     opzioni:['Con un\'armonia stabilita in origine, che coordina tutti gli eventi',
              'Con un intervento continuo di Dio caso per caso',
              'Con un flusso di informazioni che passa fra le monadi',
              'Con l\'azione meccanica del corpo sulla mente'], giusta:0},

    {tipo:'scelta', testo:'Che rapporto c\'è fra ogni monade e l\'universo intero?',
     opzioni:['Ogni monade, pur chiusa, rispecchia l\'intero cosmo',
              'Ogni monade contiene una parte diversa del cosmo',
              'Ogni monade ignora tutto ciò che sta fuori di sé',
              'Ogni monade riceve dall\'universo ciò che le serve'], giusta:0},

    {tipo:'scelta', testo:'Perché la matematica infinitesimale interessa Leibniz anche come filosofo?',
     opzioni:['Perché rispecchia una natura divisibile all\'infinito',
              'Perché permette di calcolare la posizione delle monadi',
              'Perché dimostra che il mondo è finito',
              'Perché serve a misurare la perfezione di Dio'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire come possono accordarsi cose che non si parlano.'}
  ]
},
{
  titolo: 'Filosofia moderna · 12 — Hobbes',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: se sparissero tutte le regole per una settimana, che cosa succederebbe?'},

    {tipo:'scelta', testo:'Come descrive Hobbes il ragionamento?',
     opzioni:['Un calcolo: si sommano parole in affermazioni e affermazioni in prove',
              'Un\'intuizione immediata delle verità evidenti',
              'Un dialogo interiore fra l\'anima e sé stessa',
              'Un ricordo ordinato delle esperienze passate'], giusta:0},

    {tipo:'scelta', testo:'Come divide Hobbes la filosofia?',
     opzioni:['Filosofia naturale per i corpi naturali, civile per quelli artificiali',
              'Filosofia teorica per le idee, pratica per le azioni umane',
              'Filosofia antica, filosofia medievale e filosofia moderna',
              'Filosofia della mente e filosofia del corpo, tenute separate'], giusta:0},

    {tipo:'scelta', testo:'Perché per Hobbes non esiste un sommo bene?',
     opzioni:['Perché il desiderio non cessa mai: chi non desidera più non vive',
              'Perché ogni uomo desidera una cosa diversa',
              'Perché il bene dipende dalle leggi dello Stato',
              'Perché nessuno riesce a ottenere ciò che desidera'], giusta:0},

    {tipo:'scelta', testo:'Che cosa dice il determinismo di Hobbes sulle azioni umane?',
     opzioni:['Sono determinate meccanicamente da cause precedenti',
              'Sono libere ma limitate dalle leggi civili',
              'Dipendono dall\'anima, non dal corpo',
              'Sono imprevedibili anche per chi le compie'], giusta:0},

    {tipo:'scelta', testo:'Perché nello stato di natura non esiste il giusto né l\'ingiusto?',
     opzioni:['Manca una legge comune: c\'è solo la sopravvivenza immediata',
              'Perché tutti si comportano nello stesso modo',
              'Perché nessuno ha ancora inventato il linguaggio',
              'Perché gli uomini vivono isolati e non si incontrano'], giusta:0},

    {tipo:'scelta', testo:'Come descrive Hobbes la vita nello stato di natura?',
     opzioni:['Solitaria, misera, ostile, animalesca e breve',
              'Semplice, povera ma tutto sommato tranquilla',
              'Libera e felice, prima della corruzione sociale',
              'Ordinata da leggi non scritte che tutti rispettano'], giusta:0},

    {tipo:'scelta', testo:'Perché il patto sociale, per Hobbes, moltiplica la potenza?',
     opzioni:['L\'unione di molte forze produce più sicurezza della somma delle singole',
              'Perché ogni cittadino diventa più forte fisicamente',
              'Perché il sovrano distribuisce ricchezza a tutti',
              'Perché le leggi permettono di conquistare altri territori'], giusta:0},

    {tipo:'scelta', testo:'Che metodo assegna Hobbes alla filosofia civile?',
     opzioni:['La deduzione: dalle cause agli effetti necessari',
              'L\'induzione: dagli effetti alle cause probabili',
              'L\'esperimento ripetuto in condizioni controllate',
              'Il confronto con le costituzioni degli antichi'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa si cede accettando le regole.'}
  ]
},
{
  titolo: 'Filosofia moderna · 13 — Locke',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa ti rende la stessa persona che eri a sei anni?'},

    {tipo:'scelta', testo:'Su che cosa si dividono Cartesio e Locke sull\'origine delle idee?',
     opzioni:['Per Cartesio alcune sono innate, per Locke tutte vengono dall\'esperienza',
              'Per Cartesio vengono dai sensi, per Locke dalla ragione',
              'Per Cartesio le idee sono false, per Locke sono vere',
              'Per Cartesio sono infinite, per Locke sono in numero fisso'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire che la mente è una «tabula rasa»?',
     opzioni:['Nasce come un foglio bianco, priva di ogni carattere',
              'Nasce già ordinata, ma senza contenuti',
              'Cancella periodicamente ciò che ha appreso',
              'Non può conservare a lungo quello che riceve'], giusta:0},

    {tipo:'scelta', testo:'Che cosa può e che cosa non può fare la mente con le idee semplici?',
     opzioni:['Può combinarle e confrontarle, ma non inventarle né distruggerle',
              'Può inventarle, ma non può conservarle',
              'Può cancellarle, ma non può modificarle',
              'Può solo riceverle, senza mai elaborarle'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono i «modi», fra le idee complesse?',
     opzioni:['Idee che non sussistono da sole, come la gratitudine o il numero',
              'Idee che rappresentano cose esistenti per sé, come un uomo',
              'Idee che collegano due cose fra loro, come la causa',
              'Idee che derivano direttamente dai sensi'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è, per Locke, il criterio di verità?',
     opzioni:['La verifica empirica, insieme alla riflessione interna',
              'L\'evidenza razionale delle idee chiare e distinte',
              'L\'accordo fra gli uomini di scienza',
              'La conformità alla tradizione ricevuta'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa si fonda, per Locke, l\'identità della persona?',
     opzioni:['Sulla coscienza che accompagna gli stati interni nel tempo',
              'Su una sostanza spirituale invisibile e permanente',
              'Sulla continuità del corpo dalla nascita alla morte',
              'Sul nome e sul ruolo riconosciuti dalla società'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia nel passaggio dallo stato di natura allo Stato liberale?',
     opzioni:['I diritti restano gli stessi, ma diventano garantiti giuridicamente',
              'I diritti naturali vengono ceduti interamente al sovrano',
              'Nascono diritti che prima non esistevano affatto',
              'Il sovrano acquista il potere di sospendere i diritti'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa si fonda l\'autorità del sovrano per Locke?',
     opzioni:['Sul consenso esplicito dei cittadini, non sul diritto divino',
              'Sulla forza militare di cui dispone',
              'Sull\'eredità ricevuta dai propri antenati',
              'Sulla superiore capacità di giudizio del re'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa deve fare uno Stato che rispetta i suoi cittadini.'}
  ]
}
];
