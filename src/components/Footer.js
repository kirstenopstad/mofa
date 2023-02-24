import React from "react";
import Nav from 'react-bootstrap/Nav';


const Footer = () => {
  return(
    <React.Fragment>
      <div className="footer">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home" disabled>About MOFA</Nav.Link>
          <Nav.Link eventKey="link-1" disabled>FAQ</Nav.Link>
          <Nav.Link eventKey="link-2" disabled>Subscribe</Nav.Link>
        </Nav>
      </div>
    </React.Fragment>
  );
}

export default Footer;