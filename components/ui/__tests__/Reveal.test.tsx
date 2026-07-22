import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Reveal } from '@/components/ui/Reveal';

describe('Reveal', () => {
  it('renders its children into the document', () => {
    render(
      <Reveal>
        <p>hello reveal</p>
      </Reveal>,
    );
    // Guards against the motion wrapper hiding or dropping content.
    expect(screen.getByText('hello reveal')).toBeInTheDocument();
  });

  it('supports rendering as a list item', () => {
    render(
      <ul>
        <Reveal as="li">list content</Reveal>
      </ul>,
    );
    expect(screen.getByText('list content')).toBeInTheDocument();
  });
});
