-- ============================================================
--  IDEARCA — Lettura annotata di un brano
--  ------------------------------------------------------------
--  A COSA SERVE: si assegna un passo — venti righe del Gorgia,
--  una pagina di Machiavelli — e gli studenti ci scrivono sopra
--  dove si sono fermati. Non un compito da consegnare: un testo
--  su cui la classe lascia tracce, visibili a tutti.
--
--  Il docente non ottiene «chi ha fatto i compiti»: ottiene la
-- mappa di dove la classe si è inceppata. Se quattordici note
--  su venti stanno sulla stessa frase, quella frase va rifatta
--  a lezione — e lo si sa prima di entrare in aula.
--
--  COME SI USA: Supabase -> "SQL Editor" -> "New query" ->
-- incolla tutto -> RUN. Si può rieseguire senza danni.
--
-- PRESUPPONE: SICUREZZA-supabase-v2.sql già eseguito
--  (serve la funzione is_docente()).
-- ============================================================

do $$
begin
  if to_regprocedure('public.is_docente()') is null then
    raise exception 'Manca la funzione is_docente(): esegui prima SICUREZZA-supabase-v2.sql';
  end if;
end $$;


-- ============================================================
--  1) I BRANI
-- ============================================================
-- Il testo sta qui dentro per intero. Viene diviso in frasi dalla
-- pagina, non dal database: così se un giorno si cambia il modo
-- di dividere non bisogna toccare i dati già salvati.

create table if not exists public.brani (
  id         bigint generated always as identity primary key,
  titolo     text        not null,
  autore     text,
  fonte      text,                 -- opera e punto: «Gorgia, 482c-484c»
  testo      text        not null,
  classe     text,
  consegna   text,                 -- che cosa devono fare mentre leggono
  aperto     boolean     not null default true,
  creato_il  timestamptz not null default now()
);

create index if not exists brani_aperti_idx on public.brani (aperto, creato_il desc);

alter table public.brani enable row level security;

-- Il docente fa tutto.
drop policy if exists "brani_gestione_docente" on public.brani;
create policy "brani_gestione_docente"
  on public.brani for all
  to authenticated
  using (public.is_docente())
  with check (public.is_docente());

-- Gli studenti NON leggono la tabella: leggono la funzione qui
-- sotto, che restituisce solo i brani aperti. Così un testo
-- preparato per la settimana prossima resta invisibile.


-- ============================================================
--  2) I BRANI APERTI — la funzione che risponde agli studenti
-- ============================================================

create or replace function public.brani_aperti()
returns table (id bigint, titolo text, autore text, fonte text,
               testo text, classe text, consegna text)
language sql
stable
security definer
set search_path = public
as $$
  select b.id, b.titolo, b.autore, b.fonte, b.testo, b.classe, b.consegna
  from public.brani b
  where b.aperto = true
  order by b.creato_il desc;
$$;

revoke all on function public.brani_aperti() from public;
grant execute on function public.brani_aperti() to anon, authenticated;


-- ============================================================
--  3) LE ANNOTAZIONI
-- ============================================================
-- `frase` è il numero della frase nel brano, contato dalla pagina
-- a partire da zero. `tipo` dice che genere di nota è: serve a
-- distinguere «non ho capito» da «qui sta il punto», che per il
-- docente sono due informazioni opposte.

create table if not exists public.annotazioni (
  id        bigint generated always as identity primary key,
  brano_id  bigint      not null references public.brani(id) on delete cascade,
  frase     integer     not null check (frase >= 0 and frase < 2000),
  studente  text        not null check (length(studente) between 1 and 80),
  tipo      text        not null check (tipo in ('dubbio','commento','collegamento','importante')),
  testo     text        not null check (length(testo) between 1 and 1200),
  risposta  text        check (length(risposta) <= 1200),   -- la replica del docente
  creato_il timestamptz not null default now()
);

create index if not exists annotazioni_brano_idx on public.annotazioni (brano_id, frase);

alter table public.annotazioni enable row level security;


-- ============================================================
--  4) LA DOMANDA CHIUSA IN UNA FUNZIONE
-- ============================================================
-- ATTENZIONE, è il punto in cui la migrazione 04 aveva sbagliato:
-- se la regola di inserimento facesse
--     exists (select 1 from public.brani where id = ... and aperto)
-- quella select girerebbe coi permessi dello studente, che su
-- `brani` non ha alcuna regola di lettura. Risultato: nessuna riga
-- vista, controllo fallito, annotazione respinta sempre.
-- Perciò la domanda sta dentro una funzione security definer, che
-- risponde soltanto sì o no.

create or replace function public.brano_aperto(p_id bigint)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.brani b where b.id = p_id and b.aperto = true);
$$;

revoke all on function public.brano_aperto(bigint) from public;
grant execute on function public.brano_aperto(bigint) to anon, authenticated;


-- ============================================================
--  5) LE REGOLE DELLE ANNOTAZIONI
-- ============================================================

-- Chiunque legge le annotazioni di un brano aperto: è il senso
-- della prova: gli studenti devono vedersi fra loro.
drop policy if exists "annotazioni_lettura" on public.annotazioni;
create policy "annotazioni_lettura"
  on public.annotazioni for select
  to anon, authenticated
  using (public.brano_aperto(brano_id) or public.is_docente());

-- Si scrive solo su un brano aperto. I limiti di lunghezza sono
-- già nei check della tabella: qui basta la finestra.
drop policy if exists "annotazioni_scrittura" on public.annotazioni;
create policy "annotazioni_scrittura"
  on public.annotazioni for insert
  to anon, authenticated
  with check (public.brano_aperto(brano_id));

-- Correggere e cancellare: solo il docente. Uno studente che si
-- pente riscrive; cancellare le note altrui non deve poterlo fare.
drop policy if exists "annotazioni_modifica_docente" on public.annotazioni;
create policy "annotazioni_modifica_docente"
  on public.annotazioni for update
  to authenticated
  using (public.is_docente())
  with check (public.is_docente());

drop policy if exists "annotazioni_cancella_docente" on public.annotazioni;
create policy "annotazioni_cancella_docente"
  on public.annotazioni for delete
  to authenticated
  using (public.is_docente());


-- ============================================================
--  6) UN BRANO DI PROVA
-- ============================================================
-- Così la pagina ha qualcosa da mostrare subito. Chiudilo o
-- cancellalo quando vuoi.

insert into public.brani (titolo, autore, fonte, consegna, testo, aperto)
select
  'Il mito della caverna',
  'Platone',
  'Repubblica, VII, 514a-515c',
  'Segna con «non ho capito» ogni frase che hai dovuto rileggere, e con «qui sta il punto» quella che secondo te regge tutto il resto.',
  'Immagina degli uomini in una dimora sotterranea a forma di caverna, con l''entrata aperta alla luce per tutta la larghezza. '
  || 'Vi si trovano fin da bambini, con le gambe e il collo legati, in modo da restare fermi e da guardare soltanto in avanti, '
  || 'incapaci di volgere il capo a causa delle catene. Alle loro spalle, la luce di un fuoco che arde lontano e in alto. '
  || 'Fra il fuoco e i prigionieri corre una strada rialzata, lungo la quale e'' stato costruito un muricciolo, come quei '
  || 'paraventi che i burattinai pongono davanti a se'' per mostrare al di sopra le loro meraviglie. '
  || 'Lungo quel muricciolo passano uomini che portano oggetti di ogni sorta, statue di uomini e altre figure di animali, '
  || 'in pietra e in legno; e alcuni di questi portatori parlano, altri tacciono. '
  || 'Strana immagine, dici, e strani prigionieri. Somigliano a noi, rispondo. '
  || 'Credi che di se'' stessi e degli altri abbiano visto altro che le ombre proiettate dal fuoco sulla parete della caverna? '
  || 'E se potessero parlare fra loro, non penseresti che diano il nome di cose reali alle ombre che vedono passare?',
  true
where not exists (select 1 from public.brani);


-- ---- controllo ---------------------------------------------
-- Deve elencare almeno un brano aperto, e la prova di scrittura
-- deve passare.

select count(*) as brani_aperti from public.brani_aperti();

do $$
declare
  b_id bigint;
  nuova bigint;
begin
  select id into b_id from public.brani_aperti() limit 1;
  if b_id is null then
    raise notice 'Nessun brano aperto: le regole sono a posto, ma aggiungine uno dalla pagina.';
    return;
  end if;

  insert into public.annotazioni (brano_id, frase, studente, tipo, testo)
  values (b_id, 0, 'Prova automatica', 'dubbio',
          'Riga di prova del controllo: viene cancellata subito.')
  returning id into nuova;

  delete from public.annotazioni where id = nuova;

  raise notice 'FUNZIONA: annotazione di prova inserita e cancellata.';
end $$;
