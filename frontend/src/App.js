import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Products } from "./pages/products";
import Home from "./pages/home";
import CartMain from "./pages/cart";
import Latestcollection from "./pages/latestcollection";
import DisplayProduct from "./pages/displayproduct";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/cart" element={<CartMain />} />
          <Route
            exact
            path="/latestcollection"
            element={<Latestcollection />}
          />
          <Route exact path="/product" element={<DisplayProduct />} />
          <Route exact path=":productID" element={<DisplayProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
