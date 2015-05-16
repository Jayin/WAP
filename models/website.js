var mongoose = require('./index').mongoose
var Schema = mongoose.Schema

var WebsiteSchema = mongoose.Schema({
    domain: {type: String,required: true},
    app_key: {type: String,required: true},
    create_time: {type:Date, default: Date.now}
})

module.exports = mongoose.model('Website', WebsiteSchema)