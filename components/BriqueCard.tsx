
import React from 'react';
import { Brique } from '../types';

interface BriqueCardProps {
  brique: Brique;
  onClick: () => void;
}

const colorMap: Record<string, string> = {
  'blue-600': '#0066cc',
  'indigo-600': '#5e5ce6',
  'slate-800': '#1d1d1f',
};

const BriqueCard: React.FC<BriqueCardProps> = ({ brique, onClick }) => {
  const accentColor = colorMap[brique.color] || '#1d1d1f';
  
  return (
    <div 
      onClick={onClick}
      className="group relative h-[520px] w-full bg-white rounded-[2.5rem] overflow-hidden cursor-pointer sf-shadow flex flex-col border border-black/[0.03] transition-all duration-700"
    >
      <div className="p-12 flex flex-col h-full z-10">
        <div className="flex justify-between items-start mb-10">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/30">{brique.number}</span>
          <div className="w-12 h-12 rounded-2xl bg-black/[0.02] flex items-center justify-center border border-black/[0.05] group-hover:scale-110 transition-transform duration-500">
             <svg className="w-5 h-5 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
             </svg>
          </div>
        </div>
        
        <h3 className="text-[2.25rem] font-bold text-[#1d1d1f] mb-4 leading-tight group-hover:text-[#0066cc] transition-colors duration-500">{brique.title}</h3>
        <p className="text-[#86868b] text-xl font-medium mb-8 leading-relaxed max-w-[90%]">{brique.subtitle}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <p className="text-sm font-semibold text-black/40 italic">"{brique.tagline}"</p>
          <div className="flex items-center space-x-2 text-[#0066cc] font-bold group-hover:translate-x-1 transition-transform duration-500">
            <span className="text-sm">Explorer</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
          </div>
        </div>
      </div>
      
      {/* Subtle Background Accent */}
      <div 
        className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-[100px] opacity-[0.05] group-hover:scale-125 transition-transform duration-1000"
        style={{ backgroundColor: accentColor }}
      ></div>
    </div>
  );
};

export default BriqueCard;
