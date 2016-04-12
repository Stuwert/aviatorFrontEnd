export default class Dogs{
  constructor(){
    this.dogs = [];
    this.width = 15;
    this.myDog = {}
    this.myDog.image = new Image();
    this.myDog.image.src = require('../../images/game/dog.jpg')
    this.theirDog = {}
    this.theirDog.image = new Image();
    this.theirDog.image.src = require('../../images/game/otherdog.png')
  }
}

Dogs.prototype.setDog = function(newDogs){
  this.dogs = newDogs;
}
