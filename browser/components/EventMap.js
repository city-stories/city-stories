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
        <h1>Hi merge conflict!</h1>

    </section>
  );
};

EventMap = connect(mapStateToProps)(EventMap);

export default EventMap;
