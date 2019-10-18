require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// connect to database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',(on)=>console.log('Connected to Database'))

app.use(express.json())

const subscriberRouter = require('./routes/subscribers')

app.use('/subscribers', subscriberRouter)

app.listen(3000,()=> console.log('Server started'))