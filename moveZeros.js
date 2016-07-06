var Test = require('./framework').Test;

var moveZeros = function (arr) {
	var zeros = [];
	var res = arr.filter(function(item) {
		if(item === 0) {
			zeros.push(0);
		} else {
			return true;
		}
	})
	return res.concat(zeros)
}

Test.assertEquals(
  JSON.stringify(moveZeros([1,2,0,1,0,1,0,3,0,1])),
  JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
);

Test.assertEquals(
  JSON.stringify(moveZeros([false,1,0,1,2,0,1,3,"a"])),
  JSON.stringify([false,1,1,2,1,3,"a",0,0])
);

