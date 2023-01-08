const express = require('express')
const router = express.Router()

const getStats = require('../controllers/doctor-controller/dashboard')
router.get('/dashboard/:id', getStats)

const getAppointments = require('../controllers/doctor-controller/appointment')
router.get('/appointments/:id', getAppointments)

const {getTimings, setTimings, updateTimings, deleteTimings} = require('../controllers/doctor-controller/timings')

router.get('/schedule-timings/:id', getTimings)
router.post('/schedule-timings/:id', setTimings)
router.put('/schedule-timings/:id', updateTimings)
router.delete('/schedule-timings/:id', deleteTimings)

const getReviews = require('../controllers/doctor-controller/reviews')
router.get('/reviews/:id', getReviews)

const {getProfile, setProfile, updateProfile} = require('../controllers/doctor-controller/profile')
router.get('/profile-settings/:id', getProfile)
router.post('/profile-settings/:id', setProfile)
router.put('/profile-settings/:id', updateProfile)

const updatePassword = require('../controllers/doctor-controller/password')
router.put('/change-password/:id', updatePassword)


module.exports = router