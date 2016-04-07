import React from 'react';
import ReactDOM from 'react-dom';

export default class CanvasRender extends React.Component {
  componentDidMount(){
    ReactDOM.findDOMNode(this).appendChild(this.props.game.canvas);
    this.props.game.renderGame();
  }
  render(){
    return(
      <div />
    )
  }
}
