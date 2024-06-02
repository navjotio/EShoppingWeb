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

const getDefaultPopularCart = () => {
  let popCart = {};
  for (let index1 = 0; index1 < PopularProducts_Data.length + 1; index1++) {
    popCart[index1] = 0;
  }
  return popCart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [popCartItems, setPopCartItems] = useState(getDefaultPopularCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    setPopCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  console.log(popCartItems);
  const addPropToCart = (itemId) => {
    setPopCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    setPopCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Products_Data.find(
          (product) => product.id === Number(item)
        );

        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
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
    popCartItems,
    cartItems,
    addToCart,
    removeFromCart,
    PopularProducts_Data,
    getTotalCartAmount,
    getTotalCartItems,
    addPropToCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
