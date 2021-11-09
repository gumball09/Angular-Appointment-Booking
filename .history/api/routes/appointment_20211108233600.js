const router = require('express').Router()
const ObjectId = require('mongodb').ObjectId

// get appointment list
app.get('/appointments', (req, res) => {
    // find all data in collection Appointments
    req.collection
        .find({})
        .toArray()
        .then((resu))
})

module.exports = router