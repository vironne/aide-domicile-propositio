
import React from 'react';
import { AppView } from '../types';

interface NavigationProps {
  scrolled: boolean;
  currentView: AppView;
  onNavigateHome: () => void;
  onOpenAssistant: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ scrolled, currentView, onNavigateHome, onOpenAssistant }) => {
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
        
        <div className="flex items-center space-x-6 md:space-x-10">
          <button 
            onClick={onNavigateHome}
            className={`text-[13px] font-bold tracking-wide uppercase transition-colors ${currentView === 'home' ? 'text-[#0066cc]' : 'text-[#1d1d1f]/60 hover:text-[#1d1d1f]'}`}
          >
            Accueil
          </button>
          
          <button 
            onClick={onOpenAssistant}
            className="hidden md:flex items-center space-x-2 px-5 py-2 rounded-full bg-[#1d1d1f] text-white text-[12px] font-bold hover:bg-[#333] transition-all"
          >
            <span>Assistant IA</span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
          </button>

          <button 
            onClick={onOpenAssistant}
            className="md:hidden w-10 h-10 rounded-full bg-[#1d1d1f] flex items-center justify-center text-white"
          >
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
