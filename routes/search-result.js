const express = require('express')
const { getDoctorData } = require('../controllers/search-result-controller')
const router = express.Router()



router.get("/api/search",getDoctorData )


module.exports = router;

