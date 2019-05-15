import React, { Component } from 'react';
import MapContainer from '../MapContainer/MapContainer'
import CreateHotspring from '../CreateHotspring/CreateHotspring';


class HotspringContainer extends Component { 
    constructor(){
    super();
    this.state = {
        hotsprings: [],

        newLat: null,
        newLng: null,
    
        modalShowing: false
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


closeModal = (e) => {
  this.setState({ modalShowing: false })
}

render(){
     console.log(this.state, 'state right now')
     
        const springList = this.state.hotsprings.map((spring) => {
        return <div>
            <h2>{spring.name} </h2>
            <p>Latitude: {spring.lat} <br></br>
            Longitude: {spring.lng}</p>
            <button>Edit</button>
            <button onClick={this.deleteHotspring.bind(null, spring._id)}>Delete</button>
        </div>
    
        })
        return <div className="app">

        <MapContainer hotsprings={this.state.hotsprings} mapClick ={this.mapClick} ></MapContainer>

        {this.state.modalShowing ? 

        <CreateHotspring addHotspring={this.addHotspring} newLat = {this.state.newLat} newLng = {this.state.newLng} modalShowing = {this.state.modalShowing} closeModal = {this.closeModal} /> : null}
 
        <div className="springContainer">
            {springList}
        </div>
    </div>


}

}




export default HotspringContainer;




