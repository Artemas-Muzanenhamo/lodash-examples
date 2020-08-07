var _ = require('../lodash');

function removeInvalidObjects() {
	const objects = [null, {mappedUid: 6, comparableType: 'RENTAL'}, NaN, ''];

	return _.compact(objects);
}

console.log(removeInvalidObjects());