import styles from "./Error404.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Error404() {
  const { t } = useTranslation();

  return (
    <main className={styles.error404}>
      <h1>404</h1>
      <p>{t("404.titulo")}</p>
      <Link to="/">{t("404.goBackToHome")}</Link>
    </main>
  );
}
