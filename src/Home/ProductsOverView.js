import { useEffect, useState } from "react";
import { commerce } from "../lib/commerce";
import { useMyContextApi } from "../contextApi";
import Product from "../Products/Product";
import { HashLink } from "react-router-hash-link";
import { Button } from "@material-ui/core";

const ProductsOverView = () => {
  const [products, setProducts] = useState([]);
  const { loading, setLoading } = useMyContextApi();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await commerce.products.list({ limit: 3 });
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <>
        <div className="home-loading"></div>
      </>
    );
  }

  return (
    <>
      <main>
        <h1 className="home-title">Featured Products</h1>
        <div className="underline"></div>
        <Product products={products} />
        <div className="btn-container">
          <HashLink to="/products/#" style={{ textDecoration: "none" }}>
            <Button variant="outlined" size="large" color="secondary">
              All Products
            </Button>
          </HashLink>
        </div>
      </main>
    </>
  );
};

export default ProductsOverView;
