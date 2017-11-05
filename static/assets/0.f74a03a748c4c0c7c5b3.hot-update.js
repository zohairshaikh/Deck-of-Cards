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
	    var deck_limit = 14;
	    var value_mapper = {
	        '1': 'A', '2': '2',
	        '3': '3', '4': '4',
	        '5': '5', '6': '6',
	        '7': '7', '8': '8',
	        '9': '9', '10': '10',
	        '11': 'J', '12': 'Q',
	        '13': 'K'
	    };
	    for (var i = 0; i < suites.length; i++) {
	        for (var j = 1; j < deck_limit; j++) {
	            deck.push({
	                'value': j,
	                'text': value_mapper[j],
	                'suite': suites[i],
	                'color': suites_color[suites[i]]
	            });
	        }
	    }
	
	    return deck[Math.floor(Math.random() * deck.length)];
	}

/***/ }

})
//# sourceMappingURL=0.f74a03a748c4c0c7c5b3.hot-update.js.map