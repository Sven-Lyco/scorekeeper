import Input from './components/Input';
import Button from './components/Button';
import Navigation from './components/Navigation';

import './App.css';

function App() {
  return (
    <div className="App__container">
      <h1>Scorekeeper</h1>
      <Input labelText={'Name of Game'} placeholder="e.g. Carcassonne" />
      <Input labelText={'Player Names'} placeholder="e.g. John Doe, Jane Doe" />
      <Button children={'Create Game'} />
      <Navigation />
    </div>
  );
}

export default App;
