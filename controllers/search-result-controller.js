const pool = require('../db.config')


const getDoctorData = async (req, res) => {
    const searchParameter = req.query
    const searchQuery = `SELECT
	doctor.first_name,
    doctor.last_name,
    qualification.education,
    qualification.sepecialization,
    doctor.image,
    doctor.city,
    review.rating,
    appointment.payment,
    location.location_name
FROM
	doctor
INNER JOIN qualification ON qualification.doctor_id = doctor.doctor_id
INNER JOIN review ON review.doctor_id = doctor.doctor_id
INNER JOIN location ON location.doctor_id = doctor.doctor_id
INNER JOIN appointment ON appointment.doctor_id = doctor.doctor_id
WHERE
	qualification.specialization = $1 OR doctor.first_name = $1;
    ORDER BY $1`
}
try{
    const result = await pool.query(searchQuery,[searchParameter])
    if(result.rows > 0){
        res.status(200).json(result.rows)
    }
    else{
        res.status(404).json({message:`No Search Result Found..`})
    }
}catch(error){
    throw error
}






module.exports = {getDoctorData}