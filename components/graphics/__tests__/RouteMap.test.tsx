import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { RouteMap } from '@/components/graphics/RouteMap';

describe('RouteMap', () => {
  it('renders an accessible map with a route path', () => {
    const { container } = render(<RouteMap />);
    // Exposed to assistive tech with a descriptive label.
    expect(
      screen.getByRole('img', { name: /route/i }),
    ).toBeInTheDocument();
    // The route path element is present (not dropped by the motion wrapper).
    expect(container.querySelector('path')).toBeTruthy();
  });
});
