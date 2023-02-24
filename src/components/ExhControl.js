import React, {useState} from "react";
import { connect } from 'react-redux';
// import PropTypes from "prop-types";
import ArtworkDetail from "./ArtworkDetail";
import ExhDetail from "./ExhDetail";
import ExhList from "./ExhList";
import { exhibitions, artworks, titles } from './../ExhSeedData'

const ExhControl = () => {
  const [exhList, setExhList] = useState(exhibitions);
  const [artList, setArtList] = useState(artworks);
  const [titleList, setTitleList] = useState(titles);
  // TODO: update this so it's dynamically setting obj
  const [selectedExh, setSelectedExh] = useState(exhList[0]);
  const [selectedArt, setSelectedArt] = useState(artList[0]);


  const handleSelectExhibition = (id) => {
    // go find selection
    const selectedExh = exhList.filter(e => e.id === id);
    // set selected
    setSelectedExh(selectedExh)
  } 

  const handleSelectArtwork = (id) => {
    // go find selection
    const selectedArt = artList.filter(a => a.id === id);
    // set selected
    setSelectedArt(selectedArt)
  } 

  return(
    // TODO: add logic to display all exhibits or just one
    <React.Fragment>
      <ExhList exh={exhList} art={artList} titles={titleList}/>
      <ExhDetail exh={selectedExh} art={artList} titles={titleList}/>
      <ArtworkDetail selectedArt={selectedArt} titles={titleList}/>
  </React.Fragment>
  );
}

// Proptypes!
// ExhControl.propTypes = {
//   exhData: PropTypes.object,
// }


export default ExhControl;