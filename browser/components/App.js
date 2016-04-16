import React from 'react';
import HelloWorld from './HelloWorld';
import EventMap from './EventMap';
import Navigation from './Navigation';
import { connect } from 'react-redux';
import { updateRoles } from '../actions';

let App = ({ dispatch }) => {
  // Ideally, we'd get the data server-side and return it with the initial bundle
  var rolesReq = new XMLHttpRequest();
  rolesReq.addEventListener('load', function () {
    dispatch(updateRoles({ roles: JSON.parse(this.responseText) }));
  });
  rolesReq.open('GET', 'http://localhost:3000/role');
  rolesReq.send();

  return (
    <div className="wrapper">
      <EventMap />
    </div>
  );
};

App = connect()(App);

export default App;
