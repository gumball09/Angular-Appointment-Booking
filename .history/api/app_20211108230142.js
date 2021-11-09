const express = require('express')

const createError = require('http-errors')
const path = require('path')
const cookiParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

// Database configurations
const config = require('./config')
const MongoClient = require('mongodb').MongoClient

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


// Middleware to retrieve the collection from the local database
app.use((req, res, next) => {
    const collection = req.app.locals[config.dbCollection]
    req.collection = collection
    next()
})