-- ══════════════════════════════════════════════════════════
--   12 · ACCENTI E APOSTROFI NEI BRANI DELLA LETTURA ANNOTATA
--
--   Scrivendo il file 11 ho tolto accenti e apostrofi dai testi
--   per non litigare con le virgolette del SQL. Era una precauzione
--   inutile: il quoting a dollaro ($b$ ... $b$) accetta l apostrofo
--   senza doverlo raddoppiare, e infatti i testi lunghi lo usavano
--   gia. Il risultato e che in classe si legge «La banalita del
--   male» e «l uomo e un animale», che su una lettura annotata —
--   dove si discute proprio come e scritta una frase — e il tipo
--   di errore peggiore.
--
--   Questo file riscrive i sei brani con l italiano giusto.
--   Non tocca le annotazioni: quelle puntano al brano tramite
--   brano_id e alla frase tramite il numero d ordine, e il numero
--   d ordine non cambia perche non ho spostato nessuna riga vuota.
--
--   Si puo rieseguire quante volte si vuole: aggiorna i brani
--   cercandoli sia col titolo vecchio sia con quello nuovo.
-- ══════════════════════════════════════════════════════════


-- ── 1 · La botte forata ────────────────────────────────────
update public.brani set
  obiettivo = $q$Capire perché, secondo Socrate, una vita spesa a soddisfare desideri non possa mai dirsi riuscita.$q$,
  consegna  = $q$Leggi tutto una volta senza segnare niente. Poi rileggi e usa le quattro etichette: «non ho capito» dove ti sei fermato, «qui sta il punto» sulla frase che regge il ragionamento, «collegamento» dove ti viene in mente altro, «commento» per il resto.$q$,
  domande = array[
    $q$Che cosa rappresentano le botti e che cosa rappresenta chi le riempie?$q$,
    $q$Socrate dice che l'anima degli sciocchi è come un vaso forato: forato da che cosa?$q$,
    $q$Trova la frase in cui il paragone smette di essere un'immagine e diventa un argomento.$q$,
    $q$Callicle risponde che una vita così è una vita da sasso. Perché è una buona obiezione?$q$
  ],
  testo = $b$Immagina due uomini, ciascuno con molte botti. Le botti del primo sono sane e piene, una di vino, una di miele, una di latte; i liquidi sono rari e costosi, si procurano con molta fatica. Riempite le botti, quell'uomo non ci versa più nulla e non ci pensa più: sta tranquillo.

L'altro può procurarsi i liquidi, ma con difficoltà, e le sue botti sono forate e marce: è costretto a riempirle giorno e notte, o soffre le pene più grandi. Ora, se la vita è così, mi dici che quella dello sciocco è più felice di quella dell'uomo ordinato?

Callicle dice: no, Socrate. Per quello che ha riempito le botti non c'è più nessun piacere; quella è la vita di un sasso, come ho detto poco fa: una volta riempite, non si gode più né si soffre. La vita piacevole sta invece proprio in questo, che scorra dentro il più possibile.

E Socrate: dunque se scorre molto dentro, deve anche uscire molto, e ci vogliono grandi buchi per il deflusso. Questa non è la vita di un morto né di un sasso, ma di un uccello marino, che mangia e insieme evacua senza sosta.$b$
where titolo = 'La botte forata';


-- ── 2 · Il legno storto ────────────────────────────────────
update public.brani set
  obiettivo = $q$Capire perché, secondo Kant, la politica non chieda agli uomini di essere buoni ma di essere ben governati — e perché il problema non si risolva mai del tutto.$q$,
  consegna  = $q$Segna con «non ho capito» ogni frase che hai dovuto rileggere due volte: sono le stesse su cui si ferma tutta la classe, e le riprendiamo insieme.$q$,
  domande = array[
    $q$Perché il capo dello Stato non può essere preso da un'altra specie?$q$,
    $q$Che cosa vuol dire che l'uomo è un animale che ha bisogno di un padrone?$q$,
    $q$Trova la frase che spiega perché il problema è insolubile, e riscrivila con parole tue.$q$,
    $q$Kant dice che serve una buona volontà, ma non basta. Che cos'altro serve?$q$
  ],
  testo = $b$L'uomo è un animale che, quando vive fra i suoi simili, ha bisogno di un padrone. Perché certamente abusa della propria libertà nei confronti degli altri, e sebbene come creatura ragionevole desideri una legge che ponga limiti alla libertà di tutti, la sua inclinazione animale lo porta a fare eccezione per se stesso ogni volta che può.

Ha dunque bisogno di un padrone che spezzi la sua volontà particolare e lo costringa a obbedire a una volontà universalmente valida, in modo che ciascuno possa essere libero.

Ma dove prenderà questo padrone? Da nessuna parte se non dalla specie umana. E quel padrone sarà a sua volta un animale che ha bisogno di un padrone. In qualunque modo si faccia, non si vede come possa procurarsi un capo della giustizia pubblica che sia esso stesso giusto: lo si cerchi in un singolo o in un gruppo di persone scelte, ognuno di loro abuserà sempre della propria libertà se non avrà sopra di sé qualcuno che eserciti su di lui il potere secondo le leggi.

Il supremo capo deve dunque essere giusto per se stesso, e tuttavia essere un uomo. Ecco perché questo compito è il più difficile di tutti: la sua soluzione perfetta è impossibile. Da un legno così storto come quello di cui è fatto l'uomo non si può costruire nulla di perfettamente dritto.$b$
where titolo = 'Il legno storto';


-- ── 3 · La banalità del male ───────────────────────────────
--    qui cambia anche il titolo, quindi cerco entrambe le forme
update public.brani set
  titolo    = $q$La banalità del male$q$,
  fonte     = $q$La banalità del male, capitolo finale$q$,
  obiettivo = $q$Capire che cosa Arendt sostenga davvero — e che cosa non sostenga — quando chiama banale il male di Eichmann.$q$,
  consegna  = $q$Attenzione a una trappola: quasi tutti leggono «banale» come «non grave». Segna con «qui sta il punto» la frase che chiarisce che cosa Arendt intenda.$q$,
  domande = array[
    $q$Che cosa colpisce Arendt di Eichmann durante il processo?$q$,
    $q$Che differenza c'è fra «essere un mostro» e «avere smesso di pensare»?$q$,
    $q$Se Arendt ha ragione, che cosa dovremmo temere di più: le persone crudeli o le procedure?$q$,
    $q$Trova la frase che secondo te ha fatto arrabbiare i suoi lettori, e prova a dire perché.$q$
  ],
  testo = $b$Il guaio del caso Eichmann era che di uomini come lui ce n'erano tanti, e che questi tanti non erano né perversi né sadici, bensì erano, e sono tuttora, terribilmente normali. Dal punto di vista delle nostre istituzioni giuridiche e dei nostri criteri morali, questa normalità era più spaventosa di tutte le atrocità messe insieme.

Egli non era uno Iago né un Macbeth, e non gli sarebbe mai venuto in mente, come a Riccardo III, di dimostrarsi un malvagio. Se si eccettua la sua straordinaria diligenza nel cercare tutto ciò che poteva giovare al suo avanzamento personale, egli non aveva motivi di sorta. E tale diligenza non era di per sé criminale.

Egli non avrebbe mai ucciso un superiore per prenderne il posto. Per dirla in parole povere: egli non capì mai ciò che faceva. Non era uno stupido: era semplicemente senza idee, una condizione che non ha nulla a che vedere con la stupidità e che lo predisponeva a diventare uno dei più grandi criminali del suo tempo.

E questo era banale, e persino comico: neppure con la più buona volontà si poteva scoprire in lui una qualsiasi profondità diabolica o demoniaca.$b$
where titolo in ('La banalita del male', 'La banalità del male');


-- ── 4 · L'articolo 1 della Costituzione ────────────────────
update public.brani set
  titolo    = $q$L'articolo 1 della Costituzione$q$,
  obiettivo = $q$Capire che una riga di dodici parole è il risultato di una trattativa, e riconoscere le posizioni che ci sono dentro.$q$,
  consegna  = $q$Qui non si tratta di capire parole difficili: si tratta di accorgersi che ogni parola è stata scelta contro un'altra. Segna con «qui sta il punto» le parole su cui secondo te si è discusso.$q$,
  domande = array[
    $q$Perché i costituenti scartarono «fondata sui lavoratori» e scelsero «sul lavoro»?$q$,
    $q$Che differenza fa dire «Repubblica democratica» invece di «Repubblica»?$q$,
    $q$Che cosa significa che la sovranità si esercita «nelle forme e nei limiti» della Costituzione?$q$,
    $q$Se dovessi riscrivere l'articolo oggi, cambieresti qualcosa? Che cosa perderesti?$q$
  ],
  testo = $b$Articolo 1. L'Italia è una Repubblica democratica, fondata sul lavoro. La sovranità appartiene al popolo, che la esercita nelle forme e nei limiti della Costituzione.

Dai lavori dell'Assemblea. La prima formulazione proposta diceva: «L'Italia è una Repubblica democratica di lavoratori». Alcuni obiettarono che una Repubblica «di lavoratori» sembrava escludere chi lavoratore non era, e che il termine rischiava di indicare una classe invece della nazione intera.

Altri difendevano quella formula proprio perché voleva dire qualcosa di preciso: che il potere non discende più dalla nascita o dalla proprietà, ma dal contributo che ciascuno dà alla vita comune.

Si arrivò a «fondata sul lavoro»: non una Repubblica di una classe, ma una Repubblica che riconosce nel lavoro — di tutti, e di ogni tipo — il proprio fondamento. La formula fu approvata con 383 voti favorevoli.

Sulla seconda frase la discussione fu più breve ma non meno seria. Dire che la sovranità appartiene al popolo era ovvio dopo il referendum; aggiungere «nelle forme e nei limiti della Costituzione» non lo era. Voleva dire che nemmeno il popolo può tutto, e che una maggioranza non può cancellare i diritti di una minoranza.$b$
where titolo in ('L articolo 1 della Costituzione', 'L''articolo 1 della Costituzione');


-- ── 5 · Che cosa fa un algoritmo di raccomandazione ────────
update public.brani set
  obiettivo = $q$Riconoscere in un testo tecnico la struttura di un argomento: che cosa è descrizione di come funziona, e che cosa è invece una scelta di valore travestita da dato tecnico.$q$,
  consegna  = $q$Questo testo sembra neutro perché parla di numeri. Non lo è. Segna con «qui sta il punto» ogni frase in cui, sotto una descrizione tecnica, si nasconde una decisione su che cosa conta.$q$,
  domande = array[
    $q$Che cosa misura il sistema, e che cosa non misura?$q$,
    $q$Trova la frase in cui una scelta viene presentata come se fosse una conseguenza tecnica.$q$,
    $q$Chi ha deciso che il tempo di permanenza sia la cosa da massimizzare? Poteva decidere altro?$q$,
    $q$Il testo dice che il sistema «non ha opinioni». È vero? In che senso sì, in che senso no?$q$
  ],
  testo = $b$Un sistema di raccomandazione non decide che cosa sia interessante. Osserva che cosa le persone fanno — che cosa aprono, quanto restano, che cosa condividono — e propone altro materiale che, in base a quei dati, ha buone probabilità di produrre gli stessi comportamenti.

Il sistema non ha opinioni sui contenuti. Non sa che cosa sia una notizia falsa, né che cosa sia un argomento importante. Sa soltanto che alcuni contenuti tengono le persone più a lungo di altri, e li propone più spesso.

Questo produce una conseguenza che nessuno ha scritto esplicitamente. Poiché i contenuti che indignano trattengono più a lungo di quelli che informano, un sistema che massimizza il tempo di permanenza finisce per premiare l'indignazione. Non perché qualcuno lo abbia voluto, ma perché era la conseguenza matematica dell'obiettivo scelto.

Correggere questo effetto è possibile: basta cambiare la grandezza da massimizzare. Ma ogni correzione riduce il tempo che le persone passano sul servizio, e quindi i ricavi. La domanda non è dunque se si possa fare, ma chi decide che cosa valga la pena massimizzare.$b$
where titolo = 'Che cosa fa un algoritmo di raccomandazione';


-- ── 6 · Una sentenza sul diritto di sciopero ───────────────
update public.brani set
  obiettivo = $q$Imparare a riconoscere in un testo giuridico le tre parti di un ragionamento: i fatti, la norma che si applica, e il bilanciamento fra due diritti che confliggono.$q$,
  consegna  = $q$Un testo di sentenza si legge a pezzi, non di seguito. Segna con «qui sta il punto» il passaggio in cui il giudice smette di descrivere e comincia a decidere.$q$,
  domande = array[
    $q$Quali sono i due diritti che entrano in conflitto in questo caso?$q$,
    $q$Il giudice dice che nessuno dei due prevale sempre. Che criterio usa allora?$q$,
    $q$Trova la frase che contiene la decisione vera e propria.$q$,
    $q$Se lo sciopero fosse durato un giorno solo, la decisione sarebbe stata la stessa? Perché?$q$
  ],
  testo = $b$I fatti. Un'organizzazione sindacale proclama uno sciopero del personale sanitario di durata indeterminata, senza garantire le prestazioni indispensabili previste dalla legge. L'autorità di garanzia interviene e chiede il differimento.

Il diritto applicabile. L'articolo 40 della Costituzione riconosce il diritto di sciopero e stabilisce che si eserciti nell'ambito delle leggi che lo regolano. Gli articoli 32 e 2 tutelano la salute come diritto fondamentale dell'individuo e interesse della collettività.

Il ragionamento. Nessuno dei due diritti prevale in astratto sull'altro. Il diritto di sciopero non è illimitato, perché il suo esercizio incide su posizioni di terzi che non partecipano al conflitto e non ne traggono vantaggio. Il diritto alla salute, a sua volta, non può essere invocato per svuotare di contenuto il diritto di sciopero, che perderebbe ogni efficacia se dovesse cedere ogni volta che qualcuno ne subisce un disagio.

Il criterio è allora quello del bilanciamento: si tratta di stabilire il punto oltre il quale il sacrificio imposto a chi non sciopera diventa sproporzionato rispetto al risultato che lo sciopero può ottenere.

La decisione. Lo sciopero può svolgersi, ma devono essere garantite le prestazioni indispensabili e va indicata una durata determinata. Un'astensione senza termine, in un servizio essenziale, non sacrifica il diritto altrui in misura proporzionata: lo annulla.$b$
where titolo = 'Una sentenza sul diritto di sciopero';


-- ══════════════════════════════════════════════════════════
--   CONTROLLO
--   Deve stampare sei righe con zero parole mutilate.
--   La colonna «sospetti» cerca i due segni tipici del testo
--   senza apostrofi: «l uomo», «dell obiettivo», «perche»,
--   «puo», «piu», «e» isolata dove ci vorrebbe «è».
-- ══════════════════════════════════════════════════════════
select
  titolo,
  (testo ~ '\m(perche|puo|piu|cosi|gia|ne|se|citta|liberta|volonta|normalita|sovranita|autorita|collettivita|probabilita|difficolta|profondita|stupidita|atrocita)\M'
   or testo ~ '\m(l|dell|nell|all|un|quell|c|n|dall|sull)\s')            as testo_sospetto,
  (obiettivo ~ '\m(perche|puo|piu|cosi|gia)\M')                          as obiettivo_sospetto,
  coalesce(array_length(domande,1),0)                                    as quante_domande
from public.brani
where titolo in (
  'La botte forata',
  'Il legno storto',
  'La banalità del male',
  'L''articolo 1 della Costituzione',
  'Che cosa fa un algoritmo di raccomandazione',
  'Una sentenza sul diritto di sciopero')
order by titolo;
