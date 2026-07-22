import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { MobileNav } from '@/components/layout/MobileNav';

describe('MobileNav', () => {
  it('opens and closes the slide-in menu', async () => {
    const user = userEvent.setup();
    render(<MobileNav />);

    const openBtn = screen.getByRole('button', { name: /open menu/i });
    expect(openBtn).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    await user.click(openBtn);
    expect(openBtn).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /pricing/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /close menu/i }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(openBtn).toHaveAttribute('aria-expanded', 'false');
  });
});
