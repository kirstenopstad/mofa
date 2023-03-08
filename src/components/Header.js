import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return(
    <React.Fragment>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">MOFA</Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/visit">Visit</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/store">Store</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/membership">Membership</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </React.Fragment>
  );
}

export default Header;