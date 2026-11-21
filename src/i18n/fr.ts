import { TranslationDictionary } from './types';

export const FR_TRANSLATIONS: TranslationDictionary = {
  common: {
    skipToContent: 'Aller au contenu principal',
    backToHome: "Retour à l'accueil",
    demoTag: 'Démonstration',
    optionalTag: '(optionnel)',
    clearSearchAria: 'Effacer la recherche',
    resetFilters: 'Réinitialiser les filtres',
    whatsappQuickAria: 'Contacter ABHYGO sur WhatsApp',
    whatsappShort: 'WhatsApp',
    logoAlt: 'Logo officiel ABHYGO',
  },
  brand: {
    tagline: 'Un environnement plus propre, plus sain !',
    location: 'Belfaa, Maroc',
    region: 'Région Souss-Massa · Maroc',
    primaryCta: 'Demander un devis',
    secondaryCta: 'Découvrir nos produits',
    nav: {
      accueil: 'Accueil',
      hygiene: "Produits d'hygiène",
      epi: 'EPI',
      apropos: 'À propos',
      contact: 'Contact',
    },
    languageSwitcher: {
      groupAria: 'Choix de la langue',
      frLabel: 'FR',
      arLabel: 'العربية',
      mobileHeading: 'Langue du site',
    },
    header: {
      homeAria: 'ABHYGO — Accueil',
      mainNavAria: 'Navigation principale',
      mobileNavAria: 'Navigation mobile',
      openMenuAria: 'Ouvrir le menu',
      closeMenuAria: 'Fermer le menu',
    },
    footer: {
      description:
        "Fournisseur B2B de produits d'hygiène professionnelle et d'Équipements de Protection Individuelle (EPI) basé à Belfaa, Maroc.",
      navigationHeading: 'Navigation',
      suppliesHeading: 'Fournitures B2B',
      hygieneLink: "Produits d'hygiène professionnelle",
      epiLink: 'Équipements de Protection Individuelle (EPI)',
      contactHeading: 'Contact direct',
      whatsappDirect: 'WhatsApp direct',
      copyrightSuffix: 'Tous droits réservés.',
      bottomSummary: "Belfaa, Maroc · Produits d'hygiène & EPI",
    },
  },
  seo: {
    accueil: {
      title: "ABHYGO — Produits d'hygiène professionnelle & EPI au Maroc",
      description:
        "Produits d'hygiène professionnelle au Maroc et équipements de protection individuelle à Belfaa. Demandez votre devis B2B auprès d'ABHYGO.",
      ogLocale: 'fr_MA',
    },
    hygiene: {
      title: "Produits d'hygiène professionnelle au Maroc | ABHYGO",
      description:
        "Découvrez les catégories de produits d'hygiène professionnelle au Maroc : nettoyage, désinfection, savons, essuyage et distributeurs ABHYGO.",
      ogLocale: 'fr_MA',
    },
    epi: {
      title: 'Équipements de protection individuelle Maroc | ABHYGO',
      description:
        'Fournisseur EPI Maroc basé à Belfaa : gants, masques, lunettes, casques, chaussures et vêtements de protection. Demande de devis B2B.',
      ogLocale: 'fr_MA',
    },
    apropos: {
      title: "À propos d'ABHYGO — Fournisseur hygiène & EPI Maroc",
      description:
        "ABHYGO, fournisseur B2B à Belfaa (Maroc) spécialisé en produits d'hygiène professionnelle et équipements de protection individuelle (EPI).",
      ogLocale: 'fr_MA',
    },
    contact: {
      title: 'Contact & Devis B2B — ABHYGO Belfaa, Maroc',
      description:
        "Contactez ABHYGO à Belfaa, Maroc (+212 668 057 197) par téléphone, WhatsApp ou email pour votre devis d'hygiène professionnelle et EPI.",
      ogLocale: 'fr_MA',
    },
  },
  quoteCallout: {
    defaultTitle: 'Besoin d’un devis pour vos fournitures professionnelles ?',
    defaultDescription:
      "Précisez vos besoins en produits d'hygiène ou en équipements de protection individuelle. Notre équipe basée à Belfaa vous répond dans les meilleurs délais.",
  },
  home: {
    hero: {
      eyebrow: 'HYGIÈNE PROFESSIONNELLE & PROTECTION',
      title: "Des solutions d'hygiène et de protection pour les professionnels",
      titleAccent: 'pour les professionnels',
      subtitle:
        "Basée à Belfaa, Maroc, ABHYGO fournit aux entreprises et structures professionnelles des produits d'hygiène, consommables et Équipements de Protection Individuelle (EPI) sélectionnés pour les environnements exigeants.",
      imageAlt:
        "Fournitures professionnelles d'hygiène et équipements de protection individuelle ABHYGO",
      fallbackLabel: 'ABHYGO · Hygiène & EPI',
    },
    trustBarAria: 'Engagements ABHYGO',
    trustMessages: [
      {
        title: 'Approvisionnement B2B dédié',
        detail: 'Entreprises, ateliers & collectivités',
      },
      {
        title: 'Double expertise Hygiène & EPI',
        detail: 'Fournitures professionnelles ciblées',
      },
      {
        title: 'Présence locale à Belfaa, Maroc',
        detail: 'Proximité et suivi commercial direct',
      },
      {
        title: 'Chiffrage personnalisé sur devis',
        detail: 'Adapté à vos volumes et besoins',
      },
    ],
    divisionsSection: {
      kicker: 'Nos gammes principales',
      title: 'Deux pôles complémentaires pour vos besoins professionnels',
      description:
        "Découvrez nos domaines de fourniture dédiés à l'hygiène des environnements de travail et à la protection individuelle des équipes.",
    },
    divisionCards: {
      hygiene: {
        kicker: 'Pôle 01 · Entretien & Hygiène professionnelle',
        title: "Produits d'hygiène",
        description:
          "Approvisionnement B2B en solutions d'hygiène destinées aux environnements professionnels, industriels et tertiaires.",
        imageAlt:
          "Bidons concentrés, distributeurs muraux et consommables d'hygiène professionnelle",
        ctaLabel: 'Voir les produits d’hygiène',
        discoverAria: "Découvrir Produits d'hygiène",
        domains: [
          { index: '01', title: 'Hygiène des surfaces et locaux' },
          { index: '02', title: 'Hygiène corporelle et des mains' },
          { index: '03', title: 'Systèmes de distribution et consommables' },
          { index: '04', title: 'Matériel et accessoires de nettoyage' },
        ],
      },
      epi: {
        kicker: 'Pôle 02 · Sécurité & Protection au travail',
        title: 'Équipements de Protection Individuelle',
        description:
          "Fourniture d'équipements conçus pour accompagner la sécurité des opérateurs et des équipes sur le terrain.",
        imageAlt:
          'Casque de sécurité, lunettes de protection, gilet haute visibilité et gants professionnels',
        ctaLabel: 'Voir les EPI',
        discoverAria: 'Découvrir Équipements de Protection Individuelle',
        domains: [
          { index: '01', title: 'Protection de la tête, des yeux et du visage' },
          { index: '02', title: 'Protection des mains et des bras' },
          { index: '03', title: 'Vêtements de travail et haute visibilité' },
          { index: '04', title: 'Protection des pieds et équipements complémentaires' },
        ],
      },
    },
    pillarsSection: {
      kicker: 'Approche professionnelle',
      title: 'Un approvisionnement lisible, réactif et dédié aux entreprises',
      description:
        'Une organisation pensée pour simplifier vos demandes de devis et structurer vos achats en hygiène et EPI.',
    },
    pillars: [
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
          'Des fournitures sélectionnées pour répondre aux besoins courants des entreprises, ateliers, entrepôts et établissements.',
      },
      {
        index: '03',
        title: 'Implantation locale à Belfaa',
        description:
          'Une présence directe à Belfaa, Maroc, facilitant les échanges commerciaux et le suivi de vos commandes B2B.',
      },
      {
        index: '04',
        title: 'Chiffrage clair sur devis',
        description:
          "Chaque demande fait l'objet d'une étude personnalisée selon vos quantités, vos usages et votre rythme de réapprovisionnement.",
      },
    ],
  },
  hygiene: {
    hero: {
      eyebrow: 'HYGIÈNE PROFESSIONNELLE · B2B',
      title: "Produits d'hygiène",
      description:
        "Explorez l'organisation provisoire de notre offre d'hygiène professionnelle. Ajoutez des articles à votre sélection ou demandez directement un devis B2B.",
      imageAlt:
        "Bidons concentrés, distributeurs muraux et consommables d'hygiène professionnelle",
      browseCta: 'Parcourir les catégories',
    },
    notice: {
      eyebrow: 'Catalogue provisoire · Démonstration',
      text: 'Le catalogue inclut désormais des références proposées par notre fournisseur FastMosk. Les visuels peuvent être indicatifs et les conditionnements, disponibilités et caractéristiques finales sont confirmés sur devis.',
    },
    catalogue: {
      sectionHeading: "Catalogue provisoire des produits d'hygiène",
      searchPlaceholder: 'Rechercher un produit ou une catégorie...',
      searchAria: "Rechercher dans le catalogue produits d'hygiène",
      countSingular: 'article de démonstration affiché',
      countPlural: 'articles de démonstration affichés',
      basketButton: 'Ma demande',
      filterGroupAria: 'Filtrer par catégorie provisoire',
      allCategories: 'Toutes les catégories',
      emptyTitle: 'Aucun article de démonstration ne correspond à votre recherche',
      emptyDescription:
        'Modifiez vos mots-clés ou réinitialisez les filtres pour afficher toutes les catégories provisoires.',
    },
    card: {
      referenceLabel: 'Référence',
      packagingLabel: 'Conditionnement',
      usageLabel: 'Usage',
      technicalNotesSr: 'Notes techniques',
      technicalSheetLink: 'Consulter la fiche technique',
      addToBasket: 'Ajouter à ma demande',
      addedToBasket: 'Ajouté à ma demande',
    },
    categories: {
      'produits-nettoyage': {
        label: 'Produits de nettoyage',
        description:
          "Solutions d'entretien courant et détergents pour sols et surfaces professionnelles.",
      },
      'produits-desinfectants': {
        label: 'Produits désinfectants',
        description:
          'Solutions destinées au traitement hygiénique des surfaces et zones sensibles.',
      },
      'savons-hygiene-mains': {
        label: 'Savons et hygiène des mains',
        description:
          "Produits lavants et solutions pour l'hygiène cutanée des équipes et sanitaires.",
      },
      'essuyage-papier-sanitaire': {
        label: 'Essuyage et papier sanitaire',
        description:
          "Bobines d'essuyage, essuie-mains et papiers sanitaires à usage professionnel.",
      },
      'distributeurs-accessoires': {
        label: 'Distributeurs et accessoires',
        description:
          'Appareils muraux et accessoires de distribution pour savons et consommables papier.',
      },
      'materiel-nettoyage': {
        label: 'Matériel de nettoyage',
        description:
          'Outils manuels, textiles techniques et équipements de mise en œuvre sur site.',
      },
    },
    products: {
      'demo-nettoyage-sols': {
        name: 'Détergent neutre multi-surfaces',
        description:
          "Exemple de produit d'entretien courant pour le lavage manuel ou mécanisé des sols et surfaces lavables.",
        imageAlt: 'Visuel générique de bidons et pulvérisateur pour produits de nettoyage',
      },
      'demo-degraissant-pro': {
        name: 'Dégraissant professionnel polyvalent',
        description:
          'Exemple de solution destinée au dégraissage des plans de travail, ateliers et zones techniques.',
        imageAlt: 'Visuel générique de contenant professionnel de dégraissant',
      },
      'demo-desinfectant-surfaces': {
        name: 'Solution désinfectante pour surfaces',
        description:
          "Exemple de produit destiné à l'entretien hygiénique des surfaces fréquemment sollicitées.",
        imageAlt: 'Visuel générique de bidons et vaporisateurs désinfectants',
      },
      'demo-desinfectant-sanitaires': {
        name: 'Nettoyant désinfectant sanitaires',
        description:
          "Exemple de formulation dédiée à l'hygiène quotidienne des blocs sanitaires et vestiaires.",
        imageAlt: 'Visuel générique de bidons sanitaires',
      },
      'demo-savon-lavant-doux': {
        name: 'Savon liquide lavant usage fréquent',
        description:
          'Exemple de savon liquide destiné au lavage régulier des mains dans les espaces professionnels.',
        imageAlt: 'Visuel générique de flacons pompe et recharge pour savon mains',
      },
      'demo-gel-hygiene-mains': {
        name: 'Lotion pour hygiène des mains',
        description:
          "Exemple de solution dédiée à l'hygiène rapide des mains aux points d'accès et postes de travail.",
        imageAlt: "Visuel générique de flacon pour hygiène des mains",
      },
      'demo-bobine-essuyage': {
        name: "Bobine d'essuyage industriel",
        description:
          "Exemple de bobine papier destinée aux besoins d'essuyage en atelier, laboratoire ou entrepôt.",
        imageAlt: "Visuel générique de bobines d'essuyage et papier sanitaire",
      },
      'demo-essuie-mains-papier': {
        name: 'Essuie-mains pliés & papier sanitaire',
        description:
          "Exemple de consommables papier pour l'équipement des sanitaires et points de lavage.",
        imageAlt: 'Visuel générique de rouleaux et essuie-mains papier',
      },
      'demo-distributeur-savon': {
        name: 'Distributeur mural pour savon',
        description:
          'Exemple de distributeur mural conçu pour un dosage régulier dans les zones sanitaires.',
        imageAlt: 'Visuel générique de distributeur mural de savon et papier',
      },
      'demo-distributeur-papier': {
        name: 'Distributeur de papier essuie-mains',
        description:
          "Exemple d'appareil mural destiné à la distribution contrôlée d'essuie-mains ou de rouleaux.",
        imageAlt: 'Visuel générique de distributeur mural essuie-mains',
      },
      'demo-balai-microfibre': {
        name: 'Système de lavage à plat microfibre',
        description:
          "Exemple d'ensemble manche, support et bandeau microfibre pour l'entretien des sols.",
        imageAlt: 'Visuel générique de balai microfibre, raclette et lavettes',
      },
      'demo-lavettes-raclettes': {
        name: 'Lavettes microfibres & raclette sol',
        description:
          "Exemple de textiles techniques et accessoires manuels pour l'entretien quotidien des locaux.",
        imageAlt: 'Visuel générique de raclette et textiles microfibres',
      },

      'supplier-hypo-javel-24': {
        name: 'Hypo Javel 24',
        description: 'Désinfectant alimentaire et agricole de la gamme FastMosk. Conditionnement et usages détaillés à confirmer sur devis.',
        imageAlt: 'Bidon de désinfectant Hypo Javel 24 pour usage professionnel',
        technicalNotes: 'Référence fournisseur FastMosk · informations techniques à confirmer.',
      },
      'supplier-hypo-javel-12': {
        name: 'Hypo Javel 12',
        description: 'Désinfectant alimentaire et agricole de la gamme FastMosk. Conditionnement et usages détaillés à confirmer sur devis.',
        imageAlt: 'Bidon de désinfectant Hypo Javel 12 pour usage professionnel',
        technicalNotes: 'Référence fournisseur FastMosk · informations techniques à confirmer.',
      },
    },
  },
  epi: {
    hero: {
      eyebrow: 'ÉQUIPEMENTS DE PROTECTION INDIVIDUELLE · B2B',
      title: 'Équipements de Protection Individuelle (EPI)',
      description:
        'Découvrez la structure provisoire de notre catalogue EPI. Ajoutez les équipements souhaités à votre demande de devis pour recevoir références et tarifs.',
      detailSubtitlePrefix: 'Fiche de démonstration ·',
      backToCatalogue: 'Retour au catalogue EPI',
      imageAlt:
        'Casque de sécurité, lunettes de protection, gilet haute visibilité et gants professionnels',
      browseCta: 'Parcourir les catégories EPI',
    },
    notice: {
      eyebrow: 'Catalogue provisoire · Démonstration',
      text: 'Les catégories et fiches ci-dessous sont présentées à titre de démonstration sans confirmation de stock, de marque ou de niveau normatif. Les spécifications exactes et documents techniques sont communiqués exclusivement sur base de références confirmées lors de votre devis.',
    },
    catalogue: {
      sectionHeading: 'Catalogue provisoire des équipements EPI',
      searchPlaceholder: 'Rechercher un équipement EPI ou une catégorie...',
      searchAria: 'Rechercher dans le catalogue EPI',
      countSingular: 'équipement de démonstration affiché',
      countPlural: 'équipements de démonstration affichés',
      basketButton: 'Ma demande',
      filterGroupAria: 'Filtrer les EPI par catégorie provisoire',
      allCategories: 'Toutes les catégories',
      emptyTitle: 'Aucun équipement de démonstration ne correspond à votre recherche',
      emptyDescription:
        "Modifiez votre recherche ou réinitialisez les filtres pour afficher toutes les catégories provisoires d'EPI.",
    },
    card: {
      imageAriaPrefix: 'Consulter la fiche de',
      viewDetails: 'Consulter la fiche produit',
      addToBasket: 'Ajouter à ma demande',
      addedToBasket: 'Ajouté à ma demande',
    },
    detail: {
      backToCatalogue: 'Retour au catalogue EPI',
      galleryAria: "Galerie d'images de l'équipement",
      viewImagePrefix: 'Afficher la vue',
      demoItemTag: 'Article de démonstration',
      presentationHeading: "Présentation de l'équipement",
      demoNotice:
        "Fiche modèle destinée à illustrer la structure produit. Aucune conformité normative, certification ou résistance particulière n'est revendiquée sans documentation fabricant jointe à votre devis.",
      specsHeading: 'Informations techniques et caractéristiques',
      referenceLabel: 'Référence',
      referenceFallback: 'À attribuer selon référence confirmée',
      sizesLabel: 'Tailles / Pointures (optionnel)',
      sizesFallback: 'À préciser selon la demande',
      materialLabel: 'Matière principale (optionnel)',
      materialFallback: 'Selon fiche fabricant fournie sur devis',
      normsLabel: 'Normes & niveaux de protection',
      normsFallback: 'Communiqués uniquement via documentation réelle',
      pdfLabel: 'Fiche technique PDF',
      pdfDownload: 'Télécharger la fiche',
      pdfFallback: 'Disponible sur demande avec le devis',
      addToBasket: 'Ajouter à ma demande',
      addedToBasket: 'Ajouté à ma demande',
    },
    categories: {
      'gants-protection': {
        label: 'Gants de protection',
        description:
          "Équipements destinés à la protection des mains pour les tâches de manutention et d'atelier.",
      },
      'masques-protection': {
        label: 'Masques de protection',
        description:
          'Solutions de protection respiratoire individuelle adaptées aux environnements professionnels.',
      },
      'lunettes-visieres': {
        label: 'Lunettes et visières',
        description:
          'Équipements dédiés à la protection des yeux et du visage contre les projections courantes.',
      },
      'casques-securite': {
        label: 'Casques de sécurité',
        description:
          'Protections crâniennes pour chantiers, zones industrielles et opérations techniques.',
      },
      'chaussures-securite': {
        label: 'Chaussures de sécurité',
        description:
          'Chaussures et bottes professionnelles dédiées aux environnements de travail exigeants.',
      },
      'vetements-combinaisons': {
        label: 'Vêtements et combinaisons de protection',
        description:
          'Tenues professionnelles, gilets haute visibilité et combinaisons pour équipes sur site.',
      },
    },
    products: {
      'demo-epi-gants-manutention': {
        name: 'Gants de protection pour manutention',
        shortDescription:
          'Exemple de paire de gants tricotés avec enduction paume pour les opérations courantes de manutention en entrepôt ou atelier.',
        galleryAlts: [
          'Visuel générique de gants de protection pour manutention',
          "Ensemble d'équipements de protection individuelle",
        ],
      },
      'demo-epi-gants-atelier': {
        name: "Gants de protection d'atelier",
        shortDescription:
          "Exemple de gants professionnels conçus pour les postes techniques nécessitant préhension et confort d'usage.",
        galleryAlts: [
          "Visuel générique de gants de protection d'atelier",
          'Fournitures professionnelles et équipements EPI',
        ],
      },
      'demo-epi-masque-coque': {
        name: 'Masque de protection respiratoire moulé',
        shortDescription:
          'Exemple de masque à coque préformée destiné aux environnements nécessitant une barrière respiratoire individuelle.',
        galleryAlts: [
          'Visuel générique de masques de protection respiratoire',
          "Vue complémentaire d'équipements EPI",
        ],
      },
      'demo-epi-masque-pliable': {
        name: 'Masque de protection pliable à usage professionnel',
        shortDescription:
          'Exemple de masque individuel pliable adapté à une distribution pratique sur site pour les équipes.',
        galleryAlts: [
          'Visuel générique de masques pliables de protection',
          'Contexte professionnel hygiène et EPI',
        ],
      },
      'demo-epi-lunettes-claires': {
        name: 'Lunettes de protection panoramiques',
        shortDescription:
          'Exemple de lunettes transparentes à branches enveloppantes destinées à la protection oculaire quotidienne.',
        galleryAlts: [
          'Visuel générique de lunettes de protection et visière',
          'Lunettes et équipements de sécurité sur table',
        ],
      },
      'demo-epi-visiere-faciale': {
        name: 'Visière de protection faciale transparente',
        shortDescription:
          "Exemple d'écran facial réglable couvrant l'ensemble du visage lors des tâches exposées.",
        galleryAlts: [
          'Visuel générique de visière faciale de protection',
          'Équipements de sécurité et hygiène professionnelle',
        ],
      },
      'demo-epi-casque-chantier': {
        name: 'Casque de sécurité à coque ventilée',
        shortDescription:
          'Exemple de casque industriel avec harnais réglable destiné aux zones de chantier et de manutention.',
        galleryAlts: [
          'Visuel générique de casques de sécurité blancs et bleu marine',
          'Casque de sécurité et vêtements haute visibilité',
        ],
      },
      'demo-epi-casque-industriel': {
        name: 'Casque de sécurité polyvalent avec jugulaire',
        shortDescription:
          'Exemple de protection crânienne avec maintien par sangle pour les interventions sur site technique.',
        galleryAlts: [
          'Visuel générique de casque industriel de sécurité',
          'Casque et lunettes de sécurité',
        ],
      },
      'demo-epi-chaussures-montantes': {
        name: 'Chaussures de sécurité montantes',
        shortDescription:
          'Exemple de chaussures montantes à lacets pour le maintien de la cheville et le travail en environnement industriel.',
        galleryAlts: [
          'Visuel générique de chaussures de sécurité montantes',
          'Sélection générale EPI',
        ],
      },
      'demo-epi-chaussures-chantier': {
        name: 'Chaussures de travail semelle crantée',
        shortDescription:
          "Exemple de modèle conçu pour l'adhérence et l'endurance lors des déplacements quotidiens sur site.",
        galleryAlts: [
          'Visuel générique de chaussures de travail professionnelles',
          'Environnement industriel EPI',
        ],
      },
      'demo-epi-veste-travail': {
        name: 'Veste de travail professionnelle multi-poches',
        shortDescription:
          'Exemple de veste professionnelle fonctionnelle adaptée aux interventions en atelier, maintenance ou logistique.',
        galleryAlts: [
          'Visuel générique de veste de travail et gilet haute visibilité',
          'Tenue professionnelle haute visibilité',
        ],
      },
      'demo-epi-gilet-signalisation': {
        name: 'Gilet et combinaison de protection haute visibilité',
        shortDescription:
          'Exemple de vêtement équipé de bandes rétro-réfléchissantes pour améliorer le repérage visuel des équipes.',
        galleryAlts: [
          'Visuel générique de gilet haute visibilité',
          'Équipement textile haute visibilité',
        ],
      },

      'supplier-botte-pvc-alimentaire-blanche': {
        name: 'Botte en PVC alimentaire blanche',
        shortDescription: 'Botte de protection alimentaire blanche de la gamme FastMosk. Tailles et caractéristiques à confirmer sur devis.',
        galleryAlts: ['Botte blanche en PVC alimentaire'],
        technicalNotes: 'Référence fournisseur FastMosk · tailles et détails techniques à confirmer.',
      },
      'supplier-casque-anti-bruit': {
        name: 'Casque anti-bruit',
        shortDescription: 'Protection auditive individuelle de la gamme FastMosk. Niveau d’atténuation à confirmer sur devis.',
        galleryAlts: ['Casque anti-bruit de protection auditive'],
        technicalNotes: 'Référence fournisseur FastMosk · niveau d’atténuation à confirmer.',
      },
      'supplier-chaussures-securite-ars': {
        name: 'Chaussures de sécurité ARS',
        shortDescription: 'Chaussures de sécurité ARS de la gamme FastMosk. Pointures et caractéristiques à confirmer sur devis.',
        galleryAlts: ['Chaussures de sécurité ARS'],
        technicalNotes: 'Référence fournisseur FastMosk · pointures et caractéristiques à confirmer.',
      },
      'supplier-chaussures-securite-mts': {
        name: 'Chaussures de sécurité MTS',
        shortDescription: 'Chaussures de sécurité MTS de la gamme FastMosk. Pointures et caractéristiques à confirmer sur devis.',
        galleryAlts: ['Chaussures de sécurité MTS'],
        technicalNotes: 'Référence fournisseur FastMosk · pointures et caractéristiques à confirmer.',
      },
      'supplier-gant-bicolore': {
        name: 'Gant bicolore',
        shortDescription: 'Gant de protection bicolore de la gamme FastMosk. Matière et niveau de protection à confirmer sur devis.',
        galleryAlts: ['Gant bicolore de protection professionnelle'],
        technicalNotes: 'Référence fournisseur FastMosk · matière et niveau de protection à confirmer.',
      },
      'supplier-lunette-protection': {
        name: 'Lunette de protection',
        shortDescription: 'Lunette de protection de la gamme FastMosk. Caractéristiques de l’oculaire à confirmer sur devis.',
        galleryAlts: ['Lunette de protection professionnelle'],
        technicalNotes: 'Référence fournisseur FastMosk · caractéristiques de l’oculaire à confirmer.',
      },
      'supplier-masque-climax': {
        name: 'Masque Climax',
        shortDescription: 'Masque Climax de la gamme FastMosk. Référence, filtres et niveau de protection à confirmer sur devis.',
        galleryAlts: ['Masque Climax de protection respiratoire'],
        technicalNotes: 'Référence fournisseur FastMosk · filtres et niveau de protection à confirmer.',
      },
      'supplier-sabot': {
        name: 'Sabot de protection',
        shortDescription: 'Sabot de protection de la gamme FastMosk. Pointures et caractéristiques à confirmer sur devis.',
        galleryAlts: ['Sabot de protection professionnel'],
        technicalNotes: 'Référence fournisseur FastMosk · pointures et caractéristiques à confirmer.',
      },
    },
  },
  about: {
    hero: {
      eyebrow: 'À PROPOS · BELFAA, MAROC',
      title:
        "ABHYGO, fournisseur B2B d'hygiène professionnelle et d'EPI au Maroc",
      description:
        "Implantée à Belfaa, au Maroc, ABHYGO est spécialisée dans la fourniture de produits d'hygiène professionnelle et d'Équipements de Protection Individuelle (EPI) à destination des acteurs professionnels.",
    },
    engagement: {
      kicker: 'Notre engagement métier',
      title: 'Un environnement plus propre, plus sain !',
      description:
        "Le choix des fournitures d'hygiène et de protection conditionne directement la qualité de l'environnement de travail et la sécurité quotidienne des équipes.",
      paragraph1:
        "Dans tout environnement professionnel, la qualité des produits utilisés fait la différence. Sélectionner des détergents, désinfectants, savons et consommables adaptés aux surfaces et à la fréquence d'usage permet de maintenir des locaux propres, fonctionnels et plus sains pour les collaborateurs comme pour les visiteurs.",
      paragraph2:
        "De la même manière, doter les opérateurs d'Équipements de Protection Individuelle adaptés à leurs tâches (protection des mains, des yeux, des voies respiratoires, de la tête, des pieds ou vêtements adaptés) constitue un pilier de la prévention sur le lieu de travail.",
      hygieneTitle: "Produits d'hygiène professionnelle",
      hygieneDesc:
        "Nettoyants, désinfectants, hygiène des mains, essuyage papier, distributeurs et matériel d'application.",
      epiTitle: 'Équipements de Protection Individuelle',
      epiDesc:
        'Gants, masques, lunettes et visières, casques, chaussures de sécurité et vêtements de protection.',
      consultCta: 'Consulter la rubrique',
    },
    coordinates: {
      kicker: 'Coordonnées directes',
      title: 'Contacter ABHYGO',
      description:
        'Pour toute question relative à nos familles de produits ou pour formuler une demande de devis B2B.',
      locationLabel: 'Localisation',
      phoneLabel: 'Téléphone / WhatsApp',
      emailLabel: 'Email',
    },
    sectors: {
      kicker: "Secteurs d'application visés · Présentation indicative",
      title: 'Des solutions adaptées à votre activité',
      description:
        "Présentation des types d'environnements professionnels auxquels nos gammes d'hygiène et d'EPI sont destinées (secteurs visés, et non liste de références clients).",
      items: [
        {
          title: 'Entreprises et bureaux',
          description:
            "Approvisionnement en produits d'entretien courant, hygiène des mains, distributeurs et consommables papier pour les espaces tertiaires et sanitaires.",
        },
        {
          title: 'Hôtellerie et restauration',
          description:
            "Solutions de nettoyage et de désinfection des surfaces, essuyage professionnel et équipements adaptés aux exigences d'hygiène quotidiennes.",
        },
        {
          title: 'Industrie et ateliers',
          description:
            "Fourniture de produits dégraissants, bobines d'essuyage industriel et Équipements de Protection Individuelle (gants, casques, lunettes, chaussures, tenues).",
        },
        {
          title: 'Commerces et collectivités',
          description:
            "Consommables sanitaires, solutions d'hygiène et équipements de protection destinés aux points de vente, locaux partagés et personnels sur site.",
        },
      ],
    },
    why: {
      kicker: 'Notre démarche B2B',
      title: 'Pourquoi choisir ABHYGO ?',
      description:
        'Une relation commerciale directe, claire et orientée vers la pertinence des produits demandés.',
      items: [
        {
          index: '01',
          title: 'Sélection professionnelle ciblée',
          description:
            "Une offre structurée autour des deux besoins essentiels des structures professionnelles : l'hygiène des locaux et des personnes, et la protection individuelle des équipes.",
        },
        {
          index: '02',
          title: 'Clarté et transparence',
          description:
            "Des rubriques lisibles entre produits d'hygiène et EPI, avec des informations factuelles permettant d'orienter facilement vos demandes sans confusion.",
        },
        {
          index: '03',
          title: 'Accessibilité directe',
          description:
            'Des échanges simples et directs depuis Belfaa, Maroc, par téléphone, WhatsApp ou email pour clarifier vos attentes avant chiffrage.',
        },
        {
          index: '04',
          title: 'Demandes de devis adaptées',
          description:
            "Un parcours de demande de devis dédié aux professionnels pour préciser vos articles, vos quantités et vos contraintes d'utilisation.",
        },
      ],
    },
    callout: {
      title: 'Un besoin spécifique ? Parlons de vos besoins.',
      description:
        "Décrivez votre secteur d'activité et les fournitures souhaitées en hygiène professionnelle ou en EPI pour établir une demande de devis claire.",
    },
  },
  contact: {
    hero: {
      eyebrow: 'CONTACT & DEMANDE DE DEVIS · BELFAA, MAROC',
      title: 'Échanger avec ABHYGO',
      description:
        'Contactez-nous directement par téléphone, WhatsApp ou email, ou préparez votre demande de devis B2B en quelques instants.',
    },
    aside: {
      landmarkHeading: 'Coordonnées directes et localisation à Belfaa, Maroc',
      phoneTitle: 'Téléphone',
      phoneDesc: 'Appel direct vers notre ligne professionnelle',
      whatsappTitle: 'WhatsApp',
      whatsappDesc: 'Ouvrir une discussion avec message pré-rempli',
      emailTitle: 'Email professionnel',
      emailDesc: "Demandes d'offres tarifaires et renseignements",
      mapTownOnly: 'Localisation au niveau de la ville uniquement',
      mapCta: 'Voir Belfaa sur la carte',
      privacyNote:
        "Confidentialité : vos informations restent dans votre navigateur jusqu'à l'ouverture volontaire de WhatsApp ou de votre logiciel de messagerie.",
    },
    form: {
      heading: 'Formulaire de demande de devis',
      subheading:
        "Complétez vos coordonnées pour générer votre demande prête à l'envoi.",
      errorSummaryOne:
        'Merci de vérifier le champ obligatoire signalé ci-dessous.',
      errorSummaryManyPrefix: 'Merci de vérifier les',
      errorSummaryManySuffix: 'champs obligatoires signalés ci-dessous.',
      poleLabel: 'Pôle concerné',
      poleLabels: {
        hygiene: "Produits d'hygiène",
        epi: 'EPI',
        'les-deux': 'Hygiène & EPI',
      },
      basketTitle: 'Articles dans votre demande',
      addMoreItems: "Ajouter d'autres articles",
      removeItemPrefix: 'Retirer',
      qtyInputAriaPrefix: 'Quantité pour',
      qtyInputPlaceholder: 'Quantité souhaitée (optionnel)',
      specsInputAriaPrefix: 'Spécifications demandées pour',
      specsInputPlaceholder: 'Spécifications demandées (optionnel)',
      fullNameLabel: 'Nom complet *',
      fullNamePlaceholder: 'Votre nom et prénom',
      fullNameError: 'Veuillez renseigner votre nom complet.',
      companyLabel: 'Société',
      companyPlaceholder: 'Nom de votre entreprise ou organisme',
      phoneLabel: 'Téléphone *',
      phonePlaceholder: '+212 6...',
      phoneError: 'Veuillez saisir un numéro de téléphone valide.',
      emailLabel: 'Email *',
      emailPlaceholder: 'contact@entreprise.ma',
      emailError: 'Veuillez saisir une adresse email valide.',
      cityLabel: 'Ville *',
      cityPlaceholder: 'Ex. Belfaa, Agadir, Casablanca...',
      cityError: 'Veuillez indiquer votre ville.',
      productsLabel: 'Produits demandés',
      productsComplementTag: '(complément optionnel)',
      productsPlaceholderWithBasket: 'Autres articles non listés ci-dessus...',
      productsPlaceholderEmpty: 'Ex. Gants de protection, savon liquide...',
      productsError:
        'Veuillez sélectionner des produits dans les catalogues ou indiquer les produits demandés.',
      quantitiesLabel: 'Quantités',
      quantitiesPlaceholder: 'Ex. 20 cartons, 50 paires...',
      messageLabel: 'Message',
      messagePlaceholder:
        "Précisez vos contraintes d'utilisation, fréquences de réapprovisionnement ou modalités souhaitées...",
      requiredFooterNote:
        '* Champs obligatoires. Vos données servent uniquement à générer votre message WhatsApp ou email.',
      submitButton: 'Préparer ma demande de devis',
    },
    dispatch: {
      readyTitle: 'Votre demande est prête à être envoyée',
      readyDescription:
        'Ce site ne transmet pas automatiquement de messages en arrière-plan. Cliquez sur le bouton WhatsApp ou Email ci-dessous pour envoyer votre demande complète directement à notre équipe.',
      sendWhatsApp: 'Envoyer sur WhatsApp',
      sendEmail: 'Envoyer par email',
      previewHeading: 'APERÇU DU MESSAGE PRÉ-REMPLI',
      editRequest: 'Modifier ma demande',
      resetForm: 'Réinitialiser le formulaire',
    },
  },
  basketDrawer: {
    triggerAriaSingular: 'Ouvrir ma demande de devis (1 article)',
    triggerAriaPlural: 'Ouvrir ma demande de devis ({count} articles)',
    triggerLabel: 'Ma demande',
    title: 'Ma demande de devis',
    emptyCount: 'Aucun article sélectionné',
    singularCount: '1 article sélectionné',
    pluralCount: '{count} articles sélectionnés',
    closeAria: 'Fermer le panier de devis',
    emptyTitle: 'Votre demande de devis est vide',
    emptyDescription:
      "Parcourez les rubriques Produits d'hygiène ou EPI pour ajouter des articles, ou rédigez directement votre demande via le formulaire.",
    removeAriaPrefix: 'Retirer',
    qtyLabel: 'Quantité (optionnel)',
    qtyPlaceholder: 'Ex. 10 cartons, 25 unités',
    specsLabel: 'Précisions (optionnel)',
    specsPlaceholder: 'Ex. Taille L, bidon 5L...',
    noOnlinePaymentNote: 'Devis B2B sans paiement en ligne',
    clearSelection: 'Vider la sélection',
    proceedWithItems: 'Finaliser ma demande de devis',
    proceedEmpty: 'Accéder au formulaire de devis',
  },
  quoteLinks: {
    defaultWhatsAppGreeting:
      "Bonjour ABHYGO, je souhaite obtenir des renseignements concernant vos produits d'hygiène professionnelle et EPI.",
    summaryGreeting: 'Bonjour ABHYGO,',
    summaryIntro:
      'Je souhaite obtenir un devis B2B avec les informations suivantes :',
    fieldFullName: 'Nom complet :',
    fieldCompany: 'Société :',
    fieldPhone: 'Téléphone :',
    fieldEmail: 'Email :',
    fieldCity: 'Ville :',
    fieldDomain: 'Domaine :',
    selectedProductsHeading: 'Produits sélectionnés :',
    quantityPrefix: 'Quantité :',
    specsPrefix: 'Précisions :',
    requestedProductsComplement: 'Produits demandés (complément) :',
    estimatedQuantities: 'Quantités estimées :',
    messageHeading: 'Message :',
    emailSubjectPrefix: 'Demande de devis ABHYGO',
    categoryLabels: {
      hygiene: "Produits d'hygiène",
      epi: 'Équipements de Protection Individuelle (EPI)',
      'les-deux': "Produits d'hygiène & EPI",
    },
  },
};
