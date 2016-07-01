/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
	console.log(func.length);
	if (func.length) {
		return func.bind(this, this.dependency.dep3, this.dependency.dep1, this.dependency.dep2);
	} else {
		return func.bind(this);
	}
}

var deps = {
  'dep1': function () {return 'this is dep1';},
  'dep2': function () {return 'this is dep2';},
  'dep3': function () {return 'this is dep3';},
  'dep4': function () {return 'this is dep4';}
};
  
var di = new DI(deps);

var myFunc = di.inject(function (dep3, dep1, dep2) {
  return [dep1(), dep2(), dep3()].join(' -> ');
});


console.log(myFunc(3));

// Test.assertEquals(myFunc(), 'this is dep1 -> this is dep2 -> this is dep3');

var xxx = function (arguments) {
	
}

console.dir(xxx);