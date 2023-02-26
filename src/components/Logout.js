import React, { useState } from "react";
import { auth } from "./../firebase.js"
import { signOut } from "firebase/auth";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Logout = () => {
  const [signOutSuccess, setSignOutSuccess] = useState(null);
  // const [showLogoutButton, setShowLogoutButton] = useState(true);
  
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        setSignOutSuccess(`Thank you for signing out!`)
        // setShowLogoutButton(false)
      })
      .catch((error) => {
        setSignOutSuccess(`There was an error signing out: ${error.message}`)
      })
  }
  

  if (auth.currentUser != null) {
    return(
      <Form onSubmit={handleSignOut}>
        <Button type="submit">Logout</Button>
      </Form>
    )
  } else {
    return(
      <p>{signOutSuccess}</p>
      
    );
  }

}

export default Logout