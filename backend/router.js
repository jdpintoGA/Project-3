const router = require('express').Router()
const eventController = require('./controllers/eventController')
const userController = require('./controllers/userController')

const secureRoute = require('./lib/secureRoute')

router
  .route('/hub')
  // Find all our events(events displayed will be the ones locally) (asynchronous!) and send them back when done
  .get(eventController.index)
  // Create our new event (locally)
  .post(secureRoute, eventController.createEvent)

router
  .route('/event/:id')
  // Return a single Event (local database && FaceIt Database)
  .get(eventController.find)

  // Delete our Local Events (from local database, not FaceIt)
  .delete(secureRoute, eventController.singleDelete)

  // Edit a Local Event (from local database, not FaceIt)
  .put(secureRoute, eventController.edit)

router.route('/register').post(userController.register)

router.route('/login').post(userController.login)

router.route('/users').get(userController.index)

module.exports = router
