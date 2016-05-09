'use strict';

var Auth = require('./api/auth');
var Servers = require('./api/servers');
var Channels = require('./api/channels');

module.exports = {
    auth: Auth,
    servers: Servers,
    channels: Channels
};
