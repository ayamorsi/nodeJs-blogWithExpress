//log date time , request method ,request url ==> pass control route handler

function log(req, res, next) {
    console.log(new Date(), req.method, req.url)
    next()
}

module.exports = log