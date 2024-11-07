import image from "../images/logo.png";
import "../styles/logo.css";

function Logo() {
  return (
    
      <img id="logoID" src={image} alt="" style={{ cursor: "pointer", height:"150px", width:"150px"}}></img>
    
  );
}
export default Logo;
