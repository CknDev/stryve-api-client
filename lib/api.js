'use strict';

var axios = require('axios');
axios.defaults.baseURL = 'http://api.stryve.io/api';

var axiosConfig = function(method, endpoint, payload, access_token) {
	var configs = {};
	
	configs['withCredentials'] = true;
	configs['headers'] = {};
	configs['timeout'] = 10000; //10 seconds
	configs['responseType'] = 'json';

	if(typeof method === 'string')
		configs['method'] = method;

	if(typeof payload === 'object' && payload !== null) {
		if(method.toLowerCase() === 'get')
			configs['params'] = payload;
		// else
		// 	configs['data'] = payload;
	}

	if(typeof access_token === 'string')
		configs.headers['authorization'] = access_token;

	return configs;
};

var submitRequest = function(endpoint, payload, configs, cb) {
	axios.post(endpoint, payload, configs)
		// intercepter here - https://github.com/mzabriskie/axios#interceptors
	  .then(function (response) {
	    console.log(response.data);
	  })
	  .catch(function (response) {
	    console.log(response.data);
	  });
}

exports.post = function(endpoint, payload, accessToken, cb) {
	var configs = axiosConfig('post', endpoint, payload, accessToken);
	return submitRequest(endpoint, payload, configs, cb);
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