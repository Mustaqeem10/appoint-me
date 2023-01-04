const pool = require('../../db.config')

const updatePassword = async (req, res) => {
    const doctor_id = 1
    const oldPasswordQuery = `SELECT password FROM register INNER JOIN doctor ON 
    register.register_id = doctor.register_id WHERE doctor_id = $1`
    const updatePasswordQuery = `UPDATE register SET password = $1,
    INNER JOIN doctor ON register.register_id = doctor.doctor_id
    WHERE doctor_id = $2`
    try {
        const {old_password, new_password, confirm_password} = req.body
        const oldPassword = await pool.query(oldPasswordQuery, [doctor_id])
        if (old_password == oldPassword.password){
            if (new_password == confirm_password){
                const result = await pool.query(updatePasswordQuery, [new_password, doctor_id])
                res.status(200).json(result.rows)
            }
            else {
                res.status(404).json({message: `New and confirm password do not match`})
            }
        }
        else {
            res.status(404).json({message: `Old password do not match`})
        }
    }
    catch(error) {
        console.error(error)
    }
}

module.exports = updatePassword