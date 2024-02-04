import { useState } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
function LangSelector() {
  const [lang, setLang] = useState("");

  return (
    <div className="language">
      <label for="languageDropdown"></label>
      <select
        id="languageDropdown"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="en">🇺🇸 English</option>
        <option value="es">🇪🇸 Español</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="gr">🇩🇪 German</option>
        <option value="mx">🇲🇽 Mexican</option>
        <option value="du">🇳🇱 Dutch</option>
        <option value="ru">🇷🇺 Russian</option>
      </select>
    </div>
  );
}
export default LangSelector;
