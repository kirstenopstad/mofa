import React from "react";
import Button from "react-bootstrap/Button"
import subscribe from "./../img/subscribe.png"

const Subscribe = () => {
  const prompt = `a photo of two patrons in a gallery at a fake art museum at night`
  return(
    <div className="subscribe">
      <img src={subscribe} alt={prompt} />
      <h1>Subscribe</h1>
      <p>If you'd like to know when new fake art has been added to the collection or features have been added to the museum, please sign up for our email newsletter.</p>
      <Button variant="outline-dark">Subscribe</Button>
    </div>

  );
}

export default Subscribe;