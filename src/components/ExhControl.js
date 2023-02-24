import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import ArtworkDetail from "./ArtworkDetail";
import ExhDetail from "./ExhDetail";
import ExhList from "./ExhList";
import seedData from './../ExhSeedData'

const ExhControl = () => {

  return(
    // TODO: add logic to display all exhibits or just one
    <React.Fragment>
      <ExhList exhibitions={seedData}/>
      <ExhDetail />
      <ArtworkDetail />
  </React.Fragment>
  );
}

// Proptypes!
ExhControl.propTypes = {
  exhibitions: PropTypes.object,
}


export default ExhControl;