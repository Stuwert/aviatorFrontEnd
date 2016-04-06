export default class Sheep{
  constructor(sheep){
    this.width = 10;
    this.sheepArray = [];
    this.image = new Image();
    this.image.src = require('../../images/sheep.png')
  }
}


Sheep.prototype.setSheep = function(newSheepArray){
  this.sheepArray = newSheepArray;
}
