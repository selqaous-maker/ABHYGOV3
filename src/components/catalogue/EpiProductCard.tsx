import React from 'react';
import { ArrowRight, Check, Eye, Plus } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { EpiProductItem } from '../../types/site';
import { Button } from '../common/Button';
import { MediaFrame } from '../common/MediaFrame';

interface EpiProductCardProps {
  product: EpiProductItem;
  categoryLabel: string;
  isInBasket: boolean;
  onAddToBasket: (product: EpiProductItem) => void;
  onSelectProduct: (product: EpiProductItem) => void;
  onRequestQuote: (product: EpiProductItem) => void;
}

export const EpiProductCard: React.FC<EpiProductCardProps> = ({
  product,
  categoryLabel,
  isInBasket,
  onAddToBasket,
  onSelectProduct,
  onRequestQuote,
}) => {
  const { t } = useLanguage();
  const localized = t.epi.products[product.id];
  const coverImage = product.galleryImages[0];

  const name = localized?.name ?? product.name;
  const shortDescription = localized?.shortDescription ?? product.shortDescription;
  const coverAlt = localized?.galleryAlts[0] ?? coverImage?.alt ?? name;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-[#101D3B]/10 bg-white transition-[transform,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[#1765BD]/40 hover:shadow-[0_18px_40px_-22px_rgba(16,29,59,0.22)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      {/* Clickable 4:3 Image Preview */}
      <button
        type="button"
        onClick={() => onSelectProduct(product)}
        aria-label={`${t.epi.card.imageAriaPrefix} ${name}`}
        className="block w-full overflow-hidden border-b border-[#101D3B]/10 bg-[#F5F8FC] text-start cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1765BD]"
      >
        <MediaFrame
          src={coverImage?.src ?? ''}
          alt={coverAlt}
          aspectClassName="aspect-[4/3]"
          className="border-0 rounded-none"
          imgClassName="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          fallbackLabel={name}
        />
      </button>

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          {/* Unboxed Metadata Line */}
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
            <button
              type="button"
              onClick={() => onSelectProduct(product)}
              className="rounded-sm text-start transition-colors hover:text-[#1765BD] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
            >
              {name}
            </button>
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
            {shortDescription}
          </p>

          <div className="mt-3">
            <button
              type="button"
              onClick={() => onSelectProduct(product)}
              className="inline-flex min-h-9 items-center gap-1.5 rounded-sm text-xs font-medium text-[#1765BD] transition-colors hover:text-[#101D3B] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765BD]"
            >
              <Eye className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{t.epi.card.viewDetails}</span>
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2.5 border-t border-[#101D3B]/10 pt-4">
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
                <span>{t.epi.card.addedToBasket}</span>
              </>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{t.epi.card.addToBasket}</span>
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
