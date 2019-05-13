import React, { Component } from 'react';
import MapContainer from './MapContainer/MapContainer';
import './App.css';


class App extends Component {
    constructor(){
    super();
    this.state = {
      name: "",
      lat: "",
      long: "" 
    }
  }
  render(){
  return (
    <div className="App"> Welcome to the HotSpots App
<br></br>
<button>Go To List of Hotsprings </button>
<button>Add a new Hotspring</button>
    <MapContainer></MapContainer>

   
    </div>
   );
  }

}














export default App;
