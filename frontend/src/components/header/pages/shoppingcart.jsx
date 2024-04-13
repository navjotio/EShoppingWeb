import cart from "../images/cart.png";
import "../styles/shoppingcart.css";
import { useNavigate } from "react-router-dom";

function ShoppingCart() {
  const navigation = useNavigate();

  return (
    <a href="" onClick={() => navigation("cart")} id>
      <img id="cart" src={cart} alt=""></img>
    </a>
  );
}

export default ShoppingCart;
