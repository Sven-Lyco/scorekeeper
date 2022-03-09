import styled from 'styled-components';
import Input from './components/Input';
import Button from './components/Button';

export default function App() {
  return (
    <Wrapper>
      <h1>Scorekeeper</h1>
      <Input labelText={'Name of Game'} placeholder="e.g. Carcassonne" />
      <Input labelText={'Player Names'} placeholder="e.g. John Doe, Jane Doe" />
      <Button children={'Create Game'} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  padding: 0 30px;
`;
