import React from 'react';
import {Link} from 'react-router'

export default class Signup extends React.Component{
  render(){
    if(this.props.isLoggedIn){
      return(
        <div>
            <Link to='/food'>Food</Link>
            <Link to='/help'>Help</Link>
            <Link to="/logout">Log Out</Link>
        </div>
      )
    }else{
      return (
        <Link  to="/login">Log In</Link>
      )
    }
  }
}
