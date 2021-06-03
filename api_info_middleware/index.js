const express = require('express')
const app = express()

const dotenv = require('dotenv');

const router = require('./router/router')


app.use(express.urlencoded({ extended: false }))
app.use('/', router)
app.listen(3000)