import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="item">
        <Link to="/t-shirts" className="link">
          <img
            className="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmzXgg6Rp9N3BM9FrAYGEDSNwyp29A4af2A&usqp=CAU"
            alt="Winter Collection"
          />
          <h6 className="sub-main">Men</h6>
          <h6>T-shirts & Tanks</h6>
        </Link>
      </div>
      <div className="item">
        <Link to="/hoodies" className="link">
          <img
            className="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSru0hntdCypnyMVsW4MZbgcvDCiqlpDmUj_A&usqp=CAU"
            alt="Winter Collection"
          />
          <h6 className="sub-main">Men</h6>
          <h6>Hoodies & Sweatshirts</h6>
        </Link>
      </div>
      <div className="item">
        <Link to="/clothes" className="link">
          <img
            className="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1niydkatLRx9rK8XENs2-lhEnfgOYSNzS7g&usqp=CAU"
            alt="Winter Collection"
          />
          <h6 className="sub-main">Men</h6>
          <h6>Clothes</h6>
        </Link>
      </div>
    </div>
  );
}

export default Main;
