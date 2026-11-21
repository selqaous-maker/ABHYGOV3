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
  {
    id: 'supplier-botte-pvc-alimentaire-blanche',
    name: 'Botte en PVC alimentaire blanche',
    categoryId: 'chaussures-securite',
    shortDescription: 'Botte de protection alimentaire blanche proposée dans la gamme du fournisseur FastMosk. Tailles et caractéristiques à confirmer sur devis.',
    galleryImages: [{ src: '/src/assets/images/fastmosk/botte-en-pvc-alimentaire-blanche.jpg', alt: 'Botte blanche en PVC alimentaire' }],
    technicalNotes: 'Référence fournisseur FastMosk · tailles et détails techniques à confirmer.',
    isDemo: false,
  },
  {
    id: 'supplier-casque-anti-bruit',
    name: 'Casque anti-bruit',
    categoryId: 'casques-securite',
    shortDescription: 'Protection auditive individuelle proposée dans la gamme du fournisseur FastMosk. Niveau d’atténuation à confirmer sur devis.',
    galleryImages: [{ src: '/src/assets/images/fastmosk/casque-anti-bruit.jpg', alt: 'Casque anti-bruit de protection auditive' }],
    technicalNotes: 'Référence fournisseur FastMosk · niveau d’atténuation à confirmer.',
    isDemo: false,
  },
  {
    id: 'supplier-chaussures-securite-ars',
    name: 'Chaussures de sécurité ARS',
    categoryId: 'chaussures-securite',
    shortDescription: 'Chaussures de sécurité ARS proposées dans la gamme du fournisseur FastMosk. Pointures et caractéristiques à confirmer sur devis.',
    galleryImages: [{ src: '/src/assets/images/fastmosk/chaussures-de-securite-ars.jpg', alt: 'Chaussures de sécurité ARS' }],
    technicalNotes: 'Référence fournisseur FastMosk · pointures et caractéristiques à confirmer.',
    isDemo: false,
  },
  {
    id: 'supplier-chaussures-securite-mts',
    name: 'Chaussures de sécurité MTS',
    categoryId: 'chaussures-securite',
    shortDescription: 'Chaussures de sécurité MTS proposées dans la gamme du fournisseur FastMosk. Pointures et caractéristiques à confirmer sur devis.',
    galleryImages: [{ src: '/src/assets/images/fastmosk/chaussures-de-securite-mts.jpg', alt: 'Chaussures de sécurité MTS' }],
    technicalNotes: 'Référence fournisseur FastMosk · pointures et caractéristiques à confirmer.',
    isDemo: false,
  },
  {
    id: 'supplier-gant-bicolore',
    name: 'Gant bicolore',
    categoryId: 'gants-protection',
    shortDescription: 'Gant de protection bicolore proposé dans la gamme du fournisseur FastMosk. Matière et niveau de protection à confirmer sur devis.',
    galleryImages: [{ src: '/src/assets/images/fastmosk/gant-bicolore.jpg', alt: 'Gant bicolore de protection professionnelle' }],
    technicalNotes: 'Référence fournisseur FastMosk · matière et niveau de protection à confirmer.',
    isDemo: false,
  },
  {
    id: 'supplier-lunette-protection',
    name: 'Lunette de protection',
    categoryId: 'lunettes-visieres',
    shortDescription: 'Lunette de protection proposée dans la gamme du fournisseur FastMosk. Caractéristiques de l’oculaire à confirmer sur devis.',
    galleryImages: [{ src: '/src/assets/images/fastmosk/lunette-de-protection.jpg', alt: 'Lunette de protection professionnelle' }],
    technicalNotes: 'Référence fournisseur FastMosk · caractéristiques de l’oculaire à confirmer.',
    isDemo: false,
  },
  {
    id: 'supplier-masque-climax',
    name: 'Masque Climax',
    categoryId: 'masques-protection',
    shortDescription: 'Masque Climax proposé dans la gamme du fournisseur FastMosk. Référence, filtres et niveau de protection à confirmer sur devis.',
    galleryImages: [{ src: '/src/assets/images/fastmosk/masque-climax.jpg', alt: 'Masque Climax de protection respiratoire' }],
    technicalNotes: 'Référence fournisseur FastMosk · filtres et niveau de protection à confirmer.',
    isDemo: false,
  },
  {
    id: 'supplier-sabot',
    name: 'Sabot de protection',
    categoryId: 'chaussures-securite',
    shortDescription: 'Sabot de protection proposé dans la gamme du fournisseur FastMosk. Pointures et caractéristiques à confirmer sur devis.',
    galleryImages: [{ src: '/src/assets/images/fastmosk/sabot.jpg', alt: 'Sabot de protection professionnel' }],
    technicalNotes: 'Référence fournisseur FastMosk · pointures et caractéristiques à confirmer.',
    isDemo: false,
  },

  {
    id: 'supplier-blouse-a-usage-unique',
    name: 'Blouse à usage unique',
    categoryId: 'vetements-combinaisons',
    shortDescription: 'Blouse à usage unique proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.',
    galleryImages: [{ src: '/src/assets/images/fastmosk/blouse-a-usage-unique.jpg', alt: 'Blouse à usage unique' }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.',
    isDemo: false,
  },
  {
    id: 'supplier-charlotte-a-usage-unique',
    name: 'Charlotte à usage unique',
    categoryId: 'vetements-combinaisons',
    shortDescription: 'Charlotte à usage unique proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.',
    galleryImages: [{ src: '/src/assets/images/fastmosk/charlotte-a-usage-unique.jpg', alt: 'Charlotte à usage unique' }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.',
    isDemo: false,
  },
  {
    id: 'supplier-couvre-botte-a-usage-unique',
    name: 'Couvre-botte à usage unique',
    categoryId: 'chaussures-securite',
    shortDescription: 'Couvre-botte à usage unique proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.',
    galleryImages: [{ src: '/src/assets/images/fastmosk/couvre-botte-a-usage-unique.jpg', alt: 'Couvre-botte à usage unique' }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.',
    isDemo: false,
  },
  {
    id: 'supplier-couvre-chaussure-a-usage-unique',
    name: 'Couvre-chaussure à usage unique',
    categoryId: 'vetements-combinaisons',
    shortDescription: 'Couvre-chaussure à usage unique proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.',
    galleryImages: [{ src: '/src/assets/images/fastmosk/couvre-chaussure-a-usage-unique.jpg', alt: 'Couvre-chaussure à usage unique' }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.',
    isDemo: false,
  },
  {
    id: 'supplier-gant-jetable-en-nitrile-bleu',
    name: 'Gant jetable en nitrile bleu',
    categoryId: 'gants-protection',
    shortDescription: 'Gant jetable en nitrile bleu proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.',
    galleryImages: [{ src: '/src/assets/images/fastmosk/gant-jetable-en-nitrile-bleu.jpg', alt: 'Gant jetable en nitrile bleu' }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.',
    isDemo: false,
  },
  {
    id: 'supplier-gant-jetable-en-nitrile-bleu-2',
    name: 'Gant jetable en nitrile bleu renforcé',
    categoryId: 'gants-protection',
    shortDescription: 'Gant jetable en nitrile bleu renforcé proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.',
    galleryImages: [{ src: '/src/assets/images/fastmosk/gant-jetable-en-nitrile-bleu-2.jpg', alt: 'Gant jetable en nitrile bleu renforcé' }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.',
    isDemo: false,
  },
  {
    id: 'supplier-gant-jetable-en-vinyle',
    name: 'Gant jetable en vinyle',
    categoryId: 'gants-protection',
    shortDescription: 'Gant jetable en vinyle proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.',
    galleryImages: [{ src: '/src/assets/images/fastmosk/gant-jetable-en-vinyle.jpg', alt: 'Gant jetable en vinyle' }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.',
    isDemo: false,
  },
  {
    id: 'supplier-manchette-a-usage-unique',
    name: 'Manchette à usage unique',
    categoryId: 'gants-protection',
    shortDescription: 'Manchette à usage unique proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.',
    galleryImages: [{ src: '/src/assets/images/fastmosk/manchette-a-usage-unique.jpg', alt: 'Manchette à usage unique' }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.',
    isDemo: false,
  },
  {
    id: 'supplier-botte-de-protection-alimentaire-blanche',
    name: 'Botte de protection alimentaire blanche',
    categoryId: 'chaussures-securite',
    shortDescription: 'Botte de protection alimentaire blanche proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.',
    galleryImages: [{ src: '/src/assets/images/fastmosk/botte-de-protection-alimentaire-blanche.jpg', alt: 'Botte de protection alimentaire blanche' }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.',
    isDemo: false,
  },
  {
    id: 'supplier-botte-en-pvc-vert',
    name: 'Botte en PVC vert',
    categoryId: 'chaussures-securite',
    shortDescription: 'Botte en PVC vert proposé dans la gamme du fournisseur FastMosk. Les tailles, matières et caractéristiques sont à confirmer sur devis.',
    galleryImages: [{ src: '/src/assets/images/fastmosk/botte-en-pvc-vert.jpg', alt: 'Botte en PVC vert' }],
    technicalNotes: 'Référence fournisseur FastMosk · détails techniques à confirmer.',
    isDemo: false,
  },

];
