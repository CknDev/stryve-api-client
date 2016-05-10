'use strict';

var utils = require('../utils')
var api = require('../api');
var codes = require('../response-codes');

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
exports.postChannelEvent = function(payload, accessToken, successCb, errorCb) {
	var endpoint = 'channels/' + payload.channel_uuid + '/events';
	api.post(endpoint, payload, accessToken, function(res) {
		return utils.handleResponse(res, codes.CREATED, successCb, errorCb)
	});
};
