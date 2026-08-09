-- ============================================================
--  IDEARCA — Controllo del codice di votazione
--  ------------------------------------------------------------
--  A COSA SERVE: senza questa funzione, uno studente che sbaglia
--  a digitare il codice non riceve nessun errore. La pagina non
--  ha modo di distinguere fra «codice inesistente» e «codice
--  giusto, ma il professore non ha ancora proiettato nulla»:
--  in entrambi i casi il database risponde con un elenco vuoto.
--  Risultato: resta in attesa per tutta l'ora senza capire
--  perché non arriva niente.
--
--  Questa funzione risponde solo sì o no all'esistenza di una
--  votazione aperta con quel codice. Non rivela nient'altro:
--  né le domande, né le risposte, né quante votazioni esistono.
--
--  COME SI USA: Supabase -> "SQL Editor" -> "New query" ->
--  incolla tutto -> RUN. Si può rieseguire senza danni.
-- ============================================================

create or replace function public.menti_sessione_aperta(p_codice text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.menti_sessioni s
    where upper(s.codice) = upper(trim(p_codice))
      and s.aperta = true
  );
$$;

revoke all on function public.menti_sessione_aperta(text) from public;
grant execute on function public.menti_sessione_aperta(text) to anon, authenticated;


-- ---- controllo ---------------------------------------------
-- Deve rispondere "false": il codice 000000 non esiste.
select public.menti_sessione_aperta('000000') as deve_essere_false;
