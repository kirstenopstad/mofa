import React from "react";
import { PropTypes } from "prop-types";

const Artwork = ({ selArt, selTitles}) => {
  const { image, prompt, id } = selArt;

  let mostPopTitle = null;
  
  // if titles not null, then deconstruct & get most popular
  if (selTitles.length > 0) {
    
    // determine highest vote count
    let votesArray = [];
    selTitles.forEach(title => {
      votesArray.push(title.votes);
    });
    
    console.log(`votesArray`);
    console.log(votesArray);
    
    const mostVotes = Math.max(...votesArray);

    console.log(`mostVotes`);
    console.log(mostVotes);
    
    // get title(s) with most votes
    mostPopTitle = selTitles.filter(t => t.votes === mostVotes)[0]
  } else {
    mostPopTitle = { title: "No titles have been submitted yet" }
  }
  
  console.log(`mostPopTitle`);
  console.log(mostPopTitle);
  
  return(
    <React.Fragment>
      <img src={image} alt={prompt} className="exh-preview"/>
      <p>{prompt}</p>
      {/* TODO: show most popular title here */}
      <h4>{mostPopTitle.title} | Votes</h4>
    </React.Fragment>
  );
}

Artwork.propTypes = {
  art: PropTypes.object,
  titles: PropTypes.array,
}

export default Artwork;