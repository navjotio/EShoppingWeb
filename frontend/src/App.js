import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Products } from "./components/Body/pages/products";

import Home from "./components/home";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
