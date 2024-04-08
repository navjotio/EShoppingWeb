import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/heading.css";

function Heading() {
  const navigation = useNavigate();
  const [t, i18n] = useTranslation("global");

  return (
    <header>
      <h1
        style={{
          action: "white",
          cursor: "pointer",
          position: "absolute",
          top: "1.0rem",
          left: "6.2rem",
        }}
      >
        ShopHub•
      </h1>
      <button id="productbtn" onClick={() => navigation("products")}>
        {t("header.products")}
      </button>
    </header>
  );
}

export default Heading;
