import './Player.css';

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <section className="Player">
      <span className="Player__name">{name}</span>
      <button className="Player__score-button" onClick={onMinus}>
        -
      </button>
      <span className="Player__score"> {score} </span>
      <button className="Player__score-button" onClick={onPlus}>
        {' '}
        +{' '}
      </button>
    </section>
  );
}
