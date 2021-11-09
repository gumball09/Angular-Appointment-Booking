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

    // create a new appointment object
    const newAppointment = { appointmentDate, name, email }
    // insert the new appointment to the collection in the same req
    req.collection
        .insertOne(newAppointment)
        .then((result) => res.json(result))
        .catch((error) => res.send(error))
})

// delete existing appointment
router.delete('/appointments/:id', (req, res) => {
    const id = Number(req.body.id)
    // convert the id to MONGO ID (which is _id)
    const _id = ObjectId(id)

    // delete the appointment with the given id in the same req
    req.collection.deleteOne({ id})
})

module.exports = router