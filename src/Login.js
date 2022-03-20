import React from "react";
import { Button } from "@material-ui/core";
import { auth, googleProvider, facebookProvider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./Login.css";
import { makeStyles } from "@material-ui/core/styles";

import { Link, useHistory } from "react-router-dom";

//styles
const useStyles = makeStyles({
  google: {
    color: "white",
    background: "red",
    margin: "10px",
    "&:hover": {
      background: "white",
      color: "red",
    },
    position: "relative",
    top: "100px",
  },
  facebook: {
    color: "white",
    background: "blue",
    "&:hover": {
      background: "white",
      color: "blue",
    },
    margin: "0px 10px 0px 0px",
    position: "relative",
    top: "100px",
  },
  FacebookIcon: {
    padding: "0px 0px 0px 5px",
  },
});
function Login() {
  const [state, dispatch] = useStateValue();
  const history = useHistory();

  const handleOnClick = async (provider) => {
    await auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
        localStorage.setItem("user", JSON.stringify(res.user));
        history.push("/");
      })
      .catch((err) => alert(err.message));
    //
  };
  const classes = useStyles();
  return (
    <div className="login">
      <h1 className="login-title">Login </h1>
      <div className="accounts">
        <Button
          className={classes.google}
          onClick={() => handleOnClick(googleProvider)}
        >
          Sign IN with google
        </Button>
        <Button
          className={classes.facebook}
          onClick={() => handleOnClick(facebookProvider)}
        >
          Facebook
          <FacebookIcon className={classes.FacebookIcon} />
        </Button>
        <Link className="email" to="/emailVerification">
          Verify using Email-OTP
        </Link>
      </div>
    </div>
  );
}
export default Login;
