import React, {useState} from 'react';
import './App.css';
import ExhControl from './ExhControl';
import LoginControl from './LoginControl';
import Logout from './Logout';
import GetFakeArt from './GetFakeArt';
import GetFakeNews from './GetFakeNews';
import Header from './Header';
import PlanVisit from './PlanVisit';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { db} from './../firebase.js'
import { collection, addDoc} from "firebase/firestore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // state variables
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  // conditional rendering for login modal
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleLogout = () => setShowLogout(true);
  const handleCloseLogout = () => setShowLogout(false);

  

  // add artworkData functionality
  const handleGenerateArt = async (art) => {
    const artCollectionRef = collection(db, "artworks");
    await addDoc(artCollectionRef, art)
  }

  let main = 
    <div>
      <PlanVisit />
      <ExhControl onLoginClick={handleShowLogin}/>
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <LoginControl />
      </Modal>
      <Modal show={showLogout} onHide={handleCloseLogout}>
        <Logout />
      </Modal>
    </div>
  
  return (
    <Router> 
      <Header/>
      <Container>
      <Routes> 
        <Route path="/get-fake-art" element={<GetFakeArt handleGenerateArt={handleGenerateArt} />} />
        <Route path="/get-fake-news" element={<GetFakeNews />} />
        <Route path="/" element={main} />
      </Routes>
      </Container>
      <Footer onLoginClick={handleShowLogin} onLogoutClick={handleLogout} onClose={handleCloseLogin}/>
    </Router>
  );
}

export default App;
