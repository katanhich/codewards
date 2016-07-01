/*Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

The result will be an array of arrays, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.
*/

function listSquared(m, n) {
	var findAllDivisors = function(x) {
		var res = [];
		for (var i = 1; i <= x; i++) {
			if(x % i === 0) {
				res.push(i);
			}
		}
		return res;
	}

	var res = [];

	for (var i = m; i <= n; i++) {
		// find all divisor
		var divisors = findAllDivisors(i);
		// power all divisors => count total
		var total = divisors.reduce(function(pre, cur) {
			return pre + Math.pow(cur, 2);
		}, 0);
		// square the sum
		if (Math.sqrt(total) % 1 === 0) {
			res.push([i, total]);
		}
	}

	console.log(res);
	return res;
}


listSquared(1, 250)
listSquared(42, 250)
listSquared(250, 500)