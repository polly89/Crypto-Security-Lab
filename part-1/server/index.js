const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    login,
    register
} = require('../server/controllers/auth')

app.post(`/api/login`, login)
app.post(`/api/register`, register)

app.listen(4005, () => console.log(`running on 4005`))