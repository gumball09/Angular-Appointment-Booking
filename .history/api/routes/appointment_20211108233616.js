const router = require('express').Router()
const ObjectId = require('mongodb').ObjectId

// get appointment list
app.get('/appointments', (req, res) => {
    // find all data in collection Appointments
    req.collection
        .find({})
        .toArray()
        .then((results) => res.json(results))
        .catch((error) => res.send(error))
})

module.exports = router