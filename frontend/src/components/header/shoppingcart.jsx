import cart from "./cart.png";

function ShoppingCart() {
  function handleCartClick(e) {
    e.preventDefault();
  }
  return (
    <a href="#" onClick={handleCartClick}>
      <img id="cart" src={cart} alt=""></img>
    </a>
  );
}

export default ShoppingCart;
