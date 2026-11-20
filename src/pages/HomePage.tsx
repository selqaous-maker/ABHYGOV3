import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Shield,
  Sparkles,
  Truck,
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
    <div className="overflow-hidden bg-[#f5f7f3] text-[#12223d]">
      {/* NEW DIRECTION: bright B2B catalogue layout with an editorial split hero */}
      <section className="relative bg-[#f5f7f3] px-4 pb-16 pt-10 sm:px-6 sm:pb-24 lg:px-8 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <motion.div initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: easeCurve }} className="relative z-10 rtl:text-right">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#dff5c9] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#306b1d]"><span className="h-2 w-2 rounded-full bg-[#70BF35]" /> ABHYGO · {t.brand.region}</div>
            <h1 className="mt-7 max-w-2xl text-[clamp(2.75rem,5vw,5.5rem)] font-bold leading-[0.96] tracking-[-0.055em] text-[#12223d] text-balance rtl:text-[clamp(2.35rem,4.5vw,4.7rem)] rtl:leading-[1.18]">{t.home.hero.title}</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#5d6a78] sm:text-lg">{t.home.hero.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button variant="accent" size="lg" onClick={browse} className="w-full sm:w-auto"><span>{t.brand.secondaryCta}</span><ArrowRight className="h-4 w-4 rtl:rotate-180" /></Button>
              <Button variant="secondary" size="lg" onClick={() => onNavigate('contact', 'les-deux')} className="w-full border-[#12223d]/20 bg-white sm:w-auto">{t.brand.primaryCta}</Button>
            </div>
            <div className="mt-9 grid max-w-xl grid-cols-2 gap-x-7 gap-y-4 border-t border-[#12223d]/12 pt-6 sm:grid-cols-3">
              <div><p className="text-2xl font-bold text-[#1765BD]">B2B</p><p className="mt-1 text-xs leading-4 text-[#6d7884]">{t.home.trustMessages[0].detail}</p></div>
              <div><p className="text-2xl font-bold text-[#70BF35]">2 pôles</p><p className="mt-1 text-xs leading-4 text-[#6d7884]">{t.home.trustMessages[1].detail}</p></div>
              <div className="col-span-2 sm:col-span-1"><p className="text-2xl font-bold text-[#12223d]">Belfaa</p><p className="mt-1 text-xs leading-4 text-[#6d7884]">{t.home.trustMessages[2].detail}</p></div>
            </div>
          </motion.div>

          <motion.div initial={shouldReduceMotion ? false : { opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.08, ease: easeCurve }} className="relative min-w-0">
            <div className="absolute -end-12 -top-10 h-48 w-48 rounded-full bg-[#c9edaa] blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] bg-[#12223d] p-2 shadow-[0_30px_70px_-32px_rgba(18,34,61,0.6)]">
              <div className="relative aspect-[1.05/1] overflow-hidden rounded-[1.5rem]">
                <MediaFrame src={HERO_MEDIA.src} alt={t.home.hero.imageAlt} aspectClassName="h-full" className="h-full rounded-none border-0" imgClassName="h-full object-cover" fallbackLabel={t.home.hero.fallbackLabel} priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12223d]/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 inset-x-5 flex items-end justify-between gap-4 text-white sm:bottom-7 sm:inset-x-7"><div><p className="text-xs font-bold uppercase tracking-[0.13em] text-[#baf27f]">{t.brand.tagline}</p><p className="mt-2 text-xl font-bold sm:text-2xl">{t.brand.location}</p></div><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#70BF35] text-[#12223d]"><ArrowUpRight className="h-5 w-5" /></span></div>
              </div>
            </div>
            <div className="absolute -bottom-7 -start-5 hidden w-52 rounded-2xl border border-[#12223d]/10 bg-white p-4 shadow-[0_18px_40px_-25px_rgba(18,34,61,0.5)] sm:block"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e6f5d9] text-[#4d922a]"><Truck className="h-5 w-5" /></span><div><p className="text-xs font-bold text-[#12223d]">{t.home.trustMessages[3].title}</p><p className="mt-1 text-[11px] text-slate-500">{t.home.trustMessages[3].detail}</p></div></div></div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#12223d]/8 bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">{t.home.trustMessages.map((item, idx) => <Reveal key={item.title} delay={idx * 0.04}><div className="flex items-start gap-3 border-[#12223d]/10 px-2 py-2 lg:border-e lg:last:border-e-0"><span className="mt-0.5 text-lg font-bold text-[#70BF35]">0{idx + 1}</span><div><p className="text-sm font-bold text-[#12223d]">{item.title}</p><p className="mt-1 text-xs leading-5 text-[#6d7884]">{item.detail}</p></div></div></Reveal>)}</div>
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
