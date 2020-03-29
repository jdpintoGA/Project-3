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
  // we try to login with the email and the password
  User
    // find the user by using the email they're trying to login with
    .findOne({ email: req.body.email })
    .then(user => {

      const errorMsg = { message: 'Invalid username or password' }

      if (!user){
        return res.status(401).send(errorMsg)

      }

      if (!user.validatePassword(req.body.password)) {
        console.log('unauthorized')
        return res.status(401).send(errorMsg)
      }
      // at this point, we know the user is valid, we have their email,
      // and the password they're logging in with matches the password
      // we've stored for them.

      // Using jwt to create a token for me
      // ---
      // sub contains the user id
      // secret is a string only we know
      // expiresIn says how the token will be valid for
      console.log('creating token')
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      res.status(202).send({ message: `Welcome back ${user.username}`, token })
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error)
    })
}

module.exports = {
  register,
  login
}
