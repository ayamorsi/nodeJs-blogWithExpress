
function logRequestBody(req, res, next) {
    console.log("request body", req.body)
    next()
}

module.exports = logRequestBody