'use strict';

exports.encode = function(html) {
	if (!html) {
		return html;
	}
	var entities = require('entities');

	return entities.encodeHTML(html);
};

exports.decode = function(html) {
	if (!html) {
		return html;
	}
	var entities = require('entities');

	return entities.decodeHTML(html);
};

exports.strip = function(html) {
	if (!html) {
		return html;
	}
	html = exports.stripComments(html);
	return html.replace(/<\/?[^<>]*>/gi, '');
};

exports.stripComments = function(html) {
	if (!html) {
		return html;
	}
	return html.replace(/<!--[\s\S]*?-->/g, '');
};
