import React from "react";
import { connect } from 'react-redux';
// import PropTypes from "prop-types";
import ArtworkDetail from "./ArtworkDetail";
import ExhDetail from "./ExhDetail";
import ExhList from "./ExhList";
import { exhibitions, artworks, titles } from './../ExhSeedData'

const ExhControl = () => {

  return(
    // TODO: add logic to display all exhibits or just one
    <React.Fragment>
      <ExhList exh={exhibitions} art={artworks} titles={titles}/>
      {/* <ExhDetail />
      <ArtworkDetail /> */}
  </React.Fragment>
  );
}

// Proptypes!
// ExhControl.propTypes = {
//   exhData: PropTypes.object,
// }


export default ExhControl;