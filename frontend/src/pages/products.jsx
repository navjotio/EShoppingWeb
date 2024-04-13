import Products_Data from "../Assets/productsdata";
import NavBar from "../components/header/navbar";
import "./styles/products.css";
import Video1 from "../Assets/Banner.mp4";
export function Products() {
  return (
    <div>
      {/* <NavBar /> */}
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
    <div>
      <div className="productItems">
        <img src={props.image} id="ProductID" alt=""></img>
        <p>{props.name}</p>
      </div>
    </div>
  );
}
