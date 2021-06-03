const express = require('express')
const router = express.Router()
const infoMiddleware = require('../middlewares/infoMiddleware')
require('dotenv').config()

//getRequest
router.get('/', infoMiddleware, (req, res) => {
    res.status(200).send({msg: 'got get request'})
})
router.get('/getInfo', infoMiddleware, (req, res) => {
    res.status(302).send({user: process.env.DEVNAME, app: process.env.APPNAME, version: process.env.VERSION})
})

//postRequest
router.post('/', infoMiddleware, (req, res) => {
    res.status(200).send({msg: 'got post request'})
})

module.exports = router