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


