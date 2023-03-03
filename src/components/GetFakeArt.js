import React, { useEffect, useState } from "react";
import axios from "axios";
import { getStorage, ref, uploadBytes } from "firebase/storage";

// calls the DALLE•2 API and adds one artwork to db

const GetFakeArt = () => {
  const [error, setError]= useState(null);
  const [isLoaded, setIsLoaded]= useState(false);
  const [isUploaded, setIsUploaded]= useState(false);
  const [fakeArtURL, setFakeArtURL]= useState("");
  const [fakeArtRef, setFakeArtRef]= useState(null);
  const [fakeArtFile, setFakeArtFile]= useState(null);

  // axios getArt call using async / await
  // TODO: update with art, using NYT to save calls
  const getArt = async () => {
    try {
      let res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`)
      const resURL = res.data.results[0].multimedia[1].url;
      setIsLoaded(true);
      // // get fake art URL
      setFakeArtURL(resURL);
      const filename = makeDbRefName('test')
      console.log(filename)
      const filetype = getFileType(resURL)
      console.log(filetype)
      const refName = addDbRefExt(filename, filetype)
      console.log(refName)
      // setFakeArtRef(refName)
      const file = getImageFile(resURL, refName)

      
      } catch (error) {
        setError(`Problem: ${error.message}`)
      }
    }
    
  // BUILD REF FILENAME
  // get '.jpeg'
  const getFileType = (url) => {
    console.log("getting file type")
    // get index of period
    const dotIndex = url.lastIndexOf('.')
    // get last three characters of file
    const filetype = url.slice(dotIndex, url.length)
    // return filetype (i.e. '.jpg')
    // setFakeArtFiletype(filetype)
    return filetype
  }
    
  // build file name without extension
  const makeDbRefName = (imageName) => {
    console.log("buidling ref file name")
    // build ref file name w/ test
    const filename = 'fake-art/' + imageName
    // console.log(refFilename)
    // setFakeArtRefFilename(refFilename)
    return filename
  }

  // add extension
  const addDbRefExt = (filename, filetype) => {
    return filename + filetype
  }
  
  const getImageFile = (url, filename) => {
    console.log("getting file")
    console.log(url)
    console.log(filename)
    // get result URL
    fetch(url)
    .then((res) => {
      // turn it into a blob
      res.blob()
      .then((blob) => {
        // turn it into a file
        const file = new File([blob], filename, {type: blob.type})
        console.log(file)
        // setFakeArtFile(file)
        uploadImageToDb(filename, file)
        // return file 
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
      
      // run this once on load
      useEffect(() => {
        // get fake artwork & add to db
        getArt();
      }, [])

  // display to check
  if (error) {
    return  <h1>Error: {error}</h1>
  } else if (!isLoaded) {
    return  <h1>...Loading...</h1>
  } else {
    return (
      <div>
        <img src={fakeArtURL} />
        <p>This image has now been added to the datebase.</p>
      </div>
    )
  }
}

export default GetFakeArt