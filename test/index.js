var client = require('../lib/index.js')

var test1 = function(res) {
	console.log(res);
}

var test2 = function(res) {
	console.log(res);
}

var loginPayload = {
	email: 'nick@account.com',
	password: 'test1234'
}

client.auth.postLogin(loginPayload, null, test1, test2)
// client.auth.postLogout(null, 'Muc7094w6ESY38aepPyDqWnfNRsojtkVK2UCJQvmlBihFAZHLrTgxbOXIGd5', test1, test2)