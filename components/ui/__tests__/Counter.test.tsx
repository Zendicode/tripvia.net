import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Counter } from '@/components/ui/Counter';

// Force the reduced-motion branch so the final value renders synchronously.
vi.mock('framer-motion', async (importOriginal) => {
  const actual = await importOriginal<typeof import('framer-motion')>();
  return { ...actual, useReducedMotion: () => true, useInView: () => false };
});

describe('Counter', () => {
  it('renders the final formatted value under reduced motion', () => {
    render(<Counter value={120000} suffix="+" />);
    expect(screen.getByText('120,000+')).toBeInTheDocument();
  });

  it('supports decimals and suffix', () => {
    render(<Counter value={4.8} decimals={1} suffix="★" />);
    expect(screen.getByText('4.8★')).toBeInTheDocument();
  });
});
