import React from 'react';
import { connect } from 'react-redux';
import Event from './Event';

let mapStateToProps = (state) => {
  return {
    events: state.events
  };
};

let EventList = ({ events }) => {
  let eventList = [];
  Object.keys(events).forEach((event) => {
    eventList.push(<Event event={events[event]} />);
  });

  return (
    <div>{eventList}</div>
  );
};

EventList.propTypes = {
  events: React.PropTypes.object
};

EventList = connect(mapStateToProps)(EventList);

export default EventList;
