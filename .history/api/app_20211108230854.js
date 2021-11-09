const express = require('express')

const createError = require('http-errors')
const path = require('path')
const cookiParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

// Database configurations
const config = require('./config')
const MongoClient = require('mongodb').MongoClient
const { parentPort } = require('worker_threads')

// Routes

// ----------------------------------------------------
// Set up application and connect to DB on local host
const app = express()
MongoClient.connect(`mongodb://${config.dbHost}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((client) => {
    // get the database 
    const db = client.db(config.dbName);
    // get the collection from the database
    const collection = db.collection(config.dbCollection)
    // set the collection to app locals settings
    app.locals[config.dbCollection] = collection
}).catch((error) => {
    console.error('Error connecting to DB: ', error.message)
})

// View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// Middlewares
app.use(logger('dev')) // log info per req
app.use(express.json()) // parse the body req
app.use(express.urlencoded({ extended: false })) // only parse normal text
app.use(cookieParser())
app.use(cors()) // connect to front-end without errors

// Use static files
app.use(express.static(path.join(__dirname, 'public')))

// Middleware to retrieve the collection from the local database
app.use((req, res, next) => {
    const collection = req.app.locals[config.dbCollection]
    req.collection = collection
    next()
})

// Use of routes

// Middleware to handle 404 errors
app.use((req, res, next) => {
    // catch 404 and forward to error handler
    next(createError(404))
})

// Middleware to handle other errors
app.use((error, req, res, next) => {
    // set locals, provide errors in DEV only
    res.locals.message = error.message
    res.locals.error = req.app.get('env') === 'development' ? error : }
})