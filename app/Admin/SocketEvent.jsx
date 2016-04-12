import React from 'react'
import {socket} from '../configinfo'
import {Switch} from 'react-mdl'

export default class SocketEvent extends React.Component{
  constructor(props){
    super(props)
  }
  handleEvent(){
    socket.emit(this.props.emitter, this.props.id)
  }
  render(){
    return(
      <Switch onClick={this.handleEvent.bind(this)} ripple />
    )
  }

}
