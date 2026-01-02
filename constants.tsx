
import { Brique } from './types';

export const BRIQUES: Brique[] = [
  {
    id: 1,
    number: "BRIQUE 01",
    title: "IA pour les Équipes Terrain",
    subtitle: "Apporter une présence experte et rassurante aux aides à domicile lorsqu'elles interviennent seules. L'objectif est de supprimer le sentiment d'isolement.",
    objective: "Sécuriser chaque intervention par une intelligence de terrain qui guide, rassure et professionnalise l'action en temps réel.",
    context: "L’IA n'est pas un outil de contrôle, c'est une expertise augmentée disponible 24h/24 dans la poche de l'intervenante pour la guider et la valoriser.",
    benefits: [
      "Réponses immédiates en cas de chute ou malaise",
      "Soutien émotionnel après un incident difficile",
      "Fiabilisation des gestes techniques et protocoles",
      "Valorisation du savoir-faire métier sur le terrain"
    ],
    features: [
      { 
        id: "1-1", 
        title: "Assistant « Situations Délicates »", 
        description: "Protocoles interactifs en cas de chute, refus d'aide agressif ou malaise, guidant l'aide pas à pas avec calme." 
      },
      { 
        id: "1-2", 
        title: "Mémoire du Bénéficiaire", 
        description: "Synthèse vocale des habitudes de vie et alertes sur les points de vigilance spécifiques avant d'entrer au domicile." 
      },
      { 
        id: "1-3", 
        title: "Vigilance Médicamenteuse", 
        description: "Aide à la compréhension des ordonnances et détection visuelle des signes d'effets secondaires fréquents." 
      },
      { 
        id: "1-4", 
        title: "Dictée de Compte-rendu", 
        description: "Transformation de la parole en notes structurées et professionnelles pour éviter la surcharge administrative." 
      }
    ],
    scenarios: [
      {
        id: "chute-domicile",
        title: "Gestion d'une chute au domicile",
        subtitle: "“Ne jamais laisser l'intervenante seule face à l'urgence”",
        sections: [
          {
            title: "❌ Aujourd’hui (Stress & Isolement)",
            subtitle: "Mme Martin est au sol. L'intervenante arrive.",
            type: "negative",
            items: [
              "Panique : faut-il la relever ou appeler les pompiers ?",
              "Recherche du numéro de l'agence (souvent occupée)",
              "Décision risquée prise par peur de mal faire"
            ]
          },
          {
            title: "✅ Avec Orchestra Intelligence",
            subtitle: "L'IA guide en temps réel :",
            type: "positive",
            items: [
              "Analyse vocale immédiate de la situation",
              "Rappel des protocoles de secours (PLS, appuis)",
              "Alerte automatique à la coordination avec géo-localisation"
            ]
          },
          {
            title: "📱 Interface mobile de l'aide",
            type: "visual",
            items: [
              "Écran de guidage : 'Vérifiez la conscience'",
              "Bouton d'urgence : Connexion directe expert"
            ]
          },
          {
            title: "📝 Conclusion",
            type: "alert",
            items: [
              "Soutien émotionnel post-événement automatisé.",
              "Rapport d'incident généré par la voix."
            ]
          }
        ],
        result: [
          "Sécurité vitale garantie",
          "Stress réduit de 80%",
          "Coordination informée à la seconde"
        ]
      }
    ],
    color: "blue-600",
    lightColor: "blue-50",
    tagline: "Sécuriser l'humain au cœur du domicile."
  },
  {
    id: 2,
    number: "BRIQUE 02",
    title: "Coordination & Planning",
    subtitle: "Transformer le chaos des imprévus quotidiens en un flux organisé et prévisible pour libérer les coordinateurs du stress logistique.",
    objective: "Automatiser la complexité opérationnelle pour redonner du temps à l'écoute et à la gestion humaine des situations.",
    context: "L’IA gère la donnée brute (distances, temps, compétences) pour que l'humain garde la main sur la décision finale et la relation.",
    benefits: [
      "Gestion des absences réglée en moins de 5 minutes",
      "Équilibre vie pro/perso protégé pour les aides",
      "Zéro erreur de calcul (trajets et interventions)",
      "Réduction drastique de la charge mentale au bureau"
    ],
    features: [
      { 
        id: "2-1", 
        title: "Gestionnaire d'Absences", 
        description: "Identification instantanée du remplaçant idéal selon la proximité, l'historique et la charge de travail actuelle." 
      },
      { 
        id: "2-2", 
        title: "Optimisation de Tournée", 
        description: "Réorganisation géographique intelligente pour supprimer les allers-retours inutiles et limiter la fatigue." 
      },
      { 
        id: "2-3", 
        title: "Suivi des Heures (35h/CRP)", 
        description: "Calcul en temps réel des interventions et trajets avec alertes de dépassement et quotas tickets CRP." 
      },
      { 
        id: "2-4", 
        title: "Communication Famille", 
        description: "Génération automatique de messages bienveillants pour informer des changements de planning sans délai." 
      }
    ],
    scenarios: [
      {
        id: "arret-maladie-express",
        title: "Gestion d'un arrêt maladie subit",
        subtitle: "“Trouver la solution parfaite en 3 clics”",
        sections: [
          {
            title: "❌ Hier (Le cauchemar du matin)",
            subtitle: "7h30 : appel d'une aide malade. Panique.",
            type: "negative",
            items: [
              "Ouvrir 3 logiciels différents pour trouver qui est libre",
              "Appeler 10 personnes qui ne répondent pas",
              "45 minutes de stress pour une solution 'par défaut'"
            ]
          },
          {
            title: "✅ Aujourd’hui (La sérénité)",
            subtitle: "La plateforme propose :",
            type: "positive",
            items: [
              "Calcul immédiat de la meilleure option (proximité)",
              "Vérification automatique de la connaissance du bénéficiaire",
              "Envoi groupé d'une proposition par notification"
            ]
          },
          {
            title: "💡 Suggestion IA",
            type: "visual",
            items: [
              "Sophie : Disponible, à 5 min de trajet, déjà intervenue",
              "Message prêt : 'Besoin renfort chez Mme Dupont'"
            ]
          },
          {
            title: "🛡️ Décision",
            type: "alert",
            items: [
              "Le coordinateur valide d'un simple clic.",
              "Le planning est mis à jour partout."
            ]
          }
        ],
        result: [
          "Remplacement trouvé en 3 minutes",
          "Zéro appel inutile aux aides",
          "Continuité de service garantie"
        ]
      }
    ],
    color: "indigo-600",
    lightColor: "indigo-50",
    tagline: "L'apaisement opérationnel au quotidien."
  },
  {
    id: 3,
    number: "BRIQUE 03",
    title: "Direction & Qualité",
    subtitle: "Permettre aux dirigeants de piloter avec une longueur d'avance en transformant la donnée en levier de croissance sereine.",
    objective: "Offrir une vision à 360° sur la performance humaine et la conformité pour garantir l'excellence du service.",
    context: "L’IA analyse les masses de données pour faire ressortir les vrais enjeux : l'anticipation du turnover et la preuve de qualité.",
    benefits: [
      "Anticipation préventive du turnover/burnout",
      "Garantie de conformité documentaire totale",
      "Tableaux de bord stratégiques prêts à l'emploi",
      "Preuve de qualité pour les tutelles (Département)"
    ],
    features: [
      { 
        id: "3-1", 
        title: "Analyseur de Climat Social", 
        description: "Détection des signes avant-coureurs de fatigue ou de désengagement par l'analyse des signaux faibles." 
      },
      { 
        id: "3-2", 
        title: "Audit Automatisé", 
        description: "Vérification permanente de la validité des pièces dans chaque dossier bénéficiaire et salarié (zéro oubli)." 
      },
      { 
        id: "3-3", 
        title: "Indice Qualité Perçue", 
        description: "Corrélation entre temps de trajet, ponctualité et retours familles pour un pilotage par la satisfaction." 
      },
      { 
        id: "3-4", 
        title: "Prévision de Charge", 
        description: "Simulation de l'impact des nouveaux contrats sur la saturation des équipes avant signature." 
      }
    ],
    scenarios: [
      {
        id: "audit-qualite-permanent",
        title: "Audit Qualité & Conformité",
        subtitle: "“Être prêt pour un contrôle à tout instant”",
        sections: [
          {
            title: "❌ Risque Actuel (L'inconnu documentaire)",
            subtitle: "Une pièce manquante peut bloquer un financement.",
            type: "negative",
            items: [
              "Passer 2 jours à vérifier manuellement les classeurs",
              "Découvrir trop tard une pièce périmée",
              "Stress lors des audits du Conseil Départemental"
            ]
          },
          {
            title: "✅ Vision Orchestra (Le contrôle total)",
            subtitle: "L'IA scanne en permanence :",
            type: "positive",
            items: [
              "Alerte automatique 30 jours avant expiration d'un document",
              "Tableau de bord 'Santé Documentaire' en temps réel",
              "Exportation instantanée des preuves de qualité"
            ]
          },
          {
            title: "📊 Dashboard Direction",
            type: "visual",
            items: [
              "Statut global : 98% Conforme",
              "Focus : 2 dossiers à mettre à jour (cliquer ici)"
            ]
          },
          {
            title: "✨ Valorisation",
            type: "alert",
            items: [
              "Rapport qualité généré pour les familles.",
              "Sérénité totale du dirigeant."
            ]
          }
        ],
        result: [
          "100% de conformité garantie",
          "Temps d'audit divisé par 10",
          "Croissance sécurisée et maîtrisée"
        ]
      }
    ],
    color: "slate-800",
    lightColor: "slate-50",
    tagline: "Piloter avec clarté, décider avec humanité."
  }
];
