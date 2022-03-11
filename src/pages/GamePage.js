import Player from '../components/Player';
import Button from '../components/Button';

export default function GamePage({
  players,
  nameOfGame,
  onDecreasePlayerScore,
  onIncreasePlayerScore,
}) {
  return (
    <>
      <header>
        <h2>{nameOfGame}</h2>
      </header>
      {players.map(({ name, score, id }, index) => (
        <Player
          key={id}
          name={name}
          score={score}
          onIncreasePlayerScore={() => onIncreasePlayerScore(index)}
          onDecreasePlayerScore={() => onDecreasePlayerScore(index)}
        />
      ))}
      <Button>End Game</Button>
    </>
  );
}
