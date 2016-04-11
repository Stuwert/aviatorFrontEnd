import React from 'react'
import SocketEvent from './SocketEvent'

class RequestHeader extends React.Component{
  render(){
    return(
      <thead>
        <tr>
          <th>Request Title</th>
          <th>Passenger Name</th>
          <th>Seat</th>
          <th>Request Details</th>
          <th>Complete ?</th>
        </tr>
      </thead>
    )
  }
}

export default class HelpRequests extends React.Component{
  render(){
    var requests = this.props.helpRequests.map(function(request, i){
      let value = request.seatNumber.toString().concat(request.seatLetter);
      return (
        <tr key={request._id}>
          <td>{request.title}</td>
          <td>{request.passengerName}</td>
          <td>{value}</td>
          <td>{request.details}</td>
          <td><SocketEvent emitter={"completeHelpRequest"} id={request._id} /></td>
        </tr>
      )
    })
    return (
      <div>
        <h2>Help Requests</h2>
        <table>
          <RequestHeader />
          <tbody>
            {requests}
          </tbody>
        </table>
      </div>
    )
  }
}
