-- ============================================================
--  IDEARCA — Statistiche d'uso
--  ------------------------------------------------------------
--  A COSA SERVE: sapere se la piattaforma viene davvero usata, e
--  come. Quante volte si entra, con quali codici, quali materie
--  si aprono, quali strumenti si accendono. Senza questi numeri
--  si lavora al buio: si continua a curare materiali che nessuno
--  apre e si trascurano quelli che tutti cercano.
--
--  COSA NON REGISTRA: niente indirizzi IP, niente identificatori
--  del dispositivo, niente cronologia. Solo il codice usato (che
--  sei tu ad aver creato), il ruolo e cosa è stato aperto. Chi
--  entra non viene seguito: viene contato.
--
--  COME SI USA: Supabase -> "SQL Editor" -> "New query" ->
--  incolla tutto -> RUN. Si può rieseguire senza danni.
--
--  PRESUPPONE: SICUREZZA-supabase-v2.sql (funzione is_docente).
-- ============================================================

do $$
begin
  if to_regprocedure('public.is_docente()') is null then
    raise exception 'Manca la funzione is_docente(): esegui prima SICUREZZA-supabase-v2.sql';
  end if;
end $$;


-- ============================================================
--  1) LA TABELLA
-- ============================================================
-- Una riga per ogni cosa che accade. `tipo` dice che cosa:
--   accesso   → qualcuno è entrato con un codice
--   materia   → è stata aperta una materia (dettaglio = la chiave)
--   strumento → è stato aperto uno strumento (dettaglio = quale)

create table if not exists public.usi (
  id        bigint generated always as identity primary key,
  tipo      text        not null check (tipo in ('accesso','materia','strumento')),
  dettaglio text,
  codice    text,
  nome      text,
  ruolo     text,
  creato_il timestamptz not null default now()
);

create index if not exists usi_data_idx on public.usi (creato_il desc);
create index if not exists usi_tipo_idx on public.usi (tipo, dettaglio);

alter table public.usi enable row level security;

-- Chiunque abbia un codice può scrivere una riga, come si imbuca
-- una lettera. Nessuno può rileggere quello che ha imbucato: solo
-- il docente vede l'insieme.
drop policy if exists "usi_scrittura" on public.usi;
create policy "usi_scrittura"
  on public.usi for insert
  to anon, authenticated
  with check (
    tipo in ('accesso','materia','strumento')
    and length(coalesce(dettaglio,'')) <= 80
    and length(coalesce(codice,''))    <= 40
    and length(coalesce(nome,''))      <= 80
  );

drop policy if exists "usi_lettura_docente" on public.usi;
create policy "usi_lettura_docente"
  on public.usi for select
  to authenticated
  using (public.is_docente());

drop policy if exists "usi_cancellazione_docente" on public.usi;
create policy "usi_cancellazione_docente"
  on public.usi for delete
  to authenticated
  using (public.is_docente());


-- ============================================================
--  2) IL RIEPILOGO — un solo giro invece di sei
-- ============================================================
-- La pagina chiede questo e riceve tutto pronto: totali, ultimi
-- sette giorni, oggi, e le tre classifiche. Contare qui costa
-- molto meno che scaricare tutte le righe e contarle nel browser.

create or replace function public.statistiche_uso()
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'accessi_totali',   (select count(*) from usi where tipo='accesso'),
    'accessi_7giorni',  (select count(*) from usi where tipo='accesso' and creato_il > now() - interval '7 days'),
    'accessi_oggi',     (select count(*) from usi where tipo='accesso' and creato_il::date = current_date),
    'persone',          (select count(distinct codice) from usi where tipo='accesso'),
    'primo_giorno',     (select min(creato_il) from usi),
    'per_codice',       coalesce((select jsonb_agg(x) from (
                          select codice, max(nome) as nome, count(*) as quante,
                                 max(creato_il) as ultimo
                          from usi where tipo='accesso' and codice is not null
                          group by codice order by count(*) desc limit 12) x), '[]'::jsonb),
    'per_materia',      coalesce((select jsonb_agg(x) from (
                          select dettaglio, count(*) as quante
                          from usi where tipo='materia' and dettaglio is not null
                          group by dettaglio order by count(*) desc limit 12) x), '[]'::jsonb),
    'per_strumento',    coalesce((select jsonb_agg(x) from (
                          select dettaglio, count(*) as quante
                          from usi where tipo='strumento' and dettaglio is not null
                          group by dettaglio order by count(*) desc limit 12) x), '[]'::jsonb),
    'per_giorno',       coalesce((select jsonb_agg(x order by x->>'giorno') from (
                          select jsonb_build_object('giorno', creato_il::date, 'quante', count(*)) as x
                          from usi where tipo='accesso' and creato_il > now() - interval '14 days'
                          group by creato_il::date) y), '[]'::jsonb)
  )
  where public.is_docente();
$$;

revoke all on function public.statistiche_uso() from public;
grant execute on function public.statistiche_uso() to authenticated;


-- ============================================================
--  3) AZZERARE
-- ============================================================
-- Il docente può ripartire da zero: utile a inizio anno, o dopo
-- un periodo di prova in cui i numeri non contavano nulla.

create or replace function public.azzera_statistiche()
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare quante integer;
begin
  if not public.is_docente() then
    raise exception 'Solo il docente può azzerare le statistiche';
  end if;
  select count(*) into quante from public.usi;
  delete from public.usi;
  return quante;
end $$;

revoke all on function public.azzera_statistiche() from public;
grant execute on function public.azzera_statistiche() to authenticated;


-- ---- controllo ---------------------------------------------
-- Deve restituire un oggetto con tutti i campi a zero.
select public.statistiche_uso();
