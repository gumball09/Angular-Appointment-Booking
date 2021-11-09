const router = require('express').Router()
const ObjectId = require('mongodb').ObjectId

// get appointment list
router.get('/appointments', (req, res) => {
    // find all data in collection Appointments
    req.collection
        .find({})
        .toArray()
        .then((results) => res.json(results))
        .catch((error) => res.send(error))
})

// create new appointment
router.post('/appointments', (req, res) => {
    // get user input from req body
    const { appointmentDate, name, email } = req.body

    // validation
    if(!appointmentDate || !name || !email) {
        return res.status(400).json({ message: 'Missing one of the information required!' })
    }

    const newAppointment = { appointmentDate, name, email }
})

module.exports = router