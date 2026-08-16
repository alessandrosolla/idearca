/* ══════════════════════════════════════════════════════════
   LA GRIGLIA DA PORTARE IN CLASSE
   Durante un debate il computer sta al proprio posto e si guarda
   la classe: i punti si segnano a penna. Questa funzione apre
   una finestra con un foglio A4 già impaginato — una colonna per
   squadra, una riga per criterio, le caselle vuote — e chiama
   subito la stampa. Da lì si stampa davvero oppure si salva in
   PDF, che è come si «scarica» un foglio senza generare un file.

   I criteri arrivano dalla pagina che chiama, non sono copiati
   qui: due elenchi che dicono cose diverse sono un problema che
   si scopre sempre troppo tardi.

   Il foglio si apre in una finestra vuota scritta da noi, senza
   fogli di stile esterni: quello che si vede a schermo è
   esattamente quello che esce dalla stampante.
   ══════════════════════════════════════════════════════════ */
function stampaGrigliaDebate(dati){
  const esc = t => String(t==null?'':t).replace(/[<>&]/g,
    c=>({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]));

  const totale = dati.criteri.reduce((n,c)=>n + (parseInt(c.punti,10)||0), 0);

  /* Una tabella per squadra. Tenerle su due fogli affiancati
     sarebbe più compatto, ma in aula si guarda una squadra per
     volta e si scrive senza cercare la colonna giusta. */
  const tabella = squadra => `
    <table class="g">
      <thead>
        <tr>
          <th class="c-sq" colspan="4">${esc(squadra)}</th>
        </tr>
        <tr>
          <th class="c-voce">Criterio</th>
          <th class="c-come">Che cosa guardare</th>
          <th class="c-max">Max</th>
          <th class="c-pt">Punti</th>
        </tr>
      </thead>
      <tbody>
        ${dati.criteri.map(c=>`
        <tr>
          <td class="c-voce"><b>${esc(c.voce)}</b></td>
          <td class="c-come">${esc(c.come)}</td>
          <td class="c-max">${esc(c.punti)}</td>
          <td class="c-pt"></td>
        </tr>`).join('')}
        <tr class="tot">
          <td colspan="2">Totale</td>
          <td class="c-max">${totale}</td>
          <td class="c-pt"></td>
        </tr>
      </tbody>
    </table>
    <div class="note">
      <div class="note-t">Note e frasi da riprendere nel debriefing</div>
      <div class="righe"><span></span><span></span><span></span><span></span></div>
    </div>`;

  const oratori = `
    <table class="g oratori">
      <thead><tr>
        <th class="c-voce">Chi parla</th>
        <th>Nome</th><th>Nome</th>
      </tr></thead>
      <tbody>
        <tr><td class="c-voce">Primo oratore</td><td></td><td></td></tr>
        <tr><td class="c-voce">Secondo oratore</td><td></td><td></td></tr>
        <tr><td class="c-voce">Terzo oratore</td><td></td><td></td></tr>
      </tbody>
    </table>`;

  const html = `<!doctype html><html lang="it"><head><meta charset="utf-8">
<title>Griglia — ${esc(dati.titolo)}</title>
<style>
  @page{size:A4;margin:14mm 13mm}
  *{box-sizing:border-box}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;
    color:#1a1a1a;margin:0;font-size:10.5pt;line-height:1.45}
  h1{font-family:Georgia,'Times New Roman',serif;font-size:19pt;font-weight:600;
    margin:0 0 2pt;line-height:1.1}
  .sotto{font-size:9.5pt;color:#555;margin:0 0 4pt}
  .campi{display:flex;gap:14pt;font-size:9pt;color:#333;
    border-bottom:1.4pt solid #1a1a1a;padding-bottom:7pt;margin-bottom:12pt}
  .campi span{flex:1;border-bottom:.6pt solid #999;padding-bottom:1pt}
  .campi b{font-weight:600;color:#000}

  table.g{width:100%;border-collapse:collapse;margin-bottom:9pt;page-break-inside:avoid}
  table.g th,table.g td{border:.6pt solid #999;padding:5pt 6pt;vertical-align:top;text-align:left}
  th.c-sq{background:#1a1a1a;color:#fff;font-size:11pt;letter-spacing:.06em;
    text-transform:uppercase;padding:6pt}
  table.g thead tr:nth-child(2) th{background:#efefef;font-size:8pt;
    letter-spacing:.07em;text-transform:uppercase;font-weight:700}
  .c-voce{width:27%}
  .c-come{font-size:9pt;color:#444}
  .c-max{width:9%;text-align:center;color:#666}
  .c-pt{width:14%;background:#fbfbfb}
  tr.tot td{font-weight:700;border-top:1.2pt solid #1a1a1a;background:#f4f4f4}

  .note{border:.6pt solid #999;padding:6pt;margin-bottom:14pt;page-break-inside:avoid}
  .note-t{font-size:8pt;letter-spacing:.07em;text-transform:uppercase;
    font-weight:700;color:#555;margin-bottom:5pt}
  .righe span{display:block;border-bottom:.5pt solid #ccc;height:15pt}

  table.oratori td{height:20pt}
  table.oratori th{background:#efefef;font-size:8pt;letter-spacing:.07em;
    text-transform:uppercase;font-weight:700}

  .piede{margin-top:10pt;padding-top:6pt;border-top:.6pt solid #ccc;
    font-size:8.5pt;color:#666;display:flex;justify-content:space-between;gap:10pt}
  .avvertenza{font-size:8.5pt;color:#444;background:#f6f6f6;border-left:2.4pt solid #999;
    padding:5pt 7pt;margin-bottom:12pt}
  @media screen{ body{max-width:820px;margin:22px auto;padding:0 18px} }
</style></head><body>
  <h1>${esc(dati.titolo)}</h1>
  <p class="sotto">${esc(dati.sotto)}</p>
  <div class="campi">
    <span><b>Classe</b> </span><span><b>Data</b> </span><span><b>Ora</b> </span>
  </div>

  <div class="avvertenza">Il punteggio non stabilisce chi ha ragione sulla mozione: stabilisce
  chi ha discusso meglio. Conviene dirlo alla classe prima di cominciare.</div>

  ${oratori}
  ${dati.squadre.map(tabella).join('')}

  <div class="piede">
    <span>Esito: ______________________________</span>
    <span>Idearca · ${esc(dati.titolo)}</span>
  </div>
</body></html>`;

  const f = window.open('', '_blank');
  if(!f){
    alert('Il browser ha bloccato la finestra della stampa. Consenti le finestre '
        + 'per questo sito e riprova.');
    return;
  }
  f.document.open();
  f.document.write(html);
  f.document.close();
  /* Un attimo perché il foglio si impagini prima di aprire la
     stampa: senza questa attesa alcuni browser stampano una
     pagina bianca. */
  f.onload = () => setTimeout(()=>{ f.focus(); f.print(); }, 250);
}
