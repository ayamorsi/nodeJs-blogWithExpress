const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')
const log = require('./middlewares/log')
const logRequestBody = require("./middlewares/logRequestBody")

const PORT = process.env.PORT || 8000
mongoose.connect('mongodb://localhost:27017/node-blog' ,
{
    useNewUrlParser: true, 
    useUnifiedTopology: true ,
    useCreateIndex: true,
},
(err) => {
    if(!err) return console.log("database connesction started")
    console.log(err)
})

//to create express server
const app = express()

app.use(express.json())
app.use(log)
app.use(logRequestBody)
app.use('/users', userRouter)
app.use('/posts', postRouter)



app.listen(PORT, (err) => {
    if(!err) return console.log(`started server on port ${PORT}`)
    console.log(err)
})