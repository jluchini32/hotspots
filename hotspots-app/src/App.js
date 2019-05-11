import React, { Component } from 'react';
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
    <div className="App"> Welcome to the HotSPots App </div>
   );
  }

}














export default App;
