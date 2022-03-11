import styled from 'styled-components';
import Button from '../components/Button';

export default function Home({ onSkipHome }) {
  return (
    <StyledMain>
      <h2>Welcome to Scorekeeper</h2>
      <p>
        Scorekeeper, a great app for keeping score of each Player, when playing
        board games or party games with your friends.{' '}
      </p>
      <p>
        To Start a Game, add a game you want to play and add Players to count
        your Scores!
      </p>
      <Button onClick={onSkipHome}>Let's Go!</Button>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  margin: 10px;
`;
