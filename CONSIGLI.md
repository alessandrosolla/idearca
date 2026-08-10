# Idearca vista da fuori

Due letture dello stesso sito: quella di chi assume e quella di chi
progetta interfacce. Sono osservazioni fatte guardando il sito
pubblicato e il codice del repository, non impressioni generiche.

---

## Parte prima — con gli occhi di un recruiter

Uno che deve decidere se chiamarti ti dedica quaranta secondi. In quei
quaranta secondi deve capire tre cose: **chi sei, che cosa hai fatto,
se l'hai fatto tu.** Oggi il sito risponde bene alla seconda e male
alle altre due.

### 1. Manca la pagina su di te — è la lacuna più grave
In homepage compare «Piattaforma didattica di Alessandro Solla» e
basta. Niente foto, niente formazione, niente dove insegni, niente
CV scaricabile, niente LinkedIn. Un recruiter che arriva qui vede un
prodotto e non trova la persona. Serve una pagina **Chi sono**
raggiungibile dal menu principale, con: una foto, tre righe sul
percorso, le classi e le materie che segui, un PDF del curriculum, i
contatti. È l'aggiunta a più alto rendimento di tutto questo elenco.

### 2. Non si capisce che il software l'hai scritto tu
Questo è il punto che ti stai giocando peggio. Un insegnante che ha
**progettato e programmato** da solo una piattaforma con database,
autenticazione, permessi per ruolo, votazione in tempo reale e
archivio consegne non è un insegnante che «ha un sito»: è un profilo
raro. Ma da fuori sembra un template comprato. Serve una pagina
**Come è fatto**: le tecnologie, le scelte (perché Supabase, perché i
tratti della lavagna salvati come coordinate e non come immagini,
perché le regole di sicurezza stanno nel database e non nella
pagina), e quanto ci hai messo. Due schermate del codice non
guastano.

### 3. Il repository è il tuo portfolio, e non lo linki
Il sito sta su `github.io`: il codice è già pubblico, ma nessun
visitatore lo scopre. Metti un link a GitHub nel footer. E aggiungi
al repository un **README** — oggi non c'è — che spieghi in mezza
pagina che cos'è Idearca, com'è organizzato, come si esegue. Per chi
valuta un profilo tecnico, un repository senza README è una casa
senza porta.

### 4. I numeri sono la tua prova, e li tieni nascosti
522 materiali, 8 materie, 120 capitoli con banca domande, 1080
domande, 117 eventi in linea del tempo. Sono numeri che dicono
«questo lavoro è vero e continua da tempo». Oggi si vedono solo
aprendo la finestra «Dai una occhiata». Mettili in homepage, grandi,
subito sotto l'hero.

### 5. Manca la prova che sia usato davvero
Non c'è una riga che dica in quante classi gira, da quanto tempo, con
che risultati. Anche una sola frase — «usato in cinque classi dal
2024» — cambia la percezione da *progetto personale* a *strumento in
servizio*. Se hai commenti di studenti o colleghi, anche brevi,
valgono più di qualunque descrizione.

### 6. Decidi che cosa sei: portfolio o negozio
«Vedi i piani» apre dei prezzi. Va benissimo se vuoi vendere, ma
confonde chi è venuto a valutarti per un posto: si chiede se sta
guardando un candidato o un fornitore. Se il sito serve a entrambe le
cose, separa i due percorsi già dal menu — *Per le scuole* da una
parte, *Chi sono* dall'altra.

### 7. Se punti anche fuori dall'Italia, serve l'inglese
C'è già la modalità internazionale per i percorsi IB, ma l'interfaccia
resta tutta italiana. Anche solo la pagina «Chi sono» e la pagina
«Come è fatto» in inglese aprono a scuole internazionali e a
recruiter non italiani.

---

## Parte seconda — con gli occhi di un designer

### 8. L'hero non dice che cosa fa la piattaforma
«Pensa. Comprendi. Ricorda.» è bello ma è un motto, non una
spiegazione. Chi non ti conosce, dopo dieci secondi, non sa se
Idearca sia un blog, un corso o un archivio. Aggiungi una riga
concreta sotto il titolo: *«Archivio di 522 materiali di filosofia e
storia, più gli strumenti che uso in classe.»*

### 9. Tre riquadri si cliccano ma non si raggiungono da tastiera
Le tre celle delle materie (`illus-cell`) sono `div` con un `onclick`:
chi naviga con il tasto Tab non le raggiunge, e un lettore di schermo
non le annuncia come pulsanti. Vanno trasformate in `<button>`. È lo
stesso lavoro che ho appena fatto sulle voci della libreria, e vale la
pena estenderlo ovunque ci sia un `onclick` su un elemento non
interattivo — nel file ce ne sono 77 in tutto, non tutti problematici,
ma vale la pena passarli in rassegna.

### 10. La cartella delle immagini pesa 6,2 MB
Sono immagini a piena risoluzione servite così come sono. Convertile
in WebP e ridimensionale alla misura in cui vengono mostrate: si
scende facilmente sotto il megabyte. L'immagine di anteprima social
(`og-image.png`, 396 KB) da sola vale metà di una pagina intera.

### 11. Il quadro dell'hero arriva da un servizio esterno
Lo sfondo di Raffaello passa da `wsrv.nl`, un proxy pubblico di terze
parti. Se quel servizio rallenta o sparisce, la prima schermata del
sito resta vuota. Scarica l'immagine una volta, convertila in WebP e
servila dal tuo repository: meno dipendenze, più velocità, e nessun
dato dei visitatori che passa da un terzo.

### 12. C'è un file di codice morto che confonde chi legge il repository
Nella radice c'è `app.js` (455 righe) che non è collegato a nessuna
pagina: quello vero è `js/app.js`. Chi apre il repository per
valutarti apre il primo che trova e legge codice che non gira.
Cancellalo, o spostalo in una cartella `archivio/` con una riga di
spiegazione.

### 13. Le viste in cornice restano cornici
Metodologie, mappa, linea del tempo e consegne ora riempiono
l'altezza, ma vivono ancora dentro un `iframe` con bordo e ombra.
Per gli strumenti che si proiettano in aula — la lavagna, le votazioni
— vale la pena un pulsante «a tutto schermo» che tolga anche la barra
laterale: in classe ogni pixel conta e la LIM è lontana.

### 14. Il tema scuro c'è ma nessuno lo scopre
Il pulsante che cambia tema è un cerchietto in alto a destra senza
etichetta. È una funzione che hai costruito con cura (ci sono palette
separate per chiaro, scuro e modalità internazionale): mostrala.
Basta un `title` più esplicito e, la prima volta, un piccolo
suggerimento.

### 15. Una gerarchia sola per le tre chiamate all'azione
Nell'hero convivono un pulsante pieno, uno contornato e un link
testuale. Vanno bene tre livelli, ma solo se le tre azioni hanno
davvero importanza diversa. Verifica sul campo quale porta più
lontano — probabilmente «Dai una occhiata» — e dai a quella tutto il
peso, togliendolo alle altre.

---

## Se dovessi farne solo tre

1. La pagina **Chi sono**, con foto e CV (punto 1).
2. La pagina **Come è fatto** più il link a GitHub e il README
   (punti 2 e 3): è lì che si vede che il software l'hai scritto tu.
3. I **numeri in homepage** (punto 4): sono la prova che il lavoro
   esiste e dura.

Gli altri sono rifiniture. Questi tre cambiano chi ti chiama.
