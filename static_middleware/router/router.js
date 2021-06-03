const express = require('express')
const router = express.Router()
const static = require('../middlewares/static')

router.get('/file/:fileName', static, (req, res) => {
})

module.exports = router