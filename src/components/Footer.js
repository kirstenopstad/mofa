import React from "react";
import Nav from 'react-bootstrap/Nav';
import { auth } from './../firebase.js'
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Footer = ({onLoginClick, onLogoutClick}) => {
  
  const footerNav = 
        <Nav defaultActiveKey="/home" className="flex-column">
          <Link className="footer-nav-item" to="/about">About MOFA</Link>
          <Link className="footer-nav-item" to="/faq">FAQ</Link>
          <Link className="footer-nav-item"to="/subscribe">Subscribe</Link>
        </Nav>

  const footerBrand = <p>Built by KO</p>
  
  let loginButtonText = "";
  if (auth.currentUser === null) {
    loginButtonText = <Button variant="light" onClick={onLoginClick}>Login</Button>
  } else {
    loginButtonText = <Button variant="light" onClick={onLogoutClick}>Logout</Button>
  }

  return(
    <div className="footer">
    {footerNav}
    {footerBrand}
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Item>
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