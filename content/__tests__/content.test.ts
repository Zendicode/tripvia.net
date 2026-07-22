import { describe, it, expect } from 'vitest';
import { site } from '@/content/site';
import { features } from '@/content/features';
import { pricing } from '@/content/pricing';
import { pillars } from '@/content/pillars';
import { steps } from '@/content/steps';
import { faq } from '@/content/faq';
import { stats } from '@/content/stats';

describe('content integrity', () => {
  it('exposes 7 features, each with title, body, and bullets', () => {
    expect(features).toHaveLength(7);
    for (const f of features) {
      expect(f.title.length).toBeGreaterThan(0);
      expect(f.body.length).toBeGreaterThan(0);
      expect(f.bullets.length).toBeGreaterThan(0);
    }
  });

  it('has unique feature ids', () => {
    const ids = features.map((f) => f.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('has 3 pricing tiers with exactly one highlighted', () => {
    expect(pricing).toHaveLength(3);
    expect(pricing.filter((t) => t.highlighted)).toHaveLength(1);
  });

  it('has 4 nav items, 3 pillars, and 4 ordered steps', () => {
    expect(site.nav).toHaveLength(4);
    expect(pillars).toHaveLength(3);
    expect(steps).toHaveLength(4);
    expect(steps.map((s) => s.n)).toEqual([1, 2, 3, 4]);
  });

  it('has at least 4 FAQ entries and 3 stats', () => {
    expect(faq.length).toBeGreaterThanOrEqual(4);
    expect(stats).toHaveLength(3);
  });
});
