import { useContext } from "react";
import ShoppingCart from "../components/header/pages/shoppingcart";
import "./styles/selectedproductdisplay.css";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { ShopContext } from "../Context/shopcontext";
const SelectedProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="prodDisplay">
      <ShoppingCart />
      <div className="prodDisplay-left">
        <div className="prodDisplay-imglist">
          <img src={product.image} alt="" style={{ height: "164px" }}></img>
          <img src={product.image} alt="" style={{ height: "164px" }}></img>
          <img src={product.image} alt="" style={{ height: "164px" }}></img>
        </div>
        <img src={product.image} alt="" id="DisplayID"></img>
        <div></div>
      </div>
      <div className="prodDisplay-right">
        <h1>{product.name}</h1>

        <h1>Condition: {product.condition}</h1>
        <div className="rating">
          {[...Array(product.rating)].map((index) => (
            <FaStar id={index + 5} key={index} />
          ))}
        </div>
        <p
          style={{
            fontWeight: "600",
            fontSize: "20px",
            width: "550px",
          }}
        >
          {product.description}
        </p>
        <h1
          style={{
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          {product.capacity}
        </h1>
        <h2>${product.price}</h2>
        <button id="buyId" onClick={() => addToCart(product.id)}>
          Cart
          <FaArrowRight style={{ height: "12px", width: "16px" }} />
        </button>
      </div>
    </div>
  );
};

export default SelectedProductDisplay;
