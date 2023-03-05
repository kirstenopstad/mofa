import React, {useState} from "react";
import { PropTypes } from "prop-types";
import {auth} from './../firebase.js'
import closeIcon from './../img/icons/x-lg.svg'
import upVoteIcon from './../img/icons/arrow-up.svg'
import downVoteIcon from './../img/icons/arrow-down.svg'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';


const ArtworkDetail = (
  { selectedArt, titles, userVotes, onClose, onTitleSubmit, onVote, onLogFirstVote, onLogUserVote }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorLink, setErrorLink] = useState(null);
  const [inputPlaceholder, setinputPlaceholder] = useState("Title");
  const { image, prompt, id } = selectedArt;

  // shows titles connected to *this* artwork only
  const selTitles = titles.filter(t => t.artworkId === id)

  // TODO: refactor to move mostPopVote function to helper, also appears in Artwork
  let mostPopTitle = null;
  // if titles not null, then deconstruct & get most popular
  if (selTitles.length > 0) {
    
    // determine highest vote count
    let votesArray = [];
    selTitles.forEach(title => {
      votesArray.push(title.votes);
    });
        
    const mostVotes = Math.max(...votesArray);
    
    // get title(s) with most votes
    mostPopTitle = selTitles.filter(t => t.votes === mostVotes)[0]
  } else {
    mostPopTitle = { title: "No titles have been submitted yet." }
  }
  
  const handleTitleSubmission = (e) => {
    e.preventDefault();
    // if not signed in, return error
    if (auth.currentUser == null) {
      setErrorMessage("You must be logged in to submit a title.")
      setErrorLink(<Link to="/log-in">Login</Link>)
    } else {
      // if valid value (str of at least one character)
      if (validateTitle(e.target.title.value)) {
        onTitleSubmit({
          artworkId: id,
          title: e.target.title.value,
          votes: 1,
        })
        e.target.title.value = null;
      } else {
        setErrorMessage("Title must include at least one character.")
      }
    }
  }

  const handleUpVote = (title) => {
    // TODO: check if user has voted on this one
    if (auth.currentUser == null) {
      setErrorMessage("You must be logged in to vote.")
      setErrorLink(<Link to="/log-in">Login</Link>)
    } else {
      onVote({
        ...title,
        votes: title.votes + 1
      })
      handleLogUserVote(title)
    }
  }
  
  const handleDownVote = (title) => {
    // TODO: check if user has voted on this one
    if (auth.currentUser == null) {
      setErrorMessage("You must be logged in to vote.")
      setErrorLink(<Link to="/log-in">Login</Link>)
    } else {
      onVote({
        ...title,
        votes: title.votes - 1 
      })
      handleLogUserVote(title)
    }
  }

  const handleLogUserVote = (title) => {
    let userVotesToUpdate = userVotes.filter(u => u.userId === auth.currentUser.uid)[0]
    // add title.id to titlesVotedOn array 
    if (!userVotesToUpdate) {
      // create a new userVotes doc
      // const votedOnArray = []
      userVotesToUpdate = {
        userId: auth.currentUser.uid,
        titlesVotedOn: [title.id],
      }
      onLogFirstVote(userVotesToUpdate)
    } else {
      if (validateVote(userVotesToUpdate, title)) {
        const votedOnArray = userVotesToUpdate.titlesVotedOn;
        onLogUserVote({
          ...userVotesToUpdate,
          titlesVotedOn: votedOnArray.push(title.id),
        })
      } else {
        console.log(`error! user has already voted on this title`)
      }
    }
  }

  const validateVote = (userVotes, title) => {
    if (!userVotes.titlesVotedOn.includes(title.id)) {
      return true
    } 
  }

  const validateTitle = (titleVal) => {
    // if field is empty
    if (titleVal.length < 1) {
      return false
    } else {
      return true
    }
  }

  return(
    <React.Fragment>

      <Container>
      <Row>
        <Col sm={12}>
          <img onClick={() => onClose()} src={closeIcon} className="close-icon"/>
        </Col>
    
        <img src={image} alt="prompt" className="artwork-detail"/>
        <h4>{mostPopTitle.title}</h4>
        
        <Col>
        {errorMessage} {errorLink}
        <ListGroup variant="flush">
            {selTitles.map((title) =>
              <ListGroup.Item  key={title.id}>
                <Row className="title-entry">
                  <Col xs="auto">
                    <img onClick={() => handleUpVote(title)} src={upVoteIcon} alt="up vote"/>
                    <img onClick={() => handleDownVote(title)} src={downVoteIcon} alt="down vote"/>
                  </Col>
                  <Col xs="auto">{title.title} </Col>
                  <Col xs="auto">{title.votes} votes</Col>
                </Row>
                </ListGroup.Item>
            )}
          </ListGroup>
          <Form onSubmit={handleTitleSubmission} className="title-form">
            <Row className="align-items-center">
              <Col xs="auto">
                <Form.Label className="mb-2">Add Title</Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Control className="mb-2" type="text" name='title' placeholder={inputPlaceholder} />
              </Col>
              <Col xs="auto">
                <Button  className="mb-2" variant="dark" type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      </Container>

    </React.Fragment>
  );
}
ArtworkDetail.propTypes = {
  selectedArt: PropTypes.object,
  titles: PropTypes.array,
  userVotes: PropTypes.array,
  onClose: PropTypes.func,
  onTitleSubmit: PropTypes.func,
  onVote: PropTypes.func,
  onLogFirstVote: PropTypes.func,
  onLogUserVote: PropTypes.func
}
export default ArtworkDetail;