const router = require('express').Router()
const eventController = require('./controllers/eventController')
const userController = require('./controllers/userController')

const secureRoute = require('./lib/secureRoute')

router
  .route('/events')
  .get(eventController.index)
  .post(secureRoute, eventController.createEvent)

router
  .route('/event/:id')
  .get(eventController.find)
  .delete(secureRoute, eventController.singleDelete)
  .put(secureRoute, eventController.edit)

router.route('/register').post(userController.register)

router.route('/login').post(userController.login)

router.route('/users').get(userController.index)

module.exports = router
