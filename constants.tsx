
import { Brique } from './types';

export const BRIQUES: Brique[] = [
  {
    id: 1,
    number: "SOLUTION 01",
    title: "IA pour les Équipes Terrain",
    subtitle: "Apporter une présence experte et rassurante aux aides à domicile lorsqu'elles interviennent seules. L'objectif est de supprimer le sentiment d'isolement et de réduire instantanément le stress lié aux décisions d'urgence.",
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
        description: "Transformation de la parole en notes structurées et professionnelles pour éviter la surcharge administrative le soir." 
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
              "Recherche désespérée du numéro de la famille ou de l'agence",
              "Appel de l'agence : personne ne décroche (pause déjeuner)",
              "L'intervenante prend une décision risquée par peur de mal faire."
            ]
          },
          {
            title: "✅ Avec Orchestra Intelligence",
            subtitle: "L'IA guide en temps réel :",
            type: "positive",
            items: [
              "Analyse vocale de la situation par l'assistant",
              "Rappel immédiat des protocoles de secours (PLS, points d'appui)",
              "Alerte automatique transmise à la coordination avec géolocalisation"
            ]
          },
          {
            title: "📱 Interface mobile de l'aide",
            type: "visual",
            items: [
              "Écran de guidage : 'Vérifiez la conscience', 'Ne pas mobiliser'",
              "Bouton d'urgence : Connexion directe avec un expert"
            ]
          },
          {
            title: "📝 Soutien post-événement",
            type: "alert",
            items: [
              "Génération du rapport d'incident en 30 secondes par dictée vocale.",
              "Débriefing émotionnel automatisé pour rassurer l'intervenante."
            ]
          }
        ],
        result: [
          "Sécurité vitale garantie",
          "Stress réduit de 80%",
          "Rapport d'incident exhaustif",
          "Coordination informée instantanément"
        ]
      }
    ],
    color: "blue-600",
    lightColor: "blue-50",
    tagline: "Sécuriser l'humain au cœur du domicile."
  },
  {
    id: 2,
    number: "SOLUTION 02",
    title: "Coordination & Planning",
    subtitle: "Transformer le chaos des imprévus quotidiens en un flux organisé et prévisible.",
    objective: "La plateforme libère les coordinateurs des tâches répétitives pour leur redonner leur vrai rôle : l'écoute et l'accompagnement humain.",
    context: "L’IA gère la complexité logistique pour que l'humain garde la main sur la décision finale et la relation.",
    benefits: [
      "Gestion des absences réglée en moins de 5 minutes",
      "Équilibre vie pro/perso protégé pour les aides",
      "Transparence et confiance totale pour les familles",
      "Réduction drastique de la charge mentale au bureau"
    ],
    features: [
      { id: "2-1", title: "Gestionnaire d'Absences", description: "Identification instantanée du remplaçant idéal selon la proximité, l'historique et la charge de travail actuelle." },
      { id: "2-2", title: "Optimisation de Tournée", description: "Réorganisation géographique pour supprimer les allers-retours inutiles et limiter la fatigue des aides." },
      { id: "2-3", title: "Suivi des Heures Automatisé", description: "Calcul en temps réel des interventions et trajets avec alertes de dépassement (35h) et quotas CRP." },
      { id: "2-4", title: "Communication Famille IA", description: "Génération automatique de messages bienveillants pour informer des changements de planning sans délai." }
    ],
    scenarios: [
      {
        id: "suivi-heures-detail",
        title: "Automatisation du suivi des heures & alertes planning",
        subtitle: "(Interventions + trajets, aujourd’hui faits à la main)",
        sections: [
          {
            title: "1️⃣ La situation aujourd’hui (très concrète)",
            subtitle: "Ce que fait une coordinatrice / RH aujourd’hui :",
            type: "negative",
            items: [
              "Ouvre un premier onglet pour les heures chez les bénéficiaires",
              "Ouvre un second onglet pour les heures de trajets",
              "Additionne à la main et vérifie la proximité des 35h",
              "Regarde s'il y a un dépassement et refait tout pour chaque salariée",
              "Constat : C’est long, répétitif, source d’erreurs et personne n’est alerté à temps."
            ]
          },
          {
            title: "2️⃣ Le principe avec l’IA (simple à comprendre)",
            subtitle: "Ce que fait la plateforme à la place :",
            type: "positive",
            items: [
              "Va chercher les données : interventions + trajets automatiquement",
              "Les cumule quotidiennement sans intervention humaine",
              "Compare en temps réel au temps de travail attendu",
              "Génère un récapitulatif clair et des alertes utiles"
            ]
          },
          {
            title: "3️⃣ Ce que ça donne concrètement (résultat visible)",
            type: "visual",
            items: [
              "📊 Un récap automatique par semaine pour chaque salariée",
              "Détails : Heures bénéficiaires, Heures trajet, Total, Écart / 35h",
              "Statut clair : OK, À surveiller ou Dépassement",
              "Plus besoin d’ouvrir plusieurs onglets."
            ]
          },
          {
            title: "4️⃣ & 5️⃣ Alertes intelligentes & Communication",
            type: "alert",
            items: [
              "🔔 Alertes internes : 'Attention, Sophie atteindra 35h jeudi midi'",
              "💳 Alertes CRP : '80% des tickets utilisés ce mois-ci, risque de dépassement'",
              "📱 Messages aides : 'Bonjour, à date vous êtes à 32h cette semaine. Le planning reste conforme.'"
            ]
          }
        ],
        result: [
          "Pilotage au lieu de rattrapage",
          "Zéro erreur de calcul",
          "Communication fluide et factuelle",
          "Gain de temps RH majeur"
        ]
      },
      {
        id: "gestion-absences",
        title: "Gestion intelligente des absences",
        subtitle: "“Proposer rapidement des remplaçants adaptés”",
        sections: [
          {
            title: "❌ Aujourd’hui (réalité terrain)",
            subtitle: "7h30 : une aide appelle, elle est absente. Panique au bureau.",
            type: "negative",
            items: [
              "La coordinatrice ouvre son logiciel planning",
              "Appelle 5 personnes au hasard une par une",
              "Explique 5 fois la même urgence au téléphone",
              "45 minutes plus tard → solution souvent imparfaite"
            ]
          },
          {
            title: "✅ Concrètement avec l’IA",
            subtitle: "Ce que fait l’IA (en coulisses) :",
            type: "positive",
            items: [
              "Analyse instantanée des disponibilités réelles",
              "Vérifie qui est déjà proche géographiquement",
              "Cible qui connaît déjà le bénéficiaire"
            ]
          },
          {
            title: "👉 Ce que voit la coordinatrice",
            type: "visual",
            items: [
              "👩‍⚕️ Marie – 10 min de trajet – connaît déjà Mme Dupont",
              "👩‍⚕️ Sofia – 15 min – compétences adaptés"
            ]
          },
          {
            title: "💬 Ce que la plateforme prépare",
            type: "alert",
            items: [
              "Message prêt à envoyer : 'Bonjour Marie, une intervention est disponible ce matin chez Mme Dupont. Seriez-vous disponible ?'"
            ]
          }
        ],
        result: [
          "Remplacement trouvé plus vite",
          "Moins de stress au bureau",
          "Moins d’appels inutiles",
          "Continuité de service garantie"
        ]
      },
      {
        id: "optimisation-tournees",
        title: "Optimisation des tournées",
        subtitle: "“Réduire les trajets inutiles et la fatigue”",
        sections: [
          {
            title: "❌ Aujourd’hui",
            subtitle: "Les tournées se construisent par habitude historique.",
            type: "negative",
            items: [
              "Beaucoup de petits trajets en doublon",
              "Aides fatiguées par la route inutile",
              "Retards en cascade impossibles à rattraper"
            ]
          },
          {
            title: "✅ Concrètement avec l’IA",
            subtitle: "Ce que fait l’IA :",
            type: "positive",
            items: [
              "Analyse adresses, horaires et durées d'intervention",
              "Détecte les allers-retours évitables",
              "Identifie les zones mal équilibrées entre les aides"
            ]
          },
          {
            title: "💡 Suggestions d'amélioration",
            type: "visual",
            items: [
              "👉 “Et si on regroupait ces deux interventions ?”",
              "👉 “Et si on échangeait Mme Martin et Mme Leroy entre ces deux aides ?”"
            ]
          },
          {
            title: "🛡️ Aide à la décision",
            type: "alert",
            items: [
              "Des suggestions simples, pas de changement automatique.",
              "La coordinatrice garde le contrôle total."
            ]
          }
        ],
        result: [
          "Moins de temps dans la voiture",
          "Moins de fatigue physique",
          "Meilleure ponctualité",
          "Fidélisation des équipes"
        ]
      }
    ],
    color: "indigo-600",
    lightColor: "indigo-50",
    tagline: "L'apaisement opérationnel au quotidien."
  },
  {
    id: 3,
    number: "SOLUTION 03",
    title: "Direction & Qualité",
    subtitle: "Permettre aux dirigeants de piloter leur structure avec une longueur d'avance. La plateforme analyse les masses de données pour faire ressortir les vrais enjeux : la qualité du service et le bien-être des équipes.",
    objective: "Offrir une vision à 360° sur la performance humaine et opérationnelle pour garantir une croissance sereine et une qualité de soin irréprochable.",
    context: "L’IA transforme les chiffres en actions bienveillantes pour une direction éclairée.",
    benefits: [
      "Anticipation du turnover et du burnout",
      "Garantie de conformité (zéro oubli documentaire)",
      "Preuves de qualité pour les tutelles (Département)",
      "Sérénité du dirigeant face à la croissance"
    ],
    features: [
      { id: "3-1", title: "Anticipation de la charge et des pics d’activité", description: "Alertes avant saturation des équipes pour un pilotage préventif et serein." },
      { id: "3-2", title: "Audit Automatisé", description: "Vérification en temps réel de la validité des pièces dans chaque dossier bénéficiaire et salarié." },
      { id: "3-3", title: "Analyseur d'Impact Qualité", description: "Corrélation entre les temps de trajet et la satisfaction des bénéficiaires pour optimiser la qualité perçue." },
      { id: "3-4", title: "Rapports de Vision", description: "Tableaux de bord épurés pour décider avec des faits, pas des intuitions, lors des réunions de direction." }
    ],
    color: "slate-800",
    lightColor: "slate-50",
    tagline: "Piloter avec clarté, décider avec humanité."
  }
];
