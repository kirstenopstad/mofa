import React from "react";
import ArtworkDetail from "./ArtworkDetail";
import ExhDetail from "./ExhDetail";
import ExhList from "./ExhList";

const ExhControl = () => {
  return(
    // TODO: add logic to display all exhibits or just one
    <React.Fragment>
      <ExhList />
      <ExhDetail />
      <ArtworkDetail />
    </React.Fragment>
  );
}

export default ExhControl;