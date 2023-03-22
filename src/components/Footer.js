import React from "react";
import Nav from 'react-bootstrap/Nav';
import { auth } from './../firebase.js'
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import Button from "react-bootstrap/Button";

const Footer = ({onLoginClick, onLogoutClick}) => {
  
  const footerNav = 
        <Nav defaultActiveKey="/home" className="flex-column">
            <Link to="/about" className="footer-nav-item">About MOFA</Link>
            <Link to="/faq" className="footer-nav-item">FAQ</Link>
            <Link to="/subscribe" className="footer-nav-item">Subscribe</Link>
        </Nav>

  const footerBrand = <a href="https://built-by-ko.web.app/" className="footer-nav-item">Built by KO</a>
  
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