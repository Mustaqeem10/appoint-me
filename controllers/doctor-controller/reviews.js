const pool = require('../../db.config')

const getReviews = async (req, res) => {
    const doctor_id = 1
    const getTimingsQuery = `SELECT review_content, first_name, last_name, rating FROM review INNER JOIN patient
    ON review.patient_id = patient.patient_id WHERE doctor_id = $1`
    try {
        const result = await pool.query(getTimingsQuery, [doctor_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

module.exports = getReviews