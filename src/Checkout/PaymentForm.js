import { useMyContextApi } from "../contextApi";
import { Typography, Button, Divider } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ token, nextStep, backStep }) => {
  const { refreshCart } = useMyContextApi();

  const handleSubmit = () => {
    nextStep();
    refreshCart();
  };

  return (
    <>
      <Review token={token} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <Typography>Test Card Number: 4242 4242 4242 4242</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form>
              <CardElement />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "2rem",
                }}
              >
                <Button variant="outlined" onClick={backStep}>
                  Back
                </Button>
                <Button
                  onClick={() => handleSubmit()}
                  variant="contained"
                  disabled={!stripe}
                  color="secondary"
                >
                  Pay {token.live.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
