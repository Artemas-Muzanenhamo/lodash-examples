var _ = require('../lodash');

function removeInvalidObjects() {
	const objects = [null, {mappedUid: 6, comparableType: 'RENTAL'}, NaN, '', undefined];

	return _.compact(objects);
}

console.log(removeInvalidObjects());