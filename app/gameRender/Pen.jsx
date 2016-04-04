export default class Pen {
  constructor(){
    this.image = new Image();
    this.image.src = './pen.png'
    this.xLow = 250
    this.xHigh = 300
    this.yLow = 250
    this.yHigh = 300
    this.type = 'pen'
  }
}
