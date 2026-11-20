import { useCallback, useEffect, useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { QuoteBasketDrawer } from './components/catalogue/QuoteBasketDrawer';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { useLanguage } from './context/LanguageContext';
import { NAV_ITEMS, buildWhatsAppDirectUrl } from './data/brand';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { EpiPage } from './pages/EpiPage';
import { HomePage } from './pages/HomePage';
import { HygienePage } from './pages/HygienePage';
import { PageRoute, QuoteBasketItem, QuoteCategory } from './types/site';

const BASKET_STORAGE_KEY = 'abhygo_quote_basket_v1';
const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const PATH_TO_ROUTE: Record<string, PageRoute> = {
  '/': 'accueil',
  '/accueil': 'accueil',
  '/produits-hygiene': 'hygiene',
  '/epi': 'epi',
  '/a-propos': 'apropos',
  '/contact': 'contact',
};

function loadInitialBasket(): QuoteBasketItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.sessionStorage.getItem(BASKET_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function resolveRouteFromHash(hash: string): PageRoute | null {
  const cleanedHash = hash.replace(/^#/, '').toLowerCase();
  if (!cleanedHash) return null;
  const hashMatch = NAV_ITEMS.find(
    (item) =>
      item.hash.replace(/^#/, '').toLowerCase() === cleanedHash ||
      item.id === cleanedHash
  );
  return hashMatch ? hashMatch.id : null;
}

function resolveCurrentRoute(): PageRoute {
  if (typeof window === 'undefined') return 'accueil';

  const hashRoute = resolveRouteFromHash(window.location.hash);
  if (hashRoute) return hashRoute;

  const normalizedPath = window.location.pathname.replace(/\/+$/, '').toLowerCase() || '/';
  return PATH_TO_ROUTE[normalizedPath] ?? 'accueil';
}

function setMetaTag(selector: string, attribute: 'content' | 'href', value: string) {
  const el = document.querySelector(selector);
  if (el) {
    el.setAttribute(attribute, value);
  }
}

function setCanonicalLink(href: string | null) {
  const existing = document.querySelector('link[rel="canonical"]');
  if (!href) {
    if (existing) {
      existing.remove();
    }
    return;
  }

  let link = existing;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(resolveCurrentRoute);
  const [routeNonce, setRouteNonce] = useState(0);
  const [quoteCategory, setQuoteCategory] = useState<QuoteCategory>('les-deux');
  const [quoteSubject, setQuoteSubject] = useState<string>('');
  const [basketItems, setBasketItems] = useState<QuoteBasketItem[]>(loadInitialBasket);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { language, t } = useLanguage();

  useEffect(() => {
    try {
      window.sessionStorage.setItem(BASKET_STORAGE_KEY, JSON.stringify(basketItems));
    } catch {
      // Ignore storage quota or privacy-mode restrictions gracefully
    }
  }, [basketItems]);

  // Dynamic route & language SEO: title, meta description, Open Graph, Twitter cards & clean canonical URL
  useEffect(() => {
    const seo = t.seo[currentRoute] ?? t.seo.accueil;
    document.title = seo.title;

    const origin = window.location.origin;
    const rawPath = window.location.pathname.replace(/\/+$/, '');
    const cleanPath = rawPath === '' ? '/' : rawPath;
    const cleanUrl = `${origin}${cleanPath}`;

    setMetaTag('meta[name="description"]', 'content', seo.description);
    setMetaTag('meta[property="og:title"]', 'content', seo.title);
    setMetaTag('meta[property="og:description"]', 'content', seo.description);
    setMetaTag('meta[property="og:locale"]', 'content', seo.ogLocale);
    setMetaTag('meta[property="og:url"]', 'content', cleanUrl);
    setMetaTag('meta[name="twitter:title"]', 'content', seo.title);
    setMetaTag('meta[name="twitter:description"]', 'content', seo.description);

    // Emit canonical only for default French SPA root/path; omit in dynamic Arabic view to avoid cross-language canonical conflict
    setCanonicalLink(language === 'fr' ? cleanUrl : null);
  }, [currentRoute, language, t]);

  useEffect(() => {
    const handleHashChange = () => {
      const hashRoute = resolveRouteFromHash(window.location.hash);
      if (hashRoute) {
        setCurrentRoute(hashRoute);
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    const handlePopState = () => {
      setCurrentRoute(resolveCurrentRoute());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleNavigate = useCallback(
    (route: PageRoute, nextQuoteCategory?: QuoteCategory, nextQuoteSubject?: string) => {
      if (nextQuoteCategory) {
        setQuoteCategory(nextQuoteCategory);
      }
      setQuoteSubject(nextQuoteSubject ?? '');

      const targetItem = NAV_ITEMS.find((item) => item.id === route);
      if (targetItem && typeof window !== 'undefined') {
        if (window.location.hash !== targetItem.hash) {
          window.history.pushState(null, '', `/${targetItem.hash}`);
        }
      }

      setCurrentRoute(route);
      setRouteNonce((n) => n + 1);
      if (typeof window !== 'undefined') {
        window.scrollTo({
          top: 0,
          behavior: shouldReduceMotion ? 'auto' : 'smooth',
        });
      }
    },
    [shouldReduceMotion]
  );

  const handleAddToBasket = useCallback((newItem: QuoteBasketItem) => {
    setBasketItems((prev) => {
      if (prev.some((item) => item.id === newItem.id)) {
        return prev;
      }
      return [...prev, newItem];
    });
  }, []);

  const handleUpdateBasketItem = useCallback(
    (
      id: string,
      updates: Partial<Pick<QuoteBasketItem, 'quantity' | 'specifications'>>
    ) => {
      setBasketItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, ...updates } : item))
      );
    },
    []
  );

  const handleRemoveBasketItem = useCallback((id: string) => {
    setBasketItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleClearBasket = useCallback(() => {
    setBasketItems([]);
  }, []);

  const handleProceedToQuote = useCallback(() => {
    setIsBasketOpen(false);
    const hasHygiene = basketItems.some((item) => item.division === 'hygiene');
    const hasEpi = basketItems.some((item) => item.division === 'epi');
    const inferredCategory: QuoteCategory =
      hasHygiene && hasEpi ? 'les-deux' : hasHygiene ? 'hygiene' : hasEpi ? 'epi' : 'les-deux';
    handleNavigate('contact', inferredCategory);
  }, [basketItems, handleNavigate]);

  const renderPage = () => {
    switch (currentRoute) {
      case 'hygiene':
        return (
          <HygienePage
            basketItems={basketItems}
            onAddToBasket={handleAddToBasket}
            onOpenBasket={() => setIsBasketOpen(true)}
            onNavigate={handleNavigate}
          />
        );
      case 'epi':
        return (
          <EpiPage
            routeNonce={routeNonce}
            basketItems={basketItems}
            onAddToBasket={handleAddToBasket}
            onOpenBasket={() => setIsBasketOpen(true)}
            onNavigate={handleNavigate}
          />
        );
      case 'apropos':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return (
          <ContactPage
            initialCategory={quoteCategory}
            initialMessage={quoteSubject}
            basketItems={basketItems}
            onUpdateBasketItem={handleUpdateBasketItem}
            onRemoveBasketItem={handleRemoveBasketItem}
            onNavigate={handleNavigate}
          />
        );
      case 'accueil':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-white text-[#101D3B]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#101D3B] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-2 focus:outline-offset-2 focus:outline-[#23B9ED]"
      >
        {t.common.skipToContent}
      </a>

      <Header currentRoute={currentRoute} onNavigate={handleNavigate} />

      <main id="main-content" className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.16, ease: EASE_CURVE }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Discreet Mobile-Only WhatsApp Contact Affordance */}
      {!isBasketOpen && (
        <div className="fixed bottom-4 start-4 z-30 lg:hidden">
          <a
            href={buildWhatsAppDirectUrl(t.quoteLinks.defaultWhatsAppGreeting)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.common.whatsappQuickAria}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#101D3B]/15 bg-white/95 px-3.5 py-2 text-sm font-medium text-[#101D3B] shadow-[0_12px_28px_-10px_rgba(16,29,59,0.28)] backdrop-blur-sm transition-[border-color,color,transform] duration-150 hover:border-[#70BF35] hover:text-[#1765BD] active:scale-[0.98] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
          >
            <MessageSquare
              className="h-4 w-4 shrink-0 text-[#3D7514]"
              aria-hidden="true"
            />
            <span className="whitespace-nowrap">{t.common.whatsappShort}</span>
          </a>
        </div>
      )}

      <QuoteBasketDrawer
        isOpen={isBasketOpen}
        items={basketItems}
        onOpen={() => setIsBasketOpen(true)}
        onClose={() => setIsBasketOpen(false)}
        onUpdateItem={handleUpdateBasketItem}
        onRemoveItem={handleRemoveBasketItem}
        onClearBasket={handleClearBasket}
        onProceedToQuote={handleProceedToQuote}
      />
    </div>
  );
}
