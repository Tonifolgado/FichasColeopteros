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

interface HeaderProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <header className="text-center">
        <div className="flex justify-center items-center gap-4 mb-4">
            <BeetleIcon className="w-12 h-12 text-teal-400" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-sky-400">
                Clasificación de Coleópteros
            </h1>
        </div>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
        Explora los cuatro subórdenes principales de escarabajos, el orden de insectos más diverso del planeta.
      </p>
      <div className="max-w-xl mx-auto">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="search"
            name="search"
            id="search"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="block w-full rounded-md border-0 bg-gray-800/70 py-3 pl-10 pr-3 text-gray-200 ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-400 sm:text-sm sm:leading-6 transition-all"
            placeholder="Buscar por nombre, familia o descripción..."
            aria-label="Buscar suborden, familia o descripción de coleópteros"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;