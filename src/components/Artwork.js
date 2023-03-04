import React from "react";
import { PropTypes } from "prop-types";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Artwork = ({ selArt, titles, whenArtworkClick }) => {
  const { image, prompt, id } = selArt;

  // shows titles connected to *this* artwork only
  const selTitles = titles.filter(t => t.artworkId === id)

  let mostPopTitle = null;
  
  // if titles not null, then deconstruct & get most popular
  if (selTitles.length > 0) {
    
    // determine highest vote count
    let votesArray = [];
    selTitles.forEach(title => {
      votesArray.push(title.votes);
    });
        
    const mostVotes = Math.max(...votesArray);
    
    // get title(s) with most votes
    mostPopTitle = selTitles.filter(t => t.votes === mostVotes)[0]
  } else {
    mostPopTitle = { title: "No titles have been submitted yet." }
  }
    
  return(
    <React.Fragment>
      <Col sm={8}>
        <img src={image} alt={prompt} className="exh-preview"/>
      </Col>
      <Col sm={4} className="exh-didactic">
        <p>{prompt}</p>
        {/* TODO: show most popular title here */}
        <h4>{mostPopTitle.title}</h4>
        <Button variant="outline-dark" onClick={() => whenArtworkClick(id)}>Artwork Detail</Button>
      </Col>
    </React.Fragment>
  );
}

Artwork.propTypes = {
  art: PropTypes.object,
  titles: PropTypes.array,
  whenArtworkClick: PropTypes.func
}

export default Artwork;