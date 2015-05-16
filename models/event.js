var mongoose = require('./index').mongoose
var Schema = mongoose.Schema

var EventSchema = mongoose.Schema({
    category: {type: String,required: true},
    action: {type: String,required: true},
    create_time: {type:Date, default: Date.now},
    opt_label: String,
    opt_value: Number
})

module.exports = mongoose.model('Event', EventSchema)