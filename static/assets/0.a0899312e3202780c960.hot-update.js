webpackHotUpdate(0,{

/***/ 175:
/*!**********************************!*\
  !*** ./~/52-deck/build/index.js ***!
  \**********************************/
/***/ function(module, exports) {

	module.exports = function (a) {
	    function b(d) {
	        if (c[d]) return c[d].exports;
	        var e = c[d] = {i: d, l: !1, exports: {}};
	        return a[d].call(e.exports, e, e.exports, b), e.l = !0, e.exports
	    }
	
	    var c = {};
	    return b.m = a, b.c = c, b.i = function (d) {
	        return d
	    }, b.d = function (d, e, f) {
	        b.o(d, e) || Object.defineProperty(d, e, {configurable: !1, enumerable: !0, get: f})
	    }, b.n = function (d) {
	        var e = d && d.__esModule ? function () {
	            return d['default']
	        } : function () {
	            return d
	        };
	        return b.d(e, 'a', e), e
	    }, b.o = function (d, e) {
	        return Object.prototype.hasOwnProperty.call(d, e)
	    }, b.p = '', b(b.s = 0)
	}({
	    './src/index.js': function (a, b) {
	        'use strict';
	        Object.defineProperty(b, '__esModule', {value: !0});
	        var d = b.isNull = function (u) {
	            return null === u
	        }, e = b.isUndefined = function (u) {
	            return u === void 0
	        }, f = b.isNullOrUndef = function (u) {
	            return e(u) || d(u)
	        }, g = b.cardName = function (u) {
	            if (f(u)) throw Error('Invalid number');
	            return 1 === u ? 'A' : 11 === u ? 'J' : 12 === u ? 'Q' : 13 === u ? 'K' : u.toString()
	        }, h = b.suiteName = function (u) {
	            switch (u.toLowerCase()) {
	                case'\u2665':
	                case'h':
	                case'heart':
	                case'hearts':
	                    return 'hearts';
	                case'\u2666':
	                case'd':
	                case'diamond':
	                case'diamonds':
	                    return 'diamonds';
	                case'\u2663':
	                case'c':
	                case'club':
	                case'clubs':
	                    return 'clubs';
	                case'\u2660':
	                case's':
	                case'spade':
	                case'spades':
	                    return 'spades';
	                default:
	                    throw Error('invalid suite');
	            }
	        }, j = b.suiteColor = function (u) {
	            switch (u) {
	                case'hearts':
	                    return 'R';
	                case'diamonds':
	                    return 'R';
	                case'clubs':
	                    return 'B';
	                case'spades':
	                    return 'B';
	                default:
	                    throw Error('invalid suite');
	            }
	        }, k = b.cardValue = function (u) {
	            return 10 > u ? u : 10
	        }, l = b.makeCard = function (u, w) {
	            var y = h(w);
	            return {text: g(u), suite: y, value: k(u), color: j(y)}
	        }, m = b.newDecks = function (u) {
	            for (var w = [], y = 0; y < u; y++) w = o().concat(w);
	            return w
	        }, o = b.newDeck = function () {
	            return [].concat.apply([], ['hearts', 'diamonds', 'clubs', 'spades'].map(function (u) {
	                return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(function (w) {
	                    return l(w, u)
	                })
	            }))
	        }, p = b.getRandom = function (u) {
	            return Math.floor(Math.random() * u)
	        }, q = b.shuffle = function (u) {
	            for (var z, A, w = u.slice(0), y = w.length; 0 !== y;) A = p(y), y -= 1, z = w[y], w[y] = w[A], w[A] = z;
	            return w
	        }, r = b.serializeCard = function (u) {
	            var A, w = u.match(/\d/g), y = '', z = 0, B = y;
	            if (w && 0 < w.length ? (z = +w.join(''), B = u.replace(z.toString(), '')) : ['j', 'q', 'k'].forEach(function (C, D) {
	                    (0 <= u.indexOf(C) || 0 <= u.indexOf(C.toUpperCase())) && (z = 11 + D, A = C, B = u.replace(A, y).replace(A.toUpperCase(), y))
	                }), 0 === z) throw Error('');
	            return B = B.replace('-', y), l(z, B)
	        }, s = b.serializeCards = function (u) {
	            if ('' === u) throw Error('value should contains a valid raw card/s definition');
	            return u.trim().split(' ').map(r)
	        }
	    }, 0: function (a, b, c) {
	        a.exports = c('./src/index.js')
	    }
	});
	//# sourceMappingURL=index.js.map

/***/ }

})
//# sourceMappingURL=0.a0899312e3202780c960.hot-update.js.map