/*The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
*/

function sumDigPow(a, b) {
	var arr = [];
	for (var value = a; value <= b; value++) {
		var sum = value.toString().split('').reduce(function(x,y,i) {
			return parseInt(x) + Math.pow(parseInt(y), i+1);
		});

		if (parseInt(sum) === value) {
			arr.push(value);
		}
	}
	return arr;
}

console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 2));
console.log(sumDigPow(1, 100));
console.log(sumDigPow(88, 90));