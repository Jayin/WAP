#!/usr/bin/env coffee
mongoose = require 'mongoose'
Schema = mongoose.Schema

db_uri = 'mongodb://127.0.0.1/wapdb'

mongoose.connect db_uri, (err)->
  if err
    console.error('connect to %s error: ', config.db.db_uri, err.message)
    process.exit(1)

    console.log 'mongoose connect ok'



WebsiteSchema = mongoose.Schema({
    domain: {type: String,required: true},
    app_key: {type: String,required: true}, #16位
    create_time: {type:Date, default: Date.now}
})

Website = mongoose.model('Website', WebsiteSchema)
website = new Website({
    _id: '555b2059e365c79f8f140287'
    domain: 'test.wap.com',
    app_key: require('crypto').randomBytes(16).toString('hex')
    create_time: 1432040689711
})

website.save (err, result)->
    if err
        return console.log err.message
    console.log result

    # exit
    process.exit(1)




