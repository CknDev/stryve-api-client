'use strict';

var api = require('../api');
var codes = require('../response-codes');

/**
 * Responds to a request for users own data
 * GET - http://api.stryve.io/api/users/self
 *
 * @param {string} $accessToken
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.getUserSelf = function(accessToken, successCb, errorCb) {
	return api.get('users/self', null, accessToken, successCb, errorCb);
};
