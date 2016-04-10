import React from 'react'


class RequestHeader extends React.Component{
  render(){
    return(
      <thead>
        <tr>
          <th>Request Title</th>
          <th>Passenger Name</th>
          <th>Seat</th>
          <th>Request Details</th>
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
        <tr key={i}>
          <td>{request.title}</td>
          <td>{request.passengerName}</td>
          <td>{value}</td>
          <td>{request.details}</td>
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
