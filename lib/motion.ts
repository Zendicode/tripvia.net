import type { Variants } from 'framer-motion';

/** Shared easing curve for a soft, premium feel. */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** Fade + rise, used for scroll-reveal of individual elements. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

/** Parent that staggers its children's reveal. */
export const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

/** Standard in-view trigger: animate once, a little before fully in view. */
export const viewportOnce = { once: true, margin: '-8% 0px' } as const;
