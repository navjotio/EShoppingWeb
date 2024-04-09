import cart from "../images/cart.png";
import "../styles/shoppingcart.css";

function ShoppingCart() {
  function handleCartClick(e) {}
  return (
    <a href={cart.jsx} onClick={handleCartClick} id>
      <img id="cart" src={cart} alt=""></img>
    </a>
  );
}

export default ShoppingCart;
