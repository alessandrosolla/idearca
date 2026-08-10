# Idearca

Piattaforma didattica per l'insegnamento di **Filosofia, Storia ed Educazione
civica** nella scuola secondaria. Progettata, scritta e mantenuta da
**Alessandro Solla**, docente abilitato per la classe di concorso A-19.

**Il sito:** <https://alessandrosolla.github.io/idearca/>
**Chi sono e cosa è:** <https://alessandrosolla.github.io/idearca/chi/>

---

## Che cosa fa

| | |
|---|---|
| **Archivio** | 522 materiali — slide, fonti, approfondimenti, compiti — ordinati per periodo del programma, non per data di caricamento. |
| **Votazioni in aula** | Gli studenti rispondono dal telefono inquadrando un QR; i risultati compaiono alla lavagna. 120 capitoli hanno già le domande scritte: 1080 in tutto. |
| **Lavagna** | Superficie da proiettare, con archiviazione della lezione. |
| **Linea del tempo** | Storia e filosofia su due colonne attorno allo stesso asse: si vede che le idee non nascono in una stanza vuota. |
| **Atlante storico** | Mappa interattiva dei confini, anno per anno. |
| **Consegne** | Gli studenti caricano il compito dal telefono, dentro finestre temporali decise dal docente. |
| **Metodologie** | Debate e jigsaw pronti: tempi, regole, fonti. |

## Com'è fatto

Nessun framework, nessuna dipendenza da aggiornare. HTML, CSS e JavaScript
scritti a mano; i dati su **Supabase** (PostgreSQL + Auth + Storage); il sito
pubblicato con **GitHub Pages**.

```
index.html          la vetrina pubblica e la libreria (una pagina, più viste)
css/stile.css       tutto lo stile
js/app.js           login, libreria, ricerca, viste
votazioni/          il sistema di voto in aula + la banca delle 1080 domande
tempo/              la linea del tempo (312 eventi, in crescita)
lavagna/  inbox/    la lavagna e l'archivio del docente
consegna/           la pagina con cui gli studenti consegnano
metodologie/        debate e jigsaw già pronti
chi/                chi sono, cosa è Idearca
sql/                le migrazioni del database, in ordine di esecuzione
```

## La sicurezza sta nel database

La chiave Supabase presente nel codice è una **publishable key**: è fatta per
stare nel browser e non dà da sola alcun permesso. Chi può leggere che cosa è
deciso dalle *row level security policy* di PostgreSQL, non dalle pagine.

In pratica: uno studente non vede le consegne dei compagni non perché
l'interfaccia gliele nasconda, ma perché il database gliele rifiuta — anche a
chi provasse a interrogarlo aggirando il sito. Allo stesso modo una consegna
inviata fuori dalla finestra temporale viene respinta dal server.

Le migrazioni in `sql/` vanno eseguite in ordine numerico dall'SQL Editor di
Supabase, incollando il **contenuto** del file.

## Due scelte tecniche di cui vado fiero

- **La lavagna non salva immagini** ma elenchi di tratti (coordinate e colore):
  pochi kilobyte per lezione invece di centinaia, e il disegno resta nitido a
  qualsiasi ingrandimento.
- **Le foto degli studenti vengono compresse sul telefono** prima di partire: da
  4 MB a 200 KB restando leggibili. È ciò che permette di tenere anni di
  consegne nello spazio gratuito.

## Licenza

Codice pubblico ma **non libero**: vedi [LICENSE](LICENSE). I materiali
didattici non sono in questo repository.
