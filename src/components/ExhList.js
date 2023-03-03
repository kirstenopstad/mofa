import React from "react";
import Artwork from "./Artwork";
import Exhibit from "./Exhibit";
import { PropTypes } from "prop-types";

const ExhList = ({exh, art, titles, onExhDetailClick}) => {
  return(
    // iterate through exh to display all exhibitions
    <React.Fragment>
      <h2>All Exhibitions</h2>
      {exh.map((singleExh) => 
          <Exhibit 
            key={`exh-${singleExh.id}`}
            exhibit={singleExh} 
            artworks={art} 
            titles={titles} 
            whenExhDetailClicked={onExhDetailClick} />
      )}
    </React.Fragment>
  );
}

ExhList.propTypes = {
  exh: PropTypes.array,
  art: PropTypes.array,
  titles: PropTypes.array,
  onExhDetailClick: PropTypes.func,
}

export default ExhList;