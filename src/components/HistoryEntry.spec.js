import { render, screen } from '@testing-library/react';
import HistoryEntry from './HistoryEntry';

describe('HistoryEntry', () => {
  it('renders name of game, player and score ', () => {
    render(
      <HistoryEntry
        nameOfGame="Siedler"
        players={[{ name: 'Player1', score: 2, id: 'xyz' }]}
      />
    );

    const nameOfGame = screen.getByText(/siedler/i);
    const nameOfPlayer = screen.getByText(/player/i);
    const score = screen.getByText(/2/i);

    expect(nameOfGame).toBeInTheDocument();
    expect(nameOfPlayer).toBeInTheDocument();
    expect(score).toBeInTheDocument();
  });
});
