'use strict';

var instance;

var log = exports.log = function() {
	if (arguments.length < 2) {
		throw new Error('log arguments are required');
	}
	var type = arguments[0];
	if (['info', 'warn', 'error'].indexOf(type) < 0) {
		throw new Error('log type must by: info, warn or error');
	}

	if (instance && instance[type]) {
		instance[type].apply(instance, Array.prototype.slice.call(arguments, 1));
	}
};

exports.info = log.bind(null, 'info');
exports.warn = log.bind(null, 'warn');
exports.error = log.bind(null, 'error');

exports.set = function(logger) {
	instance = logger;
};
