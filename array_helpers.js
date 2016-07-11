var Test = require('./framework').Test;

Array.prototype.square = function() {
	return this.map(function(item) {
		return Math.pow(item, 2);
	})
};

Array.prototype.cube = function() {
	return this.map(function(item) {
		return Math.pow(item, 3);
	})
};

Array.prototype.sum = function() {
	return this.reduce(function(x,y) {
		return x+y;
	}, 0)
};

Array.prototype.average = function() {
	return this.sum()/this.length;
};

Array.prototype.even = function() {
	return this.filter(function(item) {
		return item % 2 === 0;
	})
};

Array.prototype.odd = function() {
	return this.filter(function(item) {
		return item % 2 !== 0;
	})
};

var numbers = [1, 2, 3, 4, 5];
Test.assertSimilar(numbers.square(), [1, 4, 9, 16, 25]);
Test.assertSimilar(numbers.cube(), [1, 8, 27, 64, 125]);
Test.assertEquals(numbers.sum(), 15, 'Wrong sum');
Test.assertEquals(numbers.average(), 3, 'Wrong average');
Test.assertSimilar(numbers.even(), [2, 4], 'Wrong result for even()');
Test.assertSimilar(numbers.odd(), [1, 3, 5], 'Wrong result for odd()');

Test.assertEquals([].sum(), 0, 'Wrong sum');