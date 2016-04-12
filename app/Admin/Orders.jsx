import React from 'react'
import {List, ListItemContent, ListItem, ListItemAction } from 'react-mdl'
import SocketEvent from './SocketEvent'


export default class Orders extends React.Component{
  render(){
    let requests = this.props.orderRequests.map(function(request){
      let seat = request.seatNumber.toString().concat(request.seatLetter)
      return (
        <ListItem key={request._id} twoLine>
          <ListItemContent subtitle={request.items.join(", ")}>{request.passengerName}</ListItemContent>
          <ListItemAction info={seat}>
            <SocketEvent emitter={'completeOrderRequest'} id={request._id} />
          </ListItemAction>
        </ListItem>
      )
    })
    return (
      <div>
        <h2>Orders</h2>
        <List>
          {requests}
        </List>
      </div>
    )
  }
}
