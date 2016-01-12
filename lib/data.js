'use strict';

function is(value, type) {
	return typeof value === type;
}

function dynamoGet(data) {
	if (~[null, undefined].indexOf(data)) {
		return data;
	}
	if (Array.isArray(data)) {
		return data.map(dynamoGet);
	}
	if (data.Items && data.Items.length > 0 && is(data.Items[0].toJSON, 'function')) {
		data.Items = data.Items.map(dynamoGet);
	}
	if (is(data.toJSON, 'function')) {
		return data.toJSON();
	}
	return data;
}

exports.dynamoGet = dynamoGet;

function mongoGetItem(data, nofields) {

	function mapItem(item) {
		return mongoGetItem(item, nofields);
	}

	var _id = data._id;

	data = is(data.toObject, 'function') ? data.toObject() : data;
	for (var prop in data) {
		if (prop === 'id' && is(_id, 'number')) {
			data[prop] = parseInt(data[prop]);
		} else if (data[prop] === null || nofields.indexOf(prop) > -1) {
			delete data[prop];
		} else if (Array.isArray(data[prop])) {
			data[prop] = data[prop].map(mapItem);
		}
	}
	return data;
}

function mongoGet(data, nofields) {
	nofields = nofields || ['_id', '__v'];
	if (!Array.isArray(nofields)) {
		nofields = [nofields];
	}

	if (data && data.toObject) {
		return mongoGetItem(data, nofields);
	}
	if (data && Array.isArray(data)) {
		return data.map(function(item) {
			return mongoGetItem(item, nofields);
		});
	}
	return data;
}

exports.mongoGet = mongoGet;
