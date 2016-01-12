'use strict';

var number = require('../lib').number;
var assert = require('assert');

describe('number', function() {
	it('#format', function() {
		assert.equal('12.00', number.format(12));
		assert.equal('12.01', number.format(12.01, 2));
		assert.equal('12,24', number.format(12.242243, 2, 'ro'));
	});
});
