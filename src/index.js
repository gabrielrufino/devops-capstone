'use strict'

const restify = require('restify')
const controller = require('./controller')

const server = restify.createServer()

server.get('/', controller)

server.listen(3000, () => console.log('%s listening at %s', server.name, server.url))

module.exports = server;
