import React from 'react';
// import ReactDOM from 'react-dom';
import Canvas from './canvas.jsx'

import SheepActive from './gameInformation/SheepActive.jsx'
import SheepLost from './gameInformation/SheepLost.jsx'
import SheepPenned from './gameInformation/SheepPenned.jsx'



export default class SheepGame extends React.Component{
  constructor(){
    super();
    this.state = {
      activeSheep : null,
      lostSheep : null,
      pennedSheep : null
    }
  }
  render(){
    return(
      <div className="main">
        <div>
          <Canvas game={this.props.game} />
        </div>
        <div>
          <SheepActive number={this.state.activeSheep} />
          <SheepLost number={this.state.lostSheep} />
          <SheepPenned number={this.state.pennedSheep} />
        </div>
      </div>
    )
  }
}
