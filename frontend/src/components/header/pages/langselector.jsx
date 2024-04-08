import { useTranslation } from "react-i18next";
import "../styles/langselector.css";

function LangSelector() {
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language">
      <label for="languageDropdown"></label>
      <select id="languageDropdown">
        <option value="en" onClick={() => handleChangeLanguage("en")}>
          🇺🇸 English
        </option>
        <option value="es" onClick={() => handleChangeLanguage("es")}>
          🇪🇸 Español
        </option>
        <option value="fr" onClick={() => handleChangeLanguage("fr")}>
          🇫🇷 Français
        </option>
        <option value="gr" onClick={() => handleChangeLanguage("gr")}>
          🇩🇪 German
        </option>
        <option value="du" onClick={() => handleChangeLanguage("du")}>
          🇳🇱 Dutch
        </option>
        <option value="ru" onClick={() => handleChangeLanguage("ru")}>
          🇷🇺 Russian
        </option>
      </select>
    </div>
  );
}
export default LangSelector;
