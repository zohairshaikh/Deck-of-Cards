webpackHotUpdate(0,{

/***/ 0:
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 35);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactDragAndDrop = __webpack_require__(/*! react-drag-and-drop */ 177);
	
	var _utils = __webpack_require__(/*! ./utils.js */ 176);
	
	var utils = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DeckOfCards = function (_React$Component) {
	    _inherits(DeckOfCards, _React$Component);
	
	    function DeckOfCards() {
	        _classCallCheck(this, DeckOfCards);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DeckOfCards).call(this));
	
	        console.log('my m y', utils.newDeck());
	        _this.state = {};
	        return _this;
	    }
	
	    _createClass(DeckOfCards, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                'Hello',
	                _react2.default.createElement('div', null)
	            );
	        }
	    }]);
	
	    return DeckOfCards;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(DeckOfCards, null), document.getElementById('app'));

/***/ },

/***/ 177:
/*!********************************************!*\
  !*** ./~/react-drag-and-drop/lib/index.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var Draggable = _interopRequire(__webpack_require__(/*! ./Draggable */ 178));
	
	var Droppable = _interopRequire(__webpack_require__(/*! ./Droppable */ 179));
	
	exports.Draggable = Draggable;
	exports.Droppable = Droppable;

/***/ },

/***/ 178:
/*!************************************************!*\
  !*** ./~/react-drag-and-drop/lib/Draggable.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var React = _interopRequire(__webpack_require__(/*! react */ 1));
	
	var Draggable = (function (_React$Component) {
	    function Draggable() {
	        _classCallCheck(this, Draggable);
	
	        if (_React$Component != null) {
	            _React$Component.apply(this, arguments);
	        }
	    }
	
	    _inherits(Draggable, _React$Component);
	
	    _createClass(Draggable, {
	        render: {
	            value: function render() {
	                var Tag = "div";
	                var props = Object.assign({}, this.props);
	                if (this.props.wrapperComponent) {
	                    Tag = this.props.wrapperComponent.type;
	                    props = Object.assign(props, this.props.wrapperComponent.props);
	                    delete props.wrapperComponent;
	                }
	                if (this.props.enabled) {
	                    props.draggable = "true";
	                    props.onDragEnd = this.onDragEnd.bind(this);
	                    props.onDragStart = this.onDragStart.bind(this);
	                }
	                delete props.enabled;
	                return React.createElement(
	                    Tag,
	                    props,
	                    props.children
	                );
	            }
	        },
	        onDragStart: {
	            value: function onDragStart(e) {
	                if (typeof this.props.onDragStart === "function") this.props.onDragStart(e);
	                var props = Object.assign({}, this.props);
	                if (this.props.wrapperComponent) props = Object.assign(props, this.props.wrapperComponent.props);
	                e.dataTransfer.setData(props.type, props.data);
	            }
	        },
	        onDragEnd: {
	            value: function onDragEnd(e) {
	                if (typeof this.props.onDragEnd === "function") this.props.onDragEnd(e);
	            }
	        }
	    });
	
	    return Draggable;
	})(React.Component);
	
	module.exports = Draggable;
	
	Draggable.defaultProps = {
	    enabled: true
	};

/***/ },

/***/ 179:
/*!************************************************!*\
  !*** ./~/react-drag-and-drop/lib/Droppable.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = _interopRequire(__webpack_require__(/*! react */ 1));
	
	var utils = _interopRequire(__webpack_require__(/*! ./utils */ 180));
	
	function pickTypes(e) {
	    return e.dataTransfer ? e.dataTransfer.types : [];
	}
	
	function filterProps(props) {
	    var forbidden = ["types", "className", "enabled", "wrapperComponent"];
	    return Object.keys(props).reduce(function (p, c) {
	        if (!forbidden.includes(c)) {
	            p[c] = props[c];
	        }
	        return p;
	    }, {});
	}
	
	var Droppable = (function (_React$Component) {
	    function Droppable(props) {
	        _classCallCheck(this, Droppable);
	
	        _get(Object.getPrototypeOf(Droppable.prototype), "constructor", this).call(this, props);
	        this.state = {
	            over: false
	        };
	    }
	
	    _inherits(Droppable, _React$Component);
	
	    _createClass(Droppable, {
	        render: {
	            value: function render() {
	                var Tag = "div";
	                var props = Object.assign({}, this.props);
	                if (this.props.wrapperComponent) {
	                    Tag = this.props.wrapperComponent.type;
	                    props = Object.assign(props, this.props.wrapperComponent.props);
	                }
	                var classes = "Droppable";
	                if (props.className) classes += " " + props.className;
	                if (this.state.over) classes += " over";
	                return React.createElement(
	                    Tag,
	                    _extends({ ref: "droppable", className: classes }, filterProps(props), {
	                        onDrop: this.onDrop.bind(this),
	                        onDragOver: this.onDragOver.bind(this),
	                        onDragEnter: this.onDragEnter.bind(this),
	                        onDragLeave: this.onDragLeave.bind(this),
	                        onDragExit: this.onDragLeave.bind(this) }),
	                    props.children
	                );
	            }
	        },
	        onDragOver: {
	            value: function onDragOver(e) {
	                e.preventDefault();
	                if (!this.allowed(pickTypes(e))) {
	                    return;
	                }if (typeof this.props.onDragOver === "function") this.props.onDragOver(e);
	            }
	        },
	        onDragEnter: {
	            value: function onDragEnter(e) {
	                e.preventDefault();
	                if (this.state.over) {
	                    return;
	                }if (!this.allowed(pickTypes(e))) {
	                    return;
	                }if (typeof this.props.onDragEnter === "function") this.props.onDragEnter(e);
	                this.setState({ over: true });
	            }
	        },
	        onDragLeave: {
	            value: function onDragLeave(e) {
	                e.preventDefault();
	                if (!this.allowed(pickTypes(e))) {
	                    return;
	                }var over = true;
	                if (e.clientX <= this.position.left || e.clientX >= this.position.right) over = false;
	                if (e.clientY <= this.position.top || e.clientY >= this.position.bottom) over = false;
	                if (over) {
	                    return;
	                }this.setState({ over: false });
	                if (typeof this.props.onDragLeave === "function") this.props.onDragLeave(e);
	            }
	        },
	        onDrop: {
	            value: function onDrop(e) {
	                e.preventDefault();
	                if (!this.allowed(pickTypes(e))) {
	                    return;
	                }this.setState({ over: false });
	                var props = Object.assign({}, this.props);
	                if (this.props.wrapperComponent) props = Object.assign(props, this.props.wrapperComponent.props);
	                var data = !props.types ? null : [].concat(props.types).reduce(function (d, type) {
	                    d[type] = e.dataTransfer.getData(type);
	                    return d;
	                }, {});
	                if (typeof this.props.onDrop === "function") this.props.onDrop(data, e);
	            }
	        },
	        allowed: {
	            value: function allowed(attemptingTypes) {
	                var props = Object.assign({}, this.props);
	                if (this.props.wrapperComponent) props = Object.assign(props, this.props.wrapperComponent.props);
	                if (!props.enabled) {
	                    return false;
	                }var _attemptingTypes = utils.toArray(attemptingTypes);
	                if (!props.types) {
	                    return true;
	                }return [].concat(props.types).reduce(function (sum, type) {
	                    if (_attemptingTypes.indexOf(type) >= 0) return true;
	                    return sum;
	                }, false);
	            }
	        },
	        componentDidMount: {
	            value: function componentDidMount() {
	                // TODO: Listen for window resize?
	                var node = this.refs.droppable;
	                this.position = {
	                    top: node.offsetTop + 5,
	                    left: node.offsetLeft + 5,
	                    right: node.offsetLeft + node.offsetWidth - 5,
	                    bottom: node.offsetTop + node.offsetHeight - 5
	                };
	            }
	        }
	    });
	
	    return Droppable;
	})(React.Component);
	
	module.exports = Droppable;
	
	Droppable.defaultProps = {
	    enabled: true
	};

/***/ },

/***/ 180:
/*!********************************************!*\
  !*** ./~/react-drag-and-drop/lib/utils.js ***!
  \********************************************/
/***/ function(module, exports) {

	"use strict";
	
	function toArray(obj) {
	  var array = [];
	  // iterate backwards ensuring that length is an UInt32
	  for (var i = obj.length >>> 0; i--;) {
	    array[i] = obj[i];
	  }
	  return array;
	}
	
	module.exports = {
	  toArray: toArray
	};

/***/ }

})
//# sourceMappingURL=0.99d3d93fb3dceedad855.hot-update.js.map