import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { BRAND_INFO } from '../../data/brand';
import { PageRoute, QuoteCategory } from '../../types/site';
import { Button } from '../common/Button';
import { Reveal } from '../common/Reveal';

interface QuoteCalloutProps {
  title?: string;
  description?: string;
  defaultCategory?: QuoteCategory;
  onNavigate: (route: PageRoute, quoteCategory?: QuoteCategory) => void;
}

export const QuoteCallout: React.FC<QuoteCalloutProps> = ({
  title,
  description,
  defaultCategory = 'les-deux',
  onNavigate,
}) => {
  const { t } = useLanguage();
  const resolvedTitle = title ?? t.quoteCallout.defaultTitle;
  const resolvedDescription = description ?? t.quoteCallout.defaultDescription;

  return (
    <section className="border-t border-[#101D3B]/10 bg-[#F5F8FC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-[#101D3B]/10 bg-gradient-to-br from-[#101D3B] via-[#101D3B] to-[#1765BD] px-6 py-10 text-white shadow-[0_24px_56px_-28px_rgba(16,29,59,0.45)] sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-[0.04em] text-[#23B9ED]">
                <bdi dir="ltr">{BRAND_INFO.name}</bdi> · {t.brand.location}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl text-balance">
                {resolvedTitle}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-200">
                {resolvedDescription}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-0 lg:shrink-0">
              <Button
                variant="light"
                size="lg"
                onClick={() => onNavigate('contact', defaultCategory)}
              >
                <span>{t.brand.primaryCta}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
              </Button>

              <a
                href={BRAND_INFO.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-[background-color,border-color,transform] duration-150 hover:-translate-y-px hover:bg-white/10 motion-reduce:hover:translate-y-0 tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Phone className="h-4 w-4 text-[#23B9ED]" aria-hidden="true" />
                <span dir="ltr" className="inline-block">
                  {BRAND_INFO.phoneDisplay}
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
