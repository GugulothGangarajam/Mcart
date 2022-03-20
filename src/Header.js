import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import { useStateValue } from "./StateProvider";
import "./Header.css";
import { auth } from "./firebase";
function Header() {
  const [{ user, basket }] = useStateValue();
  const signOut = () => {
    if (user) {
      localStorage.setItem("user", null);
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <div className="sub-head">
        <h6>Customer Service</h6>
      </div>
      <div className="title-link">
        <Link to="/" className="link">
          <h3 className="header__title">
            M<span>cart</span>
          </h3>
        </Link>
      </div>

      <div className="links">
        <Link to="/login" className="link">
          <div onClick={signOut} className="header__option">
            <span className="header__optionLineOne">Hello, {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/favourites" className="link">
          <div className="header__option">
            <h6>Favourites</h6>
          </div>
        </Link>
        <Link to="/checkout" className="link">
          <div className="header__option">
            <h6>Shopping bag ({basket?.length})</h6>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
