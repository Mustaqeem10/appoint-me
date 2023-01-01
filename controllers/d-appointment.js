const pool = require('../db.config')

const getAppointments = async (req, res) => {
    const doctor_id = 1
    const getAppointmentsQuery = `SELECT first_name, last_name, booking_time, city, email_address, phone_number FROM 
    patient INNER JOIN booking on patient.patient_id = booking.patient_id
    INNER JOIN register ON patient.register_id = register.register_id
    INNER JOIN appointment ON booking.appointment_id = appointment.appointment_id
    WHERE appointment.doctor_id = $1`
    try {
        const result = await pool.query(getAppointmentsQuery, [doctor_id])
        res.status(200).json(result.rows)
    }
    catch(error) {
        console.error(error)
    }
}

module.exports = getAppointments