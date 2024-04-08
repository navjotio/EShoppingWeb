import image from "../images/logo.png";
import "../styles/logo.css";

function Logo() {
  return (
    <span className="logo">
      <img id="logoID" src={image} alt="" style={{ cursor: "pointer" }}></img>
    </span>
  );
}
export default Logo;
