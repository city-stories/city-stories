import React from 'react';
import { connect } from 'react-redux';
import EventDetails from './EventDetails';
import EventList from './EventList';
import Navigation from './Navigation';

const mapStateToProps = (state) => {
  return {
    excitement: state.excitement
  };
};

let EventMap = React.createClass({
    componentDidMount(){
        const { Map, Color } = window.esri;
        const CSVLayer =  window.esri.layers.CSVLayer;
        const SimpleMarkerSymbol =  window.esri.symbol.SimpleMarkerSymbol;
        const SimpleRenderer =  window.esri.renderer.SimpleRenderer;

        var map;
        var csv;

        map = new Map("map", {
          basemap: "gray",
          center: [-122.335211, 47.613571],
          zoom: 17
        });

        csv = new CSVLayer("/map", {
          copyright: "USGS.gov"
        });
        const orangeGreen = new Color([77, 194, 71, 0.5]);
        const marker = new SimpleMarkerSymbol("solid", 15, null, orangeGreen);
        const renderer = new SimpleRenderer(marker);
        csv.setRenderer(renderer);
        map.addLayer(csv);

        csv.on('click', function (event) {

          console.log(event);
            var eventDetails = new CustomEvent("showEventDetails", {
                detail: {
                    data: event.graphic.attributes
                }
            });

            window.dispatchEvent(eventDetails);

            map.centerAt(event.mapPoint);
        });

    },

    render(){
        return (
          <section>
              <nav className="navbar navbar-default">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>

                      <a className="navbar-brand" href="#">
                        <img alt="Brand" src="http://s24.postimg.org/7ed8c7em9/favelogosmall.png" />
                      </a>
                    </div>
                    <div className="collapse navbar-collapse" id="header">
                      <ul className="nav navbar-nav">
                        <li className="active">
                          <a href="#">Home <span className="sr-only">(current)</span></a>
                        </li>

                        <li>
                          <a href="#">Projects</a>
                        </li>

                        <li>
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About</a>
                        </li>
                      </ul>
                      <form className="navbar-form navbar-right" role="search">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Search" />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                      </form>
                      <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Login</a></li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Help</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>

                <div className="container-fluid">
                  <aside className="col-md-7">
                      <div id="map"></div>
                  </aside>
                  <div id="navigation" className="col-md-5">
                    <h2>Navigation</h2>
                    <div id="section">
                      <Navigation />
                        <div className="tab-content">

                          <div id="all" className="tab-pane fade in active">
                            <h3>All</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                          <div id="parks" className="tab-pane fade">
                            <h3>Parks</h3>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                          <div id="emergency" className="tab-pane fade">
                            <h3>Emergency</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                          </div>
                          <div id="animal" className="tab-pane fade">
                            <h3>Animal</h3>
                            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                          </div>
                          <div id="events" className="tab-pane fade">
                            <h3>Events</h3>
                            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                          </div>
                          <EventDetails />
                          <EventList />
                        </div>
                    </div>
                </div>
                  <div className="navbar navbar-inverse navbar-fixed-bottom">
                  <div className="container">
                    <p className="navbar-text">City Stories 2015</p>
                    <a id="contactUs" href="mailto:help@citystory.com" className="navbar-btn btn-danger btn pull-right">Contact City Story</a>
                  </div>
                  </div>
              </div>

          </section>
        );
    }
});

EventMap = connect(mapStateToProps)(EventMap);

export default EventMap;
