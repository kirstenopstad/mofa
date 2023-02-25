import React, {useState} from "react";
import { PropTypes } from "prop-types";
import closeIcon from './../img/icons/x-lg.svg'

const ArtworkDetail = ({ selectedArt, titles, onClose, onTitleSubmit }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [inputPlaceholder, setinputPlaceholder] = useState("Title");
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
  
  const handleTitleSubmission = (e) => {
    e.preventDefault();
    console.log(e.target.title.value)
    console.log(e.target.title.value.length)
    // if valid value (str of at least one character)
    if (validateTitle(e.target.title.value)) {
      console.log("success")
      onTitleSubmit({
        artworkId: id,
        title: e.target.title.value,
        votes: 1,
      })
      e.target.title.value = null;
    } else {
      console.log("error")
      setErrorMessage("Title must include at least one character.")
    }
    
  }

  const validateTitle = (titleVal) => {
    // if field is empty
    if (titleVal.length < 1) {
      return false
    } else {
      return true
    }
  }

  return(
    <React.Fragment>
      <img onClick={() => onClose()} src={closeIcon}/>
      <h2>Selected Artwork</h2>
      <img src={image} alt="prompt" className="art-detail"/>

      <h4>{mostPopTitle.title}</h4>
        {errorMessage}
      <ul>
        {selTitles.map((title) =>
          <li key={title.id}>{title.title} | {title.votes} votes</li>
        )}
      </ul>
      <form onSubmit={handleTitleSubmission}>Add Title
        <input 
          type="text" 
          name="title"
          placeholder={inputPlaceholder}/>
        <button type="submit">Submit</button>
      </form>

    </React.Fragment>
  );
}
ArtworkDetail.propTypes = {
  selectedArt: PropTypes.object,
  titles: PropTypes.array,
  onClose: PropTypes.func,
  onTitleSubmit: PropTypes.func
}
export default ArtworkDetail;