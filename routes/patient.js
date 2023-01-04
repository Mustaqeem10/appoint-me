const express = require("express")
const router = express.Router()

const getFavourites = require("../controllers/patient-controller/favourites")
router.get('/favourites', getFavourites)

module.exports = router