const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.json())


const homeRoutes = require('./routes/home')
app.use('/', homeRoutes)

const PORT = process.env.DEV_PORT
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})