const app = require('./app')
const debug = require('debug')('api:server')
const http = require('http')

const PORT = normalize(process.env.PORT || '3000')
app.set('port', PORT)

const server = httpCreateServer(app)

server.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`)
}).on('error', () => {
    console.error(`Server error: ${error})
})