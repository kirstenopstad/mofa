import React from "react";
import Artwork from "./Artwork";
import Exhibit from "./Exhibit";
import { PropTypes } from "prop-types";

const ExhList = ({exh, art, titles}) => {
  return(
    // add seed data list to iterate through to display multiple exhibitions
    <React.Fragment>
      <h2>All Exhibitions</h2>
      {console.log(exh)}
      {exh.forEach((singleExh) => 
      <div>
        {console.log(singleExh)}
        <p>1</p>
        // TODO: add logic to only pass relevant artworks and titles to each exh
        <Exhibit exhibit={singleExh} artworks={art} titles={titles} />
      </div>
      )}
    </React.Fragment>
  );
}

ExhList.propTypes = {
  exh: PropTypes.array,
  art: PropTypes.array,
  titles: PropTypes.array,
}

export default ExhList;