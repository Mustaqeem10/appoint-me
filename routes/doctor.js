const express = require('express')
const router = express.Router()

const getStats = require('../controllers/d-dashboard')
router.get('/dashboard', getStats)

const getAppointments = require('../controllers/d-appointment')
router.get('/appointments', getAppointments)

const {getTimings, setTimings} = require('../controllers/d-timings')

router.get('/schedule-timings', getTimings)
router.post('/schedule-timings', setTimings)

const getReviews = require('../controllers/d-reviews')
router.get('/reviews', getReviews)

const setProfile = require('../controllers/d-profile')
router.post('/profile-settings', setProfile)

const updatePassword = require('../controllers/d-password')
router.post('/change-password', updatePassword)


module.exports = router