import { useContext } from "react";
import { ShopContext } from "../Context/shopcontext";
import "./styles/cartmain.css";

export default function CartMain() {
  return (
    <div>
      <CartItems />
      <popularCartItems />
    </div>
  );
}

function CartItems() {
  const {
    Products_Data,
    cartItems,
    removeFromCart,
    addToCart,
    getTotalTaxAmount,
    getSubtotalCartAmount,
  } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-main">
        <p>Product</p>
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
              <div className="cartitems-format cartitems-main">
                <button
                  className="cartaddquantity"
                  onClick={() => addToCart(e.id)}
                  style={{
                    width: "50px",
                    position: "absolute",
                    left: "2rem",
                    border: "none",
                    borderRadius: "20px",
                    fontSize: "16px",
                    textAlign: "center",
                    padding: "3px",
                    transition: "0.3s",
                    textDecoration: "none",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  +
                </button>
                <img src={e.image} alt="" className="cartimage"></img>
                <p>{e.name}</p>
                <p>${e.price}</p>
                <button className="cartquantity">{cartItems[e.id]}</button>

                <p>${e.price * cartItems[e.id]}</p>
                <button id="removeID" onClick={() => removeFromCart(e.id)}>
                  X
                </button>
              </div>
            );
          }
          return null;
        })}
        <hr />
      </div>
      <div className="cartitemsdown">
        <div className="cartitemstotal">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitemstotalprice">
              <p>Subtotal</p>
              <p>${getSubtotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitemstotalprice">
            <p>Tax
              <br/>
              GST: 7% PST: 6%
            </p>
            <p>{getTotalTaxAmount()}</p>
            </div>
            <hr />
            <div className="cartitemstotalprice">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitemstotalprice">
              <h3>Total</h3>
              <h3>${getSubtotalCartAmount() + getTotalTaxAmount()}</h3>
            </div>
          </div>
          <button id="checkoutID">Checkout</button>
        </div>
        <div className="cartitemspromo">
          <p>Have a PROMO code? Enter it here</p>
          <div className="cartitemscodebox">
            <input type="text" placeholder="Promo Code...." />
            <button id="promoID">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

