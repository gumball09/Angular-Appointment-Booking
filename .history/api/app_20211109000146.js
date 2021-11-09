const express = require('express')

const createError = require('http-errors')
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// Database configurations
const config = require('./config')
const MongoClient = require('mongodb').MongoClient

// Routes
const apptRoute = require('./routes/appointment')

const { requestLogger } = require('./utils/middlewares')
const { DH_NOT_SUITABLE_GENERATOR } = require('constants')

// ----------------------------------------------------
// Set up application and connect to DB on local host
// *** NOTE: MUST START THE MONGODB SERVICE FIRST ***
const app = express()
MongoClient.connect(`mongodb://127.0.0.1:27017`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    // store a reference to the database to use it later
    const db = client.db(config.dbName)
    // get the collection from the database
    const collection = db.collection(config.dbCollection)
    // set the collection to app locals settings
    app.locals[config.dbCollection] = collection
    console.log('Connected to DB! Database: ', config.dbName)
  })
  .catch((error) => {
    console.error('Error connecting to DB: ', error.message)
  })

// View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// Middlewares
app.use(express.json()) // parse the body req
app.use(express.urlencoded({ extended: false })) // only parse normal text
app.use(cookieParser())
app.use(cors()) // connect to front-end without errors

// Use static files
app.use(express.static(path.join(__dirname, 'public')))

// Middleware to log info per req
app.use(requestLogger)

// Middleware to retrieve the collection from the local database per req
app.use((req, res, next) => {
  const collection = req.app.locals[config.dbCollection]
  req.collection = collection
  next()
})

// Use of routes
app.use('/', apptRoute)

// Middleware to handle 404 errors
app.use((req, res, next) => {
  // catch 404 and forward to error handler
  next(createError(404))
})

// Middleware to handle other errors
app.use((error, req, res, next) => {
  // set locals of res
  res.locals.message = error.message
  // send errors in DEV mode only
  res.locals.error = req.app.get('env') === 'development' ? error : {}

  // render error page along with the status
  res.status(error.status || 500).render('error')
})

module.exports = app
