import React from "react";
import Artwork from "./Artwork";
import Exhibit from "./Exhibit";

const ExhList = () => {
  return(
    // add seed data list to iterate through to display multiple exhibitions
    <React.Fragment>
      <h2>All Exhibitions</h2>
      <Exhibit />
    </React.Fragment>
  );
}

export default ExhList;