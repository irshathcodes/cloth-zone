import { Button } from "@material-ui/core";

const AboutUs = () => {
  return (
    <>
      <section id="about" className="section">
        <h1 className="about-heading home-title">About Us</h1>
        <div className="underline-about"></div>
        <h1 className="about-title">Cloth Zone</h1>
        <p className="about-p">
          Welcome to Cloth Zone, A Web Application created using React and
          Commerce JS Api. You can add items to cart and view them with the
          total price. You can checkout by filling the Shipping Address and you
          can also enter fake credit card details and you will get confirmation
          details. Created for learning and for a little fun. If you have any
          questions or comments, please don't hesitate to contact me at
          <span style={{ fontWeight: "bold", paddingLeft: "0.5rem" }}>
            irshath700@gmail.com.
          </span>
        </p>
        <div className="about-info">Join our newsletter and get 20% off</div>
        <form className="form">
          <div className="text-container">
            <input
              type="email"
              placeholder="Enter your Email"
              className="input"
            />
            <Button variant="contained" color="secondary">
              Subscribe
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AboutUs;
