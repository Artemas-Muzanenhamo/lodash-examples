// Load the full build.
var _ = require('./lodash');

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getOddNumbers() {
	return _.reject(numberArray, n => n % 2 === 0);
}

console.log(getOddNumbers());
