'use strict';

exports.html = require('./html');
exports.errors = require('./errors');

function cleanObject(obj) {
	if (!obj) {
		return obj;
	}
	for (var prop in obj) {
		if (~[null, undefined].indexOf(obj[prop])) {
			delete obj[prop];
		}
	}
	return obj;
}

function isNull(value) {
	return [undefined, null].indexOf(value) > -1;
}

function isNotNull(value) {
	return !isNull(value);
}

exports.cleanObject = cleanObject;
exports.isNull = isNull;
exports.isNotNull = isNotNull;
