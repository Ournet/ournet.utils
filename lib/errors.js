'use strict';

var errors = module.exports = require('errod');

errors.create({
	name: 'OurnetError',
	defaultMessage: 'Unknown error',
	code: 1000
});

errors.create({
	name: 'OurnetValidationError',
	defaultMessage: 'Invalid data',
	parent: errors.OurnetError
});

errors.create({
	name: 'OurnetDataError',
	defaultMessage: 'Data error',
	parent: errors.OurnetError
});

errors.create({
	name: 'OurnetDbError',
	defaultMessage: 'Database error',
	parent: errors.OurnetError
});
