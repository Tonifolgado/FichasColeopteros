import React from 'react';

export interface BeetleSuborder {
  name: string;
  imageComponent: React.FC<{ className?: string; hoverColorClass?: string }>;
  description: string;
  characteristics: string[];
  families: string[];
  commonExamples: string;
  color: 'amber' | 'emerald' | 'violet' | 'cyan';
}