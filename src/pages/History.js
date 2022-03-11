import styled from 'styled-components';

import HistoryEntry from '../components/HistoryEntry';

export default function History({ history }) {
  return (
    <Wrapper>
      <h2>Previous Games</h2>
      {history.map(({ nameOfGame, players, id }) => (
        <HistoryEntry key={id} nameOfGame={nameOfGame} players={players} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-decoration: underline;
`;
