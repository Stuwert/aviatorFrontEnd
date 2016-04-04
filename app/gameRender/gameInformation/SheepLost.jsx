import React from 'react';

export default class SheepLost extends React.Component{
  render(){
    return(
      <div>
        <h2>Lost Sheep:</h2>
        <p>{this.props.number}</p>
      </div>
    )
  }
}
