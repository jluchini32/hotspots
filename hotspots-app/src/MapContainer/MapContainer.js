import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import HotspringContainer from '../HotspringContainer/HotspringContainer';


const Zebra = ({ text }) => <div>{text}</div>;
const AnyReactComponent = ({ text }) => <div>{text}</div>;


class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 39.74,
      lng: -104.99
    },
    zoom: 8


  };


  render() {
   
    const mapSTuff = this.props.hotsprings.map((ss) => {
      return (
           <Zebra
            lat={ss.lat}
            lng={ss.long}
            text="HOTSPRING!"
          />
      )
    })

    return (
      
      // Important! Always set the container height explicitly
      <div id ="map-map" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        
        onClick= {this.props.mapClick}
        


          bootstrapURLKeys={{ key: 'AIzaSyAUT1km3OOHrzgj34IyIKudZZdoiHcre8g' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {mapSTuff}
    
          {/* <AnyReactComponent
            lat={39.96}
            lng={-106.54}
            text="HOTSPRING"
          /> */}
          
        </GoogleMapReact>

      </div>
    );
  }
}

export default MapContainer;