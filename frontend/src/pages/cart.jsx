import { useContext } from "react";
import { ShopContext } from "../Context/shopcontext";

export default function CartMain() {
  return (
    <div>
      <CartItems />
    </div>
  );
}

function CartItems() {
  const { Products_Data, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="caritems-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {Products_Data.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div className="cartitems-format">
                <img src={e.image} alt="" className="cartimage"></img>
                <p>{e.name}</p>
                <p>${e.price}</p>
                <button className="cartquantity">{cartItems[e.id]}</button>
                <p>{e.price * cartItems[e.id]}</p>
                <button id="removeID" onClick={() => removeFromCart(e.id)}>
                  Remove
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cartitemsdown"></div>
    </div>
  );
}
