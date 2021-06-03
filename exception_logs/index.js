const { EROFS } = require('constants');
const express = require('express')
const app = express()
const router = express.Router()
const fs = require('fs');
const moment = require('moment');
const { nextTick } = require('process');


router.get('/', (req, res, next) => {
    try{
        throw "this is an exception"
    }
    catch(e){
        next(e)
    }
})

router.get('/another', (req, res, next) => {
    throw new Error('this is an error')
})

app.use('/', router)

app.use((error, req, res, next)=>{
    var fileName = moment().format('DDMMYYYY hh:mm:ss a')
    fileName+='.log'
    fs.writeFileSync('./logs/'+fileName, error)
    res.status(500).send('error occur')
})
app.listen(3000)
