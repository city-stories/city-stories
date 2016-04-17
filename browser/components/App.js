import React from 'react';

import EventList from './EventList';
import EventMap from './EventMap';
import { connect } from 'react-redux';
import { updateRoles, updateEvents } from '../actions';

let App = ({ dispatch }) => {
  // Ideally, we'd get the data server-side and return it with the initial bundle
  let rolesReq = new XMLHttpRequest();
  rolesReq.addEventListener('load', function () {
    dispatch(updateRoles({ roles: JSON.parse(this.responseText) }));
  });
  rolesReq.open('GET', 'http://localhost:3000/role');
  rolesReq.send();

  let eventsReq = new XMLHttpRequest();
  eventsReq.addEventListener('load', function () {
    dispatch(updateEvents({ events: JSON.parse(this.responseText) }));
  });
  eventsReq.open('GET', 'http://localhost:3000/event');
  eventsReq.send();

  return (
    <div className="wrapper">
      <EventMap />
      <EventList />
    </div>
  );
};

App = connect()(App);

export default App;
