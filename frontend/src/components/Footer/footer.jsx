import "./footer.css";
import logoicon from "./icons/logo.png";
import pinteresticon from "./icons/pinteresticon.png";
import instagramicon from "./icons/instagramicon.png";
import facebookicon from "./icons/facebookicon.png";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footermainlogo">
          <img src={logoicon} alt="" id="footerlogoid"></img>
          <p>ShopHub•</p>
        </div>
        <ul className="footerlinks">
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footericons">
          <div className="footercontainer">
            <img src={instagramicon} alt="" id="iconsid"></img>
          </div>
          <div className="footercontainer">
            <img src={facebookicon} alt="" id="iconsid"></img>
          </div>
          <div className="footercontainer">
            <img src={pinteresticon} alt="" id="iconsid"></img>
          </div>
        </div>
        <div className="footercopyright">
          <hr />
          <p>Copyright @ 2024 - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
