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
];
