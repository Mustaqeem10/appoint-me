const express = require('express')
const app = express()

require('dotenv').config()

app.use(express.json())

const doctorRoutes = require('./routes/doctor')
app.use('/doctor', doctorRoutes)

const patientRoutes = require('./routes/patient')
app.use('/patient', patientRoutes)

const PORT = process.env.DEV_PORT

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})