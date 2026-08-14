# qubit · QuantumJazzStation

Una **stazione di sonificazione quantistica**: la meccanica quantistica resa suono, dal vivo nel browser.
Un qubit in **sovrapposizione**, che alla **misura collassa** a caso (regola di Born), e più qubit
legati dall'**entanglement**. Gemella di [n_c_c_n](https://github.com/) (ChaoticJazzStation), ma sul
quantistico invece che sul caos.

Sito statico, **zero dipendenze** (solo HTML + Canvas + WebAudio).

## Strumenti

- **Single Qubit** (`bloch/`) — un qubit sulla sfera di Bloch che precede sotto un campo: la melodia
  scorre in continuo, la misura (Z / X / Y) collassa in una nota. Synth regolabile, collasso armonico,
  ritmo con suddivisioni e swing.
- **Quantum Band** (`band/`) — un registro reale a 2–4 qubit (evoluzione unitaria + accoppiamento di
  Ising). Una voce per qubit; l'entanglement si *ascolta* come voci che si velano e si rispondono.
  La versione "Bell Pair Duet" = 2 voci con accoppiamento alto.

Ogni strumento può **registrare** audio / video / audio+video (MP4, fallback WebM).

## Struttura

```
index.html            console (home)
about.html            colophon
bibliography.html     riferimenti
assets/
  theme.css           tema "industrial rack"
  site.js             motore (home + pagine)
  projects.js         CATALOGO — unico file da modificare per aggiungere moduli
bloch/  · band/       i due moduli, con sim/*.html (gli strumenti)
.nojekyll             richiesto da GitHub Pages
Paper/                PDF dei paper sorgente — NON necessari al sito (vedi .gitignore)
```

## Provare in locale

```bash
python -m http.server 8000
```

Poi apri <http://localhost:8000/>. (In alternativa, doppio clic su `index.html`.)
Premi **Audio** nello strumento; il suono parte solo dopo un clic (regola dei browser).

## Pubblicare online (GitHub Pages)

1. Crea un repository su GitHub e carica **il contenuto di questa cartella** (non la cartella stessa),
   così che `index.html` sia nella radice del repo.
2. Repo → **Settings → Pages** → *Build and deployment* → Source: **Deploy from a branch**,
   Branch: **main** / **/(root)** → Save.
3. Dopo ~1 minuto il sito è online su `https://<utente>.github.io/<repo>/`.

Il file `.nojekyll` serve a far servire i file così come sono, senza Jekyll.

## Riferimenti

- B. Coecke — *A Quantum Guitar*, arXiv:2509.04526 (2025).
- R.-B. Abdyssagin, B. Coecke — *Quantum Concept Music Score from Quantum Picturalism*, arXiv:2510.05391 (2025).
- B. Coecke, A. Kissinger — *Picturing Quantum Processes*, Cambridge University Press (2017).
