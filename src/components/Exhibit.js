import React from "react";
import { PropTypes } from "prop-types";
import Artwork from "./Artwork";

const Exhibit = ({exhibit, artworks, titles}) => {
  const {exhTitle, endDate, description, id } = exhibit;
  
  // TODO: only display top three images per exh

  // shows images connected to *this* exh only
  const filteredArtwork = artworks.filter(a => a.exhId === id)

  return(
    <React.Fragment>
      <h3>{exhTitle}</h3>
      <h4>Ends {endDate}</h4>
      <p>{description}</p>
      {filteredArtwork.map((art) =>
        <img src={art.image} alt={art.prompt} className="exh-preview"/>
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