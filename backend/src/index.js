const express  = require('express')
const mongoose = require('mongoose')
const cors     = require('cors')
const routes   = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://omnistack:omnistack20@cluster0-rwyzk.mongodb.net/week10?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors()) 
app.use(express.json())
app.use(routes)

app.listen(3333)