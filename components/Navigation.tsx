
import React from 'react';
import { AppView } from '../types';

interface NavigationProps {
  scrolled: boolean;
  currentView: AppView;
  onNavigateHome: () => void;
  onOpenAssistant: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ scrolled, currentView, onNavigateHome }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'apple-glass border-b border-black/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          onClick={onNavigateHome}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#1d1d1f] flex items-center justify-center text-white font-bold text-lg transition-all duration-500 group-hover:scale-105">
            O
          </div>
          <span className="font-bold text-xl tracking-tight text-[#1d1d1f]">Orchestra</span>
        </div>
        
        <div className="flex items-center space-x-10">
          <button 
            onClick={onNavigateHome}
            className={`text-[13px] font-bold tracking-widest uppercase transition-colors ${currentView === 'home' ? 'text-[#0066cc]' : 'text-[#1d1d1f]/60 hover:text-[#1d1d1f]'}`}
          >
            Accueil
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
