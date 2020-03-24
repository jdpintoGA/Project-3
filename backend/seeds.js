const mongoose = require('mongoose')
const Event = require('./models/eventModel')
const dbURI = 'mongodb://localhost/events-db'

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (error, db) => {
    if (error) {
      return console.log(error)
    }
    console.log('Successfully connected to mongo!')
    db.dropDatabase()
      .then(() => {
        return Event.create([
          {
            eventName: 'Best eF1 tournament',
            eventType: 'Remote',
            eventDescription: 'Race Simulator',
            platform: 'Steam',
            date: 19042020,
            userName: 'BabumbaBab'
          },
          {
            eventName: 'Best FIFA 2020',
            eventType: 'Remote',
            eventDescription: 'FIFA Simulator',
            platform: 'PC',
            date: 21052020,
            userName: 'BabumbaBab'
          },
          {
            eventName: 'Best FIFA 2019',
            eventType: 'Remote',
            eventDescription: 'FIFA Simulator',
            platform: 'xbox',
            date: 14042020,
            userName: 'HydrAKZR'
          },
          {
            eventName: 'LoL 2 Death Tournament',
            eventType: 'Remote',
            eventDescription: 'MOBA',
            platform: 'PC',
            date: 11042020,
            userName: 'HydrAKZR'
          }
        ])
      })
      .then(events => console.log(`${'🎮'.repeat(events.length)} created`))
      .then(() => console.log('Goodbye!'))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)