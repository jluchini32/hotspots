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
      chosenPage: null,

      hotsprings: [],
      editingHotspring: null

    }
    
  }


changePage = (e) => {
    console.log(e.target.id, 'which page you want to go to');
    this.setState({
      chosenPage: e.target.id
    })
}

selectEditHotspring = (hotspring) => {
  this.setState({editingHotspring: hotspring})
}

updateHotspring = async (id, e) => {
  console.log(1, id);
  const response = await fetch(`http://localhost:9000/hotsprings/` + this.state.editingHotspring.id, {
    method: "PUT",
    body: JSON.stringify(e),
    headers: {
        "Content-Type": "application/json"
    }
  })
  const updatedHotspring = await response.json();
  console.log(response);

  if(response.status === 200){
    console.log("update working")
    this.setState({
        hotsprings: this.state.hotsprings.map((eachSpring)=>{
  if(eachSpring._id === id){
    return updatedHotspring
    }
    return eachSpring
    })
  })
}
}

render() {

  return (
    <div className="App"> 
    <h4>Welcome to the HotSpots App</h4>
    <button onClick={this.changePage} id="home-page">SHOW ME THE MAP</button>
    {/* <button onClick={this.changePage} id="list-page">SHOW ME THE LIST</button> */}

    <br></br>

    {
        this.state.chosenPage === null ?
        null
        :
        this.state.chosenPage === "home-page" ?
        <HotspringContainer selectEditHotspring = {this.selectEditHotspring} showHotsprings={this.showHotsprings} changePage = {this.changePage}> </HotspringContainer>
        :
        this.state.chosenPage === "list-page" ?
        <HotspringList> showHotsprings={this.showHotsprings} changePage = {this.changePage}></HotspringList>
        :
        this.state.chosenPage === "edit-page" ?
        <EditHotspring hotsprings={this.state.hotsprings} updateHotspring={this.updateHotspring} spring={this.state.editingHotspring}> </EditHotspring>
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
