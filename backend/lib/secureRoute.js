const User = require('../models/user')

const { secret } = require('../config/environment')
const jwt = require('jsonwebtoken')

function secureRoute(req, res, next) {
  const authToken = req.headers.authorization

  if (!authToken || !authToken.startsWith('Bearer')) {
    return res.status(401).send({ message: 'Unauthorized ' })
  }

  const token = authToken.replace('Bearer ', '')
  jwt.verify(token, secret, (err, payload) => {
    if (err) return res.status(401).send({ message: 'Unauthorized' })

    User.findById(payload.sub)
      .then(user => {
        // If there's no user exists with the user.id, token expired
        if (!user)
          return res.status(401).send({ message: 'Please login again' })
        req.currentUser = user
        next() // Finish this middleware, let express know we're done
      })
      .catch(() => res.status(401).send({ message: 'Unauthorized, error 401' }))
  })
}

module.exports = secureRoute
