import React, { Component } from 'react';
import MapContainer from './MapContainer/MapContainer';
// import HotspringList from './HotspringList/HotspringList';
import './App.css';
import HotspringContainer from './HotspringContainer/HotspringContainer';



  
  function App (){
  return (
    <div className="App"> Welcome to the HotSpots App
    <br></br>
    <button>Go To List of Hotsprings </button>
    <button>Add a new Hotspring</button>
    <MapContainer></MapContainer>
    <HotspringContainer>  </HotspringContainer>

   
    </div>
   );
  }
















export default App;
