import React from 'react';

export default class SheepActive extends React.Component{
  render(){
    return(
      <div>
        <h2>Active Sheep:</h2>
        <p>{this.props.number}</p>
      </div>
    )
  }
}
