import Navigation from './Navigation';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Navigation', () => {
  it('renders a Navigation with three links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: /home/i });
    const gamePageLink = screen.getByRole('link', { name: /play game/i });
    const historyLink = screen.getByRole('link', { name: /play game/i });

    expect(homeLink).toBeInTheDocument();
    expect(gamePageLink).toBeInTheDocument();
    expect(historyLink).toBeInTheDocument();
  });
});
