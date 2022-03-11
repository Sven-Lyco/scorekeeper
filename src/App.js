import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import Home from './pages/Home';
import CreateGame from './pages/CreateGame';
import History from './pages/History';
import Navigation from './components/Navigation';
import GamePage from './pages/GamePage';

export default function App() {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  const [nameOfGame, setNameOfGame] = useState('');
  const [history, setHistory] = useState([]);

  return (
    <Wrapper>
      <h1>Scorekeeper</h1>
      <Navigation nameOfGame={nameOfGame} players={players} />
      <Routes>
        <Route path="/" element={<Home onSkipHome={skipHome} />} />
        <Route
          path="/createpage"
          element={
            <CreateGame
              players={players}
              nameOfGame={nameOfGame}
              onCreateGame={createGame}
              onAddPlayer={addPlayer}
              onStartGame={startGame}
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
              onResetScores={resetScores}
              onEndGame={endGame}
            />
          }
        />
        <Route path="/history" element={<History history={history} />} />
      </Routes>
    </Wrapper>
  );

  function skipHome() {
    navigate('./createpage');
  }

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

  function startGame() {
    navigate('./gamepage');
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

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })));
  }

  function endGame() {
    setHistory([{ players, nameOfGame, id: nanoid() }, ...history]);
    setPlayers([]);
    setNameOfGame('');
    navigate('./history');
  }
}

const Wrapper = styled.div`
  display: grid;
  gap: 0px;
  padding: 0 30px;
`;
