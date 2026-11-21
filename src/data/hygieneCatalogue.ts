import { HygieneCategory, HygieneProductItem } from '../types/site';

/**
 * Centralized provisional hygiene categories and demonstration product entries.
 * Replace or extend entries here when real product references and technical sheets are confirmed.
 */
export const HYGIENE_CATALOGUE_NOTICE = {
  eyebrow: 'Catalogue provisoire · Démonstration',
  text:
    'Les catégories et fiches présentées ci-dessous sont des propositions de démonstration avec visuels génériques. Elles ne constituent pas un inventaire confirmé ni des spécifications contractuelles.',
} as const;

export const HYGIENE_CATEGORIES: HygieneCategory[] = [
  {
    id: 'produits-nettoyage',
    label: 'Produits de nettoyage',
    description:
      "Solutions d'entretien courant et détergents pour sols et surfaces professionnelles.",
  },
  {
    id: 'produits-desinfectants',
    label: 'Produits désinfectants',
    description:
      'Solutions destinées au traitement hygiénique des surfaces et zones sensibles.',
  },
  {
    id: 'savons-hygiene-mains',
    label: 'Savons et hygiène des mains',
    description:
      "Produits lavants et solutions pour l'hygiène cutanée des équipes et sanitaires.",
  },
  {
    id: 'essuyage-papier-sanitaire',
    label: 'Essuyage et papier sanitaire',
    description:
      "Bobines d'essuyage, essuie-mains et papiers sanitaires à usage professionnel.",
  },
  {
    id: 'distributeurs-accessoires',
    label: 'Distributeurs et accessoires',
    description:
      'Appareils muraux et accessoires de distribution pour savons et consommables papier.',
  },
  {
    id: 'materiel-nettoyage',
    label: 'Matériel de nettoyage',
    description:
      'Outils manuels, textiles techniques et équipements de mise en œuvre sur site.',
  },
];

export const HYGIENE_DEMO_PRODUCTS: HygieneProductItem[] = [
  {
    id: 'demo-nettoyage-sols',
    name: 'Détergent neutre multi-surfaces',
    categoryId: 'produits-nettoyage',
    description:
      "Exemple de produit d'entretien courant pour le lavage manuel ou mécanisé des sols et surfaces lavables.",
    imageSrc: '/src/assets/images/demo_cat_nettoyage_1795121769918.jpg',
    imageAlt: 'Visuel générique de bidons et pulvérisateur pour produits de nettoyage',
    isDemo: true,
  },
  {
    id: 'demo-degraissant-pro',
    name: 'Dégraissant professionnel polyvalent',
    categoryId: 'produits-nettoyage',
    description:
      'Exemple de solution destinée au dégraissage des plans de travail, ateliers et zones techniques.',
    imageSrc: '/src/assets/images/demo_cat_nettoyage_1795121769918.jpg',
    imageAlt: 'Visuel générique de contenant professionnel de dégraissant',
    isDemo: true,
  },
  {
    id: 'demo-desinfectant-surfaces',
    name: 'Solution désinfectante pour surfaces',
    categoryId: 'produits-desinfectants',
    description:
      "Exemple de produit destiné à l'entretien hygiénique des surfaces fréquemment sollicitées.",
    imageSrc: '/src/assets/images/demo_cat_desinfectant_1795121772139.jpg',
    imageAlt: 'Visuel générique de bidons et vaporisateurs désinfectants',
    isDemo: true,
  },
  {
    id: 'demo-desinfectant-sanitaires',
    name: 'Nettoyant désinfectant sanitaires',
    categoryId: 'produits-desinfectants',
    description:
      "Exemple de formulation dédiée à l'hygiène quotidienne des blocs sanitaires et vestiaires.",
    imageSrc: '/src/assets/images/demo_cat_desinfectant_1795121772139.jpg',
    imageAlt: 'Visuel générique de bidons sanitaires',
    isDemo: true,
  },
  {
    id: 'demo-savon-lavant-doux',
    name: 'Savon liquide lavant usage fréquent',
    categoryId: 'savons-hygiene-mains',
    description:
      'Exemple de savon liquide destiné au lavage régulier des mains dans les espaces professionnels.',
    imageSrc: '/src/assets/images/demo_cat_savon_mains_1795121771359.jpg',
    imageAlt: 'Visuel générique de flacons pompe et recharge pour savon mains',
    isDemo: true,
  },
  {
    id: 'demo-gel-hygiene-mains',
    name: 'Lotion pour hygiène des mains',
    categoryId: 'savons-hygiene-mains',
    description:
      "Exemple de solution dédiée à l'hygiène rapide des mains aux points d'accès et postes de travail.",
    imageSrc: '/src/assets/images/demo_cat_savon_mains_1795121771359.jpg',
    imageAlt: 'Visuel générique de flacon pour hygiène des mains',
    isDemo: true,
  },
  {
    id: 'demo-bobine-essuyage',
    name: "Bobine d'essuyage industriel",
    categoryId: 'essuyage-papier-sanitaire',
    description:
      "Exemple de bobine papier destinée aux besoins d'essuyage en atelier, laboratoire ou entrepôt.",
    imageSrc: '/src/assets/images/demo_cat_essuyage_papier_1795121772208.jpg',
    imageAlt: "Visuel générique de bobines d'essuyage et papier sanitaire",
    isDemo: true,
  },
  {
    id: 'demo-essuie-mains-papier',
    name: 'Essuie-mains pliés & papier sanitaire',
    categoryId: 'essuyage-papier-sanitaire',
    description:
      "Exemple de consommables papier pour l'équipement des sanitaires et points de lavage.",
    imageSrc: '/src/assets/images/demo_cat_essuyage_papier_1795121772208.jpg',
    imageAlt: 'Visuel générique de rouleaux et essuie-mains papier',
    isDemo: true,
  },
  {
    id: 'demo-distributeur-savon',
    name: 'Distributeur mural pour savon',
    categoryId: 'distributeurs-accessoires',
    description:
      'Exemple de distributeur mural conçu pour un dosage régulier dans les zones sanitaires.',
    imageSrc: '/src/assets/images/demo_cat_distributeurs_1795121771820.jpg',
    imageAlt: 'Visuel générique de distributeur mural de savon et papier',
    isDemo: true,
  },
  {
    id: 'demo-distributeur-papier',
    name: 'Distributeur de papier essuie-mains',
    categoryId: 'distributeurs-accessoires',
    description:
      "Exemple d'appareil mural destiné à la distribution contrôlée d'essuie-mains ou de rouleaux.",
    imageSrc: '/src/assets/images/demo_cat_distributeurs_1795121771820.jpg',
    imageAlt: 'Visuel générique de distributeur mural essuie-mains',
    isDemo: true,
  },
  {
    id: 'demo-balai-microfibre',
    name: 'Système de lavage à plat microfibre',
    categoryId: 'materiel-nettoyage',
    description:
      "Exemple d'ensemble manche, support et bandeau microfibre pour l'entretien des sols.",
    imageSrc: '/src/assets/images/demo_cat_materiel_nettoyage_1795121771753.jpg',
    imageAlt: 'Visuel générique de balai microfibre, raclette et lavettes',
    isDemo: true,
  },
  {
    id: 'demo-lavettes-raclettes',
    name: 'Lavettes microfibres & raclette sol',
    categoryId: 'materiel-nettoyage',
    description:
      "Exemple de textiles techniques et accessoires manuels pour l'entretien quotidien des locaux.",
    imageSrc: '/src/assets/images/demo_cat_materiel_nettoyage_1795121771753.jpg',
    imageAlt: 'Visuel générique de raclette et textiles microfibres',
    isDemo: true,
  },
  {
    id: 'supplier-hypo-javel-24',
    name: 'Hypo Javel 24',
    categoryId: 'produits-desinfectants',
    description: 'Désinfectant alimentaire et agricole proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages détaillés à confirmer sur devis.',
    imageSrc: '/src/assets/images/demo_cat_desinfectant_1795121772139.jpg',
    imageAlt: 'Bidon de désinfectant Hypo Javel 24 pour usage professionnel',
    technicalNotes: 'Référence fournisseur FastMosk · informations techniques à confirmer.',
    isDemo: false,
  },
  {
    id: 'supplier-hypo-javel-12',
    name: 'Hypo Javel 12',
    categoryId: 'produits-desinfectants',
    description: 'Désinfectant alimentaire et agricole proposé dans la gamme du fournisseur FastMosk. Conditionnement et usages détaillés à confirmer sur devis.',
    imageSrc: '/src/assets/images/demo_cat_desinfectant_1795121772139.jpg',
    imageAlt: 'Bidon de désinfectant Hypo Javel 12 pour usage professionnel',
    technicalNotes: 'Référence fournisseur FastMosk · informations techniques à confirmer.',
    isDemo: false,
  },

];
