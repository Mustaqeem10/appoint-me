const pool = require('../../db.config')

const getProfile = async (req, res) => {
    const doctor_id = 1
    const getProfileQuery = `SELECT first_name, last_name, phone_number, gender, date_of_birth
    FROM doctor WHERE doctor_id = $1`
    try {
        const result = await pool.query(getProfileQuery, [doctor_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

const setProfile = async (req, res) => {
    const doctor_id = 1
    const setProfileQuery = `UPDATE doctor SET first_name = $1,
    last_name = $2, phone_number = $3, gender = $4, date_of_birth = $5
    WHERE doctor_id = $6`
    try {
        const {first_name, last_name, phone_number, gender, date_of_birth} = req.body
        const result = await pool.query(setProfileQuery, [first_name, last_name, phone_number, gender, date_of_birth, doctor_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

module.exports = {getProfile, setProfile}