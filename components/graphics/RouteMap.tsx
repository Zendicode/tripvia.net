'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/cn';

// Start (64,372) → destination pin tip (496,96).
const ROUTE_D =
  'M64 372 C 150 372 150 260 240 260 C 320 260 330 180 400 170 C 450 163 470 120 496 96';

/**
 * The hero's signature graphic: a business-trip route that draws itself across
 * a stylized map. Under prefers-reduced-motion the route renders fully drawn.
 */
export function RouteMap({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 560 460"
      className={cn('h-auto w-full', className)}
      role="img"
      aria-label="A business trip route drawn on a map from a starting point to a destination"
    >
      {/* map base */}
      <rect x="0" y="0" width="560" height="460" rx="28" className="fill-surface" />

      {/* city blocks */}
      <g className="fill-bg-alt">
        <rect x="40" y="40" width="150" height="110" rx="16" />
        <rect x="360" y="56" width="160" height="120" rx="16" />
        <rect x="214" y="300" width="160" height="120" rx="16" />
        <rect x="56" y="212" width="120" height="120" rx="16" />
        <rect x="404" y="300" width="116" height="120" rx="16" />
      </g>

      {/* faint road grid */}
      <g className="stroke-border" strokeWidth="2">
        <line x1="0" y1="150" x2="560" y2="150" />
        <line x1="0" y1="300" x2="560" y2="300" />
        <line x1="200" y1="0" x2="200" y2="460" />
        <line x1="400" y1="0" x2="400" y2="460" />
      </g>

      {/* route glow */}
      <path
        d={ROUTE_D}
        className="stroke-primary/20"
        strokeWidth="16"
        fill="none"
        strokeLinecap="round"
      />

      {/* self-drawing route */}
      <motion.path
        d={ROUTE_D}
        className="stroke-primary"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={reduce ? undefined : { pathLength: 1 }}
        transition={reduce ? undefined : { duration: 2.1, ease: 'easeInOut' }}
      />

      {/* waypoints */}
      <circle cx="240" cy="260" r="5" className="fill-primary" />
      <circle cx="400" cy="170" r="5" className="fill-primary" />

      {/* start marker */}
      <circle
        cx="64"
        cy="372"
        r="11"
        className="fill-surface stroke-primary-700"
        strokeWidth="4"
      />
      <circle cx="64" cy="372" r="4" className="fill-primary-700" />

      {/* destination pin (tip at 496,96) */}
      <g transform="translate(496 96)">
        <path
          d="M0 0 C -13 -18 -22 -30 -22 -44 A 22 22 0 1 1 22 -44 C 22 -30 13 -18 0 0 Z"
          className="fill-primary-700"
        />
        <circle cx="0" cy="-44" r="9" className="fill-white" />
      </g>
    </svg>
  );
}
