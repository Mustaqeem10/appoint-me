const pool = require('../db.config')

const getStats = async (req, res) => {
    const doctor_id = 1
    const getStatsQuery = `SELECT DISTINCT patient_id,COUNT(*), SUM(payment) FROM booking 
    INNER JOIN appointment ON booking.appointment_id = appointment.appointment_id WHERE 
    appointment.doctor_id = 1`
    try {
        const result = await pool.query(getStatsQuery, [doctor_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

module.exports = getStats