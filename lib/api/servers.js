'use strict';

var api = require('../api');
var codes = require('../response-codes');

/**
 * Returns a list of servers the user belongs to.
 * GET - http://api.stryve.io/api/servers/self
 *
 * @param {object|null} $payload
 * @param {string} $accessToken
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.getServersSelf = function(payload, accessToken, successCb, errorCb) {
	return api.get('servers/self', payload, accessToken, successCb, errorCb);
};

/**
 * Returns a single server resource along with any specified relationships
 * GET - http://api.stryve.io/api/servers/{server_uuid}{?channels=true}
 *
 * @param {string} $serverUuid
 * @param {boolean} $includeChannels
 * @param {string} $accessToken
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.getServer = function(serverUuid, includeChannels, accessToken, successCb, errorCb) {
	var endpoint = 'servers/' + serverUuid + ((includeChannels)? '?channels=true' : '');
	return api.get(endpoint, null, accessToken, successCb, errorCb);
};

/**
 * Accept a server invitation.
 * GET - http://api.stryve.io/api/invitations/{invite_token}
 *
 * @param {string} $inviteToken
 * @param {string} $accessToken
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.getJoinServer = function(inviteToken, accessToken, successCb, errorCb) {
	var endpoint = 'invitations/' + inviteToken;
	return api.get(endpoint, null, accessToken, successCb, errorCb);
};

/**
 * Responds to a new server event request.
 * POST - http://api.stryve.io/api/servers/{server_uuid}/events
 *
 * @param {object} $payload
 * @param {string} $accessToken
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.postServerEvent = function(payload, accessToken, successCb, errorCb) {
	var endpoint = 'servers/' + payload.server_uuid + '/events';
	return api.post(endpoint, payload, accessToken, successCb, errorCb);
};

/**
 * Responds to a new server request.
 * POST - http://api.stryve.io/api/servers
 *
 * @param {object} $payload
 * @param {string} $accessToken
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.postCreateServer = function(payload, accessToken, successCb, errorCb) {
	return api.post('servers', payload, accessToken, successCb, errorCb);
};

/**
 * Responds to a new server channel request.
 * POST - http://api.stryve.io/api/servers/{server_uuid}/channels
 *
 * @param {object} $payload
 * @param {string} $accessToken
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.postCreateServerChannel = function(payload, accessToken, successCb, errorCb) {
	var endpoint = 'servers/' + payload.server + '/channels';
	return api.post(endpoint, payload, accessToken, successCb, errorCb);
};

/**
 * Responds to a new server invitation request.
 * POST - http://api.stryve.io/api/servers/{server_uuid}/invitations
 *
 * @param {string} $serverUuid
 * @param {string} $accessToken
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.postCreateServerInvitation = function(serverUuid, accessToken, successCb, errorCb) {
	var endpoint = 'servers/' + serverUuid + '/invitations';
	return api.post(endpoint, null, accessToken, successCb, errorCb);
};


