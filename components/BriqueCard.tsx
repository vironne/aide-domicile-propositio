
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
      className="group relative h-[540px] w-full bg-white rounded-[2.5rem] overflow-hidden cursor-pointer flex flex-col border border-black/[0.04] transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1"
    >
      <div className="p-10 md:p-12 flex flex-col h-full z-10">
        {/* Header Label */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center space-x-3">
            <span className="w-1 h-4 rounded-full" style={{ backgroundColor: accentColor }}></span>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-black/30">
              BRIQUE {brique.id.toString().padStart(2, '0')}
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-black/[0.02] flex items-center justify-center border border-black/[0.05] group-hover:bg-black/5 transition-colors duration-500">
             <svg className="w-4 h-4 text-black/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path>
             </svg>
          </div>
        </div>
        
        {/* Title & Subtitle Area - Fixed relationship for consistency */}
        <div className="flex-1">
          <h3 className="text-[2.5rem] font-bold text-[#1d1d1f] mb-6 leading-[1.1] tracking-tight group-hover:text-[#0066cc] transition-colors duration-500">
            {brique.title}
          </h3>
          <p className="text-[#86868b] text-xl font-medium leading-[1.5] max-w-[90%]">
            {brique.subtitle}
          </p>
        </div>
        
        {/* Footer Area */}
        <div className="mt-12 pt-10 border-t border-black/[0.03] flex items-center justify-between">
          <p className="text-[13px] font-bold text-black/20 uppercase tracking-widest italic group-hover:text-black/40 transition-colors">
            {brique.tagline}
          </p>
          <div className="flex items-center space-x-2 text-[#0066cc] font-bold group-hover:translate-x-1 transition-transform duration-500">
            <span className="text-sm">Ouvrir</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Background Ambient Glow */}
      <div 
        className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-[100px] opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-150 transition-all duration-1000"
        style={{ backgroundColor: accentColor }}
      ></div>
    </div>
  );
};

export default BriqueCard;
