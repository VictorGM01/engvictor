import { createContext, useState } from "react";
import PropTypes from "prop-types";
import i18n from "../i18n";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "pt-br"
  );

  const toggleLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LanguageProvider as default, LanguageContext };
