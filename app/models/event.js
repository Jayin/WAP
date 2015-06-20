var mongoose = require('./index').mongoose
var Schema = mongoose.Schema

var EventSchema = mongoose.Schema({
    website_id: {type: String, required: true, default: '0'},
    category: {type: String, required: true},
    action: {type: String, required: true},
    ip: {type: String, required: true},
    create_time: {type:Date, default: Date.now},
    opt_label: String,
    opt_value: Number
})

EventSchema.statics.create = function(data, cb){
    var Event = mongoose.model('Event', EventSchema)
    var event = new Event({
        website_id: data.website_id,
        category: data.category,
        action: data.action,
        ip: data.ip,
        opt_label: data.opt_label,
        opt_value: data.opt_value
    })
    event.save(cb)
}

module.exports = mongoose.model('Event', EventSchema)