var mongoose = require('mongoose')
var config = require('../../config')

mongoose.connect(config.db.db_uri, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.db.db_uri, err.message)
    process.exit(1)
  }
})


module.exports.mongoose = mongoose

