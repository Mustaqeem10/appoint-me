const express = require('express')
const router = express.Router()
const getStats = require('../controllers/d-dashboard')

router.get('/dashboard', getStats)

module.exports = router