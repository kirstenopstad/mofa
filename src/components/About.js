import React, {useState} from "react";
import Button from "react-bootstrap/Button"
import Carousel from 'react-bootstrap/Carousel';
import about from "./../img/about.png"
import about1 from "./../img/about1.png"
import about2 from "./../img/about2.png"

const About = () => {
  const [voteResponse, setVoteResponse] = useState(null)
  const prompt = "a photo of an entrance to a museum branded with the word MoFA"

  const handleYesClick = () => {
    console.log("made it")
    setVoteResponse(`Thanks! I appreciate it.`)
  }
  const handleNoClick = () => {
    setVoteResponse(`Hey, thanks for your honesty.`)
  }

  return(
    <div className="about">
      <Carousel>
        <Carousel.Item>
          <img src={about} alt={prompt} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={about1} alt={prompt} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={about2} alt={prompt} />
        </Carousel.Item>
      </Carousel>
      <p><i>{prompt}</i></p>
      <div>

        <h1>About</h1>
        <h2>What is MoFA?</h2>
        <p>
          MoFA (the Museum of Fake Art) is a culminating project demonstrating knowledge of full stack development. The project integrates personal interests in art, creativity and criticism.
        </p>
        <p>
          MoFA seeks to recreate the user experience of visiting a art musuem website with completely AI-generated artwork. By presenting AI-generated artwork in a format typically reserved for fine art, the application intends to provoke conversation around the following questions:
        </p>
        <ul>
          <li>
            what makes art "real" or "fake"?
          </li>
          <li>
            is it possible to have a "real" human experiences with "fake" art?
          </li>
          <li>
            what are the social / cultural / human implications of the development of generative AI?
          </li>

        </ul>
        <h2>What Does it Do?</h2>
        <p>
          MoFa shows visitors works of curated fake art and invites to engage with the artwork by offering the ability to title artworks and vote on which title they like best.
        </p>
        <h2>Who is it For?</h2>
        <p>
          MoFA is for folks interested in the intersections of art, creativity and technology. 
          <br />
          It's for you! Do you like it? 
          <Button variant="outline-dark" size="sm" onClick={handleYesClick}>yes</Button>
          <Button variant="outline-dark" size="sm" onClick={handleNoClick}>no</Button>
          {` `}<i>{voteResponse}</i>
        </p>
      </div>
    </div>
  );
}

export default About;