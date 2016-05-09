'use strict';

var request = require('request');
var base_url = 'http://api.stryve.io/api/';

var requestOptions = function(method, endpoint, payload, access_token) {
	var options = {};
	
	options['headers'] = {};
	options['json'] = true

	if(typeof method === 'string')
		options['method'] = method;

	if(typeof endpoint === 'string')
		options['url'] = base_url + endpoint;

	if(typeof payload === 'object' && payload !== null) {
		if(method.toLowerCase() === 'get')
			options['qs'] = payload;
		else
			options['body'] = payload;
	}

	if(typeof access_token === 'string')
		options.headers['authorization'] = access_token;

	return options;
};

var submitRequest = function(options, cb) {
	request(options, function(err, res, body) {
		return cb(res)
	});
}

exports.post = function(endpoint, payload, accessToken, cb) {
	var options = requestOptions('post', endpoint, payload, accessToken);
	return submitRequest(options, cb);
}

// exports.post = function(options,  successCb, errorCb) {
	
// }

// exports.put = function(options,  successCb, errorCb) {
	
// }

// exports.delete = function(options,  successCb, errorCb) {
	
// }

// exports.arrayToObject = function (source, options) {
//     var obj = options.plainObjects ? Object.create(null) : {};
//     for (var i = 0; i < source.length; ++i) {
//         if (typeof source[i] !== 'undefined') {
//             obj[i] = source[i];
//         }
//     }

//     return obj;
// };