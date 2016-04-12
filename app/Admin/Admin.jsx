import React from 'react';
import Orders from './Orders.jsx'
import HelpRequests from './HelpRequests.jsx'
import {socket} from '../configinfo'

import UserStore from '../flux/stores/userStore'
import userActions from '../flux/actions/userActions'
import {Button, Card, CardTitle, CardText, Textfield, Grid, Cell, Header, Layout, Content} from 'react-mdl'


export default class Admin extends React.Component{
  constructor(){
    super();
    this.state = {
      helpRequests : [],
      orderRequests : []
    }
    socket.on('helpRequests', function(requests){
      this.updateHelpRequests(requests)
    }.bind(this))

    socket.on('orderRequests', function(requests){
      this.updateOrderRequests(requests)
    }.bind(this))
  }
  componentDidMount(){
    socket.emit('joinAdmin')
  }
  componentWillUnMount(){
    socket.removeListener('helpRequests')
    socket.removeListener('orderRequests')
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
          <Grid>
            <Cell col={12}>
              <div className="mdl-color__accent">
                <h1>
                  Admin
                </h1>
              </div>
            </Cell>
          </Grid>
          <Grid>
            <Cell col={6}>
              <Orders orderRequests={this.state.orderRequests}/>
            </Cell>
            <Cell col={6}>
              <HelpRequests helpRequests={this.state.helpRequests} />
            </Cell>
          </Grid>
        </div>
      )
    }else{
      return <div></div>
    }
  }
}
