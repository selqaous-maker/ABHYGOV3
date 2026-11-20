import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Factory,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Store,
  UtensilsCrossed,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BRAND_INFO } from '../data/brand';
import { PageRoute, QuoteCategory } from '../types/site';
import { Button } from '../components/common/Button';
import { Reveal } from '../components/common/Reveal';
import { SectionHeader } from '../components/common/SectionHeader';
import { QuoteCallout } from '../components/layout/QuoteCallout';

interface AboutPageProps {
  onNavigate: (route: PageRoute, quoteCategory?: QuoteCategory) => void;
}

const SECTOR_ICONS = [Building2, UtensilsCrossed, Factory, Store] as const;

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <div>
      {/* 1. Corporate Introduction */}
      <section className="border-b border-[#101D3B]/10 bg-gradient-to-b from-[#F5F8FC] to-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate('accueil')}
            className="mb-8 inline-flex min-h-10 items-center gap-2 rounded-sm text-sm font-medium text-slate-600 transition-colors hover:text-[#1765BD] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1765BD]"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
            <span>{t.common.backToHome}</span>
          </button>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5">
              <span aria-hidden="true" className="h-0.5 w-6 bg-[#70BF35]" />
              <span className="text-xs font-semibold tracking-[0.08em] text-[#3D7514]">
                {t.about.hero.eyebrow}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#101D3B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12] rtl:leading-[1.3] rtl:lg:leading-[1.3] text-balance">
              {t.about.hero.title}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {t.about.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Importance of Product Choice, Hygiene & Workplace Protection */}
      <section className="border-b border-[#101D3B]/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeader
                  kicker={t.about.engagement.kicker}
                  title={t.about.engagement.title}
                  description={t.about.engagement.description}
                />

                <div className="mt-8 space-y-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                  <p>{t.about.engagement.paragraph1}</p>
                  <p>{t.about.engagement.paragraph2}</p>
                </div>
              </Reveal>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Reveal delay={0.04} className="flex">
                  <div className="flex flex-1 flex-col justify-between rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC]/60 p-6 transition-[transform,border-color,background-color] duration-150 hover:-translate-y-0.5 hover:border-[#1765BD]/35 hover:bg-white motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <div>
                      <Sparkles className="h-5 w-5 text-[#1765BD]" aria-hidden="true" />
                      <h3 className="mt-4 text-base font-semibold text-[#101D3B]">
                        {t.about.engagement.hygieneTitle}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {t.about.engagement.hygieneDesc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate('hygiene')}
                      className="mt-5 inline-flex min-h-9 items-center gap-1.5 self-start rounded-sm text-sm font-medium text-[#1765BD] transition-colors hover:text-[#101D3B] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                    >
                      <span>{t.about.engagement.consultCta}</span>
                      <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                    </button>
                  </div>
                </Reveal>

                <Reveal delay={0.08} className="flex">
                  <div className="flex flex-1 flex-col justify-between rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC]/60 p-6 transition-[transform,border-color,background-color] duration-150 hover:-translate-y-0.5 hover:border-[#1765BD]/35 hover:bg-white motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <div>
                      <ShieldCheck className="h-5 w-5 text-[#1765BD]" aria-hidden="true" />
                      <h3 className="mt-4 text-base font-semibold text-[#101D3B]">
                        {t.about.engagement.epiTitle}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {t.about.engagement.epiDesc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate('epi')}
                      className="mt-5 inline-flex min-h-9 items-center gap-1.5 self-start rounded-sm text-sm font-medium text-[#1765BD] transition-colors hover:text-[#101D3B] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                    >
                      <span>{t.about.engagement.consultCta}</span>
                      <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                    </button>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Factual Coordinates Box */}
            <aside className="lg:col-span-5">
              <Reveal delay={0.08}>
                <div className="rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC] p-6 sm:p-8">
                  <p className="text-xs font-medium tracking-[0.04em] text-[#1765BD]">
                    {t.about.coordinates.kicker}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold text-[#101D3B]">
                    {t.about.coordinates.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {t.about.coordinates.description}
                  </p>

                  <dl className="mt-6 space-y-4 border-t border-[#101D3B]/10 pt-6 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1765BD]" aria-hidden="true" />
                      <div>
                        <dt className="font-medium text-[#101D3B]">
                          {t.about.coordinates.locationLabel}
                        </dt>
                        <dd className="mt-0.5 text-slate-600">{t.brand.location}</dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#1765BD]" aria-hidden="true" />
                      <div>
                        <dt className="font-medium text-[#101D3B]">
                          {t.about.coordinates.phoneLabel}
                        </dt>
                        <dd className="mt-0.5">
                          <a
                            href={BRAND_INFO.phoneHref}
                            className="rounded-sm text-slate-700 transition-colors hover:text-[#1765BD] tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                          >
                            <span dir="ltr" className="inline-block">
                              {BRAND_INFO.phoneDisplay}
                            </span>
                          </a>
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#1765BD]" aria-hidden="true" />
                      <div>
                        <dt className="font-medium text-[#101D3B]">
                          {t.about.coordinates.emailLabel}
                        </dt>
                        <dd className="mt-0.5">
                          <a
                            href={BRAND_INFO.emailHref}
                            className="break-all rounded-sm text-slate-700 transition-colors hover:text-[#1765BD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                          >
                            <span dir="ltr" className="inline-block">
                              {BRAND_INFO.email}
                            </span>
                          </a>
                        </dd>
                      </div>
                    </div>
                  </dl>

                  <div className="mt-8">
                    <Button
                      variant="primary"
                      size="md"
                      className="w-full"
                      onClick={() => onNavigate('contact', 'les-deux')}
                    >
                      {t.brand.primaryCta}
                    </Button>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* 3. Des solutions adaptées à votre activité (Intended Sectors) */}
      <section className="border-b border-[#101D3B]/10 bg-[#F5F8FC] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              kicker={t.about.sectors.kicker}
              title={t.about.sectors.title}
              description={t.about.sectors.description}
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.sectors.items.map((sector, idx) => {
              const Icon = SECTOR_ICONS[idx] ?? Building2;
              return (
                <Reveal key={sector.title} delay={idx * 0.05} className="flex">
                  <article className="flex flex-1 flex-col rounded-xl border border-[#101D3B]/10 bg-white p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#1765BD]/35 hover:shadow-[0_14px_32px_-20px_rgba(16,29,59,0.2)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#101D3B]/10 bg-[#F5F8FC] text-[#1765BD]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <h3 className="mt-5 text-base font-semibold text-[#101D3B]">
                      {sector.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {sector.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Pourquoi choisir ABHYGO ? */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              kicker={t.about.why.kicker}
              title={t.about.why.title}
              description={t.about.why.description}
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.why.items.map((item, idx) => (
              <Reveal key={item.index} delay={idx * 0.05} className="flex">
                <div className="flex-1 rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC]/60 p-6 transition-[transform,border-color,background-color] duration-150 hover:-translate-y-0.5 hover:border-[#1765BD]/30 hover:bg-white motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <span className="font-[family-name:var(--font-mono)] text-xs font-medium text-[#1765BD] tabular-nums">
                    {item.index}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-[#101D3B]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Custom CTA */}
      <QuoteCallout
        title={t.about.callout.title}
        description={t.about.callout.description}
        defaultCategory="les-deux"
        onNavigate={onNavigate}
      />
    </div>
  );
};
