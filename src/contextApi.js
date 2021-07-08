import React, { useState, useEffect, useContext } from "react";
import { commerce } from "./lib/commerce";

const myContext = React.createContext();

const AppContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState({});
  const [activeStep, setActiveStep] = useState(0); // State For Stepper

  const fetchData = async () => {
    // Listing Products Data
    try {
      setLoading(true);
      const { data } = await commerce.products.list();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCart = async () => {
    // Creating a cart
    const cartData = await commerce.cart.retrieve();
    setCart(cartData);
  };

  const handleAddCart = async (productId, quantity) => {
    // Adding the product to Cart
    const response = await commerce.cart.add(productId, quantity);
    setCart(response.cart);
  };

  const handleUpdateCart = async (productId, quantity) => {
    // Updating (increasing or decreasing product quantity)
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response.cart);
  };

  const handleRemoveCart = async (productId) => {
    // Removing a single Product in the cart
    const response = await commerce.cart.remove(productId);
    setCart(response.cart);
  };
  const handleEmptyCart = async () => {
    // deleting all the products in the cart
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };

  const refreshCart = async () => {
    // removing old cart & creating a new empty cart
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  useEffect(() => {
    fetchData();
    fetchCart();
  }, []);

  return (
    <myContext.Provider
      value={{
        products,
        setProducts,
        loading,
        setLoading,
        handleAddCart,
        handleUpdateCart,
        handleRemoveCart,
        handleEmptyCart,
        cart,
        activeStep,
        setActiveStep,
        refreshCart,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export const useMyContextApi = () => {
  return useContext(myContext);
};

export { AppContext };
