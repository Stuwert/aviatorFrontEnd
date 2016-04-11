import React from 'react'
import {socket} from '../configinfo'

export default class SocketEvent extends React.Component{
  constructor(props){
    super(props)
  }
  handleEvent(){
    console.log(this.props.emitter);
    socket.emit(this.props.emitter, this.props.id)
  }
  render(){
    return(
      <button onClick={this.handleEvent.bind(this)}>Close</button>
    )
  }

}
