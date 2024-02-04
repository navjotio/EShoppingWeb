function Heading() {
  return (
    <header className="">
      <h1 style={{ action: "white" }}>ShopHub•</h1>
      <button
        id="productbtn"
        style={{
          fontSize: "17px",
          position: "absolute",
          right: "20rem",
          top: "1.4rem",
          fontWeight: "initial",
          fontFamily: ` -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        `,
        }}
      >
        Products
      </button>
    </header>
  );
}

export default Heading;
