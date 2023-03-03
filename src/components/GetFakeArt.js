import React, { useEffect, useState } from "react";
import axios from "axios";
import { getStorage, ref, uploadBytes } from "firebase/storage";

// calls the DALLE•2 API and adds one artwork to db

const GetFakeArt = () => {
  const [error, setError]= useState(null);
  const [isLoaded, setIsLoaded]= useState(null);
  const [fakeArtURL, setFakeArtURL]= useState(null);
  const [fakeArtRefFilename, setFakeArtRefFilename]= useState(null);
  const [fakeArtFile, setFakeArtFile]= useState(null);

  // axios getArt call using async / await
  // TODO: update with art, using NYT to save calls
  const getArt = async () => {
    try {
      let res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`)
      .then((res) => {
          setIsLoaded(true)
          setFakeArtURL(res.data.results[0].multimedia[1].url)
          console.log(`completed getArt, fakeArtURL = ${fakeArtURL}`)
        })
        setFakeArtURL(res.data.results[0].multimedia[1].url)
    } catch (error) {
      setError(`Problem: ${error.message}`)
    }
  }

  // BUILD REF FILENAME

  // get '.jpeg'
  const getFileType = (url) => {
    // console.log("getting file type")
    // console.log(`url: ${url}`)
    // get index of period
    const dotIndex = url.lastIndexOf('.')
    // get last three characters of file
    const filetype = url.slice(dotIndex, url.length)
    // return filetype (i.e. '.jpg')
    return filetype
  }
  
  // build file name
  const makeDbRefName = () => {
    // console.log("getting ref file name")
    // console.log(`fileURL: ${url}`)
    // get ext
    const ext = getFileType(fakeArtURL);
    // build ref file name w/ test
    const refFileName = 'fake-art/' + 'test' + ext
    setFakeArtRefFilename(refFileName)
    // return refFileName
  }
  
  const getImageFile = (url) => {
    fetch(url)
    // get result and turn it into a blob
    .then((res) => {
      res.blob()
      .then((blob) => {
            // console.log("getting file")
            const fileExt = getFileType(url)
            const file = new File([blob], fileExt, {type: blob.type})
            setFakeArtFile(file)
          })
      })
  }

  const uploadImageToDb = (dbRefFile, file) => {
    
    // create root ref
    const storage = getStorage();

    // create db ref for incoming file
    const imageRef = ref(storage, dbRefFile)

    // upload file to db
    uploadBytes(imageRef, file)
      .then((snapshot) => {
        // console.log('it worked! go check firebase!')
      })
  }
  // run this once, on load to get one fake artwork
  useEffect(() => {
    getArt()
  }, [])
  
  // run whenever URL is updated, get image file & make db Ref
  useEffect(() => {
    console.log('made it to makeDbRefName')
    makeDbRefName()
    console.log('made it to getImageFile')
    getImageFile()
  }, [fakeArtURL])
  
  // run when file is updated
  useEffect(() => {
    // const refName = makeDbRefName(fakeArtURL)
    uploadImageToDb(fakeArtRefFilename, fakeArtFile)
  }, [fakeArtFile])

  // display to check
  if (error) {
    return  <h1>Error: {error}</h1>
  } else if (!isLoaded) {
    return  <h1>...Loading...</h1>
  } else {
    return (
      <div>
        <img src={fakeArtURL} />
        <p>{fakeArtURL}</p>
        <p>{fakeArtURL} | {typeof(fakeArtURL)}</p>
        {/* <p>{console.log(fakeArtFile)} | {typeof(fakeArtFile)}</p> */}
        {/* <p>{console.log(fakeArtURL)} | {typeof(fakeArtRefFilename)}</p> */}
      </div>
    )
  }
}

export default GetFakeArt