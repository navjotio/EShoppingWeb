import cart from "../images/cart.png";
import "../styles/shoppingcart.css";
import { Link } from "react-router-dom";
function ShoppingCart() {
  return (
    <Link to={"/cart"}>
      {" "}
      <a href="#" alt="#">
        <img id="cart" src={cart} alt=""></img>
      </a>
    </Link>
  );
}

export default ShoppingCart;
