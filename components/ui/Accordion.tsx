'use client';

import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/content/faq';
import { cn } from '@/lib/cn';

/** Keyboard-accessible FAQ disclosure list (one panel open at a time). */
export function Accordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-surface">
      {items.map((item, i) => (
        <AccordionRow
          key={item.q}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const id = useId();

  return (
    <div>
      <h3 className="m-0">
        <button
          type="button"
          id={`${id}-btn`}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="text-base font-semibold text-ink">{item.q}</span>
          <ChevronDown
            className={cn(
              'h-5 w-5 shrink-0 text-primary-700 transition-transform duration-200',
              isOpen && 'rotate-180',
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        hidden={!isOpen}
        className="px-6 pb-5 text-ink-muted"
      >
        {item.a}
      </div>
    </div>
  );
}
