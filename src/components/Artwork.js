import React from "react";
import { PropTypes } from "prop-types";

const Artwork = ({ selArt, titles }) => {
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
      <img src={image} alt={prompt} className="exh-preview"/>
      <p>{prompt}</p>
      {/* TODO: show most popular title here */}
      <h4>{mostPopTitle.title}</h4>
    </React.Fragment>
  );
}

Artwork.propTypes = {
  art: PropTypes.object,
  titles: PropTypes.array,
}

export default Artwork;