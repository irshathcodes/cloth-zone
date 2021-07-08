import { useMyContextApi } from "../contextApi";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Confirmation = ({ shippingData, setShowConfirmation }) => {
  const { setActiveStep, loading, setLoading } = useMyContextApi();

  const timeoutFunc = () => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  };
  timeoutFunc();
  if (!loading) {
    return (
      <>
        <div className="loading-container">
          <div className="loading confirmation-loading"></div>
        </div>
      </>
    );
  }
  return (
    <>
      <Typography variant="h5" align="center" gutterBottom>
        Your Order is Successful!
      </Typography>
      <div style={{ textAlign: "center" }}>
        Thank you {shippingData.firstName} for purchasing from us
      </div>
      <div style={{ textAlign: "center", fontWeight: "700" }}>
        Order Id {new Date().valueOf()}
      </div>
      <Button
        component={Link}
        style={{ marginTop: "1rem" }}
        to="/"
        variant="outlined"
        onClick={() => {
          setShowConfirmation(false);
          setActiveStep(0);
        }}
      >
        Back
      </Button>
    </>
  );
};

export default Confirmation;
