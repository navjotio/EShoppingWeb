import "./newsletter.css";

function NewsLetter() {
  return (
    <div className="newsletter">
      <h1>
        Don't want to miss out on exculsive{" "}
        <span className="color">deals?</span>
      </h1>
      <p>Subscribe to our newsletter and stay updated!</p>
      <div>
        <input type="email" placeholder="Enter your email" required></input>{" "}
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
