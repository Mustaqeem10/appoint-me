const pool = require('../../db.config')

const getStats = async (req, res) => {
    const patient_id = Number(req.params.id)
    const getStatsQuery = `SELECT doctor.first_name, doctor.last_name, booking_date, payment FROM booking
    INNER JOIN patient ON booking.patient_id = patient.patient_id 
    INNER JOIN appointment ON booking.appointment_id = appointment.appointment_id
    INNER JOIN doctor ON appointment.doctor_id = doctor.doctor_id WHERE 
    patient.patient_id = $1`
    try {
        const result = await pool.query(getStatsQuery, [patient_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

module.exports = getStats