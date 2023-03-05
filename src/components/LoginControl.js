import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import { auth } from "./../firebase.js"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const LoginControl = () => {

  if (auth.currentUser != null) {
    return(
      <Logout />
    )
  } else {
    return(
      <Container>
        <Row>
          <Col sm="6">
            <Login />
          </Col>
          <Col sm="6">
            <Register />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginControl