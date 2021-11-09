require('dotenv').config()

module.exports = {
    dbUrl: process.env.DB_URL,
    dbName: 'appointments-booking-app',
    dbCollection: 'appointments'
}