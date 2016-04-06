import Sheep from './gamePieces/Sheep.js';
import Pen from './gamePieces/Pen.js';
import Dog from './gamePieces/Dog.js';


export default class Game{
  constructor(){
    this.dog1 = new Dog();
    // this.dog2 = new Dog();
    this.sheep = new Sheep();
    this.pen = new Pen();
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 512;
    this.canvas.height = 512;
    this.status = {
      sheepPenned: null,
      sheepActive: null,
      sheepLost : null
    }
  }
}

Game.prototype.updateGame = function(newGameObj){
  this.dog1.setDog(newGameObj.DogsLocation)
  this.sheep.setSheep(newGameObj.SheepLocation)
  this.pen.setPen(newGameObj.PenLocation)
  this.status = newGameObj.status
}

Game.prototype.renderGame = function(){
  this.ctx.fillStyle = 'rgb(67,247,51)'
  this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  this.ctx.drawImage(this.dog1.image, this.dog1.x - this.dog1.width / 2, this.dog1.y - this.dog1.width / 2);
  this.ctx.drawImage(this.pen.image, this.pen.x - this.pen.width / 2, this.pen.y - this.pen.width / 2)
  console.log(this.dog1.x);
  let that = this;
  let sheepImage = this.sheep.image;
  let sheepWidth = this.sheep.width;
  this.sheep.sheepArray.forEach(function(sheep){
    that.ctx.drawImage(sheepImage, sheep.x - sheepWidth / 2, sheep.y - sheepWidth / 2);
  })
}
