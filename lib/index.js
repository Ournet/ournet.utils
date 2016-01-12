'use strict';

exports.html = require('./html');
exports.errors = require('./errors');
exports.data = require('./data');
exports.number = require('./number');

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

/**
 * Formats date: 2015-12-24
 * @param  {Date} date - Date instance
 * @param  {Object} [options] - Options
 * @param  {String} [options.separator] - Date format separator
 * @param  {Boolean} [options.utc] - Format with UTC date
 * @return {String}
 */
function formatDate(date, options) {
	options = options || {};
	if (typeof(options) === 'string') {
		options = {
			separator: options
		};
	}

	var separator = typeof(options.separator) === 'string' ? options.separator : '-';
	var utc = options.utc === true ? 'UTC' : '';


	var year = date['get' + utc + 'FullYear']();
	var month = date['get' + utc + 'Month']() + 1;
	var day = date['get' + utc + 'Date']();

	month = month < 10 ? '0' + month : month;
	day = day < 10 ? '0' + day : day;

	return [year, month, day].join(separator);
}

function formatUTCDate(date, options) {
	options = options || {};
	options.utc = true;

	return formatDate(date, options);
}

exports.cleanObject = cleanObject;
exports.isNull = isNull;
exports.isNotNull = isNotNull;
exports.formatDate = formatDate;
exports.formatUTCDate = formatUTCDate;
