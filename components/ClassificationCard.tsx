import React from 'react';
import { BeetleSuborder } from '../types';

interface ClassificationCardProps {
  suborder: BeetleSuborder;
}

const ClassificationCard: React.FC<ClassificationCardProps> = ({ suborder }) => {
  const ImageComponent = suborder.imageComponent;

  return (
    <div className="group bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-cyan-500/30 hover:scale-[1.02] border border-gray-700/50 hover:border-teal-400">
      <div className="w-full h-56 bg-gray-900/30">
        <ImageComponent />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-teal-300 mb-2">
          {suborder.name}
        </h2>
        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
          {suborder.description}
        </p>
        <div className="border-t border-gray-700 pt-5 space-y-5">
            <div>
                <h3 className="text-md font-semibold text-sky-300 mb-4">Características Principales:</h3>
                <ul className="space-y-3">
                {suborder.characteristics.map((char, index) => (
                    <li key={index} className="flex items-start text-gray-300 text-sm">
                        <svg className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0 text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <span>{char}</span>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h3 className="text-md font-semibold text-sky-300 mb-4">Clasificación y Ejemplos:</h3>
                <ul className="space-y-3">
                    <li className="flex items-start text-gray-300 text-sm">
                        <svg className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <span><strong>Familias:</strong> {suborder.families.join(', ')}</span>
                    </li>
                    <li className="flex items-start text-gray-300 text-sm">
                        <svg className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <span><strong>Ejemplos comunes:</strong> {suborder.commonExamples}</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ClassificationCard;