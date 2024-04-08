import "./styles/footer.css";
import logoicon from "./icons/logo.png";
import pinteresticon from "./icons/pinteresticon.png";
import instagramicon from "./icons/instagramicon.png";
import facebookicon from "./icons/facebookicon.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const [t, i18n] = useTranslation("global");
  return (
    <footer>
      <div className="footer">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="footermainlogo">
          <img src={logoicon} alt="" id="footerlogoid"></img>
          <p>ShopHub•</p>
        </div>
        <ul className="footerlinks">
          <li>{t("footer.l1")}</li>
          <li>{t("footer.l2")}</li>
          <li>{t("footer.l3")}</li>
          <li>{t("footer.l4")}</li>
        </ul>
        <div className="footericons">
          <div className="footercontainer">
            <a href="https://www.instagram.com/">
              <img src={instagramicon} alt="" id="iconsid"></img>
            </a>
          </div>
          <div className="footercontainer">
            <a href="https://wwww.facebook.com">
              <img src={facebookicon} alt="" id="iconsid"></img>
            </a>
          </div>
          <div className="footercontainer">
            <a href="https://www.pinterest.com">
              <img src={pinteresticon} alt="" id="iconsid"></img>
            </a>
          </div>
        </div>
        <div className="footercopyright">
          <hr />
          <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
