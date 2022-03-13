import styled from 'styled-components';
import Player from '../components/Player';
import Button from '../components/Button';

export default function GamePage({
  players,
  nameOfGame,
  onDecreasePlayerScore,
  onIncreasePlayerScore,
  onResetScores,
  onEndGame,
}) {
  return (
    <StyledMain>
      {' '}
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
      <Button onClick={onResetScores}>Reset Scores</Button>
      <Button onClick={onEndGame}>End Game</Button>
    </StyledMain>
  );
}

const StyledMain = styled.div`
  margin: 5px;
`;
