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

SheepGroup.prototype.update = function(){

}

SheepGroup.prototype.render = function(ctx){
  this.activeSheep.forEach(function(sheep){
    ctx.fillStyle = 'rgb(250, 250, 250)'
    ctx.fillRect(sheep.x, sheep.y, 10, 10)
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
