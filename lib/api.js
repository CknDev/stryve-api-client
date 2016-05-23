'use strict';

var axios = require('axios');

axios.defaults.responseType = 'json';
axios.defaults.withCredentials = false;  // must be false!
axios.defaults.timeout = 30000; // 30 seconds
axios.defaults.baseURL = 'http://localhost:8181/api';

/**
 * Processes a get request to the specified endpoint.
 * 
 * @param {string} $endpoint
 * @param {object|null} $payload
 * @param {string|null} $asseccToken
 * @param {callback} $cb
 * @return object
 */
exports.get = function(endpoint, payload, accessToken, successCb, errorCb) {
	var configs = axiosConfig('get', endpoint, payload, accessToken);
	return submitRequest(endpoint, null, configs, successCb, errorCb);
}

/**
 * Processes a post request to the specified endpoint.
 * 
 * @param {string} $enpoint
 * @param {object|null} $payload
 * @param {string|null} $asseccToken
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.post = function(endpoint, payload, accessToken, successCb, errorCb) {
	var configs = axiosConfig('post', endpoint, payload, accessToken);
	return submitRequest(endpoint, payload, configs, successCb, errorCb);
}


// exports.put = function(options,  successCb, errorCb) {
	
// }

// exports.delete = function(options,  successCb, errorCb) {
	
// }

var axiosConfig = function(method, endpoint, payload, access_token) {
	var configs = {};

	configs['headers'] = {};

	if(typeof method === 'string')
		configs['method'] = method;

	if(typeof payload === 'object' && payload !== null) {
		if(method.toLowerCase() === 'get')
			configs['params'] = payload;
	}

	if(typeof access_token === 'string')
		configs.headers['authorization'] = access_token;

	return configs;
};

var submitRequest = function(endpoint, payload, configs, successCb, errorCb) {
	switch(configs.method.toLowerCase()) {
		case 'get':
			axios.get(endpoint, configs)
				.then(function(res) {
					return handleSuccessResponse(res, successCb)
				})
				.catch(function(res) {
					return handleErrorResponse(res, errorCb)
				});
			break;
		case 'post':
			axios.post(endpoint, payload, configs)
				.then(function(res) {
					return handleSuccessResponse(res, successCb)
				})
				.catch(function(res) {
					return handleErrorResponse(res, errorCb)
				});
			break;
		case 'put':
			// handle `put` request
			break;
		case 'delete':
			// handle `delete` request
			break;
	}
}

var handleErrorResponse = function(res, errorCb) {
	// Unknown Error - possibly 500 Internal Server or timeout error
	if (res instanceof Error) {
		var status = 0,
			statusText = res.message,
			errorCode = 0,
			errorMessage = res.message;
	} else if(typeof res.data.response != 'undefined') {
		var status = res.data.code,
			statusText = res.data.status,
			errorCode = res.data.response.errorCode,
			errorMessage = res.data.response.errorMessage;
	} else {
		var status = res.data.code,
			statusText = res.data.status,
			errorCode = res.data.code,
			errorMessage = res.data.status;
	}

	return errorCb({
		errorCode: errorCode,
		errorMessage: errorMessage
	});
}

var handleSuccessResponse = function(res, successCb) {
	return successCb(res.data.response);
}