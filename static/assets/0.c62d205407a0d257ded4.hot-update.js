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
	
	var _utils = __webpack_require__(/*! ./utils.js */ 175);
	
	var utils = _interopRequireWildcard(_utils);
	
	var _Card = __webpack_require__(/*! ./Card */ 176);
	
	var _Card2 = _interopRequireDefault(_Card);
	
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
	
	        _this.state = {
	            deck: utils.newDeck()
	        };
	        return _this;
	    }
	
	    _createClass(DeckOfCards, [{
	        key: 'drop',
	        value: function drop(ev) {
	            ev.preventDefault();
	            var data = ev.dataTransfer.getData("text");
	            ev.target.appendChild(document.getElementById(data));
	        }
	    }, {
	        key: 'allowDrop',
	        value: function allowDrop(ev) {
	            ev.preventDefault();
	        }
	    }, {
	        key: 'onDragStart',
	        value: function onDragStart(ev) {
	            ev.dataTransfer.setData("text", ev.target.id);
	        }
	    }, {
	        key: 'returnCards',
	        value: function returnCards(data, itr) {
	            var card = _react2.default.createElement(_Card2.default, { value: data });
	            return card;
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var skip_height = $('#cards-container').height();
	            $('#cards-container').ready(function () {
	                $('.card-container').each(function () {
	
	                    var holder = $(this).parent();
	                    var divWidth = holder.width();
	                    var divHeight = holder.height();
	
	                    $(this).css({
	                        'left': Math.floor(Math.random() * Number(divWidth)),
	                        'top': Math.floor(Math.random() * Number(divHeight)) + skip_height / 2.5
	                    });
	                });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'main-container' },
	                _react2.default.createElement(
	                    'div',
	                    { style: { 'width': 200, 'height': 200 }, id: 'div1', onDrop: this.drop, onDragOver: this.allowDrop },
	                    _react2.default.createElement(
	                        'p',
	                        { draggable: 'true', onDragStart: this.onDragStart, id: 'drag1', width: '88',
	                            height: '31' },
	                        'Hello'
	                    )
	                ),
	                _react2.default.createElement('div', { style: { 'width': 200, 'height': 200 }, id: 'div2', onDrop: this.drop, onDragOver: this.allowDrop })
	            );
	        }
	    }]);
	
	    return DeckOfCards;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(DeckOfCards, null), document.getElementById('app'));

/***/ },

/***/ 176:
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 35);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _utils = __webpack_require__(/*! ./utils.js */ 175);
	
	var utils = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Card = function (_React$Component) {
	    _inherits(Card, _React$Component);
	
	    function Card(props) {
	        _classCallCheck(this, Card);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Card).call(this, props));
	
	        var values = props.value;
	        var color = '#000';
	        if (values.color === 'R') {
	            color = '#FC0D1B';
	        }
	        var suite_uni = '';
	        switch (values.suite) {
	            case 'spades':
	                suite_uni = 1;
	                break;
	            case 'diamonds':
	                suite_uni = 2;
	                break;
	            case 'hearts':
	                suite_uni = 3;
	                break;
	            case 'clubs':
	                suite_uni = 3;
	                break;
	        }
	        _this.state = {
	            value: values.value,
	            suite: suite_uni,
	            text: values.text,
	            color: color
	        };
	        return _this;
	    }
	
	    _createClass(Card, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { draggable: 'true', className: 'card-container', style: { 'color': this.state.color } },
	                _react2.default.createElement(
	                    'p',
	                    { className: 'suites-text' },
	                    this.state.text
	                ),
	                ' ',
	                this.state.suite === 2 ? _react2.default.createElement(
	                    'p',
	                    { className: 'icon-suites' },
	                    '♦'
	                ) : this.state.suite === 1 ? _react2.default.createElement(
	                    'p',
	                    { className: 'icon-suites' },
	                    '♠'
	                ) : this.state.suite === 3 ? _react2.default.createElement(
	                    'p',
	                    { className: 'icon-suites' },
	                    '♥'
	                ) : _react2.default.createElement(
	                    'p',
	                    { className: 'icon-suites' },
	                    '♣'
	                )
	            );
	        }
	    }]);
	
	    return Card;
	}(_react2.default.Component);
	
	exports.default = Card;

/***/ }

})
//# sourceMappingURL=0.c62d205407a0d257ded4.hot-update.js.map