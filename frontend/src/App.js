import Logo from "./components/logo";
import Heading from "./components/heading";
import Search from "./components/searchbar";
import LangSelector from "./components/langselector";
import SignInPortal from "./components/signinportal";
import ShoppingCart from "./components/shoppingcart";

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
    </div>
  );
}

export default App;

function MainHeader({ children }) {
  return <nav className="header">{children}</nav>;
}
