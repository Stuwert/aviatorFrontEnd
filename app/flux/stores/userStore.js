

import UserDispatcher from '../dispatcher/UserDispatcher'
import userConstants from '../constants/userConstants'
import objectAssign from 'react/lib/Object.assign'
import {EventEmitter} from 'events'

let CHANGE_EVENT = 'change'

let _store = {
  authorization: false,
  name: "",
  seatNumber: 0,
  seatLetter: "",
  email: "",
  milesEarned: null,
  userExists: false,
  status: ""
}

//set informations

let userStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb)
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getUser: function(){
    return _store;
  }
})

let setUser = function(newUser){
  _store.authorization = newUser.authorization;
  _store.name = newUser.name;
  _store.seatNumber = newUser.seatNumber;
  _store.seatLetter = newUser.seatLetter;
  _store.email = newUser.email;
  _store.milesEarned = newUser.milesEarned;
  _store.userExists = newUser.userExists;
  _store.status = newUser.status;
}

let removeUser = function(){
  _store.authorization = false;
  _store.name = "";
  _store.seatNumber = 0;
  _store.seatLetter = "";
  _store.email = ""
  _store.milesEarned = null;
  _store.userExists = false;
  _store.status = ""
}

UserDispatcher.register(function(payload){
  let action = payload.action;
  switch(action.actionType){
    case userConstants.SET_USER:
      setUser(action.data);
      userStore.emit(CHANGE_EVENT);
      break;
    case userConstants.REMOVE_USER:
      removeUser();
      userStore.emit(CHANGE_EVENT)
    default:
      return true;
  }
})

module.exports = userStore;
