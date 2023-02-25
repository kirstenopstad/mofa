import React, {useEffect, useState} from "react";
// import PropTypes from "prop-types";
import ArtworkDetail from "./ArtworkDetail";
import ExhDetail from "./ExhDetail";
import ExhList from "./ExhList";
import { db } from './../firebase'
import { collection, doc, addDoc, updateDoc, onSnapshot } from "firebase/firestore";
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

  // promise utilities
  const [error, setError] = useState(null);

  // Firebase comms
  useEffect(() => {
    const unSub = onSnapshot(
      collection(db, "titles"),
      (collectionSnapshot) => {
        const results = [];
        collectionSnapshot.forEach((doc) => {
          results.push({
            ...doc.data(),
            id: doc.id
          })
        })
        setTitleList(results);
      },
      (error) => {
        setError(error.message);
      }
    );
    return () => unSub();
  }, []);

  // select functionality
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

  // close functionality
  const handleClose = () => {
    setShowArtworkDetail(false)
    setShowExhDetail(false)
    setShowExhList(true)
  }

  // add title functionality
  const handleTitleSubmit = async (title) => {
    const titleCollectionRef = collection(db, "titles");
    await addDoc(titleCollectionRef, title)
  }
  
  // add title functionality
  const handleTitleVote = async (titleToVoteOn) => {
    const titleRef = doc(db, "titles", titleToVoteOn.id);
    await updateDoc(titleRef, titleToVoteOn)
    const newTitleRef = doc(db, "titles", titleToVoteOn.id);
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
                onTitleSubmit={handleTitleSubmit}
                onVote={handleTitleVote}
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