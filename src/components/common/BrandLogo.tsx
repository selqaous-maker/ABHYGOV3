import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { BRAND_INFO } from '../../data/brand';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  logoSrc?: string;
  className?: string;
}

/**
 * Displays the original ABHYGO brand logo without redrawing or modifying it,
 * framed cleanly for light headers and dark navy footers.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  logoSrc = BRAND_INFO.logoSrc,
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);
  const { t } = useLanguage();

  if (variant === 'light') {
    return (
      <div className={`inline-flex items-center gap-4 ${className}`}>
        {!imgError ? (
          <div className="h-28 w-28 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-xl bg-[#041028] p-1 ring-1 ring-white/15 shadow-lg">
            <img
              src={logoSrc}
              alt={t.common.logoAlt}
              width={128}
              height={128}
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="h-full w-full object-contain"
            />
          </div>
        ) : (
          <span
            dir="ltr"
            className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.03em] text-white whitespace-nowrap shrink-0 select-none"
          >
            {BRAND_INFO.name}
          </span>
        )}
      </div>
    );
  }

  return (
    <span className={`inline-flex items-center gap-3 shrink-0 ${className}`}>
      {!imgError && (
        <span className="inline-flex h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-[#041028] p-0.5 ring-1 ring-[#101D3B]/15 shadow-xs">
          <img
            src={logoSrc}
            alt={t.common.logoAlt}
            width={44}
            height={44}
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-contain"
          />
        </span>
      )}
      <span
        dir="ltr"
        className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.03em] text-[#101D3B] whitespace-nowrap shrink-0 select-none"
      >
        {BRAND_INFO.name}
      </span>
    </span>
  );
};
