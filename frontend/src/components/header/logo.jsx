import image from "./logo.png";
import "./logo.css";
function Logo() {
  return (
    <span className="logo">
      <img id="logoID" src={image} alt=""></img>
    </span>
  );
}
export default Logo;
