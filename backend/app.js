const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

require('dotenv').config()

app.use(express.json())

const doctorRoutes = require('./routes/doctor')
app.use('/api/doctor', doctorRoutes)

const patientRoutes = require('./routes/patient')
app.use('/api/patient', patientRoutes)

const PORT = process.env.DEV_PORT

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})