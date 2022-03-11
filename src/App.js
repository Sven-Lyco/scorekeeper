import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import CreateGame from './pages/CreateGame';
import History from './pages/History';
import Navigation from './components/Navigation';
import GamePage from './pages/GamePage';
import { navigate } from '@storybook/addon-links';

export default function App() {
  const [players, setPlayers] = useState([]);
  const [nameOfGame, setNameOfGame] = useState('');

  return (
    <Wrapper>
      <h1>Scorekeeper</h1>
      <Navigation nameOfGame={nameOfGame} players={players} />
      <Routes>
        <Route
          path="/createpage"
          element={
            <CreateGame
              players={players}
              nameOfGame={nameOfGame}
              onCreateGame={createGame}
              onAddPlayer={addPlayer}
            />
          }
        />
        <Route
          path="/gamepage"
          element={
            <GamePage
              nameOfGame={nameOfGame}
              players={players}
              onDecreasePlayerScore={decreasePlayerScore}
              onIncreasePlayerScore={increasePlayerScore}
            />
          }
        />
        <Route path="/history" element={<History />} />
      </Routes>
    </Wrapper>
  );

  function createGame(gameName) {
    const newGame = gameName;
    setNameOfGame([...nameOfGame, newGame]);
  }

  function addPlayer(playerNames) {
    const newPlayers = playerNames.map(name => ({
      name: name,
      score: 0,
      id: nanoid(),
    }));
    setPlayers([...players, ...newPlayers]);
  }

  function increasePlayerScore(index) {
    const player = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...player, score: player.score + 1 },
      ...players.slice(index + 1),
    ]);
  }

  function decreasePlayerScore(index) {
    const player = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...player, score: player.score - 1 },
      ...players.slice(index + 1),
    ]);
  }
}

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  padding: 0 30px;
`;
