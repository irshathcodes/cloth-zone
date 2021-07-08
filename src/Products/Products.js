import { useMyContextApi } from "../contextApi";
import Product from "./Product";

const Products = () => {
  const { products, loading } = useMyContextApi();

  if (loading) {
    return (
      <>
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <main>
        <h1 className="home-title">Products</h1>
        <div className="underline"></div>
        <Product products={products} />
      </main>
    </>
  );
};
export default Products;
