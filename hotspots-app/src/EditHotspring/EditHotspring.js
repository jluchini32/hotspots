import React, {Component} from 'react';
import HotspringContainer from '../HotspringContainer/HotspringContainer';
// import MapContainer from '../MapContainer/MapContainer';

class EditHotspring extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        name: '',
        lat: props.newLat,
        lng: props.newLng
      }
    }
    // updateHotspring = (e) => {
    //   // Computed Properties
    //   this.setState({[e.currentTarget.name]: e.currentTarget.value})
    // }

    // closeModal = (e) => {
    //   this.setState({ modalShowing: false })
    // }

    

    render(){
      console.log(this.state);
      // first argument on .bind is always the context of this
      return (
  
      //   <form onSubmit= {(e) => {
      //     e.preventDefault();
      //     console.log(this.state);
      //     this.props.addHotspring(this.state);
      //     this.props.closeModal();
      //     e.target.reset();
      //   }
      // }
      // >
      <h1>Hello</h1>
        
        
        //  <label>
        //     Name:
        //     <input type="text" name="name" onChange={this.updateHotspring}/>
        //   </label>
        //   <br></br>
        //   <label>
        //     Latitude:
        //     <input type="text" name="lat" value = {this.state.lat} onChange={this.updateHotspring}/>
        //   </label>
        //   <br></br>
        //   <label>
        //     Longitude:
        //     <input type="text" name="lng" value = {this.state.lng} onChange={this.updateHotspring}/>
        //   </label>
        //   <input type='Submit'/>
        // </form>
        )
    }
  }


export default EditHotspring;