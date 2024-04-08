import { useTranslation } from "react-i18next";
import iphoneMainImg from "../images/IphoneMainPage.png";
import "../styles/hero.css";

function Hero() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>{t("hero.heading")}</h2>
        <p>{t("hero.body")}</p>
      </div>
      <div className="hero-right">
        <div>
          <img src={iphoneMainImg} alt=""></img>
        </div>
      </div>
      <div className="latestbtn">
        <button id="latestcollbtn">{t("hero.btn")}→</button>
      </div>
    </div>
  );
}

export default Hero;
