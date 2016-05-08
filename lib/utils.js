
/**
 * Handles and formats an api response.
 * 
 * @param {mixed} $res
 * @param {int} $expects
 * @param {function} $successCb
 * @param {function} $errorCb
 * @return object
 */
exports.handleResponse = function(res, expects, successCb, errorCb) {
	// check we got what we were expecting
	if(typeof res.body === 'object') {
		return (res.body.code === expects)
			? successCb(res.body)
			: errorCb(res.body);
	} else {
		// unknown error
		return errorCb({
			code: res.statusCode,
			status: res.statusMessage,
			message: 'error',
			response: {
				errorCode: res.statusCode,
				errorMessage: res.statusMessage
			}
		});
	}
}

/**
 * Replaces a matched section of a string.
 * 
 * @param {string} $str
 * @param {string} $replaceThis
 * @param {string} $replaceWith
 * @return string
 */
// exports.stringReplace = function(str, replaceThis, replaceWith) {
// 	return str.replace(replaceThis, replaceWith);
// }