import React from 'react';
import Orders from './Orders.jsx'
import HelpRequests from './HelpRequests.jsx'
import {socket} from '../configinfo'

export default class Admin extends React.Component{
  constructor(){
    super();
    this.state = {
      helpRequests : [],
      orderRequests : []
    }
    var that = this;
    console.log(this.state);
    socket.on('helpRequests', function(requests){
      that.updateHelpRequests(requests)
    })

    socket.on('orderRequests', function(requests){
      that.updateOrderRequests(requests)
    })
  }
  componentDidMount(){
    socket.emit('joinAdmin')
  }
  componentWillUnMount(){
    socket.emit('leaveAdmin')
  }
  updateHelpRequests(data){
    this.setState({ helpRequests : data })
    console.log(this.state);
  }
  updateOrderRequests(data){
    this.setState({ orderRequests: data })
    console.log(this.state);
  }
  render(){
    return(
      <div>
        <Orders />
        <HelpRequests />
      </div>
    )
  }
}
