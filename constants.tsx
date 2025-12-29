
import { Brique } from './types';

export const BRIQUES: Brique[] = [
  {
    id: 1,
    number: "SOLUTION 01",
    title: "IA pour les Équipes Terrain",
    subtitle: "Sécurité, expertise et sérénité au domicile",
    objective: "Apporter une présence experte et rassurante aux aides à domicile lorsqu'elles interviennent seules. L'objectif est de supprimer le sentiment d'isolement et de réduire instantanément le stress lié aux décisions d'urgence.",
    context: "L’IA n'est pas un outil de contrôle, c'est une expertise augmentée disponible 24h/24 dans la poche de l'intervenante pour la guider et la valoriser.",
    benefits: [
      "Réponses immédiates en cas de chute ou malaise",
      "Soutien émotionnel après un incident difficile",
      "Fiabilisation des gestes techniques et protocoles",
      "Valorisation du savoir-faire métier sur le terrain"
    ],
    features: [
      { id: "1-1", title: "Assistant « Situations Délicates »", description: "Protocoles interactifs en cas de chute, refus d'aide agressif ou malaise, guidant l'aide pas à pas avec calme." },
      { id: "1-2", title: "Mémoire du Bénéficiaire", description: "Synthèse vocale des habitudes de vie et alertes sur les points de vigilance spécifiques avant d'entrer au domicile." },
      { id: "1-3", title: "Vigilance Médicamenteuse", description: "Aide à la compréhension des ordonnances et détection visuelle des signes d'effets secondaires fréquents." },
      { id: "1-4", title: "Dictée de Compte-rendu", description: "Transformation de la parole en notes structurées et professionnelles pour éviter la surcharge administrative le soir." }
    ],
    scenarios: [
      {
        id: "chute-domicile",
        title: "Gestion d'une chute au domicile",
        subtitle: "“Ne jamais laisser l'intervenante seule face à l'urgence”",
        before: {
          title: "❌ Aujourd’hui (Stress & Isolement)",
          description: "Mme Martin est au sol. L'intervenante arrive.",
          steps: [
            "Panique : faut-il la relever ou appeler les pompiers ?",
            "Recherche désespérée du numéro de la famille ou de l'agence",
            "Appel de l'agence : personne ne décroche (pause déjeuner)",
            "L'intervenante prend une décision risquée par peur de mal faire."
          ]
        },
        after: {
          title: "✅ Avec Orchestra Intelligence",
          internalTitle: "L'IA guide en temps réel",
          internalSteps: [
            "Analyse vocale de la situation par l'assistant",
            "Rappel immédiat des protocoles de secours (PLS, points d'appui)",
            "Alerte automatique transmise à la coordination avec géolocalisation"
          ],
          userTitle: "Interface mobile de l'aide",
          userSteps: [
            "📱 Écran de guidage : 'Vérifiez la conscience', 'Ne pas mobiliser'",
            "📱 Bouton d'urgence : Connexion directe avec un expert"
          ],
          prepTitle: "Soutien post-événement",
          prepSteps: [
            "Génération du rapport d'incident en 30 secondes par dictée vocale.",
            "Débriefing émotionnel automatisé pour rassurer l'intervenante."
          ]
        },
        result: [
          "Sécurité vitale garantie",
          "Stress réduit de 80%",
          "Rapport d'incident exhaustif",
          "Coordination informée instantanément"
        ]
      },
      {
        id: "refus-soin",
        title: "Gestion du refus d'aide agressif",
        subtitle: "“Désamorcer les tensions par l'expertise comportementale”",
        before: {
          title: "❌ Aujourd’hui",
          description: "M. Legrand refuse catégoriquement sa toilette et devient insultant.",
          steps: [
            "L'intervenante se sent personnellement attaquée",
            "Épuisement émotionnel et risque de burn-out",
            "Départ précipité du domicile, intervention non réalisée",
            "La famille est mécontente, l'agence perd un contrat."
          ]
        },
        after: {
          title: "✅ Avec l'Expertise IA",
          internalTitle: "L'IA analyse et conseille",
          internalSteps: [
            "Identification des triggers (Alzheimer, fatigue, douleur)",
            "Suggestion de techniques de communication non-violente",
            "Rappel des éléments qui rassurent M. Legrand spécifiquement"
          ],
          userTitle: "Conseils immédiats",
          userSteps: [
            "👉 'Essayez de lui parler de sa passion pour le jardinage'",
            "👉 'Proposez-lui de décaler la toilette de 15 minutes'",
            "👉 'Restez à sa hauteur, ne soyez pas surplombante'"
          ]
        },
        result: [
          "Désamorçage des conflits",
          "Préservation de la santé mentale",
          "Continuité de l'intervention",
          "Professionnalisme renforcé"
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
    subtitle: "L'intelligence logistique pour un bureau apaisé",
    objective: "Transformer le chaos des imprévus quotidiens en un flux organisé et prévisible. La plateforme libère les coordinateurs des tâches répétitives pour leur redonner leur vrai rôle : l'écoute et l'accompagnement humain.",
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
        before: {
          title: "1️⃣ La situation aujourd’hui (très concrète)",
          description: "Ce que fait une coordinatrice / RH aujourd’hui :",
          steps: [
            "Ouvre un premier onglet pour les heures chez les bénéficiaires",
            "Ouvre un second onglet pour les heures de trajets",
            "Additionne à la main et vérifie la proximité des 35h",
            "Regarde s'il y a un dépassement et refait tout pour chaque salariée"
          ]
        },
        after: {
          title: "2️⃣ Le principe avec l’IA (simple à comprendre)",
          internalTitle: "Ce que fait la plateforme à la place",
          internalSteps: [
            "Va chercher les données : interventions + trajets automatiquement",
            "Les cumule quotidiennement sans intervention humaine",
            "Compare en temps réel au temps de travail attendu"
          ],
          userTitle: "3️⃣ Ce que ça donne concrètement",
          userSteps: [
            "📊 Un récap automatique par semaine pour chaque salariée",
            "Statut clair : OK, À surveiller ou Dépassement",
            "Plus besoin d’ouvrir plusieurs onglets."
          ]
        },
        result: [
          "Pilotage au lieu de rattrapage",
          "Zéro erreur de calcul",
          "Gain de temps RH majeur"
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
    subtitle: "Pilotage stratégique et vision humaine",
    objective: "Permettre aux dirigeants de piloter leur structure avec une longueur d'avance. La plateforme analyse les masses de données pour faire ressortir les vrais enjeux : la qualité du service et le bien-être des équipes.",
    context: "L’IA transforme les chiffres en actions bienveillantes pour une direction éclairée.",
    benefits: [
      "Anticipation du turnover et du burnout",
      "Garantie de conformité (zéro oubli documentaire)",
      "Preuves de qualité pour les tutelles (Département)",
      "Sérénité du dirigeant face à la croissance"
    ],
    features: [
      { id: "3-1", title: "Anticipation de la charge", description: "Alertes avant saturation des équipes pour un pilotage préventif et serein." },
      { id: "3-2", title: "Audit Automatisé", description: "Vérification en temps réel de la validité des pièces dans chaque dossier bénéficiaire et salarié." },
      { id: "3-3", title: "Analyseur d'Impact Qualité", description: "Corrélation entre les temps de trajet et la satisfaction des bénéficiaires." },
      { id: "3-4", title: "Rapports de Vision", description: "Tableaux de bord épurés pour décider avec des faits lors des réunions de direction." }
    ],
    color: "slate-800",
    lightColor: "slate-50",
    tagline: "Piloter avec clarté, décider avec humanité."
  }
];
