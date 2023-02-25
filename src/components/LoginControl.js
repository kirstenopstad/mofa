import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import { auth } from "./../firebase.js"
import Register from "./Register";

const LoginControl = () => {


  let loginDisplay = null;
  // if not signed in, offer login / register
  if (auth.currentUser == null) {
    loginDisplay = 
      <div>
        <Login />
        <Register />
      </div>
  // else offer logout
  } else if (auth.currentUser != null) {
    // TODO: add logout
    loginDisplay = 
    <Logout />
  }
  return(
    <React.Fragment>
      {loginDisplay}
    </React.Fragment>
  );
}

export default LoginControl