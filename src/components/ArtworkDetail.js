import React from "react";
import { PropTypes } from "prop-types";
import closeIcon from './../img/icons/x-lg.svg'

const ArtworkDetail = ({ selectedArt, titles, onClose }) => {
  const { image, prompt, id } = selectedArt;

  // shows titles connected to *this* artwork only
  const selTitles = titles.filter(t => t.artworkId === id)

  // TODO: refactor to move mostPopVote function to helper, also appears in Artwork

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
      <img onClick={() => onClose()} src={closeIcon}/>
      <h2>Selected Artwork</h2>
      <img src={image} alt="prompt" className="art-detail"/>

      <h4>{mostPopTitle.title}</h4>

      <ul>
        {selTitles.map((title) =>
          <li key={title.id}>{title.title} | {title.votes} votes</li>
        )}
      </ul>
      <form>Add Title
        <input type="text" />
        <button type="submit">Submit</button>
      </form>

    </React.Fragment>
  );
}
ArtworkDetail.propTypes = {
  selectedArt: PropTypes.object,
  titles: PropTypes.array,
  onClose: PropTypes.func
}
export default ArtworkDetail;