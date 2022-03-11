import styled from 'styled-components';

import HistoryEntry from '../components/HistoryEntry';
import Button from '../components/Button';

export default function History({ history, onStartNewGame }) {
  return (
    <Wrapper>
      <h2>Previous Games</h2>
      {history.map(({ nameOfGame, players, id }) => (
        <HistoryEntry key={id} nameOfGame={nameOfGame} players={players} />
      ))}
      <Button onClick={onStartNewGame}>Play new Game</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-decoration: underline;
`;
