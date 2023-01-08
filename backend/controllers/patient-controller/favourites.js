const pool = require('../../db.config')

const getFavourites = async (req, res) => {
    const patient_id = Number(req.params.id)
    const getFavouritesQuery = `SELECT DISTINCT first_name, last_name, education, specialization, rating, 
    location_name, payment FROM favourite
    INNER JOIN doctor ON favourite.doctor_id = doctor.doctor_id
    INNER JOIN qualification ON favourite.doctor_id = qualification.doctor_id
    INNER JOIN location ON favourite.doctor_id = location.doctor_id 
    INNER JOIN appointment ON favourite.doctor_id = appointment.doctor_id 
    INNER JOIN review ON favourite.doctor_id = review.doctor_id WHERE favourite.patient_id = $1`
    try {
        const result = await pool.query(getFavouritesQuery, [patient_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

const removeFavourites = async (req, res) => {
    const patient_id = Number(req.params.id)
    const removeFavouritesQuery = `DELETE FROM favourite WHERE favourite.patient_id = $1`
    try {
        const result = await pool.query(removeFavouritesQuery, [patient_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

module.exports = {getFavourites, removeFavourites}