/*
* @Author: Cao Hong Phuoc
* @Date:   2016-07-02 09:28:48
* @Last Modified by:   Cao Hong Phuoc
* @Last Modified time: 2016-07-02 09:33:37
*/

var Test = require('./framework').Test;

function exampleSort(arr,exampleArr){
	arr.sort(function(a,b) {
		return exampleArr.indexOf(a) > exampleArr.indexOf(b);
	})
	console.log(arr);
	return arr;
}

exampleSort([1,2,3,4,5],[2,3,4,1,5]) // [2,3,4,1,5]
exampleSort([1,2,3,3,3,4,5],[2,3,4,1,5]) // [2,3,3,3,4,1,5]
exampleSort([1,2,3,3,3,5],[2,3,4,1,5]) //[2,3,3,3,1,5]
exampleSort([1,2,3,3,3,5],[3,4,5,6,9,11,12,13,1,7,8,2,10]) // [3,3,3,5,1,2]