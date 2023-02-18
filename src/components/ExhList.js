import React from "react";
import Artwork from "./Artwork";
import Exhibit from "./Exhibit";
import { PropTypes } from "prop-types";

const ExhList = ({exhibitions}) => {
  return(
    // add seed data list to iterate through to display multiple exhibitions
    <React.Fragment>
      <h2>All Exhibitions</h2>
      {Object.values(exhibitions).forEach((exh) => 
      <Exhibit exhibit={exh}/>
      )}
    </React.Fragment>
  );
}

ExhList.propTypes = {
  props: PropTypes.object,
}

export default ExhList;