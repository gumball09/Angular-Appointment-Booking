require('dotenv').config()
const app = require('./app')
const http = require('http')

const PORT = process.env.PORT || '3000'
app.set('port', PORT)

const server = http.createServer(app)

server.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`)
})

server.on('error', (error) => {
    console.log(`Server error: ${error.message}`)
})