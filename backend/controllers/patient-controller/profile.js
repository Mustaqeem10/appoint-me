const pool = require('../../db.config')

const getProfile = async (req, res) => {
    const patient_id = Number(req.params.id)
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
    const register_id = Number(req.params.id)
    const setProfileQuery = `INSERT INTO patient(first_name, last_name, phone_number, home_address, 
    gender, date_of_birth, blood_group, city, register_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)` 
    try {
        const {first_name, last_name, phone_number, home_address, gender, date_of_birth, blood_group, city} = req.body
        const result = await pool.query(setProfileQuery, [first_name, last_name, phone_number, home_address, gender, date_of_birth, blood_group, city, register_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

const updateProfile = async (req, res) => {
    const patient_id = Number(req.params.id)
    const updateProfileQuery = `UPDATE patient SET first_name = $1, last_name = $2, phone_number = $3, 
    home_address = $5, gender = $4, date_of_birth = $5, blood_group = $6,
    city = $7 WHERE patient_id = $8`
    try {
        const {first_name, last_name, phone_number, home_address, gender, date_of_birth, blood_group, city} = req.body
        const result = await pool.query(updateProfileQuery, [first_name, last_name, phone_number, home_address, gender, date_of_birth, blood_group, city, patient_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

module.exports = {getProfile, setProfile, updateProfile}