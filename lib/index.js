'use strict';

var Auth = require('./api/auth');
var Users = require('./api/users');
var Servers = require('./api/servers');
var Channels = require('./api/channels');

module.exports = {
    auth: Auth,
    users: Users,
    servers: Servers,
    channels: Channels
};
