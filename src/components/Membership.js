import React from "react";
import Button from "react-bootstrap/Button";
import patrons from "./../img/patrons.png"

const Membership = () => {
  // TODO: integrate with PayPal API or Patreon
  const prompt = "a photo of two patrons in a gallery at a fake art museum daylight"
  return(
    <div className="membership">
      <img src={patrons} alt={prompt} />
      <p><i>{prompt}</i></p>
      <h1>Membership</h1>
      <p>MoFA is a wep application built to provoke conversations around using AI to generate art. Memberships support the ongoing development of fake art.</p>
      <Button variant="outline-dark">Become a Member Today</Button>
    </div>
  );
}

export default Membership;