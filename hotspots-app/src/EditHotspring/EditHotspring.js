import React, {Component} from 'react';
import HotspringContainer from '../HotspringContainer/HotspringContainer';
import MapContainer from '../MapContainer/MapContainer';
// import MapContainer from '../MapContainer/MapContainer';

class EditHotspring extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        hotspring: {
          name: "",
          lat: "",
          lng: ""
        }
      }
    }

    componentDidMount() {
      console.log(this.props.hotsprings);
      this.setState({
        hotspring: this.props.spring
      })
    }
    updateLocalState = async (e) => {
      // Computed Properties
      console.log(e.target.value);
      await this.setState({
        hotspring: {
          ...this.state.hotspring,
          [e.target.name]: e.target.value
        }
      });
      console.log(this.state);
        
    }

    closeModal = (e) => {
      this.setState({ modalShowing: false })
    }

    

    render(){
      // first argument on .bind is always the context of this
      // console.log(this.state);
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
        <input type="text" name="name" value={this.state.hotspring.name} onChange={this.updateLocalState}/>
        </label>
        <br></br>
        <label>
        Latitude:
        <input type="text" name="lat" value={this.state.hotspring.lat} onChange={this.updateLocalState}/>
        </label>
        <br></br>
        <label>
        Longitude:
        <input type="text" name="lng" value={this.state.hotspring.lng} onChange={this.updateLocalState}/>
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