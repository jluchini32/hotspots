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
    <div className="App"> Welcome to the HotSPots App
    <MapContainer></MapContainer>
    </div>
   );
  }

}














export default App;
