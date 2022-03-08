import './Input.css';

export default function Input({ labelText, placeholder }) {
  return (
    <div className="Input__container">
      <label className="Input__label">{labelText}</label>
      <input className="Input__field" placeholder={placeholder}></input>
    </div>
  );
}
