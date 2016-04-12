import React from 'react';
import NavLink from '../NavLink'

export default class Signup extends React.Component{
  render(){
    if(this.props.isLoggedIn){
      return(
        <div>
          <NavLink className="mdl-layout__tab" to='/food'>Food</NavLink>
          <NavLink className="mdl-layout__tab" to='/help'>Help</NavLink>
          <NavLink className="mdl-layout__tab" to="/logout">Log Out</NavLink>
        </div>
      )
    }else{
      return (
        <NavLink className="mdl-layout__tab" to="/login">Log In</NavLink>
      )
    }
  }
}
