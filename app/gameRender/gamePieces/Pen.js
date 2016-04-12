export default class Pen{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.width = 50;
    this.image = new Image();
    this.image.src = require('../../images/game/pen.png')
  }
}

Pen.prototype.setPen = function(newPen){
  this.x = newPen.x;
  this.y = newPen.y;
}
