require('dotenv').config()

module.exports = {
    dbUrl: process.env.DB_URL,
    dbName: process.env.DB_NAME,
    dbCollection: process.env.DB_COLLECTION
}