'use strict';

var html = require('../lib').html;
var assert = require('assert');

describe('Html', function() {
	it('#encode', function() {
		assert.equal('&lt;a href&equals;&quot;http&colon;&sol;&sol;www&period;ournet&period;ro&sol;&quot;&gt;link&lt;&sol;a&gt;', html.encode('<a href="http://www.ournet.ro/">link</a>'));
	});
	it('#decode', function() {
		assert.equal('<a href="http://www.ournet.ro/">link</a>', html.decode('&lt;a href&equals;&quot;http&colon;&sol;&sol;www&period;ournet&period;ro&sol;&quot;&gt;link&lt;&sol;a&gt;'));
	});
});
