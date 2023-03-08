import React from "react";
import PlanVisit from "./PlanVisit";
import map from './../img/fake_map.png'

const Visit = () => {
  const prompt = "a google map showing the location of a fake art museum in the style of Mondrian";
  // TODO: resize image, horizontally align plan visit center, style caption
  return(
    <React.Fragment>
      <img  src={map} alt={prompt} />
      <p>{prompt}</p>
      <PlanVisit />
    </React.Fragment>
  );
}

export default Visit;