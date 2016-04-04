import React from 'react';
// import ReactDOM from 'react-dom';
import Canvas from './canvas.jsx'
import Game from './Game.jsx'

let game = new Game(1);

let keysDown = {}

//I think the event listeners need to live with the main game loop
//
// addEventListener('keydown', game.addKey, false)
// addEventListener('keyup', game.removeKey, false)

addEventListener('keydown', function(e){
  keysDown[e.keyCode] = true;
  game.setKeysDown(keysDown);
}, false)

addEventListener('keyup', function(e){
  delete keysDown[e.keyCode];
  game.setKeysDown(keysDown);
}, false)



// let w = window;
// let requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

game.render();
game.main();



export default class SheepGame extends React.Component{
  render(){
    return(
        <Canvas canvas={game.canvas} />
    )
  }
}
