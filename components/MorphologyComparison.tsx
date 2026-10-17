import React, { useState } from 'react';

export const MorphologyComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'coxae' | 'antennae' | 'legs' | 'wings'>('coxae');

  return (
    <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-700/60 p-6 md:p-8 shadow-2xl">
      {/* Title & Introduction */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/30 mb-2">
          <span className="w-2 h-2 rounded-full bg-sky-400"></span>
          Claves Dicotómicas y Morfología Comparada
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">
          Diagramas Comparativos de Morfología
        </h2>
        <p className="text-sm text-gray-400 mt-1 max-w-3xl">
          La separación evolutiva de los 4 subórdenes de Coleoptera se basa en adaptaciones anatómicas precisas:
          la articulación coxal con el primer esternito, la forma de las antenas, la venación alar y las patas.
        </p>
      </div>

      {/* Selector Tabs */}
      <div className="flex flex-wrap gap-2 pb-6 border-b border-gray-700/80">
        <button
          onClick={() => setActiveTab('coxae')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'coxae'
              ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-gray-950 shadow-lg font-bold'
              : 'bg-gray-900/60 text-gray-400 hover:text-white border border-gray-700/60'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          1. Coxas y Esternito (Carácter Clave)
        </button>

        <button
          onClick={() => setActiveTab('antennae')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'antennae'
              ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-gray-950 shadow-lg font-bold'
              : 'bg-gray-900/60 text-gray-400 hover:text-white border border-gray-700/60'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          2. Tipos de Antenas
        </button>

        <button
          onClick={() => setActiveTab('legs')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'legs'
              ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-gray-950 shadow-lg font-bold'
              : 'bg-gray-900/60 text-gray-400 hover:text-white border border-gray-700/60'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
          </svg>
          3. Adaptaciones de las Patas
        </button>

        <button
          onClick={() => setActiveTab('wings')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'wings'
              ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-gray-950 shadow-lg font-bold'
              : 'bg-gray-900/60 text-gray-400 hover:text-white border border-gray-700/60'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          4. Élitros y Plegado Alar
        </button>
      </div>

      {/* Content Area */}
      <div className="mt-8">
        {/* TAB 1: COXAE & STERNITE */}
        {activeTab === 'coxae' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Diagram 1A: Adephaga */}
            <div className="bg-gray-900/80 rounded-2xl p-6 border border-teal-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-teal-500/10 text-teal-300 font-bold border border-teal-500/30">
                    ADEPHAGA
                  </span>
                  <span className="text-xs text-teal-400 font-mono">1er Esternito DIVIDIDO</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Coxas posteriores fusionadas</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Las metacoxas son grandes y están fijas a la pared del metatórax. Se proyectan hacia atrás e <strong className="text-teal-300">interrumpen por completo</strong> el primer esternito abdominal visible, separándolo en dos lóbulos laterales.
                </p>

                {/* SVG Visual */}
                <div className="w-full h-52 bg-gray-950 rounded-xl p-3 flex items-center justify-center border border-gray-800">
                  <svg viewBox="0 0 240 160" className="w-full h-full max-h-48" xmlns="http://www.w3.org/2000/svg">
                    {/* Metasternum */}
                    <path d="M40 20 L200 20 L190 60 L50 60 Z" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                    <text x="120" y="42" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">METATÓRAX</text>

                    {/* Metacoxae (FUSED & OVERLAPPING) */}
                    <path d="M52 61 L110 61 L118 105 L60 105 Z" fill="#0d9488" stroke="#14b8a6" strokeWidth="2" />
                    <path d="M188 61 L130 61 L122 105 L180 105 Z" fill="#0d9488" stroke="#14b8a6" strokeWidth="2" />
                    <text x="85" y="86" textAnchor="middle" fill="#f0fdfa" fontSize="8" fontWeight="bold">Coxa Izq.</text>
                    <text x="155" y="86" textAnchor="middle" fill="#f0fdfa" fontSize="8" fontWeight="bold">Coxa Der.</text>

                    {/* Sternite 1 (Divided into left & right pieces, NOT passing through middle) */}
                    <path d="M38 106 L59 106 L51 125 L35 125 Z" fill="#e11d48" stroke="#f43f5e" strokeWidth="1.5" />
                    <path d="M202 106 L181 106 L189 125 L205 125 Z" fill="#e11d48" stroke="#f43f5e" strokeWidth="1.5" />
                    {/* Middle GAP indicator */}
                    <path d="M120 70 L120 125" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="120" cy="115" r="4" fill="#e11d48" />
                    <text x="120" y="140" textAnchor="middle" fill="#f43f5e" fontSize="8" fontWeight="bold">¡INTERRUPCIÓN CENTRAL!</text>

                    {/* Sternite 2 (continuous) */}
                    <path d="M34 126 L206 126 L195 145 L45 145 Z" fill="#334155" stroke="#475569" strokeWidth="1.5" />
                    <text x="120" y="137" textAnchor="middle" fill="#cbd5e1" fontSize="8">Esternito 2 (Continuo)</text>
                  </svg>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-800 text-xs text-gray-400">
                <span className="text-teal-400 font-semibold">Ventaja biológica:</span> Rigidez máxima para la inserción muscular de patas corredoras o natatorias de alta potencia.
              </div>
            </div>

            {/* Diagram 1B: Polyphaga */}
            <div className="bg-gray-900/80 rounded-2xl p-6 border border-amber-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 font-bold border border-amber-500/30">
                    POLYPHAGA
                  </span>
                  <span className="text-xs text-amber-400 font-mono">1er Esternito CONTINUO</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Coxas posteriores libres y móviles</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Las metacoxas no están fusionadas a la pared y no se prolongan hacia atrás de forma que dividan el abdomen. El <strong className="text-amber-300">primer esternito abdominal se extiende libremente de lado a lado</strong>.
                </p>

                {/* SVG Visual */}
                <div className="w-full h-52 bg-gray-950 rounded-xl p-3 flex items-center justify-center border border-gray-800">
                  <svg viewBox="0 0 240 160" className="w-full h-full max-h-48" xmlns="http://www.w3.org/2000/svg">
                    {/* Metasternum */}
                    <path d="M40 20 L200 20 L190 60 L50 60 Z" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                    <text x="120" y="42" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">METATÓRAX</text>

                    {/* Metacoxae (SEPARATED, NOT OVERLAPPING STERNITE) */}
                    <ellipse cx="80" cy="75" rx="30" ry="18" fill="#d97706" stroke="#fbbf24" strokeWidth="2" />
                    <ellipse cx="160" cy="75" rx="30" ry="18" fill="#d97706" stroke="#fbbf24" strokeWidth="2" />
                    <text x="80" y="78" textAnchor="middle" fill="#fffbeb" fontSize="8" fontWeight="bold">Coxa Izq.</text>
                    <text x="160" y="78" textAnchor="middle" fill="#fffbeb" fontSize="8" fontWeight="bold">Coxa Der.</text>

                    {/* Sternite 1 (CONTINUOUS BAND FROM LEFT TO RIGHT) */}
                    <path d="M38 100 L202 100 L195 122 L45 122 Z" fill="#10b981" stroke="#34d399" strokeWidth="2" />
                    <text x="120" y="114" textAnchor="middle" fill="#022c22" fontSize="9" fontWeight="bold">1er Esternito Completo (Continuo)</text>

                    {/* Sternite 2 */}
                    <path d="M45 123 L195 123 L188 145 L52 145 Z" fill="#334155" stroke="#475569" strokeWidth="1.5" />
                    <text x="120" y="137" textAnchor="middle" fill="#cbd5e1" fontSize="8">Esternito 2</text>
                  </svg>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-800 text-xs text-gray-400">
                <span className="text-amber-400 font-semibold">Ventaja biológica:</span> Mayor flexibilidad abdominal y versatilidad funcional que posibilitó la colonización del 90% de nichos tróficos.
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ANTENNAE TYPES */}
        {activeTab === 'antennae' && (
          <div className="space-y-6">
            <p className="text-sm text-gray-300">
              Las antenas de los escarabajos reflejan su ecología sensorial. A continuación se ilustran los 5 tipos morfológicos principales:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Type 1: Filiform */}
              <div className="bg-gray-900/80 rounded-xl p-4 border border-teal-500/30 flex flex-col items-center text-center">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 mb-2">
                  Filiforme (En hilo)
                </span>
                <div className="w-full h-36 bg-gray-950 rounded-lg p-2 flex items-center justify-center">
                  <svg viewBox="0 0 100 130" className="w-full h-full">
                    {/* Basal scape and pedicel */}
                    <rect x="46" y="110" width="8" height="12" rx="2" fill="#0d9488" stroke="#14b8a6" />
                    <circle cx="50" cy="103" r="3" fill="#0d9488" stroke="#14b8a6" />
                    {/* Uniform segments tapering slightly */}
                    {[95, 87, 79, 71, 63, 55, 47, 39, 31, 23, 15].map((y, i) => (
                      <ellipse key={`seg-${i}`} cx="50" cy={y} rx="2.5" ry="3.5" fill="#14b8a6" stroke="#2dd4bf" strokeWidth="0.8" />
                    ))}
                    <line x1="50" y1="110" x2="50" y2="12" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="1 3" />
                  </svg>
                </div>
                <h4 className="font-bold text-white text-sm mt-3">Adephaga / Carabidae</h4>
                <p className="text-[11px] text-gray-400 mt-1">
                  Segmentos delgados y cilíndricos de grosor uniforme. Ideal para rápida detección táctil y persecución.
                </p>
              </div>

              {/* Type 2: Lamellate */}
              <div className="bg-gray-900/80 rounded-xl p-4 border border-amber-500/30 flex flex-col items-center text-center">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 mb-2">
                  Lamelada (En láminas)
                </span>
                <div className="w-full h-36 bg-gray-950 rounded-lg p-2 flex items-center justify-center">
                  <svg viewBox="0 0 100 130" className="w-full h-full">
                    {/* Basal long scape */}
                    <rect x="47" y="90" width="6" height="30" rx="2" fill="#b45309" stroke="#f59e0b" />
                    <circle cx="50" cy="85" r="3" fill="#f59e0b" />
                    {/* Intermediate funicle */}
                    <circle cx="50" cy="78" r="2.5" fill="#f59e0b" />
                    <circle cx="50" cy="71" r="2.5" fill="#f59e0b" />
                    {/* Flat moveable fan plates */}
                    <path d="M50 64 C 40 50, 15 52, 10 58 C 15 64, 45 66, 50 64 Z" fill="#f59e0b" stroke="#fbbf24" strokeWidth="1" />
                    <path d="M50 56 C 38 42, 12 44, 8 50 C 12 56, 45 58, 50 56 Z" fill="#f59e0b" stroke="#fbbf24" strokeWidth="1" />
                    <path d="M50 48 C 36 34, 10 36, 6 42 C 10 48, 45 50, 50 48 Z" fill="#f59e0b" stroke="#fbbf24" strokeWidth="1" />
                    <path d="M50 40 C 34 26, 8 28, 5 34 C 8 40, 45 42, 50 40 Z" fill="#f59e0b" stroke="#fbbf24" strokeWidth="1" />
                  </svg>
                </div>
                <h4 className="font-bold text-white text-sm mt-3">Polyphaga / Scarabaeidae</h4>
                <p className="text-[11px] text-gray-400 mt-1">
                  Los artejos terminales forman placas en abanico que se abren para maximizar la recepción de feromonas.
                </p>
              </div>

              {/* Type 3: Clavate */}
              <div className="bg-gray-900/80 rounded-xl p-4 border border-sky-500/30 flex flex-col items-center text-center">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 mb-2">
                  Clavada (Con maza)
                </span>
                <div className="w-full h-36 bg-gray-950 rounded-lg p-2 flex items-center justify-center">
                  <svg viewBox="0 0 100 130" className="w-full h-full">
                    {/* Basal thin stalk */}
                    <line x1="50" y1="120" x2="50" y2="55" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Small beads */}
                    {[110, 95, 80, 68, 56].map((y, i) => (
                      <circle key={`cl-${i}`} cx="50" cy={y} r="2.5" fill="#0284c7" />
                    ))}
                    {/* Enlarged swollen club at apex */}
                    <ellipse cx="50" cy="44" rx="8" ry="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
                    <ellipse cx="50" cy="30" rx="11" ry="7" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
                    <ellipse cx="50" cy="16" rx="9" ry="6" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" />
                  </svg>
                </div>
                <h4 className="font-bold text-white text-sm mt-3">Myxophaga / Coccinellidae</h4>
                <p className="text-[11px] text-gray-400 mt-1">
                  Termina en un engrosamiento bulboso redondeado. Común en escarabajos diminutos y mariquitas.
                </p>
              </div>

              {/* Type 4: Moniliform */}
              <div className="bg-gray-900/80 rounded-xl p-4 border border-purple-500/30 flex flex-col items-center text-center">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 mb-2">
                  Moniliforme (En rosario)
                </span>
                <div className="w-full h-36 bg-gray-950 rounded-lg p-2 flex items-center justify-center">
                  <svg viewBox="0 0 100 130" className="w-full h-full">
                    {/* Bead string */}
                    {[115, 104, 93, 82, 71, 60, 49, 38, 27, 16].map((y, i) => (
                      <g key={`bead-${i}`}>
                        <circle cx="50" cy={y} r="4.5" fill="#8b5cf6" stroke="#c084fc" strokeWidth="1" />
                        <line x1="50" y1={y - 5} x2="50" y2={y + 5} stroke="#4c1d95" strokeWidth="1" />
                      </g>
                    ))}
                  </svg>
                </div>
                <h4 className="font-bold text-white text-sm mt-3">Archostemata / Cupedidae</h4>
                <p className="text-[11px] text-gray-400 mt-1">
                  Formada por una serie de esferas uniformes sucesivas parecidas a las cuentas de un collar o rosario.
                </p>
              </div>

              {/* Type 5: Serrate */}
              <div className="bg-gray-900/80 rounded-xl p-4 border border-rose-500/30 flex flex-col items-center text-center">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 mb-2">
                  Aserrada (En sierra)
                </span>
                <div className="w-full h-36 bg-gray-950 rounded-lg p-2 flex items-center justify-center">
                  <svg viewBox="0 0 100 130" className="w-full h-full">
                    {/* Saw tooth segments */}
                    {[110, 96, 82, 68, 54, 40, 26, 14].map((y, i) => (
                      <polygon
                        key={`saw-${i}`}
                        points={`50,${y} 50,${y - 12} 32,${y - 6}`}
                        fill="#e11d48"
                        stroke="#fb7185"
                        strokeWidth="1"
                      />
                    ))}
                    <line x1="50" y1="120" x2="50" y2="10" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h4 className="font-bold text-white text-sm mt-3">Polyphaga / Elateridae</h4>
                <p className="text-[11px] text-gray-400 mt-1">
                  Cada segmento posee una proyección lateral triangular dándole aspecto de hoja de sierra.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: LEGS ADAPTATIONS */}
        {activeTab === 'legs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cursoria */}
            <div className="bg-gray-900/80 rounded-2xl p-5 border border-teal-500/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-teal-500/10 text-teal-300 font-bold border border-teal-500/30">
                  Pata Cursoria (Corredora)
                </span>
                <h4 className="text-lg font-bold text-white mt-2">Adephaga (Carabidae)</h4>
                <p className="text-xs text-gray-300 mt-1 mb-4 leading-relaxed">
                  Larga y esbelta con fémur y tibia alargados y tarsos de 5 artejos (fórmula 5-5-5). Diseñada para persecución veloz en superficie.
                </p>
                <div className="w-full h-44 bg-gray-950 rounded-xl p-2 flex items-center justify-center border border-gray-800">
                  <svg viewBox="0 0 180 120" className="w-full h-full">
                    <circle cx="20" cy="25" r="10" fill="#0f766e" stroke="#14b8a6" />
                    <text x="20" y="28" textAnchor="middle" fill="#fff" fontSize="6">Coxa</text>
                    {/* Femur */}
                    <path d="M28 25 L80 40" stroke="#14b8a6" strokeWidth="8" strokeLinecap="round" />
                    <text x="50" y="30" fill="#2dd4bf" fontSize="7">Fémur</text>
                    {/* Tibia */}
                    <path d="M80 40 L135 75" stroke="#0d9488" strokeWidth="5" strokeLinecap="round" />
                    <text x="110" y="55" fill="#2dd4bf" fontSize="7">Tibia</text>
                    {/* Tarsi */}
                    <path d="M135 75 L145 85 L155 95 L163 103 L170 108" stroke="#2dd4bf" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 2" />
                    <text x="135" y="105" fill="#2dd4bf" fontSize="7">Tarsos (5)</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Natatoria */}
            <div className="bg-gray-900/80 rounded-2xl p-5 border border-sky-500/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-sky-500/10 text-sky-300 font-bold border border-sky-500/30">
                  Pata Natatoria (Remiforme)
                </span>
                <h4 className="text-lg font-bold text-white mt-2">Adephaga (Dytiscidae)</h4>
                <p className="text-xs text-gray-300 mt-1 mb-4 leading-relaxed">
                  Tibia y tarsos aplanados transversalmente en forma de remo, cubiertos de flecos de pelos natatorios que se abren en la brazada propulsora.
                </p>
                <div className="w-full h-44 bg-gray-950 rounded-xl p-2 flex items-center justify-center border border-gray-800">
                  <svg viewBox="0 0 180 120" className="w-full h-full">
                    {/* Flattened oar-like leg */}
                    <path d="M20 20 Q60 30 90 45" stroke="#0284c7" strokeWidth="10" strokeLinecap="round" />
                    <path d="M90 45 L150 85" stroke="#0369a1" strokeWidth="14" strokeLinecap="round" />
                    {/* Swimming setae/fringes */}
                    {[50, 60, 70, 80, 90, 100, 110, 120, 130, 140].map((x, i) => (
                      <line key={`hair-${i}`} x1={x} y1={25 + i * 4} x2={x - 10} y2={45 + i * 5} stroke="#38bdf8" strokeWidth="1.5" />
                    ))}
                    <text x="80" y="105" fill="#7dd3fc" fontSize="8" fontWeight="bold">Pelos natatorios propulsores</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Fosoria */}
            <div className="bg-gray-900/80 rounded-2xl p-5 border border-amber-500/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 font-bold border border-amber-500/30">
                  Pata Fosoria (Excavadora)
                </span>
                <h4 className="text-lg font-bold text-white mt-2">Polyphaga (Scarabaeidae)</h4>
                <p className="text-xs text-gray-300 mt-1 mb-4 leading-relaxed">
                  Tibia anterior hipertrofiada, aplanada y con fuertes dientes externos como una pala mecánica para perforar suelo compacto o madera.
                </p>
                <div className="w-full h-44 bg-gray-950 rounded-xl p-2 flex items-center justify-center border border-gray-800">
                  <svg viewBox="0 0 180 120" className="w-full h-full">
                    {/* Heavy femur */}
                    <path d="M25 50 Q55 45 80 50" stroke="#b45309" strokeWidth="14" strokeLinecap="round" />
                    {/* Serrated toothed digging shovel tibia */}
                    <path d="M80 50 L140 50 L140 80 L80 65 Z" fill="#d97706" stroke="#f59e0b" strokeWidth="1.5" />
                    {/* Digging teeth */}
                    <polygon points="140,50 160,45 140,58" fill="#f59e0b" />
                    <polygon points="140,60 160,58 140,68" fill="#f59e0b" />
                    <polygon points="140,70 158,72 140,80" fill="#f59e0b" />
                    <text x="90" y="100" fill="#fbbf24" fontSize="8" fontWeight="bold">Dientes excavadores</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Prensora / Ambulatoria */}
            <div className="bg-gray-900/80 rounded-2xl p-5 border border-purple-500/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 font-bold border border-purple-500/30">
                  Pata Trepadora (Con almohadillas)
                </span>
                <h4 className="text-lg font-bold text-white mt-2">Polyphaga (Chrysomelidae)</h4>
                <p className="text-xs text-gray-300 mt-1 mb-4 leading-relaxed">
                  Tarsos ensanchados dotados de millones de pelos microscópicos secretores de fluido adhesivo para caminar verticalmente sobre hojas lisas.
                </p>
                <div className="w-full h-44 bg-gray-950 rounded-xl p-2 flex items-center justify-center border border-gray-800">
                  <svg viewBox="0 0 180 120" className="w-full h-full">
                    <path d="M30 30 L80 40 L110 65" stroke="#7c3aed" strokeWidth="7" strokeLinecap="round" />
                    {/* Bilobed heart shaped adhesive pads (tarsomeres) */}
                    <path d="M110 65 C100 75 110 90 120 85 C130 90 140 75 130 65 Z" fill="#8b5cf6" stroke="#a78bfa" />
                    <path d="M125 85 C120 95 130 105 140 100 C150 105 155 95 145 85 Z" fill="#8b5cf6" stroke="#a78bfa" />
                    <text x="70" y="112" fill="#c084fc" fontSize="8" fontWeight="bold">Almohadillas adhesivas (pulvilos)</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: WINGS & ELYTRA MECHANICS */}
        {activeTab === 'wings' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Visual Cross Section Diagram */}
            <div className="bg-gray-950 rounded-2xl p-6 border border-gray-800 flex flex-col items-center">
              <span className="text-xs font-mono uppercase px-3 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/30 mb-3">
                Corte Anatómico Transversal: Mecanismo de Vuelo
              </span>
              <svg viewBox="0 0 300 200" className="w-full max-h-56">
                {/* Abdomen body cavity */}
                <ellipse cx="150" cy="140" rx="90" ry="40" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <text x="150" y="145" textAnchor="middle" fill="#64748b" fontSize="10">Cavidad Abdominal</text>

                {/* Closed Elytra (Shell shield) */}
                <path d="M60 125 C65 80, 140 70, 149 80" fill="none" stroke="#0284c7" strokeWidth="6" strokeLinecap="round" />
                <path d="M240 125 C235 80, 160 70, 151 80" fill="none" stroke="#0284c7" strokeWidth="6" strokeLinecap="round" />
                <text x="80" y="75" fill="#38bdf8" fontSize="9" fontWeight="bold">Élitro Izq.</text>
                <text x="180" y="75" fill="#38bdf8" fontSize="9" fontWeight="bold">Élitro Der.</text>

                {/* Subelytral space with folded hindwing */}
                <path d="M80 110 Q120 100 145 105 Q120 115 100 120" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="3 2" />
                <path d="M220 110 Q180 100 155 105 Q180 115 200 120" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="3 2" />

                <circle cx="150" cy="80" r="3" fill="#38bdf8" />
                <text x="150" y="65" textAnchor="middle" fill="#7dd3fc" fontSize="8">Sutura de Cierre Hermético</text>
                <text x="150" y="112" textAnchor="middle" fill="#4ade80" fontSize="8">Cavidad subelitral (Alas plegadas)</text>
              </svg>
            </div>

            {/* Evolutionary folding styles */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">
                El Secreto del Éxito Evolutivo: Los Élitros y el Plegado Alar
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                A diferencia de otros órdenes como dípteros o lepidópteros, los escarabajos transformaron sus alas anteriores en una coraza blindada protectora (<span className="text-cyan-400 font-semibold">élitros</span>) que sella el dorso.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-xl bg-gray-900/80 border border-teal-500/30">
                  <h5 className="text-xs font-bold text-teal-300">Plegado Longitudinal Complejo (Polyphaga & Adephaga)</h5>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Las alas membranosas poseen articulaciones hidráulicas que pliegan el ala en zigzag longitudinal y transversal bajo el élitro en fracciones de segundo.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-gray-900/80 border border-purple-500/30">
                  <h5 className="text-xs font-bold text-purple-300">Plegado en Espiral (Archostemata)</h5>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Modo primitivo único donde el extremo apical del ala se enrolla cilíndricamente en espiral bajo el élitro como un pergamino antiguo.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-gray-900/80 border border-emerald-500/30">
                  <h5 className="text-xs font-bold text-emerald-300">Plegado Apical Reducido (Myxophaga)</h5>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Adaptado al tamaño microscópico: alas estrechas con venación reducida y pelos marginales que se pliegan por el extremo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MorphologyComparison;
