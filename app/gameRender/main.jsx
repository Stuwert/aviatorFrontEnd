import React from 'react';
// import ReactDOM from 'react-dom';
import Canvas from './canvas.jsx'
import SheepConstructor from './Sheep.jsx'
import Dog from './Dog.jsx'


let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');

var dog = new Dog();
var sheeps = [
  new SheepConstructor(10, 20)
]

var keysDown = {};

addEventListener('keydown', function(e){
  keysDown[e.keyCode] = true;
}, false)

addEventListener('keyup', function(e){
  delete keysDown[e.keyCode];
}, false)

var update = function(modifier){
  dog.update(modifier, keysDown)
  sheeps.forEach(function(sheep){
    sheep.dogDistance(dog);
    sheep.move(modifier);
  })
}


var render = function(){
  ctx.fillStyle = 'rgb(67,247,51)'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(dog.image, dog.x, dog.y);
  sheeps.forEach(function(sheep){
    ctx.fillStyle = 'rgb(250, 250, 250)'
    ctx.fillRect(sheep.x, sheep.y, 10, 10)
  })
}


var main = function(){
  requestAnimationFrame(updateRender);
  setTimeout(main, 5)
}

var updateRender = function(){
  var now = Date.now();
  var delta = now - then;
  then = now;
  update(delta / 1000);
  dog.catchDog();
  render();
}

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
var then = Date.now();

render();
main();



export default class SheepGame extends React.Component{
  render(){
    return(
        <Canvas canvas={canvas} />
    )
  }
}
