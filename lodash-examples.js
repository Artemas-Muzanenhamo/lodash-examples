// Load the full build.
var _ = require('./lodash');

function something() {
	let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	return _.filter(numberArray, n => n % 2 == 0);
}

console.log(something());