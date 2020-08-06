var _ = require('../lodash');

function getValue(object) {
	return _.get(object, 'name', 'DEFAULT VALUE HERE');
}

console.log(getValue({name: 'some value present'}));
console.log(getValue());
