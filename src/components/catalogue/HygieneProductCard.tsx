import React from 'react';
import { ArrowRight, Check, Plus } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { HygieneProductItem } from '../../types/site';
import { Button } from '../common/Button';
import { MediaFrame } from '../common/MediaFrame';

interface HygieneProductCardProps {
  product: HygieneProductItem;
  categoryLabel: string;
  isInBasket: boolean;
  onAddToBasket: (product: HygieneProductItem) => void;
  onRequestQuote: (product: HygieneProductItem) => void;
}

export const HygieneProductCard: React.FC<HygieneProductCardProps> = ({
  product,
  categoryLabel,
  isInBasket,
  onAddToBasket,
  onRequestQuote,
}) => {
  const { t } = useLanguage();
  const localized = t.hygiene.products[product.id];

  const name = localized?.name ?? product.name;
  const description = localized?.description ?? product.description;
  const imageAlt = localized?.imageAlt ?? product.imageAlt;
  const reference = localized?.reference ?? product.reference;
  const packaging = localized?.packaging ?? product.packaging;
  const usageArea = localized?.usageArea ?? product.usageArea;
  const technicalNotes = localized?.technicalNotes ?? product.technicalNotes;

  const hasTechnicalFields = Boolean(
    reference ||
      packaging ||
      usageArea ||
      technicalNotes ||
      product.technicalSheetUrl
  );

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-[#101D3B]/10 bg-white transition-[transform,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[#1765BD]/40 hover:shadow-[0_18px_40px_-22px_rgba(16,29,59,0.22)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      {/* Consistent 4:3 Media Header */}
      <div className="overflow-hidden border-b border-[#101D3B]/10 bg-[#F5F8FC]">
        <MediaFrame
          src={product.imageSrc}
          alt={imageAlt}
          aspectClassName="aspect-[4/3]"
          className="border-0 rounded-none"
          imgClassName="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          fallbackLabel={name}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-[#1765BD]">
            <span>{categoryLabel}</span>
            {product.isDemo && (
              <>
                <span aria-hidden="true" className="text-slate-400">
                  ·
                </span>
                <span className="text-slate-500">{t.common.demoTag}</span>
              </>
            )}
          </div>

          <h3 className="mt-2.5 text-lg font-semibold leading-snug tracking-tight text-[#101D3B]">
            {name}
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
            {description}
          </p>

          {/* Optional Technical Information Fields (Populated on future real products) */}
          {hasTechnicalFields && (
            <dl className="mt-4 space-y-1.5 border-t border-[#101D3B]/10 pt-4 text-xs text-slate-600">
              {reference && (
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-slate-500">{t.hygiene.card.referenceLabel}</dt>
                  <dd
                    dir="ltr"
                    className="inline-block font-[family-name:var(--font-mono)] font-medium text-[#101D3B] tabular-nums"
                  >
                    {reference}
                  </dd>
                </div>
              )}
              {packaging && (
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-slate-500">{t.hygiene.card.packagingLabel}</dt>
                  <dd className="font-medium text-[#101D3B]">{packaging}</dd>
                </div>
              )}
              {usageArea && (
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-slate-500">{t.hygiene.card.usageLabel}</dt>
                  <dd className="font-medium text-[#101D3B]">{usageArea}</dd>
                </div>
              )}
              {technicalNotes && (
                <div className="pt-1 text-slate-600">
                  <dt className="sr-only">{t.hygiene.card.technicalNotesSr}</dt>
                  <dd>{technicalNotes}</dd>
                </div>
              )}
              {product.technicalSheetUrl && (
                <div className="pt-1">
                  <a
                    href={product.technicalSheetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm font-medium text-[#1765BD] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
                  >
                    {t.hygiene.card.technicalSheetLink}
                  </a>
                </div>
              )}
            </dl>
          )}
        </div>

        <div className="mt-6 flex flex-col gap-2.5 border-t border-[#101D3B]/10 pt-4">
          <Button
            variant={isInBasket ? 'ghost' : 'secondary'}
            size="sm"
            className={`w-full ${
              isInBasket
                ? 'border border-[#70BF35]/60 bg-[#70BF35]/10 text-[#101D3B] hover:bg-[#70BF35]/15'
                : ''
            }`}
            onClick={() => onAddToBasket(product)}
          >
            {isInBasket ? (
              <>
                <Check className="h-3.5 w-3.5 text-[#3D7514]" aria-hidden="true" />
                <span>{t.hygiene.card.addedToBasket}</span>
              </>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{t.hygiene.card.addToBasket}</span>
              </>
            )}
          </Button>

          <Button
            variant="primary"
            size="sm"
            className="w-full"
            onClick={() => onRequestQuote(product)}
          >
            <span>{t.brand.primaryCta}</span>
            <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </article>
  );
};
