import React from 'react';
import Orders from './Orders.jsx'
import HelpRequests from './HelpRequests.jsx'
import {socket} from '../configinfo'

import UserStore from '../flux/stores/userStore'
import userActions from '../flux/actions/userActions'

export default class Admin extends React.Component{
  constructor(){
    super();
    this.state = {
      helpRequests : [],
      orderRequests : []
    }
    var that = this;
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
  }
  updateOrderRequests(data){
    this.setState({ orderRequests: data })
  }
  closeHelpRequest(key){
    console.log(key);
    // socket.emit('completeHelpRequest', key);
  }
  render(){
    if(UserStore.getUser().authorization){
      return(
        <div>
          <Orders orderRequests={this.state.orderRequests}/>
          <HelpRequests helpRequests={this.state.helpRequests} />
        </div>
      )
    }else{
      return <div></div>
    }
  }
}
