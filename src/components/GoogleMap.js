import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MirimoMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.466456,
      lng: 126.932867,
    },
    zoom: 18,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBESvoc-EjU61HG_lLXVxv6fmNjjl3x9WI' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={37.466456} lng={126.932867} text="MIRIMO" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MirimoMap;
