
import React from 'react';
import type { BrandIdentity } from '../types';
import ColorPalette from './ColorPalette';

interface ResultCardProps {
  brandIdentity: BrandIdentity;
}

const ResultCard: React.FC<ResultCardProps> = ({ brandIdentity }) => {
  return (
    <div className="w-full max-w-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl space-y-6 animate-fade-in">
      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-sky-400 mb-1">Company Name</h2>
        <p className="text-4xl font-bold text-white">{brandIdentity.companyName}</p>
      </div>
      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest text-sky-400 mb-1">Slogan</h3>
        <p className="text-2xl italic text-slate-200">"{brandIdentity.slogan}"</p>
      </div>
      <ColorPalette colors={brandIdentity.colorPalette} />
    </div>
  );
};

export default ResultCard;
