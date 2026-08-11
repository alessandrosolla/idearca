-- ============================================================
--  IDEARCA — Votazioni a squadre
--  ------------------------------------------------------------
--  A COSA SERVE: trasformare la votazione in una sfida fra due
--  squadre. Gli studenti vengono divisi a sorte quando entrano,
--  e a ogni domanda il punteggio si aggiorna alla lavagna.
--
--  TRE COSE NUOVE, E TUTTE E TRE DEVONO STARE NEL DATABASE:
--   1) qual è la risposta giusta — finora nessuno la sapeva, la
--      sapeva solo il file della banca domande;
--   2) a quale squadra appartiene chi risponde;
--   3) il conteggio dei punti, calcolato dal server: se lo
--      calcolasse la pagina, basterebbe aprire gli strumenti dello
--      sviluppatore per assegnarsi cento punti.
--
--  COME SI SEGNA PUNTO: una risposta giusta vale 10 punti per la
--  squadra. Le prime tre risposte giuste di ciascuna domanda ne
--  valgono 3, 2 e 1 in più. Così vince chi sa, e la rapidità
--  sposta solo i pareggi — non premia chi ha il telefono migliore.
--
--  COME SI USA: Supabase -> SQL Editor -> New query -> incolla
--  tutto -> RUN. Si può rieseguire senza danni.
-- ============================================================

do $controllo$
begin
  if to_regclass('public.menti_sessioni') is null then
    raise exception 'Manca il sistema di voto: esegui prima 02-lavagna-inbox-votazioni.sql';
  end if;
end
$controllo$;


-- ============================================================
--  1) LE COLONNE NUOVE
-- ============================================================

-- La sessione sa se è una sfida o una votazione normale.
alter table public.menti_sessioni
  add column if not exists a_squadre boolean not null default false;

-- La domanda sa quale opzione è quella giusta (indice da 0).
-- Resta nullo per le nuvole di parole, che non hanno risposte giuste.
alter table public.menti_domande
  add column if not exists giusta int;

-- La risposta porta con sé la squadra di chi l'ha data.
alter table public.menti_risposte
  add column if not exists squadra text check (squadra in ('rossi','blu'));

create index if not exists menti_risposte_squadra_idx
  on public.menti_risposte (domanda_id, squadra);


-- ============================================================
--  2) VOTARE DICHIARANDO LA SQUADRA
-- ============================================================
-- Sostituisce menti_vota aggiungendo la squadra. La vecchia
-- versione resta valida per le sessioni non a squadre.

create or replace function public.menti_vota_squadra(
  p_codice text, p_domanda bigint, p_valore text, p_squadra text
) returns boolean
language plpgsql
security definer
set search_path = public
as $fnvota$
declare ok boolean;
begin
  -- si vota solo su una domanda che è davvero quella proiettata
  -- adesso, in una sessione aperta con quel codice
  select true into ok
  from public.menti_sessioni s
  where upper(s.codice) = upper(trim(p_codice))
    and s.aperta = true
    and s.domanda_attiva = p_domanda
  limit 1;

  if ok is null then
    return false;
  end if;

  if p_squadra is not null and p_squadra not in ('rossi','blu') then
    return false;
  end if;

  if p_valore is null or length(p_valore) = 0 or length(p_valore) > 200 then
    return false;
  end if;

  insert into public.menti_risposte (domanda_id, valore, squadra)
  values (p_domanda, p_valore, p_squadra);

  return true;
end
$fnvota$;

revoke all on function public.menti_vota_squadra(text,bigint,text,text) from public;
grant execute on function public.menti_vota_squadra(text,bigint,text,text) to anon, authenticated;


-- ============================================================
--  3) IL PUNTEGGIO — lo calcola il server
-- ============================================================
-- Restituisce il tabellone completo: punti per squadra, quante
-- risposte giuste, e il dettaglio domanda per domanda.
-- Lo può chiedere chiunque abbia il codice: è ciò che si proietta.

create or replace function public.menti_punteggio(p_codice text)
returns jsonb
language sql
stable
security definer
set search_path = public
as $fnpunti$
with sess as (
  select id from public.menti_sessioni
  where upper(codice) = upper(trim(p_codice)) limit 1
),
-- ogni risposta a una domanda a scelta, con dentro se è giusta
-- e in che ordine è arrivata fra le giuste della sua domanda
valutate as (
  select r.id, r.domanda_id, r.squadra,
         (d.giusta is not null
          and r.valore = (d.opzioni ->> d.giusta)) as giusta,
         row_number() over (
           partition by r.domanda_id
           order by r.creato_il
         ) as ordine_giuste
  from public.menti_risposte r
  join public.menti_domande d on d.id = r.domanda_id
  join sess on sess.id = d.sessione_id
  where d.tipo = 'scelta' and r.squadra is not null
),
punti as (
  select squadra,
         count(*) filter (where giusta) as giuste,
         count(*)                        as risposte,
         sum(case when giusta then 10 else 0 end)
       + sum(case when giusta and ordine_giuste = 1 then 3
                  when giusta and ordine_giuste = 2 then 2
                  when giusta and ordine_giuste = 3 then 1
                  else 0 end) as totale
  from valutate group by squadra
)
select jsonb_build_object(
  'rossi', coalesce((select jsonb_build_object('punti',totale,'giuste',giuste,'risposte',risposte)
                     from punti where squadra='rossi'),
                    jsonb_build_object('punti',0,'giuste',0,'risposte',0)),
  'blu',   coalesce((select jsonb_build_object('punti',totale,'giuste',giuste,'risposte',risposte)
                     from punti where squadra='blu'),
                    jsonb_build_object('punti',0,'giuste',0,'risposte',0)),
  'per_domanda', coalesce((
      select jsonb_agg(x order by (x->>'domanda')::bigint) from (
        select jsonb_build_object(
          'domanda', domanda_id,
          'rossi_giuste', count(*) filter (where giusta and squadra='rossi'),
          'blu_giuste',   count(*) filter (where giusta and squadra='blu'),
          'rossi_totale', count(*) filter (where squadra='rossi'),
          'blu_totale',   count(*) filter (where squadra='blu')
        ) as x
        from valutate group by domanda_id) y), '[]'::jsonb)
);
$fnpunti$;

revoke all on function public.menti_punteggio(text) from public;
grant execute on function public.menti_punteggio(text) to anon, authenticated;


-- ============================================================
--  4) LA SQUADRA SI ASSEGNA A SORTE
-- ============================================================
-- Chi entra chiede una squadra e il server gliela dà, tenendo i
-- due gruppi in equilibrio: se una squadra è indietro di più di
-- uno, il nuovo arrivato ci finisce; altrimenti è testa o croce.
-- Deciderlo qui e non nel telefono evita che qualcuno ricarichi
-- la pagina finché non gli capita la squadra dell'amico.

create table if not exists public.menti_squadre (
  id          bigint generated always as identity primary key,
  sessione_id bigint not null references public.menti_sessioni(id) on delete cascade,
  squadra     text   not null check (squadra in ('rossi','blu')),
  creato_il   timestamptz not null default now()
);
alter table public.menti_squadre enable row level security;
drop policy if exists "menti_squadre_docente" on public.menti_squadre;
create policy "menti_squadre_docente" on public.menti_squadre for all
  to authenticated using (public.is_docente()) with check (public.is_docente());

create or replace function public.menti_assegna_squadra(p_codice text)
returns text
language plpgsql
security definer
set search_path = public
as $fnsquadra$
declare s_id bigint; n_rossi int; n_blu int; scelta text;
begin
  select id into s_id from public.menti_sessioni
  where upper(codice) = upper(trim(p_codice)) and aperta = true limit 1;
  if s_id is null then
    return null;
  end if;

  select count(*) filter (where squadra='rossi'),
         count(*) filter (where squadra='blu')
    into n_rossi, n_blu
  from public.menti_squadre where sessione_id = s_id;

  if n_rossi > n_blu then
    scelta := 'blu';
  elsif n_blu > n_rossi then
    scelta := 'rossi';
  else
    scelta := case when random() < 0.5 then 'rossi' else 'blu' end;
  end if;

  insert into public.menti_squadre (sessione_id, squadra)
  values (s_id, scelta);

  return scelta;
end
$fnsquadra$;

revoke all on function public.menti_assegna_squadra(text) from public;
grant execute on function public.menti_assegna_squadra(text) to anon, authenticated;


-- ---- controllo ---------------------------------------------
-- Deve rispondere con due squadre a zero punti (o l'errore
-- «nessuna sessione», se non ne hai ancora create).
select public.menti_punteggio('PROVA');
