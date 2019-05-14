import React, {Component} from 'react';

class CreateHotspring extends Component {
    constructor(){
      super();
  
      this.state = {
        name: '',
        lat: '',
        lng: ''
      }
    }
    updateHotspring = (e) => {
      // Computed Properties
      this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }
    render(){
      // first argument on .bind is always the context of this
      return (
  
        <form onSubmit={this.props.addHotspring.bind(null, this.state)}>
         <label>
            Name:
            <input type="text" name="name" onChange={this.updateHotspring}/>
          </label>
          <label>
            Lat:
            <input type="text" name="lat" onChange={this.updateHotspring}/>
          </label>
          <label>
            Long:
            <input type="text" name="lng" onChange={this.updateHotspring}/>
          </label>
          <input type='Submit'/>
        </form>
        )
    }
  }


export default CreateHotspring;