import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Products } from "./pages/products";
import Home from "./pages/home";
import CartMain from "./pages/cart";
import Latestcollection from "./pages/latestcollection";
import DisplayProduct from "./pages/displayproduct";
import DisplayPopularProduct from "./pages/displaypopularproduct";
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
          <Route path="/product" element={<DisplayProduct />}>
            <Route path=":Id" element={<DisplayProduct />} />
          </Route>
          <Route path="/popularproduct" element={<DisplayPopularProduct />}>
            <Route path=":popID" element={<DisplayPopularProduct />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
