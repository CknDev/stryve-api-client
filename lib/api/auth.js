'use strict';

var api = require('../api');
var codes = require('../response-codes');

/**
 * Responds to an api login request.
 * URL - http://api.stryve.io/api/auth/login
 *
 * @param {object} $payload
 * @param {string} $accessToken
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.postLogin = function(payload, accessToken, successCb, errorCb) {
	api.post('auth/login', payload, accessToken, successCb, errorCb);
};

/**
 * Responds to an api logout request.
 * URL - http://api.stryve.io/api/auth/logout
 *
 * @param {string} $accessToken
 * @param {callback} $cb
 * @return object
 */
exports.postLogout = function(accessToken, cb) {
	api.post('auth/logout', null, accessToken, cb, cb);
};

/**
 * Responds to an api register request.
 * URL - http://api.stryve.io/api/auth/register
 *
 * @param {object} $payload
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.postRegister = function(payload, successCb, errorCb) {
	api.post('auth/register', payload, null, successCb, errorCb);
}