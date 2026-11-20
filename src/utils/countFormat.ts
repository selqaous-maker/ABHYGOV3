import { Language } from '../i18n/types';

export function formatCatalogueCount(
  count: number,
  language: Language,
  kind: 'hygiene' | 'epi',
  frSingular: string,
  frPlural: string
): { numberPart: string; textPart: string } {
  if (language !== 'ar') {
    return {
      numberPart: String(count),
      textPart: count > 1 ? frPlural : frSingular,
    };
  }

  if (kind === 'hygiene') {
    if (count === 0) {
      return { numberPart: '0', textPart: 'منتج تعريفي معروض' };
    }
    if (count === 1) {
      return { numberPart: '', textPart: 'منتج تعريفي واحد معروض' };
    }
    if (count === 2) {
      return { numberPart: '', textPart: 'منتجان تعريفيان معروضان' };
    }
    if (count >= 3 && count <= 10) {
      return { numberPart: String(count), textPart: 'منتجات تعريفية معروضة' };
    }
    return { numberPart: String(count), textPart: 'منتجاً تعريفياً معروضاً' };
  }

  // kind === 'epi' (معدة — feminine noun)
  if (count === 0) {
    return { numberPart: '0', textPart: 'معدة تعريفية معروضة' };
  }
  if (count === 1) {
    return { numberPart: '', textPart: 'معدة تعريفية واحدة معروضة' };
  }
  if (count === 2) {
    return { numberPart: '', textPart: 'معدتان تعريفيتان معروضتان' };
  }
  if (count >= 3 && count <= 10) {
    return { numberPart: String(count), textPart: 'معدات تعريفية معروضة' };
  }
  return { numberPart: String(count), textPart: 'معدة تعريفية معروضة' };
}

export function formatBasketCountLabel(
  count: number,
  language: Language,
  emptyCount: string,
  singularCount: string,
  pluralCount: string
): string {
  if (count === 0) return emptyCount;

  if (language !== 'ar') {
    if (count === 1) return singularCount;
    return pluralCount.replace('{count}', String(count));
  }

  if (count === 1) return singularCount;
  if (count === 2) return 'منتجان محددان';
  if (count >= 3 && count <= 10) return `${count} منتجات محددة`;
  return `${count} منتجاً محدداً`;
}

export function formatBasketTriggerAria(
  count: number,
  language: Language,
  singularAria: string,
  pluralAria: string
): string {
  if (language !== 'ar') {
    const template = count > 1 ? pluralAria : singularAria;
    return template.replace('{count}', String(count));
  }

  if (count === 1) return singularAria;
  if (count === 2) return 'فتح طلب عرض السعر (منتجان)';
  if (count >= 3 && count <= 10) return `فتح طلب عرض السعر (${count} منتجات)`;
  return `فتح طلب عرض السعر (${count} منتجاً)`;
}

export function formatFormErrorSummary(
  count: number,
  language: Language,
  oneError: string,
  manyPrefix: string,
  manySuffix: string
): string {
  if (count === 1) return oneError;

  if (language !== 'ar') {
    return `${manyPrefix} ${count} ${manySuffix}`;
  }

  if (count === 2) {
    return 'يرجى التحقق من الحقلين الإلزاميين المحددين أدناه.';
  }
  return `يرجى التحقق من الحقول الإلزامية المحددة أدناه (${count} حقول).`;
}
