import styled from 'styled-components';

import Input from '../components/Input';
import Button from '../components/Button';

export default function Play({ onCreateGame }) {
  function handleSubmit(event) {
    event.preventDefault();
    onCreateGame();
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        formId={'game-title'}
        labelText={'Name of Game'}
        placeholder="e.g. Carcassonne"
      />
      <Input
        formId={'player-names'}
        labelText={'Player Names'}
        placeholder="e.g. John Doe, Jane Doe"
      />
      <Button children={'Create Game'} onClick={onCreateGame} />
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: grid;
  gap: 20px;
  padding: 0 30px;
`;
