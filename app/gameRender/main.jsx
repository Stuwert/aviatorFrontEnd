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
  componentDidMount(){
    addEventListener('gameUpdate', this.updateInformation.bind(this))
  }
  updateInformation(){
    this.setState({
      activeSheep : game.sheepActiveNumber,
      lostSheep : game.sheepLostNumber,
      pennedSheep : game.sheepPennedNumber
    })
  }
  render(){
    return(
      <div className="main">
        <div>
          <Canvas canvas={game.canvas} />
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
