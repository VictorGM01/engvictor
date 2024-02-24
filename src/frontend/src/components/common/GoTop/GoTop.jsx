import GoToTop from "../../../assets/icons/gotop.svg";
import styles from './GoTop.module.scss';


export default function GoTop() {
  return (
    <button className={styles.goTop} onClick={() => window.scrollTo(0, 0)} title="Voltar para o topo">
      <img src={GoToTop} alt="Voltar para o topo" />
    </button>
  );
}