import React from 'react'
import NavLink from './NavLink'
import UserInfo from './login/UserInfo'
import {Link}  from 'react-router'

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
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">

            <span className="mdl-layout-title">
              Aviator
            </span>

          </div>


            <nav className="mdl-layout_navigation ">
              <NavLink className="mdl-layout__tab" to="/">Home</NavLink>
              <NavLink className="mdl-layout__tab" to="/game">Games</NavLink>
              <NavLink className="mdl-layout__tab" to="/movies">Movies</NavLink>
              <NavLink className="mdl-layout__tab" to="/articles">Articles</NavLink>
              <NavLink className="mdl-layout__tab" to="/safety">Safety Information</NavLink>
              <UserInfo isLoggedIn={this.state.isLoggedIn}  />
            </nav>
        </header>

        <main className="mdl-layout__content">
          <div className="page-content">
            {this.props.children}
          </div>
        </main>


      </div>
    )
  }
}
