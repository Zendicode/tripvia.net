import { describe, it, expect } from 'vitest';
import { locales } from '@/lib/i18n';
import { getSiteCopy } from '@/content/site';
import { getFeatures } from '@/content/features';
import { getPricing } from '@/content/pricing';
import { getPillars } from '@/content/pillars';
import { getSteps } from '@/content/steps';
import { getFaq } from '@/content/faq';
import { getStats } from '@/content/stats';

describe('content integrity', () => {
  it('exposes 7 features, each with title, body, and bullets', () => {
    for (const locale of locales) {
      const features = getFeatures(locale);

      expect(features).toHaveLength(7);
      for (const feature of features) {
        expect(feature.title.length).toBeGreaterThan(0);
        expect(feature.body.length).toBeGreaterThan(0);
        expect(feature.bullets.length).toBeGreaterThan(0);
      }
    }
  });

  it('has unique feature ids', () => {
    for (const locale of locales) {
      const ids = getFeatures(locale).map((feature) => feature.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it('has 3 pricing tiers with exactly one highlighted', () => {
    for (const locale of locales) {
      const pricing = getPricing(locale);
      expect(pricing).toHaveLength(3);
      expect(pricing.filter((tier) => tier.highlighted)).toHaveLength(1);
    }
  });

  it('has 4 nav items, 3 pillars, and 4 ordered steps', () => {
    for (const locale of locales) {
      const site = getSiteCopy(locale);
      const pillars = getPillars(locale);
      const steps = getSteps(locale);

      expect(site.nav).toHaveLength(4);
      expect(pillars).toHaveLength(3);
      expect(steps).toHaveLength(4);
      expect(steps.map((step) => step.n)).toEqual([1, 2, 3, 4]);
    }
  });

  it('has at least 4 FAQ entries and 3 stats', () => {
    for (const locale of locales) {
      expect(getFaq(locale).length).toBeGreaterThanOrEqual(4);
      expect(getStats(locale)).toHaveLength(3);
    }
  });
});
