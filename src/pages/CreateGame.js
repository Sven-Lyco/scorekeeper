import styled from 'styled-components';

import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';

export default function CreateGame({
  players,
  nameOfGame,
  onCreateGame,
  onAddPlayer,
}) {
  const [playerNames, setPlayerNames] = useState('');
  const [gameName, setGameName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onCreateGame(gameName);
    onAddPlayer(playerNames.split(',').map(name => name.trim()));
    setPlayerNames('');
    setGameName('');
  }

  return (
    <>
      <Wrapper onSubmit={handleSubmit} autoComplete="off">
        <Input
          value={gameName}
          onChange={event => setGameName(event.target.value)}
          type="text"
          formId={'game-name'}
          labelText={'Name of Game'}
          placeholder="Siedler von Catan"
          required
        />

        <Input
          value={playerNames}
          onChange={event => setPlayerNames(event.target.value)}
          type="text"
          formId={'player-names'}
          labelText={'Player Names'}
          placeholder="e.g. John Doe, Jane Doe"
          required
        />
        <Button>Create Game</Button>
        <h2>{nameOfGame}</h2>
        {players.map(({ name, id }) => (
          <span key={id} name={name}>
            {name}
          </span>
        ))}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.form`
  display: grid;
  gap: 20px;
  padding: 0 30px;
`;
