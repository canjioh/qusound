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
      "misure complementari sono lette come coppie di qualità musicali (piano/forte, lento/veloce).",
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
      "complementary measurements are read as pairs of musical qualities (soft/loud, slow/fast).",
    sims: [
      { id:"synth", title:"Single Qubit Synth", title_en:"Single Qubit Synth", file:"sim/synth.html",
        desc:"La sfera che precede: melodia continua, synth regolabile, misura Z/X/Y con collasso armonico",
        desc_en:"The precessing sphere: continuous melody, adjustable synth, Z/X/Y measurement with harmonic collapse",
        status:"online", year:2026 }
    ]
  },

  {
    id: "band",
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
