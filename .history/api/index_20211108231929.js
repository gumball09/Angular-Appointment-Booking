const app = require('./app')
const debug = require('debug')('api:server')
const http = require('http')

const PORT = normalize(process.env.PORT || '3000')
c