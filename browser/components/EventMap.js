import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    excitement: state.excitement
  };
};

let EventMap = function () {
  return (
    <section>

    </section>
  );
};

EventMap = connect(mapStateToProps)(EventMap);

export default EventMap;
