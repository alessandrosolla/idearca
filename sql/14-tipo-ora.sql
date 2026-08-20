-- ============================================================
--  IDEARCA — Che cos'è ogni ora
--  ------------------------------------------------------------
--  COME SI USA: Supabase -> «SQL Editor» -> «New query» ->
--  incolla TUTTO -> RUN. Si puo rieseguire senza danni.
--
--  PRESUPPONE la migrazione 13 (il calendario).
--
--  L'IDEA. Fino a ieri tutte le ore erano uguali: una riga con
--  dentro un argomento. Ma un'ora di lezione, una verifica e una
--  votazione non sono la stessa cosa — non si preparano allo
--  stesso modo, non si spostano allo stesso modo, e soprattutto
--  la verifica la decide il docente con la classe settimane
--  prima, mentre le lezioni si adattano intorno.
--
--  Da qui una colonna sola, «tipo», che cambia tre cose:
--    · nel calendario si vede a colpo d'occhio che cos'e' un'ora;
--    · il riempimento automatico salta le ore che hai gia'
--      deciso tu, invece di scriverci sopra;
--    · le verifiche si possono piazzare a mano, in blocco, prima
--      di distribuire il programma.
-- ============================================================

do $$
begin
  if to_regclass('public.lezioni') is null then
    raise exception 'Manca la tavola lezioni: esegui prima 13-calendario.sql';
  end if;
end $$;


-- ============================================================
--  1) LA COLONNA
--  «lezione» e' il valore di partenza: tutte le ore che
--  esistono gia' restano quello che erano.
-- ============================================================
alter table public.lezioni
  add column if not exists tipo text not null default 'lezione';

comment on column public.lezioni.tipo is
  'Che cos''e'' quest''ora: lezione, verifica, votazione, ripasso, '
  'debate, lettura, mappa, uscita, altro. Il riempimento automatico '
  'tocca solo le ore di tipo lezione.';

-- Un elenco chiuso eviterebbe i refusi, ma legherebbe le mani:
-- aggiungere un tipo nuovo richiederebbe una migrazione. Meglio
-- un controllo largo — non vuoto e non lunghissimo — e la pagina
-- che propone i tipi con dei bottoni, cosi' a mano non si scrive.
alter table public.lezioni drop constraint if exists lezioni_tipo_sensato;
alter table public.lezioni add constraint lezioni_tipo_sensato
  check (length(tipo) between 1 and 40);

create index if not exists lezioni_tipo_idx on public.lezioni (tipo);


-- ============================================================
--  2) TIMBRARE PIU' ORE INSIEME
--  Piazzare otto verifiche una per volta sono otto richieste e
--  otto attese. Qui si manda un elenco di id e si cambia tutto
--  in un colpo.
-- ============================================================
create or replace function public.timbra_ore(quali bigint[], nuovo_tipo text)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare quante integer := 0;
begin
  if not public.is_docente() then
    raise exception 'Solo il docente puo cambiare il calendario';
  end if;
  if nuovo_tipo is null or length(nuovo_tipo) not between 1 and 40 then
    raise exception 'Tipo non valido';
  end if;

  with toccate as (
    update public.lezioni
       set tipo = nuovo_tipo
     where id = any(quali)
    returning 1)
  select count(*) into quante from toccate;

  return quante;
end $$;

revoke all on function public.timbra_ore(bigint[], text) from public;
grant execute on function public.timbra_ore(bigint[], text) to authenticated;


-- ============================================================
--  3) SVUOTARE SENZA PERDERE I TIMBRI
--  La ripulitura della migrazione 13 cancellava le ore vuote.
--  Adesso un'ora puo' essere «vuota di argomento» ma avere un
--  timbro che vale — una verifica fissata a marzo non ha ancora
--  un argomento, e guai a cancellarla. Questa versione salta
--  tutto cio' che non e' una lezione.
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
       and coalesce(tipo,'lezione') = 'lezione'
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
--  CONTROLLO
--  Deve stampare la colonna e quante ore ci sono per tipo.
-- ============================================================
select 'colonna tipo' as cosa,
       case when exists (
         select 1 from information_schema.columns
          where table_schema='public' and table_name='lezioni' and column_name='tipo')
       then 'c''e''' else 'MANCA' end as stato;

select coalesce(tipo,'(nessuno)') as tipo, count(*) as ore
  from public.lezioni
 group by 1
 order by 2 desc;
