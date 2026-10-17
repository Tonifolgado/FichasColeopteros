import React, { useState } from 'react';
import Header, { SectionType } from './components/Header';
import ClassificationCard from './components/ClassificationCard';
import FamilyGallery from './components/FamilyGallery';
import AnatomyDiagram from './components/AnatomyDiagram';
import MorphologyComparison from './components/MorphologyComparison';
import { BEETLE_SUBORDERS } from './constants';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState<SectionType>('suborders');

  const filteredSuborders = BEETLE_SUBORDERS.filter((suborder) =>
    suborder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    suborder.families.some((f) => f.toLowerCase().includes(searchTerm.toLowerCase())) ||
    suborder.commonExamples.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans relative overflow-hidden">
      {/* Background decorative glows */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[34rem] h-[34rem] bg-teal-500/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-sky-500/10 rounded-full filter blur-[130px]"></div>
        <div className="absolute -bottom-32 left-1/4 w-[36rem] h-[36rem] bg-cyan-600/10 rounded-full filter blur-[140px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-10 max-w-7xl">
        <Header
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* Quick Biological Fact Banner */}
        <div className="mt-8 mb-8 p-4 bg-gray-900/60 backdrop-blur-md rounded-2xl border border-gray-800 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-gray-300">
              <strong className="text-white">Orden Coleoptera:</strong> Más de 400.000 especies descritas (1 de cada 4 animales conocidos en la Tierra).
            </span>
          </div>

          <div className="flex items-center gap-4 text-gray-400 font-mono text-[11px]">
            <span>4 Subórdenes</span>
            <span className="text-gray-700">|</span>
            <span>14 Familias Ilustradas</span>
            <span className="text-gray-700">|</span>
            <span>Élitros protectores</span>
          </div>
        </div>

        {/* Dynamic Section Rendering */}
        <main className="mt-4">
          {activeSection === 'suborders' && (
            <div>
              {filteredSuborders.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {filteredSuborders.map((suborder) => (
                    <ClassificationCard key={suborder.name} suborder={suborder} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-gray-900/40 rounded-2xl border border-gray-800">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center text-gray-400">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-lg font-semibold">
                    No se encontraron subórdenes para "{searchTerm}"
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Prueba buscando por nombre ("Adephaga", "Polyphaga") o por familia ("Carabidae", "Scarabaeidae").
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="mt-4 px-4 py-2 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-semibold hover:bg-teal-500/30 transition-all"
                  >
                    Limpiar búsqueda
                  </button>
                </div>
              )}
            </div>
          )}

          {activeSection === 'families' && (
            <div className="animate-in fade-in duration-300">
              <FamilyGallery />
            </div>
          )}

          {activeSection === 'anatomy' && (
            <div className="animate-in fade-in duration-300">
              <AnatomyDiagram />
            </div>
          )}

          {activeSection === 'morphology' && (
            <div className="animate-in fade-in duration-300">
              <MorphologyComparison />
            </div>
          )}
        </main>

        {/* Global Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-800/80 text-center text-gray-500 text-xs space-y-2">
          <p className="text-gray-400">
            Atlas Científico de Entomología: Clasificación, Morfología y Anatomía de Coleoptera.
          </p>
          <p className="text-[11px] text-gray-600">
            Diseñado con diagramas vectoriales interactivos SVG y Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;