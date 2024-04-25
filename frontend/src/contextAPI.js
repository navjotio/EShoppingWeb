import React, { Component } from "react";
import Products_Data from "./Assets/productsdata";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: Products_Data,
  };
  render() {
    return (
      <ProductContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
