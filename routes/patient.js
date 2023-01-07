const express = require("express")
const router = express.Router()

const getFavourites = require("../controllers/patient-controller/favourites")
router.get('/favourites', getFavourites)

const {getMedicalDetails, updateMedicalDetails, deleteMedicalDetails} = require("../controllers/patient-controller/medical-details")
router.get('/medical-details', getMedicalDetails)
router.put('/medical-details', updateMedicalDetails)
router.delete('/medical-details', deleteMedicalDetails)

const {getProfile, setProfile, updateProfile} = require('../controllers/patient-controller/profile')
router.get('/profile-setings', getProfile)
router.post('/profile-settings', setProfile)
router.put('/profile-settings', updateProfile)

const updatePassword = require('../controllers/patient-controller/password')
router.put('/change-password', updatePassword)

module.exports = router