// import, create a new instance of router
const router = require('express').Router()
const eventController = require('./controllers/eventController')
const userController = require('./controllers/userController')
// import secure route, for members only / private routes
// I add this in front of each secure route to activate that middleware

const secureRoute = require('./lib/secureRoute')
router
  .route('/events')
  // Find all our events(events displayed will be the ones locally) (asynchronous!) and send them back when done
  .get(eventController.index)
  // Create our new event (locally)
  .post(secureRoute, eventController.create)
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

module.exports = router
