const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res) {
  User.create(req.body)
    .then(user => {
      res.status(201).send(user)
    })
    .catch(error => res.send(error))
}

function login(req, res) {
  // we try to login with the email and the password
  User
    // find the user by using the email they're trying to login with
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user.validatePassword(req.body.password)) {
        return res.status(401).send({ message: 'Password is incorrect' })
      }
      // at this point, we know the user is valid, we have their email,
      // and the password they're logging in with matches the password
      // we've stored for them.

      // Using jwt to create a token for me
      // ---
      // sub contains the user id
      // secret is a string only we know
      // expiresIn says how the token will be valid for
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      res.status(202).send({ message: `Welcome back ${user.username}`, token })
    })
    .catch(error => res.send(error))
}

module.exports = {
  register,
  login
}
