const pool = require('../../db.config')

const getProfile = async (req, res) => {
    const doctor_id = Number(req.params.id)
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
    const register_id = Number(req.params.id)
    const setProfileQuery = `INSERT INTO doctor(first_name, last_name, phone_number, home_address, gender, 
    date_of_birth, city, register_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)` 
    try {
        const {first_name, last_name, phone_number, home_address, gender, date_of_birth, city} = req.body
        const result = await pool.query(setProfileQuery, [first_name, last_name, phone_number, home_address, gender, date_of_birth, city, register_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

const updateProfile = async (req, res) => {
    const doctor_id = Number(req.params.id)
    const setProfileQuery = `UPDATE doctor SET first_name = $1,
    last_name = $2, phone_number = $3, home_address = $4, gender = $5, date_of_birth = $6, city = $7
    WHERE doctor_id = $8 ON CONFLICT DO NOTHING`
    try {
        const {first_name, last_name, phone_number, home_address, gender, date_of_birth, city} = req.body
        const result = await pool.query(setProfileQuery, [first_name, last_name, phone_number, home_address, gender, date_of_birth, city, doctor_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

module.exports = {getProfile, setProfile, updateProfile}