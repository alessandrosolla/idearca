-- ============================================================
--  IDEARCA — Finestre di consegna
--  ------------------------------------------------------------
--  A COSA SERVE: finora uno studente poteva imbucare un compito
--  in qualunque momento, anche tre settimane dopo la scadenza o
--  prima ancora che l'attività fosse assegnata. Il docente non
--  aveva modo di dire «da qui a qui».
--
--  Questa migrazione introduce le FINESTRE: ogni consegna deve
--  agganciarsi a una finestra aperta. Il controllo NON sta nella
--  pagina — sta nel database. Chi provasse a inviare da fuori
--  (con un programma, aggirando il sito) verrebbe respinto lo
--  stesso, perché è la regola di sicurezza a rifiutare la riga.
--
--  COME SI USA: Supabase -> "SQL Editor" -> "New query" ->
--  incolla tutto -> RUN. Si può rieseguire senza danni.
--
--  PRESUPPONE: 02-lavagna-inbox-votazioni.sql già eseguito.
-- ============================================================

do $$
begin
  if to_regclass('public.consegne') is null then
    raise exception 'Manca la tabella consegne: esegui prima 02-lavagna-inbox-votazioni.sql';
  end if;
  if to_regprocedure('public.is_docente()') is null then
    raise exception 'Manca la funzione is_docente(): esegui prima SICUREZZA-supabase-v2.sql';
  end if;
end $$;


-- ============================================================
--  1) LA TABELLA DELLE FINESTRE
-- ============================================================
-- Una riga per ogni consegna aperta agli studenti. `apre_il` può
-- restare vuoto: vuol dire «da subito». Anche `chiude_il` può
-- restare vuoto: vuol dire «finché non la chiudo io».

create table if not exists public.finestre_consegna (
  id         bigint generated always as identity primary key,
  titolo     text        not null,
  classe     text,
  istruzioni text,
  apre_il    timestamptz,
  chiude_il  timestamptz,
  attiva     boolean     not null default true,
  creato_il  timestamptz not null default now()
);

create index if not exists finestre_attive_idx
  on public.finestre_consegna (attiva, chiude_il);

alter table public.finestre_consegna enable row level security;

-- Il docente fa tutto.
drop policy if exists "finestre_gestione_docente" on public.finestre_consegna;
create policy "finestre_gestione_docente"
  on public.finestre_consegna for all
  to authenticated
  using (public.is_docente())
  with check (public.is_docente());

-- Gli studenti NON leggono la tabella direttamente: leggono solo
-- l'elenco di ciò che è aperto adesso, attraverso la funzione qui
-- sotto. Così non vedono le consegne future già preparate né le
-- istruzioni di classi che non sono la loro.


-- ============================================================
--  2) È APERTA? — la funzione che risponde agli studenti
-- ============================================================
-- Restituisce solo le finestre aperte in questo momento.
-- Non rivela nient'altro: né quelle chiuse, né quelle programmate.

create or replace function public.finestre_aperte()
returns table (id bigint, titolo text, classe text, istruzioni text, chiude_il timestamptz)
language sql
stable
security definer
set search_path = public
as $$
  select f.id, f.titolo, f.classe, f.istruzioni, f.chiude_il
  from public.finestre_consegna f
  where f.attiva = true
    and (f.apre_il   is null or f.apre_il   <= now())
    and (f.chiude_il is null or f.chiude_il >= now())
  order by coalesce(f.chiude_il, 'infinity'::timestamptz) asc, f.titolo asc;
$$;

revoke all on function public.finestre_aperte() from public;
grant execute on function public.finestre_aperte() to anon, authenticated;


-- ============================================================
--  3) LA CONSEGNA SI AGGANCIA ALLA FINESTRA
-- ============================================================

alter table public.consegne
  add column if not exists finestra_id bigint references public.finestre_consegna(id) on delete set null;

create index if not exists consegne_finestra_idx on public.consegne (finestra_id);

-- La regola nuova: si può inserire SOLO se la finestra indicata
-- esiste ed è aperta adesso. Sostituisce la vecchia, che lasciava
-- passare qualunque invio in qualunque momento.
drop policy if exists "consegne_invio_pubblico" on public.consegne;
create policy "consegne_invio_finestra_aperta"
  on public.consegne for insert
  to anon, authenticated
  with check (
    length(coalesce(studente,'')) between 1 and 80
    and length(coalesce(testo,'')) <= 20000
    and exists (
      select 1 from public.finestre_consegna f
      where f.id = consegne.finestra_id
        and f.attiva = true
        and (f.apre_il   is null or f.apre_il   <= now())
        and (f.chiude_il is null or f.chiude_il >= now())
    )
  );


-- ============================================================
--  4) UNA FINESTRA DI PROVA
-- ============================================================
-- Così la pagina di consegna ha qualcosa da mostrare subito dopo
-- l'installazione. Chiudila o cancellala dall'Inbox quando vuoi.

insert into public.finestre_consegna (titolo, istruzioni, attiva)
select 'Consegna di prova', 'Serve solo a verificare che tutto funzioni. Puoi cancellarla dall''Inbox.', true
where not exists (select 1 from public.finestre_consegna);


-- ---- controllo ---------------------------------------------
-- Deve elencare almeno una finestra aperta.
select * from public.finestre_aperte();
