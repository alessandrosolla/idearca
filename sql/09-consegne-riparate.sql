-- ============================================================
--  IDEARCA — Le consegne degli studenti erano bloccate
--  ------------------------------------------------------------
--  IL SINTOMO: uno studente compila la consegna, preme «Invia» e
--  gli torna un errore rosso:
--      new row violates row-level security policy for table "consegne"
--  Succedeva anche con una finestra regolarmente aperta.
--
-- LA CAUSA: nella migrazione 04 la regola che autorizza gli invii
--  contiene questo controllo:
--
--      exists (select 1 from public.finestre_consegna f
--              where f.id = consegne.finestra_id and f.attiva ...)
--
--  Sembra innocuo, ma quella select viene eseguita CON I PERMESSI
-- DELLO STUDENTE, e su finestre_consegna vi è una sola regola di
--  lettura: quella del docente. Lo studente quindi non vede
-- nessuna riga, la verifica risponde «falso» e la consegna viene
--  respinta — sempre, qualunque finestra sia aperta.
--
-- Perché la lista delle consegne aperte invece si vedeva? Perché
--  quello passa dalla funzione finestre_aperte(), che è
--  «security definer» e scavalca le regole di lettura. Il
--  controllo dentro la policy no: quella parte non lo era.
--
--  LA CURA: si sposta il controllo dentro una funzione
--  «security definer», che risponde soltanto sì o no e non
--  rivela nulla della tabella. La regola resta severa — si
--  inserisce solo se la finestra è davvero aperta — ma adesso
--  può rispondere anche a chi non è il docente.
--
--  COME SI USA: Supabase -> "SQL Editor" -> "New query" ->
--  incolla tutto -> RUN. Si può rieseguire senza danni.
--
--  PRESUPPONE: 04-finestre-consegna.sql già eseguito.
-- ============================================================

do $$
begin
  if to_regclass('public.finestre_consegna') is null then
    raise exception 'Manca la tabella finestre_consegna: esegui prima 04-finestre-consegna.sql';
  end if;
end $$;


-- ============================================================
--  1) PRIMA DI CURARE: la prova del difetto
-- ============================================================
-- Questa riga mostra quante finestre risultano aperte adesso.
-- Se è almeno 1 e le consegne venivano lo stesso respinte, il
-- difetto è esattamente quello descritto sopra.

select count(*) as finestre_aperte_adesso from public.finestre_aperte();


-- ============================================================
--  2) LA DOMANDA, CHIUSA DENTRO UNA FUNZIONE
-- ============================================================
-- Risponde soltanto «sì» o «no» su una finestra per volta.
-- Non restituisce titoli, istruzioni né classi: chi la chiama
-- non impara nulla che non sapesse già, perché il numero della finestra ce lo ha
-- in mano solo se glielo ha dato la lista delle finestre aperte.

create or replace function public.finestra_aperta(p_id bigint)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.finestre_consegna f
    where f.id = p_id
      and f.attiva = true
      and (f.apre_il   is null or f.apre_il   <= now())
      and (f.chiude_il is null or f.chiude_il >= now())
  );
$$;

revoke all on function public.finestra_aperta(bigint) from public;
grant execute on function public.finestra_aperta(bigint) to anon, authenticated;


-- ============================================================
--  3) LA REGOLA RIFATTA
-- ============================================================
-- Stessi limiti di prima sul nome e sulla lunghezza del testo.
-- Cambia solo il modo di verificare la finestra: non più una
-- select diretta, ma la funzione qui sopra.

drop policy if exists "consegne_invio_finestra_aperta" on public.consegne;
create policy "consegne_invio_finestra_aperta"
  on public.consegne for insert
  to anon, authenticated
  with check (
    length(coalesce(studente,'')) between 1 and 80
    and length(coalesce(testo,'')) <= 20000
    and finestra_id is not null
    and public.finestra_aperta(finestra_id)
  );


-- ============================================================
--  4) CONTROLLO — si può eseguire senza paura
-- ============================================================
-- Prova a inserire una consegna finta sulla prima finestra
-- aperta, poi la cancella subito. Se arriva in fondo senza
-- errori, gli studenti adesso riescono a consegnare.

do $$
declare
  f_id bigint;
  nuova_id bigint;
begin
  select id into f_id from public.finestre_aperte() limit 1;

  if f_id is null then
    raise notice 'Nessuna finestra aperta: la regola e'' a posto, ma per provarla apri una consegna dall''Inbox.';
    return;
  end if;

  insert into public.consegne (studente, classe, attivita, testo, finestra_id)
  values ('Prova automatica', null, 'verifica migrazione 09',
          'Riga di prova inserita dal controllo: viene cancellata subito.', f_id)
  returning id into nuova_id;

  delete from public.consegne where id = nuova_id;

  raise notice 'FUNZIONA: la consegna di prova e'' passata ed e'' stata cancellata.';
end $$;
