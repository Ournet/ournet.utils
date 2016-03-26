'use strict';

var logger = require('../lib').logger;
var assert = require('assert');

describe('logger', function() {
	it('should not log', function() {
		logger.log('info', 'info');
		logger.log('error', 'info');
	});
	it('should throw error', function() {
		assert.throws(function() {
			logger.log();
		});
		assert.throws(function() {
			logger.log('info');
		});
		assert.throws(function() {
			logger.error();
		});
	});

	it('should log', function() {
		logger.set(console);
		logger.log('info', 'info');
		logger.log('error', 'error');
	});
});
