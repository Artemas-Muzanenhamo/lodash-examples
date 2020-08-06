var _ = require('../lodash');

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getEvenNumbers() {
	return _.filter(numberArray, n => n % 2 === 0);
}

console.log(getEvenNumbers());