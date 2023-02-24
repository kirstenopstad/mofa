import React from 'react';
import './App.css';
import ExhControl from './ExhControl';
import Header from './Header';
import PlanVisit from './PlanVisit';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <PlanVisit />
        <ExhControl />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
