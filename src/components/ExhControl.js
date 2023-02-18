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
        <ExhList exhibitions={this.props.exhibitions}/>
        <ExhDetail />
        <ArtworkDetail />
    </React.Fragment>
    );
  }
}


// Map to props!
const mapStateToProps = state => {
  return {
    exhibitions: state.exhibitions,
  }
}

// Proptypes!
ExhControl.propTypes = {
  exhibitions: PropTypes.object,
}

// Connect wrapper
ExhControl = connect(mapStateToProps)(ExhControl)

export default ExhControl;