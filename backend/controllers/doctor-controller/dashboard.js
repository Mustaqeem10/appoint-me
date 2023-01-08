const pool = require('../../db.config')

const getStats = async (req, res) => {
    const doctor_id = Number(req.params.id)
    const getDoctorData = `SELECT doctor.first_name, doctor.last_name, image, education, specialization FROM doctor 
    INNER JOIN qualification ON doctor.doctor_id = qualification.doctor_id
    WHERE doctor.doctor_id = $1`
    const date = new Date()
    const current_date = `${date.getFullYear()}-${(date.getMonth()+1)}-${date.getDate()}`
    const getAppointmentData = `SELECT patient.first_name FROM patient INNER JOIN booking ON 
    booking.patient_id = patient.patient_Id INNER JOIN appointment ON 
    booking.appointment_id = appointment.appointment_id WHERE appointment.doctor_id = $1 AND 
    booking_date = $2 `
    const getStatsQuery = `SELECT COUNT(DISTINCT patient_id) AS total_patients, COUNT(*) AS total_appointments, SUM(payment) FROM booking 
    INNER JOIN appointment ON booking.appointment_id = appointment.appointment_id
    WHERE appointment.doctor_id = $1`
    try {
        const doctorData = await pool.query(getDoctorData, [doctor_id])
        const appointmentData =  await pool.query(getAppointmentData, [doctor_id, current_date])
        const stats = await pool.query(getStatsQuery, [doctor_id])
        res.status(200).json({doctor: doctorData.rows, appointment: appointmentData.rows, stats: stats.rows})
    }
    catch(error) {
        console.error(error)
    }
}

module.exports = getStats