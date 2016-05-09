'use strict';

var utils = require('../utils')
var api = require('../api');
var codes = require('../response-codes');

/**
 * Responds to an api login request.
 * URL - http://api.stryve.io/api/auth/login
 *
 * @param {object} $payload
 * @param {string} $accessToken
 * @param {function} $successCb
 * @param {function} $errorCb
 * @return object
 */
exports.postLogin = function(payload, accessToken, successCb, errorCb) {
	api.post('auth/login', payload, accessToken, function(res) {
		return utils.handleResponse(res, codes.CREATED, successCb, errorCb)
	});
};

/**
 * Responds to an api logout request.
 * URL - http://api.stryve.io/api/auth/logout
 *
 * @param {object} $payload
 * @param {string} $accessToken
 * @param {function} $successCb
 * @param {function} $errorCb
 * @return object
 */
exports.postLogout = function(payload, accessToken, successCb, errorCb) {
	api.post('auth/logout', payload, accessToken, function(res) {
		return utils.handleResponse(res, codes.OK, successCb, errorCb)
	});
};

/**
 * Responds to an api register request.
 * URL - http://api.stryve.io/api/auth/register
 *
 * @param {object} $payload
 * @param {function} $successCb
 * @param {function} $errorCb
 * @return object
 */
exports.postRegister = function(payload, successCb, errorCb) {
	api.post('auth/register', payload, function(res) {
		return utils.handleResponse(res, codes.CREATED, successCb, errorCb)
	});
}