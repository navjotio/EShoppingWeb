import "./styles/selectedproductdisplay.css";

export default function SelectedProductDisplay(props) {
  const { product } = props;
  return (
    <div className="prodDisplay">
      <div className="prodDisplay-left">
        <div className="prodDisplay-imglist">
          <img src={props.image} alt="" />
        </div>
      </div>
    </div>
  );
}
