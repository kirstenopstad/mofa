import React from "react";
import Artwork from "./Artwork";
import Exhibit from "./Exhibit";
import { PropTypes } from "prop-types";

const ExhList = ({exh, art, titles}) => {
  return(
    // iterate through exh to display all exhibitions
    <React.Fragment>
      <h2>All Exhibitions</h2>
      {exh.map((singleExh) => 
        <div key={`exh-${singleExh.id}`}>
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