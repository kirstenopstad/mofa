import React from 'react';
import './App.css';
import ExhControl from './ExhControl';
import LoginControl from './LoginControl';
import Header from './Header';
import PlanVisit from './PlanVisit';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Login from './Login';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <LoginControl />
        <PlanVisit />
        <ExhControl />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
