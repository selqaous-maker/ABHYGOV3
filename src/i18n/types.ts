import {
  EpiCategoryId,
  HygieneCategoryId,
  PageRoute,
  QuoteCategory,
} from '../types/site';

export type Language = 'fr' | 'ar';

export interface HygieneProductTranslation {
  name: string;
  description: string;
  imageAlt: string;
  reference?: string;
  packaging?: string;
  usageArea?: string;
  technicalNotes?: string;
}

export interface EpiProductTranslation {
  name: string;
  shortDescription: string;
  galleryAlts: string[];
  reference?: string;
  availableSizes?: string[];
  material?: string;
  technicalNotes?: string;
}

export interface TranslationDictionary {
  common: {
    skipToContent: string;
    backToHome: string;
    demoTag: string;
    optionalTag: string;
    clearSearchAria: string;
    resetFilters: string;
    whatsappQuickAria: string;
    whatsappShort: string;
    logoAlt: string;
  };
  brand: {
    tagline: string;
    location: string;
    region: string;
    primaryCta: string;
    secondaryCta: string;
    nav: Record<PageRoute, string>;
    languageSwitcher: {
      groupAria: string;
      frLabel: string;
      arLabel: string;
      mobileHeading: string;
    };
    header: {
      homeAria: string;
      mainNavAria: string;
      mobileNavAria: string;
      openMenuAria: string;
      closeMenuAria: string;
    };
    footer: {
      description: string;
      navigationHeading: string;
      suppliesHeading: string;
      hygieneLink: string;
      epiLink: string;
      contactHeading: string;
      whatsappDirect: string;
      copyrightSuffix: string;
      bottomSummary: string;
    };
  };
  seo: Record<
    PageRoute,
    {
      title: string;
      description: string;
      ogLocale: string;
    }
  >;
  quoteCallout: {
    defaultTitle: string;
    defaultDescription: string;
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      subtitle: string;
      imageAlt: string;
      fallbackLabel: string;
    };
    trustBarAria: string;
    trustMessages: {
      title: string;
      detail: string;
    }[];
    divisionsSection: {
      kicker: string;
      title: string;
      description: string;
    };
    divisionCards: {
      hygiene: {
        kicker: string;
        title: string;
        description: string;
        imageAlt: string;
        ctaLabel: string;
        discoverAria: string;
        domains: { index: string; title: string }[];
      };
      epi: {
        kicker: string;
        title: string;
        description: string;
        imageAlt: string;
        ctaLabel: string;
        discoverAria: string;
        domains: { index: string; title: string }[];
      };
    };
    pillarsSection: {
      kicker: string;
      title: string;
      description: string;
    };
    pillars: {
      index: string;
      title: string;
      description: string;
    }[];
  };
  hygiene: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      imageAlt: string;
      browseCta: string;
    };
    notice: {
      eyebrow: string;
      text: string;
    };
    catalogue: {
      sectionHeading: string;
      searchPlaceholder: string;
      searchAria: string;
      countSingular: string;
      countPlural: string;
      basketButton: string;
      filterGroupAria: string;
      allCategories: string;
      emptyTitle: string;
      emptyDescription: string;
    };
    card: {
      referenceLabel: string;
      packagingLabel: string;
      usageLabel: string;
      technicalNotesSr: string;
      technicalSheetLink: string;
      addToBasket: string;
      addedToBasket: string;
    };
    categories: Record<HygieneCategoryId, { label: string; description: string }>;
    products: Record<string, HygieneProductTranslation>;
  };
  epi: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      detailSubtitlePrefix: string;
      backToCatalogue: string;
      imageAlt: string;
      browseCta: string;
    };
    notice: {
      eyebrow: string;
      text: string;
    };
    catalogue: {
      sectionHeading: string;
      searchPlaceholder: string;
      searchAria: string;
      countSingular: string;
      countPlural: string;
      basketButton: string;
      filterGroupAria: string;
      allCategories: string;
      emptyTitle: string;
      emptyDescription: string;
    };
    card: {
      imageAriaPrefix: string;
      viewDetails: string;
      addToBasket: string;
      addedToBasket: string;
    };
    detail: {
      backToCatalogue: string;
      galleryAria: string;
      viewImagePrefix: string;
      demoItemTag: string;
      presentationHeading: string;
      demoNotice: string;
      specsHeading: string;
      referenceLabel: string;
      referenceFallback: string;
      sizesLabel: string;
      sizesFallback: string;
      materialLabel: string;
      materialFallback: string;
      normsLabel: string;
      normsFallback: string;
      pdfLabel: string;
      pdfDownload: string;
      pdfFallback: string;
      addToBasket: string;
      addedToBasket: string;
    };
    categories: Record<EpiCategoryId, { label: string; description: string }>;
    products: Record<string, EpiProductTranslation>;
  };
  about: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
    };
    engagement: {
      kicker: string;
      title: string;
      description: string;
      paragraph1: string;
      paragraph2: string;
      hygieneTitle: string;
      hygieneDesc: string;
      epiTitle: string;
      epiDesc: string;
      consultCta: string;
    };
    coordinates: {
      kicker: string;
      title: string;
      description: string;
      locationLabel: string;
      phoneLabel: string;
      emailLabel: string;
    };
    sectors: {
      kicker: string;
      title: string;
      description: string;
      items: { title: string; description: string }[];
    };
    why: {
      kicker: string;
      title: string;
      description: string;
      items: { index: string; title: string; description: string }[];
    };
    callout: {
      title: string;
      description: string;
    };
  };
  contact: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
    };
    aside: {
      landmarkHeading: string;
      phoneTitle: string;
      phoneDesc: string;
      whatsappTitle: string;
      whatsappDesc: string;
      emailTitle: string;
      emailDesc: string;
      mapTownOnly: string;
      mapCta: string;
      privacyNote: string;
    };
    form: {
      heading: string;
      subheading: string;
      errorSummaryOne: string;
      errorSummaryManyPrefix: string;
      errorSummaryManySuffix: string;
      poleLabel: string;
      poleLabels: Record<QuoteCategory, string>;
      basketTitle: string;
      addMoreItems: string;
      removeItemPrefix: string;
      qtyInputAriaPrefix: string;
      qtyInputPlaceholder: string;
      specsInputAriaPrefix: string;
      specsInputPlaceholder: string;
      fullNameLabel: string;
      fullNamePlaceholder: string;
      fullNameError: string;
      companyLabel: string;
      companyPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      phoneError: string;
      emailLabel: string;
      emailPlaceholder: string;
      emailError: string;
      cityLabel: string;
      cityPlaceholder: string;
      cityError: string;
      productsLabel: string;
      productsComplementTag: string;
      productsPlaceholderWithBasket: string;
      productsPlaceholderEmpty: string;
      productsError: string;
      quantitiesLabel: string;
      quantitiesPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      requiredFooterNote: string;
      submitButton: string;
    };
    dispatch: {
      readyTitle: string;
      readyDescription: string;
      sendWhatsApp: string;
      sendEmail: string;
      previewHeading: string;
      editRequest: string;
      resetForm: string;
    };
  };
  basketDrawer: {
    triggerAriaSingular: string;
    triggerAriaPlural: string;
    triggerLabel: string;
    title: string;
    emptyCount: string;
    singularCount: string;
    pluralCount: string;
    closeAria: string;
    emptyTitle: string;
    emptyDescription: string;
    removeAriaPrefix: string;
    qtyLabel: string;
    qtyPlaceholder: string;
    specsLabel: string;
    specsPlaceholder: string;
    noOnlinePaymentNote: string;
    clearSelection: string;
    proceedWithItems: string;
    proceedEmpty: string;
  };
  quoteLinks: {
    defaultWhatsAppGreeting: string;
    summaryGreeting: string;
    summaryIntro: string;
    fieldFullName: string;
    fieldCompany: string;
    fieldPhone: string;
    fieldEmail: string;
    fieldCity: string;
    fieldDomain: string;
    selectedProductsHeading: string;
    quantityPrefix: string;
    specsPrefix: string;
    requestedProductsComplement: string;
    estimatedQuantities: string;
    messageHeading: string;
    emailSubjectPrefix: string;
    categoryLabels: Record<QuoteCategory, string>;
  };
}
