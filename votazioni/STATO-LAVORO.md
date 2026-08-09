# Stato del lavoro — banca delle domande

Questo file esiste perché il lavoro sulla banca delle domande è lungo e si
svolge su più sessioni. Chi riprende (io compreso, dopo che la conversazione
è stata riassunta) trova qui tutto il necessario senza dover ricostruire nulla.

## Che cosa si sta costruendo

`votazioni/banca.js` — l'archivio delle domande pronte per le votazioni in
classe. Il professore importa un capitolo con un clic e lo proietta alla LIM;
gli studenti rispondono dal telefono inquadrando il QR.

## Come è fatto un capitolo

Nove domande, sempre in quest'ordine:

1. una **nuvola di parole** di apertura, che apre il problema prima della lezione;
2. **sette a scelta multipla**, quattro opzioni ciascuna;
3. una **nuvola di parole** di chiusura, che chiede un giudizio, non un dato.

Regole che non vanno rotte:

- La risposta giusta ha `giusta: 0`, ma le opzioni vengono mescolate al momento
  dell'importazione: nessuno vede sempre la prima.
- **I distrattori devono essere lunghi quanto la risposta giusta, o di più.**
  Se la risposta esatta è la più lunga, gli studenti la indovinano contando le
  parole invece di studiare. Il controllo qui sotto misura proprio questo.
- I distrattori sono plausibili: errori che uno studente farebbe davvero,
  non assurdità.
- Le nuvole chiedono **una parola sola** e non hanno risposta giusta.

## Il controllo prima di ogni push

    cd ~/idearca && python3 - <<'EOF'
    import re, sys; sys.path.insert(0, '<cartella con esprima>'); import esprima
    src = open('votazioni/banca.js').read(); esprima.parseScript(src)
    b = re.findall(r"opzioni:\[(.*?)\], giusta:(\d)", src, re.S); m=[]; bad=[]
    for o,g in b:
        p = re.findall(r"'((?:[^'\\]|\\.)*)'", o)
        if len(p)!=4 or len(set(p))!=4: bad.append(len(p)); continue
        L=[len(x.replace("\\'","'")) for x in p]; g=int(g)
        m.append(L[g]-max(l for i,l in enumerate(L) if i!=g))
    print('capitoli:', src.count('titolo:'), '| domande:', src.count('tipo:'),
          '| margine medio:', round(sum(m)/len(m),2), '| guasti:', bad or 'nessuno')
    EOF

Il **margine medio** deve restare negativo o vicino a zero: significa che in
media la risposta giusta *non* è la più lunga. `guasti` deve dire «nessuno»
(quattro opzioni, tutte diverse). `esprima` serve solo a verificare che il file
sia JavaScript valido, perché su questo computer non c'è `node`.

## Dove sono i capitoli

L'elenco autorevole è la tabella `materiali` di Supabase, filtrata su
`tab=eq.esercizi`. Da riga di comando:

    curl -s "https://mqjceddrbhpwqjomhohm.supabase.co/rest/v1/materiali\
    ?select=materia,titolo,link,posizione&tab=eq.esercizi&attivo=is.true&order=materia,posizione" \
      -H "apikey: sb_publishable_D7vDsaervKNJNgdJwknDpQ_Vuuf9CeJ"

Il campo `link` contiene l'identificativo Drive del PDF, che si legge con lo
strumento Google Drive. Le domande si ricavano **solo** da quel PDF: è il
materiale che gli studenti hanno davvero studiato.

## A che punto siamo

Fatti **23 capitoli su 120**.

### Filosofia antica — 12 capitoli · completata
- [x] Dagli Ionici agli atomisti · `1c7OT1XyooG6hVjQKbwMQHiuLMgIFz3V_`
- [x] Parmenide e la filosofia eleatica · `17bnC8XsM5sYPy8kZGMaAO0ALXrB6SzS0`
- [x] La sofistica · `1bspep5e97ljXxY-57h1d3Ib4QVgt6t6b`
- [x] Socrate · `14r2g8WK_14tey-FNPYIh1JKHtWIZR_PC`
- [x] Platone. Periodo della giovinezza e della maturità. · `1mrT5NzocgyI_4-fU8zbNbJGqA7QiCwJq`
- [x] Platone. Periodo tardo · `1Iet1VE5DizAqTB3_JYKxxW0i23h-p2Xx`
- [x] Aristotele. Logica e Metafisica · `1IVVZUSCe4LfkHTNR-RICXaxX2yBlKoEp`
- [x] Aristotele. Etica e Politica · `1IM2T68QkOSfad5MB0xCuaCgWIO-XBsJk`
- [x] Epicureismo e Scetticismo · `1pZahHuIaMhJp4H9_-EA2pCtHxdbFpPkM`
- [x] Stoicismo e filosofia a Roma · `1UwtiRsMEjKOYgCQfzSpOPIOx3RmTuFu9`
- [x] Neoplatonismo e Plotino · `1JuQqiFTPKmaIwzMBQorZSZPzDkP4pZJi`
- [x] Agostino · `1o6d6fzmpstd8YnHi7Suq70YCPAjm-Idk`

### Storia medievale — 11 capitoli · completata
- [x] Ripresa dell'anno Mille · `1Yc7wNPQ2l_HyC-nZOc1-hj8nTfdWR3kZ`
- [x] Lotta per le investiture · `1Up-lRRDZWr4Za0x_SCc9A60FjCjDzABj`
- [x] Le crociate · `17-ZDNgfJt2dIOJCTCynDNji9DyRt25qu`
- [x] I comuni e l'impero · `10b_GutTQK1O9Ul5KHXKITdPU-kPIPLgA`
- [x] Federico II e monarchie nazionali · `1417YSOE7Kx9oqdpx8riGlJEK6F8BR1XT`
- [x] Civiltà extraeuropee · `1U5cc9wnBhyh-1VNUb5EQ8uww5gYXOcJa`
- [x] Crisi del "Trecento · `19EDV4YXC_kjNPfz-v0s7_2xp8ztFW9vU`
- [x] Crisi dei poteri universali · `1KCH9TKUBZuTd0_NKovh5zMBQF5_QQfVu`
- [x] Stati regionali · `1aXDuuF5seg9Lu493ewHEOkcLu__AKqAK`
- [x] Impero ottomano · `1mCmQ_2RE_xKc1MZTdY7Z-GDR9u0saN26`
- [x] Il nuovo mondo · `1UG9wSAtQWsd4PYjP2Jf-gcQ3Tv1YXral`

### Filosofia medievale — 3 capitoli · da fare
- [ ] Filosofia medievale · `1hmD5IK736UdZiIP0xJoSHeSZGkzD-V1-`
- [ ] Tommaso d'Aquino · `1ukN0ZPO2z3ppLrFdWkcIjppbIp6v02Y7`
- [ ] Filosofia nel 1300 · `1cNIV0pkGPVaEbXw-SN4utGmO1BptnnZt`

### Storia moderna — 16 capitoli · da fare
- [ ] Carlo V · `1KUqqoE-7zG1RyP3u_EeUln6022FoljVS`
- [ ] Riforma e Controriforma · `1cSig5Yj_VA0afH9pwgPUKABAHU4uRKKe`
- [ ] Economia, guerre, inizio declino Spagnolo · `1lmfBNnYlYRcBHrAb2rrswbYrgk9fsFvB`
- [ ] "Crisi" del Seicento e innovazioni · `1_WLlJpePl6a0zfCKcm2B8tXXLyKuia3A`
- [ ] Guerra dei Trent'anni · `1t27xEZ738IHNjj4BhxDiqfuoa2P7i6Df`
- [ ] Rivoluzioni e assolutismi nel Seicento · `1BIfCmTCOMofX7tF0XZG20b-MHp5exOj6`
- [ ] Europa nel primo Settecento · `1tRSwzbFRNiBZ85xDin_E2PX59qwJmPgn`
- [ ] La civiltà dei lumi · `17q9ksDI2Uo2KzoaIOzwYw7YIIg9sI6QR`
- [ ] La I rivoluzione industriale · `1Gf4aSBpzll4ih1A7OcParkeqtL8vT2DD`
- [ ] Rivoluzione Americana · `1PptPjIM1hUV8iCjCbgfBai-NjSMXUR3o`
- [ ] Rivoluzione francese · `1rOxP13rD8mu72IesD5vQ4XOFZ0MNyztr`
- [ ] Età Napoleonica · `1OctQ66FvCkS9moO-8YJVuYcKZgcyHIlx`
- [ ] La restaurazione · `1mt-FHKjraVu45bhbyRqX2t0MXFucjVSJ`
- [ ] Espansione USA ed età delle nazioni · `1y4pplyKp998eJ9WRYvsH5lBToTtG9s9c`
- [ ] Economia del "Ottocento · `181oOnweq09e2PVozpXOkVvl2KCKM5T-e`
- [ ] Il 1848 · `1EhPgItLGgqYBKe9v-L98XiVLSvjZz1rQ`

### Filosofia moderna — 29 capitoli · da fare
- [ ] Cultura Umanistico-Rinascimentale · `1aQFcTgS-w0Hxj-dD999CMhlNjmfZKQRQ`
- [ ] Ritorno a Platone e Aristotele · `11Z4tPlTJsQ-S4Rn-kYxEkRLJnUjqd7na`
- [ ] Rinascimento e religione · `15PtTiBGDrYerjoYektE3F2ltzfb-0RLR`
- [ ] Rinascimento e politica · `1D6PnTSW4RVr7Ms2oCczdO5wCV4Ej18DI`
- [ ] Telesio, Campanella, Bruno · `1clCG0HpoyJAPW0Tlcare7I5tLXNWKmrR`
- [ ] Rivoluzione scientifica · `1bJLZXEfG02Ue6lJNm6mfz62DTSN2DYwS`
- [ ] Bacone · `10SioTsEVo32XOg6CUd_OOQPCAX5G8ctn`
- [ ] Galileo · `1bXr2Jm5rpLxGI9R7w5Ldf4DhXDAnkAWh`
- [ ] Cartesio · `1GwdAzclOxs44oICkBk6zgsC7S1RUBswb`
- [ ] Spinoza · `1x16XsXGU815axGZva4Q7vJX1N39cSU_s`
- [ ] Leibniz · `1E3mdyk0NSgZDGR50E_6Z84Xa7QY2RKjP`
- [ ] Hobbes · `1cgupegfu0tt8x-9PTlRZ1LqeG6rHUHTD`
- [ ] Locke · `1reygC5QRABIfXSGUda0JTEgJx7h47tOQ`
- [ ] Berkeley · `18U_1S0__Ne9xH2TA2erZB0DkRghjX1Nb`
- [ ] Hume · `1y-zrJOm7F2eIpf6HefSPVuNE1ebWQ70e`
- [ ] Vico · `1IFiorViSYMZMUXLiiMbqCKDWL8ETMB9n`
- [ ] Illuminismo · `1TNk_DhpW7ZzHLWEjApqPyTYvNz9M55Pw`
- [ ] Rosseau · `1lN9BqI-qVc4N86XSXCV6yc7roLm7DAhQ`
- [ ] Kant. Vita e progetto generale · `1tMTINSm0bRjvBIIHxc16FIHGAs6jw3Pg`
- [ ] Kant. Critica della ragion pura · `1Id9rk1F_XkZgqbznRW4842OCX_rrcSQ-`
- [ ] Kant. Critica della ragion pratica · `1J_4_wRhq9ax22DU4pY6ePFTR6I5f2ZXo`
- [ ] Kant. Critica del giudizio · `14g6rKfE9PmM7nTjHbJyTBmZFbIdb7zn_`
- [ ] Kant. Politica e religione · `1C1FSNgPi9nemDN-eHapdgkXB0iPXnhRn`
- [ ] Romanticismo · `1-v1DPkXtPomXARH7TxsKTnWMa6aKhdE0`
- [ ] Fichte · `1WQigdM_vqYwq2fIkV__fJKFm-hMnZhIc`
- [ ] Schelling · `1GWYjkd71ZJDiMb1cSUSBJC5MvzsgRlhC`
- [ ] Hegel. Fondamenta del pensiero · `1A7URiSg5H4X6A2PsNFeDN3nKkMrlJDKL`
- [ ] Hegel. Fenomenologia · `19bMT2rT3l2Mj7MBEKVnmW0RnnlcQwfXa`
- [ ] Enciclopedia delle scienze in compendio · `1X_RN7vPqlcG_Kijpn0M_2Hh-_eEYZCJy`

### Storia contemporanea — 28 capitoli · da fare
- [ ] Italia risorgimentale e I guerra di indipendenza · `1HN5hMHhnC6MMxT6HEvNDsIsadE4x6fM0`
- [ ] Europa 1850-1870 · `12MGMgvz-XYW4vFEHRtCflFpwkAu5SPhV`
- [ ] Guerra civile USA, Giappone, Cina · `1mobsaRKKG0cL2Zz9RaaZoBAhFlIHx_ZX`
- [ ] L'Unità d'Italia · `1WKlt47dPWsoVYTLcuekfe1Lu-MkvTjtu`
- [ ] L'Europa di Bismarck · `1PzoB8q6tcO7G-TBfe-tDPw2es80KIWrc`
- [ ] Seconda rivoluzione industriale · `1H5kSpo5AUxkGCVcwvmNR73MKJBlpjhGZ`
- [ ] Italia e sinistra storica · `1qCn1Bbp6SwENVECFTG7fZF7Wlv8ZDXvK`
- [ ] Imperialismo · `1IqSU_mI2EyxXFqRLXZSUoQ7nm9lettiR`
- [ ] Belle epoque · `1ckwtnKZi-wSfuWPSwZzljsunA5HaEpZq`
- [ ] La Germania di Guglielmo II · `1maexnlpWM9dLcXw2lf5pyNcadvCj7nvC`
- [ ] Italia Giolittiana · `1V_BowSR0-gsigzHLOcqN_xoKAMeGMwSX`
- [ ] La Grande guerra · `10QX9baiFmCy3zqyXLAmPOK9-s6LF_3dV`
- [ ] Rivoluzione Russa · `1RYn6GGzha9R81cDhLwEWvhWu-jcSSzx4`
- [ ] Dopoguerra · `1u57UBS-vMx9ZVneR9J4WEbu7FU4vQByo`
- [ ] Italia nel dopoguerra e nascita fascismo · `1rquIb4W8Sw5XHbFOX7AwwyoKT5vBddUK`
- [ ] Crisi del 1929 · `1GRD-j4RZuVnalLnhlzlqBV6Wja0yDv5c`
- [ ] Stalinismo · `11JtlF9ItH1b-guDMdAEqHQnljUvhd9VV`
- [ ] Nazismo · `1GMLezQ-ujyLsRESAiADctEd2Um3rERYg`
- [ ] Guerra civile Spagnola · `1N_gUHf3Et1XA7d8-oiNmxD1TRF0bocBx`
- [ ] L'Italia fascista · `1M-u5D3OsK58nkpyPC3piiCkvgUmt0XYd`
- [ ] Seconda guerra mondiale · `1CTG0d6DcSFDKnpCyzOna8zub0pBoLbFf`
- [ ] Guerra fredda · `10mb7zJGcYQbEGNAA9gUUKpQmQYBndjZG`
- [ ] Coesistenza pacifica · `10xrCCSaRE_OL-FivVqhidVE6aWPUM5GC`
- [ ] Sessantotto e distensione · `1dm0x7_DxxMYKfPipvrfKqKm_HUNI3BPe`
- [ ] Crollo del blocco sovietico · `1rQMEW7nkUGBH8Ytw1gzcD8Lq6_dC2gQ5`
- [ ] Il mondo contemporaneo · `1C3Cys_5XsR8nqigiokvhT87V_VNqErV3`
- [ ] Italia Repubblicana · `1DnaiuQ4PMW3I08aPiQCX3RoYE8KLrxEN`
- [ ] Italia contemporanea · `1vs-dfBJSzAxaTWhTFC7Mf2O8tDM4b8mr`

### Filosofia contemporanea — 21 capitoli · da fare
- [ ] Schopenauer · `1pbwJJz-6cEExZVafzOd3IAWXBbQPoQyv`
- [ ] Kierkegard · `1I0jHBVRR5i2yYWlhbyPYsgU3cL9cRM4v`
- [ ] Sinistra Hegeliana e Feuerbach · `13sfMISymu6kSLUImPNx1lCBc867Dmtof`
- [ ] Positivismo. Comte e Mill · `1XI_7KrRSyrNyUZ8l1k-0Cy0WGK_YbjZW`
- [ ] Positivismo evoluzionista. Darwin e Spencer · `1Nes5fprwtAJpoEbZVVz6X9SVs967uuVE`
- [ ] Bergson e Weber · `1z9SCIRPhphD7CQJdhVqgo61L4baXb6vt`
- [ ] Nietsche. La fase del cammello e del leone · `16TVAloxhf19Gv0yv6qFWFA82Ct1a2WaI`
- [ ] Nietzsche. Super-uomo · `1zYm9XXqF_v50k2eX8JF-q8nGF_hgbjmh`
- [ ] Freud · `1tviT1_v5iwbZ3Z_Kn-9HilqTsulg2PfF`
- [ ] Husserl · `1k85ZoRxE0SCotJBXWxIDdSMSDBWLsTK6`
- [ ] Esistenzialismo · `14Y-8CZPKHInHLtoYsvYN4JXaFDXsiIYL`
- [ ] Crisi delle scienze · `1_EeM3nu0g3YsUZsTHFdQSoqX7GjS--2t`
- [ ] Pragmatismo · `1ifgKaYH8R9J5cEOATEWCIor5G1BRrGn5`
- [ ] Neoidealismo Italiano · `1aL6j8ECvydhltVjkT_EPr-qSyYO0b1kf`
- [ ] Heiddeger · `1C6e7wcIUfDNuDVko25nUKf42pLHzNZoV`
- [ ] Jaspers e Sartre · `1o7MSAWhRS-V_U29Q3VJbz6A-QQfs6kNg`
- [ ] Critica al capitalismo e Scuola di Francoforte · `12ZHHWs6uVi1SGsewiu3ueeY3g2qthoGp`
- [ ] Wittgenstein · `1pQmZGdenkydITWE4HogvYrDTu-2L_fxb`
- [ ] Strutturalismo e decostruzionismo · `15CwZRShTLBvZZdDjUt1aPBzkK13Uns8B`
- [ ] Arendt · `1cMeBHDKH_tu3pqQSWw9E9F3vtBrXhVDd`
- [ ] Karl Marx · `1EtYgYiBCUEd96uc-XFmM-5WusMuAmhxc`

Al termine di ogni materia va avvisato il professore. Durante il lavoro, no:
ha chiesto di non essere interrotto capitolo per capitolo.
