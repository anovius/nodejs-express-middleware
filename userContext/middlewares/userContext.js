const loggedInUser = {name: 'admin', email: 'admin@info.com', role: 'administration'}

function userContext(req, res, next){
    req.body = loggedInUser
    next()
}

module.exports = userContext