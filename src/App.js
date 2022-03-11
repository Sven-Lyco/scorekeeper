import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import Play from './pages/Play';
import History from './pages/History';
import Navigation from './components/Navigation';
import GamePage from './pages/GamePage';

export default function App() {
  const [players, setPlayers] = useState([
    { name: 'Sven', score: 0, id: nanoid() },
    { name: 'Karin', score: 0, id: nanoid() },
    { name: 'Jörg', score: 0, id: nanoid() },
  ]);
  const [nameOfGame, setNameOfGame] = useState('Siedler');

  function createGame({ nameOfGame }) {
    setNameOfGame(nameOfGame);
  }

  return (
    <Wrapper>
      <h1>Scorekeeper</h1>
      <Routes>
        <Route path="/" element={<Play onCreateGame={createGame} />} />
        <Route path="/history" element={<History />} />
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
      </Routes>
      <Navigation />
    </Wrapper>
  );

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
