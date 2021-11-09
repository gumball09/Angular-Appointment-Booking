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
    // get the collection from the databa
    const collection = db.collection(config.dbCollection)
    app.locals[config.dbCollection] = collection
})

// Middleware to retrieve the collection from the local database
app.use((req, res, next) => {
    const collection = req.app.locals[config.dbCollection]
    req.collection = collection
    next()
})