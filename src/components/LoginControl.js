import React, {useState} from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import { auth } from "./../firebase.js"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const LoginControl = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const handleShowRegsiter = () => {
    setShowLogin(false)
    setShowRegister(true)
  }

  const handleShowLogin = () => {
    setShowLogin(true)
    setShowRegister(false)
  }

  let form = null;
  let button = null;

  if (showRegister) {
    form = <Register onLogin={handleShowLogin}/>
    button = <Button onClick={handleShowLogin}>Login</Button>
  } else if (showLogin) {
    form = <Login onRegister={handleShowRegsiter}/>
  } else {
    form = <Logout />
  }
  return (
    <Container>
        <Modal.Header closeButton>
        <Modal.Title>Login or Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
          {form}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        {/* TODO: hide until reegisters */}
        {button}
      </Modal.Footer>
    </Container>
  )
  
}

export default LoginControl