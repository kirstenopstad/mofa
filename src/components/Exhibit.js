import React from "react";
import { PropTypes } from "prop-types";

const Exhibit = ({exhibit, artworks, titles }) => {
  const {exhTitle, endDate, description } = exhibit;
  return(
    // add seed data
    // for each exh, show featured artwork & title
    <React.Fragment>
      <h3>hello</h3>
      <h3>{exhTitle}</h3>
      <img src="#" alt="prompt"/>
      <h3>Exhibition 2</h3>
      <img src="#" alt="prompt"/>
      <h3>Exhibition 3</h3>
      <img src="#" alt="prompt"/>
    </React.Fragment>
  );
}

Exhibit.propTypes = {
  exhibit: PropTypes.object,
  artworks: PropTypes.array,
  titles: PropTypes.array,
}
export default Exhibit;