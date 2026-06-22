export const translations = {
  en: {
    languageTitle: "Global Buyer Languages",
    heroBadge: "Bangladesh Apparel Industry Portal",
    heroTitle:
      "Connecting Global Buyers, Bangladesh Manufacturers and AI-Powered Factory Intelligence",
    heroText:
      "Discover garment manufacturers, textile mills, accessories suppliers, sourcing partners and intelligent factory solutions from Bangladesh.",
    browseFactories: "Browse Factories",
    buyerCentre: "Buyer Centre",
    registerFactory: "Register Your Factory",
    searchTitle: "Search Bangladesh Apparel Suppliers",
    searchText:
      "Find factories by product, location, certification, capacity or buyer requirement.",
  },

  bn: {
    languageTitle: "বৈশ্বিক ক্রেতাদের ভাষা",
    heroBadge: "বাংলাদেশ অ্যাপারেল ইন্ডাস্ট্রি পোর্টাল",
    heroTitle:
      "বৈশ্বিক ক্রেতা, বাংলাদেশের উৎপাদক ও AI-চালিত ফ্যাক্টরি ইন্টেলিজেন্সের সংযোগ",
    heroText:
      "বাংলাদেশের গার্মেন্টস কারখানা, টেক্সটাইল মিল, এক্সেসরিজ সরবরাহকারী, সোর্সিং পার্টনার এবং স্মার্ট ফ্যাক্টরি সলিউশন খুঁজুন।",
    browseFactories: "কারখানা দেখুন",
    buyerCentre: "বায়ার সেন্টার",
    registerFactory: "আপনার কারখানা নিবন্ধন করুন",
    searchTitle: "বাংলাদেশি অ্যাপারেল সরবরাহকারী খুঁজুন",
    searchText:
      "পণ্য, এলাকা, সার্টিফিকেশন, সক্ষমতা অথবা বায়ারের প্রয়োজন অনুযায়ী কারখানা খুঁজুন।",
  },

  ar: {
    languageTitle: "لغات المشترين العالميين",
    heroBadge: "بوابة صناعة الملابس في بنغلاديش",
    heroTitle:
      "ربط المشترين العالميين بالمصنعين في بنغلاديش وذكاء المصانع المدعوم بالذكاء الاصطناعي",
    heroText:
      "اكتشف مصانع الملابس ومطاحن النسيج وموردي الإكسسوارات وشركاء التوريد وحلول المصانع الذكية في بنغلاديش.",
    browseFactories: "استعراض المصانع",
    buyerCentre: "مركز المشترين",
    registerFactory: "سجل مصنعك",
    searchTitle: "ابحث عن موردي الملابس في بنغلاديش",
    searchText:
      "ابحث حسب المنتج أو الموقع أو الشهادة أو القدرة الإنتاجية أو متطلبات المشتري.",
  },

  fr: {
    languageTitle: "Langues des acheteurs mondiaux",
    heroBadge: "Portail de l’industrie textile du Bangladesh",
    heroTitle:
      "Connecter les acheteurs mondiaux aux fabricants bangladais et à l’intelligence d’usine alimentée par l’IA",
    heroText:
      "Découvrez les fabricants de vêtements, les usines textiles, les fournisseurs d’accessoires, les partenaires de sourcing et les solutions intelligentes du Bangladesh.",
    browseFactories: "Parcourir les usines",
    buyerCentre: "Centre acheteurs",
    registerFactory: "Enregistrer votre usine",
    searchTitle: "Rechercher des fournisseurs bangladais",
    searchText:
      "Trouvez des usines par produit, localisation, certification, capacité ou besoin acheteur.",
  },

  de: {
    languageTitle: "Globale Käufersprachen",
    heroBadge: "Bangladesh Apparel Industry Portal",
    heroTitle:
      "Globale Käufer mit Herstellern aus Bangladesch und KI-gestützter Fabrikintelligenz verbinden",
    heroText:
      "Entdecken Sie Bekleidungshersteller, Textilfabriken, Zubehörlieferanten, Sourcing-Partner und intelligente Fabriklösungen aus Bangladesch.",
    browseFactories: "Fabriken ansehen",
    buyerCentre: "Buyer Centre",
    registerFactory: "Fabrik registrieren",
    searchTitle: "Bangladesch Apparel-Lieferanten suchen",
    searchText:
      "Suchen Sie Fabriken nach Produkt, Standort, Zertifizierung, Kapazität oder Käuferanforderung.",
  },

  es: {
    languageTitle: "Idiomas de compradores globales",
    heroBadge: "Portal de la industria de la confección de Bangladesh",
    heroTitle:
      "Conectando compradores globales con fabricantes de Bangladesh e inteligencia de fábrica impulsada por IA",
    heroText:
      "Descubra fabricantes de prendas, fábricas textiles, proveedores de accesorios, socios de abastecimiento y soluciones inteligentes de Bangladesh.",
    browseFactories: "Ver fábricas",
    buyerCentre: "Centro de compradores",
    registerFactory: "Registrar fábrica",
    searchTitle: "Buscar proveedores de Bangladesh",
    searchText:
      "Encuentre fábricas por producto, ubicación, certificación, capacidad o requisito del comprador.",
  },
} as const;

export type LanguageCode = keyof typeof translations;