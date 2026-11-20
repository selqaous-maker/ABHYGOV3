import { DivisionOverview, NavItem } from '../types/site';

export const BRAND_INFO = {
  name: 'ABHYGO',
  logoSrc: '/assets/aistudio/ABHYGO_Logo_HQ_3x_d6625622.png',
  tagline: 'Un environnement plus propre, plus sain !',
  phoneDisplay: '+212 668 057 197',
  phoneHref: 'tel:+212668057197',
  whatsappNumber: '212668057197',
  whatsappHref:
    "https://wa.me/212668057197?text=Bonjour%20ABHYGO%2C%20je%20souhaite%20obtenir%20des%20renseignements%20concernant%20vos%20produits%20d'hygi%C3%A8ne%20professionnelle%20et%20EPI.",
  email: 'abhygoprofessional@gmail.com',
  emailHref: 'mailto:abhygoprofessional@gmail.com',
  location: 'Belfaa, Maroc',
  mapHref: 'https://maps.app.goo.gl/G24fcprqNjzqLHcr5?g_st=aw',
  primaryCta: 'Demander un devis',
  secondaryCta: 'Découvrir nos produits',
} as const;

export function buildWhatsAppDirectUrl(greeting: string): string {
  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(greeting)}`;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'accueil', label: 'Accueil', hash: '#accueil' },
  { id: 'hygiene', label: "Produits d'hygiène", hash: '#produits-hygiene' },
  { id: 'epi', label: 'EPI', hash: '#epi' },
  { id: 'apropos', label: 'À propos', hash: '#a-propos' },
  { id: 'contact', label: 'Contact', hash: '#contact' },
];

export const HERO_MEDIA = {
  src: '/src/assets/images/hero_abhygo_supply_1795119463619.jpg',
  alt: "Fournitures professionnelles d'hygiène et équipements de protection individuelle ABHYGO",
};

export const SUPPLY_DIVISIONS: Record<'hygiene' | 'epi', DivisionOverview> = {
  hygiene: {
    id: 'hygiene',
    route: 'hygiene',
    kicker: "Division 01 · Hygiène professionnelle",
    title: "Produits d'hygiène",
    description:
      "Approvisionnement B2B en solutions d'hygiène destinées aux environnements professionnels, industriels et tertiaires.",
    imageSrc: '/src/assets/images/hygiene_professionnelle_showcase_1795119464027.jpg',
    imageAlt: "Bidons concentrés, distributeurs muraux et consommables d'hygiène professionnelle",
    domains: [
      {
        index: '01',
        title: 'Hygiène des surfaces et locaux',
        summary:
          "Solutions détergentes et désinfectantes adaptées au maintien de la propreté dans les espaces professionnels.",
      },
      {
        index: '02',
        title: 'Hygiène corporelle et des mains',
        summary:
          "Savons professionnels, solutions lavantes et produits d'hygiène cutanée pour les zones sanitaires et postes de travail.",
      },
      {
        index: '03',
        title: 'Systèmes de distribution et consommables',
        summary:
          "Distributeurs muraux, essuie-mains, papier hygiénique et consommables à usage professionnel.",
      },
      {
        index: '04',
        title: 'Matériel et accessoires de nettoyage',
        summary:
          "Équipements manuels, textiles techniques et fournitures dédiées aux équipes sur site.",
      },
    ],
  },
  epi: {
    id: 'epi',
    route: 'epi',
    kicker: 'Division 02 · Protection individuelle',
    title: 'Équipements de Protection Individuelle (EPI)',
    description:
      "Fourniture d'équipements conçus pour accompagner la sécurité des opérateurs et des équipes sur le terrain.",
    imageSrc: '/src/assets/images/epi_protection_showcase_1795119463291.jpg',
    imageAlt: 'Casque de sécurité, lunettes de protection, gilet haute visibilité et gants professionnels',
    domains: [
      {
        index: '01',
        title: 'Protection de la tête, des yeux et du visage',
        summary:
          "Casques de chantier, lunettes de sécurité, écrans faciaux et protections adaptées aux postes exposés.",
      },
      {
        index: '02',
        title: 'Protection des mains et des bras',
        summary:
          "Gants de manutention, protection mécanique, chimique ou à usage unique selon les contraintes métier.",
      },
      {
        index: '03',
        title: 'Vêtements de travail et haute visibilité',
        summary:
          "Tenues professionnelles, gilets de signalisation et équipements vestimentaires adaptés aux environnements actifs.",
      },
      {
        index: '04',
        title: 'Protection des pieds et équipements complémentaires',
        summary:
          "Chaussures de sécurité, protections auditives, respiratoires et accessoires individuels de sécurité.",
      },
    ],
  },
};

export const B2B_PILLARS = [
  {
    index: '01',
    title: 'Double spécialisation ciblée',
    description:
      "Un interlocuteur unique pour centraliser vos approvisionnements en produits d'hygiène professionnelle et en EPI.",
  },
  {
    index: '02',
    title: 'Approvisionnement dédié aux professionnels',
    description:
      "Des fournitures sélectionnées pour répondre aux besoins courants des entreprises, ateliers, entrepôts et établissements.",
  },
  {
    index: '03',
    title: 'Implantation locale à Belfaa',
    description:
      "Une présence directe à Belfaa, Maroc, facilitant les échanges commerciaux et le suivi de vos commandes B2B.",
  },
  {
    index: '04',
    title: 'Chiffrage clair sur devis',
    description:
      "Chaque demande fait l'objet d'une étude personnalisée selon vos quantités, vos usages et votre rythme de réapprovisionnement.",
  },
];
