// Your goal in this kata is to implement an difference function, which subtracts one list from another.
// It should remove all values from list a, which are present in list b.

function difference(a, b) {
	return a.filter(function(item) {
		return b.indexOf(item);
	}) 
}

console.log(difference([1,2],[1]));
console.log(difference([1,2,2,2,3],[2]));