import iphoneMainImg from "./IphoneMainPage.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Shop Electronics</h2>
        <p>
          New collections for <br></br>everyone
        </p>
      </div>
      <div className="hero-right">
        <div>
          <img src={iphoneMainImg} alt=""></img>
        </div>
      </div>
      <div className="latestbtn">
        <button id="latestcollbtn">Latest Collection→</button>
      </div>
    </div>
  );
}

export default Hero;
