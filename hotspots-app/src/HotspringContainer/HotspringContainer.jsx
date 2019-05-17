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

componentDidMount() {
  this.state.hotsprings = this.props.hotsprings;
}

// mapClick = () => {
//         console.log(1)

        
// }

mapClick = ({lat, lng, e}) => {
  console.log('is this here?', e);
        if (lat){
          this.setState({
              modalShowing: true,
              newLat : lat,
              newLng : lng
            })
        } else {
          console.log('map click from button');
          this.setState({
            modalShowing: true
          })
        }
}

closeModal = (e) => {
  console.log('should close', e);
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
            <p><div id="display-color">Latitude:</div> {spring.lat}
            <div id="display-color">Longitude:</div> {spring.lng}</p>
            <button onClick={(event) => {this.props.changePage(event); this.props.selectEditHotspring(spring)}} id="edit-page" >Edit</button>
            <button onClick={this.deleteHotspring.bind(null, spring._id)}>Delete</button>
        </div>
    
        })
        console.log('see it alot', springList);

        
        return <div>
          <button onClick = {this.mapClick.bind(null)}>Add a New Spring</button>
        <MapContainer hotsprings={this.state.hotsprings} mapClick ={this.mapClick} ></MapContainer>
        
        {/* <HotspringList hotsprings ={this.state.hotsprings} componenentDidMount= {this.componentDidMount} showHotsprings = {this.showHotsprings}> </HotspringList> */}
        {this.state.modalShowing ? 

        <CreateHotspring addHotspring={this.addHotspring} newLat = {this.state.newLat} newLng = {this.state.newLng} modalShowing = {this.state.modalShowing} closeModal = {this.closeModal} /> : null
        }
        
      
        <div className="springContainer">
            {springList}
        </div>
    </div>


        
  }

}





export default HotspringContainer;




