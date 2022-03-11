import styled from 'styled-components';

export default function Player({ name, score, onDecrement, onIncrement }) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <button onClick={onDecrement}> - </button>
      <Score score={score}>{score}</Score>
      <button onClick={onIncrement}> + </button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: right;
  background-color: #ddd;
  border-radius: 5px;
  padding: 5px;
  margin: 0px 0px;
`;

const Name = styled.span`
  margin-right: auto;
`;

const Score = styled.span`
  margin: 0 12px;
  color: ${({ score }) => {
    if (score === 0) {
      return `black`;
    } else if (score > 0 && score < 12) {
      return `hsl(${(score = score * 10)},50%,50%)`;
    } else if (score >= 12) {
      return `hsl(120,50%,50%)`;
    } else if (score < 0) {
      return `hsl(0,50%,50%)`;
    }
  }};
`;
