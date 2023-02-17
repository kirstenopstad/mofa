import React from 'react';
import './App.css';
import ExhControl from './ExhControl';
import Header from './Header';
import PlanVisit from './PlanVisit';

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
