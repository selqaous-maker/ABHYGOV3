import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Shield,
  Sparkles,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { HERO_MEDIA, SUPPLY_DIVISIONS } from '../data/brand';
import { PageRoute, QuoteCategory } from '../types/site';
import { Button } from '../components/common/Button';
import { MediaFrame } from '../components/common/MediaFrame';
import { Reveal } from '../components/common/Reveal';
import { SectionHeader } from '../components/common/SectionHeader';
import { QuoteCallout } from '../components/layout/QuoteCallout';

interface HomePageProps {
  onNavigate: (route: PageRoute, quoteCategory?: QuoteCategory) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();
  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const browse = () => document.getElementById('poles-activite')?.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });

  return (
    <div className="overflow-hidden bg-white text-[#12223d]">
      {/* Reference-style full-bleed hero */}
      <section className="relative isolate min-h-[620px] overflow-hidden bg-[#07152f] sm:min-h-[680px] lg:min-h-[720px]">
        <img
          src={HERO_MEDIA.src}
          alt={t.home.hero.imageAlt}
          loading="eager"
          decoding="async"
          sizes="100vw"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-[68%_center] lg:object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#07152f]/58" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#07152f]/98 via-[#0b1e44]/88 to-[#123774]/38 rtl:bg-gradient-to-l sm:via-[#0b1e44]/82 sm:to-[#123774]/28" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#07152f]/90 via-transparent to-[#07152f]/20" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-4 pb-24 pt-20 sm:min-h-[680px] sm:px-6 sm:pb-28 lg:min-h-[720px] lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeCurve }}
            className="max-w-2xl min-w-0 rtl:text-right"
          >
            <div className="inline-flex items-center gap-3 text-[#dce9f7]">
              <span aria-hidden="true" className="h-[2px] w-7 bg-[#70BF35]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.11em] sm:text-xs">{t.home.hero.eyebrow}</span>
            </div>
            <h1 className="mt-6 max-w-2xl text-[clamp(2.1rem,10vw,4.35rem)] font-bold leading-[1.06] tracking-[-0.045em] text-white text-balance sm:text-[clamp(2.35rem,5.2vw,4.35rem)] rtl:text-[clamp(1.95rem,9vw,3.9rem)] rtl:leading-[1.22] sm:rtl:text-[clamp(2.05rem,4.8vw,3.9rem)] sm:rtl:leading-[1.2]">
              {t.home.hero.title.split(' pour ')[0]}{' '}
              {t.home.hero.title.includes(' pour ') && <><span className="text-[#70BF35]">pour</span>{' '}{t.home.hero.title.split(' pour ').slice(1).join(' pour ')}</>}
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#d8e5f7] sm:mt-6 sm:text-lg">{t.home.hero.subtitle}</p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/95"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#70BF35]" aria-hidden="true" />{t.brand.tagline}</p>
            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
              <Button variant="accent" size="lg" onClick={browse} className="w-full sm:w-auto"><span>{t.brand.secondaryCta}</span><ArrowRight className="h-4 w-4 rtl:rotate-180" /></Button>
              <Button variant="outlineLight" size="lg" onClick={() => onNavigate('contact', 'les-deux')} className="w-full sm:w-auto">{t.brand.primaryCta}</Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-[#07152f]/92 backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.trustMessages.map((item, idx) => <Reveal key={item.title} delay={idx * 0.04}><div className="flex min-h-[82px] items-center gap-3 border-b border-white/10 px-4 py-4 last:border-b-0 sm:border-e sm:px-5 sm:nth-[2n]:border-e-0 lg:border-b-0 lg:border-e lg:last:border-e-0"><span className="text-[#70BF35]">{idx === 0 ? '▧' : idx === 1 ? '▤' : idx === 2 ? '⌖' : '▥'}</span><div><p className="text-xs font-bold text-white sm:text-sm">{item.title}</p><p className="mt-1 text-[11px] leading-4 text-white/65">{item.detail}</p></div></div></Reveal>)}
          </div>
        </div>
      </section>

      <section id="poles-activite" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl"><Reveal><SectionHeader kicker={t.home.divisionsSection.kicker} title={t.home.divisionsSection.title} description={t.home.divisionsSection.description} /></Reveal><div className="mt-12 grid gap-5 lg:grid-cols-2">
          {([SUPPLY_DIVISIONS.hygiene, SUPPLY_DIVISIONS.epi] as const).map((division, idx) => { const localized = t.home.divisionCards[division.id]; const Icon = division.id === 'hygiene' ? Sparkles : Shield; const target = division.id === 'hygiene' ? 'hygiene' : 'epi'; return <Reveal key={division.id} delay={idx * 0.06}><article className="group grid overflow-hidden rounded-[1.75rem] border border-[#12223d]/10 bg-white shadow-[0_16px_40px_-32px_rgba(18,34,61,0.65)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_-32px_rgba(18,34,61,0.55)] md:grid-cols-[0.86fr_1.14fr]"><div className="relative min-h-[250px] overflow-hidden bg-[#eaf0f5] md:min-h-full"><MediaFrame src={division.imageSrc} alt={localized.imageAlt} aspectClassName="h-full" className="h-full rounded-none border-0" imgClassName="h-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none" fallbackLabel={localized.title} /><span className="absolute start-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-[#1765BD] shadow-sm"><Icon className="h-5 w-5" /></span></div><div className="flex flex-col justify-between p-6 sm:p-8"><div><p className="text-xs font-bold uppercase tracking-[0.12em] text-[#1765BD]">{localized.kicker}</p><h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-[#12223d] sm:text-3xl">{localized.title}</h3><p className="mt-3 text-sm leading-6 text-[#66727e]">{localized.description}</p><ul className="mt-6 space-y-2.5">{localized.domains.map((domain) => <li key={domain.index} className="flex items-start gap-2 text-sm text-[#26364d]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#70BF35]" /><span>{domain.title}</span></li>)}</ul></div><div className="mt-8 flex flex-wrap items-center gap-3"><Button variant="secondary" size="md" onClick={() => onNavigate(division.route)}>{localized.ctaLabel}<ChevronRight className="h-4 w-4 rtl:rotate-180" /></Button><button type="button" onClick={() => onNavigate('contact', target)} className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1765BD] hover:text-[#70BF35]">{t.brand.primaryCta}<ArrowUpRight className="h-4 w-4" /></button></div></div></article></Reveal>; })}
        </div></div>
      </section>

      <section className="bg-[#12223d] px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#baf27f]">ABHYGO · 01—04</p><h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-[-0.04em] sm:text-5xl">{t.home.pillarsSection.title}</h2></div><p className="max-w-md text-sm leading-6 text-white/65">{t.home.pillarsSection.description}</p></div><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{t.home.pillars.map((pillar, idx) => <Reveal key={pillar.index} delay={idx * 0.05}><article className="group h-full rounded-2xl border border-white/12 bg-white/[0.06] p-6 transition-colors hover:bg-[#70BF35] hover:text-[#12223d]"><p className="text-3xl font-bold text-[#70BF35] group-hover:text-[#12223d]">{pillar.index}</p><h3 className="mt-7 text-base font-bold">{pillar.title}</h3><p className="mt-3 text-sm leading-6 text-white/65 group-hover:text-[#12223d]/75">{pillar.description}</p></article></Reveal>)}</div></div></section>

      <QuoteCallout onNavigate={onNavigate} />
    </div>
  );
};
