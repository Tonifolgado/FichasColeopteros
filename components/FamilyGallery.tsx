import React, { useState } from 'react';
import { FAMILIES_DATA } from '../constants';
import { BeetleFamily } from '../types';

export const FamilyGallery: React.FC = () => {
  const [selectedSuborder, setSelectedSuborder] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFamily, setSelectedFamily] = useState<BeetleFamily | null>(null);

  const suborderFilters = [
    { id: 'all', label: 'Todas las Familias', count: FAMILIES_DATA.length },
    { id: 'Adephaga', label: 'Adephaga (4)', count: FAMILIES_DATA.filter(f => f.suborder === 'Adephaga').length },
    { id: 'Polyphaga', label: 'Polyphaga (8)', count: FAMILIES_DATA.filter(f => f.suborder === 'Polyphaga').length },
    { id: 'Archostemata', label: 'Archostemata (1)', count: FAMILIES_DATA.filter(f => f.suborder === 'Archostemata').length },
    { id: 'Myxophaga', label: 'Myxophaga (1)', count: FAMILIES_DATA.filter(f => f.suborder === 'Myxophaga').length },
  ];

  const filteredFamilies = FAMILIES_DATA.filter((family) => {
    const matchesSuborder = selectedSuborder === 'all' || family.suborder === selectedSuborder;
    const matchesSearch =
      family.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      family.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      family.speciesExample.toLowerCase().includes(searchQuery.toLowerCase()) ||
      family.distinctiveFeature.toLowerCase().includes(searchQuery.toLowerCase()) ||
      family.diet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSuborder && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Banner & Intro */}
      <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-800 p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/30 mb-2">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              Atlas de Biodiversidad Entomológica
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Familias Representativas de Coleópteros
            </h2>
            <p className="text-sm text-gray-300 mt-1 max-w-2xl">
              Explora dibujos anatómicos y fichas taxonómicas de las familias más icónicas y diversas de los cuatro subórdenes.
            </p>
          </div>

          {/* Search box inside gallery */}
          <div className="w-full md:w-72">
            <div className="relative">
              <input
                type="text"
                placeholder="Filtrar por familia o rasgo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-950/90 text-xs sm:text-sm text-gray-200 placeholder-gray-500 rounded-xl px-4 py-2.5 pl-9 border border-gray-700 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-2.5 text-gray-400 hover:text-white text-xs">
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-6">
          {suborderFilters.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedSuborder(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedSuborder === tab.id
                  ? 'bg-teal-500 text-gray-950 font-bold shadow-md'
                  : 'bg-gray-950/60 text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Illustrated Families */}
      {filteredFamilies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFamilies.map((family) => {
            const FamilyImageComponent = family.component;
            return (
              <div
                key={family.id}
                className="group bg-gray-900/70 backdrop-blur-md rounded-2xl border border-gray-800 hover:border-teal-400/70 shadow-lg overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-cyan-500/10 hover:-translate-y-1"
              >
                <div>
                  {/* Family Illustration Canvas */}
                  <div className="w-full h-48 bg-gray-950 relative border-b border-gray-800/80 overflow-hidden">
                    <FamilyImageComponent />
                    
                    {/* Suborder Pill Badge */}
                    <div className="absolute top-2.5 left-3">
                      <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full font-bold border backdrop-blur-md ${
                        family.suborder === 'Adephaga'
                          ? 'bg-teal-500/20 text-teal-300 border-teal-500/40'
                          : family.suborder === 'Polyphaga'
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : family.suborder === 'Archostemata'
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                          : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      }`}>
                        {family.suborder}
                      </span>
                    </div>

                    {/* Diversity counter */}
                    <div className="absolute top-2.5 right-3 text-[10px] font-mono text-gray-400 bg-gray-950/80 px-2 py-0.5 rounded border border-gray-800">
                      {family.diversity}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                        {family.name}
                      </h3>
                      <p className="text-xs text-teal-400 font-medium mt-0.5">
                        {family.commonName}
                      </p>
                    </div>

                    {/* Specimen example */}
                    <div className="text-xs text-gray-400 mb-3 bg-gray-950/50 p-2 rounded-lg border border-gray-800/70">
                      <span className="text-gray-500 text-[11px] block">Especie representativa:</span>
                      <span className="italic text-gray-200 font-medium">{family.speciesExample}</span>
                    </div>

                    {/* Distinctive Feature */}
                    <p className="text-xs text-gray-300 leading-relaxed mb-4">
                      {family.distinctiveFeature}
                    </p>

                    {/* Quick Specs Badges */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] pt-3 border-t border-gray-800/80">
                      <div>
                        <span className="text-gray-500 block text-[10px] uppercase font-mono">Antenas:</span>
                        <span className="text-gray-300 font-medium truncate block">{family.antennaeType}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block text-[10px] uppercase font-mono">Dieta:</span>
                        <span className="text-gray-300 font-medium truncate block">{family.diet.split(' ')[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => setSelectedFamily(family)}
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gray-800/80 hover:bg-teal-500 hover:text-gray-950 text-teal-300 text-xs font-semibold border border-gray-700/80 transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Ver Ficha Biológica Completa</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-900/40 rounded-2xl border border-gray-800">
          <p className="text-gray-400 text-base">No se encontraron familias que coincidan con "{searchQuery}".</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedSuborder('all'); }}
            className="mt-3 px-4 py-1.5 rounded-lg bg-teal-500/20 text-teal-300 text-xs font-semibold hover:bg-teal-500/30"
          >
            Restablecer filtros
          </button>
        </div>
      )}

      {/* Modal Detail View for Selected Family */}
      {selectedFamily && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedFamily(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-lg bg-gray-800 hover:bg-gray-700"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-mono uppercase px-2.5 py-1 rounded font-bold border ${
                selectedFamily.suborder === 'Adephaga'
                  ? 'bg-teal-500/20 text-teal-300 border-teal-500/40'
                  : selectedFamily.suborder === 'Polyphaga'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : selectedFamily.suborder === 'Archostemata'
                  ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                  : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
              }`}>
                Suborden {selectedFamily.suborder}
              </span>
              <span className="text-xs font-mono text-gray-400">
                {selectedFamily.diversity}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Familia {selectedFamily.name}
            </h3>
            <p className="text-teal-400 font-medium text-sm mb-4">
              {selectedFamily.commonName}
            </p>

            {/* Illustration Display inside modal */}
            <div className="w-full h-56 bg-gray-950 rounded-xl overflow-hidden border border-gray-800 mb-6">
              {React.createElement(selectedFamily.component)}
            </div>

            {/* Details */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-3.5 bg-gray-950/60 rounded-xl border border-gray-800">
                <h5 className="font-bold text-sky-300 text-xs uppercase mb-1">Especie Ilustrada de Referencia:</h5>
                <p className="italic text-gray-200 font-semibold">{selectedFamily.speciesExample}</p>
              </div>

              <div className="space-y-1.5">
                <h5 className="font-bold text-teal-300 text-xs uppercase">Diagnosis Morfológica y Anatómica:</h5>
                <p className="text-gray-300 leading-relaxed">{selectedFamily.distinctiveFeature}</p>
              </div>

              <div className="space-y-1.5">
                <h5 className="font-bold text-teal-300 text-xs uppercase">Biología y Ecología:</h5>
                <p className="text-gray-300 leading-relaxed">{selectedFamily.biology}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-gray-950/80 rounded-xl border border-gray-800">
                  <span className="text-[10px] text-gray-400 uppercase font-mono block">Antenas:</span>
                  <span className="text-gray-200 text-xs font-medium">{selectedFamily.antennaeType}</span>
                </div>
                <div className="p-3 bg-gray-950/80 rounded-xl border border-gray-800">
                  <span className="text-[10px] text-gray-400 uppercase font-mono block">Régimen Trófico:</span>
                  <span className="text-gray-200 text-xs font-medium">{selectedFamily.diet}</span>
                </div>
                <div className="p-3 bg-gray-950/80 rounded-xl border border-gray-800">
                  <span className="text-[10px] text-gray-400 uppercase font-mono block">Hábitat:</span>
                  <span className="text-gray-200 text-xs font-medium">{selectedFamily.habitat}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800 flex justify-end">
              <button
                onClick={() => setSelectedFamily(null)}
                className="px-5 py-2 rounded-xl bg-teal-500 text-gray-950 font-bold text-xs hover:bg-teal-400 transition-colors"
              >
                Cerrar Ficha
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FamilyGallery;
