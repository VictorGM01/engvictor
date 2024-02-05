import Link from "../../components/common/Link/Link"
import styles from './About.module.scss'
import Capa from '../../assets/images/capa.png'
import Email from '../../assets/icons/email.png'
import Github from '../../assets/icons/github.png'
import Linkedin from '../../assets/icons/linkedin.png'
import Button from "../../components/common/Button/Button"


export default function About() {
  return (
    <section className={styles.about}>
      <Link nome="Sobre" />

      <div className={styles.about__container}>
        <img src={Capa} alt="Foto de perfil" />
        <p className={styles.about__nome}>Victor Gabriel Marques</p>
        <div className={styles.about__links}>
          <a href="mailto:victor@engvictor.com.br">
            <img src={Email} alt="Email" />
          </a>
          <a href="https://github.com/VictorGM01">
            <img src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/victor-gabriel-marques/">
            <img src={Linkedin} alt="Linkedin" />
          </a>
        </div>
        <p className={styles.about__sobre}>
          <span>Engenheiro de Software</span> e entusiasta da <span>filosofia do código limpo</span> (Clean Code). Minha experiência profissional inclui o desenvolvimento de <span>aplicações web completas</span>, incluindo back-end, front-end e dados. Possuo conhecimento prático em Python, Django, JavaScript, TypeScript, Node.JS, AdonisJS, e trabalho com bancos de dados como MySQL, PostgreSQL e SQL Server. Além disso, tenho experiência com <span>tecnologias front-end</span>, incluindo HTML5, CSS3, e ReactJS.
        </p>
        <Button nome="Entre em contato" link="#" />
      </div>
    </section>
  )
}