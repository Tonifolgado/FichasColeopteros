import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { BeetleSuborder } from '../types';

interface ClassificationCardProps {
  suborder: BeetleSuborder;
  onFamilyClick: (family: string) => void;
}

const COLOR_MAP: Record<BeetleSuborder['color'], {
  title: string;
  badge: string;
  badgeHover: string;
  bullet: string;
  sectionTitle: string;
  cardBorder: string;
  cardShadow: string;
  imageHover: string;
  button: string;
  factBorder: string;
  chevron: string;
}> = {
  amber: {
    title: 'text-amber-300',
    badge: 'bg-amber-900/50 text-amber-300',
    badgeHover: 'hover:bg-amber-700/60',
    bullet: 'text-amber-400',
    sectionTitle: 'text-amber-200',
    cardBorder: 'hover:border-amber-400',
    cardShadow: 'hover:shadow-amber-500/30',
    imageHover: 'group-hover:text-amber-300',
    button: 'bg-amber-900/40 text-amber-200 hover:bg-amber-800/60 border border-amber-700/50',
    factBorder: 'border-amber-700/50',
    chevron: 'text-amber-400',
  },
  emerald: {
    title: 'text-emerald-300',
    badge: 'bg-emerald-900/50 text-emerald-300',
    badgeHover: 'hover:bg-emerald-700/60',
    bullet: 'text-emerald-400',
    sectionTitle: 'text-emerald-200',
    cardBorder: 'hover:border-emerald-400',
    cardShadow: 'hover:shadow-emerald-500/30',
    imageHover: 'group-hover:text-emerald-300',
    button: 'bg-emerald-900/40 text-emerald-200 hover:bg-emerald-800/60 border border-emerald-700/50',
    factBorder: 'border-emerald-700/50',
    chevron: 'text-emerald-400',
  },
  violet: {
    title: 'text-violet-300',
    badge: 'bg-violet-900/50 text-violet-300',
    badgeHover: 'hover:bg-violet-700/60',
    bullet: 'text-violet-400',
    sectionTitle: 'text-violet-200',
    cardBorder: 'hover:border-violet-400',
    cardShadow: 'hover:shadow-violet-500/30',
    imageHover: 'group-hover:text-violet-300',
    button: 'bg-violet-900/40 text-violet-200 hover:bg-violet-800/60 border border-violet-700/50',
    factBorder: 'border-violet-700/50',
    chevron: 'text-violet-400',
  },
  cyan: {
    title: 'text-cyan-300',
    badge: 'bg-cyan-900/50 text-cyan-300',
    badgeHover: 'hover:bg-cyan-700/60',
    bullet: 'text-cyan-400',
    sectionTitle: 'text-cyan-200',
    cardBorder: 'hover:border-cyan-400',
    cardShadow: 'hover:shadow-cyan-500/30',
    imageHover: 'group-hover:text-cyan-300',
    button: 'bg-cyan-900/40 text-cyan-200 hover:bg-cyan-800/60 border border-cyan-700/50',
    factBorder: 'border-cyan-700/50',
    chevron: 'text-cyan-400',
  },
};

const ClassificationCard: React.FC<ClassificationCardProps> = ({ suborder, onFamilyClick }) => {
  const ImageComponent = suborder.imageComponent;
  const colors = COLOR_MAP[suborder.color];

  const [isCharExpanded, setIsCharExpanded] = useState(true);
  const [aiFact, setAiFact] = useState<string | null>(null);
  const [isLoadingFact, setIsLoadingFact] = useState(false);
  const [factError, setFactError] = useState<string | null>(null);

  const handleGenerateFact = async () => {
    setIsLoadingFact(true);
    setAiFact(null);
    setFactError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: `Genera un dato curioso breve (2-3 oraciones) sobre el suborden de coleópteros ${suborder.name}, en español.`,
      });
      setAiFact(response.text ?? 'No se pudo obtener el dato.');
    } catch {
      setFactError('No se pudo conectar con la IA. Inténtalo de nuevo.');
    } finally {
      setIsLoadingFact(false);
    }
  };

  return (
    <div className={`group bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${colors.cardShadow} hover:scale-[1.02] border border-gray-700/50 ${colors.cardBorder}`}>
      <div className="w-full h-56 bg-gray-900/30">
        <ImageComponent hoverColorClass={colors.imageHover} />
      </div>
      <div className="p-6">
        <h2 className={`text-2xl font-bold ${colors.title} mb-2`}>
          {suborder.name}
        </h2>
        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
          {suborder.description}
        </p>
        <div className="border-t border-gray-700 pt-5 space-y-5">
          <div>
            <button
              onClick={() => setIsCharExpanded((v) => !v)}
              className="flex items-center gap-2 w-full text-left mb-2"
              aria-expanded={isCharExpanded}
            >
              <h3 className={`text-md font-semibold ${colors.sectionTitle}`}>Características Principales</h3>
              <svg
                className={`w-4 h-4 ${colors.chevron} transition-transform duration-300 ml-auto ${isCharExpanded ? 'rotate-90' : 'rotate-0'}`}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {isCharExpanded && (
              <ul className="space-y-3 mt-3">
                {suborder.characteristics.map((char, index) => (
                  <li key={index} className="flex items-start text-gray-300 text-sm">
                    <svg className={`w-4 h-4 mr-3 mt-0.5 flex-shrink-0 ${colors.bullet}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h3 className={`text-md font-semibold ${colors.sectionTitle} mb-3`}>Clasificación y Ejemplos:</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-2">Familias</p>
                <div className="flex flex-wrap gap-2">
                  {suborder.families.map((family) => (
                    <span
                      key={family}
                      onClick={() => onFamilyClick(family)}
                      className={`cursor-pointer text-xs font-medium px-2.5 py-1 rounded-full transition-colors duration-200 ${colors.badge} ${colors.badgeHover}`}
                    >
                      {family}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-start text-gray-300 text-sm">
                <svg className={`w-4 h-4 mr-3 mt-0.5 flex-shrink-0 ${colors.bullet}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span><strong>Ejemplos comunes:</strong> {suborder.commonExamples}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-5 mt-5">
          <button
            onClick={handleGenerateFact}
            disabled={isLoadingFact}
            className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${colors.button}`}
          >
            {isLoadingFact ? 'Generando...' : '✨ Genera un dato curioso'}
          </button>
          {isLoadingFact && (
            <p className="text-gray-400 text-xs text-center mt-2 animate-pulse">Consultando la IA...</p>
          )}
          {aiFact && (
            <div className={`mt-3 p-3 rounded-lg bg-gray-900/50 border ${colors.factBorder}`}>
              <p className="text-gray-300 text-sm leading-relaxed">{aiFact}</p>
            </div>
          )}
          {factError && (
            <p className="text-red-400 text-xs mt-2 text-center">{factError}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassificationCard;
