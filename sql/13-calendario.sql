-- ============================================================
--  IDEARCA — Il calendario delle lezioni
--  ------------------------------------------------------------
--  COME SI USA: Supabase -> «SQL Editor» -> «New query» ->
--  incolla TUTTO -> RUN. Si puo rieseguire senza danni.
--
--  PRESUPPONE che sia gia stato eseguito SICUREZZA-supabase-v2.sql,
--  che ha creato la funzione public.is_docente().
--
--  L'IDEA. Un calendario in cui si scrive ogni ora a mano non
--  regge un anno: le stesse righe si riscrivono trentatre volte.
--  Qui l'orario settimanale si imposta una volta sola e le ore
--  dell'anno le genera il database. Restano modificabili una per
--  una, perche la realta non segue l'orario: le assemblee, le
--  gite, i giorni di supplenza.
--
--  QUATTRO TAVOLE.
--    classi        le classi in cui insegni
--    orario        la griglia settimanale: 4B il lunedi dalle 9
--    sospensioni   vacanze e giorni in cui non si fa lezione
--    lezioni       le ore vere, una riga per ora, con dentro
--                  l'argomento, i materiali, i compiti e le note
-- ============================================================

do $$
begin
  if to_regprocedure('public.is_docente()') is null then
    raise exception 'Manca la funzione is_docente(): esegui prima SICUREZZA-supabase-v2.sql';
  end if;
end $$;


-- ============================================================
--  1) CLASSI
-- ============================================================
create table if not exists public.classi (
  id         bigint generated always as identity primary key,
  nome       text        not null,                    -- «4B»
  indirizzo  text,                                    -- «Liceo scientifico»
  anno       text        not null,                    -- «2026/27»
  colore     text        not null default '#2d5a27',
  ordine     int         not null default 0,
  attiva     boolean     not null default true,
  creato_il  timestamptz not null default now()
);

-- la stessa classe non puo esistere due volte nello stesso anno
create unique index if not exists classi_nome_anno_idx
  on public.classi (lower(nome), anno);


-- ============================================================
--  2) ORARIO SETTIMANALE
--  giorno: 1 = lunedi ... 7 = domenica, come isodow di Postgres.
--  Usare la stessa numerazione del database evita la conversione
--  piu sbagliata che ci sia, quella fra il lunedi=1 europeo e la
--  domenica=0 di JavaScript.
-- ============================================================
create table if not exists public.orario (
  id         bigint generated always as identity primary key,
  classe_id  bigint      not null references public.classi(id) on delete cascade,
  giorno     smallint    not null check (giorno between 1 and 7),
  ora_inizio time        not null,
  ora_fine   time        not null,
  materia    text,                                    -- «Filosofia», «Storia»
  aula       text,
  attivo     boolean     not null default true,
  constraint orario_ore_sensate check (ora_fine > ora_inizio)
);

create index if not exists orario_classe_idx on public.orario (classe_id, giorno);

-- due lezioni della stessa classe non possono cominciare insieme
create unique index if not exists orario_niente_doppioni_idx
  on public.orario (classe_id, giorno, ora_inizio);


-- ============================================================
--  3) SOSPENSIONI
--  Vacanze, ponti, gite. classe_id nullo = vale per tutte.
-- ============================================================
create table if not exists public.sospensioni (
  id        bigint generated always as identity primary key,
  dal       date not null,
  al        date not null,
  motivo    text,
  classe_id bigint references public.classi(id) on delete cascade,
  constraint sospensioni_ordine_date check (al >= dal)
);

create index if not exists sospensioni_date_idx on public.sospensioni (dal, al);


-- ============================================================
--  4) LEZIONI
--  Una riga per ora di lezione.
--
--  I materiali sono un elenco di id invece di una tavola di
--  collegamento: e una scelta, non una dimenticanza. Con un solo
--  docente e qualche centinaio di lezioni il collegamento non
--  serve a nulla se non a complicare ogni lettura, e un materiale
--  cancellato lascia al massimo un id che la pagina ignora.
-- ============================================================
create table if not exists public.lezioni (
  id           bigint generated always as identity primary key,
  classe_id    bigint      not null references public.classi(id) on delete cascade,
  data         date        not null,
  ora_inizio   time        not null,
  ora_fine     time,
  materia      text,
  argomento    text        not null default '',
  note         text,
  compiti      text,
  compiti_per  date,
  svolta       boolean     not null default false,
  materiali    bigint[]    not null default '{}',
  orario_id    bigint      references public.orario(id) on delete set null,
  creato_il    timestamptz not null default now(),
  aggiornato_il timestamptz not null default now()
);

create index if not exists lezioni_data_idx    on public.lezioni (data, ora_inizio);
create index if not exists lezioni_classe_idx  on public.lezioni (classe_id, data);

-- niente due ore sovrapposte per la stessa classe
create unique index if not exists lezioni_niente_doppioni_idx
  on public.lezioni (classe_id, data, ora_inizio);

-- «aggiornato_il» si aggiorna da solo: ricordarsene a mano
-- funziona finche non ci si dimentica una volta
create or replace function public.tocca_lezione()
returns trigger language plpgsql as $$
begin
  new.aggiornato_il = now();
  return new;
end $$;

drop trigger if exists lezioni_tocca on public.lezioni;
create trigger lezioni_tocca before update on public.lezioni
  for each row execute function public.tocca_lezione();


-- ============================================================
--  5) LA GENERAZIONE
--  Prende l'orario settimanale e crea le ore fra due date.
--  Salta i giorni sospesi e le ore che esistono gia, quindi si
--  puo rilanciare quante volte si vuole: a settembre per tutto
--  l'anno, e di nuovo a febbraio dopo aver cambiato l'orario.
--  Restituisce quante ne ha create.
-- ============================================================
create or replace function public.genera_lezioni(dal date, al date)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  quante integer := 0;
begin
  if not public.is_docente() then
    raise exception 'Solo il docente puo generare le lezioni';
  end if;
  if al < dal then
    raise exception 'La data finale viene prima di quella iniziale';
  end if;
  if al - dal > 400 then
    raise exception 'Intervallo troppo lungo: al massimo un anno per volta';
  end if;

  with giorni as (
    select d::date as data from generate_series(dal, al, interval '1 day') d
  ),
  nuove as (
    insert into public.lezioni
      (classe_id, data, ora_inizio, ora_fine, materia, orario_id)
    select o.classe_id, g.data, o.ora_inizio, o.ora_fine, o.materia, o.id
      from public.orario o
      join public.classi c on c.id = o.classe_id and c.attiva
      join giorni g on extract(isodow from g.data)::smallint = o.giorno
     where o.attivo
       and not exists (
         select 1 from public.sospensioni s
          where g.data between s.dal and s.al
            and (s.classe_id is null or s.classe_id = o.classe_id))
       and not exists (
         select 1 from public.lezioni l
          where l.classe_id = o.classe_id
            and l.data = g.data
            and l.ora_inizio = o.ora_inizio)
    returning 1)
  select count(*) into quante from nuove;

  return quante;
end $$;

revoke all on function public.genera_lezioni(date, date) from public;
grant execute on function public.genera_lezioni(date, date) to authenticated;


-- ============================================================
--  6) RIPULIRE
--  Toglie le ore future ancora vuote di una classe: serve quando
--  l'orario cambia a meta anno. Non tocca mai quelle in cui hai
--  scritto qualcosa, ne quelle gia passate.
-- ============================================================
create or replace function public.pulisci_lezioni_vuote(da_classe bigint, dalla_data date)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare quante integer := 0;
begin
  if not public.is_docente() then
    raise exception 'Solo il docente puo ripulire il calendario';
  end if;

  with tolte as (
    delete from public.lezioni
     where data >= dalla_data
       and (da_classe is null or classe_id = da_classe)
       and coalesce(argomento,'') = ''
       and coalesce(note,'')      = ''
       and coalesce(compiti,'')   = ''
       and materiali = '{}'
       and not svolta
    returning 1)
  select count(*) into quante from tolte;

  return quante;
end $$;

revoke all on function public.pulisci_lezioni_vuote(bigint, date) from public;
grant execute on function public.pulisci_lezioni_vuote(bigint, date) to authenticated;


-- ============================================================
--  7) CHI PUO VEDERE
--  Il calendario e solo del docente: nessuna riga arriva a chi
--  non ha fatto l'accesso. Le regole valgono a livello di
--  database, non di pagina — nascondere un bottone non protegge
--  niente.
-- ============================================================
alter table public.classi      enable row level security;
alter table public.orario      enable row level security;
alter table public.sospensioni enable row level security;
alter table public.lezioni     enable row level security;

drop policy if exists "classi_docente" on public.classi;
create policy "classi_docente" on public.classi for all
  to authenticated using (public.is_docente()) with check (public.is_docente());

drop policy if exists "orario_docente" on public.orario;
create policy "orario_docente" on public.orario for all
  to authenticated using (public.is_docente()) with check (public.is_docente());

drop policy if exists "sospensioni_docente" on public.sospensioni;
create policy "sospensioni_docente" on public.sospensioni for all
  to authenticated using (public.is_docente()) with check (public.is_docente());

drop policy if exists "lezioni_docente" on public.lezioni;
create policy "lezioni_docente" on public.lezioni for all
  to authenticated using (public.is_docente()) with check (public.is_docente());


-- ============================================================
--  8) LE FESTE ITALIANE
--  Si mettono da sole per l'anno scolastico in corso: sono le
--  stesse ogni anno e ricopiarle a mano e tempo perso. Le
--  vacanze di Natale e di Pasqua cambiano di anno in anno e
--  vanno aggiunte da te, dalla pagina del calendario.
-- ============================================================
insert into public.sospensioni (dal, al, motivo)
select d, d, m from (values
  (date '2026-11-01', 'Tutti i santi'),
  (date '2026-12-08', 'Immacolata'),
  (date '2027-01-06', 'Epifania'),
  (date '2027-04-25', 'Liberazione'),
  (date '2027-05-01', 'Festa del lavoro'),
  (date '2027-06-02', 'Festa della Repubblica')
) as f(d, m)
where not exists (
  select 1 from public.sospensioni s where s.dal = f.d and s.classe_id is null);


-- ============================================================
--  CONTROLLO
--  Deve stampare quattro righe con «pronta».
-- ============================================================
select t.tavola,
       case when to_regclass('public.'||t.tavola) is not null
            then 'pronta' else 'MANCA' end as stato,
       (select count(*) from pg_policies p
         where p.schemaname='public' and p.tablename=t.tavola) as regole
  from (values ('classi'),('orario'),('sospensioni'),('lezioni')) as t(tavola);
