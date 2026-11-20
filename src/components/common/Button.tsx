import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'light' | 'accent' | 'outlineLight';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-[#1765BD] text-white shadow-[0_1px_2px_rgba(16,29,59,0.12)] hover:bg-[#101D3B] hover:-translate-y-px hover:shadow-[0_8px_18px_-8px_rgba(16,29,59,0.35)] active:translate-y-0 focus-visible:outline-[#1765BD]',
  secondary:
    'bg-white text-[#101D3B] border border-[#101D3B]/20 hover:border-[#1765BD] hover:text-[#1765BD] hover:bg-[#F5F8FC]/60 hover:-translate-y-px active:translate-y-0 focus-visible:outline-[#1765BD]',
  ghost:
    'bg-transparent text-[#101D3B] hover:bg-[#F5F8FC] focus-visible:outline-[#1765BD]',
  light:
    'bg-white text-[#101D3B] shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:bg-[#F5F8FC] hover:-translate-y-px active:translate-y-0 focus-visible:outline-white',
  accent:
    'bg-[#7ED340] text-[#081530] font-semibold shadow-[0_10px_26px_-10px_rgba(126,211,64,0.5)] hover:bg-[#8CE04E] hover:-translate-y-px hover:shadow-[0_14px_30px_-10px_rgba(126,211,64,0.6)] active:translate-y-0 focus-visible:outline-[#7ED340]',
  outlineLight:
    'bg-white/[0.08] text-white border border-white/30 backdrop-blur-xs hover:bg-white/[0.16] hover:border-white/55 hover:-translate-y-px active:translate-y-0 focus-visible:outline-white',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'min-h-10 px-4 py-2 text-sm',
  md: 'min-h-11 px-5 py-2.5 text-sm',
  lg: 'min-h-12 px-6 py-3 text-base',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`inline-flex max-w-full items-center justify-center gap-2 rounded-lg font-medium text-center whitespace-normal sm:whitespace-nowrap shrink-0 cursor-pointer transition-[background-color,border-color,color,transform,box-shadow] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
