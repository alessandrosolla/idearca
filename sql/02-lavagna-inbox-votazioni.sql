-- ============================================================
--  IDEARCA — Lavagna, Inbox consegne, Votazioni in aula
--  ------------------------------------------------------------
--  Crea tutto ciò che serve alle tre funzioni nuove, in
--  un'unica esecuzione. Si può rieseguire senza danni.
--
--  COME SI USA: Supabase -> "SQL Editor" -> "New query" ->
--  incolla TUTTO -> RUN.
--
--  PRESUPPONE che sia già stato eseguito SICUREZZA-supabase-v2.sql,
--  che ha creato la funzione public.is_docente().
-- ============================================================

-- Controllo preliminare: se manca is_docente() lo script si ferma
-- qui con un messaggio chiaro, invece di creare policy sbagliate.
do $$
begin
  if to_regprocedure('public.is_docente()') is null then
    raise exception 'Manca la funzione is_docente(): esegui prima SICUREZZA-supabase-v2.sql';
  end if;
end $$;


-- ============================================================
--  1) LAVAGNE — l'archivio delle lezioni proiettate
-- ============================================================
-- Il disegno a mano libera NON viene salvato come immagine ma
-- come elenco di tratti (coordinate + colore). Sono pochi KB per
-- lezione invece di centinaia, e restano ridisegnabili e nitidi
-- a qualunque risoluzione.

create table if not exists public.lavagne (
  id          bigint generated always as identity primary key,
  titolo      text not null,
  materia     text,
  testo       text        not null default '',
  tratti      jsonb       not null default '[]'::jsonb,
  creato_il   timestamptz not null default now()
);

create index if not exists lavagne_data_idx on public.lavagne (creato_il desc);

alter table public.lavagne enable row level security;

drop policy if exists "lavagne_solo_docente" on public.lavagne;
create policy "lavagne_solo_docente"
  on public.lavagne for all
  to authenticated
  using (public.is_docente())
  with check (public.is_docente());


-- ============================================================
--  2) CONSEGNE — l'inbox dei compiti degli studenti
-- ============================================================
-- Lo studente può SOLO inserire. Non può leggere le consegne
-- degli altri, né le proprie, né modificare o cancellare.
-- È il modello della "cassetta delle lettere": ci si imbuca, non
-- ci si fruga dentro.

create table if not exists public.consegne (
  id          bigint generated always as identity primary key,
  studente    text not null,
  classe      text,
  attivita    text,
  testo       text,
  file_path   text,
  file_nome   text,
  letto       boolean     not null default false,
  creato_il   timestamptz not null default now()
);

create index if not exists consegne_data_idx on public.consegne (creato_il desc);

alter table public.consegne enable row level security;

drop policy if exists "consegne_invio_pubblico" on public.consegne;
create policy "consegne_invio_pubblico"
  on public.consegne for insert
  to anon, authenticated
  with check (
    length(coalesce(studente,'')) between 1 and 80
    and length(coalesce(testo,''))    <= 20000
  );

drop policy if exists "consegne_gestione_docente" on public.consegne;
create policy "consegne_gestione_docente"
  on public.consegne for all
  to authenticated
  using (public.is_docente())
  with check (public.is_docente());


-- ---- Spazio file per gli allegati -------------------------
insert into storage.buckets (id, name, public)
values ('consegne','consegne', false)
on conflict (id) do nothing;

drop policy if exists "consegne_file_upload" on storage.objects;
create policy "consegne_file_upload"
  on storage.objects for insert
  to anon, authenticated
  with check (bucket_id = 'consegne');

drop policy if exists "consegne_file_lettura_docente" on storage.objects;
create policy "consegne_file_lettura_docente"
  on storage.objects for select
  to authenticated
  using (bucket_id = 'consegne' and public.is_docente());

drop policy if exists "consegne_file_gestione_docente" on storage.objects;
create policy "consegne_file_gestione_docente"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'consegne' and public.is_docente());


-- ============================================================
--  3) VOTAZIONI IN AULA
-- ============================================================

create table if not exists public.menti_sessioni (
  id              bigint generated always as identity primary key,
  codice          text not null unique,
  titolo          text,
  domanda_attiva  bigint,
  aperta          boolean     not null default true,
  creato_il       timestamptz not null default now()
);

create table if not exists public.menti_domande (
  id           bigint generated always as identity primary key,
  sessione_id  bigint not null references public.menti_sessioni(id) on delete cascade,
  tipo         text   not null check (tipo in ('nuvola','scelta')),
  testo        text   not null,
  opzioni      jsonb  not null default '[]'::jsonb,
  posizione    int    not null default 0
);

create table if not exists public.menti_risposte (
  id          bigint generated always as identity primary key,
  domanda_id  bigint not null references public.menti_domande(id) on delete cascade,
  valore      text   not null,
  creato_il   timestamptz not null default now()
);

create index if not exists menti_risposte_domanda_idx on public.menti_risposte (domanda_id);

alter table public.menti_sessioni enable row level security;
alter table public.menti_domande  enable row level security;
alter table public.menti_risposte enable row level security;

-- Nessuna policy per "anon" su queste tre tabelle: gli studenti
-- non le toccano mai direttamente. Passano dalle due funzioni
-- qui sotto, che espongono soltanto la domanda attiva.
drop policy if exists "menti_sessioni_docente" on public.menti_sessioni;
create policy "menti_sessioni_docente" on public.menti_sessioni for all
  to authenticated using (public.is_docente()) with check (public.is_docente());

drop policy if exists "menti_domande_docente" on public.menti_domande;
create policy "menti_domande_docente" on public.menti_domande for all
  to authenticated using (public.is_docente()) with check (public.is_docente());

drop policy if exists "menti_risposte_docente" on public.menti_risposte;
create policy "menti_risposte_docente" on public.menti_risposte for all
  to authenticated using (public.is_docente()) with check (public.is_docente());


-- ---- Sportello 1: qual è la domanda in corso? -------------
-- Restituisce SOLO la domanda attualmente proiettata, e solo se
-- la sessione è aperta. Così nessuno può sbirciare le domande
-- successive né scaricare l'intero questionario in anticipo.
create or replace function public.menti_domanda_attiva(p_codice text)
returns table (domanda_id bigint, tipo text, testo text, opzioni jsonb)
language sql
stable
security definer
set search_path = public
as $$
  select d.id, d.tipo, d.testo, d.opzioni
  from public.menti_sessioni s
  join public.menti_domande  d on d.id = s.domanda_attiva
  where upper(s.codice) = upper(trim(p_codice))
    and s.aperta = true
  limit 1;
$$;

revoke all on function public.menti_domanda_attiva(text) from public;
grant execute on function public.menti_domanda_attiva(text) to anon, authenticated;


-- ---- Sportello 2: registra un voto ------------------------
-- Accetta il voto solo se la domanda è davvero quella attiva
-- della sessione indicata, e la sessione è aperta. Impedisce di
-- votare domande chiuse o di inventare identificativi.
create or replace function public.menti_vota(
  p_codice  text,
  p_domanda bigint,
  p_valore  text
) returns boolean
language plpgsql
volatile
security definer
set search_path = public
as $$
declare ok boolean;
begin
  if length(coalesce(p_valore,'')) = 0 or length(p_valore) > 200 then
    return false;
  end if;

  select true into ok
  from public.menti_sessioni s
  where upper(s.codice) = upper(trim(p_codice))
    and s.aperta = true
    and s.domanda_attiva = p_domanda
  limit 1;

  if ok is null then
    return false;
  end if;

  insert into public.menti_risposte (domanda_id, valore)
  values (p_domanda, trim(p_valore));

  return true;
end $$;

revoke all on function public.menti_vota(text, bigint, text) from public;
grant execute on function public.menti_vota(text, bigint, text) to anon, authenticated;


-- ============================================================
--  CONTROLLO FINALE
-- ============================================================
select tablename, rowsecurity
  from pg_tables
 where schemaname='public'
   and tablename in ('lavagne','consegne','menti_sessioni','menti_domande','menti_risposte')
 order by tablename;

select tablename, policyname, roles, cmd
  from pg_policies
 where schemaname='public'
   and tablename in ('lavagne','consegne','menti_sessioni','menti_domande','menti_risposte')
 order by tablename, policyname;

-- Devi vedere rowsecurity = true su tutte e cinque le tabelle.
-- Se il bucket "consegne" non compare in Storage, ricarica la
-- pagina del pannello: a volte l'elenco resta in cache.
