const EventModel = require('../models/eventModel')

function index(req, res) {
  
  EventModel.find()
    .populate('user')
    .then(event => {
      res.send(event)
    })
}

function createEvent(req, res) {

  req.body.user = req.currentUser
  EventModel.create(req.body)
    .then(event => {
      res.status(201).send(event)
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error)
    })
}

function find(req, res) {

  const id = req.params.id
  EventModel.findById(id).then(event => {
    res.send(event)
  })
}

function singleDelete(req, res) {

  const currentUser = req.currentUser
  const id = req.params.id
  EventModel.findById(id)
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

  const currentUser = req.currentUser
  const id = req.params.id
  EventModel.findById(id)
    .then(event => {
      return event.set(req.body)
    })
    .then(event => {
      if (!event.user.equals(currentUser._id))
        return res.status(401).send({
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
  createEvent,
  find,
  singleDelete,
  edit
}
