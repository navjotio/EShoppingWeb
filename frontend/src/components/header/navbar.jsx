import Logo from "./pages/logo";
import Heading from "./pages/heading";
import Search from "./pages/searchbar";
import LangSelector from "./pages/langselector";
import SignInPortal from "./pages/signinportal";
import ShoppingCart from "./pages/shoppingcart";
import { useState } from "react";
import "./styles/navbar.css";

export default function NavBar() {
  const [activeHeader, setActiveHeader] = useState(false);
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 100) {
      setActiveHeader(true);
    } else {
      setActiveHeader(false);
    }
  });
  return (
    <div className={activeHeader ? "navbar" : ""}>
      <Logo />
      <Heading />
      <Search />
      <LangSelector />
      <SignInPortal />
      <ShoppingCart />
    </div>
  );
}
