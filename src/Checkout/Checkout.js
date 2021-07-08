import { useState, useEffect } from "react";
import { Paper, Stepper, Step, StepLabel } from "@material-ui/core";
import { useMyContextApi } from "../contextApi";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Confirmation from "./Confirmation";
import { commerce } from "../lib/commerce";
import { useHistory } from "react-router-dom";
import useStyles from "../materialStyles";

const Checkout = () => {
  const [token, setToken] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [shippingData, setShippingData] = useState({});
  const { activeStep, setActiveStep, cart } = useMyContextApi();
  const classes = useStyles();
  const steps = ["Shipping Address", "Payment Details"];
  const history = useHistory(); // using history to go to cart page when user refresh the page in checkout form

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setToken(token);
      } catch (error) {
        if (activeStep !== steps.length) history.push("/cart");
      }
    };
    generateToken();
    // eslint-disable-next-line
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };
  const Form = () =>
    activeStep === 0 ? (
      <AddressForm next={next} />
    ) : (
      <PaymentForm
        token={token}
        backStep={backStep}
        nextStep={nextStep}
        shippingData={shippingData}
      />
    );

  return (
    <>
      <div style={{ marginTop: "3.7rem" }} />
      <Paper className={classes.paper} variant="outlined">
        <h1 className="home-title checkout-title">Checkout</h1>
        <div className="underline"></div>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((step) => {
            return (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          showConfirmation && (
            <Confirmation
              shippingData={shippingData}
              setShowConfirmation={setShowConfirmation}
            />
          )
        ) : (
          <Form />
        )}
      </Paper>
    </>
  );
};

export default Checkout;
