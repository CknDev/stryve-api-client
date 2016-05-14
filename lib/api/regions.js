'use strict';

var api = require('../api');
var codes = require('../response-codes');

/**
 * Returns a list of available regions
 * URL - http://api.stryve.io/api/regions
 *
 * @param {string} $accessToken
 * @param {callback} $successCb
 * @param {callback} $errorCb
 * @return object
 */
exports.getRegions = function(accessToken, successCb, errorCb) {
	api.get('regions', null, accessToken, successCb, errorCb);
};