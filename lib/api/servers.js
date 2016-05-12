'use strict';

var api = require('../api');
var codes = require('../response-codes');

/**
 * Returns a list of servers the user belongs to.
 * URL - http://api.stryve.io/api/servers/self
 *
 * @param {object|null} $payload
 * @param {string} $accessToken
 * @param {function} $successCb
 * @param {function} $errorCb
 * @return object
 */
exports.getServersSelf = function(payload, accessToken, successCb, errorCb) {
	api.get('servers/self', payload, accessToken, successCb, errorCb);
};

/**
 * Responds to a new server event request.
 * URL - http://api.stryve.io/api/servers/{server_uuid}/events
 *
 * @param {object} $payload
 * @param {string} $accessToken
 * @param {function} $successCb
 * @param {function} $errorCb
 * @return object
 */
exports.postServerEvent = function(payload, accessToken, successCb, errorCb) {
	var endpoint = 'servers/' + payload.server_uuid + '/events';
	api.post(endpoint, payload, accessToken, function(res) {
		return api.handleResponse(res, codes.CREATED, successCb, errorCb)
	});
};
