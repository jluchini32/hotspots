import React from 'react';


const HotSpringList = (props) => {

  const springList = props.springs.map((hotspots) => {
    return (
    <li key={hotspots._id}>
      <span>{hotspots.name}</span><br/>
    </li>
      )
  })

  return (
    <ul>
      {springList}
    </ul>
    )

}

export default HotSpringList;
