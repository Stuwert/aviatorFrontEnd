import SheepConstructor from './Sheep.jsx'

export default class SheepGroup {
  constructor(sheepNum){
    this.activeSheep = []
    for(var i = 0; i < sheepNum; i++){
      // currently a workaround to not having a better sheep generator
      this.activeSheep.push(new SheepConstructor(i * 10 + 10, i * 10 + 10))
    }
    this.lostSheep = [];
    this.pennedSheep = []
  }
}


// Sheep.prototype.killSheep = function(sheep, i){
//
// }

SheepGroup.prototype.penSheep = function(i){
  let sheepToPen = this.activeSheep.splice(i, 1);
  this.pennedSheep.push(sheepToPen)
}

SheepGroup.prototype.loseSheep = function(i){
  let aLostSheep = this.activeSheep.splice(i, 1);
  this.lostSheep.push(aLostSheep);
}

SheepGroup.prototype.render = function(ctx){
  this.activeSheep.forEach(function(sheep){
    ctx.fillStyle = 'rgb(250, 250, 250)'
    ctx.fillRect(sheep.x - 5, sheep.y - 5, 10, 10)
  })
}

SheepGroup.prototype.update = function(modifier, dog, pen){
  var that = this;
  this.activeSheep.forEach(function(sheep, i){
    sheep.dogDistance(dog);
    let otherSheep = that.activeSheep.slice(0, that.activeSheep.length);
    otherSheep.splice(i, 1);
    sheep.move(modifier, otherSheep);
    if(sheep.collisionDetect(pen)){
      that.penSheep(i)
    }
    if(sheep.boundaryCollision()){
      that.loseSheep(i);
    }
  })
}
//need to make a for each sheep loop that does the following
// finds dog dogDistance
// finds other sheep
// detects collisions
// with sheep
// with wolf
// with boundaries
// decides movement
// moves
