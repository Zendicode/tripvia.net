import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-60';

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

// Solid CTAs use the deep green (#0F7D4F) for AA-contrast white text.
const variants: Record<Variant, string> = {
  primary:
    'bg-primary-700 text-white shadow-soft hover:bg-primary-600 hover:shadow-lift active:scale-[0.98]',
  secondary:
    'border border-border bg-surface text-ink hover:border-primary hover:text-primary-700',
  ghost: 'text-ink hover:bg-primary-tint hover:text-primary-700',
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  'aria-label'?: string;
};

/**
 * Polymorphic action element: renders a Next `Link` for internal routes,
 * an `<a>` for external/mailto links, or a `<button>` when no href is given.
 */
export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  ...rest
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    const isMailto = href.startsWith('mailto:');

    if (isExternal || isMailto) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          {...rest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
