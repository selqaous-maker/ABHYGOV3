import React, { useEffect, useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { BRAND_INFO, NAV_ITEMS } from '../../data/brand';
import { PageRoute, QuoteCategory } from '../../types/site';
import { BrandLogo } from '../common/BrandLogo';
import { Button } from '../common/Button';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute, quoteCategory?: QuoteCategory) => void;
}

const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentRoute]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (route: PageRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/95 backdrop-blur-md transition-[border-color,box-shadow] duration-150 ${
        isScrolled
          ? 'border-[#101D3B]/15 shadow-[0_8px_24px_-16px_rgba(16,29,59,0.22)]'
          : 'border-[#101D3B]/10'
      }`}
    >
      <div className="border-b border-[#101D3B]/8 bg-[#07152f] text-white/80">
        <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-between gap-4 px-4 text-[11px] sm:px-6 lg:px-8">
          <span className="hidden sm:inline">{t.brand.region}</span>
          <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end">
            <a href={BRAND_INFO.phoneHref} className="inline-flex items-center gap-1.5 transition-colors hover:text-white"><span aria-hidden="true">☎</span><span dir="ltr">{BRAND_INFO.phoneDisplay}</span></a>
            <a href={BRAND_INFO.emailHref} className="hidden items-center gap-1.5 transition-colors hover:text-white md:inline-flex"><span aria-hidden="true">✉</span><span>{BRAND_INFO.email}</span></a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#accueil"
          onClick={(e) => handleLinkClick('accueil', e)}
          aria-label={t.brand.header.homeAria}
          className="inline-flex items-center whitespace-nowrap shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1765BD]"
        >
          <BrandLogo variant="dark" />
        </a>

        {/* Zone 2: Single-line Text Navigation */}
        <nav
          aria-label={t.brand.header.mainNavAria}
          className="hidden lg:flex items-center gap-5 xl:gap-7"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentRoute === item.id;
            return (
              <a
                key={item.id}
                href={item.hash}
                onClick={(e) => handleLinkClick(item.id, e)}
                aria-current={isActive ? 'page' : undefined}
                className={`group relative py-1 text-sm font-medium whitespace-nowrap shrink-0 rounded-sm transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1765BD] ${
                  isActive
                    ? 'text-[#1765BD]'
                    : 'text-[#101D3B]/75 hover:text-[#101D3B]'
                }`}
              >
                {t.brand.nav[item.id]}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full transition-opacity duration-150 ${
                    isActive
                      ? 'bg-[#1765BD] opacity-100'
                      : 'bg-[#23B9ED] opacity-0 group-hover:opacity-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Language Switcher + Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-2.5 shrink-0 sm:gap-3">
          <div
            role="group"
            aria-label={t.brand.languageSwitcher.groupAria}
            className="hidden lg:inline-flex items-center rounded-lg border border-[#101D3B]/15 bg-[#F5F8FC] p-0.5"
          >
            <button
              type="button"
              lang="fr"
              aria-pressed={language === 'fr'}
              onClick={() => setLanguage('fr')}
              className={`min-h-8 rounded-md px-2.5 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD] ${
                language === 'fr'
                  ? 'bg-[#101D3B] text-white shadow-xs'
                  : 'text-[#101D3B]/75 hover:text-[#101D3B]'
              }`}
            >
              {t.brand.languageSwitcher.frLabel}
            </button>
            <button
              type="button"
              lang="ar"
              aria-pressed={language === 'ar'}
              onClick={() => setLanguage('ar')}
              className={`min-h-8 rounded-md px-2.5 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD] ${
                language === 'ar'
                  ? 'bg-[#101D3B] text-white shadow-xs'
                  : 'text-[#101D3B]/75 hover:text-[#101D3B]'
              }`}
            >
              {t.brand.languageSwitcher.arLabel}
            </button>
          </div>

          <div className="hidden lg:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() => onNavigate('contact', 'les-deux')}
            >
              {t.brand.primaryCta}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              mobileMenuOpen
                ? t.brand.header.closeMenuAria
                : t.brand.header.openMenuAria
            }
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#101D3B]/15 text-[#101D3B] transition-colors hover:bg-[#F5F8FC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD] lg:hidden cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Polished Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: EASE_CURVE }}
            className="border-t border-[#101D3B]/10 bg-white px-4 py-4 shadow-[0_18px_36px_-18px_rgba(16,29,59,0.22)] sm:px-6 lg:hidden"
          >
            <nav aria-label={t.brand.header.mobileNavAria} className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = currentRoute === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.hash}
                    onClick={(e) => handleLinkClick(item.id, e)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex min-h-11 items-center justify-between rounded-lg px-3.5 text-base font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD] ${
                      isActive
                        ? 'bg-[#F5F8FC] text-[#1765BD]'
                        : 'text-[#101D3B] hover:bg-[#F5F8FC]'
                    }`}
                  >
                    <span>{t.brand.nav[item.id]}</span>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-[#1765BD]"
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#101D3B]/10 pt-4">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-600">
                <Globe className="h-4 w-4 text-[#1765BD]" aria-hidden="true" />
                <span>{t.brand.languageSwitcher.mobileHeading}</span>
              </span>
              <div
                role="group"
                aria-label={t.brand.languageSwitcher.groupAria}
                className="inline-flex items-center rounded-lg border border-[#101D3B]/15 bg-[#F5F8FC] p-0.5"
              >
                <button
                  type="button"
                  lang="fr"
                  aria-pressed={language === 'fr'}
                  onClick={() => setLanguage('fr')}
                  className={`min-h-9 rounded-md px-3 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD] ${
                    language === 'fr'
                      ? 'bg-[#101D3B] text-white shadow-xs'
                      : 'text-[#101D3B]/75 hover:text-[#101D3B]'
                  }`}
                >
                  {t.brand.languageSwitcher.frLabel}
                </button>
                <button
                  type="button"
                  lang="ar"
                  aria-pressed={language === 'ar'}
                  onClick={() => setLanguage('ar')}
                  className={`min-h-9 rounded-md px-3 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD] ${
                    language === 'ar'
                      ? 'bg-[#101D3B] text-white shadow-xs'
                      : 'text-[#101D3B]/75 hover:text-[#101D3B]'
                  }`}
                >
                  {t.brand.languageSwitcher.arLabel}
                </button>
              </div>
            </div>

            <div className="mt-4 border-t border-[#101D3B]/10 pt-4">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('contact', 'les-deux');
                }}
              >
                {t.brand.primaryCta}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
