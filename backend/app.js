const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./router')
mongoose.connect(
  'mongodb://localhost/events-db',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  // This tells us if we've successfully connected!
  err => {
    if (err) console.log(err)
    else console.log('Mongoose connected to events-db!')
  },
)

// Initialise our server
const expressServer = express()

// Include our bodyParser middleware
expressServer.use(bodyParser.json())

// Logging
expressServer.use((req, res, next) => {
  console.log(`Incoming ${req.method} to ${req.url}`)
  next()
})

expressServer.use('/api', router)

// Listen!
expressServer.listen(8000)
