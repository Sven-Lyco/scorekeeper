import Player from './Player';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('Player', () => {
  it('renders player information and two buttons', () => {
    render(<Player name="John" score="3" />);

    const name = screen.getByText(/John/i);
    const score = screen.getByText(/3/i);
    const button = screen.getAllByRole('button');

    expect(name).toBeInTheDocument();
    expect(score).toBeInTheDocument();
    expect(button).toHaveLength(2);
  });

  it('calls callbacks when increasing or decreasing score', () => {
    const decreaseCallback = jest.fn();
    const increaseCallback = jest.fn();

    render(
      <Player
        name="John"
        score="3"
        onDecreasePlayerScore={decreaseCallback}
        onIncreasePlayerScore={increaseCallback}
      />
    );

    const increaseButton = screen.getByRole('button', {
      name: /increase score/i,
    });
    const decreaseButton = screen.getByRole('button', {
      name: /decrease score/i,
    });

    userEvent.click(increaseButton);
    userEvent.click(increaseButton);
    userEvent.click(decreaseButton);

    expect(increaseCallback).toHaveBeenCalledTimes(2);
    expect(decreaseCallback).toHaveBeenCalledTimes(1);
  });
});
