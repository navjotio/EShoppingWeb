import NavBar from "../components/header/navbar";
import Products_Data from "../Assets/productsdata";
import "./styles/products.css";
import Video1 from "../Assets/Banner.mp4";
import ShoppingCart from "../components/header/pages/shoppingcart";

import {
  FaShoppingCart,
  FaRegBookmark,
  FaStar,
  FaFireAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export function Products() {
  return (
    <div>
      {/* <NavBar /> */}

      <ShoppingCart />

      <Banner />
      <h1
        style={{
          padding: "50px 0px 1px",
          marginLeft: "50rem",
          fontSize: "26px",
        }}
      >
        Available Products
      </h1>
      <div className="items">
        {Products_Data.map((items, i) => {
          return (
            <ProductItems
              key={i}
              id={items.id}
              name={items.name}
              image={items.image}
              description={items.description}
              price={items.price}
              condition={items.condition}
              capacity={items.capacity}
              rating={items.rating}
            />
          );
        })}
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div>
      <video src={Video1} autoPlay="true" loop="true" />
    </div>
  );
}

function ProductItems(props) {
  return (
    <div className="productItems">
      <div className="productCard">
        <FaShoppingCart className="productshoppingcart" />
        <FaRegBookmark className="productsbookmark" />
        <FaFireAlt className="productsfirealt" />
        <Link to={`/product/${props.id}`}>
          <img src={props.image} id="ProductID" alt=""></img>
        </Link>
        <p>{props.name}</p>
        <h1 style={{ fontSize: "20px" }}>${props.price}</h1>
        <div className="productRating">
          {[...Array(props.rating)].map((index) => (
            <FaStar id={index + 1} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
