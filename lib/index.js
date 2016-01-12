'use strict';

exports.html = require('./html');
exports.errors = require('./errors');
exports.data = require('./data');

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

function formatDate(date, separator) {
	separator = typeof(separator) === 'string' ? separator : '-';
	return date.getFullYear() + separator + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + separator + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
}

exports.cleanObject = cleanObject;
exports.isNull = isNull;
exports.isNotNull = isNotNull;
exports.formatDate = formatDate;
