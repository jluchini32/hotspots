import React, { Component } from 'react';
import HotSpringList from '../HotspringList/HotspringList';


class HotspringContainer extends Component { 
    constructor(){
    super();
    this.state = {
        hotsprings: []
    }
}


    componentDidMount(){
    console.log('COMPONENT DID MOUNT');
    this.showHotsprings()
    }

    showHotsprings = async () => {
        const result = await fetch('http://localhost:9000/hotspots');
    
        if(result.status != 200){
        throw Error(result.statusText);

        }

        const parsedSprings = await result.json();
        console.log(parsedSprings)
        this.setState({
        hotsprings: parsedSprings.data
        })
    }

    render(){
     

    console.log(this.state)

        return (
            <div className="springContainer">
           <HotspringList> {springList} </HotspringList>
        </div>
        
    )


    }
}



export default HotspringContainer;