export default class Sheep{
  constructor(sheep){
    this.width = 40;
    this.sheepArray = [];
    this.image = new Image();
    this.image.src = require('../../images/game/sheep_45.png')
  }
}


Sheep.prototype.setSheep = function(newSheepArray){
  this.sheepArray = newSheepArray;
}
