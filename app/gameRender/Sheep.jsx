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

SheepConstructor.prototype.move = function(modifier, otherSheep){
  let potentialY = this.y;
  let potentialX = this.x;
  let newX, newY;
  let newBounds;
  if (this.dogDistanceLength < 100){
    // if deltaX is negative, dog is to the right
    // if deltaY is negative, dog is below
    if (this.deltaY < 0){
      potentialY -= this.speed * modifier;
    }else{
      potentialY += this.speed * modifier;
    }
    if(this.deltaX < 0){
      potentialX -= this.speed * modifier;
    }else{
      potentialX += this.speed * modifier;
    }
  }
  if (otherSheep.length < 1 && !collideWithOtherSheep.bind(this, otherSheep)){
    newBounds = potentialBoundaries(this.x, this.y)
    newX = this.x, newY = this.y;
  }else{
    newBounds = potentialBoundaries(potentialX, potentialY);
    newX = potentialX, newY = potentialY;
  }
  this.updateBoundaries(newBounds, newX, newY);
}

SheepConstructor.prototype.collisionDetect = function(gameObj){
  if (isIntersected(this.boundaries, gameObj.boundaries)){
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

SheepConstructor.prototype.updateBoundaries = function(newBounds, newX, newY){
  this.boundaries.xBounds = newBounds.xBounds;
  this.boundaries.yBounds = newBounds.yBounds;
  this.x = newX;
  this.y = newY;
}

function isIntersected(sheepBounds, collidingObjectBound){
  //takes two arrays, both should be in the same x/y coordinate plane
  let xReturnable = false;
  sheepBounds.xBounds.forEach(function(xBound){
    if(xBound > collidingObjectBound.xBounds[0] && xBound < collidingObjectBound.xBounds[1]){
      xReturnable = true;
    }
  })
  let yReturnable = false;
  sheepBounds.yBounds.forEach(function(yBound){
    if(yBound > collidingObjectBound.yBounds[0] && yBound < collidingObjectBound.yBounds[1]){
      yReturnable = true;
    }
  })
  return (xReturnable && yReturnable);
}

function potentialBoundaries(x, y){
  return {
    xBounds: [x - 5, x + 5],
    yBounds: [y - 5, y + 5]
  }
}

function collideWithOtherSheep (otherSheep){
console.log('hitting here');
  let returnable = false;

  otherSheep.forEach(function(sheep){
    if(isIntersected(this.boundaries, sheep.boundaries)){
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
