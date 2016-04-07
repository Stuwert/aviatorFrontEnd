import Sheep from './gamePieces/Sheep.js';
import Pen from './gamePieces/Pen.js';
import Dogs from './gamePieces/Dogs.js';


export default class Game{
  constructor(){
    // this.id = null;
    this.dogs = new Dogs();
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

// Game.prototype.setId = function(id){
//   this.id = id;
// }

Game.prototype.updateGame = function(newGameObj){
  this.dogs.setDog(newGameObj.DogsLocation)
  this.sheep.setSheep(newGameObj.SheepLocation)
  this.pen.setPen(newGameObj.PenLocation)
  this.status = newGameObj.status
}

Game.prototype.renderGame = function(){
  let that = this;
  this.ctx.fillStyle = 'rgb(67,247,51)'
  this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  this.dogs.dogs.forEach(function(dog){
    if(dog.id === that.id){
      that.ctx.drawImage(that.dogs.myDog.image, dog.x - that.dogs.width / 2, dog.y - that.dogs.width / 2);
    }else{
      that.ctx.drawImage(that.dogs.theirDog.image, dog.x - that.dogs.width / 2, dog.y - that.dogs.width / 2);
    }
  })
  this.ctx.drawImage(this.pen.image, this.pen.x - this.pen.width / 2, this.pen.y - this.pen.width / 2)
  let sheepImage = this.sheep.image;
  let sheepWidth = this.sheep.width;
  this.sheep.sheepArray.forEach(function(sheep){
    that.ctx.drawImage(sheepImage, sheep.x - sheepWidth / 2, sheep.y - sheepWidth / 2);
  })
}
