
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 512;

document.querySelector('#main').appendChild(canvas);

var dog = {
  speed: 150,
  x: 0,
  y: 0
}

var dogImage = new Image();
dogImage.src = './dog.png'

var SheepConstructor = function(x, y){
  this.x = x;
  this.y = y;
  this.speed = 75;
  this.dogDistanceLength = null;
  this.deltaY = 0;
  this.deltaX = 0;
}

SheepConstructor.prototype.dogDistance = function(){
  this.deltaX = this.x - dog.x;
  this.deltaY = this.y - dog.y;
  // console.log(deltaX, " ", deltaY);
  var deltaSquared = Math.pow(this.deltaX, 2) + Math.pow(this.deltaY, 2);
  this.dogDistanceLength = Math.sqrt(deltaSquared)
  // console.log(this.dogDistanceLength);
}

SheepConstructor.prototype.move = function(modifier){
  if (this.dogDistanceLength < 100){
    // if deltaX is negative, dog is to the right
    // if deltaY is negative, dog is below
    if (this.deltaY < 0){
      console.log('hitting');
      this.y -= this.speed * modifier;
    }else{
      this.y += this.speed * modifier;
    }
    if(this.deltaX < 0){
      this.x -= this.speed * modifier;
    }else{
      this.x += this.speed * modifier;
    }
  }
}

var sheeps = [
  new SheepConstructor(10, 20)
]


var keysDown = {};

// var reset = function(){
//   dog.x = canvas.width / 2;
//   dog.y = canvas.height / 2;
// }

addEventListener('keydown', function(e){
  keysDown[e.keyCode] = true;
}, false)

addEventListener('keyup', function(e){
  delete keysDown[e.keyCode];
}, false)

var update = function(modifier){
  if (38 in keysDown){
    dog.y -= dog.speed * modifier;
  }
  if(40 in keysDown){
    dog.y += dog.speed * modifier;
  }
  if(37 in keysDown){
    dog.x -= dog.speed * modifier;
  }
  if(39 in keysDown){
    dog.x += dog.speed * modifier;
  }
  sheeps.forEach(function(sheep){
    sheep.dogDistance();
    sheep.move(modifier);
  })
}

var render = function(){
  ctx.fillStyle = 'rgb(67,247,51)'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(dogImage, dog.x, dog.y);
  sheeps.forEach(function(sheep){
    ctx.fillStyle = 'rgb(250, 250, 250)'
    ctx.fillRect(sheep.x, sheep.y, 10, 10)
  })
}

var catchDog = function(){
  if (dog.x < 0){
    dog.x = 0
  }
  if (dog.x > 497){
    dog.x = 497
  }
  if (dog.y < 0){
    dog.y = 0
  }
  if (dog.y > 497){
    dog.y = 497
  }
}


render();

var main = function(){
  requestAnimationFrame(updateRender);
  setTimeout(main, 25)
}

var updateRender = function(){
  var now = Date.now();
  var delta = now - then;
  then = now;
  update(delta / 1000);
  catchDog();
  render();
}

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now();
// reset();
main();
