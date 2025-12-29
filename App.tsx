
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BriqueCard from './components/BriqueCard';
import BriqueDetail from './components/BriqueDetail';
import AssistantModal from './components/AssistantModal';
import { BRIQUES } from './constants';
import { Brique, AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [activeBrique, setActiveBrique] = useState<Brique | null>(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBriqueClick = (brique: Brique) => {
    setActiveBrique(brique);
    setCurrentView(`brique-${brique.id}` as AppView);
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    setActiveBrique(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navigation 
        scrolled={scrolled} 
        currentView={currentView}
        onNavigateHome={handleNavigateHome}
        onOpenAssistant={() => setIsAssistantOpen(true)}
      />

      <main className="pt-20">
        {currentView === 'home' ? (
          <div className="animate-in fade-in duration-1000">
            <Hero />
            
            {/* Briques Section - Perfect Alignment */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pb-48">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {BRIQUES.map(brique => (
                  <BriqueCard 
                    key={brique.id} 
                    brique={brique} 
                    onClick={() => handleBriqueClick(brique)} 
                  />
                ))}
              </div>
            </section>

            {/* Philosophie Section - Refined Spacing */}
            <section className="bg-white py-48 border-t border-black/[0.02]">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="max-w-4xl mb-32">
                  <span className="text-[#0066cc] font-bold tracking-[0.3em] text-[11px] uppercase mb-8 block">Principes Fondateurs</span>
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] mb-10 leading-[1.1]">Philosophie Orchestra</h2>
                  <p className="text-3xl md:text-[2.75rem] text-[#86868b] font-medium leading-[1.2] tracking-tight">
                    Replacer l'humain là où il est irremplaçable.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24">
                  <div className="group border-l border-black/[0.05] pl-10 hover:border-[#0066cc] transition-colors duration-500">
                    <h3 className="text-2xl font-bold mb-5 text-[#1d1d1f]">
                      Soulager les équipes
                    </h3>
                    <p className="text-xl text-[#86868b] leading-[1.6] font-medium">
                      Automatiser la complexité pour redonner du temps à l'écoute et à la bienveillance.
                    </p>
                  </div>

                  <div className="group border-l border-black/[0.05] pl-10 hover:border-[#0066cc] transition-colors duration-500">
                    <h3 className="text-2xl font-bold mb-5 text-[#1d1d1f]">
                      Réduire le stress
                    </h3>
                    <p className="text-xl text-[#86868b] leading-[1.6] font-medium">
                      Apporter des réponses claires là où il y avait auparavant des doutes ou des urgences subies.
                    </p>
                  </div>

                  <div className="group border-l border-black/[0.05] pl-10 hover:border-[#0066cc] transition-colors duration-500">
                    <h3 className="text-2xl font-bold mb-5 text-[#1d1d1f]">
                      Sécuriser l'organisation
                    </h3>
                    <p className="text-xl text-[#86868b] leading-[1.6] font-medium">
                      Une plateforme robuste qui garantit la fiabilité opérationnelle et la conformité continue.
                    </p>
                  </div>

                  <div className="group border-l border-black/[0.05] pl-10 hover:border-[#0066cc] transition-colors duration-500">
                    <h3 className="text-2xl font-bold mb-5 text-[#1d1d1f]">
                      Rayonnement de la qualité
                    </h3>
                    <p className="text-xl text-[#86868b] leading-[1.6] font-medium">
                      Un service constant, professionnel et valorisé pour les familles et les partenaires.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          activeBrique && (
            <BriqueDetail 
              brique={activeBrique} 
              onBack={handleNavigateHome} 
            />
          )
        )}
      </main>

      <footer className="py-24 bg-[#f5f5f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-[12px] bg-black flex items-center justify-center text-white font-bold text-xl">O</div>
            <span className="font-bold text-2xl tracking-tight">Orchestra Intelligence</span>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <p className="text-[11px] text-slate-400 font-black tracking-[0.3em] uppercase">
              Designed by Orchestra in France
            </p>
            <p className="text-[11px] text-slate-300 font-bold tracking-[0.1em] uppercase">
              Modernise le soin humain • 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
