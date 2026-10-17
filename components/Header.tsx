import React from 'react';

const BeetleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12 2c-4.42 0-8 3.58-8 8v1.5c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-1.5c0-2.21 1.79-4 4-4s4 1.79 4 4v1.5c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5V10c0-4.42-3.58-8-8-8zM7 15.5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2V20c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-4.5zm2.5-4h5c.28 0 .5.22.5.5s-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zM5 14h.5v6H5c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2zm14 0h-.5v6H19c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2z"></path>
  </svg>
);

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
      clipRule="evenodd"
    />
  </svg>
);

export type SectionType = 'suborders' | 'families' | 'anatomy' | 'morphology';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  activeSection: SectionType;
  onSectionChange: (section: SectionType) => void;
}

const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onSearchChange,
  activeSection,
  onSectionChange,
}) => {
  return (
    <header className="text-center">
      <div className="flex justify-center items-center gap-3.5 mb-3">
        <div className="p-2.5 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
          <BeetleIcon className="w-9 h-9" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-cyan-400 tracking-tight">
          Coleoptera: Clasificación y Anatomía
        </h1>
      </div>

      <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-7 leading-relaxed">
        Guía científica visual de los 4 subórdenes y familias de escarabajos con diagramas interactivos de anatomía, morfología comparada y especímenes ilustrados.
      </p>

      {/* Navigation Pills Bar */}
      <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-gray-950/80 border border-gray-800 shadow-xl gap-1.5 mb-6">
        <button
          onClick={() => onSectionChange('suborders')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeSection === 'suborders'
              ? 'bg-teal-500 text-gray-950 shadow-md font-bold'
              : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          Subórdenes (4)
        </button>

        <button
          onClick={() => onSectionChange('families')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeSection === 'families'
              ? 'bg-teal-500 text-gray-950 shadow-md font-bold'
              : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Familias Ilustradas (14)
        </button>

        <button
          onClick={() => onSectionChange('anatomy')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeSection === 'anatomy'
              ? 'bg-teal-500 text-gray-950 shadow-md font-bold'
              : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          Atlas Anatómico Interactivo
        </button>

        <button
          onClick={() => onSectionChange('morphology')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeSection === 'morphology'
              ? 'bg-teal-500 text-gray-950 shadow-md font-bold'
              : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Morfología Comparada
        </button>
      </div>

      {/* Search Input (Displayed primarily when searching in suborders) */}
      {activeSection === 'suborders' && (
        <div className="max-w-xl mx-auto animate-in fade-in duration-300">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="search"
              name="search"
              id="search"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="block w-full rounded-xl border-0 bg-gray-800/70 py-3 pl-10 pr-4 text-gray-200 ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-400 sm:text-sm transition-all"
              placeholder="Buscar por suborden (ej. Adephaga, Polyphaga, familias)..."
              aria-label="Buscar suborden de coleópteros"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;