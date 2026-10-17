import React, { useState, useEffect } from 'react';
import { BeetleSuborder } from '../types';

interface ClassificationCardProps {
  suborder: BeetleSuborder;
}

const ClassificationCard: React.FC<ClassificationCardProps> = ({ suborder }) => {
  const [selectedSpecimenIdx, setSelectedSpecimenIdx] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const specimens = suborder.specimens || [];
  const activeSpecimen = specimens[selectedSpecimenIdx] || null;
  const ActiveImageComponent = activeSpecimen ? activeSpecimen.component : suborder.imageComponent;

  // Trigger skeleton loader on mount and when changing specimen view
  useEffect(() => {
    setIsImageLoaded(false);
    const timer = setTimeout(() => {
      setIsImageLoaded(true);
    }, 380);
    return () => clearTimeout(timer);
  }, [selectedSpecimenIdx, suborder.name]);

  return (
    <div className="group bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-cyan-500/20 hover:scale-[1.01] border border-gray-800 hover:border-teal-400/80 flex flex-col justify-between">
      {/* Top Image & Specimen Switcher Area */}
      <div>
        <div className="w-full h-64 bg-gray-950 relative border-b border-gray-800 overflow-hidden">
          {/* Skeleton Loader */}
          {!isImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-950/90 animate-pulse z-20">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                <svg className="w-8 h-8 text-teal-400 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            </div>
          )}

          {/* Actual Illustrated Component */}
          <div className={`w-full h-full transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <ActiveImageComponent />
          </div>

          {/* Suborder badge watermark */}
          <div className="absolute top-2.5 left-3 z-10">
            <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30 backdrop-blur-md">
              Suborden {suborder.name}
            </span>
          </div>

          {/* Specimen selector chips in image canvas */}
          {specimens.length > 1 && (
            <div className="absolute top-2.5 right-3 z-30 max-w-[70%] flex items-center gap-1 overflow-x-auto p-1 rounded-xl bg-gray-950/85 backdrop-blur-md border border-gray-800 scrollbar-none shadow-lg">
              {specimens.map((specimen, idx) => (
                <button
                  key={specimen.name}
                  onClick={() => setSelectedSpecimenIdx(idx)}
                  className={`px-2 py-0.5 rounded-lg text-[10px] font-mono whitespace-nowrap transition-all ${
                    selectedSpecimenIdx === idx
                      ? 'bg-teal-500 text-gray-950 font-bold shadow-sm'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                  title={`${specimen.name} (${specimen.family})`}
                >
                  {specimen.family}
                </button>
              ))}
            </div>
          )}

          {/* Specimen Name Tag Overlay */}
          {activeSpecimen && (
            <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between text-xs bg-gray-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gray-800/80">
              <div className="truncate mr-2">
                <span className="font-semibold text-gray-100">{activeSpecimen.name}</span>
                <span className="text-gray-400 italic text-[11px] ml-1.5">({activeSpecimen.scientificName})</span>
              </div>
              <span className="text-[10px] font-mono text-teal-400 shrink-0 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                {activeSpecimen.family}
              </span>
            </div>
          )}
        </div>

        {/* Card Body Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-extrabold text-teal-300 tracking-tight">
              {suborder.name}
            </h2>
            <span className="text-xs font-mono text-gray-400">
              {specimens.length} familias ilustradas
            </span>
          </div>

          <p className="text-gray-300 mb-5 text-sm leading-relaxed">
            {suborder.description}
          </p>

          {/* Morphological Quick-Scan Badge Grid */}
          <div className="grid grid-cols-2 gap-2 mb-6 p-3 bg-gray-950/70 rounded-xl border border-gray-800/80 text-xs">
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-mono text-gray-400">Tipo de Antenas:</span>
              <p className="font-medium text-sky-300 truncate">{suborder.morphologySummary.antennaeType}</p>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-mono text-gray-400">Articulación Coxal:</span>
              <p className="font-medium text-teal-300 truncate">{suborder.morphologySummary.coxaeRelation}</p>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-mono text-gray-400">Plegado Alar:</span>
              <p className="font-medium text-amber-300 truncate">{suborder.morphologySummary.wingFolding}</p>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-mono text-gray-400">Régimen Trófico:</span>
              <p className="font-medium text-emerald-300 truncate">{suborder.morphologySummary.dietHabit}</p>
            </div>
          </div>

          {/* Characteristics list */}
          <div className="border-t border-gray-800 pt-5 space-y-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-300 mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Características Clave:
              </h3>
              <ul className="space-y-2.5">
                {suborder.characteristics.map((char, index) => (
                  <li key={index} className="flex items-start text-gray-300 text-xs sm:text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 mr-2.5 flex-shrink-0"></span>
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Families with Interactive Quick Switcher Pills */}
            <div className="pt-2 text-xs space-y-2">
              <div className="bg-gray-950/60 p-3 rounded-xl border border-gray-800">
                <span className="text-gray-400 text-xs font-semibold block mb-2">
                  Familias del suborden (haz clic para visualizar espécimen):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {suborder.families.map((fam) => {
                    const specimenIndex = specimens.findIndex((s) => s.family.toLowerCase().includes(fam.toLowerCase()));
                    const isIllustrated = specimenIndex !== -1;
                    const isSelected = isIllustrated && selectedSpecimenIdx === specimenIndex;

                    return (
                      <button
                        key={fam}
                        onClick={() => {
                          if (isIllustrated) {
                            setSelectedSpecimenIdx(specimenIndex);
                          }
                        }}
                        disabled={!isIllustrated}
                        className={`text-[11px] px-2 py-0.5 rounded-md border transition-all ${
                          isSelected
                            ? 'bg-teal-500 text-gray-950 border-teal-400 font-bold'
                            : isIllustrated
                            ? 'bg-gray-800 text-teal-300 border-gray-700 hover:border-teal-400/50 hover:bg-gray-700 cursor-pointer'
                            : 'bg-gray-900/60 text-gray-500 border-gray-800/80 cursor-default'
                        }`}
                      >
                        {fam} {isIllustrated ? '👁️' : ''}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gray-950/40 p-2.5 rounded-lg border border-gray-800/80">
                <strong className="text-sky-300">Ejemplos comunes:</strong>{' '}
                <span className="text-gray-400">{suborder.commonExamples}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Anatomical Details Button & Drawer */}
      <div className="px-6 pb-6 pt-2">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-gray-950 hover:bg-gray-900 text-xs font-semibold text-teal-300 border border-gray-800 hover:border-teal-400/50 transition-all focus:outline-none"
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            {showDetails ? 'Ocultar diagnosis anatómica avanzada' : 'Ver diagnosis anatómica avanzada'}
          </span>
          <svg className={`w-4 h-4 text-teal-400 transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showDetails ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
          <div className="p-4 bg-gray-950/90 rounded-xl border border-teal-500/20 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300">
              Criterios Anatómicos para Entomología:
            </h4>
            <ul className="space-y-2">
              {suborder.detailedCharacteristics.map((char, index) => (
                <li key={index} className="flex items-start text-gray-300 text-xs leading-relaxed">
                  <svg className="w-3.5 h-3.5 text-teal-400 mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{char}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassificationCard;