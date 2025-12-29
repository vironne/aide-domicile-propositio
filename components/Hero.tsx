
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-center pt-32 pb-40 max-w-6xl mx-auto px-6 fade-in-section">
      <div className="max-w-4xl mx-auto">
        <span className="text-[#0066cc] font-bold tracking-[0.2em] text-[12px] uppercase mb-8 block">Plateforme d'Intelligence Collaborative</span>
        <h1 className="text-6xl md:text-[5.5rem] font-bold tracking-tight mb-12 leading-[1.05] text-[#1d1d1f] text-balance">
          L'intelligence au service <br /> du soin humain.
        </h1>
        <p className="text-xl md:text-[1.75rem] text-[#86868b] leading-[1.4] font-medium max-w-3xl mx-auto text-balance">
          Une suite technologique invisible qui redonne aux équipes le pouvoir d'accompagner avec sérénité.
        </p>
      </div>
    </section>
  );
};

export default Hero;
