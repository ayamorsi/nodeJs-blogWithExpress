const http = require('http')

const server = http.createServer()

server.on('request', (request, response) => {
    response.end("hello world")
})

server.listen(5000, (err) => {
    if(!err) return console.log('started server on port 5000')
    console.log(err)
})