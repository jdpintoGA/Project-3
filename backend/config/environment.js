const port = process.env.PORT || 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/events-db'

const secret = 'thisSecretIsSuperTrashButItWillBeOkForNow'

module.exports = {
  secret,
  port,
  dbURI
}
