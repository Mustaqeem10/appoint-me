const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATBASE,
  password: 'password',
  port: process.env.PORT,
})
module.exports = pool