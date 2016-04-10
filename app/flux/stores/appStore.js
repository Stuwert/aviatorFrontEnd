

import AppDispatcher from '../dispatcher/GameDispatcher'
import gameConstants from '../constants/gameConstants'
import objectAssign from 'react/lib/Object.assign'
import {EventEmitter} from 'events'

let CHANGE_EVENT = 'change'

let _store = {

}

//set informations

let gameStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb)
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  }
})

AppDispatcher.register(function(payload){
  let action = payload.action;
  switch(action.actionType){
    
    default:
      return true;
  }
})

module.exports = appStore;
