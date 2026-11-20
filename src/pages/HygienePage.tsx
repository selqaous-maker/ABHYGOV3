import React, { useMemo, useState } from 'react';
import { ArrowLeft, ClipboardList, Info, Search, X } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { SUPPLY_DIVISIONS } from '../data/brand';
import {
  HYGIENE_CATEGORIES,
  HYGIENE_DEMO_PRODUCTS,
} from '../data/hygieneCatalogue';
import {
  HygieneCategoryId,
  HygieneProductItem,
  PageRoute,
  QuoteBasketItem,
  QuoteCategory,
} from '../types/site';
import { Button } from '../components/common/Button';
import { MediaFrame } from '../components/common/MediaFrame';
import { Reveal } from '../components/common/Reveal';
import { HygieneProductCard } from '../components/catalogue/HygieneProductCard';
import { QuoteCallout } from '../components/layout/QuoteCallout';
import { formatCatalogueCount } from '../utils/countFormat';
import { normalizeSearchText } from '../utils/search';

interface HygienePageProps {
  basketItems: QuoteBasketItem[];
  onAddToBasket: (item: QuoteBasketItem) => void;
  onOpenBasket: () => void;
  onNavigate: (
    route: PageRoute,
    quoteCategory?: QuoteCategory,
    quoteSubject?: string
  ) => void;
}

export const HygienePage: React.FC<HygienePageProps> = ({
  basketItems,
  onAddToBasket,
  onOpenBasket,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<HygieneCategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const shouldReduceMotion = useReducedMotion();
  const { isRtl, language, t } = useLanguage();

  const scrollToCatalogue = () => {
    document
      .getElementById('catalogue-hygiene')
      ?.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  };

  const division = SUPPLY_DIVISIONS.hygiene;

  const basketIds = useMemo(
    () => new Set(basketItems.map((item) => item.id)),
    [basketItems]
  );

  const categoryLabelMap = useMemo(() => {
    const map: Record<string, string> = {};
    for (const cat of HYGIENE_CATEGORIES) {
      map[cat.id] = t.hygiene.categories[cat.id]?.label ?? cat.label;
    }
    return map;
  }, [t]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: HYGIENE_DEMO_PRODUCTS.length };
    for (const cat of HYGIENE_CATEGORIES) {
      counts[cat.id] = 0;
    }
    for (const item of HYGIENE_DEMO_PRODUCTS) {
      counts[item.categoryId] = (counts[item.categoryId] ?? 0) + 1;
    }
    return counts;
  }, []);

  const filteredProducts = useMemo(() => {
    const query = normalizeSearchText(searchQuery);

    return HYGIENE_DEMO_PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.categoryId === selectedCategory;

      if (!matchesCategory) {
        return false;
      }

      if (!query) {
        return true;
      }

      const localized = t.hygiene.products[item.id];
      const name = normalizeSearchText(localized?.name ?? item.name);
      const description = normalizeSearchText(
        localized?.description ?? item.description
      );
      const reference = normalizeSearchText(
        localized?.reference ?? item.reference ?? ''
      );
      const categoryName = normalizeSearchText(
        categoryLabelMap[item.categoryId] ?? ''
      );

      return (
        name.includes(query) ||
        description.includes(query) ||
        categoryName.includes(query) ||
        (reference !== '' && reference.includes(query))
      );
    });
  }, [searchQuery, selectedCategory, categoryLabelMap, t]);

  const countDisplay = formatCatalogueCount(
    filteredProducts.length,
    language,
    'hygiene',
    t.hygiene.catalogue.countSingular,
    t.hygiene.catalogue.countPlural
  );

  const activeCategoryObj = useMemo(() => {
    if (selectedCategory === 'all') return null;
    const cat = HYGIENE_CATEGORIES.find((c) => c.id === selectedCategory);
    if (!cat) return null;
    const localized = t.hygiene.categories[cat.id];
    return {
      label: localized?.label ?? cat.label,
      description: localized?.description ?? cat.description,
    };
  }, [selectedCategory, t]);

  const toBasketItem = (product: HygieneProductItem): QuoteBasketItem => {
    const localized = t.hygiene.products[product.id];
    return {
      id: product.id,
      name: localized?.name ?? product.name,
      categoryLabel: categoryLabelMap[product.categoryId] ?? t.hygiene.hero.title,
      division: 'hygiene',
      isDemo: product.isDemo,
      quantity: '',
      specifications: '',
    };
  };

  const handleAddToBasket = (product: HygieneProductItem) => {
    if (basketIds.has(product.id)) {
      onOpenBasket();
      return;
    }
    onAddToBasket(toBasketItem(product));
  };

  const handleRequestQuote = (product: HygieneProductItem) => {
    if (!basketIds.has(product.id)) {
      onAddToBasket(toBasketItem(product));
    }
    onNavigate('contact', 'hygiene');
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <div>
      {/* 1. Modern Page Introduction */}
      <section className="border-b border-[#101D3B]/10 bg-gradient-to-b from-[#F5F8FC] to-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate('accueil')}
            className="mb-8 inline-flex min-h-10 items-center gap-2 rounded-sm text-sm font-medium text-slate-600 transition-colors hover:text-[#1765BD] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1765BD]"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
            <span>{t.common.backToHome}</span>
          </button>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5">
                <span aria-hidden="true" className="h-0.5 w-6 bg-[#70BF35]" />
                <span className="text-xs font-semibold tracking-[0.08em] text-[#3D7514]">
                  {t.hygiene.hero.eyebrow}
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#101D3B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12] rtl:leading-[1.3] rtl:lg:leading-[1.3] text-balance">
                {t.hygiene.hero.title}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                {t.hygiene.hero.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate('contact', 'hygiene')}
                >
                  {t.brand.primaryCta}
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={scrollToCatalogue}
                >
                  {t.hygiene.hero.browseCta}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <MediaFrame
                src={division.imageSrc}
                alt={t.hygiene.hero.imageAlt}
                aspectClassName="aspect-[4/3]"
                className="rounded-xl shadow-[0_18px_40px_-24px_rgba(16,29,59,0.22)]"
                fallbackLabel={t.hygiene.hero.title}
                priority
              />
            </div>
          </div>

          {/* Transparent Provisional / Demonstration Notice */}
          <div className="mt-10 flex items-start gap-3 rounded-xl border border-[#1765BD]/20 bg-[#F5F8FC] p-4 sm:p-5">
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-[#1765BD]"
              aria-hidden="true"
            />
            <div className="text-sm leading-relaxed text-slate-700">
              <span className="font-semibold text-[#101D3B]">
                {t.hygiene.notice.eyebrow}
                {isRtl ? ': ' : ' : '}
              </span>
              <span>{t.hygiene.notice.text}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Searchable & Filterable Catalogue */}
      <section
        id="catalogue-hygiene"
        aria-labelledby="catalogue-hygiene-heading"
        className="bg-white py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="catalogue-hygiene-heading"
            className="mb-6 text-xl font-semibold tracking-tight text-[#101D3B] sm:text-2xl"
          >
            {t.hygiene.catalogue.sectionHeading}
          </h2>
          {/* Search Bar, Result Counter & Basket Trigger */}
          <div className="flex flex-col gap-4 border-b border-[#101D3B]/10 pb-6 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <Search
                className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.hygiene.catalogue.searchPlaceholder}
                aria-label={t.hygiene.catalogue.searchAria}
                className="min-h-11 w-full rounded-lg border border-[#101D3B]/20 bg-[#F5F8FC]/60 ps-10 pe-10 text-sm text-[#101D3B] placeholder:text-slate-400 transition-colors focus:border-[#1765BD] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label={t.common.clearSearchAria}
                  className="absolute end-2.5 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-500 hover:bg-slate-200/70 hover:text-[#101D3B] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-slate-600 tabular-nums">
                {countDisplay.numberPart && (
                  <>
                    <span className="font-semibold text-[#101D3B]">
                      {countDisplay.numberPart}
                    </span>{' '}
                  </>
                )}
                {countDisplay.textPart}
              </p>

              <Button
                variant="secondary"
                size="sm"
                onClick={onOpenBasket}
                className="tabular-nums"
              >
                <ClipboardList className="h-4 w-4 text-[#1765BD]" aria-hidden="true" />
                <span>
                  {t.hygiene.catalogue.basketButton} ({basketItems.length})
                </span>
              </Button>
            </div>
          </div>

          {/* Interactive Category Filter Controls (horizontal scroll on mobile, wrap on tablet/desktop) */}
          <div className="mt-6">
            <div
              role="group"
              aria-label={t.hygiene.catalogue.filterGroupAria}
              className="no-scrollbar -mx-4 flex items-center gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
            >
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                aria-pressed={selectedCategory === 'all'}
                className={`inline-flex min-h-11 sm:min-h-10 items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD] sm:text-sm ${
                  selectedCategory === 'all'
                    ? 'border-[#101D3B] bg-[#101D3B] text-white'
                    : 'border-[#101D3B]/15 bg-[#F5F8FC] text-[#101D3B] hover:border-[#1765BD]/50 hover:bg-white'
                }`}
              >
                <span>{t.hygiene.catalogue.allCategories}</span>
                <span
                  className={`font-[family-name:var(--font-mono)] text-xs tabular-nums ${
                    selectedCategory === 'all' ? 'text-[#23B9ED]' : 'text-slate-500'
                  }`}
                >
                  {categoryCounts.all}
                </span>
              </button>

              {HYGIENE_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.id)}
                    aria-pressed={isActive}
                    className={`inline-flex min-h-11 sm:min-h-10 items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD] sm:text-sm ${
                      isActive
                        ? 'border-[#1765BD] bg-[#1765BD] text-white'
                        : 'border-[#101D3B]/15 bg-[#F5F8FC] text-[#101D3B] hover:border-[#1765BD]/50 hover:bg-white'
                    }`}
                  >
                    <span>{categoryLabelMap[category.id]}</span>
                    <span
                      className={`font-[family-name:var(--font-mono)] text-xs tabular-nums ${
                        isActive ? 'text-white/85' : 'text-slate-500'
                      }`}
                    >
                      {categoryCounts[category.id] ?? 0}
                    </span>
                  </button>
                );
              })}
            </div>

            {activeCategoryObj && (
              <p className="mt-4 text-sm text-slate-600">
                <span className="font-medium text-[#101D3B]">
                  {activeCategoryObj.label}
                  {isRtl ? ': ' : ' : '}
                </span>
                {activeCategoryObj.description}
              </p>
            )}
          </div>

          {/* Product Grid or Empty State */}
          {filteredProducts.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {filteredProducts.map((product, idx) => (
                <Reveal key={product.id} delay={(idx % 3) * 0.04} yOffset={10} className="flex">
                  <div className="flex w-full">
                    <HygieneProductCard
                      product={product}
                      categoryLabel={categoryLabelMap[product.categoryId] ?? ''}
                      isInBasket={basketIds.has(product.id)}
                      onAddToBasket={handleAddToBasket}
                      onRequestQuote={handleRequestQuote}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC] px-6 py-12 text-center">
              <p className="text-base font-semibold text-[#101D3B]">
                {t.hygiene.catalogue.emptyTitle}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                {t.hygiene.catalogue.emptyDescription}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button variant="secondary" size="md" onClick={resetFilters}>
                  {t.common.resetFilters}
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate('contact', 'hygiene')}
                >
                  {t.brand.primaryCta}
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <QuoteCallout defaultCategory="hygiene" onNavigate={onNavigate} />
    </div>
  );
};
