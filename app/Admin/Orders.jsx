import React from 'react'


class RequestHeader extends React.Component{
  render(){
    return(
      <thead>
        <tr>
          <th>Passenger Name</th>
          <th>Seat</th>
          <th>Items</th>
        </tr>
      </thead>
    )
  }
}

export default class Orders extends React.Component{
  render(){
    let requests = this.props.orderRequests.map(function(request, i){
      let value = request.seatNumber.toString().concat(request.seatLetter);
      let items = request.items.map(function(item, j){
        return <li key={j}>{item}</li>
      })
      return (
        <tr key={i}>
          <td>{request.passengerName}</td>
          <td>{value}</td>
          <td>
            <ul>
              {items}
            </ul>
          </td>
        </tr>
      )
    })
    return (
      <div>
        <h2>Order Requests</h2>
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
