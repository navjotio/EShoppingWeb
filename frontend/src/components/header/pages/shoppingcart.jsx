import { useContext } from "react";
import cart from "../images/cart.png";
import "../styles/shoppingcart.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../../Context/shopcontext";
function ShoppingCart() {
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <>
      <Link to={"/cart"}>
        {" "}
        <a href="#" alt="#">
          <img id="cart" src={cart} alt=""></img>
        </a>
      </Link>
      <div className="cartcount">{getTotalCartItems()}</div>
    </>
  );
}

export default ShoppingCart;
