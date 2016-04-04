import React from 'react';
// import ReactDOM from 'react-dom';
import Canvas from './canvas.jsx'
import Game from './Game.jsx'

let game = new Game(2);

let keysDown = {}

addEventListener('keydown', function(e){
  if (e.keyCode < 40 && e.keyCode > 36){
    e.preventDefault();
  }
  keysDown[e.keyCode] = true;
  game.setKeysDown(keysDown);
}, false)

addEventListener('keyup', function(e){
  delete keysDown[e.keyCode];
  game.setKeysDown(keysDown);
}, false)

game.initializeGame();
game.render();
game.main();



export default class SheepGame extends React.Component{
  render(){
    return(
        <Canvas canvas={game.canvas} />
    )
  }
}
