import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import HotspringContainer from '../HotspringContainer/HotspringContainer';
import CreateHotspring from '../CreateHotspring/CreateHotspring';
import icon from '../firedept.png';

const Zebra = ({ text }) => <div>{text}<img src={icon}></img></div>;
const AnyReactComponent = ({ text }) => <div>{text}</div>;


class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 39.336483976183864,
      lng: -104.88013671875001
    },
    zoom: 6.5


  };


  render() {
   console.log(this.state)
    const mapSTuff = this.props.hotsprings.map((spring) => {
      return (
           <Zebra
            lat={spring.lat}
            lng={spring.lng}
            text={spring.name}
            icon={"/firedept.png"}
         
          
          />
      )
    })
    return (
      
      // Important! Always set the container height explicitly
      <div id ="map-map" style={{ height: '90vh', width: '100%' }}>
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