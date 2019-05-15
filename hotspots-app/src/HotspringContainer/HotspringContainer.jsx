import React, { Component } from 'react';
import MapContainer from '../MapContainer/MapContainer'
import CreateHotspring from '../CreateHotspring/CreateHotspring';
import ShowEachHotspring from '../ShowEachHotspring/ShowEachHotspring';
import EditHotspring from '../EditHotspring/EditHotspring';
import HotspringList from '../HotspringList/HotspringList';


class HotspringContainer extends Component { 
    constructor(){
    super();
    this.state = {
        hotsprings: [],

        newLat: null,
        newLng: null,
    
        modalShowing: false,

        chosenPage: null
    }
}


mapClick = ({lat, lng, event}) => {
        console.log(lat, lng, event)
        console.log('hello')
        this.setState({
        
        modalShowing: true,
        newLat : lat,
        newLng : lng
        })
}

closeModal = (e) => {
  this.setState({ modalShowing: false })
}

componentDidMount(){
    console.log('COMPONENT DID MOUNT');
    this.showHotsprings()
}


showHotsprings = async () => {

        const hotspringURL = `http://localhost:9000/hotsprings`
        const result =  await fetch(hotspringURL);  
    
        if(result.status != 200){
        throw Error(result.statusText);

        }

        const parsedSprings = await result.json();
        console.log(parsedSprings)
        this.setState({
        hotsprings: parsedSprings.data
        })
}

addHotspring = async (springs) => {
    
        // e.preventDefault();
        console.log(springs);
        try {
          const createdHotspring = await fetch('http://localhost:9000/hotsprings', {
            method: 'POST',
            body: JSON.stringify(springs),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const parsedResponse = await createdHotspring.json();
          console.log(parsedResponse)
          this.setState({hotsprings: [...this.state.hotsprings, parsedResponse.data]})
    
        } catch(err){
          console.log(err)
        }
}

updateHotspring = async (id, e) => {
        const response = await fetch(`http://localhost:9000/hotsprings/` + id, {
          method: "PUT",
          body: JSON.stringify(e),
          headers: {
              "Content-Type": "application/json"
          }
        })
        const updatedHotspring = await response.json();
        console.log(updatedHotspring);

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


deleteHotspring = async (id, e) => {
        console.log(id, ' this is id')
        e.preventDefault();
        try {

        const deleteHotspring = await fetch(`http://localhost:9000/hotsprings/` + id, {
        method: 'DELETE',
        });
        const deleteHotspringJson = await deleteHotspring.json();
        this.setState({hotsprings: this.state.hotsprings.filter((spring, i) => spring._id !== id)}
            
        );
    
        } catch(err) {
          console.log(err, ' error')
        }
}




render(){
     console.log(this.state, 'state right now')
     

    //  everything below this displays the list --> trying to move to its own page
        const springList = this.state.hotsprings.map((spring) => {
        return <div>
          
            <h2>{spring.name} </h2>
            <p>Latitude: {spring.lat} <br></br>
            Longitude: {spring.lng}</p>
            <button onClick={this.props.changePage} id="edit-page">Edit</button>
            <button onClick={this.deleteHotspring.bind(null, spring._id)}>Delete</button>
        </div>
    
        })
        return <div className="app">

        <MapContainer hotsprings={this.state.hotsprings} mapClick ={this.mapClick} ></MapContainer>
        {/* <HotspringList hotsprings ={this.state.hotsprings} componenentDidMount= {this.componentDidMount} showHotsprings = {this.showHotsprings}> </HotspringList> */}
        {this.state.modalShowing ? 

        <CreateHotspring addHotspring={this.addHotspring} newLat = {this.state.newLat} newLng = {this.state.newLng} modalShowing = {this.state.modalShowing} closeModal = {this.closeModal} /> : null}
 
        <div className="springContainer">
            {springList}
        </div>
    </div>


  }

}





export default HotspringContainer;




