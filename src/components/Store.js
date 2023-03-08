import React from "react";
import { PropTypes } from "prop-types";
import { exhibitions, artworks, titles } from './../ExhSeedData'
import { Button } from "react-bootstrap";

const Store = () => {
  // TODO: add functionality with prodigi to take actual print, postcard, calendar & framed print orders 
  // https://www.prodigi.com/print-api/docs/reference/#order-object
  return(
    <React.Fragment>
      <h1>Store</h1>
      <p>Please patiently await impending commercialization!</p>
      {artworks.map((art, index) => 
        <div key={index}>
          <img  src={art.image} className="store-img"/>
          <Button variant="outline-dark">Buy Now</Button>
          <hr />
        </div>
      )}
    </React.Fragment>
    
  );
}

export default Store;