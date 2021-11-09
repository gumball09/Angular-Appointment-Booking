const router = require('express').Router()
const ObjectId = require('mongodb').ObjectId

// get appointment list
app.get('/appointments', (req, res) => {
    req.collection.find({})
})

module.exports = router