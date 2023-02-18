import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import ArtworkDetail from "./ArtworkDetail";
import ExhDetail from "./ExhDetail";
import ExhList from "./ExhList";

// TODO: turn this back into const function
class ExhControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // this makes eslint happy - no-useless-constructors
    }
  }

  render() {

    return(
      // TODO: add logic to display all exhibits or just one
      <React.Fragment>
      <ExhList props={this.state}/>
      <ExhDetail />
      <ArtworkDetail />
    </React.Fragment>
    );
  }
}


// Map to props!
const mapStateToProps = state => {
  return {
    // postList: state.postList,
  }
}

// Proptypes!
ExhControl.propTypes = {
  // postList: PropTypes.object,
}

// Connect wrapper
ExhControl = connect(mapStateToProps)(ExhControl)

export default ExhControl;