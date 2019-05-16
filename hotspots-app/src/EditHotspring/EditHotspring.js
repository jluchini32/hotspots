import React, {Component} from 'react';
import HotspringContainer from '../HotspringContainer/HotspringContainer';
import MapContainer from '../MapContainer/MapContainer';
// import MapContainer from '../MapContainer/MapContainer';

class EditHotspring extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        hotspring: this.props.spring
      }
    }

    componentDidMount() {
      this.state.hotsprings = this.props.hotsprings;
    }
    updateLocalState = (e) => {
      // Computed Properties
      this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }

    closeModal = (e) => {
      this.setState({ modalShowing: false })
    }

    

    render(){
      // first argument on .bind is always the context of this
      return (

  
        <form onSubmit= {(e) => {
          e.preventDefault();
          this.props.updateHotspring(this.state);
          e.target.reset();
        }
      }
      >
      <h1>Hello</h1>
        
        
         <label>
        Name:
        <input type="text" name="name" value = {this.state.hotspring.name} onChange={this.updateLocalState}/>
        </label>
        <br></br>
        <label>
        Latitude:
        <input type="text" name="lat" value = {this.state.hotspring.lat} onChange={this.updateLocalState}/>
        </label>
        <br></br>
        <label>
        Longitude:
        <input type="text" name="lng" value = {this.state.hotspring.lng} onChange={this.updateLocalState}/>
        </label>
        <input type='Submit'/>
        </form>
        
        )

      // return (
      //   <MapContainer/>
      // )
    }
  }


export default EditHotspring;