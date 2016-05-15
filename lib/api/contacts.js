'use strict';

var api = require('../api');
var codes = require('../response-codes');

/**
 * Responds to a search for contacts
 * GET - http://api.stryve.io/api/contacts/search?q={query}&limit={25}
 *
 * @param {string} $query
 * @param {number} $limit
 * @param {string} $accessToken
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.getSearchContacts = function(query, limit, accessToken, successCb, errorCb) {
	var endpoint = 'contacts/search?q=' + query;
	endpoint += '&limit=' + ((typeof limit === 'number')? Math.ceil(limit) : 25);
	return api.get(endpoint, null, accessToken, successCb, errorCb);
};

/**
 * Responds to a request for the events between two users
 * GET - http://api.stryve.io/api/contacts/{contactUuid}/events?limit={25}
 *
 * @param {string} $contactUuid
 * @param {number} $limit
 * @param {string} $accessToken
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.getContactEvents = function(contactUuid, limit, accessToken, successCb, errorCb) {
	var endpoint = 'contacts/' + contactUuid + '/events';
	endpoint += '?limit=' + ((typeof limit === 'number')? Math.ceil(limit) : 25);
	return api.get(endpoint, null, accessToken, successCb, errorCb);
};

/**
 * Responds to a request to create a new event between two users
 * POST - http://api.stryve.io/api/contacts/{contactUuid}/events
 *
 * @param {string} $contactUuid
 * @param {number} $limit
 * @param {string} $accessToken
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.postContactEvent = function(payload, accessToken, successCb, errorCb) {
	var endpoint = 'contacts/' + payload.recipient_uuid + '/events';
	return api.post(endpoint, payload, accessToken, successCb, errorCb);
};

/**
 * Responds to a request to pin a user as a contact
 * POST - http://api.stryve.io/api/contacts/{uuid}
 *
 * @param {string} $contactUuid
 * @param {string} $accessToken
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.postPinContact = function(contactUuid, accessToken, successCb, errorCb) {
	var endpoint = 'contacts/' + contactUuid;
	return api.post(endpoint, null, accessToken, successCb, errorCb);
};


