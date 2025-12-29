
import React, { useState, useEffect } from 'react';
import { BRIQUES } from './constants';
import { AppView, Brique } from './types';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BriqueCard from './components/BriqueCard';
import BriqueDetail from './components/BriqueDetail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedBrique, setSelectedBrique] = useState<Brique | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBriqueClick = (brique: Brique) => {
    setSelectedBrique(brique);
    setCurrentView(`brique-${brique.id}` as AppView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = () => {
    setCurrentView('home');
    setSelectedBrique(null);
  };

  return (
    <div className="min-h-screen bg-[#fbfbfd] flex flex-col">
      <Navigation 
        scrolled={scrolled} 
        currentView={currentView} 
        onNavigateHome={navigateHome}
        onOpenAssistant={() => {}} 
      />

      <main className="pt-20 pb-32 flex-grow">
        {currentView === 'home' && (
          <div className="max-w-7xl mx-auto px-6">
            <Hero />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {BRIQUES.map((brique) => (
                <BriqueCard 
                  key={brique.id} 
                  brique={brique} 
                  onClick={() => handleBriqueClick(brique)}
                />
              ))}
            </div>

            <section className="mt-40 mb-20 text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-600 font-semibold text-xs mb-8 tracking-wider uppercase">Philosophie Orchestra</span>
              <h2 className="text-5xl font-bold tracking-tight mb-12 gradient-text">Replacer l'humain là où il est irremplaçable.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
                {[
                  { title: "Soulager les équipes", desc: "Automatiser la complexité pour redonner du temps à l'écoute et à la bienveillance." },
                  { title: "Réduire le stress", desc: "Apporter des réponses claires là où il y avait auparavant des doutes ou des urgences subies." },
                  { title: "Sécuriser l'organisation", desc: "Une plateforme robuste qui garantit la fiabilité opérationnelle et la conformité continue." },
                  { title: "Rayonnement de la qualité", desc: "Un service constant, professionnel et valorisé pour les familles et les partenaires." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-5 p-2">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-base text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {selectedBrique && currentView.startsWith('brique-') && (
          <BriqueDetail 
            brique={selectedBrique} 
            onBack={navigateHome}
          />
        )}
      </main>
      
      <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded bg-black flex items-center justify-center text-white font-bold text-[10px]">O</div>
            <span className="font-semibold text-slate-900">Orchestra Intelligence</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-blue-600 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Mention légales</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
