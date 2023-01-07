const pool = require('../../db.config')

const getProfile = async (req, res) => {
    const patient_id = 1
    const getProfileQuery = `SELECT first_name, last_name, phone_number, gender, date_of_birth
    FROM patient WHERE patient_id = $1`
    try {
        const result = await pool.query(getProfileQuery, [patient_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

const setProfile = async (req, res) => {
    const setProfileQuery = `INSERT INTO patient(first_name, last_name, phone_number, gender, date_of_birth)
    VALUES ($1, $2, $3, $4, $5)` 
    try {
        const {first_name, last_name, phone_number, gender, date_of_birth} = req.body
        const result = await pool.query(setProfileQuery, [first_name, last_name, phone_number, gender, date_of_birth])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

const updateProfile = async (req, res) => {
    const patient_id = 1
    const updateProfileQuery = `UPDATE patient SET first_name = $1,
    last_name = $2, phone_number = $3, gender = $4, date_of_birth = $5
    WHERE patient_id = $6`
    try {
        const {first_name, last_name, phone_number, gender, date_of_birth} = req.body
        const result = await pool.query(updateProfileQuery, [first_name, last_name, phone_number, gender, date_of_birth, patient_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

module.exports = {getProfile, setProfile, updateProfile}