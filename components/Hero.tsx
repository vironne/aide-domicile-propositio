
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-center pt-24 pb-32 max-w-6xl mx-auto px-6 fade-in-section">
      <div className="max-w-4xl mx-auto">
        <span className="text-[#0066cc] font-bold tracking-[0.2em] text-[12px] uppercase mb-6 block">Plateforme d'Intelligence Collaborative</span>
        <h1 className="text-6xl md:text-[5.5rem] font-bold tracking-tight mb-10 leading-[1.05] text-[#1d1d1f] text-balance">
          L'intelligence au service <br /> du soin humain.
        </h1>
        <p className="text-xl md:text-[1.75rem] text-[#86868b] leading-[1.4] font-medium mb-12 max-w-3xl mx-auto text-balance">
          Une suite technologique invisible qui redonne aux équipes le pouvoir d'accompagner avec sérénité.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-8 py-4 bg-[#1d1d1f] text-white rounded-full font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-black/10">
            Découvrir l'écosystème
          </button>
          <button className="px-8 py-4 text-[#0066cc] hover:underline font-semibold text-lg flex items-center gap-2">
            Voir la démonstration 
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
