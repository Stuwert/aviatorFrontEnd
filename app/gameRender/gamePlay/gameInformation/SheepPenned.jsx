import React from 'react';

export default class SheepPenned extends React.Component{
  render(){
    return(
      <div>
        <h2>Penned Sheep:</h2>
        <p>{this.props.number}</p>
      </div>
    )
  }
}
