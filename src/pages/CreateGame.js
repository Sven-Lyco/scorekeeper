import styled from 'styled-components';

import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';

export default function CreateGame({
  players,
  nameOfGame,
  onAddPlayer,
  onCreateGame,
  onStartGame,
}) {
  const [playerNames, setPlayerNames] = useState('');
  const [gameName, setGameName] = useState('');

  function handleSubmitGame(event) {
    event.preventDefault();
    onCreateGame(gameName);
    setGameName('');
  }

  function handleSubmitPlayer(event) {
    event.preventDefault();
    onAddPlayer(playerNames.split(',').map(name => name.trim()));
    setPlayerNames('');
  }

  return (
    <Wrapper>
      <FormWrapper
        onSubmit={handleSubmitGame}
        aria-labelledby="formHeader"
        autoComplete="off"
      >
        {!nameOfGame && (
          <Input
            value={gameName}
            onChange={event => setGameName(event.target.value)}
            type="text"
            name={'game-name'}
            labelText="Name of Game"
            placeholder="Jumanji"
            required
          />
        )}
        {!nameOfGame && <Button>Create Game</Button>}
      </FormWrapper>
      <FormWrapper
        onSubmit={handleSubmitPlayer}
        aria-labelledby="formHeader"
        autoComplete="off"
      >
        {nameOfGame && (
          <Input
            value={playerNames}
            onChange={event => setPlayerNames(event.target.value)}
            type="text"
            name={'player-names'}
            labelText="Player Names"
            placeholder="e.g. John Doe, Jane Doe"
            required
          />
        )}
        {nameOfGame && <Button>Add Player</Button>}
      </FormWrapper>
      <h2>{nameOfGame}</h2>
      {players.map(({ name, id }) => (
        <PlayerName key={id} name={name}>
          {name}
        </PlayerName>
      ))}
      <Button onClick={onStartGame}>Start Game</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 5px;
`;
const FormWrapper = styled.form`
  display: grid;
  padding: 0 0px;
`;

const PlayerName = styled.p`
  margin: 5px;
`;
