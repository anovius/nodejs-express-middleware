const moment = require('moment');

function timeMiddleware(req, res, next){
    console.log('Request Method: ' + req.method)
    console.log('Time: ' + moment().format())
    next()
}

module.exports = timeMiddleware