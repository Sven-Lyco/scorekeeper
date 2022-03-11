//import { useState } from "react";

import Button from '../components/Button';

export default function Home({ onSkipHome }) {
  return (
    <main>
      <h2>Welcome to Scorekeeper</h2>
      <p>
        To Start a Game, add a game you want to play and add Players to count
        your Scores!
      </p>
      <Button onClick={onSkipHome}>Let's Go!</Button>
    </main>
  );
}
