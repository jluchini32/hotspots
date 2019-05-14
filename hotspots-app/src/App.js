import React, { Component } from 'react';
import MapContainer from './MapContainer/MapContainer';
import './App.css';
import HotspringContainer from './HotspringContainer/HotspringContainer';

class App extends Component {
  constructor(){
    super();
    
    
  }

   
    render() {
  return (
    <div className="App"> Welcome to the HotSpots App
    <br></br>
    <button>Go To List of Hotsprings </button>
    <button>Add a new Hotspring</button>
    {/* <MapContainer> </MapContainer> */}
    <HotspringContainer showHotsprings={this.showHotsprings}> </HotspringContainer>

   
    </div>
   );
  }

}













export default App;
