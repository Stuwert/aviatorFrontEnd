let Dispatcher = require('flux').Dispatcher;
let UserDispatcher = new Dispatcher();

UserDispatcher.handleAction = function(action){
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  })
}

module.exports = UserDispatcher;
