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
    <>
      <Wrapper onSubmit={handleSubmitGame} autoComplete="off">
        {!nameOfGame && (
          <Input
            value={gameName}
            onChange={event => setGameName(event.target.value)}
            type="text"
            formId={'game-name'}
            labelText={'Name of Game'}
            placeholder="Siedler von Catan"
            required
          />
        )}
        {!nameOfGame && <Button>Create Game</Button>}
      </Wrapper>
      <Wrapper onSubmit={handleSubmitPlayer} autoComplete="off">
        {nameOfGame && (
          <Input
            value={playerNames}
            onChange={event => setPlayerNames(event.target.value)}
            type="text"
            formId={'player-names'}
            labelText={'Player Names'}
            placeholder="e.g. John Doe, Jane Doe"
            required
          />
        )}
        {nameOfGame && <Button>Add Player</Button>}
      </Wrapper>
      {players.map(({ name, score, id }) => (
        <PlayerName key={id} name={name} score={score}>
          {name}
        </PlayerName>
      ))}
      <Button onClick={onStartGame}>Start Game</Button>
    </>
  );
}

const Wrapper = styled.form`
  display: grid;
  padding: 0 0px;
`;

const PlayerName = styled.p`
  margin: 5px;
`;
