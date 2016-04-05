import React from 'react';
import ReactDOM from 'react-dom';

export default class CanvasRender extends React.Component {
  componentDidMount(){
    this.props.canvas.width = 512;
    this.props.canvas.height = 512;
    ReactDOM.findDOMNode(this).appendChild(this.props.canvas);
  }
  render(){
    return(
      <div />
    )
  }
}
