import "./homeStyles.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="show-content">
        <h1 className="hero-desc">Wear your Best Moments</h1>
        <p className="hero-p">
          Style is something each of us already has, all we need to do is find
          it.
        </p>
        <div className="shopbtn">
          <Link to="/products" style={{ textDecoration: "none" }}>
            <button type="button" className="shop-btn">
              shop now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
