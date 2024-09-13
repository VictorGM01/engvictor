import Link from "../../components/common/Link/Link";
import styles from "./About.module.scss";
import Capa from "../../assets/images/capa.png";
import Email from "../../assets/icons/email.svg";
import Github from "../../assets/icons/github.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Button from "../../components/common/Button/Button";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className={styles.about} id="about">
      <Link nome={t("sobre.titulo")} />
      <img src="/grafico.svg" alt="Gráfico" className={styles.about__grafico} />
      <div className={styles.about__container}>
        <section className={styles.about__container_perfil}>
          <img src={Capa} alt="Foto de perfil" />
          <div className={styles.about__links}>
            <p className={styles.about__nome}>Victor Gabriel Marques</p>
            <div>
              <a
                href="https://github.com/VictorGM01"
                target="_blank"
                rel="noreferrer"
                title="Github"
              >
                <img src={Github} alt="Github" />
              </a>
              <a
                href="mailto:victor@engvictor.com.br"
                target="_blank"
                rel="noreferrer"
                title="Email"
              >
                <img src={Email} alt="Email" />
              </a>
              <a
                href="https://www.linkedin.com/in/victor-gabriel-marques/"
                target="_blank"
                rel="noreferrer"
                title="Linkedin"
              >
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </div>
          </div>
        </section>
        <section className={styles.about__container_sobre}>
          <p
            className={styles.about__sobre}
            dangerouslySetInnerHTML={{ __html: t("sobre.descricao") }}
          ></p>

          <Button nome={t("sobre.entreEmContato")} link="#contact" />
        </section>
      </div>
    </section>
  );
}
