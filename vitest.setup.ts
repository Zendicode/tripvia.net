import '@testing-library/jest-dom/vitest';
import { vi, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => cleanup());

// jsdom lacks matchMedia; framer-motion's useReducedMotion needs it.
if (!window.matchMedia) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

// jsdom lacks IntersectionObserver; framer-motion's whileInView needs it.
if (!('IntersectionObserver' in window)) {
  class IntersectionObserverMock {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
    takeRecords = vi.fn().mockReturnValue([]);
    root = null;
    rootMargin = '';
    thresholds = [];
  }
  // @ts-expect-error assigning a mock to the global
  window.IntersectionObserver = IntersectionObserverMock;
}
