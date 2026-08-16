/* ============================================================
   qubit :: CATALOGO MODULI  ::  UNICO FILE DA MODIFICARE
   ------------------------------------------------------------
   Ogni modulo ha una cartella (stesso "id") con un index.html che
   chiama Site.renderProject('id', ...). La home e le pagine si
   costruiscono da sole da questo file.

   viz:    "solo" | "band"   (grafica della card)
   status: "online" | "standby" | "wip"
   ============================================================ */

window.PROJECTS = [
  {
    id: "bloch",
    title: "Single Qubit",
    viz: "solo",
    subtitle: "Un qubit che evolve sulla sfera di Bloch: precessione, sovrapposizione, misura",
    subtitle_en: "A qubit evolving on the Bloch sphere: precession, superposition, measurement",
    category: "QUANTUM SONIFICATION",
    status: "online",
    qtags: ["Sovrapposizione","x:Collasso alla misura","hz:Regola di Born"],
    qtags_en: ["Superposition","x:Collapse on measurement","hz:Born rule"],
    principle:
      "Lo stato di un qubit è un vettore unitario |ψ⟩ = α|0⟩ + β|1⟩ nello spazio di Hilbert " +
      "ℂ², con |α|² + |β|² = 1. Finché non lo misuri resta in <b>sovrapposizione</b>; la misura " +
      "lo <b>proietta</b> su un autostato con probabilità |⟨esito|ψ⟩|² (<b>regola di Born</b>). " +
      "Qui l'evoluzione unitaria è la melodia, la proiezione è la nota.",
    principle_en:
      "A qubit's state is a unit vector |ψ⟩ = α|0⟩ + β|1⟩ in the Hilbert space ℂ², with " +
      "|α|² + |β|² = 1. Until you measure it, it stays in <b>superposition</b>; measurement " +
      "<b>projects</b> it onto an eigenstate with probability |⟨outcome|ψ⟩|² (<b>Born rule</b>). " +
      "Here unitary evolution is the melody, the projection is the note.",
    abstract:
      "Un qubit è un sistema quantistico a due stati: prima della misura vive in una " +
      "sovrapposizione di |0⟩ e |1⟩. Lo rappresentiamo come un punto sulla sfera di Bloch che " +
      "evolve con continuità sotto un campo, e quel moto continuo diventa una melodia. La " +
      "misura lo proietta, a caso (regola di Born), su un autostato: una nota netta.",
    abstract_en:
      "A qubit is a two-level quantum system: before measurement it lives in a superposition " +
      "of |0⟩ and |1⟩. We picture it as a point on the Bloch sphere that evolves continuously " +
      "under a field, and that continuous motion becomes a melody. Measurement projects it, at " +
      "random (Born rule), onto an eigenstate: a clean note.",
    math:
      "Lo stato di un qubit è un vettore unitario nello spazio di Hilbert ℂ²: |ψ⟩ = α|0⟩ + β|1⟩ " +
      "con α, β ∈ ℂ e |α|² + |β|² = 1. A meno di una fase globale (fisicamente irrilevante) lo si " +
      "scrive |ψ⟩ = cos(θ/2)|0⟩ + e^{iφ} sin(θ/2)|1⟩, con θ ∈ [0,π] e φ ∈ [0,2π): i due angoli " +
      "individuano un punto sulla SFERA DI BLOCH. Il polo nord è |0⟩, il polo sud |1⟩, l'equatore " +
      "raccoglie le sovrapposizioni bilanciate. Nel suono θ governa l'altezza e φ il timbro.\n\n" +
      "L'evoluzione nel tempo obbedisce all'equazione di Schrödinger, iħ d|ψ⟩/dt = H|ψ⟩, dove " +
      "l'Hamiltoniano H è un operatore hermitiano. Per un qubit H è una combinazione delle matrici " +
      "di Pauli, e il vettore di Bloch compie allora una PRECESSIONE uniforme attorno all'asse del " +
      "campo, con frequenza proporzionale all'intensità di H (precessione di Larmor, oscillazioni " +
      "di Rabi). È un moto continuo e reversibile: qui è la melodia che scorre, e la sua velocità è " +
      "la frequenza di precessione. Due manopole fissano il campo: Ω (accoppiamento di Rabi, asse x) " +
      "e Δ (detuning, asse z).\n\n" +
      "La MISURA è l'unico processo non unitario. Scelta una base ortonormale {|e₀⟩, |e₁⟩} (Z con " +
      "{|0⟩, |1⟩}, X con {|+⟩, |−⟩}, Y con {|+i⟩, |−i⟩}), lo stato collassa su |eₖ⟩ con probabilità " +
      "pₖ = |⟨eₖ|ψ⟩|² (REGOLA DI BORN), e dopo la misura lo stato è proprio |eₖ⟩. L'indeterminazione " +
      "è intrinseca, non ignoranza classica. Le tre basi X, Y, Z danno i sei autostati cardinali " +
      "della sfera; a ciascun esito associamo una nota. Per rendere il collasso musicalmente " +
      "sensato seguiamo Coecke: la misura non è un dado neutro ma la scelta di una qualità (il " +
      "colore, cioè la base), e l'esito viene mappato su un grado d'accordo, così i collassi " +
      "arpeggiano un'armonia coerente invece di saltare a caso.\n\n" +
      "La notazione a colori Z-verde / X-rosso e la centralità della misura provengono dal Quantum " +
      "Picturalism (ZX-calculus) e dalla musica quantistica di Coecke (vedi Bibliografia), dove le " +
      "misure complementari sono lette come coppie di qualità musicali (piano/forte, lento/veloce).\n\n" +
      "ZX-CALCULUS, il minimo formale. Un diagramma ZX è fatto di due soli tipi di nodo (gli spider): " +
      "lo spider VERDE (Z) e quello ROSSO (X), ciascuno con una fase α. Un ragno verde con fase 0 e una " +
      "sola gamba è lo stato |0⟩ + |1⟩ (cioè |+⟩); uno rosso con fase 0 è |0⟩: i due colori sono " +
      "semplicemente le due basi COMPLEMENTARI Z e X. Due regole bastano per quasi tutto: (1) FUSIONE, " +
      "due spider adiacenti dello STESSO colore si fondono in uno solo sommando le fasi (α + β); " +
      "(2) COMPLEMENTARITÀ, verde e rosso si scambiano attraversando una porta di Hadamard. Una MISURA " +
      "è uno spider con una gamba che termina (un 'effetto' ⟨esito|), e il suo COLORE è la base scelta: " +
      "verde = Z, rosso = X. È esattamente da qui che nascono il verde-Z / rosso-X e la centralità della " +
      "misura in tutta la stazione. Nota onesta: qui lo ZX è usato come linguaggio e codice-colore; il " +
      "calcolo sotto il cofano gira con ampiezze e matrici densità, non riscrivendo diagrammi.",
    math_en:
      "A qubit's state is a unit vector in the Hilbert space ℂ²: |ψ⟩ = α|0⟩ + β|1⟩ with α, β ∈ ℂ " +
      "and |α|² + |β|² = 1. Up to a physically irrelevant global phase it is written " +
      "|ψ⟩ = cos(θ/2)|0⟩ + e^{iφ} sin(θ/2)|1⟩, with θ ∈ [0,π] and φ ∈ [0,2π): the two angles pick a " +
      "point on the BLOCH SPHERE. The north pole is |0⟩, the south pole |1⟩, the equator holds the " +
      "balanced superpositions. In sound θ governs pitch and φ the timbre.\n\n" +
      "Time evolution obeys the Schrödinger equation, iħ d|ψ⟩/dt = H|ψ⟩, where the Hamiltonian H is " +
      "a Hermitian operator. For a qubit H is a combination of the Pauli matrices, and the Bloch " +
      "vector then undergoes uniform PRECESSION about the field axis, at a frequency proportional to " +
      "the strength of H (Larmor precession, Rabi oscillations). It is continuous, reversible " +
      "motion: here it is the flowing melody, and its speed is the precession frequency. Two knobs " +
      "set the field: Ω (Rabi coupling, x-axis) and Δ (detuning, z-axis).\n\n" +
      "MEASUREMENT is the only non-unitary process. Given an orthonormal basis {|e₀⟩, |e₁⟩} (Z with " +
      "{|0⟩, |1⟩}, X with {|+⟩, |−⟩}, Y with {|+i⟩, |−i⟩}), the state collapses onto |eₖ⟩ with " +
      "probability pₖ = |⟨eₖ|ψ⟩|² (BORN RULE), and afterwards the state is exactly |eₖ⟩. The " +
      "indeterminacy is intrinsic, not classical ignorance. The three bases X, Y, Z give the six " +
      "cardinal eigenstates of the sphere; to each outcome we attach a note. To make the collapse " +
      "musically meaningful we follow Coecke: measurement is not a neutral die but the choice of a " +
      "quality (the colour, i.e. the basis), and the outcome is mapped to a chord degree, so the " +
      "collapses arpeggiate a coherent harmony instead of jumping at random.\n\n" +
      "The Z-green / X-red colour notation and the centrality of measurement come from Quantum " +
      "Picturalism (the ZX-calculus) and Coecke's quantum music (see the Bibliography), where " +
      "complementary measurements are read as pairs of musical qualities (soft/loud, slow/fast).\n\n" +
      "ZX-CALCULUS, the formal minimum. A ZX diagram is built from just two kinds of node (spiders): " +
      "the GREEN (Z) spider and the RED (X) spider, each carrying a phase α. A green spider with phase 0 " +
      "and a single leg is the state |0⟩ + |1⟩ (that is |+⟩); a red one with phase 0 is |0⟩: the two " +
      "colours are simply the two COMPLEMENTARY bases Z and X. Two rules do almost everything: " +
      "(1) FUSION, two adjacent SAME-colour spiders merge into one, adding their phases (α + β); " +
      "(2) COMPLEMENTARITY, green and red swap through a Hadamard gate. A MEASUREMENT is a spider whose " +
      "leg ends (an 'effect' ⟨outcome|), and its COLOUR is the chosen basis: green = Z, red = X. This is " +
      "exactly where the green-Z / red-X coding and the centrality of measurement across the station come " +
      "from. Honest note: here ZX is used as a language and colour code; the computation under the hood " +
      "runs on amplitudes and density matrices, not by rewriting diagrams.",
    sims: [
      { id:"synth", title:"Single Qubit Synth", title_en:"Single Qubit Synth", file:"sim/synth.html",
        desc:"La sfera che precede: melodia continua, synth regolabile, misura Z/X/Y con collasso armonico",
        desc_en:"The precessing sphere: continuous melody, adjustable synth, Z/X/Y measurement with harmonic collapse",
        status:"online", year:2026 }
    ]
  },

  {
    id: "band",
    group: "band",
    title: "Quantum Band",
    viz: "band",
    subtitle: "Un registro a più qubit, dall'indipendenza all'entanglement",
    subtitle_en: "A multi-qubit register, from independence to entanglement",
    category: "QUANTUM SONIFICATION",
    status: "online",
    qtags: ["x:Entanglement","Correlazione non-locale","hz:Coppia di Bell"],
    qtags_en: ["x:Entanglement","Non-local correlation","hz:Bell pair"],
    principle:
      "Più qubit vivono nel prodotto tensoriale (ℂ²)^{⊗n}. Uno stato è <b>entangled</b> quando " +
      "non è fattorizzabile in stati dei singoli qubit: allora il singolo qubit non ha uno stato " +
      "puro proprio (lo stato ridotto è misto) e misurarne uno <b>condiziona</b> istantaneamente " +
      "gli altri. Qui l'entanglement si ascolta come voci che si velano e si rispondono.",
    principle_en:
      "Several qubits live in the tensor product (ℂ²)^{⊗n}. A state is <b>entangled</b> when it " +
      "does not factor into single-qubit states: then a single qubit has no pure state of its own " +
      "(its reduced state is mixed) and measuring one <b>conditions</b> the others instantly. Here " +
      "entanglement is heard as voices that veil and answer one another.",
    abstract:
      "Quattro qubit formano un registro quantistico: una sola funzione d'onda in uno spazio a 16 " +
      "dimensioni. Ogni qubit muove una voce (basso, synth, lead, tromba). Una manopola di " +
      "accoppiamento li porta da indipendenti (voci limpide) a entangled (voci velate e correlate); " +
      "misurarne uno fa collassare l'intera band.",
    abstract_en:
      "Four qubits form a quantum register: a single wavefunction in a 16-dimensional space. Each " +
      "qubit drives a voice (bass, synth, lead, trumpet). A coupling knob takes them from " +
      "independent (clear voices) to entangled (veiled, correlated voices); measuring one collapses " +
      "the whole band.",
    math:
      "n qubit vivono nello spazio prodotto tensoriale (ℂ²)^{⊗n}, di dimensione 2ⁿ. Uno stato " +
      "generale è una sovrapposizione |ψ⟩ = Σ_b c_b |b⟩ sui 2ⁿ stati di base |b⟩ (le stringhe di " +
      "bit), con Σ|c_b|² = 1. Con n = 4 sono 16 ampiezze complesse. Ogni qubit pilota una voce: " +
      "basso, synth, lead, tromba.\n\n" +
      "Lo stato di un singolo qubit dentro il registro è dato dalla MATRICE DENSITÀ RIDOTTA ρᵢ, " +
      "ottenuta per traccia parziale sugli altri qubit. Se lo stato è un PRODOTTO " +
      "|ψ⟩ = |ψ₁⟩ ⊗ … ⊗ |ψₙ⟩, ogni ρᵢ è puro e il suo vettore di Bloch ha lunghezza |r| = 1: la " +
      "voce è limpida. Se lo stato è ENTANGLED, ρᵢ è misto, il vettore si accorcia (|r| < 1) e la " +
      "voce si vela: timbro sfocato, alone di rumore. La lunghezza |r| è così una misura udibile " +
      "dell'entanglement del singolo qubit.\n\n" +
      "L'entanglement nasce dall'evoluzione. Oltre ai campi locali su ciascun qubit, aggiungiamo un " +
      "termine di interazione di ISING, H_int = J Σ Zᵢ Zⱼ (l'accoppiamento fra momenti, come nei " +
      "magneti). A J = 0 i qubit evolvono indipendenti e lo stato resta fattorizzato; per J > 0 lo " +
      "stato si intreccia nel tempo. La manopola J regola quindi quanta correlazione e quanta " +
      "velatura si sente. L'integrazione è continua (Schrödinger, per passi di Trotter).\n\n" +
      "La MISURA proietta l'INTERO stato congiunto (regola di Born applicata alle marginali) e lo " +
      "rinormalizza. Se i qubit sono entangled, l'esito su uno vincola gli altri: le voci collassano " +
      "con esiti CORRELATI e la band cade insieme su un accordo. È la performance della 'coppia di " +
      "Bell sotto misura' (vedi Bibliografia) estesa a quattro voci, nel linguaggio del Quantum " +
      "Picturalism (ZX-calculus). Puoi passare da 2 a 4 qubit per band più o meno fitte.",
    math_en:
      "n qubits live in the tensor-product space (ℂ²)^{⊗n}, of dimension 2ⁿ. A general state is a " +
      "superposition |ψ⟩ = Σ_b c_b |b⟩ over the 2ⁿ basis states |b⟩ (the bit strings), with " +
      "Σ|c_b|² = 1. With n = 4 that is 16 complex amplitudes. Each qubit drives a voice: bass, " +
      "synth, lead, trumpet.\n\n" +
      "The state of a single qubit inside the register is given by the REDUCED DENSITY MATRIX ρᵢ, " +
      "obtained by partial trace over the other qubits. If the state is a PRODUCT " +
      "|ψ⟩ = |ψ₁⟩ ⊗ … ⊗ |ψₙ⟩, each ρᵢ is pure and its Bloch vector has length |r| = 1: the voice is " +
      "clear. If the state is ENTANGLED, ρᵢ is mixed, the vector shrinks (|r| < 1) and the voice " +
      "veils: blurred timbre, a halo of noise. The length |r| is thus an audible measure of the " +
      "single qubit's entanglement.\n\n" +
      "Entanglement is generated by the evolution. Besides the local fields on each qubit, we add an " +
      "ISING interaction term, H_int = J Σ Zᵢ Zⱼ (coupling between moments, as in magnets). At " +
      "J = 0 the qubits evolve independently and the state stays factorised; for J > 0 the state " +
      "weaves together over time. The knob J thus controls how much correlation and how much " +
      "veiling you hear. The integration is continuous (Schrödinger, via Trotter steps).\n\n" +
      "MEASUREMENT projects the WHOLE joint state (Born rule on the marginals) and renormalises it. " +
      "If the qubits are entangled, the outcome on one constrains the others: the voices collapse " +
      "with CORRELATED outcomes and the band falls together onto a chord. It is the 'Bell pair " +
      "under measurement' performance (see the Bibliography) extended to four voices, in the " +
      "language of Quantum Picturalism (the ZX-calculus). You can switch from 2 to 4 qubits for " +
      "denser or sparser bands.",
    sims: [
      { id:"band", title:"Quantum Band", title_en:"Quantum Band", file:"sim/band.html",
        desc:"Fino a 4 qubit: una voce per qubit, accoppiamento, mute/solo, misura che collassa la band",
        desc_en:"Up to 4 qubits: one voice per qubit, coupling, mute/solo, measurement collapsing the band",
        status:"online", year:2026 }
    ]
  },

  {
    id: "jc",
    title: "Jaynes–Cummings",
    viz: "jc",
    subtitle: "Un atomo e un fotone in cavità: oscillazioni di Rabi che collassano e rinascono",
    subtitle_en: "One atom and a photon in a cavity: Rabi oscillations that collapse and revive",
    category: "QUANTUM SONIFICATION",
    status: "online",
    qtags: ["Oscillazioni di Rabi del vuoto","psi:Collasso e rinascita","hz:Stato coerente"],
    qtags_en: ["Vacuum Rabi oscillations","psi:Collapse and revival","hz:Coherent state"],
    principle:
      "Un atomo a due livelli scambia un singolo quanto con un modo di campo in cavità. Se il campo " +
      "è uno <b>stato coerente</b>, i diversi numeri di fotoni oscillano a frequenze " +
      "Ω_n = 2g√(n+1) leggermente diverse: si <b>sfasano</b> (collasso) e più tardi si " +
      "<b>riallineano</b> (rinascita). È un ritmo che svanisce e ritorna, impossibile in fisica classica.",
    principle_en:
      "A two-level atom trades a single quantum with a cavity field mode. If the field is a " +
      "<b>coherent state</b>, its photon numbers oscillate at slightly different frequencies " +
      "Ω_n = 2g√(n+1): they <b>dephase</b> (collapse) and later <b>rephase</b> (revival). A rhythm " +
      "that fades and returns, impossible classically.",
    abstract:
      "Il modello di Jaynes–Cummings descrive l'interazione più semplice fra materia e luce " +
      "quantizzata: un atomo a due livelli e un solo modo del campo. L'atomo, inizialmente eccitato, " +
      "emette e riassorbe un fotone (oscillazioni di Rabi del vuoto). Con un campo coerente le " +
      "oscillazioni collassano e poi rinascono: qui l'atomo e la cavità sono due voci che si " +
      "rispondono, e l'inviluppo di collasso-rinascita è la struttura del brano.",
    abstract_en:
      "The Jaynes–Cummings model describes the simplest matter–light interaction: a two-level atom " +
      "and a single field mode. The initially excited atom emits and reabsorbs a photon (vacuum Rabi " +
      "oscillations). With a coherent field these collapse and then revive: here the atom and the " +
      "cavity are two voices answering one another, and the collapse-revival envelope is the form of " +
      "the piece.",
    math:
      "L'Hamiltoniano (in risonanza) è H = ħg(σ₊ a + σ₋ a†): l'atomo sale di livello assorbendo un " +
      "fotone e viceversa. H è a blocchi 2×2 nel numero di eccitazioni: gli stati |e,n⟩ e |g,n+1⟩ si " +
      "mescolano alla frequenza di Rabi Ω_n = 2g√(n+1). Con l'atomo eccitato e il campo in uno stato " +
      "coerente |α⟩ (distribuzione di Poisson P_n = e^{-n̄} n̄ⁿ/n!, con n̄ = |α|²), l'inversione " +
      "atomica è W(t) = Σ_n P_n cos(Ω_n t). Poiché le Ω_n crescono come √(n+1), le componenti si " +
      "sfasano e W(t) COLLASSA verso zero; molto più tardi tornano quasi in fase e la RINASCITA " +
      "riporta le oscillazioni. Con detuning Δ si usa Ω_n = √(Δ² + 4g²(n+1)). Nel suono la voce " +
      "dell'atomo segue la popolazione eccitata (1+W)/2 e la voce della cavità il numero di fotoni " +
      "⟨n⟩ = n̄ + 1 − (1+W)/2: quando una sale l'altra scende, come un vero scambio di energia.",
    math_en:
      "The (resonant) Hamiltonian is H = ħg(σ₊ a + σ₋ a†): the atom climbs a level by absorbing a " +
      "photon and vice versa. H is block-diagonal 2×2 in the excitation number: |e,n⟩ and |g,n+1⟩ " +
      "mix at the Rabi frequency Ω_n = 2g√(n+1). With the atom excited and the field in a coherent " +
      "state |α⟩ (Poisson distribution P_n = e^{-n̄} n̄ⁿ/n!, n̄ = |α|²), the atomic inversion is " +
      "W(t) = Σ_n P_n cos(Ω_n t). Because the Ω_n grow like √(n+1) the components dephase and W(t) " +
      "COLLAPSES toward zero; much later they nearly rephase and the REVIVAL brings the oscillations " +
      "back. With detuning Δ one uses Ω_n = √(Δ² + 4g²(n+1)). In sound the atom voice follows the " +
      "excited population (1+W)/2 and the cavity voice the photon number ⟨n⟩ = n̄ + 1 − (1+W)/2: as " +
      "one rises the other falls, a genuine exchange of energy.",
    sims: [
      { id:"jc", title:"Jaynes–Cummings", title_en:"Jaynes–Cummings", file:"sim/jc.html",
        desc:"Atomo + cavità: n̄, accoppiamento g, detuning; l'inversione W(t) collassa e rinasce",
        desc_en:"Atom + cavity: n̄, coupling g, detuning; the inversion W(t) collapses and revives",
        status:"online", year:2026 }
    ]
  },

  {
    id: "qho",
    title: "Oscillatore Armonico",
    title_en: "Harmonic Oscillator",
    viz: "qho",
    subtitle: "Stati di Fock e coerenti: n quanti = n-esima armonica, un autostato è muto",
    subtitle_en: "Fock and coherent states: n quanta = n-th harmonic, a single eigenstate is silent",
    category: "QUANTUM SONIFICATION",
    status: "online",
    qtags: ["Stati di Fock","psi:Stato coerente","hz:Livelli equispaziati"],
    qtags_en: ["Fock states","psi:Coherent state","hz:Equally spaced levels"],
    principle:
      "L'oscillatore armonico ha livelli di energia equispaziati Eₙ = ħω(n + ½). Un singolo " +
      "autostato |n⟩ è <b>stazionario</b>: la sua densità non cambia nel tempo, quindi è <b>muto</b>. " +
      "Solo una <b>sovrapposizione</b> di energie diverse batte, e batte esattamente a multipli " +
      "interi di ω: i quanti diventano armoniche.",
    principle_en:
      "The harmonic oscillator has equally spaced energy levels Eₙ = ħω(n + ½). A single eigenstate " +
      "|n⟩ is <b>stationary</b>: its density does not change in time, so it is <b>silent</b>. Only a " +
      "<b>superposition</b> of different energies beats, and it beats at exact integer multiples of " +
      "ω: the quanta become harmonics.",
    abstract:
      "L'oscillatore armonico quantistico è il mattone di tutta la fisica delle vibrazioni. I suoi " +
      "livelli sono equispaziati, così le differenze di energia sono multipli di un'unica frequenza " +
      "ω. Qui costruisci uno stato come sovrapposizione dei primi stati di Fock (oppure uno stato " +
      "coerente, che oscilla come un pendolo classico) e lo ascolti: il timbro è lo spettro dei " +
      "battimenti quantistici, e un singolo autostato non suona affatto.",
    abstract_en:
      "The quantum harmonic oscillator is the building block of all vibrational physics. Its levels " +
      "are equally spaced, so energy differences are multiples of a single frequency ω. Here you " +
      "build a state as a superposition of the lowest Fock states (or a coherent state, which " +
      "oscillates like a classical pendulum) and listen: the timbre is the spectrum of quantum " +
      "beats, and a single eigenstate makes no sound at all.",
    math:
      "L'Hamiltoniano è H = ħω(a†a + ½), con autostati |n⟩ di energia Eₙ = ħω(n + ½). Uno stato " +
      "generico |ψ⟩ = Σ_n c_n |n⟩ evolve come c_n(t) = c_n e^{-i(n+½)ωt}. La densità |ψ(x,t)|² " +
      "contiene termini incrociati che oscillano alle frequenze di Bohr (E_n − E_m)/ħ = (n−m)ω: TUTTE " +
      "multipli interi di ω. Da qui la sonificazione: l'armonica k ha ampiezza 2 Σ_n |c_n||c_{n+k}|, " +
      "cioè lo stato quantistico DETTA lo spettro. Un autostato |n⟩ ha un solo termine e nessuna " +
      "oscillazione: densità statica, silenzio. Uno STATO COERENTE |α⟩ (c_n di Poisson) ha " +
      "⟨x⟩(t) = √2 |α| cos(ωt): un pacchetto gaussiano che oscilla nella parabola come una massa su " +
      "una molla, il limite classico. Gli stati di Fock mostrano n nodi; la loro sovrapposizione fa " +
      "sciabordare e respirare la densità.",
    math_en:
      "The Hamiltonian is H = ħω(a†a + ½), with eigenstates |n⟩ of energy Eₙ = ħω(n + ½). A general " +
      "state |ψ⟩ = Σ_n c_n |n⟩ evolves as c_n(t) = c_n e^{-i(n+½)ωt}. The density |ψ(x,t)|² contains " +
      "cross terms oscillating at the Bohr frequencies (E_n − E_m)/ħ = (n−m)ω: ALL integer multiples " +
      "of ω. Hence the sonification: harmonic k has amplitude 2 Σ_n |c_n||c_{n+k}|, so the quantum " +
      "state DICTATES the spectrum. An eigenstate |n⟩ has a single term and no oscillation: static " +
      "density, silence. A COHERENT STATE |α⟩ (Poisson c_n) has ⟨x⟩(t) = √2 |α| cos(ωt): a Gaussian " +
      "packet swinging in the parabola like a mass on a spring, the classical limit. Fock states show " +
      "n nodes; their superposition makes the density slosh and breathe.",
    sims: [
      { id:"qho", title:"Oscillatore Armonico", title_en:"Harmonic Oscillator", file:"sim/qho.html",
        desc:"Sovrapposizione di stati di Fock o coerenti: l'onda sciaborda nella parabola, il timbro è lo spettro dei battimenti",
        desc_en:"Superposition of Fock or coherent states: the wave sloshes in the parabola, the timbre is the beat spectrum",
        status:"online", year:2026 }
    ]
  },

  {
    id: "dicke",
    group: "band",
    title: "Dicke · Superradianza",
    title_en: "Dicke · Superradiance",
    viz: "dicke",
    subtitle: "N atomi in una cavità che emettono insieme: un lampo collettivo di intensità ∝ N²",
    subtitle_en: "N atoms in one cavity emitting together: a collective flash of intensity ∝ N²",
    category: "QUANTUM SONIFICATION",
    status: "online",
    qtags: ["Superradianza","psi:Stato di Dicke","hz:Intensità ∝ N²"],
    qtags_en: ["Superradiance","psi:Dicke state","hz:Intensity ∝ N²"],
    principle:
      "N atomi eccitati che condividono la stessa cavità non emettono a caso ciascuno per conto " +
      "suo: si <b>sincronizzano</b> e irradiano <b>insieme</b>. Il risultato è un lampo ritardato e " +
      "molto più intenso (∝ N²) della somma delle singole emissioni. È cooperazione quantistica pura.",
    principle_en:
      "N excited atoms sharing one cavity do not emit independently and at random: they " +
      "<b>synchronise</b> and radiate <b>together</b>. The result is a delayed flash far more intense " +
      "(∝ N²) than the sum of the single emissions. Pure quantum cooperation.",
    abstract:
      "La superradianza di Dicke è l'esempio più netto di emissione cooperativa. Un insieme di N " +
      "atomi a due livelli, tutti eccitati e accoppiati allo stesso campo, si comporta come un unico " +
      "grande dipolo: dopo un ritardo scarica tutta l'energia in un lampo brevissimo e intenso. Qui " +
      "la carica dell'ensemble è un tappeto che sale e il lampo è un colpo d'accordo; più atomi, più " +
      "il lampo è netto e potente.",
    abstract_en:
      "Dicke superradiance is the sharpest example of cooperative emission. A set of N two-level " +
      "atoms, all excited and coupled to the same field, behaves as a single large dipole: after a " +
      "delay it dumps all its energy in a very short, intense flash. Here the ensemble's charge is a " +
      "rising pad and the flash is a chord stab; more atoms, sharper and more powerful the flash.",
    math:
      "Gli N atomi a due livelli formano uno spin collettivo J = N/2, con stati di DICKE |J,M⟩. " +
      "Partendo da tutti eccitati (M = +J) e accoppiati simmetricamente a un campo comune, l'emissione " +
      "non è la somma di N processi indipendenti: l'elemento di matrice di discesa vale " +
      "√((J+M)(J−M+1)) ed è massimo a METÀ diseccitazione (M ≈ 0), dove l'intensità cresce come N². " +
      "In descrizione semiclassica l'inversione collettiva segue W(t) = −tanh((t − t_D)/(2 τ_R)), con " +
      "tempo caratteristico τ_R = 1/(N g) e RITARDO t_D = τ_R ln N; l'intensità irradiata è " +
      "I(t) = (1/4τ_R) sech²((t − t_D)/(2 τ_R)), un impulso stretto il cui picco scala con N². Nel " +
      "suono la frazione eccitata (1 + W)/2 apre un pad che si fa brillante mentre l'ensemble si " +
      "carica, e al passaggio per t_D scatta il lampo (accordo + splash), tanto più forte quanto è " +
      "grande N. La ricarica automatica ripete il ciclo: un impulso collettivo periodico.",
    math_en:
      "The N two-level atoms form a collective spin J = N/2, with DICKE states |J,M⟩. Starting from " +
      "all excited (M = +J) and coupled symmetrically to a common field, the emission is not the sum " +
      "of N independent processes: the lowering matrix element is √((J+M)(J−M+1)) and is largest at " +
      "HALF de-excitation (M ≈ 0), where the intensity grows as N². Semiclassically the collective " +
      "inversion follows W(t) = −tanh((t − t_D)/(2 τ_R)), with characteristic time τ_R = 1/(N g) and " +
      "DELAY t_D = τ_R ln N; the radiated intensity is I(t) = (1/4τ_R) sech²((t − t_D)/(2 τ_R)), a " +
      "narrow pulse whose peak scales as N². In sound the excited fraction (1 + W)/2 opens a pad that " +
      "brightens as the ensemble charges, and at t_D the flash fires (chord + splash), louder the " +
      "larger N. Auto re-pump repeats the cycle: a periodic collective pulse.",
    sims: [
      { id:"dicke", title:"Dicke · Superradianza", title_en:"Dicke · Superradiance", file:"sim/dicke.html",
        desc:"N atomi in una cavità: carica collettiva e lampo superradiante ∝ N², ciclo ripetuto",
        desc_en:"N atoms in one cavity: collective charge and superradiant flash ∝ N², repeating cycle",
        status:"online", year:2026 }
    ]
  },

  {
    id: "phonons",
    group: "band",
    title: "Fononi",
    title_en: "Phonons",
    viz: "phonons",
    subtitle: "Una catena di oscillatori accoppiati: modi normali, e il timbro segue la dispersione",
    subtitle_en: "A chain of coupled oscillators: normal modes, and the timbre follows the dispersion",
    category: "QUANTUM SONIFICATION",
    status: "online",
    qtags: ["Modi normali","psi:Fononi","hz:Relazione di dispersione"],
    qtags_en: ["Normal modes","psi:Phonons","hz:Dispersion relation"],
    principle:
      "Tanti oscillatori quantistici <b>accoppiati</b> non hanno più frequenze indipendenti: le loro " +
      "vibrazioni si riorganizzano in <b>modi normali</b> collettivi (i fononi), ciascuno con la sua " +
      "frequenza. Pizzichi un punto e l'eccitazione si scompone in questi modi e viaggia lungo la catena.",
    principle_en:
      "Many <b>coupled</b> quantum oscillators no longer have independent frequencies: their " +
      "vibrations reorganise into collective <b>normal modes</b> (phonons), each with its own " +
      "frequency. Pluck one point and the excitation splits into these modes and travels along the chain.",
    abstract:
      "Una catena di masse legate da molle è il modello di ogni solido vibrante. Accoppiando N " +
      "oscillatori, i movimenti si combinano in modi normali collettivi: i fononi. Ogni modo è a sua " +
      "volta un oscillatore armonico quantistico. Qui pizzichi un sito, l'eccitazione si distribuisce " +
      "fra i modi secondo la loro forma, e l'accordo che senti è la relazione di dispersione della catena.",
    abstract_en:
      "A chain of masses tied by springs is the model of every vibrating solid. Coupling N " +
      "oscillators, the motions combine into collective normal modes: phonons. Each mode is itself a " +
      "quantum harmonic oscillator. Here you pluck a site, the excitation spreads across the modes " +
      "according to their shape, and the chord you hear is the chain's dispersion relation.",
    math:
      "N oscillatori identici accoppiati ai primi vicini (estremi fissi) hanno modi normali " +
      "u_j^{(k)} = sin(j k π/(N+1)), j,k = 1…N, con frequenze DI DISPERSIONE " +
      "ω_k = 2 ω_0 sin(k π/2(N+1)). Ogni modo è un oscillatore armonico quantistico indipendente di " +
      "frequenza ω_k; il campo di spostamento è una sovrapposizione u_j(t) = Σ_k A_k sin(j k π/(N+1)) " +
      "cos(ω_k t). Poiché per l'oscillatore armonico gli stati coerenti seguono ESATTAMENTE la " +
      "traiettoria classica, la catena che vedi oscillare è la media quantistica ⟨u_j⟩(t). Un pizzico " +
      "localizzato è una gaussiana di spostamento: la proiettiamo sui modi (A_k), e sonifichiamo un " +
      "oscillatore per modo, con altezza data dalla dispersione ω_k. Il timbro È lo spettro dei modi: " +
      "cambiando N, la rigidità ω_0 o il punto pizzicato cambi l'accordo. Il propagarsi e riflettersi " +
      "dell'onda lungo la catena è l'interferenza dei fononi.",
    math_en:
      "N identical oscillators coupled to nearest neighbours (fixed ends) have normal modes " +
      "u_j^{(k)} = sin(j k π/(N+1)), j,k = 1…N, with DISPERSION frequencies " +
      "ω_k = 2 ω_0 sin(k π/2(N+1)). Each mode is an independent quantum harmonic oscillator of " +
      "frequency ω_k; the displacement field is a superposition u_j(t) = Σ_k A_k sin(j k π/(N+1)) " +
      "cos(ω_k t). Since for the harmonic oscillator coherent states follow the classical trajectory " +
      "EXACTLY, the chain you see oscillating is the quantum mean ⟨u_j⟩(t). A localised pluck is a " +
      "Gaussian displacement: we project it onto the modes (A_k) and sonify one oscillator per mode, " +
      "its pitch given by the dispersion ω_k. The timbre IS the mode spectrum: changing N, the " +
      "stiffness ω_0 or the plucked point changes the chord. The wave travelling and reflecting along " +
      "the chain is the interference of the phonons.",
    sims: [
      { id:"phonons", title:"Fononi", title_en:"Phonons", file:"sim/phonons.html",
        desc:"Catena di N oscillatori accoppiati: pizzica un sito, ascolta i modi normali, il timbro è la dispersione",
        desc_en:"Chain of N coupled oscillators: pluck a site, hear the normal modes, the timbre is the dispersion",
        status:"online", year:2026 }
    ]
  }
];

/* ---- Bibliografia: i lavori a cui ci siamo ispirati -------- */
window.BIBLIO = [
  { authors:"B. Coecke",
    title:"A Quantum Guitar",
    where:"arXiv:2509.04526", year:2025,
    url:"https://arxiv.org/abs/2509.04526" },
  { authors:"R.-B. Abdyssagin, B. Coecke",
    title:"Quantum Concept Music Score from Quantum Picturalism: Musical Incarnation of a Bell-Pair under Measurements",
    where:"arXiv:2510.05391", year:2025,
    url:"https://arxiv.org/abs/2510.05391" },
  { authors:"B. Coecke, A. Kissinger",
    title:"Picturing Quantum Processes. A First Course in Quantum Theory and Diagrammatic Reasoning",
    where:"Cambridge University Press", year:2017,
    url:"https://www.cambridge.org/9781107104228" }
];
