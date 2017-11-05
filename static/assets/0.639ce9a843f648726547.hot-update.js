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
	
	var _customSnackar = __webpack_require__(/*! ./customSnackar.jsx */ 177);
	
	var _customSnackar2 = _interopRequireDefault(_customSnackar);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var placesCards = '';
	var placesCardsObj = {};
	
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
	        _this.saveProgress = _this.saveProgress.bind(_this);
	        _this.snackbarCallback = _this.snackbarCallback.bind(_this);
	        _this.logout = _this.logout.bind(_this);
	
	        _this.state = {
	            reset: false,
	            snackbarState: false
	        };
	        return _this;
	    }
	
	    _createClass(DeckOfCards, [{
	        key: 'restart',
	        value: function restart() {
	            $.ajax({
	                'url': '/clearData/',
	                'data': { 'username': this.state.username },
	                'type': 'POST',
	                success: function (resp) {
	                    if (resp.code === 200) {
	                        console.log('Data cleared');
	                    }
	                }.bind(this)
	            });
	
	            this.setState({
	                reset: true
	            });
	            setTimeout(function () {
	                window.location.reload(true);
	            }, 200);
	        }
	    }, {
	        key: 'drop',
	        value: function drop(ev) {
	            ev.preventDefault();
	            var data = ev.dataTransfer.getData("text");
	            var elem = document.getElementById(data);
	
	            var holderVal = ev.target.getAttribute('value');
	            var holderId = holderVal.split(',')[1];
	
	            var dropVal = elem.getAttribute('value');
	            var dropId = dropVal.split(',')[1];
	
	            if (holderVal.split(',')[0] == dropVal.split(',')[0]) {
	                if (dropId in placesCardsObj) {
	                    // Ignore when already placed, Avoiding duplicate drop calls to be saved
	                } else {
	                    placesCardsObj['dropId'] = 1;
	                    placesCards += dropId.replace(/"/g, "");
	                    this.saveProgress(placesCards);
	                }
	
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
	        key: 'saveProgress',
	        value: function saveProgress(cards) {
	            $.ajax({
	                'url': '/saveProgress/',
	                'data': { 'username': this.state.username, 'data': cards },
	                'type': 'POST',
	                success: function (resp) {
	                    if (resp.code === 200) {
	                        console.log('Progress Saved');
	                    }
	                }.bind(this)
	            });
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
	            if (localStorage.getItem('user')) {
	                this.setState({
	                    username: localStorage.getItem('user')
	                }, this.saveUser);
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
	                success: function (resp) {
	                    var placedDeck = [];
	                    var deck = [];
	                    if (resp.isNew == 1) {
	                        deck = utils.newDeck();
	                    } else {
	                        var allDecks = utils.getSavedDeck(resp.userdata.split(';'));
	                        deck = allDecks.deck;
	                        placedDeck = allDecks.placedDeck;
	                    }
	                    var snackbarLabel = this.state.username + " logged in";
	                    this.setState({
	                        deck: deck,
	                        loggedIn: true,
	                        isNew: resp.isNew,
	                        userdata: resp.userdata,
	                        snackbarLabel: snackbarLabel,
	                        snackbarState: true
	                    });
	                    placesCards = resp.userdata.replace(/"/g, "");
	                    localStorage.setItem('user', this.state.username);
	                    this.shuffle();
	                }.bind(this)
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
	        key: 'snackbarCallback',
	        value: function snackbarCallback() {
	            this.setState({
	                snackbarState: !this.state.snackbarState
	            });
	        }
	    }, {
	        key: 'logout',
	        value: function logout() {
	            localStorage.clear();
	            window.location.reload(true);
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
	                        { className: 'div-by-5' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'card-holder', id: 'spades-holder',
	                                onDragOver: this.allowDrop },
	                            this.state.reset ? null : _react2.default.createElement('div', { className: 'drop-container', value: 'spades,', onDrop: this.drop,
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
	                        { className: 'div-by-5' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'card-holder', id: 'clubs-holder',
	                                onDragOver: this.allowDrop },
	                            this.state.reset ? null : _react2.default.createElement('div', { className: 'drop-container', value: 'clubs,', onDrop: this.drop,
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
	                        { className: 'div-by-5' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'card-holder', id: 'hearts-holder',
	                                onDragOver: this.allowDrop },
	                            this.state.reset ? null : _react2.default.createElement('div', { className: 'drop-container', value: 'hearts,', onDrop: this.drop,
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
	                        { className: 'div-by-5' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'card-holder', id: 'diamonds-holder',
	                                onDragOver: this.allowDrop },
	                            this.state.reset ? null : _react2.default.createElement('div', { className: 'drop-container', value: 'diamonds,', onDrop: this.drop,
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
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'div-by-5' },
	                        _react2.default.createElement(
	                            'button',
	                            { onClick: this.logout, className: 'btn-logout' },
	                            'Logout'
	                        )
	                    )
	                ) : null,
	                this.state.loggedIn ? null : _react2.default.createElement(
	                    'div',
	                    { className: 'user-popup' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'elements-contaiener' },
	                        _react2.default.createElement('input', { className: 'username-input', id: 'username',
	                            onChange: this.usernameChange.bind(this, 'username'),
	                            placeholder: 'Enter username' }),
	                        _react2.default.createElement(
	                            'button',
	                            { className: 'username-btn', onClick: this.saveUser },
	                            'Start'
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
	                ) : null,
	                _react2.default.createElement(_customSnackar2.default, { content: this.state.snackbarLabel, active: this.state.snackbarState,
	                    timeout: 5000,
	                    timeoutCallBack: this.snackbarCallback,
	                    action: {
	                        onActionClick: this.snackbarCallback,
	                        label: 'DISMISS'
	                    } })
	            );
	        }
	    }]);
	
	    return DeckOfCards;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(DeckOfCards, null), document.getElementById('app'));

/***/ }
])
//# sourceMappingURL=0.639ce9a843f648726547.hot-update.js.map