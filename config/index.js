var fs = require('fs')

var config = {}

fs.readdirSync(__dirname).forEach(function(name){
    if (name.indexOf('.config.js') != -1){
        var key = name.substring(0, name.indexOf('.config.js'))
        config[key] = require(__dirname + '/' +name)
    }
})

module.exports = config
