var Test = require('./framework').Test;

var palindromeChainLength = function(n) {

	var reverse = function(number) {
		return parseInt(number.toString().split('').reverse().join(''));
	}

	var isPalindrome = function(number) {
		return reverse(number) === number;
	}

	var step = 0;
	while(!isPalindrome(n)) {
		n = n + reverse(n);
		step++;
	}

	return step;
};

var palindromeChainLength1 = function(n) {
	var reverse = parseInt(n.toString().split('').reverse().join(''));
	if (n !== reverse) {
		return 1 + palindromeChainLength1(n+reverse);
	}
	return 0;
};

Test.expect(palindromeChainLength(87)==4)
Test.expect(palindromeChainLength1(87)==4)