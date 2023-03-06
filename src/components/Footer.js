import React from "react";
import Nav from 'react-bootstrap/Nav';
import { auth } from './../firebase.js'
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Button } from "react-bootstrap";

const Footer = ({onLoginClick, onLogoutClick}) => {
  
  const footerNav = 
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home" disabled>About MOFA</Nav.Link>
          <Nav.Link eventKey="link-1" disabled>FAQ</Nav.Link>
          <Nav.Link eventKey="link-2" disabled>Subscribe</Nav.Link>
        </Nav>

  const footerBrand = <p>Built by KO</p>
  
  // TODO: make this say "logout" if user is logged in
  let loginButtonText = "";
  if (auth.currentUser === null) {
    loginButtonText = <Button onClick={onLoginClick}>Login</Button>
  } else {
    loginButtonText = <Button onClick={onLogoutClick}>Logout</Button>
  }

  return(
    <div className="footer">
    {footerNav}
    {footerBrand}
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Item>
        {/* <Link to="/log-in">{loginControlText}</Link> */}
        {loginButtonText}
      </Nav.Item>
    </Nav>
    </div>
  );
}

Footer.propTypes = {
  onLoginClick: PropTypes.func,
  onClose: PropTypes.func,
}

export default Footer;