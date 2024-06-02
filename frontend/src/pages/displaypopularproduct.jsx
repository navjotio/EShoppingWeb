import { useContext } from "react";
import { ShopContext } from "../Context/shopcontext";
import { useParams } from "react-router-dom";
import SelectedPopularProductDisplay from "./selectedpopularproductdisplay";

export default function DisplayPopularProduct() {
  const { PopularProducts_Data } = useContext(ShopContext);
  const { popID } = useParams();
  const popularProduct = PopularProducts_Data.find(
    (e) => e.id === Number(popID)
  );
  return (
    <div>
      <SelectedPopularProductDisplay popularProduct={popularProduct} />
    </div>
  );
}
