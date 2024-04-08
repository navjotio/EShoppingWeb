import cart from "../images/cart.png";
import "../styles/shoppingcart.css";

function ShoppingCart() {
  function handleCartClick(e) {
    e.preventDefault();
  }
  return (
    <a href="#" onClick={handleCartClick} id>
      <img id="cart" src={cart} alt=""></img>
    </a>
  );
}

export default ShoppingCart;
