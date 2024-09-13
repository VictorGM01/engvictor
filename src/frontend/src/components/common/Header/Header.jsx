import { useContext } from "react";
import styles from "./Header.module.scss";
import Logo from "/logo.png";
import Menu from "../../../assets/icons/menu.png";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  const getPreviousLanguage = (currentLang) => {
    switch (currentLang) {
      case "pt-br":
        return "en-us";
      case "en-us":
        return "pt-br";
      default:
        return "pt-br";
    }
  };

  const getNextLanguage = (currentLang) => {
    switch (currentLang) {
      case "pt-br":
        return "en-us";
      case "en-us":
        return "pt-br";
      default:
        return "pt-br";
    }
  };

  return (
    <header className={styles.header}>
      <div>
        <input
          type="checkbox"
          id="menu-hamburger"
          className={styles.menuHamburger}
        />
        <label htmlFor="menu-hamburger" className={styles.menuHamburgerLabel}>
          <img src={Menu} alt="Menu" />
        </label>
        <ul>
          <li>
            <a href="#about">{t("header.sobre")}</a> <hr />
          </li>
          <li>
            <a href="#experience">{t("header.experiencias")}</a> <hr />
          </li>
          <li>
            <a href="#services">{t("header.servicos")}</a> <hr />
          </li>
          <li>
            <a href="#partners">{t("header.parceiros")}</a> <hr />
          </li>
          <li>
            <a href="#projects">{t("header.projetos")}</a> <hr />
          </li>
          <li>
            <a href="#technologies">{t("header.tecnologias")}</a> <hr />
          </li>
          <li>
            <div className={styles.dropdown__language}>
              <span>{t("header.idioma")}</span>
              <div>
                <button
                  onClick={() => toggleLanguage(getPreviousLanguage(language))}
                >
                  &lt;
                </button>
                <img
                  src={`/${language === "pt-br" ? "brasil" : "eua"}.svg`}
                  alt="Idioma"
                />
                <button
                  onClick={() => toggleLanguage(getNextLanguage(language))}
                >
                  &gt;
                </button>
              </div>
            </div>
          </li>
        </ul>
        <img src={Logo} alt="Logo com as iniciais VGM" />
      </div>
    </header>
  );
}
