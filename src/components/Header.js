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
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </React.Fragment>
  );
}

export default Header;