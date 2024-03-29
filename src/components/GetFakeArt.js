import React, { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { PropTypes } from "prop-types";
import axios from "axios";
// requirements for proxy
import { proxy } from './../firebaseProxy'


// calls the DALLE•2 API and adds one artwork to db
const GetFakeArt = ({handleGenerateArt}) => {  
  const [error, setError]= useState(null);
  const [isLoaded, setIsLoaded]= useState(false);
  const [fakeArtURL, setFakeArtURL]= useState("");

  // axios config for OpenAI
  const config = {
    headers: { 
      Authorization: `Bearer ${process.env.REACT_APP_DALLE2_BEARER_TOKEN}`,
    }
  };
  
  const prompt = "purple toothpaste in the style of Andy Warhol";
  
  const bodyParameters = {
    // "prompt": "painting of a diner at night in the style of Renoir",
    "prompt": prompt,
    "n": 1,
    "size": "1024x1024"
  };
  
  // axios getArt call using async / await
  // TODO: update with art, using NYT to save calls
  const getArt = async () => {
    try {
      let res = await axios.post( 
        'https://api.openai.com/v1/images/generations',
        bodyParameters,
        config
        )
        const resURL =  res.data.data[0].url;
        setIsLoaded(true);
        // get fake art URL
        setFakeArtURL(resURL);
        const filename = makeDbRefName(bodyParameters.prompt)
        // console.log(filename)
        const filetype = getFileType(resURL)
        const refName = addDbRefExt(filename, filetype)
        // setFakeArtRef(refName)
        getImageFile(resURL, refName) // disabled due to CORS issue
        addArtDataToDb(resURL, refName, prompt) 
        
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
      const filetype = url.slice(dotIndex, dotIndex + 4)
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
  
  // add art data to db
  const addArtDataToDb = (url, fileRef, prompt) => {
    handleGenerateArt({
      url: url,
      storageRef: fileRef,
      prompt: prompt,
      isSaved: false,
    })    
  }

  // BUG: CORS issue with openAI call
  // Access to fetch at 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-IyCMwj0RWWvhDkV14UomDgos/user-9EsOmgI1HmI0SzBiND2o5SSU/img-h5DVe19ZoJWs0zIUikVAWkjZ.png?st=2023-03-03T23%3A23%3A26Z&se=2023-03-04T01%3A23%3A26Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-04T00%3A14%3A50Z&ske=2023-03-05T00%3A14%3A50Z&sks=b&skv=2021-08-06&sig=d4SHwtN5Zog%2BWlQ1VHoc7ixYptIUmUNpUQoilqj8K%2Bo%3D' from origin 'http://localhost:3001' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
  const getImageFile = async (url, filename) => {
    console.log("getting file")
    console.log(url)
    console.log(filename)
    const file = await axios.get(url)
    console.log(file) 
    // get result URL
    proxy.fetch(url)
    .then((res) => {
      // turn it into a blob
      res.blob()
      .then((blob) => {
        // turn it into a file
        const file = new File([blob], filename, {type: blob.type})
        console.log(file)    
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
    // get fake artwork & add data to db
    getArt();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // display to check
  if (error) {
    return  <h1>Error: {error}</h1>
  } else if (!isLoaded) {
    return  <h1>...Loading...</h1>
  } else {
    return (
      <div>
        <img src={fakeArtURL} alt="fake art"/>
        <p>This image has now been added to the datebase.</p>
      </div>
    )
  }
}

GetFakeArt.propTypes = {
  handleGenerateArt: PropTypes.func
}
export default GetFakeArt