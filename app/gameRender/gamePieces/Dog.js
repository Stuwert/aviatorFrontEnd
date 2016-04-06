export default class Dog{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.width = 15;
    this.image = new Image();
    this.image.src = require('../../images/dog.png')
  }
}

Dog.prototype.setDog = function(newDog){
  this.x = newDog.player1.x;
  this.y = newDog.player1.y;
}
