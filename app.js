const express = require('express')
const router = require('./routes/search-result')
const app = express()

require('dotenv').config()

app.use(express.json())

app.use("/", router)

const PORT = process.env.DEV_PORT

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})