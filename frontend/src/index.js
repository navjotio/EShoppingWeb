import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import english from "./translations/en/global.json";
import spanish from "./translations/es/global.json";
import french from "./translations/fr/global.json";
import dutch from "./translations/du/global.json";
import german from "./translations/gr/global.json";
import russian from "./translations/ru/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import ShopContextProvider from "./Context/shopcontext";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: { global: english },
    es: { global: spanish },
    fr: { global: french },
    du: { global: dutch },
    gr: { global: german },
    ru: { global: russian },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18next}>
    <StrictMode>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </StrictMode>
  </I18nextProvider>
);
