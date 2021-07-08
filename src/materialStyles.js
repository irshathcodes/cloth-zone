import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => {
  return {
    color: {
      color: "#1f1235",
    },
    content: {
      padding: "0px",
      width: "100",
      margin: "0.3rem",
      marginLeft: "0.5rem",
      marginBottom: "0px",
    },
    cart: {
      cursor: "pointer",
      display: "inline-block",
      padding: "0px",
      marginRight: "0.5rem",
      marginTop: "0.5rem",
      float: "right",
      color: "#ff6e6c",
    },
    price: {
      color: "#1f1235",
    },

    badge: {
      marginLeft: "0.2rem",
      marginBottom: "0.2rem",
      marginRight: "0.480rem",
      paddingTop: "0.3rem",
      paddingRight: "0.1rem",
    },
    checkoutBtn: {
      marginRight: "1rem",
    },
    paper: {
      width: "60%",
      margin: "0 auto",
      padding: "2rem",
      [theme.breakpoints.down("sm")]: {
        width: "95%",
        padding: "1rem",
        marginBottom: "1rem",
      },
    },
  };
});
