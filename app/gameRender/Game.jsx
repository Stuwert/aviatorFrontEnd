import Dog from './Dog.jsx'
import Pen from './Pen.jsx'
import SheepGroup from './SheepGroup'


export default class Game {
  constructor(sheepNum){
    this.sheep = new SheepGroup(sheepNum);
    this.dog = new Dog();
    this.pen = new Pen();
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.now = Date.now();
    this.then = Date.now();
    this.keysDown = {};
  }
  update(modifier){
    this.dog.update(modifier, this.keysDown);
    // this.sheep.update();
  }
  render(){
    this.ctx.fillStyle = 'rgb(67,247,51)'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.dog.image, this.dog.x, this.dog.y);
    this.ctx.drawImage(this.pen.image, this.pen.xLow, this.pen.yLow)
    this.sheep.render(this.ctx)
  }
  main(){
    this.now = Date.now();
    this.delta = this.now - this.then;
    this.update(this.delta / 1000)
    // this.dog.catchDog(); -- Should be already executed inside dog func
    this.render();
    this.then = this.now;
    requestAnimationFrame(this.main.bind(this));
  }
  // addKey(e){
  //   this.keysDown[e.keyCode] = true;
  // }
  // removeKey(e){
  //   console.log(e);
  //   delete this.keysDown[e.keyCode];
  // }
  setKeysDown(newObj){
    this.keysDown = newObj;
  }
}
