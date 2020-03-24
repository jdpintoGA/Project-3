// secureRoute will check the users token is valid, and retrieve the user
// from the database

const User = require('../models/user')
const { secret } = require('../config/environment')
const jwt = require('jsonwebtoken')

// THis will get run every time a user hits a private route
// POST, PUT, and DELETE
function secureRoute(req, res, next) {
  // gets the token from our request header
  const authToken = req.headers.authorization

  if (!authToken || !authToken.startsWith('Bearer')) {
    // If we're in here, we know that there's no valid token present
    return res.status(401).send({ message: 'Unauthorized ' })
  }

  // At this point, we have the token, its not obviously wrong, but we need
  // to get with jwt if its valid properly
  const token = authToken.replace('Bearer ', '')

  // Verify our token, its async, payload will have our token data
  jwt.verify(token, secret, (err, payload) => {
    // If this failed, unauthorized
    if (err) return res.status(401).send({ message: 'Unauthorized' })
    User
      // payload.sub is just the user Id we stored on the token
      .findById(payload.sub)
      .then(user => {
        // If there's no user, unauthorized.
        if (!user) return res.status(401).send({ message: 'Unauthorized' })
        // We now have our user.
        // Attach our user to our request, so that our routes can access the user
        req.currentUser = user
        // Finish this middleware, let express know we're done
        next()
      })
      .catch(() => res.status(401).send({ message: 'Unauthorized' }))
  })
}

module.exports = secureRoute
