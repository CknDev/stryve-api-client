'use strict';

var api = require('../api');
var codes = require('../response-codes');

/**
 * Responds to a request for a channels evenets
 * GET - http://api.stryve.io/api/channels/{channel_uuid}/events?limit={25}
 *
 * @param {string} $channelUuid
 * @param {number|null} $limit
 * @param {string} $accessToken
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.getChannelEvents = function(channelUuid, limit, accessToken, successCb, errorCb) {
	var endpoint = 'channels/' + channelUuid + '/events';
	endpoint += '?limit=' + ((typeof limit === 'number')? Math.ceil(limit) : 25);
	return api.get(endpoint, null, accessToken, successCb, errorCb);
};

/**
 * Responds to a new conatct event request.
 * POST - http://api.stryve.io/api/contacts/{contact_uuid}/events
 *
 * @param {object} $payload
 * @param {number} $limit
 * @param {string} $accessToken
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.postChannelEvent = function(payload, accessToken, successCb, errorCb) {
	var endpoint = 'channels/' + payload.channel_uuid + '/events';
	return api.post(endpoint, payload, accessToken, successCb, errorCb);
};