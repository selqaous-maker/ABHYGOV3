import React from 'react';
import { ArrowRight, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { BRAND_INFO, NAV_ITEMS, buildWhatsAppDirectUrl } from '../../data/brand';
import { PageRoute, QuoteCategory } from '../../types/site';
import { BrandLogo } from '../common/BrandLogo';

interface FooterProps {
  onNavigate: (route: PageRoute, quoteCategory?: QuoteCategory) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleNav = (
    route: PageRoute,
    e: React.MouseEvent,
    quoteCategory?: QuoteCategory
  ) => {
    e.preventDefault();
    onNavigate(route, quoteCategory);
  };

  return (
    <footer className="bg-[#101D3B] text-white">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-20 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Identity */}
          <div className="lg:col-span-4">
            <a
              href="#accueil"
              onClick={(e) => handleNav('accueil', e)}
              className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#23B9ED]"
            >
              <BrandLogo variant="light" />
            </a>
            <p className="mt-4 max-w-xs text-sm font-medium text-[#70BF35]">
              {t.brand.tagline}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
              {t.brand.footer.description}
            </p>
          </div>

          {/* Useful Navigation */}
          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold tracking-[0.01em] text-white">
              {t.brand.footer.navigationHeading}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.hash}
                    onClick={(e) => handleNav(item.id, e)}
                    className="inline-block rounded-sm text-sm text-slate-300 transition-colors hover:text-[#23B9ED] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23B9ED]"
                  >
                    {t.brand.nav[item.id]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hygiene & EPI Poles */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold tracking-[0.01em] text-white">
              {t.brand.footer.suppliesHeading}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>
                <a
                  href="#produits-hygiene"
                  onClick={(e) => handleNav('hygiene', e)}
                  className="inline-block rounded-sm transition-colors hover:text-[#23B9ED] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23B9ED]"
                >
                  {t.brand.footer.hygieneLink}
                </a>
              </li>
              <li>
                <a
                  href="#epi"
                  onClick={(e) => handleNav('epi', e)}
                  className="inline-block rounded-sm transition-colors hover:text-[#23B9ED] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23B9ED]"
                >
                  {t.brand.footer.epiLink}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNav('contact', e, 'les-deux')}
                  className="inline-flex items-center gap-1.5 rounded-sm font-medium text-[#23B9ED] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23B9ED]"
                >
                  <span>{t.brand.primaryCta}</span>
                  <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Contact Data */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold tracking-[0.01em] text-white">
              {t.brand.footer.contactHeading}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href={BRAND_INFO.phoneHref}
                  className="inline-flex items-center gap-2.5 rounded-sm transition-colors hover:text-[#23B9ED] tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23B9ED]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#23B9ED]" aria-hidden="true" />
                  <span dir="ltr" className="inline-block">
                    {BRAND_INFO.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppDirectUrl(t.quoteLinks.defaultWhatsAppGreeting)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-sm transition-colors hover:text-[#70BF35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23B9ED]"
                >
                  <MessageSquare
                    className="h-4 w-4 shrink-0 text-[#70BF35]"
                    aria-hidden="true"
                  />
                  <span>{t.brand.footer.whatsappDirect}</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND_INFO.emailHref}
                  className="inline-flex items-center gap-2.5 break-all rounded-sm transition-colors hover:text-[#23B9ED] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23B9ED]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#23B9ED]" aria-hidden="true" />
                  <span dir="ltr" className="inline-block">
                    {BRAND_INFO.email}
                  </span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-slate-300">
                <MapPin className="h-4 w-4 shrink-0 text-[#70BF35]" aria-hidden="true" />
                <a
                  href={BRAND_INFO.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23B9ED]"
                >
                  {t.brand.location}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <bdi dir="ltr" className="inline-block">
              © {new Date().getFullYear()} {BRAND_INFO.name}
            </bdi>{' '}
            · {t.brand.footer.copyrightSuffix}
          </p>
          <p>{t.brand.footer.bottomSummary}</p>
        </div>
      </div>
    </footer>
  );
};
