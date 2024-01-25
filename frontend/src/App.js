import { useState } from "react";
import image from "./logo.png";
import cart from "./cart.png";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <MainHeader>
        <Logo></Logo>
        <Heading></Heading>
        <Search></Search>
        <LangSelector> </LangSelector>
        <SignInPortal />
        <ShoppingCart />
      </MainHeader>
      {/* <Server /> */}
    </div>
  );
}

export default App;

function MainHeader({ children }) {
  return <nav className="header">{children}</nav>;
}

function Logo() {
  return (
    <span className="logo">
      <img src={image} alt=""></img>
    </span>
  );
}

function Heading() {
  return (
    <header className="">
      <h1 style={{ color: "white" }}>ShopHub•</h1>
      <button
        id="productbtn"
        style={{
          fontSize: "17px",
          position: "absolute",
          right: "20rem",
          top: "1.4rem",
          fontWeight: "initial",
          fontFamily: ` -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
          Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      `,
        }}
      >
        Products
      </button>
    </header>
  );
}

function Search() {
  const [search, setSearch] = useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search here...."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    ></input>
  );
}

function LangSelector() {
  const [lang, setLang] = useState("");
  return (
    <div className="language">
      <label for="languageDropdown"></label>
      <select
        id="languageDropdown"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="gr">German</option>
        <option value="mx">Mexican</option>
        <option value="du">Dutch</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  );
}

function SignInPortal() {
  const [open, setOpen] = useState(false);

  function SignInForm() {
    const [values, setValues] = useState({
      name: "",
      email: "",
      password: "",
    });
    const handleChange = (event) => {
      setValues({ ...values, [event.target.name]: [event.target.value] });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => console.log(alert("Account Created Susccessfully!")))
        .catch((err) => console.log(err));
      setValues();
    };
    return (
      <div>
        <form id="signinform" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            onChange={handleChange}
          ></input>
          <label>email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            onChange={handleChange}
          ></input>
          <label>Password</label>
          <input
            type="password"
            placeholder="Create your password"
            required
            name="password"
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <br />
          <button id="signupbtn">Sign Up</button>
          <button
            style={{
              outline: "none",
              border: "none",
              padding: "4px",
              backgroundColor: "transparent",
              textDecoration: "none",
              cursor: "pointer",
              color: "white",
            }}
          >
            Already have an account? Log In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="signin">
      <button
        id="signinbtn"
        onClick={() => setOpen(!open)}
        style={{ backgroundColor: open ? "#343a40 " : "", height: "65px" }}
      >
        Sign in/Member
      </button>
      {open ? <SignInForm /> : ""}
    </div>
  );
}

function ShoppingCart() {
  function handleCartClick(e) {
    e.preventDefault();
  }
  return (
    <a href="#" onClick={handleCartClick}>
      <img id="cart" src={cart} alt=""></img>
    </a>
  );
}

// function Server() {
//   const [items, setItems] = useState([]);
//   // Fetch data from the server

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/api/items")
//       .then((response) => setItems(response.data))
//       .catch((error) => console.error("Error Fetching Data:", error));
//   }, []);

//   return (
//     <div>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}></li>
//         ))}
//       </ul>
//     </div>
//   );
// }
