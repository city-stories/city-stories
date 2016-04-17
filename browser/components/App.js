import React from 'react';
import EventMap from './EventMap';
import { connect } from 'react-redux';
import { updateRoles } from '../actions';
import '../styles/app.css';

let App = ({ dispatch }) => {
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
