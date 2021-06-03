const moment = require('moment');

function infoMiddleware(req, res, next){
    console.log('Request Method: ' + req.method)
    console.log('Request Url: ' + req.url)
    console.log('Time: ' + moment().format())
    next()
}

module.exports = infoMiddleware