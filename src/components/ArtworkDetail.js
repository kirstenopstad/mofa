import React from "react";

const ArtworkDetail = () => {
  return(
    // add seed data to display artwork detail
    <React.Fragment>
      <h2>Selected Artwork</h2>
      <img src="#" alt="prompt"/>
      <h4>Most Popular Title | Votes</h4>
      <ul> Alternates
        <li>Title | Votes</li>
        <li>Title | Votes</li>
        <li>Title | Votes</li>
        <li>Title | Votes</li>
        <li>Title | Votes</li>
      </ul>
      <form>Add Title
        <input type="text" />
        <button type="submit">Submit</button>
      </form>

    </React.Fragment>
  );
}

export default ArtworkDetail;