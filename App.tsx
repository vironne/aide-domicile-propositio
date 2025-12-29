
import React, { useState, useEffect } from 'react';

// --- DEFINITIONS DES DONNÉES (Consolidées pour éviter les erreurs d'import) ---
const BRIQUES = [
  {
    id: 1,
    tag: "SOLUTION 01",
    title: "IA pour les Équipes Terra",
    headline: "La sécurité ne doit jamais être une option.",
    subtitle: "Sécurité, expertise et sérénité au domicile",
    description: "Apporter une présence experte aux aides à domicile lorsqu'elles interviennent seules. Supprimer l'isolement et réduire le stress décisionnel.",
    impacts: [
      "Gestion immédiate des chutes",
      "Soutien émotionnel post-incident",
      "Fiabilisation des gestes techniques",
      "Valorisation du savoir-faire"
    ],
    features: [
      { 
        title: "Assistant Situations Délicates", 
        desc: "Protocoles interactifs vocaux en cas de chute, malaise ou refus d'aide agressif." 
      },
      { 
        title: "Mémoire du Bénéficiaire", 
        desc: "Synthèse des habitudes et points de vigilance avant chaque entrée au domicile." 
      },
      { 
        title: "Dictée de Compte-rendu", 
        desc: "Transformation de la parole en notes structurées pour libérer les soirées." 
      }
    ]
  },
  {
    id: 2,
    tag: "SOLUTION 02",
    title: "IA Coordination",
    headline: "Le bureau, enfin apaisé.",
    subtitle: "L'intelligence logistique au service du planning",
    description: "Transformer le chaos des imprévus en un flux organisé. Libérer les coordinateurs des tâches répétitives.",
    impacts: [
      "Remplacements en 5 minutes",
      "Optimisation de tournées",
      "Équilibre vie pro/perso",
      "Zéro erreur RH"
    ],
    features: [
      { title: "Smart-Matching", desc: "Trouve le remplaçant idéal par proximité et compétences." },
      { title: "Alerte 35h", desc: "Prévention temps réel des dépassements d'horaires." }
    ]
  },
  {
    id: 3,
    tag: "SOLUTION 03",
    title: "Direction & Qualité",
    headline: "Piloter avec une vision claire.",
    subtitle: "Pilotage stratégique et humain",
    description: "Analyse prédictive pour anticiper le turnover et garantir une qualité de service irréprochable.",
    impacts: [
      "Anticipation du turnover",
      "Audit de conformité auto",
      "Preuves de qualité tutelles",
      "Sérénité de croissance"
    ],
    features: [
      { title: "Predictive Analytics", desc: "Identifie les signaux faibles de burnout ou démission." },
      { title: "Compliance Bot", desc: "Vérifie l'exhaustivité des dossiers administratifs." }
    ]
  }
];

// --- COMPOSANTS UI ---

const Navigation = ({ onHome }: { onHome: () => void }) => (
  <nav className="fixed top-0 w-full z-50 apple-glass border-b border-black/[0.05] h-16 flex items-center px-6 md:px-12 justify-between">
    <div className="flex items-center space-x-3 cursor-pointer group" onClick={onHome}>
      <div className="w-8 h-8 bg-black rounded-[10px] flex items-center justify-center text-white font-bold text-sm">O</div>
      <span className="font-bold tracking-tight text-lg">Orchestra</span>
    </div>
    <div className="flex items-center space-x-6">
      <span className="hidden md:inline text-[10px] font-bold uppercase tracking-[0.3em] text-black/30 text-right">Intelligence Terra v1.0</span>
      <button className="bg-black text-white px-5 py-2 rounded-full text-[12px] font-bold hover:bg-zinc-800 transition-all active:scale-95">Accès Pro</button>
    </div>
  </nav>
);

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'detail'>('home');
  const [activeId, setActiveId] = useState<number>(1);

  const activeBrique = BRIQUES.find(b => b.id === activeId) || BRIQUES[0];

  const handleOpenDetail = (id: number) => {
    setActiveId(id);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <Navigation onHome={handleBack} />

      <main className="pt-32 pb-40 px-6 md:px-12 max-w-7xl mx-auto">
        {view === 'home' ? (
          <div className="animate-reveal">
            <header className="mb-24">
              <span className="text-[#0066CC] font-bold tracking-[0.2em] text-[12px] uppercase mb-6 block">Le futur du soin à domicile</span>
              <h1 className="text-5xl md:text-[5.5rem] font-bold tracking-tight leading-[1.05] mb-10 text-balance">
                L'intelligence au service <br />du soin humain.
              </h1>
              <p className="text-xl md:text-2xl text-black/40 font-medium max-w-2xl leading-relaxed">
                Une technologie invisible conçue pour apporter sécurité, expertise et sérénité aux équipes de terrain.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {BRIQUES.map((b) => (
                <div 
                  key={b.id} 
                  onClick={() => handleOpenDetail(b.id)}
                  className="sf-card p-12 cursor-pointer flex flex-col min-h-[480px] group"
                >
                  <span className="text-[11px] font-bold text-black/20 uppercase tracking-[0.2em] mb-12">{b.tag}</span>
                  <h3 className="text-[2.2rem] font-bold leading-tight mb-4 group-hover:text-[#0066CC] transition-colors">{b.title}</h3>
                  <p className="text-black/40 font-medium text-lg leading-relaxed mb-10">{b.subtitle}</p>
                  
                  <div className="mt-auto flex items-center text-[13px] font-bold text-[#0066CC] tracking-wide uppercase group-hover:translate-x-1 transition-transform">
                    Explorer
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-reveal max-w-5xl mx-auto">
            <button 
              onClick={handleBack}
              className="mb-16 flex items-center text-black/30 hover:text-black transition-colors font-bold uppercase text-[11px] tracking-widest group"
            >
              <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center mr-4 group-hover:bg-black/10 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path>
                </svg>
              </div>
              Retour à l'aperçu
            </button>

            <header className="mb-24">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">{activeBrique.headline}</h2>
              <p className="text-2xl md:text-3xl text-black/40 font-medium leading-relaxed italic border-l-4 border-[#0066CC] pl-8">
                {activeBrique.description}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
              <div className="space-y-12">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-black/20">Systèmes Intégrés</h4>
                {activeBrique.features.map((f, i) => (
                  <div key={i} className="group">
                    <h5 className="font-bold text-2xl mb-3">{f.title}</h5>
                    <p className="text-black/50 text-lg leading-relaxed font-medium">{f.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-[#1D1D1F] text-white p-12 md:p-16 rounded-[3rem] shadow-2xl flex flex-col justify-between">
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/30 mb-10">Impact Opérationnel</h4>
                  <ul className="space-y-8">
                    {activeBrique.impacts.map((impact, i) => (
                      <li key={i} className="text-xl font-bold flex items-start gap-5">
                        <span className="text-blue-400 mt-1">●</span> {impact}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-20 pt-10 border-t border-white/10 text-white/40 text-lg italic">
                  "L’IA n’est pas un outil de contrôle, c’est une expertise augmentée disponible 24h/24."
                </div>
              </div>
            </div>

            {activeBrique.id === 1 && (
              <section className="mt-40 border-t border-black/[0.05] pt-32">
                <div className="text-center mb-16">
                  <h3 className="text-4xl font-bold tracking-tight">Scénario : Gestion d'une urgence</h3>
                  <p className="text-black/40 font-medium mt-4 text-lg italic">"Ne jamais laisser l'intervenante seule face à l'imprévu."</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-white p-12 rounded-[2.5rem] border border-red-100 flex flex-col">
                    <span className="text-red-500 font-bold uppercase text-[10px] tracking-widest mb-6">SANS ORCHESTRA</span>
                    <p className="text-lg font-medium text-black/60 leading-relaxed italic mb-8">
                      "L'intervenante arrive, Mme Martin est au sol. Stress, panique, recherche du numéro de l'agence qui est en pause déjeuner. Décision risquée prise dans l'urgence."
                    </p>
                    <div className="mt-auto pt-6 border-t border-red-50 text-red-400 text-sm font-bold">Risque vital & burn-out</div>
                  </div>
                  
                  <div className="bg-[#0066CC] p-12 rounded-[2.5rem] text-white flex flex-col">
                    <span className="text-blue-200 font-bold uppercase text-[10px] tracking-widest mb-6">AVEC ORCHESTRA IA</span>
                    <p className="text-lg font-medium leading-relaxed italic mb-8">
                      "Guidage vocal immédiat : 'Vérifiez la conscience', 'Ne pas mobiliser'. Alerte automatique transmise à la coordination avec géolocalisation. Rapport d'incident dicté en 30s."
                    </p>
                    <div className="mt-auto pt-6 border-t border-white/10 text-blue-200 text-sm font-bold">Sérénité & sécurité garantie</div>
                  </div>
                </div>
              </section>
            )}
          </div>
        )}
      </main>

      <footer className="py-24 bg-white border-t border-black/[0.03] text-center">
        <div className="text-black/20 text-[10px] font-bold uppercase tracking-[0.4em]">
          Designed by Orchestra Intelligence in France
        </div>
      </footer>
    </div>
  );
};

export default App;
