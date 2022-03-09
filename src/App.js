import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Play from './pages/Play';
import History from './pages/History';
import Navigation from './components/Navigation';
import Player from './components/Player';

export default function App() {
  return (
    <Wrapper>
      <h1>Scorekeeper</h1>
      <Routes>
        <Route path="/" element={<Play />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Navigation />
      <Player />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  padding: 0 30px;
`;
