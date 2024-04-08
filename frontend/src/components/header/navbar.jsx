import Logo from "./pages/logo";
import Heading from "./pages/heading";
import Search from "./pages/searchbar";
import LangSelector from "./pages/langselector";
import SignInPortal from "./pages/signinportal";
import ShoppingCart from "./pages/shoppingcart";

export default function NavBar() {
  return (
    <div>
      <Logo />
      <Heading />
      <Search />
      <LangSelector />
      <SignInPortal />
      <ShoppingCart />
    </div>
  );
}
