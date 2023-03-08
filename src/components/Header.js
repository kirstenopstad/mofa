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
          <Link to="/" className="header-nav-item">MOFA</Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as="li">
              <Link to="/visit" className="header-nav-item">Visit</Link>
            </Nav.Link>
            <Nav.Link as="li">
              <Link  to="/store" className="header-nav-item">Store</Link>
            </Nav.Link>
            <Nav.Link as="li">
              <Link to="/membership" className="header-nav-item">Membership</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </React.Fragment>
  );
}

export default Header;