
import React, { useEffect } from 'react';
import { Brique, Scenario } from '../types';

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
    hover: 'hover:bg-[#f5f5f7]',
    accent: 'text-[#1d1d1f]'
  }
};

const ScenarioCard: React.FC<{ scenario: Scenario; color: string }> = ({ scenario, color }) => {
  const variant = colorVariants[color] || colorVariants['blue-600'];

  return (
    <div className="bg-white rounded-[3rem] sf-shadow overflow-hidden mb-24 border border-black/[0.03]">
      <div className="p-12 md:p-16 border-b border-black/[0.02]">
        <h3 className="text-4xl font-bold text-[#1d1d1f] mb-4">{scenario.title}</h3>
        <p className="text-2xl text-[#86868b] font-medium italic leading-relaxed">{scenario.subtitle}</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* BEFORE */}
        <div className="p-12 md:p-16 bg-[#fbfbfd]">
          <h4 className="text-lg font-bold text-red-500 mb-8 flex items-center gap-2 uppercase tracking-widest">
            <span>{scenario.before.title}</span>
          </h4>
          <p className="text-[#1d1d1f] font-semibold text-xl mb-6">{scenario.before.description}</p>
          <ul className="space-y-6">
            {scenario.before.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-red-200 mt-2.5 flex-shrink-0"></span>
                <span className="text-[#86868b] text-lg font-medium leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* AFTER */}
        <div className="p-12 md:p-16 border-l border-black/[0.02]">
          <h4 className={`text-lg font-bold ${variant.accent} mb-8 uppercase tracking-widest`}>
            {scenario.after.title}
          </h4>
          
          <div className="space-y-12">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30 mb-6">{scenario.after.internalTitle}</p>
              <ul className="space-y-4">
                {scenario.after.internalSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <svg className={`w-5 h-5 ${variant.accent} mt-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-[#1d1d1f] text-lg font-medium">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30 mb-6">{scenario.after.userTitle}</p>
              <div className="space-y-3">
                {scenario.after.userSteps.map((step, i) => (
                  <div key={i} className={`p-5 rounded-2xl ${variant.light} border ${variant.border} text-lg font-bold text-[#1d1d1f] shadow-sm`}>
                    <span className="opacity-40 mr-3">👉</span> {step}
                  </div>
                ))}
              </div>
            </div>

            {scenario.after.prepTitle && (
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30 mb-6">{scenario.after.prepTitle}</p>
                <div className={`p-8 rounded-[2rem] ${variant.bg} text-white text-lg font-medium italic shadow-2xl relative`}>
                  <div className={`absolute -top-2 left-8 w-5 h-5 ${variant.bg} rotate-45`}></div>
                  {scenario.after.prepSteps?.map((step, i) => <p key={i} className="mb-3 last:mb-0 leading-relaxed">{step}</p>)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`p-12 md:p-16 ${variant.light} border-t ${variant.border}`}>
        <div className="flex flex-col md:flex-row md:items-center gap-10">
          <span className="text-2xl font-bold text-[#1d1d1f] flex items-center gap-3 whitespace-nowrap">
             <span className="w-2 h-10 bg-[#1d1d1f] rounded-full"></span>
             Résultat concret
          </span>
          <div className="flex flex-wrap gap-4">
            {scenario.result.map((res, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-white border border-black/[0.05] text-[#1d1d1f] text-base font-bold shadow-sm">
                <span className="text-emerald-500 mr-2">✔</span> {res}
              </span>
            ))}
          </div>
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
          {brique.objective}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
        <div className="lg:col-span-2 space-y-20">
          <section>
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-12 flex items-center space-x-4">
              <span className={`w-3 h-10 ${variant.bg} rounded-full`}></span>
              <span>Composants Système</span>
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
            <h3 className={`text-[11px] font-bold uppercase tracking-[0.2em] ${variant.accent} mb-8`}>Bénéfices Stratégiques</h3>
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
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6">Vision Executive</h3>
            <p className="text-2xl font-medium leading-relaxed italic text-white/90">
              "{brique.context}"
            </p>
          </div>
        </div>
      </div>

      {brique.scenarios && brique.scenarios.length > 0 && (
        <section className="mb-40">
          <div className="text-center mb-24">
             <span className="text-[#0066cc] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Expérience Utilisateur</span>
             <h2 className="text-5xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight">La transformation à l'œuvre</h2>
             <p className="text-[#86868b] mt-6 text-xl max-w-2xl mx-auto font-medium">Découvrez comment Orchestra Intelligence redéfinit concrètement les standards de l'accompagnement.</p>
          </div>
          
          <div className="space-y-12">
            {brique.scenarios.map(scenario => (
              <ScenarioCard key={scenario.id} scenario={scenario} color={brique.color} />
            ))}
          </div>
        </section>
      )}

      {brique.id === 1 && (
        <section className="bg-[#0066cc] rounded-[4rem] p-16 md:p-24 text-center text-white mb-32 shadow-[0_40px_100px_-20px_rgba(0,102,204,0.3)]">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">Réenchantez le métier d'aide à domicile.</h2>
          <p className="text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-medium leading-relaxed text-balance">
            Offrez à vos équipes terrain l'outil de sécurité et de valorisation qu'elles méritent.
          </p>
          <button className="bg-white text-[#0066cc] px-12 py-5 rounded-full font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
            Découvrir l'assistant terrain
          </button>
        </section>
      )}
    </div>
  );
};

export default BriqueDetail;
