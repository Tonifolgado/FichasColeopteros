import React, { useState } from 'react';
import Header from './components/Header';
import ClassificationCard from './components/ClassificationCard';
import { BEETLE_SUBORDERS } from './constants';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSuborders = BEETLE_SUBORDERS.filter((suborder) =>
    suborder.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 font-sans relative overflow-hidden">
      {/* Background decorative blobs */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-teal-400/20 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-sky-500/10 rounded-full filter blur-3xl opacity-60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <main className="mt-12">
          {filteredSuborders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {filteredSuborders.map((suborder) => (
                <ClassificationCard key={suborder.name} suborder={suborder} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No se encontraron subórdenes que coincidan con "{searchTerm}".</p>
              <p className="text-gray-500 text-sm mt-2">Intenta con otro término de búsqueda.</p>
            </div>
          )}
        </main>
        <footer className="text-center mt-16 text-gray-500 text-sm">
          <p>Creado con React y Tailwind CSS. Datos sobre la clasificación de Coleoptera.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;