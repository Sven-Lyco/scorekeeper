import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import Play from './pages/Play';
import History from './pages/History';
import Navigation from './components/Navigation';
import Player from './components/Player';

export default function App() {
  const [players, setPlayers] = useState([
    { name: 'Sven', score: 0, id: nanoid() },
    { name: 'Karin', score: 0, id: nanoid() },
    { name: 'Jörg', score: 0, id: nanoid() },
  ]);

  return (
    <Wrapper>
      <h1>Scorekeeper</h1>
      <Routes>
        <Route path="/" element={<Play />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Navigation />
      {players.map(({ name, score, id }, index) => (
        <Player
          name={name}
          score={score}
          onDecrement={() => decrementPlayerScore(index)}
          onIncrement={() => incrementPlayerScore(index)}
          key={id}
        />
      ))}
    </Wrapper>
  );

  function incrementPlayerScore(index) {
    const player = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...player, score: player.score + 1 },
      ...players.slice(index + 1),
    ]);
  }

  function decrementPlayerScore(index) {
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
