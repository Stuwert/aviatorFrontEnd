import Sheep from './gamePieces/Sheep.js';
import Pen from './gamePieces/Pen.js';
import Dog from './gamePieces/Dog.js';


export default class Game{
  constructor(){
    this.dog1 = new Dog();
    // this.dog2 = new Dog();
    this.sheep = new Sheep();
    this.pen = new Pen();
  }
}

Game.prototype.updateGame = function(newGameObj){
  this.dog1.setDog(newGameObj.DogsLocation)
  this.sheep.setSheep(newGameObj.SheepLocation)
  this.pen.setPen(newGameObj.PenLocation)
}
