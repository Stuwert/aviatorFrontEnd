import React from 'react';
import userActions from '../flux/actions/userActions'
import UserStore from '../flux/stores/userStore'

export default class Logout extends React.Component{
  componentDidMount(){
    userActions.removeUser();
  }
  render(){
    return (
      <div>Thanks for showing up!</div>
    )
  }
}
