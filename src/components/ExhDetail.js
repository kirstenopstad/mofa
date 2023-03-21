import React from "react";
import Artwork from "./Artwork";
import { PropTypes } from "prop-types";
import closeIcon from './../img/icons/x-lg.svg'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';

const ExhDetail = ({ exh, art, titles, onArtworkDetailClick, onClose}) => {
  const {exhTitle, endDate, description, id } = exh;

  // shows images connected to *this* exh only
  const filteredArtwork = art.filter(a => a.exhId === id)

  return(
    // add seed data 
    // display all artwork in a single given exhibition
    <Container>
          <img onClick={() => onClose()} src={closeIcon} className="close-icon" alt="close icon"/>
        <h2>{exhTitle}</h2>
        <h4><i>Ends {endDate}</i></h4>
        <p>{description}</p>
      {filteredArtwork.map((art) => 
      <Row className="exh" key={`artwork-${art.id}`} >
          <Artwork 
          selArt={art} 
          titles={titles}
          whenArtworkClick={onArtworkDetailClick}/>
      </Row>    
          )}
    </Container>
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