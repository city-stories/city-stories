import React from 'react';
import { connect } from 'react-redux';

let Event = ({ event }) => {
  return (
  <div>
    <h6>{event.title || event.name}</h6>
    <div>{event.description}</div>
    <div>{event.date}</div>
  </div>);
};

Event.propTypes = {
  event: React.PropTypes.shape({
    title: React.PropTypes.string,
    done: React.PropTypes.bool,
    id: React.PropTypes.string,
    link: React.PropTypes.string
  })
};

Event = connect()(Event);

export default Event;
