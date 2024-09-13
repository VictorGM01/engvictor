import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes.jsx";
import "./styles/reset.scss";
import "./styles/index.scss";
import LanguageProvider from "./contexts/LanguageContext.jsx";
import "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <AppRoutes />
    </LanguageProvider>
  </React.StrictMode>
);
