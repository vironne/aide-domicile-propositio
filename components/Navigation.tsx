
import React from 'react';
import { AppView } from '../types';

interface NavigationProps {
  scrolled: boolean;
  currentView: AppView;
  onNavigateHome: () => void;
  onOpenAssistant: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ scrolled, onNavigateHome }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'apple-glass border-b border-black/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          onClick={onNavigateHome}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#1d1d1f] flex items-center justify-center text-white font-bold text-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-black/10">
            O
          </div>
          <span className="font-bold text-xl tracking-tight text-[#1d1d1f]">Orchestra</span>
        </div>
        
        <div className="flex items-center space-x-8">
          <button 
            onClick={onNavigateHome}
            className="text-[#1d1d1f]/60 hover:text-[#1d1d1f] transition-colors text-[13px] font-semibold tracking-wide uppercase"
          >
            Accueil
          </button>
          <div className="hidden md:block h-4 w-[1px] bg-black/10"></div>
          <div className="hidden md:flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] font-bold text-black/40 uppercase tracking-[0.2em]">Système Actif</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
