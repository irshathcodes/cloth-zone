import "./productStyles.css";
import { useMyContextApi } from "../contextApi";
import notification from "../Notifications/notification";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "../materialStyles";

const Product = (props) => {
  const { products } = props;
  const { handleAddCart } = useMyContextApi();
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={4}
        justify="center"
        style={{
          width: "auto",
          height: "auto",
          margin: "0 auto",
        }}
      >
        {products.map((product) => {
          return (
            <Grid item key={product.id} className={classes.grid}>
              <Card>
                <CardMedia
                  image={product.media.source}
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
                <div className={`card-content ${classes.color}`}>
                  <CardContent className={classes.content}>
                    <div
                      onClick={() => {
                        handleAddCart(product.id, 1);
                        notification("success", "Added to Cart");
                      }}
                    >
                      <AddShoppingCart className={classes.cart} />
                    </div>
                    <Typography variant="body1" className={classes.color}>
                      {product.name}
                    </Typography>
                    <Typography variant="h6" className={classes.price}>
                      {product.price.formatted_with_symbol}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Product;
