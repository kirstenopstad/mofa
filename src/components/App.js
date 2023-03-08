// Libraries & other dependencies
import React, {useEffect, useState} from 'react';
import { db } from './../firebase.js'
import { collection, addDoc, onSnapshot} from "firebase/firestore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import ExhControl from './ExhControl';
import { DownloadFakeArt } from "./DownloadFakeArt"
import Logout from './Logout';
import GetFakeArt from './GetFakeArt';
import GetFakeNews from './GetFakeNews';
import Header from './Header';
import PlanVisit from './PlanVisit';
import Visit from './Visit';
import Store from './Store';
import About from './About';
import Membership from './Membership';
import Faq from './Faq';
import Subscribe from './Subscribe';
import Footer from './Footer';
import LoginControl from './LoginControl';

// Styles
import './App.css';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';


function App() {
  // state variables
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [artworkList, setArtworkList]= useState([]);
  const [error, setError]= useState([]);

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

  // get artList 
  useEffect(() => { 
    const unSubscribe = onSnapshot(
      collection(db, "artworks"), 
      (collectionSnapshot) => {
        const artworks = [];
        collectionSnapshot.forEach((doc) => {
          artworks.push({
            ...doc.data(),
            id: doc.id
          })
        })
        setArtworkList(artworks);
      }, 
      (error) => {
        setError(error.message);
      }
      );
      return () => unSubscribe();
    }, []);
    
    // send any undownloaded artworks to get downloaded
    

    // add artworkData functionality
    const getUnsavedArt = async (artList) => {
      const unSavedArt = await artworkList.filter(a => a.isSaved === false)[0]
      console.log(unSavedArt);
      DownloadFakeArt(unSavedArt);
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
      <div className='page-container'>
        <Header/>
        <Container className="content-wrap">
        <Routes> 
          <Route path="/get-fake-art" element={<GetFakeArt handleGenerateArt={handleGenerateArt} />} />
          <Route path="/get-fake-news" element={<GetFakeNews />} />
          <Route path="/" element={main} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/store" element={<Store />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
        </Container>
        <Footer onLoginClick={handleShowLogin} onLogoutClick={handleLogout} onClose={handleCloseLogin}/>

      </div>
    </Router>
  );
}

export default App;
