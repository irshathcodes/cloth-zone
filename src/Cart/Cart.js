import { useMyContextApi } from "../contextApi";
import { Button } from "@material-ui/core";
import EmptyCart from "./EmptyCart";
import CartItems from "./CartItems";
import useStyles from "../materialStyles";
import notification from "../Notifications/notification";
import { Link } from "react-router-dom";
import "./cartStyles.css";

const Cart = () => {
  const { cart, handleEmptyCart } = useMyContextApi();
  const classes = useStyles();

  if (!cart.line_items) {
    return <div className="home-loading cart-loading"></div>;
  }

  return (
    <>
      {!cart.line_items.length ? (
        <EmptyCart />
      ) : (
        <main>
          <h1 className="home-title cart-title">Your Shopping Cart</h1>
          <div className="underline"></div>
          <div className="cart-head">
            <div className="cart-heading-container">
              <h4>Item</h4>
              <h4>Price</h4>
              <h4>Quantity</h4>
              <h4>Subtotal</h4>
              <span></span>
            </div>
            <hr />

            {cart.line_items.map((item) => {
              return <CartItems key={item.id} {...item} />;
            })}

            <div className="checkout-container">
              <div className="total-amount ">
                Order Total: {cart.subtotal.formatted_with_symbol}
              </div>
              <div className="checkout-btn-container">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.checkoutBtn}
                  size="medium"
                  onClick={() => {
                    handleEmptyCart();
                    notification("success", "Cart Cleared");
                  }}
                >
                  Empty Cart
                </Button>
                <Button
                  component={Link}
                  to="/checkout"
                  variant="contained"
                  color="secondary"
                  size="medium"
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Cart;
