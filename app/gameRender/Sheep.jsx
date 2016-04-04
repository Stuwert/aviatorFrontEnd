export default class SheepConstructor{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.boundaries = {
      xBounds : [this.x - 5, this.x + 5],
      yBounds : [this.y -5, this.y + 5]
    }
    this.speed = 75;
    this.dogDistanceLength = null;
    this.deltaY = 0;
    this.deltaX = 0;
  }
}

// need to randomize sheep position on construction or cheat.

SheepConstructor.prototype.dogDistance = function(dog){
  this.deltaX = this.x - dog.x;
  this.deltaY = this.y - dog.y;
  // console.log(deltaX, " ", deltaY);
  var deltaSquared = Math.pow(this.deltaX, 2) + Math.pow(this.deltaY, 2);
  this.dogDistanceLength = Math.sqrt(deltaSquared)
  // console.log(this.dogDistanceLength);
}

SheepConstructor.prototype.move = function(modifier){
  let potentialY;
  let potentialX;
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
  this.updateBoundaries();
}

SheepConstructor.prototype.collisionDetect = function(gameObj){
  let xIntersection = isIntersected(this.boundaries.xBounds, gameObj.boundaries.xBounds);
  let yIntersection = isIntersected(this.boundaries.yBounds, gameObj.boundaries.yBounds);

  if (xIntersection && yIntersection){
    return true;
  }else{
    return false;
  }
}

SheepConstructor.prototype.boundaryCollision = function(){
  if(this.boundaries.xBounds[1] > 512 || this.boundaries.xBounds[0] < 0 || this.boundaries.yBounds[0] < 0 || this.boundaries.yBounds[1] > 512){
    return true;
  }
  return false;
}

SheepConstructor.prototype.updateBoundaries = function(){
  this.boundaries.xBounds = [this.x - 5, this.x + 5];
  this.boundaries.yBounds = [this.y - 5, this.y + 5]
}

function isIntersected(sheepBounds, collidingObjectBound){
  //takes two arrays, both should be in the same x/y coordinate plane
  let returnable = false;
  sheepBounds.forEach(function(sheepBound){
    if(sheepBound > collidingObjectBound[0] && sheepBound < collidingObjectBound[1]){
      returnable = true;
    }
  })
  return returnable;
}


// SheepConstructor.prototype.nuancedCollisionDetection = function(itemArr){
//
// }

//
// SheepConstructor.prototype.penCollde = function(){
//
// }

// SheepConstructor.prototype.wolfCollide = function(){
//
// }
