import React from 'react';
import { connect } from 'react-redux';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
//import { getExcited } from '../actions';

const mapStateToProps = (state) => {
  return {
    excitement: state.excitement
  };
};

let EventMap = function(props) {
  return (
    <section>

    </section>
  );
}

EventMap = connect(mapStateToProps)(EventMap);

export default EventMap;
