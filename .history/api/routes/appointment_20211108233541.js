const router = require('express').Router()
const ObjectId = require('mongodb').ObjectId

// get appointment list
app.get('/appointments', async (req, res) => {
    // find all data in collection Appointments
    req.collection.find({}).toArray()
})

module.exports = router