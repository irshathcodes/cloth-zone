import { useState } from "react";
import logo from "../Assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useMyContextApi } from "../contextApi";
import { Drawer, ListItem, ListItemText, Badge } from "@material-ui/core";
import useStyles from "../materialStyles";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = () => {
  const { cart } = useMyContextApi();
  const classes = useStyles();
  const [openNav, setOpenNav] = useState(false);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -45;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <>
      {/* NavBar */}
      <nav className="nav-container">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />

          <div className="brand">Cloth Zone</div>
        </div>
        <ul className="nav-links">
          <li>
            <HashLink to="/#" smooth className="links">
              Home
            </HashLink>
          </li>
          <li>
            <Link to="/products" className="links">
              Products
            </Link>
          </li>
          <li>
            <HashLink
              to="/#about"
              smooth
              scroll={(el) => scrollWithOffset(el)}
              className="links"
            >
              About Us
            </HashLink>
          </li>
        </ul>
        <div className="hamburger" onClick={() => setOpenNav(true)}>
          <MenuIcon fontSize="large" />
        </div>
        <div className="cart">
          <Link to="/cart" style={{ textDecoration: "none", color: "#1f1235" }}>
            Cart
            <Badge
              badgeContent={!cart.total_items ? "0" : cart.total_items}
              aria-label="cart"
              color="primary"
              className={classes.badge}
            >
              <FaShoppingCart />
            </Badge>
          </Link>
        </div>
      </nav>

      {/* Mobile Nav */}
      <Drawer anchor="top" open={openNav} onClose={() => setOpenNav(false)}>
        <HashLink to="/#" smooth className="links">
          <ListItem
            alignItems="center"
            divider
            button
            style={{ textAlign: "center" }}
            onClick={() => setOpenNav(false)}
          >
            <ListItemText>Home</ListItemText>
          </ListItem>
        </HashLink>
        <Link
          to="/products"
          style={{ textDecoration: "none", color: "#1f1235" }}
        >
          <ListItem
            alignItems="center"
            divider
            button
            style={{ textAlign: "center" }}
            onClick={() => setOpenNav(false)}
          >
            <ListItemText>Products</ListItemText>
          </ListItem>
        </Link>
        <HashLink
          to="/#about"
          smooth
          scroll={(el) => scrollWithOffset(el)}
          className="links"
        >
          <ListItem
            divider
            button
            style={{ textAlign: "center" }}
            onClick={() => setOpenNav(false)}
          >
            <ListItemText>About Us</ListItemText>
          </ListItem>
        </HashLink>
        <Link to="/cart" style={{ textDecoration: "none", color: "#1f1235" }}>
          <ListItem
            alignItems="center"
            button
            style={{ textAlign: "center" }}
            onClick={() => setOpenNav(false)}
          >
            <ListItemText>
              Cart
              <Badge
                color="secondary"
                className={classes.badge}
                badgeContent={!cart.total_items ? "0" : cart.total_items}
              >
                <FaShoppingCart />
              </Badge>
            </ListItemText>
          </ListItem>
        </Link>
      </Drawer>
    </>
  );
};

export default NavBar;
