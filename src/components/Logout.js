import React, { useState } from "react";
import { auth } from "./../firebase.js"
import { signOut } from "firebase/auth";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';

const Logout = ({onClose}) => {
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
  
  let logoutBody = null;
  if (auth.currentUser != null) {
    logoutBody =
    <Form onSubmit={handleSignOut}>
      <p>Please confirm to logout of this session.</p>
      <Button type="submit" variant="dark">Logout</Button>
    </Form>
  } else {
    logoutBody =  <p>{signOutSuccess}</p>
  }

  return(
    <div className="logout-container">
    <Container>
      <Modal.Header closeButton>
      <Modal.Title>Logout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {logoutBody}
      </Modal.Body>
    </Container>
    </div>
  )
 
 

}

export default Logout