// Delete occurrences of an element if it occurs more than n times

function deleteNth(arr, x) {
	var map = {};
	var res = arr.filter(function(item) {
		var total = map[item] = (map[item] || 0) + 1;
		return total <= x;
	});
	console.log(res);
	return res;
}

deleteNth ([1,1,1,1],2);
deleteNth ([20,37,20,21],1)
deleteNth([1,1,3,3,7,2,2,2,2], 3)