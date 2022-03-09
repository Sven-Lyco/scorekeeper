import { useState } from 'react';
import styled from 'styled-components';

export default function Player({ name }) {
  const [score, setScore] = useState(0);

  function onMinus({ score }) {
    setScore(score - 1);
  }

  function onPlus({ score }) {
    setScore(score + 1);
  }

  return (
    <Wrapper>
      <Name>{name}</Name>
      <button onClick={() => onMinus({ score })}> - </button>
      <Score score={score}>{score}</Score>
      <button onClick={() => onPlus({ score })}> + </button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: right;
  background-color: #ddd;
  border-radius: 5px;
  padding: 5px;
  margin: 10px 0px;
`;

const Name = styled.span`
  margin-right: auto;
`;

const Score = styled.span`
  margin: 0 12px;
  color: ${({ score }) => {
    if (score === 0) {
      return `black`;
    } else if (score > 0) {
      return `hsl(${(score = score * 10)},50%,50%)`;
    } else if (score < 0) {
      return `hsl(0,50%,50%)`;
    }
  }};
`;
