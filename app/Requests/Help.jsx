import React from 'react';
import config from '../configinfo'
import userStore from '../flux/stores/userStore'

let socket = config.socket;

export default class Food extends React.Component{
  constructor(){
    super()
    socket.on('requestReceived', function(received){
      alert(received)
    })
    this.state = {
      title: '',
      details: ''
    }
  }
  handleSubmit(e){
    e.preventDefault()
    socket.emit("makeHelpRequest", this.state, userStore.getUser())
    this.setState({
      title: '',
      details: ''
    })
  }
  detailsChange(e){
    this.setState({
      details: e.target.value
    })
  }
  titleChange(e){
    this.setState({
      title: e.target.value
    })
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" onChange={this.titleChange.bind(this)} />
        <label htmlFor="details">Details</label>
        <input id="details" type="text" onChange={this.detailsChange.bind(this)} />
        <button type="submit">Submit Request</button>
      </form>
    )
  }
}
