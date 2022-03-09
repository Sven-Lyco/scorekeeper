import { useState } from 'react';
import styled from 'styled-components';

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <button onClick={() => onMinus}> - </button>
      <Score> {score} </Score>
      <button onClick={onPlus}> + </button>
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
`;
