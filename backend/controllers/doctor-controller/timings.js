const pool = require('../../db.config')

const getTimings = async (req, res) => {
    const doctor_id = Number(req.params.id)
    const getTimingsQuery = `SELECT appointment_days, start_time, end_time FROM appointment 
    WHERE doctor_id = $1`
    try {
        const result = await pool.query(getTimingsQuery, [doctor_id])
        res.status(200).json(result.rows)
    }
    catch (error) {
        console.error(error)
    }
}

const setTimings = async (req, res) => {
    const doctor_id = Number(req.params.id)

    const setTimingsQuery = `INSERT INTO appointment (appointment_days, start_time, end_time, payment, doctor_id)
    VALUES ($1, $2, $3, $4, $5)`
    try {
        const { appointment_days, start_time, end_time, payment } = req.body
        const result = await pool.query(setTimingsQuery, [appointment_days, start_time, end_time, payment, doctor_id])
        res.status(200).json(result.rows)
    }
    catch (error) {
        console.error(error)
    }
}

const updateTimings = async (req, res) => {
    console.log(req.url)
    const appointment_id = Number(req.params.id) 
   
    const updateTimingsQuery = `UPDATE appointment SET appointment_days = $1, start_time = $2, end_time = $3,
    payment = $4 WHERE appointment_id = $5`
    try {
        console.log(req.params)
        console.log(req.body)
        const { appointment_days, start_time, end_time, payment } = req.body
        const result = await pool.query(updateTimingsQuery, [appointment_days, start_time, end_time, payment, appointment_id])
        res.status(200).json(result)
    }
    catch (error) {
        console.error(error)
    }
}

const deleteTimings = async (req, res) => {
    const appointment_id = Number(req.params.id)
    const deleteTimingsQuery = `DELETE FROM appointment WHERE appointment_id = $1`
    try {
        const result = await pool.query(deleteTimingsQuery, [appointment_id])
        res.status(200).json(result.rows)
    }
    catch (error) {
        console.error(error)
    }
}

module.exports = { getTimings, setTimings, updateTimings, deleteTimings }