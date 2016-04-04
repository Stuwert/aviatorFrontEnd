export default class SheepConstructor{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.speed = 75;
    this.dogDistanceLength = null;
    this.deltaY = 0;
    this.deltaX = 0;
  }
}

SheepConstructor.prototype.dogDistance = function(dog){
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
