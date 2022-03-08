import Input from './components/Input';
import Button from './components/Button';

function App() {
  return (
    <>
      <h1>Scorekeeper</h1>
      <Input labelText={'Name of Game'} placeholder="e.g. Carcassonne" />
      <Input labelText={'Player Names'} placeholder="e.g. John Doe, Jane Doe" />
      <Button children={'Create Game'} />
    </>
  );
}

export default App;
