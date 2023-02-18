import React from 'react';
import './App.css';
import ExhControl from './ExhControl';
import Header from './Header';
import PlanVisit from './PlanVisit';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <PlanVisit />
      <ExhControl />
      <Footer />
    </React.Fragment>
  );
}

export default App;
