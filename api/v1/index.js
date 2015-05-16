var express = require('express')
var router = express.Router()
var fs = require('fs')

//加载当前目录下所有 非index模块
fs.readdirSync(__dirname).forEach(function(filename){
    if (filename !== 'index.js'){
        var module_name = filename.substring(0, filename.lastIndexOf('.'))
        router.use('/' + module_name, require(__dirname + '/' + module_name))
    }
})


module.exports = router;

