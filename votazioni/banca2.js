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
,
{
  titolo: 'Filosofia moderna · 17 — I caratteri dell\'Illuminismo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: c\'è qualcosa che accetti solo perché te l\'hanno sempre detto?'},

    {tipo:'scelta', testo:'Quali sono le tre premesse storiche dell\'Illuminismo?',
     opzioni:['La civiltà borghese, il Rinascimento e la rivoluzione scientifica',
              'La Riforma, le guerre di religione e l\'assolutismo',
              'Le scoperte geografiche, la stampa e il colonialismo',
              'La peste, la crisi del Trecento e la fine del feudalesimo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa porta la civiltà borghese dentro l\'Illuminismo?',
     opzioni:['Il valore del progresso sociale ed economico',
              'Il rispetto per le gerarchie ereditarie',
              'L\'idea che la ricchezza vada distribuita in parti uguali',
              'La convinzione che il lavoro manuale sia superiore'], giusta:0},

    {tipo:'scelta', testo:'Quali sono i due ruoli che la ragione svolge per gli illuministi?',
     opzioni:['Eversivo verso i pregiudizi e direttivo verso il sapere nuovo',
              'Contemplativo verso Dio e pratico verso la politica',
              'Critico verso la scienza e fiducioso verso la tradizione',
              'Analitico nei calcoli e intuitivo nelle scelte morali'], giusta:0},

    {tipo:'scelta', testo:'In che senso la ragione illuminista è «eversiva»?',
     opzioni:['Smonta pregiudizi, fanatismo e oscurantismo ereditati dal passato',
              'Incita i popoli alla rivolta armata contro i sovrani',
              'Rifiuta ogni forma di sapere organizzato',
              'Nega che si possa raggiungere qualche verità'], giusta:0},

    {tipo:'scelta', testo:'Come si allarga la tolleranza da Locke a Voltaire?',
     opzioni:['Da tolleranza religiosa a tolleranza civile, che include atei e cattolici',
              'Da tolleranza civile a tolleranza soltanto religiosa',
              'Da una tolleranza universale a una riservata ai cristiani',
              'Da una tolleranza teorica a una imposta per legge'], giusta:0},

    {tipo:'scelta', testo:'Che cosa escludeva la tolleranza di Locke?',
     opzioni:['I cattolici e gli atei',
              'I protestanti e gli ebrei',
              'Gli stranieri e i mercanti',
              'I contadini e gli analfabeti'], giusta:0},

    {tipo:'scelta', testo:'Quali sono i tre valori sociali dell\'Illuminismo?',
     opzioni:['Uguaglianza, libertà, tolleranza',
              'Ordine, disciplina, obbedienza',
              'Fede, speranza, carità',
              'Onore, gloria, virtù militare'], giusta:0},

    {tipo:'scelta', testo:'Qual è il fine politico dell\'Illuminismo?',
     opzioni:['Uno Stato laico e di diritto che difenda i diritti naturali',
              'Una monarchia assoluta che garantisca l\'ordine',
              'Una repubblica retta dai soli filosofi',
              'Una federazione di città indipendenti'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire contro che cosa serve, oggi, la ragione.'}
  ]
},
{
  titolo: 'Filosofia moderna · 18 — Rousseau',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: avere più cose ci ha resi più liberi o più dipendenti?'},

    {tipo:'scelta', testo:'Qual è il paradosso del primo Discorso di Rousseau?',
     opzioni:['Le arti e le scienze, che dovevano migliorarci, hanno corrotto i costumi',
              'Le arti e le scienze hanno migliorato l\'uomo più del previsto',
              'Le arti sono utili ma le scienze sono dannose',
              'Il progresso è utile solo per chi lo può pagare'], giusta:0},

    {tipo:'scelta', testo:'Che cosa spinge l\'uomo fuori dallo stato originario?',
     opzioni:['La libertà e la tendenza naturale a perfezionarsi',
              'La scarsità di cibo e il freddo',
              'L\'ordine dato da un capo più forte',
              'La curiosità per le terre lontane'], giusta:0},

    {tipo:'scelta', testo:'Che cosa nasce con la «prima rivoluzione», secondo Rousseau?',
     opzioni:['Le famiglie e le prime tribù, con i primi confronti fra persone',
              'La proprietà privata della terra e la sua divisione',
              'Le prime leggi scritte e i primi tribunali',
              'Il commercio a lunga distanza e la moneta'], giusta:0},

    {tipo:'scelta', testo:'Che cosa provoca la «grande rivoluzione»?',
     opzioni:['L\'agricoltura e la metallurgia, che impongono di dividere la terra',
              'L\'invenzione della scrittura, che crea le classi colte',
              'La nascita delle religioni organizzate',
              'La costruzione delle prime città fortificate'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia nelle opere della maturità rispetto ai Discorsi?',
     opzioni:['Dalla denuncia della corruzione passa a progettare soluzioni concrete',
              'Abbandona la politica per dedicarsi solo alla botanica',
              'Rinnega quanto aveva scritto sulla disuguaglianza',
              'Passa dalla filosofia al romanzo di puro intrattenimento'], giusta:0},

    {tipo:'scelta', testo:'Che conseguenza ha attribuire all\'uomo, e non a Dio, la causa del male sociale?',
     opzioni:['Che l\'uomo stesso ha il potere di porvi rimedio',
              'Che il male è destinato a restare per sempre',
              'Che la religione va abolita del tutto',
              'Che nessuno può essere ritenuto responsabile'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa il maestro nell\'educazione negativa dell\'Emilio?',
     opzioni:['Predispone l\'ambiente invece di imporre nozioni e precetti',
              'Corregge ogni errore dell\'allievo appena si presenta',
              'Insegna prima le regole morali e poi le nozioni',
              'Lascia l\'allievo completamente a sé stesso'], giusta:0},

    {tipo:'scelta', testo:'Come impara l\'allievo, in questo metodo?',
     opzioni:['Subendo le conseguenze naturali delle proprie azioni',
              'Ripetendo a memoria quanto il maestro gli detta',
              'Osservando il comportamento degli adulti in società',
              'Ricevendo premi quando si comporta bene'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa perde chi si abitua a confrontarsi con gli altri.'}
  ]
},
{
  titolo: 'Filosofia moderna · 24 — Il Romanticismo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: hai mai desiderato una cosa che non sapresti nemmeno nominare?'},

    {tipo:'scelta', testo:'Quali vie propongono i romantici per accedere all\'Assoluto?',
     opzioni:['Il sentimento, l\'arte e l\'amore, oltre a una ragione dialettica',
              'Il calcolo matematico e l\'osservazione sperimentale',
              'La rivelazione religiosa e l\'obbedienza alla Chiesa',
              'La tradizione tramandata e il rispetto delle autorità'], giusta:0},

    {tipo:'scelta', testo:'Come vivono i romantici il rapporto con i propri limiti?',
     opzioni:['Come uno Streben: uno sforzo continuo di superarli',
              'La quiete raggiunta dopo aver ottenuto ciò che si voleva',
              'Il rifiuto di ogni impegno nel mondo',
              'La forza con cui la natura si conserva'], giusta:0},

    {tipo:'scelta', testo:'Che cosa nomina la Sehnsucht?',
     opzioni:['Una nostalgia indefinibile per un assoluto che sfugge sempre',
              'Il ricordo preciso della propria terra d\'origine',
              'La tristezza che segue una perdita concreta',
              'Il desiderio di una vita tranquilla e ordinata'], giusta:0},

    {tipo:'scelta', testo:'Che cosa mette a fuoco l\'ironia romantica?',
     opzioni:['La sproporzione fra l\'infinito a cui si aspira e i mezzi finiti',
              'Il ridicolo che si nasconde in ogni cosa seria',
              'L\'incapacità degli altri di capire l\'artista',
              'La distanza fra il passato glorioso e il presente'], giusta:0},

    {tipo:'scelta', testo:'Che cosa caratterizza l\'atteggiamento titanico?',
     opzioni:['Sfidare forze superiori pur sapendo che si perderà',
              'Rinunciare alla lotta quando la sconfitta è certa',
              'Cercare la gloria senza correre rischi reali',
              'Affidarsi al destino senza opporre resistenza'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rifiuta l\'organicismo romantico?',
     opzioni:['Il meccanicismo: la natura non è una macchina di parti isolate',
              'L\'idea che la natura abbia leggi proprie',
              'Lo studio scientifico degli esseri viventi',
              'La convinzione che la natura sia in movimento'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma il panteismo romantico?',
     opzioni:['Il divino coincide con la natura e agisce dinamicamente in essa',
              'Il divino è del tutto separato dal mondo naturale',
              'Il divino esiste solo nella coscienza degli uomini',
              'Il divino si manifesta unicamente nella storia'], giusta:0},

    {tipo:'scelta', testo:'Come guardano i romantici alla storia?',
     opzioni:['Come una concatenazione di eventi complessivamente positiva',
              'Come una successione di fatti senza alcun senso',
              'Come un lento decadere rispetto al mondo antico',
              'Come un ciclo che si ripete sempre uguale'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa si prova a desiderare l\'infinito.'}
  ]
},
{
  titolo: 'Filosofia moderna · 25 — Fichte',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: sei più il risultato di quello che ti succede o di quello che fai?'},

    {tipo:'scelta', testo:'Che differenza c\'è fra l\'Io di Kant e quello di Fichte?',
     opzioni:['In Kant è finito e ordina il conoscere, in Fichte è infinito e crea',
              'In Kant è infinito e creatore, in Fichte è finito e passivo',
              'In Kant è individuale, in Fichte è collettivo',
              'In Kant è materiale, in Fichte è spirituale'], giusta:0},

    {tipo:'scelta', testo:'Che cosa impediva a Kant, secondo Fichte, di arrivare all\'Io infinito?',
     opzioni:['Il limite esterno della cosa in sé',
              'Il rifiuto della matematica come modello',
              'L\'attaccamento alla religione tradizionale',
              'La convinzione che lo spazio fosse reale'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire Tathandlung?',
     opzioni:['L\'Io è insieme l\'azione e il suo prodotto: è ciò che fa',
              'L\'azione morale deve precedere ogni conoscenza',
              'Il pensiero deve tradursi in azione politica',
              'Ogni azione lascia una traccia nella storia'], giusta:0},

    {tipo:'scelta', testo:'Che cosa significa la formula «esse sequitur operari»?',
     opzioni:['L\'essere segue dall\'agire, non il contrario',
              'L\'agire segue dall\'essere che ci è dato',
              'L\'essere e l\'agire sono indipendenti fra loro',
              'Chi agisce bene ottiene un essere migliore'], giusta:0},

    {tipo:'scelta', testo:'Quali sono i due punti di partenza del «grande bivio filosofico»?',
     opzioni:['Il soggetto per l\'idealismo, l\'oggetto per il dogmatismo',
              'La natura per l\'idealismo, lo spirito per il dogmatismo',
              'Dio per l\'idealismo, la materia per il dogmatismo',
              'La ragione per l\'idealismo, la fede per il dogmatismo'], giusta:0},

    {tipo:'scelta', testo:'A che cosa porta il dogmatismo, secondo Fichte?',
     opzioni:['Al fatalismo: l\'Io diventa un prodotto delle forze naturali',
              'Alla libertà assoluta del soggetto',
              'Al dubbio su ogni conoscenza possibile',
              'Alla fede religiosa come unica via'], giusta:0},

    {tipo:'scelta', testo:'Perché scegliere l\'idealismo non è solo una questione logica?',
     opzioni:['È un atto morale: dipende dal tipo d\'uomo che si è',
              'Perché nessuna delle due posizioni è dimostrabile',
              'Perché la logica non riguarda la filosofia',
              'Perché dipende dall\'epoca in cui si vive'], giusta:0},

    {tipo:'scelta', testo:'Quali sono, in ordine, i gradi con cui il mondo viene interiorizzato?',
     opzioni:['Sensazione, intuizione, intelletto, giudizio, ragione',
              'Ragione, giudizio, intelletto, intuizione, sensazione',
              'Intuizione, sensazione, ragione, intelletto, giudizio',
              'Sensazione, intelletto, intuizione, ragione, giudizio'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire perché due persone scelgono filosofie diverse.'}
  ]
},
{
  titolo: 'Filosofia moderna · 27 — Hegel: i fondamenti del sistema',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: la filosofia deve dire come dovrebbe andare il mondo, o capire come va?'},

    {tipo:'scelta', testo:'Qual è l\'obiettivo che percorre tutta l\'opera giovanile di Hegel?',
     opzioni:['Superare la scissione fra individuo, natura e Dio',
              'Dimostrare l\'esistenza di Dio con argomenti nuovi',
              'Fondare una religione civile per il popolo tedesco',
              'Riportare la filosofia alla forma dei dialoghi antichi'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il finito per Hegel?',
     opzioni:['Una manifestazione parziale e momentanea dell\'infinito',
              'Una realtà indipendente accanto all\'infinito',
              'Un\'illusione che il pensiero deve eliminare',
              'Il solo oggetto di cui possiamo avere conoscenza'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma la formula «ciò che è razionale è reale»?',
     opzioni:['La realtà obbedisce a un\'architettura logica rigorosa',
              'Tutto ciò che esiste è giusto e va accettato',
              'Solo le idee chiare hanno diritto di esistere',
              'La ragione umana crea da sé la realtà'], giusta:0},

    {tipo:'scelta', testo:'Che cosa contrappone Hegel all\'intuizione dei romantici?',
     opzioni:['La fatica del concetto',
              'Il sentimento educato dall\'arte',
              'L\'osservazione empirica dei fatti',
              'La fede nella rivelazione'], giusta:0},

    {tipo:'scelta', testo:'Qual è, per Hegel, l\'unico compito della filosofia?',
     opzioni:['Giustificare razionalmente la realtà che si è già dispiegata',
              'Progettare la società futura nei suoi dettagli',
              'Dettare al mondo come dovrebbe essere',
              'Descrivere i fatti senza interpretarli'], giusta:0},

    {tipo:'scelta', testo:'Che cosa dice la metafora della nottola di Minerva?',
     opzioni:['La filosofia comprende un\'epoca solo quando è ormai compiuta',
              'La filosofia deve precedere e guidare la storia',
              'La sapienza si raggiunge solo in vecchiaia',
              'Il pensiero è più chiaro nelle ore notturne'], giusta:0},

    {tipo:'scelta', testo:'Perché la conciliazione hegeliana non è un semplice ritorno all\'unità?',
     opzioni:['Perché conserva le differenze dentro un\'unità più alta',
              'Perché cancella le differenze fino a farle sparire',
              'Perché lascia le differenze dove sono, senza unirle',
              'Perché rimanda l\'unità a un futuro indefinito'], giusta:0},

    {tipo:'scelta', testo:'Che cosa succede al finito quando lo si pensa da solo?',
     opzioni:['Si rivela contraddittorio e rimanda alla totalità',
              'Si mostra come l\'unica realtà solida',
              'Diventa impossibile da conoscere',
              'Si trasforma automaticamente in infinito'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire quando si capisce davvero un\'epoca.'}
  ]
},
{
  titolo: 'Filosofia moderna · 29 — Hegel: l\'Enciclopedia',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa tiene insieme una famiglia, e che cosa tiene insieme uno Stato?'},

    {tipo:'scelta', testo:'Che cosa rappresenta la natura nel sistema hegeliano?',
     opzioni:['Il momento in cui l\'Idea si aliena e si fa esteriorità',
              'Il punto di arrivo di tutto il percorso dello Spirito',
              'Una realtà indipendente che l\'Idea non tocca',
              'Il primo grado della libertà umana'], giusta:0},

    {tipo:'scelta', testo:'Perché la natura, per Hegel, non possiede libertà?',
     opzioni:['Obbedisce a una necessità gerarchica, senza scelta',
              'Perché è governata dal caso e non da leggi',
              'Perché è priva di ogni forma di ordine',
              'Perché è stata creata da un Dio esterno'], giusta:0},

    {tipo:'scelta', testo:'Quali sono, in ordine, i tre gradi dello spirito soggettivo?',
     opzioni:['Anima, coscienza, spirito',
              'Coscienza, anima, spirito',
              'Spirito, anima, coscienza',
              'Anima, spirito, coscienza'], giusta:0},

    {tipo:'scelta', testo:'Che cosa studia l\'antropologia, primo grado dello spirito soggettivo?',
     opzioni:['L\'anima, cioè l\'emersione dello spirito dalla naturalità',
              'Le società umane nella loro varietà storica',
              'Il rapporto fra la coscienza e il mondo',
              'Le forme più alte della conoscenza universale'], giusta:0},

    {tipo:'scelta', testo:'Qual è la triade dello spirito oggettivo in campo etico?',
     opzioni:['Famiglia, società civile, Stato',
              'Individuo, popolo, umanità',
              'Diritto, morale, religione',
              'Lavoro, proprietà, contratto'], giusta:0},

    {tipo:'scelta', testo:'Perché la società civile è il momento dell\'antitesi?',
     opzioni:['È la sfera del particolarismo e del conflitto di interessi',
              'È il luogo dove i legami affettivi sono più forti',
              'È il momento in cui lo Stato viene abolito',
              'È la fase in cui gli uomini vivono ancora isolati'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa lo Stato etico, per Hegel?',
     opzioni:['Risolve in sé il rapporto fra il singolo e il tutto',
              'Arbitra i conflitti restando neutrale fra le parti',
              'Garantisce che ognuno persegua il proprio interesse',
              'Lascia alla famiglia il compito di educare i cittadini'], giusta:0},

    {tipo:'scelta', testo:'Perché l\'arte simbolica è, per Hegel, inadeguata?',
     opzioni:['La forma sensibile non riesce ancora a contenere il contenuto',
              'Il contenuto è troppo povero per la forma che lo esprime',
              'Non riesce a essere compresa da chi non è iniziato',
              'Appartiene a un\'epoca troppo recente per essere giudicata'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa dovrebbe fare uno Stato che funziona.'}
  ]
}
,
{
  titolo: 'Filosofia antica · 5 — Platone: le Idee, l\'anima, la città',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: quando dici che due cose sono «belle», che cosa hanno in comune?'},

    {tipo:'scelta', testo:'In quante fasi si divide il corpus delle opere di Platone?',
     opzioni:['Tre: dialoghi socratici, maturità, vecchiaia',
              'Due: dialoghi giovanili e dialoghi tardi',
              'Quattro, una per ogni periodo dei suoi viaggi',
              'Una sola: le opere furono scritte tutte insieme'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fondò Platone nel 387 a.C.?',
     opzioni:['L\'Accademia, una scuola dove si cercava il vero insieme',
              'Il Liceo, dove si insegnava passeggiando',
              'Il Giardino, aperto anche alle donne e agli schiavi',
              'La Stoà, dove si insegnava sotto un portico'], giusta:0},

    {tipo:'scelta', testo:'Quali caratteri ha un\'Idea platonica?',
     opzioni:['Eterna, immutabile, semplice e separata dal sensibile',
              'Mutevole, composta e legata al mondo dei sensi',
              'Presente in ogni cosa e inseparabile da essa',
              'Prodotta dalla mente umana quando pensa'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire che le Idee sono «intelligibili»?',
     opzioni:['Si colgono con l\'intelletto e sono inaccessibili ai sensi',
              'Si possono spiegare a chiunque con parole semplici',
              'Sono comprese solo da chi ha studiato molto',
              'Si intuiscono all\'improvviso, senza ragionare'], giusta:0},

    {tipo:'scelta', testo:'Con quali due termini Platone descrive il rapporto fra cose e Idee?',
     opzioni:['Mimesis, cioè imitazione, e methexis, cioè partecipazione',
              'Genesi, cioè nascita, e phthorá, cioè corruzione',
              'Dýnamis, cioè potenza, e enérgheia, cioè atto',
              'Doxa, cioè opinione, ed epistéme, cioè scienza'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rappresentano i due cavalli della biga alata?',
     opzioni:['Il bianco la parte volitiva, il nero le passioni corporee',
              'Il bianco il corpo, il nero l\'anima razionale',
              'Il bianco la vita, il nero la morte',
              'Il bianco la ragione, il nero l\'intelletto'], giusta:0},

    {tipo:'scelta', testo:'Perché il prigioniero liberato deve tornare nella caverna?',
     opzioni:['Per un dovere politico: liberare i compagni, rischiando la vita',
              'Perché non riesce a sopportare a lungo la luce del sole',
              'Perché fuori dalla caverna non c\'è nulla da fare',
              'Perché deve recuperare gli oggetti che aveva lasciato'], giusta:0},

    {tipo:'scelta', testo:'Come sono assegnate le classi sociali nella città ideale?',
     opzioni:['In base alle attitudini naturali, non alla nascita o al censo',
              'In base alla ricchezza posseduta dalla famiglia',
              'Per estrazione a sorte fra tutti i cittadini',
              'Per elezione da parte dell\'assemblea popolare'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa vede chi esce dalla caverna.'}
  ]
},
{
  titolo: 'Filosofia antica · 6 — L\'ultimo Platone',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: se dico una cosa falsa, di che cosa sto parlando?'},

    {tipo:'scelta', testo:'Qual è il problema che il Parmenide solleva contro la teoria delle Idee?',
     opzioni:['Se deve esistere un\'Idea per ogni cosa, ne servono anche di fango e sporcizia',
              'Se le Idee sono eterne, non possono essere conosciute',
              'Se le Idee sono molte, non possono essere semplici',
              'Se le Idee sono perfette, non possono essere pensate'], giusta:0},

    {tipo:'scelta', testo:'Che cosa mostra l\'argomento del «terzo uomo»?',
     opzioni:['La partecipazione genera una catena infinita di Idee intermedie',
              'Che esistono tre generi di uomini nella città',
              'Che l\'uomo non può conoscere sé stesso',
              'Che ogni Idea richiede tre esempi per essere definita'], giusta:0},

    {tipo:'scelta', testo:'Perché il falso era un problema logico, prima della soluzione del Sofista?',
     opzioni:['Se l\'essere fosse solo il reale, dire il falso sarebbe dire il nulla',
              'Perché nessuno riusciva a distinguere il vero dal falso',
              'Perché i sofisti negavano che esistesse la verità',
              'Perché il linguaggio era considerato sempre ingannevole'], giusta:0},

    {tipo:'scelta', testo:'Come Platone risolve il problema nel Sofista?',
     opzioni:['Intende il non-essere come diversità, non come nulla assoluto',
              'Ammette che il falso non esista davvero',
              'Sostiene che ogni discorso è in parte vero',
              'Affida al solo intelletto il compito di giudicare'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è, allora, dire il falso?',
     opzioni:['Dire di una cosa ciò che è altro da ciò che essa è',
              'Pronunciare parole prive di ogni significato',
              'Parlare di cose che non esistono affatto',
              'Contraddirsi nello spazio dello stesso discorso'], giusta:0},

    {tipo:'scelta', testo:'Perché serve un metodo per orientarsi fra le Idee?',
     opzioni:['Perché le Idee comunicano con alcune ma non con tutte le altre',
              'Perché le Idee sono troppo numerose per essere ricordate',
              'Perché le Idee cambiano nel tempo come le cose',
              'Perché ogni Idea è isolata e non comunica con nessuna'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa la diáiresis, passo dopo passo?',
     opzioni:['Divide in due un\'Idea generale finché si arriva alla definizione',
              'Somma le Idee particolari fino a ottenere quella generale',
              'Confronta due Idee opposte per scegliere la migliore',
              'Elimina le Idee che non hanno riscontro nell\'esperienza'], giusta:0},

    {tipo:'scelta', testo:'Quali sono i tre elementi della cosmogonia del Timeo?',
     opzioni:['Le Idee come modello, la chòra come materia, il Demiurgo artefice',
              'Il caos iniziale, l\'ordine raggiunto e il ritorno al caos',
              'Gli atomi indivisibili, il vuoto e il loro movimento',
              'Il fuoco, l\'acqua e la terra mescolati dall\'amore'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire perché un filosofo torna sulle proprie idee.'}
  ]
},
{
  titolo: 'Filosofia antica · 7 — Aristotele: logica e metafisica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che differenza c\'è fra un seme e un albero?'},

    {tipo:'scelta', testo:'Come divide Aristotele l\'universo?',
     opzioni:['Mondo sublunare corruttibile e mondo celeste incorruttibile',
              'Mondo delle Idee e mondo delle cose sensibili',
              'Mondo degli dèi e mondo degli uomini',
              'Mondo pieno e mondo vuoto'], giusta:0},

    {tipo:'scelta', testo:'Di che cosa è fatto il mondo celeste, secondo Aristotele?',
     opzioni:['Di etere, un quinto elemento incorruttibile e senza peso',
              'Degli stessi quattro elementi del mondo terrestre',
              'Di fuoco puro, il più leggero degli elementi',
              'Di atomi indivisibili che si muovono nel vuoto'], giusta:0},

    {tipo:'scelta', testo:'Perché è necessario postulare un primo motore immobile?',
     opzioni:['Per evitare di risalire all\'infinito nella catena delle cause',
              'Perché lo dimostra l\'osservazione diretta del cielo',
              'Perché la religione greca lo prescriveva',
              'Perché senza di esso i pianeti cadrebbero'], giusta:0},

    {tipo:'scelta', testo:'In che modo il primo motore muove l\'universo?',
     opzioni:['Attraendolo come fine ultimo, senza essere mosso',
              'Spingendolo con una forza meccanica costante',
              'Creando ogni giorno il movimento dal nulla',
              'Alternando periodi di quiete e di moto'], giusta:0},

    {tipo:'scelta', testo:'Che cosa pensa il primo motore?',
     opzioni:['Sé stesso: è pensiero di pensiero',
              'Il destino di ogni singolo uomo',
              'L\'ordine complessivo dell\'universo',
              'Nulla: è pura potenza inespressa'], giusta:0},

    {tipo:'scelta', testo:'Quali sono i tre gradi dell\'anima?',
     opzioni:['Nutritiva nelle piante, sensitiva negli animali, intellettiva in noi',
              'Vegetale nelle piante, minerale nelle pietre, razionale nell\'uomo',
              'Concupiscibile, irascibile e razionale, come voleva Platone',
              'Sensibile negli animali, immaginativa nell\'uomo, divina negli dèi'], giusta:0},

    {tipo:'scelta', testo:'A che cosa serve il phantasma?',
     opzioni:['Unifica i dati separati dei cinque sensi in un\'immagine sola',
              'Conserva i ricordi delle vite precedenti',
              'Permette di prevedere il futuro nei sogni',
              'Sostituisce la percezione quando i sensi mancano'], giusta:0},

    {tipo:'scelta', testo:'Che rapporto c\'è fra intelletto attivo e passivo?',
     opzioni:['L\'attivo illumina il fantasma, il passivo ne riceve le forme',
              'Il passivo produce le idee, l\'attivo le conserva',
              'Sono due nomi della stessa facoltà',
              'L\'attivo appartiene all\'uomo, il passivo agli animali'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa distingue ciò che è in atto da ciò che è in potenza.'}
  ]
},
{
  titolo: 'Filosofia antica · 8 — Aristotele: etica e politica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: perché studi? E perché quello che hai risposto?'},

    {tipo:'scelta', testo:'Perché l\'etica di Aristotele si dice «descrittiva»?',
     opzioni:['Analizza il comportamento umano invece di imporre divieti',
              'Descrive le leggi delle varie città greche',
              'Racconta la vita degli uomini virtuosi del passato',
              'Elenca i doveri che ogni cittadino deve rispettare'], giusta:0},

    {tipo:'scelta', testo:'Come si riconosce il bene sommo, fra tutti i fini?',
     opzioni:['È cercato per sé stesso e mai come mezzo per altro',
              'È il fine che richiede più fatica per essere raggiunto',
              'È il fine che tutti raggiungono prima o poi',
              'È il fine indicato dalla legge della città'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la virtù, per Aristotele?',
     opzioni:['Un abito mentale acquisito con l\'esercizio costante',
              'Un singolo atto compiuto nel momento giusto',
              'Una qualità che si riceve alla nascita',
              'Un dono che gli dèi concedono a pochi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa riguardano le virtù etiche?',
     opzioni:['Il carattere: implicano l\'uso della ragione su emozioni e desideri',
              'Il pensiero discorsivo e la ricerca scientifica',
              'Il rapporto con gli dèi e il culto pubblico',
              'La produzione di oggetti utili alla città'], giusta:0},

    {tipo:'scelta', testo:'Qual è la più alta fra le virtù dianoetiche?',
     opzioni:['La sapienza, che unisce scienza e intelletto',
              'La saggezza pratica, che calcola il bene nelle circostanze',
              'L\'arte, che sa produrre oggetti nuovi',
              'La giustizia, che regola i rapporti fra i cittadini'], giusta:0},

    {tipo:'scelta', testo:'Che differenza c\'è fra giustizia distributiva e retributiva?',
     opzioni:['La prima dà a ciascuno secondo il merito, la seconda ripristina l\'equilibrio',
              'La prima riguarda i beni, la seconda le persone',
              'La prima vale in pace, la seconda in guerra',
              'La prima è scritta nelle leggi, la seconda no'], giusta:0},

    {tipo:'scelta', testo:'Perché per Aristotele la pòlis viene prima dell\'individuo?',
     opzioni:['Il tutto precede le parti: l\'individuo ha senso solo dentro la comunità',
              'Perché la città è stata fondata prima che nascessero i cittadini',
              'Perché le leggi valgono più delle persone',
              'Perché la città è più numerosa dei singoli'], giusta:0},

    {tipo:'scelta', testo:'Su quale classe si regge lo Stato misto di Aristotele?',
     opzioni:['La classe media, né troppo ricca né troppo povera',
              'L\'aristocrazia dei più virtuosi',
              'Il popolo riunito in assemblea',
              'I proprietari terrieri più ricchi'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire dove sta il giusto mezzo.'}
  ]
}
,
{
  titolo: 'Filosofia moderna · 1 — La cultura umanistico-rinascimentale',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: tornare indietro a un modello antico è sempre un passo indietro?'},

    {tipo:'scelta', testo:'Quale assetto politico fa da sfondo alla nascita del Rinascimento?',
     opzioni:['I grandi regni nazionali in Europa e gli Stati regionali in Italia',
              'L\'impero universale che riunisce tutta l\'Europa',
              'Le città-Stato indipendenti in tutto il continente',
              'Il ritorno del feudalesimo dopo la peste'], giusta:0},

    {tipo:'scelta', testo:'Quale ceto sociale emerge e sostiene la nuova cultura?',
     opzioni:['La borghesia cittadina, con nuove esigenze culturali e tecniche',
              'La nobiltà feudale di campagna',
              'Il clero regolare degli ordini monastici',
              'I contadini liberi delle nuove terre'], giusta:0},

    {tipo:'scelta', testo:'Che cosa significa il «ritorno al principio» degli umanisti?',
     opzioni:['Non nostalgia, ma ricerca della forza originaria per un nuovo inizio',
              'Il desiderio di ricostruire l\'impero romano',
              'Il rifiuto di ogni novità rispetto agli antichi',
              'Il ritorno alla vita semplice delle origini'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sostiene la «teoria della frattura» nel dibattito storiografico?',
     opzioni:['Il Rinascimento rompe nettamente col Medioevo e apre un\'era nuova',
              'Il Rinascimento è la naturale prosecuzione del tardo Medioevo',
              'Il Rinascimento non è mai davvero esistito come epoca',
              'Il Rinascimento riguarda solo l\'arte, non il pensiero'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sostiene invece la «teoria della continuità»?',
     opzioni:['Il Rinascimento affonda le radici nel tardo Medioevo, senza rotture',
              'Il Rinascimento nasce solo dal contatto con il mondo arabo',
              'Il Rinascimento è un\'invenzione degli storici dell\'Ottocento',
              'Il Rinascimento comincia molto più tardi di quanto si creda'], giusta:0},

    {tipo:'scelta', testo:'Qual è la posizione intermedia, quella dell\'«originalità nella continuità»?',
     opzioni:['Il Rinascimento nasce dal Medioevo ma introduce una trasformazione radicale',
              'Il Rinascimento e il Medioevo sono la stessa cosa con nomi diversi',
              'Il Rinascimento è originale solo in Italia e non altrove',
              'Il Rinascimento è continuo nell\'arte e discontinuo nella politica'], giusta:0},

    {tipo:'scelta', testo:'Come cambia lo sguardo sulla natura?',
     opzioni:['Da «ombra sbiadita» del mondo ideale a ambiente vitale da esplorare',
              'Da luogo di lavoro a luogo di contemplazione religiosa',
              'Da realtà ordinata a spazio governato dal caso',
              'Da creatura di Dio a semplice materia inerte'], giusta:0},

    {tipo:'scelta', testo:'A che cosa apre questa rivalutazione della natura?',
     opzioni:['Alla ricerca delle sue leggi intrinseche, e quindi alla scienza moderna',
              'Al ritorno delle pratiche magiche e astrologiche',
              'All\'abbandono dello studio dei testi antichi',
              'Alla nascita delle prime riserve naturali'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa si guadagna a rileggere gli antichi.'}
  ]
},
{
  titolo: 'Filosofia moderna · 3 — Rinascimento e religione',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: chi ha il diritto di dirti che cosa significa un testo?'},

    {tipo:'scelta', testo:'In che senso il Rinascimento è anche rinnovamento religioso?',
     opzioni:['Il ritorno alle possibilità originarie riguarda pure il rapporto con Dio',
              'Perché nasce una religione nuova, diversa dal cristianesimo',
              'Perché la Chiesa si dissolve nelle Chiese nazionali',
              'Perché la religione viene sostituita dalla filosofia'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cerca il ritorno alle origini in campo religioso?',
     opzioni:['La cristianità primitiva, prima delle sovrastrutture successive',
              'La religione dei filosofi greci prima del cristianesimo',
              'Le pratiche religiose dell\'antico Egitto',
              'Una religione naturale comune a tutti i popoli'], giusta:0},

    {tipo:'scelta', testo:'Che cosa mette al centro l\'umanesimo di Erasmo?',
     opzioni:['Il pacifismo, l\'educazione civile e una fede semplice',
              'La disciplina monastica e il ritiro dal mondo',
              'L\'obbedienza incondizionata all\'autorità della Chiesa',
              'La difesa armata della cristianità contro i turchi'], giusta:0},

    {tipo:'scelta', testo:'Qual è il nodo filosofico centrale della Riforma protestante?',
     opzioni:['La concezione della libertà umana davanti alla salvezza',
              'La struttura gerarchica da dare alle nuove Chiese',
              'La lingua in cui celebrare le funzioni religiose',
              'Il rapporto fra la Chiesa e i principi tedeschi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa ridefinisce la Riforma nel rapporto fra uomo e Dio?',
     opzioni:['Lo rende diretto, senza la mediazione necessaria di un\'istituzione',
              'Lo rende più lontano, affidandolo interamente ai sacerdoti',
              'Lo sostituisce con un rapporto con la comunità civile',
              'Lo riduce all\'osservanza esteriore dei riti'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la Controriforma?',
     opzioni:['La risposta istituzionale della Chiesa cattolica alla Riforma',
              'Un secondo movimento riformatore nato in Francia',
              'La riforma delle università tedesche del Cinquecento',
              'Il ritorno della Chiesa alle sue origini apostoliche'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire che l\'uomo è «artefice del suo destino»?',
     opzioni:['La sua posizione nel mondo non è fissata: se la costruisce',
              'Il suo destino è già stabilito e va solo accettato',
              'Il destino dipende dalla fortuna e non dalle scelte',
              'Ogni uomo nasce con un compito assegnato da Dio'], giusta:0},

    {tipo:'scelta', testo:'Come si collega il rinnovamento spirituale al resto del Rinascimento?',
     opzioni:['Sta in mezzo: dopo l\'uomo al centro, prima delle ricadute pratiche',
              'È un capitolo isolato, senza rapporto con gli altri',
              'Viene per ultimo, come conseguenza della politica',
              'Precede ogni altra cosa e la determina'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa cambia quando ognuno può leggere da sé.'}
  ]
},
{
  titolo: 'Filosofia moderna · 4 — Rinascimento e politica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: per capire la politica conviene guardare com\'è o come dovrebbe essere?'},

    {tipo:'scelta', testo:'Quali sono le due grandi vie della riflessione politica rinascimentale?',
     opzioni:['La prospettiva storicistica e quella giusnaturalistica',
              'La prospettiva religiosa e quella militare',
              'La prospettiva economica e quella giuridica',
              'La prospettiva popolare e quella aristocratica'], giusta:0},

    {tipo:'scelta', testo:'Che cosa propone la prospettiva storicistica?',
     opzioni:['Tornare alle origini storiche di una determinata società',
              'Ricavare le regole dai principi universali della ragione',
              'Progettare una società perfetta partendo da zero',
              'Affidarsi alla tradizione religiosa di ciascun popolo'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa si fonda invece la prospettiva giusnaturalistica?',
     opzioni:['Su regole che derivano dalla natura razionale dell\'uomo, valide ovunque',
              'Sulle leggi effettivamente in vigore in ogni Stato',
              'Sulla volontà del sovrano, che è fonte del diritto',
              'Sui trattati che i popoli hanno stipulato fra loro'], giusta:0},

    {tipo:'scelta', testo:'Quando un\'azione è buona, per il giusnaturalismo?',
     opzioni:['Quando è in accordo con i principi della ragione',
              'Quando produce il maggior vantaggio a chi la compie',
              'Quando è permessa dalla legge dello Stato',
              'Quando è approvata dalla maggioranza dei cittadini'], giusta:0},

    {tipo:'scelta', testo:'Perché il giusnaturalismo «abbandona la contingenza della storia»?',
     opzioni:['Cerca fondamenti universali, validi in ogni tempo e luogo',
              'Ritiene che la storia non si possa conoscere',
              'Considera il passato sempre peggiore del presente',
              'Vuole liberarsi dello studio delle istituzioni antiche'], giusta:0},

    {tipo:'scelta', testo:'Quale via segue Machiavelli, fra le tre?',
     opzioni:['Lo storicismo: analisi disincantata del presente a partire dalla storia',
              'Il giusnaturalismo: regole ricavate dalla ragione universale',
              'L\'utopia: progettazione di una società ideale',
              'Il contrattualismo: fondazione dello Stato su un patto'], giusta:0},

    {tipo:'scelta', testo:'Che cosa caratterizza la terza via, quella utopica?',
     opzioni:['Progetta una società perfetta, con beni comuni e senza proprietà',
              'Descrive lo Stato così come funziona davvero',
              'Ricava le leggi dalla natura razionale dell\'uomo',
              'Ricostruisce la costituzione delle repubbliche antiche'], giusta:0},

    {tipo:'scelta', testo:'Chi è l\'autore che rappresenta la via utopica?',
     opzioni:['Thomas More, con l\'isola di Utopia',
              'Niccolò Machiavelli, con il Principe',
              'Ugo Grozio, con il diritto di guerra e di pace',
              'Jean Bodin, con la teoria della sovranità'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire a che cosa serve immaginare una società perfetta.'}
  ]
},
{
  titolo: 'Filosofia moderna · 19 — Kant: il progetto filosofico',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: sapere fin dove non puoi arrivare è una perdita o un guadagno?'},

    {tipo:'scelta', testo:'Fra quali due mondi culturali si colloca il criticismo kantiano?',
     opzioni:['Fra l\'Illuminismo da cui parte e il Romanticismo che si annuncia',
              'Fra il Rinascimento e la rivoluzione scientifica',
              'Fra la scolastica medievale e l\'empirismo inglese',
              'Fra il positivismo e l\'idealismo tedesco'], giusta:0},

    {tipo:'scelta', testo:'In che senso Kant porta l\'Illuminismo alle sue estreme conseguenze?',
     opzioni:['Applica la critica della ragione alla ragione stessa',
              'Estende la ragione anche alle questioni religiose',
              'Sostituisce la ragione con il sentimento',
              'Riduce la ragione al solo calcolo matematico'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire che il criticismo è una «filosofia del limite»?',
     opzioni:['Traccia i confini di ciò che possiamo conoscere, non dubita di tutto',
              'Sostiene che nulla può essere conosciuto con certezza',
              'Limita la filosofia allo studio della morale',
              'Vieta di occuparsi delle scienze della natura'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sta entro il limite e che cosa sta oltre?',
     opzioni:['Entro il limite la scienza certa, oltre il limite l\'inconoscibile',
              'Entro il limite la fede, oltre il limite la scienza',
              'Entro il limite l\'opinione, oltre il limite la verità',
              'Entro il limite la logica, oltre il limite l\'esperienza'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia con il «trascendentale»?',
     opzioni:['Il fulcro passa dall\'oggetto in sé al soggetto che lo percepisce',
              'Il fulcro passa dal soggetto all\'oggetto conosciuto',
              'Il fulcro passa dalla ragione all\'esperienza sensibile',
              'Il fulcro passa dalla scienza alla metafisica'], giusta:0},

    {tipo:'scelta', testo:'A che cosa è strettamente legato il concetto di «trascendentale»?',
     opzioni:['A quello di forma: riguarda le strutture a priori del conoscere',
              'A quello di materia: riguarda i dati che i sensi ricevono',
              'A quello di fine: riguarda lo scopo della conoscenza',
              'A quello di sostanza: riguarda ciò che permane'], giusta:0},

    {tipo:'scelta', testo:'Quali sono i tre pilastri del sistema kantiano?',
     opzioni:['Critica della ragion pura, della ragion pratica, del Giudizio',
              'Estetica, analitica e dialettica trascendentale del sapere',
              'Logica formale, metafisica generale ed etica dei doveri',
              'Filosofia della conoscenza, dell\'azione e della religione'], giusta:0},

    {tipo:'scelta', testo:'Di che cosa si occupa ciascuna delle tre Critiche?',
     opzioni:['Della conoscenza, della libertà morale e dei fini della natura',
              'Della natura, della storia e della religione',
              'Della logica, della fisica e della politica',
              'Del passato, del presente e del futuro dell\'uomo'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa fa una ragione che giudica sé stessa.'}
  ]
},
{
  titolo: 'Filosofia moderna · 22 — Kant: la Critica del Giudizio',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: quando dici «è bello», stai dicendo qualcosa sull\'oggetto o su di te?'},

    {tipo:'scelta', testo:'Che posto occupa la terza Critica fra le altre due?',
     opzioni:['Fa da ponte fra la conoscenza della natura e la libertà morale',
              'Sostituisce le prime due, che risultano superate',
              'Precede logicamente le altre due e le fonda',
              'Ripete in forma breve il contenuto delle prime due'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa si fonda la Critica del Giudizio?',
     opzioni:['Sul sentimento, non su nuove leggi scientifiche o morali',
              'Su nuove leggi della natura scoperte da Kant',
              'Su nuovi doveri morali che si aggiungono ai precedenti',
              'Sulla rivelazione religiosa e sulla tradizione'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa il giudizio riflettente, a differenza di quello determinante?',
     opzioni:['Parte dal caso particolare e cerca la regola',
              'Parte dalla regola e vi sussume il caso particolare',
              'Giudica senza usare né regole né casi',
              'Applica una regola già stabilita da altri'], giusta:0},

    {tipo:'scelta', testo:'In che cosa si biforca il giudizio riflettente?',
     opzioni:['Giudizio estetico sulla forma e giudizio teleologico sullo scopo',
              'Giudizio logico e giudizio morale',
              'Giudizio empirico e giudizio a priori',
              'Giudizio individuale e giudizio universale'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cerca il giudizio estetico?',
     opzioni:['Una finalità senza scopo, colta nella forma dell\'oggetto',
              'Lo scopo oggettivo che la natura persegue',
              'L\'utilità che l\'oggetto ha per chi lo osserva',
              'La regola tecnica con cui l\'oggetto è stato prodotto'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue il bello dal sublime?',
     opzioni:['Il bello ha forma definita e armonia, il sublime è informe e sgomenta',
              'Il bello riguarda la natura, il sublime le opere d\'arte',
              'Il bello è soggettivo, il sublime è oggettivo',
              'Il bello si giudica con la ragione, il sublime con i sensi'], giusta:0},

    {tipo:'scelta', testo:'Che tipo di piacere accompagna il sublime?',
     opzioni:['Un piacere negativo, fatto insieme di attrazione e repulsione',
              'Un piacere immediato e del tutto sereno',
              'Un piacere che nasce dal possesso dell\'oggetto',
              'Nessun piacere: il sublime provoca solo paura'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma il giudizio teleologico sulla natura?',
     opzioni:['La guardiamo come una totalità organizzata, dove ogni parte serve al tutto',
              'La natura è un puro meccanismo privo di ogni ordine',
              'La natura persegue consapevolmente i propri fini',
              'La natura è opera diretta di un artefice intelligente'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire perché sul bello ci aspettiamo di essere d\'accordo.'}
  ]
},
{
  titolo: 'Filosofia moderna · 23 — Kant: religione, diritto e storia',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: litigare serve a qualcosa, nella storia di un popolo?'},

    {tipo:'scelta', testo:'Che verità sull\'uomo riconosce la ragione, secondo Kant?',
     opzioni:['Che nessun essere umano può essere usato come semplice mezzo',
              'Che ogni uomo è per natura buono e pacifico',
              'Che gli uomini sono uguali per legge ma non per natura',
              'Che l\'uomo è l\'essere più forte fra tutti i viventi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue l\'uomo dagli altri esseri naturali?',
     opzioni:['Gli altri sono mezzi destinati all\'uso, l\'uomo è fine',
              'L\'uomo è più utile alla natura degli altri esseri',
              'L\'uomo vive più a lungo degli altri animali',
              'L\'uomo è l\'unico essere capace di soffrire'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'insocievole socievolezza?',
     opzioni:['La tendenza a unirsi e insieme quella a competere e dissociarsi',
              'La difficoltà di alcune persone a stare in società',
              'L\'obbligo di vivere insieme imposto dalla legge',
              'Il desiderio di vivere in solitudine lontano dagli altri'], giusta:0},

    {tipo:'scelta', testo:'Perché questo attrito è utile, per Kant?',
     opzioni:['Vince la pigrizia e costringe a darsi ordinamenti giuridici migliori',
              'Rende gli uomini più forti fisicamente',
              'Riduce la popolazione e quindi la fame',
              'Impedisce che si formino Stati troppo grandi'], giusta:0},

    {tipo:'scelta', testo:'Qual è il primo dei tre articoli definitivi della pace perpetua?',
     opzioni:['La costituzione repubblicana dentro ogni Stato',
              'La federazione di liberi Stati',
              'Il diritto cosmopolitico di ospitalità',
              'Il disarmo generale degli eserciti'], giusta:0},

    {tipo:'scelta', testo:'Che cosa prevede il secondo articolo?',
     opzioni:['Una lega pacifica fra Stati liberi, per la reciproca sicurezza',
              'Uno Stato mondiale unico che assorba tutti gli altri',
              'L\'abolizione di ogni frontiera fra i popoli',
              'Un tribunale che imponga la pace con la forza'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma il diritto cosmopolitico?',
     opzioni:['Ogni essere umano è cittadino del mondo e ha diritto all\'ospitalità',
              'Ogni Stato può intervenire negli affari di un altro',
              'I popoli devono adottare tutti la stessa costituzione',
              'La cittadinanza va concessa a chiunque ne faccia richiesta'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa si fonda la costituzione repubblicana kantiana?',
     opzioni:['Libertà, dipendenza da un\'unica legge comune e uguaglianza',
              'Sovranità popolare esercitata direttamente in assemblea',
              'Separazione fra la Chiesa e lo Stato',
              'Elezione diretta di tutti i funzionari pubblici'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa serve perché la pace duri.'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 3 — La Sinistra hegeliana e Feuerbach',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: quando immagini un essere perfetto, da dove prendi le sue qualità?'},

    {tipo:'scelta', testo:'Come usa la Destra hegeliana la filosofia di Hegel in campo religioso?',
     opzioni:['Come giustificazione razionale delle credenze tradizionali',
              'Come strumento per ridurre la religione a mito',
              'Come prova che la religione va abolita',
              'Come argomento per fondare una nuova Chiesa'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa invece la Sinistra hegeliana con la religione?',
     opzioni:['La riduce a mito, non riconducibile alla logica razionale',
              'La difende come la forma più alta dello Spirito',
              'La considera un ambito che la filosofia non deve toccare',
              'La sostituisce con il culto dello Stato'], giusta:0},

    {tipo:'scelta', testo:'Come leggono le due scuole la formula «il reale è razionale» in politica?',
     opzioni:['La Destra la usa per legittimare l\'esistente, la Sinistra per trasformarlo',
              'La Destra per trasformare l\'esistente, la Sinistra per conservarlo',
              'Entrambe la usano per giustificare lo Stato prussiano',
              'Entrambe la considerano priva di senso politico'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rimprovera Feuerbach alla filosofia delle università?',
     opzioni:['Di smarrire l\'uomo reale fra vuote astrazioni',
              'Di occuparsi troppo di politica e poco di logica',
              'Di essere troppo legata alle scienze naturali',
              'Di rifiutare il confronto con la teologia'], giusta:0},

    {tipo:'scelta', testo:'Qual è il bisogno fondamentale a cui risponde Feuerbach?',
     opzioni:['Cogliere l\'uomo e la realtà nella loro essenza concreta e finita',
              'Dimostrare che l\'assoluto è pensiero puro',
              'Fondare la filosofia su basi matematiche',
              'Conciliare la fede cristiana con la ragione moderna'], giusta:0},

    {tipo:'scelta', testo:'Quali qualità l\'uomo proietta in Dio, secondo Feuerbach?',
     opzioni:['Ragione, volontà e cuore, portate all\'infinito',
              'Forza, bellezza e ricchezza',
              'Giustizia, ordine e autorità',
              'Memoria, immaginazione e linguaggio'], giusta:0},

    {tipo:'scelta', testo:'Quale delle tre origini dell\'idea di Dio nasce dall\'opposizione individuo-specie?',
     opzioni:['Il singolo si sente limitato, ma la specie è illimitata: Dio la personifica',
              'L\'uomo desidera l\'infinito ma ha mezzi finiti',
              'L\'uomo dipende dalle forze della natura e le venera',
              'L\'uomo teme la morte e immagina di sopravvivere'], giusta:0},

    {tipo:'scelta', testo:'Da che cosa nasce la seconda origine, l\'opposizione fra volere e potere?',
     opzioni:['I desideri sono infiniti ma i mezzi per realizzarli sono limitati',
              'La volontà umana è debole e va rafforzata',
              'Chi ha potere impone la propria volontà agli altri',
              'Il volere è individuale, il potere è collettivo'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa mette l\'uomo dentro l\'idea di Dio.'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 5 — Il Positivismo: Comte e Mill',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa vuol dire spiegare qualcosa «scientificamente»?'},

    {tipo:'scelta', testo:'Che cosa fa il positivismo con l\'eredità dell\'Illuminismo?',
     opzioni:['La riorganizza fondandola sulla sola osservazione scientifica',
              'La rifiuta come un errore da correggere',
              'La conserva senza cambiare nulla',
              'La sostituisce con il sentimento romantico'], giusta:0},

    {tipo:'scelta', testo:'Quali sono i tre stadi della legge di Comte, in ordine?',
     opzioni:['Teologico, metafisico, positivo',
              'Metafisico, teologico, positivo',
              'Positivo, teologico, metafisico',
              'Teologico, positivo, metafisico'], giusta:0},

    {tipo:'scelta', testo:'Come si spiegano i fenomeni nello stadio teologico?',
     opzioni:['Con l\'azione di agenti soprannaturali',
              'Con forze astratte ed essenze occulte',
              'Con leggi ricavate dall\'osservazione',
              'Con il caso e la necessità naturale'], giusta:0},

    {tipo:'scelta', testo:'Quale modello sociale corrisponde allo stadio metafisico?',
     opzioni:['La sovranità popolare e il dominio dei giuristi',
              'La monarchia teocratica e militare',
              'La società industriale organizzata dagli scienziati',
              'La città-Stato retta dai filosofi'], giusta:0},

    {tipo:'scelta', testo:'Quale facoltà domina in ciascuno dei tre stadi di Comte?',
     opzioni:['Immaginazione, ragione speculativa, osservazione empirica',
              'Osservazione empirica, immaginazione, ragione speculativa',
              'Ragione speculativa, osservazione empirica, immaginazione',
              'Immaginazione, osservazione empirica, ragione speculativa'], giusta:0},

    {tipo:'scelta', testo:'Che cosa studia la statica sociale?',
     opzioni:['Le condizioni di esistenza di una società: istituzioni, famiglia, lingua',
              'Le leggi che regolano lo sviluppo storico',
              'Il modo in cui le società entrano in crisi',
              'La distribuzione della ricchezza fra le classi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa studia invece la dinamica sociale?',
     opzioni:['Il progresso, cioè le leggi dello sviluppo storico',
              'L\'ordine e l\'armonia fra le parti della società',
              'Le istituzioni e il loro funzionamento interno',
              'I rapporti fra Stati diversi'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la sociocrazia immaginata da Comte?',
     opzioni:['Un regime governato razionalmente dalla scienza sociologica',
              'Il governo diretto del popolo riunito in assemblea',
              'Una società senza Stato né autorità centrale',
              'Il governo dei militari sostenuto dagli industriali'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire fin dove arriva la scienza.'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 7 — Bergson e Weber: la reazione al positivismo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: un\'ora di lezione e un\'ora con gli amici durano davvero uguale?'},

    {tipo:'scelta', testo:'Quale idea greca viene distrutta dalla svolta di fine Ottocento?',
     opzioni:['Che l\'anima sia uno specchio passivo della realtà',
              'Che la natura sia governata da leggi fisse',
              'Che l\'uomo sia un animale politico',
              'Che il tempo sia circolare e non lineare'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma Cassirer definendo l\'uomo «animale simbolico»?',
     opzioni:['La conoscenza non copia la realtà: la costruisce con simboli',
              'L\'uomo è l\'unico animale che sa parlare',
              'I simboli hanno origine religiosa e non razionale',
              'La matematica è l\'unico simbolismo affidabile'], giusta:0},

    {tipo:'scelta', testo:'Dove sta la verità, per la scuola del Baden?',
     opzioni:['Nella regola intrinseca del conoscere, non nell\'oggetto esterno',
              'Nell\'oggetto, così come si presenta ai sensi',
              'Nell\'accordo fra gli studiosi di una disciplina',
              'Nella corrispondenza fra il pensiero e la parola'], giusta:0},

    {tipo:'scelta', testo:'Qual è l\'obiettivo di Dilthey?',
     opzioni:['Una critica della ragione storica: l\'uomo conosce la storia che fa',
              'Una critica della ragione pura più rigorosa di quella di Kant',
              'Ridurre le scienze dello spirito a scienze naturali',
              'Dimostrare che la storia non è conoscibile'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'Erlebnis, l\'esperienza vissuta?',
     opzioni:['Il livello del singolo individuo e della sua psiche',
              'L\'insieme delle istituzioni di un\'epoca',
              'La cultura generale di un periodo storico',
              'Il metodo con cui lo storico raccoglie i documenti'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue Kultur e Zivilisation in Spengler?',
     opzioni:['La prima è la fase creativa e viva, la seconda il declino tecnico',
              'La prima riguarda l\'arte, la seconda la scienza',
              'La prima è occidentale, la seconda orientale',
              'La prima è antica, la seconda è moderna'], giusta:0},

    {tipo:'scelta', testo:'Che cosa lega, per Weber, l\'etica protestante al capitalismo?',
     opzioni:['L\'ascesi intramondana: il lavoro come vocazione e prova della grazia',
              'La condanna religiosa del prestito a interesse',
              'La libertà di commercio concessa dai principi protestanti',
              'La superiore istruzione dei paesi protestanti'], giusta:0},

    {tipo:'scelta', testo:'Che cosa comporta il risparmio ascetico nella spiegazione di Weber?',
     opzioni:['Limitando i consumi, il capitale si accumula e viene reinvestito',
              'La ricchezza viene distribuita ai poveri della comunità',
              'Il denaro viene tesaurizzato senza mai essere impiegato',
              'Il lusso diventa il segno visibile della grazia divina'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa si perde quando tutto diventa calcolabile.'}
  ]
}
,
{
  titolo: 'Filosofia medievale · 3 — La filosofia nel Trecento',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: fra due spiegazioni che funzionano uguale, quale scegli?'},

    {tipo:'scelta', testo:'Che cosa dice il principio di economia di Ockham?',
     opzioni:['Non moltiplicare gli enti senza necessità',
              'Ogni fenomeno richiede almeno due cause',
              'Il sapere va diviso in discipline separate',
              'Le cose semplici derivano da quelle complesse'], giusta:0},

    {tipo:'scelta', testo:'Che cosa taglia via il rasoio, nel caso degli universali?',
     opzioni:['L\'esistenza fuori dalla mente delle nature comuni: restano i singoli',
              'L\'esistenza dei singoli individui: restano le nature comuni',
              'L\'esistenza delle categorie logiche di Aristotele',
              'L\'esistenza della materia e delle sue qualità'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire che in Dio non c\'è dualismo fra intelletto e volontà?',
     opzioni:['Dio è una libera volontà intelligente, senza divisioni interne',
              'Dio conosce ma non vuole nulla in particolare',
              'Dio vuole senza sapere che cosa sta volendo',
              'Dio è composto di due princìpi in contrasto'], giusta:0},

    {tipo:'scelta', testo:'Che differenza c\'è fra potenza assoluta e potenza ordinata?',
     opzioni:['L\'assoluta è tutto ciò che Dio potrebbe, l\'ordinata ciò che ha scelto',
              'L\'assoluta riguarda il cielo, l\'ordinata la terra',
              'L\'assoluta è antica, l\'ordinata riguarda il tempo presente',
              'L\'assoluta appartiene a Dio, l\'ordinata agli angeli'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rifiuta Ockham dell\'esemplarismo di Agostino?',
     opzioni:['Che esistano idee divine eterne come modelli delle cose',
              'Che Dio conosca gli individui uno per uno',
              'Che l\'anima possa essere illuminata da Dio',
              'Che il male sia assenza di bene'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la conoscenza intuitiva per Ockham?',
     opzioni:['L\'atto diretto con cui cogliamo una cosa presente qui e ora',
              'La deduzione che ricava il particolare dall\'universale',
              'L\'illuminazione che Dio concede a chi crede',
              'Il ricordo di una cosa vista in passato'], giusta:0},

    {tipo:'scelta', testo:'Che limite ha la conoscenza astrattiva?',
     opzioni:['Prescinde dall\'esistenza dell\'oggetto e non garantisce verità contingenti',
              'Non permette di formare concetti generali',
              'Riguarda solo le cose materiali e non quelle spirituali',
              'Dipende interamente dalla memoria e non dai sensi'], giusta:0},

    {tipo:'scelta', testo:'Perché l\'etica di Ockham si dice «formale»?',
     opzioni:['Prescrive di agire razionalmente per il meglio, senza contenuti fissi',
              'Prescrive un elenco preciso di azioni obbligatorie',
              'Riguarda solo il comportamento esteriore delle persone',
              'Deriva le regole dall\'osservazione della natura'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa resta se togli tutto il superfluo.'}
  ]
},
{
  titolo: 'Filosofia moderna · 2 — Il ritorno a Platone e ad Aristotele',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: l\'anima e il corpo sono due cose o una sola?'},

    {tipo:'scelta', testo:'Perché il ritorno a Platone interessa i pensatori rinascimentali?',
     opzioni:['Lo vedono come la condizione per una rinascita religiosa e spirituale',
              'Lo considerano il primo scienziato della natura',
              'Ne apprezzano soprattutto le teorie politiche',
              'Vogliono usarlo per criticare la matematica'], giusta:0},

    {tipo:'scelta', testo:'Quale ruolo assume l\'anima per i platonici rinascimentali?',
     opzioni:['Fa da mediazione e connessione dentro l\'ordine dell\'universo',
              'È una parte del corpo come le altre',
              'È un ostacolo alla conoscenza vera',
              'È una creazione tarda, successiva al mondo'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa si concentra la riflessione di Marsilio Ficino?',
     opzioni:['Sulla funzione specifica dell\'anima umana nell\'universo',
              'Sulla struttura matematica dei cieli',
              'Sulla riforma delle istituzioni della Chiesa',
              'Sulla traduzione dei testi di Aristotele'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sostiene Pomponazzi sul legame fra anima e corpo?',
     opzioni:['L\'anima umana è inseparabile dal corpo e ne ha bisogno',
              'L\'anima esiste prima del corpo e vi entra alla nascita',
              'L\'anima è indipendente dal corpo in ogni sua funzione',
              'L\'anima è una funzione del solo cervello'], giusta:0},

    {tipo:'scelta', testo:'Che conseguenza trae Pomponazzi da questa inseparabilità?',
     opzioni:['L\'immortalità dell\'anima non è dimostrabile per via razionale',
              'L\'anima muore certamente insieme al corpo',
              'L\'immortalità si può dimostrare con l\'esperienza',
              'L\'anima si reincarna in un altro corpo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa non nega Pomponazzi, pur negando la dimostrazione?',
     opzioni:['Che l\'immortalità possa essere creduta per fede',
              'Che l\'anima esista come principio vitale',
              'Che il corpo sia fatto di materia',
              'Che la ragione abbia qualche valore'], giusta:0},

    {tipo:'scelta', testo:'In che senso l\'anima è, per i platonici, «copula mundi»?',
     opzioni:['Tiene insieme il mondo spirituale e quello corporeo',
              'Unisce fra loro gli uomini in una sola comunità',
              'Congiunge il passato al futuro nella memoria',
              'Collega ogni corpo al proprio luogo naturale'], giusta:0},

    {tipo:'scelta', testo:'Che cosa hanno in comune il ritorno a Platone e quello ad Aristotele?',
     opzioni:['Sono due anime della stessa cultura umanistico-rinascimentale',
              'Sono due movimenti nati in secoli molto diversi',
              'Sono entrambi ostili allo studio della natura',
              'Sono entrambi promossi dalla Chiesa ufficiale'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa non si può dimostrare ma si può credere.'}
  ]
},
{
  titolo: 'Filosofia moderna · 5 — Telesio, Bruno, Campanella',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: dove sta il centro dell\'universo?'},

    {tipo:'scelta', testo:'Quali sono le due strade del naturalismo rinascimentale?',
     opzioni:['La magia e la filosofia naturale, con lo stesso obiettivo',
              'La teologia e la matematica, in aperto contrasto',
              'L\'astrologia e l\'alchimia, entrambe segrete',
              'La medicina e l\'agricoltura, entrambe pratiche'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa la magia, secondo questa distinzione?',
     opzioni:['Vede l\'universo come organismo animato e vuole dominarlo con incantesimi',
              'Studia le leggi della natura con esperimenti ripetibili e controllati',
              'Nega che la natura abbia un ordine proprio da poter conoscere',
              'Rifiuta ogni intervento dell\'uomo sul corso naturale delle cose'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa invece la filosofia naturale?',
     opzioni:['Abbandona le ipotesi metafisiche e cerca i principi propri della natura',
              'Mantiene le ipotesi metafisiche e le perfeziona',
              'Si limita a raccogliere le opinioni degli antichi',
              'Studia la natura solo per trarne insegnamenti morali'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma il panpsichismo di Telesio?',
     opzioni:['Tutte le cose sono animate: materia e spirito non sono divisi',
              'Solo gli animali e le piante possiedono una forma di vita',
              'Lo spirito esiste del tutto separato dalla materia inerte',
              'La materia è un\'illusione prodotta dai nostri sensi'], giusta:0},

    {tipo:'scelta', testo:'Perché, per Telesio, l\'uomo può comprendere la natura?',
     opzioni:['Perché condivide con essa la stessa sensibilità',
              'Perché è stato creato a immagine di Dio',
              'Perché possiede un intelletto separato dal corpo',
              'Perché ha imparato dagli antichi a osservarla'], giusta:0},

    {tipo:'scelta', testo:'Come è fatto lo spazio aristotelico?',
     opzioni:['Finito e gerarchicamente differenziato, con luoghi naturali',
              'Infinito, omogeneo e senza alcun centro',
              'Vuoto e percorso da atomi in movimento',
              'Curvo e chiuso su sé stesso'], giusta:0},

    {tipo:'scelta', testo:'Come lo trasforma Bruno?',
     opzioni:['Lo rende omogeneo, infinito e privo di centro',
              'Lo rende più piccolo ma meglio ordinato',
              'Lo divide in due sfere, celeste e terrestre',
              'Lo riempie di etere fino ai confini del cielo'], giusta:0},

    {tipo:'scelta', testo:'Che conseguenza ha uno spazio senza centro?',
     opzioni:['Non esistono più alto e basso assoluti: ogni riferimento è relativo',
              'Non è più possibile misurare le distanze',
              'I corpi non hanno più bisogno di muoversi',
              'La Terra torna a essere il punto di riferimento'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa si prova a perdere il centro.'}
  ]
},
{
  titolo: 'Filosofia moderna · 14 — Berkeley',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: prova a immaginare un albero che nessuno sta guardando.'},

    {tipo:'scelta', testo:'Quali sono le due colonne della dottrina di Berkeley?',
     opzioni:['Il nominalismo radicale e l\'immaterialismo',
              'Il razionalismo e il dualismo',
              'Lo scetticismo e il probabilismo',
              'L\'atomismo e il meccanicismo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa nega il nominalismo radicale di Berkeley?',
     opzioni:['L\'esistenza delle idee astratte',
              'L\'esistenza delle idee particolari',
              'L\'esistenza dei nomi comuni nel linguaggio',
              'L\'esistenza delle sensazioni'], giusta:0},

    {tipo:'scelta', testo:'Se non esistono idee astratte, come si parla di «triangolo» in generale?',
     opzioni:['Si prende un triangolo particolare e lo si usa come segno per gli altri',
              'Si formano togliendo dalle idee ciò che è particolare',
              'Sono innate e non derivano dall\'esperienza',
              'Sono immagini confuse di molte cose insieme'], giusta:0},

    {tipo:'scelta', testo:'Quali qualità erano considerate «primarie» nella tradizione?',
     opzioni:['L\'estensione e la figura, ritenute oggettive',
              'Il colore e il sapore, ritenuti oggettivi',
              'Il calore e il suono, ritenuti soggettivi',
              'Il peso e la durezza, ritenuti relativi'], giusta:0},

    {tipo:'scelta', testo:'Con quale argomento Berkeley demolisce questa distinzione?',
     opzioni:['Non si può percepire un\'estensione senza un colore che la mostri',
              'Le qualità primarie cambiano da persona a persona',
              'Le qualità secondarie sono più affidabili delle primarie',
              'Nessuna qualità può essere misurata con precisione'], giusta:0},

    {tipo:'scelta', testo:'Che cosa diventa la materia, nella visione di Berkeley?',
     opzioni:['Una finzione concettuale: non esiste',
              'Una sostanza spirituale di grado inferiore',
              'L\'unica realtà davvero conoscibile',
              'Un insieme di atomi indivisibili'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è allora un oggetto fisico?',
     opzioni:['Un insieme coordinato di idee percepite',
              'Un\'entità materiale solida e indipendente',
              'Un\'immagine che la mente proietta nel vuoto',
              'Un nome senza alcun contenuto'], giusta:0},

    {tipo:'scelta', testo:'Dove esistono, per Berkeley, tutte le qualità?',
     opzioni:['Soltanto nella mente che le percepisce',
              'Nei corpi, indipendentemente da chi guarda',
              'Metà nei corpi e metà nella mente',
              'In uno spazio intermedio fra mente e corpo'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa resta del mondo senza la materia.'}
  ]
},
{
  titolo: 'Filosofia moderna · 16 — Vico',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: conosci meglio una cosa che hai costruito o una che hai solo guardato?'},

    {tipo:'scelta', testo:'Qual è l\'oggetto della Scienza nuova di Vico?',
     opzioni:['Il mondo umano: le nazioni, le leggi, i linguaggi',
              'Il mondo naturale: i corpi e i loro movimenti',
              'Il mondo divino: le verità della rivelazione',
              'Il mondo matematico: i numeri e le figure'], giusta:0},

    {tipo:'scelta', testo:'Che gerarchia capovolge Vico applicando il verum ipsum factum?',
     opzioni:['La vera scienza non è la fisica, ma la storia',
              'La vera scienza non è la storia, ma la fisica',
              'La vera scienza non è la filosofia, ma la teologia',
              'La vera scienza non è la matematica, ma la logica'], giusta:0},

    {tipo:'scelta', testo:'Come si compone il metodo della Scienza nuova?',
     opzioni:['Filosofia che contempla il vero e filologia che accerta il certo',
              'Osservazione dei fatti e calcolo matematico',
              'Deduzione dai principi e verifica sperimentale',
              'Raccolta di documenti e traduzione dei testi'], giusta:0},

    {tipo:'scelta', testo:'Di che cosa si occupa la filologia, nel metodo di Vico?',
     opzioni:['Accerta il certo studiando i fatti storici e i documenti',
              'Contempla le verità eterne e necessarie',
              'Traduce i testi antichi in lingua moderna',
              'Stabilisce le regole della buona scrittura'], giusta:0},

    {tipo:'scelta', testo:'Quali sono, in ordine, le tre età dei corsi storici?',
     opzioni:['Età degli dèi, degli eroi, degli uomini',
              'Età degli uomini, degli eroi, degli dèi',
              'Età degli eroi, degli dèi, degli uomini',
              'Età degli dèi, degli uomini, degli eroi'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il ricorso storico?',
     opzioni:['Un regresso agli stadi iniziali, che riavvia il ciclo',
              'Una sconfitta definitiva da cui non si torna indietro',
              'Il passaggio diretto dall\'età degli dèi a quella degli uomini',
              'Il ripetersi identico degli stessi avvenimenti'], giusta:0},

    {tipo:'scelta', testo:'Perché dagli egoismi privati esce, per Vico, un ordine sociale?',
     opzioni:['Perché la Provvidenza indirizza quelle azioni verso fini più alti',
              'Gli uomini raggiungono sempre gli scopi che si erano proposti',
              'Ogni azione produce esattamente l\'effetto voluto',
              'Gli scopi degli uomini cambiano continuamente nel tempo'], giusta:0},

    {tipo:'scelta', testo:'Che ruolo ha la Provvidenza in questo schema?',
     opzioni:['Indirizza le azioni private verso giustizia e conservazione sociale',
              'Interviene a sospendere le leggi della storia',
              'Determina in anticipo ogni scelta individuale',
              'Punisce i popoli che sbagliano e premia gli altri'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa esce da mille interessi privati.'}
  ]
},
{
  titolo: 'Filosofia moderna · 26 — Schelling',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: la natura è qualcosa che pensiamo, o qualcosa che pensa attraverso di noi?'},

    {tipo:'scelta', testo:'Che rapporto pone Schelling fra natura e spirito?',
     opzioni:['La natura è spirito visibile, lo spirito è natura invisibile',
              'La natura precede lo spirito e lo determina del tutto',
              'Lo spirito crea la natura dal nulla',
              'Natura e spirito non hanno nulla in comune'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'Assoluto in questa prospettiva?',
     opzioni:['L\'identità in cui nessuno dei due principi prevale sull\'altro',
              'Lo spirito che ha vinto la resistenza della natura',
              'La natura considerata nella sua totalità materiale',
              'Un terzo principio che sta sopra entrambi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa muove lo sviluppo della natura, secondo Schelling?',
     opzioni:['L\'opposizione fra attrazione e repulsione',
              'L\'intervento continuo di una volontà divina',
              'Il caso, che produce combinazioni sempre nuove',
              'La necessità meccanica delle leggi fisiche'], giusta:0},

    {tipo:'scelta', testo:'Quali forze naturali manifestano questa opposizione?',
     opzioni:['Magnetismo, elettricità e chimismo',
              'Gravità, calore e pressione',
              'Luce, suono e movimento',
              'Vita, morte e generazione'], giusta:0},

    {tipo:'scelta', testo:'In che senso il mondo organico è superiore a quello inorganico?',
     opzioni:['Vi compaiono sensibilità e irritabilità: la natura si fa cosciente',
              'È più antico e quindi più vicino all\'origine di ogni cosa',
              'È più semplice e quindi molto più facile da conoscere',
              'È indipendente dalle leggi che governano la materia inerte'], giusta:0},

    {tipo:'scelta', testo:'Quali sono, in ordine, le tre epoche dello spirito?',
     opzioni:['Sensazione, intuizione produttiva, riflessione',
              'Riflessione, sensazione, intuizione produttiva',
              'Intuizione produttiva, riflessione, sensazione',
              'Sensazione, riflessione, intuizione produttiva'], giusta:0},

    {tipo:'scelta', testo:'Che cosa avviene nella prima epoca, quella della sensazione?',
     opzioni:['L\'Io avverte un dato esterno che lo limita, e lo subisce inconsciamente',
              'L\'Io prende piena coscienza di produrre il mondo',
              'L\'Io si separa definitivamente dall\'oggetto',
              'L\'Io riconosce sé stesso come intelligenza libera'], giusta:0},

    {tipo:'scelta', testo:'Che cosa raggiunge l\'Io nell\'ultima epoca?',
     opzioni:['Si coglie come intelligenza libera, separandosi dall\'oggetto',
              'Torna a confondersi con la natura da cui era uscito',
              'Perde ogni consapevolezza di sé',
              'Scopre di essere un semplice effetto di cause naturali'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa hanno in comune una pietra e un pensiero.'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 6 — Darwin, Spencer e l\'evoluzionismo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa vuol dire che una specie «si adatta»?'},

    {tipo:'scelta', testo:'Che cosa distingue il positivismo sociale da quello evoluzionistico?',
     opzioni:['Il primo studia le leggi statiche, il secondo la crescita organica',
              'Il primo nasce in Francia, il secondo nasce in Germania',
              'Il primo rifiuta la scienza, il secondo la prende a modello',
              'Il primo è ottocentesco, il secondo nasce solo nel Novecento'], giusta:0},

    {tipo:'scelta', testo:'Quale modello etico corrisponde al positivismo evoluzionistico?',
     opzioni:['Un\'etica di simpatia e adattamento',
              'L\'utilitarismo con il calcolo dei piaceri',
              'L\'etica del dovere per il dovere',
              'L\'etica della virtù come giusto mezzo'], giusta:0},

    {tipo:'scelta', testo:'Qual è l\'oggetto di studio di Darwin, rispetto a quello di Spencer?',
     opzioni:['Darwin studia la biologia, Spencer costruisce un sistema universale',
              'Darwin studia la società, Spencer studia le specie viventi',
              'Darwin studia la fisica, Spencer la biologia',
              'Entrambi studiano soltanto la biologia'], giusta:0},

    {tipo:'scelta', testo:'Con quale metodo lavora Darwin?',
     opzioni:['Ricerca empirica e naturalistica',
              'Sintesi filosofica totalizzante',
              'Deduzione da principi generali',
              'Analisi dei testi degli antichi naturalisti'], giusta:0},

    {tipo:'scelta', testo:'Qual è l\'obiettivo dichiarato di Spencer?',
     opzioni:['Unificare tutta la conoscenza umana sotto una sola legge',
              'Spiegare soltanto la diversità delle specie viventi',
              'Descrivere la storia politica dell\'Inghilterra',
              'Fondare una nuova religione dell\'umanità'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'Inconoscibile in Spencer?',
     opzioni:['Un potere misterioso precluso alla scienza, dominio della religione',
              'La parte di realtà che la scienza scoprirà in futuro',
              'Ciò che nessuno ha ancora osservato ma è osservabile',
              'L\'insieme delle leggi che la fisica non sa formulare'], giusta:0},

    {tipo:'scelta', testo:'Di che cosa si occupa allora la scienza, nello schema di Spencer?',
     opzioni:['Delle coesistenze e delle sequenze fra i fenomeni',
              'Della sostanza ultima delle cose',
              'Del fine verso cui l\'universo tende',
              'Delle verità rivelate e del loro significato'], giusta:0},

    {tipo:'scelta', testo:'Come procede la conoscenza scientifica, secondo Spencer?',
     opzioni:['Da generalizzazioni semplici fino a leggi sempre più estese',
              'Da leggi generali fino ai casi particolari',
              'Per intuizioni improvvise non verificabili',
              'Per accumulo di dati senza mai generalizzare'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire dove finisce la scienza e comincia altro.'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 11 — Husserl e la fenomenologia',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: quando dai per scontato che il mondo esista, che cosa stai facendo?'},

    {tipo:'scelta', testo:'Quali due mondi Husserl mette in tensione?',
     opzioni:['Il mondo della scienza e il Lebenswelt, il mondo della vita',
              'Il mondo delle Idee e quello delle cose',
              'Il mondo interiore e quello esteriore',
              'Il mondo antico e quello moderno'], giusta:0},

    {tipo:'scelta', testo:'Che cosa esclude il mondo costruito dalla scienza?',
     opzioni:['La soggettività e i valori',
              'Le misure e i parametri fisici',
              'Le leggi matematiche',
              'La possibilità di fare previsioni'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il Lebenswelt?',
     opzioni:['La dimensione del vissuto concreto, terreno originario di ogni sapere',
              'L\'insieme delle leggi che regolano la vita biologica',
              'Il mondo come lo descrivono le scienze naturali',
              'La società in cui ciascuno si trova a nascere'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'atteggiamento naturale?',
     opzioni:['La credenza istintiva che il mondo esista là fuori, presa senza esame',
              'L\'attitudine dello scienziato che misura i fenomeni',
              'Il rifiuto di ogni credenza non dimostrata',
              'La disposizione a vivere secondo natura'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire «mettere il mondo fra parentesi»?',
     opzioni:['Sospendere la tesi di realtà, senza negarla né dubitarne',
              'Nega l\'esistenza del mondo esterno',
              'Dubita dell\'esistenza del mondo senza risolvere il dubbio',
              'Dimostra che il mondo esiste indipendentemente da noi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue Husserl dallo scettico e da Cartesio?',
     opzioni:['Non nega né dubita: sospende il giudizio per diventare spettatore',
              'Nega l\'esistenza del mondo, mentre gli altri la ammettono',
              'Dubita più radicalmente di quanto avesse fatto Cartesio',
              'Accetta il mondo così come si presenta, senza esame'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa la riduzione eidetica?',
     opzioni:['Passa dalla molteplicità dei fatti all\'essenza invariante',
              'Riduce le essenze a semplici fatti empirici',
              'Elimina dalla coscienza ogni contenuto',
              'Traduce i vissuti in formule matematiche'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'eidos a cui si arriva?',
     opzioni:['La struttura invariante e universale, intuita dalla ragione',
              'Il caso singolo scelto come esempio',
              'L\'immagine mentale di un oggetto ricordato',
              'La definizione stabilita per convenzione'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa vedi se smetti di dare il mondo per scontato.'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 17 — Il pragmatismo: Peirce, James, Dewey',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: come fai a sapere se hai capito davvero un\'idea?'},

    {tipo:'scelta', testo:'Con che cosa coincide il significato di un\'idea, per Peirce?',
     opzioni:['Con l\'insieme delle sue conseguenze pratiche concepibili',
              'Con la definizione che ne dà il vocabolario',
              'Con l\'immagine mentale che l\'accompagna',
              'Con la storia di chi l\'ha formulata per primo'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è una credenza, per Peirce?',
     opzioni:['Una regola per l\'azione, non una certezza dogmatica',
              'Un\'opinione che non si può discutere',
              'Un\'idea accettata perché condivisa da molti',
              'Una verità rivelata da un\'autorità'], giusta:0},

    {tipo:'scelta', testo:'Qual è la sequenza che porta dal dubbio all\'azione?',
     opzioni:['Dubbio, ricerca, credenza, azione',
              'Credenza, dubbio, azione, ricerca',
              'Azione, dubbio, credenza, ricerca',
              'Ricerca, azione, dubbio, credenza'], giusta:0},

    {tipo:'scelta', testo:'Che cosa mette in moto la ricerca, in questo schema?',
     opzioni:['L\'inquietudine prodotta dal dubbio',
              'La curiosità disinteressata per il sapere',
              'L\'obbligo imposto da un\'autorità',
              'La certezza di avere già la risposta'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma James sulla verità di un\'idea?',
     opzioni:['Un\'idea è vera se funziona e migliora concretamente la vita',
              'Un\'idea è vera se è logicamente coerente con le altre',
              'Un\'idea è vera se corrisponde a un fatto osservato',
              'Un\'idea è vera se è accettata dalla comunità scientifica'], giusta:0},

    {tipo:'scelta', testo:'Che cosa contrappone James alla «perfezione logica astratta»?',
     opzioni:['L\'utilità pratica e psicologica di un\'idea',
              'La bellezza formale di una teoria',
              'L\'antichità della tradizione che la sostiene',
              'La semplicità della sua formulazione'], giusta:0},

    {tipo:'scelta', testo:'Che dualismo abbatte Dewey?',
     opzioni:['Quello fra mente e natura: l\'uomo non è uno spettatore isolato',
              'Quello fra corpo e anima nel senso religioso',
              'Quello fra scienza e filosofia',
              'Quello fra individuo e società'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'esperienza per Dewey?',
     opzioni:['Uno scambio: l\'organismo modifica l\'ambiente e ne è modificato',
              'La registrazione passiva di ciò che accade tutto intorno',
              'Un processo che avviene soltanto dentro la nostra mente',
              'La somma dei ricordi che accumuliamo nel corso del tempo'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa rende buona un\'idea.'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 18 — Croce e Gentile: il neoidealismo italiano',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: pensare è un\'attività che fai, o un contenuto che possiedi?'},

    {tipo:'scelta', testo:'Che cosa fa Gentile con la dialettica dei distinti di Croce?',
     opzioni:['La elimina: per lui lo Spirito è Unità assoluta, senza divisioni',
              'La accoglie e la sviluppa in quattro nuove forme',
              'La applica soltanto alla storia e non all\'arte',
              'La riconduce alla dialettica di Hegel senza modifiche'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'atto puro?',
     opzioni:['Il pensiero in atto, vivo e cosciente: fuori di esso non c\'è nulla',
              'Il pensiero già formulato e depositato nelle opere',
              'L\'azione morale compiuta senza secondi fini',
              'Il primo atto con cui Dio crea il mondo'], giusta:0},

    {tipo:'scelta', testo:'Perché l\'attualismo è detto «soggettivismo assoluto»?',
     opzioni:['Tutta la realtà si risolve nell\'atto stesso del pensare',
              'Ogni individuo ha una verità propria e diversa',
              'Il soggetto è più importante dell\'oggetto ma non lo esaurisce',
              'La realtà dipende dai sensi del singolo osservatore'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono, per Gentile, arte, religione e filosofia?',
     opzioni:['Momenti dialettici interni all\'unico Atto, destinati a risolversi',
              'Tre gradi distinti e permanenti dello Spirito',
              'Tre forme di conoscenza indipendenti fra loro',
              'Tre discipline scolastiche senza rapporto filosofico'], giusta:0},

    {tipo:'scelta', testo:'Di che difetto soffre l\'arte, nella triade gentiliana?',
     opzioni:['Di «inattualità»: esalta il soggetto in modo unilaterale',
              'Di eccessivo attaccamento alla realtà materiale',
              'Di dipendenza dalla religione che la ispira',
              'Di essere incomprensibile a chi non è istruito'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fanno invece religione e scienza, secondo Gentile?',
     opzioni:['Esaltano l\'oggetto e finiscono per annullare l\'Io',
              'Esaltano il soggetto trascurando il mondo',
              'Tengono in equilibrio soggetto e oggetto',
              'Rinunciano a ogni pretesa di verità'], giusta:0},

    {tipo:'scelta', testo:'Che cosa comprende la filosofia, come «grande sintesi»?',
     opzioni:['Che l\'oggetto non è separato dal soggetto, ma sua libera creazione',
              'Che l\'oggetto esiste indipendentemente dal soggetto',
              'Che soggetto e oggetto restano per sempre estranei',
              'Che il soggetto è un prodotto dell\'oggetto materiale'], giusta:0},

    {tipo:'scelta', testo:'Qual è l\'obiettivo filosofico finale dell\'attualismo?',
     opzioni:['Superare ogni dualismo residuo fra soggetto e oggetto',
              'Conservare i dualismi come strumenti di analisi',
              'Ridurre la filosofia a una scienza empirica',
              'Separare nettamente teoria e pratica'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa resta fuori dal pensiero.'}
  ]
}
,
{
  titolo: 'Filosofia contemporanea · 14 — L\'Esistenzialismo: caratteri generali',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa vuol dire, per una persona, «esistere», che non vale per una sedia?'},

    {tipo:'scelta', testo:'Che cosa afferma il primo carattere, l\'esistenza come modo d\'essere dell\'uomo?',
     opzioni:['È un modo d\'essere specifico, che non si riduce a quello delle cose',
              'È la semplice presenza fisica di un corpo nel mondo',
              'È una proprietà comune a tutti gli esseri viventi',
              'È il tempo che passa fra la nascita e la morte'], giusta:0},

    {tipo:'scelta', testo:'Che cosa dice il secondo carattere, il rapporto con l\'Essere?',
     opzioni:['L\'uomo non è autosufficiente: è aperto a un oltre — mondo, altri, Dio',
              'L\'uomo si basta da solo e non ha bisogno di nulla',
              'L\'uomo coincide con l\'essere e non se ne distingue',
              'L\'uomo può conoscere l\'essere in modo completo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa comporta il terzo carattere, scelta e progetto?',
     opzioni:['L\'esistenza non è data ma è possibilità e rischio: l\'uomo è ciò che sceglie',
              'L\'esistenza è già decisa fin dalla nascita',
              'Le scelte contano meno delle circostanze in cui si vive',
              'Ogni progetto va portato a termine, altrimenti non vale'], giusta:0},

    {tipo:'scelta', testo:'Che cosa difende il quarto carattere, la singolarità?',
     opzioni:['Il primato del singolo concreto e irripetibile contro le totalità astratte',
              'Il primato della collettività sul singolo individuo',
              'L\'idea che ogni uomo sia uguale a tutti gli altri',
              'La superiorità di alcuni individui su tutti gli altri'], giusta:0},

    {tipo:'scelta', testo:'Che cosa dice il quinto carattere, la finitudine?',
     opzioni:['L\'esistenza sta fra nascita e morte, limitata e segnata dall\'angoscia',
              'L\'esistenza è infinita nelle sue possibilità',
              'L\'esistenza si conclude ma senza che ce ne accorgiamo',
              'L\'esistenza è limitata soltanto dalle leggi della società'], giusta:0},

    {tipo:'scelta', testo:'Quali sono i precursori dell\'esistenzialismo novecentesco?',
     opzioni:['Kierkegaard, con il Singolo e l\'angoscia, e i pensatori russi',
              'Hegel e la sua filosofia del sistema',
              'Comte e il positivismo francese',
              'Kant e la Critica della ragion pratica'], giusta:0},

    {tipo:'scelta', testo:'Quale anno segna «l\'architettura» dell\'esistenzialismo, con Essere e tempo?',
     opzioni:['Il 1927',
              'Il 1919',
              'Il 1932',
              'Il 1943'], giusta:0},

    {tipo:'scelta', testo:'Quali opere segnano l\'esplosione francese fra il 1938 e il 1943?',
     opzioni:['La Nausea e L\'essere e il nulla di Sartre, Il mito di Sisifo di Camus',
              'Essere e tempo di Heidegger e Filosofia di Jaspers',
              'L\'Epistola ai romani di Barth e il Giornale metafisico di Marcel',
              'Il Singolo e L\'angoscia di Kierkegaard'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa distingue una vita da un oggetto.'}
  ]
},
{
  titolo: 'Filosofia antica · 12 — Agostino d\'Ippona',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: dove sta il passato, adesso?'},

    {tipo:'scelta', testo:'Che cosa insegnava il manicheismo sul male?',
     opzioni:['Che esiste un principio del male eterno, in lotta con quello del bene',
              'Che il male è soltanto assenza di bene',
              'Che il male dipende dalle scelte libere degli uomini',
              'Che il male non esiste in nessuna forma'], giusta:0},

    {tipo:'scelta', testo:'Che cosa risponde Agostino sulla natura del male?',
     opzioni:['Non è una sostanza, ma privazione di bene',
              'È una sostanza creata da un secondo dio',
              'È l\'unica realtà davvero esistente',
              'È l\'effetto necessario della materia'], giusta:0},

    {tipo:'scelta', testo:'Da dove nasce allora il male morale?',
     opzioni:['Dalla volontà libera dell\'uomo, che si allontana dal bene',
              'Da un principio malvagio che agisce nel mondo',
              'Dalla materia di cui è fatto il corpo umano',
              'Da un errore dell\'intelletto che si può correggere'], giusta:0},

    {tipo:'scelta', testo:'Contro chi è diretto il «si fallor, sum»?',
     opzioni:['Contro gli scettici: anche sbagliando, devo esistere per sbagliare',
              'Contro i manichei, che negavano la libertà',
              'Contro i platonici, che negavano il corpo',
              'Contro gli stoici, che negavano le passioni'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma la dottrina dell\'illuminazione?',
     opzioni:['La mente coglie le verità eterne perché Dio la illumina',
              'Le verità si ricavano tutte dai dati dei sensi',
              'Le verità sono innate e non hanno bisogno di nulla',
              'Le verità si imparano soltanto dai maestri'], giusta:0},

    {tipo:'scelta', testo:'Dove esistono passato e futuro, secondo le Confessioni?',
     opzioni:['Nell\'anima: memoria del passato e attesa del futuro',
              'Nel mondo esterno, indipendentemente da noi',
              'In Dio soltanto, che li contiene entrambi',
              'Da nessuna parte: solo il presente è reale in senso pieno'], giusta:0},

    {tipo:'scelta', testo:'Che cosa divide, secondo Agostino, la città di Dio da quella terrena?',
     opzioni:['Due amori: quello di sé fino a Dio e quello di Dio fino a sé',
              'Due territori: Roma e Gerusalemme',
              'Due epoche: prima e dopo la venuta di Cristo',
              'Due classi sociali: i potenti e i poveri'], giusta:0},

    {tipo:'scelta', testo:'Che rapporto pone la formula «credo ut intelligam»?',
     opzioni:['La fede apre la strada, ma la ragione poi lavora e comprende',
              'La ragione precede sempre la fede e la fonda',
              'La fede sostituisce del tutto la ragione',
              'Fede e ragione non si incontrano mai'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire dove si trova il tempo.'}
  ]
},
{
  titolo: 'Filosofia medievale · 2 — Tommaso d\'Aquino',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: si può arrivare con la ragione a qualcosa che si crede per fede?'},

    {tipo:'scelta', testo:'Perché la riscoperta di Aristotele crea un problema nel Duecento?',
     opzioni:['Alcune sue tesi sembrano incompatibili con la fede cristiana',
              'I suoi testi erano andati perduti e non si potevano leggere',
              'La Chiesa aveva già adottato Aristotele come suo filosofo',
              'Le sue opere erano scritte in una lingua sconosciuta'], giusta:0},

    {tipo:'scelta', testo:'Come Tommaso ordina fede e ragione?',
     opzioni:['Sono distinte ma non in contrasto: la grazia perfeziona la natura',
              'Sono la stessa cosa detta in due modi diversi',
              'Sono in contrasto insanabile e vanno tenute separate',
              'La ragione deve essere abbandonata dove parla la fede'], giusta:0},

    {tipo:'scelta', testo:'Perché non basta il concetto di Dio a dimostrare che Dio esiste?',
     opzioni:['Dal concetto di Dio non si può passare direttamente alla sua esistenza',
              'Perché Anselmo non era un teologo autorevole',
              'Perché il concetto di Dio è impossibile da formare',
              'Perché l\'esistenza di Dio non va dimostrata affatto'], giusta:0},

    {tipo:'scelta', testo:'Da dove partono le cinque vie di Tommaso?',
     opzioni:['Partono da un fatto d\'esperienza e risalgono a una causa prima',
              'Partono dal concetto di perfezione e ne deducono l\'esistenza',
              'Partono dalla rivelazione e la confermano con la ragione',
              'Partono dal consenso dei popoli su una divinità'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue le creature da Dio?',
     opzioni:['Nelle creature essenza ed esistenza sono distinte, in Dio coincidono',
              'Le creature hanno un corpo, Dio non ne ha',
              'Le creature sono molte, Dio è uno solo',
              'Le creature sono nel tempo, Dio è fuori dallo spazio'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la legge naturale per Tommaso?',
     opzioni:['La partecipazione della creatura razionale alla legge eterna',
              'L\'insieme delle leggi scritte dai sovrani',
              'La regolarità con cui si comportano i corpi fisici',
              'Il diritto che ogni popolo si dà da sé'], giusta:0},

    {tipo:'scelta', testo:'A che cosa deve servire il potere politico, per Tommaso?',
     opzioni:['Il bene comune, subordinato al fine ultimo dell\'uomo',
              'La sola sicurezza materiale dei cittadini',
              'L\'accrescimento della potenza del sovrano',
              'La conversione forzata di tutti i sudditi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire che in Dio essenza ed esistenza coincidono?',
     opzioni:['Dio non può non esistere: esistere fa parte di ciò che è',
              'Dio esiste soltanto nel pensiero di chi lo concepisce',
              'Dio esiste ma la sua essenza resta sconosciuta',
              'Dio è esistito una volta e poi si è ritirato dal mondo'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa succede quando una legge è ingiusta.'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 15 — La crisi delle certezze nelle scienze',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: quante rette parallele passano per un punto fuori da una retta?'},

    {tipo:'scelta', testo:'Che cosa cambia con le geometrie non euclidee?',
     opzioni:['Negando il quinto postulato si ottengono geometrie coerenti e diverse',
              'Si dimostra che la geometria di Euclide contiene un errore',
              'Si scopre che la geometria non serve a descrivere lo spazio',
              'Si riduce la geometria a un capitolo dell\'aritmetica'], giusta:0},

    {tipo:'scelta', testo:'Che conseguenza ha questo per la matematica?',
     opzioni:['Gli assiomi diventano scelte convenzionali, non verità evidenti',
              'La matematica perde ogni utilità pratica',
              'La matematica va rifondata sull\'esperienza dei sensi',
              'Ogni teorema deve essere verificato sperimentalmente'], giusta:0},

    {tipo:'scelta', testo:'Che cosa dimostra il teorema di incompletezza di Gödel?',
     opzioni:['In un sistema coerente abbastanza ricco esistono verità indimostrabili',
              'Che ogni sistema matematico contiene una contraddizione',
              'Che la matematica può dimostrare qualunque enunciato',
              'Che i numeri sono un\'invenzione della mente umana'], giusta:0},

    {tipo:'scelta', testo:'Che cosa succede alla simultaneità con la relatività ristretta?',
     opzioni:['La simultaneità assoluta: tempo e spazio dipendono dall\'osservatore',
              'La costanza della velocità della luce',
              'La possibilità di misurare le distanze',
              'Il principio di conservazione dell\'energia'], giusta:0},

    {tipo:'scelta', testo:'Come spiega la relatività generale l\'attrazione fra i corpi?',
     opzioni:['Una curvatura dello spazio-tempo prodotta dalla massa',
              'Una forza di attrazione che agisce a distanza',
              'Un campo di particelle che riempie lo spazio',
              'Un effetto apparente della rotazione dei corpi'], giusta:0},

    {tipo:'scelta', testo:'In che modo, secondo Planck, l\'energia viene scambiata?',
     opzioni:['L\'energia non si scambia in modo continuo ma a pacchetti discreti',
              'L\'energia si conserva soltanto nei sistemi chiusi',
              'La luce è fatta esclusivamente di onde',
              'La materia è divisibile all\'infinito'], giusta:0},

    {tipo:'scelta', testo:'Che limite pone Heisenberg alla misura di una particella?',
     opzioni:['Non si possono conoscere insieme con precisione posizione e quantità di moto',
              'Le particelle si muovono in modo del tutto casuale',
              'Ogni misura scientifica contiene un errore di calcolo',
              'Le leggi fisiche cambiano da un luogo all\'altro'], giusta:0},

    {tipo:'scelta', testo:'Che cosa hanno in comune queste crisi, dalla geometria alla fisica?',
     opzioni:['Cade l\'idea di un sapere assoluto e definitivo sulla realtà',
              'Le scienze scoprono di essersi sbagliate su tutto',
              'La matematica smette di essere utile alla fisica',
              'Gli scienziati rinunciano a formulare nuove teorie'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire se una scienza senza certezze è più debole o più onesta.'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 16 — Wittgenstein e l\'analisi del linguaggio',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: c\'è qualcosa che sai ma che non riesci a dire?'},

    {tipo:'scelta', testo:'Che rapporto pone il Tractatus fra linguaggio e mondo?',
     opzioni:['La proposizione è un\'immagine logica del fatto che rappresenta',
              'Il linguaggio crea il mondo di cui parla',
              'Il linguaggio e il mondo non hanno alcun rapporto',
              'Il mondo è più semplice del linguaggio che lo descrive'], giusta:0},

    {tipo:'scelta', testo:'Che cosa hanno in comune una proposizione sensata e il fatto che raffigura?',
     opzioni:['La stessa forma logica',
              'La stessa lunghezza',
              'Lo stesso contenuto materiale',
              'Lo stesso ordine cronologico'], giusta:0},

    {tipo:'scelta', testo:'Perché le proposizioni della metafisica sono «insensate» nel Tractatus?',
     opzioni:['Non raffigurano nessun fatto possibile del mondo',
              'Sono grammaticalmente scorrette',
              'Sono troppo difficili da capire',
              'Contraddicono i risultati delle scienze'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il «mistico» per il Wittgenstein del Tractatus?',
     opzioni:['Ciò che si mostra ma non si può dire: valore, senso, etica',
              'Un\'esperienza religiosa riservata a pochi',
              'Ciò che la scienza scoprirà in futuro',
              'Un errore del linguaggio che va corretto'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia con l\'idea dei giochi linguistici?',
     opzioni:['Il linguaggio non ha una sola funzione: ha molti usi, in molte pratiche',
              'Il linguaggio serve solo a descrivere fatti',
              'Il linguaggio va sostituito da un simbolismo formale',
              'Il linguaggio è sempre uguale in ogni cultura'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma la formula «il significato è l\'uso»?',
     opzioni:['Il senso di una parola sta nel modo in cui viene impiegata',
              'Il senso di una parola sta nell\'oggetto che nomina',
              'Il senso di una parola sta nella sua origine storica',
              'Il senso di una parola lo decide chi la pronuncia'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è, per il secondo Wittgenstein, una «somiglianza di famiglia»?',
     opzioni:['Casi legati da tratti che si sovrappongono, senza un carattere comune a tutti',
              'La proprietà che tutti i membri di una classe condividono',
              'Il rapporto fra una parola e la sua traduzione',
              'La parentela fra lingue che hanno la stessa origine'], giusta:0},

    {tipo:'scelta', testo:'Come cambia il compito della filosofia, fra il primo e il secondo Wittgenstein?',
     opzioni:['Da fissare i limiti del dire a sciogliere i nodi che il linguaggio crea',
              'Da studiare il linguaggio a studiare la natura',
              'Da descrivere il mondo a cambiarlo politicamente',
              'Da analisi logica a ricerca storica sulle lingue'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire quanti problemi nascono da come parliamo.'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 19 — La Scuola di Francoforte e la critica al capitalismo',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: quello che desideri, l\'hai scelto tu?'},

    {tipo:'scelta', testo:'Che cos\'è la «teoria critica», rispetto alla teoria tradizionale?',
     opzioni:['Non si limita a descrivere la società: ne mette in questione le basi',
              'Descrive i fatti sociali senza giudicarli',
              'Applica alla società i metodi delle scienze naturali',
              'Studia soltanto le opere d\'arte e la cultura'], giusta:0},

    {tipo:'scelta', testo:'Qual è la tesi della Dialettica dell\'illuminismo?',
     opzioni:['La ragione che doveva liberare si è rovesciata in dominio',
              'L\'illuminismo ha mantenuto tutte le sue promesse',
              'La ragione non ha avuto alcun effetto sulla storia',
              'Il dominio nasce dall\'abbandono della ragione'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la ragione strumentale?',
     opzioni:['Una ragione che calcola i mezzi e non discute più i fini',
              'Una ragione che si occupa solo di questioni morali',
              'Una ragione applicata esclusivamente alla tecnica',
              'Una ragione che rinuncia a ogni calcolo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa denuncia Adorno con l\'espressione «industria culturale»?',
     opzioni:['La cultura prodotta in serie, che addormenta invece di risvegliare',
              'La scomparsa dei prodotti culturali dal mercato',
              'L\'eccessivo costo dei biglietti per teatri e concerti',
              'La censura politica esercitata sugli artisti'], giusta:0},

    {tipo:'scelta', testo:'Che cosa succede ai rapporti fra persone, secondo Lukács?',
     opzioni:['I rapporti fra persone assumono l\'aspetto di rapporti fra cose',
              'Gli oggetti acquistano una volontà propria',
              'Le idee vengono trasformate in oggetti concreti',
              'Le merci perdono ogni valore di scambio'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa si regge il dominio di una classe, per Gramsci?',
     opzioni:['Il consenso costruito nella cultura, prima ancora che con la forza',
              'Il dominio militare di uno Stato su un altro',
              'Il controllo diretto dell\'economia da parte dello Stato',
              'L\'autorità che una classe esercita solo con la coercizione'], giusta:0},

    {tipo:'scelta', testo:'Che cosa perde un\'opera d\'arte quando viene riprodotta in serie?',
     opzioni:['L\'unicità hic et nunc dell\'opera, che la riproduzione tecnica dissolve',
              'La luce particolare con cui un quadro va illuminato',
              'La fama che circonda un artista famoso',
              'Il valore economico che un\'opera acquista nel tempo'], giusta:0},

    {tipo:'scelta', testo:'Perché il consumo, per i francofortesi, non è un atto libero?',
     opzioni:['I bisogni vengono prodotti insieme alle merci che li soddisfano',
              'Perché i prezzi sono decisi da pochi grandi produttori',
              'Perché la legge impone che cosa si può comprare',
              'Perché i beni disponibili sono sempre troppo pochi'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire chi decide che cosa desideri.'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 20 — Strutturalismo, Foucault e decostruzione',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: quanto di quello che pensi hai davvero scelto tu?'},

    {tipo:'scelta', testo:'Da dove nasce il significato, per lo strutturalismo?',
     opzioni:['Il senso nasce dalle relazioni fra elementi, non dagli elementi presi da soli',
              'Ogni elemento ha un significato proprio e indipendente',
              'Il senso dipende dalle intenzioni di chi parla',
              'Il senso si stabilisce per accordo fra gli studiosi'], giusta:0},

    {tipo:'scelta', testo:'Che distinzione introduce Saussure sul linguaggio?',
     opzioni:['Langue, il sistema condiviso, e parole, l\'uso individuale',
              'Lingua scritta e lingua parlata',
              'Lingua materna e lingua straniera',
              'Grammatica e vocabolario'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cerca Lévi-Strauss nei miti?',
     opzioni:['Strutture ricorrenti che valgono al di là delle singole culture',
              'La verità storica che i miti nasconderebbero',
              'L\'autore originale di ciascun racconto',
              'La prova che tutti i popoli discendono da uno solo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa stabilisce, in un\'epoca, ciò che si può dire e sapere?',
     opzioni:['Il sistema di regole che in un\'epoca decide che cosa si può dire e sapere',
              'L\'insieme delle scoperte scientifiche di un secolo',
              'La conoscenza personale che ogni individuo accumula',
              'Il metodo con cui si verificano le ipotesi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa mostra l\'analisi del Panopticon?',
     opzioni:['Il potere funziona meglio quando ci si sente osservati, anche se nessuno guarda',
              'Le prigioni moderne sono più umane di quelle antiche',
              'Il potere agisce solo attraverso la punizione fisica',
              'La sorveglianza è inefficace se non è continua'], giusta:0},

    {tipo:'scelta', testo:'Che rapporto pone Foucault fra sapere e potere?',
     opzioni:['Si sostengono a vicenda: ogni sapere è anche un modo di governare',
              'Sono del tutto indipendenti l\'uno dall\'altro',
              'Il sapere serve sempre a limitare il potere',
              'Il potere ostacola sempre la crescita del sapere'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa la decostruzione di Derrida?',
     opzioni:['Mostra le opposizioni gerarchiche su cui un testo si regge senza dirlo',
              'Distrugge il testo per sostituirlo con uno nuovo',
              'Riduce ogni testo al suo significato letterale',
              'Ricostruisce le intenzioni originarie dell\'autore'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire «morte dell\'uomo» in Foucault?',
     opzioni:['L\'uomo come oggetto del sapere è una figura recente e passeggera',
              'La specie umana è destinata a estinguersi presto',
              'Gli uomini contano meno delle macchine che costruiscono',
              'La filosofia deve smettere di occuparsi degli uomini'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire chi parla quando parli.'}
  ]
},
{
  titolo: 'Filosofia contemporanea · 21 — Hannah Arendt',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: si può fare del male terribile senza odiare nessuno?'},

    {tipo:'scelta', testo:'Che cosa distingue il totalitarismo da una tirannia tradizionale?',
     opzioni:['Non si limita a togliere la libertà: vuole trasformare la natura umana',
              'Usa la forza più duramente delle vecchie tirannie',
              'È guidato da un solo uomo invece che da un gruppo',
              'Dura più a lungo di qualsiasi altro regime'], giusta:0},

    {tipo:'scelta', testo:'Su quale condizione sociale fa leva il totalitarismo?',
     opzioni:['L\'isolamento delle persone, private di legami e di uno spazio comune',
              'La ricchezza diffusa in tutti i ceti della popolazione',
              'La forza dei sindacati e delle associazioni',
              'L\'alto livello di istruzione dei cittadini'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue il lavoro dall\'opera, nella Vita activa?',
     opzioni:['Il lavoro produce ciò che si consuma, l\'opera ciò che dura',
              'Il lavoro è manuale, l\'opera è intellettuale',
              'Il lavoro è retribuito, l\'opera è gratuita',
              'Il lavoro è individuale, l\'opera è collettiva'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è l\'azione, la terza attività?',
     opzioni:['Ciò che si fa fra le persone, con la parola, e apre qualcosa di nuovo',
              'La produzione di oggetti destinati a durare',
              'La cura del corpo e delle necessità quotidiane',
              'La riflessione solitaria del filosofo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa porta con sé, per Arendt, ogni nascita?',
     opzioni:['La capacità di cominciare qualcosa di nuovo che ogni nascita porta',
              'Il numero di nascite che si registrano in una popolazione',
              'Il legame che unisce i figli ai genitori che li hanno avuti',
              'La speranza che il futuro sia migliore di quanto è il passato'], giusta:0},

    {tipo:'scelta', testo:'Perché senza pluralità non ci sarebbe politica?',
     opzioni:['Sulla terra vivono uomini al plurale, tutti diversi fra loro',
              'Perché le decisioni si prendono sempre a maggioranza',
              'Perché ogni Stato ha bisogno di avere molti abitanti',
              'Perché le opinioni diverse vanno ricondotte a una sola'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire «banalità del male»?',
     opzioni:['Il male enorme può essere commesso da chi smette semplicemente di pensare',
              'Il male è una cosa comune e quindi non va giudicato',
              'Chi fa il male è sempre un mostro riconoscibile',
              'Il male dipende soltanto dagli ordini ricevuti'], giusta:0},

    {tipo:'scelta', testo:'Che cosa colpisce Arendt nel processo a Eichmann?',
     opzioni:['Un funzionario ordinario, non un mostro, incapace di pensare da sé',
              'Un uomo mosso da un odio profondo e dichiarato',
              'Un imputato che si difende con argomenti raffinati',
              'Un colpevole che si pente pubblicamente delle sue azioni'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa impedisce a una persona di obbedire e basta.'}
  ]
}
,
{
  titolo: 'Storia medievale · 1 — La ripresa dopo l\'anno Mille',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: come si fa a far crescere il cibo senza avere più terra?'},

    {tipo:'scelta', testo:'A che cosa serve il collare a spalla?',
     opzioni:['Permette al cavallo di tirare senza soffocare sotto lo sforzo',
              'Protegge il collo del cavallo dalle ferite in battaglia',
              'Consente di attaccare due cavalli allo stesso aratro',
              'Serve a guidare il cavallo senza usare le redini'], giusta:0},

    {tipo:'scelta', testo:'Perché l\'aratro pesante è adatto al Nord Europa?',
     opzioni:['Scava in profondità e lavora le terre pesanti e umide',
              'È più leggero e quindi più facile da trainare',
              'Non ha bisogno di animali da tiro',
              'Lascia la terra in superficie senza rivoltarla'], giusta:0},

    {tipo:'scelta', testo:'Che cosa protegge il ferro di cavallo?',
     opzioni:['Lo zoccolo dall\'usura e dall\'umidità, garantendo la trazione',
              'La zampa dai colpi ricevuti in battaglia',
              'Il terreno dallo sfondamento sotto il peso',
              'Il cavaliere dalle cadute su terreno scivoloso'], giusta:0},

    {tipo:'scelta', testo:'Quanta terra resta improduttiva passando dal sistema biennale a quello triennale?',
     opzioni:['Si scende dal 50% al 33%',
              'Si scende dal 33% al 25%',
              'Si scende dal 66% al 50%',
              'Si scende dal 50% al 25%'], giusta:0},

    {tipo:'scelta', testo:'Perché la rotazione triennale migliora anche l\'alimentazione?',
     opzioni:['L\'introduzione dei legumi fornisce proteine vegetali',
              'Permette di allevare più capi di bestiame',
              'Consente di coltivare frutta accanto ai cereali',
              'Riduce il lavoro e quindi la fatica dei contadini'], giusta:0},

    {tipo:'scelta', testo:'Perché due raccolti separati riducono il rischio di carestia?',
     opzioni:['Se una semina fallisce, resta l\'altra: il rischio è diviso',
              'Perché si produce esattamente il doppio del cibo',
              'Perché si può vendere il primo e conservare il secondo',
              'Perché il grano invernale resiste a ogni clima'], giusta:0},

    {tipo:'scelta', testo:'Quali sono le tre vie con cui l\'Europa del Mille conquista nuove terre?',
     opzioni:['Disboscamento, bonifiche e dissodamento',
              'Conquista militare, alleanze e matrimoni',
              'Commercio, migrazione e colonizzazione',
              'Recinzione, irrigazione e terrazzamento'], giusta:0},

    {tipo:'scelta', testo:'Quali sono i tre centri della città medievale?',
     opzioni:['La cattedrale, la piazza col mercato e il palazzo del Comune',
              'Il castello, la caserma e la prigione',
              'Il porto, il magazzino e la dogana',
              'L\'università, l\'ospedale e il convento'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa cambia in una città quando nasce un mercato.'}
  ]
},
{
  titolo: 'Storia medievale · 2 — La lotta per le investiture',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: chi sceglie i vescovi comanda anche su che cosa, secondo te?'},

    {tipo:'scelta', testo:'Che cosa stabilisce il Privilegium Othonis del 962?',
     opzioni:['L\'elezione del pontefice richiede l\'approvazione dell\'imperatore',
              'Il papa può deporre l\'imperatore quando lo ritiene ingiusto',
              'I vescovi vengono eletti dal clero e dal popolo della città',
              'L\'imperatore rinuncia a ogni ingerenza nelle cose di Chiesa'], giusta:0},

    {tipo:'scelta', testo:'Da dove parte la spinta a riformare la Chiesa?',
     opzioni:['Dai monasteri, non da Roma',
              'Dalla corte imperiale tedesca',
              'Dai vescovi delle grandi città',
              'Dai sovrani di Francia e Inghilterra'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rivendicano i monasteri riformati?',
     opzioni:['L\'autonomia dai signori laici e dai vescovi corrotti',
              'Il diritto di eleggere direttamente il papa',
              'La proprietà delle terre coltivate dai contadini',
              'Il controllo delle università appena fondate'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa si concentra Cluny, fondata nel 910?',
     opzioni:['Sulla liturgia fastosa e la preghiera incessante',
              'Sul lavoro manuale e sulla povertà assoluta',
              'Sulla predicazione itinerante nelle città',
              'Sull\'istruzione dei figli della nobiltà'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue i Cistercensi, fondati nel 1098?',
     opzioni:['Il ritorno al rigore della regola: ora et labora, povertà e isolamento',
              'La liturgia più solenne di tutta la cristianità',
              'L\'obbedienza diretta all\'imperatore invece che al papa',
              'La rinuncia a possedere qualunque terra'], giusta:0},

    {tipo:'scelta', testo:'Quante proposizioni contiene il Dictatus papae del 1075?',
     opzioni:['Ventisette',
              'Dodici',
              'Quaranta',
              'Sette'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma l\'articolo XXVII del Dictatus papae?',
     opzioni:['Il papa può sciogliere i sudditi dal giuramento verso sovrani ingiusti',
              'Il papa può convocare i concili senza consultare nessuno',
              'Il papa deve essere eletto dai soli cardinali',
              'Il papa non può essere giudicato da alcun tribunale'], giusta:0},

    {tipo:'scelta', testo:'Come cambia la nomina dei vescovi fra il 962 e il 1075?',
     opzioni:['Dall\'investitura imperiale alla nomina riservata al solo papa',
              'Dalla nomina papale all\'elezione da parte del popolo',
              'Dall\'elezione cittadina alla nomina imperiale',
              'Dalla nomina papale al sorteggio fra i canonici'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa si contendevano davvero papa e imperatore.'}
  ]
},
{
  titolo: 'Storia medievale · 3 — Le crociate',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che differenza c\'è fra un pellegrinaggio e una guerra?'},

    {tipo:'scelta', testo:'Da quale pratica medievale nascono le crociate?',
     opzioni:['Dal pellegrinaggio penitenziale verso Roma, Santiago e Gerusalemme',
              'Dalle spedizioni commerciali delle città marinare',
              'Dai tornei cavallereschi organizzati dai signori',
              'Dalle guerre private fra famiglie nobili'], giusta:0},

    {tipo:'scelta', testo:'Qual è il casus belli immediato dell\'appello di Clermont?',
     opzioni:['L\'imperatore bizantino Alessio Comneno chiede aiuto contro i Selgiuchidi',
              'I musulmani distruggono il Santo Sepolcro',
              'Il papa viene minacciato dall\'imperatore tedesco',
              'I pellegrini vengono attaccati sulle strade d\'Europa'], giusta:0},

    {tipo:'scelta', testo:'Come viene presentata la spedizione nella Historia Hierosolymitana?',
     opzioni:['Un pellegrinaggio armato che garantisce il perdono dei peccati',
              'Una campagna militare di pura conquista territoriale',
              'Una missione diplomatica presso il sultano d\'Egitto',
              'Una spedizione commerciale protetta dalle armi'], giusta:0},

    {tipo:'scelta', testo:'Come interpreta la crociata il predicatore Ali ibn Tahir al-Sulami?',
     opzioni:['Come una punizione divina per la divisione islamica, e invoca il jihad',
              'Come un\'occasione di commercio con l\'Occidente',
              'Come un evento privo di qualsiasi significato religioso',
              'Come una guerra che i musulmani non possono perdere'], giusta:0},

    {tipo:'scelta', testo:'Come descrive i Franchi il diplomatico Usama ibn Munqidh?',
     opzioni:['Valorosi in battaglia ma rozzi, ignoranti e privi di morale',
              'Nemici crudeli ma di raffinata educazione',
              'Alleati affidabili con cui commerciare in pace',
              'Un popolo indistinguibile dagli altri cristiani d\'Oriente'], giusta:0},

    {tipo:'scelta', testo:'Che cosa succede, nonostante la retorica apocalittica, nei decenni successivi?',
     opzioni:['Tolleranza precaria, scambi commerciali, alleanze tattiche',
              'Ogni contatto fra i due mondi viene interrotto del tutto',
              'I due popoli si fondono in una sola cultura comune',
              'Le ostilità cessano definitivamente e per sempre'], giusta:0},

    {tipo:'scelta', testo:'Quale battaglia del 1212 segna la svolta della Reconquista spagnola?',
     opzioni:['Las Navas de Tolosa',
              'Poitiers',
              'Lepanto',
              'Covadonga'], giusta:0},

    {tipo:'scelta', testo:'Contro chi è indetta la crociata albigese del 1208?',
     opzioni:['Contro i Càtari, cioè cristiani dissidenti dentro l\'Europa',
              'Contro i musulmani rimasti in Spagna',
              'Contro l\'imperatore bizantino',
              'Contro i Mongoli che avanzavano da est'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa succede quando un nemico diventa anche un vicino.'}
  ]
},
{
  titolo: 'Storia medievale · 4 — L\'Italia comunale e l\'Impero',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: se lo Stato sparisse domani, chi comanderebbe nella tua città?'},

    {tipo:'scelta', testo:'Quale autorità resta in piedi nelle città durante il vuoto di potere?',
     opzioni:['Il vescovo, che svolge funzioni di difesa e di giustizia',
              'Il conte nominato dall\'imperatore',
              'L\'assemblea di tutti gli abitanti',
              'Il capitano delle milizie cittadine'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è la coniuratio da cui nasce il Comune?',
     opzioni:['Un giuramento privato di mutua assistenza fra i cittadini più influenti',
              'Una congiura per uccidere il vescovo della città',
              'Un patto fra due città per difendersi a vicenda',
              'Un accordo commerciale fra le corporazioni'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa rivendica giurisdizione il Comune?',
     opzioni:['Sulla città e sul contado, cioè il territorio circostante',
              'Solo sulle mura e sulle porte cittadine',
              'Su tutta la regione, comprese le altre città',
              'Solo sui mercati e sulle fiere'], giusta:0},

    {tipo:'scelta', testo:'Chi erano i cives, cioè chi aveva davvero il potere nel Comune?',
     opzioni:['Maschi adulti, cristiani, proprietari di case e membri di un\'Arte',
              'Tutti gli abitanti maggiorenni della città',
              'I soli nobili di antica famiglia',
              'Chiunque pagasse le tasse, compresi gli immigrati'], giusta:0},

    {tipo:'scelta', testo:'Chi restava ai margini, utile all\'economia ma senza diritti politici?',
     opzioni:['Lavoratori salariati, artigiani poveri, immigrati',
              'I mercanti che venivano da altre città vicine',
              'I chierici, i religiosi e i frati mendicanti',
              'I proprietari terrieri che vivevano fuori città'], giusta:0},

    {tipo:'scelta', testo:'Che cosa conclude lo storico Giuliano Milani sul Comune?',
     opzioni:['Un patto oligarchico: libertà verso l\'esterno, non uguaglianza',
              'Una democrazia moderna in tutto e per tutto, già allora',
              'Una monarchia mascherata da repubblica cittadina',
              'Un\'istituzione priva di qualunque potere reale'], giusta:0},

    {tipo:'scelta', testo:'Che cosa colpisce Ottone di Frisinga nell\'Italia comunale?',
     opzioni:['Che alle cariche pubbliche arrivino giovani di bassa condizione',
              'Che le città siano più povere di quelle tedesche',
              'Che i cittadini rifiutino di combattere',
              'Che i vescovi abbiano perso ogni autorità'], giusta:0},

    {tipo:'scelta', testo:'Quale città viene fondata in Piemonte come provocazione al Barbarossa?',
     opzioni:['Alessandria, chiamata così in onore di papa Alessandro III',
              'Novara, roccaforte della Lega Lombarda',
              'Asti, alleata del papato',
              'Vercelli, sede del giuramento di Pontida'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa spaventava l\'Impero nei Comuni italiani.'}
  ]
},
{
  titolo: 'Storia medievale · 5 — Papato, Impero e monarchie nazionali',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: chi comanda su un re, se un re esiste?'},

    {tipo:'scelta', testo:'Che cosa dice l\'immagine del sole e della luna in Innocenzo III?',
     opzioni:['Il papato brilla di luce propria, l\'impero riflette quella ricevuta',
              'Papato e impero brillano entrambi della stessa luce',
              'L\'impero illumina il papato nelle cose terrene',
              'Sole e luna si alternano nel governo del mondo'], giusta:0},

    {tipo:'scelta', testo:'Che conseguenza trae Innocenzo III da quell\'immagine?',
     opzioni:['L\'imperatore è un suo delegato subordinato',
              'L\'imperatore governa da pari a pari col papa',
              'L\'imperatore non ha bisogno dell\'approvazione papale',
              'Il papa deve occuparsi solo delle anime'], giusta:0},

    {tipo:'scelta', testo:'In che consiste l\'anomalia del «doppio regno» di Federico II?',
     opzioni:['Tiene insieme Regno di Sicilia e corona imperiale',
              'Governa contemporaneamente la Francia e la Germania',
              'È re di due città rivali dell\'Italia settentrionale',
              'Regna insieme al figlio, con i poteri divisi a metà'], giusta:0},

    {tipo:'scelta', testo:'Qual è la strategia di Federico II nei due territori?',
     opzioni:['Potere assoluto al Sud, pacificazione dei principi tedeschi al Nord',
              'Potere assoluto al Nord, autonomia lasciata al Sud',
              'Rinuncia al Sud per concentrarsi sulla Germania',
              'Divisione dei due regni fra due suoi figli'], giusta:0},

    {tipo:'scelta', testo:'Chi si allea contro Federico II nella lotta contro i Comuni?',
     opzioni:['La Lega dei Comuni e il papato',
              'La Francia e l\'Inghilterra',
              'L\'impero bizantino e Venezia',
              'I principi tedeschi e i Normanni'], giusta:0},

    {tipo:'scelta', testo:'Quali sono le due vittorie chiave dei due schieramenti?',
     opzioni:['Cortenuova nel 1237 per l\'imperatore, Parma nel 1248 per i Comuni',
              'Legnano nel 1176 per l\'imperatore, Cortenuova per i Comuni',
              'Parma nel 1248 per l\'imperatore, Cortenuova per i Comuni',
              'Benevento nel 1266 per entrambi, in momenti diversi'], giusta:0},

    {tipo:'scelta', testo:'Come giudica Giuliano Milani lo scontro fra Federico II e i Comuni?',
     opzioni:['Non solo avversari militari: erano il banco di prova politico',
              'I Comuni furono sconfitti militarmente e politicamente',
              'Lo scontro non ebbe conseguenze durature per nessuno',
              'I Comuni furono sempre alleati fedeli dell\'imperatore'], giusta:0},

    {tipo:'scelta', testo:'Come si chiude, con le Paci di Caltabellotta del 1302, la questione del Mezzogiorno?',
     opzioni:['La Sicilia agli Aragonesi, Napoli agli Angioini',
              'Tutto il Sud passa sotto gli Angioini di Francia',
              'Tutto il Sud passa sotto gli Aragonesi di Spagna',
              'Il Sud torna sotto il controllo diretto del papa'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire perché il Sud resta diviso per secoli.'}
  ]
},
{
  titolo: 'Storia medievale · 6 — Le civiltà extraeuropee',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: se un popolo non scrive, ha una storia?'},

    {tipo:'scelta', testo:'Che cosa caratterizza le civiltà precolombiane fino al 1492?',
     opzioni:['L\'isolamento assoluto: nessuno scambio con l\'Eurasia e l\'Africa',
              'Un intenso commercio con l\'Asia attraverso il Pacifico',
              'Contatti regolari con i navigatori vichinghi',
              'Un continuo scambio di tecnologie con l\'Africa'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue la Mesoamerica come area culturale?',
     opzioni:['Società complesse, calendari precisi e architettura monumentale',
              'Popolazioni nomadi senza insediamenti stabili',
              'Un\'agricoltura basata sull\'allevamento del bestiame',
              'L\'assenza di qualunque forma di scrittura o calcolo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa caratterizza l\'area andina?',
     opzioni:['Reti infrastrutturali estese e agricoltura terrazzata ad alta quota',
              'Grandi città portuali affacciate sul Pacifico',
              'Un impero fondato sul commercio marittimo',
              'Popolazioni disperse senza organizzazione statale'], giusta:0},

    {tipo:'scelta', testo:'Perché la storiografia precolombiana usa fonti ausiliarie?',
     opzioni:['Mancano archivi scritti, distrutti anche dai conquistatori',
              'Le fonti scritte sono troppe per essere lette tutte',
              'Gli storici preferiscono gli oggetti ai documenti',
              'I documenti sono conservati in archivi inaccessibili'], giusta:0},

    {tipo:'scelta', testo:'Che cosa studia l\'antropologia in questo campo?',
     opzioni:['Le popolazioni indigene attuali e la continuità di pratiche e riti',
              'I resti materiali sepolti negli scavi',
              'I codici e i simboli religiosi dipinti',
              'I documenti fiscali dei conquistatori'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa si fonda il modello africano di memoria sociale?',
     opzioni:['Sul griot, professionista della memoria e consigliere dei re',
              'Sugli archivi conservati nei monasteri',
              'Sulle iscrizioni scolpite nella pietra',
              'Sui registri commerciali dei mercanti arabi'], giusta:0},

    {tipo:'scelta', testo:'Che differenza c\'è fra la memoria orale e quella scritta, secondo la slide?',
     opzioni:['La scritta fissa, l\'orale adatta il passato al presente',
              'La scritta è sempre più affidabile della memoria orale',
              'L\'orale conserva molti più dettagli della scritta',
              'Non c\'è nessuna differenza rilevante fra le due'], giusta:0},

    {tipo:'scelta', testo:'Perché la scrittura cinese ideografica tenne unito l\'impero?',
     opzioni:['Funzionari che parlavano dialetti diversi leggevano lo stesso testo',
              'Perché era più semplice da imparare degli alfabeti',
              'Perché veniva insegnata a tutta la popolazione',
              'Perché permetteva di scrivere molto più in fretta'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa tiene insieme un impero enorme.'}
  ]
},
{
  titolo: 'Storia medievale · 7 — La crisi del Trecento',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: dopo una catastrofe, chi sopravvive sta meglio o peggio di prima?'},

    {tipo:'scelta', testo:'In che cosa consiste la «trappola malthusiana» del Trecento?',
     opzioni:['La popolazione era cresciuta oltre la capacità del sistema agricolo',
              'Le terre erano troppe per la popolazione disponibile',
              'Il clima era migliorato troppo in fretta',
              'La produzione superava di molto il consumo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa provoca lo sfruttamento delle terre marginali?',
     opzioni:['Rendimenti decrescenti: si lavora di più e si raccoglie di meno',
              'Un aumento costante della produzione per ettaro',
              'La scomparsa delle carestie stagionali',
              'Il miglioramento della qualità del suolo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa muove i milites del pieno Medioevo, rispetto ai condottieri del Trecento?',
     opzioni:['I milites l\'onore e il feudo, i condottieri il denaro',
              'I milites il denaro e il contratto, i condottieri l\'onore',
              'Entrambi soltanto la fedeltà giurata al proprio re',
              'I milites la religione, i condottieri l\'idea di patria'], giusta:0},

    {tipo:'scelta', testo:'Che effetto sociale hanno le compagnie di ventura?',
     opzioni:['Saccheggio sistematico e devastazione prolungata delle campagne',
              'Conflitti limitati e localizzati come in passato',
              'La fine delle guerre private fra signori',
              'La protezione stabile delle città murate'], giusta:0},

    {tipo:'scelta', testo:'Qual è la catena che porta dal crollo demografico ai salari?',
     opzioni:['Meno bocche, meno lavoratori, più potere contrattuale, salari più alti',
              'Meno bocche, meno domanda, salari più bassi',
              'Più bocche, più lavoro, salari più alti',
              'Meno lavoratori, meno produzione, salari invariati'], giusta:0},

    {tipo:'scelta', testo:'Che cosa vuol dire che la tragedia «spezzò la stagnazione feudale»?',
     opzioni:['I sopravvissuti, rari, poterono pretendere di più',
              'Il sistema feudale si rafforzò per reazione alla crisi',
              'La popolazione tornò subito ai livelli di prima',
              'I signori riuscirono a imporre nuovi obblighi ai servi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono i «fustagni» del nuovo modello manifatturiero?',
     opzioni:['Stoffe miste a base di cotone, più leggere ed economiche',
              'Tessuti di lana pesante per i nobili',
              'Sete pregiate importate dall\'Oriente',
              'Panni grezzi usati solo per i sacchi'], giusta:0},

    {tipo:'scelta', testo:'A chi si rivolge la nuova manifattura?',
     opzioni:['A una clientela meno ricca ma molto più numerosa',
              'Alla sola élite nobiliare, come prima',
              'Esclusivamente ai mercati d\'Oriente',
              'Agli eserciti mercenari in campagna'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire perché un disastro può cambiare un\'economia.'}
  ]
},
{
  titolo: 'Storia medievale · 8 — La crisi dei poteri universali',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: da dove viene il potere di chi comanda — dall\'alto o dal basso?'},

    {tipo:'scelta', testo:'Che cosa fa Filippo IV il Bello nel 1301?',
     opzioni:['Tassa il clero e processa un vescovo in tribunale ordinario',
              'Scomunica il papa e ne fa eleggere un altro al suo posto',
              'Trasferisce la sede papale da Roma ad Avignone',
              'Convoca un concilio per riformare tutta la Chiesa'], giusta:0},

    {tipo:'scelta', testo:'Perché quel gesto non è solo una disputa fiscale?',
     opzioni:['Rivendica la sovranità dello Stato contro il papa',
              'Perché riguarda una somma di denaro molto alta',
              'Perché quel vescovo era un parente stretto del re',
              'Perché avviene proprio durante un anno giubilare'], giusta:0},

    {tipo:'scelta', testo:'Che cosa dice l\'allegoria delle «due spade»?',
     opzioni:['Entrambe sono della Chiesa, anche quella materiale',
              'Una al papa e una all\'imperatore, indipendenti',
              'Le due spade rappresentano la guerra e la pace',
              'Le due spade sono la fede e la ragione umana'], giusta:0},

    {tipo:'scelta', testo:'Che condizione pone la dottrina alla spada materiale?',
     opzioni:['Solo «secondo il comando del clero»',
              'Liberamente dal re, in qualunque circostanza',
              'In nessun caso, perché la violenza è vietata',
              'Solo contro gli infedeli e mai fra cristiani'], giusta:0},

    {tipo:'scelta', testo:'Chi pubblica il Defensor pacis nel 1324?',
     opzioni:['Marsilio da Padova',
              'Guglielmo di Ockham',
              'Bonifacio VIII',
              'Dante Alighieri'], giusta:0},

    {tipo:'scelta', testo:'Qual è la diagnosi di Marsilio sulla causa dei conflitti in Europa?',
     opzioni:['Le pretese teocratiche e l\'ingerenza politica della Chiesa',
              'L\'eccessiva debolezza dei sovrani nazionali',
              'La divisione dell\'Impero fra troppi principi',
              'La mancanza di un esercito comune cristiano'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma Marsilio sulla legittimità del potere?',
     opzioni:['Non discende dall\'alto: sale dal basso',
              'Discende direttamente da Dio al sovrano',
              'Appartiene per natura al più forte',
              'Deriva dall\'antichità della dinastia'], giusta:0},

    {tipo:'scelta', testo:'Che posizione assegna Marsilio alla Chiesa rispetto allo Stato?',
     opzioni:['Puramente spirituale: non giudica, non tassa, non legifera',
              'Autorità superiore, che controlla e corregge lo Stato',
              'Potere pari a quello dello Stato, in equilibrio con esso',
              'Istituzione che governa insieme al sovrano legittimo'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa cambia se il potere «sale dal basso».'}
  ]
},
{
  titolo: 'Storia medievale · 9 — L\'Italia degli Stati regionali',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: conviene essere il paese più ricco fra vicini più forti?'},

    {tipo:'scelta', testo:'Come si evolve il governo di Milano?',
     opzioni:['Dalla Signoria dei Visconti al Ducato, poi alla dinastia Sforza',
              'Dalla Repubblica oligarchica al Principato ereditario',
              'Dal Comune libero alla dominazione francese',
              'Dalla Signoria alla Repubblica popolare'], giusta:0},

    {tipo:'scelta', testo:'Che cosa caratterizza il Ducato di Milano?',
     opzioni:['Grande espansione, accentramento, poteri militari delegati',
              'Un territorio piccolo ma governato con grande stabilità',
              'Un governo affidato alle sole famiglie mercantili',
              'Una struttura federale fra città rimaste autonome'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa la Serrata veneziana?',
     opzioni:['Limita il Gran Consiglio alle famiglie storiche',
              'Chiude il porto ai mercanti stranieri',
              'Abolisce il Gran Consiglio in favore del doge',
              'Apre le cariche pubbliche a tutti i cittadini'], giusta:0},

    {tipo:'scelta', testo:'Quale organo veneziano nasce per la sicurezza dello Stato?',
     opzioni:['Il Consiglio dei Dieci',
              'Il Senato',
              'La Quarantia',
              'L\'Arengo'], giusta:0},

    {tipo:'scelta', testo:'Che cosa provoca la crisi avignonese nello Stato della Chiesa?',
     opzioni:['Il potere a Roma cade nelle mani dei signori locali e dell\'aristocrazia',
              'Il papa rafforza il controllo diretto sui territori',
              'Lo Stato della Chiesa viene diviso fra Francia e Impero',
              'Le città pontificie ottengono l\'indipendenza definitiva'], giusta:0},

    {tipo:'scelta', testo:'Chi riporta l\'ordine nello Stato della Chiesa?',
     opzioni:['Il cardinale Albornoz, inviato dal papa',
              'Cola di Rienzo, con la Repubblica Romana',
              'Cosimo de\' Medici, come mediatore',
              'Il doge di Venezia, per conto della Lega'], giusta:0},

    {tipo:'scelta', testo:'Qual è il rischio principale del sistema dei condottieri?',
     opzioni:['L\'infedeltà: combattono per il miglior offerente',
              'La mancanza di un vero addestramento militare',
              'Il costo troppo basso dei contratti che firmano',
              'L\'incapacità di combattere fuori dai confini'], giusta:0},

    {tipo:'scelta', testo:'Quale evento del 1492 fa saltare l\'equilibrio italiano?',
     opzioni:['La morte di Lorenzo de\' Medici',
              'La discesa di Carlo VIII in Italia',
              'La Pace di Lodi',
              'La congiura dei Pazzi'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire perché l\'Italia ricca non riesce a difendersi.'}
  ]
}
,
{
  titolo: 'Storia moderna · 1 — Carlo V e la Riforma protestante',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa succede a un\'idea quando qualcuno inventa il modo di stamparla?'},

    {tipo:'scelta', testo:'Come agisce il papato fra la fine del Quattrocento e l\'inizio del Cinquecento?',
     opzioni:['Come una signoria rinascimentale, presa da politica e mecenatismo',
              'Come una guida spirituale distante dalle cose del mondo',
              'Come un tribunale occupato a giudicare gli eretici',
              'Come una potenza militare che punta alla Terrasanta'], giusta:0},

    {tipo:'scelta', testo:'Di che cosa si occupa soprattutto Giulio II?',
     opzioni:['Guida di persona le truppe in battaglia: è un papa guerriero',
              'Riforma la disciplina del clero e chiude i conventi corrotti',
              'Convoca il concilio che risponderà a Lutero',
              'Finanzia le spedizioni verso il Nuovo Mondo'], giusta:0},

    {tipo:'scelta', testo:'Quali sono i quattro sintomi della corruzione della Chiesa?',
     opzioni:['Vendita delle indulgenze, simonia, concubinato, vescovi assenti',
              'Eresia, scisma, superstizione, idolatria',
              'Tassazione, usura, contrabbando, contraffazione',
              'Guerra, carestia, peste, ignoranza'], giusta:0},

    {tipo:'scelta', testo:'Come finisce la battaglia di Pavia del 1525?',
     opzioni:['Francesco I viene fatto prigioniero da Carlo V',
              'Carlo V perde il controllo dell\'Italia settentrionale',
              'La Francia conquista definitivamente Milano',
              'I due sovrani firmano una pace immediata'], giusta:0},

    {tipo:'scelta', testo:'Che cosa stabilisce la Pace di Cateau-Cambrésis del 1559?',
     opzioni:['La Francia perde l\'Italia, che passa sotto l\'egida asburgica',
              'La Francia ottiene Milano, Napoli e tutto il Mezzogiorno',
              'L\'Italia riconquista la propria piena indipendenza politica',
              'L\'Impero rinuncia a ogni pretesa sulla penisola italiana'], giusta:0},

    {tipo:'scelta', testo:'Perché la Chiesa vende le indulgenze?',
     opzioni:['Ha bisogno di denaro, e promette in cambio l\'assoluzione dal Purgatorio',
              'Vuole finanziare le crociate contro i turchi',
              'Deve pagare i debiti contratti con i banchieri tedeschi',
              'Cerca di sostituire le tasse ordinarie sui fedeli'], giusta:0},

    {tipo:'scelta', testo:'Che cosa contestano radicalmente le 95 tesi?',
     opzioni:['Il diritto della Chiesa di mediare la salvezza per denaro',
              'L\'autorità dei concili sulle questioni di fede',
              'La lingua latina usata nelle celebrazioni',
              'La proprietà delle terre nelle mani dei monasteri'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa Lutero durante l\'esilio nel castello di Federico di Sassonia?',
     opzioni:['Traduce la Bibbia in tedesco',
              'Scrive la Confessione di Augusta',
              'Organizza la rivolta dei contadini',
              'Negozia un accordo con l\'imperatore'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa fece davvero la differenza, la stampa o le tesi.'}
  ]
},
{
  titolo: 'Storia moderna · 2 — Riforma e Controriforma',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: chi combatte per la libertà di coscienza la concede poi agli altri?'},

    {tipo:'scelta', testo:'Che cosa fa Zwingli della messa tradizionale a Zurigo?',
     opzioni:['La abolisce e la riduce a una lettura commentata della Bibbia',
              'La conserva ma la fa celebrare in tedesco',
              'La affida ai laici invece che ai sacerdoti',
              'La riduce a due sole celebrazioni all\'anno'], giusta:0},

    {tipo:'scelta', testo:'In che cosa Zwingli è più radicale di Lutero?',
     opzioni:['Rifiuta ogni compromesso coi riti e toglie le immagini',
              'Accetta la presenza reale di Cristo nell\'eucaristia',
              'Mantiene intatta l\'autorità dei vescovi sulle diocesi',
              'Riconosce il primato del papa in materia di dottrina'], giusta:0},

    {tipo:'scelta', testo:'Che cosa succede a Michele Serveto nel 1553?',
     opzioni:['Fugge dall\'Inquisizione cattolica e viene bruciato dai calvinisti a Ginevra',
              'Viene condannato a Roma e giustiziato in piazza',
              'Ottiene asilo a Ginevra e vi muore di vecchiaia',
              'Viene liberato dopo aver abiurato le sue tesi'], giusta:0},

    {tipo:'scelta', testo:'Che cosa dimostra storicamente il caso Serveto?',
     opzioni:['La Riforma non portò subito la libertà di pensiero',
              'La Riforma fu tollerante fin dall\'inizio',
              'L\'Inquisizione cattolica era più mite di quella riformata',
              'Le condanne a morte per eresia erano già state abolite'], giusta:0},

    {tipo:'scelta', testo:'Quale data segna la nascita della Chiesa anglicana?',
     opzioni:['Il 1534, con l\'Atto di supremazia',
              'Il 1517, con le tesi di Lutero',
              'Il 1555, con la Pace di Augusta',
              'Il 1545, con l\'apertura del Concilio di Trento'], giusta:0},

    {tipo:'scelta', testo:'Quale effetto economico immediato ha l\'Atto di supremazia?',
     opzioni:['La monarchia incamera beni e terre della Chiesa cattolica inglese',
              'La Corona rinuncia a ogni entrata di origine ecclesiastica',
              'I monasteri diventano proprietà dei contadini',
              'Le tasse sul clero vengono abolite del tutto'], giusta:0},

    {tipo:'scelta', testo:'Quali sono tre riforme successive della Chiesa anglicana?',
     opzioni:['Fine del celibato, divieto delle immagini sacre, liturgia in inglese',
              'Ritorno del latino, culto dei santi, celibato obbligatorio',
              'Elezione dei vescovi, abolizione del battesimo, comunione mensile',
              'Chiusura delle università, censura dei libri, tribunali speciali'], giusta:0},

    {tipo:'scelta', testo:'Come si articola la risposta della Chiesa di Roma?',
     opzioni:['Rinnovamento interno da un lato, dura repressione esterna dall\'altro',
              'Solo repressione, senza nessuna riforma interna',
              'Solo riforma interna, senza misure repressive',
              'Trattative con i protestanti per riunire le due Chiese'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire fin dove arriva la tolleranza di chi ha appena vinto.'}
  ]
},
{
  titolo: 'Storia moderna · 5 — La guerra dei Trent\'anni e l\'Olanda',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: si può fare una pace se ognuno vuole che l\'altro cambi religione?'},

    {tipo:'scelta', testo:'Che cosa stabiliva il principio «cuius regio, eius religio»?',
     opzioni:['I sudditi seguono la religione del proprio signore',
              'Ogni suddito sceglie liberamente la propria religione',
              'La religione dell\'imperatore vale per tutto l\'Impero',
              'Ogni città decide a maggioranza la propria fede'], giusta:0},

    {tipo:'scelta', testo:'Quale confessione restava esclusa dalla Pace di Augusta?',
     opzioni:['I calvinisti',
              'I luterani',
              'I cattolici',
              'Gli anglicani'], giusta:0},

    {tipo:'scelta', testo:'Quali due blocchi si formano nel 1608-1609?',
     opzioni:['L\'Unione evangelica e la Lega cattolica',
              'La Lega di Cognac e la Lega Santa',
              'La Triplice alleanza e la Lega Lombarda',
              'L\'Unione di Utrecht e la Lega di Smalcalda'], giusta:0},

    {tipo:'scelta', testo:'Quali sono le quattro fasi della guerra, in ordine?',
     opzioni:['Boemo-palatina, danese, svedese, francese',
              'Danese, boemo-palatina, francese, svedese',
              'Svedese, danese, francese, boemo-palatina',
              'Francese, svedese, danese, boemo-palatina'], giusta:0},

    {tipo:'scelta', testo:'Che cosa decide la battaglia della Montagna Bianca del 1620?',
     opzioni:['Vince la parte cattolica: Federico V fugge dalla Boemia',
              'Vince la parte protestante: la Boemia diventa indipendente',
              'La Francia entra nel conflitto a fianco dell\'imperatore',
              'La guerra finisce subito con una pace generale in Europa'], giusta:0},

    {tipo:'scelta', testo:'Che cosa rappresenta Albrecht von Wallenstein?',
     opzioni:['L\'imprenditore privato della guerra, che vive di razzie',
              'Il comandante fedele nominato dall\'imperatore, senza compensi',
              'Il capo militare dei principi protestanti tedeschi',
              'Il negoziatore che porterà alla Pace di Westfalia'], giusta:0},

    {tipo:'scelta', testo:'Che cosa ottiene la Francia con la Pace di Westfalia?',
     opzioni:['Territori in Alsazia e i vescovati di Metz, Toul e Verdun',
              'La Pomerania occidentale e il primato sul Baltico',
              'L\'indipendenza delle Province Unite',
              'Il riconoscimento del proprio imperatore'], giusta:0},

    {tipo:'scelta', testo:'Quali indipendenze vengono riconosciute definitivamente a Westfalia?',
     opzioni:['Quelle della Svizzera e delle Province Unite',
              'Quelle della Boemia e dell\'Ungheria',
              'Quelle della Svezia e della Danimarca',
              'Quelle del Portogallo e della Catalogna'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa nasce davvero nel 1648.'}
  ]
},
{
  titolo: 'Storia moderna · 6 — Rivoluzioni inglesi e assolutismi',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: chi controlla il denaro di uno Stato controlla anche il resto?'},

    {tipo:'scelta', testo:'Che cosa unifica Giacomo I Stuart nel 1603?',
     opzioni:['Le corone di Inghilterra, Scozia e Irlanda',
              'Le corone di Inghilterra e Francia',
              'I parlamenti di Londra e di Edimburgo',
              'Le Chiese anglicana e presbiteriana'], giusta:0},

    {tipo:'scelta', testo:'In che consiste il progetto assolutistico degli Stuart?',
     opzioni:['Governare senza il parlamento, con l\'alta aristocrazia',
              'Governare insieme al parlamento, ma senza i Comuni',
              'Abolire la monarchia in favore di una repubblica',
              'Cedere alle contee il potere di imporre le tasse'], giusta:0},

    {tipo:'scelta', testo:'Chi è la gentry che cresce in quegli anni?',
     opzioni:['La piccola nobiltà di campagna e i ceti mercantili',
              'L\'alta aristocrazia fondiaria di antica origine',
              'Gli operai delle prime manifatture',
              'Il clero anglicano di campagna'], giusta:0},

    {tipo:'scelta', testo:'Che cosa chiedono i puritani?',
     opzioni:['L\'eliminazione delle gerarchie ecclesiastiche',
              'Il ritorno della Chiesa cattolica in Inghilterra',
              'La conservazione della liturgia anglicana',
              'L\'unione fra Chiesa e Corona'], giusta:0},

    {tipo:'scelta', testo:'Che cosa innesca la guerra civile del 1642?',
     opzioni:['Carlo I tenta di arrestare i leader del parlamento',
              'Viene decapitato un vescovo anglicano a Londra',
              'Scoppia una rivolta dei contadini in Scozia',
              'La Francia invade le coste dell\'Inghilterra'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue la New Model Army di Cromwell?',
     opzioni:['Disciplina, avanzamento per merito e fanatismo religioso puritano',
              'L\'impiego di mercenari stranieri esperti',
              'Il comando affidato ai soli nobili di antica famiglia',
              'L\'uso esclusivo della cavalleria pesante'], giusta:0},

    {tipo:'scelta', testo:'Che cos\'è il Rump Parliament?',
     opzioni:['Il parlamento ridotto, dopo che Cromwell ne ha epurato i moderati',
              'Il parlamento scozzese riunito a Edimburgo',
              'L\'assemblea dei vescovi anglicani',
              'Il consiglio militare della New Model Army'], giusta:0},

    {tipo:'scelta', testo:'Che cosa stabilisce l\'Habeas Corpus Act del 1679?',
     opzioni:['Nessuno può essere incarcerato senza conoscere l\'accusa e vedere un giudice',
              'Il re non può convocare il parlamento senza il consenso dei lord',
              'I cattolici non possono ricoprire cariche pubbliche',
              'Il parlamento controlla direttamente l\'esercito'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa protegge davvero un cittadino dal potere.'}
  ]
},
{
  titolo: 'Storia moderna · 8 — La civiltà dei Lumi',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: dove si formavano le idee, prima dei social?'},

    {tipo:'scelta', testo:'Che cosa afferma Kant definendo l\'Illuminismo?',
     opzioni:['L\'uscita dell\'uomo da una minorità di cui è colpevole',
              'Il trionfo definitivo della scienza sulla filosofia',
              'Il ritorno alla saggezza dei filosofi antichi',
              'La fine di ogni forma di religione organizzata'], giusta:0},

    {tipo:'scelta', testo:'Che cosa teorizza Condorcet nel Saggio di un quadro storico?',
     opzioni:['L\'esperienza del passato permette di prevedere e migliorare il futuro',
              'La storia si ripete sempre uguale a sé stessa',
              'Il progresso è impossibile senza una guida religiosa',
              'La natura pone un limite invalicabile al perfezionamento umano'], giusta:0},

    {tipo:'scelta', testo:'Su che cosa si concentra Montesquieu?',
     opzioni:['Sulla separazione dei poteri, per impedire il dispotismo',
              'Sulla sovranità popolare e il patto sociale',
              'Sulla tolleranza religiosa e la critica al fanatismo',
              'Sulla diffusione del sapere contro il monopolio religioso'], giusta:0},

    {tipo:'scelta', testo:'Che cosa invoca Rousseau, rifiutando il progresso corrotto?',
     opzioni:['Un nuovo patto sociale basato su uguaglianza e sovranità popolare',
              'Il ritorno della monarchia assoluta di diritto divino',
              'La separazione dei tre poteri dello Stato',
              'Un\'enciclopedia che raccolga tutto il sapere'], giusta:0},

    {tipo:'scelta', testo:'Che ruolo hanno i salotti e i caffè?',
     opzioni:['Permettono il confronto orizzontale delle idee fra ceti diversi',
              'Servono solo a intrattenere l\'aristocrazia annoiata',
              'Sono luoghi di culto per i deisti',
              'Ospitano le riunioni segrete dei governi'], giusta:0},

    {tipo:'scelta', testo:'Che effetto ha la libertà di stampa sull\'informazione?',
     opzioni:['Libri e giornali scardinano il monopolio informativo dei governi',
              'Riduce il numero dei libri stampati per via della censura',
              'Aumenta il controllo dei sovrani sull\'opinione pubblica',
              'Rende la lettura un privilegio ancora più ristretto'], giusta:0},

    {tipo:'scelta', testo:'Qual è la contraddizione centrale dei Lumi?',
     opzioni:['Rivendicavano libertà in Europa mentre l\'economia si reggeva sulla tratta',
              'Difendevano la religione mentre criticavano la Chiesa',
              'Chiedevano riforme ma rifiutavano ogni cambiamento',
              'Esaltavano la ragione ma vietavano la scienza'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa Edward Long nel 1774?',
     opzioni:['Usa false argomentazioni scientifiche per giustificare la schiavitù',
              'Pubblica il primo trattato contro la tratta degli schiavi',
              'Fonda la prima società abolizionista inglese a Londra',
              'Traduce l\'Enciclopedia francese in lingua inglese'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa non vedevano di sé i filosofi dei Lumi.'}
  ]
},
{
  titolo: 'Storia moderna · 9 — La prima rivoluzione industriale',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: perché per fare fabbriche serve prima cambiare l\'agricoltura?'},

    {tipo:'scelta', testo:'Che cosa fanno le recinzioni, le enclosures?',
     opzioni:['Aumentano la resa delle terre e liberano contadini dalle campagne',
              'Proteggono i contadini dall\'espulsione dai loro campi',
              'Riducono la produzione agricola complessiva',
              'Impediscono ai proprietari di vendere la terra'], giusta:0},

    {tipo:'scelta', testo:'Qual è la catena che porta dall\'agricoltura alla fabbrica?',
     opzioni:['Più cibo, più popolazione, più manodopera e più consumatori',
              'Meno cibo, meno popolazione, più macchine',
              'Più terra, meno lavoro, meno commercio',
              'Più esportazioni, meno consumi interni, meno fabbriche'], giusta:0},

    {tipo:'scelta', testo:'Che cosa provoca il balzo demografico del Settecento?',
     opzioni:['Un calo della mortalità unito a una natalità che resta alta',
              'Un aumento improvviso delle nascite senza altri fattori',
              'L\'arrivo di immigrati dalle colonie',
              'La fine delle guerre in tutta Europa'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma Adam Smith nella Ricchezza delle Nazioni del 1776?',
     opzioni:['Il mercato libero trasforma l\'egoismo in benessere collettivo',
              'Lo Stato deve dirigere ogni singolo scambio commerciale',
              'La ricchezza di una nazione dipende dall\'oro che accumula',
              'Il commercio con l\'estero impoverisce sempre chi lo pratica'], giusta:0},

    {tipo:'scelta', testo:'Con quale esempio Smith spiega la sua idea?',
     opzioni:['Il macellaio e il fornaio, che ci nutrono badando al proprio interesse',
              'Il re e i sudditi, legati da un patto di fedeltà',
              'Il contadino e il proprietario, uniti dal raccolto',
              'L\'artigiano e l\'apprendista, legati dal mestiere'], giusta:0},

    {tipo:'scelta', testo:'Qual è il colpo di genio del condensatore separato di Watt?',
     opzioni:['Raffredda il vapore a parte, riducendo lo spreco di calore',
              'Aumenta di molto la pressione dentro la caldaia',
              'Sostituisce il carbone con la sola energia idraulica',
              'Elimina del tutto la necessità di usare un pistone'], giusta:0},

    {tipo:'scelta', testo:'Che cosa cambia con il moto rotatorio?',
     opzioni:['La macchina può collegarsi a ingranaggi e telai industriali',
              'La macchina consuma molto meno carbone',
              'La macchina può funzionare senza acqua',
              'La macchina diventa più piccola e trasportabile'], giusta:0},

    {tipo:'scelta', testo:'Perché il sistema di fabbrica sostituisce il lavoro a domicilio?',
     opzioni:['I macchinari sono grandi, pesanti e costosi: il lavoro va dove sta l\'energia',
              'Perché i lavoratori preferivano stare insieme',
              'Perché lo Stato vietò il lavoro nelle case',
              'Perché il lavoro a domicilio era più costoso da controllare'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa perde l\'operaio entrando in fabbrica.'}
  ]
},
{
  titolo: 'Storia moderna · 12 — L\'età napoleonica',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: chi arriva a colmare un vuoto di potere, poi lo restituisce?'},

    {tipo:'scelta', testo:'Qual è la situazione della Francia nel 1795?',
     opzioni:['Inflazione, malcontento, Direttorio debole e precario',
              'Economia solida e governo saldamente sostenuto dal paese',
              'Pace interna e concordia dopo la fine del Terrore',
              'Monarchia restaurata col consenso generale dei francesi'], giusta:0},

    {tipo:'scelta', testo:'Perché l\'esercito diventa l\'istituzione più solida della Francia?',
     opzioni:['È animato dall\'entusiasmo rivoluzionario e coeso attorno alla nazione',
              'Riceve più denaro di ogni altra istituzione',
              'È comandato direttamente dal Direttorio',
              'È composto quasi solo da mercenari professionisti'], giusta:0},

    {tipo:'scelta', testo:'Che cosa succede alle «repubbliche sorelle» create in Italia?',
     opzioni:['Diventano entità vassalle, sfruttate con requisizioni e saccheggi d\'arte',
              'Ottengono piena indipendenza dalla Francia',
              'Vengono restituite ai sovrani precedenti',
              'Si uniscono in un unico Stato italiano'], giusta:0},

    {tipo:'scelta', testo:'Che cosa esprime Ugo Foscolo nelle Ultime lettere di Jacopo Ortis?',
     opzioni:['Lo shock di Campoformio: i francesi non sono liberatori ma conquistatori',
              'L\'entusiasmo per la vittoria delle armi francesi',
              'La speranza in un ritorno degli antichi sovrani',
              'L\'indifferenza dei letterati verso la politica'], giusta:0},

    {tipo:'scelta', testo:'Quali sono, in ordine, i quattro passaggi del 18 brumaio?',
     opzioni:['Crisi, golpe, triumvirato, plebiscito di legittimazione',
              'Plebiscito, golpe, crisi, triumvirato',
              'Golpe, crisi, plebiscito, triumvirato',
              'Triumvirato, crisi, golpe, plebiscito'], giusta:0},

    {tipo:'scelta', testo:'Che ruolo assume Napoleone nel triumvirato?',
     opzioni:['Primo Console, con le prerogative esecutive e legislative',
              'Uno dei tre consoli, con poteri uguali agli altri',
              'Comandante militare senza incarichi civili',
              'Presidente del Senato, con poteri di controllo'], giusta:0},

    {tipo:'scelta', testo:'Quali conquiste rivoluzionarie il Codice civile mantiene?',
     opzioni:['Uguaglianza giuridica, laicità dello Stato, abolizione dei privilegi feudali',
              'Suffragio universale, libertà di sciopero, istruzione gratuita',
              'Sovranità popolare, elezione dei giudici, libertà di associazione',
              'Divisione delle terre, abolizione della proprietà, pieni diritti alle donne'], giusta:0},

    {tipo:'scelta', testo:'Quali restrizioni autoritarie contiene lo stesso Codice?',
     opzioni:['Famiglia patriarcale, divieto di sciopero, schiavitù nelle colonie',
              'Abolizione della proprietà privata e del diritto di eredità',
              'Divieto di ogni culto religioso praticato in pubblico',
              'Soppressione di tutti i tribunali civili ordinari'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire che cosa resta della Rivoluzione dentro il Codice.'}
  ]
},
{
  titolo: 'Storia moderna · 13 — La Restaurazione',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: si possono rimettere le cose come stavano venticinque anni prima?'},

    {tipo:'scelta', testo:'Qual è l\'obiettivo dichiarato del Congresso di Vienna?',
     opzioni:['Cancellare l\'eredità rivoluzionaria e ripristinare gli equilibri rotti',
              'Fondare una federazione europea di Stati liberi',
              'Dividere l\'Europa fra Francia e Inghilterra',
              'Riconoscere i confini nati dalle guerre napoleoniche'], giusta:0},

    {tipo:'scelta', testo:'Chi promuove il principio di legittimità, e perché?',
     opzioni:['Talleyrand, per difendere l\'integrità della Francia sconfitta',
              'Metternich, per contenere la potenza russa',
              'Lo zar Alessandro I, per estendere la propria influenza',
              'Il re di Prussia, per ottenere la Renania'], giusta:0},

    {tipo:'scelta', testo:'Che cosa afferma il principio di equilibrio?',
     opzioni:['Nessuna nazione deve diventare tanto potente da minacciare le altre',
              'Ogni sovrano legittimo deve tornare sul proprio trono',
              'I confini vanno tracciati secondo la lingua dei popoli',
              'Le potenze vincitrici devono spartirsi i territori in parti uguali'], giusta:0},

    {tipo:'scelta', testo:'Quale dei due principi prevale, in caso di conflitto?',
     opzioni:['L\'equilibrio prevale sempre sulla legittimità',
              'La legittimità prevale sempre sull\'equilibrio',
              'Si decide caso per caso senza regola fissa',
              'Prevale la volontà del sovrano più potente'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono gli «Stati cuscinetto» creati attorno alla Francia?',
     opzioni:['Territori rafforzati per contenere ogni futura espansione francese',
              'Zone smilitarizzate senza governo proprio',
              'Colonie affidate alla gestione austriaca',
              'Repubbliche indipendenti garantite dall\'Inghilterra'], giusta:0},

    {tipo:'scelta', testo:'Che forma prende il dominio austriaco diretto in Italia?',
     opzioni:['Il Regno Lombardo-Veneto, amministrato e presidiato da Vienna',
              'Il Regno di Sardegna, retto da un vicerè austriaco',
              'Il Granducato di Toscana, annesso all\'Impero',
              'Lo Stato della Chiesa, governato da un legato imperiale'], giusta:0},

    {tipo:'scelta', testo:'Che cosa esige il reazionario Joseph de Maistre?',
     opzioni:['Il rifiuto totale del nuovo e il ritorno al connubio trono-altare',
              'Una monarchia costituzionale con garanzie per i cittadini',
              'L\'accettazione pragmatica di alcune conquiste rivoluzionarie',
              'La libertà di stampa e di religione'], giusta:0},

    {tipo:'scelta', testo:'Che cosa distingue il conservatore Burke dal reazionario?',
     opzioni:['Rifiuta la rottura violenta ma accetta uno sviluppo organico e progressivo',
              'Rifiuta ogni cambiamento, anche graduale',
              'Chiede il ritorno immediato all\'assolutismo',
              'Sostiene la sovranità popolare senza limiti'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire perché la Restaurazione non poteva durare.'}
  ]
},
{
  titolo: 'Storia moderna · 16 — Il 1848, primavera dei popoli',
  domande: [
    {tipo:'nuvola', testo:'Prima di cominciare: che cosa cambia se una notizia viaggia in un\'ora invece che in un mese?'},

    {tipo:'scelta', testo:'Che ruolo ha il telegrafo nel 1848?',
     opzioni:['Le notizie corrono più degli eserciti: la rivolta si propaga',
              'Permette ai governi di prevenire e soffocare ogni rivolta',
              'Serve soltanto a coordinare i movimenti delle truppe',
              'Non era ancora stato inventato nell\'Europa di allora'], giusta:0},

    {tipo:'scelta', testo:'Che cosa chiede la borghesia liberale?',
     opzioni:['Costituzioni, diritti politici, emancipazione nazionale',
              'Giustizia sociale, diritto al lavoro, suffragio universale',
              'Il ritorno dei sovrani legittimi',
              'L\'abolizione della proprietà privata'], giusta:0},

    {tipo:'scelta', testo:'Che cosa chiede invece il proletariato urbano?',
     opzioni:['Giustizia sociale, diritto al lavoro e suffragio universale',
              'Costituzioni e libertà di stampa',
              'La restaurazione delle corporazioni artigiane',
              'Il ritorno alla campagna e alla terra'], giusta:0},

    {tipo:'scelta', testo:'Come aggira l\'opposizione francese il divieto di riunione politica?',
     opzioni:['Con la campagna dei banchetti, comizi mascherati da pranzi privati',
              'Con le riunioni notturne nelle chiese',
              'Con la pubblicazione di giornali clandestini',
              'Con le assemblee dentro le caserme'], giusta:0},

    {tipo:'scelta', testo:'Che cosa fa scoppiare la rivoluzione a Parigi il 22 febbraio 1848?',
     opzioni:['Il governo vieta un banchetto: nascono le barricate',
              'Il re abdica all\'improvviso e lascia la capitale',
              'L\'esercito spara sulla folla in una manifestazione',
              'Viene arrestato il capo dell\'opposizione liberale'], giusta:0},

    {tipo:'scelta', testo:'Che cosa sono gli Ateliers Nationaux proposti da Louis Blanc?',
     opzioni:['Fabbriche di Stato per garantire il diritto al lavoro',
              'Scuole professionali per gli operai disoccupati',
              'Cooperative fondate dai lavoratori stessi',
              'Magazzini pubblici per distribuire il pane'], giusta:0},

    {tipo:'scelta', testo:'Perché quell\'esperimento spacca il fronte rivoluzionario?',
     opzioni:['La tassa che li finanzia scontenta le campagne',
              'Gli operai si rifiutano di andarci a lavorare',
              'Il re li dichiara illegali e li fa chiudere subito',
              'Non producono nulla che si possa poi rivendere'], giusta:0},

    {tipo:'scelta', testo:'Con quale percentuale Luigi Napoleone vince nel dicembre 1848?',
     opzioni:['Con il 75% dei voti',
              'Con il 51% dei voti',
              'Con il 60% dei voti',
              'Con il 90% dei voti'], giusta:0},

    {tipo:'nuvola', testo:'Alla fine: una parola per dire chi vince quando la paura supera la speranza.'}
  ]
}
];
