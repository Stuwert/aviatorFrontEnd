webpackJsonp([0,3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(153);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _main = __webpack_require__(154);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_main2.default, null), document.querySelector('#app')); // require('./main.css')

/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _canvas = __webpack_require__(155);

	var _canvas2 = _interopRequireDefault(_canvas);

	var _Game = __webpack_require__(156);

	var _Game2 = _interopRequireDefault(_Game);

	var _SheepActive = __webpack_require__(164);

	var _SheepActive2 = _interopRequireDefault(_SheepActive);

	var _SheepLost = __webpack_require__(165);

	var _SheepLost2 = _interopRequireDefault(_SheepLost);

	var _SheepPenned = __webpack_require__(166);

	var _SheepPenned2 = _interopRequireDefault(_SheepPenned);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import ReactDOM from 'react-dom';


	var game = new _Game2.default(2);

	var keysDown = {};

	addEventListener('keydown', function (e) {
	  e.preventDefault();
	  keysDown[e.keyCode] = true;
	  game.setKeysDown(keysDown);
	}, false);

	addEventListener('keyup', function (e) {
	  delete keysDown[e.keyCode];
	  game.setKeysDown(keysDown);
	}, false);

	var onFire = new Event('gameUpdate');

	game.initializeGame(onFire);
	game.render();
	game.main();

	var SheepGame = function (_React$Component) {
	  _inherits(SheepGame, _React$Component);

	  function SheepGame() {
	    _classCallCheck(this, SheepGame);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SheepGame).call(this));

	    _this.state = {
	      activeSheep: game.sheepActiveNumber,
	      lostSheep: game.sheepLostNumber,
	      pennedSheep: game.sheepPennedNumber
	    };
	    return _this;
	  }

	  _createClass(SheepGame, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      addEventListener('gameUpdate', this.updateInformation.bind(this));
	    }
	  }, {
	    key: 'updateInformation',
	    value: function updateInformation() {
	      this.setState({
	        activeSheep: game.sheepActiveNumber,
	        lostSheep: game.sheepLostNumber,
	        pennedSheep: game.sheepPennedNumber
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'main' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_canvas2.default, { canvas: game.canvas })
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_SheepActive2.default, { number: this.state.activeSheep }),
	          _react2.default.createElement(_SheepLost2.default, { number: this.state.lostSheep }),
	          _react2.default.createElement(_SheepPenned2.default, { number: this.state.pennedSheep })
	        )
	      );
	    }
	  }]);

	  return SheepGame;
	}(_react2.default.Component);

	exports.default = SheepGame;

/***/ },

/***/ 155:
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
	      this.props.canvas.width = 512;
	      this.props.canvas.height = 512;
	      _reactDom2.default.findDOMNode(this).appendChild(this.props.canvas);
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

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Dog = __webpack_require__(157);

	var _Dog2 = _interopRequireDefault(_Dog);

	var _Pen = __webpack_require__(159);

	var _Pen2 = _interopRequireDefault(_Pen);

	var _SheepGroup = __webpack_require__(161);

	var _SheepGroup2 = _interopRequireDefault(_SheepGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Game = function () {
	  function Game(sheepNum) {
	    _classCallCheck(this, Game);

	    this.sheep = new _SheepGroup2.default(sheepNum);
	    this.dog = new _Dog2.default();
	    this.pen = new _Pen2.default();
	    this.canvas = document.createElement('canvas');
	    this.ctx = this.canvas.getContext('2d');
	    this.now = Date.now();
	    this.then = Date.now();
	    this.keysDown = {};
	    this.sheepPennedNumber = 0;
	    this.sheepLostNumber = 0;
	    this.sheepActiveNumber = sheepNum;
	    this.eventToDispatch = null;
	  }

	  _createClass(Game, [{
	    key: 'update',
	    value: function update(modifier) {
	      this.dog.update(modifier, this.keysDown);
	      this.sheep.update(modifier, this.dog, this.pen);
	      this.sheepPennedNumber = this.sheep.pennedSheep.length;
	      this.sheepLostNumber = this.sheep.lostSheep.length;
	      this.sheepActiveNumber = this.sheep.activeSheep.length;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.ctx.fillStyle = 'rgb(67,247,51)';
	      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	      this.ctx.drawImage(this.dog.image, this.dog.x, this.dog.y);
	      this.ctx.drawImage(this.pen.image, this.pen.boundaries.xBounds[0], this.pen.boundaries.yBounds[0]);
	      this.sheep.render(this.ctx);
	    }
	  }, {
	    key: 'main',
	    value: function main() {
	      this.now = Date.now();
	      this.delta = this.now - this.then;
	      this.update(this.delta / 1000);
	      if (!this.checkGameEnd()) {
	        this.then = this.now;
	        requestAnimationFrame(this.main.bind(this));
	      }
	      this.render();
	      dispatchEvent(this.eventToDispatch);
	    }
	  }, {
	    key: 'setKeysDown',
	    value: function setKeysDown(newObj) {
	      this.keysDown = newObj;
	    }
	  }, {
	    key: 'checkGameEnd',
	    value: function checkGameEnd() {
	      if (this.sheep.activeSheep.length === 0) {
	        // alert('Game is Over!')
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: 'initializeGame',
	    value: function initializeGame(eventToDispatch) {
	      var _this = this;

	      this.eventToDispatch = eventToDispatch;
	      this.sheep.activeSheep.forEach(function (eachSheep) {
	        return eachSheep.setPenLocation(_this.pen);
	      });
	    }
	  }]);

	  return Game;
	}();

	exports.default = Game;

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Dog = function Dog() {
	  _classCallCheck(this, Dog);

	  this.x = 0;
	  this.y = 0;
	  this.speed = 150;
	  this.image = new Image();
	  this.image.src = __webpack_require__(158);
	};

	exports.default = Dog;


	Dog.prototype.catchDog = function () {
	  if (this.x < 0) {
	    this.x = 0;
	  }
	  if (this.x > 497) {
	    this.x = 497;
	  }
	  if (this.y < 0) {
	    this.y = 0;
	  }
	  if (this.y > 497) {
	    this.y = 497;
	  }
	};

	Dog.prototype.update = function (modifier, keysDown) {
	  if (38 in keysDown) {
	    this.y -= this.speed * modifier;
	  }
	  if (40 in keysDown) {
	    this.y += this.speed * modifier;
	  }
	  if (37 in keysDown) {
	    this.x -= this.speed * modifier;
	  }
	  if (39 in keysDown) {
	    this.x += this.speed * modifier;
	  }
	  this.catchDog();
	};

/***/ },

/***/ 158:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAEDWlDQ1BJQ0MgUHJvZmlsZQAAOI2NVV1oHFUUPrtzZyMkzlNsNIV0qD8NJQ2TVjShtLp/3d02bpZJNtoi6GT27s6Yyc44M7v9oU9FUHwx6psUxL+3gCAo9Q/bPrQvlQol2tQgKD60+INQ6Ium65k7M5lpurHeZe58853vnnvuuWfvBei5qliWkRQBFpquLRcy4nOHj4g9K5CEh6AXBqFXUR0rXalMAjZPC3e1W99Dwntf2dXd/p+tt0YdFSBxH2Kz5qgLiI8B8KdVy3YBevqRHz/qWh72Yui3MUDEL3q44WPXw3M+fo1pZuQs4tOIBVVTaoiXEI/MxfhGDPsxsNZfoE1q66ro5aJim3XdoLFw72H+n23BaIXzbcOnz5mfPoTvYVz7KzUl5+FRxEuqkp9G/Ajia219thzg25abkRE/BpDc3pqvphHvRFys2weqvp+krbWKIX7nhDbzLOItiM8358pTwdirqpPFnMF2xLc1WvLyOwTAibpbmvHHcvttU57y5+XqNZrLe3lE/Pq8eUj2fXKfOe3pfOjzhJYtB/yll5SDFcSDiH+hRkH25+L+sdxKEAMZahrlSX8ukqMOWy/jXW2m6M9LDBc31B9LFuv6gVKg/0Szi3KAr1kGq1GMjU/aLbnq6/lRxc4XfJ98hTargX++DbMJBSiYMIe9Ck1YAxFkKEAG3xbYaKmDDgYyFK0UGYpfoWYXG+fAPPI6tJnNwb7ClP7IyF+D+bjOtCpkhz6CFrIa/I6sFtNl8auFXGMTP34sNwI/JhkgEtmDz14ySfaRcTIBInmKPE32kxyyE2Tv+thKbEVePDfW/byMM1Kmm0XdObS7oGD/MypMXFPXrCwOtoYjyyn7BV29/MZfsVzpLDdRtuIZnbpXzvlf+ev8MvYr/Gqk4H/kV/G3csdazLuyTMPsbFhzd1UabQbjFvDRmcWJxR3zcfHkVw9GfpbJmeev9F08WW8uDkaslwX6avlWGU6NRKz0g/SHtCy9J30o/ca9zX3Kfc19zn3BXQKRO8ud477hLnAfc1/G9mrzGlrfexZ5GLdn6ZZrrEohI2wVHhZywjbhUWEy8icMCGNCUdiBlq3r+xafL549HQ5jH+an+1y+LlYBifuxAvRN/lVVVOlwlCkdVm9NOL5BE4wkQ2SMlDZU97hX86EilU/lUmkQUztTE6mx1EEPh7OmdqBtAvv8HdWpbrJS6tJj3n0CWdM6busNzRV3S9KTYhqvNiqWmuroiKgYhshMjmhTh9ptWhsF7970j/SbMrsPE1suR5z7DMC+P/Hs+y7ijrQAlhyAgccjbhjPygfeBTjzhNqy28EdkUh8C+DU9+z2v/oyeH791OncxHOs5y2AtTc7nb/f73TWPkD/qwBnjX8BoJ98VVBg/m8AAAAgSURBVCgVY/Tx8fnPQCZgIlMfWNuoZhJDbzTARkaAAQDyHwIBQmHlpwAAAABJRU5ErkJggg=="

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Pen = function Pen() {
	  _classCallCheck(this, Pen);

	  this.image = new Image();
	  this.image.src = __webpack_require__(160);
	  this.boundaries = {
	    xBounds: [250, 300],
	    yBounds: [250, 300]
	  };
	  this.type = 'pen';
	};

	exports.default = Pen;

/***/ },

/***/ 160:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAEDWlDQ1BJQ0MgUHJvZmlsZQAAOI2NVV1oHFUUPrtzZyMkzlNsNIV0qD8NJQ2TVjShtLp/3d02bpZJNtoi6GT27s6Yyc44M7v9oU9FUHwx6psUxL+3gCAo9Q/bPrQvlQol2tQgKD60+INQ6Ium65k7M5lpurHeZe58853vnnvuuWfvBei5qliWkRQBFpquLRcy4nOHj4g9K5CEh6AXBqFXUR0rXalMAjZPC3e1W99Dwntf2dXd/p+tt0YdFSBxH2Kz5qgLiI8B8KdVy3YBevqRHz/qWh72Yui3MUDEL3q44WPXw3M+fo1pZuQs4tOIBVVTaoiXEI/MxfhGDPsxsNZfoE1q66ro5aJim3XdoLFw72H+n23BaIXzbcOnz5mfPoTvYVz7KzUl5+FRxEuqkp9G/Ajia219thzg25abkRE/BpDc3pqvphHvRFys2weqvp+krbWKIX7nhDbzLOItiM8358pTwdirqpPFnMF2xLc1WvLyOwTAibpbmvHHcvttU57y5+XqNZrLe3lE/Pq8eUj2fXKfOe3pfOjzhJYtB/yll5SDFcSDiH+hRkH25+L+sdxKEAMZahrlSX8ukqMOWy/jXW2m6M9LDBc31B9LFuv6gVKg/0Szi3KAr1kGq1GMjU/aLbnq6/lRxc4XfJ98hTargX++DbMJBSiYMIe9Ck1YAxFkKEAG3xbYaKmDDgYyFK0UGYpfoWYXG+fAPPI6tJnNwb7ClP7IyF+D+bjOtCpkhz6CFrIa/I6sFtNl8auFXGMTP34sNwI/JhkgEtmDz14ySfaRcTIBInmKPE32kxyyE2Tv+thKbEVePDfW/byMM1Kmm0XdObS7oGD/MypMXFPXrCwOtoYjyyn7BV29/MZfsVzpLDdRtuIZnbpXzvlf+ev8MvYr/Gqk4H/kV/G3csdazLuyTMPsbFhzd1UabQbjFvDRmcWJxR3zcfHkVw9GfpbJmeev9F08WW8uDkaslwX6avlWGU6NRKz0g/SHtCy9J30o/ca9zX3Kfc19zn3BXQKRO8ud477hLnAfc1/G9mrzGlrfexZ5GLdn6ZZrrEohI2wVHhZywjbhUWEy8icMCGNCUdiBlq3r+xafL549HQ5jH+an+1y+LlYBifuxAvRN/lVVVOlwlCkdVm9NOL5BE4wkQ2SMlDZU97hX86EilU/lUmkQUztTE6mx1EEPh7OmdqBtAvv8HdWpbrJS6tJj3n0CWdM6busNzRV3S9KTYhqvNiqWmuroiKgYhshMjmhTh9ptWhsF7970j/SbMrsPE1suR5z7DMC+P/Hs+y7ijrQAlhyAgccjbhjPygfeBTjzhNqy28EdkUh8C+DU9+z2v/oyeH791OncxHOs5y2AtTc7nb/f73TWPkD/qwBnjX8BoJ98VVBg/m8AAABmSURBVEgN7dcxCgAgDAPAVnyYT+vT/JmCU3HIFOjQOCmFFK8ueiw7VrBGQc/Xsl/jmaljm+czc/+/pX7UujHzPcEsUUMeZlHUTE2YJWrIwyyKmqkJs0QNeZjFMmoP/SSYgwRZZTO+6eMGu0I7BzMAAAAASUVORK5CYII="

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _Sheep = __webpack_require__(162);

	var _Sheep2 = _interopRequireDefault(_Sheep);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SheepGroup = function SheepGroup(sheepNum) {
	  _classCallCheck(this, SheepGroup);

	  this.activeSheep = [];
	  for (var i = 0; i < sheepNum; i++) {
	    // currently a workaround to not having a better sheep generator
	    this.activeSheep.push(new _Sheep2.default(i * 50 + 10, i * 10 + 10));
	  }
	  this.lostSheep = [];
	  this.pennedSheep = [];
	};

	// Sheep.prototype.killSheep = function(sheep, i){
	//
	// }

	exports.default = SheepGroup;
	SheepGroup.prototype.penSheep = function (i) {
	  var sheepToPen = this.activeSheep.splice(i, 1);
	  this.pennedSheep.push(sheepToPen);
	};

	SheepGroup.prototype.loseSheep = function (i) {
	  var aLostSheep = this.activeSheep.splice(i, 1);
	  this.lostSheep.push(aLostSheep);
	};

	SheepGroup.prototype.render = function (ctx) {
	  this.activeSheep.forEach(function (sheep) {
	    ctx.fillStyle = 'rgb(250, 250, 250)';
	    ctx.drawImage(sheep.image, sheep.x - 5, sheep.y - 5);
	  });
	};

	SheepGroup.prototype.update = function (modifier, dog, pen) {
	  var that = this;
	  this.activeSheep.forEach(function (sheep, i) {
	    sheep.dogDistance(dog);
	    var otherSheep = that.activeSheep.slice(0, that.activeSheep.length);
	    otherSheep.splice(i, 1);
	    sheep.move(modifier, otherSheep);
	    if (sheep.collisionDetect(pen)) {
	      that.penSheep(i);
	    }
	    if (sheep.boundaryCollision()) {
	      that.loseSheep(i);
	    }
	  });
	};

	//need to make a for each sheep loop that does the following
	// finds dog dogDistance
	// finds other sheep
	// detects collisions
	// with sheep
	// with wolf
	// with boundaries
	// decides movement
	// moves

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SheepConstructor = function SheepConstructor(x, y) {
	  _classCallCheck(this, SheepConstructor);

	  this.x = x;
	  this.y = y;
	  this.nearestWallDirection = [null, null];
	  this.boundaries = {
	    xBounds: [this.x - 5, this.x + 5],
	    yBounds: [this.y - 5, this.y + 5]
	  };
	  this.speed = 35;
	  this.dogDistanceLength = null;
	  this.deltaY = 0;
	  this.deltaX = 0;
	  this.penLocation;
	  this.image = new Image();
	  this.image.src = __webpack_require__(163);
	};

	// need to randomize sheep position on construction or cheat.

	exports.default = SheepConstructor;
	SheepConstructor.prototype.dogDistance = function (dog) {
	  this.deltaX = this.x - dog.x;
	  this.deltaY = this.y - dog.y;
	  var deltaSquared = Math.pow(this.deltaX, 2) + Math.pow(this.deltaY, 2);
	  this.dogDistanceLength = Math.sqrt(deltaSquared);
	};

	SheepConstructor.prototype.move = function (modifier, otherSheep) {
	  var potentialDirection = [this.x, this.y];
	  var newX = void 0,
	      newY = void 0;
	  var newBounds = void 0;
	  if (dogIsNear(this.dogDistanceLength)) {
	    potentialDirection = this.moveTowardsPen(modifier);
	  } else {
	    potentialDirection = this.moveTowardsWall.apply(this, [modifier].concat(_toConsumableArray(this.nearestWallDirection)));
	  }
	  if (otherSheep.length < 1 || !collideWithOtherSheep(newBoundaries.apply(undefined, _toConsumableArray(potentialDirection)), otherSheep)) {
	    newBounds = newBoundaries.apply(undefined, _toConsumableArray(potentialDirection));
	    newX = potentialDirection[0], newY = potentialDirection[1];
	  } else {
	    newBounds = newBoundaries(this.x, this.y);
	    newX = this.x, newY = this.y;
	  }
	  this.updateBoundaries(newBounds, newX, newY);
	  this.updateNearestWallDirection();
	};

	SheepConstructor.prototype.collisionDetect = function (gameObj) {
	  if (isIntersected(this.boundaries, gameObj.boundaries)) {
	    return true;
	  } else {
	    return false;
	  }
	};

	SheepConstructor.prototype.boundaryCollision = function () {
	  if (this.boundaries.xBounds[1] > 512 || this.boundaries.xBounds[0] < 0 || this.boundaries.yBounds[0] < 0 || this.boundaries.yBounds[1] > 512) {
	    return true;
	  }
	  return false;
	};

	SheepConstructor.prototype.updateBoundaries = function (newBounds, newX, newY) {
	  this.boundaries.xBounds = newBounds.xBounds;
	  this.boundaries.yBounds = newBounds.yBounds;
	  this.x = newX;
	  this.y = newY;
	};

	SheepConstructor.prototype.updateNearestWallDirection = function () {
	  var xWallDirection = 0;
	  var yWallDirection = 0;
	  if (this.x < 206) {
	    xWallDirection = -1;
	  } else if (this.x > 306) {
	    xWallDirection = 1;
	  }
	  if (this.y < 206) {
	    yWallDirection = -1;
	  } else if (this.y > 306) {
	    yWallDirection = 1;
	  }
	  this.nearestWallDirection = [xWallDirection, yWallDirection];
	};

	SheepConstructor.prototype.moveTowardsWall = function (modifier, xDirection, yDirection) {
	  var xMove = this.x += this.speed * modifier * xDirection;
	  var yMove = this.y += this.speed * modifier * yDirection;
	  return [xMove, yMove];
	};

	SheepConstructor.prototype.moveTowardsPen = function (modifier) {
	  var DAMPEN_DOG_EFFECT = 70;
	  var xDirection = (this.penLocation[0] - this.x) / Math.abs(this.x - this.penLocation[0]);
	  var yDirection = (this.penLocation[1] - this.y) / Math.abs(this.y - this.penLocation[1]);
	  var xMoveTowardsPen = this.speed * xDirection;
	  var yMoveTowardsPen = this.speed * yDirection;
	  var xDogDelta = this.deltaX * this.speed / DAMPEN_DOG_EFFECT;
	  var yDogDelta = this.deltaY * this.speed / DAMPEN_DOG_EFFECT;
	  var xMove = this.x += modifier * (xMoveTowardsPen + xDogDelta);
	  var yMove = this.y += modifier * (yMoveTowardsPen + yDogDelta);
	  return [xMove, yMove];
	};

	SheepConstructor.prototype.setPenLocation = function (pen) {
	  var xDirection = (pen.boundaries.xBounds[0] + pen.boundaries.xBounds[1]) / 2;
	  var yDirection = (pen.boundaries.yBounds[0] + pen.boundaries.yBounds[1]) / 2;
	  this.penLocation = [xDirection, yDirection];
	};

	function isIntersected(sheepBounds, collidingObjectBound) {
	  //takes two arrays, both should be in the same x/y coordinate plane
	  var xReturnable = false;
	  sheepBounds.xBounds.forEach(function (xBound) {
	    if (xBound > collidingObjectBound.xBounds[0] && xBound < collidingObjectBound.xBounds[1]) {
	      xReturnable = true;
	    }
	  });
	  var yReturnable = false;
	  sheepBounds.yBounds.forEach(function (yBound) {
	    if (yBound > collidingObjectBound.yBounds[0] && yBound < collidingObjectBound.yBounds[1]) {
	      yReturnable = true;
	    }
	  });
	  return xReturnable && yReturnable;
	}

	function newBoundaries(x, y) {
	  return {
	    xBounds: [x - 5, x + 5],
	    yBounds: [y - 5, y + 5]
	  };
	}

	function collideWithOtherSheep(thisSheepBoundaries, otherSheep) {
	  var returnable = false;

	  otherSheep.forEach(function (sheep) {
	    if (isIntersected(thisSheepBoundaries, sheep.boundaries)) {
	      returnable = true;
	    }
	  });

	  return returnable;
	}

	function dogIsNear(dist) {
	  var MAX_DOG_DISTANCE = 100;
	  return dist <= MAX_DOG_DISTANCE;
	}

	// SheepConstructor.prototype.wolfCollide = function(){
	//
	// }

/***/ },

/***/ 163:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAEDWlDQ1BJQ0MgUHJvZmlsZQAAOI2NVV1oHFUUPrtzZyMkzlNsNIV0qD8NJQ2TVjShtLp/3d02bpZJNtoi6GT27s6Yyc44M7v9oU9FUHwx6psUxL+3gCAo9Q/bPrQvlQol2tQgKD60+INQ6Ium65k7M5lpurHeZe58853vnnvuuWfvBei5qliWkRQBFpquLRcy4nOHj4g9K5CEh6AXBqFXUR0rXalMAjZPC3e1W99Dwntf2dXd/p+tt0YdFSBxH2Kz5qgLiI8B8KdVy3YBevqRHz/qWh72Yui3MUDEL3q44WPXw3M+fo1pZuQs4tOIBVVTaoiXEI/MxfhGDPsxsNZfoE1q66ro5aJim3XdoLFw72H+n23BaIXzbcOnz5mfPoTvYVz7KzUl5+FRxEuqkp9G/Ajia219thzg25abkRE/BpDc3pqvphHvRFys2weqvp+krbWKIX7nhDbzLOItiM8358pTwdirqpPFnMF2xLc1WvLyOwTAibpbmvHHcvttU57y5+XqNZrLe3lE/Pq8eUj2fXKfOe3pfOjzhJYtB/yll5SDFcSDiH+hRkH25+L+sdxKEAMZahrlSX8ukqMOWy/jXW2m6M9LDBc31B9LFuv6gVKg/0Szi3KAr1kGq1GMjU/aLbnq6/lRxc4XfJ98hTargX++DbMJBSiYMIe9Ck1YAxFkKEAG3xbYaKmDDgYyFK0UGYpfoWYXG+fAPPI6tJnNwb7ClP7IyF+D+bjOtCpkhz6CFrIa/I6sFtNl8auFXGMTP34sNwI/JhkgEtmDz14ySfaRcTIBInmKPE32kxyyE2Tv+thKbEVePDfW/byMM1Kmm0XdObS7oGD/MypMXFPXrCwOtoYjyyn7BV29/MZfsVzpLDdRtuIZnbpXzvlf+ev8MvYr/Gqk4H/kV/G3csdazLuyTMPsbFhzd1UabQbjFvDRmcWJxR3zcfHkVw9GfpbJmeev9F08WW8uDkaslwX6avlWGU6NRKz0g/SHtCy9J30o/ca9zX3Kfc19zn3BXQKRO8ud477hLnAfc1/G9mrzGlrfexZ5GLdn6ZZrrEohI2wVHhZywjbhUWEy8icMCGNCUdiBlq3r+xafL549HQ5jH+an+1y+LlYBifuxAvRN/lVVVOlwlCkdVm9NOL5BE4wkQ2SMlDZU97hX86EilU/lUmkQUztTE6mx1EEPh7OmdqBtAvv8HdWpbrJS6tJj3n0CWdM6busNzRV3S9KTYhqvNiqWmuroiKgYhshMjmhTh9ptWhsF7970j/SbMrsPE1suR5z7DMC+P/Hs+y7ijrQAlhyAgccjbhjPygfeBTjzhNqy28EdkUh8C+DU9+z2v/oyeH791OncxHOs5y2AtTc7nb/f73TWPkD/qwBnjX8BoJ98VVBg/m8AAAAdSURBVBgZY3z27Nl/BiIAExFqwEpGFeINKaKDBwDyAwPFXhFbhQAAAABJRU5ErkJggg=="

/***/ },

/***/ 164:
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

	var SheepActive = function (_React$Component) {
	  _inherits(SheepActive, _React$Component);

	  function SheepActive() {
	    _classCallCheck(this, SheepActive);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SheepActive).apply(this, arguments));
	  }

	  _createClass(SheepActive, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Active Sheep:'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          this.props.number
	        )
	      );
	    }
	  }]);

	  return SheepActive;
	}(_react2.default.Component);

	exports.default = SheepActive;

/***/ },

/***/ 165:
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

	var SheepLost = function (_React$Component) {
	  _inherits(SheepLost, _React$Component);

	  function SheepLost() {
	    _classCallCheck(this, SheepLost);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SheepLost).apply(this, arguments));
	  }

	  _createClass(SheepLost, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Lost Sheep:'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          this.props.number
	        )
	      );
	    }
	  }]);

	  return SheepLost;
	}(_react2.default.Component);

	exports.default = SheepLost;

/***/ },

/***/ 166:
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

	var SheepPenned = function (_React$Component) {
	  _inherits(SheepPenned, _React$Component);

	  function SheepPenned() {
	    _classCallCheck(this, SheepPenned);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SheepPenned).apply(this, arguments));
	  }

	  _createClass(SheepPenned, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Penned Sheep:'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          this.props.number
	        )
	      );
	    }
	  }]);

	  return SheepPenned;
	}(_react2.default.Component);

	exports.default = SheepPenned;

/***/ }

});