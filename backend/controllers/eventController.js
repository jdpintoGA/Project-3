const eventModel = require('../models/eventModel')

function index(req, res) {
  // Find all our event (asynchronous!) and send them back when done
  eventModel.find().then(event => {
    res.send(event)
  })
}

function create(req, res) {
  // Create our new event with the logged in user
  // secureRoute adds the currentUser to our request
  req.body.user = req.currentUser
  eventModel.create(req.body).then(event => {
    res.status(201).send(event)
  })
}

function find(req, res) {
  // Return a single event
  const id = req.params.id
  eventModel.findById(id).then(event => {
    res.send(event)
  })
}

function singleDelete(req, res) {
  // Delete our event
  const currentUser = req.currentUser
  const id = req.params.id
  eventModel
    .findById(id)
    .then(event => {
      if (!event.user.equals(currentUser._id))
        return res.status(401).send({
          message: 'Unauthorized, this Event was created by someone else.'
        })
      return event.remove()
    })
    .then(() => {
      res.sendStatus(204)
    })
}

function edit(req, res) {
  // Edit a(n) event
  const currentUser = req.currentUser
  const id = req.params.id
  eventModel
    .findById(id)
    .then(event => {
      return event.set(req.body)
    })
    .then(event => {
      if (!event.user.equals(currentUser._id))
        return res
          .status(401)
          .send({
            message: 'Unauthorized, this Event was created by someone else.'
          })
      return event.save()
    })
    .then(event => {
      res.status(202).send(event)
    })
}
module.exports = {
  index,
  create,
  find,
  singleDelete,
  edit
}
