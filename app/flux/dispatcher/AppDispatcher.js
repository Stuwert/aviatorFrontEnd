let Dispatcher = require('flux').Dispatcher;
let AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action){
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  })
}

module.exports = AppDispatcher;
