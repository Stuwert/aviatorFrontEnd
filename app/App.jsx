import React from 'react'
import NavLink from './NavLink'
import UserInfo from './login/UserInfo'

import userStore from './flux/stores/userStore'
import userActions from './flux/actions/userActions'


//add socket request for help


export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      isLoggedIn : false
    }
  }
  componentDidMount(){
    userStore.addChangeListener(this._onChange.bind(this))
  }
  componentWillUnmount(){
   userStore.removeChangeListener(this._onChange.bind(this));
  }
  _onChange(){
    this.setState({
      isLoggedIn: userStore.getUser().userExists
    })
    console.log(this.state);
  }
  render(){
    return (
      <div>
        <ul role="nav" className="navbar">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/game">Games</NavLink></li>
          <li><NavLink to="/movies">Movies</NavLink></li>
          <li><NavLink to="/articles">Articles</NavLink></li>
          <li><NavLink to="/safety">Safety Information</NavLink></li>
          <li><UserInfo isLoggedIn={this.state.isLoggedIn}  /></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
