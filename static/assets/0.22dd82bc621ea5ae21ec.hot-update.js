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
	exports.getSavedDeck = getSavedDeck;
	var suites = ['hearts', 'spades', 'clubs', 'diamonds'];
	var suites_color = {
	    'hearts': 'R',
	    'diamonds': 'R',
	    'spades': 'B',
	    'clubs': 'B'
	};
	var deck = [];
	var deck_limit = 43;
	var value_mapper = {
	    '1': 'A', '2': '2',
	    '3': '3', '4': '4',
	    '5': '5', '6': '6',
	    '7': '7', '8': '8',
	    '9': '9', '10': '10',
	    '11': 'J', '12': 'Q',
	    '13': 'K'
	};
	
	function newDeck() {
	
	    for (var i = 0; i < suites.length; i++) {
	        for (var j = 1; j < deck_limit; j++) {
	            deck.push({
	                'id': suites[i] + ':' + j + ';',
	                'value': j,
	                'text': value_mapper[j],
	                'suite': suites[i],
	                'color': suites_color[suites[i]]
	            });
	        }
	    }
	    // Randomizing array here
	    var arr = shuffle(deck);
	    console.log(arr);
	    return arr;
	}
	
	function getSavedDeck(savedDeck) {
	    var placedDeck = [];
	    for (var i = 0; i < suites.length; i++) {
	        for (var j = 1; j < deck_limit; j++) {
	            var save = true;
	
	            for (var k = 0; k < savedDeck.length; k++) {
	                var match = savedDeck[k].replace(/"/g, "");
	                if (match == suites[i] + ':' + j) {
	                    save = false;
	                }
	            }
	            if (save) {
	                deck.push({
	                    'id': suites[i] + ':' + j + ';',
	                    'value': j,
	                    'text': value_mapper[j],
	                    'suite': suites[i],
	                    'color': suites_color[suites[i]]
	                });
	            } else {
	                placedDeck.push({
	                    'id': suites[i] + ':' + j + ';',
	                    'value': j,
	                    'text': value_mapper[j],
	                    'suite': suites[i],
	                    'color': suites_color[suites[i]]
	                });
	            }
	        }
	    }
	    // Randomizing array here
	    var arr = shuffle(deck);
	
	    return { 'deck': arr, 'placedDeck': placedDeck };
	}
	
	function shuffle(array) {
	    var currentIndex = array.length,
	        temporaryValue,
	        randomIndex;
	
	    // While there remain elements to shuffle...
	    while (0 !== currentIndex) {
	
	        // Pick a remaining element...
	        randomIndex = Math.floor(Math.random() * currentIndex);
	        currentIndex -= 1;
	
	        // And swap it with the current element.
	        temporaryValue = array[currentIndex];
	        array[currentIndex] = array[randomIndex];
	        array[randomIndex] = temporaryValue;
	    }
	
	    return array;
	}

/***/ }

})
//# sourceMappingURL=0.22dd82bc621ea5ae21ec.hot-update.js.map