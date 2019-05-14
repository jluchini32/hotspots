import React, { Component } from 'react';
import HotSpringList from './HotspringList/HotspringList';
import MapContainer from '../MapContainer/MapContainer'


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

    render(){
     
        const springList = this.state.hotsprings.map((ss) => {
        return <div>
            <h2>{ss.name} {ss.lat} {ss.long}</h2>
        </div>
    
        })
        return <div className="app">

    {/* <div className="mapContainer"> */}
        <MapContainer hotsprings={this.state.hotsprings}></MapContainer>
    {/* </div>  */}
        <div className="springContainer">
            {springList}
        </div>
    </div>
}

}

//     console.log(this.state)

//         return (
//             <div className="springContainer">
//            <HotSpringList>  {springList} </HotSpringList>
//         </div>
        
//     )


//     }
// }



export default HotspringContainer;




