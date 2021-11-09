require('dotenv').config()

module.exports = {
    dbUrl: process.env.DB_URL,
    dbName: process.env.DB_,
    dbCollection: 'appointments'
}