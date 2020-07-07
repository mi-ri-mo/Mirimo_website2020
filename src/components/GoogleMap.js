import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      venues: [{ lat: 37.466456, lng: 126.932867 }],
    };
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={{ height: '60vh', width: '100%' }}
        initialCenter={{ lat: 37.466456, lng: 126.932867 }}
      >
        <Marker position={{ lat: 37.466456, lng: 126.932867 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBESvoc-EjU61HG_lLXVxv6fmNjjl3x9WI',
})(MapContainer);
