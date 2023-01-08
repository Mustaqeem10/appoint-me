const pool = require('../../db.config')

const updatePassword = async (req, res) => {
    const patient_id = Number(req.params.id)
    const oldPasswordQuery = `SELECT register.register_id, password FROM register INNER JOIN patient ON 
    register.register_id = patient.register_id WHERE patient_id = $1`
    const updatePasswordQuery = `UPDATE register SET password = $1,
    WHERE register.register_id = $2`
    try {
        const {old_password, new_password, confirm_password} = req.body
        const result = await pool.query(oldPasswordQuery, [patient_id])
        if (old_password == result.rows[0].password){
            if (new_password == confirm_password){
                const register_id = result.rows[0].register_id
                const update = await pool.query(updatePasswordQuery, [new_password, register_id])
                res.status(200).json({message: `Password updated successfully`})
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