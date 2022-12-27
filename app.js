const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.DEV_PORT

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})