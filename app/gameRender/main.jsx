import React from 'react';
// import ReactDOM from 'react-dom';
import Canvas from './canvas.jsx'
import Game from './Game.jsx'
import SheepActive from './gameInformation/SheepActive.jsx'
import SheepLost from './gameInformation/SheepLost.jsx'
import SheepPenned from './gameInformation/SheepPenned.jsx'

let game = new Game(2);

let keysDown = {}

addEventListener('keydown', function(e){
  e.preventDefault();
  keysDown[e.keyCode] = true;
  game.setKeysDown(keysDown);
}, false)

addEventListener('keyup', function(e){
  delete keysDown[e.keyCode];
  game.setKeysDown(keysDown);
}, false)

var onFire = new Event('gameUpdate');

game.initializeGame(onFire);
game.render();
game.main();



export default class SheepGame extends React.Component{
  constructor(){
    super();
    this.state = {
      activeSheep : game.sheepActiveNumber,
      lostSheep : game.sheepLostNumber,
      pennedSheep : game.sheepPennedNumber
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
