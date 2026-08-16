/* ══════════════════════════════════════════════════════════
   CORPUS DI PROVA DEL GENERATORE DI MAPPE

   Non serve alla pagina: serve a chi la modifica. Il generatore
   non deve funzionare su un testo, deve funzionare su qualunque
   testo, e l'unico modo di saperlo è avere sotto mano otto
   generi diversi e una misura.

   Come si usa: si apre prove/mappe.html, si carica questo file
   dalla console, si spegne il disegno (che è lento) e si conta
   quanti rapporti attesi vengono trovati:

     const v=aggiorna; aggiorna=()=>{};
     for(const c of CORPUS){
       document.getElementById('fonte').value=c.t; estrai();
       console.log(c.n, legami.map(l=>l.da+' → '+l.rel+' → '+l.a));
     }
     aggiorna=v;

   Storia della misura, per non ripetere gli errori:
     15/28  prima del riconoscimento del verbo per posizione;
            tre generi su otto davano zero legami
     21/28  dopo
     23/28  dopo i quantificatori, i concetti che finivano con un
            verbo, e il soggetto sottinteso dopo la congiunzione
   In tutte e tre le misure: zero legami inventati.
   ══════════════════════════════════════════════════════════ */

/* CORPUS DI PROVA per il generatore di mappe.
   Otto testi di generi diversi, ciascuno con i rapporti che una
   lettura onesta dovrebbe trovare (`attesi`) e quelli che NON
   deve inventare (`vietati`). Serve a misurare, non a indovinare. */
window.CORPUS=[
{n:'manuale · filosofia', t:
`L'empirismo sostiene che ogni conoscenza deriva dall'esperienza. Locke nega l'esistenza di idee innate. La mente alla nascita è una tavola bianca. Hume distingue le impressioni dalle idee. Le idee sono copie sbiadite delle impressioni. Il principio di causalità non deriva dalla ragione ma dall'abitudine.`,
 attesi:[['empirismo','conoscenza'],['locke','idee innate'],['hume','impressioni'],['idee','impressioni'],['causalità','abitudine']],
 vietati:[]},

{n:'manuale · storia narrativa', t:
`Nel 1861 il Parlamento proclamò il Regno d'Italia. Cavour morì pochi mesi dopo. La destra storica governò il paese fino al 1876 e impose il pareggio di bilancio. La tassa sul macinato colpì i contadini e provocò rivolte in Emilia. Il brigantaggio meridionale impegnò più soldati delle guerre d'indipendenza.`,
 attesi:[['parlamento','regno'],['destra storica','pareggio'],['tassa','contadini'],['tassa','rivolte']],
 vietati:[['cavour','destra storica']]},

{n:'prosa argomentativa', t:
`Gli uomini non riescono a restare tranquilli in una camera. Il presente non è mai il nostro fine. Il passato e il presente sono i nostri mezzi, solo l'avvenire è il nostro fine. Il divertimento ci distoglie dal pensare alla nostra condizione.`,
 attesi:[['presente','fine'],['divertimento','condizione']],
 vietati:[]},

{n:'testo giuridico', t:
`L'articolo 40 riconosce il diritto di sciopero. La legge regola l'esercizio del diritto nei servizi essenziali. Il diritto di sciopero non prevale sul diritto alla salute. Il giudice bilancia i due interessi. La proporzionalità limita il sacrificio imposto ai terzi.`,
 attesi:[['articolo','diritto di sciopero'],['legge','esercizio'],['giudice','interessi'],['proporzionalità','sacrificio']],
 vietati:[]},

{n:'testo scientifico', t:
`La selezione naturale agisce sulle variazioni ereditarie. Le variazioni nascono per caso. L'ambiente elimina gli individui meno adatti. L'accumulo di piccole variazioni produce nuove specie. La deriva genetica non dipende dall'adattamento.`,
 attesi:[['selezione naturale','variazioni'],['variazioni','caso'],['ambiente','individui'],['deriva genetica','adattamento']],
 vietati:[]},

{n:'periodi lunghi e subordinate', t:
`Machiavelli, che scrive dopo la caduta della repubblica fiorentina, sostiene che il principe debba conoscere la verità effettuale, cioè come si vive e non come si dovrebbe vivere. La fortuna governa metà delle azioni umane, ma lascia all'altra metà il governo della virtù, che è la capacità di adattarsi ai tempi.`,
 attesi:[['machiavelli','verità effettuale'],['fortuna','azioni'],['virtù','tempi']],
 vietati:[]},

{n:'elenco e coordinazioni', t:
`La rivoluzione francese abolì i privilegi feudali, la decima ecclesiastica e la venalità delle cariche. L'assemblea approvò la Dichiarazione dei diritti. La costituzione civile del clero divise il paese. Il Terrore colpì nobili, preti e girondini.`,
 attesi:[['rivoluzione','privilegi'],['rivoluzione','decima'],['assemblea','dichiarazione'],['costituzione civile','paese'],['terrore','nobili']],
 vietati:[]},

{n:'appunti sciatti', t:
`Kant: rivoluzione copernicana. L'oggetto si regola sul soggetto. Categorie = concetti puri. Spazio e tempo forme a priori. Noumeno inconoscibile. Critica della ragion pura 1781.`,
 attesi:[['oggetto','soggetto']],
 vietati:[]}
];
