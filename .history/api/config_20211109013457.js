require('dotenv').config()

module.exports = {
    dbUrl: process.env.DB_
    dbName: 'appointments-booking-app',
    dbCollection: 'appointments'
}