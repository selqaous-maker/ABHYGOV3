import { BRAND_INFO } from '../data/brand';
import { EPI_DEMO_PRODUCTS } from '../data/epiCatalogue';
import { HYGIENE_DEMO_PRODUCTS } from '../data/hygieneCatalogue';
import { FR_TRANSLATIONS } from '../i18n/fr';
import { TranslationDictionary } from '../i18n/types';
import { QuoteBasketItem, QuoteFormData } from '../types/site';

const WHATSAPP_NUMBER = BRAND_INFO.whatsappNumber;

export function getLocalizedBasketItemMeta(
  item: QuoteBasketItem,
  t: TranslationDictionary = FR_TRANSLATIONS
): { name: string; categoryLabel: string } {
  if (item.division === 'hygiene') {
    const product = HYGIENE_DEMO_PRODUCTS.find((p) => p.id === item.id);
    const localizedProduct = t.hygiene.products[item.id];
    const localizedCategory = product
      ? t.hygiene.categories[product.categoryId]?.label
      : undefined;
    return {
      name: localizedProduct?.name ?? item.name,
      categoryLabel: localizedCategory ?? item.categoryLabel,
    };
  }

  const product = EPI_DEMO_PRODUCTS.find((p) => p.id === item.id);
  const localizedProduct = t.epi.products[item.id];
  const localizedCategory = product
    ? t.epi.categories[product.categoryId]?.label
    : undefined;
  return {
    name: localizedProduct?.name ?? item.name,
    categoryLabel: localizedCategory ?? item.categoryLabel,
  };
}

export function buildQuoteSummaryText(
  formData: QuoteFormData,
  basketItems: QuoteBasketItem[],
  t: TranslationDictionary = FR_TRANSLATIONS
): string {
  const q = t.quoteLinks;

  const isRtlSummary = /[\u0600-\u06FF]/.test(q.summaryGreeting);
  const isolateLtr = (val: string) =>
    isRtlSummary ? `\u2066${val}\u2069` : val;

  const lines: string[] = [
    q.summaryGreeting,
    q.summaryIntro,
    '',
    `${q.fieldFullName} ${formData.fullName.trim()}`,
  ];

  if (formData.company.trim()) {
    lines.push(`${q.fieldCompany} ${formData.company.trim()}`);
  }

  lines.push(
    `${q.fieldPhone} ${isolateLtr(formData.phone.trim())}`,
    `${q.fieldEmail} ${isolateLtr(formData.email.trim())}`,
    `${q.fieldCity} ${formData.city.trim()}`,
    `${q.fieldDomain} ${q.categoryLabels[formData.category]}`,
    ''
  );

  if (basketItems.length > 0) {
    lines.push(q.selectedProductsHeading);
    basketItems.forEach((item, index) => {
      const meta = getLocalizedBasketItemMeta(item, t);
      const qtyPart = item.quantity.trim()
        ? ` — ${q.quantityPrefix} ${item.quantity.trim()}`
        : '';
      const specPart = item.specifications.trim()
        ? ` — ${q.specsPrefix} ${item.specifications.trim()}`
        : '';
      lines.push(
        `${index + 1}. ${meta.name} (${meta.categoryLabel})${qtyPart}${specPart}`
      );
    });
    lines.push('');
  }

  if (formData.requestedProducts.trim()) {
    lines.push(
      `${q.requestedProductsComplement} ${formData.requestedProducts.trim()}`
    );
  }

  if (formData.quantities.trim()) {
    lines.push(`${q.estimatedQuantities} ${formData.quantities.trim()}`);
  }

  if (formData.message.trim()) {
    lines.push('', q.messageHeading, formData.message.trim());
  }

  return lines.join('\n');
}

export function buildWhatsAppQuoteUrl(
  formData: QuoteFormData,
  basketItems: QuoteBasketItem[],
  t: TranslationDictionary = FR_TRANSLATIONS
): string {
  const text = buildQuoteSummaryText(formData, basketItems, t);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function buildMailtoQuoteUrl(
  formData: QuoteFormData,
  basketItems: QuoteBasketItem[],
  t: TranslationDictionary = FR_TRANSLATIONS
): string {
  const companySuffix = formData.company.trim()
    ? ` - ${formData.company.trim()}`
    : '';
  const subject = `${t.quoteLinks.emailSubjectPrefix} (${formData.fullName.trim()}${companySuffix})`;
  const body = buildQuoteSummaryText(formData, basketItems, t);
  return `${BRAND_INFO.emailHref}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
