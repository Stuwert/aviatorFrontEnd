webpackJsonp([0,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(153);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(154);

	var _App = __webpack_require__(211);

	var _App2 = _interopRequireDefault(_App);

	var _Home = __webpack_require__(281);

	var _Home2 = _interopRequireDefault(_Home);

	var _userStore = __webpack_require__(273);

	var _userStore2 = _interopRequireDefault(_userStore);

	var _userActions = __webpack_require__(280);

	var _userActions2 = _interopRequireDefault(_userActions);

	var _main = __webpack_require__(341);

	var _main2 = _interopRequireDefault(_main);

	var _Movies = __webpack_require__(367);

	var _Movies2 = _interopRequireDefault(_Movies);

	var _Movie = __webpack_require__(368);

	var _Movie2 = _interopRequireDefault(_Movie);

	var _Articles = __webpack_require__(369);

	var _Articles2 = _interopRequireDefault(_Articles);

	var _Article = __webpack_require__(370);

	var _Article2 = _interopRequireDefault(_Article);

	var _Safety = __webpack_require__(371);

	var _Safety2 = _interopRequireDefault(_Safety);

	var _Login = __webpack_require__(333);

	var _Login2 = _interopRequireDefault(_Login);

	var _Logout = __webpack_require__(373);

	var _Logout2 = _interopRequireDefault(_Logout);

	var _Signup = __webpack_require__(374);

	var _Signup2 = _interopRequireDefault(_Signup);

	var _Food = __webpack_require__(375);

	var _Food2 = _interopRequireDefault(_Food);

	var _Help = __webpack_require__(376);

	var _Help2 = _interopRequireDefault(_Help);

	var _Admin = __webpack_require__(377);

	var _Admin2 = _interopRequireDefault(_Admin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// require('file?name=favicon-plane.ico!./favicon-plane.ico');
	__webpack_require__(381);

	//Require


	//User Store


	//importing entertainment


	//importing auth info


	//importing Requests info


	//importing admin info


	_reactDom2.default.render(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _App2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _Login2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/logout', component: _Logout2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/food', component: _Food2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/help', component: _Help2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/game', component: _main2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/movies', component: _Movies2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/movies/:name', component: _Movie2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/articles', component: _Articles2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/articles/:title', component: _Article2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/safety', component: _Safety2.default })
	  ),
	  _react2.default.createElement(_reactRouter.Route, { path: '/admin', component: _Admin2.default })
	), document.querySelector('#app'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(154);

	var _reactMdl = __webpack_require__(212);

	var _userStore = __webpack_require__(273);

	var _userStore2 = _interopRequireDefault(_userStore);

	var _userActions = __webpack_require__(280);

	var _userActions2 = _interopRequireDefault(_userActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//add socket request for help

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

	    _this.state = {
	      isLoggedIn: false,
	      activeTab: 1
	    };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _userStore2.default.addChangeListener(this._onChange.bind(this));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _userStore2.default.removeChangeListener(this._onChange.bind(this));
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange() {
	      this.setState({
	        isLoggedIn: _userStore2.default.getUser().userExists
	      });
	      console.log(this.state);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactMdl.Layout,
	          { fixedHeader: true },
	          _react2.default.createElement(
	            _reactMdl.Header,
	            { title: 'Aviator' },
	            _react2.default.createElement(
	              _reactMdl.Navigation,
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/' },
	                'Home'
	              ),
	              this.state.isLoggedIn ? _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/logout' },
	                'Log Out'
	              ) : _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/login' },
	                'Log In'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            _reactMdl.Drawer,
	            { title: 'Aviator' },
	            _react2.default.createElement(
	              _reactMdl.Navigation,
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/' },
	                'Home'
	              ),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/game' },
	                'Games'
	              ),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/movies' },
	                'Movies'
	              ),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/articles' },
	                'Articles'
	              ),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/safety' },
	                'Safety Information'
	              ),
	              this.state.isLoggedIn ? _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/food' },
	                'Food'
	              ) : null,
	              this.state.isLoggedIn ? _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/help' },
	                'Help'
	              ) : null,
	              this.state.isLoggedIn ? _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/logout' },
	                'Log Out'
	              ) : null,
	              !this.state.isLoggedIn ? _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/login' },
	                'Log In'
	              ) : null
	            )
	          ),
	          _react2.default.createElement(
	            _reactMdl.Content,
	            null,
	            _react2.default.createElement(
	              'div',
	              { className: 'page-content' },
	              this.props.children
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	exports.default = App;

/***/ },
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _UserDispatcher = __webpack_require__(274);

	var _UserDispatcher2 = _interopRequireDefault(_UserDispatcher);

	var _userConstants = __webpack_require__(278);

	var _userConstants2 = _interopRequireDefault(_userConstants);

	var _Object = __webpack_require__(38);

	var _Object2 = _interopRequireDefault(_Object);

	var _events = __webpack_require__(279);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CHANGE_EVENT = 'change';

	var _store = {
	  authorization: false,
	  name: "",
	  seatNumber: 0,
	  seatLetter: "",
	  email: "",
	  milesEarned: null,
	  userExists: false,
	  status: ""
	};

	//set informations

	var userStore = (0, _Object2.default)({}, _events.EventEmitter.prototype, {
	  addChangeListener: function addChangeListener(cb) {
	    this.on(CHANGE_EVENT, cb);
	  },
	  removeChangeListener: function removeChangeListener(cb) {
	    this.removeListener(CHANGE_EVENT, cb);
	  },
	  getUser: function getUser() {
	    return _store;
	  }
	});

	var setUser = function setUser(newUser) {
	  _store.authorization = newUser.authorization;
	  _store.name = newUser.name;
	  _store.seatNumber = newUser.seatNumber;
	  _store.seatLetter = newUser.seatLetter;
	  _store.email = newUser.email;
	  _store.milesEarned = newUser.milesEarned;
	  _store.userExists = newUser.userExists;
	  _store.status = newUser.status;
	};

	var removeUser = function removeUser() {
	  _store.authorization = false;
	  _store.name = "";
	  _store.seatNumber = 0;
	  _store.seatLetter = "";
	  _store.email = "";
	  _store.milesEarned = null;
	  _store.userExists = false;
	  _store.status = "";
	};

	_UserDispatcher2.default.register(function (payload) {
	  var action = payload.action;
	  switch (action.actionType) {
	    case _userConstants2.default.SET_USER:
	      setUser(action.data);
	      userStore.emit(CHANGE_EVENT);
	      break;
	    case _userConstants2.default.REMOVE_USER:
	      removeUser();
	      userStore.emit(CHANGE_EVENT);
	    default:
	      return true;
	  }
	});

	module.exports = userStore;

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Dispatcher = __webpack_require__(275).Dispatcher;
	var UserDispatcher = new Dispatcher();

	UserDispatcher.handleAction = function (action) {
	  this.dispatch({
	    source: 'VIEW_ACTION',
	    action: action
	  });
	};

	module.exports = UserDispatcher;

/***/ },
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  SET_USER: "SET_USER",
	  REMOVE_USER: "REMOVE_USER"
	};

/***/ },
/* 279 */,
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _UserDispatcher = __webpack_require__(274);

	var _UserDispatcher2 = _interopRequireDefault(_UserDispatcher);

	var _userConstants = __webpack_require__(278);

	var _userConstants2 = _interopRequireDefault(_userConstants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var userActions = {
	  setUser: function setUser(user) {
	    _UserDispatcher2.default.handleAction({
	      actionType: _userConstants2.default.SET_USER,
	      data: user
	    });
	  },
	  removeUser: function removeUser(user) {
	    _UserDispatcher2.default.handleAction({
	      actionType: _userConstants2.default.REMOVE_USER,
	      data: user
	    });
	  }
	};

	module.exports = userActions;

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _configinfo = __webpack_require__(282);

	var _configinfo2 = _interopRequireDefault(_configinfo);

	var _reactRouter = __webpack_require__(154);

	var _Login = __webpack_require__(333);

	var _Login2 = _interopRequireDefault(_Login);

	var _jquery = __webpack_require__(334);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _reactMdl = __webpack_require__(212);

	var _userStore = __webpack_require__(273);

	var _userStore2 = _interopRequireDefault(_userStore);

	var _ArticleCard = __webpack_require__(335);

	var _ArticleCard2 = _interopRequireDefault(_ArticleCard);

	var _GameCard = __webpack_require__(336);

	var _GameCard2 = _interopRequireDefault(_GameCard);

	var _MovieCard = __webpack_require__(337);

	var _MovieCard2 = _interopRequireDefault(_MovieCard);

	var _FlightInfoCard = __webpack_require__(338);

	var _FlightInfoCard2 = _interopRequireDefault(_FlightInfoCard);

	var _Welcome = __webpack_require__(339);

	var _Welcome2 = _interopRequireDefault(_Welcome);

	var _Hello = __webpack_require__(340);

	var _Hello2 = _interopRequireDefault(_Hello);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import cards


	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);

	  function Home() {
	    _classCallCheck(this, Home);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this));

	    _this.state = {
	      aircraftType: null,
	      flightNumber: null,
	      milesFlown: null,
	      departureCity: null,
	      departureAirport: null,
	      departureTime: null,
	      estimatedArrivalTime: null,
	      arrivalCity: null,
	      arrivalAirport: null
	    };
	    return _this;
	  }

	  _createClass(Home, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var that = this;
	      _jquery2.default.ajax(_configinfo2.default.config + "/api/flightinfo", {
	        method: 'get'
	      }).done(function (data) {
	        console.log(data);
	        this.setState(data);
	      }.bind(this));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactMdl.Grid,
	          null,
	          _react2.default.createElement(
	            _reactMdl.Cell,
	            { phone: 12, tablet: 12, col: 6 },
	            _userStore2.default.getUser().userExists ? _react2.default.createElement(_Hello2.default, null) : _react2.default.createElement(_Welcome2.default, null)
	          ),
	          _react2.default.createElement(
	            _reactMdl.Cell,
	            { phone: 12, tablet: 12, col: 6 },
	            _react2.default.createElement(_FlightInfoCard2.default, { info: this.state })
	          )
	        ),
	        _react2.default.createElement(
	          _reactMdl.Grid,
	          null,
	          _react2.default.createElement(
	            _reactMdl.Cell,
	            { phone: 6, col: 4 },
	            _react2.default.createElement(_GameCard2.default, null)
	          ),
	          _react2.default.createElement(
	            _reactMdl.Cell,
	            { phone: 6, col: 4 },
	            _react2.default.createElement(_MovieCard2.default, null)
	          ),
	          _react2.default.createElement(
	            _reactMdl.Cell,
	            { align: 'middle', phone: 6, col: 4 },
	            _react2.default.createElement(_ArticleCard2.default, null)
	          )
	        )
	      );
	    }
	  }]);

	  return Home;
	}(_react2.default.Component);

	exports.default = Home;

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _socket = __webpack_require__(283);

	var _socket2 = _interopRequireDefault(_socket);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var link = 'http://localhost:3000';

	module.exports = {
	  config: link,
	  socket: _socket2.default.connect(link)
	};

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var url = __webpack_require__(284);
	var parser = __webpack_require__(289);
	var Manager = __webpack_require__(297);
	var debug = __webpack_require__(286)('socket.io-client');

	/**
	 * Module exports.
	 */

	module.exports = exports = lookup;

	/**
	 * Managers cache.
	 */

	var cache = exports.managers = {};

	/**
	 * Looks up an existing `Manager` for multiplexing.
	 * If the user summons:
	 *
	 *   `io('http://localhost/a');`
	 *   `io('http://localhost/b');`
	 *
	 * We reuse the existing instance based on same scheme/port/host,
	 * and we initialize sockets for each namespace.
	 *
	 * @api public
	 */

	function lookup(uri, opts) {
	  if (typeof uri == 'object') {
	    opts = uri;
	    uri = undefined;
	  }

	  opts = opts || {};

	  var parsed = url(uri);
	  var source = parsed.source;
	  var id = parsed.id;
	  var path = parsed.path;
	  var sameNamespace = cache[id] && path in cache[id].nsps;
	  var newConnection = opts.forceNew || opts['force new connection'] ||
	                      false === opts.multiplex || sameNamespace;

	  var io;

	  if (newConnection) {
	    debug('ignoring socket cache for %s', source);
	    io = Manager(source, opts);
	  } else {
	    if (!cache[id]) {
	      debug('new io instance for %s', source);
	      cache[id] = Manager(source, opts);
	    }
	    io = cache[id];
	  }

	  return io.socket(parsed.path);
	}

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	exports.protocol = parser.protocol;

	/**
	 * `connect`.
	 *
	 * @param {String} uri
	 * @api public
	 */

	exports.connect = lookup;

	/**
	 * Expose constructors for standalone build.
	 *
	 * @api public
	 */

	exports.Manager = __webpack_require__(297);
	exports.Socket = __webpack_require__(325);


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module dependencies.
	 */

	var parseuri = __webpack_require__(285);
	var debug = __webpack_require__(286)('socket.io-client:url');

	/**
	 * Module exports.
	 */

	module.exports = url;

	/**
	 * URL parser.
	 *
	 * @param {String} url
	 * @param {Object} An object meant to mimic window.location.
	 *                 Defaults to window.location.
	 * @api public
	 */

	function url(uri, loc){
	  var obj = uri;

	  // default to window.location
	  var loc = loc || global.location;
	  if (null == uri) uri = loc.protocol + '//' + loc.host;

	  // relative path support
	  if ('string' == typeof uri) {
	    if ('/' == uri.charAt(0)) {
	      if ('/' == uri.charAt(1)) {
	        uri = loc.protocol + uri;
	      } else {
	        uri = loc.host + uri;
	      }
	    }

	    if (!/^(https?|wss?):\/\//.test(uri)) {
	      debug('protocol-less url %s', uri);
	      if ('undefined' != typeof loc) {
	        uri = loc.protocol + '//' + uri;
	      } else {
	        uri = 'https://' + uri;
	      }
	    }

	    // parse
	    debug('parse %s', uri);
	    obj = parseuri(uri);
	  }

	  // make sure we treat `localhost:80` and `localhost` equally
	  if (!obj.port) {
	    if (/^(http|ws)$/.test(obj.protocol)) {
	      obj.port = '80';
	    }
	    else if (/^(http|ws)s$/.test(obj.protocol)) {
	      obj.port = '443';
	    }
	  }

	  obj.path = obj.path || '/';

	  var ipv6 = obj.host.indexOf(':') !== -1;
	  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

	  // define unique id
	  obj.id = obj.protocol + '://' + host + ':' + obj.port;
	  // define href
	  obj.href = obj.protocol + '://' + host + (loc && loc.port == obj.port ? '' : (':' + obj.port));

	  return obj;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 285 */
/***/ function(module, exports) {

	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */

	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

	var parts = [
	    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
	];

	module.exports = function parseuri(str) {
	    var src = str,
	        b = str.indexOf('['),
	        e = str.indexOf(']');

	    if (b != -1 && e != -1) {
	        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	    }

	    var m = re.exec(str || ''),
	        uri = {},
	        i = 14;

	    while (i--) {
	        uri[parts[i]] = m[i] || '';
	    }

	    if (b != -1 && e != -1) {
	        uri.source = src;
	        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
	        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
	        uri.ipv6uri = true;
	    }

	    return uri;
	};


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(287);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(288);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 288 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var debug = __webpack_require__(286)('socket.io-parser');
	var json = __webpack_require__(290);
	var isArray = __webpack_require__(293);
	var Emitter = __webpack_require__(294);
	var binary = __webpack_require__(295);
	var isBuf = __webpack_require__(296);

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	exports.protocol = 4;

	/**
	 * Packet types.
	 *
	 * @api public
	 */

	exports.types = [
	  'CONNECT',
	  'DISCONNECT',
	  'EVENT',
	  'ACK',
	  'ERROR',
	  'BINARY_EVENT',
	  'BINARY_ACK'
	];

	/**
	 * Packet type `connect`.
	 *
	 * @api public
	 */

	exports.CONNECT = 0;

	/**
	 * Packet type `disconnect`.
	 *
	 * @api public
	 */

	exports.DISCONNECT = 1;

	/**
	 * Packet type `event`.
	 *
	 * @api public
	 */

	exports.EVENT = 2;

	/**
	 * Packet type `ack`.
	 *
	 * @api public
	 */

	exports.ACK = 3;

	/**
	 * Packet type `error`.
	 *
	 * @api public
	 */

	exports.ERROR = 4;

	/**
	 * Packet type 'binary event'
	 *
	 * @api public
	 */

	exports.BINARY_EVENT = 5;

	/**
	 * Packet type `binary ack`. For acks with binary arguments.
	 *
	 * @api public
	 */

	exports.BINARY_ACK = 6;

	/**
	 * Encoder constructor.
	 *
	 * @api public
	 */

	exports.Encoder = Encoder;

	/**
	 * Decoder constructor.
	 *
	 * @api public
	 */

	exports.Decoder = Decoder;

	/**
	 * A socket.io Encoder instance
	 *
	 * @api public
	 */

	function Encoder() {}

	/**
	 * Encode a packet as a single string if non-binary, or as a
	 * buffer sequence, depending on packet type.
	 *
	 * @param {Object} obj - packet object
	 * @param {Function} callback - function to handle encodings (likely engine.write)
	 * @return Calls callback with Array of encodings
	 * @api public
	 */

	Encoder.prototype.encode = function(obj, callback){
	  debug('encoding packet %j', obj);

	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    encodeAsBinary(obj, callback);
	  }
	  else {
	    var encoding = encodeAsString(obj);
	    callback([encoding]);
	  }
	};

	/**
	 * Encode packet as string.
	 *
	 * @param {Object} packet
	 * @return {String} encoded
	 * @api private
	 */

	function encodeAsString(obj) {
	  var str = '';
	  var nsp = false;

	  // first is type
	  str += obj.type;

	  // attachments if we have them
	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    str += obj.attachments;
	    str += '-';
	  }

	  // if we have a namespace other than `/`
	  // we append it followed by a comma `,`
	  if (obj.nsp && '/' != obj.nsp) {
	    nsp = true;
	    str += obj.nsp;
	  }

	  // immediately followed by the id
	  if (null != obj.id) {
	    if (nsp) {
	      str += ',';
	      nsp = false;
	    }
	    str += obj.id;
	  }

	  // json data
	  if (null != obj.data) {
	    if (nsp) str += ',';
	    str += json.stringify(obj.data);
	  }

	  debug('encoded %j as %s', obj, str);
	  return str;
	}

	/**
	 * Encode packet as 'buffer sequence' by removing blobs, and
	 * deconstructing packet into object with placeholders and
	 * a list of buffers.
	 *
	 * @param {Object} packet
	 * @return {Buffer} encoded
	 * @api private
	 */

	function encodeAsBinary(obj, callback) {

	  function writeEncoding(bloblessData) {
	    var deconstruction = binary.deconstructPacket(bloblessData);
	    var pack = encodeAsString(deconstruction.packet);
	    var buffers = deconstruction.buffers;

	    buffers.unshift(pack); // add packet info to beginning of data list
	    callback(buffers); // write all the buffers
	  }

	  binary.removeBlobs(obj, writeEncoding);
	}

	/**
	 * A socket.io Decoder instance
	 *
	 * @return {Object} decoder
	 * @api public
	 */

	function Decoder() {
	  this.reconstructor = null;
	}

	/**
	 * Mix in `Emitter` with Decoder.
	 */

	Emitter(Decoder.prototype);

	/**
	 * Decodes an ecoded packet string into packet JSON.
	 *
	 * @param {String} obj - encoded packet
	 * @return {Object} packet
	 * @api public
	 */

	Decoder.prototype.add = function(obj) {
	  var packet;
	  if ('string' == typeof obj) {
	    packet = decodeString(obj);
	    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
	      this.reconstructor = new BinaryReconstructor(packet);

	      // no attachments, labeled binary but no binary data to follow
	      if (this.reconstructor.reconPack.attachments === 0) {
	        this.emit('decoded', packet);
	      }
	    } else { // non-binary full packet
	      this.emit('decoded', packet);
	    }
	  }
	  else if (isBuf(obj) || obj.base64) { // raw binary data
	    if (!this.reconstructor) {
	      throw new Error('got binary data when not reconstructing a packet');
	    } else {
	      packet = this.reconstructor.takeBinaryData(obj);
	      if (packet) { // received final buffer
	        this.reconstructor = null;
	        this.emit('decoded', packet);
	      }
	    }
	  }
	  else {
	    throw new Error('Unknown type: ' + obj);
	  }
	};

	/**
	 * Decode a packet String (JSON data)
	 *
	 * @param {String} str
	 * @return {Object} packet
	 * @api private
	 */

	function decodeString(str) {
	  var p = {};
	  var i = 0;

	  // look up type
	  p.type = Number(str.charAt(0));
	  if (null == exports.types[p.type]) return error();

	  // look up attachments if type binary
	  if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
	    var buf = '';
	    while (str.charAt(++i) != '-') {
	      buf += str.charAt(i);
	      if (i == str.length) break;
	    }
	    if (buf != Number(buf) || str.charAt(i) != '-') {
	      throw new Error('Illegal attachments');
	    }
	    p.attachments = Number(buf);
	  }

	  // look up namespace (if any)
	  if ('/' == str.charAt(i + 1)) {
	    p.nsp = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (',' == c) break;
	      p.nsp += c;
	      if (i == str.length) break;
	    }
	  } else {
	    p.nsp = '/';
	  }

	  // look up id
	  var next = str.charAt(i + 1);
	  if ('' !== next && Number(next) == next) {
	    p.id = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (null == c || Number(c) != c) {
	        --i;
	        break;
	      }
	      p.id += str.charAt(i);
	      if (i == str.length) break;
	    }
	    p.id = Number(p.id);
	  }

	  // look up json data
	  if (str.charAt(++i)) {
	    try {
	      p.data = json.parse(str.substr(i));
	    } catch(e){
	      return error();
	    }
	  }

	  debug('decoded %s as %j', str, p);
	  return p;
	}

	/**
	 * Deallocates a parser's resources
	 *
	 * @api public
	 */

	Decoder.prototype.destroy = function() {
	  if (this.reconstructor) {
	    this.reconstructor.finishedReconstruction();
	  }
	};

	/**
	 * A manager of a binary event's 'buffer sequence'. Should
	 * be constructed whenever a packet of type BINARY_EVENT is
	 * decoded.
	 *
	 * @param {Object} packet
	 * @return {BinaryReconstructor} initialized reconstructor
	 * @api private
	 */

	function BinaryReconstructor(packet) {
	  this.reconPack = packet;
	  this.buffers = [];
	}

	/**
	 * Method to be called when binary data received from connection
	 * after a BINARY_EVENT packet.
	 *
	 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
	 * @return {null | Object} returns null if more binary data is expected or
	 *   a reconstructed packet object if all buffers have been received.
	 * @api private
	 */

	BinaryReconstructor.prototype.takeBinaryData = function(binData) {
	  this.buffers.push(binData);
	  if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
	    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
	    this.finishedReconstruction();
	    return packet;
	  }
	  return null;
	};

	/**
	 * Cleans up binary packet reconstruction variables.
	 *
	 * @api private
	 */

	BinaryReconstructor.prototype.finishedReconstruction = function() {
	  this.reconPack = null;
	  this.buffers = [];
	};

	function error(data){
	  return {
	    type: exports.ERROR,
	    data: 'parser error'
	  };
	}


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
	;(function () {
	  // Detect the `define` function exposed by asynchronous module loaders. The
	  // strict `define` check is necessary for compatibility with `r.js`.
	  var isLoader = "function" === "function" && __webpack_require__(292);

	  // A set of types used to distinguish objects from primitives.
	  var objectTypes = {
	    "function": true,
	    "object": true
	  };

	  // Detect the `exports` object exposed by CommonJS implementations.
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

	  // Use the `global` object exposed by Node (including Browserify via
	  // `insert-module-globals`), Narwhal, and Ringo as the default context,
	  // and the `window` object in browsers. Rhino exports a `global` function
	  // instead.
	  var root = objectTypes[typeof window] && window || this,
	      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

	  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
	    root = freeGlobal;
	  }

	  // Public: Initializes JSON 3 using the given `context` object, attaching the
	  // `stringify` and `parse` functions to the specified `exports` object.
	  function runInContext(context, exports) {
	    context || (context = root["Object"]());
	    exports || (exports = root["Object"]());

	    // Native constructor aliases.
	    var Number = context["Number"] || root["Number"],
	        String = context["String"] || root["String"],
	        Object = context["Object"] || root["Object"],
	        Date = context["Date"] || root["Date"],
	        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
	        TypeError = context["TypeError"] || root["TypeError"],
	        Math = context["Math"] || root["Math"],
	        nativeJSON = context["JSON"] || root["JSON"];

	    // Delegate to the native `stringify` and `parse` implementations.
	    if (typeof nativeJSON == "object" && nativeJSON) {
	      exports.stringify = nativeJSON.stringify;
	      exports.parse = nativeJSON.parse;
	    }

	    // Convenience aliases.
	    var objectProto = Object.prototype,
	        getClass = objectProto.toString,
	        isProperty, forEach, undef;

	    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
	    var isExtended = new Date(-3509827334573292);
	    try {
	      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
	      // results for certain dates in Opera >= 10.53.
	      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
	        // Safari < 2.0.2 stores the internal millisecond time value correctly,
	        // but clips the values returned by the date methods to the range of
	        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
	        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
	    } catch (exception) {}

	    // Internal: Determines whether the native `JSON.stringify` and `parse`
	    // implementations are spec-compliant. Based on work by Ken Snyder.
	    function has(name) {
	      if (has[name] !== undef) {
	        // Return cached feature test result.
	        return has[name];
	      }
	      var isSupported;
	      if (name == "bug-string-char-index") {
	        // IE <= 7 doesn't support accessing string characters using square
	        // bracket notation. IE 8 only supports this for primitives.
	        isSupported = "a"[0] != "a";
	      } else if (name == "json") {
	        // Indicates whether both `JSON.stringify` and `JSON.parse` are
	        // supported.
	        isSupported = has("json-stringify") && has("json-parse");
	      } else {
	        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
	        // Test `JSON.stringify`.
	        if (name == "json-stringify") {
	          var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
	          if (stringifySupported) {
	            // A test function object with a custom `toJSON` method.
	            (value = function () {
	              return 1;
	            }).toJSON = value;
	            try {
	              stringifySupported =
	                // Firefox 3.1b1 and b2 serialize string, number, and boolean
	                // primitives as object literals.
	                stringify(0) === "0" &&
	                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
	                // literals.
	                stringify(new Number()) === "0" &&
	                stringify(new String()) == '""' &&
	                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
	                // does not define a canonical JSON representation (this applies to
	                // objects with `toJSON` properties as well, *unless* they are nested
	                // within an object or array).
	                stringify(getClass) === undef &&
	                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
	                // FF 3.1b3 pass this test.
	                stringify(undef) === undef &&
	                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
	                // respectively, if the value is omitted entirely.
	                stringify() === undef &&
	                // FF 3.1b1, 2 throw an error if the given value is not a number,
	                // string, array, object, Boolean, or `null` literal. This applies to
	                // objects with custom `toJSON` methods as well, unless they are nested
	                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
	                // methods entirely.
	                stringify(value) === "1" &&
	                stringify([value]) == "[1]" &&
	                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
	                // `"[null]"`.
	                stringify([undef]) == "[null]" &&
	                // YUI 3.0.0b1 fails to serialize `null` literals.
	                stringify(null) == "null" &&
	                // FF 3.1b1, 2 halts serialization if an array contains a function:
	                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
	                // elides non-JSON values from objects and arrays, unless they
	                // define custom `toJSON` methods.
	                stringify([undef, getClass, null]) == "[null,null,null]" &&
	                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
	                // where character escape codes are expected (e.g., `\b` => `\u0008`).
	                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
	                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
	                stringify(null, value) === "1" &&
	                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
	                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
	                // serialize extended years.
	                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
	                // The milliseconds are optional in ES 5, but required in 5.1.
	                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
	                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
	                // four-digit years instead of six-digit years. Credits: @Yaffle.
	                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
	                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
	                // values less than 1000. Credits: @Yaffle.
	                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
	            } catch (exception) {
	              stringifySupported = false;
	            }
	          }
	          isSupported = stringifySupported;
	        }
	        // Test `JSON.parse`.
	        if (name == "json-parse") {
	          var parse = exports.parse;
	          if (typeof parse == "function") {
	            try {
	              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
	              // Conforming implementations should also coerce the initial argument to
	              // a string prior to parsing.
	              if (parse("0") === 0 && !parse(false)) {
	                // Simple parsing test.
	                value = parse(serialized);
	                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
	                if (parseSupported) {
	                  try {
	                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
	                    parseSupported = !parse('"\t"');
	                  } catch (exception) {}
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
	                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
	                      // certain octal literals.
	                      parseSupported = parse("01") !== 1;
	                    } catch (exception) {}
	                  }
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
	                      // points. These environments, along with FF 3.1b1 and 2,
	                      // also allow trailing commas in JSON objects and arrays.
	                      parseSupported = parse("1.") !== 1;
	                    } catch (exception) {}
	                  }
	                }
	              }
	            } catch (exception) {
	              parseSupported = false;
	            }
	          }
	          isSupported = parseSupported;
	        }
	      }
	      return has[name] = !!isSupported;
	    }

	    if (!has("json")) {
	      // Common `[[Class]]` name aliases.
	      var functionClass = "[object Function]",
	          dateClass = "[object Date]",
	          numberClass = "[object Number]",
	          stringClass = "[object String]",
	          arrayClass = "[object Array]",
	          booleanClass = "[object Boolean]";

	      // Detect incomplete support for accessing string characters by index.
	      var charIndexBuggy = has("bug-string-char-index");

	      // Define additional utility methods if the `Date` methods are buggy.
	      if (!isExtended) {
	        var floor = Math.floor;
	        // A mapping between the months of the year and the number of days between
	        // January 1st and the first of the respective month.
	        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	        // Internal: Calculates the number of days between the Unix epoch and the
	        // first day of the given month.
	        var getDay = function (year, month) {
	          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
	        };
	      }

	      // Internal: Determines if a property is a direct property of the given
	      // object. Delegates to the native `Object#hasOwnProperty` method.
	      if (!(isProperty = objectProto.hasOwnProperty)) {
	        isProperty = function (property) {
	          var members = {}, constructor;
	          if ((members.__proto__ = null, members.__proto__ = {
	            // The *proto* property cannot be set multiple times in recent
	            // versions of Firefox and SeaMonkey.
	            "toString": 1
	          }, members).toString != getClass) {
	            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
	            // supports the mutable *proto* property.
	            isProperty = function (property) {
	              // Capture and break the object's prototype chain (see section 8.6.2
	              // of the ES 5.1 spec). The parenthesized expression prevents an
	              // unsafe transformation by the Closure Compiler.
	              var original = this.__proto__, result = property in (this.__proto__ = null, this);
	              // Restore the original prototype chain.
	              this.__proto__ = original;
	              return result;
	            };
	          } else {
	            // Capture a reference to the top-level `Object` constructor.
	            constructor = members.constructor;
	            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
	            // other environments.
	            isProperty = function (property) {
	              var parent = (this.constructor || constructor).prototype;
	              return property in this && !(property in parent && this[property] === parent[property]);
	            };
	          }
	          members = null;
	          return isProperty.call(this, property);
	        };
	      }

	      // Internal: Normalizes the `for...in` iteration algorithm across
	      // environments. Each enumerated key is yielded to a `callback` function.
	      forEach = function (object, callback) {
	        var size = 0, Properties, members, property;

	        // Tests for bugs in the current environment's `for...in` algorithm. The
	        // `valueOf` property inherits the non-enumerable flag from
	        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
	        (Properties = function () {
	          this.valueOf = 0;
	        }).prototype.valueOf = 0;

	        // Iterate over a new instance of the `Properties` class.
	        members = new Properties();
	        for (property in members) {
	          // Ignore all properties inherited from `Object.prototype`.
	          if (isProperty.call(members, property)) {
	            size++;
	          }
	        }
	        Properties = members = null;

	        // Normalize the iteration algorithm.
	        if (!size) {
	          // A list of non-enumerable properties inherited from `Object.prototype`.
	          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
	          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
	          // properties.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, length;
	            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
	            for (property in object) {
	              // Gecko <= 1.0 enumerates the `prototype` property of functions under
	              // certain conditions; IE does not.
	              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for each non-enumerable property.
	            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
	          };
	        } else if (size == 2) {
	          // Safari <= 2.0.4 enumerates shadowed properties twice.
	          forEach = function (object, callback) {
	            // Create a set of iterated properties.
	            var members = {}, isFunction = getClass.call(object) == functionClass, property;
	            for (property in object) {
	              // Store each property name to prevent double enumeration. The
	              // `prototype` property of functions is not enumerated due to cross-
	              // environment inconsistencies.
	              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	          };
	        } else {
	          // No bugs detected; use the standard `for...in` algorithm.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
	            for (property in object) {
	              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for the `constructor` property due to
	            // cross-environment inconsistencies.
	            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
	              callback(property);
	            }
	          };
	        }
	        return forEach(object, callback);
	      };

	      // Public: Serializes a JavaScript `value` as a JSON string. The optional
	      // `filter` argument may specify either a function that alters how object and
	      // array members are serialized, or an array of strings and numbers that
	      // indicates which properties should be serialized. The optional `width`
	      // argument may be either a string or number that specifies the indentation
	      // level of the output.
	      if (!has("json-stringify")) {
	        // Internal: A map of control characters and their escaped equivalents.
	        var Escapes = {
	          92: "\\\\",
	          34: '\\"',
	          8: "\\b",
	          12: "\\f",
	          10: "\\n",
	          13: "\\r",
	          9: "\\t"
	        };

	        // Internal: Converts `value` into a zero-padded string such that its
	        // length is at least equal to `width`. The `width` must be <= 6.
	        var leadingZeroes = "000000";
	        var toPaddedString = function (width, value) {
	          // The `|| 0` expression is necessary to work around a bug in
	          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
	          return (leadingZeroes + (value || 0)).slice(-width);
	        };

	        // Internal: Double-quotes a string `value`, replacing all ASCII control
	        // characters (characters with code unit values between 0 and 31) with
	        // their escaped equivalents. This is an implementation of the
	        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
	        var unicodePrefix = "\\u00";
	        var quote = function (value) {
	          var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
	          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
	          for (; index < length; index++) {
	            var charCode = value.charCodeAt(index);
	            // If the character is a control character, append its Unicode or
	            // shorthand escape sequence; otherwise, append the character as-is.
	            switch (charCode) {
	              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
	                result += Escapes[charCode];
	                break;
	              default:
	                if (charCode < 32) {
	                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
	                  break;
	                }
	                result += useCharIndex ? symbols[index] : value.charAt(index);
	            }
	          }
	          return result + '"';
	        };

	        // Internal: Recursively serializes an object. Implements the
	        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
	        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
	          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
	          try {
	            // Necessary for host object support.
	            value = object[property];
	          } catch (exception) {}
	          if (typeof value == "object" && value) {
	            className = getClass.call(value);
	            if (className == dateClass && !isProperty.call(value, "toJSON")) {
	              if (value > -1 / 0 && value < 1 / 0) {
	                // Dates are serialized according to the `Date#toJSON` method
	                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
	                // for the ISO 8601 date time string format.
	                if (getDay) {
	                  // Manually compute the year, month, date, hours, minutes,
	                  // seconds, and milliseconds if the `getUTC*` methods are
	                  // buggy. Adapted from @Yaffle's `date-shim` project.
	                  date = floor(value / 864e5);
	                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
	                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
	                  date = 1 + date - getDay(year, month);
	                  // The `time` value specifies the time within the day (see ES
	                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
	                  // to compute `A modulo B`, as the `%` operator does not
	                  // correspond to the `modulo` operation for negative numbers.
	                  time = (value % 864e5 + 864e5) % 864e5;
	                  // The hours, minutes, seconds, and milliseconds are obtained by
	                  // decomposing the time within the day. See section 15.9.1.10.
	                  hours = floor(time / 36e5) % 24;
	                  minutes = floor(time / 6e4) % 60;
	                  seconds = floor(time / 1e3) % 60;
	                  milliseconds = time % 1e3;
	                } else {
	                  year = value.getUTCFullYear();
	                  month = value.getUTCMonth();
	                  date = value.getUTCDate();
	                  hours = value.getUTCHours();
	                  minutes = value.getUTCMinutes();
	                  seconds = value.getUTCSeconds();
	                  milliseconds = value.getUTCMilliseconds();
	                }
	                // Serialize extended years correctly.
	                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
	                  "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
	                  // Months, dates, hours, minutes, and seconds should have two
	                  // digits; milliseconds should have three.
	                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
	                  // Milliseconds are optional in ES 5.0, but required in 5.1.
	                  "." + toPaddedString(3, milliseconds) + "Z";
	              } else {
	                value = null;
	              }
	            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
	              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
	              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
	              // ignores all `toJSON` methods on these objects unless they are
	              // defined directly on an instance.
	              value = value.toJSON(property);
	            }
	          }
	          if (callback) {
	            // If a replacement function was provided, call it to obtain the value
	            // for serialization.
	            value = callback.call(object, property, value);
	          }
	          if (value === null) {
	            return "null";
	          }
	          className = getClass.call(value);
	          if (className == booleanClass) {
	            // Booleans are represented literally.
	            return "" + value;
	          } else if (className == numberClass) {
	            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
	            // `"null"`.
	            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
	          } else if (className == stringClass) {
	            // Strings are double-quoted and escaped.
	            return quote("" + value);
	          }
	          // Recursively serialize objects and arrays.
	          if (typeof value == "object") {
	            // Check for cyclic structures. This is a linear search; performance
	            // is inversely proportional to the number of unique nested objects.
	            for (length = stack.length; length--;) {
	              if (stack[length] === value) {
	                // Cyclic structures cannot be serialized by `JSON.stringify`.
	                throw TypeError();
	              }
	            }
	            // Add the object to the stack of traversed objects.
	            stack.push(value);
	            results = [];
	            // Save the current indentation level and indent one additional level.
	            prefix = indentation;
	            indentation += whitespace;
	            if (className == arrayClass) {
	              // Recursively serialize array elements.
	              for (index = 0, length = value.length; index < length; index++) {
	                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
	                results.push(element === undef ? "null" : element);
	              }
	              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
	            } else {
	              // Recursively serialize object members. Members are selected from
	              // either a user-specified list of property names, or the object
	              // itself.
	              forEach(properties || value, function (property) {
	                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
	                if (element !== undef) {
	                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
	                  // is not the empty string, let `member` {quote(property) + ":"}
	                  // be the concatenation of `member` and the `space` character."
	                  // The "`space` character" refers to the literal space
	                  // character, not the `space` {width} argument provided to
	                  // `JSON.stringify`.
	                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
	                }
	              });
	              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
	            }
	            // Remove the object from the traversed object stack.
	            stack.pop();
	            return result;
	          }
	        };

	        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
	        exports.stringify = function (source, filter, width) {
	          var whitespace, callback, properties, className;
	          if (objectTypes[typeof filter] && filter) {
	            if ((className = getClass.call(filter)) == functionClass) {
	              callback = filter;
	            } else if (className == arrayClass) {
	              // Convert the property names array into a makeshift set.
	              properties = {};
	              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
	            }
	          }
	          if (width) {
	            if ((className = getClass.call(width)) == numberClass) {
	              // Convert the `width` to an integer and create a string containing
	              // `width` number of space characters.
	              if ((width -= width % 1) > 0) {
	                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
	              }
	            } else if (className == stringClass) {
	              whitespace = width.length <= 10 ? width : width.slice(0, 10);
	            }
	          }
	          // Opera <= 7.54u2 discards the values associated with empty string keys
	          // (`""`) only if they are used directly within an object member list
	          // (e.g., `!("" in { "": 1})`).
	          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
	        };
	      }

	      // Public: Parses a JSON source string.
	      if (!has("json-parse")) {
	        var fromCharCode = String.fromCharCode;

	        // Internal: A map of escaped control characters and their unescaped
	        // equivalents.
	        var Unescapes = {
	          92: "\\",
	          34: '"',
	          47: "/",
	          98: "\b",
	          116: "\t",
	          110: "\n",
	          102: "\f",
	          114: "\r"
	        };

	        // Internal: Stores the parser state.
	        var Index, Source;

	        // Internal: Resets the parser state and throws a `SyntaxError`.
	        var abort = function () {
	          Index = Source = null;
	          throw SyntaxError();
	        };

	        // Internal: Returns the next token, or `"$"` if the parser has reached
	        // the end of the source string. A token may be a string, number, `null`
	        // literal, or Boolean literal.
	        var lex = function () {
	          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
	          while (Index < length) {
	            charCode = source.charCodeAt(Index);
	            switch (charCode) {
	              case 9: case 10: case 13: case 32:
	                // Skip whitespace tokens, including tabs, carriage returns, line
	                // feeds, and space characters.
	                Index++;
	                break;
	              case 123: case 125: case 91: case 93: case 58: case 44:
	                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
	                // the current position.
	                value = charIndexBuggy ? source.charAt(Index) : source[Index];
	                Index++;
	                return value;
	              case 34:
	                // `"` delimits a JSON string; advance to the next character and
	                // begin parsing the string. String tokens are prefixed with the
	                // sentinel `@` character to distinguish them from punctuators and
	                // end-of-string tokens.
	                for (value = "@", Index++; Index < length;) {
	                  charCode = source.charCodeAt(Index);
	                  if (charCode < 32) {
	                    // Unescaped ASCII control characters (those with a code unit
	                    // less than the space character) are not permitted.
	                    abort();
	                  } else if (charCode == 92) {
	                    // A reverse solidus (`\`) marks the beginning of an escaped
	                    // control character (including `"`, `\`, and `/`) or Unicode
	                    // escape sequence.
	                    charCode = source.charCodeAt(++Index);
	                    switch (charCode) {
	                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
	                        // Revive escaped control characters.
	                        value += Unescapes[charCode];
	                        Index++;
	                        break;
	                      case 117:
	                        // `\u` marks the beginning of a Unicode escape sequence.
	                        // Advance to the first character and validate the
	                        // four-digit code point.
	                        begin = ++Index;
	                        for (position = Index + 4; Index < position; Index++) {
	                          charCode = source.charCodeAt(Index);
	                          // A valid sequence comprises four hexdigits (case-
	                          // insensitive) that form a single hexadecimal value.
	                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
	                            // Invalid Unicode escape sequence.
	                            abort();
	                          }
	                        }
	                        // Revive the escaped character.
	                        value += fromCharCode("0x" + source.slice(begin, Index));
	                        break;
	                      default:
	                        // Invalid escape sequence.
	                        abort();
	                    }
	                  } else {
	                    if (charCode == 34) {
	                      // An unescaped double-quote character marks the end of the
	                      // string.
	                      break;
	                    }
	                    charCode = source.charCodeAt(Index);
	                    begin = Index;
	                    // Optimize for the common case where a string is valid.
	                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
	                      charCode = source.charCodeAt(++Index);
	                    }
	                    // Append the string as-is.
	                    value += source.slice(begin, Index);
	                  }
	                }
	                if (source.charCodeAt(Index) == 34) {
	                  // Advance to the next character and return the revived string.
	                  Index++;
	                  return value;
	                }
	                // Unterminated string.
	                abort();
	              default:
	                // Parse numbers and literals.
	                begin = Index;
	                // Advance past the negative sign, if one is specified.
	                if (charCode == 45) {
	                  isSigned = true;
	                  charCode = source.charCodeAt(++Index);
	                }
	                // Parse an integer or floating-point value.
	                if (charCode >= 48 && charCode <= 57) {
	                  // Leading zeroes are interpreted as octal literals.
	                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
	                    // Illegal octal literal.
	                    abort();
	                  }
	                  isSigned = false;
	                  // Parse the integer component.
	                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
	                  // Floats cannot contain a leading decimal point; however, this
	                  // case is already accounted for by the parser.
	                  if (source.charCodeAt(Index) == 46) {
	                    position = ++Index;
	                    // Parse the decimal component.
	                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal trailing decimal.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Parse exponents. The `e` denoting the exponent is
	                  // case-insensitive.
	                  charCode = source.charCodeAt(Index);
	                  if (charCode == 101 || charCode == 69) {
	                    charCode = source.charCodeAt(++Index);
	                    // Skip past the sign following the exponent, if one is
	                    // specified.
	                    if (charCode == 43 || charCode == 45) {
	                      Index++;
	                    }
	                    // Parse the exponential component.
	                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal empty exponent.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Coerce the parsed value to a JavaScript number.
	                  return +source.slice(begin, Index);
	                }
	                // A negative sign may only precede numbers.
	                if (isSigned) {
	                  abort();
	                }
	                // `true`, `false`, and `null` literals.
	                if (source.slice(Index, Index + 4) == "true") {
	                  Index += 4;
	                  return true;
	                } else if (source.slice(Index, Index + 5) == "false") {
	                  Index += 5;
	                  return false;
	                } else if (source.slice(Index, Index + 4) == "null") {
	                  Index += 4;
	                  return null;
	                }
	                // Unrecognized token.
	                abort();
	            }
	          }
	          // Return the sentinel `$` character if the parser has reached the end
	          // of the source string.
	          return "$";
	        };

	        // Internal: Parses a JSON `value` token.
	        var get = function (value) {
	          var results, hasMembers;
	          if (value == "$") {
	            // Unexpected end of input.
	            abort();
	          }
	          if (typeof value == "string") {
	            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
	              // Remove the sentinel `@` character.
	              return value.slice(1);
	            }
	            // Parse object and array literals.
	            if (value == "[") {
	              // Parses a JSON array, returning a new JavaScript array.
	              results = [];
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing square bracket marks the end of the array literal.
	                if (value == "]") {
	                  break;
	                }
	                // If the array literal contains elements, the current token
	                // should be a comma separating the previous element from the
	                // next.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "]") {
	                      // Unexpected trailing `,` in array literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each array element.
	                    abort();
	                  }
	                }
	                // Elisions and leading commas are not permitted.
	                if (value == ",") {
	                  abort();
	                }
	                results.push(get(value));
	              }
	              return results;
	            } else if (value == "{") {
	              // Parses a JSON object, returning a new JavaScript object.
	              results = {};
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing curly brace marks the end of the object literal.
	                if (value == "}") {
	                  break;
	                }
	                // If the object literal contains members, the current token
	                // should be a comma separator.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "}") {
	                      // Unexpected trailing `,` in object literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each object member.
	                    abort();
	                  }
	                }
	                // Leading commas are not permitted, object property names must be
	                // double-quoted strings, and a `:` must separate each property
	                // name and value.
	                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
	                  abort();
	                }
	                results[value.slice(1)] = get(lex());
	              }
	              return results;
	            }
	            // Unexpected token encountered.
	            abort();
	          }
	          return value;
	        };

	        // Internal: Updates a traversed object member.
	        var update = function (source, property, callback) {
	          var element = walk(source, property, callback);
	          if (element === undef) {
	            delete source[property];
	          } else {
	            source[property] = element;
	          }
	        };

	        // Internal: Recursively traverses a parsed JSON object, invoking the
	        // `callback` function for each value. This is an implementation of the
	        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
	        var walk = function (source, property, callback) {
	          var value = source[property], length;
	          if (typeof value == "object" && value) {
	            // `forEach` can't be used to traverse an array in Opera <= 8.54
	            // because its `Object#hasOwnProperty` implementation returns `false`
	            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
	            if (getClass.call(value) == arrayClass) {
	              for (length = value.length; length--;) {
	                update(value, length, callback);
	              }
	            } else {
	              forEach(value, function (property) {
	                update(value, property, callback);
	              });
	            }
	          }
	          return callback.call(source, property, value);
	        };

	        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
	        exports.parse = function (source, callback) {
	          var result, value;
	          Index = 0;
	          Source = "" + source;
	          result = get(lex());
	          // If a JSON string contains multiple tokens, it is invalid.
	          if (lex() != "$") {
	            abort();
	          }
	          // Reset the parser state.
	          Index = Source = null;
	          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
	        };
	      }
	    }

	    exports["runInContext"] = runInContext;
	    return exports;
	  }

	  if (freeExports && !isLoader) {
	    // Export for CommonJS environments.
	    runInContext(root, freeExports);
	  } else {
	    // Export for web browsers and JavaScript engines.
	    var nativeJSON = root.JSON,
	        previousJSON = root["JSON3"],
	        isRestored = false;

	    var JSON3 = runInContext(root, (root["JSON3"] = {
	      // Public: Restores the original value of the global `JSON` object and
	      // returns a reference to the `JSON3` object.
	      "noConflict": function () {
	        if (!isRestored) {
	          isRestored = true;
	          root.JSON = nativeJSON;
	          root["JSON3"] = previousJSON;
	          nativeJSON = previousJSON = null;
	        }
	        return JSON3;
	      }
	    }));

	    root.JSON = {
	      "parse": JSON3.parse,
	      "stringify": JSON3.stringify
	    };
	  }

	  // Export for asynchronous module loaders.
	  if (isLoader) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return JSON3;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(291)(module), (function() { return this; }())))

/***/ },
/* 291 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 292 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 293 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 294 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};

	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*global Blob,File*/

	/**
	 * Module requirements
	 */

	var isArray = __webpack_require__(293);
	var isBuf = __webpack_require__(296);

	/**
	 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
	 * Anything with blobs or files should be fed through removeBlobs before coming
	 * here.
	 *
	 * @param {Object} packet - socket.io event packet
	 * @return {Object} with deconstructed packet and list of buffers
	 * @api public
	 */

	exports.deconstructPacket = function(packet){
	  var buffers = [];
	  var packetData = packet.data;

	  function _deconstructPacket(data) {
	    if (!data) return data;

	    if (isBuf(data)) {
	      var placeholder = { _placeholder: true, num: buffers.length };
	      buffers.push(data);
	      return placeholder;
	    } else if (isArray(data)) {
	      var newData = new Array(data.length);
	      for (var i = 0; i < data.length; i++) {
	        newData[i] = _deconstructPacket(data[i]);
	      }
	      return newData;
	    } else if ('object' == typeof data && !(data instanceof Date)) {
	      var newData = {};
	      for (var key in data) {
	        newData[key] = _deconstructPacket(data[key]);
	      }
	      return newData;
	    }
	    return data;
	  }

	  var pack = packet;
	  pack.data = _deconstructPacket(packetData);
	  pack.attachments = buffers.length; // number of binary 'attachments'
	  return {packet: pack, buffers: buffers};
	};

	/**
	 * Reconstructs a binary packet from its placeholder packet and buffers
	 *
	 * @param {Object} packet - event packet with placeholders
	 * @param {Array} buffers - binary buffers to put in placeholder positions
	 * @return {Object} reconstructed packet
	 * @api public
	 */

	exports.reconstructPacket = function(packet, buffers) {
	  var curPlaceHolder = 0;

	  function _reconstructPacket(data) {
	    if (data && data._placeholder) {
	      var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
	      return buf;
	    } else if (isArray(data)) {
	      for (var i = 0; i < data.length; i++) {
	        data[i] = _reconstructPacket(data[i]);
	      }
	      return data;
	    } else if (data && 'object' == typeof data) {
	      for (var key in data) {
	        data[key] = _reconstructPacket(data[key]);
	      }
	      return data;
	    }
	    return data;
	  }

	  packet.data = _reconstructPacket(packet.data);
	  packet.attachments = undefined; // no longer useful
	  return packet;
	};

	/**
	 * Asynchronously removes Blobs or Files from data via
	 * FileReader's readAsArrayBuffer method. Used before encoding
	 * data as msgpack. Calls callback with the blobless data.
	 *
	 * @param {Object} data
	 * @param {Function} callback
	 * @api private
	 */

	exports.removeBlobs = function(data, callback) {
	  function _removeBlobs(obj, curKey, containingObject) {
	    if (!obj) return obj;

	    // convert any blob
	    if ((global.Blob && obj instanceof Blob) ||
	        (global.File && obj instanceof File)) {
	      pendingBlobs++;

	      // async filereader
	      var fileReader = new FileReader();
	      fileReader.onload = function() { // this.result == arraybuffer
	        if (containingObject) {
	          containingObject[curKey] = this.result;
	        }
	        else {
	          bloblessData = this.result;
	        }

	        // if nothing pending its callback time
	        if(! --pendingBlobs) {
	          callback(bloblessData);
	        }
	      };

	      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
	    } else if (isArray(obj)) { // handle array
	      for (var i = 0; i < obj.length; i++) {
	        _removeBlobs(obj[i], i, obj);
	      }
	    } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
	      for (var key in obj) {
	        _removeBlobs(obj[key], key, obj);
	      }
	    }
	  }

	  var pendingBlobs = 0;
	  var bloblessData = data;
	  _removeBlobs(bloblessData);
	  if (!pendingBlobs) {
	    callback(bloblessData);
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 296 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	module.exports = isBuf;

	/**
	 * Returns true if obj is a buffer or an arraybuffer.
	 *
	 * @api private
	 */

	function isBuf(obj) {
	  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var eio = __webpack_require__(298);
	var Socket = __webpack_require__(325);
	var Emitter = __webpack_require__(326);
	var parser = __webpack_require__(289);
	var on = __webpack_require__(328);
	var bind = __webpack_require__(329);
	var debug = __webpack_require__(286)('socket.io-client:manager');
	var indexOf = __webpack_require__(323);
	var Backoff = __webpack_require__(332);

	/**
	 * IE6+ hasOwnProperty
	 */

	var has = Object.prototype.hasOwnProperty;

	/**
	 * Module exports
	 */

	module.exports = Manager;

	/**
	 * `Manager` constructor.
	 *
	 * @param {String} engine instance or engine uri/opts
	 * @param {Object} options
	 * @api public
	 */

	function Manager(uri, opts){
	  if (!(this instanceof Manager)) return new Manager(uri, opts);
	  if (uri && ('object' == typeof uri)) {
	    opts = uri;
	    uri = undefined;
	  }
	  opts = opts || {};

	  opts.path = opts.path || '/socket.io';
	  this.nsps = {};
	  this.subs = [];
	  this.opts = opts;
	  this.reconnection(opts.reconnection !== false);
	  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
	  this.reconnectionDelay(opts.reconnectionDelay || 1000);
	  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
	  this.randomizationFactor(opts.randomizationFactor || 0.5);
	  this.backoff = new Backoff({
	    min: this.reconnectionDelay(),
	    max: this.reconnectionDelayMax(),
	    jitter: this.randomizationFactor()
	  });
	  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
	  this.readyState = 'closed';
	  this.uri = uri;
	  this.connecting = [];
	  this.lastPing = null;
	  this.encoding = false;
	  this.packetBuffer = [];
	  this.encoder = new parser.Encoder();
	  this.decoder = new parser.Decoder();
	  this.autoConnect = opts.autoConnect !== false;
	  if (this.autoConnect) this.open();
	}

	/**
	 * Propagate given event to sockets and emit on `this`
	 *
	 * @api private
	 */

	Manager.prototype.emitAll = function() {
	  this.emit.apply(this, arguments);
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
	    }
	  }
	};

	/**
	 * Update `socket.id` of all sockets
	 *
	 * @api private
	 */

	Manager.prototype.updateSocketIds = function(){
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].id = this.engine.id;
	    }
	  }
	};

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Manager.prototype);

	/**
	 * Sets the `reconnection` config.
	 *
	 * @param {Boolean} true/false if it should automatically reconnect
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnection = function(v){
	  if (!arguments.length) return this._reconnection;
	  this._reconnection = !!v;
	  return this;
	};

	/**
	 * Sets the reconnection attempts config.
	 *
	 * @param {Number} max reconnection attempts before giving up
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionAttempts = function(v){
	  if (!arguments.length) return this._reconnectionAttempts;
	  this._reconnectionAttempts = v;
	  return this;
	};

	/**
	 * Sets the delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionDelay = function(v){
	  if (!arguments.length) return this._reconnectionDelay;
	  this._reconnectionDelay = v;
	  this.backoff && this.backoff.setMin(v);
	  return this;
	};

	Manager.prototype.randomizationFactor = function(v){
	  if (!arguments.length) return this._randomizationFactor;
	  this._randomizationFactor = v;
	  this.backoff && this.backoff.setJitter(v);
	  return this;
	};

	/**
	 * Sets the maximum delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionDelayMax = function(v){
	  if (!arguments.length) return this._reconnectionDelayMax;
	  this._reconnectionDelayMax = v;
	  this.backoff && this.backoff.setMax(v);
	  return this;
	};

	/**
	 * Sets the connection timeout. `false` to disable
	 *
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.timeout = function(v){
	  if (!arguments.length) return this._timeout;
	  this._timeout = v;
	  return this;
	};

	/**
	 * Starts trying to reconnect if reconnection is enabled and we have not
	 * started reconnecting yet
	 *
	 * @api private
	 */

	Manager.prototype.maybeReconnectOnOpen = function() {
	  // Only try to reconnect if it's the first time we're connecting
	  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
	    // keeps reconnection from firing twice for the same reconnection loop
	    this.reconnect();
	  }
	};


	/**
	 * Sets the current transport `socket`.
	 *
	 * @param {Function} optional, callback
	 * @return {Manager} self
	 * @api public
	 */

	Manager.prototype.open =
	Manager.prototype.connect = function(fn){
	  debug('readyState %s', this.readyState);
	  if (~this.readyState.indexOf('open')) return this;

	  debug('opening %s', this.uri);
	  this.engine = eio(this.uri, this.opts);
	  var socket = this.engine;
	  var self = this;
	  this.readyState = 'opening';
	  this.skipReconnect = false;

	  // emit `open`
	  var openSub = on(socket, 'open', function() {
	    self.onopen();
	    fn && fn();
	  });

	  // emit `connect_error`
	  var errorSub = on(socket, 'error', function(data){
	    debug('connect_error');
	    self.cleanup();
	    self.readyState = 'closed';
	    self.emitAll('connect_error', data);
	    if (fn) {
	      var err = new Error('Connection error');
	      err.data = data;
	      fn(err);
	    } else {
	      // Only do this if there is no fn to handle the error
	      self.maybeReconnectOnOpen();
	    }
	  });

	  // emit `connect_timeout`
	  if (false !== this._timeout) {
	    var timeout = this._timeout;
	    debug('connect attempt will timeout after %d', timeout);

	    // set timer
	    var timer = setTimeout(function(){
	      debug('connect attempt timed out after %d', timeout);
	      openSub.destroy();
	      socket.close();
	      socket.emit('error', 'timeout');
	      self.emitAll('connect_timeout', timeout);
	    }, timeout);

	    this.subs.push({
	      destroy: function(){
	        clearTimeout(timer);
	      }
	    });
	  }

	  this.subs.push(openSub);
	  this.subs.push(errorSub);

	  return this;
	};

	/**
	 * Called upon transport open.
	 *
	 * @api private
	 */

	Manager.prototype.onopen = function(){
	  debug('open');

	  // clear old subs
	  this.cleanup();

	  // mark as open
	  this.readyState = 'open';
	  this.emit('open');

	  // add new subs
	  var socket = this.engine;
	  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
	  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
	  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
	  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
	  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
	  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
	};

	/**
	 * Called upon a ping.
	 *
	 * @api private
	 */

	Manager.prototype.onping = function(){
	  this.lastPing = new Date;
	  this.emitAll('ping');
	};

	/**
	 * Called upon a packet.
	 *
	 * @api private
	 */

	Manager.prototype.onpong = function(){
	  this.emitAll('pong', new Date - this.lastPing);
	};

	/**
	 * Called with data.
	 *
	 * @api private
	 */

	Manager.prototype.ondata = function(data){
	  this.decoder.add(data);
	};

	/**
	 * Called when parser fully decodes a packet.
	 *
	 * @api private
	 */

	Manager.prototype.ondecoded = function(packet) {
	  this.emit('packet', packet);
	};

	/**
	 * Called upon socket error.
	 *
	 * @api private
	 */

	Manager.prototype.onerror = function(err){
	  debug('error', err);
	  this.emitAll('error', err);
	};

	/**
	 * Creates a new socket for the given `nsp`.
	 *
	 * @return {Socket}
	 * @api public
	 */

	Manager.prototype.socket = function(nsp){
	  var socket = this.nsps[nsp];
	  if (!socket) {
	    socket = new Socket(this, nsp);
	    this.nsps[nsp] = socket;
	    var self = this;
	    socket.on('connecting', onConnecting);
	    socket.on('connect', function(){
	      socket.id = self.engine.id;
	    });

	    if (this.autoConnect) {
	      // manually call here since connecting evnet is fired before listening
	      onConnecting();
	    }
	  }

	  function onConnecting() {
	    if (!~indexOf(self.connecting, socket)) {
	      self.connecting.push(socket);
	    }
	  }

	  return socket;
	};

	/**
	 * Called upon a socket close.
	 *
	 * @param {Socket} socket
	 */

	Manager.prototype.destroy = function(socket){
	  var index = indexOf(this.connecting, socket);
	  if (~index) this.connecting.splice(index, 1);
	  if (this.connecting.length) return;

	  this.close();
	};

	/**
	 * Writes a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Manager.prototype.packet = function(packet){
	  debug('writing packet %j', packet);
	  var self = this;

	  if (!self.encoding) {
	    // encode, then write to engine with result
	    self.encoding = true;
	    this.encoder.encode(packet, function(encodedPackets) {
	      for (var i = 0; i < encodedPackets.length; i++) {
	        self.engine.write(encodedPackets[i], packet.options);
	      }
	      self.encoding = false;
	      self.processPacketQueue();
	    });
	  } else { // add packet to the queue
	    self.packetBuffer.push(packet);
	  }
	};

	/**
	 * If packet buffer is non-empty, begins encoding the
	 * next packet in line.
	 *
	 * @api private
	 */

	Manager.prototype.processPacketQueue = function() {
	  if (this.packetBuffer.length > 0 && !this.encoding) {
	    var pack = this.packetBuffer.shift();
	    this.packet(pack);
	  }
	};

	/**
	 * Clean up transport subscriptions and packet buffer.
	 *
	 * @api private
	 */

	Manager.prototype.cleanup = function(){
	  debug('cleanup');

	  var sub;
	  while (sub = this.subs.shift()) sub.destroy();

	  this.packetBuffer = [];
	  this.encoding = false;
	  this.lastPing = null;

	  this.decoder.destroy();
	};

	/**
	 * Close the current socket.
	 *
	 * @api private
	 */

	Manager.prototype.close =
	Manager.prototype.disconnect = function(){
	  debug('disconnect');
	  this.skipReconnect = true;
	  this.reconnecting = false;
	  if ('opening' == this.readyState) {
	    // `onclose` will not fire because
	    // an open event never happened
	    this.cleanup();
	  }
	  this.backoff.reset();
	  this.readyState = 'closed';
	  if (this.engine) this.engine.close();
	};

	/**
	 * Called upon engine close.
	 *
	 * @api private
	 */

	Manager.prototype.onclose = function(reason){
	  debug('onclose');

	  this.cleanup();
	  this.backoff.reset();
	  this.readyState = 'closed';
	  this.emit('close', reason);

	  if (this._reconnection && !this.skipReconnect) {
	    this.reconnect();
	  }
	};

	/**
	 * Attempt a reconnection.
	 *
	 * @api private
	 */

	Manager.prototype.reconnect = function(){
	  if (this.reconnecting || this.skipReconnect) return this;

	  var self = this;

	  if (this.backoff.attempts >= this._reconnectionAttempts) {
	    debug('reconnect failed');
	    this.backoff.reset();
	    this.emitAll('reconnect_failed');
	    this.reconnecting = false;
	  } else {
	    var delay = this.backoff.duration();
	    debug('will wait %dms before reconnect attempt', delay);

	    this.reconnecting = true;
	    var timer = setTimeout(function(){
	      if (self.skipReconnect) return;

	      debug('attempting reconnect');
	      self.emitAll('reconnect_attempt', self.backoff.attempts);
	      self.emitAll('reconnecting', self.backoff.attempts);

	      // check again for the case socket closed in above events
	      if (self.skipReconnect) return;

	      self.open(function(err){
	        if (err) {
	          debug('reconnect attempt error');
	          self.reconnecting = false;
	          self.reconnect();
	          self.emitAll('reconnect_error', err.data);
	        } else {
	          debug('reconnect success');
	          self.onreconnect();
	        }
	      });
	    }, delay);

	    this.subs.push({
	      destroy: function(){
	        clearTimeout(timer);
	      }
	    });
	  }
	};

	/**
	 * Called upon successful reconnect.
	 *
	 * @api private
	 */

	Manager.prototype.onreconnect = function(){
	  var attempt = this.backoff.attempts;
	  this.reconnecting = false;
	  this.backoff.reset();
	  this.updateSocketIds();
	  this.emitAll('reconnect', attempt);
	};


/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports =  __webpack_require__(299);


/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(300);

	/**
	 * Exports parser
	 *
	 * @api public
	 *
	 */
	module.exports.parser = __webpack_require__(307);


/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var transports = __webpack_require__(301);
	var Emitter = __webpack_require__(316);
	var debug = __webpack_require__(286)('engine.io-client:socket');
	var index = __webpack_require__(323);
	var parser = __webpack_require__(307);
	var parseuri = __webpack_require__(285);
	var parsejson = __webpack_require__(324);
	var parseqs = __webpack_require__(317);

	/**
	 * Module exports.
	 */

	module.exports = Socket;

	/**
	 * Noop function.
	 *
	 * @api private
	 */

	function noop(){}

	/**
	 * Socket constructor.
	 *
	 * @param {String|Object} uri or options
	 * @param {Object} options
	 * @api public
	 */

	function Socket(uri, opts){
	  if (!(this instanceof Socket)) return new Socket(uri, opts);

	  opts = opts || {};

	  if (uri && 'object' == typeof uri) {
	    opts = uri;
	    uri = null;
	  }

	  if (uri) {
	    uri = parseuri(uri);
	    opts.hostname = uri.host;
	    opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
	    opts.port = uri.port;
	    if (uri.query) opts.query = uri.query;
	  } else if (opts.host) {
	    opts.hostname = parseuri(opts.host).host;
	  }

	  this.secure = null != opts.secure ? opts.secure :
	    (global.location && 'https:' == location.protocol);

	  if (opts.hostname && !opts.port) {
	    // if no port is specified manually, use the protocol default
	    opts.port = this.secure ? '443' : '80';
	  }

	  this.agent = opts.agent || false;
	  this.hostname = opts.hostname ||
	    (global.location ? location.hostname : 'localhost');
	  this.port = opts.port || (global.location && location.port ?
	       location.port :
	       (this.secure ? 443 : 80));
	  this.query = opts.query || {};
	  if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
	  this.upgrade = false !== opts.upgrade;
	  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
	  this.forceJSONP = !!opts.forceJSONP;
	  this.jsonp = false !== opts.jsonp;
	  this.forceBase64 = !!opts.forceBase64;
	  this.enablesXDR = !!opts.enablesXDR;
	  this.timestampParam = opts.timestampParam || 't';
	  this.timestampRequests = opts.timestampRequests;
	  this.transports = opts.transports || ['polling', 'websocket'];
	  this.readyState = '';
	  this.writeBuffer = [];
	  this.policyPort = opts.policyPort || 843;
	  this.rememberUpgrade = opts.rememberUpgrade || false;
	  this.binaryType = null;
	  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
	  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

	  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
	  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
	    this.perMessageDeflate.threshold = 1024;
	  }

	  // SSL options for Node.js client
	  this.pfx = opts.pfx || null;
	  this.key = opts.key || null;
	  this.passphrase = opts.passphrase || null;
	  this.cert = opts.cert || null;
	  this.ca = opts.ca || null;
	  this.ciphers = opts.ciphers || null;
	  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? null : opts.rejectUnauthorized;

	  // other options for Node.js client
	  var freeGlobal = typeof global == 'object' && global;
	  if (freeGlobal.global === freeGlobal) {
	    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
	      this.extraHeaders = opts.extraHeaders;
	    }
	  }

	  this.open();
	}

	Socket.priorWebsocketSuccess = false;

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Socket.prototype);

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	Socket.protocol = parser.protocol; // this is an int

	/**
	 * Expose deps for legacy compatibility
	 * and standalone browser access.
	 */

	Socket.Socket = Socket;
	Socket.Transport = __webpack_require__(306);
	Socket.transports = __webpack_require__(301);
	Socket.parser = __webpack_require__(307);

	/**
	 * Creates transport of the given type.
	 *
	 * @param {String} transport name
	 * @return {Transport}
	 * @api private
	 */

	Socket.prototype.createTransport = function (name) {
	  debug('creating transport "%s"', name);
	  var query = clone(this.query);

	  // append engine.io protocol identifier
	  query.EIO = parser.protocol;

	  // transport name
	  query.transport = name;

	  // session id if we already have one
	  if (this.id) query.sid = this.id;

	  var transport = new transports[name]({
	    agent: this.agent,
	    hostname: this.hostname,
	    port: this.port,
	    secure: this.secure,
	    path: this.path,
	    query: query,
	    forceJSONP: this.forceJSONP,
	    jsonp: this.jsonp,
	    forceBase64: this.forceBase64,
	    enablesXDR: this.enablesXDR,
	    timestampRequests: this.timestampRequests,
	    timestampParam: this.timestampParam,
	    policyPort: this.policyPort,
	    socket: this,
	    pfx: this.pfx,
	    key: this.key,
	    passphrase: this.passphrase,
	    cert: this.cert,
	    ca: this.ca,
	    ciphers: this.ciphers,
	    rejectUnauthorized: this.rejectUnauthorized,
	    perMessageDeflate: this.perMessageDeflate,
	    extraHeaders: this.extraHeaders
	  });

	  return transport;
	};

	function clone (obj) {
	  var o = {};
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      o[i] = obj[i];
	    }
	  }
	  return o;
	}

	/**
	 * Initializes transport to use and starts probe.
	 *
	 * @api private
	 */
	Socket.prototype.open = function () {
	  var transport;
	  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
	    transport = 'websocket';
	  } else if (0 === this.transports.length) {
	    // Emit error on next tick so it can be listened to
	    var self = this;
	    setTimeout(function() {
	      self.emit('error', 'No transports available');
	    }, 0);
	    return;
	  } else {
	    transport = this.transports[0];
	  }
	  this.readyState = 'opening';

	  // Retry with the next transport if the transport is disabled (jsonp: false)
	  try {
	    transport = this.createTransport(transport);
	  } catch (e) {
	    this.transports.shift();
	    this.open();
	    return;
	  }

	  transport.open();
	  this.setTransport(transport);
	};

	/**
	 * Sets the current transport. Disables the existing one (if any).
	 *
	 * @api private
	 */

	Socket.prototype.setTransport = function(transport){
	  debug('setting transport %s', transport.name);
	  var self = this;

	  if (this.transport) {
	    debug('clearing existing transport %s', this.transport.name);
	    this.transport.removeAllListeners();
	  }

	  // set up transport
	  this.transport = transport;

	  // set up transport listeners
	  transport
	  .on('drain', function(){
	    self.onDrain();
	  })
	  .on('packet', function(packet){
	    self.onPacket(packet);
	  })
	  .on('error', function(e){
	    self.onError(e);
	  })
	  .on('close', function(){
	    self.onClose('transport close');
	  });
	};

	/**
	 * Probes a transport.
	 *
	 * @param {String} transport name
	 * @api private
	 */

	Socket.prototype.probe = function (name) {
	  debug('probing transport "%s"', name);
	  var transport = this.createTransport(name, { probe: 1 })
	    , failed = false
	    , self = this;

	  Socket.priorWebsocketSuccess = false;

	  function onTransportOpen(){
	    if (self.onlyBinaryUpgrades) {
	      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
	      failed = failed || upgradeLosesBinary;
	    }
	    if (failed) return;

	    debug('probe transport "%s" opened', name);
	    transport.send([{ type: 'ping', data: 'probe' }]);
	    transport.once('packet', function (msg) {
	      if (failed) return;
	      if ('pong' == msg.type && 'probe' == msg.data) {
	        debug('probe transport "%s" pong', name);
	        self.upgrading = true;
	        self.emit('upgrading', transport);
	        if (!transport) return;
	        Socket.priorWebsocketSuccess = 'websocket' == transport.name;

	        debug('pausing current transport "%s"', self.transport.name);
	        self.transport.pause(function () {
	          if (failed) return;
	          if ('closed' == self.readyState) return;
	          debug('changing transport and sending upgrade packet');

	          cleanup();

	          self.setTransport(transport);
	          transport.send([{ type: 'upgrade' }]);
	          self.emit('upgrade', transport);
	          transport = null;
	          self.upgrading = false;
	          self.flush();
	        });
	      } else {
	        debug('probe transport "%s" failed', name);
	        var err = new Error('probe error');
	        err.transport = transport.name;
	        self.emit('upgradeError', err);
	      }
	    });
	  }

	  function freezeTransport() {
	    if (failed) return;

	    // Any callback called by transport should be ignored since now
	    failed = true;

	    cleanup();

	    transport.close();
	    transport = null;
	  }

	  //Handle any error that happens while probing
	  function onerror(err) {
	    var error = new Error('probe error: ' + err);
	    error.transport = transport.name;

	    freezeTransport();

	    debug('probe transport "%s" failed because of error: %s', name, err);

	    self.emit('upgradeError', error);
	  }

	  function onTransportClose(){
	    onerror("transport closed");
	  }

	  //When the socket is closed while we're probing
	  function onclose(){
	    onerror("socket closed");
	  }

	  //When the socket is upgraded while we're probing
	  function onupgrade(to){
	    if (transport && to.name != transport.name) {
	      debug('"%s" works - aborting "%s"', to.name, transport.name);
	      freezeTransport();
	    }
	  }

	  //Remove all listeners on the transport and on self
	  function cleanup(){
	    transport.removeListener('open', onTransportOpen);
	    transport.removeListener('error', onerror);
	    transport.removeListener('close', onTransportClose);
	    self.removeListener('close', onclose);
	    self.removeListener('upgrading', onupgrade);
	  }

	  transport.once('open', onTransportOpen);
	  transport.once('error', onerror);
	  transport.once('close', onTransportClose);

	  this.once('close', onclose);
	  this.once('upgrading', onupgrade);

	  transport.open();

	};

	/**
	 * Called when connection is deemed open.
	 *
	 * @api public
	 */

	Socket.prototype.onOpen = function () {
	  debug('socket open');
	  this.readyState = 'open';
	  Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
	  this.emit('open');
	  this.flush();

	  // we check for `readyState` in case an `open`
	  // listener already closed the socket
	  if ('open' == this.readyState && this.upgrade && this.transport.pause) {
	    debug('starting upgrade probes');
	    for (var i = 0, l = this.upgrades.length; i < l; i++) {
	      this.probe(this.upgrades[i]);
	    }
	  }
	};

	/**
	 * Handles a packet.
	 *
	 * @api private
	 */

	Socket.prototype.onPacket = function (packet) {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

	    this.emit('packet', packet);

	    // Socket is live - any packet counts
	    this.emit('heartbeat');

	    switch (packet.type) {
	      case 'open':
	        this.onHandshake(parsejson(packet.data));
	        break;

	      case 'pong':
	        this.setPing();
	        this.emit('pong');
	        break;

	      case 'error':
	        var err = new Error('server error');
	        err.code = packet.data;
	        this.onError(err);
	        break;

	      case 'message':
	        this.emit('data', packet.data);
	        this.emit('message', packet.data);
	        break;
	    }
	  } else {
	    debug('packet received with socket readyState "%s"', this.readyState);
	  }
	};

	/**
	 * Called upon handshake completion.
	 *
	 * @param {Object} handshake obj
	 * @api private
	 */

	Socket.prototype.onHandshake = function (data) {
	  this.emit('handshake', data);
	  this.id = data.sid;
	  this.transport.query.sid = data.sid;
	  this.upgrades = this.filterUpgrades(data.upgrades);
	  this.pingInterval = data.pingInterval;
	  this.pingTimeout = data.pingTimeout;
	  this.onOpen();
	  // In case open handler closes socket
	  if  ('closed' == this.readyState) return;
	  this.setPing();

	  // Prolong liveness of socket on heartbeat
	  this.removeListener('heartbeat', this.onHeartbeat);
	  this.on('heartbeat', this.onHeartbeat);
	};

	/**
	 * Resets ping timeout.
	 *
	 * @api private
	 */

	Socket.prototype.onHeartbeat = function (timeout) {
	  clearTimeout(this.pingTimeoutTimer);
	  var self = this;
	  self.pingTimeoutTimer = setTimeout(function () {
	    if ('closed' == self.readyState) return;
	    self.onClose('ping timeout');
	  }, timeout || (self.pingInterval + self.pingTimeout));
	};

	/**
	 * Pings server every `this.pingInterval` and expects response
	 * within `this.pingTimeout` or closes connection.
	 *
	 * @api private
	 */

	Socket.prototype.setPing = function () {
	  var self = this;
	  clearTimeout(self.pingIntervalTimer);
	  self.pingIntervalTimer = setTimeout(function () {
	    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
	    self.ping();
	    self.onHeartbeat(self.pingTimeout);
	  }, self.pingInterval);
	};

	/**
	* Sends a ping packet.
	*
	* @api private
	*/

	Socket.prototype.ping = function () {
	  var self = this;
	  this.sendPacket('ping', function(){
	    self.emit('ping');
	  });
	};

	/**
	 * Called on `drain` event
	 *
	 * @api private
	 */

	Socket.prototype.onDrain = function() {
	  this.writeBuffer.splice(0, this.prevBufferLen);

	  // setting prevBufferLen = 0 is very important
	  // for example, when upgrading, upgrade packet is sent over,
	  // and a nonzero prevBufferLen could cause problems on `drain`
	  this.prevBufferLen = 0;

	  if (0 === this.writeBuffer.length) {
	    this.emit('drain');
	  } else {
	    this.flush();
	  }
	};

	/**
	 * Flush write buffers.
	 *
	 * @api private
	 */

	Socket.prototype.flush = function () {
	  if ('closed' != this.readyState && this.transport.writable &&
	    !this.upgrading && this.writeBuffer.length) {
	    debug('flushing %d packets in socket', this.writeBuffer.length);
	    this.transport.send(this.writeBuffer);
	    // keep track of current length of writeBuffer
	    // splice writeBuffer and callbackBuffer on `drain`
	    this.prevBufferLen = this.writeBuffer.length;
	    this.emit('flush');
	  }
	};

	/**
	 * Sends a message.
	 *
	 * @param {String} message.
	 * @param {Function} callback function.
	 * @param {Object} options.
	 * @return {Socket} for chaining.
	 * @api public
	 */

	Socket.prototype.write =
	Socket.prototype.send = function (msg, options, fn) {
	  this.sendPacket('message', msg, options, fn);
	  return this;
	};

	/**
	 * Sends a packet.
	 *
	 * @param {String} packet type.
	 * @param {String} data.
	 * @param {Object} options.
	 * @param {Function} callback function.
	 * @api private
	 */

	Socket.prototype.sendPacket = function (type, data, options, fn) {
	  if('function' == typeof data) {
	    fn = data;
	    data = undefined;
	  }

	  if ('function' == typeof options) {
	    fn = options;
	    options = null;
	  }

	  if ('closing' == this.readyState || 'closed' == this.readyState) {
	    return;
	  }

	  options = options || {};
	  options.compress = false !== options.compress;

	  var packet = {
	    type: type,
	    data: data,
	    options: options
	  };
	  this.emit('packetCreate', packet);
	  this.writeBuffer.push(packet);
	  if (fn) this.once('flush', fn);
	  this.flush();
	};

	/**
	 * Closes the connection.
	 *
	 * @api private
	 */

	Socket.prototype.close = function () {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    this.readyState = 'closing';

	    var self = this;

	    if (this.writeBuffer.length) {
	      this.once('drain', function() {
	        if (this.upgrading) {
	          waitForUpgrade();
	        } else {
	          close();
	        }
	      });
	    } else if (this.upgrading) {
	      waitForUpgrade();
	    } else {
	      close();
	    }
	  }

	  function close() {
	    self.onClose('forced close');
	    debug('socket closing - telling transport to close');
	    self.transport.close();
	  }

	  function cleanupAndClose() {
	    self.removeListener('upgrade', cleanupAndClose);
	    self.removeListener('upgradeError', cleanupAndClose);
	    close();
	  }

	  function waitForUpgrade() {
	    // wait for upgrade to finish since we can't send packets while pausing a transport
	    self.once('upgrade', cleanupAndClose);
	    self.once('upgradeError', cleanupAndClose);
	  }

	  return this;
	};

	/**
	 * Called upon transport error
	 *
	 * @api private
	 */

	Socket.prototype.onError = function (err) {
	  debug('socket error %j', err);
	  Socket.priorWebsocketSuccess = false;
	  this.emit('error', err);
	  this.onClose('transport error', err);
	};

	/**
	 * Called upon transport close.
	 *
	 * @api private
	 */

	Socket.prototype.onClose = function (reason, desc) {
	  if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
	    debug('socket close with reason: "%s"', reason);
	    var self = this;

	    // clear timers
	    clearTimeout(this.pingIntervalTimer);
	    clearTimeout(this.pingTimeoutTimer);

	    // stop event from firing again for transport
	    this.transport.removeAllListeners('close');

	    // ensure transport won't stay open
	    this.transport.close();

	    // ignore further transport communication
	    this.transport.removeAllListeners();

	    // set ready state
	    this.readyState = 'closed';

	    // clear session id
	    this.id = null;

	    // emit close event
	    this.emit('close', reason, desc);

	    // clean buffers after, so users can still
	    // grab the buffers on `close` event
	    self.writeBuffer = [];
	    self.prevBufferLen = 0;
	  }
	};

	/**
	 * Filters upgrades, returning only those matching client transports.
	 *
	 * @param {Array} server upgrades
	 * @api private
	 *
	 */

	Socket.prototype.filterUpgrades = function (upgrades) {
	  var filteredUpgrades = [];
	  for (var i = 0, j = upgrades.length; i<j; i++) {
	    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
	  }
	  return filteredUpgrades;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies
	 */

	var XMLHttpRequest = __webpack_require__(302);
	var XHR = __webpack_require__(304);
	var JSONP = __webpack_require__(320);
	var websocket = __webpack_require__(321);

	/**
	 * Export transports.
	 */

	exports.polling = polling;
	exports.websocket = websocket;

	/**
	 * Polling transport polymorphic constructor.
	 * Decides on xhr vs jsonp based on feature detection.
	 *
	 * @api private
	 */

	function polling(opts){
	  var xhr;
	  var xd = false;
	  var xs = false;
	  var jsonp = false !== opts.jsonp;

	  if (global.location) {
	    var isSSL = 'https:' == location.protocol;
	    var port = location.port;

	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }

	    xd = opts.hostname != location.hostname || port != opts.port;
	    xs = opts.secure != isSSL;
	  }

	  opts.xdomain = xd;
	  opts.xscheme = xs;
	  xhr = new XMLHttpRequest(opts);

	  if ('open' in xhr && !opts.forceJSONP) {
	    return new XHR(opts);
	  } else {
	    if (!jsonp) throw new Error('JSONP disabled');
	    return new JSONP(opts);
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	// browser shim for xmlhttprequest module
	var hasCORS = __webpack_require__(303);

	module.exports = function(opts) {
	  var xdomain = opts.xdomain;

	  // scheme must be same when usign XDomainRequest
	  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
	  var xscheme = opts.xscheme;

	  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
	  // https://github.com/Automattic/engine.io-client/pull/217
	  var enablesXDR = opts.enablesXDR;

	  // XMLHttpRequest can be disabled on IE
	  try {
	    if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
	      return new XMLHttpRequest();
	    }
	  } catch (e) { }

	  // Use XDomainRequest for IE8 if enablesXDR is true
	  // because loading bar keeps flashing when using jsonp-polling
	  // https://github.com/yujiosaka/socke.io-ie8-loading-example
	  try {
	    if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
	      return new XDomainRequest();
	    }
	  } catch (e) { }

	  if (!xdomain) {
	    try {
	      return new ActiveXObject('Microsoft.XMLHTTP');
	    } catch(e) { }
	  }
	}


/***/ },
/* 303 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 *
	 * Logic borrowed from Modernizr:
	 *
	 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
	 */

	try {
	  module.exports = typeof XMLHttpRequest !== 'undefined' &&
	    'withCredentials' in new XMLHttpRequest();
	} catch (err) {
	  // if XMLHttp support is disabled in IE then it will throw
	  // when trying to create
	  module.exports = false;
	}


/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module requirements.
	 */

	var XMLHttpRequest = __webpack_require__(302);
	var Polling = __webpack_require__(305);
	var Emitter = __webpack_require__(316);
	var inherit = __webpack_require__(318);
	var debug = __webpack_require__(286)('engine.io-client:polling-xhr');

	/**
	 * Module exports.
	 */

	module.exports = XHR;
	module.exports.Request = Request;

	/**
	 * Empty function
	 */

	function empty(){}

	/**
	 * XHR Polling constructor.
	 *
	 * @param {Object} opts
	 * @api public
	 */

	function XHR(opts){
	  Polling.call(this, opts);

	  if (global.location) {
	    var isSSL = 'https:' == location.protocol;
	    var port = location.port;

	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }

	    this.xd = opts.hostname != global.location.hostname ||
	      port != opts.port;
	    this.xs = opts.secure != isSSL;
	  } else {
	    this.extraHeaders = opts.extraHeaders;
	  }
	}

	/**
	 * Inherits from Polling.
	 */

	inherit(XHR, Polling);

	/**
	 * XHR supports binary
	 */

	XHR.prototype.supportsBinary = true;

	/**
	 * Creates a request.
	 *
	 * @param {String} method
	 * @api private
	 */

	XHR.prototype.request = function(opts){
	  opts = opts || {};
	  opts.uri = this.uri();
	  opts.xd = this.xd;
	  opts.xs = this.xs;
	  opts.agent = this.agent || false;
	  opts.supportsBinary = this.supportsBinary;
	  opts.enablesXDR = this.enablesXDR;

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;

	  // other options for Node.js client
	  opts.extraHeaders = this.extraHeaders;

	  return new Request(opts);
	};

	/**
	 * Sends data.
	 *
	 * @param {String} data to send.
	 * @param {Function} called upon flush.
	 * @api private
	 */

	XHR.prototype.doWrite = function(data, fn){
	  var isBinary = typeof data !== 'string' && data !== undefined;
	  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
	  var self = this;
	  req.on('success', fn);
	  req.on('error', function(err){
	    self.onError('xhr post error', err);
	  });
	  this.sendXhr = req;
	};

	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */

	XHR.prototype.doPoll = function(){
	  debug('xhr poll');
	  var req = this.request();
	  var self = this;
	  req.on('data', function(data){
	    self.onData(data);
	  });
	  req.on('error', function(err){
	    self.onError('xhr poll error', err);
	  });
	  this.pollXhr = req;
	};

	/**
	 * Request constructor
	 *
	 * @param {Object} options
	 * @api public
	 */

	function Request(opts){
	  this.method = opts.method || 'GET';
	  this.uri = opts.uri;
	  this.xd = !!opts.xd;
	  this.xs = !!opts.xs;
	  this.async = false !== opts.async;
	  this.data = undefined != opts.data ? opts.data : null;
	  this.agent = opts.agent;
	  this.isBinary = opts.isBinary;
	  this.supportsBinary = opts.supportsBinary;
	  this.enablesXDR = opts.enablesXDR;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;

	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;

	  this.create();
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Request.prototype);

	/**
	 * Creates the XHR object and sends the request.
	 *
	 * @api private
	 */

	Request.prototype.create = function(){
	  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;

	  var xhr = this.xhr = new XMLHttpRequest(opts);
	  var self = this;

	  try {
	    debug('xhr open %s: %s', this.method, this.uri);
	    xhr.open(this.method, this.uri, this.async);
	    try {
	      if (this.extraHeaders) {
	        xhr.setDisableHeaderCheck(true);
	        for (var i in this.extraHeaders) {
	          if (this.extraHeaders.hasOwnProperty(i)) {
	            xhr.setRequestHeader(i, this.extraHeaders[i]);
	          }
	        }
	      }
	    } catch (e) {}
	    if (this.supportsBinary) {
	      // This has to be done after open because Firefox is stupid
	      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
	      xhr.responseType = 'arraybuffer';
	    }

	    if ('POST' == this.method) {
	      try {
	        if (this.isBinary) {
	          xhr.setRequestHeader('Content-type', 'application/octet-stream');
	        } else {
	          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
	        }
	      } catch (e) {}
	    }

	    // ie6 check
	    if ('withCredentials' in xhr) {
	      xhr.withCredentials = true;
	    }

	    if (this.hasXDR()) {
	      xhr.onload = function(){
	        self.onLoad();
	      };
	      xhr.onerror = function(){
	        self.onError(xhr.responseText);
	      };
	    } else {
	      xhr.onreadystatechange = function(){
	        if (4 != xhr.readyState) return;
	        if (200 == xhr.status || 1223 == xhr.status) {
	          self.onLoad();
	        } else {
	          // make sure the `error` event handler that's user-set
	          // does not throw in the same tick and gets caught here
	          setTimeout(function(){
	            self.onError(xhr.status);
	          }, 0);
	        }
	      };
	    }

	    debug('xhr data %s', this.data);
	    xhr.send(this.data);
	  } catch (e) {
	    // Need to defer since .create() is called directly fhrom the constructor
	    // and thus the 'error' event can only be only bound *after* this exception
	    // occurs.  Therefore, also, we cannot throw here at all.
	    setTimeout(function() {
	      self.onError(e);
	    }, 0);
	    return;
	  }

	  if (global.document) {
	    this.index = Request.requestsCount++;
	    Request.requests[this.index] = this;
	  }
	};

	/**
	 * Called upon successful response.
	 *
	 * @api private
	 */

	Request.prototype.onSuccess = function(){
	  this.emit('success');
	  this.cleanup();
	};

	/**
	 * Called if we have data.
	 *
	 * @api private
	 */

	Request.prototype.onData = function(data){
	  this.emit('data', data);
	  this.onSuccess();
	};

	/**
	 * Called upon error.
	 *
	 * @api private
	 */

	Request.prototype.onError = function(err){
	  this.emit('error', err);
	  this.cleanup(true);
	};

	/**
	 * Cleans up house.
	 *
	 * @api private
	 */

	Request.prototype.cleanup = function(fromError){
	  if ('undefined' == typeof this.xhr || null === this.xhr) {
	    return;
	  }
	  // xmlhttprequest
	  if (this.hasXDR()) {
	    this.xhr.onload = this.xhr.onerror = empty;
	  } else {
	    this.xhr.onreadystatechange = empty;
	  }

	  if (fromError) {
	    try {
	      this.xhr.abort();
	    } catch(e) {}
	  }

	  if (global.document) {
	    delete Request.requests[this.index];
	  }

	  this.xhr = null;
	};

	/**
	 * Called upon load.
	 *
	 * @api private
	 */

	Request.prototype.onLoad = function(){
	  var data;
	  try {
	    var contentType;
	    try {
	      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
	    } catch (e) {}
	    if (contentType === 'application/octet-stream') {
	      data = this.xhr.response;
	    } else {
	      if (!this.supportsBinary) {
	        data = this.xhr.responseText;
	      } else {
	        try {
	          data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
	        } catch (e) {
	          var ui8Arr = new Uint8Array(this.xhr.response);
	          var dataArray = [];
	          for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
	            dataArray.push(ui8Arr[idx]);
	          }

	          data = String.fromCharCode.apply(null, dataArray);
	        }
	      }
	    }
	  } catch (e) {
	    this.onError(e);
	  }
	  if (null != data) {
	    this.onData(data);
	  }
	};

	/**
	 * Check if it has XDomainRequest.
	 *
	 * @api private
	 */

	Request.prototype.hasXDR = function(){
	  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
	};

	/**
	 * Aborts the request.
	 *
	 * @api public
	 */

	Request.prototype.abort = function(){
	  this.cleanup();
	};

	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */

	if (global.document) {
	  Request.requestsCount = 0;
	  Request.requests = {};
	  if (global.attachEvent) {
	    global.attachEvent('onunload', unloadHandler);
	  } else if (global.addEventListener) {
	    global.addEventListener('beforeunload', unloadHandler, false);
	  }
	}

	function unloadHandler() {
	  for (var i in Request.requests) {
	    if (Request.requests.hasOwnProperty(i)) {
	      Request.requests[i].abort();
	    }
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(306);
	var parseqs = __webpack_require__(317);
	var parser = __webpack_require__(307);
	var inherit = __webpack_require__(318);
	var yeast = __webpack_require__(319);
	var debug = __webpack_require__(286)('engine.io-client:polling');

	/**
	 * Module exports.
	 */

	module.exports = Polling;

	/**
	 * Is XHR2 supported?
	 */

	var hasXHR2 = (function() {
	  var XMLHttpRequest = __webpack_require__(302);
	  var xhr = new XMLHttpRequest({ xdomain: false });
	  return null != xhr.responseType;
	})();

	/**
	 * Polling interface.
	 *
	 * @param {Object} opts
	 * @api private
	 */

	function Polling(opts){
	  var forceBase64 = (opts && opts.forceBase64);
	  if (!hasXHR2 || forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}

	/**
	 * Inherits from Transport.
	 */

	inherit(Polling, Transport);

	/**
	 * Transport name.
	 */

	Polling.prototype.name = 'polling';

	/**
	 * Opens the socket (triggers polling). We write a PING message to determine
	 * when the transport is open.
	 *
	 * @api private
	 */

	Polling.prototype.doOpen = function(){
	  this.poll();
	};

	/**
	 * Pauses polling.
	 *
	 * @param {Function} callback upon buffers are flushed and transport is paused
	 * @api private
	 */

	Polling.prototype.pause = function(onPause){
	  var pending = 0;
	  var self = this;

	  this.readyState = 'pausing';

	  function pause(){
	    debug('paused');
	    self.readyState = 'paused';
	    onPause();
	  }

	  if (this.polling || !this.writable) {
	    var total = 0;

	    if (this.polling) {
	      debug('we are currently polling - waiting to pause');
	      total++;
	      this.once('pollComplete', function(){
	        debug('pre-pause polling complete');
	        --total || pause();
	      });
	    }

	    if (!this.writable) {
	      debug('we are currently writing - waiting to pause');
	      total++;
	      this.once('drain', function(){
	        debug('pre-pause writing complete');
	        --total || pause();
	      });
	    }
	  } else {
	    pause();
	  }
	};

	/**
	 * Starts polling cycle.
	 *
	 * @api public
	 */

	Polling.prototype.poll = function(){
	  debug('polling');
	  this.polling = true;
	  this.doPoll();
	  this.emit('poll');
	};

	/**
	 * Overloads onData to detect payloads.
	 *
	 * @api private
	 */

	Polling.prototype.onData = function(data){
	  var self = this;
	  debug('polling got data %s', data);
	  var callback = function(packet, index, total) {
	    // if its the first message we consider the transport open
	    if ('opening' == self.readyState) {
	      self.onOpen();
	    }

	    // if its a close packet, we close the ongoing requests
	    if ('close' == packet.type) {
	      self.onClose();
	      return false;
	    }

	    // otherwise bypass onData and handle the message
	    self.onPacket(packet);
	  };

	  // decode payload
	  parser.decodePayload(data, this.socket.binaryType, callback);

	  // if an event did not trigger closing
	  if ('closed' != this.readyState) {
	    // if we got data we're not polling
	    this.polling = false;
	    this.emit('pollComplete');

	    if ('open' == this.readyState) {
	      this.poll();
	    } else {
	      debug('ignoring poll - transport state "%s"', this.readyState);
	    }
	  }
	};

	/**
	 * For polling, send a close packet.
	 *
	 * @api private
	 */

	Polling.prototype.doClose = function(){
	  var self = this;

	  function close(){
	    debug('writing close packet');
	    self.write([{ type: 'close' }]);
	  }

	  if ('open' == this.readyState) {
	    debug('transport open - closing');
	    close();
	  } else {
	    // in case we're trying to close while
	    // handshaking is in progress (GH-164)
	    debug('transport not open - deferring close');
	    this.once('open', close);
	  }
	};

	/**
	 * Writes a packets payload.
	 *
	 * @param {Array} data packets
	 * @param {Function} drain callback
	 * @api private
	 */

	Polling.prototype.write = function(packets){
	  var self = this;
	  this.writable = false;
	  var callbackfn = function() {
	    self.writable = true;
	    self.emit('drain');
	  };

	  var self = this;
	  parser.encodePayload(packets, this.supportsBinary, function(data) {
	    self.doWrite(data, callbackfn);
	  });
	};

	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */

	Polling.prototype.uri = function(){
	  var query = this.query || {};
	  var schema = this.secure ? 'https' : 'http';
	  var port = '';

	  // cache busting is forced
	  if (false !== this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }

	  if (!this.supportsBinary && !query.sid) {
	    query.b64 = 1;
	  }

	  query = parseqs.encode(query);

	  // avoid port if default for schema
	  if (this.port && (('https' == schema && this.port != 443) ||
	     ('http' == schema && this.port != 80))) {
	    port = ':' + this.port;
	  }

	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }

	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};


/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var parser = __webpack_require__(307);
	var Emitter = __webpack_require__(316);

	/**
	 * Module exports.
	 */

	module.exports = Transport;

	/**
	 * Transport abstract constructor.
	 *
	 * @param {Object} options.
	 * @api private
	 */

	function Transport (opts) {
	  this.path = opts.path;
	  this.hostname = opts.hostname;
	  this.port = opts.port;
	  this.secure = opts.secure;
	  this.query = opts.query;
	  this.timestampParam = opts.timestampParam;
	  this.timestampRequests = opts.timestampRequests;
	  this.readyState = '';
	  this.agent = opts.agent || false;
	  this.socket = opts.socket;
	  this.enablesXDR = opts.enablesXDR;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;

	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Transport.prototype);

	/**
	 * Emits an error.
	 *
	 * @param {String} str
	 * @return {Transport} for chaining
	 * @api public
	 */

	Transport.prototype.onError = function (msg, desc) {
	  var err = new Error(msg);
	  err.type = 'TransportError';
	  err.description = desc;
	  this.emit('error', err);
	  return this;
	};

	/**
	 * Opens the transport.
	 *
	 * @api public
	 */

	Transport.prototype.open = function () {
	  if ('closed' == this.readyState || '' == this.readyState) {
	    this.readyState = 'opening';
	    this.doOpen();
	  }

	  return this;
	};

	/**
	 * Closes the transport.
	 *
	 * @api private
	 */

	Transport.prototype.close = function () {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    this.doClose();
	    this.onClose();
	  }

	  return this;
	};

	/**
	 * Sends multiple packets.
	 *
	 * @param {Array} packets
	 * @api private
	 */

	Transport.prototype.send = function(packets){
	  if ('open' == this.readyState) {
	    this.write(packets);
	  } else {
	    throw new Error('Transport not open');
	  }
	};

	/**
	 * Called upon open
	 *
	 * @api private
	 */

	Transport.prototype.onOpen = function () {
	  this.readyState = 'open';
	  this.writable = true;
	  this.emit('open');
	};

	/**
	 * Called with data.
	 *
	 * @param {String} data
	 * @api private
	 */

	Transport.prototype.onData = function(data){
	  var packet = parser.decodePacket(data, this.socket.binaryType);
	  this.onPacket(packet);
	};

	/**
	 * Called with a decoded packet.
	 */

	Transport.prototype.onPacket = function (packet) {
	  this.emit('packet', packet);
	};

	/**
	 * Called upon close.
	 *
	 * @api private
	 */

	Transport.prototype.onClose = function () {
	  this.readyState = 'closed';
	  this.emit('close');
	};


/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var keys = __webpack_require__(308);
	var hasBinary = __webpack_require__(309);
	var sliceBuffer = __webpack_require__(311);
	var base64encoder = __webpack_require__(312);
	var after = __webpack_require__(313);
	var utf8 = __webpack_require__(314);

	/**
	 * Check if we are running an android browser. That requires us to use
	 * ArrayBuffer with polling transports...
	 *
	 * http://ghinda.net/jpeg-blob-ajax-android/
	 */

	var isAndroid = navigator.userAgent.match(/Android/i);

	/**
	 * Check if we are running in PhantomJS.
	 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
	 * https://github.com/ariya/phantomjs/issues/11395
	 * @type boolean
	 */
	var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);

	/**
	 * When true, avoids using Blobs to encode payloads.
	 * @type boolean
	 */
	var dontSendBlobs = isAndroid || isPhantomJS;

	/**
	 * Current protocol version.
	 */

	exports.protocol = 3;

	/**
	 * Packet types.
	 */

	var packets = exports.packets = {
	    open:     0    // non-ws
	  , close:    1    // non-ws
	  , ping:     2
	  , pong:     3
	  , message:  4
	  , upgrade:  5
	  , noop:     6
	};

	var packetslist = keys(packets);

	/**
	 * Premade error packet.
	 */

	var err = { type: 'error', data: 'parser error' };

	/**
	 * Create a blob api even for blob builder when vendor prefixes exist
	 */

	var Blob = __webpack_require__(315);

	/**
	 * Encodes a packet.
	 *
	 *     <packet type id> [ <data> ]
	 *
	 * Example:
	 *
	 *     5hello world
	 *     3
	 *     4
	 *
	 * Binary is encoded in an identical principle
	 *
	 * @api private
	 */

	exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
	  if ('function' == typeof supportsBinary) {
	    callback = supportsBinary;
	    supportsBinary = false;
	  }

	  if ('function' == typeof utf8encode) {
	    callback = utf8encode;
	    utf8encode = null;
	  }

	  var data = (packet.data === undefined)
	    ? undefined
	    : packet.data.buffer || packet.data;

	  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
	    return encodeArrayBuffer(packet, supportsBinary, callback);
	  } else if (Blob && data instanceof global.Blob) {
	    return encodeBlob(packet, supportsBinary, callback);
	  }

	  // might be an object with { base64: true, data: dataAsBase64String }
	  if (data && data.base64) {
	    return encodeBase64Object(packet, callback);
	  }

	  // Sending data as a utf-8 string
	  var encoded = packets[packet.type];

	  // data fragment is optional
	  if (undefined !== packet.data) {
	    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
	  }

	  return callback('' + encoded);

	};

	function encodeBase64Object(packet, callback) {
	  // packet data is an object { base64: true, data: dataAsBase64String }
	  var message = 'b' + exports.packets[packet.type] + packet.data.data;
	  return callback(message);
	}

	/**
	 * Encode packet helpers for binary types
	 */

	function encodeArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  var data = packet.data;
	  var contentArray = new Uint8Array(data);
	  var resultBuffer = new Uint8Array(1 + data.byteLength);

	  resultBuffer[0] = packets[packet.type];
	  for (var i = 0; i < contentArray.length; i++) {
	    resultBuffer[i+1] = contentArray[i];
	  }

	  return callback(resultBuffer.buffer);
	}

	function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  var fr = new FileReader();
	  fr.onload = function() {
	    packet.data = fr.result;
	    exports.encodePacket(packet, supportsBinary, true, callback);
	  };
	  return fr.readAsArrayBuffer(packet.data);
	}

	function encodeBlob(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  if (dontSendBlobs) {
	    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
	  }

	  var length = new Uint8Array(1);
	  length[0] = packets[packet.type];
	  var blob = new Blob([length.buffer, packet.data]);

	  return callback(blob);
	}

	/**
	 * Encodes a packet with binary data in a base64 string
	 *
	 * @param {Object} packet, has `type` and `data`
	 * @return {String} base64 encoded message
	 */

	exports.encodeBase64Packet = function(packet, callback) {
	  var message = 'b' + exports.packets[packet.type];
	  if (Blob && packet.data instanceof global.Blob) {
	    var fr = new FileReader();
	    fr.onload = function() {
	      var b64 = fr.result.split(',')[1];
	      callback(message + b64);
	    };
	    return fr.readAsDataURL(packet.data);
	  }

	  var b64data;
	  try {
	    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
	  } catch (e) {
	    // iPhone Safari doesn't let you apply with typed arrays
	    var typed = new Uint8Array(packet.data);
	    var basic = new Array(typed.length);
	    for (var i = 0; i < typed.length; i++) {
	      basic[i] = typed[i];
	    }
	    b64data = String.fromCharCode.apply(null, basic);
	  }
	  message += global.btoa(b64data);
	  return callback(message);
	};

	/**
	 * Decodes a packet. Changes format to Blob if requested.
	 *
	 * @return {Object} with `type` and `data` (if any)
	 * @api private
	 */

	exports.decodePacket = function (data, binaryType, utf8decode) {
	  // String data
	  if (typeof data == 'string' || data === undefined) {
	    if (data.charAt(0) == 'b') {
	      return exports.decodeBase64Packet(data.substr(1), binaryType);
	    }

	    if (utf8decode) {
	      try {
	        data = utf8.decode(data);
	      } catch (e) {
	        return err;
	      }
	    }
	    var type = data.charAt(0);

	    if (Number(type) != type || !packetslist[type]) {
	      return err;
	    }

	    if (data.length > 1) {
	      return { type: packetslist[type], data: data.substring(1) };
	    } else {
	      return { type: packetslist[type] };
	    }
	  }

	  var asArray = new Uint8Array(data);
	  var type = asArray[0];
	  var rest = sliceBuffer(data, 1);
	  if (Blob && binaryType === 'blob') {
	    rest = new Blob([rest]);
	  }
	  return { type: packetslist[type], data: rest };
	};

	/**
	 * Decodes a packet encoded in a base64 string
	 *
	 * @param {String} base64 encoded message
	 * @return {Object} with `type` and `data` (if any)
	 */

	exports.decodeBase64Packet = function(msg, binaryType) {
	  var type = packetslist[msg.charAt(0)];
	  if (!global.ArrayBuffer) {
	    return { type: type, data: { base64: true, data: msg.substr(1) } };
	  }

	  var data = base64encoder.decode(msg.substr(1));

	  if (binaryType === 'blob' && Blob) {
	    data = new Blob([data]);
	  }

	  return { type: type, data: data };
	};

	/**
	 * Encodes multiple messages (payload).
	 *
	 *     <length>:data
	 *
	 * Example:
	 *
	 *     11:hello world2:hi
	 *
	 * If any contents are binary, they will be encoded as base64 strings. Base64
	 * encoded strings are marked with a b before the length specifier
	 *
	 * @param {Array} packets
	 * @api private
	 */

	exports.encodePayload = function (packets, supportsBinary, callback) {
	  if (typeof supportsBinary == 'function') {
	    callback = supportsBinary;
	    supportsBinary = null;
	  }

	  var isBinary = hasBinary(packets);

	  if (supportsBinary && isBinary) {
	    if (Blob && !dontSendBlobs) {
	      return exports.encodePayloadAsBlob(packets, callback);
	    }

	    return exports.encodePayloadAsArrayBuffer(packets, callback);
	  }

	  if (!packets.length) {
	    return callback('0:');
	  }

	  function setLengthHeader(message) {
	    return message.length + ':' + message;
	  }

	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
	      doneCallback(null, setLengthHeader(message));
	    });
	  }

	  map(packets, encodeOne, function(err, results) {
	    return callback(results.join(''));
	  });
	};

	/**
	 * Async array map using after
	 */

	function map(ary, each, done) {
	  var result = new Array(ary.length);
	  var next = after(ary.length, done);

	  var eachWithIndex = function(i, el, cb) {
	    each(el, function(error, msg) {
	      result[i] = msg;
	      cb(error, result);
	    });
	  };

	  for (var i = 0; i < ary.length; i++) {
	    eachWithIndex(i, ary[i], next);
	  }
	}

	/*
	 * Decodes data when a payload is maybe expected. Possible binary contents are
	 * decoded from their base64 representation
	 *
	 * @param {String} data, callback method
	 * @api public
	 */

	exports.decodePayload = function (data, binaryType, callback) {
	  if (typeof data != 'string') {
	    return exports.decodePayloadAsBinary(data, binaryType, callback);
	  }

	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }

	  var packet;
	  if (data == '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }

	  var length = ''
	    , n, msg;

	  for (var i = 0, l = data.length; i < l; i++) {
	    var chr = data.charAt(i);

	    if (':' != chr) {
	      length += chr;
	    } else {
	      if ('' == length || (length != (n = Number(length)))) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }

	      msg = data.substr(i + 1, n);

	      if (length != msg.length) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }

	      if (msg.length) {
	        packet = exports.decodePacket(msg, binaryType, true);

	        if (err.type == packet.type && err.data == packet.data) {
	          // parser error in individual packet - ignoring payload
	          return callback(err, 0, 1);
	        }

	        var ret = callback(packet, i + n, l);
	        if (false === ret) return;
	      }

	      // advance cursor
	      i += n;
	      length = '';
	    }
	  }

	  if (length != '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }

	};

	/**
	 * Encodes multiple messages (payload) as binary.
	 *
	 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
	 * 255><data>
	 *
	 * Example:
	 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
	 *
	 * @param {Array} packets
	 * @return {ArrayBuffer} encoded payload
	 * @api private
	 */

	exports.encodePayloadAsArrayBuffer = function(packets, callback) {
	  if (!packets.length) {
	    return callback(new ArrayBuffer(0));
	  }

	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(data) {
	      return doneCallback(null, data);
	    });
	  }

	  map(packets, encodeOne, function(err, encodedPackets) {
	    var totalLength = encodedPackets.reduce(function(acc, p) {
	      var len;
	      if (typeof p === 'string'){
	        len = p.length;
	      } else {
	        len = p.byteLength;
	      }
	      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
	    }, 0);

	    var resultArray = new Uint8Array(totalLength);

	    var bufferIndex = 0;
	    encodedPackets.forEach(function(p) {
	      var isString = typeof p === 'string';
	      var ab = p;
	      if (isString) {
	        var view = new Uint8Array(p.length);
	        for (var i = 0; i < p.length; i++) {
	          view[i] = p.charCodeAt(i);
	        }
	        ab = view.buffer;
	      }

	      if (isString) { // not true binary
	        resultArray[bufferIndex++] = 0;
	      } else { // true binary
	        resultArray[bufferIndex++] = 1;
	      }

	      var lenStr = ab.byteLength.toString();
	      for (var i = 0; i < lenStr.length; i++) {
	        resultArray[bufferIndex++] = parseInt(lenStr[i]);
	      }
	      resultArray[bufferIndex++] = 255;

	      var view = new Uint8Array(ab);
	      for (var i = 0; i < view.length; i++) {
	        resultArray[bufferIndex++] = view[i];
	      }
	    });

	    return callback(resultArray.buffer);
	  });
	};

	/**
	 * Encode as Blob
	 */

	exports.encodePayloadAsBlob = function(packets, callback) {
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(encoded) {
	      var binaryIdentifier = new Uint8Array(1);
	      binaryIdentifier[0] = 1;
	      if (typeof encoded === 'string') {
	        var view = new Uint8Array(encoded.length);
	        for (var i = 0; i < encoded.length; i++) {
	          view[i] = encoded.charCodeAt(i);
	        }
	        encoded = view.buffer;
	        binaryIdentifier[0] = 0;
	      }

	      var len = (encoded instanceof ArrayBuffer)
	        ? encoded.byteLength
	        : encoded.size;

	      var lenStr = len.toString();
	      var lengthAry = new Uint8Array(lenStr.length + 1);
	      for (var i = 0; i < lenStr.length; i++) {
	        lengthAry[i] = parseInt(lenStr[i]);
	      }
	      lengthAry[lenStr.length] = 255;

	      if (Blob) {
	        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
	        doneCallback(null, blob);
	      }
	    });
	  }

	  map(packets, encodeOne, function(err, results) {
	    return callback(new Blob(results));
	  });
	};

	/*
	 * Decodes data when a payload is maybe expected. Strings are decoded by
	 * interpreting each byte as a key code for entries marked to start with 0. See
	 * description of encodePayloadAsBinary
	 *
	 * @param {ArrayBuffer} data, callback method
	 * @api public
	 */

	exports.decodePayloadAsBinary = function (data, binaryType, callback) {
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }

	  var bufferTail = data;
	  var buffers = [];

	  var numberTooLong = false;
	  while (bufferTail.byteLength > 0) {
	    var tailArray = new Uint8Array(bufferTail);
	    var isString = tailArray[0] === 0;
	    var msgLength = '';

	    for (var i = 1; ; i++) {
	      if (tailArray[i] == 255) break;

	      if (msgLength.length > 310) {
	        numberTooLong = true;
	        break;
	      }

	      msgLength += tailArray[i];
	    }

	    if(numberTooLong) return callback(err, 0, 1);

	    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
	    msgLength = parseInt(msgLength);

	    var msg = sliceBuffer(bufferTail, 0, msgLength);
	    if (isString) {
	      try {
	        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
	      } catch (e) {
	        // iPhone Safari doesn't let you apply to typed arrays
	        var typed = new Uint8Array(msg);
	        msg = '';
	        for (var i = 0; i < typed.length; i++) {
	          msg += String.fromCharCode(typed[i]);
	        }
	      }
	    }

	    buffers.push(msg);
	    bufferTail = sliceBuffer(bufferTail, msgLength);
	  }

	  var total = buffers.length;
	  buffers.forEach(function(buffer, i) {
	    callback(exports.decodePacket(buffer, binaryType, true), i, total);
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 308 */
/***/ function(module, exports) {

	
	/**
	 * Gets the keys for an object.
	 *
	 * @return {Array} keys
	 * @api private
	 */

	module.exports = Object.keys || function keys (obj){
	  var arr = [];
	  var has = Object.prototype.hasOwnProperty;

	  for (var i in obj) {
	    if (has.call(obj, i)) {
	      arr.push(i);
	    }
	  }
	  return arr;
	};


/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */

	var isArray = __webpack_require__(310);

	/**
	 * Module exports.
	 */

	module.exports = hasBinary;

	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */

	function hasBinary(data) {

	  function _hasBinary(obj) {
	    if (!obj) return false;

	    if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
	         (global.Blob && obj instanceof Blob) ||
	         (global.File && obj instanceof File)
	        ) {
	      return true;
	    }

	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	          if (_hasBinary(obj[i])) {
	              return true;
	          }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      if (obj.toJSON) {
	        obj = obj.toJSON();
	      }

	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }

	    return false;
	  }

	  return _hasBinary(data);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 310 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 311 */
/***/ function(module, exports) {

	/**
	 * An abstraction for slicing an arraybuffer even when
	 * ArrayBuffer.prototype.slice is not supported
	 *
	 * @api public
	 */

	module.exports = function(arraybuffer, start, end) {
	  var bytes = arraybuffer.byteLength;
	  start = start || 0;
	  end = end || bytes;

	  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

	  if (start < 0) { start += bytes; }
	  if (end < 0) { end += bytes; }
	  if (end > bytes) { end = bytes; }

	  if (start >= bytes || start >= end || bytes === 0) {
	    return new ArrayBuffer(0);
	  }

	  var abv = new Uint8Array(arraybuffer);
	  var result = new Uint8Array(end - start);
	  for (var i = start, ii = 0; i < end; i++, ii++) {
	    result[ii] = abv[i];
	  }
	  return result.buffer;
	};


/***/ },
/* 312 */
/***/ function(module, exports) {

	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	(function(chars){
	  "use strict";

	  exports.encode = function(arraybuffer) {
	    var bytes = new Uint8Array(arraybuffer),
	    i, len = bytes.length, base64 = "";

	    for (i = 0; i < len; i+=3) {
	      base64 += chars[bytes[i] >> 2];
	      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
	      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
	      base64 += chars[bytes[i + 2] & 63];
	    }

	    if ((len % 3) === 2) {
	      base64 = base64.substring(0, base64.length - 1) + "=";
	    } else if (len % 3 === 1) {
	      base64 = base64.substring(0, base64.length - 2) + "==";
	    }

	    return base64;
	  };

	  exports.decode =  function(base64) {
	    var bufferLength = base64.length * 0.75,
	    len = base64.length, i, p = 0,
	    encoded1, encoded2, encoded3, encoded4;

	    if (base64[base64.length - 1] === "=") {
	      bufferLength--;
	      if (base64[base64.length - 2] === "=") {
	        bufferLength--;
	      }
	    }

	    var arraybuffer = new ArrayBuffer(bufferLength),
	    bytes = new Uint8Array(arraybuffer);

	    for (i = 0; i < len; i+=4) {
	      encoded1 = chars.indexOf(base64[i]);
	      encoded2 = chars.indexOf(base64[i+1]);
	      encoded3 = chars.indexOf(base64[i+2]);
	      encoded4 = chars.indexOf(base64[i+3]);

	      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
	      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
	      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
	    }

	    return arraybuffer;
	  };
	})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");


/***/ },
/* 313 */
/***/ function(module, exports) {

	module.exports = after

	function after(count, callback, err_cb) {
	    var bail = false
	    err_cb = err_cb || noop
	    proxy.count = count

	    return (count === 0) ? callback() : proxy

	    function proxy(err, result) {
	        if (proxy.count <= 0) {
	            throw new Error('after called too many times')
	        }
	        --proxy.count

	        // after first error, rest are passed to err_cb
	        if (err) {
	            bail = true
	            callback(err)
	            // future error callbacks will go to error handler
	            callback = err_cb
	        } else if (proxy.count === 0 && !bail) {
	            callback(null, result)
	        }
	    }
	}

	function noop() {}


/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/utf8js v2.0.0 by @mathias */
	;(function(root) {

		// Detect free variables `exports`
		var freeExports = typeof exports == 'object' && exports;

		// Detect free variable `module`
		var freeModule = typeof module == 'object' && module &&
			module.exports == freeExports && module;

		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}

		/*--------------------------------------------------------------------------*/

		var stringFromCharCode = String.fromCharCode;

		// Taken from https://mths.be/punycode
		function ucs2decode(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			var value;
			var extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		// Taken from https://mths.be/punycode
		function ucs2encode(array) {
			var length = array.length;
			var index = -1;
			var value;
			var output = '';
			while (++index < length) {
				value = array[index];
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
			}
			return output;
		}

		function checkScalarValue(codePoint) {
			if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
				throw Error(
					'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
					' is not a scalar value'
				);
			}
		}
		/*--------------------------------------------------------------------------*/

		function createByte(codePoint, shift) {
			return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
		}

		function encodeCodePoint(codePoint) {
			if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
				return stringFromCharCode(codePoint);
			}
			var symbol = '';
			if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
				symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
			}
			else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
				checkScalarValue(codePoint);
				symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
				symbol += createByte(codePoint, 6);
			}
			else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
				symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
				symbol += createByte(codePoint, 12);
				symbol += createByte(codePoint, 6);
			}
			symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
			return symbol;
		}

		function utf8encode(string) {
			var codePoints = ucs2decode(string);
			var length = codePoints.length;
			var index = -1;
			var codePoint;
			var byteString = '';
			while (++index < length) {
				codePoint = codePoints[index];
				byteString += encodeCodePoint(codePoint);
			}
			return byteString;
		}

		/*--------------------------------------------------------------------------*/

		function readContinuationByte() {
			if (byteIndex >= byteCount) {
				throw Error('Invalid byte index');
			}

			var continuationByte = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			if ((continuationByte & 0xC0) == 0x80) {
				return continuationByte & 0x3F;
			}

			// If we end up here, it’s not a continuation byte
			throw Error('Invalid continuation byte');
		}

		function decodeSymbol() {
			var byte1;
			var byte2;
			var byte3;
			var byte4;
			var codePoint;

			if (byteIndex > byteCount) {
				throw Error('Invalid byte index');
			}

			if (byteIndex == byteCount) {
				return false;
			}

			// Read first byte
			byte1 = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			// 1-byte sequence (no continuation bytes)
			if ((byte1 & 0x80) == 0) {
				return byte1;
			}

			// 2-byte sequence
			if ((byte1 & 0xE0) == 0xC0) {
				var byte2 = readContinuationByte();
				codePoint = ((byte1 & 0x1F) << 6) | byte2;
				if (codePoint >= 0x80) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 3-byte sequence (may include unpaired surrogates)
			if ((byte1 & 0xF0) == 0xE0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
				if (codePoint >= 0x0800) {
					checkScalarValue(codePoint);
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 4-byte sequence
			if ((byte1 & 0xF8) == 0xF0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				byte4 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
					(byte3 << 0x06) | byte4;
				if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
					return codePoint;
				}
			}

			throw Error('Invalid UTF-8 detected');
		}

		var byteArray;
		var byteCount;
		var byteIndex;
		function utf8decode(byteString) {
			byteArray = ucs2decode(byteString);
			byteCount = byteArray.length;
			byteIndex = 0;
			var codePoints = [];
			var tmp;
			while ((tmp = decodeSymbol()) !== false) {
				codePoints.push(tmp);
			}
			return ucs2encode(codePoints);
		}

		/*--------------------------------------------------------------------------*/

		var utf8 = {
			'version': '2.0.0',
			'encode': utf8encode,
			'decode': utf8decode
		};

		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return utf8;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}	else if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = utf8;
			} else { // in Narwhal or RingoJS v0.7.0-
				var object = {};
				var hasOwnProperty = object.hasOwnProperty;
				for (var key in utf8) {
					hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.utf8 = utf8;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(291)(module), (function() { return this; }())))

/***/ },
/* 315 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Create a blob builder even when vendor prefixes exist
	 */

	var BlobBuilder = global.BlobBuilder
	  || global.WebKitBlobBuilder
	  || global.MSBlobBuilder
	  || global.MozBlobBuilder;

	/**
	 * Check if Blob constructor is supported
	 */

	var blobSupported = (function() {
	  try {
	    var a = new Blob(['hi']);
	    return a.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();

	/**
	 * Check if Blob constructor supports ArrayBufferViews
	 * Fails in Safari 6, so we need to map to ArrayBuffers there.
	 */

	var blobSupportsArrayBufferView = blobSupported && (function() {
	  try {
	    var b = new Blob([new Uint8Array([1,2])]);
	    return b.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();

	/**
	 * Check if BlobBuilder is supported
	 */

	var blobBuilderSupported = BlobBuilder
	  && BlobBuilder.prototype.append
	  && BlobBuilder.prototype.getBlob;

	/**
	 * Helper function that maps ArrayBufferViews to ArrayBuffers
	 * Used by BlobBuilder constructor and old browsers that didn't
	 * support it in the Blob constructor.
	 */

	function mapArrayBufferViews(ary) {
	  for (var i = 0; i < ary.length; i++) {
	    var chunk = ary[i];
	    if (chunk.buffer instanceof ArrayBuffer) {
	      var buf = chunk.buffer;

	      // if this is a subarray, make a copy so we only
	      // include the subarray region from the underlying buffer
	      if (chunk.byteLength !== buf.byteLength) {
	        var copy = new Uint8Array(chunk.byteLength);
	        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
	        buf = copy.buffer;
	      }

	      ary[i] = buf;
	    }
	  }
	}

	function BlobBuilderConstructor(ary, options) {
	  options = options || {};

	  var bb = new BlobBuilder();
	  mapArrayBufferViews(ary);

	  for (var i = 0; i < ary.length; i++) {
	    bb.append(ary[i]);
	  }

	  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
	};

	function BlobConstructor(ary, options) {
	  mapArrayBufferViews(ary);
	  return new Blob(ary, options || {});
	};

	module.exports = (function() {
	  if (blobSupported) {
	    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
	  } else if (blobBuilderSupported) {
	    return BlobBuilderConstructor;
	  } else {
	    return undefined;
	  }
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 316 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};

	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 317 */
/***/ function(module, exports) {

	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */

	exports.encode = function (obj) {
	  var str = '';

	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      if (str.length) str += '&';
	      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
	    }
	  }

	  return str;
	};

	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */

	exports.decode = function(qs){
	  var qry = {};
	  var pairs = qs.split('&');
	  for (var i = 0, l = pairs.length; i < l; i++) {
	    var pair = pairs[i].split('=');
	    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
	  return qry;
	};


/***/ },
/* 318 */
/***/ function(module, exports) {

	
	module.exports = function(a, b){
	  var fn = function(){};
	  fn.prototype = b.prototype;
	  a.prototype = new fn;
	  a.prototype.constructor = a;
	};

/***/ },
/* 319 */
/***/ function(module, exports) {

	'use strict';

	var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
	  , length = 64
	  , map = {}
	  , seed = 0
	  , i = 0
	  , prev;

	/**
	 * Return a string representing the specified number.
	 *
	 * @param {Number} num The number to convert.
	 * @returns {String} The string representation of the number.
	 * @api public
	 */
	function encode(num) {
	  var encoded = '';

	  do {
	    encoded = alphabet[num % length] + encoded;
	    num = Math.floor(num / length);
	  } while (num > 0);

	  return encoded;
	}

	/**
	 * Return the integer value specified by the given string.
	 *
	 * @param {String} str The string to convert.
	 * @returns {Number} The integer value represented by the string.
	 * @api public
	 */
	function decode(str) {
	  var decoded = 0;

	  for (i = 0; i < str.length; i++) {
	    decoded = decoded * length + map[str.charAt(i)];
	  }

	  return decoded;
	}

	/**
	 * Yeast: A tiny growing id generator.
	 *
	 * @returns {String} A unique id.
	 * @api public
	 */
	function yeast() {
	  var now = encode(+new Date());

	  if (now !== prev) return seed = 0, prev = now;
	  return now +'.'+ encode(seed++);
	}

	//
	// Map each character to its index.
	//
	for (; i < length; i++) map[alphabet[i]] = i;

	//
	// Expose the `yeast`, `encode` and `decode` functions.
	//
	yeast.encode = encode;
	yeast.decode = decode;
	module.exports = yeast;


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module requirements.
	 */

	var Polling = __webpack_require__(305);
	var inherit = __webpack_require__(318);

	/**
	 * Module exports.
	 */

	module.exports = JSONPPolling;

	/**
	 * Cached regular expressions.
	 */

	var rNewline = /\n/g;
	var rEscapedNewline = /\\n/g;

	/**
	 * Global JSONP callbacks.
	 */

	var callbacks;

	/**
	 * Callbacks count.
	 */

	var index = 0;

	/**
	 * Noop.
	 */

	function empty () { }

	/**
	 * JSONP Polling constructor.
	 *
	 * @param {Object} opts.
	 * @api public
	 */

	function JSONPPolling (opts) {
	  Polling.call(this, opts);

	  this.query = this.query || {};

	  // define global callbacks array if not present
	  // we do this here (lazily) to avoid unneeded global pollution
	  if (!callbacks) {
	    // we need to consider multiple engines in the same page
	    if (!global.___eio) global.___eio = [];
	    callbacks = global.___eio;
	  }

	  // callback identifier
	  this.index = callbacks.length;

	  // add callback to jsonp global
	  var self = this;
	  callbacks.push(function (msg) {
	    self.onData(msg);
	  });

	  // append to query string
	  this.query.j = this.index;

	  // prevent spurious errors from being emitted when the window is unloaded
	  if (global.document && global.addEventListener) {
	    global.addEventListener('beforeunload', function () {
	      if (self.script) self.script.onerror = empty;
	    }, false);
	  }
	}

	/**
	 * Inherits from Polling.
	 */

	inherit(JSONPPolling, Polling);

	/*
	 * JSONP only supports binary as base64 encoded strings
	 */

	JSONPPolling.prototype.supportsBinary = false;

	/**
	 * Closes the socket.
	 *
	 * @api private
	 */

	JSONPPolling.prototype.doClose = function () {
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }

	  if (this.form) {
	    this.form.parentNode.removeChild(this.form);
	    this.form = null;
	    this.iframe = null;
	  }

	  Polling.prototype.doClose.call(this);
	};

	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */

	JSONPPolling.prototype.doPoll = function () {
	  var self = this;
	  var script = document.createElement('script');

	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }

	  script.async = true;
	  script.src = this.uri();
	  script.onerror = function(e){
	    self.onError('jsonp poll error',e);
	  };

	  var insertAt = document.getElementsByTagName('script')[0];
	  if (insertAt) {
	    insertAt.parentNode.insertBefore(script, insertAt);
	  }
	  else {
	    (document.head || document.body).appendChild(script);
	  }
	  this.script = script;

	  var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);
	  
	  if (isUAgecko) {
	    setTimeout(function () {
	      var iframe = document.createElement('iframe');
	      document.body.appendChild(iframe);
	      document.body.removeChild(iframe);
	    }, 100);
	  }
	};

	/**
	 * Writes with a hidden iframe.
	 *
	 * @param {String} data to send
	 * @param {Function} called upon flush.
	 * @api private
	 */

	JSONPPolling.prototype.doWrite = function (data, fn) {
	  var self = this;

	  if (!this.form) {
	    var form = document.createElement('form');
	    var area = document.createElement('textarea');
	    var id = this.iframeId = 'eio_iframe_' + this.index;
	    var iframe;

	    form.className = 'socketio';
	    form.style.position = 'absolute';
	    form.style.top = '-1000px';
	    form.style.left = '-1000px';
	    form.target = id;
	    form.method = 'POST';
	    form.setAttribute('accept-charset', 'utf-8');
	    area.name = 'd';
	    form.appendChild(area);
	    document.body.appendChild(form);

	    this.form = form;
	    this.area = area;
	  }

	  this.form.action = this.uri();

	  function complete () {
	    initIframe();
	    fn();
	  }

	  function initIframe () {
	    if (self.iframe) {
	      try {
	        self.form.removeChild(self.iframe);
	      } catch (e) {
	        self.onError('jsonp polling iframe removal error', e);
	      }
	    }

	    try {
	      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	      var html = '<iframe src="javascript:0" name="'+ self.iframeId +'">';
	      iframe = document.createElement(html);
	    } catch (e) {
	      iframe = document.createElement('iframe');
	      iframe.name = self.iframeId;
	      iframe.src = 'javascript:0';
	    }

	    iframe.id = self.iframeId;

	    self.form.appendChild(iframe);
	    self.iframe = iframe;
	  }

	  initIframe();

	  // escape \n to prevent it from being converted into \r\n by some UAs
	  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
	  data = data.replace(rEscapedNewline, '\\\n');
	  this.area.value = data.replace(rNewline, '\\n');

	  try {
	    this.form.submit();
	  } catch(e) {}

	  if (this.iframe.attachEvent) {
	    this.iframe.onreadystatechange = function(){
	      if (self.iframe.readyState == 'complete') {
	        complete();
	      }
	    };
	  } else {
	    this.iframe.onload = complete;
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(306);
	var parser = __webpack_require__(307);
	var parseqs = __webpack_require__(317);
	var inherit = __webpack_require__(318);
	var yeast = __webpack_require__(319);
	var debug = __webpack_require__(286)('engine.io-client:websocket');
	var BrowserWebSocket = global.WebSocket || global.MozWebSocket;

	/**
	 * Get either the `WebSocket` or `MozWebSocket` globals
	 * in the browser or try to resolve WebSocket-compatible
	 * interface exposed by `ws` for Node-like environment.
	 */

	var WebSocket = BrowserWebSocket;
	if (!WebSocket && typeof window === 'undefined') {
	  try {
	    WebSocket = __webpack_require__(322);
	  } catch (e) { }
	}

	/**
	 * Module exports.
	 */

	module.exports = WS;

	/**
	 * WebSocket transport constructor.
	 *
	 * @api {Object} connection options
	 * @api public
	 */

	function WS(opts){
	  var forceBase64 = (opts && opts.forceBase64);
	  if (forceBase64) {
	    this.supportsBinary = false;
	  }
	  this.perMessageDeflate = opts.perMessageDeflate;
	  Transport.call(this, opts);
	}

	/**
	 * Inherits from Transport.
	 */

	inherit(WS, Transport);

	/**
	 * Transport name.
	 *
	 * @api public
	 */

	WS.prototype.name = 'websocket';

	/*
	 * WebSockets support binary
	 */

	WS.prototype.supportsBinary = true;

	/**
	 * Opens socket.
	 *
	 * @api private
	 */

	WS.prototype.doOpen = function(){
	  if (!this.check()) {
	    // let probe timeout
	    return;
	  }

	  var self = this;
	  var uri = this.uri();
	  var protocols = void(0);
	  var opts = {
	    agent: this.agent,
	    perMessageDeflate: this.perMessageDeflate
	  };

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  if (this.extraHeaders) {
	    opts.headers = this.extraHeaders;
	  }

	  this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);

	  if (this.ws.binaryType === undefined) {
	    this.supportsBinary = false;
	  }

	  if (this.ws.supports && this.ws.supports.binary) {
	    this.supportsBinary = true;
	    this.ws.binaryType = 'buffer';
	  } else {
	    this.ws.binaryType = 'arraybuffer';
	  }

	  this.addEventListeners();
	};

	/**
	 * Adds event listeners to the socket
	 *
	 * @api private
	 */

	WS.prototype.addEventListeners = function(){
	  var self = this;

	  this.ws.onopen = function(){
	    self.onOpen();
	  };
	  this.ws.onclose = function(){
	    self.onClose();
	  };
	  this.ws.onmessage = function(ev){
	    self.onData(ev.data);
	  };
	  this.ws.onerror = function(e){
	    self.onError('websocket error', e);
	  };
	};

	/**
	 * Override `onData` to use a timer on iOS.
	 * See: https://gist.github.com/mloughran/2052006
	 *
	 * @api private
	 */

	if ('undefined' != typeof navigator
	  && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
	  WS.prototype.onData = function(data){
	    var self = this;
	    setTimeout(function(){
	      Transport.prototype.onData.call(self, data);
	    }, 0);
	  };
	}

	/**
	 * Writes data to socket.
	 *
	 * @param {Array} array of packets.
	 * @api private
	 */

	WS.prototype.write = function(packets){
	  var self = this;
	  this.writable = false;

	  // encodePacket efficient as it uses WS framing
	  // no need for encodePayload
	  var total = packets.length;
	  for (var i = 0, l = total; i < l; i++) {
	    (function(packet) {
	      parser.encodePacket(packet, self.supportsBinary, function(data) {
	        if (!BrowserWebSocket) {
	          // always create a new object (GH-437)
	          var opts = {};
	          if (packet.options) {
	            opts.compress = packet.options.compress;
	          }

	          if (self.perMessageDeflate) {
	            var len = 'string' == typeof data ? global.Buffer.byteLength(data) : data.length;
	            if (len < self.perMessageDeflate.threshold) {
	              opts.compress = false;
	            }
	          }
	        }

	        //Sometimes the websocket has already been closed but the browser didn't
	        //have a chance of informing us about it yet, in that case send will
	        //throw an error
	        try {
	          if (BrowserWebSocket) {
	            // TypeError is thrown when passing the second argument on Safari
	            self.ws.send(data);
	          } else {
	            self.ws.send(data, opts);
	          }
	        } catch (e){
	          debug('websocket closed before onclose event');
	        }

	        --total || done();
	      });
	    })(packets[i]);
	  }

	  function done(){
	    self.emit('flush');

	    // fake drain
	    // defer to next tick to allow Socket to clear writeBuffer
	    setTimeout(function(){
	      self.writable = true;
	      self.emit('drain');
	    }, 0);
	  }
	};

	/**
	 * Called upon close
	 *
	 * @api private
	 */

	WS.prototype.onClose = function(){
	  Transport.prototype.onClose.call(this);
	};

	/**
	 * Closes socket.
	 *
	 * @api private
	 */

	WS.prototype.doClose = function(){
	  if (typeof this.ws !== 'undefined') {
	    this.ws.close();
	  }
	};

	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */

	WS.prototype.uri = function(){
	  var query = this.query || {};
	  var schema = this.secure ? 'wss' : 'ws';
	  var port = '';

	  // avoid port if default for schema
	  if (this.port && (('wss' == schema && this.port != 443)
	    || ('ws' == schema && this.port != 80))) {
	    port = ':' + this.port;
	  }

	  // append timestamp to URI
	  if (this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }

	  // communicate binary support capabilities
	  if (!this.supportsBinary) {
	    query.b64 = 1;
	  }

	  query = parseqs.encode(query);

	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }

	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};

	/**
	 * Feature detection for WebSocket.
	 *
	 * @return {Boolean} whether this transport is available.
	 * @api public
	 */

	WS.prototype.check = function(){
	  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 322 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 323 */
/***/ function(module, exports) {

	
	var indexOf = [].indexOf;

	module.exports = function(arr, obj){
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 324 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * JSON parse.
	 *
	 * @see Based on jQuery#parseJSON (MIT) and JSON2
	 * @api private
	 */

	var rvalidchars = /^[\],:{}\s]*$/;
	var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
	var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
	var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
	var rtrimLeft = /^\s+/;
	var rtrimRight = /\s+$/;

	module.exports = function parsejson(data) {
	  if ('string' != typeof data || !data) {
	    return null;
	  }

	  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

	  // Attempt to parse using the native JSON parser first
	  if (global.JSON && JSON.parse) {
	    return JSON.parse(data);
	  }

	  if (rvalidchars.test(data.replace(rvalidescape, '@')
	      .replace(rvalidtokens, ']')
	      .replace(rvalidbraces, ''))) {
	    return (new Function('return ' + data))();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var parser = __webpack_require__(289);
	var Emitter = __webpack_require__(326);
	var toArray = __webpack_require__(327);
	var on = __webpack_require__(328);
	var bind = __webpack_require__(329);
	var debug = __webpack_require__(286)('socket.io-client:socket');
	var hasBin = __webpack_require__(330);

	/**
	 * Module exports.
	 */

	module.exports = exports = Socket;

	/**
	 * Internal events (blacklisted).
	 * These events can't be emitted by the user.
	 *
	 * @api private
	 */

	var events = {
	  connect: 1,
	  connect_error: 1,
	  connect_timeout: 1,
	  connecting: 1,
	  disconnect: 1,
	  error: 1,
	  reconnect: 1,
	  reconnect_attempt: 1,
	  reconnect_failed: 1,
	  reconnect_error: 1,
	  reconnecting: 1,
	  ping: 1,
	  pong: 1
	};

	/**
	 * Shortcut to `Emitter#emit`.
	 */

	var emit = Emitter.prototype.emit;

	/**
	 * `Socket` constructor.
	 *
	 * @api public
	 */

	function Socket(io, nsp){
	  this.io = io;
	  this.nsp = nsp;
	  this.json = this; // compat
	  this.ids = 0;
	  this.acks = {};
	  this.receiveBuffer = [];
	  this.sendBuffer = [];
	  this.connected = false;
	  this.disconnected = true;
	  if (this.io.autoConnect) this.open();
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Socket.prototype);

	/**
	 * Subscribe to open, close and packet events
	 *
	 * @api private
	 */

	Socket.prototype.subEvents = function() {
	  if (this.subs) return;

	  var io = this.io;
	  this.subs = [
	    on(io, 'open', bind(this, 'onopen')),
	    on(io, 'packet', bind(this, 'onpacket')),
	    on(io, 'close', bind(this, 'onclose'))
	  ];
	};

	/**
	 * "Opens" the socket.
	 *
	 * @api public
	 */

	Socket.prototype.open =
	Socket.prototype.connect = function(){
	  if (this.connected) return this;

	  this.subEvents();
	  this.io.open(); // ensure open
	  if ('open' == this.io.readyState) this.onopen();
	  this.emit('connecting');
	  return this;
	};

	/**
	 * Sends a `message` event.
	 *
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.send = function(){
	  var args = toArray(arguments);
	  args.unshift('message');
	  this.emit.apply(this, args);
	  return this;
	};

	/**
	 * Override `emit`.
	 * If the event is in `events`, it's emitted normally.
	 *
	 * @param {String} event name
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.emit = function(ev){
	  if (events.hasOwnProperty(ev)) {
	    emit.apply(this, arguments);
	    return this;
	  }

	  var args = toArray(arguments);
	  var parserType = parser.EVENT; // default
	  if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
	  var packet = { type: parserType, data: args };

	  packet.options = {};
	  packet.options.compress = !this.flags || false !== this.flags.compress;

	  // event ack callback
	  if ('function' == typeof args[args.length - 1]) {
	    debug('emitting packet with ack id %d', this.ids);
	    this.acks[this.ids] = args.pop();
	    packet.id = this.ids++;
	  }

	  if (this.connected) {
	    this.packet(packet);
	  } else {
	    this.sendBuffer.push(packet);
	  }

	  delete this.flags;

	  return this;
	};

	/**
	 * Sends a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.packet = function(packet){
	  packet.nsp = this.nsp;
	  this.io.packet(packet);
	};

	/**
	 * Called upon engine `open`.
	 *
	 * @api private
	 */

	Socket.prototype.onopen = function(){
	  debug('transport is open - connecting');

	  // write connect packet if necessary
	  if ('/' != this.nsp) {
	    this.packet({ type: parser.CONNECT });
	  }
	};

	/**
	 * Called upon engine `close`.
	 *
	 * @param {String} reason
	 * @api private
	 */

	Socket.prototype.onclose = function(reason){
	  debug('close (%s)', reason);
	  this.connected = false;
	  this.disconnected = true;
	  delete this.id;
	  this.emit('disconnect', reason);
	};

	/**
	 * Called with socket packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onpacket = function(packet){
	  if (packet.nsp != this.nsp) return;

	  switch (packet.type) {
	    case parser.CONNECT:
	      this.onconnect();
	      break;

	    case parser.EVENT:
	      this.onevent(packet);
	      break;

	    case parser.BINARY_EVENT:
	      this.onevent(packet);
	      break;

	    case parser.ACK:
	      this.onack(packet);
	      break;

	    case parser.BINARY_ACK:
	      this.onack(packet);
	      break;

	    case parser.DISCONNECT:
	      this.ondisconnect();
	      break;

	    case parser.ERROR:
	      this.emit('error', packet.data);
	      break;
	  }
	};

	/**
	 * Called upon a server event.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onevent = function(packet){
	  var args = packet.data || [];
	  debug('emitting event %j', args);

	  if (null != packet.id) {
	    debug('attaching ack callback to event');
	    args.push(this.ack(packet.id));
	  }

	  if (this.connected) {
	    emit.apply(this, args);
	  } else {
	    this.receiveBuffer.push(args);
	  }
	};

	/**
	 * Produces an ack callback to emit with an event.
	 *
	 * @api private
	 */

	Socket.prototype.ack = function(id){
	  var self = this;
	  var sent = false;
	  return function(){
	    // prevent double callbacks
	    if (sent) return;
	    sent = true;
	    var args = toArray(arguments);
	    debug('sending ack %j', args);

	    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
	    self.packet({
	      type: type,
	      id: id,
	      data: args
	    });
	  };
	};

	/**
	 * Called upon a server acknowlegement.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onack = function(packet){
	  var ack = this.acks[packet.id];
	  if ('function' == typeof ack) {
	    debug('calling ack %s with %j', packet.id, packet.data);
	    ack.apply(this, packet.data);
	    delete this.acks[packet.id];
	  } else {
	    debug('bad ack %s', packet.id);
	  }
	};

	/**
	 * Called upon server connect.
	 *
	 * @api private
	 */

	Socket.prototype.onconnect = function(){
	  this.connected = true;
	  this.disconnected = false;
	  this.emit('connect');
	  this.emitBuffered();
	};

	/**
	 * Emit buffered events (received and emitted).
	 *
	 * @api private
	 */

	Socket.prototype.emitBuffered = function(){
	  var i;
	  for (i = 0; i < this.receiveBuffer.length; i++) {
	    emit.apply(this, this.receiveBuffer[i]);
	  }
	  this.receiveBuffer = [];

	  for (i = 0; i < this.sendBuffer.length; i++) {
	    this.packet(this.sendBuffer[i]);
	  }
	  this.sendBuffer = [];
	};

	/**
	 * Called upon server disconnect.
	 *
	 * @api private
	 */

	Socket.prototype.ondisconnect = function(){
	  debug('server disconnect (%s)', this.nsp);
	  this.destroy();
	  this.onclose('io server disconnect');
	};

	/**
	 * Called upon forced client/server side disconnections,
	 * this method ensures the manager stops tracking us and
	 * that reconnections don't get triggered for this.
	 *
	 * @api private.
	 */

	Socket.prototype.destroy = function(){
	  if (this.subs) {
	    // clean subscriptions to avoid reconnections
	    for (var i = 0; i < this.subs.length; i++) {
	      this.subs[i].destroy();
	    }
	    this.subs = null;
	  }

	  this.io.destroy(this);
	};

	/**
	 * Disconnects the socket manually.
	 *
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.close =
	Socket.prototype.disconnect = function(){
	  if (this.connected) {
	    debug('performing disconnect (%s)', this.nsp);
	    this.packet({ type: parser.DISCONNECT });
	  }

	  // remove socket from pool
	  this.destroy();

	  if (this.connected) {
	    // fire events
	    this.onclose('io client disconnect');
	  }
	  return this;
	};

	/**
	 * Sets the compress flag.
	 *
	 * @param {Boolean} if `true`, compresses the sending data
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.compress = function(compress){
	  this.flags = this.flags || {};
	  this.flags.compress = compress;
	  return this;
	};


/***/ },
/* 326 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 327 */
/***/ function(module, exports) {

	module.exports = toArray

	function toArray(list, index) {
	    var array = []

	    index = index || 0

	    for (var i = index || 0; i < list.length; i++) {
	        array[i - index] = list[i]
	    }

	    return array
	}


/***/ },
/* 328 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 */

	module.exports = on;

	/**
	 * Helper for subscriptions.
	 *
	 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
	 * @param {String} event name
	 * @param {Function} callback
	 * @api public
	 */

	function on(obj, ev, fn) {
	  obj.on(ev, fn);
	  return {
	    destroy: function(){
	      obj.removeListener(ev, fn);
	    }
	  };
	}


/***/ },
/* 329 */
/***/ function(module, exports) {

	/**
	 * Slice reference.
	 */

	var slice = [].slice;

	/**
	 * Bind `obj` to `fn`.
	 *
	 * @param {Object} obj
	 * @param {Function|String} fn or string
	 * @return {Function}
	 * @api public
	 */

	module.exports = function(obj, fn){
	  if ('string' == typeof fn) fn = obj[fn];
	  if ('function' != typeof fn) throw new Error('bind() requires a function');
	  var args = slice.call(arguments, 2);
	  return function(){
	    return fn.apply(obj, args.concat(slice.call(arguments)));
	  }
	};


/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */

	var isArray = __webpack_require__(331);

	/**
	 * Module exports.
	 */

	module.exports = hasBinary;

	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */

	function hasBinary(data) {

	  function _hasBinary(obj) {
	    if (!obj) return false;

	    if ( (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
	         (global.Blob && obj instanceof Blob) ||
	         (global.File && obj instanceof File)
	        ) {
	      return true;
	    }

	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	          if (_hasBinary(obj[i])) {
	              return true;
	          }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      // see: https://github.com/Automattic/has-binary/pull/4
	      if (obj.toJSON && 'function' == typeof obj.toJSON) {
	        obj = obj.toJSON();
	      }

	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }

	    return false;
	  }

	  return _hasBinary(data);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 331 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 332 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Backoff`.
	 */

	module.exports = Backoff;

	/**
	 * Initialize backoff timer with `opts`.
	 *
	 * - `min` initial timeout in milliseconds [100]
	 * - `max` max timeout [10000]
	 * - `jitter` [0]
	 * - `factor` [2]
	 *
	 * @param {Object} opts
	 * @api public
	 */

	function Backoff(opts) {
	  opts = opts || {};
	  this.ms = opts.min || 100;
	  this.max = opts.max || 10000;
	  this.factor = opts.factor || 2;
	  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
	  this.attempts = 0;
	}

	/**
	 * Return the backoff duration.
	 *
	 * @return {Number}
	 * @api public
	 */

	Backoff.prototype.duration = function(){
	  var ms = this.ms * Math.pow(this.factor, this.attempts++);
	  if (this.jitter) {
	    var rand =  Math.random();
	    var deviation = Math.floor(rand * this.jitter * ms);
	    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
	  }
	  return Math.min(ms, this.max) | 0;
	};

	/**
	 * Reset the number of attempts.
	 *
	 * @api public
	 */

	Backoff.prototype.reset = function(){
	  this.attempts = 0;
	};

	/**
	 * Set the minimum duration
	 *
	 * @api public
	 */

	Backoff.prototype.setMin = function(min){
	  this.ms = min;
	};

	/**
	 * Set the maximum duration
	 *
	 * @api public
	 */

	Backoff.prototype.setMax = function(max){
	  this.max = max;
	};

	/**
	 * Set the jitter
	 *
	 * @api public
	 */

	Backoff.prototype.setJitter = function(jitter){
	  this.jitter = jitter;
	};



/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _configinfo = __webpack_require__(282);

	var _configinfo2 = _interopRequireDefault(_configinfo);

	var _jquery = __webpack_require__(334);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _userActions = __webpack_require__(280);

	var _userActions2 = _interopRequireDefault(_userActions);

	var _userStore = __webpack_require__(273);

	var _userStore2 = _interopRequireDefault(_userStore);

	var _reactRouter = __webpack_require__(154);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Login = function (_React$Component) {
	  _inherits(Login, _React$Component);

	  function Login(props) {
	    _classCallCheck(this, Login);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this, props));

	    _this.state = {
	      username: '',
	      password: '',
	      displayMessage: ''
	    };
	    return _this;
	  }

	  _createClass(Login, [{
	    key: 'updateUserName',
	    value: function updateUserName(e) {
	      this.setState({
	        username: e.target.value
	      });
	    }
	  }, {
	    key: 'updatePassword',
	    value: function updatePassword(e) {
	      this.setState({
	        password: e.target.value
	      });
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      var that = this;
	      e.preventDefault();
	      _jquery2.default.post(_configinfo2.default.config + "/api/user/login", {
	        body: {
	          username: this.state.username,
	          password: this.state.password
	        }
	      }, function (response) {
	        _userActions2.default.setUser({
	          authorization: response.authorization,
	          name: response.username,
	          seatNumber: response.seatNumber,
	          seatLetter: response.seatLetter,
	          email: response.email,
	          milesEarned: response.milesEarned,
	          userExists: true,
	          status: response.status
	        });
	        if (_userStore2.default.getUser().authorization) {
	          _reactRouter.browserHistory.push("/admin");
	        } else {
	          _reactRouter.browserHistory.push("/");
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactMdl.Grid,
	        null,
	        _react2.default.createElement(
	          _reactMdl.Cell,
	          { align: 'middle', col: 6 },
	          _react2.default.createElement(
	            _reactMdl.Card,
	            { shadow: 0, id: 'login' },
	            _react2.default.createElement(
	              _reactMdl.CardTitle,
	              { className: 'mdl-color__primary' },
	              'Login '
	            ),
	            _react2.default.createElement(
	              _reactMdl.CardText,
	              null,
	              _react2.default.createElement(
	                'form',
	                { onSubmit: this.handleSubmit.bind(this) },
	                _react2.default.createElement(_reactMdl.Textfield, {
	                  onChange: this.updateUserName.bind(this),
	                  label: 'Username',
	                  floatingLabel: true
	                }),
	                _react2.default.createElement(_reactMdl.Textfield, {
	                  onChange: this.updatePassword.bind(this),
	                  label: 'password',
	                  floatingLabel: true,
	                  inputClassName: 'password'
	                }),
	                _react2.default.createElement(
	                  _reactMdl.Button,
	                  { raised: true, ripple: true },
	                  'Log In'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Login;
	}(_react2.default.Component);

	exports.default = Login;

/***/ },
/* 334 */,
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(154);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ArticleCard = function (_React$Component) {
	  _inherits(ArticleCard, _React$Component);

	  function ArticleCard() {
	    _classCallCheck(this, ArticleCard);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ArticleCard).apply(this, arguments));
	  }

	  _createClass(ArticleCard, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactMdl.Card,
	        { shadow: 5 },
	        _react2.default.createElement(
	          _reactMdl.CardTitle,
	          { expand: true, id: 'articleBackground' },
	          'Your Inflight Magazine'
	        ),
	        _react2.default.createElement(
	          _reactMdl.CardText,
	          null,
	          'Want to read on your phone?'
	        ),
	        _react2.default.createElement(
	          _reactMdl.CardActions,
	          { border: true },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/articles', className: 'mdl-button mdl-color--secondary mdl-button--colored mdl-js-button mdl-js-ripple-effect' },
	            'Now you can'
	          )
	        )
	      );
	    }
	  }]);

	  return ArticleCard;
	}(_react2.default.Component);

	exports.default = ArticleCard;

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(154);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GameCard = function (_React$Component) {
	  _inherits(GameCard, _React$Component);

	  function GameCard() {
	    _classCallCheck(this, GameCard);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GameCard).apply(this, arguments));
	  }

	  _createClass(GameCard, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactMdl.Card,
	        { shadow: 5 },
	        _react2.default.createElement(
	          _reactMdl.CardTitle,
	          { expand: true, id: 'gameBackground' },
	          'Get in the Game'
	        ),
	        _react2.default.createElement(
	          _reactMdl.CardText,
	          null,
	          'Play by yourself or with fellow passengers!'
	        ),
	        _react2.default.createElement(
	          _reactMdl.CardActions,
	          { border: true },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/game', className: 'mdl-button mdl-color--secondary mdl-button--colored mdl-js-button mdl-js-ripple-effect' },
	            'Play!'
	          )
	        )
	      );
	    }
	  }]);

	  return GameCard;
	}(_react2.default.Component);

	exports.default = GameCard;

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(154);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MovieCard = function (_React$Component) {
	  _inherits(MovieCard, _React$Component);

	  function MovieCard() {
	    _classCallCheck(this, MovieCard);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MovieCard).apply(this, arguments));
	  }

	  _createClass(MovieCard, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactMdl.Card,
	        { shadow: 5 },
	        _react2.default.createElement(
	          _reactMdl.CardTitle,
	          { expand: true, id: 'movieBackground' },
	          'Netflix without the Chill'
	        ),
	        _react2.default.createElement(
	          _reactMdl.CardText,
	          null,
	          'New Releases, Old Classics, and More!'
	        ),
	        _react2.default.createElement(
	          _reactMdl.CardActions,
	          { border: true },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/movies', className: 'mdl-button mdl-color--secondary mdl-button--colored mdl-js-button mdl-js-ripple-effect' },
	            'Start Viewing!'
	          )
	        )
	      );
	    }
	  }]);

	  return MovieCard;
	}(_react2.default.Component);

	exports.default = MovieCard;

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FlightInfoCard = function (_React$Component) {
	  _inherits(FlightInfoCard, _React$Component);

	  function FlightInfoCard() {
	    _classCallCheck(this, FlightInfoCard);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FlightInfoCard).apply(this, arguments));
	  }

	  _createClass(FlightInfoCard, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactMdl.Card,
	        { id: 'flightInfo', shadow: 2, style: { width: '100%', margin: 'auto' } },
	        _react2.default.createElement(
	          _reactMdl.CardTitle,
	          null,
	          'Flight#: ',
	          this.props.info.flightNumber
	        ),
	        _react2.default.createElement(
	          _reactMdl.CardText,
	          null,
	          _react2.default.createElement(
	            'h3',
	            null,
	            'Departure City: ',
	            this.props.info.departureCity,
	            ' ',
	            _react2.default.createElement(
	              'strong',
	              null,
	              this.props.info.departureAirport
	            )
	          ),
	          _react2.default.createElement(
	            'h3',
	            null,
	            'Arrival City: ',
	            this.props.info.arrivalCity,
	            ' ',
	            _react2.default.createElement(
	              'strong',
	              null,
	              this.props.info.arrivalAirport
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactMdl.CardActions,
	          { border: true },
	          _react2.default.createElement(
	            _reactMdl.Button,
	            { colored: true },
	            'More Info'
	          )
	        )
	      );
	    }
	  }]);

	  return FlightInfoCard;
	}(_react2.default.Component);

	exports.default = FlightInfoCard;

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Welcome = function (_React$Component) {
	  _inherits(Welcome, _React$Component);

	  function Welcome() {
	    _classCallCheck(this, Welcome);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Welcome).apply(this, arguments));
	  }

	  _createClass(Welcome, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactMdl.Card,
	        { shadow: 2, style: { width: '100%', margin: 'auto' }, className: 'mdl-color--accent ' },
	        _react2.default.createElement(
	          _reactMdl.CardTitle,
	          null,
	          'Welcome to Aviator'
	        ),
	        _react2.default.createElement(
	          _reactMdl.CardText,
	          null,
	          _react2.default.createElement(
	            'p',
	            null,
	            'Aviator is your personal portal during this flight.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Enjoy our movies, articles, and games.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'If you log in with your mileage account, you can order food and contact flight attendants from your computer!'
	          )
	        )
	      );
	    }
	  }]);

	  return Welcome;
	}(_react2.default.Component);

	exports.default = Welcome;

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Hello = function (_React$Component) {
	  _inherits(Hello, _React$Component);

	  function Hello() {
	    _classCallCheck(this, Hello);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Hello).apply(this, arguments));
	  }

	  _createClass(Hello, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'Hello'
	      );
	    }
	  }]);

	  return Hello;
	}(_react2.default.Component);

	exports.default = Hello;

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(153);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _gameStore = __webpack_require__(342);

	var _gameStore2 = _interopRequireDefault(_gameStore);

	var _gameActions = __webpack_require__(353);

	var _gameActions2 = _interopRequireDefault(_gameActions);

	var _GameTutorial = __webpack_require__(354);

	var _GameTutorial2 = _interopRequireDefault(_GameTutorial);

	var _GameLoading = __webpack_require__(360);

	var _GameLoading2 = _interopRequireDefault(_GameLoading);

	var _GamePlay = __webpack_require__(363);

	var _GamePlay2 = _interopRequireDefault(_GamePlay);

	var _GameEnd = __webpack_require__(366);

	var _GameEnd2 = _interopRequireDefault(_GameEnd);

	var _configinfo = __webpack_require__(282);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//need to import actions and store


	//importing other react components


	// setting sockets information


	var SheepGame = function (_React$Component) {
	  _inherits(SheepGame, _React$Component);

	  function SheepGame(props) {
	    _classCallCheck(this, SheepGame);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SheepGame).call(this));

	    _this.state = {
	      game: _gameStore2.default.getGame(),
	      gameState: _gameStore2.default.getGameState()
	    };
	    return _this;
	  }

	  _createClass(SheepGame, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // const currDomain = '192.168.1.148'
	      // const port = '3000'
	      var node = _reactDom2.default.findDOMNode(this);

	      var addEvent = node.addEventListener || node.attachEvent;

	      addEvent('keydown', this.handleKeyPress, false);
	      addEvent('keyup', this.handleKeyUp, false);

	      _gameStore2.default.addChangeListener(this.updateGame.bind(this));
	      _gameStore2.default.addChangeListener(this.updateGameState.bind(this));
	      // gameActions.updateGameState('gameTutorial')

	      _configinfo.socket.on('verify', function (id) {
	        //sets the dog information
	        _gameActions2.default.setId(id);
	      });

	      _configinfo.socket.on('gameLoading', function (gameState) {
	        _gameActions2.default.updateGameState(gameState);
	      });

	      _configinfo.socket.on('updateGame', function (newGameObj) {
	        _gameActions2.default.updateGame(newGameObj);
	      });

	      _configinfo.socket.on('gameStart', function (newGameObj, gameState) {
	        this.emitKeyInfo();
	        _gameActions2.default.updateGame(newGameObj);
	        _gameActions2.default.updateGameState(gameState);
	      }.bind(this));

	      _configinfo.socket.on('gameEnd', function (gameInfo) {
	        _gameActions2.default.updateGameState('gameEnd');
	        _gameActions2.default.updateGame(gameInfo);
	      });

	      _configinfo.socket.on('gameCancelled', function (info) {
	        alert(info);
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var node = _reactDom2.default.findDOMNode(this);
	      var removeEvent = node.removeEventListener || node.detachEvent;
	      var keyInfo = _gameStore2.default.getKeysDown();
	      _configinfo.socket.emit('leaveGame', keyInfo);
	      _configinfo.socket.removeListener('verify');
	      _configinfo.socket.removeListener('gameLoading');
	      _configinfo.socket.removeListener('updateGame');
	      _configinfo.socket.removeListener('gameStart');
	      _configinfo.socket.removeListener('gameEnd');
	      _configinfo.socket.removeListener('gameCancelled');
	      removeEvent('keydown', this.handleKeyPress, false);
	      removeEvent('keyup', this.handleKeyUp, false);
	      _gameStore2.default.removeChangeListener(this.updateGame.bind(this));
	      _gameStore2.default.removeChangeListener(this.updateGameState.bind(this));
	    }
	  }, {
	    key: 'updateGame',
	    value: function updateGame() {
	      this.setState({
	        game: _gameStore2.default.getGame()
	      });
	    }
	  }, {
	    key: 'updateGameState',
	    value: function updateGameState() {
	      this.setState({
	        gameState: _gameStore2.default.getGameState()
	      });
	    }
	  }, {
	    key: 'emitKeyInfo',
	    value: function emitKeyInfo() {
	      var keyInfo = _gameStore2.default.getKeysDown();
	      _configinfo.socket.emit('keyInfo', keyInfo);
	      setInterval(this.emitKeyInfo, 5);
	    }
	  }, {
	    key: 'handleKeyUp',
	    value: function handleKeyUp(e) {
	      if (e.keyCode > 36 && e.keyCode < 41) {
	        e.preventDefault();
	        console.log('keyup');
	        _gameActions2.default.removeKey(e.keyCode);
	      }
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(e) {
	      if (e.keyCode > 36 && e.keyCode < 41) {
	        e.preventDefault();
	        _gameActions2.default.addKey(e.keyCode);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var returnStatement = void 0;

	      switch (this.state.gameState) {
	        case 'gameTutorial':
	          return _react2.default.createElement(_GameTutorial2.default, null);
	          break;
	        case 'gameLoading':
	          return _react2.default.createElement(_GameLoading2.default, null);
	          break;
	        case 'gamePlay':
	          return _react2.default.createElement(_GamePlay2.default, { game: this.state.game });
	          break;
	        case 'gameEnd':
	          return _react2.default.createElement(_GameEnd2.default, { status: this.state.game.status });
	          break;
	        default:
	          return _react2.default.createElement(_GameTutorial2.default, null);
	          break;
	      }
	    }
	  }]);

	  return SheepGame;
	}(_react2.default.Component);

	exports.default = SheepGame;

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Game = __webpack_require__(343);

	var _Game2 = _interopRequireDefault(_Game);

	var _GameDispatcher = __webpack_require__(351);

	var _GameDispatcher2 = _interopRequireDefault(_GameDispatcher);

	var _gameConstants = __webpack_require__(352);

	var _gameConstants2 = _interopRequireDefault(_gameConstants);

	var _Object = __webpack_require__(38);

	var _Object2 = _interopRequireDefault(_Object);

	var _events = __webpack_require__(279);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CHANGE_EVENT = 'change';

	var _store = {
	  game: new _Game2.default(),
	  id: null,
	  gameState: 'gameTutorial',
	  keysDown: {}
	};

	var setGameInformation = function setGameInformation(newGameObj) {
	  _store.game.updateGame(newGameObj);
	  _store.game.renderGame(); // - dunno if this actually works
	};

	var setGameState = function setGameState(newGameState) {
	  _store.gameState = newGameState;
	};

	var setGameId = function setGameId(newGameId) {
	  _store.game.setId(newGameId);
	  _store.id = newGameId;
	};

	var addKey = function addKey(keyToAdd) {
	  _store.keysDown[keyToAdd] = true;
	};

	var removeKey = function removeKey(keyToRemove) {
	  delete _store.keysDown[keyToRemove];
	};

	var gameStore = (0, _Object2.default)({}, _events.EventEmitter.prototype, {
	  addChangeListener: function addChangeListener(cb) {
	    this.on(CHANGE_EVENT, cb);
	  },
	  removeChangeListener: function removeChangeListener(cb) {
	    this.removeListener(CHANGE_EVENT, cb);
	  },
	  getGameState: function getGameState() {
	    return _store.gameState;
	  },
	  getKeysDown: function getKeysDown() {
	    var packagedKeysDown = _store.keysDown;
	    packagedKeysDown.dogId = _store.id;
	    return packagedKeysDown;
	  },
	  getGame: function getGame() {
	    return _store.game;
	  },
	  getId: function getId() {
	    return _store.id;
	  }
	});

	_GameDispatcher2.default.register(function (payload) {
	  var action = payload.action;
	  switch (action.actionType) {
	    case _gameConstants2.default.ADD_KEY:
	      addKey(action.data);
	      gameStore.emit(CHANGE_EVENT);
	      break;
	    case _gameConstants2.default.REMOVE_KEY:
	      removeKey(action.data);
	      gameStore.emit(CHANGE_EVENT);
	      break;
	    case _gameConstants2.default.SET_ID:
	      setGameId(action.data);
	      gameStore.emit(CHANGE_EVENT);
	      break;
	    case _gameConstants2.default.SET_GAME_STATE:
	      setGameState(action.data);
	      gameStore.emit(CHANGE_EVENT);
	      break;
	    case _gameConstants2.default.SET_GAME_INFO:
	      setGameInformation(action.data);
	      gameStore.emit(CHANGE_EVENT);
	      break;
	    default:
	      return true;
	  }
	});

	module.exports = gameStore;

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _Sheep = __webpack_require__(344);

	var _Sheep2 = _interopRequireDefault(_Sheep);

	var _Pen = __webpack_require__(346);

	var _Pen2 = _interopRequireDefault(_Pen);

	var _Dogs = __webpack_require__(348);

	var _Dogs2 = _interopRequireDefault(_Dogs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Game = function Game() {
	  _classCallCheck(this, Game);

	  this.id = null;
	  this.dogs = new _Dogs2.default();
	  this.sheep = new _Sheep2.default();
	  this.pen = new _Pen2.default();
	  this.canvas = document.createElement('canvas');
	  this.ctx = this.canvas.getContext('2d');
	  this.canvas.width = 512;
	  this.canvas.height = 512;
	  this.status = {
	    sheepPenned: null,
	    sheepActive: null,
	    sheepLost: null
	  };
	};

	exports.default = Game;


	Game.prototype.setId = function (id) {
	  this.id = id;
	};

	Game.prototype.updateGame = function (newGameObj) {
	  this.dogs.setDog(newGameObj.DogsLocation);
	  this.sheep.setSheep(newGameObj.SheepLocation);
	  this.pen.setPen(newGameObj.PenLocation);
	  this.status = newGameObj.status;
	};

	Game.prototype.renderGame = function () {
	  var that = this;
	  this.ctx.fillStyle = 'rgb(67,247,51)';
	  this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	  this.dogs.dogs.forEach(function (dog) {
	    if (dog.id === that.id) {
	      that.ctx.drawImage(that.dogs.myDog.image, dog.x - that.dogs.width / 2, dog.y - that.dogs.width / 2);
	    } else {
	      that.ctx.drawImage(that.dogs.theirDog.image, dog.x - that.dogs.width / 2, dog.y - that.dogs.width / 2);
	    }
	  });
	  this.ctx.drawImage(this.pen.image, this.pen.x - this.pen.width / 2, this.pen.y - this.pen.width / 2);
	  var sheepImage = this.sheep.image;
	  var sheepWidth = this.sheep.width;
	  this.sheep.sheepArray.forEach(function (sheep) {
	    that.ctx.drawImage(sheepImage, sheep.x - sheepWidth / 2, sheep.y - sheepWidth / 2);
	  });
	};

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Sheep = function Sheep(sheep) {
	  _classCallCheck(this, Sheep);

	  this.width = 40;
	  this.sheepArray = [];
	  this.image = new Image();
	  this.image.src = __webpack_require__(345);
	};

	exports.default = Sheep;


	Sheep.prototype.setSheep = function (newSheepArray) {
	  this.sheepArray = newSheepArray;
	};

/***/ },
/* 345 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Pen = function Pen() {
	  _classCallCheck(this, Pen);

	  this.x = 0;
	  this.y = 0;
	  this.width = 80;
	  this.image = new Image();
	  this.image.src = __webpack_require__(347);
	};

	exports.default = Pen;


	Pen.prototype.setPen = function (newPen) {
	  this.x = newPen.x;
	  this.y = newPen.y;
	};

/***/ },
/* 347 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAEDWlDQ1BJQ0MgUHJvZmlsZQAAOI2NVV1oHFUUPrtzZyMkzlNsNIV0qD8NJQ2TVjShtLp/3d02bpZJNtoi6GT27s6Yyc44M7v9oU9FUHwx6psUxL+3gCAo9Q/bPrQvlQol2tQgKD60+INQ6Ium65k7M5lpurHeZe58853vnnvuuWfvBei5qliWkRQBFpquLRcy4nOHj4g9K5CEh6AXBqFXUR0rXalMAjZPC3e1W99Dwntf2dXd/p+tt0YdFSBxH2Kz5qgLiI8B8KdVy3YBevqRHz/qWh72Yui3MUDEL3q44WPXw3M+fo1pZuQs4tOIBVVTaoiXEI/MxfhGDPsxsNZfoE1q66ro5aJim3XdoLFw72H+n23BaIXzbcOnz5mfPoTvYVz7KzUl5+FRxEuqkp9G/Ajia219thzg25abkRE/BpDc3pqvphHvRFys2weqvp+krbWKIX7nhDbzLOItiM8358pTwdirqpPFnMF2xLc1WvLyOwTAibpbmvHHcvttU57y5+XqNZrLe3lE/Pq8eUj2fXKfOe3pfOjzhJYtB/yll5SDFcSDiH+hRkH25+L+sdxKEAMZahrlSX8ukqMOWy/jXW2m6M9LDBc31B9LFuv6gVKg/0Szi3KAr1kGq1GMjU/aLbnq6/lRxc4XfJ98hTargX++DbMJBSiYMIe9Ck1YAxFkKEAG3xbYaKmDDgYyFK0UGYpfoWYXG+fAPPI6tJnNwb7ClP7IyF+D+bjOtCpkhz6CFrIa/I6sFtNl8auFXGMTP34sNwI/JhkgEtmDz14ySfaRcTIBInmKPE32kxyyE2Tv+thKbEVePDfW/byMM1Kmm0XdObS7oGD/MypMXFPXrCwOtoYjyyn7BV29/MZfsVzpLDdRtuIZnbpXzvlf+ev8MvYr/Gqk4H/kV/G3csdazLuyTMPsbFhzd1UabQbjFvDRmcWJxR3zcfHkVw9GfpbJmeev9F08WW8uDkaslwX6avlWGU6NRKz0g/SHtCy9J30o/ca9zX3Kfc19zn3BXQKRO8ud477hLnAfc1/G9mrzGlrfexZ5GLdn6ZZrrEohI2wVHhZywjbhUWEy8icMCGNCUdiBlq3r+xafL549HQ5jH+an+1y+LlYBifuxAvRN/lVVVOlwlCkdVm9NOL5BE4wkQ2SMlDZU97hX86EilU/lUmkQUztTE6mx1EEPh7OmdqBtAvv8HdWpbrJS6tJj3n0CWdM6busNzRV3S9KTYhqvNiqWmuroiKgYhshMjmhTh9ptWhsF7970j/SbMrsPE1suR5z7DMC+P/Hs+y7ijrQAlhyAgccjbhjPygfeBTjzhNqy28EdkUh8C+DU9+z2v/oyeH791OncxHOs5y2AtTc7nb/f73TWPkD/qwBnjX8BoJ98VVBg/m8AAAEhSURBVHgB7dyxDYMwAEVBO2KwjObRshlIWcCC16GjhSek41PQMNd3nMPxWODzuBT+BQDGIQAEGAViboEAo0DMLRBgFIi5BQKMAjE/dv36jbm75m3n143PW69wfPoAAUaBmFsgwCgQcwsEGAViboEAo0DMLRBgFIi5BQKMAjG3QIBRIOYWCDAKxNwCAUaBmFsgwCgQcwsEGAViboEAo0DMLRBgFIi5BQKMAjG3QIBRIOYWCDAKxNwCAUaBmFsgwCgQcwsEGAViboEAo0DMLRBgFIi5BQKMAjG3QIBRIOYWCDAKxNwCAUaBmFsgwCgQcwsEGAViboEAo0DM57rxl554r1fmXuH4WAECjAIxt0CAUSDmFggwCsTcAgFGgZhbYAS8ACpXBx8EszsFAAAAAElFTkSuQmCC"

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Dogs = function Dogs() {
	  _classCallCheck(this, Dogs);

	  this.dogs = [];
	  this.width = 50;
	  this.myDog = {};
	  this.myDog.image = new Image();
	  this.myDog.image.src = __webpack_require__(349);
	  this.theirDog = {};
	  this.theirDog.image = new Image();
	  this.theirDog.image.src = __webpack_require__(350);
	};

	exports.default = Dogs;


	Dogs.prototype.setDog = function (newDogs) {
	  this.dogs = newDogs;
	};

/***/ },
/* 349 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 350 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Dispatcher = __webpack_require__(275).Dispatcher;
	var AppDispatcher = new Dispatcher();

	AppDispatcher.handleAction = function (action) {
	  this.dispatch({
	    source: 'VIEW_ACTION',
	    action: action
	  });
	};

	module.exports = AppDispatcher;

/***/ },
/* 352 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  ADD_KEY: 'ADD_KEY',
	  REMOVE_KEY: 'REMOVE_KEY',
	  SET_ID: 'SET_ID',
	  SET_GAME_STATE: 'SET_GAME_STATE',
	  SET_GAME_INFO: 'SET_GAME_INFO'
	};

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _GameDispatcher = __webpack_require__(351);

	var _GameDispatcher2 = _interopRequireDefault(_GameDispatcher);

	var _gameConstants = __webpack_require__(352);

	var _gameConstants2 = _interopRequireDefault(_gameConstants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var gameActions = {
	  addKey: function addKey(key) {
	    _GameDispatcher2.default.handleAction({
	      actionType: _gameConstants2.default.ADD_KEY,
	      data: key
	    });
	  },
	  removeKey: function removeKey(key) {
	    _GameDispatcher2.default.handleAction({
	      actionType: _gameConstants2.default.REMOVE_KEY,
	      data: key
	    });
	  },
	  setId: function setId(id) {
	    _GameDispatcher2.default.handleAction({
	      actionType: _gameConstants2.default.SET_ID,
	      data: id
	    });
	  },
	  updateGameState: function updateGameState(gameState) {
	    _GameDispatcher2.default.handleAction({
	      actionType: _gameConstants2.default.SET_GAME_STATE,
	      data: gameState
	    });
	  },
	  updateGame: function updateGame(gameInfo) {
	    _GameDispatcher2.default.handleAction({
	      actionType: _gameConstants2.default.SET_GAME_INFO,
	      data: gameInfo
	    });
	  }
	};

	module.exports = gameActions;

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _configinfo = __webpack_require__(282);

	var _gameStore = __webpack_require__(342);

	var _gameStore2 = _interopRequireDefault(_gameStore);

	var _reactMdl = __webpack_require__(212);

	var _GameExample = __webpack_require__(355);

	var _GameExample2 = _interopRequireDefault(_GameExample);

	var _GameExample3 = __webpack_require__(357);

	var _GameExample4 = _interopRequireDefault(_GameExample3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //contains keyDown to start game
	// emits a socket that joinsGame

	var GameTutorial = function (_React$Component) {
	  _inherits(GameTutorial, _React$Component);

	  function GameTutorial() {
	    _classCallCheck(this, GameTutorial);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GameTutorial).apply(this, arguments));
	  }

	  _createClass(GameTutorial, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var id = _gameStore2.default.getId();
	      _configinfo.socket.emit('joinGame', id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactMdl.Grid,
	          null,
	          _react2.default.createElement(
	            'h2',
	            null,
	            'Games'
	          )
	        ),
	        _react2.default.createElement(
	          _reactMdl.Grid,
	          null,
	          _react2.default.createElement(
	            _reactMdl.Cell,
	            { col: 4 },
	            _react2.default.createElement(
	              _reactMdl.Card,
	              { shadow: 0 },
	              _react2.default.createElement(
	                _reactMdl.CardTitle,
	                null,
	                'Muahahah...Baaaaaah'
	              ),
	              _react2.default.createElement(
	                _reactMdl.CardText,
	                null,
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  'Welcome to Muahahah...Baaah, the collaborative sheep herding game.'
	                ),
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  'Yourself, and another passenger, will try to herd as many sheep into the pen as you can.'
	                ),
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  'But be careful!  The sheep will try to escape from you!  And if they get to the edge of the gras, they\'re lost forever!'
	                ),
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  'Pen as many as you can before it\'s too late!'
	                ),
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  'Your arrow keys will move the dog and the sheep will move towards the pen if you are near.'
	                ),
	                _react2.default.createElement('img', { src: __webpack_require__(359), height: '200', width: '350' }),
	                _react2.default.createElement(
	                  _reactMdl.CardActions,
	                  { border: true },
	                  _react2.default.createElement(
	                    _reactMdl.Button,
	                    { onClick: this.handleClick, accent: true, ripple: true, raised: true },
	                    'I\'m Ready!'
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            _reactMdl.Cell,
	            { col: 4 },
	            _react2.default.createElement(_GameExample2.default, null)
	          ),
	          _react2.default.createElement(
	            _reactMdl.Cell,
	            { col: 4 },
	            _react2.default.createElement(_GameExample4.default, null)
	          )
	        )
	      );
	    }
	  }]);

	  return GameTutorial;
	}(_react2.default.Component);

	exports.default = GameTutorial;

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _configinfo = __webpack_require__(282);

	var _gameStore = __webpack_require__(342);

	var _gameStore2 = _interopRequireDefault(_gameStore);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GameExample1 = function (_React$Component) {
	  _inherits(GameExample1, _React$Component);

	  function GameExample1() {
	    _classCallCheck(this, GameExample1);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GameExample1).apply(this, arguments));
	  }

	  _createClass(GameExample1, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var id = _gameStore2.default.getId();
	      _configinfo.socket.emit('joinGame', id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactMdl.Card,
	          { shadow: 0 },
	          _react2.default.createElement(
	            _reactMdl.CardTitle,
	            null,
	            'Chess'
	          ),
	          _react2.default.createElement(
	            _reactMdl.CardText,
	            null,
	            _react2.default.createElement(
	              'p',
	              null,
	              'It\'s Chess.'
	            ),
	            _react2.default.createElement('img', { src: __webpack_require__(356), width: '150' }),
	            _react2.default.createElement(
	              _reactMdl.CardActions,
	              { border: true },
	              _react2.default.createElement(
	                _reactMdl.Button,
	                { onClick: this.handleClick, accent: true, ripple: true, raised: true },
	                'Play!'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return GameExample1;
	}(_react2.default.Component);

	exports.default = GameExample1;

/***/ },
/* 356 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _configinfo = __webpack_require__(282);

	var _gameStore = __webpack_require__(342);

	var _gameStore2 = _interopRequireDefault(_gameStore);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GameExample2 = function (_React$Component) {
	  _inherits(GameExample2, _React$Component);

	  function GameExample2() {
	    _classCallCheck(this, GameExample2);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GameExample2).apply(this, arguments));
	  }

	  _createClass(GameExample2, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var id = _gameStore2.default.getId();
	      _configinfo.socket.emit('joinGame', id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactMdl.Card,
	          { shadow: 0 },
	          _react2.default.createElement(
	            _reactMdl.CardTitle,
	            null,
	            'Tic Tac Toe'
	          ),
	          _react2.default.createElement(
	            _reactMdl.CardText,
	            null,
	            _react2.default.createElement(
	              'p',
	              null,
	              'It\'s Tic Tac Toe!.'
	            ),
	            _react2.default.createElement('img', { src: __webpack_require__(358), width: '150' }),
	            _react2.default.createElement(
	              _reactMdl.CardActions,
	              { border: true },
	              _react2.default.createElement(
	                _reactMdl.Button,
	                { onClick: this.handleClick, accent: true, ripple: true, raised: true },
	                'Bing Bong!'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return GameExample2;
	}(_react2.default.Component);

	exports.default = GameExample2;

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9929ac8cf107790c33c3a247c17ea9d4.png";

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "80f2a6bd71dfd6ca54019cf5d1f3736e.gif";

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GameLoading = function (_React$Component) {
	  _inherits(GameLoading, _React$Component);

	  function GameLoading() {
	    _classCallCheck(this, GameLoading);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GameLoading).apply(this, arguments));
	  }

	  _createClass(GameLoading, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactMdl.Grid,
	        null,
	        _react2.default.createElement(
	          _reactMdl.Cell,
	          { col: 12 },
	          _react2.default.createElement(
	            _reactMdl.Card,
	            { shadow: 5, style: { width: '600px' } },
	            _react2.default.createElement(
	              _reactMdl.CardTitle,
	              null,
	              _react2.default.createElement('img', { src: __webpack_require__(361), height: '200' }),
	              _react2.default.createElement('img', { src: __webpack_require__(362), height: '200' })
	            ),
	            _react2.default.createElement(
	              _reactMdl.CardText,
	              null,
	              _react2.default.createElement(
	                'h4',
	                null,
	                'Just one sec!'
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                'We\'re finding another sheepdog'
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                'To help you herd those lost sheep'
	              )
	            ),
	            _react2.default.createElement(
	              _reactMdl.CardActions,
	              null,
	              _react2.default.createElement(_reactMdl.Spinner, null),
	              _react2.default.createElement(_reactMdl.Spinner, null),
	              _react2.default.createElement(_reactMdl.Spinner, null)
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return GameLoading;
	}(_react2.default.Component);

	exports.default = GameLoading;

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "cb19d10a3a1b8ab971f2b15e5b93391a.jpg";

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7b38b593aeec1995270cf16003fdd12b.jpg";

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Canvas = __webpack_require__(364);

	var _Canvas2 = _interopRequireDefault(_Canvas);

	var _SideBar = __webpack_require__(365);

	var _SideBar2 = _interopRequireDefault(_SideBar);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GamePlay = function (_React$Component) {
	  _inherits(GamePlay, _React$Component);

	  function GamePlay() {
	    _classCallCheck(this, GamePlay);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GamePlay).apply(this, arguments));
	  }

	  _createClass(GamePlay, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactMdl.Grid,
	        null,
	        _react2.default.createElement(
	          _reactMdl.Cell,
	          { col: 9 },
	          _react2.default.createElement(_Canvas2.default, { game: this.props.game })
	        ),
	        _react2.default.createElement(
	          _reactMdl.Cell,
	          { col: 3 },
	          _react2.default.createElement(_SideBar2.default, { status: this.props.game.status })
	        )
	      );
	    }
	  }]);

	  return GamePlay;
	}(_react2.default.Component);

	exports.default = GamePlay;

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(153);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CanvasRender = function (_React$Component) {
	  _inherits(CanvasRender, _React$Component);

	  function CanvasRender() {
	    _classCallCheck(this, CanvasRender);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CanvasRender).apply(this, arguments));
	  }

	  _createClass(CanvasRender, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _reactDom2.default.findDOMNode(this).appendChild(this.props.game.canvas);
	      this.props.game.renderGame();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', null);
	    }
	  }]);

	  return CanvasRender;
	}(_react2.default.Component);

	exports.default = CanvasRender;

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SideBar = function (_React$Component) {
	  _inherits(SideBar, _React$Component);

	  function SideBar() {
	    _classCallCheck(this, SideBar);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SideBar).apply(this, arguments));
	  }

	  _createClass(SideBar, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactMdl.List,
	        null,
	        _react2.default.createElement(
	          _reactMdl.ListItem,
	          { twoLine: true },
	          _react2.default.createElement(
	            _reactMdl.ListItemContent,
	            { subtitle: 'Remaining Sheep' },
	            this.props.status.sheepActive
	          )
	        ),
	        _react2.default.createElement(
	          _reactMdl.ListItem,
	          { twoLine: true },
	          _react2.default.createElement(
	            _reactMdl.ListItemContent,
	            { subtitle: 'Sheep Lost' },
	            this.props.status.sheepLost
	          )
	        ),
	        _react2.default.createElement(
	          _reactMdl.ListItem,
	          { twoLine: true },
	          _react2.default.createElement(
	            _reactMdl.ListItemContent,
	            { subtitle: 'Sheep Saved' },
	            this.props.status.sheepPenned
	          )
	        )
	      );
	    }
	  }]);

	  return SideBar;
	}(_react2.default.Component);

	exports.default = SideBar;

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMdl = __webpack_require__(212);

	var _gameActions = __webpack_require__(353);

	var _gameActions2 = _interopRequireDefault(_gameActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GameEnd = function (_React$Component) {
	  _inherits(GameEnd, _React$Component);

	  function GameEnd() {
	    _classCallCheck(this, GameEnd);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GameEnd).apply(this, arguments));
	  }

	  _createClass(GameEnd, [{
	    key: 'restartGame',
	    value: function restartGame() {
	      _gameActions2.default.updateGameState('gameTutorial');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactMdl.Grid,
	        null,
	        _react2.default.createElement(
	          _reactMdl.Cell,
	          { col: 12 },
	          _react2.default.createElement(
	            _reactMdl.Card,
	            { shadow: 5, style: { width: '600px' } },
	            _react2.default.createElement(
	              _reactMdl.CardTitle,
	              { id: 'endGame', style: { height: '450px' } },
	              'Game Over!'
	            ),
	            _react2.default.createElement(
	              _reactMdl.CardText,
	              null,
	              _react2.default.createElement(
	                'p',
	                null,
	                'Your Final Score'
	              ),
	              _react2.default.createElement(
	                _reactMdl.List,
	                null,
	                _react2.default.createElement(
	                  _reactMdl.ListItem,
	                  { twoLine: true },
	                  _react2.default.createElement(
	                    _reactMdl.ListItemContent,
	                    { subtitle: 'Sheep Lost' },
	                    this.props.status.sheepLost
	                  )
	                ),
	                _react2.default.createElement(
	                  _reactMdl.ListItem,
	                  { twoLine: true },
	                  _react2.default.createElement(
	                    _reactMdl.ListItemContent,
	                    { subtitle: 'Sheep Saved' },
	                    this.props.status.sheepPenned
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _reactMdl.CardActions,
	              null,
	              _react2.default.createElement(
	                _reactMdl.Button,
	                { onClick: this.restartGame },
	                'Back to Games'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return GameEnd;
	}(_react2.default.Component);

	exports.default = GameEnd;

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _configinfo = __webpack_require__(282);

	var _configinfo2 = _interopRequireDefault(_configinfo);

	var _reactRouter = __webpack_require__(154);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Movies = function (_React$Component) {
	  _inherits(Movies, _React$Component);

	  function Movies() {
	    _classCallCheck(this, Movies);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Movies).call(this));

	    _this.state = {
	      movies: []
	    };
	    return _this;
	  }

	  _createClass(Movies, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var that = this;
	      fetch(_configinfo2.default.config + "/api/movies", {
	        method: 'get'
	      }).then(function (response) {

	        response.json().then(function (data) {
	          var newMovies = data.map(function (movie) {
	            return movie;
	          });
	          that.setState({ movies: newMovies });
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var movies = this.state.movies.map(function (movie) {
	        return _react2.default.createElement(
	          _reactMdl.Cell,
	          { col: 12, key: movie._id },
	          _react2.default.createElement(
	            _reactMdl.Card,
	            { shadow: 0, style: { width: '100%' } },
	            _react2.default.createElement(
	              _reactMdl.CardTitle,
	              { style: { height: '65%', background: 'url(' + movie.imageUrl + ')' } },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/movies/' + movie.title },
	                movie.title
	              )
	            ),
	            _react2.default.createElement(
	              _reactMdl.CardText,
	              null,
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'p',
	                    null,
	                    'Price: ',
	                    movie.price === 0 ? 'Free' : movie.price
	                  )
	                ),
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'p',
	                    null,
	                    movie.blurb
	                  )
	                )
	              )
	            )
	          )
	        );
	      });
	      return _react2.default.createElement(
	        _reactMdl.Grid,
	        null,
	        movies
	      );
	    }
	  }]);

	  return Movies;
	}(_react2.default.Component);

	exports.default = Movies;

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _configinfo = __webpack_require__(282);

	var _configinfo2 = _interopRequireDefault(_configinfo);

	var _reactRouter = __webpack_require__(154);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Movie = function (_React$Component) {
	  _inherits(Movie, _React$Component);

	  function Movie(props) {
	    _classCallCheck(this, Movie);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Movie).call(this, props));

	    _this.state = {
	      title: null,
	      price: null,
	      runTime: null,
	      blurb: null,
	      imageUrl: null,
	      actors: [],
	      releaseYear: null,
	      genre: null
	    };
	    return _this;
	  }

	  _createClass(Movie, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var that = this;
	      fetch(_configinfo2.default.config + "/api/movies/" + this.props.params.name, {
	        method: 'get'
	      }).then(function (response) {

	        response.json().then(function (data) {
	          that.setState(data);
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actors = this.state.actors.map(function (actor, i) {
	        return _react2.default.createElement(
	          'li',
	          { key: i },
	          actor
	        );
	      });
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          this.state.title
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          this.state.imageUrl
	        ),
	        _react2.default.createElement(
	          'ul',
	          null,
	          _react2.default.createElement(
	            'li',
	            null,
	            this.state.price
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            this.state.releaseYear
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            this.state.genre
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            this.state.runTime
	          )
	        ),
	        _react2.default.createElement(
	          'ul',
	          null,
	          actors
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          this.state.blurb
	        )
	      );
	    }
	  }]);

	  return Movie;
	}(_react2.default.Component);

	exports.default = Movie;

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _configinfo = __webpack_require__(282);

	var _configinfo2 = _interopRequireDefault(_configinfo);

	var _reactRouter = __webpack_require__(154);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Articles = function (_React$Component) {
	  _inherits(Articles, _React$Component);

	  function Articles() {
	    _classCallCheck(this, Articles);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Articles).call(this));

	    _this.state = {
	      articles: []
	    };
	    return _this;
	  }

	  _createClass(Articles, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var that = this;
	      fetch(_configinfo2.default.config + "/api/articles", {
	        method: 'get'
	      }).then(function (response) {

	        response.json().then(function (data) {
	          var newArticles = data.map(function (article) {
	            return article;
	          });
	          that.setState({ articles: newArticles });
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var articles = this.state.articles.map(function (article) {
	        return _react2.default.createElement(
	          _reactMdl.Cell,
	          { col: 12, key: article._id },
	          _react2.default.createElement(
	            _reactMdl.Card,
	            { shadow: 0, style: { width: '100%' } },
	            _react2.default.createElement(
	              _reactMdl.CardTitle,
	              { style: { height: '65%', background: 'url(' + article.imageUrl + ')' } },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/articles/' + article.title },
	                article.title
	              )
	            ),
	            _react2.default.createElement(
	              _reactMdl.CardText,
	              null,
	              _react2.default.createElement(
	                'p',
	                null,
	                'By: ',
	                article.author
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                article.blurb
	              )
	            )
	          )
	        );
	      });
	      return _react2.default.createElement(
	        _reactMdl.Grid,
	        null,
	        articles
	      );
	    }
	  }]);

	  return Articles;
	}(_react2.default.Component);

	exports.default = Articles;

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _configinfo = __webpack_require__(282);

	var _configinfo2 = _interopRequireDefault(_configinfo);

	var _reactRouter = __webpack_require__(154);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Article = function (_React$Component) {
	  _inherits(Article, _React$Component);

	  function Article(props) {
	    _classCallCheck(this, Article);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Article).call(this, props));

	    _this.state = {
	      title: null,
	      imageUrl: null,
	      author: null,
	      blurb: null,
	      content: []
	    };
	    return _this;
	  }

	  _createClass(Article, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var that = this;
	      fetch(_configinfo2.default.config + "/api/articles/" + this.props.params.title, {
	        method: 'get'
	      }).then(function (response) {

	        response.json().then(function (data) {
	          that.setState(data);
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var content = this.state.content.map(function (paragraph, i) {
	        return _react2.default.createElement(
	          'p',
	          { key: i },
	          paragraph
	        );
	      });
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          this.state.title
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          this.state.imageUrl
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          this.state.author
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          content
	        )
	      );
	    }
	  }]);

	  return Article;
	}(_react2.default.Component);

	exports.default = Article;

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Safety = function (_React$Component) {
	  _inherits(Safety, _React$Component);

	  function Safety() {
	    _classCallCheck(this, Safety);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Safety).apply(this, arguments));
	  }

	  _createClass(Safety, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('img', { src: __webpack_require__(372) })
	      );
	    }
	  }]);

	  return Safety;
	}(_react2.default.Component);

	exports.default = Safety;

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a39a01f9c939ca5573864ad129c11d6f.jpg";

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _userActions = __webpack_require__(280);

	var _userActions2 = _interopRequireDefault(_userActions);

	var _userStore = __webpack_require__(273);

	var _userStore2 = _interopRequireDefault(_userStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Logout = function (_React$Component) {
	  _inherits(Logout, _React$Component);

	  function Logout() {
	    _classCallCheck(this, Logout);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Logout).apply(this, arguments));
	  }

	  _createClass(Logout, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _userActions2.default.removeUser();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'logout' },
	        'Thanks for showing up!'
	      );
	    }
	  }]);

	  return Logout;
	}(_react2.default.Component);

	exports.default = Logout;

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Signup = function (_React$Component) {
	  _inherits(Signup, _React$Component);

	  function Signup() {
	    _classCallCheck(this, Signup);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Signup).apply(this, arguments));
	  }

	  _createClass(Signup, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "form",
	        null,
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "username" },
	          "Username:"
	        ),
	        _react2.default.createElement("input", { type: "number", id: "username" }),
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "password" },
	          "Password :"
	        ),
	        _react2.default.createElement("input", { type: "password", id: "password" }),
	        _react2.default.createElement(
	          "button",
	          null,
	          "Log In"
	        )
	      );
	    }
	  }]);

	  return Signup;
	}(_react2.default.Component);

	exports.default = Signup;

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _configinfo = __webpack_require__(282);

	var _configinfo2 = _interopRequireDefault(_configinfo);

	var _userStore = __webpack_require__(273);

	var _userStore2 = _interopRequireDefault(_userStore);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var socket = _configinfo2.default.socket;

	var handleClick = function handleClick(i, content) {
	  socket.emit("makeOrderRequest", content, _userStore2.default.getUser());
	};

	var Food = function (_React$Component) {
	  _inherits(Food, _React$Component);

	  function Food() {
	    _classCallCheck(this, Food);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Food).call(this));

	    _this.state = {
	      foods: []
	    };
	    socket.on('requestReceived', function (received) {
	      alert(received);
	    });
	    return _this;
	  }

	  _createClass(Food, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var that = this;
	      fetch(_configinfo2.default.config + "/api/food", {
	        method: 'get'
	      }).then(function (response) {
	        response.json().then(function (data) {
	          var newFoods = data.map(function (food) {
	            return food;
	          });
	          that.setState({ foods: newFoods });
	        });
	      });
	    }
	  }, {
	    key: '_handleClick',
	    value: function _handleClick() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var displayFoods = this.state.foods.map(function (food, i) {
	        var contents = food.contents.map(function (content, k) {
	          return _react2.default.createElement(
	            'li',
	            { key: k },
	            content
	          );
	        });
	        return _react2.default.createElement(
	          _reactMdl.Cell,
	          { col: 4, key: food._id },
	          _react2.default.createElement(
	            _reactMdl.Card,
	            { shadow: 0, style: { width: '100%', background: 'url' + food.imageUrl, margin: 'auto' } },
	            _react2.default.createElement(
	              _reactMdl.CardTitle,
	              null,
	              food.name
	            ),
	            _react2.default.createElement(
	              _reactMdl.CardText,
	              null,
	              _react2.default.createElement(
	                'p',
	                null,
	                'Only ',
	                food.calories
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                'with'
	              ),
	              _react2.default.createElement(
	                'ul',
	                null,
	                contents
	              ),
	              _react2.default.createElement(
	                'h6',
	                null,
	                'More Details:'
	              ),
	              _react2.default.createElement(
	                'ul',
	                null,
	                food.glutenFree ? _react2.default.createElement(
	                  'li',
	                  null,
	                  'Gluten Free'
	                ) : null,
	                food.vegetarian ? _react2.default.createElement(
	                  'li',
	                  null,
	                  'Vegetarian'
	                ) : null,
	                food.vegan ? _react2.default.createElement(
	                  'li',
	                  null,
	                  'Vegan'
	                ) : null
	              )
	            ),
	            _react2.default.createElement(
	              _reactMdl.CardActions,
	              null,
	              _react2.default.createElement(
	                _reactMdl.Button,
	                { onClick: handleClick.bind(this, i, food), colored: true, raised: true },
	                'Order ',
	                food.price
	              )
	            )
	          )
	        );
	      });
	      return _react2.default.createElement(
	        _reactMdl.Grid,
	        null,
	        displayFoods
	      );
	    }
	  }]);

	  return Food;
	}(_react2.default.Component);

	exports.default = Food;

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _configinfo = __webpack_require__(282);

	var _configinfo2 = _interopRequireDefault(_configinfo);

	var _userStore = __webpack_require__(273);

	var _userStore2 = _interopRequireDefault(_userStore);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var socket = _configinfo2.default.socket;

	var Food = function (_React$Component) {
	  _inherits(Food, _React$Component);

	  function Food() {
	    _classCallCheck(this, Food);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Food).call(this));

	    socket.on('requestReceived', function (received) {
	      alert(received);
	    });
	    _this.state = {
	      title: '',
	      details: ''
	    };
	    return _this;
	  }

	  _createClass(Food, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      e.preventDefault();
	      socket.emit("makeHelpRequest", this.state, _userStore2.default.getUser());
	      this.setState({
	        title: '',
	        details: ''
	      });
	    }
	  }, {
	    key: 'detailsChange',
	    value: function detailsChange(e) {
	      this.setState({
	        details: e.target.value
	      });
	    }
	  }, {
	    key: 'titleChange',
	    value: function titleChange(e) {
	      this.setState({
	        title: e.target.value
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactMdl.Grid,
	        null,
	        _react2.default.createElement(
	          _reactMdl.Cell,
	          { col: 6 },
	          _react2.default.createElement(
	            _reactMdl.Card,
	            { shadow: 0 },
	            _react2.default.createElement(
	              _reactMdl.CardTitle,
	              { classname: 'mdl-color__primary' },
	              'Need Help?'
	            ),
	            _react2.default.createElement(
	              _reactMdl.CardText,
	              null,
	              _react2.default.createElement(
	                'form',
	                { onSubmit: this.handleSubmit.bind(this) },
	                _react2.default.createElement(_reactMdl.Textfield, {
	                  onChange: this.titleChange.bind(this),
	                  label: 'Title',
	                  floatingLabel: true
	                }),
	                _react2.default.createElement(_reactMdl.Textfield, {
	                  onChange: this.detailsChange.bind(this),
	                  label: 'Details',
	                  floatingLabel: true
	                }),
	                _react2.default.createElement(
	                  _reactMdl.Button,
	                  { raised: true, ripple: true },
	                  'Submit Request'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Food;
	}(_react2.default.Component);

	exports.default = Food;

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Orders = __webpack_require__(378);

	var _Orders2 = _interopRequireDefault(_Orders);

	var _HelpRequests = __webpack_require__(380);

	var _HelpRequests2 = _interopRequireDefault(_HelpRequests);

	var _configinfo = __webpack_require__(282);

	var _userStore = __webpack_require__(273);

	var _userStore2 = _interopRequireDefault(_userStore);

	var _userActions = __webpack_require__(280);

	var _userActions2 = _interopRequireDefault(_userActions);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Admin = function (_React$Component) {
	  _inherits(Admin, _React$Component);

	  function Admin() {
	    _classCallCheck(this, Admin);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Admin).call(this));

	    _this.state = {
	      helpRequests: [],
	      orderRequests: []
	    };
	    _configinfo.socket.on('helpRequests', function (requests) {
	      this.updateHelpRequests(requests);
	    }.bind(_this));

	    _configinfo.socket.on('orderRequests', function (requests) {
	      this.updateOrderRequests(requests);
	    }.bind(_this));
	    return _this;
	  }

	  _createClass(Admin, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _configinfo.socket.emit('joinAdmin');
	    }
	  }, {
	    key: 'componentWillUnMount',
	    value: function componentWillUnMount() {
	      _configinfo.socket.removeListener('helpRequests');
	      _configinfo.socket.removeListener('orderRequests');
	      _configinfo.socket.emit('leaveAdmin');
	    }
	  }, {
	    key: 'updateHelpRequests',
	    value: function updateHelpRequests(data) {
	      this.setState({ helpRequests: data });
	    }
	  }, {
	    key: 'updateOrderRequests',
	    value: function updateOrderRequests(data) {
	      this.setState({ orderRequests: data });
	    }
	  }, {
	    key: 'closeHelpRequest',
	    value: function closeHelpRequest(key) {
	      console.log(key);
	      // socket.emit('completeHelpRequest', key);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (_userStore2.default.getUser().authorization) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _reactMdl.Grid,
	            null,
	            _react2.default.createElement(
	              _reactMdl.Cell,
	              { col: 12 },
	              _react2.default.createElement(
	                'div',
	                { className: 'mdl-color__accent' },
	                _react2.default.createElement(
	                  'h1',
	                  null,
	                  'Admin'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            _reactMdl.Grid,
	            null,
	            _react2.default.createElement(
	              _reactMdl.Cell,
	              { col: 6 },
	              _react2.default.createElement(_Orders2.default, { orderRequests: this.state.orderRequests })
	            ),
	            _react2.default.createElement(
	              _reactMdl.Cell,
	              { col: 6 },
	              _react2.default.createElement(_HelpRequests2.default, { helpRequests: this.state.helpRequests })
	            )
	          )
	        );
	      } else {
	        return _react2.default.createElement('div', null);
	      }
	    }
	  }]);

	  return Admin;
	}(_react2.default.Component);

	exports.default = Admin;

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMdl = __webpack_require__(212);

	var _SocketEvent = __webpack_require__(379);

	var _SocketEvent2 = _interopRequireDefault(_SocketEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Orders = function (_React$Component) {
	  _inherits(Orders, _React$Component);

	  function Orders() {
	    _classCallCheck(this, Orders);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Orders).apply(this, arguments));
	  }

	  _createClass(Orders, [{
	    key: 'render',
	    value: function render() {
	      var requests = this.props.orderRequests.map(function (request) {
	        var seat = request.seatNumber.toString().concat(request.seatLetter);
	        return _react2.default.createElement(
	          _reactMdl.ListItem,
	          { key: request._id, twoLine: true },
	          _react2.default.createElement(
	            _reactMdl.ListItemContent,
	            { subtitle: request.items.join(", ") },
	            request.passengerName
	          ),
	          _react2.default.createElement(
	            _reactMdl.ListItemAction,
	            { info: seat },
	            _react2.default.createElement(_SocketEvent2.default, { emitter: 'completeOrderRequest', id: request._id })
	          )
	        );
	      });
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Orders'
	        ),
	        _react2.default.createElement(
	          _reactMdl.List,
	          null,
	          requests
	        )
	      );
	    }
	  }]);

	  return Orders;
	}(_react2.default.Component);

	exports.default = Orders;

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _configinfo = __webpack_require__(282);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SocketEvent = function (_React$Component) {
	  _inherits(SocketEvent, _React$Component);

	  function SocketEvent(props) {
	    _classCallCheck(this, SocketEvent);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SocketEvent).call(this, props));
	  }

	  _createClass(SocketEvent, [{
	    key: 'handleEvent',
	    value: function handleEvent() {
	      _configinfo.socket.emit(this.props.emitter, this.props.id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_reactMdl.Switch, { onClick: this.handleEvent.bind(this), ripple: true });
	    }
	  }]);

	  return SocketEvent;
	}(_react2.default.Component);

	exports.default = SocketEvent;

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SocketEvent = __webpack_require__(379);

	var _SocketEvent2 = _interopRequireDefault(_SocketEvent);

	var _reactMdl = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HelpRequests = function (_React$Component) {
	  _inherits(HelpRequests, _React$Component);

	  function HelpRequests() {
	    _classCallCheck(this, HelpRequests);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(HelpRequests).apply(this, arguments));
	  }

	  _createClass(HelpRequests, [{
	    key: 'render',
	    value: function render() {
	      var requests = this.props.helpRequests.map(function (request, i) {
	        var seat = request.seatNumber.toString().concat(request.seatLetter);
	        return _react2.default.createElement(
	          _reactMdl.ListItem,
	          { key: request._id, threeLine: true },
	          _react2.default.createElement(
	            _reactMdl.ListItemContent,
	            { subtitle: request.details },
	            request.passengerName
	          ),
	          _react2.default.createElement(
	            _reactMdl.ListItemAction,
	            { info: seat },
	            _react2.default.createElement(_SocketEvent2.default, { emitter: "completeHelpRequest", id: request._id })
	          )
	        );
	      });
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Helps'
	        ),
	        _react2.default.createElement(
	          _reactMdl.List,
	          null,
	          requests
	        )
	      );
	    }
	  }]);

	  return HelpRequests;
	}(_react2.default.Component);

	exports.default = HelpRequests;

/***/ },
/* 381 */
/***/ function(module, exports) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};;(function(){"use strict";if(typeof window==='undefined')return; /**
	 // * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ /**
	 * A component handler interface using the revealing module design pattern.
	 * More details on this design pattern here:
	 * https://github.com/jasonmayes/mdl-component-design-pattern
	 *
	 * @author Jason Mayes.
	 */ /* exported componentHandler */ // Pre-defining the componentHandler interface, for closure documentation and
	// static verification.
	var componentHandler={ /**
	   * Searches existing DOM for elements of our component type and upgrades them
	   * if they have not already been upgraded.
	   *
	   * @param {string=} optJsClass the programatic name of the element class we
	   * need to create a new instance of.
	   * @param {string=} optCssClass the name of the CSS class elements of this
	   * type will have.
	   */upgradeDom:function upgradeDom(optJsClass,optCssClass){}, /**
	   * Upgrades a specific element rather than all in the DOM.
	   *
	   * @param {!Element} element The element we wish to upgrade.
	   * @param {string=} optJsClass Optional name of the class we want to upgrade
	   * the element to.
	   */upgradeElement:function upgradeElement(element,optJsClass){}, /**
	   * Upgrades a specific list of elements rather than all in the DOM.
	   *
	   * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements
	   * The elements we wish to upgrade.
	   */upgradeElements:function upgradeElements(elements){}, /**
	   * Upgrades all registered components found in the current DOM. This is
	   * automatically called on window load.
	   */upgradeAllRegistered:function upgradeAllRegistered(){}, /**
	   * Allows user to be alerted to any upgrades that are performed for a given
	   * component type
	   *
	   * @param {string} jsClass The class name of the MDL component we wish
	   * to hook into for any upgrades performed.
	   * @param {function(!HTMLElement)} callback The function to call upon an
	   * upgrade. This function should expect 1 parameter - the HTMLElement which
	   * got upgraded.
	   */registerUpgradedCallback:function registerUpgradedCallback(jsClass,callback){}, /**
	   * Registers a class for future use and attempts to upgrade existing DOM.
	   *
	   * @param {componentHandler.ComponentConfigPublic} config the registration configuration
	   */register:function register(config){}, /**
	   * Downgrade either a given node, an array of nodes, or a NodeList.
	   *
	   * @param {!Node|!Array<!Node>|!NodeList} nodes
	   */downgradeElements:function downgradeElements(nodes){}};componentHandler=function(){'use strict'; /** @type {!Array<componentHandler.ComponentConfig>} */var registeredComponents_=[]; /** @type {!Array<componentHandler.Component>} */var createdComponents_=[];var componentConfigProperty_='mdlComponentConfigInternal_'; /**
	   * Searches registered components for a class we are interested in using.
	   * Optionally replaces a match with passed object if specified.
	   *
	   * @param {string} name The name of a class we want to use.
	   * @param {componentHandler.ComponentConfig=} optReplace Optional object to replace match with.
	   * @return {!Object|boolean}
	   * @private
	   */function findRegisteredClass_(name,optReplace){for(var i=0;i<registeredComponents_.length;i++){if(registeredComponents_[i].className===name){if(typeof optReplace!=='undefined'){registeredComponents_[i]=optReplace;}return registeredComponents_[i];}}return false;} /**
	   * Returns an array of the classNames of the upgraded classes on the element.
	   *
	   * @param {!Element} element The element to fetch data from.
	   * @return {!Array<string>}
	   * @private
	   */function getUpgradedListOfElement_(element){var dataUpgraded=element.getAttribute('data-upgraded'); // Use `['']` as default value to conform the `,name,name...` style.
	return dataUpgraded===null?['']:dataUpgraded.split(',');} /**
	   * Returns true if the given element has already been upgraded for the given
	   * class.
	   *
	   * @param {!Element} element The element we want to check.
	   * @param {string} jsClass The class to check for.
	   * @returns {boolean}
	   * @private
	   */function isElementUpgraded_(element,jsClass){var upgradedList=getUpgradedListOfElement_(element);return upgradedList.indexOf(jsClass)!==-1;} /**
	   * Searches existing DOM for elements of our component type and upgrades them
	   * if they have not already been upgraded.
	   *
	   * @param {string=} optJsClass the programatic name of the element class we
	   * need to create a new instance of.
	   * @param {string=} optCssClass the name of the CSS class elements of this
	   * type will have.
	   */function upgradeDomInternal(optJsClass,optCssClass){if(typeof optJsClass==='undefined'&&typeof optCssClass==='undefined'){for(var i=0;i<registeredComponents_.length;i++){upgradeDomInternal(registeredComponents_[i].className,registeredComponents_[i].cssClass);}}else {var jsClass= /** @type {string} */optJsClass;if(typeof optCssClass==='undefined'){var registeredClass=findRegisteredClass_(jsClass);if(registeredClass){optCssClass=registeredClass.cssClass;}}var elements=document.querySelectorAll('.'+optCssClass);for(var n=0;n<elements.length;n++){upgradeElementInternal(elements[n],jsClass);}}} /**
	   * Upgrades a specific element rather than all in the DOM.
	   *
	   * @param {!Element} element The element we wish to upgrade.
	   * @param {string=} optJsClass Optional name of the class we want to upgrade
	   * the element to.
	   */function upgradeElementInternal(element,optJsClass){ // Verify argument type.
	if(!((typeof element==='undefined'?'undefined':_typeof(element))==='object'&&element instanceof Element)){throw new Error('Invalid argument provided to upgrade MDL element.');}var upgradedList=getUpgradedListOfElement_(element);var classesToUpgrade=[]; // If jsClass is not provided scan the registered components to find the
	// ones matching the element's CSS classList.
	if(!optJsClass){var classList=element.classList;registeredComponents_.forEach(function(component){ // Match CSS & Not to be upgraded & Not upgraded.
	if(classList.contains(component.cssClass)&&classesToUpgrade.indexOf(component)===-1&&!isElementUpgraded_(element,component.className)){classesToUpgrade.push(component);}});}else if(!isElementUpgraded_(element,optJsClass)){classesToUpgrade.push(findRegisteredClass_(optJsClass));} // Upgrade the element for each classes.
	for(var i=0,n=classesToUpgrade.length,registeredClass;i<n;i++){registeredClass=classesToUpgrade[i];if(registeredClass){ // Mark element as upgraded.
	upgradedList.push(registeredClass.className);element.setAttribute('data-upgraded',upgradedList.join(','));var instance=new registeredClass.classConstructor(element);instance[componentConfigProperty_]=registeredClass;createdComponents_.push(instance); // Call any callbacks the user has registered with this component type.
	for(var j=0,m=registeredClass.callbacks.length;j<m;j++){registeredClass.callbacks[j](element);}if(registeredClass.widget){ // Assign per element instance for control over API
	element[registeredClass.className]=instance;}}else {throw new Error('Unable to find a registered component for the given class.');}var ev;if('CustomEvent' in window&&typeof window.CustomEvent==='function'){ev=new Event('mdl-componentupgraded',{'bubbles':true,'cancelable':false});}else {ev=document.createEvent('Events');ev.initEvent('mdl-componentupgraded',true,true);}element.dispatchEvent(ev);}} /**
	   * Upgrades a specific list of elements rather than all in the DOM.
	   *
	   * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements
	   * The elements we wish to upgrade.
	   */function upgradeElementsInternal(elements){if(!Array.isArray(elements)){if(typeof elements.item==='function'){elements=Array.prototype.slice.call( /** @type {Array} */elements);}else {elements=[elements];}}for(var i=0,n=elements.length,element;i<n;i++){element=elements[i];if(element instanceof HTMLElement){upgradeElementInternal(element);if(element.children.length>0){upgradeElementsInternal(element.children);}}}} /**
	   * Registers a class for future use and attempts to upgrade existing DOM.
	   *
	   * @param {componentHandler.ComponentConfigPublic} config
	   */function registerInternal(config){ // In order to support both Closure-compiled and uncompiled code accessing
	// this method, we need to allow for both the dot and array syntax for
	// property access. You'll therefore see the `foo.bar || foo['bar']`
	// pattern repeated across this method.
	var widgetMissing=typeof config.widget==='undefined'&&typeof config['widget']==='undefined';var widget=true;if(!widgetMissing){widget=config.widget||config['widget'];}var newConfig= /** @type {componentHandler.ComponentConfig} */{classConstructor:config.constructor||config['constructor'],className:config.classAsString||config['classAsString'],cssClass:config.cssClass||config['cssClass'],widget:widget,callbacks:[]};registeredComponents_.forEach(function(item){if(item.cssClass===newConfig.cssClass){throw new Error('The provided cssClass has already been registered: '+item.cssClass);}if(item.className===newConfig.className){throw new Error('The provided className has already been registered');}});if(config.constructor.prototype.hasOwnProperty(componentConfigProperty_)){throw new Error('MDL component classes must not have '+componentConfigProperty_+' defined as a property.');}var found=findRegisteredClass_(config.classAsString,newConfig);if(!found){registeredComponents_.push(newConfig);}} /**
	   * Allows user to be alerted to any upgrades that are performed for a given
	   * component type
	   *
	   * @param {string} jsClass The class name of the MDL component we wish
	   * to hook into for any upgrades performed.
	   * @param {function(!HTMLElement)} callback The function to call upon an
	   * upgrade. This function should expect 1 parameter - the HTMLElement which
	   * got upgraded.
	   */function registerUpgradedCallbackInternal(jsClass,callback){var regClass=findRegisteredClass_(jsClass);if(regClass){regClass.callbacks.push(callback);}} /**
	   * Upgrades all registered components found in the current DOM. This is
	   * automatically called on window load.
	   */function upgradeAllRegisteredInternal(){for(var n=0;n<registeredComponents_.length;n++){upgradeDomInternal(registeredComponents_[n].className);}} /**
	   * Check the component for the downgrade method.
	   * Execute if found.
	   * Remove component from createdComponents list.
	   *
	   * @param {?componentHandler.Component} component
	   */function deconstructComponentInternal(component){if(component){var componentIndex=createdComponents_.indexOf(component);createdComponents_.splice(componentIndex,1);var upgrades=component.element_.getAttribute('data-upgraded').split(',');var componentPlace=upgrades.indexOf(component[componentConfigProperty_].classAsString);upgrades.splice(componentPlace,1);component.element_.setAttribute('data-upgraded',upgrades.join(','));var ev;if('CustomEvent' in window&&typeof window.CustomEvent==='function'){ev=new Event('mdl-componentdowngraded',{'bubbles':true,'cancelable':false});}else {ev=document.createEvent('Events');ev.initEvent('mdl-componentdowngraded',true,true);}}} /**
	   * Downgrade either a given node, an array of nodes, or a NodeList.
	   *
	   * @param {!Node|!Array<!Node>|!NodeList} nodes
	   */function downgradeNodesInternal(nodes){ /**
	     * Auxiliary function to downgrade a single node.
	     * @param  {!Node} node the node to be downgraded
	     */var downgradeNode=function downgradeNode(node){createdComponents_.filter(function(item){return item.element_===node;}).forEach(deconstructComponentInternal);};if(nodes instanceof Array||nodes instanceof NodeList){for(var n=0;n<nodes.length;n++){downgradeNode(nodes[n]);}}else if(nodes instanceof Node){downgradeNode(nodes);}else {throw new Error('Invalid argument provided to downgrade MDL nodes.');}} // Now return the functions that should be made public with their publicly
	// facing names...
	return {upgradeDom:upgradeDomInternal,upgradeElement:upgradeElementInternal,upgradeElements:upgradeElementsInternal,upgradeAllRegistered:upgradeAllRegisteredInternal,registerUpgradedCallback:registerUpgradedCallbackInternal,register:registerInternal,downgradeElements:downgradeNodesInternal};}(); /**
	 * Describes the type of a registered component type managed by
	 * componentHandler. Provided for benefit of the Closure compiler.
	 *
	 * @typedef {{
	 *   constructor: Function,
	 *   classAsString: string,
	 *   cssClass: string,
	 *   widget: (string|boolean|undefined)
	 * }}
	 */componentHandler.ComponentConfigPublic; // jshint ignore:line
	/**
	 * Describes the type of a registered component type managed by
	 * componentHandler. Provided for benefit of the Closure compiler.
	 *
	 * @typedef {{
	 *   constructor: !Function,
	 *   className: string,
	 *   cssClass: string,
	 *   widget: (string|boolean),
	 *   callbacks: !Array<function(!HTMLElement)>
	 * }}
	 */componentHandler.ComponentConfig; // jshint ignore:line
	/**
	 * Created component (i.e., upgraded element) type as managed by
	 * componentHandler. Provided for benefit of the Closure compiler.
	 *
	 * @typedef {{
	 *   element_: !HTMLElement,
	 *   className: string,
	 *   classAsString: string,
	 *   cssClass: string,
	 *   widget: string
	 * }}
	 */componentHandler.Component; // jshint ignore:line
	// Export all symbols, for the benefit of Closure compiler.
	// No effect on uncompiled code.
	componentHandler['upgradeDom']=componentHandler.upgradeDom;componentHandler['upgradeElement']=componentHandler.upgradeElement;componentHandler['upgradeElements']=componentHandler.upgradeElements;componentHandler['upgradeAllRegistered']=componentHandler.upgradeAllRegistered;componentHandler['registerUpgradedCallback']=componentHandler.registerUpgradedCallback;componentHandler['register']=componentHandler.register;componentHandler['downgradeElements']=componentHandler.downgradeElements;window.componentHandler=componentHandler;window['componentHandler']=componentHandler;window.addEventListener('load',function(){'use strict'; /**
	   * Performs a "Cutting the mustard" test. If the browser supports the features
	   * tested, adds a mdl-js class to the <html> element. It then upgrades all MDL
	   * components requiring JavaScript.
	   */if('classList' in document.createElement('div')&&'querySelector' in document&&'addEventListener' in window&&Array.prototype.forEach){document.documentElement.classList.add('mdl-js');componentHandler.upgradeAllRegistered();}else { /**
	     * Dummy function to avoid JS errors.
	     */componentHandler.upgradeElement=function(){}; /**
	     * Dummy function to avoid JS errors.
	     */componentHandler.register=function(){};}}); // Source: https://github.com/darius/requestAnimationFrame/blob/master/requestAnimationFrame.js
	// Adapted from https://gist.github.com/paulirish/1579671 which derived from
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	// requestAnimationFrame polyfill by Erik Möller.
	// Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavič, Darius Bacon
	// MIT license
	if(!Date.now){ /**
	   * Date.now polyfill.
	   * @return {number} the current Date
	   */Date.now=function(){return new Date().getTime();};Date['now']=Date.now;}var vendors=['webkit','moz'];for(var i=0;i<vendors.length&&!window.requestAnimationFrame;++i){var vp=vendors[i];window.requestAnimationFrame=window[vp+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vp+'CancelAnimationFrame']||window[vp+'CancelRequestAnimationFrame'];window['requestAnimationFrame']=window.requestAnimationFrame;window['cancelAnimationFrame']=window.cancelAnimationFrame;}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var lastTime=0; /**
	   * requestAnimationFrame polyfill.
	   * @param  {!Function} callback the callback function.
	   */window.requestAnimationFrame=function(callback){var now=Date.now();var nextTime=Math.max(lastTime+16,now);return setTimeout(function(){callback(lastTime=nextTime);},nextTime-now);};window.cancelAnimationFrame=clearTimeout;window['requestAnimationFrame']=window.requestAnimationFrame;window['cancelAnimationFrame']=window.cancelAnimationFrame;} /**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ /**
	   * Class constructor for Button MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @param {HTMLElement} element The element that will be upgraded.
	   */var MaterialButton=function MaterialButton(element){this.element_=element; // Initialize instance.
	this.init();};window['MaterialButton']=MaterialButton; /**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */MaterialButton.prototype.Constant_={}; /**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */MaterialButton.prototype.CssClasses_={RIPPLE_EFFECT:'mdl-js-ripple-effect',RIPPLE_CONTAINER:'mdl-button__ripple-container',RIPPLE:'mdl-ripple'}; /**
	   * Handle blur of element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialButton.prototype.blurHandler_=function(event){if(event){this.element_.blur();}}; // Public methods.
	/**
	   * Disable button.
	   *
	   * @public
	   */MaterialButton.prototype.disable=function(){this.element_.disabled=true;};MaterialButton.prototype['disable']=MaterialButton.prototype.disable; /**
	   * Enable button.
	   *
	   * @public
	   */MaterialButton.prototype.enable=function(){this.element_.disabled=false;};MaterialButton.prototype['enable']=MaterialButton.prototype.enable; /**
	   * Initialize element.
	   */MaterialButton.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var rippleContainer=document.createElement('span');rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);this.rippleElement_=document.createElement('span');this.rippleElement_.classList.add(this.CssClasses_.RIPPLE);rippleContainer.appendChild(this.rippleElement_);this.boundRippleBlurHandler=this.blurHandler_.bind(this);this.rippleElement_.addEventListener('mouseup',this.boundRippleBlurHandler);this.element_.appendChild(rippleContainer);}this.boundButtonBlurHandler=this.blurHandler_.bind(this);this.element_.addEventListener('mouseup',this.boundButtonBlurHandler);this.element_.addEventListener('mouseleave',this.boundButtonBlurHandler);}}; // The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({constructor:MaterialButton,classAsString:'MaterialButton',cssClass:'mdl-js-button',widget:true}); /**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ /**
	   * Class constructor for Checkbox MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */var MaterialCheckbox=function MaterialCheckbox(element){this.element_=element; // Initialize instance.
	this.init();};window['MaterialCheckbox']=MaterialCheckbox; /**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */MaterialCheckbox.prototype.Constant_={TINY_TIMEOUT:0.001}; /**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */MaterialCheckbox.prototype.CssClasses_={INPUT:'mdl-checkbox__input',BOX_OUTLINE:'mdl-checkbox__box-outline',FOCUS_HELPER:'mdl-checkbox__focus-helper',TICK_OUTLINE:'mdl-checkbox__tick-outline',RIPPLE_EFFECT:'mdl-js-ripple-effect',RIPPLE_IGNORE_EVENTS:'mdl-js-ripple-effect--ignore-events',RIPPLE_CONTAINER:'mdl-checkbox__ripple-container',RIPPLE_CENTER:'mdl-ripple--center',RIPPLE:'mdl-ripple',IS_FOCUSED:'is-focused',IS_DISABLED:'is-disabled',IS_CHECKED:'is-checked',IS_UPGRADED:'is-upgraded'}; /**
	   * Handle change of state.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialCheckbox.prototype.onChange_=function(event){this.updateClasses_();}; /**
	   * Handle focus of element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialCheckbox.prototype.onFocus_=function(event){this.element_.classList.add(this.CssClasses_.IS_FOCUSED);}; /**
	   * Handle lost focus of element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialCheckbox.prototype.onBlur_=function(event){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);}; /**
	   * Handle mouseup.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialCheckbox.prototype.onMouseUp_=function(event){this.blur_();}; /**
	   * Handle class updates.
	   *
	   * @private
	   */MaterialCheckbox.prototype.updateClasses_=function(){this.checkDisabled();this.checkToggleState();}; /**
	   * Add blur.
	   *
	   * @private
	   */MaterialCheckbox.prototype.blur_=function(){ // TODO: figure out why there's a focus event being fired after our blur,
	// so that we can avoid this hack.
	window.setTimeout(function(){this.inputElement_.blur();}.bind(this),this.Constant_.TINY_TIMEOUT);}; // Public methods.
	/**
	   * Check the inputs toggle state and update display.
	   *
	   * @public
	   */MaterialCheckbox.prototype.checkToggleState=function(){if(this.inputElement_.checked){this.element_.classList.add(this.CssClasses_.IS_CHECKED);}else {this.element_.classList.remove(this.CssClasses_.IS_CHECKED);}};MaterialCheckbox.prototype['checkToggleState']=MaterialCheckbox.prototype.checkToggleState; /**
	   * Check the inputs disabled state and update display.
	   *
	   * @public
	   */MaterialCheckbox.prototype.checkDisabled=function(){if(this.inputElement_.disabled){this.element_.classList.add(this.CssClasses_.IS_DISABLED);}else {this.element_.classList.remove(this.CssClasses_.IS_DISABLED);}};MaterialCheckbox.prototype['checkDisabled']=MaterialCheckbox.prototype.checkDisabled; /**
	   * Disable checkbox.
	   *
	   * @public
	   */MaterialCheckbox.prototype.disable=function(){this.inputElement_.disabled=true;this.updateClasses_();};MaterialCheckbox.prototype['disable']=MaterialCheckbox.prototype.disable; /**
	   * Enable checkbox.
	   *
	   * @public
	   */MaterialCheckbox.prototype.enable=function(){this.inputElement_.disabled=false;this.updateClasses_();};MaterialCheckbox.prototype['enable']=MaterialCheckbox.prototype.enable; /**
	   * Check checkbox.
	   *
	   * @public
	   */MaterialCheckbox.prototype.check=function(){this.inputElement_.checked=true;this.updateClasses_();};MaterialCheckbox.prototype['check']=MaterialCheckbox.prototype.check; /**
	   * Uncheck checkbox.
	   *
	   * @public
	   */MaterialCheckbox.prototype.uncheck=function(){this.inputElement_.checked=false;this.updateClasses_();};MaterialCheckbox.prototype['uncheck']=MaterialCheckbox.prototype.uncheck; /**
	   * Initialize element.
	   */MaterialCheckbox.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector('.'+this.CssClasses_.INPUT);var boxOutline=document.createElement('span');boxOutline.classList.add(this.CssClasses_.BOX_OUTLINE);var tickContainer=document.createElement('span');tickContainer.classList.add(this.CssClasses_.FOCUS_HELPER);var tickOutline=document.createElement('span');tickOutline.classList.add(this.CssClasses_.TICK_OUTLINE);boxOutline.appendChild(tickOutline);this.element_.appendChild(tickContainer);this.element_.appendChild(boxOutline);if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);this.rippleContainerElement_=document.createElement('span');this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT);this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);this.boundRippleMouseUp=this.onMouseUp_.bind(this);this.rippleContainerElement_.addEventListener('mouseup',this.boundRippleMouseUp);var ripple=document.createElement('span');ripple.classList.add(this.CssClasses_.RIPPLE);this.rippleContainerElement_.appendChild(ripple);this.element_.appendChild(this.rippleContainerElement_);}this.boundInputOnChange=this.onChange_.bind(this);this.boundInputOnFocus=this.onFocus_.bind(this);this.boundInputOnBlur=this.onBlur_.bind(this);this.boundElementMouseUp=this.onMouseUp_.bind(this);this.inputElement_.addEventListener('change',this.boundInputOnChange);this.inputElement_.addEventListener('focus',this.boundInputOnFocus);this.inputElement_.addEventListener('blur',this.boundInputOnBlur);this.element_.addEventListener('mouseup',this.boundElementMouseUp);this.updateClasses_();this.element_.classList.add(this.CssClasses_.IS_UPGRADED);}}; // The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({constructor:MaterialCheckbox,classAsString:'MaterialCheckbox',cssClass:'mdl-js-checkbox',widget:true}); /**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ /**
	   * Class constructor for icon toggle MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */var MaterialIconToggle=function MaterialIconToggle(element){this.element_=element; // Initialize instance.
	this.init();};window['MaterialIconToggle']=MaterialIconToggle; /**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */MaterialIconToggle.prototype.Constant_={TINY_TIMEOUT:0.001}; /**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */MaterialIconToggle.prototype.CssClasses_={INPUT:'mdl-icon-toggle__input',JS_RIPPLE_EFFECT:'mdl-js-ripple-effect',RIPPLE_IGNORE_EVENTS:'mdl-js-ripple-effect--ignore-events',RIPPLE_CONTAINER:'mdl-icon-toggle__ripple-container',RIPPLE_CENTER:'mdl-ripple--center',RIPPLE:'mdl-ripple',IS_FOCUSED:'is-focused',IS_DISABLED:'is-disabled',IS_CHECKED:'is-checked'}; /**
	   * Handle change of state.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialIconToggle.prototype.onChange_=function(event){this.updateClasses_();}; /**
	   * Handle focus of element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialIconToggle.prototype.onFocus_=function(event){this.element_.classList.add(this.CssClasses_.IS_FOCUSED);}; /**
	   * Handle lost focus of element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialIconToggle.prototype.onBlur_=function(event){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);}; /**
	   * Handle mouseup.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialIconToggle.prototype.onMouseUp_=function(event){this.blur_();}; /**
	   * Handle class updates.
	   *
	   * @private
	   */MaterialIconToggle.prototype.updateClasses_=function(){this.checkDisabled();this.checkToggleState();}; /**
	   * Add blur.
	   *
	   * @private
	   */MaterialIconToggle.prototype.blur_=function(){ // TODO: figure out why there's a focus event being fired after our blur,
	// so that we can avoid this hack.
	window.setTimeout(function(){this.inputElement_.blur();}.bind(this),this.Constant_.TINY_TIMEOUT);}; // Public methods.
	/**
	   * Check the inputs toggle state and update display.
	   *
	   * @public
	   */MaterialIconToggle.prototype.checkToggleState=function(){if(this.inputElement_.checked){this.element_.classList.add(this.CssClasses_.IS_CHECKED);}else {this.element_.classList.remove(this.CssClasses_.IS_CHECKED);}};MaterialIconToggle.prototype['checkToggleState']=MaterialIconToggle.prototype.checkToggleState; /**
	   * Check the inputs disabled state and update display.
	   *
	   * @public
	   */MaterialIconToggle.prototype.checkDisabled=function(){if(this.inputElement_.disabled){this.element_.classList.add(this.CssClasses_.IS_DISABLED);}else {this.element_.classList.remove(this.CssClasses_.IS_DISABLED);}};MaterialIconToggle.prototype['checkDisabled']=MaterialIconToggle.prototype.checkDisabled; /**
	   * Disable icon toggle.
	   *
	   * @public
	   */MaterialIconToggle.prototype.disable=function(){this.inputElement_.disabled=true;this.updateClasses_();};MaterialIconToggle.prototype['disable']=MaterialIconToggle.prototype.disable; /**
	   * Enable icon toggle.
	   *
	   * @public
	   */MaterialIconToggle.prototype.enable=function(){this.inputElement_.disabled=false;this.updateClasses_();};MaterialIconToggle.prototype['enable']=MaterialIconToggle.prototype.enable; /**
	   * Check icon toggle.
	   *
	   * @public
	   */MaterialIconToggle.prototype.check=function(){this.inputElement_.checked=true;this.updateClasses_();};MaterialIconToggle.prototype['check']=MaterialIconToggle.prototype.check; /**
	   * Uncheck icon toggle.
	   *
	   * @public
	   */MaterialIconToggle.prototype.uncheck=function(){this.inputElement_.checked=false;this.updateClasses_();};MaterialIconToggle.prototype['uncheck']=MaterialIconToggle.prototype.uncheck; /**
	   * Initialize element.
	   */MaterialIconToggle.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector('.'+this.CssClasses_.INPUT);if(this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);this.rippleContainerElement_=document.createElement('span');this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT);this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);this.boundRippleMouseUp=this.onMouseUp_.bind(this);this.rippleContainerElement_.addEventListener('mouseup',this.boundRippleMouseUp);var ripple=document.createElement('span');ripple.classList.add(this.CssClasses_.RIPPLE);this.rippleContainerElement_.appendChild(ripple);this.element_.appendChild(this.rippleContainerElement_);}this.boundInputOnChange=this.onChange_.bind(this);this.boundInputOnFocus=this.onFocus_.bind(this);this.boundInputOnBlur=this.onBlur_.bind(this);this.boundElementOnMouseUp=this.onMouseUp_.bind(this);this.inputElement_.addEventListener('change',this.boundInputOnChange);this.inputElement_.addEventListener('focus',this.boundInputOnFocus);this.inputElement_.addEventListener('blur',this.boundInputOnBlur);this.element_.addEventListener('mouseup',this.boundElementOnMouseUp);this.updateClasses_();this.element_.classList.add('is-upgraded');}}; // The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({constructor:MaterialIconToggle,classAsString:'MaterialIconToggle',cssClass:'mdl-js-icon-toggle',widget:true}); /**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ /**
	   * Class constructor for dropdown MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */var MaterialMenu=function MaterialMenu(element){this.element_=element; // Initialize instance.
	this.init();};window['MaterialMenu']=MaterialMenu; /**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */MaterialMenu.prototype.Constant_={ // Total duration of the menu animation.
	TRANSITION_DURATION_SECONDS:0.3, // The fraction of the total duration we want to use for menu item animations.
	TRANSITION_DURATION_FRACTION:0.8, // How long the menu stays open after choosing an option (so the user can see
	// the ripple).
	CLOSE_TIMEOUT:150}; /**
	   * Keycodes, for code readability.
	   *
	   * @enum {number}
	   * @private
	   */MaterialMenu.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32,UP_ARROW:38,DOWN_ARROW:40}; /**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */MaterialMenu.prototype.CssClasses_={CONTAINER:'mdl-menu__container',OUTLINE:'mdl-menu__outline',ITEM:'mdl-menu__item',ITEM_RIPPLE_CONTAINER:'mdl-menu__item-ripple-container',RIPPLE_EFFECT:'mdl-js-ripple-effect',RIPPLE_IGNORE_EVENTS:'mdl-js-ripple-effect--ignore-events',RIPPLE:'mdl-ripple', // Statuses
	IS_UPGRADED:'is-upgraded',IS_VISIBLE:'is-visible',IS_ANIMATING:'is-animating', // Alignment options
	BOTTOM_LEFT:'mdl-menu--bottom-left', // This is the default.
	BOTTOM_RIGHT:'mdl-menu--bottom-right',TOP_LEFT:'mdl-menu--top-left',TOP_RIGHT:'mdl-menu--top-right',UNALIGNED:'mdl-menu--unaligned'}; /**
	   * Initialize element.
	   */MaterialMenu.prototype.init=function(){if(this.element_){ // Create container for the menu.
	var container=document.createElement('div');container.classList.add(this.CssClasses_.CONTAINER);this.element_.parentElement.insertBefore(container,this.element_);this.element_.parentElement.removeChild(this.element_);container.appendChild(this.element_);this.container_=container; // Create outline for the menu (shadow and background).
	var outline=document.createElement('div');outline.classList.add(this.CssClasses_.OUTLINE);this.outline_=outline;container.insertBefore(outline,this.element_); // Find the "for" element and bind events to it.
	var forElId=this.element_.getAttribute('for')||this.element_.getAttribute('data-mdl-for');var forEl=null;if(forElId){forEl=document.getElementById(forElId);if(forEl){this.forElement_=forEl;forEl.addEventListener('click',this.handleForClick_.bind(this));forEl.addEventListener('keydown',this.handleForKeyboardEvent_.bind(this));}}var items=this.element_.querySelectorAll('.'+this.CssClasses_.ITEM);this.boundItemKeydown_=this.handleItemKeyboardEvent_.bind(this);this.boundItemClick_=this.handleItemClick_.bind(this);for(var i=0;i<items.length;i++){ // Add a listener to each menu item.
	items[i].addEventListener('click',this.boundItemClick_); // Add a tab index to each menu item.
	items[i].tabIndex='-1'; // Add a keyboard listener to each menu item.
	items[i].addEventListener('keydown',this.boundItemKeydown_);} // Add ripple classes to each item, if the user has enabled ripples.
	if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);for(i=0;i<items.length;i++){var item=items[i];var rippleContainer=document.createElement('span');rippleContainer.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);var ripple=document.createElement('span');ripple.classList.add(this.CssClasses_.RIPPLE);rippleContainer.appendChild(ripple);item.appendChild(rippleContainer);item.classList.add(this.CssClasses_.RIPPLE_EFFECT);}} // Copy alignment classes to the container, so the outline can use them.
	if(this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)){this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT);}if(this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)){this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT);}if(this.element_.classList.contains(this.CssClasses_.TOP_LEFT)){this.outline_.classList.add(this.CssClasses_.TOP_LEFT);}if(this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)){this.outline_.classList.add(this.CssClasses_.TOP_RIGHT);}if(this.element_.classList.contains(this.CssClasses_.UNALIGNED)){this.outline_.classList.add(this.CssClasses_.UNALIGNED);}container.classList.add(this.CssClasses_.IS_UPGRADED);}}; /**
	   * Handles a click on the "for" element, by positioning the menu and then
	   * toggling it.
	   *
	   * @param {Event} evt The event that fired.
	   * @private
	   */MaterialMenu.prototype.handleForClick_=function(evt){if(this.element_&&this.forElement_){var rect=this.forElement_.getBoundingClientRect();var forRect=this.forElement_.parentElement.getBoundingClientRect();if(this.element_.classList.contains(this.CssClasses_.UNALIGNED)){}else if(this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)){ // Position below the "for" element, aligned to its right.
	this.container_.style.right=forRect.right-rect.right+'px';this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+'px';}else if(this.element_.classList.contains(this.CssClasses_.TOP_LEFT)){ // Position above the "for" element, aligned to its left.
	this.container_.style.left=this.forElement_.offsetLeft+'px';this.container_.style.bottom=forRect.bottom-rect.top+'px';}else if(this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)){ // Position above the "for" element, aligned to its right.
	this.container_.style.right=forRect.right-rect.right+'px';this.container_.style.bottom=forRect.bottom-rect.top+'px';}else { // Default: position below the "for" element, aligned to its left.
	this.container_.style.left=this.forElement_.offsetLeft+'px';this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+'px';}}this.toggle(evt);}; /**
	   * Handles a keyboard event on the "for" element.
	   *
	   * @param {Event} evt The event that fired.
	   * @private
	   */MaterialMenu.prototype.handleForKeyboardEvent_=function(evt){if(this.element_&&this.container_&&this.forElement_){var items=this.element_.querySelectorAll('.'+this.CssClasses_.ITEM+':not([disabled])');if(items&&items.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)){if(evt.keyCode===this.Keycodes_.UP_ARROW){evt.preventDefault();items[items.length-1].focus();}else if(evt.keyCode===this.Keycodes_.DOWN_ARROW){evt.preventDefault();items[0].focus();}}}}; /**
	   * Handles a keyboard event on an item.
	   *
	   * @param {Event} evt The event that fired.
	   * @private
	   */MaterialMenu.prototype.handleItemKeyboardEvent_=function(evt){if(this.element_&&this.container_){var items=this.element_.querySelectorAll('.'+this.CssClasses_.ITEM+':not([disabled])');if(items&&items.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)){var currentIndex=Array.prototype.slice.call(items).indexOf(evt.target);if(evt.keyCode===this.Keycodes_.UP_ARROW){evt.preventDefault();if(currentIndex>0){items[currentIndex-1].focus();}else {items[items.length-1].focus();}}else if(evt.keyCode===this.Keycodes_.DOWN_ARROW){evt.preventDefault();if(items.length>currentIndex+1){items[currentIndex+1].focus();}else {items[0].focus();}}else if(evt.keyCode===this.Keycodes_.SPACE||evt.keyCode===this.Keycodes_.ENTER){evt.preventDefault(); // Send mousedown and mouseup to trigger ripple.
	var e=new MouseEvent('mousedown');evt.target.dispatchEvent(e);e=new MouseEvent('mouseup');evt.target.dispatchEvent(e); // Send click.
	evt.target.click();}else if(evt.keyCode===this.Keycodes_.ESCAPE){evt.preventDefault();this.hide();}}}}; /**
	   * Handles a click event on an item.
	   *
	   * @param {Event} evt The event that fired.
	   * @private
	   */MaterialMenu.prototype.handleItemClick_=function(evt){if(evt.target.hasAttribute('disabled')){evt.stopPropagation();}else { // Wait some time before closing menu, so the user can see the ripple.
	this.closing_=true;window.setTimeout(function(evt){this.hide();this.closing_=false;}.bind(this),this.Constant_.CLOSE_TIMEOUT);}}; /**
	   * Calculates the initial clip (for opening the menu) or final clip (for closing
	   * it), and applies it. This allows us to animate from or to the correct point,
	   * that is, the point it's aligned to in the "for" element.
	   *
	   * @param {number} height Height of the clip rectangle
	   * @param {number} width Width of the clip rectangle
	   * @private
	   */MaterialMenu.prototype.applyClip_=function(height,width){if(this.element_.classList.contains(this.CssClasses_.UNALIGNED)){ // Do not clip.
	this.element_.style.clip='';}else if(this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)){ // Clip to the top right corner of the menu.
	this.element_.style.clip='rect(0 '+width+'px '+'0 '+width+'px)';}else if(this.element_.classList.contains(this.CssClasses_.TOP_LEFT)){ // Clip to the bottom left corner of the menu.
	this.element_.style.clip='rect('+height+'px 0 '+height+'px 0)';}else if(this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)){ // Clip to the bottom right corner of the menu.
	this.element_.style.clip='rect('+height+'px '+width+'px '+height+'px '+width+'px)';}else { // Default: do not clip (same as clipping to the top left corner).
	this.element_.style.clip='';}}; /**
	   * Cleanup function to remove animation listeners.
	   *
	   * @param {Event} evt
	   * @private
	   */MaterialMenu.prototype.removeAnimationEndListener_=function(evt){evt.target.classList.remove(MaterialMenu.prototype.CssClasses_.IS_ANIMATING);}; /**
	   * Adds an event listener to clean up after the animation ends.
	   *
	   * @private
	   */MaterialMenu.prototype.addAnimationEndListener_=function(){this.element_.addEventListener('transitionend',this.removeAnimationEndListener_);this.element_.addEventListener('webkitTransitionEnd',this.removeAnimationEndListener_);}; /**
	   * Displays the menu.
	   *
	   * @public
	   */MaterialMenu.prototype.show=function(evt){if(this.element_&&this.container_&&this.outline_){ // Measure the inner element.
	var height=this.element_.getBoundingClientRect().height;var width=this.element_.getBoundingClientRect().width; // Apply the inner element's size to the container and outline.
	this.container_.style.width=width+'px';this.container_.style.height=height+'px';this.outline_.style.width=width+'px';this.outline_.style.height=height+'px';var transitionDuration=this.Constant_.TRANSITION_DURATION_SECONDS*this.Constant_.TRANSITION_DURATION_FRACTION; // Calculate transition delays for individual menu items, so that they fade
	// in one at a time.
	var items=this.element_.querySelectorAll('.'+this.CssClasses_.ITEM);for(var i=0;i<items.length;i++){var itemDelay=null;if(this.element_.classList.contains(this.CssClasses_.TOP_LEFT)||this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)){itemDelay=(height-items[i].offsetTop-items[i].offsetHeight)/height*transitionDuration+'s';}else {itemDelay=items[i].offsetTop/height*transitionDuration+'s';}items[i].style.transitionDelay=itemDelay;} // Apply the initial clip to the text before we start animating.
	this.applyClip_(height,width); // Wait for the next frame, turn on animation, and apply the final clip.
	// Also make it visible. This triggers the transitions.
	window.requestAnimationFrame(function(){this.element_.classList.add(this.CssClasses_.IS_ANIMATING);this.element_.style.clip='rect(0 '+width+'px '+height+'px 0)';this.container_.classList.add(this.CssClasses_.IS_VISIBLE);}.bind(this)); // Clean up after the animation is complete.
	this.addAnimationEndListener_(); // Add a click listener to the document, to close the menu.
	var callback=function(e){ // Check to see if the document is processing the same event that
	// displayed the menu in the first place. If so, do nothing.
	// Also check to see if the menu is in the process of closing itself, and
	// do nothing in that case.
	// Also check if the clicked element is a menu item
	// if so, do nothing.
	if(e!==evt&&!this.closing_&&e.target.parentNode!==this.element_){document.removeEventListener('click',callback);this.hide();}}.bind(this);document.addEventListener('click',callback);}};MaterialMenu.prototype['show']=MaterialMenu.prototype.show; /**
	   * Hides the menu.
	   *
	   * @public
	   */MaterialMenu.prototype.hide=function(){if(this.element_&&this.container_&&this.outline_){var items=this.element_.querySelectorAll('.'+this.CssClasses_.ITEM); // Remove all transition delays; menu items fade out concurrently.
	for(var i=0;i<items.length;i++){items[i].style.removeProperty('transition-delay');} // Measure the inner element.
	var rect=this.element_.getBoundingClientRect();var height=rect.height;var width=rect.width; // Turn on animation, and apply the final clip. Also make invisible.
	// This triggers the transitions.
	this.element_.classList.add(this.CssClasses_.IS_ANIMATING);this.applyClip_(height,width);this.container_.classList.remove(this.CssClasses_.IS_VISIBLE); // Clean up after the animation is complete.
	this.addAnimationEndListener_();}};MaterialMenu.prototype['hide']=MaterialMenu.prototype.hide; /**
	   * Displays or hides the menu, depending on current state.
	   *
	   * @public
	   */MaterialMenu.prototype.toggle=function(evt){if(this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)){this.hide();}else {this.show(evt);}};MaterialMenu.prototype['toggle']=MaterialMenu.prototype.toggle; // The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({constructor:MaterialMenu,classAsString:'MaterialMenu',cssClass:'mdl-js-menu',widget:true}); /**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ /**
	   * Class constructor for Progress MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */var MaterialProgress=function MaterialProgress(element){this.element_=element; // Initialize instance.
	this.init();};window['MaterialProgress']=MaterialProgress; /**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */MaterialProgress.prototype.Constant_={}; /**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */MaterialProgress.prototype.CssClasses_={INDETERMINATE_CLASS:'mdl-progress__indeterminate'}; /**
	   * Set the current progress of the progressbar.
	   *
	   * @param {number} p Percentage of the progress (0-100)
	   * @public
	   */MaterialProgress.prototype.setProgress=function(p){if(this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)){return;}this.progressbar_.style.width=p+'%';};MaterialProgress.prototype['setProgress']=MaterialProgress.prototype.setProgress; /**
	   * Set the current progress of the buffer.
	   *
	   * @param {number} p Percentage of the buffer (0-100)
	   * @public
	   */MaterialProgress.prototype.setBuffer=function(p){this.bufferbar_.style.width=p+'%';this.auxbar_.style.width=100-p+'%';};MaterialProgress.prototype['setBuffer']=MaterialProgress.prototype.setBuffer; /**
	   * Initialize element.
	   */MaterialProgress.prototype.init=function(){if(this.element_){var el=document.createElement('div');el.className='progressbar bar bar1';this.element_.appendChild(el);this.progressbar_=el;el=document.createElement('div');el.className='bufferbar bar bar2';this.element_.appendChild(el);this.bufferbar_=el;el=document.createElement('div');el.className='auxbar bar bar3';this.element_.appendChild(el);this.auxbar_=el;this.progressbar_.style.width='0%';this.bufferbar_.style.width='100%';this.auxbar_.style.width='0%';this.element_.classList.add('is-upgraded');}}; // The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({constructor:MaterialProgress,classAsString:'MaterialProgress',cssClass:'mdl-js-progress',widget:true}); /**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ /**
	   * Class constructor for Radio MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */var MaterialRadio=function MaterialRadio(element){this.element_=element; // Initialize instance.
	this.init();};window['MaterialRadio']=MaterialRadio; /**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */MaterialRadio.prototype.Constant_={TINY_TIMEOUT:0.001}; /**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */MaterialRadio.prototype.CssClasses_={IS_FOCUSED:'is-focused',IS_DISABLED:'is-disabled',IS_CHECKED:'is-checked',IS_UPGRADED:'is-upgraded',JS_RADIO:'mdl-js-radio',RADIO_BTN:'mdl-radio__button',RADIO_OUTER_CIRCLE:'mdl-radio__outer-circle',RADIO_INNER_CIRCLE:'mdl-radio__inner-circle',RIPPLE_EFFECT:'mdl-js-ripple-effect',RIPPLE_IGNORE_EVENTS:'mdl-js-ripple-effect--ignore-events',RIPPLE_CONTAINER:'mdl-radio__ripple-container',RIPPLE_CENTER:'mdl-ripple--center',RIPPLE:'mdl-ripple'}; /**
	   * Handle change of state.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialRadio.prototype.onChange_=function(event){ // Since other radio buttons don't get change events, we need to look for
	// them to update their classes.
	var radios=document.getElementsByClassName(this.CssClasses_.JS_RADIO);for(var i=0;i<radios.length;i++){var button=radios[i].querySelector('.'+this.CssClasses_.RADIO_BTN); // Different name == different group, so no point updating those.
	if(button.getAttribute('name')===this.btnElement_.getAttribute('name')){radios[i]['MaterialRadio'].updateClasses_();}}}; /**
	   * Handle focus.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialRadio.prototype.onFocus_=function(event){this.element_.classList.add(this.CssClasses_.IS_FOCUSED);}; /**
	   * Handle lost focus.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialRadio.prototype.onBlur_=function(event){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);}; /**
	   * Handle mouseup.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialRadio.prototype.onMouseup_=function(event){this.blur_();}; /**
	   * Update classes.
	   *
	   * @private
	   */MaterialRadio.prototype.updateClasses_=function(){this.checkDisabled();this.checkToggleState();}; /**
	   * Add blur.
	   *
	   * @private
	   */MaterialRadio.prototype.blur_=function(){ // TODO: figure out why there's a focus event being fired after our blur,
	// so that we can avoid this hack.
	window.setTimeout(function(){this.btnElement_.blur();}.bind(this),this.Constant_.TINY_TIMEOUT);}; // Public methods.
	/**
	   * Check the components disabled state.
	   *
	   * @public
	   */MaterialRadio.prototype.checkDisabled=function(){if(this.btnElement_.disabled){this.element_.classList.add(this.CssClasses_.IS_DISABLED);}else {this.element_.classList.remove(this.CssClasses_.IS_DISABLED);}};MaterialRadio.prototype['checkDisabled']=MaterialRadio.prototype.checkDisabled; /**
	   * Check the components toggled state.
	   *
	   * @public
	   */MaterialRadio.prototype.checkToggleState=function(){if(this.btnElement_.checked){this.element_.classList.add(this.CssClasses_.IS_CHECKED);}else {this.element_.classList.remove(this.CssClasses_.IS_CHECKED);}};MaterialRadio.prototype['checkToggleState']=MaterialRadio.prototype.checkToggleState; /**
	   * Disable radio.
	   *
	   * @public
	   */MaterialRadio.prototype.disable=function(){this.btnElement_.disabled=true;this.updateClasses_();};MaterialRadio.prototype['disable']=MaterialRadio.prototype.disable; /**
	   * Enable radio.
	   *
	   * @public
	   */MaterialRadio.prototype.enable=function(){this.btnElement_.disabled=false;this.updateClasses_();};MaterialRadio.prototype['enable']=MaterialRadio.prototype.enable; /**
	   * Check radio.
	   *
	   * @public
	   */MaterialRadio.prototype.check=function(){this.btnElement_.checked=true;this.updateClasses_();};MaterialRadio.prototype['check']=MaterialRadio.prototype.check; /**
	   * Uncheck radio.
	   *
	   * @public
	   */MaterialRadio.prototype.uncheck=function(){this.btnElement_.checked=false;this.updateClasses_();};MaterialRadio.prototype['uncheck']=MaterialRadio.prototype.uncheck; /**
	   * Initialize element.
	   */MaterialRadio.prototype.init=function(){if(this.element_){this.btnElement_=this.element_.querySelector('.'+this.CssClasses_.RADIO_BTN);this.boundChangeHandler_=this.onChange_.bind(this);this.boundFocusHandler_=this.onChange_.bind(this);this.boundBlurHandler_=this.onBlur_.bind(this);this.boundMouseUpHandler_=this.onMouseup_.bind(this);var outerCircle=document.createElement('span');outerCircle.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);var innerCircle=document.createElement('span');innerCircle.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE);this.element_.appendChild(outerCircle);this.element_.appendChild(innerCircle);var rippleContainer;if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);rippleContainer=document.createElement('span');rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);rippleContainer.classList.add(this.CssClasses_.RIPPLE_EFFECT);rippleContainer.classList.add(this.CssClasses_.RIPPLE_CENTER);rippleContainer.addEventListener('mouseup',this.boundMouseUpHandler_);var ripple=document.createElement('span');ripple.classList.add(this.CssClasses_.RIPPLE);rippleContainer.appendChild(ripple);this.element_.appendChild(rippleContainer);}this.btnElement_.addEventListener('change',this.boundChangeHandler_);this.btnElement_.addEventListener('focus',this.boundFocusHandler_);this.btnElement_.addEventListener('blur',this.boundBlurHandler_);this.element_.addEventListener('mouseup',this.boundMouseUpHandler_);this.updateClasses_();this.element_.classList.add(this.CssClasses_.IS_UPGRADED);}}; // The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({constructor:MaterialRadio,classAsString:'MaterialRadio',cssClass:'mdl-js-radio',widget:true}); /**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ /**
	   * Class constructor for Slider MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */var MaterialSlider=function MaterialSlider(element){this.element_=element; // Browser feature detection.
	this.isIE_=window.navigator.msPointerEnabled; // Initialize instance.
	this.init();};window['MaterialSlider']=MaterialSlider; /**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */MaterialSlider.prototype.Constant_={}; /**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */MaterialSlider.prototype.CssClasses_={IE_CONTAINER:'mdl-slider__ie-container',SLIDER_CONTAINER:'mdl-slider__container',BACKGROUND_FLEX:'mdl-slider__background-flex',BACKGROUND_LOWER:'mdl-slider__background-lower',BACKGROUND_UPPER:'mdl-slider__background-upper',IS_LOWEST_VALUE:'is-lowest-value',IS_UPGRADED:'is-upgraded'}; /**
	   * Handle input on element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialSlider.prototype.onInput_=function(event){this.updateValueStyles_();}; /**
	   * Handle change on element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialSlider.prototype.onChange_=function(event){this.updateValueStyles_();}; /**
	   * Handle mouseup on element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialSlider.prototype.onMouseUp_=function(event){event.target.blur();}; /**
	   * Handle mousedown on container element.
	   * This handler is purpose is to not require the use to click
	   * exactly on the 2px slider element, as FireFox seems to be very
	   * strict about this.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   * @suppress {missingProperties}
	   */MaterialSlider.prototype.onContainerMouseDown_=function(event){ // If this click is not on the parent element (but rather some child)
	// ignore. It may still bubble up.
	if(event.target!==this.element_.parentElement){return;} // Discard the original event and create a new event that
	// is on the slider element.
	event.preventDefault();var newEvent=new MouseEvent('mousedown',{target:event.target,buttons:event.buttons,clientX:event.clientX,clientY:this.element_.getBoundingClientRect().y});this.element_.dispatchEvent(newEvent);}; /**
	   * Handle updating of values.
	   *
	   * @private
	   */MaterialSlider.prototype.updateValueStyles_=function(){ // Calculate and apply percentages to div structure behind slider.
	var fraction=(this.element_.value-this.element_.min)/(this.element_.max-this.element_.min);if(fraction===0){this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE);}else {this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE);}if(!this.isIE_){this.backgroundLower_.style.flex=fraction;this.backgroundLower_.style.webkitFlex=fraction;this.backgroundUpper_.style.flex=1-fraction;this.backgroundUpper_.style.webkitFlex=1-fraction;}}; // Public methods.
	/**
	   * Disable slider.
	   *
	   * @public
	   */MaterialSlider.prototype.disable=function(){this.element_.disabled=true;};MaterialSlider.prototype['disable']=MaterialSlider.prototype.disable; /**
	   * Enable slider.
	   *
	   * @public
	   */MaterialSlider.prototype.enable=function(){this.element_.disabled=false;};MaterialSlider.prototype['enable']=MaterialSlider.prototype.enable; /**
	   * Update slider value.
	   *
	   * @param {number} value The value to which to set the control (optional).
	   * @public
	   */MaterialSlider.prototype.change=function(value){if(typeof value!=='undefined'){this.element_.value=value;}this.updateValueStyles_();};MaterialSlider.prototype['change']=MaterialSlider.prototype.change; /**
	   * Initialize element.
	   */MaterialSlider.prototype.init=function(){if(this.element_){if(this.isIE_){ // Since we need to specify a very large height in IE due to
	// implementation limitations, we add a parent here that trims it down to
	// a reasonable size.
	var containerIE=document.createElement('div');containerIE.classList.add(this.CssClasses_.IE_CONTAINER);this.element_.parentElement.insertBefore(containerIE,this.element_);this.element_.parentElement.removeChild(this.element_);containerIE.appendChild(this.element_);}else { // For non-IE browsers, we need a div structure that sits behind the
	// slider and allows us to style the left and right sides of it with
	// different colors.
	var container=document.createElement('div');container.classList.add(this.CssClasses_.SLIDER_CONTAINER);this.element_.parentElement.insertBefore(container,this.element_);this.element_.parentElement.removeChild(this.element_);container.appendChild(this.element_);var backgroundFlex=document.createElement('div');backgroundFlex.classList.add(this.CssClasses_.BACKGROUND_FLEX);container.appendChild(backgroundFlex);this.backgroundLower_=document.createElement('div');this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER);backgroundFlex.appendChild(this.backgroundLower_);this.backgroundUpper_=document.createElement('div');this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER);backgroundFlex.appendChild(this.backgroundUpper_);}this.boundInputHandler=this.onInput_.bind(this);this.boundChangeHandler=this.onChange_.bind(this);this.boundMouseUpHandler=this.onMouseUp_.bind(this);this.boundContainerMouseDownHandler=this.onContainerMouseDown_.bind(this);this.element_.addEventListener('input',this.boundInputHandler);this.element_.addEventListener('change',this.boundChangeHandler);this.element_.addEventListener('mouseup',this.boundMouseUpHandler);this.element_.parentElement.addEventListener('mousedown',this.boundContainerMouseDownHandler);this.updateValueStyles_();this.element_.classList.add(this.CssClasses_.IS_UPGRADED);}}; // The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({constructor:MaterialSlider,classAsString:'MaterialSlider',cssClass:'mdl-js-slider',widget:true}); /**
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ /**
	   * Class constructor for Snackbar MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */var MaterialSnackbar=function MaterialSnackbar(element){this.element_=element;this.textElement_=this.element_.querySelector('.'+this.cssClasses_.MESSAGE);this.actionElement_=this.element_.querySelector('.'+this.cssClasses_.ACTION);if(!this.textElement_){throw new Error('There must be a message element for a snackbar.');}if(!this.actionElement_){throw new Error('There must be an action element for a snackbar.');}this.active=false;this.actionHandler_=undefined;this.message_=undefined;this.actionText_=undefined;this.queuedNotifications_=[];this.setActionHidden_(true);};window['MaterialSnackbar']=MaterialSnackbar; /**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */MaterialSnackbar.prototype.Constant_={ // The duration of the snackbar show/hide animation, in ms.
	ANIMATION_LENGTH:250}; /**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */MaterialSnackbar.prototype.cssClasses_={SNACKBAR:'mdl-snackbar',MESSAGE:'mdl-snackbar__text',ACTION:'mdl-snackbar__action',ACTIVE:'mdl-snackbar--active'}; /**
	   * Display the snackbar.
	   *
	   * @private
	   */MaterialSnackbar.prototype.displaySnackbar_=function(){this.element_.setAttribute('aria-hidden','true');if(this.actionHandler_){this.actionElement_.textContent=this.actionText_;this.actionElement_.addEventListener('click',this.actionHandler_);this.setActionHidden_(false);}this.textElement_.textContent=this.message_;this.element_.classList.add(this.cssClasses_.ACTIVE);this.element_.setAttribute('aria-hidden','false');setTimeout(this.cleanup_.bind(this),this.timeout_);}; /**
	   * Show the snackbar.
	   *
	   * @param {Object} data The data for the notification.
	   * @public
	   */MaterialSnackbar.prototype.showSnackbar=function(data){if(data===undefined){throw new Error('Please provide a data object with at least a message to display.');}if(data['message']===undefined){throw new Error('Please provide a message to be displayed.');}if(data['actionHandler']&&!data['actionText']){throw new Error('Please provide action text with the handler.');}if(this.active){this.queuedNotifications_.push(data);}else {this.active=true;this.message_=data['message'];if(data['timeout']){this.timeout_=data['timeout'];}else {this.timeout_=2750;}if(data['actionHandler']){this.actionHandler_=data['actionHandler'];}if(data['actionText']){this.actionText_=data['actionText'];}this.displaySnackbar_();}};MaterialSnackbar.prototype['showSnackbar']=MaterialSnackbar.prototype.showSnackbar; /**
	   * Check if the queue has items within it.
	   * If it does, display the next entry.
	   *
	   * @private
	   */MaterialSnackbar.prototype.checkQueue_=function(){if(this.queuedNotifications_.length>0){this.showSnackbar(this.queuedNotifications_.shift());}}; /**
	   * Cleanup the snackbar event listeners and accessiblity attributes.
	   *
	   * @private
	   */MaterialSnackbar.prototype.cleanup_=function(){this.element_.classList.remove(this.cssClasses_.ACTIVE);setTimeout(function(){this.element_.setAttribute('aria-hidden','true');this.textElement_.textContent='';if(!Boolean(this.actionElement_.getAttribute('aria-hidden'))){this.setActionHidden_(true);this.actionElement_.textContent='';this.actionElement_.removeEventListener('click',this.actionHandler_);}this.actionHandler_=undefined;this.message_=undefined;this.actionText_=undefined;this.active=false;this.checkQueue_();}.bind(this),this.Constant_.ANIMATION_LENGTH);}; /**
	   * Set the action handler hidden state.
	   *
	   * @param {boolean} value
	   * @private
	   */MaterialSnackbar.prototype.setActionHidden_=function(value){if(value){this.actionElement_.setAttribute('aria-hidden','true');}else {this.actionElement_.removeAttribute('aria-hidden');}}; // The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({constructor:MaterialSnackbar,classAsString:'MaterialSnackbar',cssClass:'mdl-js-snackbar',widget:true}); /**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ /**
	   * Class constructor for Spinner MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @param {HTMLElement} element The element that will be upgraded.
	   * @constructor
	   */var MaterialSpinner=function MaterialSpinner(element){this.element_=element; // Initialize instance.
	this.init();};window['MaterialSpinner']=MaterialSpinner; /**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */MaterialSpinner.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4}; /**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */MaterialSpinner.prototype.CssClasses_={MDL_SPINNER_LAYER:'mdl-spinner__layer',MDL_SPINNER_CIRCLE_CLIPPER:'mdl-spinner__circle-clipper',MDL_SPINNER_CIRCLE:'mdl-spinner__circle',MDL_SPINNER_GAP_PATCH:'mdl-spinner__gap-patch',MDL_SPINNER_LEFT:'mdl-spinner__left',MDL_SPINNER_RIGHT:'mdl-spinner__right'}; /**
	   * Auxiliary method to create a spinner layer.
	   *
	   * @param {number} index Index of the layer to be created.
	   * @public
	   */MaterialSpinner.prototype.createLayer=function(index){var layer=document.createElement('div');layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER);layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+'-'+index);var leftClipper=document.createElement('div');leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var gapPatch=document.createElement('div');gapPatch.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var rightClipper=document.createElement('div');rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);var circleOwners=[leftClipper,gapPatch,rightClipper];for(var i=0;i<circleOwners.length;i++){var circle=document.createElement('div');circle.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE);circleOwners[i].appendChild(circle);}layer.appendChild(leftClipper);layer.appendChild(gapPatch);layer.appendChild(rightClipper);this.element_.appendChild(layer);};MaterialSpinner.prototype['createLayer']=MaterialSpinner.prototype.createLayer; /**
	   * Stops the spinner animation.
	   * Public method for users who need to stop the spinner for any reason.
	   *
	   * @public
	   */MaterialSpinner.prototype.stop=function(){this.element_.classList.remove('is-active');};MaterialSpinner.prototype['stop']=MaterialSpinner.prototype.stop; /**
	   * Starts the spinner animation.
	   * Public method for users who need to manually start the spinner for any reason
	   * (instead of just adding the 'is-active' class to their markup).
	   *
	   * @public
	   */MaterialSpinner.prototype.start=function(){this.element_.classList.add('is-active');};MaterialSpinner.prototype['start']=MaterialSpinner.prototype.start; /**
	   * Initialize element.
	   */MaterialSpinner.prototype.init=function(){if(this.element_){for(var i=1;i<=this.Constant_.MDL_SPINNER_LAYER_COUNT;i++){this.createLayer(i);}this.element_.classList.add('is-upgraded');}}; // The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({constructor:MaterialSpinner,classAsString:'MaterialSpinner',cssClass:'mdl-js-spinner',widget:true}); /**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ /**
	   * Class constructor for Checkbox MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */var MaterialSwitch=function MaterialSwitch(element){this.element_=element; // Initialize instance.
	this.init();};window['MaterialSwitch']=MaterialSwitch; /**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */MaterialSwitch.prototype.Constant_={TINY_TIMEOUT:0.001}; /**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */MaterialSwitch.prototype.CssClasses_={INPUT:'mdl-switch__input',TRACK:'mdl-switch__track',THUMB:'mdl-switch__thumb',FOCUS_HELPER:'mdl-switch__focus-helper',RIPPLE_EFFECT:'mdl-js-ripple-effect',RIPPLE_IGNORE_EVENTS:'mdl-js-ripple-effect--ignore-events',RIPPLE_CONTAINER:'mdl-switch__ripple-container',RIPPLE_CENTER:'mdl-ripple--center',RIPPLE:'mdl-ripple',IS_FOCUSED:'is-focused',IS_DISABLED:'is-disabled',IS_CHECKED:'is-checked'}; /**
	   * Handle change of state.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialSwitch.prototype.onChange_=function(event){this.updateClasses_();}; /**
	   * Handle focus of element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialSwitch.prototype.onFocus_=function(event){this.element_.classList.add(this.CssClasses_.IS_FOCUSED);}; /**
	   * Handle lost focus of element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialSwitch.prototype.onBlur_=function(event){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);}; /**
	   * Handle mouseup.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialSwitch.prototype.onMouseUp_=function(event){this.blur_();}; /**
	   * Handle class updates.
	   *
	   * @private
	   */MaterialSwitch.prototype.updateClasses_=function(){this.checkDisabled();this.checkToggleState();}; /**
	   * Add blur.
	   *
	   * @private
	   */MaterialSwitch.prototype.blur_=function(){ // TODO: figure out why there's a focus event being fired after our blur,
	// so that we can avoid this hack.
	window.setTimeout(function(){this.inputElement_.blur();}.bind(this),this.Constant_.TINY_TIMEOUT);}; // Public methods.
	/**
	   * Check the components disabled state.
	   *
	   * @public
	   */MaterialSwitch.prototype.checkDisabled=function(){if(this.inputElement_.disabled){this.element_.classList.add(this.CssClasses_.IS_DISABLED);}else {this.element_.classList.remove(this.CssClasses_.IS_DISABLED);}};MaterialSwitch.prototype['checkDisabled']=MaterialSwitch.prototype.checkDisabled; /**
	   * Check the components toggled state.
	   *
	   * @public
	   */MaterialSwitch.prototype.checkToggleState=function(){if(this.inputElement_.checked){this.element_.classList.add(this.CssClasses_.IS_CHECKED);}else {this.element_.classList.remove(this.CssClasses_.IS_CHECKED);}};MaterialSwitch.prototype['checkToggleState']=MaterialSwitch.prototype.checkToggleState; /**
	   * Disable switch.
	   *
	   * @public
	   */MaterialSwitch.prototype.disable=function(){this.inputElement_.disabled=true;this.updateClasses_();};MaterialSwitch.prototype['disable']=MaterialSwitch.prototype.disable; /**
	   * Enable switch.
	   *
	   * @public
	   */MaterialSwitch.prototype.enable=function(){this.inputElement_.disabled=false;this.updateClasses_();};MaterialSwitch.prototype['enable']=MaterialSwitch.prototype.enable; /**
	   * Activate switch.
	   *
	   * @public
	   */MaterialSwitch.prototype.on=function(){this.inputElement_.checked=true;this.updateClasses_();};MaterialSwitch.prototype['on']=MaterialSwitch.prototype.on; /**
	   * Deactivate switch.
	   *
	   * @public
	   */MaterialSwitch.prototype.off=function(){this.inputElement_.checked=false;this.updateClasses_();};MaterialSwitch.prototype['off']=MaterialSwitch.prototype.off; /**
	   * Initialize element.
	   */MaterialSwitch.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector('.'+this.CssClasses_.INPUT);var track=document.createElement('div');track.classList.add(this.CssClasses_.TRACK);var thumb=document.createElement('div');thumb.classList.add(this.CssClasses_.THUMB);var focusHelper=document.createElement('span');focusHelper.classList.add(this.CssClasses_.FOCUS_HELPER);thumb.appendChild(focusHelper);this.element_.appendChild(track);this.element_.appendChild(thumb);this.boundMouseUpHandler=this.onMouseUp_.bind(this);if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);this.rippleContainerElement_=document.createElement('span');this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT);this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);this.rippleContainerElement_.addEventListener('mouseup',this.boundMouseUpHandler);var ripple=document.createElement('span');ripple.classList.add(this.CssClasses_.RIPPLE);this.rippleContainerElement_.appendChild(ripple);this.element_.appendChild(this.rippleContainerElement_);}this.boundChangeHandler=this.onChange_.bind(this);this.boundFocusHandler=this.onFocus_.bind(this);this.boundBlurHandler=this.onBlur_.bind(this);this.inputElement_.addEventListener('change',this.boundChangeHandler);this.inputElement_.addEventListener('focus',this.boundFocusHandler);this.inputElement_.addEventListener('blur',this.boundBlurHandler);this.element_.addEventListener('mouseup',this.boundMouseUpHandler);this.updateClasses_();this.element_.classList.add('is-upgraded');}}; // The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({constructor:MaterialSwitch,classAsString:'MaterialSwitch',cssClass:'mdl-js-switch',widget:true}); /**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ /**
	   * Class constructor for Tabs MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {Element} element The element that will be upgraded.
	   */var MaterialTabs=function MaterialTabs(element){ // Stores the HTML element.
	this.element_=element; // Initialize instance.
	this.init();};window['MaterialTabs']=MaterialTabs; /**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string}
	   * @private
	   */MaterialTabs.prototype.Constant_={}; /**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */MaterialTabs.prototype.CssClasses_={TAB_CLASS:'mdl-tabs__tab',PANEL_CLASS:'mdl-tabs__panel',ACTIVE_CLASS:'is-active',UPGRADED_CLASS:'is-upgraded',MDL_JS_RIPPLE_EFFECT:'mdl-js-ripple-effect',MDL_RIPPLE_CONTAINER:'mdl-tabs__ripple-container',MDL_RIPPLE:'mdl-ripple',MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS:'mdl-js-ripple-effect--ignore-events'}; /**
	   * Handle clicks to a tabs component
	   *
	   * @private
	   */MaterialTabs.prototype.initTabs_=function(){if(this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS);} // Select element tabs, document panels
	this.tabs_=this.element_.querySelectorAll('.'+this.CssClasses_.TAB_CLASS);this.panels_=this.element_.querySelectorAll('.'+this.CssClasses_.PANEL_CLASS); // Create new tabs for each tab element
	for(var i=0;i<this.tabs_.length;i++){new MaterialTab(this.tabs_[i],this);}this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS);}; /**
	   * Reset tab state, dropping active classes
	   *
	   * @private
	   */MaterialTabs.prototype.resetTabState_=function(){for(var k=0;k<this.tabs_.length;k++){this.tabs_[k].classList.remove(this.CssClasses_.ACTIVE_CLASS);}}; /**
	   * Reset panel state, droping active classes
	   *
	   * @private
	   */MaterialTabs.prototype.resetPanelState_=function(){for(var j=0;j<this.panels_.length;j++){this.panels_[j].classList.remove(this.CssClasses_.ACTIVE_CLASS);}}; /**
	   * Initialize element.
	   */MaterialTabs.prototype.init=function(){if(this.element_){this.initTabs_();}}; /**
	   * Constructor for an individual tab.
	   *
	   * @constructor
	   * @param {Element} tab The HTML element for the tab.
	   * @param {MaterialTabs} ctx The MaterialTabs object that owns the tab.
	   */function MaterialTab(tab,ctx){if(tab){if(ctx.element_.classList.contains(ctx.CssClasses_.MDL_JS_RIPPLE_EFFECT)){var rippleContainer=document.createElement('span');rippleContainer.classList.add(ctx.CssClasses_.MDL_RIPPLE_CONTAINER);rippleContainer.classList.add(ctx.CssClasses_.MDL_JS_RIPPLE_EFFECT);var ripple=document.createElement('span');ripple.classList.add(ctx.CssClasses_.MDL_RIPPLE);rippleContainer.appendChild(ripple);tab.appendChild(rippleContainer);}tab.addEventListener('click',function(e){e.preventDefault();var href=tab.href.split('#')[1];var panel=ctx.element_.querySelector('#'+href);ctx.resetTabState_();ctx.resetPanelState_();tab.classList.add(ctx.CssClasses_.ACTIVE_CLASS);panel.classList.add(ctx.CssClasses_.ACTIVE_CLASS);});}} // The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({constructor:MaterialTabs,classAsString:'MaterialTabs',cssClass:'mdl-js-tabs'}); /**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ /**
	   * Class constructor for Textfield MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */var MaterialTextfield=function MaterialTextfield(element){this.element_=element;this.maxRows=this.Constant_.NO_MAX_ROWS; // Initialize instance.
	this.init();};window['MaterialTextfield']=MaterialTextfield; /**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */MaterialTextfield.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:'maxrows'}; /**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */MaterialTextfield.prototype.CssClasses_={LABEL:'mdl-textfield__label',INPUT:'mdl-textfield__input',IS_DIRTY:'is-dirty',IS_FOCUSED:'is-focused',IS_DISABLED:'is-disabled',IS_INVALID:'is-invalid',IS_UPGRADED:'is-upgraded',HAS_PLACEHOLDER:'has-placeholder'}; /**
	   * Handle input being entered.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialTextfield.prototype.onKeyDown_=function(event){var currentRowCount=event.target.value.split('\n').length;if(event.keyCode===13){if(currentRowCount>=this.maxRows){event.preventDefault();}}}; /**
	   * Handle focus.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialTextfield.prototype.onFocus_=function(event){this.element_.classList.add(this.CssClasses_.IS_FOCUSED);}; /**
	   * Handle lost focus.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialTextfield.prototype.onBlur_=function(event){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);}; /**
	   * Handle reset event from out side.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialTextfield.prototype.onReset_=function(event){this.updateClasses_();}; /**
	   * Handle class updates.
	   *
	   * @private
	   */MaterialTextfield.prototype.updateClasses_=function(){this.checkDisabled();this.checkValidity();this.checkDirty();this.checkFocus();}; // Public methods.
	/**
	   * Check the disabled state and update field accordingly.
	   *
	   * @public
	   */MaterialTextfield.prototype.checkDisabled=function(){if(this.input_.disabled){this.element_.classList.add(this.CssClasses_.IS_DISABLED);}else {this.element_.classList.remove(this.CssClasses_.IS_DISABLED);}};MaterialTextfield.prototype['checkDisabled']=MaterialTextfield.prototype.checkDisabled; /**
	  * Check the focus state and update field accordingly.
	  *
	  * @public
	  */MaterialTextfield.prototype.checkFocus=function(){if(Boolean(this.element_.querySelector(':focus'))){this.element_.classList.add(this.CssClasses_.IS_FOCUSED);}else {this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);}};MaterialTextfield.prototype['checkFocus']=MaterialTextfield.prototype.checkFocus; /**
	   * Check the validity state and update field accordingly.
	   *
	   * @public
	   */MaterialTextfield.prototype.checkValidity=function(){if(this.input_.validity){if(this.input_.validity.valid){this.element_.classList.remove(this.CssClasses_.IS_INVALID);}else {this.element_.classList.add(this.CssClasses_.IS_INVALID);}}};MaterialTextfield.prototype['checkValidity']=MaterialTextfield.prototype.checkValidity; /**
	   * Check the dirty state and update field accordingly.
	   *
	   * @public
	   */MaterialTextfield.prototype.checkDirty=function(){if(this.input_.value&&this.input_.value.length>0){this.element_.classList.add(this.CssClasses_.IS_DIRTY);}else {this.element_.classList.remove(this.CssClasses_.IS_DIRTY);}};MaterialTextfield.prototype['checkDirty']=MaterialTextfield.prototype.checkDirty; /**
	   * Disable text field.
	   *
	   * @public
	   */MaterialTextfield.prototype.disable=function(){this.input_.disabled=true;this.updateClasses_();};MaterialTextfield.prototype['disable']=MaterialTextfield.prototype.disable; /**
	   * Enable text field.
	   *
	   * @public
	   */MaterialTextfield.prototype.enable=function(){this.input_.disabled=false;this.updateClasses_();};MaterialTextfield.prototype['enable']=MaterialTextfield.prototype.enable; /**
	   * Update text field value.
	   *
	   * @param {string} value The value to which to set the control (optional).
	   * @public
	   */MaterialTextfield.prototype.change=function(value){this.input_.value=value||'';this.updateClasses_();};MaterialTextfield.prototype['change']=MaterialTextfield.prototype.change; /**
	   * Initialize element.
	   */MaterialTextfield.prototype.init=function(){if(this.element_){this.label_=this.element_.querySelector('.'+this.CssClasses_.LABEL);this.input_=this.element_.querySelector('.'+this.CssClasses_.INPUT);if(this.input_){if(this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)){this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10);if(isNaN(this.maxRows)){this.maxRows=this.Constant_.NO_MAX_ROWS;}}if(this.input_.hasAttribute('placeholder')){this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER);}this.boundUpdateClassesHandler=this.updateClasses_.bind(this);this.boundFocusHandler=this.onFocus_.bind(this);this.boundBlurHandler=this.onBlur_.bind(this);this.boundResetHandler=this.onReset_.bind(this);this.input_.addEventListener('input',this.boundUpdateClassesHandler);this.input_.addEventListener('focus',this.boundFocusHandler);this.input_.addEventListener('blur',this.boundBlurHandler);this.input_.addEventListener('reset',this.boundResetHandler);if(this.maxRows!==this.Constant_.NO_MAX_ROWS){ // TODO: This should handle pasting multi line text.
	// Currently doesn't.
	this.boundKeyDownHandler=this.onKeyDown_.bind(this);this.input_.addEventListener('keydown',this.boundKeyDownHandler);}var invalid=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_();this.element_.classList.add(this.CssClasses_.IS_UPGRADED);if(invalid){this.element_.classList.add(this.CssClasses_.IS_INVALID);}if(this.input_.hasAttribute('autofocus')){this.element_.focus();this.checkFocus();}}}}; // The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({constructor:MaterialTextfield,classAsString:'MaterialTextfield',cssClass:'mdl-js-textfield',widget:true}); /**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ /**
	   * Class constructor for Tooltip MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */var MaterialTooltip=function MaterialTooltip(element){this.element_=element; // Initialize instance.
	this.init();};window['MaterialTooltip']=MaterialTooltip; /**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */MaterialTooltip.prototype.Constant_={}; /**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */MaterialTooltip.prototype.CssClasses_={IS_ACTIVE:'is-active',BOTTOM:'mdl-tooltip--bottom',LEFT:'mdl-tooltip--left',RIGHT:'mdl-tooltip--right',TOP:'mdl-tooltip--top'}; /**
	   * Handle mouseenter for tooltip.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialTooltip.prototype.handleMouseEnter_=function(event){var props=event.target.getBoundingClientRect();var left=props.left+props.width/2;var top=props.top+props.height/2;var marginLeft=-1*(this.element_.offsetWidth/2);var marginTop=-1*(this.element_.offsetHeight/2);if(this.element_.classList.contains(this.CssClasses_.LEFT)||this.element_.classList.contains(this.CssClasses_.RIGHT)){left=props.width/2;if(top+marginTop<0){this.element_.style.top=0;this.element_.style.marginTop=0;}else {this.element_.style.top=top+'px';this.element_.style.marginTop=marginTop+'px';}}else {if(left+marginLeft<0){this.element_.style.left=0;this.element_.style.marginLeft=0;}else {this.element_.style.left=left+'px';this.element_.style.marginLeft=marginLeft+'px';}}if(this.element_.classList.contains(this.CssClasses_.TOP)){this.element_.style.top=props.top-this.element_.offsetHeight-10+'px';}else if(this.element_.classList.contains(this.CssClasses_.RIGHT)){this.element_.style.left=props.left+props.width+10+'px';}else if(this.element_.classList.contains(this.CssClasses_.LEFT)){this.element_.style.left=props.left-this.element_.offsetWidth-10+'px';}else {this.element_.style.top=props.top+props.height+10+'px';}this.element_.classList.add(this.CssClasses_.IS_ACTIVE);}; /**
	   * Handle mouseleave for tooltip.
	   *
	   * @private
	   */MaterialTooltip.prototype.handleMouseLeave_=function(){this.element_.classList.remove(this.CssClasses_.IS_ACTIVE);}; /**
	   * Initialize element.
	   */MaterialTooltip.prototype.init=function(){if(this.element_){var forElId=this.element_.getAttribute('for');if(forElId){this.forElement_=document.getElementById(forElId);}if(this.forElement_){ // It's left here because it prevents accidental text selection on Android
	if(!this.forElement_.hasAttribute('tabindex')){this.forElement_.setAttribute('tabindex','0');}this.boundMouseEnterHandler=this.handleMouseEnter_.bind(this);this.boundMouseLeaveHandler=this.handleMouseLeave_.bind(this);this.forElement_.addEventListener('mouseenter',this.boundMouseEnterHandler,false);this.forElement_.addEventListener('touchend',this.boundMouseEnterHandler,false);this.forElement_.addEventListener('mouseleave',this.boundMouseLeaveHandler,false);window.addEventListener('touchstart',this.boundMouseLeaveHandler);}}}; // The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({constructor:MaterialTooltip,classAsString:'MaterialTooltip',cssClass:'mdl-tooltip'}); /**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ /**
	   * Class constructor for Layout MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */var MaterialLayout=function MaterialLayout(element){this.element_=element;this.innerContainer_=element.querySelector('.'+this.CssClasses_.INNER_CONTAINER); // Initialize instance.
	this.init();};window['MaterialLayout']=MaterialLayout; /**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */MaterialLayout.prototype.Constant_={MAX_WIDTH:'(max-width: 1024px)',TAB_SCROLL_PIXELS:100,RESIZE_TIMEOUT:100,MENU_ICON:'&#xE5D2;',CHEVRON_LEFT:'chevron_left',CHEVRON_RIGHT:'chevron_right'}; /**
	   * Keycodes, for code readability.
	   *
	   * @enum {number}
	   * @private
	   */MaterialLayout.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32}; /**
	   * Modes.
	   *
	   * @enum {number}
	   * @private
	   */MaterialLayout.prototype.Mode_={STANDARD:0,SEAMED:1,WATERFALL:2,SCROLL:3}; /**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */MaterialLayout.prototype.CssClasses_={INNER_CONTAINER:'mdl-layout__inner-container',HEADER:'mdl-layout__header',DRAWER:'mdl-layout__drawer',CONTENT:'mdl-layout__content',DRAWER_BTN:'mdl-layout__drawer-button',ICON:'material-icons',JS_RIPPLE_EFFECT:'mdl-js-ripple-effect',RIPPLE_CONTAINER:'mdl-layout__tab-ripple-container',RIPPLE:'mdl-ripple',RIPPLE_IGNORE_EVENTS:'mdl-js-ripple-effect--ignore-events',HEADER_SEAMED:'mdl-layout__header--seamed',HEADER_WATERFALL:'mdl-layout__header--waterfall',HEADER_SCROLL:'mdl-layout__header--scroll',FIXED_HEADER:'mdl-layout--fixed-header',OBFUSCATOR:'mdl-layout__obfuscator',TAB_BAR:'mdl-layout__tab-bar',TAB_CONTAINER:'mdl-layout__tab-bar-container',TAB:'mdl-layout__tab',TAB_BAR_BUTTON:'mdl-layout__tab-bar-button',TAB_BAR_LEFT_BUTTON:'mdl-layout__tab-bar-left-button',TAB_BAR_RIGHT_BUTTON:'mdl-layout__tab-bar-right-button',PANEL:'mdl-layout__tab-panel',HAS_DRAWER:'has-drawer',HAS_TABS:'has-tabs',HAS_SCROLLING_HEADER:'has-scrolling-header',CASTING_SHADOW:'is-casting-shadow',IS_COMPACT:'is-compact',IS_SMALL_SCREEN:'is-small-screen',IS_DRAWER_OPEN:'is-visible',IS_ACTIVE:'is-active',IS_UPGRADED:'is-upgraded',IS_ANIMATING:'is-animating',ON_LARGE_SCREEN:'mdl-layout--large-screen-only',ON_SMALL_SCREEN:'mdl-layout--small-screen-only'}; /**
	   * Handles scrolling on the content.
	   *
	   * @private
	   */MaterialLayout.prototype.contentScrollHandler_=function(){if(this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)){return;}var headerVisible=!this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN)||this.element_.classList.contains(this.CssClasses_.FIXED_HEADER);if(this.content_.scrollTop>0&&!this.header_.classList.contains(this.CssClasses_.IS_COMPACT)){this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);this.header_.classList.add(this.CssClasses_.IS_COMPACT);if(headerVisible){this.header_.classList.add(this.CssClasses_.IS_ANIMATING);}}else if(this.content_.scrollTop<=0&&this.header_.classList.contains(this.CssClasses_.IS_COMPACT)){this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);this.header_.classList.remove(this.CssClasses_.IS_COMPACT);if(headerVisible){this.header_.classList.add(this.CssClasses_.IS_ANIMATING);}}}; /**
	   * Handles a keyboard event on the drawer.
	   *
	   * @param {Event} evt The event that fired.
	   * @private
	   */MaterialLayout.prototype.keyboardEventHandler_=function(evt){ // Only react when the drawer is open.
	if(evt.keyCode===this.Keycodes_.ESCAPE&&this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)){this.toggleDrawer();}}; /**
	   * Handles changes in screen size.
	   *
	   * @private
	   */MaterialLayout.prototype.screenSizeHandler_=function(){if(this.screenSizeMediaQuery_.matches){this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN);}else {this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN); // Collapse drawer (if any) when moving to a large screen size.
	if(this.drawer_){this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);}}}; /**
	   * Handles events of drawer button.
	   *
	   * @param {Event} evt The event that fired.
	   * @private
	   */MaterialLayout.prototype.drawerToggleHandler_=function(evt){if(evt&&evt.type==='keydown'){if(evt.keyCode===this.Keycodes_.SPACE||evt.keyCode===this.Keycodes_.ENTER){ // prevent scrolling in drawer nav
	evt.preventDefault();}else { // prevent other keys
	return;}}this.toggleDrawer();}; /**
	   * Handles (un)setting the `is-animating` class
	   *
	   * @private
	   */MaterialLayout.prototype.headerTransitionEndHandler_=function(){this.header_.classList.remove(this.CssClasses_.IS_ANIMATING);}; /**
	   * Handles expanding the header on click
	   *
	   * @private
	   */MaterialLayout.prototype.headerClickHandler_=function(){if(this.header_.classList.contains(this.CssClasses_.IS_COMPACT)){this.header_.classList.remove(this.CssClasses_.IS_COMPACT);this.header_.classList.add(this.CssClasses_.IS_ANIMATING);}}; /**
	   * Reset tab state, dropping active classes
	   *
	   * @private
	   */MaterialLayout.prototype.resetTabState_=function(tabBar){for(var k=0;k<tabBar.length;k++){tabBar[k].classList.remove(this.CssClasses_.IS_ACTIVE);}}; /**
	   * Reset panel state, droping active classes
	   *
	   * @private
	   */MaterialLayout.prototype.resetPanelState_=function(panels){for(var j=0;j<panels.length;j++){panels[j].classList.remove(this.CssClasses_.IS_ACTIVE);}}; /**
	  * Toggle drawer state
	  *
	  * @public
	  */MaterialLayout.prototype.toggleDrawer=function(){var drawerButton=this.innerContainer_.querySelector('.'+this.CssClasses_.DRAWER_BTN);this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN); // Set accessibility properties.
	if(this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)){this.drawer_.setAttribute('aria-hidden','false');drawerButton.setAttribute('aria-expanded','true');}else {this.drawer_.setAttribute('aria-hidden','true');drawerButton.setAttribute('aria-expanded','false');}};MaterialLayout.prototype['toggleDrawer']=MaterialLayout.prototype.toggleDrawer; /**
	   * Initialize element.
	   */MaterialLayout.prototype.init=function(){if(this.element_){var focusedElement=this.element_.querySelector(':focus');if(focusedElement){focusedElement.focus();}var directChildren=this.innerContainer_.childNodes;var numChildren=directChildren.length;for(var c=0;c<numChildren;c++){var child=directChildren[c];if(child.classList&&child.classList.contains(this.CssClasses_.HEADER)){this.header_=child;}if(child.classList&&child.classList.contains(this.CssClasses_.DRAWER)){this.drawer_=child;}if(child.classList&&child.classList.contains(this.CssClasses_.CONTENT)){this.content_=child;}}window.addEventListener('pageshow',function(e){if(e.persisted){ // when page is loaded from back/forward cache
	// trigger repaint to let layout scroll in safari
	this.innerContainer_.style.overflowY='hidden';requestAnimationFrame(function(){this.innerContainer_.style.overflowY='';}.bind(this));}}.bind(this),false);if(this.header_){this.tabBar_=this.header_.querySelector('.'+this.CssClasses_.TAB_BAR);}var mode=this.Mode_.STANDARD;if(this.header_){if(this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)){mode=this.Mode_.SEAMED;}else if(this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)){mode=this.Mode_.WATERFALL;this.header_.addEventListener('transitionend',this.headerTransitionEndHandler_.bind(this));this.header_.addEventListener('click',this.headerClickHandler_.bind(this));}else if(this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)){mode=this.Mode_.SCROLL;this.element_.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER);}if(mode===this.Mode_.STANDARD){this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);if(this.tabBar_){this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW);}}else if(mode===this.Mode_.SEAMED||mode===this.Mode_.SCROLL){this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);if(this.tabBar_){this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW);}}else if(mode===this.Mode_.WATERFALL){ // Add and remove shadows depending on scroll position.
	// Also add/remove auxiliary class for styling of the compact version of
	// the header.
	this.content_.addEventListener('scroll',this.contentScrollHandler_.bind(this));this.contentScrollHandler_();}} // Add drawer toggling button to our layout, if we have an openable drawer.
	if(this.drawer_){var drawerButton=document.createElement('div');drawerButton.setAttribute('aria-expanded','false');drawerButton.setAttribute('role','button');drawerButton.setAttribute('tabindex','0');drawerButton.classList.add(this.CssClasses_.DRAWER_BTN);var drawerButtonIcon=document.createElement('i');drawerButtonIcon.classList.add(this.CssClasses_.ICON);drawerButtonIcon.innerHTML=this.Constant_.MENU_ICON;drawerButton.appendChild(drawerButtonIcon);if(this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)){ //If drawer has ON_LARGE_SCREEN class then add it to the drawer toggle button as well.
	drawerButton.classList.add(this.CssClasses_.ON_LARGE_SCREEN);}else if(this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)){ //If drawer has ON_SMALL_SCREEN class then add it to the drawer toggle button as well.
	drawerButton.classList.add(this.CssClasses_.ON_SMALL_SCREEN);}drawerButton.addEventListener('click',this.drawerToggleHandler_.bind(this));drawerButton.addEventListener('keydown',this.drawerToggleHandler_.bind(this)); // Add a class if the layout has a drawer, for altering the left padding.
	// Adds the HAS_DRAWER to the elements since this.header_ may or may
	// not be present.
	this.element_.classList.add(this.CssClasses_.HAS_DRAWER); // If we have a fixed header, add the button to the header rather than
	// the layout.
	if(this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)){this.header_.insertBefore(drawerButton,this.header_.firstChild);}else {this.innerContainer_.insertBefore(drawerButton,this.content_);}var obfuscator=document.createElement('div');obfuscator.classList.add(this.CssClasses_.OBFUSCATOR);this.innerContainer_.appendChild(obfuscator);obfuscator.addEventListener('click',this.drawerToggleHandler_.bind(this));this.obfuscator_=obfuscator;this.drawer_.addEventListener('keydown',this.keyboardEventHandler_.bind(this));this.drawer_.setAttribute('aria-hidden','true');} // Keep an eye on screen size, and add/remove auxiliary class for styling
	// of small screens.
	this.screenSizeMediaQuery_=window.matchMedia(this.Constant_.MAX_WIDTH);this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this));this.screenSizeHandler_(); // Initialize tabs, if any.
	if(this.header_&&this.tabBar_){this.element_.classList.add(this.CssClasses_.HAS_TABS);var tabContainer=document.createElement('div');tabContainer.classList.add(this.CssClasses_.TAB_CONTAINER);this.header_.insertBefore(tabContainer,this.tabBar_);this.header_.removeChild(this.tabBar_);var leftButton=document.createElement('div');leftButton.classList.add(this.CssClasses_.TAB_BAR_BUTTON);leftButton.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);var leftButtonIcon=document.createElement('i');leftButtonIcon.classList.add(this.CssClasses_.ICON);leftButtonIcon.textContent=this.Constant_.CHEVRON_LEFT;leftButton.appendChild(leftButtonIcon);leftButton.addEventListener('click',function(){this.tabBar_.scrollLeft-=this.Constant_.TAB_SCROLL_PIXELS;}.bind(this));var rightButton=document.createElement('div');rightButton.classList.add(this.CssClasses_.TAB_BAR_BUTTON);rightButton.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);var rightButtonIcon=document.createElement('i');rightButtonIcon.classList.add(this.CssClasses_.ICON);rightButtonIcon.textContent=this.Constant_.CHEVRON_RIGHT;rightButton.appendChild(rightButtonIcon);rightButton.addEventListener('click',function(){this.tabBar_.scrollLeft+=this.Constant_.TAB_SCROLL_PIXELS;}.bind(this));tabContainer.appendChild(leftButton);tabContainer.appendChild(this.tabBar_);tabContainer.appendChild(rightButton); // Add and remove tab buttons depending on scroll position and total
	// window size.
	var tabUpdateHandler=function(){if(this.tabBar_.scrollLeft>0){leftButton.classList.add(this.CssClasses_.IS_ACTIVE);}else {leftButton.classList.remove(this.CssClasses_.IS_ACTIVE);}if(this.tabBar_.scrollLeft<this.tabBar_.scrollWidth-this.tabBar_.offsetWidth){rightButton.classList.add(this.CssClasses_.IS_ACTIVE);}else {rightButton.classList.remove(this.CssClasses_.IS_ACTIVE);}}.bind(this);this.tabBar_.addEventListener('scroll',tabUpdateHandler);tabUpdateHandler(); // Update tabs when the window resizes.
	var windowResizeHandler=function(){ // Use timeouts to make sure it doesn't happen too often.
	if(this.resizeTimeoutId_){clearTimeout(this.resizeTimeoutId_);}this.resizeTimeoutId_=setTimeout(function(){tabUpdateHandler();this.resizeTimeoutId_=null;}.bind(this),this.Constant_.RESIZE_TIMEOUT);}.bind(this);window.addEventListener('resize',windowResizeHandler);if(this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)){this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);} // Select element tabs, document panels
	var tabs=this.tabBar_.querySelectorAll('.'+this.CssClasses_.TAB);var panels=this.content_.querySelectorAll('.'+this.CssClasses_.PANEL); // Create new tabs for each tab element
	for(var i=0;i<tabs.length;i++){new MaterialLayoutTab(tabs[i],tabs,panels,this);}}this.element_.classList.add(this.CssClasses_.IS_UPGRADED);}}; /**
	   * Constructor for an individual tab.
	   *
	   * @constructor
	   * @param {HTMLElement} tab The HTML element for the tab.
	   * @param {!Array<HTMLElement>} tabs Array with HTML elements for all tabs.
	   * @param {!Array<HTMLElement>} panels Array with HTML elements for all panels.
	   * @param {MaterialLayout} layout The MaterialLayout object that owns the tab.
	   */function MaterialLayoutTab(tab,tabs,panels,layout){ /**
	     * Auxiliary method to programmatically select a tab in the UI.
	     */function selectTab(){var href=tab.href.split('#')[1];var panel=layout.content_.querySelector('#'+href);layout.resetTabState_(tabs);layout.resetPanelState_(panels);tab.classList.add(layout.CssClasses_.IS_ACTIVE);panel.classList.add(layout.CssClasses_.IS_ACTIVE);}if(layout.tabBar_.classList.contains(layout.CssClasses_.JS_RIPPLE_EFFECT)){var rippleContainer=document.createElement('span');rippleContainer.classList.add(layout.CssClasses_.RIPPLE_CONTAINER);rippleContainer.classList.add(layout.CssClasses_.JS_RIPPLE_EFFECT);var ripple=document.createElement('span');ripple.classList.add(layout.CssClasses_.RIPPLE);rippleContainer.appendChild(ripple);tab.appendChild(rippleContainer);}tab.addEventListener('click',function(e){if(tab.getAttribute('href').charAt(0)==='#'){e.preventDefault();selectTab();}});tab.show=selectTab;}window['MaterialLayoutTab']=MaterialLayoutTab; // The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({constructor:MaterialLayout,classAsString:'MaterialLayout',cssClass:'mdl-js-layout'}); /**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ /**
	   * Class constructor for Data Table Card MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {Element} element The element that will be upgraded.
	   */var MaterialDataTable=function MaterialDataTable(element){this.element_=element; // Initialize instance.
	this.init();};window['MaterialDataTable']=MaterialDataTable; /**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */MaterialDataTable.prototype.Constant_={}; /**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */MaterialDataTable.prototype.CssClasses_={DATA_TABLE:'mdl-data-table',SELECTABLE:'mdl-data-table--selectable',SELECT_ELEMENT:'mdl-data-table__select',IS_SELECTED:'is-selected',IS_UPGRADED:'is-upgraded'}; /**
	   * Generates and returns a function that toggles the selection state of a
	   * single row (or multiple rows).
	   *
	   * @param {Element} checkbox Checkbox that toggles the selection state.
	   * @param {Element} row Row to toggle when checkbox changes.
	   * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.
	   * @private
	   */MaterialDataTable.prototype.selectRow_=function(checkbox,row,opt_rows){if(row){return function(){if(checkbox.checked){row.classList.add(this.CssClasses_.IS_SELECTED);}else {row.classList.remove(this.CssClasses_.IS_SELECTED);}}.bind(this);}if(opt_rows){return function(){var i;var el;if(checkbox.checked){for(i=0;i<opt_rows.length;i++){el=opt_rows[i].querySelector('td').querySelector('.mdl-checkbox');el['MaterialCheckbox'].check();opt_rows[i].classList.add(this.CssClasses_.IS_SELECTED);}}else {for(i=0;i<opt_rows.length;i++){el=opt_rows[i].querySelector('td').querySelector('.mdl-checkbox');el['MaterialCheckbox'].uncheck();opt_rows[i].classList.remove(this.CssClasses_.IS_SELECTED);}}}.bind(this);}}; /**
	   * Creates a checkbox for a single or or multiple rows and hooks up the
	   * event handling.
	   *
	   * @param {Element} row Row to toggle when checkbox changes.
	   * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.
	   * @private
	   */MaterialDataTable.prototype.createCheckbox_=function(row,opt_rows){var label=document.createElement('label');var labelClasses=['mdl-checkbox','mdl-js-checkbox','mdl-js-ripple-effect',this.CssClasses_.SELECT_ELEMENT];label.className=labelClasses.join(' ');var checkbox=document.createElement('input');checkbox.type='checkbox';checkbox.classList.add('mdl-checkbox__input');if(row){checkbox.checked=row.classList.contains(this.CssClasses_.IS_SELECTED);checkbox.addEventListener('change',this.selectRow_(checkbox,row));}else if(opt_rows){checkbox.addEventListener('change',this.selectRow_(checkbox,null,opt_rows));}label.appendChild(checkbox);componentHandler.upgradeElement(label,'MaterialCheckbox');return label;}; /**
	   * Initialize element.
	   */MaterialDataTable.prototype.init=function(){if(this.element_){var firstHeader=this.element_.querySelector('th');var bodyRows=Array.prototype.slice.call(this.element_.querySelectorAll('tbody tr'));var footRows=Array.prototype.slice.call(this.element_.querySelectorAll('tfoot tr'));var rows=bodyRows.concat(footRows);if(this.element_.classList.contains(this.CssClasses_.SELECTABLE)){var th=document.createElement('th');var headerCheckbox=this.createCheckbox_(null,rows);th.appendChild(headerCheckbox);firstHeader.parentElement.insertBefore(th,firstHeader);for(var i=0;i<rows.length;i++){var firstCell=rows[i].querySelector('td');if(firstCell){var td=document.createElement('td');if(rows[i].parentNode.nodeName.toUpperCase()==='TBODY'){var rowCheckbox=this.createCheckbox_(rows[i]);td.appendChild(rowCheckbox);}rows[i].insertBefore(td,firstCell);}}this.element_.classList.add(this.CssClasses_.IS_UPGRADED);}}}; // The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({constructor:MaterialDataTable,classAsString:'MaterialDataTable',cssClass:'mdl-js-data-table'}); /**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ /**
	   * Class constructor for Ripple MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */var MaterialRipple=function MaterialRipple(element){this.element_=element; // Initialize instance.
	this.init();};window['MaterialRipple']=MaterialRipple; /**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */MaterialRipple.prototype.Constant_={INITIAL_SCALE:'scale(0.0001, 0.0001)',INITIAL_SIZE:'1px',INITIAL_OPACITY:'0.4',FINAL_OPACITY:'0',FINAL_SCALE:''}; /**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */MaterialRipple.prototype.CssClasses_={RIPPLE_CENTER:'mdl-ripple--center',RIPPLE_EFFECT_IGNORE_EVENTS:'mdl-js-ripple-effect--ignore-events',RIPPLE:'mdl-ripple',IS_ANIMATING:'is-animating',IS_VISIBLE:'is-visible'}; /**
	   * Handle mouse / finger down on element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialRipple.prototype.downHandler_=function(event){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var rect=this.element_.getBoundingClientRect();this.boundHeight=rect.height;this.boundWidth=rect.width;this.rippleSize_=Math.sqrt(rect.width*rect.width+rect.height*rect.height)*2+2;this.rippleElement_.style.width=this.rippleSize_+'px';this.rippleElement_.style.height=this.rippleSize_+'px';}this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE);if(event.type==='mousedown'&&this.ignoringMouseDown_){this.ignoringMouseDown_=false;}else {if(event.type==='touchstart'){this.ignoringMouseDown_=true;}var frameCount=this.getFrameCount();if(frameCount>0){return;}this.setFrameCount(1);var bound=event.currentTarget.getBoundingClientRect();var x;var y; // Check if we are handling a keyboard click.
	if(event.clientX===0&&event.clientY===0){x=Math.round(bound.width/2);y=Math.round(bound.height/2);}else {var clientX=event.clientX?event.clientX:event.touches[0].clientX;var clientY=event.clientY?event.clientY:event.touches[0].clientY;x=Math.round(clientX-bound.left);y=Math.round(clientY-bound.top);}this.setRippleXY(x,y);this.setRippleStyles(true);window.requestAnimationFrame(this.animFrameHandler.bind(this));}}; /**
	   * Handle mouse / finger up on element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */MaterialRipple.prototype.upHandler_=function(event){ // Don't fire for the artificial "mouseup" generated by a double-click.
	if(event&&event.detail!==2){ // Allow a repaint to occur before removing this class, so the animation
	// shows for tap events, which seem to trigger a mouseup too soon after
	// mousedown.
	window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE);}.bind(this),0);}}; /**
	   * Initialize element.
	   */MaterialRipple.prototype.init=function(){if(this.element_){var recentering=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);if(!this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)){this.rippleElement_=this.element_.querySelector('.'+this.CssClasses_.RIPPLE);this.frameCount_=0;this.rippleSize_=0;this.x_=0;this.y_=0; // Touch start produces a compat mouse down event, which would cause a
	// second ripples. To avoid that, we use this property to ignore the first
	// mouse down after a touch start.
	this.ignoringMouseDown_=false;this.boundDownHandler=this.downHandler_.bind(this);this.element_.addEventListener('mousedown',this.boundDownHandler);this.element_.addEventListener('touchstart',this.boundDownHandler);this.boundUpHandler=this.upHandler_.bind(this);this.element_.addEventListener('mouseup',this.boundUpHandler);this.element_.addEventListener('mouseleave',this.boundUpHandler);this.element_.addEventListener('touchend',this.boundUpHandler);this.element_.addEventListener('blur',this.boundUpHandler); /**
	         * Getter for frameCount_.
	         * @return {number} the frame count.
	         */this.getFrameCount=function(){return this.frameCount_;}; /**
	         * Setter for frameCount_.
	         * @param {number} fC the frame count.
	         */this.setFrameCount=function(fC){this.frameCount_=fC;}; /**
	         * Getter for rippleElement_.
	         * @return {Element} the ripple element.
	         */this.getRippleElement=function(){return this.rippleElement_;}; /**
	         * Sets the ripple X and Y coordinates.
	         * @param  {number} newX the new X coordinate
	         * @param  {number} newY the new Y coordinate
	         */this.setRippleXY=function(newX,newY){this.x_=newX;this.y_=newY;}; /**
	         * Sets the ripple styles.
	         * @param  {boolean} start whether or not this is the start frame.
	         */this.setRippleStyles=function(start){if(this.rippleElement_!==null){var transformString;var scale;var size;var offset='translate('+this.x_+'px, '+this.y_+'px)';if(start){scale=this.Constant_.INITIAL_SCALE;size=this.Constant_.INITIAL_SIZE;}else {scale=this.Constant_.FINAL_SCALE;size=this.rippleSize_+'px';if(recentering){offset='translate('+this.boundWidth/2+'px, '+this.boundHeight/2+'px)';}}transformString='translate(-50%, -50%) '+offset+scale;this.rippleElement_.style.webkitTransform=transformString;this.rippleElement_.style.msTransform=transformString;this.rippleElement_.style.transform=transformString;if(start){this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING);}else {this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING);}}}; /**
	         * Handles an animation frame.
	         */this.animFrameHandler=function(){if(this.frameCount_-->0){window.requestAnimationFrame(this.animFrameHandler.bind(this));}else {this.setRippleStyles(false);}};}}}; // The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({constructor:MaterialRipple,classAsString:'MaterialRipple',cssClass:'mdl-js-ripple-effect',widget:false});})();

/***/ }
]);