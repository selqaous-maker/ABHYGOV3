export type Language = 'fr' | 'ar';

export type PageRoute = 'accueil' | 'hygiene' | 'epi' | 'apropos' | 'contact';

export type QuoteCategory = 'hygiene' | 'epi' | 'les-deux';

export interface NavItem {
  id: PageRoute;
  label: string;
  hash: string;
}

export interface SupplyDomain {
  index: string;
  title: string;
  summary: string;
}

export interface DivisionOverview {
  id: 'hygiene' | 'epi';
  route: PageRoute;
  kicker: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  domains: SupplyDomain[];
}

export interface QuoteBasketItem {
  id: string;
  categoryId?: string;
  name: string;
  categoryLabel: string;
  division: 'hygiene' | 'epi';
  isDemo: boolean;
  quantity: string;
  specifications: string;
}

export interface QuoteFormData {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  city: string;
  category: QuoteCategory;
  requestedProducts: string;
  quantities: string;
  message: string;
}

export type HygieneCategoryId =
  | 'produits-nettoyage'
  | 'produits-desinfectants'
  | 'savons-hygiene-mains'
  | 'essuyage-papier-sanitaire'
  | 'distributeurs-accessoires'
  | 'materiel-nettoyage';

export interface HygieneCategory {
  id: HygieneCategoryId;
  label: string;
  description: string;
}

export interface HygieneProductItem {
  id: string;
  name: string;
  categoryId: HygieneCategoryId;
  description: string;
  imageSrc: string;
  imageAlt: string;
  /** Clearly flags provisional demo items vs confirmed real catalogue products */
  isDemo: boolean;
  /** Optional technical fields reserved for future confirmed product uploads */
  reference?: string;
  packaging?: string;
  usageArea?: string;
  technicalNotes?: string;
  technicalSheetUrl?: string;
}

export type EpiCategoryId =
  | 'gants-protection'
  | 'masques-protection'
  | 'lunettes-visieres'
  | 'casques-securite'
  | 'chaussures-securite'
  | 'vetements-combinaisons';

export interface EpiCategory {
  id: EpiCategoryId;
  label: string;
  description: string;
}

export interface EpiProductItem {
  id: string;
  name: string;
  categoryId: EpiCategoryId;
  shortDescription: string;
  galleryImages: {
    src: string;
    alt: string;
  }[];
  /** Clearly flags provisional demo items vs confirmed real catalogue products */
  isDemo: boolean;
  /** Optional fields reserved for future confirmed product uploads */
  reference?: string;
  availableSizes?: string[];
  material?: string;
  technicalNotes?: string;
  technicalSheetUrl?: string;
}
