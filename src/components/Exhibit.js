import React from "react";
import { PropTypes } from "prop-types";
import Artwork from "./Artwork";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Exhibit = ({exhibit, artworks, whenExhDetailClicked}) => {
  const {exhTitle, endDate, description, id } = exhibit;
  
  // TODO: only display top three images per exh

  // shows images connected to *this* exh only
  const filteredArtwork = artworks.filter(a => a.exhId === id)

  // get featured image
  const featuredArtwork = filteredArtwork[0]

  return(
    <React.Fragment>
      <Container>
      <Row className="exh">
        <Col sm={8}>
          <img src={featuredArtwork.image} alt={featuredArtwork.prompt} className="exh-preview"/>
        </Col>
        <Col sm={4} className="exh-didactic">
          <h3><b>{exhTitle}</b></h3>
          <h5><i>Ends {endDate}</i></h5>
          <p>{description}</p>
          <Button variant="outline-dark" onClick={() => whenExhDetailClicked(id)}>Exhibition Details</Button>
        </Col>
        {/* {filteredArtwork.map((art) =>
          <img key={`exh-img-${art.id}`}src={art.image} alt={art.prompt} className="exh-preview"/>
        )} */}

      </Row>
      </Container>
    </React.Fragment>
  );
}

Exhibit.propTypes = {
  exhibit: PropTypes.object,
  artworks: PropTypes.array,
  whenExhDetailClicked: PropTypes.func,
}
export default Exhibit;