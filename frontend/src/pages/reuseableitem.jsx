import { Link } from "react-router-dom";

export default function ReusableItems(props) {
  return (
    <div className="item">
      <div className="itemdec">
        <Link to={`prod/${props.id}`}>
          <img id="respopularID" src={props.image} alt=""></img>
        </Link>
        <p>{props.name}</p>
        <div className="itemprices">
          <div className="itemprices-new">${props.price}</div>
          <div className="itemprices-old"></div>
        </div>
      </div>
    </div>
  );
}
