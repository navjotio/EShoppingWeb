import ShoppingCart from "../components/header/pages/shoppingcart";
import "./styles/selectedpopularproductdisplay.css";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const SelectedPopularpopularProdouctDisplay = (props) => {
  const { popularProduct } = props;
  return (
    <div className="popularDisplay">
      <ShoppingCart />
      <div className="popularDisplay-left">
        <div className="popularDisplay-imglist">
          <img
            src={popularProduct.image}
            alt=""
            style={{ height: "164px" }}
          ></img>
          <img
            src={popularProduct.image}
            alt=""
            style={{ height: "164px" }}
          ></img>
          <img
            src={popularProduct.image}
            alt=""
            style={{ height: "164px" }}
          ></img>
        </div>
        <img src={popularProduct.image} alt="" id="popularItemsID"></img>
        <div></div>
      </div>
      <div className="popularDisplay-right">
        <h1>{popularProduct.name}</h1>
        <h1>Condition: {popularProduct.condition}</h1>
        <div className="popularitemsrating">
          {[...Array(popularProduct.rating)].map((index) => (
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
          {popularProduct.description}
        </p>
        <h1
          style={{
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          {popularProduct.capacity}
        </h1>
        <h2>
          ${popularProduct.newPrice}
          <h2 style={{ textDecoration: "line-through", color: "darkred" }}>
            ${popularProduct.oldPrice}
          </h2>
        </h2>
        <button id="popularBuyID">
          Cart
          <FaArrowRight style={{ height: "12px", width: "16px" }} />
        </button>
      </div>
    </div>
  );
};

export default SelectedPopularpopularProdouctDisplay;
