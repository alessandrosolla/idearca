-- ══════════════════════════════════════════════════════════
--   NOTA — eseguire subito dopo anche il file 12.
--   I testi qui sotto sono stati scritti senza accenti né
--   apostrofi (una precauzione inutile: il quoting a dollaro
--   li accetta). Il file 12 li riscrive in italiano corretto.
-- ══════════════════════════════════════════════════════════

-- ============================================================
--  IDEARCA — Lettura annotata, seconda versione
--  ------------------------------------------------------------
--  CHE COSA CAMBIA
--  Un brano da annotare senza una domanda davanti produce note
--  a caso: bello, non ho capito, interessante. Con una domanda
--  precisa produce lavoro. Quindi ogni brano adesso porta:
--
--    obiettivo  una riga che dice che cosa si deve capire
--    domande    tre o quattro domande che guidano la lettura
--    epoca      per ordinare l elenco, e per distinguere i
--               testi classici dalle fonti di oggi
--
--  Si aggiungono anche sei brani pronti, metà filosofia e metà
--  fonti contemporanee, perche un testo di giornale di questo
--  mese si annota con lo stesso esercizio di un dialogo di
--  Platone, e mettere i due accanto e gia meta della lezione.
--
--  COME SI USA: Supabase -> SQL Editor -> New query ->
--  incolla tutto -> RUN. Si puo rieseguire senza danni.
--
--  PRESUPPONE: 10-annotazioni.sql gia eseguito.
-- ============================================================

do $$
begin
  if to_regclass('public.brani') is null then
    raise exception 'Manca la tabella brani: esegui prima 10-annotazioni.sql';
  end if;
end $$;


-- ============================================================
--  1) LE COLONNE NUOVE
-- ============================================================
-- Si aggiungono se non ci sono: chi ha gia dei brani non li
-- perde, e chi riesegue il file non trova errori.

alter table public.brani add column if not exists obiettivo text;
alter table public.brani add column if not exists domande   text[];
alter table public.brani add column if not exists epoca     text;

-- L epoca serve solo a raggruppare nell elenco. Due valori:
-- «classico» per i testi del programma, «oggi» per le fonti
-- contemporanee. Un vincolo blando, cosi domani se ne possono
-- aggiungere altri senza una migrazione.
alter table public.brani drop constraint if exists brani_epoca_valida;
alter table public.brani add constraint brani_epoca_valida
  check (epoca is null or length(epoca) between 1 and 24);

comment on column public.brani.obiettivo is
  'Una riga: che cosa lo studente deve avere capito alla fine.';
comment on column public.brani.domande is
  'Tre o quattro domande che guidano la lettura. Compaiono accanto al testo.';
comment on column public.brani.epoca is
  'classico | oggi — serve a raggruppare l elenco.';


-- ============================================================
--  2) LA FUNZIONE CHE RISPONDE AGLI STUDENTI
-- ============================================================
-- Va rifatta perche deve restituire anche le colonne nuove.
-- Resta security definer: gli studenti non leggono la tabella,
-- leggono questa, e vedono solo i brani aperti.

drop function if exists public.brani_aperti();

create or replace function public.brani_aperti()
returns table (id bigint, titolo text, autore text, fonte text,
               testo text, classe text, consegna text,
               obiettivo text, domande text[], epoca text)
language sql
stable
security definer
set search_path = public
as $$
  select b.id, b.titolo, b.autore, b.fonte, b.testo, b.classe, b.consegna,
         b.obiettivo, b.domande, b.epoca
  from public.brani b
  where b.aperto = true
  order by coalesce(b.epoca,'zz'), b.creato_il desc;
$$;

revoke all on function public.brani_aperti() from public;
grant execute on function public.brani_aperti() to anon, authenticated;


-- ============================================================
--  3) IL NOME DI CHI SCRIVE
-- ============================================================
-- Tutta la classe entra con lo stesso codice, quindi il nome e
-- l unica cosa che distingue una nota dall altra. Prima bastava
-- un carattere: adesso ne servono almeno tre e almeno uno spazio
-- non basta. Non e una difesa contro chi vuole imbrogliare — quella
-- non si puo fare con un codice condiviso — ma toglie di mezzo le
-- note firmate «a» o «...» per fretta.

alter table public.annotazioni drop constraint if exists annotazioni_studente_check;
alter table public.annotazioni add constraint annotazioni_studente_check
  check (length(btrim(studente)) between 3 and 80);


-- ============================================================
--  4) SEI BRANI PRONTI
-- ============================================================
-- Tre classici e tre fonti di oggi. Ogni riga si inserisce solo
-- se non c e gia un brano con lo stesso titolo, cosi rieseguire
-- il file non produce doppioni.

insert into public.brani (titolo, autore, fonte, epoca, obiettivo, consegna, domande, testo, aperto)
select
  'La botte forata', 'Platone', 'Gorgia, 493a-494a', 'classico',
  'Capire perche, secondo Socrate, una vita spesa a soddisfare desideri non possa mai dirsi riuscita.',
  'Leggi tutto una volta senza segnare niente. Poi rileggi e usa le quattro etichette: «non ho capito» dove ti sei fermato, «qui sta il punto» sulla frase che regge il ragionamento, «collegamento» dove ti viene in mente altro, «commento» per il resto.',
  array[
    'Che cosa rappresentano le botti e che cosa rappresenta chi le riempie?',
    'Socrate dice che l anima degli sciocchi e come un vaso forato: forato da che cosa?',
    'Trova la frase in cui il paragone smette di essere un immagine e diventa un argomento.',
    'Callicle risponde che una vita cosi e una vita da sasso. Perche e una buona obiezione?'
  ],
  $b$Immagina due uomini, ciascuno con molte botti. Le botti del primo sono sane e piene, una di vino, una di miele, una di latte; i liquidi sono rari e costosi, si procurano con molta fatica. Riempite le botti, quell uomo non ci versa piu nulla e non ci pensa piu: sta tranquillo.

L altro puo procurarsi i liquidi, ma con difficolta, e le sue botti sono forate e marce: e costretto a riempirle giorno e notte, o soffre le pene piu grandi. Ora, se la vita e cosi, mi dici che quella dello sciocco e piu felice di quella dell uomo ordinato?

Callicle dice: no, Socrate. Per quello che ha riempito le botti non c e piu nessun piacere; quella e la vita di un sasso, come ho detto poco fa: una volta riempite, non si gode piu ne si soffre. La vita piacevole sta invece proprio in questo, che scorra dentro il piu possibile.

E Socrate: dunque se scorre molto dentro, deve anche uscire molto, e ci vogliono grandi buchi per il deflusso. Questa non e la vita di un morto ne di un sasso, ma di un uccello marino, che mangia e insieme evacua senza sosta.$b$,
  true
where not exists (select 1 from public.brani where titolo = 'La botte forata');

insert into public.brani (titolo, autore, fonte, epoca, obiettivo, consegna, domande, testo, aperto)
select
  'Il legno storto', 'Immanuel Kant', 'Idea di una storia universale, VI proposizione', 'classico',
  'Capire perche, secondo Kant, la politica non chieda agli uomini di essere buoni ma di essere ben governati — e perche il problema non si risolva mai del tutto.',
  'Segna con «non ho capito» ogni frase che hai dovuto rileggere due volte: sono le stesse su cui si ferma tutta la classe, e le riprendiamo insieme.',
  array[
    'Perche il capo dello Stato non puo essere preso da un altra specie?',
    'Che cosa vuol dire che l uomo e un animale che ha bisogno di un padrone?',
    'Trova la frase che spiega perche il problema e insolubile, e riscrivila con parole tue.',
    'Kant dice che serve una buona volonta, ma non basta. Che cos altro serve?'
  ],
  $b$L uomo e un animale che, quando vive fra i suoi simili, ha bisogno di un padrone. Perche certamente abusa della propria liberta nei confronti degli altri, e sebbene come creatura ragionevole desideri una legge che ponga limiti alla liberta di tutti, la sua inclinazione animale lo porta a fare eccezione per se stesso ogni volta che puo.

Ha dunque bisogno di un padrone che spezzi la sua volonta particolare e lo costringa a obbedire a una volonta universalmente valida, in modo che ciascuno possa essere libero.

Ma dove prendera questo padrone? Da nessuna parte se non dalla specie umana. E quel padrone sara a sua volta un animale che ha bisogno di un padrone. In qualunque modo si faccia, non si vede come possa procurarsi un capo della giustizia pubblica che sia esso stesso giusto: lo si cerchi in un singolo o in un gruppo di persone scelte, ognuno di loro abusera sempre della propria liberta se non avra sopra di se qualcuno che eserciti su di lui il potere secondo le leggi.

Il supremo capo deve dunque essere giusto per se stesso, e tuttavia essere un uomo. Ecco perche questo compito e il piu difficile di tutti: la sua soluzione perfetta e impossibile. Da un legno cosi storto come quello di cui e fatto l uomo non si puo costruire nulla di perfettamente dritto.$b$,
  true
where not exists (select 1 from public.brani where titolo = 'Il legno storto');

insert into public.brani (titolo, autore, fonte, epoca, obiettivo, consegna, domande, testo, aperto)
select
  'La banalita del male', 'Hannah Arendt', 'La banalita del male, capitolo finale', 'classico',
  'Capire che cosa Arendt sostenga davvero — e che cosa non sostenga — quando chiama banale il male di Eichmann.',
  'Attenzione a una trappola: quasi tutti leggono «banale» come «non grave». Segna con «qui sta il punto» la frase che chiarisce che cosa Arendt intenda.',
  array[
    'Che cosa colpisce Arendt di Eichmann durante il processo?',
    'Che differenza c e fra «essere un mostro» e «avere smesso di pensare»?',
    'Se Arendt ha ragione, che cosa dovremmo temere di piu: le persone crudeli o le procedure?',
    'Trova la frase che secondo te ha fatto arrabbiare i suoi lettori, e prova a dire perche.'
  ],
  $b$Il guaio del caso Eichmann era che di uomini come lui ce n erano tanti, e che questi tanti non erano ne perversi ne sadici, bensi erano, e sono tuttora, terribilmente normali. Dal punto di vista delle nostre istituzioni giuridiche e dei nostri criteri morali, questa normalita era piu spaventosa di tutte le atrocita messe insieme.

Egli non era uno Iago ne un Macbeth, e non gli sarebbe mai venuto in mente, come a Riccardo III, di dimostrarsi un malvagio. Se si eccettua la sua straordinaria diligenza nel cercare tutto cio che poteva giovare al suo avanzamento personale, egli non aveva motivi di sorta. E tale diligenza non era di per se criminale.

Egli non avrebbe mai ucciso un superiore per prenderne il posto. Per dirla in parole povere: egli non capi mai cio che faceva. Non era uno stupido: era semplicemente senza idee, una condizione che non ha nulla a che vedere con la stupidita e che lo predisponeva a diventare uno dei piu grandi criminali del suo tempo.

E questo era banale, e persino comico: neppure con la piu buona volonta si poteva scoprire in lui una qualsiasi profondita diabolica o demoniaca.$b$,
  true
where not exists (select 1 from public.brani where titolo in ('La banalita del male', 'La banalità del male'));

insert into public.brani (titolo, autore, fonte, epoca, obiettivo, consegna, domande, testo, aperto)
select
  'L articolo 1 della Costituzione', 'Assemblea Costituente', 'Costituzione italiana, 1947, e resoconti dei lavori', 'oggi',
  'Capire che una riga di dodici parole e il risultato di una trattativa, e riconoscere le posizioni che ci sono dentro.',
  'Qui non si tratta di capire parole difficili: si tratta di accorgersi che ogni parola e stata scelta contro un altra. Segna con «qui sta il punto» le parole su cui secondo te si e discusso.',
  array[
    'Perche i costituenti scartarono «fondata sui lavoratori» e scelsero «sul lavoro»?',
    'Che differenza fa dire «Repubblica democratica» invece di «Repubblica»?',
    'Che cosa significa che la sovranita si esercita «nelle forme e nei limiti» della Costituzione?',
    'Se dovessi riscrivere l articolo oggi, cambieresti qualcosa? Che cosa perderesti?'
  ],
  $b$Articolo 1. L Italia e una Repubblica democratica, fondata sul lavoro. La sovranita appartiene al popolo, che la esercita nelle forme e nei limiti della Costituzione.

Dai lavori dell Assemblea. La prima formulazione proposta diceva: «L Italia e una Repubblica democratica di lavoratori». Alcuni obiettarono che una Repubblica «di lavoratori» sembrava escludere chi lavoratore non era, e che il termine rischiava di indicare una classe invece della nazione intera.

Altri difendevano quella formula proprio perche voleva dire qualcosa di preciso: che il potere non discende piu dalla nascita o dalla proprieta, ma dal contributo che ciascuno da alla vita comune.

Si arrivo a «fondata sul lavoro»: non una Repubblica di una classe, ma una Repubblica che riconosce nel lavoro — di tutti, e di ogni tipo — il proprio fondamento. La formula fu approvata con 383 voti favorevoli.

Sulla seconda frase la discussione fu piu breve ma non meno seria. Dire che la sovranita appartiene al popolo era ovvio dopo il referendum; aggiungere «nelle forme e nei limiti della Costituzione» non lo era. Voleva dire che nemmeno il popolo puo tutto, e che una maggioranza non puo cancellare i diritti di una minoranza.$b$,
  true
where not exists (select 1 from public.brani where titolo in ('L articolo 1 della Costituzione', 'L''articolo 1 della Costituzione'));

insert into public.brani (titolo, autore, fonte, epoca, obiettivo, consegna, domande, testo, aperto)
select
  'Che cosa fa un algoritmo di raccomandazione', 'Ricostruzione didattica', 'Basata sui documenti interni resi pubblici nel 2021 e sulla letteratura sui sistemi di raccomandazione', 'oggi',
  'Riconoscere in un testo tecnico la struttura di un argomento: che cosa e descrizione di come funziona, e che cosa e invece una scelta di valore travestita da dato tecnico.',
  'Questo testo sembra neutro perche parla di numeri. Non lo e. Segna con «qui sta il punto» ogni frase in cui, sotto una descrizione tecnica, si nasconde una decisione su che cosa conta.',
  array[
    'Che cosa misura il sistema, e che cosa non misura?',
    'Trova la frase in cui una scelta viene presentata come se fosse una conseguenza tecnica.',
    'Chi ha deciso che il tempo di permanenza sia la cosa da massimizzare? Poteva decidere altro?',
    'Il testo dice che il sistema «non ha opinioni». E vero? In che senso si, in che senso no?'
  ],
  $b$Un sistema di raccomandazione non decide che cosa sia interessante. Osserva che cosa le persone fanno — che cosa aprono, quanto restano, che cosa condividono — e propone altro materiale che, in base a quei dati, ha buone probabilita di produrre gli stessi comportamenti.

Il sistema non ha opinioni sui contenuti. Non sa che cosa sia una notizia falsa, ne che cosa sia un argomento importante. Sa soltanto che alcuni contenuti tengono le persone piu a lungo di altri, e li propone piu spesso.

Questo produce una conseguenza che nessuno ha scritto esplicitamente. Poiche i contenuti che indignano trattengono piu a lungo di quelli che informano, un sistema che massimizza il tempo di permanenza finisce per premiare l indignazione. Non perche qualcuno lo abbia voluto, ma perche era la conseguenza matematica dell obiettivo scelto.

Correggere questo effetto e possibile: basta cambiare la grandezza da massimizzare. Ma ogni correzione riduce il tempo che le persone passano sul servizio, e quindi i ricavi. La domanda non e dunque se si possa fare, ma chi decide che cosa valga la pena massimizzare.$b$,
  true
where not exists (select 1 from public.brani where titolo = 'Che cosa fa un algoritmo di raccomandazione');

insert into public.brani (titolo, autore, fonte, epoca, obiettivo, consegna, domande, testo, aperto)
select
  'Una sentenza sul diritto di sciopero', 'Ricostruzione didattica', 'Costruita sui principi fissati dalla Corte costituzionale italiana in materia di sciopero nei servizi pubblici essenziali', 'oggi',
  'Imparare a riconoscere in un testo giuridico le tre parti di un ragionamento: i fatti, la norma che si applica, e il bilanciamento fra due diritti che confliggono.',
  'Un testo di sentenza si legge a pezzi, non di seguito. Segna con «qui sta il punto» il passaggio in cui il giudice smette di descrivere e comincia a decidere.',
  array[
    'Quali sono i due diritti che entrano in conflitto in questo caso?',
    'Il giudice dice che nessuno dei due prevale sempre. Che criterio usa allora?',
    'Trova la frase che contiene la decisione vera e propria.',
    'Se lo sciopero fosse durato un giorno solo, la decisione sarebbe stata la stessa? Perche?'
  ],
  $b$I fatti. Un organizzazione sindacale proclama uno sciopero del personale sanitario di durata indeterminata, senza garantire le prestazioni indispensabili previste dalla legge. L autorita di garanzia interviene e chiede il differimento.

Il diritto applicabile. L articolo 40 della Costituzione riconosce il diritto di sciopero e stabilisce che si eserciti nell ambito delle leggi che lo regolano. Gli articoli 32 e 2 tutelano la salute come diritto fondamentale dell individuo e interesse della collettivita.

Il ragionamento. Nessuno dei due diritti prevale in astratto sull altro. Il diritto di sciopero non e illimitato, perche il suo esercizio incide su posizioni di terzi che non partecipano al conflitto e non ne traggono vantaggio. Il diritto alla salute, a sua volta, non puo essere invocato per svuotare di contenuto il diritto di sciopero, che perderebbe ogni efficacia se dovesse cedere ogni volta che qualcuno ne subisce un disagio.

Il criterio e allora quello del bilanciamento: si tratta di stabilire il punto oltre il quale il sacrificio imposto a chi non sciopera diventa sproporzionato rispetto al risultato che lo sciopero puo ottenere.

La decisione. Lo sciopero puo svolgersi, ma devono essere garantite le prestazioni indispensabili e va indicata una durata determinata. Un astensione senza termine, in un servizio essenziale, non sacrifica il diritto altrui in misura proporzionata: lo annulla.$b$,
  true
where not exists (select 1 from public.brani where titolo = 'Una sentenza sul diritto di sciopero');


-- ============================================================
--  5) I BRANI GIA PRESENTI
-- ============================================================
-- Chi aveva gia caricato dei brani si ritrova le colonne vuote.
-- Meglio un obiettivo generico che nessun obiettivo: la pagina
-- si aspetta di trovarne uno.

update public.brani
   set epoca = coalesce(epoca, 'classico'),
       obiettivo = coalesce(obiettivo,
         'Leggere il brano riga per riga e riconoscere dove il ragionamento si regge e dove si inceppa.')
 where obiettivo is null or epoca is null;


-- ---- controllo ---------------------------------------------
-- Deve elencare i brani aperti con obiettivo e domande, e la
-- prova di scrittura deve passare con un nome vero e fallire
-- con un nome di un carattere.

select id, epoca, titolo,
       coalesce(array_length(domande,1),0) as quante_domande,
       (obiettivo is not null) as ha_obiettivo
from public.brani_aperti()
order by epoca, titolo;

do $$
declare
  b_id bigint;
  nuova bigint;
  respinta boolean := false;
begin
  select id into b_id from public.brani_aperti() limit 1;
  if b_id is null then
    raise notice $m$Nessun brano aperto: le regole sono a posto, ma aggiungine uno.$m$;
    return;
  end if;

  insert into public.annotazioni (brano_id, frase, studente, tipo, testo)
  values (b_id, 0, 'Prova Automatica', 'dubbio',
          'Riga di prova del controllo: viene cancellata subito.')
  returning id into nuova;
  delete from public.annotazioni where id = nuova;

  begin
    insert into public.annotazioni (brano_id, frase, studente, tipo, testo)
    values (b_id, 0, 'a', 'dubbio', 'Nome troppo corto, deve essere respinta.');
  exception when check_violation then
    respinta := true;
  end;

  if respinta then
    raise notice $m$FUNZIONA: nota con nome vero accettata, nota firmata «a» respinta.$m$;
  else
    raise warning $m$ATTENZIONE: il vincolo sul nome non ha respinto una firma di un carattere.$m$;
  end if;
end $$;
