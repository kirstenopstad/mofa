import React, { useEffect, useState } from "react";
import axios from "axios";

// calls the DALLE•2 API and adds one artwork to db

const GetFakeArt = () => {
  const [error, setError]= useState(null);
  const [isLoaded, setIsLoaded]= useState(null);
  const [fakeArt, setFakeArt]= useState(null);

  // axios getArt call using async / await
  // TODO: update with art, using NYT to save calls
  const getArt = async () => {
    try {
      let res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`)
      setIsLoaded(true)
      setFakeArt(res.data.results)
    } catch (error) {
      setError(`Problem: ${error.message}`)
    }
  }

  // run this once, on load
  useEffect(() => {
    getArt();
  }, [])

  // temporarily display to check
  if (error) {
    return  <h1>Error: {error}</h1>
  } else if (!isLoaded) {
    return  <h1>...Loading...</h1>
  } else {
    return <img src={fakeArt[0].multimedia[1].url} />
  }
}

export default GetFakeArt