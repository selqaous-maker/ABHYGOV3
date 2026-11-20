import React, { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

interface MediaFrameProps {
  src: string;
  alt: string;
  aspectClassName?: string;
  className?: string;
  imgClassName?: string;
  fallbackLabel?: string;
  priority?: boolean;
}

export const MediaFrame: React.FC<MediaFrameProps> = ({
  src,
  alt,
  aspectClassName = 'aspect-[4/3]',
  className = '',
  imgClassName = '',
  fallbackLabel = 'ABHYGO',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden bg-[#F5F8FC] border border-[#101D3B]/10 ${aspectClassName} ${className}`}
    >
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          width={800}
          height={600}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : undefined}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#F5F8FC] to-[#E6EEF8] p-6 text-center">
          <ShieldCheck className="h-8 w-8 text-[#1765BD]" aria-hidden="true" />
          <span className="text-sm font-medium text-[#101D3B]">{fallbackLabel}</span>
        </div>
      )}
    </div>
  );
};
