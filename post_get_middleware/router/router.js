const express = require('express')
const router = express.Router()
const timeMiddleware = require('../middlewares/timeMiddleware')


//getRequest
router.get('/', timeMiddleware, (req, res) => {
    res.status(200).send({msg: 'got get request'})
})


//postRequest
router.post('/', timeMiddleware, (req, res) => {
    res.status(200).send({msg: 'got post request'})
})

module.exports = router