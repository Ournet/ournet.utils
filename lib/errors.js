'use strict';

var errors = module.exports = require('errod');

errors.create({
	name: 'OurnetError',
	message: 'Unknown error',
	code: 1000
});

errors.create({
	name: 'OurnetValidationError',
	message: 'Invalid data',
	parent: errors.OurnetError
});

errors.create({
	name: 'OurnetDataError',
	message: 'Data error',
	parent: errors.OurnetError
});

errors.create({
	name: 'OurnetDbError',
	message: 'Database error',
	parent: errors.OurnetError
});
