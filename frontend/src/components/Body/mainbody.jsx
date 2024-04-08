import Hero from "./pages/hero";
import PopularProducts from "./pages/Popular";
import Offers from "./pages/offers";
import NewsLetter from "./pages/newsLetter";

export default function MainDisplay() {
  return (
    <div>
      <Hero></Hero>
      <PopularProducts />
      <Offers />
      <NewsLetter />
    </div>
  );
}
