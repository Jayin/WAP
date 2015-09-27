var mongoose = require('./index').mongoose
var Schema = mongoose.Schema

var RecordSchema = mongoose.Schema({
    website_id: {type: String, required: true, default: '0'},
    user_agent: {type: String, required: true},
    referer: {type: String, required: true},
    ip: {type: String, required: true},
    create_time: {type:Date, default: Date.now}
})


module.exports = mongoose.model('Record', RecordSchema)