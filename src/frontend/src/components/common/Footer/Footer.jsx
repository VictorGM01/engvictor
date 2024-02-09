import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__Logos}>
        <a href="https://github.com/VictorGM01">
          <img src="/github-footerm.png" alt="Logo do github" />
        </a>
        <a href="mailto:victor@engvictor.com.br">
        <img src="/email-footerm.png" alt="Logo do email" />
        </a>
        <a href="https://br.linkedin.com/in/victor-gabriel-marques">
        <img src="/linkedin-footerm.png" alt="Logo do linkedin" />
        </a>
        
      </div>
      <div className={styles.footer__copy}>
        <img src="/logo.png" alt="Logo com as siglas VGM" />
        <p>Copyright &copy; 2024 | VGM</p>
      </div>
    </footer>
  );
}