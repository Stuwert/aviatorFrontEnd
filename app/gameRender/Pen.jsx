export default class Pen {
  constructor(){
    this.image = new Image();
    this.image.src = require('../images/pen.png')
    this.boundaries = {
      xBounds : [250, 300],
      yBounds : [250, 300]
    }
    this.type = 'pen'
  }
}
