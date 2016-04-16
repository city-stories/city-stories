import map from 'esri/map';
import React from 'react';
import { connect } from 'react-redux';
import { Map, CSVLayer, Color, SimpleMarkerSymbol, SimpleRenderer, InfoTemplate, urlUtils }

"esri/map",
"esri/layers/CSVLayer",
"esri/Color",
"esri/symbols/SimpleMarkerSymbol",
"esri/renderers/SimpleRenderer",
"esri/InfoTemplate",
"esri/urlUtils",

var map, csv;

const mapStateToProps = (state) => {
  return {
    excitement: state.excitement
  };
};

let EventMap = function(props) {
    urlUtils.addProxyRule({
      proxyUrl: "/",
      urlPrefix: "earthquake.usgs.gov"
    });
    map = new Map("map", {
      basemap: "gray",
      center: [ -60, -10 ],
      zoom: 4
    });
    csv = new CSVLayer("/2.5_week.csv", {
      copyright: "USGS.gov"
    });
    const orangeRed = new Color([238, 69, 0, 0.5]); // hex is #ff4500
    const marker = new SimpleMarkerSymbol("solid", 15, null, orangeRed);
    const renderer = new SimpleRenderer(marker);
    csv.setRenderer(renderer);
    const template = new InfoTemplate("${type}", "${place}");
    csv.setInfoTemplate(template);
    map.addLayer(csv);
  return (
    <section>
        <div id="map"></div>
    </section>
  );
};

EventMap = connect(mapStateToProps)(EventMap);

export default EventMap;
