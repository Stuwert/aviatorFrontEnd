export default class Dogs{
  constructor(){
    this.dogs = [];
    this.width = 50;
    this.myDog = {}
    this.myDog.image = new Image();
    this.myDog.image.src = require('../../images/game/mydog_80.png')
    this.theirDog = {}
    this.theirDog.image = new Image();
    this.theirDog.image.src = require('../../images/game/otherdog_80.png')
  }
}

Dogs.prototype.setDog = function(newDogs){
  this.dogs = newDogs;
}
