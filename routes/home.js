const express = require('express')
const getDepartments = require('../controllers/home-controllers/departments')
const router = express.Router()


router.get('/', getDepartments)
router.get('/departments', getDepartments)

module.exports = router