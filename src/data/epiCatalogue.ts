import { EpiCategory, EpiProductItem } from '../types/site';

/**
 * Centralized provisional EPI categories and demonstration product entries.
 * Replace or extend entries here once confirmed inventory and manufacturer documentation are provided.
 * Do not add unverified EN/CE/chemical resistance claims without real product sheets.
 */
export const EPI_CATALOGUE_NOTICE = {
  eyebrow: 'Catalogue provisoire · Démonstration',
  text:
    'Les catégories et fiches ci-dessous sont présentées à titre de démonstration sans confirmation de stock, de marque ou de niveau normatif. Les spécifications exactes et documents techniques sont communiqués exclusivement sur base de références confirmées lors de votre devis.',
} as const;

export const EPI_CATEGORIES: EpiCategory[] = [
  {
    id: 'gants-protection',
    label: 'Gants de protection',
    description:
      "Équipements destinés à la protection des mains pour les tâches de manutention et d'atelier.",
  },
  {
    id: 'masques-protection',
    label: 'Masques de protection',
    description:
      'Solutions de protection respiratoire individuelle adaptées aux environnements professionnels.',
  },
  {
    id: 'lunettes-visieres',
    label: 'Lunettes et visières',
    description:
      'Équipements dédiés à la protection des yeux et du visage contre les projections courantes.',
  },
  {
    id: 'casques-securite',
    label: 'Casques de sécurité',
    description:
      'Protections crâniennes pour chantiers, zones industrielles et opérations techniques.',
  },
  {
    id: 'chaussures-securite',
    label: 'Chaussures de sécurité',
    description:
      'Chaussures et bottes professionnelles dédiées aux environnements de travail exigeants.',
  },
  {
    id: 'vetements-combinaisons',
    label: 'Vêtements et combinaisons de protection',
    description:
      'Tenues professionnelles, gilets haute visibilité et combinaisons pour équipes sur site.',
  },
];

export const EPI_DEMO_PRODUCTS: EpiProductItem[] = [
  {
    id: 'demo-epi-gants-manutention',
    name: 'Gants de protection pour manutention',
    categoryId: 'gants-protection',
    shortDescription:
      'Exemple de paire de gants tricotés avec enduction paume pour les opérations courantes de manutention en entrepôt ou atelier.',
    galleryImages: [
      {
        src: '/src/assets/images/demo_epi_gants_1795122050776.jpg',
        alt: 'Visuel générique de gants de protection pour manutention',
      },
      {
        src: '/src/assets/images/epi_protection_showcase_1795119463291.jpg',
        alt: "Ensemble d'équipements de protection individuelle",
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-gants-atelier',
    name: "Gants de protection d'atelier",
    categoryId: 'gants-protection',
    shortDescription:
      "Exemple de gants professionnels conçus pour les postes techniques nécessitant préhension et confort d'usage.",
    galleryImages: [
      {
        src: '/src/assets/images/demo_epi_gants_1795122050776.jpg',
        alt: "Visuel générique de gants de protection d'atelier",
      },
      {
        src: '/src/assets/images/hero_abhygo_supply_1795119463619.jpg',
        alt: 'Fournitures professionnelles et équipements EPI',
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-masque-coque',
    name: 'Masque de protection respiratoire moulé',
    categoryId: 'masques-protection',
    shortDescription:
      'Exemple de masque à coque préformée destiné aux environnements nécessitant une barrière respiratoire individuelle.',
    galleryImages: [
      {
        src: '/src/assets/images/demo_epi_masques_1795122051045.jpg',
        alt: 'Visuel générique de masques de protection respiratoire',
      },
      {
        src: '/src/assets/images/epi_protection_showcase_1795119463291.jpg',
        alt: "Vue complémentaire d'équipements EPI",
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-masque-pliable',
    name: 'Masque de protection pliable à usage professionnel',
    categoryId: 'masques-protection',
    shortDescription:
      'Exemple de masque individuel pliable adapté à une distribution pratique sur site pour les équipes.',
    galleryImages: [
      {
        src: '/src/assets/images/demo_epi_masques_1795122051045.jpg',
        alt: 'Visuel générique de masques pliables de protection',
      },
      {
        src: '/src/assets/images/hero_abhygo_supply_1795119463619.jpg',
        alt: 'Contexte professionnel hygiène et EPI',
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-lunettes-claires',
    name: 'Lunettes de protection panoramiques',
    categoryId: 'lunettes-visieres',
    shortDescription:
      'Exemple de lunettes transparentes à branches enveloppantes destinées à la protection oculaire quotidienne.',
    galleryImages: [
      {
        src: '/src/assets/images/demo_epi_lunettes_1795122050662.jpg',
        alt: 'Visuel générique de lunettes de protection et visière',
      },
      {
        src: '/src/assets/images/epi_protection_showcase_1795119463291.jpg',
        alt: 'Lunettes et équipements de sécurité sur table',
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-visiere-faciale',
    name: 'Visière de protection faciale transparente',
    categoryId: 'lunettes-visieres',
    shortDescription:
      "Exemple d'écran facial réglable couvrant l'ensemble du visage lors des tâches exposées.",
    galleryImages: [
      {
        src: '/src/assets/images/demo_epi_lunettes_1795122050662.jpg',
        alt: 'Visuel générique de visière faciale de protection',
      },
      {
        src: '/src/assets/images/hero_abhygo_supply_1795119463619.jpg',
        alt: 'Équipements de sécurité et hygiène professionnelle',
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-casque-chantier',
    name: 'Casque de sécurité à coque ventilée',
    categoryId: 'casques-securite',
    shortDescription:
      'Exemple de casque industriel avec harnais réglable destiné aux zones de chantier et de manutention.',
    galleryImages: [
      {
        src: '/src/assets/images/demo_epi_casques_1795122051598.jpg',
        alt: 'Visuel générique de casques de sécurité blancs et bleu marine',
      },
      {
        src: '/src/assets/images/epi_protection_showcase_1795119463291.jpg',
        alt: 'Casque de sécurité et vêtements haute visibilité',
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-casque-industriel',
    name: 'Casque de sécurité polyvalent avec jugulaire',
    categoryId: 'casques-securite',
    shortDescription:
      'Exemple de protection crânienne avec maintien par sangle pour les interventions sur site technique.',
    galleryImages: [
      {
        src: '/src/assets/images/demo_epi_casques_1795122051598.jpg',
        alt: 'Visuel générique de casque industriel de sécurité',
      },
      {
        src: '/src/assets/images/hero_abhygo_supply_1795119463619.jpg',
        alt: 'Casque et lunettes de sécurité',
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-chaussures-montantes',
    name: 'Chaussures de sécurité montantes',
    categoryId: 'chaussures-securite',
    shortDescription:
      'Exemple de chaussures montantes à lacets pour le maintien de la cheville et le travail en environnement industriel.',
    galleryImages: [
      {
        src: '/src/assets/images/demo_epi_chaussures_1795122050970.jpg',
        alt: 'Visuel générique de chaussures de sécurité montantes',
      },
      {
        src: '/src/assets/images/epi_protection_showcase_1795119463291.jpg',
        alt: 'Sélection générale EPI',
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-chaussures-chantier',
    name: 'Chaussures de travail semelle crantée',
    categoryId: 'chaussures-securite',
    shortDescription:
      "Exemple de modèle conçu pour l'adhérence et l'endurance lors des déplacements quotidiens sur site.",
    galleryImages: [
      {
        src: '/src/assets/images/demo_epi_chaussures_1795122050970.jpg',
        alt: 'Visuel générique de chaussures de travail professionnelles',
      },
      {
        src: '/src/assets/images/hero_abhygo_supply_1795119463619.jpg',
        alt: 'Environnement industriel EPI',
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-veste-travail',
    name: 'Veste de travail professionnelle multi-poches',
    categoryId: 'vetements-combinaisons',
    shortDescription:
      'Exemple de veste professionnelle fonctionnelle adaptée aux interventions en atelier, maintenance ou logistique.',
    galleryImages: [
      {
        src: '/src/assets/images/demo_epi_vetements_1795122051283.jpg',
        alt: 'Visuel générique de veste de travail et gilet haute visibilité',
      },
      {
        src: '/src/assets/images/epi_protection_showcase_1795119463291.jpg',
        alt: 'Tenue professionnelle haute visibilité',
      },
    ],
    isDemo: true,
  },
  {
    id: 'demo-epi-gilet-signalisation',
    name: 'Gilet et combinaison de protection haute visibilité',
    categoryId: 'vetements-combinaisons',
    shortDescription:
      'Exemple de vêtement équipé de bandes rétro-réfléchissantes pour améliorer le repérage visuel des équipes.',
    galleryImages: [
      {
        src: '/src/assets/images/demo_epi_vetements_1795122051283.jpg',
        alt: 'Visuel générique de gilet haute visibilité',
      },
      {
        src: '/src/assets/images/epi_protection_showcase_1795119463291.jpg',
        alt: 'Équipement textile haute visibilité',
      },
    ],
    isDemo: true,
  },
];
