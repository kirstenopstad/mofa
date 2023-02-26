import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import { auth } from "./../firebase.js"

const LoginControl = () => {

  if (auth.currentUser != null) {
    return(
      <Logout />
    )
  } else {
    return(
      <React.Fragment>
        <Login />
        <Register />
      </React.Fragment>
    );
  }
}

export default LoginControl