import './Navigation.css';
import Button from './Button';

export default function Navigation() {
  return (
    <div className="Navigation__container">
      <Button children={'Play'} isDark={true} />
      <Button children={'History'} />
    </div>
  );
}
