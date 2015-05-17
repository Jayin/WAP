var mongoose = require('./index').mongoose
var Schema = mongoose.Schema

var WebsiteSchema = mongoose.Schema({
    domain: {type: String,required: true},
    app_key: {type: String,required: true}, //16位
    create_time: {type:Date, default: Date.now}
})

WebsiteSchema.statics.create = function(data, cb){
    var Website = mongoose.model('Website', WebsiteSchema)
    var website = new Website({
        domain: data.domain,
        app_key: require('crypto').randomBytes(16).toString('hex')
    })
    website.save(cb)
}

module.exports = mongoose.model('Website', WebsiteSchema)