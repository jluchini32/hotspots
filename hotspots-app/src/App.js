import React, { Component } from 'react';
import MapContainer from './MapContainer/MapContainer';
import './App.css';
import HotspringContainer from './HotspringContainer/HotspringContainer';
import HotspringList from './HotspringList/HotspringList';
import EditHotspring from './EditHotspring/EditHotspring';
import ShowEachHotSpring from './EditHotspring/EditHotspring';


class App extends Component {
  constructor(){
    super();
    this.state = {
      chosenPage: null
    }
    
  }


  changePage = (e) => {
    console.log(e.target.id, 'which page you want to go to');
    this.setState({
      chosenPage: e.target.id
    })
}


render() {

  return (
    <div className="App"> 
    <h4>Welcome to the HotSpots App</h4>
    <button onClick={this.changePage} id="home-page">SHOW ME THE MAP</button>
    <button onClick={this.changePage} id="list-page">SHOW ME THE LIST</button>

    <br></br>

    {
        this.state.chosenPage === null ?
        null
        :
        this.state.chosenPage === "home-page" ?
        <HotspringContainer showHotsprings={this.showHotsprings} changePage = {this.changePage}> </HotspringContainer>
        :
        this.state.chosenPage === "list-page" ?
        <HotspringList> showHotsprings={this.showHotsprings} changePage = {this.changePage}></HotspringList>
        :
        this.state.chosenPage === "edit-page" ?
        <EditHotspring> </EditHotspring>
        :
        this.state.chosenPage === "detail-page" ?
        <ShowEachHotSpring></ShowEachHotSpring>
        :
        <HotspringContainer></HotspringContainer>
        
        
    }
   
    </div>
   );
  }

}













export default App;
