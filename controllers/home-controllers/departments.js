const pool = require('../../db.config')

const getDepartments = async (req, res) => {
    const getDepartmentsQuery = `SELECT DISTINCT specialization FROM qualification LIMIT 5`
    try {
        const result = await pool.query(getDepartmentsQuery)
        res.status(200).json(result.rows)
    }
    catch (error) {
        console.error(error)
    }
}

module.exports = getDepartments