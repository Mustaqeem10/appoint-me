const pool = require('../../db.config')

const getMedicalDetails = async (req, res) => {
    const patient_id = Number(req.params.id)
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

const addMedicalDetails = async (req, res) => {
    const patient_id = Number(req.params.id)
    const addMedicalDetailsQuery = `INSERT INTO medical-details(BMI, heart_rate, weight, patient_id) 
    VALUES = $1, $2, $3, $4`
    try {
        const {BMI, heart_rate, weight} = req.body
        const result = await pool.query(addMedicalDetailsQuery, [BMI, heart_rate, weight, patient_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}


const updateMedicalDetails = async (req, res) => {
    const medical_details_id = Number(req.params.id)
    const updateMedicalDetailsQuery = `UPDATE medical-details SET BMI = $1,
    heart_rate = $2, weight = $3
    WHERE medical_details_id = $4`
    try {
        const {BMI, heart_rate, weight} = req.body
        const result = await pool.query(updateMedicalDetailsQuery, [BMI, heart_rate, weight, medical_details_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

const deleteMedicalDetails = async (req, res) => {
    const medical_details_id = Number(req.params.id)
    const deleteMedicalDetailsQuery = `DELTE FROM medical-details WHERE medical_details_id = $1`
    try {
        const {BMI, heart_rate, weight} = req.body
        const result = await pool.query(deleteMedicalDetailsQuery, [medical_details_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

module.exports = {getMedicalDetails, addMedicalDetails, updateMedicalDetails, deleteMedicalDetails}