// Your task is to write function which takes string and list of delimiters as an input and returns list of strings/characters after splitting given string.

var Test = require('./framework').Test;

function multipleSplit(string, delimiters){
	var res = Array(string);
	delimiters = delimiters || [];

	delimiters.forEach(function(delimiter) {
		var tmp = [];
		res.forEach(function(item) {
			tmp = tmp.concat(item.split(delimiter))
		})
		res = tmp.filter(function(item) {
			return item.length;
		});
	})

	return res.filter(function(item) {
		return item.length;
	});
}

Test.assertSimilar(multipleSplit('Hi everybody!', [' ', '!']), ['Hi', 'everybody']);
Test.assertSimilar(multipleSplit('(1+2)*6-3^9', ['+', '-', '(', ')', '^', '*']), ['1', '2', '6', '3', '9']);
Test.assertSimilar(multipleSplit('Solve_this|kata-very\\quickly!', ['!', '|', '\\', '_', '-']), ['Solve', 'this', 'kata', 'very', 'quickly']);
Test.assertSimilar(multipleSplit('', []), []);
  