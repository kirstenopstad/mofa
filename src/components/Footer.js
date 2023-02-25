import React from "react";
import Nav from 'react-bootstrap/Nav';
import { auth } from './../firebase.js'

const Footer = () => {
  
  let loginStatusText = null;

  if (auth.currentUser == null) {
    loginStatusText = `Login`
  } else {
    loginStatusText = `Logout`
  }

  return(
    <React.Fragment>
      <div className="footer">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home" disabled>About MOFA</Nav.Link>
          <Nav.Link eventKey="link-1" disabled>FAQ</Nav.Link>
          <Nav.Link eventKey="link-2" disabled>Subscribe</Nav.Link>
        </Nav>
        <p>Built by KO</p>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link>{loginStatusText}</Nav.Link>
        </Nav>
        
      </div>
    </React.Fragment>
  );
}

export default Footer;