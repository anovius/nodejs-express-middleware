const express = require('express')
const router = express.Router()
const userContext = require('../middlewares/userContext')

router.get('/getUser', userContext, (req, res) => {
    const user = req.body
    res.status(200).send(user)
    res.end()
})

module.exports = router