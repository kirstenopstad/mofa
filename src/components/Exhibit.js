import React from "react";
import { PropTypes } from "prop-types";
import Artwork from "./Artwork";

const Exhibit = ({exhibit, artworks, titles}) => {
  const {exhTitle, endDate, description } = exhibit;
  
  // TODO: only display top three images per exh

  return(
    <React.Fragment>
      <h3>{exhTitle}</h3>
      <h4>Ends {endDate}</h4>
      <p>{description}</p>
      {/* TODO: refactor so it only shows images connected to *this* exh */}
      {artworks.map((art) =>
        <img src={art.image} alt="prompt"/>
      )}
      <br />
      {/* TODO: Conditional rendering, is clicked show ExhDetail */}
      <button>Exhibition Details</button>
    </React.Fragment>
  );
}

Exhibit.propTypes = {
  exhibit: PropTypes.object,
  artworks: PropTypes.array,
  titles: PropTypes.array,
}
export default Exhibit;