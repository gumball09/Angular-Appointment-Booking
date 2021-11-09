const router = require('express').Router()
const ObjectId = require('mongodb').ObjectId

// get appointment list
app.get('/appointments', (req, res) => {
    // find all data in colle
    req.collection.find({})
})

module.exports = router