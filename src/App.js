import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContext } from "./contextApi";
import ReactNotification from "react-notifications-component";
import NavBar from "./Home/NavBar";
import Hero from "./Home/Hero";
import Products from "./Products/Products";
import ProductsOverview from "./Home/ProductsOverView";
import AboutUs from "./Home/AboutUs";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import Error from "./Error/Error";
const App = () => {
  return (
    <>
      <AppContext>
        <Router>
          <ReactNotification />
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <Hero />
              <ProductsOverview />
              <AboutUs />
            </Route>
            <Route path="/products" exact>
              <Products />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="*" component={Error} />
          </Switch>
        </Router>
      </AppContext>
    </>
  );
};

export default App;
