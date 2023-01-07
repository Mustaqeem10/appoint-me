const pool = require('../../db.config')

const getMedicalDetails = async (req, res) => {
    const patient_id = 1
    const getMedicalDetailsQuery = `SELECT BMI, heart_rate, weight, order_date FROM medical-details
    WHERE patient_id = $1`
    try {
        const result = await pool.query(getMedicalDetailsQuery, [patient_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

const updateMedicalDetails = async (req, res) => {
    const patient_id = 1
    const updateMedicalDetailsQuery = `UPDATE medical-details SET BMI = $1,
    heart_rate = $2, weight = $3
    WHERE patient_id = $4`
    try {
        const {BMI, heart_rate, weight} = req.body
        const result = await pool.query(updateMedicalDetailsQuery, [BMI, heart_rate, weight, patient_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

const deleteMedicalDetails = async (req, res) => {
    const patient_id = 1
    const deleteMedicalDetailsQuery = `DELTE FROM medical-details WHERE patient_id = $1`
    try {
        const {BMI, heart_rate, weight} = req.body
        const result = await pool.query(deleteMedicalDetailsQuery, [patient_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

module.exports = {getMedicalDetails, updateMedicalDetails, deleteMedicalDetails}