const express = require("express")
const router = express.Router()

const getStats = require("../controllers/patient-controller/dashboard")
router.get('/dashboard/:id', getStats)

const {getFavourites, removeFavourites} = require("../controllers/patient-controller/favourites")
router.get('/favourites/:id', getFavourites)
router.delete('/favourites/:id', removeFavourites)

const {getMedicalDetails, updateMedicalDetails, deleteMedicalDetails, addMedicalDetails} = require("../controllers/patient-controller/medical-details")
router.get('/medical-details/:id', getMedicalDetails)
router.post('/medical-details/:id', addMedicalDetails)
router.put('/medical-details/:id', updateMedicalDetails)
router.delete('/medical-details/:id', deleteMedicalDetails)

const {getProfile, setProfile, updateProfile} = require('../controllers/patient-controller/profile')
router.get('/profile-setings/:id', getProfile)
router.post('/profile-settings/:id', setProfile)
router.put('/profile-settings/:id', updateProfile)

const updatePassword = require('../controllers/patient-controller/password')
router.put('/change-password/:id', updatePassword)

module.exports = router