webpackHotUpdate(0,{

/***/ 175:
/*!*****************************!*\
  !*** ./components/utils.js ***!
  \*****************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.newDeck = newDeck;
	function newDeck() {
	    var suites = ['hearts', 'spades', 'clubs', 'diamonds'];
	    var suites_color = {
	        'hearts': 'R',
	        'diamonds': 'R',
	        'spades': 'B',
	        'clubs': 'B'
	    };
	    var deck = [];
	    var deck_limit = 13;
	    var value_mapper = {
	        'A': 1, '2': 2,
	        '3': 3, '4': 4,
	        '5': 5, '6': 6,
	        '7': 7, '8': 8,
	        '9': 9, '10': 10,
	        'J': 11, 'Q': 12,
	        'K': 13
	    };
	    for (var i = 0; i < suites.length; i++) {
	        for (var j = 0; j < deck_limit; j++) {
	            deck.push({
	                'value': j,
	                'text': value_mapper[j],
	                'suite': suites[i],
	                'color': suites_color[suites[i]]
	            });
	        }
	    }
	    return deck;
	}

/***/ }

})
//# sourceMappingURL=0.6514cb2064b4ef6b0f27.hot-update.js.map