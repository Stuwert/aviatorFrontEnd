import UserDispatcher from '../dispatcher/UserDispatcher'
import userConstants from '../constants/userConstants'


let userActions = {
  setUser: function(user){
    UserDispatcher.handleAction({
      actionType: userConstants.SET_USER,
      data: user
    })
  },
  removeUser: function(user){
    UserDispatcher.handleAction({
      actionType: userConstants.REMOVE_USER,
      data: user
    })
  }
}


module.exports = userActions;
