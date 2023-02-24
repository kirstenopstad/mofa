import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import ArtworkDetail from "./ArtworkDetail";
import ExhDetail from "./ExhDetail";
import ExhList from "./ExhList";
import seedData from './../ExhSeedData'


// TODO: turn this back into const function
const ExhControl = () => {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // this makes eslint happy - no-useless-constructors
  //   }
  // }

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