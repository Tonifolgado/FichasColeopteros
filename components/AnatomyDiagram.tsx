import React, { useState } from 'react';

interface AnatomyPart {
  id: string;
  name: string;
  category: 'cabeza' | 'torax' | 'abdomen' | 'apendices';
  description: string;
  taxonomicNote: string;
}

const ANATOMY_PARTS: Record<string, AnatomyPart> = {
  head: {
    id: 'head',
    name: 'Cabeza (Cápsula cefálica)',
    category: 'cabeza',
    description: 'Estructura esclerotizada y compacta que alberga los órganos sensoriales primarios (ojos y antenas) y el aparato bucal masticador dirigido hacia adelante (prognato).',
    taxonomicNote: 'La posición del cuello y la constricción cefálica son diagnósticas en familias primitivas como Cupedidae (Archostemata).'
  },
  antennae: {
    id: 'antennae',
    name: 'Antenas sensoriales',
    category: 'cabeza',
    description: 'Órganos sensoriales esenciales para la quimiorrecepción, tacto y detección de feromonas. Varían dramáticamente de 11 artejos básicos a complejas láminas móviles.',
    taxonomicNote: 'Clave taxonómica fundamental: filiformes en Adephaga, lameladas o clavadas en Polyphaga, moniliformes/aserradas en Archostemata.'
  },
  mandibles: {
    id: 'mandibles',
    name: 'Mandíbulas masticadoras',
    category: 'cabeza',
    description: 'Aparato bucal cortador y triturador esclerotizado. En depredadores son curvadas, agudas y cruzadas; en xilófagos son robustas con molares.',
    taxonomicNote: 'En machos de Lucanidae alcanzan dimensiones hipertróficas para combate nupcial.'
  },
  eyes: {
    id: 'eyes',
    name: 'Ojos compuestos',
    category: 'cabeza',
    description: 'Conjunto de omatidios que proporcionan visión de amplio espectro e intensidad de luz. En Gyrinidae (Adephaga) están divididos en dos pares: uno aéreo y otro submarino.',
    taxonomicNote: 'Presentes en los lados de la cabeza; a veces escotados o divididos por una quilla temporal.'
  },
  pronotum: {
    id: 'pronotum',
    name: 'Pronoto (Protórax dorsal)',
    category: 'torax',
    description: 'Gran placa dorsal que cubre el primer segmento torácico. Es independiente y móvil respecto al resto del tórax, ofreciendo protección y articulación cefálica.',
    taxonomicNote: 'La presencia de suturas notopleurales en los laterales distingue a Adephaga, Archostemata y Myxophaga de Polyphaga.'
  },
  scutellum: {
    id: 'scutellum',
    name: 'Escutelo (Mesotórax visible)',
    category: 'torax',
    description: 'Pequeña placa triangular o semicircular situada en la base donde se juntan los dos élitros y el pronoto. Es la única parte visible del mesonoto en reposo.',
    taxonomicNote: 'Su tamaño relativo y forma ayudan a determinar familias dentro de Scarabaeoidea y Buprestidae.'
  },
  elytra: {
    id: 'elytra',
    name: 'Élitros (Alas anteriores esclerotizadas)',
    category: 'torax',
    description: 'Alas anteriores transformadas en un estuche córneo y rígido protector. No aletean activamente para propulsar, sino que se abren para dar sustentación y proteger el cuerpo.',
    taxonomicNote: 'Sinapomorfía definitoria de Coleoptera (del griego coleos: estuche, pteron: ala). En Archostemata conservan una venación reticulada arcaica tipo rejilla.'
  },
  hindwings: {
    id: 'hindwings',
    name: 'Alas membranosas posteriores',
    category: 'torax',
    description: 'Alas membranosas funcionales para el vuelo que descansan dobladas bajo los élitros. Se despliegan mediante un ingenioso sistema hidráulico y biomecánico.',
    taxonomicNote: 'El modo de plegado es crucial: plegado longitudinal en la mayoría, espiral en Archostemata, y enrollamiento apical en Myxophaga.'
  },
  legs: {
    id: 'legs',
    name: 'Patas torácicas (Coxa, Fémur, Tibia, Tarso)',
    category: 'apendices',
    description: 'Tres pares de patas insertadas en cada segmento torácico. Se componen de coxa, trocánter, fémur, tibia, tarsómeros articulados y uñas apicales.',
    taxonomicNote: 'Adaptadas evolutivamente: corredoras (Adephaga), natatorias con cilios (Dytiscidae), o fosorias dentadas (Scarabaeidae).'
  },
  coxae: {
    id: 'coxae',
    name: 'Metacoxas (Coxas posteriores)',
    category: 'torax',
    description: 'Segmentos basales de las patas traseras en la cara ventral del metatórax. Su relación con el abdomen es la prueba taxonómica reina de los coleópteros.',
    taxonomicNote: '¡Carácter diagnóstico supremo!: En Adephaga están fusionadas e inmovilizan/dividen el primer esternito abdominal; en Polyphaga son libres y el esternito pasa de lado a lado.'
  },
  abdomen: {
    id: 'abdomen',
    name: 'Abdomen y Esternitos',
    category: 'abdomen',
    description: 'Consta de 10 segmentos, de los cuales sólo los esternitos ventrales (esternos) 3 al 7 suelen ser visibles exteriormente. Termina en el pigidio y órganos reproductivos.',
    taxonomicNote: 'La segmentación ventral visible y el número de esternitos son claves analíticas fundamentales en cualquier clave dicotómica de escarabajos.'
  }
};

export const AnatomyDiagram: React.FC = () => {
  const [selectedPartId, setSelectedPartId] = useState<string>('elytra');
  const [viewMode, setViewMode] = useState<'dorsal' | 'ventral'>('dorsal');
  const [wingsOpen, setWingsOpen] = useState<boolean>(false);

  const selectedPart = ANATOMY_PARTS[selectedPartId] || ANATOMY_PARTS.elytra;

  return (
    <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-700/60 p-6 md:p-8 shadow-2xl">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-gray-700/80 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/30 mb-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Atlas Morfológico Interactivo
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Anatomía General del Coleóptero
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Haz clic o pasa el cursor sobre las regiones del insecto para inspeccionar su estructura y significado taxonómico.
          </p>
        </div>

        {/* View toggles */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="bg-gray-900/80 p-1 rounded-xl border border-gray-700/60 flex">
            <button
              onClick={() => setViewMode('dorsal')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'dorsal'
                  ? 'bg-teal-500 text-gray-950 shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Vista Dorsal
            </button>
            <button
              onClick={() => {
                setViewMode('ventral');
                setWingsOpen(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'ventral'
                  ? 'bg-teal-500 text-gray-950 shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Vista Ventral (Diagnóstica)
            </button>
          </div>

          {viewMode === 'dorsal' && (
            <button
              onClick={() => setWingsOpen(!wingsOpen)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all flex items-center gap-1.5 ${
                wingsOpen
                  ? 'bg-sky-500/20 text-sky-300 border-sky-400/40 shadow-sm'
                  : 'bg-gray-900/60 text-gray-300 border-gray-700 hover:border-gray-500'
              }`}
            >
              <svg className={`w-3.5 h-3.5 transition-transform ${wingsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span>{wingsOpen ? 'Cerrar Élitros' : 'Desplegar Alas'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Grid: Interactive Diagram & Info Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-center">
        {/* Left: The SVG Interactive Vector Diagram */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 bg-gray-950/70 rounded-2xl border border-gray-800 relative min-h-[440px]">
          {/* Blueprint background grid */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#38bdf8" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Quick anatomical buttons */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            {viewMode === 'dorsal' ? (
              <>
                <button
                  onClick={() => setSelectedPartId('head')}
                  className={`text-[10px] px-2 py-0.5 rounded border ${selectedPartId === 'head' ? 'bg-cyan-500 text-black border-cyan-300 font-bold' : 'bg-gray-900/80 text-gray-400 border-gray-700'}`}
                >
                  Cabeza
                </button>
                <button
                  onClick={() => setSelectedPartId('pronotum')}
                  className={`text-[10px] px-2 py-0.5 rounded border ${selectedPartId === 'pronotum' ? 'bg-cyan-500 text-black border-cyan-300 font-bold' : 'bg-gray-900/80 text-gray-400 border-gray-700'}`}
                >
                  Pronoto
                </button>
                <button
                  onClick={() => setSelectedPartId('elytra')}
                  className={`text-[10px] px-2 py-0.5 rounded border ${selectedPartId === 'elytra' ? 'bg-cyan-500 text-black border-cyan-300 font-bold' : 'bg-gray-900/80 text-gray-400 border-gray-700'}`}
                >
                  Élitros
                </button>
                <button
                  onClick={() => setSelectedPartId('legs')}
                  className={`text-[10px] px-2 py-0.5 rounded border ${selectedPartId === 'legs' ? 'bg-cyan-500 text-black border-cyan-300 font-bold' : 'bg-gray-900/80 text-gray-400 border-gray-700'}`}
                >
                  Patas
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setSelectedPartId('coxae')}
                  className={`text-[10px] px-2 py-0.5 rounded border ${selectedPartId === 'coxae' ? 'bg-amber-400 text-black border-amber-300 font-bold' : 'bg-gray-900/80 text-amber-300 border-gray-700'}`}
                >
                  Metacoxas (Clave)
                </button>
                <button
                  onClick={() => setSelectedPartId('abdomen')}
                  className={`text-[10px] px-2 py-0.5 rounded border ${selectedPartId === 'abdomen' ? 'bg-amber-400 text-black border-amber-300 font-bold' : 'bg-gray-900/80 text-gray-400 border-gray-700'}`}
                >
                  Esternitos
                </button>
                <button
                  onClick={() => setSelectedPartId('mandibles')}
                  className={`text-[10px] px-2 py-0.5 rounded border ${selectedPartId === 'mandibles' ? 'bg-amber-400 text-black border-amber-300 font-bold' : 'bg-gray-900/80 text-gray-400 border-gray-700'}`}
                >
                  Piezas bucales
                </button>
              </>
            )}
          </div>

          {/* SVG Diagram Canvas */}
          <div className="w-full max-w-[360px] h-[360px] relative select-none">
            {viewMode === 'dorsal' ? (
              /* DORSAL VIEW SVG */
              <svg viewBox="0 0 300 360" className="w-full h-full drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="elytraGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="50%" stopColor="#0369a1" />
                    <stop offset="100%" stopColor="#075985" />
                  </linearGradient>
                  <linearGradient id="bodyDark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                  <filter id="glowPart" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* --- LEGS --- */}
                <g
                  onClick={() => setSelectedPartId('legs')}
                  className="cursor-pointer transition-all duration-300"
                  stroke={selectedPartId === 'legs' ? '#38bdf8' : '#64748b'}
                  strokeWidth={selectedPartId === 'legs' ? '3.5' : '2.5'}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Front Legs */}
                  <path d="M125 110 L80 85 L50 95 L35 92" />
                  <path d="M175 110 L220 85 L250 95 L265 92" />
                  {/* Middle Legs */}
                  <path d="M120 150 L70 155 L45 175 L30 185" />
                  <path d="M180 150 L230 155 L255 175 L270 185" />
                  {/* Hind Legs */}
                  <path d="M120 200 L65 230 L40 270 L25 285" />
                  <path d="M180 200 L235 230 L260 270 L275 285" />
                  {/* Claws */}
                  <circle cx="35" cy="92" r="2" fill="#38bdf8" />
                  <circle cx="265" cy="92" r="2" fill="#38bdf8" />
                  <circle cx="30" cy="185" r="2" fill="#38bdf8" />
                  <circle cx="270" cy="185" r="2" fill="#38bdf8" />
                  <circle cx="25" cy="285" r="2" fill="#38bdf8" />
                  <circle cx="275" cy="285" r="2" fill="#38bdf8" />
                </g>

                {/* --- ANTENNAE --- */}
                <g
                  onClick={() => setSelectedPartId('antennae')}
                  className="cursor-pointer"
                  stroke={selectedPartId === 'antennae' ? '#2dd4bf' : '#94a3b8'}
                  strokeWidth={selectedPartId === 'antennae' ? '2.5' : '1.8'}
                  strokeLinecap="round"
                  fill="none"
                >
                  {/* Left Antenna (segmented with tiny ticks) */}
                  <path d="M136 60 Q 110 35 70 30 T 40 45" />
                  {/* Right Antenna */}
                  <path d="M164 60 Q 190 35 230 30 T 260 45" />
                  {/* Antennal segments */}
                  {[0.2, 0.4, 0.6, 0.8, 1].map((pos, i) => (
                    <circle key={`la-${i}`} cx={136 - pos * 80} cy={60 - pos * 20} r="2" fill="#2dd4bf" />
                  ))}
                  {[0.2, 0.4, 0.6, 0.8, 1].map((pos, i) => (
                    <circle key={`ra-${i}`} cx={164 + pos * 80} cy={60 - pos * 20} r="2" fill="#2dd4bf" />
                  ))}
                </g>

                {/* --- MANDIBLES --- */}
                <g
                  onClick={() => setSelectedPartId('mandibles')}
                  className="cursor-pointer"
                  stroke={selectedPartId === 'mandibles' ? '#f59e0b' : '#64748b'}
                  strokeWidth="2"
                  fill={selectedPartId === 'mandibles' ? '#f59e0b' : '#334155'}
                >
                  <path d="M138 48 C 140 32, 130 35, 134 25 C 137 32, 145 42, 142 50 Z" />
                  <path d="M162 48 C 160 32, 170 35, 166 25 C 163 32, 155 42, 158 50 Z" />
                </g>

                {/* --- HEAD --- */}
                <g
                  onClick={() => setSelectedPartId('head')}
                  className="cursor-pointer"
                  filter={selectedPartId === 'head' ? 'url(#glowPart)' : undefined}
                >
                  <path
                    d="M136 78 L 164 78 L 160 52 L 140 52 Z"
                    fill={selectedPartId === 'head' ? '#0284c7' : '#1e293b'}
                    stroke={selectedPartId === 'head' ? '#38bdf8' : '#475569'}
                    strokeWidth="1.5"
                  />
                  {/* Compound Eyes */}
                  <g onClick={(e) => { e.stopPropagation(); setSelectedPartId('eyes'); }}>
                    <ellipse
                      cx="137"
                      cy="60"
                      rx="4"
                      ry="6"
                      fill={selectedPartId === 'eyes' ? '#38bdf8' : '#0f172a'}
                      stroke={selectedPartId === 'eyes' ? '#7dd3fc' : '#64748b'}
                      strokeWidth="1.5"
                    />
                    <ellipse
                      cx="163"
                      cy="60"
                      rx="4"
                      ry="6"
                      fill={selectedPartId === 'eyes' ? '#38bdf8' : '#0f172a'}
                      stroke={selectedPartId === 'eyes' ? '#7dd3fc' : '#64748b'}
                      strokeWidth="1.5"
                    />
                  </g>
                </g>

                {/* --- PRONOTUM --- */}
                <g
                  onClick={() => setSelectedPartId('pronotum')}
                  className="cursor-pointer"
                  filter={selectedPartId === 'pronotum' ? 'url(#glowPart)' : undefined}
                >
                  <path
                    d="M125 120 L 175 120 C 182 120, 185 85, 170 80 L 130 80 C 115 85, 118 120, 125 120 Z"
                    fill={selectedPartId === 'pronotum' ? '#0369a1' : '#334155'}
                    stroke={selectedPartId === 'pronotum' ? '#38bdf8' : '#64748b'}
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </g>

                {/* --- SCUTELLUM --- */}
                <polygon
                  onClick={() => setSelectedPartId('scutellum')}
                  points="144,122 156,122 150,134"
                  className="cursor-pointer"
                  fill={selectedPartId === 'scutellum' ? '#38bdf8' : '#64748b'}
                  stroke="#94a3b8"
                  strokeWidth="1"
                />

                {/* --- ABDOMEN UNDERNEATH (visible when wings deployed) --- */}
                {wingsOpen && (
                  <g onClick={() => setSelectedPartId('abdomen')} className="cursor-pointer">
                    <path
                      d="M130 135 C130 135, 120 220, 130 280 C135 300, 150 310, 150 310 C150 310, 165 300, 170 280 C180 220, 170 135, 170 135 Z"
                      fill="#1e293b"
                      stroke="#475569"
                      strokeWidth="1.5"
                    />
                    {/* Abdominal tergites segments */}
                    {[160, 190, 220, 250, 275].map((y, idx) => (
                      <line key={`ab-seg-${idx}`} x1="130" y1={y} x2="170" y2={y} stroke="#334155" strokeWidth="1" />
                    ))}
                  </g>
                )}

                {/* --- HIND WINGS (Under elytra, spread out if open) --- */}
                {wingsOpen && (
                  <g
                    onClick={() => setSelectedPartId('hindwings')}
                    className="cursor-pointer"
                    stroke="#38bdf8"
                    strokeWidth="1"
                    opacity="0.85"
                  >
                    {/* Left delicate flight wing */}
                    <path
                      d="M145 130 C120 110, 50 120, 20 160 C10 180, 50 210, 100 200 C120 195, 140 160, 145 130 Z"
                      fill="rgba(56, 189, 248, 0.2)"
                    />
                    <path d="M145 130 Q70 140 30 170" fill="none" stroke="#7dd3fc" strokeWidth="1.5" />
                    <path d="M80 140 Q60 170 60 195" fill="none" stroke="#7dd3fc" strokeWidth="0.8" />
                    <path d="M110 145 Q90 175 90 200" fill="none" stroke="#7dd3fc" strokeWidth="0.8" />

                    {/* Right flight wing */}
                    <path
                      d="M155 130 C180 110, 250 120, 280 160 C290 180, 250 210, 200 200 C180 195, 160 160, 155 130 Z"
                      fill="rgba(56, 189, 248, 0.2)"
                    />
                    <path d="M155 130 Q230 140 270 170" fill="none" stroke="#7dd3fc" strokeWidth="1.5" />
                    <path d="M220 140 Q240 170 240 195" fill="none" stroke="#7dd3fc" strokeWidth="0.8" />
                    <path d="M190 145 Q210 175 210 200" fill="none" stroke="#7dd3fc" strokeWidth="0.8" />
                  </g>
                )}

                {/* --- ELYTRA (HARD SHELL WINGS) --- */}
                <g
                  onClick={() => setSelectedPartId('elytra')}
                  className="cursor-pointer transition-all duration-500 origin-[150px_122px]"
                  filter={selectedPartId === 'elytra' ? 'url(#glowPart)' : undefined}
                >
                  {wingsOpen ? (
                    <>
                      {/* Left opened elytra */}
                      <g transform="rotate(-30 145 125)">
                        <path
                          d="M148 124 C148 124, 110 135, 100 210 C96 260, 125 300, 145 310 C145 310, 150 230, 150 125 Z"
                          fill="url(#elytraGrad)"
                          stroke={selectedPartId === 'elytra' ? '#38bdf8' : '#0284c7'}
                          strokeWidth="2"
                        />
                      </g>
                      {/* Right opened elytra */}
                      <g transform="rotate(30 155 125)">
                        <path
                          d="M152 124 C152 124, 190 135, 200 210 C204 260, 175 300, 155 310 C155 310, 150 230, 150 125 Z"
                          fill="url(#elytraGrad)"
                          stroke={selectedPartId === 'elytra' ? '#38bdf8' : '#0284c7'}
                          strokeWidth="2"
                        />
                      </g>
                    </>
                  ) : (
                    <>
                      {/* Closed Left Elytron */}
                      <path
                        d="M149 124 C149 124, 110 130, 105 190 C100 240, 120 290, 148 312 L 149 124 Z"
                        fill="url(#elytraGrad)"
                        stroke={selectedPartId === 'elytra' ? '#38bdf8' : '#0284c7'}
                        strokeWidth="1.8"
                      />
                      {/* Closed Right Elytron */}
                      <path
                        d="M151 124 C151 124, 190 130, 195 190 C200 240, 180 290, 152 312 L 151 124 Z"
                        fill="url(#elytraGrad)"
                        stroke={selectedPartId === 'elytra' ? '#38bdf8' : '#0284c7'}
                        strokeWidth="1.8"
                      />
                      {/* Longitudinal Striae / Lines on Elytra */}
                      <path d="M138 135 C132 180, 126 240, 136 295" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" fill="none" />
                      <path d="M125 145 C118 185, 115 235, 125 280" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" fill="none" />
                      <path d="M162 135 C168 180, 174 240, 164 295" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" fill="none" />
                      <path d="M175 145 C182 185, 185 235, 175 280" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" fill="none" />
                      {/* Center Suture Line */}
                      <line x1="150" y1="124" x2="150" y2="312" stroke="#7dd3fc" strokeWidth="1.8" />
                    </>
                  )}
                </g>

                {/* Callout pointers with interactive pins */}
                <g className="text-[10px] font-mono pointer-events-none fill-gray-400">
                  <text x="5" y="32">Antena</text>
                  <text x="5" y="115">Pronoto</text>
                  <text x="215" y="180">Élitro esclerotizado</text>
                  <text x="5" y="270">Pata (Tarso)</text>
                </g>
              </svg>
            ) : (
              /* VENTRAL VIEW SVG (TAXONOMIC DIAGNOSTIC FOCUS) */
              <svg viewBox="0 0 300 360" className="w-full h-full drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="ventralGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                  <linearGradient id="coxaHighlight" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                </defs>

                {/* Legs (Ventral insertion) */}
                <g stroke="#64748b" strokeWidth="2.5" fill="none" strokeLinecap="round">
                  <path d="M130 95 L80 85 L50 95 L35 92" />
                  <path d="M170 95 L220 85 L250 95 L265 92" />
                  <path d="M125 140 L70 145 L45 165 L30 175" />
                  <path d="M175 140 L230 145 L255 165 L270 175" />
                  <path d="M120 185 L65 215 L40 255 L25 270" />
                  <path d="M180 185 L235 215 L260 255 L275 270" />
                </g>

                {/* Head (Ventral - Gula & Mouthparts) */}
                <g onClick={() => setSelectedPartId('head')} className="cursor-pointer">
                  <path d="M136 70 L 164 70 L 160 45 L 140 45 Z" fill="#334155" stroke="#64748b" strokeWidth="1.5" />
                  {/* Palps / Maxillae */}
                  <path d="M142 42 L 135 28" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M158 42 L 165 28" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
                  <ellipse cx="137" cy="55" rx="3" ry="5" fill="#0f172a" />
                  <ellipse cx="163" cy="55" rx="3" ry="5" fill="#0f172a" />
                </g>

                {/* Prosternum */}
                <path d="M125 110 L 175 110 L 165 72 L 135 72 Z" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                {/* Procoxae */}
                <circle cx="135" cy="95" r="7" fill="#475569" stroke="#64748b" />
                <circle cx="165" cy="95" r="7" fill="#475569" stroke="#64748b" />

                {/* Mesosternum */}
                <path d="M120 145 L 180 145 L 175 110 L 125 110 Z" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                {/* Mesocoxae */}
                <circle cx="132" cy="138" r="8" fill="#475569" stroke="#64748b" />
                <circle cx="168" cy="138" r="8" fill="#475569" stroke="#64748b" />

                {/* Metasternum */}
                <path d="M110 185 L 190 185 L 180 145 L 120 145 Z" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />

                {/* --- METACOXAE (TAXONOMIC CRITICAL PART) --- */}
                <g
                  onClick={() => setSelectedPartId('coxae')}
                  className="cursor-pointer"
                  filter={selectedPartId === 'coxae' ? 'url(#glowPart)' : undefined}
                >
                  <path
                    d="M112 186 C120 186, 140 186, 146 195 L 140 225 C125 225, 110 205, 112 186 Z"
                    fill={selectedPartId === 'coxae' ? 'url(#coxaHighlight)' : '#d97706'}
                    stroke={selectedPartId === 'coxae' ? '#fbbf24' : '#b45309'}
                    strokeWidth="2"
                  />
                  <path
                    d="M188 186 C180 186, 160 186, 154 195 L 160 225 C175 225, 190 205, 188 186 Z"
                    fill={selectedPartId === 'coxae' ? 'url(#coxaHighlight)' : '#d97706'}
                    stroke={selectedPartId === 'coxae' ? '#fbbf24' : '#b45309'}
                    strokeWidth="2"
                  />
                  {/* Indicator lines and text */}
                  <text x="150" y="210" textAnchor="middle" fill="#000" fontSize="8" fontWeight="bold">COXAS</text>
                </g>

                {/* --- ABDOMINAL STERNITES (VENTRAL) --- */}
                <g
                  onClick={() => setSelectedPartId('abdomen')}
                  className="cursor-pointer"
                  fill="#1e293b"
                  stroke="#475569"
                  strokeWidth="1.5"
                >
                  {/* Sternite 1 (Divided by metacoxae in Adephaga, or complete in Polyphaga) */}
                  <path
                    d="M115 226 L 140 226 L 146 195 L 154 195 L 160 226 L 185 226 L 182 245 L 118 245 Z"
                    fill={selectedPartId === 'abdomen' ? '#0369a1' : '#1e293b'}
                    stroke={selectedPartId === 'abdomen' ? '#38bdf8' : '#64748b'}
                  />
                  {/* Sternite 2 */}
                  <path d="M118 245 L 182 245 L 180 265 L 120 265 Z" fill={selectedPartId === 'abdomen' ? '#0284c7' : '#1e293b'} />
                  {/* Sternite 3 */}
                  <path d="M120 265 L 180 265 L 175 285 L 125 285 Z" fill={selectedPartId === 'abdomen' ? '#0369a1' : '#1e293b'} />
                  {/* Sternite 4 & 5 (Apex) */}
                  <path d="M125 285 L 175 285 L 168 305 L 132 305 Z" fill={selectedPartId === 'abdomen' ? '#0284c7' : '#1e293b'} />
                  <path d="M132 305 L 168 305 L 150 325 Z" fill={selectedPartId === 'abdomen' ? '#0369a1' : '#1e293b'} />
                </g>

                {/* Annotations */}
                <text x="200" y="205" fill="#f59e0b" fontSize="9" fontFamily="monospace" fontWeight="bold">← Metacoxas</text>
                <text x="200" y="240" fill="#38bdf8" fontSize="9" fontFamily="monospace">← Esternito 1</text>
                <text x="15" y="340" fill="#94a3b8" fontSize="8" fontFamily="monospace">CLAVE: Unión Coxa-Esternito</text>
              </svg>
            )}
          </div>

          <div className="text-[11px] text-gray-400 mt-2 text-center flex items-center gap-1.5 bg-gray-900/60 px-3 py-1 rounded-full border border-gray-800">
            <svg className="w-3.5 h-3.5 text-teal-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>Selecciona cualquier órgano para ver su función biológica y rol taxonómico.</span>
          </div>
        </div>

        {/* Right: Detailed Anatomical Breakdown Card */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-2xl border border-gray-700/70">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase font-mono tracking-wider px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-400 border border-teal-500/20">
                Categoría: {selectedPart.category}
              </span>
              <span className="text-xs font-mono text-gray-500">ID: {selectedPart.id}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              {selectedPart.name}
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              {selectedPart.description}
            </p>

            <div className="p-4 rounded-xl bg-gray-800/80 border-l-4 border-teal-400 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-300">
                <svg className="w-4 h-4 text-teal-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Importancia en la Clasificación:</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {selectedPart.taxonomicNote}
              </p>
            </div>
          </div>

          {/* Quick anatomical selector grid */}
          <div className="mt-6 pt-5 border-t border-gray-800">
            <h4 className="text-xs uppercase font-mono tracking-wider text-gray-400 mb-2">
              Explorar otras estructuras:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              {Object.values(ANATOMY_PARTS).map((part) => (
                <button
                  key={part.id}
                  onClick={() => setSelectedPartId(part.id)}
                  className={`text-left text-xs px-2.5 py-1.5 rounded-lg border transition-all truncate ${
                    selectedPartId === part.id
                      ? 'bg-teal-500/20 text-teal-300 border-teal-400/50 font-medium'
                      : 'bg-gray-800/40 text-gray-400 border-gray-700/50 hover:bg-gray-800 hover:text-gray-200'
                  }`}
                >
                  {part.name.split(' (')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomyDiagram;
