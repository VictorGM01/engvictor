import styles from './Header.module.scss';
import Logo from '/logo.png';
import Menu from '../../../assets/icons/menu.png';


export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <input type="checkbox" id="menu-hamburger" className={styles.menuHamburger} />
        <label htmlFor="menu-hamburger" className={styles.menuHamburgerLabel}>
          <img src={Menu} alt="Menu" />
        </label>
        <ul>
          <li><a href="#">Sobre</a> <hr /></li>
          <li><a href="#">Experiências</a> <hr /></li>
          <li><a href="#">Serviços</a> <hr /></li>
          <li><a href="#">Parceiros</a> <hr /></li>
          <li><a href="#">Tecnologias</a> <hr /></li>
        </ul>
        <img src={Logo} alt="Logo com as iniciais VGM"/>
      </div>
    </header>
  );
}