
import React, { useEffect } from 'react';
import { Brique, Scenario, ScenarioSection } from '../types';

interface BriqueDetailProps {
  brique: Brique;
  onBack: () => void;
}

const colorVariants: Record<string, { 
  bg: string, 
  text: string, 
  light: string, 
  border: string, 
  hover: string,
  accent: string 
}> = {
  'blue-600': { 
    bg: 'bg-[#0066cc]', 
    text: 'text-[#0066cc]', 
    light: 'bg-[#f5faff]', 
    border: 'border-[#e0f0ff]',
    hover: 'hover:bg-[#f5faff]',
    accent: 'text-[#0066cc]'
  },
  'indigo-600': { 
    bg: 'bg-[#5e5ce6]', 
    text: 'text-[#5e5ce6]', 
    light: 'bg-[#f7f7ff]', 
    border: 'border-[#ececff]',
    hover: 'hover:bg-[#f7f7ff]',
    accent: 'text-[#5e5ce6]'
  },
  'slate-800': { 
    bg: 'bg-[#1d1d1f]', 
    text: 'text-[#1d1d1f]', 
    light: 'bg-[#f5f5f7]', 
    border: 'border-[#e8e8ed]',
    hover: 'hover:bg-[#f5faff]',
    accent: 'text-[#1d1d1f]'
  }
};

const SectionCard: React.FC<{ section: ScenarioSection; variant: any }> = ({ section, variant }) => {
  const getStyle = () => {
    switch(section.type) {
      case 'negative': return 'bg-white border-l-4 border-red-500';
      case 'positive': return 'bg-white border-l-4 border-emerald-500';
      case 'visual': return `${variant.light} border ${variant.border}`;
      case 'alert': return 'bg-[#1d1d1f] text-white';
      default: return 'bg-white';
    }
  };

  return (
    <div className={`p-8 rounded-3xl shadow-sm ${getStyle()} transition-all duration-500 hover:shadow-md`}>
      <h4 className={`text-sm font-bold uppercase tracking-widest mb-4 ${section.type === 'alert' ? 'text-white/40' : 'text-black/30'}`}>
        {section.title}
      </h4>
      {section.subtitle && (
        <p className={`text-lg font-bold mb-4 ${section.type === 'alert' ? 'text-white' : 'text-slate-900'}`}>
          {section.subtitle}
        </p>
      )}
      <ul className="space-y-3">
        {section.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            {section.type === 'positive' && <svg className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
            {section.type === 'negative' && <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0"></span>}
            <span className={`text-base leading-relaxed ${section.type === 'alert' ? 'text-white/80' : 'text-slate-600'} ${section.type === 'visual' ? 'font-bold' : 'font-medium'}`}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ScenarioGrid: React.FC<{ scenario: Scenario; color: string }> = ({ scenario, color }) => {
  const variant = colorVariants[color] || colorVariants['blue-600'];

  return (
    <div className="mb-24">
      <div className="mb-10 pl-6 border-l-4 border-slate-200">
        <h3 className="text-3xl font-bold text-[#1d1d1f] mb-2">{scenario.title}</h3>
        <p className="text-xl text-[#86868b] font-medium italic">{scenario.subtitle}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {scenario.sections.map((section, i) => (
          <SectionCard key={i} section={section} variant={variant} />
        ))}
      </div>

      <div className={`p-8 rounded-[2.5rem] ${variant.light} border ${variant.border} flex flex-wrap items-center gap-6`}>
        <span className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
          <div className="w-2 h-6 bg-slate-900 rounded-full"></div>
          Résultats
        </span>
        <div className="flex flex-wrap gap-3">
          {scenario.result.map((res, i) => (
            <span key={i} className="px-5 py-2 bg-white rounded-full text-sm font-bold shadow-sm text-slate-900">
              <span className="text-emerald-500 mr-2">✔</span> {res}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const BriqueDetail: React.FC<BriqueDetailProps> = ({ brique, onBack }) => {
  const variant = colorVariants[brique.color] || colorVariants['blue-600'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">
      <button 
        onClick={onBack}
        className="mb-16 flex items-center space-x-3 text-[#86868b] hover:text-[#1d1d1f] transition-colors group py-2"
      >
        <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-all">
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
        </div>
        <span className="text-sm font-bold tracking-wide uppercase">Retour</span>
      </button>

      <header className="mb-24">
        <div className={`inline-flex items-center space-x-4 px-5 py-2 rounded-full ${variant.light} ${variant.accent} mb-10`}>
          <span className="text-xs font-bold uppercase tracking-[0.2em]">{brique.number}</span>
        </div>
        <h1 className="text-6xl md:text-[5rem] font-bold tracking-tight mb-10 text-[#1d1d1f] leading-[1.1] max-w-5xl">{brique.title}</h1>
        <p className="text-2xl md:text-3xl text-[#86868b] font-medium max-w-4xl leading-[1.4]">
          {brique.subtitle}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-40">
        <div className="lg:col-span-2 space-y-20">
          <section>
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-12 flex items-center space-x-4">
              <span className={`w-3 h-10 ${variant.bg} rounded-full`}></span>
              <span>Composants de la Solution</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brique.features.map(f => (
                <div key={f.id} className="p-10 bg-white border border-black/[0.03] rounded-[2.5rem] sf-shadow">
                  <h4 className="font-bold text-2xl text-[#1d1d1f] mb-4">{f.title}</h4>
                  <p className="text-lg text-[#86868b] leading-relaxed font-medium">{f.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-10">
          <div className={`p-10 rounded-[3rem] ${variant.light} border ${variant.border} shadow-sm`}>
            <h3 className={`text-[11px] font-bold uppercase tracking-[0.2em] ${variant.accent} mb-8`}>Bénéfices Majeurs</h3>
            <ul className="space-y-6">
              {brique.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start space-x-4 text-[#1d1d1f]">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-black/[0.02]">
                    <svg className={`w-4 h-4 ${variant.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-lg font-bold leading-tight">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-12 rounded-[3rem] bg-[#1d1d1f] text-white shadow-2xl">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6">Vision Stratégique</h3>
            <p className="text-2xl font-medium leading-relaxed italic text-white/90">
              "{brique.context}"
            </p>
          </div>
        </div>
      </div>

      {brique.scenarios && brique.scenarios.length > 0 && (
        <section className="mb-40">
          <div className="text-center mb-24">
             <span className="text-[#0066cc] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Parcours Utilisateur</span>
             <h2 className="text-5xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight">Transformation Concrète</h2>
             <p className="text-[#86868b] mt-6 text-xl max-w-2xl mx-auto font-medium">Découvrez comment Orchestra Intelligence redéfinit les standards de l'accompagnement.</p>
          </div>
          
          <div className="space-y-24">
            {brique.scenarios.map(scenario => (
              <ScenarioGrid key={scenario.id} scenario={scenario} color={brique.color} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BriqueDetail;
