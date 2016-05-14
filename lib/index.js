'use strict';

var Auth = require('./api/auth');
var Users = require('./api/users');
var Servers = require('./api/servers');
var Regions = require('./api/regions');
var Channels = require('./api/channels');
var Contacts = require('./api/contacts');

module.exports = {
    auth: Auth,
    users: Users,
    regions: Regions,
    servers: Servers,
    channels: Channels,
    contacts: Contacts
};
