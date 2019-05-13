import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 39.74,
      lng: -104.99
    },
    zoom: 8


  };



mapClick = ({x, y, lat, lng, event}) => {
  console.log(x, y, lat, lng, event)
}

  render() {
    return (
      
      // Important! Always set the container height explicitly
      <div id ="map-map" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        
        onClick={this.mapClick}

          bootstrapURLKeys={{ key: 'AIzaSyAUT1km3OOHrzgj34IyIKudZZdoiHcre8g' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={39.96}
            lng={-106.54}
            text="HOTSPRING"
          />
          
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;