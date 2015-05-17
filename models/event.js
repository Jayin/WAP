var mongoose = require('./index').mongoose
var Schema = mongoose.Schema

var EventSchema = mongoose.Schema({
    website_id: {type: String, required: true, default: '0'},
    category: {type: String, required: true},
    action: {type: String, required: true},
    create_time: {type:Date, default: Date.now},
    opt_label: String,
    opt_value: Number
})

EventSchema.virtual('id').get(function(){
    console.log(this._id)
    return this._id
})

module.exports = mongoose.model('Event', EventSchema)