import React, {useState} from "react";
import { connect } from 'react-redux';
// import PropTypes from "prop-types";
import ArtworkDetail from "./ArtworkDetail";
import ExhDetail from "./ExhDetail";
import ExhList from "./ExhList";
import { exhibitions, artworks, titles } from './../ExhSeedData'

const ExhControl = () => {
  // lists
  const [exhList, setExhList] = useState(exhibitions);
  const [artList, setArtList] = useState(artworks);
  const [titleList, setTitleList] = useState(titles);

  // selected
  // TODO: update this so it's dynamically setting obj
  const [selectedExh, setSelectedExh] = useState({});
  const [selectedArt, setSelectedArt] = useState(artList[0]);

  // local state for conditional rendering
  const [showExhList, setShowExhList] = useState(true);
  const [showExhDetail, setShowExhDetail] = useState(false);
  const [showArtworkDetail, setShowArtworkDetail] = useState(false);


  const handleSelectExhibition = (id) => {
    // go find selection
    const selectedExh = exhList.filter(e => e.id === id)[0];
    // set selected
    setSelectedExh(selectedExh)
    // display exh detail
    setShowExhDetail(true)
    // hide exhList
    setShowExhList(false)
  } 
  
  const handleSelectArtwork = (id) => {
    // go find selection
    const selectedArt = artList.filter(a => a.id === id)[0];
    // set selected
    setSelectedArt(selectedArt)
    // display detail
    setShowArtworkDetail(true)
    // hide exhList & exh detail
    setShowExhDetail(false)
    setShowExhList(false)
  } 

  const handleClose = () => {
    setShowArtworkDetail(false)
    setShowExhDetail(false)
    setShowExhList(true)
  }

  let content = null;
  if (showExhList) {
    content = <ExhList 
                exh={exhList} 
                art={artList} 
                titles={titleList} 
                onExhDetailClick={handleSelectExhibition}/>
  } else if (!showExhList && showExhDetail) {
    content = <ExhDetail 
                exh={selectedExh} 
                art={artList} 
                titles={titleList}
                onArtworkDetailClick={handleSelectArtwork}
                onClose={handleClose}/>
  } else if (showArtworkDetail) {
    content = <ArtworkDetail 
                selectedArt={selectedArt} 
                titles={titleList}
                onClose={handleClose}/>
  }
  return(
    // TODO: add logic to display all exhibits or just one
    <React.Fragment>
      {content}
    </React.Fragment>
  );
}

// Proptypes!
// ExhControl.propTypes = {
//   exhData: PropTypes.object,
// }


export default ExhControl;