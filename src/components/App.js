import React, {useState} from 'react';
import './App.css';
import ExhControl from './ExhControl';
import LoginControl from './LoginControl';
import GetFakeArt from './GetFakeArt';
import GetFakeNews from './GetFakeNews';
import Header from './Header';
import PlanVisit from './PlanVisit';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import { auth } from './../firebase.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import userEvent from '@testing-library/user-event';

function App() {
  let userStatus = false;
  if (auth.currentUser != null) {
    userStatus = true;
  } else {
    userStatus = false;
  }
  let main = 
    <div>
      <PlanVisit />
      <ExhControl />
    </div>
  return (
    <Router> 
      <Header/>
      <Container>
      <Routes> 
        <Route path="/log-in" element={<LoginControl />} />
        <Route path="/get-fake-art" element={<GetFakeArt />} />
        <Route path="/get-fake-news" element={<GetFakeNews />} />
        <Route path="/" element={main} />
      </Routes>
      </Container>
      <Footer loggedIn={userStatus}/>
    </Router>
  );
}

export default App;
