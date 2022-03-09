import styled from 'styled-components';

import Input from '../components/Input';
import Button from '../components/Button';

export default function Play() {
  return (
    <Wrapper>
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
      <Button children={'Create Game'} />
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: grid;
  gap: 20px;
  padding: 0 30px;
`;
