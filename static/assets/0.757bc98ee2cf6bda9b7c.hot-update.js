webpackHotUpdate(0,[
/* 0 */
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
	
	var _utils2 = __webpack_require__(/*! ./utils */ 175);
	
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
	
	        _this.returnCards = _this.returnCards.bind(_this);
	        _this.restart = _this.restart.bind(_this);
	        _this.drop = _this.drop.bind(_this);
	        _this.usernameChange = _this.usernameChange.bind(_this);
	        _this.saveUser = _this.saveUser.bind(_this);
	
	        var deck = utils.newDeck();
	        _this.state = {
	            deck: deck,
	            reset: false
	        };
	        return _this;
	    }
	
	    _createClass(DeckOfCards, [{
	        key: 'restart',
	        value: function restart() {
	            this.setState({
	                reset: true
	            });
	            window.location.reload(true);
	        }
	    }, {
	        key: 'drop',
	        value: function drop(ev) {
	            ev.preventDefault();
	            var data = ev.dataTransfer.getData("text");
	            var elem = document.getElementById(data);
	
	            console.log('ev.target');
	            var holderVal = ev.target.getAttribute('value');
	            var dropVal = elem.getAttribute('value');
	            if (holderVal == dropVal) {
	                elem.style.left = 'auto';
	                elem.style.top = 'auto';
	                elem.style.margin = '-1px';
	                ev.target.appendChild(elem);
	                if (document.getElementById('cards-container').childElementCount == 0) {
	                    // All cards placed. Add restart button
	                    this.setState({
	                        showRestart: true
	                    });
	                }
	            }
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
	            var card = _react2.default.createElement(_Card2.default, { indexId: 'card' + itr, onDragStart: this.onDragStart, value: data });
	            return card;
	        }
	    }, {
	        key: 'shuffle',
	        value: function shuffle() {
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
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (window.sessionStorage.getItem('user')) {
	                this.setState({
	                    loggedIn: true
	                });
	            } else {
	                this.setState({
	                    loggedIn: false
	                });
	            }
	
	            this.shuffle();
	        }
	    }, {
	        key: 'saveUser',
	        value: function saveUser() {
	            $.ajax({
	                'url': '/loginUser/',
	                'data': { 'username': this.state.username },
	                'type': 'POST',
	                'method': 'POST',
	                success: function success(resp) {
	                    console.log(resp);
	                }
	            });
	        }
	    }, {
	        key: 'usernameChange',
	        value: function usernameChange(id) {
	            var val = document.getElementById(id).value;
	            this.setState({
	                username: val
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'main-container' },
	                this.state.loggedIn ? _react2.default.createElement(
	                    'div',
	                    { className: 'child-30' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'div-by-4' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'card-holder', id: 'spades-holder', onDrop: this.drop,
	                                onDragOver: this.allowDrop },
	                            this.state.reset ? null : _react2.default.createElement('div', { className: 'drop-container', value: 'spades', onDrop: this.drop,
	                                onDragOver: this.allowDrop }),
	                            this.state.reset ? null : _react2.default.createElement(
	                                'div',
	                                { className: 'empty-holder-b' },
	                                _react2.default.createElement(
	                                    'p',
	                                    { className: 'empty-text' },
	                                    'Place spades here'
	                                ),
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    '♠'
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'div-by-4' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'card-holder', id: 'clubs-holder', onDrop: this.drop,
	                                onDragOver: this.allowDrop },
	                            this.state.reset ? null : _react2.default.createElement('div', { className: 'drop-container', value: 'clubs', onDrop: this.drop,
	                                onDragOver: this.allowDrop }),
	                            this.state.reset ? null : _react2.default.createElement(
	                                'div',
	                                { className: 'empty-holder-b' },
	                                _react2.default.createElement(
	                                    'p',
	                                    { className: 'empty-text' },
	                                    'Place clubs here'
	                                ),
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    '♣'
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'div-by-4' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'card-holder', id: 'hearts-holder', onDrop: this.drop,
	                                onDragOver: this.allowDrop },
	                            this.state.reset ? null : _react2.default.createElement('div', { className: 'drop-container', value: 'hearts', onDrop: this.drop,
	                                onDragOver: this.allowDrop }),
	                            this.state.reset ? null : _react2.default.createElement(
	                                'div',
	                                { className: 'empty-holder-r' },
	                                _react2.default.createElement(
	                                    'p',
	                                    { className: 'empty-text' },
	                                    'Place hearts here'
	                                ),
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    '♥'
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'div-by-4' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'card-holder', id: 'diamonds-holder', onDrop: this.drop,
	                                onDragOver: this.allowDrop },
	                            this.state.reset ? null : _react2.default.createElement('div', { className: 'drop-container', value: 'diamonds', onDrop: this.drop,
	                                onDragOver: this.allowDrop }),
	                            this.state.reset ? null : _react2.default.createElement(
	                                'div',
	                                { className: 'empty-holder-r' },
	                                _react2.default.createElement(
	                                    'p',
	                                    { className: 'empty-text' },
	                                    'Place diamonds here'
	                                ),
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    '♦'
	                                )
	                            )
	                        )
	                    )
	                ) : null,
	                this.state.loggedIn ? null : _react2.default.createElement(
	                    'div',
	                    { className: 'user-popup' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'elements-contaiener' },
	                        _react2.default.createElement('input', { className: 'username-input', id: 'username', onChange: this.usernameChange.bind(this, 'username'),
	                            placeholder: 'Enter username' }),
	                        _react2.default.createElement(
	                            'button',
	                            { className: 'username-btn', onClick: this.saveUser },
	                            'Save'
	                        )
	                    )
	                ),
	                this.state.loggedIn ? _react2.default.createElement(
	                    'div',
	                    { className: 'child-70', ref: 'cardsContainer', id: 'cards-container', onDrop: this.drop,
	                        onDragOver: this.allowDrop },
	                    this.state.showRestart ? _react2.default.createElement(
	                        'button',
	                        { className: 'restart-btn', onClick: this.restart },
	                        'Restart'
	                    ) : null,
	                    this.state.deck.map(this.returnCards)
	                ) : null
	            );
	        }
	    }]);
	
	    return DeckOfCards;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(DeckOfCards, null), document.getElementById('app'));

/***/ }
])
//# sourceMappingURL=0.757bc98ee2cf6bda9b7c.hot-update.js.map