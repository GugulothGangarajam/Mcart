import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Clothes from "./Clothes";
import EmailVerify from "./EmailVerify";
import Favourites from "./Favourites";
import Header from "./Header";
import Home from "./Home";
import Hoodies from "./Hoodies";
import Login from "./Login";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import WinterC from "./WinterC";

function App() {
  const [{ user }, dispatch] = useStateValue();
  let User = user;
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log(loggedInUser);
    if (!User && loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch({
        type: actionTypes.SET_USER,
        user: foundUser,
      });
      User = foundUser;
    }
  }, [user]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/winter">
            <WinterC />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/t-shirts">
            <WinterC />
          </Route>
          <Route path="/hoodies">
            <Hoodies />
          </Route>
          <Route path="/clothes">
            <Clothes />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route path="/emailVerification">
            <EmailVerify />
          </Route>
          <Route exact path="/">
            {!User ? <Login /> : <Home />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
