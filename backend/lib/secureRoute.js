const User = require('../models/user')
const { secret } = require('../config/environment')
const jwt = require('jsonwebtoken')

function secureRoute(req, res, next) {
  const authToken = req.headers.authorization
  if (!authToken || !authToken.startsWith('Bearer')) {
    //until this moment, no token acquired
    return res.status(401).send({ message: 'Unauthorized, invalid LogIn ' })
  }

  const token = authToken.replace('Bearer ', '')
  jwt.verify(token, secret, (err, payload) => {
    if (err) return res.status(402).send({ message: 'Login expired' })

    User.findById(payload.sub)
      .then(user => {
        // If there's no user with the user.id, the token is expired
        if (!user) return res.status(403).send({ message: 'No user was Found' })
        req.currentUser = user
        next() // Finish this middleware, let express know we're done
      })
      .catch(() =>
        res
          .status(404)
          .send({
            message: 'Unauthorized, Middleware did not go through, error 401'
          })
      )
  })
}

module.exports = secureRoute
