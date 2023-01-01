const pool = require('../db.config')

const getTimings = async (req, res) => {
    const doctor_id = 1
    const getTimingsQuery = `SELECT appointment_days, appointment_time FROM appointment 
    WHERE doctor_id = $1`
    try {
        const result = await pool.query(getTimingsQuery, [doctor_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

const setTimings = async (req, res) => {
    const doctor_id = 1
    
    const setTimingsQuery = `INSERT INTO appointment (appointment_days, appointment_time, doctor_id)
    VALUES ($1, $2, $3)`
    try {
        const {appointment_days, appointment_time} = req.body
        const result = await pool.query(setTimingsQuery, [appointment_days, appointment_time, doctor_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

module.exports = {getTimings, setTimings}