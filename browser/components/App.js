import React from 'react';
import HelloWorld from './HelloWorld';
import EventMap from './EventMap';
import Navigation from './Navigation';
import { connect } from 'react-redux';
import '../styles/app.css';

let App = () => {
  return (
    <div className="wrapper">
      <HelloWorld />
      <Navigation />
      <EventMap />
    </div>
  );
};

App = connect()(App);

export default App;
