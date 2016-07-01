function deleteNth(arr, x) {
  var res = []
  var map = {}
  
  for (var i = 0; i < arr.length; i++) {
    var n = arr[i]
    var c = map[n] = (map[n] || 0) + 1
    if (c <= x) res.push(n)
  }
  console.log(res);
  return res
}

deleteNth ([1,1,1,1],2);
// deleteNth ([20,37,20,21],1)
// deleteNth([1,1,3,3,7,2,2,2,2], 3)