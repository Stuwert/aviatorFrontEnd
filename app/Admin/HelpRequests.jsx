import React from 'react'
import SocketEvent from './SocketEvent'
import {List, ListItemContent, ListItem, ListItemAction } from 'react-mdl'


export default class HelpRequests extends React.Component{
  render(){
    var requests = this.props.helpRequests.map(function(request, i){
      let seat = request.seatNumber.toString().concat(request.seatLetter);
      return (
        <ListItem key={request._id} threeLine>
          <ListItemContent subtitle={request.details}>{request.passengerName}</ListItemContent>
          <ListItemAction info={seat}>
            <SocketEvent emitter={"completeHelpRequest"} id={request._id} />
          </ListItemAction>
      </ListItem>
      )
    })
    return (
      <div>
        <h2>Helps</h2>
        <List>
          {requests}
        </List>
      </div>
    )
  }
}
