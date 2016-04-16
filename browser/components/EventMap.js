import React from 'react';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
  return {
    excitement: state.excitement
  };
};

let EventMap = React.createClass({
    componentDidMount(){
        const { Map, Color, InfoTemplate, urlUtils } = window.esri;
        const CSVLayer =  window.esri.layers.CSVLayer;
        const SimpleMarkerSymbol =  window.esri.symbol.SimpleMarkerSymbol;
        const SimpleRenderer =  window.esri.renderer.SimpleRenderer;

        var map, csv;

        map = new Map("map", {
          basemap: "gray",
          center: [ -60, -10 ],
          zoom: 4
        });
        csv = new CSVLayer("/2.5_week.csv", {
          copyright: "USGS.gov"
        });
        const orangeGreen = new Color([77, 194, 71, 0.5]);
        const marker = new SimpleMarkerSymbol("solid", 15, null, orangeGreen);
        const renderer = new SimpleRenderer(marker);
        csv.setRenderer(renderer);
        const template = new InfoTemplate("${type}", "${place}");
        csv.setInfoTemplate(template);
        map.addLayer(csv);
    },

    render(){
        return (
          <section id="map">
          </section>
        );
    }
})

EventMap = connect(mapStateToProps)(EventMap);

export default EventMap;
