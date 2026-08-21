-- ============================================================
--  IDEARCA — La lavagna in diretta
--  ------------------------------------------------------------
--  COME SI USA: Supabase -> «SQL Editor» -> «New query» ->
--  incolla TUTTO -> RUN. Si puo rieseguire senza danni.
--
--  PRESUPPONE SICUREZZA-supabase-v2.sql (la funzione is_docente).
--
--  L'IDEA. Alla lavagna succede una cosa che il proiettore non
--  risolve: chi sta in fondo non legge, chi copia perde il filo,
--  chi era assente non vede niente. Se la lavagna la si puo
--  guardare anche dal proprio schermo, quei tre problemi
--  spariscono insieme.
--
--  COME FUNZIONA. Una riga sola, sempre la stessa: c'e la
--  lavagna di adesso e basta. Il docente ci scrive sopra mentre
--  disegna, gli studenti la rileggono ogni paio di secondi. Non
--  e una chat e non c'e cronologia: e uno specchio.
--
--  PERCHE UNA RIGA SOLA. Un docente ha una lavagna per volta.
--  Tenere lo storico vorrebbe dire decidere quando cancellarlo,
--  e le lavagne che vale la pena tenere si archiviano gia con il
--  bottone «Archivia», che scrive nella tavola lavagne.
-- ============================================================

do $controllo$
begin
  if to_regprocedure('public.is_docente()') is null then
    raise exception 'Manca is_docente(): esegui prima SICUREZZA-supabase-v2.sql';
  end if;
end $controllo$;


-- ============================================================
--  1) LA TAVOLA
-- ============================================================
create table if not exists public.lavagna_live (
  id          int         primary key default 1,
  titolo      text,
  tratti      jsonb       not null default '[]'::jsonb,
  testo       text        not null default '',
  vista       jsonb       not null default '{"x":0,"y":0,"s":1}'::jsonb,
  aperta      boolean     not null default false,
  aggiornata  timestamptz not null default now(),
  constraint lavagna_live_una_sola check (id = 1)
);

-- la riga esiste sempre: cosi la pagina non deve distinguere fra
-- «non c'e ancora» e «c'e ma e vuota»
insert into public.lavagna_live (id) values (1) on conflict (id) do nothing;

comment on table public.lavagna_live is
  'Lo specchio della lavagna del docente. Una riga sola: c''e quella '
  'di adesso. Gli studenti la leggono solo mentre e aperta.';


-- ============================================================
--  2) CHI PUO VEDERE
--  Gli studenti leggono, e solo quando la trasmissione e accesa:
--  a lavagna spenta non arriva nemmeno una riga, cosi quello che
--  resta scritto dopo l'ora non e visibile a nessuno.
--  Scrive soltanto il docente.
-- ============================================================
alter table public.lavagna_live enable row level security;

drop policy if exists "live_lettura" on public.lavagna_live;
create policy "live_lettura"
  on public.lavagna_live for select
  to anon, authenticated
  using (aperta = true);

drop policy if exists "live_docente" on public.lavagna_live;
create policy "live_docente"
  on public.lavagna_live for all
  to authenticated
  using (public.is_docente())
  with check (public.is_docente());


-- ============================================================
--  3) SCRIVERE LO SPECCHIO
--  Una funzione invece di una update diretta, per tre ragioni:
--  mette lei l'orario, impedisce che un disegno enorme faccia
--  esplodere la riga, e tiene il controllo del ruolo in un posto
--  solo.
-- ============================================================
create or replace function public.aggiorna_lavagna_live(
  nuovi_tratti jsonb, nuovo_testo text, nuova_vista jsonb, resta_aperta boolean)
returns timestamptz
language plpgsql
security definer
set search_path = public
as $scrivi$
declare quando timestamptz;
begin
  if not public.is_docente() then
    raise exception 'Solo il docente puo trasmettere la lavagna';
  end if;
  -- un disegno oltre il mezzo mega non e una lavagna, e un errore
  if length(nuovi_tratti::text) > 500000 then
    raise exception 'Disegno troppo grande da trasmettere';
  end if;

  update public.lavagna_live
     set tratti = coalesce(nuovi_tratti, '[]'::jsonb),
         testo  = coalesce(nuovo_testo, ''),
         vista  = coalesce(nuova_vista, '{"x":0,"y":0,"s":1}'::jsonb),
         aperta = coalesce(resta_aperta, false),
         aggiornata = now()
   where id = 1
   returning aggiornata into quando;

  return quando;
end $scrivi$;

revoke all
  on function public.aggiorna_lavagna_live(jsonb, text, jsonb, boolean)
  from public;
grant execute
  on function public.aggiorna_lavagna_live(jsonb, text, jsonb, boolean)
  to authenticated;


-- ============================================================
--  4) LEGGERE SENZA SCARICARE TUTTO
--  Gli studenti chiedono «e cambiata?» ogni paio di secondi. Se
--  ogni volta si portassero via l'intero disegno sarebbero
--  centinaia di kilobyte al minuto per ognuno. Questa funzione
--  risponde con l'orario dell'ultima modifica: il disegno vero
--  si chiede solo quando l'orario e cambiato.
-- ============================================================
create or replace function public.lavagna_live_quando()
returns timestamptz
language sql
security definer
set search_path = public
stable
as $leggi$
  select case when aperta then aggiornata else null end
    from public.lavagna_live where id = 1;
$leggi$;

revoke all
  on function public.lavagna_live_quando()
  from public;
grant execute
  on function public.lavagna_live_quando()
  to anon, authenticated;


-- ============================================================
--  CONTROLLO
--  Deve stampare una riga, con «aperta» a false.
-- ============================================================
select id, aperta, aggiornata,
       jsonb_array_length(tratti) as quanti_tratti,
       length(testo) as caratteri_testo
  from public.lavagna_live;
