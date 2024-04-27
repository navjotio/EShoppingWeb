import cart from "../images/cart.png";
import "../styles/shoppingcart.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function ShoppingCart() {
  const navigation = useNavigate();

  return (
    <Link to={"/cart"}>
      {" "}
      <a href="" id>
        <img id="cart" src={cart} alt=""></img>
      </a>
    </Link>
  );
}

export default ShoppingCart;
