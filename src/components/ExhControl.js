import React from "react";
import ExhDetail from "./ExhDetail";
import ExhList from "./ExhList";

const ExhControl = () => {
  return(
    // TODO: add logic to display all exhibits or just one
    <React.Fragment>
      <ExhList />
      <ExhDetail />
    </React.Fragment>
  );
}

export default ExhControl;