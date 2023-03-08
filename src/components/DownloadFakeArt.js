import React, { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { PropTypes } from "prop-types";
import axios from "axios";

// adds one artwork to db

  const DownloadFakeArt = ({artwork}) => {  
  // deconstruct object
  const { storageRef, url } = artwork

  // get artwork
  const file = getImageFile(url, storageRef);
  uploadImageToDb(storageRef, file);

  const getImageFile = async (url, filename) => {
    console.log("getting file")
    console.log(url)
    console.log(filename)
    const file = await axios.get(url)
    // get result URL
    fetch(url)
    .then((res) => {
      // turn it into a blob
      res.blob()
      .then((blob) => {
        // turn it into a file
        const file = new File([blob], filename, {type: blob.type})
        return file
      })
    })
  }
  
  const uploadImageToDb = (refName, file) => {
      // create root ref
      const storage = getStorage();
      // create db ref for incoming file
      const imageRef = ref(storage, refName)
      // upload file to db
      uploadBytes(imageRef, file)
      .then((snapshot) => {
        console.log('it worked! go check firebase!')
      })
    }
      
    return (
      console.log(`made it to the return`)
      )
  }


DownloadFakeArt.propTypes = {
  artwork: PropTypes.object
}
export { DownloadFakeArt }