const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res) {
  console.log(req)
  User.create(req.body)
    .then(user => {
      console.log(user)
      res.status(201).send(user)
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error)
    })
}

function login(req, res) {
  console.log('login')
  console.log(req.body)

  User
    .findOne({ email: req.body.email })
    .then(user => {
      const errorMsg = { message: 'Invalid email or password' }

      if (!user) {
        return res.status(401).send(errorMsg)
      }

      if (!user.validatePassword(req.body.password)) {
        console.log('unauthorized')
        return res.status(401).send(errorMsg)
      }
      
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      res.status(202).send({ message: `Welcome back ${user.username}`, token })
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error)
    })
}

function index(req, res) {
  
  User.find().then(user => {
    res.send(user)
  })
}

module.exports = {
  register,
  login,
  index
}
