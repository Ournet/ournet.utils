'use strict';

var errors = require('../lib').errors;
var assert = require('assert');

describe('errors', function() {
	it('should exists Error', function() {
		assert.ok(errors.Error);
		assert.equal('Error', errors.Error.name);
	});
	it('should exists RangeError', function() {
		assert.ok(errors.RangeError);
		assert.equal('RangeError', errors.RangeError.name);
	});
	it('should exists OurnetError', function() {
		assert.ok(errors.OurnetError);
		var error = new errors.OurnetError();
		assert.equal('OurnetError', error.name);
		assert.equal(1000, error.code);
	});
	it('should exists OurnetValidationError', function() {
		assert.ok(errors.OurnetValidationError);
		var error = new errors.OurnetValidationError();
		assert.equal('OurnetValidationError', error.name);
		assert.equal(1000, error.code);
	});
});
