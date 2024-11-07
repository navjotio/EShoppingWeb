import { createContext, useState } from "react";
import Products_Data from "../Assets/productsdata";
import PopularProducts_Data from "../Assets/PopularData";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < Products_Data.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const getPopDefaultCart = () =>{ 
  let cart = {};
  for (let index = 0; index < PopularProducts_Data.length + 1; index++){
    cart[index] = 0;
  }
  return cart
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

  };


const getSubtotalCartAmount= ()=>{
  let totalAmount1 = 0
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = Products_Data.find(
        (product) => product.id === Number(item)
      );

      totalAmount1 += itemInfo.price * cartItems[item];
    }
  }
  return totalAmount1;
}
  const getTotalTaxAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Products_Data.find(
          (product) => product.id === Number(item)
        );

        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount * 13/100;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    Products_Data,
    cartItems,
    addToCart,
    removeFromCart,
    PopularProducts_Data,
    getTotalTaxAmount,
    getTotalCartItems,
    getSubtotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
