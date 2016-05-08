'use strict';

var request = require('./request');
var codes = require('./response-codes');

var handleResponse = function(res, expects, successCb, errorCb) {
	// check we got what we were expecting
	if(typeof res.body === 'object') {
		return (res.body.code === expects)
			? successCb(res.body)
			: errorCb(res.body)		
	} else {
		// unknown error
		return errorCb({
			code: res.statusCode,
			status: res.statusMessage,
			message: 'error'
		});
	}
}

var login = function(payload, accessToken, successCb, errorCb) {
	request.post('auth/login', payload, accessToken, function(res) {
		return handleResponse(res, codes.CREATED, successCb, errorCb)
	});
};

var logout = function(payload, accessToken, successCb, errorCb) {
	request.post('auth/logout', payload, accessToken, function(res) {
		return handleResponse(res, codes.OK, successCb, errorCb)
	});
};

var test1 = function(res) {
	console.log(res);
}

var test2 = function(res) {
	console.log(res);
}

var loginPayload = {
	email: 'nick@account.com',
	password: 'test1234'
}

// login(loginPayload, null, test1, test2)
logout(null, 'Muc7094w6ESY38aepPyDqWnfNRsojtkVK2UCJQvmlBihFAZHLrTgxbOXIGd5', test1, test2)

// exports.logout = function() {
// 	request.post('', successCb, errorCb);
// };

// export the class
// module.exports = Api;