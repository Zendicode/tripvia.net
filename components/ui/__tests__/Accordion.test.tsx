import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Accordion } from '@/components/ui/Accordion';

describe('Accordion', () => {
  const items = [
    { q: 'First question', a: 'First answer' },
    { q: 'Second question', a: 'Second answer' },
  ];

  it('reveals a collapsed answer when its question is activated', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);

    const secondBtn = screen.getByRole('button', { name: /second question/i });
    expect(secondBtn).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByText('Second answer')).not.toBeVisible();

    await user.click(secondBtn);
    expect(secondBtn).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Second answer')).toBeVisible();
  });
});
