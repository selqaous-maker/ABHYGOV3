import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Trash2,
} from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { BRAND_INFO, buildWhatsAppDirectUrl } from '../data/brand';
import {
  PageRoute,
  QuoteBasketItem,
  QuoteCategory,
  QuoteFormData,
} from '../types/site';
import {
  buildMailtoQuoteUrl,
  buildQuoteSummaryText,
  buildWhatsAppQuoteUrl,
  getLocalizedBasketItemMeta,
} from '../utils/quoteLinks';
import { formatFormErrorSummary } from '../utils/countFormat';
import { Button } from '../components/common/Button';
import { Reveal } from '../components/common/Reveal';

interface ContactPageProps {
  initialCategory?: QuoteCategory;
  initialMessage?: string;
  basketItems: QuoteBasketItem[];
  onUpdateBasketItem: (
    id: string,
    updates: Partial<Pick<QuoteBasketItem, 'quantity' | 'specifications'>>
  ) => void;
  onRemoveBasketItem: (id: string) => void;
  onNavigate: (route: PageRoute, quoteCategory?: QuoteCategory) => void;
}

type FormErrorKey =
  | 'fullNameError'
  | 'phoneError'
  | 'emailError'
  | 'cityError'
  | 'productsError';

type FormErrorKeys = Partial<Record<keyof QuoteFormData, FormErrorKey>>;

const QUOTE_CATEGORIES: QuoteCategory[] = ['hygiene', 'epi', 'les-deux'];

export const ContactPage: React.FC<ContactPageProps> = ({
  initialCategory = 'les-deux',
  initialMessage = '',
  basketItems,
  onUpdateBasketItem,
  onRemoveBasketItem,
  onNavigate,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const { isRtl, language, t } = useLanguage();

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    category: initialCategory,
    requestedProducts: '',
    quantities: '',
    message: initialMessage,
  });

  const [errorKeys, setErrorKeys] = useState<FormErrorKeys>({});
  const [hasSubmittedAttempt, setHasSubmittedAttempt] = useState(false);
  const [preparedSubmission, setPreparedSubmission] = useState<{
    data: QuoteFormData;
    basketSnapshot: QuoteBasketItem[];
  } | null>(null);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      category: initialCategory,
      message: initialMessage || prev.message,
    }));
  }, [initialCategory, initialMessage]);

  const validate = (data: QuoteFormData): FormErrorKeys => {
    const nextErrors: FormErrorKeys = {};

    if (!data.fullName.trim()) {
      nextErrors.fullName = 'fullNameError';
    }

    const phoneDigits = data.phone.replace(/[^\d+]/g, '');
    if (!data.phone.trim() || phoneDigits.length < 8) {
      nextErrors.phone = 'phoneError';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim() || !emailPattern.test(data.email.trim())) {
      nextErrors.email = 'emailError';
    }

    if (!data.city.trim()) {
      nextErrors.city = 'cityError';
    }

    if (basketItems.length === 0 && !data.requestedProducts.trim()) {
      nextErrors.requestedProducts = 'productsError';
    }

    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmittedAttempt(true);
    const validationErrors = validate(formData);
    setErrorKeys(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setPreparedSubmission({
        data: formData,
        basketSnapshot: basketItems.map((item) => ({ ...item })),
      });
      if (typeof window !== 'undefined') {
        window.scrollTo({
          top: 0,
          behavior: shouldReduceMotion ? 'auto' : 'smooth',
        });
      }
    }
  };

  const handleFieldChange = <K extends keyof QuoteFormData>(
    field: K,
    value: QuoteFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errorKeys[field]) {
      setErrorKeys((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const getErrorText = (field: keyof QuoteFormData): string | undefined => {
    const key = errorKeys[field];
    return key ? t.contact.form[key] : undefined;
  };

  const fullNameError = getErrorText('fullName');
  const phoneError = getErrorText('phone');
  const emailError = getErrorText('email');
  const cityError = getErrorText('city');
  const productsError = getErrorText('requestedProducts');

  const errorCount = Object.values(errorKeys).filter(Boolean).length;

  const dispatchLinks = useMemo(() => {
    if (!preparedSubmission) return null;
    return {
      whatsappUrl: buildWhatsAppQuoteUrl(
        preparedSubmission.data,
        preparedSubmission.basketSnapshot,
        t
      ),
      mailtoUrl: buildMailtoQuoteUrl(
        preparedSubmission.data,
        preparedSubmission.basketSnapshot,
        t
      ),
      previewText: buildQuoteSummaryText(
        preparedSubmission.data,
        preparedSubmission.basketSnapshot,
        t
      ),
    };
  }, [preparedSubmission, t]);

  return (
    <div>
      {/* Header */}
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

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5">
              <span aria-hidden="true" className="h-0.5 w-6 bg-[#70BF35]" />
              <span className="text-xs font-semibold tracking-[0.08em] text-[#3D7514]">
                {t.contact.hero.eyebrow}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#101D3B] sm:text-4xl rtl:leading-[1.3] text-balance">
              {t.contact.hero.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {t.contact.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Split-Screen Contact Layout */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Start Column: Contact Cards + Town-Level Map Area */}
            <aside aria-labelledby="contact-direct-heading" className="space-y-6 lg:col-span-5">
              <h2 id="contact-direct-heading" className="sr-only">
                {t.contact.aside.landmarkHeading}
              </h2>
              <Reveal>
                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {/* Phone Card */}
                  <a
                    href={BRAND_INFO.phoneHref}
                    className="group flex items-start gap-4 rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC]/70 p-5 transition-[transform,border-color,background-color,box-shadow] duration-150 hover:-translate-y-0.5 hover:border-[#1765BD]/40 hover:bg-white hover:shadow-[0_14px_30px_-18px_rgba(16,29,59,0.2)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                  >
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#101D3B] text-[#23B9ED]">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-500">
                        {t.contact.aside.phoneTitle}
                      </p>
                      <p className="mt-1 text-base font-semibold text-[#101D3B] transition-colors group-hover:text-[#1765BD] tabular-nums">
                        <span dir="ltr" className="inline-block">
                          {BRAND_INFO.phoneDisplay}
                        </span>
                      </p>
                      <p className="mt-0.5 text-xs text-slate-600">
                        {t.contact.aside.phoneDesc}
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp Card */}
                  <a
                    href={buildWhatsAppDirectUrl(t.quoteLinks.defaultWhatsAppGreeting)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC]/70 p-5 transition-[transform,border-color,background-color,box-shadow] duration-150 hover:-translate-y-0.5 hover:border-[#70BF35]/70 hover:bg-white hover:shadow-[0_14px_30px_-18px_rgba(16,29,59,0.2)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                  >
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#101D3B] text-[#70BF35]">
                      <MessageSquare className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <span>{t.contact.aside.whatsappTitle}</span>
                        <ExternalLink className="h-3 w-3 rtl:-scale-x-100" aria-hidden="true" />
                      </div>
                      <p className="mt-1 text-base font-semibold text-[#101D3B] transition-colors group-hover:text-[#1765BD] tabular-nums">
                        <span dir="ltr" className="inline-block">
                          {BRAND_INFO.phoneDisplay}
                        </span>
                      </p>
                      <p className="mt-0.5 text-xs text-slate-600">
                        {t.contact.aside.whatsappDesc}
                      </p>
                    </div>
                  </a>

                  {/* Email Card */}
                  <a
                    href={BRAND_INFO.emailHref}
                    className="group flex items-start gap-4 rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC]/70 p-5 transition-[transform,border-color,background-color,box-shadow] duration-150 hover:-translate-y-0.5 hover:border-[#1765BD]/40 hover:bg-white hover:shadow-[0_14px_30px_-18px_rgba(16,29,59,0.2)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:col-span-2 lg:col-span-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                  >
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#101D3B] text-[#23B9ED]">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-500">
                        {t.contact.aside.emailTitle}
                      </p>
                      <p className="mt-1 break-all text-base font-semibold text-[#101D3B] transition-colors group-hover:text-[#1765BD]">
                        <span dir="ltr" className="inline-block">
                          {BRAND_INFO.email}
                        </span>
                      </p>
                      <p className="mt-0.5 text-xs text-slate-600">
                        {t.contact.aside.emailDesc}
                      </p>
                    </div>
                  </a>
                </div>
              </Reveal>

              {/* Town-Level Map Area: Belfaa, Maroc only */}
              <Reveal delay={0.05}>
                <div className="overflow-hidden rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC]">
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#EAF1FA] via-[#F5F8FC] to-[#E2ECF8]">
                    {/* Subtle Swiss architectural grid lines (town-level visual only, no invented streets) */}
                    <svg
                      aria-hidden="true"
                      className="h-full w-full text-[#1765BD]/15"
                      viewBox="0 0 400 200"
                      fill="none"
                    >
                      <defs>
                        <pattern
                          id="belfaa-grid"
                          width="32"
                          height="32"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 32 0 L 0 0 0 32"
                            stroke="currentColor"
                            strokeWidth="1"
                          />
                        </pattern>
                      </defs>
                      <rect width="400" height="200" fill="url(#belfaa-grid)" />
                      <circle
                        cx="200"
                        cy="94"
                        r="52"
                        stroke="#1765BD"
                        strokeOpacity="0.18"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                      <circle
                        cx="200"
                        cy="94"
                        r="26"
                        fill="#23B9ED"
                        fillOpacity="0.12"
                      />
                    </svg>

                    {/* Centered Town-Level Pin */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#101D3B] text-[#70BF35] shadow-md ring-4 ring-white">
                        <MapPin className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="mt-2.5 text-sm font-semibold text-[#101D3B]">
                        {t.brand.location}
                      </p>
                      <p className="text-xs text-slate-600">
                        {t.contact.aside.mapTownOnly}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 border-t border-[#101D3B]/10 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#101D3B]">
                        {t.brand.location}
                      </p>
                      <p className="text-xs text-slate-500">
                        {t.brand.region}
                      </p>
                    </div>

                    <a
                      href={BRAND_INFO.mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-[#101D3B]/20 bg-[#F5F8FC] px-4 py-2 text-xs font-medium text-[#101D3B] whitespace-nowrap transition-colors hover:border-[#1765BD] hover:text-[#1765BD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                    >
                      <span>{t.contact.aside.mapCta}</span>
                      <ExternalLink className="h-3.5 w-3.5 rtl:-scale-x-100" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Privacy Note */}
              <div className="rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC]/60 p-4 text-xs leading-relaxed text-slate-600">
                <div className="flex items-start gap-2.5">
                  <Lock className="mt-0.5 h-4 w-4 shrink-0 text-[#1765BD]" aria-hidden="true" />
                  <p>{t.contact.aside.privacyNote}</p>
                </div>
              </div>
            </aside>

            {/* End Column: Enquiry Form or Prepared Dispatch Panel */}
            <div className="lg:col-span-7">
              {preparedSubmission && dispatchLinks ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-[#1765BD]/30 bg-[#F5F8FC] p-6 sm:p-10"
                >
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 shrink-0 text-[#3D7514]"
                      aria-hidden="true"
                    />
                    <div>
                      <h2 className="text-xl font-semibold text-[#101D3B] sm:text-2xl">
                        {t.contact.dispatch.readyTitle}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                        {t.contact.dispatch.readyDescription}
                      </p>
                    </div>
                  </div>

                  {/* Primary Sending Action: WhatsApp + Email Option */}
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                    <a
                      href={dispatchLinks.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 max-w-full flex-wrap items-center justify-center gap-2.5 rounded-lg bg-[#1765BD] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-[background-color,transform] duration-150 hover:-translate-y-px hover:bg-[#101D3B] motion-reduce:hover:translate-y-0 sm:px-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                    >
                      <MessageSquare className="h-4 w-4 shrink-0 text-[#23B9ED]" aria-hidden="true" />
                      <span className="min-w-0">
                        {t.contact.dispatch.sendWhatsApp} (
                        <bdi dir="ltr" className="inline-block">
                          {BRAND_INFO.phoneDisplay}
                        </bdi>
                        )
                      </span>
                    </a>

                    <a
                      href={dispatchLinks.mailtoUrl}
                      className="inline-flex min-h-12 max-w-full flex-wrap items-center justify-center gap-2 rounded-lg border border-[#101D3B]/20 bg-white px-5 py-3 text-center text-sm font-medium text-[#101D3B] transition-[border-color,color,transform] duration-150 hover:-translate-y-px hover:border-[#1765BD] hover:text-[#1765BD] motion-reduce:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-[#1765BD]" aria-hidden="true" />
                      <span className="min-w-0 break-all sm:break-normal">
                        {t.contact.dispatch.sendEmail} (
                        <bdi dir="ltr" className="inline-block break-all">
                          {BRAND_INFO.email}
                        </bdi>
                        )
                      </span>
                    </a>
                  </div>

                  {/* Message Preview */}
                  <div className="mt-7 rounded-xl border border-[#101D3B]/10 bg-white p-5">
                    <p className="text-xs font-semibold tracking-[0.04em] text-[#1765BD]">
                      {t.contact.dispatch.previewHeading}
                    </p>
                    <pre
                      dir={isRtl ? 'rtl' : 'ltr'}
                      className={`mt-3 whitespace-pre-wrap break-words text-start text-sm leading-relaxed text-slate-700 ${
                        isRtl
                          ? 'font-[family-name:var(--font-arabic)]'
                          : 'font-[family-name:var(--font-sans)]'
                      }`}
                    >
                      {dispatchLinks.previewText}
                    </pre>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Button
                      variant="secondary"
                      size="md"
                      onClick={() => setPreparedSubmission(null)}
                    >
                      {t.contact.dispatch.editRequest}
                    </Button>
                    <Button
                      variant="ghost"
                      size="md"
                      onClick={() => {
                        setPreparedSubmission(null);
                        setHasSubmittedAttempt(false);
                        setErrorKeys({});
                        setFormData({
                          fullName: '',
                          company: '',
                          phone: '',
                          email: '',
                          city: '',
                          category: initialCategory,
                          requestedProducts: '',
                          quantities: '',
                          message: '',
                        });
                      }}
                    >
                      {t.contact.dispatch.resetForm}
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-xl border border-[#101D3B]/10 bg-white p-6 sm:p-8"
                >
                  <div className="border-b border-[#101D3B]/10 pb-5">
                    <h2 className="text-xl font-semibold text-[#101D3B]">
                      {t.contact.form.heading}
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">
                      {t.contact.form.subheading}
                    </p>
                  </div>

                  {hasSubmittedAttempt && errorCount > 0 && (
                    <div
                      role="alert"
                      className="mt-5 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50/70 px-4 py-3 text-xs text-red-800 sm:text-sm"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>
                        {formatFormErrorSummary(
                          errorCount,
                          language,
                          t.contact.form.errorSummaryOne,
                          t.contact.form.errorSummaryManyPrefix,
                          t.contact.form.errorSummaryManySuffix
                        )}
                      </span>
                    </div>
                  )}

                  {/* Segmented Category Selector */}
                  <div className="mt-6">
                    <span className="block text-sm font-medium text-[#101D3B]">
                      {t.contact.form.poleLabel}
                    </span>
                    <div
                      role="group"
                      aria-label={t.contact.form.poleLabel}
                      className="mt-2.5 flex max-w-full flex-wrap gap-1 rounded-lg border border-[#101D3B]/10 bg-[#F5F8FC] p-1 sm:inline-flex"
                    >
                      {QUOTE_CATEGORIES.map((cat) => {
                        const active = formData.category === cat;
                        return (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => handleFieldChange('category', cat)}
                            aria-pressed={active}
                            className={`min-h-10 rounded-md px-3.5 py-2 text-center text-xs font-medium whitespace-normal sm:whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD] sm:text-sm ${
                              active
                                ? 'border border-[#101D3B]/10 bg-white text-[#101D3B] shadow-xs'
                                : 'text-slate-600 hover:text-[#101D3B]'
                            }`}
                          >
                            {t.contact.form.poleLabels[cat]}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Selected Basket Items Summary */}
                  {basketItems.length > 0 && (
                    <div className="mt-6 rounded-xl border border-[#1765BD]/20 bg-[#F5F8FC] p-4 sm:p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#101D3B]">
                          <ClipboardList
                            className="h-4 w-4 text-[#1765BD]"
                            aria-hidden="true"
                          />
                          <span>
                            {t.contact.form.basketTitle} ({basketItems.length})
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            onNavigate(formData.category === 'epi' ? 'epi' : 'hygiene')
                          }
                          className="rounded-sm text-xs font-medium text-[#1765BD] hover:underline cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                        >
                          {t.contact.form.addMoreItems}
                        </button>
                      </div>

                      <ul className="mt-4 space-y-3">
                        {basketItems.map((item) => {
                          const localized = getLocalizedBasketItemMeta(item, t);
                          return (
                            <li
                              key={item.id}
                              className="rounded-lg border border-[#101D3B]/10 bg-white p-3.5"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <p className="text-xs font-medium text-[#1765BD]">
                                    {localized.categoryLabel}
                                    {item.isDemo ? ` · ${t.common.demoTag}` : ''}
                                  </p>
                                  <p className="mt-0.5 text-sm font-semibold text-[#101D3B]">
                                    {localized.name}
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => onRemoveBasketItem(item.id)}
                                  aria-label={`${t.contact.form.removeItemPrefix} ${localized.name}`}
                                  className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-[#F5F8FC] hover:text-red-700 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                                >
                                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                                </button>
                              </div>

                              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                <input
                                  type="text"
                                  value={item.quantity}
                                  onChange={(e) =>
                                    onUpdateBasketItem(item.id, {
                                      quantity: e.target.value,
                                    })
                                  }
                                  aria-label={`${t.contact.form.qtyInputAriaPrefix} ${localized.name}`}
                                  placeholder={t.contact.form.qtyInputPlaceholder}
                                  className="min-h-10 rounded-lg border border-[#101D3B]/15 bg-[#F5F8FC]/40 px-3 py-1.5 text-xs text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                                />
                                <input
                                  type="text"
                                  value={item.specifications}
                                  onChange={(e) =>
                                    onUpdateBasketItem(item.id, {
                                      specifications: e.target.value,
                                    })
                                  }
                                  aria-label={`${t.contact.form.specsInputAriaPrefix} ${localized.name}`}
                                  placeholder={t.contact.form.specsInputPlaceholder}
                                  className="min-h-10 rounded-lg border border-[#101D3B]/15 bg-[#F5F8FC]/40 px-3 py-1.5 text-xs text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                                />
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}

                  {/* Customer Contact Inputs */}
                  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="quote-fullname"
                        className="block text-sm font-medium text-[#101D3B]"
                      >
                        {t.contact.form.fullNameLabel}
                      </label>
                      <input
                        id="quote-fullname"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleFieldChange('fullName', e.target.value)}
                        aria-invalid={Boolean(fullNameError)}
                        aria-describedby={fullNameError ? 'error-fullname' : undefined}
                        placeholder={t.contact.form.fullNamePlaceholder}
                        className="mt-1.5 block min-h-11 w-full rounded-lg border border-[#101D3B]/20 bg-white px-3.5 py-2.5 text-sm text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                      />
                      {fullNameError && (
                        <p
                          id="error-fullname"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{fullNameError}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="quote-company"
                        className="block text-sm font-medium text-[#101D3B]"
                      >
                        {t.contact.form.companyLabel}{' '}
                        <span className="font-normal text-slate-500">
                          {t.common.optionalTag}
                        </span>
                      </label>
                      <input
                        id="quote-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleFieldChange('company', e.target.value)}
                        placeholder={t.contact.form.companyPlaceholder}
                        className="mt-1.5 block min-h-11 w-full rounded-lg border border-[#101D3B]/20 bg-white px-3.5 py-2.5 text-sm text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quote-phone"
                        className="block text-sm font-medium text-[#101D3B]"
                      >
                        {t.contact.form.phoneLabel}
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        dir="ltr"
                        value={formData.phone}
                        onChange={(e) => handleFieldChange('phone', e.target.value)}
                        aria-invalid={Boolean(phoneError)}
                        aria-describedby={phoneError ? 'error-phone' : undefined}
                        placeholder={t.contact.form.phonePlaceholder}
                        className="mt-1.5 block min-h-11 w-full rounded-lg border border-[#101D3B]/20 bg-white px-3.5 py-2.5 text-sm text-[#101D3B] placeholder:text-slate-400 tabular-nums rtl:text-right focus:border-[#1765BD] focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                      />
                      {phoneError && (
                        <p
                          id="error-phone"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{phoneError}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="quote-email"
                        className="block text-sm font-medium text-[#101D3B]"
                      >
                        {t.contact.form.emailLabel}
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        dir="ltr"
                        value={formData.email}
                        onChange={(e) => handleFieldChange('email', e.target.value)}
                        aria-invalid={Boolean(emailError)}
                        aria-describedby={emailError ? 'error-email' : undefined}
                        placeholder={t.contact.form.emailPlaceholder}
                        className="mt-1.5 block min-h-11 w-full rounded-lg border border-[#101D3B]/20 bg-white px-3.5 py-2.5 text-sm text-[#101D3B] placeholder:text-slate-400 rtl:text-right focus:border-[#1765BD] focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                      />
                      {emailError && (
                        <p
                          id="error-email"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{emailError}</span>
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="quote-city"
                        className="block text-sm font-medium text-[#101D3B]"
                      >
                        {t.contact.form.cityLabel}
                      </label>
                      <input
                        id="quote-city"
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleFieldChange('city', e.target.value)}
                        aria-invalid={Boolean(cityError)}
                        aria-describedby={cityError ? 'error-city' : undefined}
                        placeholder={t.contact.form.cityPlaceholder}
                        className="mt-1.5 block min-h-11 w-full rounded-lg border border-[#101D3B]/20 bg-white px-3.5 py-2.5 text-sm text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                      />
                      {cityError && (
                        <p
                          id="error-city"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{cityError}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="quote-products"
                        className="block text-sm font-medium text-[#101D3B]"
                      >
                        {t.contact.form.productsLabel}{' '}
                        {basketItems.length === 0 ? (
                          '*'
                        ) : (
                          <span className="font-normal text-slate-500">
                            {t.contact.form.productsComplementTag}
                          </span>
                        )}
                      </label>
                      <input
                        id="quote-products"
                        type="text"
                        value={formData.requestedProducts}
                        onChange={(e) =>
                          handleFieldChange('requestedProducts', e.target.value)
                        }
                        aria-invalid={Boolean(productsError)}
                        aria-describedby={
                          productsError ? 'error-products' : undefined
                        }
                        placeholder={
                          basketItems.length > 0
                            ? t.contact.form.productsPlaceholderWithBasket
                            : t.contact.form.productsPlaceholderEmpty
                        }
                        className="mt-1.5 block min-h-11 w-full rounded-lg border border-[#101D3B]/20 bg-white px-3.5 py-2.5 text-sm text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                      />
                      {productsError && (
                        <p
                          id="error-products"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{productsError}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="quote-quantities"
                        className="block text-sm font-medium text-[#101D3B]"
                      >
                        {t.contact.form.quantitiesLabel}{' '}
                        <span className="font-normal text-slate-500">
                          {t.common.optionalTag}
                        </span>
                      </label>
                      <input
                        id="quote-quantities"
                        type="text"
                        value={formData.quantities}
                        onChange={(e) => handleFieldChange('quantities', e.target.value)}
                        placeholder={t.contact.form.quantitiesPlaceholder}
                        className="mt-1.5 block min-h-11 w-full rounded-lg border border-[#101D3B]/20 bg-white px-3.5 py-2.5 text-sm text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="quote-message"
                      className="block text-sm font-medium text-[#101D3B]"
                    >
                      {t.contact.form.messageLabel}{' '}
                      <span className="font-normal text-slate-500">
                        {t.common.optionalTag}
                      </span>
                    </label>
                    <textarea
                      id="quote-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleFieldChange('message', e.target.value)}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="mt-1.5 block w-full rounded-lg border border-[#101D3B]/20 bg-white px-3.5 py-2.5 text-sm text-[#101D3B] placeholder:text-slate-400 focus:border-[#1765BD] focus:outline-none focus:ring-2 focus:ring-[#23B9ED]/30"
                    />
                  </div>

                  <div className="mt-6 flex flex-col gap-4 border-t border-[#101D3B]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500">
                      {t.contact.form.requiredFooterNote}
                    </p>
                    <Button type="submit" variant="primary" size="lg">
                      <MessageSquare className="h-4 w-4" aria-hidden="true" />
                      <span>{t.contact.form.submitButton}</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
