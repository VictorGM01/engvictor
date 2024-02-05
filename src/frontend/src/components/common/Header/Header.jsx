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
        <img src={Logo} alt="Logo"/>
      </div>
    </header>
  );
}