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
	console.log(limit);
	var endpoint = 'contacts/search?q=' + query;
	endpoint += '&limit=' + ((typeof limit === 'number')? Math.ceil(limit) : 25);
	console.log(endpoint);
	return api.get(endpoint, null, accessToken, successCb, errorCb);
};

/**
 * Responds to a request for the events between two users
 * GET - http://api.stryve.io/api/users/events/{contact_uuid}?limit={25}
 *
 * @param {number} $limit
 * @param {string} $accessToken
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.getContactEvents = function(contact_uuid, limit, accessToken, successCb, errorCb) {

	// var endpoint = 'users?q=' + query;
	// return api.get(endpoint, null, accessToken, successCb, errorCb);
};
