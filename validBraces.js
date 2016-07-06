/*What is considered Valid? A string of braces is considered valid if all braces are matched with the correct brace. 
For example:
'(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and '[({})](]' would be considered invalid.
*/

function validBraces(braces){
	if (braces.length % 2 !== 0) return false;
	for (var i = braces.length/2-1, j = braces.length/2; i >=0, j < braces.length; i--, j++) {
		var x1 = braces[i];
		var x2 = braces[j];
		var isY1 = x1 === '(' && x2 === ')';
		var isY2 = x1 === '{' && x2 === '}';
		var isY3 = x1 === '[' && x2 === ']';

		console.log(i,x1);
		console.log(j,x2);
		console.log();

		if (!isY3 && !isY2 && !isY1) {
			return false;
		}
	}
	return true;
}

// console.log(validBraces( "()" ));
// console.log(validBraces( "[(])" ));
console.log(validBraces( "(){}[]" ) )
// console.log(validBraces( "(}" ) )
// console.log(validBraces( "[(])" )) 
// console.log(validBraces( "([{}])" )) 