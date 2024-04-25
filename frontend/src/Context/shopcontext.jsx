import { createContext } from "react";
import Products_Data from "../Assets/productsdata";
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { Products_Data };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
