import React from 'react';

interface SvgIconProps {
  className?: string;
}

/* =========================================================================
   1. ADEPHAGA: SPECIMEN 1 - CARABIDAE (Calosoma / Ground Beetle)
   ========================================================================= */
export const AdephagaImage: React.FC<SvgIconProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full relative flex items-center justify-center p-3 bg-gradient-to-b from-gray-900/50 to-gray-900/90 overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <circle cx="50%" cy="50%" r="45" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="50%" cy="50%" r="80" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <svg
        className="w-full h-full max-h-[175px] object-contain drop-shadow-[0_0_15px_rgba(20,184,166,0.2)] select-none transition-all duration-500 group-hover:scale-105"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="adephaga-body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="60%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#115e59" />
          </linearGradient>
          <linearGradient id="adephaga-legs" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
          <radialGradient id="adephaga-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="60" r="45" fill="url(#adephaga-glow)" />

        {/* Legs - long running */}
        <path d="M85 45 L65 35 L50 40 L45 38" stroke="url(#adephaga-legs)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M115 45 L135 35 L150 40 L155 38" stroke="url(#adephaga-legs)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M82 60 L60 62 L48 72 L42 75" stroke="url(#adephaga-legs)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M118 60 L140 62 L152 72 L158 75" stroke="url(#adephaga-legs)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M85 80 L58 92 L45 105 L40 108" stroke="url(#adephaga-legs)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M115 80 L142 92 L155 105 L160 108" stroke="url(#adephaga-legs)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Long predatory filiform antennae */}
        <path d="M92 22 C80 12, 70 8, 55 12" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M108 22 C120 12, 130 8, 145 12" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" />

        {/* Sharp Mandibles */}
        <path d="M94 15 C95 8, 88 10, 89 5" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />
        <path d="M106 15 C105 8, 112 10, 111 5" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />

        {/* Head */}
        <path d="M92 28 L108 28 L104 18 L96 18 Z" fill="url(#adephaga-body)" stroke="#0d9488" strokeWidth="1" />
        <circle cx="93" cy="22" r="1.5" fill="#2dd4bf" />
        <circle cx="107" cy="22" r="1.5" fill="#2dd4bf" />

        {/* Pronotum */}
        <path d="M88 44 L112 44 L108 28 L92 28 Z" fill="url(#adephaga-body)" stroke="#0d9488" strokeWidth="1" strokeLinejoin="round" />

        {/* Elongated Elytra */}
        <path d="M86 45 C86 45, 80 75, 87 98 C92 108, 100 112, 100 112 C100 112, 108 108, 113 98 C120 75, 114 45, 114 45 Z" fill="url(#adephaga-body)" stroke="#0d9488" strokeWidth="1" strokeLinejoin="round" />
        
        {/* Elytral Striae */}
        <line x1="100" y1="45" x2="100" y2="111" stroke="#2dd4bf" strokeWidth="1.5" opacity="0.8" />
        <path d="M92 50 C92 50, 88 72, 92 92" stroke="#0f766e" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <path d="M108 50 C108 50, 112 72, 108 92" stroke="#0f766e" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

        <text x="10" y="112" fill="#2dd4bf" fontSize="8" fontFamily="monospace" letterSpacing="1" opacity="0.8">ADEPHAGA: CARABIDAE</text>
        <text x="135" y="20" fill="#14b8a6" fontSize="6" fontFamily="monospace" opacity="0.6">CAZADOR TERRESTRE</text>
      </svg>
    </div>
  );
};

/* =========================================================================
   1B. ADEPHAGA: SPECIMEN 2 - DYTISCIDAE (Dytiscus / Diving Beetle)
   ========================================================================= */
export const DytiscidaeImage: React.FC<SvgIconProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full relative flex items-center justify-center p-3 bg-gradient-to-b from-gray-900/50 to-gray-900/90 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full max-h-[175px] object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.25)] select-none transition-all duration-500 group-hover:scale-105"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dytiscus-body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="70%" stopColor="#155e75" />
            <stop offset="100%" stopColor="#083344" />
          </linearGradient>
        </defs>

        {/* Aquatic oval water drop silhouette */}
        {/* Powerful Oar Legs (hind legs flattened with setae) */}
        <g stroke="#06b6d4" strokeWidth="3" strokeLinecap="round">
          <path d="M84 75 L52 90 L30 102" />
          <path d="M116 75 L148 90 L170 102" />
        </g>
        {/* Swimming Setae */}
        {[35, 42, 50, 60, 70].map((x, i) => (
          <line key={`lh-${i}`} x1={x} y1={102 - i * 3} x2={x - 6} y2={109 - i * 3} stroke="#67e8f9" strokeWidth="1.5" />
        ))}
        {[165, 158, 150, 140, 130].map((x, i) => (
          <line key={`rh-${i}`} x1={x} y1={102 - i * 3} x2={x + 6} y2={109 - i * 3} stroke="#67e8f9" strokeWidth="1.5" />
        ))}

        {/* Front & Mid Legs (short, raptorial with suction discs in males) */}
        <path d="M86 48 L68 40 L60 45" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="60" cy="45" r="3" fill="#22d3ee" /> {/* Suction cup */}
        <path d="M114 48 L132 40 L140 45" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="140" cy="45" r="3" fill="#22d3ee" />

        {/* Compact Hydrodynamic Body */}
        {/* Head embedded into pronotum */}
        <path d="M92 26 L108 26 L104 18 L96 18 Z" fill="url(#dytiscus-body)" stroke="#06b6d4" strokeWidth="1" />
        {/* Antennae */}
        <path d="M93 20 C85 14, 80 12, 70 12" stroke="#67e8f9" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M107 20 C115 14, 120 12, 130 12" stroke="#67e8f9" strokeWidth="1.5" strokeLinecap="round" />

        {/* Broad Pronotum with Yellow Margins */}
        <path d="M80 44 L120 44 L112 26 L88 26 Z" fill="url(#dytiscus-body)" stroke="#facc15" strokeWidth="2" strokeLinejoin="round" />

        {/* Smooth, Hydrodynamic Elytra with Bright Yellow Lateral Borders */}
        <path d="M78 45 C75 75, 82 102, 100 112 C118 102, 125 75, 122 45 Z" fill="url(#dytiscus-body)" stroke="#facc15" strokeWidth="2" />
        <line x1="100" y1="45" x2="100" y2="112" stroke="#06b6d4" strokeWidth="1.2" />

        {/* Air Bubble reservoir indicator at apex */}
        <circle cx="100" cy="106" r="3" fill="#67e8f9" opacity="0.6" />

        <text x="10" y="112" fill="#22d3ee" fontSize="8" fontFamily="monospace" letterSpacing="1" opacity="0.8">ADEPHAGA: DYTISCIDAE</text>
        <text x="135" y="20" fill="#06b6d4" fontSize="6" fontFamily="monospace" opacity="0.6">BUCEADOR ACUÁTICO</text>
      </svg>
    </div>
  );
};

/* =========================================================================
   2. POLYPHAGA: SPECIMEN 1 - SCARABAEIDAE (Rhinoceros Beetle / Dynastes)
   ========================================================================= */
export const PolyphagaImage: React.FC<SvgIconProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full relative flex items-center justify-center p-3 bg-gradient-to-b from-gray-900/50 to-gray-900/90 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full max-h-[175px] object-contain drop-shadow-[0_0_15px_rgba(245,158,11,0.2)] select-none transition-all duration-500 group-hover:scale-105"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="polyphaga-body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="60%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>
          <linearGradient id="polyphaga-legs" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
          <radialGradient id="polyphaga-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="65" r="50" fill="url(#polyphaga-glow)" />

        {/* Robust clawed legs */}
        <path d="M83 50 L63 42 L52 48" stroke="url(#polyphaga-legs)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M117 50 L137 42 L148 48" stroke="url(#polyphaga-legs)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M80 65 L58 68 L48 76" stroke="url(#polyphaga-legs)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M120 65 L142 68 L152 76" stroke="url(#polyphaga-legs)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M83 82 L59 90 L49 100" stroke="url(#polyphaga-legs)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M117 82 L141 90 L151 100" stroke="url(#polyphaga-legs)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {/* Lamellate Antennae */}
        <path d="M91 25 C84 18, 80 20, 77 15" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
        <circle cx="77" cy="14" r="2.5" fill="#f59e0b" />
        <path d="M109 25 C116 18, 120 20, 123 15" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
        <circle cx="123" cy="14" r="2.5" fill="#f59e0b" />

        {/* Head with Cephalic Horn */}
        <path d="M90 32 L110 32 L105 24 L95 24 Z" fill="url(#polyphaga-body)" stroke="#b45309" strokeWidth="1" />
        {/* Forward Rhinoceros Horn */}
        <path d="M100 24 Q97 12 100 4 Q103 12 100 24" fill="#78350f" stroke="#fbbf24" strokeWidth="1.2" />

        {/* Broad Shield Pronotum */}
        <path d="M80 48 C80 48, 82 32, 100 32 C118 32, 120 48, 120 48 Z" fill="url(#polyphaga-body)" stroke="#b45309" strokeWidth="1.2" />

        {/* Compact Domed Elytra */}
        <path d="M80 50 C80 50, 72 75, 84 98 C92 110, 100 113, 100 113 C100 113, 108 110, 116 98 C128 75, 120 50, 120 50 Z" fill="url(#polyphaga-body)" stroke="#b45309" strokeWidth="1.2" />

        {/* Elytra suture */}
        <line x1="100" y1="50" x2="100" y2="112" stroke="#f59e0b" strokeWidth="1.5" />

        <text x="10" y="112" fill="#fbbf24" fontSize="8" fontFamily="monospace" letterSpacing="1" opacity="0.8">POLYPHAGA: SCARABAEIDAE</text>
        <text x="135" y="20" fill="#f59e0b" fontSize="6" fontFamily="monospace" opacity="0.6">ESCARABAJO RINOCERONTE</text>
      </svg>
    </div>
  );
};

/* =========================================================================
   2B. POLYPHAGA: SPECIMEN 2 - COCCINELLIDAE (Ladybug / Mariquita)
   ========================================================================= */
export const CoccinellidaeImage: React.FC<SvgIconProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full relative flex items-center justify-center p-3 bg-gradient-to-b from-gray-900/50 to-gray-900/90 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full max-h-[175px] object-contain drop-shadow-[0_0_15px_rgba(239,68,68,0.25)] select-none transition-all duration-500 group-hover:scale-105"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ladybug-red" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="70%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
        </defs>

        {/* Small Legs tucked under hemispheric body */}
        <path d="M80 50 L65 44 L58 48" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M120 50 L135 44 L142 48" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M78 68 L60 70 L54 77" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M122 68 L140 70 L146 77" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M80 85 L65 92 L58 100" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M120 85 L135 92 L142 100" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />

        {/* Short Clavate Antennae */}
        <path d="M94 22 L88 15" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="88" cy="14" r="2" fill="#ef4444" />
        <path d="M106 22 L112 15" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="112" cy="14" r="2" fill="#ef4444" />

        {/* Head with White Spots */}
        <path d="M92 28 L108 28 L103 20 L97 20 Z" fill="#0f172a" stroke="#334155" strokeWidth="1" />
        <circle cx="95" cy="24" r="1.5" fill="#f8fafc" />
        <circle cx="105" cy="24" r="1.5" fill="#f8fafc" />

        {/* Pronotum - Black with White Corner Patches */}
        <path d="M82 46 C82 30, 118 30, 118 46 Z" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />
        <ellipse cx="88" cy="40" rx="3.5" ry="5" fill="#f8fafc" />
        <ellipse cx="112" cy="40" rx="3.5" ry="5" fill="#f8fafc" />

        {/* Hemispheric Glossy Red Elytra */}
        <circle cx="100" cy="78" r="32" fill="url(#ladybug-red)" stroke="#991b1b" strokeWidth="1.5" />
        {/* Median Suture Line */}
        <line x1="100" y1="46" x2="100" y2="110" stroke="#0f172a" strokeWidth="2" />

        {/* 7 Distinctive Black Spots (Coccinella septempunctata) */}
        {/* Scutellar spot */}
        <circle cx="100" cy="52" r="4.5" fill="#0f172a" />
        {/* Elytron left spots */}
        <circle cx="86" cy="68" r="4" fill="#0f172a" />
        <circle cx="82" cy="90" r="4" fill="#0f172a" />
        <circle cx="95" cy="98" r="3.5" fill="#0f172a" />
        {/* Elytron right spots */}
        <circle cx="114" cy="68" r="4" fill="#0f172a" />
        <circle cx="118" cy="90" r="4" fill="#0f172a" />
        <circle cx="105" cy="98" r="3.5" fill="#0f172a" />

        <text x="10" y="112" fill="#f87171" fontSize="8" fontFamily="monospace" letterSpacing="1" opacity="0.8">POLYPHAGA: COCCINELLIDAE</text>
        <text x="135" y="20" fill="#ef4444" fontSize="6" fontFamily="monospace" opacity="0.6">MARIQUITA 7 PUNTOS</text>
      </svg>
    </div>
  );
};

/* =========================================================================
   3. ARCHOSTEMATA: SPECIMEN 1 - CUPEDIDAE (Reticulated Beetle)
   ========================================================================= */
export const ArchostemataImage: React.FC<SvgIconProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full relative flex items-center justify-center p-3 bg-gradient-to-b from-gray-900/50 to-gray-900/90 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full max-h-[175px] object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.2)] select-none transition-all duration-500 group-hover:scale-105"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="archo-body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#5b21b6" />
          </linearGradient>
          <linearGradient id="archo-legs" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#4c1d95" />
          </linearGradient>
          <radialGradient id="archo-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="60" r="45" fill="url(#archo-glow)" />

        {/* Legs */}
        <path d="M86 42 L66 32 L56 38" stroke="url(#archo-legs)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M114 42 L134 32 L144 38" stroke="url(#archo-legs)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M84 62 L60 62 L51 70" stroke="url(#archo-legs)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M116 62 L140 62 L149 70" stroke="url(#archo-legs)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M85 82 L61 93 L51 102" stroke="url(#archo-legs)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M115 82 L139 93 L149 102" stroke="url(#archo-legs)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Moniliform Antennae */}
        <path d="M93 25 C90 14, 85 10, 72 10" stroke="#d8b4fe" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 3" />
        <path d="M107 25 C110 14, 115 10, 128 10" stroke="#d8b4fe" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 3" />

        {/* Head with Constricted Neck */}
        <path d="M94 30 L106 30 L104 22 L96 22 Z" fill="url(#archo-body)" stroke="#6d28d9" strokeWidth="1" />
        <rect x="91" y="24" width="2" height="3" rx="1" fill="#c084fc" />
        <rect x="107" y="24" width="2" height="3" rx="1" fill="#c084fc" />

        {/* Pronotum with Notopleural Sutures */}
        <path d="M87 43 L113 43 L108 30 L92 30 Z" fill="url(#archo-body)" stroke="#6d28d9" strokeWidth="1.2" strokeLinejoin="round" />
        <rect x="97" y="34" width="6" height="6" rx="1" fill="#4c1d95" opacity="0.4" />

        {/* Elongated Narrow Elytra with Distinct Primitive Lattice Mesh */}
        <path d="M85 44 C85 44, 82 72, 85 102 C85 110, 100 114, 100 114 C100 114, 115 110, 115 102 C118 72, 115 44, 115 44 Z" fill="url(#archo-body)" stroke="#6d28d9" strokeWidth="1.2" />

        {/* Center Suture */}
        <line x1="100" y1="44" x2="100" y2="114" stroke="#c084fc" strokeWidth="1.2" />

        {/* Archaic Reticulated Cell Grid on Elytra */}
        <path d="M90 48 V102 M95 48 V105 M105 48 V105 M110 48 V102" stroke="#4c1d95" strokeWidth="0.8" opacity="0.7" strokeDasharray="2 2" />
        {[55, 65, 75, 85, 95].map((y, i) => (
          <line key={`retic-${i}`} x1="86" y1={y} x2="114" y2={y} stroke="#4c1d95" strokeWidth="0.6" opacity="0.6" />
        ))}

        <text x="10" y="112" fill="#d8b4fe" fontSize="8" fontFamily="monospace" letterSpacing="1" opacity="0.8">ARCHOSTEMATA: CUPEDIDAE</text>
        <text x="135" y="20" fill="#a78bfa" fontSize="6" fontFamily="monospace" opacity="0.6">FÓSIL VIVIENTE</text>
      </svg>
    </div>
  );
};

/* =========================================================================
   4. MYXOPHAGA: SPECIMEN 1 - HYDROSCAPHIDAE (Skiff Beetle)
   ========================================================================= */
export const MyxophagaImage: React.FC<SvgIconProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full relative flex items-center justify-center p-3 bg-gradient-to-b from-gray-900/50 to-gray-900/90 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full max-h-[175px] object-contain drop-shadow-[0_0_15px_rgba(34,197,94,0.25)] select-none transition-all duration-500 group-hover:scale-105"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="myxo-body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="60%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <radialGradient id="myxo-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="62" r="35" fill="url(#myxo-glow)" />

        {/* Ripples beneath the beetle */}
        <ellipse cx="100" cy="85" rx="35" ry="8" stroke="#06b6d4" strokeWidth="1.2" opacity="0.5" />
        <ellipse cx="100" cy="85" rx="55" ry="12" stroke="#22c55e" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.3" />

        {/* Aquatic short legs */}
        <path d="M85 48 L72 40 L64 43" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M115 48 L128 40 L136 43" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M83 62 L68 64 L60 70" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M117 62 L132 64 L140 70" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M85 75 L70 82 L62 88" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M115 75 L130 82 L138 88" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />

        {/* Clubbed Antennae */}
        <path d="M91 28 C87 22, 86 23, 83 18" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="82" cy="17" r="1.5" fill="#4ade80" />
        <path d="M109 28 C113 22, 114 23, 117 18" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="118" cy="17" r="1.5" fill="#4ade80" />

        {/* Head */}
        <path d="M92 34 L108 34 L103 26 L97 26 Z" fill="url(#myxo-body)" stroke="#15803d" strokeWidth="1" />
        <circle cx="94" cy="30" r="1" fill="#4ade80" />
        <circle cx="106" cy="30" r="1" fill="#4ade80" />

        {/* Pronotum */}
        <path d="M85 48 L115 48 L111 34 L89 34 Z" fill="url(#myxo-body)" stroke="#15803d" strokeWidth="1" strokeLinejoin="round" />

        {/* Teardrop truncated Elytra exposing pointed abdominal apex */}
        <path d="M85 49 C85 49, 80 66, 88 80 L 112 80 C 120 66, 115 49, 115 49 Z" fill="url(#myxo-body)" stroke="#15803d" strokeWidth="1" />
        <line x1="100" y1="49" x2="100" y2="80" stroke="#4ade80" strokeWidth="1.2" />

        {/* Exposed pointed Hydroscaphid abdomen (skiff tail) */}
        <polygon points="88,80 112,80 100,98" fill="#166534" stroke="#22c55e" strokeWidth="1" />

        {/* Air bubble plastron */}
        <circle cx="95" cy="62" r="2" fill="white" opacity="0.4" />
        <circle cx="106" cy="70" r="2.5" fill="white" opacity="0.4" />

        <text x="10" y="112" fill="#4ade80" fontSize="8" fontFamily="monospace" letterSpacing="1" opacity="0.8">MYXOPHAGA: HYDROSCAPHIDAE</text>
        <text x="135" y="20" fill="#22c55e" fontSize="6" fontFamily="monospace" opacity="0.6">&lt; 2 MM / ALGAS</text>
      </svg>
    </div>
  );
};


/* =========================================================================
   5. CICINDELIDAE (Escarabajo Tigre - Adephaga / Cicindelinae)
   ========================================================================= */
export const CicindelidaeImage: React.FC<SvgIconProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full relative flex items-center justify-center p-3 bg-gradient-to-b from-gray-900/50 to-gray-900/90 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full max-h-[175px] object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] select-none transition-all duration-500 group-hover:scale-105"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cicindela-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#065f46" />
          </linearGradient>
        </defs>

        {/* Long stilt-like fast legs */}
        <g stroke="#34d399" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M85 45 L60 30 L40 35 L30 32" />
          <path d="M115 45 L140 30 L160 35 L170 32" />
          <path d="M83 60 L55 60 L38 72 L26 76" />
          <path d="M117 60 L145 60 L162 72 L174 76" />
          <path d="M85 82 L50 95 L32 110 L22 114" />
          <path d="M115 82 L150 95 L168 110 L178 114" />
        </g>

        {/* Huge sickle mandibles with sharp teeth */}
        <path d="M92 14 C96 4, 84 4, 88 -2" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M108 14 C104 4, 116 4, 112 -2" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />

        {/* Head with Giant Globular Bulging Eyes */}
        <path d="M90 28 L110 28 L106 16 L94 16 Z" fill="url(#cicindela-grad)" stroke="#10b981" strokeWidth="1" />
        {/* Left huge eye */}
        <circle cx="89" cy="22" r="4.5" fill="#facc15" stroke="#34d399" strokeWidth="1.5" />
        <circle cx="89" cy="22" r="2" fill="#064e3b" />
        {/* Right huge eye */}
        <circle cx="111" cy="22" r="4.5" fill="#facc15" stroke="#34d399" strokeWidth="1.5" />
        <circle cx="111" cy="22" r="2" fill="#064e3b" />

        {/* Long fine antennae */}
        <path d="M90 20 C76 10, 65 8, 48 10" stroke="#a7f3d0" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M110 20 C124 10, 135 8, 152 10" stroke="#a7f3d0" strokeWidth="1.2" strokeLinecap="round" />

        {/* Narrow Pronotum */}
        <path d="M90 44 L110 44 L107 28 L93 28 Z" fill="url(#cicindela-grad)" stroke="#047857" strokeWidth="1.2" />

        {/* Elytra with distinctive cream-white tiger maculations */}
        <path d="M86 45 C86 45, 82 75, 88 100 C92 108, 100 112, 100 112 C100 112, 108 108, 112 100 C118 75, 114 45, 114 45 Z" fill="url(#cicindela-grad)" stroke="#047857" strokeWidth="1.2" />
        <line x1="100" y1="45" x2="100" y2="112" stroke="#34d399" strokeWidth="1.2" />

        {/* White tiger patterns on elytra */}
        <path d="M87 60 Q 94 62 90 70" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" />
        <path d="M113 60 Q 106 62 110 70" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" />
        <circle cx="91" cy="85" r="2.5" fill="#f8fafc" />
        <circle cx="109" cy="85" r="2.5" fill="#f8fafc" />

        <text x="10" y="112" fill="#34d399" fontSize="8" fontFamily="monospace" letterSpacing="1" opacity="0.8">CICINDELIDAE</text>
        <text x="130" y="20" fill="#10b981" fontSize="6" fontFamily="monospace" opacity="0.6">ESCARABAJO TIGRE</text>
      </svg>
    </div>
  );
};

/* =========================================================================
   6. GYRINIDAE (Escarabajo Torbellino - Adephaga)
   ========================================================================= */
export const GyrinidaeImage: React.FC<SvgIconProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full relative flex items-center justify-center p-3 bg-gradient-to-b from-gray-900/50 to-gray-900/90 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full max-h-[175px] object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.3)] select-none transition-all duration-500 group-hover:scale-105"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Surface water swirl ripples */}
        <ellipse cx="100" cy="65" rx="75" ry="32" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 6" opacity="0.4" />
        <ellipse cx="100" cy="65" rx="55" ry="22" stroke="#38bdf8" strokeWidth="1.2" opacity="0.6" />

        {/* Long grasping front legs */}
        <path d="M88 42 L68 30 L55 35" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M112 42 L132 30 L145 35" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />

        {/* Paddle-like short mid & hind swimming fins */}
        <polygon points="82,65 65,72 70,80" fill="#0284c7" stroke="#38bdf8" />
        <polygon points="118,65 135,72 130,80" fill="#0284c7" stroke="#38bdf8" />
        <polygon points="85,82 72,90 76,96" fill="#0284c7" stroke="#38bdf8" />
        <polygon points="115,82 128,90 124,96" fill="#0284c7" stroke="#38bdf8" />

        {/* Streamlined glossy black body */}
        <ellipse cx="100" cy="65" rx="18" ry="36" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.8" />
        <line x1="100" y1="36" x2="100" y2="101" stroke="#38bdf8" strokeWidth="1" />

        {/* 4 Divided Eyes (2 dorsal for air, 2 ventral for water) */}
        {/* Dorsal aerial eyes */}
        <circle cx="94" cy="33" r="2.2" fill="#38bdf8" stroke="#0284c7" strokeWidth="0.8" />
        <circle cx="106" cy="33" r="2.2" fill="#38bdf8" stroke="#0284c7" strokeWidth="0.8" />
        {/* Submerged ventral eyes indicator */}
        <circle cx="90" cy="37" r="2" fill="#0369a1" opacity="0.8" />
        <circle cx="110" cy="37" r="2" fill="#0369a1" opacity="0.8" />

        {/* Metallic sheen */}
        <path d="M96 48 Q94 65 96 85" stroke="#7dd3fc" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

        <text x="10" y="112" fill="#38bdf8" fontSize="8" fontFamily="monospace" letterSpacing="1" opacity="0.8">GYRINIDAE</text>
        <text x="125" y="20" fill="#0284c7" fontSize="6" fontFamily="monospace" opacity="0.7">OJOS CUÁDRUPLES</text>
      </svg>
    </div>
  );
};

/* =========================================================================
   7. LUCANIDAE (Ciervo Volante - Polyphaga)
   ========================================================================= */
export const LucanidaeImage: React.FC<SvgIconProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full relative flex items-center justify-center p-3 bg-gradient-to-b from-gray-900/50 to-gray-900/90 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full max-h-[175px] object-contain drop-shadow-[0_0_15px_rgba(217,119,6,0.3)] select-none transition-all duration-500 group-hover:scale-105"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lucanus-body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#78350f" />
            <stop offset="60%" stopColor="#451a03" />
            <stop offset="100%" stopColor="#1c0a00" />
          </linearGradient>
        </defs>

        {/* Giant Antler-like Mandibles */}
        <g stroke="#b45309" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Left Antler */}
          <path d="M92 28 C88 12, 75 4, 82 -6 Q86 6 92 12" />
          {/* Antler prongs */}
          <line x1="84" y1="12" x2="92" y2="6" strokeWidth="2.5" />
          <line x1="80" y1="0" x2="88" y2="-2" strokeWidth="2.5" />

          {/* Right Antler */}
          <path d="M108 28 C112 12, 125 4, 118 -6 Q114 6 108 12" />
          <line x1="116" y1="12" x2="108" y2="6" strokeWidth="2.5" />
          <line x1="120" y1="0" x2="112" y2="-2" strokeWidth="2.5" />
        </g>

        {/* Legs */}
        <g stroke="#b45309" strokeWidth="2.8" strokeLinecap="round">
          <path d="M82 48 L60 38 L48 45" />
          <path d="M118 48 L140 38 L152 45" />
          <path d="M80 68 L58 72 L46 80" />
          <path d="M120 68 L142 72 L154 80" />
          <path d="M82 86 L58 98 L48 108" />
          <path d="M118 86 L142 98 L152 108" />
        </g>

        {/* Head */}
        <path d="M88 38 L112 38 L108 26 L92 26 Z" fill="url(#lucanus-body)" stroke="#92400e" strokeWidth="1.5" />
        {/* Geniculate Antennae */}
        <path d="M89 30 L78 22 L70 25" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M111 30 L122 22 L130 25" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />

        {/* Pronotum */}
        <path d="M78 54 L122 54 L114 38 L86 38 Z" fill="url(#lucanus-body)" stroke="#92400e" strokeWidth="1.5" strokeLinejoin="round" />

        {/* Elytra (Mahogany chestnut color) */}
        <path d="M80 56 C78 80, 84 102, 100 112 C116 102, 122 80, 120 56 Z" fill="url(#lucanus-body)" stroke="#d97706" strokeWidth="1.8" />
        <line x1="100" y1="56" x2="100" y2="112" stroke="#d97706" strokeWidth="1.5" />

        <text x="10" y="112" fill="#fbbf24" fontSize="8" fontFamily="monospace" letterSpacing="1" opacity="0.8">LUCANIDAE</text>
        <text x="135" y="20" fill="#d97706" fontSize="6" fontFamily="monospace" opacity="0.7">CIERVO VOLANTE</text>
      </svg>
    </div>
  );
};

/* =========================================================================
   8. CERAMBYCIDAE (Escarabajo Longicornio - Polyphaga)
   ========================================================================= */
export const CerambycidaeImage: React.FC<SvgIconProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full relative flex items-center justify-center p-3 bg-gradient-to-b from-gray-900/50 to-gray-900/90 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full max-h-[175px] object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.3)] select-none transition-all duration-500 group-hover:scale-105"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cerambyx-body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>

        {/* ULTRA-LONG ANTENNAE (characteristic of longhorn beetles) */}
        <g stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" fill="none">
          {/* Left antenna sweeping far backward */}
          <path d="M92 24 C 70 -5, 30 10, 15 45 C 5 70, 10 100, 20 115" />
          {/* Right antenna */}
          <path d="M108 24 C 130 -5, 170 10, 185 45 C 195 70, 190 100, 180 115" />
        </g>
        {/* Antennal tuft nodes (like Rosalia alpina) */}
        {[0.2, 0.4, 0.6, 0.8].map((f, i) => (
          <circle key={`an-l-${i}`} cx={92 - f * 60} cy={24 + f * 40} r="2.5" fill="#0f172a" stroke="#38bdf8" />
        ))}
        {[0.2, 0.4, 0.6, 0.8].map((f, i) => (
          <circle key={`an-r-${i}`} cx={108 + f * 60} cy={24 + f * 40} r="2.5" fill="#0f172a" stroke="#38bdf8" />
        ))}

        {/* Slender legs */}
        <g stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round">
          <path d="M85 45 L62 38 L48 44" />
          <path d="M115 45 L138 38 L152 44" />
          <path d="M83 65 L60 68 L46 76" />
          <path d="M117 65 L140 68 L154 76" />
          <path d="M85 85 L60 96 L48 108" />
          <path d="M115 85 L140 96 L152 108" />
        </g>

        {/* Head */}
        <path d="M92 28 L108 28 L104 18 L96 18 Z" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />

        {/* Pronotum with lateral spine tubercles */}
        <path d="M88 44 L82 36 L88 28 L112 28 L118 36 L112 44 Z" fill="url(#cerambyx-body)" stroke="#38bdf8" strokeWidth="1.5" />

        {/* Elongated Tapering Elytra with Velvety Black Spots */}
        <path d="M86 45 C86 45, 84 80, 89 105 L 100 110 L 111 105 C116 80, 114 45, 114 45 Z" fill="url(#cerambyx-body)" stroke="#38bdf8" strokeWidth="1.5" />
        <line x1="100" y1="45" x2="100" y2="110" stroke="#7dd3fc" strokeWidth="1.2" />

        {/* Rosalia alpina spots */}
        <rect x="88" y="55" width="8" height="6" rx="2" fill="#0f172a" stroke="#f8fafc" strokeWidth="0.8" />
        <rect x="104" y="55" width="8" height="6" rx="2" fill="#0f172a" stroke="#f8fafc" strokeWidth="0.8" />
        <rect x="89" y="80" width="7" height="6" rx="2" fill="#0f172a" stroke="#f8fafc" strokeWidth="0.8" />
        <rect x="104" y="80" width="7" height="6" rx="2" fill="#0f172a" stroke="#f8fafc" strokeWidth="0.8" />

        <text x="10" y="112" fill="#38bdf8" fontSize="8" fontFamily="monospace" letterSpacing="1" opacity="0.8">CERAMBYCIDAE</text>
        <text x="130" y="20" fill="#0284c7" fontSize="6" fontFamily="monospace" opacity="0.7">LONGICORNIO (ANTENAS)</text>
      </svg>
    </div>
  );
};

/* =========================================================================
   9. CURCULIONIDAE (Gorgojo / Picudo - Polyphaga)
   ========================================================================= */
export const CurculionidaeImage: React.FC<SvgIconProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full relative flex items-center justify-center p-3 bg-gradient-to-b from-gray-900/50 to-gray-900/90 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full max-h-[175px] object-contain drop-shadow-[0_0_15px_rgba(239,68,68,0.3)] select-none transition-all duration-500 group-hover:scale-105"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="weevil-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="60%" stopColor="#991b1b" />
            <stop offset="100%" stopColor="#450a0a" />
          </linearGradient>
        </defs>

        {/* Legs with clinging claws */}
        <g stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round">
          <path d="M84 52 L62 45 L52 50" />
          <path d="M116 52 L138 45 L148 50" />
          <path d="M82 68 L60 72 L50 78" />
          <path d="M118 68 L140 72 L150 78" />
          <path d="M84 88 L60 98 L50 106" />
          <path d="M116 88 L140 98 L150 106" />
        </g>

        {/* PROMINENT ROSTRUM / SNOUT (Elongated beak) */}
        <path d="M98 32 L97 2 C97 0, 103 0, 103 2 L102 32 Z" fill="#7f1d1d" stroke="#f87171" strokeWidth="1.2" />
        {/* Mouthparts at tip of snout */}
        <circle cx="100" cy="1" r="1.5" fill="#facc15" />

        {/* Geniculate (Elbowed) Antennae inserted along the snout */}
        {/* Left elbowed antenna */}
        <path d="M98 12 L84 6 L76 12" stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="76" cy="12" r="2" fill="#ef4444" />
        {/* Right elbowed antenna */}
        <path d="M102 12 L116 6 L124 12" stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="124" cy="12" r="2" fill="#ef4444" />

        {/* Head */}
        <path d="M92 34 L108 34 L105 28 L95 28 Z" fill="url(#weevil-grad)" stroke="#991b1b" strokeWidth="1" />
        <circle cx="94" cy="30" r="1.5" fill="#f87171" />
        <circle cx="106" cy="30" r="1.5" fill="#f87171" />

        {/* Pronotum */}
        <path d="M86 50 L114 50 L110 34 L90 34 Z" fill="url(#weevil-grad)" stroke="#991b1b" strokeWidth="1.2" />

        {/* Pear-shaped / Oval compact Elytra */}
        <path d="M84 52 C84 52, 75 75, 84 98 C90 108, 100 110, 100 110 C100 110, 110 108, 116 98 C125 75, 116 52, 116 52 Z" fill="url(#weevil-grad)" stroke="#ef4444" strokeWidth="1.5" />
        <line x1="100" y1="52" x2="100" y2="110" stroke="#f87171" strokeWidth="1.2" />

        {/* Longitudinal Punctured Striae */}
        <line x1="92" y1="55" x2="90" y2="98" stroke="#7f1d1d" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="108" y1="55" x2="110" y2="98" stroke="#7f1d1d" strokeWidth="1" strokeDasharray="2 2" />

        <text x="10" y="112" fill="#f87171" fontSize="8" fontFamily="monospace" letterSpacing="1" opacity="0.8">CURCULIONIDAE</text>
        <text x="125" y="20" fill="#dc2626" fontSize="6" fontFamily="monospace" opacity="0.7">GORGOJO (ROSTRO / PICO)</text>
      </svg>
    </div>
  );
};

/* =========================================================================
   10. LAMPYRIDAE (Luciérnaga Bioluminiscente - Polyphaga)
   ========================================================================= */
export const LampyridaeImage: React.FC<SvgIconProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full relative flex items-center justify-center p-3 bg-gradient-to-b from-gray-900/50 to-gray-900/90 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full max-h-[175px] object-contain drop-shadow-[0_0_20px_rgba(250,204,21,0.4)] select-none transition-all duration-500 group-hover:scale-105"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="lampyrid-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#facc15" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#facc15" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Bioluminescent abdominal glow halo */}
        <circle cx="100" cy="100" r="30" fill="url(#lampyrid-glow)" />

        {/* Legs */}
        <g stroke="#ca8a04" strokeWidth="2.2" strokeLinecap="round">
          <path d="M86 46 L65 38 L55 42" />
          <path d="M114 46 L135 38 L145 42" />
          <path d="M84 65 L62 68 L52 75" />
          <path d="M116 65 L138 68 L148 75" />
          <path d="M85 84 L64 92 L54 100" />
          <path d="M115 84 L136 92 L146 100" />
        </g>

        {/* Small head hidden almost completely beneath pronotum */}
        <ellipse cx="100" cy="30" rx="6" ry="4" fill="#0f172a" stroke="#ca8a04" />
        {/* Antennae */}
        <path d="M96 28 L82 18" stroke="#fde047" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M104 28 L118 18" stroke="#fde047" strokeWidth="1.5" strokeLinecap="round" />

        {/* Broad Shield Pronotum with reddish-yellow margins */}
        <path d="M80 44 C80 26, 120 26, 120 44 Z" fill="#0f172a" stroke="#eab308" strokeWidth="1.8" />
        <ellipse cx="88" cy="36" rx="3" ry="5" fill="#eab308" />
        <ellipse cx="112" cy="36" rx="3" ry="5" fill="#eab308" />

        {/* Soft, Flexible Elongated Elytra */}
        <path d="M84 46 C84 46, 82 72, 85 96 L 100 98 L 115 96 C118 72, 116 46, 116 46 Z" fill="#1e293b" stroke="#ca8a04" strokeWidth="1.2" />
        <line x1="100" y1="46" x2="100" y2="98" stroke="#ca8a04" strokeWidth="1" />

        {/* BIOLUMINESCENT ABDOMINAL LANTERN (Luciferin organ) */}
        <polygon points="86,96 114,96 108,110 92,110" fill="#facc15" stroke="#fef08a" strokeWidth="1.5" />
        <text x="100" y="106" textAnchor="middle" fill="#000" fontSize="6" fontWeight="bold">LUCIFERINA</text>

        <text x="10" y="112" fill="#facc15" fontSize="8" fontFamily="monospace" letterSpacing="1" opacity="0.9">LAMPYRIDAE</text>
        <text x="135" y="20" fill="#eab308" fontSize="6" fontFamily="monospace" opacity="0.8">LUCIÉRNAGA (LUZ)</text>
      </svg>
    </div>
  );
};

/* =========================================================================
   11. BUPRESTIDAE (Escarabajo Joya - Polyphaga)
   ========================================================================= */
export const BuprestidaeImage: React.FC<SvgIconProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full relative flex items-center justify-center p-3 bg-gradient-to-b from-gray-900/50 to-gray-900/90 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full max-h-[175px] object-contain drop-shadow-[0_0_20px_rgba(20,184,166,0.4)] select-none transition-all duration-500 group-hover:scale-105"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="jewel-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="35%" stopColor="#06b6d4" />
            <stop offset="70%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        {/* Sleek metallic legs */}
        <g stroke="#22d3ee" strokeWidth="2.2" strokeLinecap="round">
          <path d="M85 45 L62 36 L52 40" />
          <path d="M115 45 L138 36 L148 40" />
          <path d="M83 62 L60 65 L48 72" />
          <path d="M117 62 L140 65 L152 72" />
          <path d="M85 82 L60 94 L50 104" />
          <path d="M115 82 L140 94 L150 104" />
        </g>

        {/* Short Serrated Antennae */}
        <path d="M92 24 L80 16" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="1 2" />
        <path d="M108 24 L120 16" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="1 2" />

        {/* Head embedded in prothorax */}
        <path d="M92 28 L108 28 L105 18 L95 18 Z" fill="url(#jewel-grad)" stroke="#67e8f9" strokeWidth="1" />

        {/* Trapezoidal Pronotum */}
        <path d="M84 44 L116 44 L110 28 L90 28 Z" fill="url(#jewel-grad)" stroke="#67e8f9" strokeWidth="1.5" strokeLinejoin="round" />

        {/* Acuminate Metallic Jewel Elytra (Tapering to a sharp rear point) */}
        <path d="M84 45 C84 45, 80 75, 88 98 L 100 114 L 112 98 C120 75, 116 45, 116 45 Z" fill="url(#jewel-grad)" stroke="#67e8f9" strokeWidth="1.8" />
        <line x1="100" y1="45" x2="100" y2="114" stroke="#a5f3fc" strokeWidth="1.5" />

        {/* Iridescent shimmer lines */}
        <path d="M90 50 Q86 78 94 98" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <path d="M110 50 Q114 78 106 98" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

        <text x="10" y="112" fill="#2dd4bf" fontSize="8" fontFamily="monospace" letterSpacing="1" opacity="0.9">BUPRESTIDAE</text>
        <text x="135" y="20" fill="#06b6d4" fontSize="6" fontFamily="monospace" opacity="0.8">ESCARABAJO JOYA</text>
      </svg>
    </div>
  );
};

/* =========================================================================
   12. STAPHYLINIDAE (Estafilínido / Alas Cortas - Polyphaga)
   ========================================================================= */
export const StaphylinidaeImage: React.FC<SvgIconProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full relative flex items-center justify-center p-3 bg-gradient-to-b from-gray-900/50 to-gray-900/90 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full max-h-[175px] object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.3)] select-none transition-all duration-500 group-hover:scale-105"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Legs */}
        <g stroke="#f97316" strokeWidth="2.2" strokeLinecap="round">
          <path d="M88 42 L65 34 L52 38" />
          <path d="M112 42 L135 34 L148 38" />
          <path d="M88 56 L64 58 L52 64" />
          <path d="M112 56 L136 58 L148 64" />
          <path d="M88 70 L65 78 L54 86" />
          <path d="M112 70 L135 78 L146 86" />
        </g>

        {/* Head with protruding sharp mandibles */}
        <path d="M94 14 L88 6" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M106 14 L112 6" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M90 26 L110 26 L106 14 L94 14 Z" fill="#1e293b" stroke="#f97316" strokeWidth="1.2" />

        {/* Quadrate Pronotum */}
        <rect x="89" y="27" width="22" height="18" rx="2" fill="#c2410c" stroke="#fb923c" strokeWidth="1.2" />

        {/* EXTREMELY SHORT ELYTRA (covers only first 2 abdominal segments) */}
        <rect x="88" y="46" width="11" height="15" rx="1" fill="#1e293b" stroke="#f97316" strokeWidth="1.2" />
        <rect x="101" y="46" width="11" height="15" rx="1" fill="#1e293b" stroke="#f97316" strokeWidth="1.2" />

        {/* Long, Exposed, Flexible Abdominal Segments (6-7 segments free) */}
        {[62, 71, 80, 89, 98, 107].map((y, i) => (
          <rect key={`staph-seg-${i}`} x="90" y={y} width="20" height="8" rx="1.5" fill="#431407" stroke="#fb923c" strokeWidth="1" />
        ))}
        {/* Cerci at tail apex */}
        <line x1="93" y1="115" x2="88" y2="120" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="107" y1="115" x2="112" y2="120" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" />

        <text x="10" y="112" fill="#fb923c" fontSize="8" fontFamily="monospace" letterSpacing="1" opacity="0.9">STAPHYLINIDAE</text>
        <text x="130" y="20" fill="#ea580c" fontSize="6" fontFamily="monospace" opacity="0.8">ÉLITROS TRUNCADOS</text>
      </svg>
    </div>
  );
};
