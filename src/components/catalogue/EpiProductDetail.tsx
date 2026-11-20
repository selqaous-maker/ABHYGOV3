import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, FileText, Info, Phone, Plus } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { BRAND_INFO } from '../../data/brand';
import { EpiProductItem } from '../../types/site';
import { Button } from '../common/Button';
import { MediaFrame } from '../common/MediaFrame';

interface EpiProductDetailProps {
  product: EpiProductItem;
  categoryLabel: string;
  isInBasket: boolean;
  onAddToBasket: (product: EpiProductItem) => void;
  onBack: () => void;
  onRequestQuote: (product: EpiProductItem) => void;
}

export const EpiProductDetail: React.FC<EpiProductDetailProps> = ({
  product,
  categoryLabel,
  isInBasket,
  onAddToBasket,
  onBack,
  onRequestQuote,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    setActiveImageIndex(0);
  }, [product.id]);

  const localized = t.epi.products[product.id];
  const name = localized?.name ?? product.name;
  const shortDescription = localized?.shortDescription ?? product.shortDescription;
  const reference = localized?.reference ?? product.reference;
  const availableSizes = localized?.availableSizes ?? product.availableSizes;
  const material = localized?.material ?? product.material;
  const technicalNotes = localized?.technicalNotes ?? product.technicalNotes;

  const activeImage = product.galleryImages[activeImageIndex] ?? product.galleryImages[0];
  const activeImageAlt =
    localized?.galleryAlts[activeImageIndex] ??
    localized?.galleryAlts[0] ??
    activeImage?.alt ??
    name;

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Breadcrumb */}
        <button
          type="button"
          onClick={onBack}
          className="mb-8 inline-flex min-h-10 items-center gap-2 rounded-sm text-sm font-medium text-slate-600 transition-colors hover:text-[#1765BD] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1765BD]"
        >
          <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          <span>{t.epi.detail.backToCatalogue}</span>
        </button>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: Image Gallery */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-[#101D3B]/10 bg-[#F5F8FC]">
              <MediaFrame
                src={activeImage?.src ?? ''}
                alt={activeImageAlt}
                aspectClassName="aspect-[4/3]"
                className="border-0 rounded-none"
                fallbackLabel={name}
                priority
              />
            </div>

            {product.galleryImages.length > 1 && (
              <div
                role="group"
                aria-label={t.epi.detail.galleryAria}
                className="mt-4 grid grid-cols-4 gap-3"
              >
                {product.galleryImages.map((img, idx) => {
                  const isActive = idx === activeImageIndex;
                  const thumbAlt = localized?.galleryAlts[idx] ?? img.alt;
                  return (
                    <button
                      key={`${product.id}-thumb-${idx}`}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`${t.epi.detail.viewImagePrefix} ${idx + 1}`}
                      aria-pressed={isActive}
                      className={`overflow-hidden rounded-lg border transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD] ${
                        isActive
                          ? 'border-[#1765BD] ring-2 ring-[#1765BD]/25'
                          : 'border-[#101D3B]/15 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <MediaFrame
                        src={img.src}
                        alt={thumbAlt}
                        aspectClassName="aspect-[4/3]"
                        className="border-0 rounded-none"
                        fallbackLabel={`${t.epi.detail.viewImagePrefix} ${idx + 1}`}
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right: Title, Description, Optional Size/Material & Spec Placeholders */}
          <div className="lg:col-span-6">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium tracking-[0.03em] text-[#1765BD]">
              <span>{categoryLabel}</span>
              {product.isDemo && (
                <>
                  <span aria-hidden="true" className="text-slate-400">
                    ·
                  </span>
                  <span className="text-slate-500">{t.epi.detail.demoItemTag}</span>
                </>
              )}
            </div>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#101D3B] sm:text-3xl text-balance">
              {t.epi.detail.presentationHeading}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {shortDescription}
            </p>

            {/* Transparent Notice for Placeholder Specs */}
            {product.isDemo && (
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#1765BD]/20 bg-[#F5F8FC] p-4 text-xs leading-relaxed text-slate-700 sm:text-sm">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#1765BD]" aria-hidden="true" />
                <p>{t.epi.detail.demoNotice}</p>
              </div>
            )}

            {/* Optional Size & Material Fields + Technical Specification Placeholders */}
            <div className="mt-6 rounded-xl border border-[#101D3B]/10 bg-[#F5F8FC]/60 p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-[#101D3B]">
                {t.epi.detail.specsHeading}
              </h3>

              <dl className="mt-4 divide-y divide-[#101D3B]/10 text-sm">
                <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <dt className="text-slate-500">{t.epi.detail.referenceLabel}</dt>
                  <dd className="font-[family-name:var(--font-mono)] font-medium text-[#101D3B] tabular-nums">
                    {reference ? (
                      <span dir="ltr" className="inline-block">
                        {reference}
                      </span>
                    ) : (
                      t.epi.detail.referenceFallback
                    )}
                  </dd>
                </div>

                <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <dt className="text-slate-500">{t.epi.detail.sizesLabel}</dt>
                  <dd className="font-medium text-[#101D3B]">
                    {availableSizes && availableSizes.length > 0 ? (
                      <bdi dir="ltr" className="inline-block">
                        {availableSizes.join(' · ')}
                      </bdi>
                    ) : (
                      t.epi.detail.sizesFallback
                    )}
                  </dd>
                </div>

                <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <dt className="text-slate-500">{t.epi.detail.materialLabel}</dt>
                  <dd className="font-medium text-[#101D3B]">
                    {material ?? t.epi.detail.materialFallback}
                  </dd>
                </div>

                <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <dt className="text-slate-500">{t.epi.detail.normsLabel}</dt>
                  <dd className="font-medium text-[#101D3B]">
                    {technicalNotes ?? t.epi.detail.normsFallback}
                  </dd>
                </div>

                <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <dt className="text-slate-500">{t.epi.detail.pdfLabel}</dt>
                  <dd className="font-medium text-[#101D3B]">
                    {product.technicalSheetUrl ? (
                      <a
                        href={product.technicalSheetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-sm text-[#1765BD] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                      >
                        <FileText className="h-4 w-4" aria-hidden="true" />
                        <span>{t.epi.detail.pdfDownload}</span>
                      </a>
                    ) : (
                      t.epi.detail.pdfFallback
                    )}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Contact CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                variant={isInBasket ? 'ghost' : 'secondary'}
                size="lg"
                className={
                  isInBasket
                    ? 'border border-[#70BF35]/60 bg-[#70BF35]/10 text-[#101D3B] hover:bg-[#70BF35]/15'
                    : ''
                }
                onClick={() => onAddToBasket(product)}
              >
                {isInBasket ? (
                  <>
                    <Check className="h-4 w-4 text-[#3D7514]" aria-hidden="true" />
                    <span>{t.epi.detail.addedToBasket}</span>
                  </>
                ) : (
                  <>
                    <Plus className="h-4 w-4" aria-hidden="true" />
                    <span>{t.epi.detail.addToBasket}</span>
                  </>
                )}
              </Button>

              <Button
                variant="primary"
                size="lg"
                onClick={() => onRequestQuote(product)}
              >
                <span>{t.brand.primaryCta}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
              </Button>

              <a
                href={BRAND_INFO.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#101D3B]/20 bg-white px-5 py-3 text-sm font-medium text-[#101D3B] whitespace-nowrap shrink-0 transition-[border-color,color,transform] duration-150 hover:-translate-y-px hover:border-[#1765BD] hover:text-[#1765BD] motion-reduce:hover:translate-y-0 tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
              >
                <Phone className="h-4 w-4 text-[#1765BD]" aria-hidden="true" />
                <span dir="ltr" className="inline-block">
                  {BRAND_INFO.phoneDisplay}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
