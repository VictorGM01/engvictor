import styles from "./Intro.module.scss";
import { useTranslation } from "react-i18next";

export default function Intro() {
  const { t } = useTranslation();

  return (
    <section className={styles.intro} id="intro">
      <p>
        {t("intro.engenheiro")} <br /> {t("intro.ciencia")} <br />{" "}
        {t("intro.codigoLimpo")} <br /> {t("intro.issoNao")}{" "}
        <span>{t("intro.meuTrabalho")}</span>, {t("intro.issoE")}{" "}
        <span>{t("intro.minhaPaixao")}</span>
      </p>
    </section>
  );
}
