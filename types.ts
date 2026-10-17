import React from 'react';

export interface RepresentativeSpecimen {
  name: string;
  scientificName: string;
  family: string;
  habitat: string;
  component: React.FC<{ className?: string }>;
}

export interface MorphologySummary {
  antennaeType: string;
  coxaeRelation: string;
  wingFolding: string;
  dietHabit: string;
}

export interface BeetleSuborder {
  name: string;
  imageComponent: React.FC<{ className?: string }>;
  specimens?: RepresentativeSpecimen[];
  morphologySummary: MorphologySummary;
  description: string;
  characteristics: string[];
  detailedCharacteristics: string[];
  families: string[];
  commonExamples: string;
}

export interface BeetleFamily {
  id: string;
  name: string;
  commonName: string;
  suborder: 'Adephaga' | 'Polyphaga' | 'Archostemata' | 'Myxophaga';
  speciesExample: string;
  component: React.FC<{ className?: string }>;
  diversity: string;
  distinctiveFeature: string;
  biology: string;
  antennaeType: string;
  diet: string;
  habitat: string;
}