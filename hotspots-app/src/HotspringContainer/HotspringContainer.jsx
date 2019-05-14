import React, { Component } from 'react';
import HotSpringList from './HotspringList/HotspringList';
import MapContainer from '../MapContainer/MapContainer'
import CreateHotspring from '../CreateHotspring/CreateHotspring';


class HotspringContainer extends Component { 
    constructor(){
    super();
    this.state = {
        hotsprings: [],
    
    modalShowing: false
    }
}


    mapClick = ({lat, lng, event}) => {
        console.log(lat, lng, event)
        console.log('hello')
        this.setState({
        modalShowing: true
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

    addHotspring = async (springs, e) => {
    
        e.preventDefault();
        console.log(springs)
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


    render(){
     console.log(this.state, 'state right now')
        const springList = this.state.hotsprings.map((ss) => {
        return <div>
            <h2>{ss.name} {ss.lat} {ss.long}</h2>
            <button>Edit</button>
            <button onClick={this.deleteHotspring.bind(null, ss._id)}>Delete</button>
        </div>
    
        })
        return <div className="app">


        <MapContainer hotsprings={this.state.hotsprings} mapClick ={this.mapClick} ></MapContainer>
        {this.state.modalShowing ? <CreateHotspring addHotspring={this.addHotspring} /> : null}
 
        <div className="springContainer">
            {springList}
        </div>
    </div>
    }

}




export default HotspringContainer;




