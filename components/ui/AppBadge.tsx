import { Apple, Play } from 'lucide-react';
import { cn } from '@/lib/cn';

/**
 * App Store / Google Play download badge. Links are placeholders (`#`) until
 * the apps are published, so the label announces "coming soon".
 */
export function AppBadge({
  store,
  href,
  className,
}: {
  store: 'ios' | 'android';
  href: string;
  className?: string;
}) {
  const isIos = store === 'ios';
  const Icon = isIos ? Apple : Play;
  const coming = href === '#';

  return (
    <a
      href={href}
      aria-label={
        isIos
          ? `Download on the App Store${coming ? ' (coming soon)' : ''}`
          : `Get it on Google Play${coming ? ' (coming soon)' : ''}`
      }
      className={cn(
        'inline-flex items-center gap-3 rounded-2xl bg-ink px-4 py-2.5 text-white transition-transform hover:-translate-y-0.5',
        className,
      )}
    >
      <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
      <span className="text-left leading-tight">
        <span className="block text-[10px] font-medium uppercase tracking-wide text-white/70">
          {isIos ? 'Download on the' : 'Get it on'}
        </span>
        <span className="block text-sm font-semibold">
          {isIos ? 'App Store' : 'Google Play'}
        </span>
      </span>
    </a>
  );
}
