-- ============================================================
--  IDEARCA — Il profilo modificabile
--  ------------------------------------------------------------
--  A COSA SERVE: la pagina «Chi sono» era scritta dentro il file.
--  Per correggere una data o aggiungere una pubblicazione bisognava
--  modificare il codice e ripubblicare il sito. Adesso i pezzi di
--  testo stanno qui, e si cambiano dal sito stesso.
--
--  COME FUNZIONA: una riga per ogni pezzo di pagina. Se una riga
--  non c'è, la pagina usa il testo scritto nel file — così il sito
--  resta leggibile anche se il database non risponde.
--
--  COME SI USA: Supabase -> "SQL Editor" -> "New query" ->
--  incolla tutto -> RUN. Si può rieseguire senza danni.
-- ============================================================

do $$
begin
  if to_regprocedure('public.is_docente()') is null then
    raise exception 'Manca la funzione is_docente(): esegui prima SICUREZZA-supabase-v2.sql';
  end if;
end $$;

create table if not exists public.profilo (
  chiave        text primary key,
  valore        text not null,
  aggiornato_il timestamptz not null default now()
);

alter table public.profilo enable row level security;

-- Questa è la pagina pubblica: la legge chiunque, come è giusto.
drop policy if exists "profilo_lettura_pubblica" on public.profilo;
create policy "profilo_lettura_pubblica"
  on public.profilo for select
  to anon, authenticated
  using (true);

-- Scrive solo il docente.
drop policy if exists "profilo_scrittura_docente" on public.profilo;
create policy "profilo_scrittura_docente"
  on public.profilo for all
  to authenticated
  using (public.is_docente())
  with check (public.is_docente());

-- ---- controllo ---------------------------------------------
select count(*) as pezzi_salvati from public.profilo;
