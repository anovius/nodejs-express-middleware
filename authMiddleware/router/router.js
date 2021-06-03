const express = require('express')
const router = express.Router()
const jsonwebtoken = require('jsonwebtoken')
const authUser = require('../middlewares/authUser')


router.post('/login/:username', authUser, (req, res) => {
    const {username} = req.params
    var token = jsonwebtoken.sign({user: username}, 'shhhhh')
    res.status(200).send({token: token})
})

router.get('/info', authUser, (req, res) => {
    res.status(200).send("Some Sensitive Data")
})

module.exports = router