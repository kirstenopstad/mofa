import React from "react";
import Artwork from "./Artwork";
import { PropTypes } from "prop-types";
import closeIcon from './../img/icons/x-lg.svg'

const ExhDetail = ({ exh, art, titles, onArtworkDetailClick, onClose}) => {
  const {exhTitle, endDate, description, id } = exh;

  // shows images connected to *this* exh only
  const filteredArtwork = art.filter(a => a.exhId === id)

  let selArtTitles = null;

  
  return(
    // add seed data 
    // display all artwork in a single given exhibition
    <React.Fragment>
      <img onClick={() => onClose()} src={closeIcon}/>
      <h2>Selected Exhibition</h2>
      <h3>{exhTitle}</h3>
      <h4>Ends {endDate}</h4>
      <p>{description}</p>
      {filteredArtwork.map((art) => 
          <Artwork 
            key={`artwork-${art.id}`} 
            selArt={art} 
            titles={titles}
            whenArtworkClick={onArtworkDetailClick}/>
      )}
      <br />
    </React.Fragment>
  );
}

ExhDetail.propTypes = {
  exh: PropTypes.object,
  art: PropTypes.array,
  titles: PropTypes.array,
  onArtworkDetailClick: PropTypes.func,
  onClose: PropTypes.func
}
export default ExhDetail;