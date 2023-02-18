import React from "react";
import { PropTypes } from "prop-types";

const Exhibit = ({exhibit}) => {
  const {exhTitle, endDate, description, artworks} = exhibit
  return(
    // add seed data
    // for each exh, show featured artwork & title
    <React.Fragment>
      
      <h3>{exhTitle}</h3>
      {/* <img src="#" alt="prompt"/>
      <h3>Exhibition 2</h3>
      <img src="#" alt="prompt"/>
      <h3>Exhibition 3</h3>
      <img src="#" alt="prompt"/> */}
    </React.Fragment>
  );
}

Exhibit.propTypes = {
  props: PropTypes.object,
}
export default Exhibit;