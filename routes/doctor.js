const express = require('express')
const router = express.Router()

const getStats = require('../controllers/doctor-controller/dashboard')
router.get('/dashboard', getStats)

const getAppointments = require('../controllers/doctor-controller/appointment')
router.get('/appointments', getAppointments)

const {getTimings, setTimings} = require('../controllers/doctor-controller/timings')

router.get('/schedule-timings', getTimings)
router.post('/schedule-timings', setTimings)

const getReviews = require('../controllers/doctor-controller/reviews')
router.get('/reviews', getReviews)

const {getProfile, setProfile, updateProfile} = require('../controllers/doctor-controller/profile')
router.get('/profile-setings', getProfile)
router.post('/profile-settings', setProfile)
router.put('/profile-settings', updateProfile)

const updatePassword = require('../controllers/doctor-controller/password')
router.post('/change-password', updatePassword)


module.exports = router