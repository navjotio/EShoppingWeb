import ReusableItems from "./reuseableitem";
import "./styles/selectedproductdisplay.css";

const SelectedProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="prodDisplay">
      <div className="prodDisplay-left">
        <div className="prodDisplay-imglist"></div>
        <h1>{product.price}</h1>
      </div>
    </div>
  );
};

export default SelectedProductDisplay;
