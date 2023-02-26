import React from "react";
import Nav from 'react-bootstrap/Nav';
import { auth } from './../firebase.js'
import { Link } from "react-router-dom";

const Footer = ({loggedIn}) => {
  
  const footerNav = 
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home" disabled>About MOFA</Nav.Link>
          <Nav.Link eventKey="link-1" disabled>FAQ</Nav.Link>
          <Nav.Link eventKey="link-2" disabled>Subscribe</Nav.Link>
        </Nav>

  const footerBrand = <p>Built by KO</p>
  
  // TODO: make this say "logout" if user is logged in
  return(
    <div className="footer">
    {footerNav}
    {footerBrand}
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Item>
        <Link to="/log-in">Login / Logout</Link>
      </Nav.Item>
    </Nav>
    </div>
  );
}

export default Footer;