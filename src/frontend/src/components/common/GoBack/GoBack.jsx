import styles from './GoBack.module.scss';
import { Link } from 'react-router-dom';


export default function GoBack() {
  return (
    <span className={styles.goBack}>
      <Link to="/">
        <img src="/arrow.svg" alt="Voltar" />
        <span>Voltar</span>
      </Link>
    </span>

  );
}