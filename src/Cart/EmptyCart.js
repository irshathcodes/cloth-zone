import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <h5 className="empty-cart">
      You have no items in your shopping cart{" "}
      <Link to="/products">Start adding some</Link>
    </h5>
  );
};

export default EmptyCart;
