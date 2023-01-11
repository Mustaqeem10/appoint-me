
const pool = require('../db.config')

const getProfile = async (req,res)=>{
    const getProfileQuery = `SELECT first_name,last_name,image,education,specialization,rating,location_name`

}