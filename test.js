function autocomplete(input, dictionary){
  return dictionary.filter(function(item) {
  	// console.log(item.toLowerCase().match("^[a-zA-Z0-9]*$"));
  	if (item.toLowerCase().match("^[a-zA-Z0-9]*$")) {
  		// console.log('=======');
  		return item.toLowerCase().indexOf(input.toLowerCase()) > -1;
  	}
  	return false;
  }) 
}

console.log(autocomplete('a', ['airplane','airport','Apple','ball']));